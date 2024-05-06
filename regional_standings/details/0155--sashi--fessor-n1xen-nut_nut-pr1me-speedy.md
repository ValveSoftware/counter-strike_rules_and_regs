### Roster Details<br />
Team Name: Sashi<br />
Roster: Fessor, n1Xen, nut nut, PR1mE, Speedy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [155](../standings_global.md)<br />
Regional Rank: [103]( ../standings_europe.md)<br />
Final Rank Value:  671.6<br />
<br />
Final Rank Value (671.6) = Starting Rank Value (689.7) + Head To Head Adjustments (-18.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.344[<sup>1</sup>](#table2)
- Bounty Collected: 0.225[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.036[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 689.7
- 400 + ( ( 0.152 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 689.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     2114 | 2024-02-03 | showmakerz      | L   | 0.580      | -            | -                | -                | -         |   -13.41 | Fessor, n1Xen, nut nut, PR1mE, Speedy |
|           11 |     2936 | 2023-12-20 | NAVI Junior     | L   | 0.279      | -            | -                | -                | -         |    -3.83 | Fessor, n1Xen, nut nut, PR1mE, Speedy |
|           10 |     2939 | 2023-12-20 | PGE Turow       | W   | 0.278      | 0.333        | 0.011 (0.001)    | 0.081 (0.007)    | 0 (0.000) |     4.80 | Fessor, n1Xen, nut nut, PR1mE, Speedy |
|            9 |     2955 | 2023-12-18 | showmakerz      | L   | 0.265      | -            | -                | -                | -         |    -6.20 | Fessor, n1Xen, nut nut, PR1mE, Speedy |
|            8 |     2958 | 2023-12-18 | ARCRED          | L   | 0.264      | -            | -                | -                | -         |    -3.85 | Fessor, n1Xen, nut nut, PR1mE, Speedy |
|            7 |     2990 | 2023-12-17 | ex-Anonymo      | L   | 0.258      | -            | -                | -                | -         |    -3.57 | Fessor, n1Xen, nut nut, PR1mE, Speedy |
|            6 |     3261 | 2023-12-02 | CEPTER          | W   | 0.161      | 0.341        | 0.004 (0.000)    | 0.007 (0.000)    | 1 (0.161) |     2.00 | aizy, n1Xen, nut nut, PR1mE, Speedy   |
|            5 |     3271 | 2023-12-02 | Astralis Talent | W   | 0.159      | 0.341        | 0.029 (0.002)    | 0.194 (0.011)    | 1 (0.159) |     3.58 | aizy, n1Xen, nut nut, PR1mE, Speedy   |
|            4 |     3323 | 2023-11-29 | NOM             | W   | 0.138      | 0.303        | 0.002 (0.000)    | 0.030 (0.001)    | 0 (0.000) |     2.02 | aizy, n1Xen, nut nut, PR1mE, Speedy   |
|            3 |     3332 | 2023-11-28 | brazylijski luz | W   | 0.131      | 0.303        | 0.017 (0.001)    | 0.373 (0.015)    | 0 (0.000) |     2.76 | aizy, n1Xen, nut nut, PR1mE, Speedy   |
|            2 |     3339 | 2023-11-27 | NOM             | L   | 0.124      | -            | -                | -                | -         |    -2.10 | aizy, n1Xen, nut nut, PR1mE, Speedy   |
|            1 |     3603 | 2023-11-15 | PERA            | L   | 0.046      | -            | -                | -                | -         |    -0.35 | aizy, n1Xen, nut nut, PR1mE, Speedy   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,016.48)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-02 |      0.161 | $9,555.00      | $1,534.33       |
| 2023-11-29 |      0.138 | $3,500.00      | $482.15         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
