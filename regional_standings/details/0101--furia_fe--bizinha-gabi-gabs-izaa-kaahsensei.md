### Roster Details<br />
Team Name: FURIA fe<br />
Roster: bizinha, GaBi, gabs, izaa, kaahSENSEI<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [101](../standings_global.md)<br />
Regional Rank: [28]( ../standings_americas.md)<br />
Final Rank Value:  809.0<br />
<br />
Final Rank Value (809.0) = Starting Rank Value (754.5) + Head To Head Adjustments (54.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.397[<sup>1</sup>](#table2)
- Bounty Collected: 0.274[<sup>2</sup>](#table1)
- Opponent Network: 0.032[<sup>2</sup>](#table1)
- LAN Wins: 0.032[<sup>2</sup>](#table1)

The average of these factors is 0.184<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 754.5
- 400 + ( ( 0.184 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 754.5


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
|           15 |       76 | 2024-04-19 | Fluxo Demons      | L   | 1.000      | -            | -                | -                | -         |   -14.48 | bizinha, GaBi, gabs, izaa, kaahSENSEI |
|           14 |      340 | 2024-04-10 | KG fe             | W   | 1.000      | 0.332        | 0.005 (0.002)    | 0.036 (0.012)    | 0 (0.000) |     5.95 | bizinha, GaBi, gabs, izaa, kaahSENSEI |
|           13 |      568 | 2024-04-03 | Divina fe         | W   | 1.000      | 0.332        | 0.007 (0.002)    | 0.089 (0.030)    | 0 (0.000) |     9.64 | bizinha, GaBi, gabs, izaa, kaahSENSEI |
|           12 |      671 | 2024-03-28 | GENKID4M4         | W   | 1.000      | 0.332        | 0.007 (0.002)    | 0.077 (0.026)    | 0 (0.000) |     8.69 | bizinha, GaBi, gabs, izaa, kaahSENSEI |
|           11 |      792 | 2024-03-21 | Atrix             | W   | 0.988      | 0.332        | 0.008 (0.003)    | 0.185 (0.061)    | 0 (0.000) |    10.78 | bizinha, GaBi, gabs, izaa, kaahSENSEI |
|           10 |      893 | 2024-03-16 | GENKID4M4         | W   | 0.955      | 0.250        | 0.007 (0.002)    | 0.077 (0.018)    | 0 (0.000) |     9.85 | bizinha, GaBi, gabs, izaa, kaahSENSEI |
|            9 |      966 | 2024-03-13 | MIBR fe           | W   | 0.935      | 0.332        | 0.014 (0.004)    | 0.188 (0.058)    | 0 (0.000) |    12.54 | bizinha, GaBi, gabs, izaa, kaahSENSEI |
|            8 |     1147 | 2024-03-06 | W7M fe            | W   | 0.888      | 0.332        | 0.008 (0.002)    | 0.127 (0.037)    | 0 (0.000) |    10.32 | bizinha, GaBi, gabs, izaa, kaahSENSEI |
|            7 |     2818 | 2023-12-09 | NAVI Javelins     | L   | 0.299      | -            | -                | -                | -         |    -3.61 | annaEX, GaBi, gabs, izaa, kaahSENSEI  |
|            6 |     2832 | 2023-12-08 | Shimmer           | W   | 0.294      | 0.524        | 0.020 (0.003)    | 0.316 (0.049)    | 1 (0.294) |     4.16 | annaEX, GaBi, gabs, izaa, kaahSENSEI  |
|            5 |     2839 | 2023-12-08 | Fearless Cheetahs | L   | 0.292      | -            | -                | -                | -         |    -4.44 | annaEX, GaBi, gabs, izaa, kaahSENSEI  |
|            4 |     3184 | 2023-11-18 | MIBR fe           | W   | 0.162      | 0.338        | 0.014 (0.001)    | 0.188 (0.010)    | 0 (0.000) |     2.18 | annaEX, GaBi, gabs, izaa, kaahSENSEI  |
|            3 |     3248 | 2023-11-16 | Fluxo Demons      | W   | 0.149      | 0.338        | 0.025 (0.001)    | 0.375 (0.019)    | 0 (0.000) |     2.50 | annaEX, GaBi, gabs, izaa, kaahSENSEI  |
|            2 |     3695 | 2023-10-29 | ex-Divina fe      | W   | 0.027      | -            | -                | -                | -         |     0.17 | annaEX, GaBi, gabs, izaa, kaahSENSEI  |
|            1 |     3740 | 2023-10-28 | Ravens            | W   | 0.021      | -            | -                | -                | -         |     0.17 | annaEX, GaBi, gabs, izaa, kaahSENSEI  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,728.12)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-19 |      1.000 | $1,900.00      | $1,900.00       |
| 2024-03-16 |      0.955 | $750.00        | $716.02         |
| 2023-12-10 |      0.306 | $7,000.00      | $2,141.48       |
| 2023-11-18 |      0.162 | $6,000.00      | $970.61         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
