### Roster Details<br />
Team Name: NAVI Javelins<br />
Roster: Angelka, Hanka, LETi, Liina, vicu<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [92](../standings_global.md)<br />
Regional Rank: [63]( ../standings_europe.md)<br />
Final Rank Value:  836.4<br />
<br />
Final Rank Value (836.4) = Starting Rank Value (752.4) + Head To Head Adjustments (84.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.383[<sup>1</sup>](#table2)
- Bounty Collected: 0.278[<sup>2</sup>](#table1)
- Opponent Network: 0.049[<sup>2</sup>](#table1)
- LAN Wins: 0.017[<sup>2</sup>](#table1)

The average of these factors is 0.182<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 752.4
- 400 + ( ( 0.182 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 752.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |      266 | 2024-05-19 | Pigeons           | W   | 1.000      | 0.281        | 0.025 (0.007)    | 0.310 (0.087)    | 0 (0.000) |    17.14 | Angelka, Hanka, LETi, Liina, vicu |
|           22 |      272 | 2024-05-19 | BIG EQUIPA        | W   | 1.000      | 0.281        | -                | 0.303 (0.085)    | 0 (0.000) |    11.49 | Angelka, Hanka, LETi, Liina, vicu |
|           21 |      302 | 2024-05-18 | Spirit fe         | W   | 1.000      | 0.281        | 0.005 (0.001)    | 0.079 (0.022)    | 0 (0.000) |     6.70 | Angelka, Hanka, LETi, Liina, vicu |
|           20 |     1037 | 2024-04-19 | Crescent fe       | W   | 0.933      | 0.331        | 0.007 (0.002)    | 0.096 (0.030)    | 0 (0.000) |     7.51 | Angelka, Hanka, LETi, Liina, vicu |
|           19 |     1164 | 2024-04-16 | Pigeons           | W   | 0.913      | 0.303        | 0.025 (0.007)    | 0.310 (0.086)    | 0 (0.000) |    16.21 | Angelka, Hanka, LETi, Liina, vicu |
|           18 |     1185 | 2024-04-15 | NIP Impact        | W   | 0.906      | 0.303        | 0.007 (0.002)    | 0.227 (0.062)    | 0 (0.000) |    12.27 | Angelka, Hanka, LETi, Liina, vicu |
|           17 |     1203 | 2024-04-14 | Astralis W        | W   | 0.898      | 0.303        | 0.003 (0.001)    | -                | 0 (0.000) |     7.96 | Angelka, Hanka, LETi, Liina, vicu |
|           16 |     1216 | 2024-04-13 | Pigeons           | L   | 0.891      | -            | -                | -                | -         |   -11.80 | Angelka, Hanka, LETi, Liina, vicu |
|           15 |     1257 | 2024-04-11 | Spirit fe         | W   | 0.878      | 0.303        | 0.005 (0.001)    | 0.079 (0.021)    | -         |     8.30 | Angelka, Hanka, LETi, Liina, vicu |
|           14 |     1358 | 2024-04-09 | NIP Impact        | L   | 0.865      | -            | -                | -                | -         |   -15.24 | Angelka, Hanka, LETi, Liina, vicu |
|           13 |     1480 | 2024-04-04 | Spirit fe         | W   | 0.833      | 0.331        | 0.005 (0.001)    | 0.079 (0.022)    | -         |     8.82 | Angelka, Hanka, LETi, Liina, vicu |
|           12 |     1519 | 2024-04-03 | Let Her Cook      | L   | 0.826      | -            | -                | -                | -         |   -20.25 | Angelka, Hanka, LETi, Liina, vicu |
|           11 |     1897 | 2024-03-14 | 1WIN Gang         | W   | 0.693      | -            | -                | -                | -         |     4.17 | Angelka, Hanka, LETi, Liina, vicu |
|           10 |     2099 | 2024-03-06 | Fearless Cheetahs | W   | 0.640      | 0.331        | 0.009 (0.002)    | 0.146 (0.031)    | -         |     7.62 | Angelka, Hanka, LETi, Liina, vicu |
|            9 |     2320 | 2024-02-25 | BIG EQUIPA        | W   | 0.572      | 0.238        | -                | 0.303 (0.041)    | -         |     6.83 | Angelka, Hanka, LETi, Liina, vicu |
|            8 |     2324 | 2024-02-25 | ENCE Athena       | W   | 0.571      | -            | -                | -                | -         |     6.53 | Angelka, Hanka, LETi, Liina, vicu |
|            7 |     2358 | 2024-02-24 | Crescent fe       | W   | 0.565      | 0.238        | 0.007 (0.001)    | -                | -         |     6.73 | Angelka, Hanka, LETi, Liina, vicu |
|            6 |     2737 | 2024-02-04 | VIOLET            | W   | 0.432      | -            | -                | -                | -         |     2.76 | Angelka, Hanka, LETi, Liina, vicu |
|            5 |     3735 | 2023-12-10 | Pigeons           | L   | 0.059      | -            | -                | -                | -         |    -0.91 | Angelka, Hanka, LETi, Liina, vicu |
|            4 |     3741 | 2023-12-10 | Fluxo Demons      | W   | 0.058      | -            | -                | -                | 1 (0.058) |     0.72 | Angelka, Hanka, LETi, Liina, vicu |
|            3 |     3765 | 2023-12-09 | FURIA fe          | W   | 0.051      | -            | -                | -                | 1 (0.051) |     0.66 | Angelka, Hanka, LETi, Liina, vicu |
|            2 |     3780 | 2023-12-08 | Fearless Cheetahs | L   | 0.045      | -            | -                | -                | -         |    -0.85 | Angelka, Hanka, LETi, Liina, vicu |
|            1 |     3782 | 2023-12-08 | TSM Shimmer       | W   | 0.045      | -            | -                | -                | 1 (0.045) |     0.61 | Angelka, Hanka, LETi, Liina, vicu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,341.89)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-19 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-04-16 |      0.913 | $3,500.00      | $3,194.12       |
| 2024-02-25 |      0.572 | $630.00        | $360.31         |
| 2024-02-04 |      0.432 | $750.00        | $324.29         |
| 2023-12-10 |      0.059 | $25,000.00     | $1,463.17       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
