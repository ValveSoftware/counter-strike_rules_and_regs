"use strict";

// Pad/truncate a string to a given length
function stringWithLength( s, n, padDirection = -1 )
{
	s = String( s );

	// check for strings that are short enough
	if( n < s.length )
		return s.substring( 0, n );
	else if( n == s.length )
		return s;

	// otherwise we need to pad.
	const extra = n - s.length;
	if( padDirection < 0 )
		return ' '.repeat( extra ) + s;
	else if( padDirection > 0 )
		return s + ' '.repeat( extra );

	// else center
	const left = Math.floor( extra / 2 );
	const right = extra - left;
	return [ ' '.repeat( left ), s, ' '.repeat( right) ].join('');
}

// Base class for table columns.  Has expansion points for 
// customizing sorting, printing, summaries, etc.
//
// Works by default for strings.
class Column
{
	constructor( name )
	{
		this.name = String( name );
		this.elems = [];

		this.minWidth = null;
		this.maxWidth = null;
		this.sortOrder = 1;
		this.padDirection = 1;	// left-justify

		this.width = null;
	}

	setMinWidth( w )
	{
		this.minWidth = w;
		return this;
	}

	setMaxWidth( w )
	{
		this.maxWidth = w;
		return this;
	}

	setReverseSort()
	{
		this.sortOrder = -1;
		return this;
	}

	setAlignLeft()
	{
		this.padDirection = 1;
		return this;
	}

	setAlignCenter()
	{
		this.padDirection = 0;
		return this;
	}

	setAlignRight()
	{
		this.padDirection = -1;
		return this;
	}

	addElem( elem )
	{
		const v = this.sanitize( elem );

		this.accumulateSummary( v );
		this.elems.push( v );
	}

	formatValue( val )
	{
		if( this.width === null )
			throw new Error( "must finalize() before getting data from column" );

		return stringWithLength( val, this.width, this.padDirection );
	}

	resultName()
	{
		return this.formatValue( this.name );
	}

	resultRow( idxRow )
	{
		return this.formatValue( this.elemString( this.elems[idxRow] ) );
	}

	resultSummary()
	{
		return this.formatValue( this.getSummary() );
	}

	// Sort the table by this column
	getSortOrder()
	{
		let ks = Array( ...this.elems.keys() );
		ks.sort( ( idxL, idxR ) => {
			return this.elemCompare( this.elems[idxL], this.elems[idxR] ) * this.sortOrder;
		} );
		return ks;
	}

	// Calculate final column width
	finalize()
	{
		let maxWidth = this.minWidth;
		if( maxWidth === null )
			maxWidth = 0;

		if( maxWidth < this.name.length )
			maxWidth = this.name.length;

		for( const e of this.elems )
		{
			const elemLen = this.elemString( e ).length;
			if( maxWidth < elemLen )
				maxWidth = elemLen;
		}

		const summaryLen = this.getSummary().length;
		if( maxWidth < summaryLen )
			maxWidth = summaryLen;

		if( this.maxWidth !== null && maxWidth > this.maxWidth )
			maxWidth = this.maxWidth;

		this.width = maxWidth;
	}

	// Expansion point for overriding
	// Handle sorting.
	elemCompare( elemL, elemR )
	{
		return String( elemL ).localeCompare( String( elemR ) );
	}

	// Expansion point for overriding
	// A new element was added, validate it.
	sanitize( elem )
	{
		return String( elem );
	}

	// Expansion point for overriding
	// A new element was added, include it in the summary
	accumulateSummary( elem )
	{
	}

	// Expansion point for overriding
	// Return the string representation for the summary row.
	getSummary()
	{
		return '';
	}

	// Expansion point for overriding
	// Return the string representation of this element
	elemString( elem )
	{
		return String( elem );
	}
}

// Numeric columns
class NumericColumn extends Column
{
	constructor( name )
	{
		super( name );
		this.precision = null;
		this.summaryPrecision = null;
		this.setAlignRight();
	}

	setPrecision( digits )
	{
		this.precision = digits;
		return this;
	}
	
	setSummaryPrecision( digits )
	{
		this.summaryPrecision = digits;
		return this;
	}

	setSummarySum()
	{
		this.accum = 0;
		this.accumulateSummary = function accumulateSum( elem ) {
			this.accum = this.accum + elem;
		};
		this.getSummary = function getSum() {
			return this.summaryString( this.accum );
		};
		return this;
	}

	setSummaryMax()
	{
		this.accum = -Infinity;
		this.accumulateSummary = function accumulateMax( elem ) {
			this.accum = Math.max( this.accum, elem );
		};
		this.getSummary = function getMax() {
			return (this.accum == -Infinity) ? '' : this.summaryString( this.accum );
		};
		return this;
	}

	setSummaryAvg()
	{
		this.accum = 0;
		this.accumCount = 0;
		this.accumulateSummary = function accumulateAvg( elem ) {
			this.accum = this.accum + elem;
			++this.accumCount;
		}
		this.getSummary = function getAvg() {
			return (this.accumCount == 0) ? '' : this.summaryString( this.accum / this.accumCount );
		}
		return this;
	}

	elemCompare( elemL, elemR )
	{
		return elemL - elemR;
	}

	sanitize( elem )
	{
		return Number( elem );
	}

	elemString( elem )
	{
		if( this.precision !== null )
			return elem.toFixed( this.precision );
		else
			return String( elem );
	}

	summaryString( elem )
	{
		if( this.summaryPrecision !== null )
			return elem.toFixed( this.summaryPrecision );
		else
			return this.elemString( elem );
	}
}

class Table
{
	static Column = Column;
	static NumericColumn = NumericColumn;

	constructor()
	{
		this.columns = [];
		this.sortColumn = null;
		this.rowLength = null;
	}

	addColumnObject( col )
	{
		if( this.rowLength !== null )
			throw new Error( "Adding a column after table has data." );

		this.columns.push( col );
		return col;
	}

	addColumn( name )
	{
		return this.addColumnObject( new Column( name ) );
	}

	addNumericColumn( name )
	{
		return this.addColumnObject( new NumericColumn( name ) );
	}

	sortOn( col )
	{
		this.sortColumn = col;
	}

	addElem( data )
	{
		if( this.rowLength === null )
			this.rowLength = 0;

		if( this.rowLength >= this.columns.length )
			throw new Error( "Adding more data elements to a row than we have columns" );

		this.columns[this.rowLength].addElem( data );
		++this.rowLength;
	}

	commitRow()
	{
		if( this.rowLength != this.columns.length )
			throw new Error( "Committing a row without filling all columns" );

		this.rowLength = 0;
	}

	generate()
	{
		if( this.columns.length == 0 )
			throw new Error( "Generating a table with no columns" );

		if( this.rowLength !== null && this.rowLength !== 0 )
			throw new Error( "Generating table with uncommitted row." );

		// Finalize column widths and summaries
		for( const col of this.columns )
		{
			col.finalize();
		}

		// Sort
		let order;
		if( this.sortColumn )
		{
			order = this.sortColumn.getSortOrder();
		}
		else
		{
			order = Array( ...this.columns[0].elems.keys() );
		}

		// Generate table
		let tableRows = [];
		for( const idxRow of order )
		{
			let row = [];
			for( const col of this.columns )
			{
				row.push( col.resultRow( idxRow ) );
			}
			tableRows.push( row );
		}

		// Generate header & summary
		let headerRow = [];
		let summaryRow = [];
		for( const col of this.columns )
		{
			headerRow.push( col.resultName() );
			summaryRow.push( col.resultSummary() );
		}

		return [headerRow, tableRows, summaryRow];
	}

	print()
	{
		let [headerRow, tableRows, summaryRow] = this.generate();

		// Build separator row
		let sepRowSplit = [];
		for( const col of this.columns )
		{
			sepRowSplit.push( '-'.repeat( col.width ) );
		}
		const sepRow = sepRowSplit.join( '-+-' );

		// Print table
		console.log( headerRow.join( ' | ' ) );
		console.log( sepRow );
		for( const row of tableRows )
		{
			console.log( row.join( ' | ' ) );
		}
		console.log( sepRow );
		console.log( summaryRow.join( ' | ' ) );
	}

	printMarkdown()
	{
		function markdownRow( arr ) {
			return ['| ', arr.join(' | '),' |'].join('');
		}

		// TODO: should probably escape markdown special characters.
		let [headerRow, tableRows, summaryRow] = this.generate();

		// Generate alignment/table-header row
		let sepRowSplit = [];
		for( const col of this.columns )
		{
			let headerSep;
			if( col.padDirection < 0 )
			{
				headerSep = '-:'; // right justified
			}
			else if( col.padDirection > 0 )
			{
				headerSep = ':-'; // left justified
			}
			else
			{
				headerSep = ':-:'; // centered
			}
			sepRowSplit.push( headerSep );
		}
		const sepRow = markdownRow( sepRowSplit );

		// Print table
		console.log( markdownRow( headerRow ) );
		console.log( sepRow );
		for( const row of tableRows )
		{
			console.log( markdownRow( row ) );
		}
	}

	printMarkdownToString()
	{
		function markdownRow( arr ) {
			return ['| ', arr.join(' | '),' |'].join('') + '\n';
		}

		// TODO: should probably escape markdown special characters.
		let [headerRow, tableRows, summaryRow] = this.generate();

		// Generate alignment/table-header row
		let sepRowSplit = [];
		for( const col of this.columns )
		{
			let headerSep;
			if( col.padDirection < 0 )
			{
				headerSep = '-:'; // right justified
			}
			else if( col.padDirection > 0 )
			{
				headerSep = ':-'; // left justified
			}
			else
			{
				headerSep = ':-:'; // centered
			}
			sepRowSplit.push( headerSep );
		}
		const sepRow = markdownRow( sepRowSplit );

		// Print table
		let output = '';

		output += markdownRow( headerRow );
		output += sepRow;
		for( const row of tableRows )
		{
			output += markdownRow( row );
		}

		return output;
	}
}

module.exports = Table;