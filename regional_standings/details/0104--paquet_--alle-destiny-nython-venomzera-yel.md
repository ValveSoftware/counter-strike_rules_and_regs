### Roster Details<br />
Team Name: Paquetá<br />
Roster: ALLE, DeStiNy, nython, venomzera, yel<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [104](../standings_global.md)<br />
Regional Rank: [24]( ../standings_americas.md)<br />
Final Rank Value:  788.5<br />
<br />
Final Rank Value (788.5) = Starting Rank Value (717.7) + Head To Head Adjustments (70.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.301[<sup>1</sup>](#table2)
- Bounty Collected: 0.270[<sup>2</sup>](#table1)
- Opponent Network: 0.050[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.155<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 717.7
- 400 + ( ( 0.155 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 717.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |       24 | 2023-02-11 | ARCTIC              | W   | 1.000      | 0.143        | 0.036 (0.005)    | 0.230 (0.033)    | 0 (0.000) |    18.43 | ALLE, DeStiNy, nython, venomzera, yel |
|           39 |       26 | 2023-02-11 | FURIA Academy       | W   | 1.000      | 0.333        | 0.004 (0.001)    | 0.278 (0.093)    | 0 (0.000) |    15.08 | ALLE, DeStiNy, nython, venomzera, yel |
|           38 |       43 | 2023-02-10 | Boca Juniors        | W   | 1.000      | 0.333        | 0.005 (0.002)    | 0.200 (0.067)    | 0 (0.000) |    12.90 | ALLE, DeStiNy, nython, venomzera, yel |
|           37 |      204 | 2023-02-02 | Meta                | L   | 1.000      | -            | -                | -                | -         |   -14.89 | ALLE, DeStiNy, nython, venomzera, yel |
|           36 |      359 | 2023-01-27 | Furious             | W   | 1.000      | 0.384        | -                | 0.116 (0.044)    | 0 (0.000) |    10.25 | ALLE, DeStiNy, nython, venomzera, yel |
|           35 |      500 | 2023-01-23 | W7M fe              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.84 | ALLE, DeStiNy, nython, venomzera, yel |
|           34 |      632 | 2023-01-17 | Meta                | L   | 1.000      | -            | -                | -                | -         |   -15.02 | ALLE, DeStiNy, nython, venomzera, yel |
|           33 |      637 | 2023-01-17 | TropiCaos           | W   | 1.000      | 0.143        | 0.014 (0.002)    | 0.222 (0.032)    | 0 (0.000) |    15.38 | ALLE, DeStiNy, nython, venomzera, yel |
|           32 |     1147 | 2022-12-05 | Fluxo               | L   | 0.739      | -            | -                | -                | -         |    -5.69 | ALLE, DeStiNy, Gafolo, venomzera, xns |
|           31 |     1243 | 2022-12-02 | MIBR Academy        | W   | 0.721      | -            | -                | -                | 0 (0.000) |     4.98 | ALLE, DeStiNy, Gafolo, venomzera, xns |
|           30 |     1277 | 2022-12-01 | FURIA Academy       | L   | 0.714      | -            | -                | -                | -         |   -11.68 | ALLE, DeStiNy, Gafolo, venomzera, xns |
|           29 |     1349 | 2022-11-28 | Los Grandes Academy | W   | 0.695      | -            | -                | -                | 0 (0.000) |     7.08 | ALLE, DeStiNy, Gafolo, venomzera, xns |
|           28 |     1442 | 2022-11-25 | Sharks              | L   | 0.675      | -            | -                | -                | -         |    -9.48 | ALLE, DeStiNy, Gafolo, venomzera, xns |
|           27 |     1805 | 2022-10-29 | Fuscão 1500         | L   | 0.494      | -            | -                | -                | -         |    -7.25 | ALLE, DeStiNy, Gafolo, venomzera, xns |
|           26 |     1838 | 2022-10-27 | Meta                | W   | 0.480      | 0.371        | 0.010 (0.002)    | 0.302 (0.054)    | 0 (0.000) |     7.64 | ALLE, DeStiNy, Gafolo, venomzera, xns |
|           25 |     1987 | 2022-10-21 | Rehl                | W   | 0.440      | -            | -                | -                | 0 (0.000) |     5.09 | ALLE, DeStiNy, Gafolo, venomzera, xns |
|           24 |     2004 | 2022-10-20 | Corinthians         | W   | 0.434      | 0.371        | 0.014 (0.002)    | 0.430 (0.069)    | -         |     7.32 | ALLE, DeStiNy, Gafolo, venomzera, xns |
|           23 |     2037 | 2022-10-19 | Fuscão 1500         | W   | 0.427      | 0.371        | 0.013 (0.002)    | 0.221 (0.035)    | -         |     7.50 | ALLE, DeStiNy, Gafolo, venomzera, xns |
|           22 |     2603 | 2022-09-25 | Fluxo               | L   | 0.269      | -            | -                | -                | -         |    -2.30 | ALLE, DeStiNy, Gafolo, venomzera, xns |
|           21 |     2629 | 2022-09-25 | Sharks              | W   | 0.266      | 0.384        | 0.017 (0.002)    | 0.439 (0.045)    | -         |     4.76 | ALLE, DeStiNy, Gafolo, venomzera, xns |
|           20 |     2646 | 2022-09-24 | ODDIK               | W   | 0.261      | 0.384        | 0.016 (0.002)    | -                | -         |     4.64 | ALLE, DeStiNy, Gafolo, venomzera, xns |
|           19 |     2690 | 2022-09-23 | FURIA Academy       | W   | 0.254      | 0.384        | 0.004 (0.000)    | 0.278 (0.027)    | -         |     4.09 | ALLE, DeStiNy, Gafolo, venomzera, xns |
|           18 |     2873 | 2022-09-17 | Los Grandes Academy | W   | 0.215      | -            | -                | -                | -         |     0.96 | ALLE, DeStiNy, Gafolo, venomzera, xns |
|           17 |     2932 | 2022-09-15 | Fluxo               | L   | 0.202      | -            | -                | -                | -         |    -1.79 | ALLE, DeStiNy, Gafolo, venomzera, xns |
|           16 |     2941 | 2022-09-15 | O PLANO             | W   | 0.201      | -            | -                | -                | -         |     1.76 | ALLE, DeStiNy, Gafolo, venomzera, xns |
|           15 |     2978 | 2022-09-14 | Fluxo               | L   | 0.195      | -            | -                | -                | -         |    -1.73 | ALLE, DeStiNy, Gafolo, venomzera, xns |
|           14 |     2988 | 2022-09-14 | FURIA Academy       | W   | 0.194      | -            | -                | -                | -         |     2.27 | ALLE, DeStiNy, Gafolo, venomzera, xns |
|           13 |     3023 | 2022-09-13 | FUSION              | W   | 0.187      | -            | -                | -                | -         |     1.41 | ALLE, DeStiNy, Gafolo, venomzera, xns |
|           12 |     3061 | 2022-09-11 | Fuscão 1500         | W   | 0.175      | -            | -                | -                | -         |     3.20 | ALLE, DeStiNy, Gafolo, venomzera, xns |
|           11 |     3065 | 2022-09-11 | O PLANO             | L   | 0.174      | -            | -                | -                | -         |    -3.99 | ALLE, DeStiNy, Gafolo, venomzera, xns |
|           10 |     3100 | 2022-09-10 | Rehl                | W   | 0.168      | -            | -                | -                | -         |     2.09 | ALLE, DeStiNy, Gafolo, venomzera, xns |
|            9 |     3112 | 2022-09-10 | ozbonz              | W   | 0.168      | -            | -                | -                | -         |     0.76 | ALLE, DeStiNy, Gafolo, venomzera, xns |
|            8 |     3128 | 2022-09-10 | DNG                 | W   | 0.167      | -            | -                | -                | -         |     2.92 | ALLE, DeStiNy, Gafolo, venomzera, xns |
|            7 |     3189 | 2022-09-08 | FURIA Academy       | L   | 0.155      | -            | -                | -                | -         |    -2.37 | ALLE, DeStiNy, Gafolo, venomzera, xns |
|            6 |     3194 | 2022-09-08 | AFundaa             | W   | 0.155      | -            | -                | -                | -         |     0.71 | ALLE, DeStiNy, Gafolo, venomzera, xns |
|            5 |     3553 | 2022-08-26 | ARCTIC              | L   | 0.068      | -            | -                | -                | -         |    -0.62 | ALLE, DeStiNy, Gafolo, venomzera, xns |
|            4 |     3561 | 2022-08-26 | Los Grandes         | W   | 0.067      | -            | -                | -                | -         |     0.44 | ALLE, DeStiNy, Gafolo, venomzera, xns |
|            3 |     3668 | 2022-08-21 | Los Grandes         | L   | 0.035      | -            | -                | -                | -         |    -0.87 | ALLE, DeStiNy, Gafolo, venomzera, xns |
|            2 |     3774 | 2022-08-16 | Fluxo               | L   | 0.002      | -            | -                | -                | -         |    -0.01 | ALLE, DeStiNy, Gafolo, venomzera, xns |
|            1 |     3780 | 2022-08-16 | DNG                 | W   | 0.001      | -            | -                | -                | -         |     0.02 | ALLE, DeStiNy, Gafolo, venomzera, xns |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,246.21)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-10-30 |      0.501 | $1,800.00      | $902.14         |
| 2022-09-25 |      0.269 | $5,000.00      | $1,344.07       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
