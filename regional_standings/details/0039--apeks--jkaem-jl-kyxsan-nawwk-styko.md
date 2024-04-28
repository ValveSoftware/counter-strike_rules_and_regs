### Roster Details<br />
Team Name: Apeks<br />
Roster: jkaem, jL, kyxsan, nawwk, STYKO<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [39](../standings_global.md)<br />
Regional Rank: [31]( ../standings_europe.md)<br />
Final Rank Value:  991.3<br />
<br />
Final Rank Value (991.3) = Starting Rank Value (937.6) + Head To Head Adjustments (53.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.383[<sup>1</sup>](#table2)
- Bounty Collected: 0.344[<sup>2</sup>](#table1)
- Opponent Network: 0.239[<sup>2</sup>](#table1)
- LAN Wins: 0.085[<sup>2</sup>](#table1)

The average of these factors is 0.263<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 937.6
- 400 + ( ( 0.263 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 937.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |       84 | 2023-02-08 | GODSENT              | L   | 1.000      | -            | -                | -                | -         |   -22.06 | jkaem, jL, kyxsan, nawwk, STYKO |
|           42 |      338 | 2023-01-28 | HEET                 | L   | 1.000      | -            | -                | -                | -         |   -25.31 | jkaem, jL, kyxsan, nawwk, STYKO |
|           41 |      348 | 2023-01-28 | ECSTATIC             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.06 | jkaem, jL, kyxsan, nawwk, STYKO |
|           40 |      472 | 2023-01-24 | Eternal Fire         | L   | 1.000      | -            | -                | -                | -         |   -18.25 | jkaem, jL, kyxsan, nawwk, STYKO |
|           39 |      594 | 2023-01-19 | ALTERNATE aTTaX      | W   | 1.000      | 0.435        | -                | 0.486 (0.211)    | 0 (0.000) |     6.27 | jkaem, jL, kyxsan, nawwk, STYKO |
|           38 |      640 | 2023-01-17 | Monte                | L   | 1.000      | -            | -                | -                | -         |   -17.75 | jkaem, jL, kyxsan, nawwk, STYKO |
|           37 |      652 | 2023-01-17 | HONORIS              | W   | 1.000      | 0.435        | 0.011 (0.005)    | 0.748 (0.325)    | 0 (0.000) |     9.14 | jkaem, jL, kyxsan, nawwk, STYKO |
|           36 |      681 | 2023-01-15 | BLINK                | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.71 | jkaem, jL, kyxsan, nawwk, STYKO |
|           35 |      782 | 2022-12-18 | Astralis             | L   | 0.826      | -            | -                | -                | -         |    -5.05 | jkaem, jL, MICHU, nawwk, STYKO  |
|           34 |      824 | 2022-12-17 | GamerLegion          | W   | 0.818      | 0.435        | 0.105 (0.037)    | 0.469 (0.167)    | 0 (0.000) |    16.88 | jkaem, jL, MICHU, nawwk, STYKO  |
|           33 |      848 | 2022-12-16 | 9INE                 | W   | 0.811      | 0.435        | 0.045 (0.016)    | 1.000 (0.353)    | -         |     9.74 | jkaem, jL, MICHU, nawwk, STYKO  |
|           32 |      864 | 2022-12-15 | Monte                | W   | 0.807      | 0.371        | 0.029 (0.009)    | 0.945 (0.283)    | -         |    11.48 | jkaem, jL, MICHU, nawwk, STYKO  |
|           31 |      891 | 2022-12-14 | IKLA                 | W   | 0.800      | 0.371        | 0.017 (0.005)    | 0.743 (0.221)    | -         |    11.69 | jkaem, jL, MICHU, nawwk, STYKO  |
|           30 |      915 | 2022-12-13 | EYEBALLERS           | W   | 0.792      | 0.371        | 0.017 (0.005)    | 0.776 (0.228)    | -         |     9.11 | jkaem, jL, MICHU, nawwk, STYKO  |
|           29 |      926 | 2022-12-12 | ALTERNATE aTTaX      | W   | 0.787      | -            | -                | -                | -         |     7.41 | jkaem, jL, MICHU, nawwk, STYKO  |
|           28 |      954 | 2022-12-11 | 500                  | W   | 0.779      | 0.371        | 0.085 (0.025)    | 0.760 (0.220)    | -         |    16.80 | jkaem, jL, MICHU, nawwk, STYKO  |
|           27 |      975 | 2022-12-10 | LDLC                 | W   | 0.774      | -            | -                | -                | -         |     5.65 | jkaem, jL, MICHU, nawwk, STYKO  |
|           26 |      986 | 2022-12-10 | ex-Finest            | W   | 0.773      | 0.435        | 0.015 (0.005)    | -                | -         |    10.02 | jkaem, jL, MICHU, nawwk, STYKO  |
|           25 |     1034 | 2022-12-08 | AVANGAR              | L   | 0.760      | -            | -                | -                | -         |   -16.63 | jkaem, jL, MICHU, nawwk, STYKO  |
|           24 |     1047 | 2022-12-08 | EC Brugge            | W   | 0.759      | 0.435        | -                | 0.507 (0.167)    | -         |     6.01 | jkaem, jL, MICHU, nawwk, STYKO  |
|           23 |     1065 | 2022-12-07 | ex-Into the Breach   | W   | 0.754      | -            | -                | -                | -         |     8.91 | jkaem, jL, MICHU, nawwk, STYKO  |
|           22 |     1110 | 2022-12-06 | Eternal Fire Academy | W   | 0.747      | -            | -                | -                | -         |     2.27 | jkaem, jL, MICHU, nawwk, STYKO  |
|           21 |     1130 | 2022-12-06 | ECLOT                | L   | 0.744      | -            | -                | -                | -         |   -10.79 | jkaem, jL, MICHU, nawwk, STYKO  |
|           20 |     1176 | 2022-12-04 | PROSPECTS            | W   | 0.733      | 0.435        | 0.032 (0.010)    | 0.689 (0.219)    | -         |    11.42 | jkaem, jL, MICHU, nawwk, STYKO  |
|           19 |     1307 | 2022-11-30 | Nexus                | W   | 0.706      | -            | -                | -                | -         |     5.40 | jkaem, jL, MICHU, nawwk, STYKO  |
|           18 |     1361 | 2022-11-28 | Astralis Talent      | W   | 0.692      | -            | -                | -                | -         |    10.23 | jkaem, jL, MICHU, nawwk, STYKO  |
|           17 |     1364 | 2022-11-28 | LDLC                 | W   | 0.692      | -            | -                | -                | -         |     5.71 | jkaem, jL, MICHU, nawwk, STYKO  |
|           16 |     2699 | 2022-09-23 | Enterprise           | L   | 0.253      | -            | -                | -                | -         |    -4.49 | jkaem, jL, nawwk, shox, STYKO   |
|           15 |     2747 | 2022-09-22 | ex-TAG               | W   | 0.246      | -            | -                | -                | -         |     1.89 | jkaem, jL, nawwk, shox, STYKO   |
|           14 |     2757 | 2022-09-22 | HONORIS              | L   | 0.245      | -            | -                | -                | -         |    -4.47 | jkaem, jL, nawwk, shox, STYKO   |
|           13 |     2783 | 2022-09-21 | HOTU                 | W   | 0.240      | -            | -                | -                | -         |     1.88 | jkaem, jL, nawwk, shox, STYKO   |
|           12 |     2807 | 2022-09-20 | eSuba                | L   | 0.233      | -            | -                | -                | -         |    -3.69 | jkaem, jL, nawwk, shox, STYKO   |
|           11 |     2899 | 2022-09-17 | FTW                  | W   | 0.211      | -            | -                | -                | -         |     2.85 | jkaem, jL, nawwk, shox, STYKO   |
|           10 |     3062 | 2022-09-11 | BIG Academy          | L   | 0.175      | -            | -                | -                | -         |    -1.96 | jkaem, jL, nawwk, shox, STYKO   |
|            9 |     3082 | 2022-09-11 | ATK                  | W   | 0.172      | 0.500        | 0.070 (0.006)    | -                | 1 (0.172) |     2.85 | jkaem, jL, nawwk, shox, STYKO   |
|            8 |     3109 | 2022-09-10 | Nouns                | W   | 0.168      | -            | -                | -                | 1 (0.168) |     1.36 | jkaem, jL, nawwk, shox, STYKO   |
|            7 |     3131 | 2022-09-10 | Phantom Troupe       | W   | 0.167      | -            | -                | -                | 1 (0.167) |     0.83 | jkaem, jL, nawwk, shox, STYKO   |
|            6 |     3137 | 2022-09-10 | Nouns                | L   | 0.166      | -            | -                | -                | -         |    -3.91 | jkaem, jL, nawwk, shox, STYKO   |
|            5 |     3160 | 2022-09-09 | Snakes Den           | W   | 0.161      | -            | -                | -                | 1 (0.161) |     0.27 | jkaem, jL, nawwk, shox, STYKO   |
|            4 |     3175 | 2022-09-09 | BIG Academy          | L   | 0.159      | -            | -                | -                | -         |    -1.81 | jkaem, jL, nawwk, shox, STYKO   |
|            3 |     3209 | 2022-09-08 | Take Charge          | W   | 0.154      | -            | -                | -                | 1 (0.154) |     0.41 | jkaem, jL, nawwk, shox, STYKO   |
|            2 |     3384 | 2022-09-01 | SAW                  | L   | 0.106      | -            | -                | -                | -         |    -0.87 | jkaem, jL, nawwk, shox, STYKO   |
|            1 |     3512 | 2022-08-27 | GamerLegion          | L   | 0.073      | -            | -                | -                | -         |    -0.50 | jkaem, jL, nawwk, shox, STYKO   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,545.05)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-18 |      0.827 | $5,000.00      | $4,135.17       |
| 2022-12-15 |      0.807 | $7,000.00      | $5,651.44       |
| 2022-09-11 |      0.176 | $10,000.00     | $1,758.44       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
