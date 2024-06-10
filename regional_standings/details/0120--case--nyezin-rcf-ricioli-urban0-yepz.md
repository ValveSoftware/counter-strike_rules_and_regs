### Roster Details<br />
Team Name: Case<br />
Roster: nyezin, RCF, RICIOLI, urban0, yepz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [120](../standings_global.md)<br />
Regional Rank: [29]( ../standings_americas.md)<br />
Final Rank Value:  780.4<br />
<br />
Final Rank Value (780.4) = Starting Rank Value (872.0) + Head To Head Adjustments (-91.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.389[<sup>1</sup>](#table2)
- Bounty Collected: 0.352[<sup>2</sup>](#table1)
- Opponent Network: 0.206[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.237<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 872.0
- 400 + ( ( 0.237 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 872.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           83 |      120 | 2024-06-08 | Galorys        | L   | 1.000      | -            | -                | -                | -         |   -15.24 | nyezin, RCF, RICIOLI, urban0, yepz |
|           82 |      169 | 2024-06-07 | Vikings KR     | L   | 1.000      | -            | -                | -                | -         |   -20.40 | nyezin, RCF, RICIOLI, urban0, yepz |
|           81 |      203 | 2024-06-06 | Bounty Hunters | L   | 1.000      | -            | -                | -                | -         |   -22.50 | nyezin, RCF, RICIOLI, urban0, yepz |
|           80 |      241 | 2024-06-06 | Bounty Hunters | L   | 1.000      | -            | -                | -                | -         |   -24.09 | nyezin, RCF, RICIOLI, urban0, yepz |
|           79 |      363 | 2024-06-03 | Solid          | L   | 1.000      | -            | -                | -                | -         |   -15.68 | nyezin, RCF, RICIOLI, urban0, yepz |
|           78 |      412 | 2024-06-01 | ex-2GAME       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.63 | nyezin, RCF, RICIOLI, urban0, yepz |
|           77 |      499 | 2024-05-29 | Dusty Roots    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.80 | nyezin, RCF, RICIOLI, urban0, yepz |
|           76 |      551 | 2024-05-27 | Hawks          | L   | 1.000      | -            | -                | -                | -         |   -27.10 | nyezin, RCF, RICIOLI, urban0, yepz |
|           75 |      646 | 2024-05-22 | BESTIA         | L   | 1.000      | -            | -                | -                | -         |    -8.33 | nyezin, RCF, RICIOLI, urban0, yepz |
|           74 |      650 | 2024-05-22 | BESTIA         | L   | 1.000      | -            | -                | -                | -         |    -8.93 | nyezin, RCF, RICIOLI, urban0, yepz |
|           73 |      689 | 2024-05-21 | Sharks         | W   | 1.000      | 0.450        | 0.037 (0.016)    | 0.486 (0.219)    | 0 (0.000) |    20.92 | nyezin, RCF, RICIOLI, urban0, yepz |
|           72 |      690 | 2024-05-21 | Sharks         | L   | 1.000      | -            | -                | -                | -         |   -10.18 | nyezin, RCF, RICIOLI, urban0, yepz |
|           71 |      699 | 2024-05-21 | ODDIK          | W   | 1.000      | 0.303        | -                | 0.602 (0.182)    | 0 (0.000) |    17.58 | nyezin, RCF, RICIOLI, urban0, yepz |
|           70 |      738 | 2024-05-20 | Galorys        | W   | 1.000      | 0.303        | 0.025 (0.007)    | 0.596 (0.180)    | 0 (0.000) |    14.89 | nyezin, RCF, RICIOLI, urban0, yepz |
|           69 |      756 | 2024-05-19 | ODDIK          | L   | 1.000      | -            | -                | -                | -         |   -13.08 | nyezin, RCF, RICIOLI, urban0, yepz |
|           68 |      784 | 2024-05-18 | Solid          | W   | 1.000      | 0.303        | 0.055 (0.017)    | 0.604 (0.183)    | 0 (0.000) |    16.04 | nyezin, RCF, RICIOLI, urban0, yepz |
|           67 |      821 | 2024-05-17 | Fluxo          | L   | 1.000      | -            | -                | -                | -         |    -6.03 | nyezin, RCF, RICIOLI, urban0, yepz |
|           66 |      827 | 2024-05-17 | Hype           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.67 | nyezin, RCF, RICIOLI, urban0, yepz |
|           65 |      860 | 2024-05-16 | KRÜ            | W   | 1.000      | -            | -                | -                | 0 (0.000) |    14.79 | nyezin, RCF, RICIOLI, urban0, yepz |
|           64 |      868 | 2024-05-16 | Yawara         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.08 | nyezin, RCF, RICIOLI, urban0, yepz |
|           63 |      906 | 2024-05-15 | Corinthians    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.24 | nyezin, RCF, RICIOLI, urban0, yepz |
|           62 |      908 | 2024-05-15 | Corinthians    | W   | 1.000      | -            | -                | -                | -         |     7.72 | nyezin, RCF, RICIOLI, urban0, yepz |
|           61 |      915 | 2024-05-15 | Galorys        | W   | 1.000      | 0.371        | 0.025 (0.009)    | 0.596 (0.221)    | -         |    17.47 | nyezin, RCF, RICIOLI, urban0, yepz |
|           60 |      956 | 2024-05-14 | Galorys        | W   | 1.000      | 0.450        | 0.025 (0.011)    | 0.596 (0.268)    | -         |    19.04 | nyezin, RCF, RICIOLI, urban0, yepz |
|           59 |      960 | 2024-05-14 | Galorys        | L   | 1.000      | -            | -                | -                | -         |   -12.18 | nyezin, RCF, RICIOLI, urban0, yepz |
|           58 |      973 | 2024-05-14 | Hype           | L   | 1.000      | -            | -                | -                | -         |   -23.59 | nyezin, RCF, RICIOLI, urban0, yepz |
|           57 |      995 | 2024-05-13 | Intense        | W   | 1.000      | -            | -                | -                | -         |     5.57 | nyezin, RCF, RICIOLI, urban0, yepz |
|           56 |     1023 | 2024-05-12 | Solid          | L   | 1.000      | -            | -                | -                | -         |   -13.20 | nyezin, RCF, RICIOLI, urban0, yepz |
|           55 |     1056 | 2024-05-11 | Galorys        | L   | 0.999      | -            | -                | -                | -         |   -15.30 | nyezin, RCF, RICIOLI, urban0, yepz |
|           54 |     1134 | 2024-05-07 | inSanitY       | L   | 0.973      | -            | -                | -                | -         |   -17.88 | nyezin, RCF, RICIOLI, urban0, yepz |
|           53 |     1162 | 2024-05-05 | ODDIK          | L   | 0.962      | -            | -                | -                | -         |   -11.72 | nyezin, RCF, RICIOLI, urban0, yepz |
|           52 |     1221 | 2024-05-02 | ODDIK          | W   | 0.941      | 0.450        | 0.024 (0.010)    | 0.602 (0.255)    | -         |    18.51 | nyezin, RCF, RICIOLI, urban0, yepz |
|           51 |     1222 | 2024-05-02 | ODDIK          | L   | 0.941      | -            | -                | -                | -         |   -10.92 | nyezin, RCF, RICIOLI, urban0, yepz |
|           50 |     1246 | 2024-05-01 | 9z             | L   | 0.934      | -            | -                | -                | -         |    -2.08 | nyezin, RCF, RICIOLI, urban0, yepz |
|           49 |     1248 | 2024-05-01 | 9z             | L   | 0.933      | -            | -                | -                | -         |    -2.13 | nyezin, RCF, RICIOLI, urban0, yepz |
|           48 |     1622 | 2024-04-17 | MIBR           | L   | 0.841      | -            | -                | -                | -         |    -0.52 | RCF, RICIOLI, snow, urban0, yepz   |
|           47 |     1659 | 2024-04-16 | Galorys        | W   | 0.835      | -            | -                | -                | -         |    13.88 | RCF, RICIOLI, snow, urban0, yepz   |
|           46 |     1710 | 2024-04-13 | MIBR           | L   | 0.813      | -            | -                | -                | -         |    -0.49 | pr1sma, RCF, RICIOLI, urban0, yepz |
|           45 |     1723 | 2024-04-12 | adalYamigos    | W   | 0.809      | -            | -                | -                | -         |     9.58 | RCF, RICIOLI, snow, urban0, yepz   |
|           44 |     1758 | 2024-04-11 | FURIA Academy  | W   | 0.799      | -            | -                | -                | -         |     4.26 | RCF, RICIOLI, snow, urban0, yepz   |
|           43 |     1831 | 2024-04-09 | paiN           | L   | 0.788      | -            | -                | -                | -         |    -0.43 | RCF, RICIOLI, snow, urban0, yepz   |
|           42 |     1837 | 2024-04-09 | paiN           | L   | 0.788      | -            | -                | -                | -         |    -0.44 | RCF, RICIOLI, snow, urban0, yepz   |
|           41 |     1908 | 2024-04-07 | adalYamigos    | L   | 0.775      | -            | -                | -                | -         |   -15.45 | RCF, RICIOLI, snow, urban0, yepz   |
|           40 |     1970 | 2024-04-04 | RED Canids     | W   | 0.755      | 0.450        | 0.112 (0.038)    | 0.756 (0.257)    | -         |    19.25 | RCF, RICIOLI, snow, urban0, yepz   |
|           39 |     1973 | 2024-04-04 | RED Canids     | L   | 0.754      | -            | -                | -                | -         |    -4.34 | RCF, RICIOLI, snow, urban0, yepz   |
|           38 |     2009 | 2024-04-03 | Imperial       | L   | 0.748      | -            | -                | -                | -         |    -0.59 | RCF, RICIOLI, snow, urban0, yepz   |
|           37 |     2012 | 2024-04-03 | Imperial       | L   | 0.748      | -            | -                | -                | -         |    -0.59 | RCF, RICIOLI, snow, urban0, yepz   |
|           36 |     2143 | 2024-03-27 | MIBR           | L   | 0.701      | -            | -                | -                | -         |    -0.47 | RCF, RICIOLI, snow, urban0, yepz   |
|           35 |     2149 | 2024-03-27 | MIBR           | L   | 0.701      | -            | -                | -                | -         |    -0.47 | RCF, RICIOLI, snow, urban0, yepz   |
|           34 |     2319 | 2024-03-17 | ODDIK          | L   | 0.634      | -            | -                | -                | -         |    -7.04 | RCF, RICIOLI, snow, urban0, yepz   |
|           33 |     2343 | 2024-03-16 | MIBR Academy   | W   | 0.627      | -            | -                | -                | -         |     3.94 | RCF, RICIOLI, snow, urban0, yepz   |
|           32 |     2358 | 2024-03-15 | RED Canids     | L   | 0.621      | -            | -                | -                | -         |    -4.52 | RCF, RICIOLI, snow, urban0, yepz   |
|           31 |     2398 | 2024-03-14 | FURIA Academy  | W   | 0.613      | -            | -                | -                | -         |     3.22 | RCF, RICIOLI, snow, urban0, yepz   |
|           30 |     2417 | 2024-03-13 | RED Canids     | L   | 0.608      | -            | -                | -                | -         |    -4.27 | RCF, RICIOLI, snow, urban0, yepz   |
|           29 |     2427 | 2024-03-13 | Yawara         | L   | 0.607      | -            | -                | -                | -         |   -16.82 | RCF, RICIOLI, snow, urban0, yepz   |
|           28 |     2431 | 2024-03-13 | ODDIK          | L   | 0.606      | -            | -                | -                | -         |    -7.45 | RCF, RICIOLI, snow, urban0, yepz   |
|           27 |     2467 | 2024-03-12 | LA RUGONETA    | W   | 0.599      | -            | -                | -                | -         |     3.22 | RCF, RICIOLI, snow, urban0, yepz   |
|           26 |     2496 | 2024-03-10 | FURIA Academy  | W   | 0.588      | -            | -                | -                | -         |     2.62 | RCF, RICIOLI, snow, urban0, yepz   |
|           25 |     2516 | 2024-03-09 | Sharks         | W   | 0.581      | 0.435        | 0.037 (0.009)    | -                | -         |    12.34 | RCF, RICIOLI, snow, urban0, yepz   |
|           24 |     2566 | 2024-03-07 | Fluxo          | W   | 0.568      | 0.435        | 0.064 (0.016)    | 0.670 (0.165)    | -         |    12.89 | RCF, RICIOLI, snow, urban0, yepz   |
|           23 |     2628 | 2024-03-05 | adalYamigos    | L   | 0.555      | -            | -                | -                | -         |   -11.94 | RCF, RICIOLI, snow, urban0, yepz   |
|           22 |     2630 | 2024-03-05 | adalYamigos    | L   | 0.555      | -            | -                | -                | -         |   -12.44 | RCF, RICIOLI, snow, urban0, yepz   |
|           21 |     2658 | 2024-03-04 | Fluxo          | L   | 0.548      | -            | -                | -                | -         |    -5.17 | RCF, RICIOLI, snow, urban0, yepz   |
|           20 |     2659 | 2024-03-04 | Fluxo          | L   | 0.548      | -            | -                | -                | -         |    -5.38 | RCF, RICIOLI, snow, urban0, yepz   |
|           19 |     2835 | 2024-02-24 | ex-2GAME       | W   | 0.488      | -            | -                | -                | -         |     4.52 | RCF, RICIOLI, snow, urban0, yepz   |
|           18 |     2842 | 2024-02-24 | ex-2GAME       | L   | 0.488      | -            | -                | -                | -         |   -11.11 | RCF, RICIOLI, snow, urban0, yepz   |
|           17 |     2895 | 2024-02-21 | Solid          | W   | 0.469      | 0.450        | 0.055 (0.012)    | 0.604 (0.127)    | -         |     7.66 | RCF, RICIOLI, snow, urban0, yepz   |
|           16 |     2896 | 2024-02-21 | Solid          | L   | 0.468      | -            | -                | -                | -         |    -7.25 | RCF, RICIOLI, snow, urban0, yepz   |
|           15 |     2903 | 2024-02-21 | Sharks         | L   | 0.468      | -            | -                | -                | -         |    -5.71 | RCF, RICIOLI, snow, urban0, yepz   |
|           14 |     2932 | 2024-02-20 | 9z             | L   | 0.461      | -            | -                | -                | -         |    -1.29 | RCF, RICIOLI, snow, urban0, yepz   |
|           13 |     2935 | 2024-02-20 | W7M            | W   | 0.461      | -            | -                | -                | -         |     5.98 | RCF, RICIOLI, snow, urban0, yepz   |
|           12 |     2939 | 2024-02-20 | Sharks         | L   | 0.460      | -            | -                | -                | -         |    -5.58 | RCF, RICIOLI, snow, urban0, yepz   |
|           11 |     2979 | 2024-02-18 | Galorys        | L   | 0.448      | -            | -                | -                | -         |    -7.91 | RCF, RICIOLI, snow, urban0, yepz   |
|           10 |     3000 | 2024-02-17 | Solid          | W   | 0.442      | -            | -                | -                | -         |     6.88 | RCF, RICIOLI, snow, urban0, yepz   |
|            9 |     3024 | 2024-02-16 | BESTIA         | W   | 0.435      | -            | -                | -                | -         |     8.83 | RCF, RICIOLI, snow, urban0, yepz   |
|            8 |     3057 | 2024-02-15 | 9z             | L   | 0.428      | -            | -                | -                | -         |    -1.00 | RCF, RICIOLI, snow, urban0, yepz   |
|            7 |     3058 | 2024-02-15 | Sharks         | W   | 0.427      | -            | -                | -                | -         |     8.67 | RCF, RICIOLI, snow, urban0, yepz   |
|            6 |     3065 | 2024-02-15 | Flamengo       | W   | 0.426      | -            | -                | -                | -         |     1.52 | RCF, RICIOLI, snow, urban0, yepz   |
|            5 |     3086 | 2024-02-14 | O PLANO C      | W   | 0.422      | -            | -                | -                | -         |     0.84 | RCF, RICIOLI, snow, urban0, yepz   |
|            4 |     3129 | 2024-02-13 | W7M            | W   | 0.415      | -            | -                | -                | -         |     5.87 | RCF, RICIOLI, snow, urban0, yepz   |
|            3 |     3133 | 2024-02-13 | W7M            | L   | 0.415      | -            | -                | -                | -         |    -7.36 | RCF, RICIOLI, snow, urban0, yepz   |
|            2 |     3138 | 2024-02-13 | Galorys        | W   | 0.413      | -            | -                | -                | -         |     6.17 | RCF, RICIOLI, snow, urban0, yepz   |
|            1 |     3151 | 2024-02-12 | Dusty Roots    | W   | 0.406      | -            | -                | -                | -         |     3.87 | RCF, RICIOLI, snow, urban0, yepz   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,171.29)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $600.00        | $600.00         |
| 2024-05-21 |      1.000 | $3,500.00      | $3,500.00       |
| 2024-05-19 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-03-14 |      0.614 | $5,000.00      | $3,071.29       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
