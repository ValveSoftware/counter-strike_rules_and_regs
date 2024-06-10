### Roster Details<br />
Team Name: Fluxo<br />
Roster: arT, chayJESUS, Lucaozy, nicks, zevy<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [49](../standings_global.md)<br />
Regional Rank: [10]( ../standings_americas.md)<br />
Final Rank Value:  1086.8<br />
<br />
Final Rank Value (1086.8) = Starting Rank Value (989.4) + Head To Head Adjustments (97.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.456[<sup>1</sup>](#table2)
- Bounty Collected: 0.469[<sup>2</sup>](#table1)
- Opponent Network: 0.258[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.296<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 989.4
- 400 + ( ( 0.296 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 989.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           74 |       92 | 2024-06-08 | KRÜ            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.35 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           73 |      170 | 2024-06-07 | Bounty Hunters | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.94 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           72 |      233 | 2024-06-06 | W7M            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.97 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           71 |      277 | 2024-06-05 | paiN           | L   | 1.000      | -            | -                | -                | -         |    -3.50 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           70 |      327 | 2024-06-04 | 9z             | L   | 1.000      | -            | -                | -                | -         |    -5.69 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           69 |      656 | 2024-05-22 | BESTIA         | L   | 1.000      | -            | -                | -                | -         |   -17.49 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           68 |      657 | 2024-05-22 | BESTIA         | L   | 1.000      | -            | -                | -                | -         |   -19.07 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           67 |      727 | 2024-05-20 | RED Canids     | W   | 1.000      | 0.450        | 0.112 (0.050)    | 0.756 (0.340)    | 0 (0.000) |    18.43 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           66 |      729 | 2024-05-20 | RED Canids     | L   | 1.000      | -            | -                | -                | -         |   -12.83 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           65 |      787 | 2024-05-18 | 9z             | L   | 1.000      | -            | -                | -                | -         |    -7.64 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           64 |      821 | 2024-05-17 | Case           | W   | 1.000      | 0.371        | -                | 0.656 (0.243)    | 0 (0.000) |     6.03 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           63 |      854 | 2024-05-16 | RED Canids     | L   | 1.000      | -            | -                | -                | -         |   -15.42 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           62 |      900 | 2024-05-15 | ex-2GAME       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.70 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           61 |      902 | 2024-05-15 | ex-2GAME       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.77 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           60 |      916 | 2024-05-15 | Imperial       | L   | 1.000      | -            | -                | -                | -         |    -4.71 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           59 |      965 | 2024-05-14 | Sharks         | W   | 1.000      | 0.371        | 0.037 (0.014)    | -                | 0 (0.000) |    10.89 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           58 |      978 | 2024-05-14 | ODDIK          | W   | 1.000      | 0.384        | -                | 0.602 (0.232)    | 0 (0.000) |     8.85 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           57 |      996 | 2024-05-13 | Hype           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.76 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           56 |     1025 | 2024-05-12 | Vikings KR     | W   | 1.000      | -            | -                | -                | -         |     3.37 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           55 |     1085 | 2024-05-09 | paiN           | W   | 0.989      | 0.450        | 0.437 (0.194)    | 0.877 (0.390)    | -         |    28.42 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           54 |     1091 | 2024-05-09 | paiN           | L   | 0.988      | -            | -                | -                | -         |    -2.40 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           53 |     1563 | 2024-04-18 | paiN           | L   | 0.849      | -            | -                | -                | -         |    -1.88 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           52 |     1568 | 2024-04-18 | Imperial       | L   | 0.848      | -            | -                | -                | -         |    -2.47 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           51 |     1615 | 2024-04-17 | ODDIK          | W   | 0.842      | -            | -                | -                | -         |     7.50 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           50 |     1625 | 2024-04-17 | Solid          | W   | 0.841      | -            | -                | -                | -         |     6.45 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           49 |     1655 | 2024-04-16 | Hype           | W   | 0.835      | -            | -                | -                | -         |     1.84 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           48 |     1715 | 2024-04-13 | Galorys        | L   | 0.813      | -            | -                | -                | -         |   -19.33 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           47 |     1780 | 2024-04-10 | Imperial       | W   | 0.795      | 0.450        | 0.415 (0.149)    | 0.799 (0.286)    | -         |    22.96 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           46 |     1784 | 2024-04-10 | Imperial       | L   | 0.794      | -            | -                | -                | -         |    -1.91 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           45 |     1834 | 2024-04-09 | ODDIK          | W   | 0.788      | 0.450        | -                | 0.602 (0.214)    | -         |     7.33 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           44 |     1839 | 2024-04-09 | ODDIK          | W   | 0.788      | 0.450        | -                | 0.602 (0.214)    | -         |     7.77 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           43 |     1875 | 2024-04-08 | ODDIK          | W   | 0.781      | 0.435        | -                | 0.602 (0.204)    | -         |     8.19 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           42 |     1924 | 2024-04-06 | BESTIA         | L   | 0.768      | -            | -                | -                | -         |   -15.63 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           41 |     1926 | 2024-04-06 | Solid          | W   | 0.767      | 0.435        | 0.055 (0.018)    | 0.604 (0.202)    | -         |     6.74 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           40 |     1941 | 2024-04-05 | MIBR           | L   | 0.761      | -            | -                | -                | -         |    -1.68 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           39 |     1942 | 2024-04-05 | MIBR           | W   | 0.761      | 0.450        | 0.284 (0.097)    | 0.750 (0.257)    | -         |    22.52 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           38 |     1969 | 2024-04-04 | Corinthians    | W   | 0.755      | -            | -                | -                | -         |     2.35 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           37 |     1975 | 2024-04-04 | Corinthians    | W   | 0.754      | -            | -                | -                | -         |     2.41 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           36 |     1987 | 2024-04-04 | RED Canids     | L   | 0.753      | -            | -                | -                | -         |    -9.50 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           35 |     2003 | 2024-04-03 | MIBR           | L   | 0.749      | -            | -                | -                | -         |    -1.37 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           34 |     2016 | 2024-04-03 | BESTIA         | W   | 0.747      | -            | -                | -                | -         |     9.41 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           33 |     2053 | 2024-04-02 | MIBR           | L   | 0.742      | -            | -                | -                | -         |    -1.31 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           32 |     2057 | 2024-04-02 | BESTIA         | W   | 0.741      | -            | -                | -                | -         |     9.72 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           31 |     2142 | 2024-03-27 | Galorys        | L   | 0.702      | -            | -                | -                | -         |   -16.20 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           30 |     2148 | 2024-03-27 | Galorys        | W   | 0.701      | -            | -                | -                | -         |     5.81 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           29 |     2423 | 2024-03-13 | Intense        | W   | 0.607      | -            | -                | -                | -         |     1.16 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           28 |     2429 | 2024-03-13 | Solid          | L   | 0.606      | -            | -                | -                | -         |   -13.66 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           27 |     2456 | 2024-03-12 | MIBR           | W   | 0.601      | 0.435        | 0.284 (0.074)    | -                | -         |    17.90 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           26 |     2486 | 2024-03-11 | Sharks         | W   | 0.593      | -            | -                | -                | -         |     8.48 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           25 |     2530 | 2024-03-09 | Corinthians    | W   | 0.579      | -            | -                | -                | -         |     2.08 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           24 |     2566 | 2024-03-07 | Case           | L   | 0.568      | -            | -                | -                | -         |   -12.89 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           23 |     2591 | 2024-03-06 | Solid          | L   | 0.562      | -            | -                | -                | -         |   -12.49 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           22 |     2593 | 2024-03-06 | Solid          | W   | 0.561      | 0.450        | 0.055 (0.014)    | -                | -         |     5.21 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           21 |     2658 | 2024-03-04 | Case           | W   | 0.548      | -            | -                | -                | -         |     5.17 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           20 |     2659 | 2024-03-04 | Case           | W   | 0.548      | -            | -                | -                | -         |     5.38 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           19 |     2816 | 2024-02-25 | Imperial       | W   | 0.494      | 0.435        | 0.415 (0.089)    | -                | -         |    14.64 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           18 |     2846 | 2024-02-24 | Sharks         | W   | 0.487      | -            | -                | -                | -         |     7.21 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           17 |     2897 | 2024-02-21 | W7M            | L   | 0.468      | -            | -                | -                | -         |   -10.96 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           16 |     2901 | 2024-02-21 | W7M            | W   | 0.468      | -            | -                | -                | -         |     3.79 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           15 |     2908 | 2024-02-21 | Solid          | W   | 0.466      | -            | -                | -                | -         |     5.21 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           14 |     2933 | 2024-02-20 | Solid          | L   | 0.461      | -            | -                | -                | -         |    -9.60 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           13 |     3029 | 2024-02-16 | 9z             | W   | 0.434      | 0.435        | 0.194 (0.037)    | -                | -         |    11.82 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           12 |     3056 | 2024-02-15 | Imperial       | L   | 0.428      | -            | -                | -                | -         |    -0.69 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           11 |     3059 | 2024-02-15 | W7M            | W   | 0.427      | -            | -                | -                | -         |     3.83 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           10 |     3063 | 2024-02-15 | Sharks         | W   | 0.426      | -            | -                | -                | -         |     6.80 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            9 |     3066 | 2024-02-15 | Sharks         | W   | 0.426      | -            | -                | -                | -         |     7.06 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            8 |     3087 | 2024-02-14 | Intense        | W   | 0.421      | -            | -                | -                | -         |     1.03 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            7 |     3152 | 2024-02-12 | Flamengo       | W   | 0.406      | -            | -                | -                | -         |     0.85 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            6 |     3469 | 2024-01-23 | 9z             | L   | 0.274      | -            | -                | -                | -         |    -1.06 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            5 |     3490 | 2024-01-22 | ODDIK          | W   | 0.268      | -            | -                | -                | -         |     4.15 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            4 |     3527 | 2024-01-21 | Case           | L   | 0.260      | -            | -                | -                | -         |    -7.06 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            3 |     3564 | 2024-01-20 | Imperial       | L   | 0.254      | -            | -                | -                | -         |    -0.38 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            2 |     3608 | 2024-01-19 | RED Canids     | L   | 0.248      | -            | -                | -                | -         |    -3.04 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            1 |     3615 | 2024-01-19 | adalYamigos    | W   | 0.247      | -            | -                | -                | -         |     1.02 | chayJESUS, Lucaozy, PKL, vsm, zevy   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($19,421.68)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-05-19 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-03-14 |      0.614 | $5,000.00      | $3,071.29       |
| 2024-02-25 |      0.494 | $25,000.00     | $12,350.40      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
