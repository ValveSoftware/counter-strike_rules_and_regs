### Roster Details<br />
Team Name: MOUZ<br />
Roster: Brollan, Jimpphat, siuhy, torzsi, xertioN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [3](../standings_global.md)<br />
Regional Rank: [3]( ../standings_europe.md)<br />
Final Rank Value:  1861.4<br />
<br />
Final Rank Value (1861.4) = Starting Rank Value (1863.8) + Head To Head Adjustments (-2.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.617[<sup>2</sup>](#table1)
- Opponent Network: 0.457[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.769<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1863.8
- 400 + ( ( 0.769 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1863.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |       36 | 2024-05-04 | Liquid             | W   | 1.000      | 0.889        | -                | 0.726 (0.645)    | 1 (1.000) |     2.34 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           35 |      105 | 2024-05-01 | GamerLegion        | W   | 1.000      | 0.889        | 0.187 (0.166)    | 0.481 (0.428)    | 1 (1.000) |     1.81 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           34 |      135 | 2024-04-30 | Bad News Kangaroos | W   | 1.000      | 0.889        | -                | 0.359 (0.319)    | 1 (1.000) |     0.17 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           33 |      554 | 2024-04-14 | FaZe               | L   | 1.000      | -            | -                | -                | -         |   -12.92 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           32 |      571 | 2024-04-13 | G2                 | W   | 1.000      | 0.624        | 0.841 (0.525)    | 0.607 (0.379)    | 1 (1.000) |    14.14 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           31 |      664 | 2024-04-10 | Liquid             | W   | 1.000      | 0.624        | -                | 0.726 (0.453)    | 1 (1.000) |     2.30 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           30 |      734 | 2024-04-08 | FURIA              | W   | 1.000      | 0.624        | 0.371 (0.231)    | 0.484 (0.302)    | 1 (1.000) |     3.19 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           29 |      752 | 2024-04-08 | TYLOO              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.20 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           28 |      954 | 2024-03-29 | G2                 | L   | 0.947      | -            | -                | -                | -         |   -15.38 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           27 |     1077 | 2024-03-22 | Complexity         | W   | 0.899      | 1.000        | 0.262 (0.236)    | 0.374 (0.336)    | 1 (0.899) |     4.28 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           26 |     1097 | 2024-03-21 | Eternal Fire       | W   | 0.893      | 1.000        | 0.397 (0.354)    | 0.579 (0.517)    | 1 (0.893) |     8.93 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           25 |     1108 | 2024-03-21 | Gaimin Gladiators  | W   | 0.891      | 1.000        | 0.189 (0.168)    | 0.990 (0.883)    | 1 (0.891) |     1.50 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           24 |     1787 | 2024-02-20 | Spirit             | W   | 0.693      | -            | -                | -                | -         |    10.65 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           23 |     1809 | 2024-02-19 | Gaimin Gladiators  | W   | 0.687      | -            | -                | -                | -         |     1.04 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           22 |     1822 | 2024-02-19 | Guild Eagles       | W   | 0.685      | -            | -                | -                | -         |     0.22 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           21 |     2016 | 2024-02-10 | FaZe               | L   | 0.626      | -            | -                | -                | -         |    -6.12 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           20 |     2059 | 2024-02-06 | ENCE               | W   | 0.600      | 1.000        | 0.360 (0.216)    | -                | -         |     2.43 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           19 |     2071 | 2024-02-05 | GamerLegion        | W   | 0.593      | 1.000        | 0.187 (0.111)    | -                | -         |     2.40 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           18 |     2094 | 2024-02-04 | Cloud9             | W   | 0.586      | 1.000        | 0.472 (0.277)    | 0.525 (0.307)    | -         |     4.27 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           17 |     2407 | 2024-01-20 | ex-Preasy          | W   | 0.487      | -            | -                | -                | -         |     0.17 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           16 |     2422 | 2024-01-20 | Spirit             | L   | 0.486      | -            | -                | -                | -         |    -8.68 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           15 |     2472 | 2024-01-19 | Eternal Fire       | L   | 0.480      | -            | -                | -                | -         |   -10.69 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           14 |     2530 | 2024-01-18 | HEROIC             | W   | 0.473      | -            | -                | -                | -         |     3.45 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           13 |     2546 | 2024-01-18 | EYEBALLERS         | W   | 0.472      | -            | -                | -                | -         |     0.09 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           12 |     3018 | 2023-12-16 | FaZe               | L   | 0.252      | -            | -                | -                | -         |    -2.41 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           11 |     3044 | 2023-12-15 | Cloud9             | W   | 0.244      | 1.000        | 0.472 (0.115)    | -                | -         |     1.71 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           10 |     3046 | 2023-12-14 | HEROIC             | W   | 0.238      | -            | -                | -                | -         |     0.01 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            9 |     3055 | 2023-12-13 | G2                 | L   | 0.232      | -            | -                | -                | -         |    -3.59 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            8 |     3285 | 2023-12-01 | FURIA              | L   | 0.153      | -            | -                | -                | -         |    -4.15 | frozen, Jimpphat, siuhy, torzsi, xertioN  |
|            7 |     3300 | 2023-11-30 | Complexity         | W   | 0.147      | -            | -                | -                | -         |     0.82 | frozen, Jimpphat, siuhy, torzsi, xertioN  |
|            6 |     3309 | 2023-11-30 | Apeks              | L   | 0.145      | -            | -                | -                | -         |    -4.33 | frozen, Jimpphat, siuhy, torzsi, xertioN  |
|            5 |     3672 | 2023-11-12 | FaZe               | L   | 0.026      | -            | -                | -                | -         |    -0.26 | frozen, Jimpphat, siuhy, torzsi, xertioN  |
|            4 |     3684 | 2023-11-11 | Astralis           | W   | 0.023      | -            | -                | -                | -         |     0.00 | frozen, Jimpphat, siuhy, torzsi, xertioN  |
|            3 |     3714 | 2023-11-10 | Lynn Vision        | W   | 0.016      | -            | -                | -                | -         |     0.01 | frozen, Jimpphat, siuhy, torzsi, xertioN  |
|            2 |     3738 | 2023-11-09 | FaZe               | L   | 0.005      | -            | -                | -                | -         |    -0.05 | frozen, Jimpphat, siuhy, torzsi, xertioN  |
|            1 |     3741 | 2023-11-08 | Wings Up           | W   | 0.002      | -            | -                | -                | -         |     0.00 | frozen, Jimpphat, siuhy, torzsi, xertioN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($162,092.66)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $42,000.00     | $42,000.00      |
| 2024-03-31 |      0.960 | $45,000.00     | $43,210.48      |
| 2024-02-11 |      0.633 | $80,000.00     | $50,651.20      |
| 2023-12-17 |      0.259 | $85,000.00     | $22,007.09      |
| 2023-12-03 |      0.167 | $10,000.00     | $1,665.93       |
| 2023-11-12 |      0.026 | $100,000.00    | $2,557.96       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
