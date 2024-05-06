### Roster Details<br />
Team Name: Pigeons<br />
Roster: ANa, Kat, tory, twenty3, zAAz<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [67](../standings_global.md)<br />
Regional Rank: [49]( ../standings_europe.md)<br />
Final Rank Value:  929.3<br />
<br />
Final Rank Value (929.3) = Starting Rank Value (856.7) + Head To Head Adjustments (72.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.489[<sup>1</sup>](#table2)
- Bounty Collected: 0.302[<sup>2</sup>](#table1)
- Opponent Network: 0.075[<sup>2</sup>](#table1)
- LAN Wins: 0.093[<sup>2</sup>](#table1)

The average of these factors is 0.240<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 856.7
- 400 + ( ( 0.240 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 856.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |       25 | 2024-05-05 | Crescent fe       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.47 | ANa, Kat, tory, twenty3, zAAz          |
|           23 |      192 | 2024-04-27 | NIP Impact        | W   | 1.000      | 0.252        | 0.011 (0.003)    | 0.266 (0.067)    | 0 (0.000) |     8.55 | ANa, Kat, tory, twenty3, zAAz          |
|           22 |      195 | 2024-04-27 | Spirit fe         | W   | 1.000      | 0.252        | 0.010 (0.002)    | -                | 0 (0.000) |     4.62 | ANa, Kat, tory, twenty3, zAAz          |
|           21 |      388 | 2024-04-19 | GUILD fe          | W   | 1.000      | 0.331        | 0.011 (0.004)    | 0.199 (0.066)    | 0 (0.000) |     7.67 | ANa, Kat, tory, twenty3, zAAz          |
|           20 |      513 | 2024-04-16 | NAVI Javelins     | L   | 1.000      | -            | -                | -                | -         |   -18.54 | ANa, Kat, tory, twenty3, zAAz          |
|           19 |      547 | 2024-04-14 | NIP Impact        | W   | 1.000      | 0.303        | 0.011 (0.003)    | 0.266 (0.081)    | 0 (0.000) |     9.61 | ANa, Kat, tory, twenty3, zAAz          |
|           18 |      565 | 2024-04-13 | NAVI Javelins     | W   | 1.000      | 0.303        | 0.060 (0.018)    | 0.412 (0.125)    | 0 (0.000) |    12.27 | ANa, Kat, tory, twenty3, zAAz          |
|           17 |      601 | 2024-04-11 | Astralis W        | W   | 1.000      | -            | -                | -                | -         |     5.33 | ANa, Kat, tory, twenty3, zAAz          |
|           16 |      648 | 2024-04-10 | Astralis W        | W   | 1.000      | -            | -                | -                | -         |     5.61 | ANa, Kat, tory, twenty3, zAAz          |
|           15 |      735 | 2024-04-08 | Crescent fe       | W   | 1.000      | -            | -                | -                | -         |     6.57 | ANa, Kat, tory, twenty3, zAAz          |
|           14 |      765 | 2024-04-07 | NIP Impact        | W   | 1.000      | 0.262        | 0.011 (0.003)    | 0.266 (0.070)    | -         |    10.73 | ANa, Kat, tory, twenty3, zAAz          |
|           13 |      769 | 2024-04-07 | BIG EQUIPA        | W   | 1.000      | 0.262        | -                | 0.334 (0.087)    | -         |     9.93 | ANa, Kat, tory, twenty3, zAAz          |
|           12 |      785 | 2024-04-06 | ENCE Athena       | W   | 0.998      | -            | -                | -                | -         |     7.65 | ANa, Kat, tory, twenty3, zAAz          |
|           11 |     1006 | 2024-03-27 | ENCE Athena       | W   | 0.934      | 0.331        | 0.009 (0.003)    | 0.142 (0.044)    | -         |     8.10 | ANa, Kat, tory, twenty3, zAAz          |
|           10 |     1243 | 2024-03-14 | BIG EQUIPA        | W   | 0.847      | 0.331        | -                | 0.334 (0.094)    | -         |     9.27 | ANa, Kat, tory, twenty3, zAAz          |
|            9 |     1421 | 2024-03-07 | NIP Impact        | W   | 0.800      | 0.331        | 0.011 (0.003)    | 0.266 (0.070)    | -         |     8.65 | ANa, Kat, tory, twenty3, zAAz          |
|            8 |     1652 | 2024-02-26 | 500               | L   | 0.731      | -            | -                | -                | -         |   -12.89 | ANa, Kat, tory, twenty3, zAAz          |
|            7 |     2073 | 2024-02-05 | Sampi             | L   | 0.592      | -            | -                | -                | -         |    -5.70 | ANa, Kat, tory, twenty3, zAAz          |
|            6 |     2232 | 2024-01-29 | ex-Sprout         | L   | 0.545      | -            | -                | -                | -         |   -14.01 | ANa, hyskeee, Kat, tory, twenty3       |
|            5 |     3084 | 2023-12-10 | NAVI Javelins     | W   | 0.213      | 0.524        | 0.060 (0.007)    | 0.412 (0.046)    | 1 (0.213) |     3.00 | Angelka, Hanka, LETi, Liina, vicu      |
|            4 |     3093 | 2023-12-10 | Fearless Cheetahs | W   | 0.211      | 0.524        | 0.030 (0.003)    | -                | 1 (0.211) |     2.41 | ANa, Kat, tory, twenty3, vilga         |
|            3 |     3110 | 2023-12-09 | HSG fe            | W   | 0.207      | -            | -                | -                | 1 (0.207) |     1.74 | Argent, gfi, Hazel, Olga, XiaoWu       |
|            2 |     3130 | 2023-12-08 | Fluxo Demons      | L   | 0.199      | -            | -                | -                | -         |    -4.03 | goddess, julih, nani, poppins, yungher |
|            1 |     3140 | 2023-12-08 | HSG fe            | W   | 0.197      | -            | -                | -                | 1 (0.197) |     1.63 | Argent, gfi, Hazel, Olga, XiaoWu       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,665.98)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-05 |      1.000 | $750.00        | $750.00         |
| 2024-04-27 |      1.000 | $535.00        | $535.00         |
| 2024-04-16 |      1.000 | $1,500.00      | $1,500.00       |
| 2024-04-07 |      1.000 | $1,250.00      | $1,250.00       |
| 2023-12-10 |      0.213 | $50,000.00     | $10,630.98      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
