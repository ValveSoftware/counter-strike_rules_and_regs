### Roster Details<br />
Team Name: FURIA fe<br />
Roster: bizinha, GaBi, gabs, izaa, kaahSENSEI<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [120](../standings_global.md)<br />
Regional Rank: [32]( ../standings_americas.md)<br />
Final Rank Value:  733.9<br />
<br />
Final Rank Value (733.9) = Starting Rank Value (687.2) + Head To Head Adjustments (46.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.328[<sup>1</sup>](#table2)
- Bounty Collected: 0.245[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.005[<sup>2</sup>](#table1)

The average of these factors is 0.148<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 687.2
- 400 + ( ( 0.148 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 687.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     1023 | 2024-04-19 | Fluxo Demons      | L   | 0.934      | -            | -                | -                | -         |   -14.63 | bizinha, GaBi, gabs, izaa, kaahSENSEI |
|           10 |     1287 | 2024-04-10 | KG fe             | W   | 0.873      | 0.332        | 0.003 (0.001)    | 0.022 (0.006)    | 0 (0.000) |     5.55 | bizinha, GaBi, gabs, izaa, kaahSENSEI |
|            9 |     1515 | 2024-04-03 | Divina fe         | W   | 0.827      | 0.332        | 0.004 (0.001)    | 0.059 (0.016)    | 0 (0.000) |     9.63 | bizinha, GaBi, gabs, izaa, kaahSENSEI |
|            8 |     1618 | 2024-03-28 | GENKID4M4         | W   | 0.787      | 0.332        | 0.004 (0.001)    | 0.048 (0.013)    | 0 (0.000) |     8.62 | bizinha, GaBi, gabs, izaa, kaahSENSEI |
|            7 |     1739 | 2024-03-21 | Atrix             | W   | 0.740      | 0.332        | 0.005 (0.001)    | 0.136 (0.033)    | 0 (0.000) |     9.76 | bizinha, GaBi, gabs, izaa, kaahSENSEI |
|            6 |     1840 | 2024-03-16 | GENKID4M4         | W   | 0.707      | 0.250        | 0.004 (0.001)    | 0.048 (0.009)    | 0 (0.000) |     8.88 | bizinha, GaBi, gabs, izaa, kaahSENSEI |
|            5 |     1913 | 2024-03-13 | MIBR fe           | W   | 0.687      | 0.332        | 0.009 (0.002)    | 0.137 (0.031)    | 0 (0.000) |    10.56 | bizinha, GaBi, gabs, izaa, kaahSENSEI |
|            4 |     2094 | 2024-03-06 | W7M fe            | W   | 0.640      | 0.332        | 0.004 (0.001)    | 0.090 (0.019)    | 0 (0.000) |     8.91 | bizinha, GaBi, gabs, izaa, kaahSENSEI |
|            3 |     3765 | 2023-12-09 | NAVI Javelins     | L   | 0.051      | -            | -                | -                | -         |    -0.66 | annaEX, GaBi, gabs, izaa, kaahSENSEI  |
|            2 |     3779 | 2023-12-08 | TSM Shimmer       | W   | 0.046      | 0.524        | 0.014 (0.000)    | 0.268 (0.006)    | 1 (0.046) |     0.76 | annaEX, GaBi, gabs, izaa, kaahSENSEI  |
|            1 |     3786 | 2023-12-08 | Fearless Cheetahs | L   | 0.044      | -            | -                | -                | -         |    -0.70 | annaEX, GaBi, gabs, izaa, kaahSENSEI  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,714.23)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-19 |      0.934 | $1,900.00      | $1,774.07       |
| 2024-03-16 |      0.707 | $750.00        | $530.48         |
| 2023-12-10 |      0.059 | $7,000.00      | $409.69         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
