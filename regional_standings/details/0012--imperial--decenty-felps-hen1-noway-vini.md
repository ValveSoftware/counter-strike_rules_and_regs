### Roster Details<br />
Team Name: Imperial<br />
Roster: decenty, felps, HEN1, noway, VINI<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [12](../standings_global.md)<br />
Regional Rank: [2]( ../standings_americas.md)<br />
Final Rank Value:  1501.5<br />
<br />
Final Rank Value (1501.5) = Starting Rank Value (1738.7) + Head To Head Adjustments (-237.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.804[<sup>1</sup>](#table2)
- Bounty Collected: 0.568[<sup>2</sup>](#table1)
- Opponent Network: 0.401[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.693<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1738.7
- 400 + ( ( 0.693 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1738.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           85 |       35 | 2024-04-20 | paiN              | L   | 1.000      | -            | -                | -                | -         |   -14.23 | decenty, felps, HEN1, noway, VINI |
|           84 |       66 | 2024-04-20 | paiN              | W   | 1.000      | 0.589        | 0.698 (0.411)    | 0.854 (0.503)    | 1 (1.000) |    16.74 | decenty, felps, HEN1, noway, VINI |
|           83 |       80 | 2024-04-19 | paiN              | L   | 1.000      | -            | -                | -                | -         |   -13.85 | decenty, felps, HEN1, noway, VINI |
|           82 |      117 | 2024-04-18 | MIBR              | L   | 1.000      | -            | -                | -                | -         |   -17.48 | decenty, felps, HEN1, noway, VINI |
|           81 |      120 | 2024-04-18 | 9z                | W   | 1.000      | 0.589        | -                | 0.554 (0.326)    | 1 (1.000) |     2.11 | decenty, felps, HEN1, noway, VINI |
|           80 |      121 | 2024-04-18 | Fluxo             | W   | 1.000      | -            | -                | -                | -         |     2.44 | decenty, felps, HEN1, noway, VINI |
|           79 |      132 | 2024-04-18 | Metizport         | W   | 1.000      | 0.589        | 0.136 (0.080)    | 1.000 (0.589)    | 1 (1.000) |     1.52 | decenty, felps, HEN1, noway, VINI |
|           78 |      235 | 2024-04-15 | MIBR              | L   | 1.000      | -            | -                | -                | -         |   -20.21 | decenty, felps, HEN1, noway, VINI |
|           77 |      250 | 2024-04-14 | paiN              | W   | 1.000      | 0.435        | 0.698 (0.303)    | 0.854 (0.371)    | -         |    16.39 | decenty, felps, HEN1, noway, VINI |
|           76 |      260 | 2024-04-13 | RED Canids        | W   | 1.000      | 0.435        | -                | 0.842 (0.366)    | -         |     2.13 | decenty, felps, HEN1, noway, VINI |
|           75 |      296 | 2024-04-11 | adalYamigos       | W   | 1.000      | -            | -                | -                | -         |     0.64 | decenty, felps, HEN1, noway, VINI |
|           74 |      306 | 2024-04-11 | paiN              | L   | 1.000      | -            | -                | -                | -         |   -13.97 | decenty, felps, HEN1, noway, VINI |
|           73 |      333 | 2024-04-10 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |   -29.45 | decenty, felps, HEN1, noway, VINI |
|           72 |      337 | 2024-04-10 | Fluxo             | W   | 1.000      | 0.450        | 0.147 (0.066)    | 0.633 (0.285)    | -         |     1.79 | decenty, felps, HEN1, noway, VINI |
|           71 |      353 | 2024-04-10 | MIBR              | L   | 1.000      | -            | -                | -                | -         |   -23.71 | decenty, felps, HEN1, noway, VINI |
|           70 |      399 | 2024-04-09 | Solid             | W   | 1.000      | 0.450        | 0.126 (0.056)    | -                | -         |     0.54 | decenty, felps, HEN1, noway, VINI |
|           69 |      404 | 2024-04-09 | Solid             | W   | 1.000      | 0.450        | 0.126 (0.056)    | -                | -         |     0.54 | decenty, felps, HEN1, noway, VINI |
|           68 |      409 | 2024-04-09 | paiN              | W   | 1.000      | 0.143        | 0.698 (0.100)    | -                | -         |    15.26 | decenty, felps, HEN1, noway, VINI |
|           67 |      463 | 2024-04-07 | RED Canids        | W   | 1.000      | -            | -                | -                | -         |     1.44 | decenty, felps, HEN1, noway, VINI |
|           66 |      466 | 2024-04-07 | FURIA Academy     | W   | 1.000      | -            | -                | -                | -         |     0.11 | decenty, felps, HEN1, noway, VINI |
|           65 |      524 | 2024-04-04 | ODDIK             | W   | 1.000      | -            | -                | -                | -         |     0.65 | decenty, felps, HEN1, noway, VINI |
|           64 |      529 | 2024-04-04 | ODDIK             | W   | 1.000      | -            | -                | -                | -         |     0.66 | decenty, felps, HEN1, noway, VINI |
|           63 |      532 | 2024-04-04 | BESTIA            | W   | 1.000      | -            | -                | -                | -         |     0.56 | decenty, felps, HEN1, noway, VINI |
|           62 |      562 | 2024-04-03 | Case              | W   | 1.000      | 0.450        | -                | 0.767 (0.345)    | -         |     0.46 | decenty, felps, HEN1, noway, VINI |
|           61 |      565 | 2024-04-03 | Case              | W   | 1.000      | 0.450        | -                | 0.767 (0.345)    | -         |     0.46 | decenty, felps, HEN1, noway, VINI |
|           60 |      770 | 2024-03-23 | FaZe              | L   | 0.999      | -            | -                | -                | -         |    -4.02 | decenty, felps, HEN1, noway, VINI |
|           59 |      783 | 2024-03-22 | Vitality          | L   | 0.992      | -            | -                | -                | -         |    -8.13 | decenty, felps, HEN1, noway, VINI |
|           58 |      793 | 2024-03-21 | Spirit            | L   | 0.987      | -            | -                | -                | -         |    -4.41 | decenty, felps, HEN1, noway, VINI |
|           57 |      811 | 2024-03-21 | Virtus.pro        | W   | 0.985      | 1.000        | 0.530 (0.522)    | 0.605 (0.596)    | 1 (0.985) |    18.97 | decenty, felps, HEN1, noway, VINI |
|           56 |      830 | 2024-03-20 | GamerLegion       | W   | 0.979      | -            | -                | -                | 1 (0.979) |     5.89 | decenty, felps, HEN1, noway, VINI |
|           55 |      843 | 2024-03-19 | Gaimin Gladiators | L   | 0.973      | -            | -                | -                | -         |   -25.78 | decenty, felps, HEN1, noway, VINI |
|           54 |      859 | 2024-03-18 | Apeks             | W   | 0.965      | -            | -                | -                | 1 (0.965) |     4.12 | decenty, felps, HEN1, noway, VINI |
|           53 |      877 | 2024-03-17 | HEROIC            | L   | 0.960      | -            | -                | -                | -         |   -16.18 | decenty, felps, HEN1, noway, VINI |
|           52 |      886 | 2024-03-17 | ENCE              | W   | 0.959      | -            | -                | -                | 1 (0.959) |     6.33 | decenty, felps, HEN1, noway, VINI |
|           51 |     1116 | 2024-03-07 | Monte             | L   | 0.894      | -            | -                | -                | -         |   -25.64 | decenty, felps, HEN1, noway, VINI |
|           50 |     1234 | 2024-03-03 | paiN              | W   | 0.867      | 0.143        | 0.698 (0.086)    | -                | 1 (0.867) |    14.39 | decenty, felps, HEN1, noway, VINI |
|           49 |     1265 | 2024-03-02 | M80               | W   | 0.859      | -            | -                | -                | 1 (0.859) |     0.92 | decenty, felps, HEN1, noway, VINI |
|           48 |     1278 | 2024-03-01 | NRG               | W   | 0.854      | -            | -                | -                | 1 (0.854) |     0.34 | decenty, felps, HEN1, noway, VINI |
|           47 |     1369 | 2024-02-25 | Fluxo             | L   | 0.821      | -            | -                | -                | -         |   -24.79 | decenty, felps, HEN1, noway, VINI |
|           46 |     1401 | 2024-02-24 | BESTIA            | W   | 0.813      | -            | -                | -                | -         |     0.41 | decenty, felps, HEN1, noway, VINI |
|           45 |     1428 | 2024-02-22 | BESTIA            | L   | 0.802      | -            | -                | -                | -         |   -24.89 | decenty, felps, HEN1, noway, VINI |
|           44 |     1438 | 2024-02-22 | FURIA             | L   | 0.800      | -            | -                | -                | -         |   -20.83 | decenty, felps, HEN1, noway, VINI |
|           43 |     1453 | 2024-02-21 | 2GAME             | W   | 0.795      | -            | -                | -                | -         |     0.07 | decenty, felps, HEN1, noway, VINI |
|           42 |     1457 | 2024-02-21 | 2GAME             | W   | 0.794      | -            | -                | -                | -         |     0.07 | decenty, felps, HEN1, noway, VINI |
|           41 |     1466 | 2024-02-21 | LA RUGONETA       | W   | 0.792      | -            | -                | -                | -         |     0.06 | decenty, felps, HEN1, noway, VINI |
|           40 |     1558 | 2024-02-17 | adalYamigos       | W   | 0.767      | -            | -                | -                | -         |     0.16 | decenty, felps, HEN1, noway, VINI |
|           39 |     1587 | 2024-02-16 | Galorys           | W   | 0.760      | -            | -                | -                | -         |     0.19 | decenty, felps, HEN1, noway, VINI |
|           38 |     1590 | 2024-02-16 | Galorys           | W   | 0.760      | -            | -                | -                | -         |     0.19 | decenty, felps, HEN1, noway, VINI |
|           37 |     1607 | 2024-02-15 | 9z                | W   | 0.755      | -            | -                | -                | -         |     0.58 | decenty, felps, HEN1, noway, VINI |
|           36 |     1609 | 2024-02-15 | Fluxo             | W   | 0.754      | -            | -                | -                | -         |     0.71 | decenty, felps, HEN1, noway, VINI |
|           35 |     1614 | 2024-02-15 | Solid             | W   | 0.754      | -            | -                | -                | -         |     0.26 | decenty, felps, HEN1, noway, VINI |
|           34 |     1644 | 2024-02-14 | Yawara            | W   | 0.748      | -            | -                | -                | -         |     0.04 | decenty, felps, HEN1, noway, VINI |
|           33 |     1681 | 2024-02-13 | RED Canids        | W   | 0.742      | 0.450        | -                | 0.842 (0.281)    | -         |     0.56 | decenty, felps, HEN1, noway, VINI |
|           32 |     1685 | 2024-02-13 | RED Canids        | L   | 0.741      | -            | -                | -                | -         |   -22.88 | decenty, felps, HEN1, noway, VINI |
|           31 |     1688 | 2024-02-13 | Solid             | W   | 0.741      | -            | -                | -                | -         |     0.24 | decenty, felps, HEN1, noway, VINI |
|           30 |     1785 | 2024-02-04 | 9z                | W   | 0.681      | -            | -                | -                | -         |     0.43 | decenty, felps, HEN1, noway, VINI |
|           29 |     1808 | 2024-02-03 | MIBR              | W   | 0.675      | -            | -                | -                | -         |     3.36 | decenty, felps, HEN1, noway, VINI |
|           28 |     1834 | 2024-02-02 | BESTIA            | W   | 0.669      | -            | -                | -                | -         |     0.22 | decenty, felps, HEN1, noway, VINI |
|           27 |     1838 | 2024-02-02 | 9z                | L   | 0.668      | -            | -                | -                | -         |   -20.69 | decenty, felps, HEN1, noway, VINI |
|           26 |     1840 | 2024-02-02 | BESTIA            | W   | 0.668      | -            | -                | -                | -         |     0.18 | decenty, felps, HEN1, noway, VINI |
|           25 |     2004 | 2024-01-24 | 9z                | W   | 0.608      | -            | -                | -                | -         |     0.29 | decenty, felps, HEN1, noway, VINI |
|           24 |     2024 | 2024-01-23 | BESTIA            | W   | 0.601      | -            | -                | -                | -         |     0.17 | decenty, felps, HEN1, noway, VINI |
|           23 |     2044 | 2024-01-22 | Hype              | W   | 0.595      | -            | -                | -                | -         |     0.01 | decenty, felps, HEN1, noway, VINI |
|           22 |     2078 | 2024-01-21 | paiN              | W   | 0.587      | 0.143        | 0.698 (0.059)    | -                | -         |     9.10 | decenty, felps, HEN1, noway, VINI |
|           21 |     2117 | 2024-01-20 | Fluxo             | W   | 0.580      | -            | -                | -                | -         |     0.44 | decenty, felps, HEN1, noway, VINI |
|           20 |     2160 | 2024-01-19 | BESTIA            | L   | 0.575      | -            | -                | -                | -         |   -17.97 | decenty, felps, HEN1, noway, VINI |
|           19 |     2169 | 2024-01-19 | Galorys           | W   | 0.574      | -            | -                | -                | -         |     0.15 | decenty, felps, HEN1, noway, VINI |
|           18 |     2327 | 2024-01-16 | Legacy            | L   | 0.554      | -            | -                | -                | -         |   -17.11 | decenty, felps, HEN1, noway, VINI |
|           17 |     2372 | 2024-01-15 | Corinthians       | W   | 0.548      | -            | -                | -                | -         |     0.04 | decenty, felps, HEN1, noway, VINI |
|           16 |     3015 | 2023-11-29 | blockkstar        | W   | 0.234      | -            | -                | -                | -         |     0.01 | decenty, felps, HEN1, noway, VINI |
|           15 |     3018 | 2023-11-29 | Flamengo          | W   | 0.234      | -            | -                | -                | -         |     0.01 | decenty, felps, HEN1, noway, VINI |
|           14 |     3045 | 2023-11-26 | Fluxo             | W   | 0.214      | -            | -                | -                | -         |     0.15 | decenty, felps, HEN1, noway, VINI |
|           13 |     3062 | 2023-11-25 | Case              | W   | 0.208      | -            | -                | -                | -         |     0.05 | decenty, felps, HEN1, noway, VINI |
|           12 |     3089 | 2023-11-24 | Sharks            | W   | 0.200      | -            | -                | -                | -         |     0.06 | decenty, felps, HEN1, noway, VINI |
|           11 |     3103 | 2023-11-23 | Fluxo             | W   | 0.195      | -            | -                | -                | -         |     0.13 | decenty, felps, HEN1, noway, VINI |
|           10 |     3580 | 2023-11-02 | ODDIK             | L   | 0.053      | -            | -                | -                | -         |    -1.66 | decenty, felps, HEN1, noway, VINI |
|            9 |     3598 | 2023-11-01 | paiN              | L   | 0.047      | -            | -                | -                | -         |    -0.65 | felps, HEN1, noway, VINI, zakk    |
|            8 |     3620 | 2023-10-31 | BESTIA            | L   | 0.042      | -            | -                | -                | -         |    -1.31 | decenty, felps, HEN1, noway, VINI |
|            7 |     3624 | 2023-10-31 | Flamengo          | W   | 0.041      | -            | -                | -                | -         |     0.00 | felps, HEN1, noway, VINI, zakk    |
|            6 |     3660 | 2023-10-30 | Intense           | W   | 0.034      | -            | -                | -                | -         |     0.00 | felps, HEN1, noway, VINI, zakk    |
|            5 |     3693 | 2023-10-29 | Flamengo          | W   | 0.027      | -            | -                | -                | -         |     0.00 | felps, HEN1, noway, VINI, zakk    |
|            4 |     3703 | 2023-10-29 | BESTIA            | L   | 0.026      | -            | -                | -                | -         |    -0.83 | felps, HEN1, noway, VINI, zakk    |
|            3 |     3741 | 2023-10-28 | Filhos de D10S    | W   | 0.020      | -            | -                | -                | -         |     0.00 | boltz, felps, HEN1, noway, VINI   |
|            2 |     3806 | 2023-10-26 | Fluxo             | L   | 0.007      | -            | -                | -                | -         |    -0.23 | boltz, felps, HEN1, noway, VINI   |
|            1 |     3843 | 2023-10-25 | ODDIK             | W   | 0.000      | -            | -                | -                | -         |     0.00 | boltz, felps, HEN1, noway, VINI   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($108,458.07)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.57) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-20 |      1.000 | $50,000.00     | $50,000.00      |
| 2024-04-15 |      1.000 | $15,000.00     | $15,000.00      |
| 2024-03-31 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-03-10 |      0.914 | $5,000.00      | $4,569.46       |
| 2024-02-25 |      0.821 | $15,000.00     | $12,308.81      |
| 2023-11-26 |      0.214 | $30,000.00     | $6,415.21       |
| 2023-11-04 |      0.068 | $2,000.00      | $136.94         |
| 2023-11-02 |      0.055 | $500.00        | $27.66          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
