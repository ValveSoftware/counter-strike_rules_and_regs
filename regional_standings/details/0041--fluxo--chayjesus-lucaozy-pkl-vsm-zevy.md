### Roster Details<br />
Team Name: Fluxo<br />
Roster: chayJESUS, Lucaozy, PKL, vsm, zevy<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [41](../standings_global.md)<br />
Regional Rank: [9]( ../standings_americas.md)<br />
Final Rank Value:  1088.2<br />
<br />
Final Rank Value (1088.2) = Starting Rank Value (1045.7) + Head To Head Adjustments (42.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.546[<sup>1</sup>](#table2)
- Bounty Collected: 0.523[<sup>2</sup>](#table1)
- Opponent Network: 0.287[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.339<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1045.7
- 400 + ( ( 0.339 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1045.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           60 |      412 | 2024-04-18 | paiN        | L   | 1.000      | -            | -                | -                | -         |    -1.76 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           59 |      417 | 2024-04-18 | Imperial    | L   | 1.000      | -            | -                | -                | -         |    -2.06 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           58 |      464 | 2024-04-17 | ODDIK       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.11 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           57 |      474 | 2024-04-17 | Solid       | W   | 1.000      | 0.143        | 0.132 (0.019)    | -                | 0 (0.000) |     6.55 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           56 |      504 | 2024-04-16 | Hype        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.69 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           55 |      564 | 2024-04-13 | Galorys     | L   | 1.000      | -            | -                | -                | -         |   -24.75 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           54 |      629 | 2024-04-10 | Imperial    | W   | 1.000      | 0.450        | 0.656 (0.295)    | 0.965 (0.434)    | 0 (0.000) |    29.70 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           53 |      633 | 2024-04-10 | Imperial    | L   | 1.000      | -            | -                | -                | -         |    -1.56 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           52 |      683 | 2024-04-09 | ODDIK       | W   | 1.000      | 0.450        | -                | 0.547 (0.246)    | 0 (0.000) |     7.88 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           51 |      688 | 2024-04-09 | ODDIK       | W   | 1.000      | 0.450        | -                | 0.547 (0.246)    | 0 (0.000) |     8.43 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           50 |      724 | 2024-04-08 | ODDIK       | W   | 1.000      | 0.435        | -                | 0.547 (0.238)    | 0 (0.000) |     9.05 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           49 |      773 | 2024-04-06 | BESTIA      | L   | 1.000      | -            | -                | -                | -         |   -24.34 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           48 |      775 | 2024-04-06 | Solid       | W   | 1.000      | 0.435        | 0.132 (0.058)    | 0.503 (0.219)    | 0 (0.000) |     7.34 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           47 |      790 | 2024-04-05 | MIBR        | L   | 0.995      | -            | -                | -                | -         |    -2.08 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           46 |      791 | 2024-04-05 | MIBR        | W   | 0.994      | 0.450        | 0.638 (0.285)    | 0.940 (0.421)    | 0 (0.000) |    29.55 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           45 |      818 | 2024-04-04 | Corinthians | W   | 0.988      | -            | -                | -                | 0 (0.000) |     2.35 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           44 |      824 | 2024-04-04 | Corinthians | W   | 0.988      | -            | -                | -                | -         |     2.41 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           43 |      836 | 2024-04-04 | RED Canids  | L   | 0.986      | -            | -                | -                | -         |   -15.12 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           42 |      852 | 2024-04-03 | MIBR        | L   | 0.982      | -            | -                | -                | -         |    -1.64 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           41 |      865 | 2024-04-03 | BESTIA      | W   | 0.980      | -            | -                | -                | -         |     7.38 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           40 |      902 | 2024-04-02 | MIBR        | L   | 0.975      | -            | -                | -                | -         |    -1.59 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           39 |      906 | 2024-04-02 | BESTIA      | W   | 0.974      | -            | -                | -                | -         |     7.12 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           38 |      991 | 2024-03-27 | Galorys     | L   | 0.935      | -            | -                | -                | -         |   -23.09 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           37 |      997 | 2024-03-27 | Galorys     | W   | 0.935      | 0.450        | 0.047 (0.020)    | 0.510 (0.215)    | -         |     5.96 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           36 |     1272 | 2024-03-13 | Intense     | W   | 0.841      | -            | -                | -                | -         |     0.66 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           35 |     1278 | 2024-03-13 | Solid       | L   | 0.840      | -            | -                | -                | -         |   -20.43 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           34 |     1305 | 2024-03-12 | MIBR        | W   | 0.834      | 0.435        | 0.638 (0.231)    | 0.940 (0.341)    | -         |    24.86 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           33 |     1335 | 2024-03-11 | Sharks      | W   | 0.826      | 0.435        | 0.060 (0.021)    | -                | -         |     9.34 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           32 |     1379 | 2024-03-09 | Corinthians | W   | 0.812      | -            | -                | -                | -         |     2.10 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           31 |     1415 | 2024-03-07 | Case        | L   | 0.801      | -            | -                | -                | -         |   -19.86 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           30 |     1440 | 2024-03-06 | Solid       | L   | 0.795      | -            | -                | -                | -         |   -19.53 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           29 |     1442 | 2024-03-06 | Solid       | W   | 0.795      | 0.450        | 0.132 (0.047)    | -                | -         |     5.29 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           28 |     1507 | 2024-03-04 | Case        | W   | 0.782      | 0.450        | -                | 0.578 (0.203)    | -         |     5.35 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           27 |     1508 | 2024-03-04 | Case        | W   | 0.781      | -            | -                | -                | -         |     5.61 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           26 |     1665 | 2024-02-25 | Imperial    | W   | 0.727      | 0.435        | 0.656 (0.207)    | 0.965 (0.305)    | -         |    22.04 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           25 |     1695 | 2024-02-24 | Sharks      | W   | 0.721      | -            | -                | -                | -         |     8.17 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           24 |     1746 | 2024-02-21 | W7M         | L   | 0.702      | -            | -                | -                | -         |   -16.96 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           23 |     1750 | 2024-02-21 | W7M         | W   | 0.701      | -            | -                | -                | -         |     5.02 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           22 |     1757 | 2024-02-21 | Solid       | W   | 0.700      | 0.435        | 0.132 (0.040)    | -                | -         |     6.02 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           21 |     1782 | 2024-02-20 | Solid       | L   | 0.694      | -            | -                | -                | -         |   -16.19 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           20 |     1878 | 2024-02-16 | 9z          | W   | 0.667      | -            | -                | -                | -         |     9.40 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           19 |     1905 | 2024-02-15 | Imperial    | L   | 0.661      | -            | -                | -                | -         |    -0.61 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           18 |     1908 | 2024-02-15 | W7M         | W   | 0.661      | -            | -                | -                | -         |     5.50 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           17 |     1912 | 2024-02-15 | Sharks      | W   | 0.660      | -            | -                | -                | -         |     7.78 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           16 |     1915 | 2024-02-15 | Sharks      | W   | 0.659      | -            | -                | -                | -         |     8.22 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           15 |     1936 | 2024-02-14 | Intense     | W   | 0.655      | -            | -                | -                | -         |     0.61 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           14 |     2001 | 2024-02-12 | Flamengo    | W   | 0.639      | -            | -                | -                | -         |     1.13 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           13 |     2318 | 2024-01-23 | 9z          | L   | 0.508      | -            | -                | -                | -         |    -9.45 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           12 |     2339 | 2024-01-22 | ODDIK       | W   | 0.502      | -            | -                | -                | -         |     6.71 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           11 |     2376 | 2024-01-21 | Case        | L   | 0.494      | -            | -                | -                | -         |   -13.06 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|           10 |     2413 | 2024-01-20 | Imperial    | L   | 0.487      | -            | -                | -                | -         |    -0.39 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|            9 |     2457 | 2024-01-19 | RED Canids  | L   | 0.481      | -            | -                | -                | -         |    -8.87 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|            8 |     2464 | 2024-01-19 | adalYamigos | W   | 0.480      | -            | -                | -                | -         |     1.85 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|            7 |     3277 | 2023-12-02 | ex-Anonymo  | L   | 0.158      | -            | -                | -                | -         |    -4.27 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|            6 |     3307 | 2023-11-30 | G2          | L   | 0.145      | -            | -                | -                | -         |    -0.04 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|            5 |     3341 | 2023-11-26 | Imperial    | L   | 0.121      | -            | -                | -                | -         |    -0.09 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|            4 |     3359 | 2023-11-25 | BESTIA      | W   | 0.115      | -            | -                | -                | -         |     0.77 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|            3 |     3366 | 2023-11-25 | Sharks      | W   | 0.113      | -            | -                | -                | -         |     1.04 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|            2 |     3380 | 2023-11-24 | Corinthians | W   | 0.108      | -            | -                | -                | -         |     0.34 | chayJESUS, Lucaozy, PKL, vsm, zevy |
|            1 |     3399 | 2023-11-23 | Imperial    | L   | 0.102      | -            | -                | -                | -         |    -0.07 | chayJESUS, Lucaozy, PKL, vsm, zevy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($23,926.31)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.15) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-14 |      0.848 | $5,000.00      | $4,237.61       |
| 2024-02-25 |      0.727 | $25,000.00     | $18,182.02      |
| 2023-11-26 |      0.121 | $12,500.00     | $1,506.68       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
