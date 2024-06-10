### Roster Details<br />
Team Name: Sharks<br />
Roster: doc, drg, rdnzao, supLexN1, togs<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [128](../standings_global.md)<br />
Regional Rank: [32]( ../standings_americas.md)<br />
Final Rank Value:  757.2<br />
<br />
Final Rank Value (757.2) = Starting Rank Value (755.7) + Head To Head Adjustments (1.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.392[<sup>1</sup>](#table2)
- Bounty Collected: 0.273[<sup>2</sup>](#table1)
- Opponent Network: 0.049[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.178<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 755.7
- 400 + ( ( 0.178 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 755.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     1363 | 2024-04-26 | TYLOO    | L   | 0.900      | -            | -                | -                | -         |   -11.63 | doc, drg, rdnzao, supLexN1, togs  |
|           14 |     1395 | 2024-04-25 | M80      | L   | 0.893      | -            | -                | -                | -         |    -1.98 | doc, drg, rdnzao, supLexN1, togs  |
|           13 |     1435 | 2024-04-23 | Vitality | L   | 0.879      | -            | -                | -                | -         |    -0.05 | doc, drg, rdnzao, supLexN1, togs  |
|           12 |     1656 | 2024-04-16 | W7M      | L   | 0.835      | -            | -                | -                | -         |   -11.71 | doc, drg, rdnzao, supLexN1, togs  |
|           11 |     1724 | 2024-04-12 | Galorys  | L   | 0.808      | -            | -                | -                | -         |   -10.02 | doc, drg, rdnzao, supLexN1, togs  |
|           10 |     1773 | 2024-04-10 | ODDIK    | W   | 0.795      | 0.450        | 0.024 (0.008)    | 0.602 (0.216)    | 0 (0.000) |    16.64 | doc, drg, lukiz, rdnzao, supLexN1 |
|            9 |     1779 | 2024-04-10 | ODDIK    | L   | 0.795      | -            | -                | -                | -         |    -8.30 | doc, drg, lukiz, rdnzao, supLexN1 |
|            8 |     1878 | 2024-04-08 | paiN     | L   | 0.780      | -            | -                | -                | -         |    -0.28 | doc, drg, rdnzao, supLexN1, togs  |
|            7 |     1917 | 2024-04-07 | BESTIA   | W   | 0.772      | 0.435        | 0.031 (0.010)    | 0.631 (0.212)    | 0 (0.000) |    17.69 | doc, drg, rdnzao, supLexN1, togs  |
|            6 |     1928 | 2024-04-06 | ODDIK    | W   | 0.767      | 0.143        | 0.024 (0.003)    | 0.602 (0.066)    | 0 (0.000) |    17.73 | doc, drg, gafolo, supLexN1, togs  |
|            5 |     1948 | 2024-04-05 | paiN     | L   | 0.759      | -            | -                | -                | -         |    -0.21 | doc, drg, gafolo, supLexN1, togs  |
|            4 |     1966 | 2024-04-04 | paiN     | L   | 0.755      | -            | -                | -                | -         |    -0.21 | doc, drg, gafolo, supLexN1, togs  |
|            3 |     1974 | 2024-04-04 | paiN     | L   | 0.754      | -            | -                | -                | -         |    -0.21 | doc, drg, gafolo, supLexN1, togs  |
|            2 |     2052 | 2024-04-02 | BESTIA   | L   | 0.742      | -            | -                | -                | -         |    -5.60 | doc, drg, rdnzao, supLexN1, togs  |
|            1 |     2056 | 2024-04-02 | MIBR     | L   | 0.741      | -            | -                | -                | -         |    -0.30 | doc, drg, rdnzao, supLexN1, togs  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,500.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-12 |      1.000 | $3,500.00      | $3,500.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
