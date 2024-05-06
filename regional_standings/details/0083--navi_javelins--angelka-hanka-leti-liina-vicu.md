### Roster Details<br />
Team Name: NAVI Javelins<br />
Roster: Angelka, Hanka, LETi, Liina, vicu<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [83](../standings_global.md)<br />
Regional Rank: [58]( ../standings_europe.md)<br />
Final Rank Value:  864.9<br />
<br />
Final Rank Value (864.9) = Starting Rank Value (817.2) + Head To Head Adjustments (47.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.450[<sup>1</sup>](#table2)
- Bounty Collected: 0.308[<sup>2</sup>](#table1)
- Opponent Network: 0.049[<sup>2</sup>](#table1)
- LAN Wins: 0.069[<sup>2</sup>](#table1)

The average of these factors is 0.219<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 817.2
- 400 + ( ( 0.219 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 817.2


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
|           20 |      386 | 2024-04-19 | Crescent fe       | W   | 1.000      | 0.331        | 0.008 (0.003)    | -                | 0 (0.000) |     6.21 | Angelka, Hanka, LETi, Liina, vicu |
|           19 |      513 | 2024-04-16 | Pigeons           | W   | 1.000      | 0.303        | 0.090 (0.027)    | 0.373 (0.113)    | 0 (0.000) |    18.54 | Angelka, Hanka, LETi, Liina, vicu |
|           18 |      534 | 2024-04-15 | NIP Impact        | W   | 1.000      | 0.303        | 0.011 (0.003)    | 0.266 (0.081)    | 0 (0.000) |    12.52 | Angelka, Hanka, LETi, Liina, vicu |
|           17 |      552 | 2024-04-14 | Astralis W        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.28 | Angelka, Hanka, LETi, Liina, vicu |
|           16 |      565 | 2024-04-13 | Pigeons           | L   | 1.000      | -            | -                | -                | -         |   -12.27 | Angelka, Hanka, LETi, Liina, vicu |
|           15 |      606 | 2024-04-11 | Spirit fe         | W   | 1.000      | 0.303        | 0.010 (0.003)    | 0.105 (0.032)    | 0 (0.000) |     7.89 | Angelka, Hanka, LETi, Liina, vicu |
|           14 |      707 | 2024-04-09 | NIP Impact        | L   | 1.000      | -            | -                | -                | -         |   -18.82 | Angelka, Hanka, LETi, Liina, vicu |
|           13 |      829 | 2024-04-04 | Spirit fe         | W   | 0.987      | 0.331        | 0.010 (0.003)    | 0.105 (0.034)    | 0 (0.000) |     8.62 | Angelka, Hanka, LETi, Liina, vicu |
|           12 |      868 | 2024-04-03 | Let Her Cook      | L   | 0.980      | -            | -                | -                | -         |   -22.44 | Angelka, Hanka, LETi, Liina, vicu |
|           11 |     1246 | 2024-03-14 | 1WIN Gang         | W   | 0.847      | 0.331        | 0.006 (0.002)    | -                | 0 (0.000) |     5.44 | Angelka, Hanka, LETi, Liina, vicu |
|           10 |     1448 | 2024-03-06 | Fearless Cheetahs | W   | 0.794      | 0.331        | 0.030 (0.008)    | 0.192 (0.050)    | -         |     9.44 | Angelka, Hanka, LETi, Liina, vicu |
|            9 |     1669 | 2024-02-25 | BIG EQUIPA        | W   | 0.726      | 0.238        | -                | 0.334 (0.058)    | -         |     7.75 | Angelka, Hanka, LETi, Liina, vicu |
|            8 |     1673 | 2024-02-25 | ENCE Athena       | W   | 0.725      | 0.238        | -                | 0.142 (0.025)    | -         |     7.03 | Angelka, Hanka, LETi, Liina, vicu |
|            7 |     1707 | 2024-02-24 | Crescent fe       | W   | 0.719      | -            | -                | -                | -         |     6.70 | Angelka, Hanka, LETi, Liina, vicu |
|            6 |     2086 | 2024-02-04 | VIOLET            | W   | 0.586      | -            | -                | -                | -         |     2.87 | Angelka, Hanka, LETi, Liina, vicu |
|            5 |     3084 | 2023-12-10 | Pigeons           | L   | 0.213      | -            | -                | -                | -         |    -3.00 | Angelka, Hanka, LETi, Liina, vicu |
|            4 |     3090 | 2023-12-10 | Fluxo Demons      | W   | 0.212      | 0.524        | 0.020 (0.002)    | 0.329 (0.037)    | 1 (0.212) |     2.77 | Angelka, Hanka, LETi, Liina, vicu |
|            3 |     3114 | 2023-12-09 | FURIA fe          | W   | 0.205      | 0.524        | 0.027 (0.003)    | 0.253 (0.027)    | 1 (0.205) |     2.55 | Angelka, Hanka, LETi, Liina, vicu |
|            2 |     3129 | 2023-12-08 | Fearless Cheetahs | L   | 0.200      | -            | -                | -                | -         |    -3.73 | Angelka, Hanka, LETi, Liina, vicu |
|            1 |     3131 | 2023-12-08 | Shimmer           | W   | 0.199      | 0.524        | 0.024 (0.002)    | 0.325 (0.034)    | 1 (0.199) |     2.31 | Angelka, Hanka, LETi, Liina, vicu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,712.74)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-16 |      1.000 | $3,500.00      | $3,500.00       |
| 2024-02-25 |      0.726 | $630.00        | $457.39         |
| 2024-02-04 |      0.586 | $750.00        | $439.86         |
| 2023-12-10 |      0.213 | $25,000.00     | $5,315.49       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
