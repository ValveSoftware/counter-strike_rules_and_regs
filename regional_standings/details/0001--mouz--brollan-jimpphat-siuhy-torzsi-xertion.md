### Roster Details<br />
Team Name: MOUZ<br />
Roster: Brollan, Jimpphat, siuhy, torzsi, xertioN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [1](../standings_global.md)<br />
Regional Rank: [1]( ../standings_europe.md)<br />
Final Rank Value:  1989.6<br />
<br />
Final Rank Value (1989.6) = Starting Rank Value (2000.0) + Head To Head Adjustments (-10.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.747[<sup>2</sup>](#table1)
- Opponent Network: 0.464[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.803<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 2000.0
- 400 + ( ( 0.803 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 2000.0


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
|           37 |      520 | 2024-05-28 | G2                 | L   | 1.000      | -            | -                | -                | -         |   -22.32 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           36 |      541 | 2024-05-27 | Complexity         | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.96 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           35 |      552 | 2024-05-27 | 9z                 | L   | 1.000      | -            | -                | -                | -         |   -31.04 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           34 |      769 | 2024-05-19 | Spirit             | W   | 1.000      | 0.769        | 1.000 (0.769)    | 0.454 (0.349)    | 1 (1.000) |    10.88 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           33 |      797 | 2024-05-18 | HEROIC             | W   | 1.000      | 0.769        | 0.362 (0.278)    | 0.635 (0.488)    | 1 (1.000) |     4.12 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           32 |      876 | 2024-05-16 | Virtus.pro         | W   | 1.000      | 0.769        | -                | 0.418 (0.322)    | 1 (1.000) |     4.26 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           31 |      981 | 2024-05-14 | BetBoom            | W   | 1.000      | 0.769        | 0.427 (0.328)    | 0.917 (0.705)    | 1 (1.000) |     1.27 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           30 |     1024 | 2024-05-12 | Vitality           | W   | 1.000      | 0.889        | 0.670 (0.596)    | 0.474 (0.421)    | 1 (1.000) |    12.99 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           29 |     1044 | 2024-05-11 | Complexity         | W   | 1.000      | 0.889        | 0.271 (0.241)    | -                | 1 (1.000) |     4.50 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           28 |     1094 | 2024-05-09 | G2                 | W   | 0.987      | 0.889        | 0.746 (0.655)    | 0.580 (0.509)    | 1 (0.987) |     9.29 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           27 |     1187 | 2024-05-04 | Liquid             | W   | 0.953      | 0.889        | 0.501 (0.424)    | 0.732 (0.620)    | 1 (0.953) |     3.85 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           26 |     1256 | 2024-05-01 | GamerLegion        | W   | 0.932      | -            | -                | -                | 1 (0.932) |     0.46 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           25 |     1286 | 2024-04-30 | Bad News Kangaroos | W   | 0.925      | -            | -                | -                | -         |     0.06 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           24 |     1705 | 2024-04-14 | FaZe               | L   | 0.818      | -            | -                | -                | -         |   -13.91 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           23 |     1722 | 2024-04-13 | G2                 | W   | 0.811      | 0.624        | 0.746 (0.378)    | -                | -         |     9.09 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           22 |     1815 | 2024-04-10 | Liquid             | W   | 0.791      | 0.624        | 0.501 (0.247)    | 0.732 (0.361)    | -         |     3.44 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           21 |     1885 | 2024-04-08 | FURIA              | W   | 0.779      | -            | -                | -                | -         |     2.41 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           20 |     1903 | 2024-04-08 | TYLOO              | W   | 0.777      | -            | -                | -                | -         |     0.04 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           19 |     2105 | 2024-03-29 | G2                 | L   | 0.714      | -            | -                | -                | -         |   -14.16 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           18 |     2228 | 2024-03-22 | Complexity         | W   | 0.666      | -            | -                | -                | -         |     2.42 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           17 |     2248 | 2024-03-21 | Eternal Fire       | W   | 0.660      | 1.000        | 1.000 (0.660)    | 0.560 (0.369)    | -         |     6.26 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           16 |     2259 | 2024-03-21 | Gaimin Gladiators  | W   | 0.658      | 1.000        | -                | 0.749 (0.493)    | -         |     0.35 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           15 |     2938 | 2024-02-20 | Spirit             | W   | 0.460      | -            | -                | -                | -         |     5.70 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           14 |     2960 | 2024-02-19 | Gaimin Gladiators  | W   | 0.453      | -            | -                | -                | -         |     0.19 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           13 |     2973 | 2024-02-19 | M1X KS             | W   | 0.451      | -            | -                | -                | -         |     0.10 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           12 |     3167 | 2024-02-10 | FaZe               | L   | 0.393      | -            | -                | -                | -         |    -6.33 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           11 |     3210 | 2024-02-06 | ENCE               | W   | 0.367      | -            | -                | -                | -         |     0.58 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           10 |     3222 | 2024-02-05 | GamerLegion        | W   | 0.359      | -            | -                | -                | -         |     0.09 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            9 |     3245 | 2024-02-04 | Cloud9             | W   | 0.352      | -            | -                | -                | -         |     0.36 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            8 |     3558 | 2024-01-20 | ex-Preasy          | W   | 0.254      | -            | -                | -                | -         |     0.02 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            7 |     3573 | 2024-01-20 | Spirit             | L   | 0.253      | -            | -                | -                | -         |    -5.23 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            6 |     3623 | 2024-01-19 | Eternal Fire       | L   | 0.247      | -            | -                | -                | -         |    -5.59 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            5 |     3681 | 2024-01-18 | HEROIC             | W   | 0.240      | -            | -                | -                | -         |     1.77 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            4 |     3697 | 2024-01-18 | EYEBALLERS         | W   | 0.239      | -            | -                | -                | -         |     0.02 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            3 |     4169 | 2023-12-16 | FaZe               | L   | 0.018      | -            | -                | -                | -         |    -0.30 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            2 |     4195 | 2023-12-15 | Cloud9             | W   | 0.011      | -            | -                | -                | -         |     0.01 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            1 |     4197 | 2023-12-14 | HEROIC             | W   | 0.005      | -            | -                | -                | -         |     0.00 | Brollan, Jimpphat, siuhy, torzsi, xertioN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($576,241.72)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-19 |      1.000 | $300,000.00    | $300,000.00     |
| 2024-05-12 |      1.000 | $170,000.00    | $170,000.00     |
| 2024-04-14 |      0.818 | $42,000.00     | $34,358.60      |
| 2024-03-31 |      0.727 | $45,000.00     | $32,713.55      |
| 2024-02-11 |      0.400 | $80,000.00     | $31,990.00      |
| 2023-12-17 |      0.026 | $85,000.00     | $2,179.56       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
