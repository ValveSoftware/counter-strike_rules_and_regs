### Roster Details<br />
Team Name: Rare Atom<br />
Roster: expro, kory, phzy, somebody, Summer<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [119](../standings_global.md)<br />
Regional Rank: [11]( ../standings_asia.md)<br />
Final Rank Value:  752.9<br />
<br />
Final Rank Value (752.9) = Starting Rank Value (718.8) + Head To Head Adjustments (34.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.385[<sup>1</sup>](#table2)
- Bounty Collected: 0.271[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.167<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 718.8
- 400 + ( ( 0.167 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 718.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |     1459 | 2024-03-06 | Cloud9       | L   | 0.792      | -            | -                | -                | -         |    -0.18 | expro, kory, phzy, somebody, Summer |
|           16 |     2155 | 2024-02-02 | GR           | W   | 0.572      | 0.143        | 0.005 (0.000)    | 0.217 (0.018)    | 0 (0.000) |     6.92 | expro, kory, phzy, somebody, Summer |
|           15 |     2160 | 2024-02-02 | TYLOO        | W   | 0.571      | 0.143        | 0.093 (0.008)    | 0.436 (0.036)    | 0 (0.000) |    14.62 | expro, kory, phzy, somebody, Summer |
|           14 |     2204 | 2024-01-31 | NKT          | W   | 0.558      | 0.143        | 0.013 (0.001)    | 0.088 (0.007)    | 0 (0.000) |     9.34 | expro, kory, phzy, somebody, Summer |
|           13 |     2207 | 2024-01-31 | Lynn Vision  | W   | 0.558      | 0.143        | 0.135 (0.011)    | 0.390 (0.031)    | 0 (0.000) |    16.12 | expro, kory, phzy, somebody, Summer |
|           12 |     2210 | 2024-01-31 | ATOX         | L   | 0.557      | -            | -                | -                | -         |    -7.45 | expro, kory, phzy, somebody, Summer |
|           11 |     2291 | 2024-01-25 | Wings Up     | L   | 0.518      | -            | -                | -                | -         |    -9.80 | expro, kory, phzy, somebody, Summer |
|           10 |     2295 | 2024-01-25 | Newhappy     | W   | 0.518      | 0.143        | 0.004 (0.000)    | 0.181 (0.013)    | 0 (0.000) |     7.51 | expro, kory, phzy, somebody, Summer |
|            9 |     2309 | 2024-01-24 | Eruption     | W   | 0.512      | 0.143        | 0.000 (0.000)    | 0.067 (0.005)    | 0 (0.000) |     3.74 | expro, kory, phzy, somebody, Summer |
|            8 |     2361 | 2024-01-22 | ATOX         | L   | 0.498      | -            | -                | -                | -         |    -6.71 | expro, kory, phzy, somebody, Summer |
|            7 |     2388 | 2024-01-21 | TYLOO        | L   | 0.492      | -            | -                | -                | -         |    -2.97 | expro, kory, phzy, somebody, Summer |
|            6 |     2394 | 2024-01-21 | Newhappy     | W   | 0.490      | 0.143        | 0.004 (0.000)    | 0.181 (0.013)    | 0 (0.000) |     7.51 | expro, kory, phzy, somebody, Summer |
|            5 |     2436 | 2024-01-20 | Wings Up     | W   | 0.484      | 0.143        | 0.001 (0.000)    | 0.090 (0.006)    | 0 (0.000) |     6.16 | expro, kory, phzy, somebody, Summer |
|            4 |     2445 | 2024-01-19 | SHPL         | W   | 0.483      | 0.143        | 0.000 (0.000)    | 0.038 (0.003)    | 0 (0.000) |     2.44 | expro, kory, phzy, somebody, Summer |
|            3 |     2504 | 2024-01-18 | Newhappy     | L   | 0.476      | -            | -                | -                | -         |    -7.80 | expro, kory, phzy, somebody, Summer |
|            2 |     2782 | 2024-01-12 | Steel Helmet | L   | 0.431      | -            | -                | -                | -         |    -7.33 | expro, kory, phzy, somebody, Summer |
|            1 |     2785 | 2024-01-12 | SHPL         | W   | 0.431      | 0.143        | 0.000 (0.000)    | 0.038 (0.002)    | 0 (0.000) |     2.01 | expro, kory, phzy, somebody, Summer |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,102.93)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
