### Roster Details<br />
Team Name: Rare Atom<br />
Roster: expro, kory, phzy, somebody, Summer<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [117](../standings_global.md)<br />
Regional Rank: [10]( ../standings_asia.md)<br />
Final Rank Value:  765.8<br />
<br />
Final Rank Value (765.8) = Starting Rank Value (724.6) + Head To Head Adjustments (41.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.382[<sup>1</sup>](#table2)
- Bounty Collected: 0.272[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.168<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 724.6
- 400 + ( ( 0.168 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 724.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |     1163 | 2024-03-06 | Cloud9             | L   | 0.886      | -            | -                | -                | -         |    -0.20 | expro, kory, phzy, somebody, Summer |
|           20 |     1859 | 2024-02-02 | GR                 | W   | 0.665      | 0.143        | 0.005 (0.000)    | 0.267 (0.025)    | 0 (0.000) |     8.01 | expro, kory, phzy, somebody, Summer |
|           19 |     1864 | 2024-02-02 | TYLOO              | W   | 0.665      | 0.143        | 0.055 (0.005)    | 0.490 (0.047)    | 0 (0.000) |    15.53 | expro, kory, phzy, somebody, Summer |
|           18 |     1908 | 2024-01-31 | NKT                | W   | 0.652      | 0.143        | 0.013 (0.001)    | 0.110 (0.010)    | 0 (0.000) |    10.88 | expro, kory, phzy, somebody, Summer |
|           17 |     1911 | 2024-01-31 | Lynn Vision        | W   | 0.651      | 0.143        | 0.136 (0.013)    | 0.458 (0.043)    | 0 (0.000) |    18.94 | expro, kory, phzy, somebody, Summer |
|           16 |     1914 | 2024-01-31 | ATOX               | L   | 0.651      | -            | -                | -                | -         |    -8.42 | expro, kory, phzy, somebody, Summer |
|           15 |     1995 | 2024-01-25 | Wings Up           | L   | 0.612      | -            | -                | -                | -         |   -11.11 | expro, kory, phzy, somebody, Summer |
|           14 |     1999 | 2024-01-25 | Newhappy           | W   | 0.611      | 0.143        | 0.005 (0.000)    | 0.238 (0.021)    | 0 (0.000) |     9.14 | expro, kory, phzy, somebody, Summer |
|           13 |     2013 | 2024-01-24 | Eruption           | W   | 0.605      | 0.143        | 0.000 (0.000)    | 0.091 (0.008)    | 0 (0.000) |     6.36 | expro, kory, phzy, somebody, Summer |
|           12 |     2065 | 2024-01-22 | ATOX               | L   | 0.592      | -            | -                | -                | -         |    -7.59 | expro, kory, phzy, somebody, Summer |
|           11 |     2092 | 2024-01-21 | TYLOO              | L   | 0.585      | -            | -                | -                | -         |    -4.97 | expro, kory, phzy, somebody, Summer |
|           10 |     2098 | 2024-01-21 | Newhappy           | W   | 0.584      | 0.143        | 0.005 (0.000)    | 0.238 (0.020)    | 0 (0.000) |     9.30 | expro, kory, phzy, somebody, Summer |
|            9 |     2140 | 2024-01-20 | Wings Up           | W   | 0.578      | 0.143        | 0.005 (0.000)    | 0.111 (0.009)    | 0 (0.000) |     7.92 | expro, kory, phzy, somebody, Summer |
|            8 |     2149 | 2024-01-19 | SHPL               | W   | 0.576      | 0.143        | 0.000 (0.000)    | 0.049 (0.004)    | 0 (0.000) |     2.88 | expro, kory, phzy, somebody, Summer |
|            7 |     2208 | 2024-01-18 | Newhappy           | L   | 0.570      | -            | -                | -                | -         |    -8.87 | expro, kory, phzy, somebody, Summer |
|            6 |     2486 | 2024-01-12 | Steel Helmet       | L   | 0.525      | -            | -                | -                | -         |    -8.97 | expro, kory, phzy, somebody, Summer |
|            5 |     2489 | 2024-01-12 | SHPL               | W   | 0.524      | 0.143        | 0.000 (0.000)    | 0.049 (0.004)    | 0 (0.000) |     2.39 | expro, kory, phzy, somebody, Summer |
|            4 |     3730 | 2023-10-29 | TheMongolz         | L   | 0.024      | -            | -                | -                | -         |    -0.02 | expro, kory, phzy, somebody, Summer |
|            3 |     3761 | 2023-10-28 | Wings Up           | W   | 0.018      | -            | -                | -                | -         |     0.08 | expro, kory, phzy, somebody, Summer |
|            2 |     3769 | 2023-10-28 | TheMongolz         | L   | 0.017      | -            | -                | -                | -         |    -0.02 | expro, kory, phzy, somebody, Summer |
|            1 |     3828 | 2023-10-26 | Noobs But Diligent | L   | 0.005      | -            | -                | -                | -         |    -0.12 | expro, kory, phzy, somebody, Summer |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,569.46)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
