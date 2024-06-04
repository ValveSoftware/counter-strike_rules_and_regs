### Roster Details<br />
Team Name: TheMongolz<br />
Roster: 910, bLitz, mzinho, Senzu, Techno<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [14](../standings_global.md)<br />
Regional Rank: [1]( ../standings_asia.md)<br />
Final Rank Value:  1468.9<br />
<br />
Final Rank Value (1468.9) = Starting Rank Value (1471.4) + Head To Head Adjustments (-2.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.570[<sup>1</sup>](#table2)
- Bounty Collected: 0.507[<sup>2</sup>](#table1)
- Opponent Network: 0.185[<sup>2</sup>](#table1)
- LAN Wins: 0.945[<sup>2</sup>](#table1)

The average of these factors is 0.552<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1471.4
- 400 + ( ( 0.552 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1471.4


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
|           49 |       16 | 2024-05-29 | Aurora            | W   | 1.000      | 0.500        | 0.493 (0.247)    | 0.840 (0.420)    | 1 (1.000) |    10.16 | 910, bLitz, mzinho, Senzu, Techno |
|           48 |       37 | 2024-05-28 | Gaimin Gladiators | W   | 1.000      | 0.500        | 0.090 (0.045)    | 0.809 (0.404)    | 1 (1.000) |     3.87 | 910, bLitz, mzinho, Senzu, Techno |
|           47 |      310 | 2024-05-18 | ATOX              | W   | 1.000      | 0.143        | -                | 0.248 (0.035)    | 1 (1.000) |     1.12 | 910, bLitz, mzinho, Senzu, Techno |
|           46 |      346 | 2024-05-17 | Chinggis Warriors | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.18 | 910, bLitz, mzinho, Senzu, Techno |
|           45 |      614 | 2024-05-08 | Virtus.pro        | L   | 1.000      | -            | -                | -                | -         |    -7.84 | 910, bLitz, mzinho, Senzu, Techno |
|           44 |      825 | 2024-04-28 | Vitality          | L   | 0.991      | -            | -                | -                | -         |    -3.53 | 910, bLitz, mzinho, Senzu, Techno |
|           43 |      902 | 2024-04-25 | G2                | W   | 0.971      | 0.889        | 0.469 (0.405)    | 0.565 (0.487)    | 1 (0.971) |    26.35 | 910, bLitz, mzinho, Senzu, Techno |
|           42 |      920 | 2024-04-24 | Falcons           | W   | 0.964      | 0.889        | 0.355 (0.305)    | 0.274 (0.235)    | 1 (0.964) |    16.18 | 910, bLitz, mzinho, Senzu, Techno |
|           41 |     1045 | 2024-04-19 | Rare Atom         | W   | 0.932      | -            | -                | -                | -         |     0.29 | 910, bLitz, mzinho, Senzu, Techno |
|           40 |     1095 | 2024-04-18 | TYLOO             | W   | 0.925      | 0.143        | -                | 0.330 (0.044)    | -         |     1.46 | 910, bLitz, mzinho, Senzu, Techno |
|           39 |     1105 | 2024-04-18 | Rare Atom         | W   | 0.924      | -            | -                | -                | -         |     0.22 | 910, bLitz, mzinho, Senzu, Techno |
|           38 |     1532 | 2024-04-03 | Lynn Vision       | W   | 0.825      | -            | -                | -                | -         |     2.77 | 910, bLitz, mzinho, Senzu, Techno |
|           37 |     1546 | 2024-04-03 | LYG               | W   | 0.823      | -            | -                | -                | -         |     0.45 | 910, bLitz, mzinho, Senzu, Techno |
|           36 |     1574 | 2024-04-02 | ATOX              | W   | 0.818      | -            | -                | -                | -         |     1.10 | 910, bLitz, mzinho, Senzu, Techno |
|           35 |     1578 | 2024-04-02 | LYG               | L   | 0.817      | -            | -                | -                | -         |   -25.35 | 910, bLitz, mzinho, Senzu, Techno |
|           34 |     1727 | 2024-03-22 | paiN              | L   | 0.745      | -            | -                | -                | -         |    -8.15 | 910, bLitz, mzinho, Senzu, Techno |
|           33 |     1749 | 2024-03-21 | Vitality          | L   | 0.739      | -            | -                | -                | -         |    -2.58 | 910, bLitz, mzinho, Senzu, Techno |
|           32 |     1760 | 2024-03-21 | Natus Vincere     | L   | 0.737      | -            | -                | -                | -         |    -2.13 | 910, bLitz, mzinho, Senzu, Techno |
|           31 |     1779 | 2024-03-20 | Legacy            | W   | 0.731      | -            | -                | -                | 1 (0.731) |     2.12 | 910, bLitz, mzinho, Senzu, Techno |
|           30 |     1796 | 2024-03-19 | Lynn Vision       | W   | 0.724      | -            | -                | -                | 1 (0.724) |     1.98 | 910, bLitz, mzinho, Senzu, Techno |
|           29 |     1802 | 2024-03-18 | AMKAL             | W   | 0.718      | 0.143        | 0.144 (0.015)    | 0.736 (0.076)    | 1 (0.718) |     3.54 | 910, bLitz, mzinho, Senzu, Techno |
|           28 |     1825 | 2024-03-17 | Gaimin Gladiators | L   | 0.712      | -            | -                | -                | -         |   -18.09 | 910, bLitz, mzinho, Senzu, Techno |
|           27 |     1837 | 2024-03-17 | Eternal Fire      | L   | 0.711      | -            | -                | -                | -         |    -2.70 | 910, bLitz, mzinho, Senzu, Techno |
|           26 |     2270 | 2024-02-27 | Lynn Vision       | W   | 0.588      | -            | -                | -                | 1 (0.588) |     1.28 | 910, bLitz, mzinho, Senzu, Techno |
|           25 |     2306 | 2024-02-25 | FlyQuest          | W   | 0.576      | 0.143        | 0.114 (0.009)    | 0.648 (0.053)    | -         |     7.72 | 910, bLitz, mzinho, Senzu, Techno |
|           24 |     2312 | 2024-02-25 | MAG               | W   | 0.574      | -            | -                | -                | -         |     0.10 | 910, bLitz, mzinho, Senzu, Techno |
|           23 |     2796 | 2024-02-02 | ENCE              | L   | 0.419      | -            | -                | -                | -         |    -8.13 | 910, bLitz, mzinho, Senzu, Techno |
|           22 |     2836 | 2024-02-01 | Spirit            | L   | 0.411      | -            | -                | -                | -         |    -1.09 | 910, bLitz, mzinho, Senzu, Techno |
|           21 |     2847 | 2024-01-31 | FURIA             | W   | 0.406      | 0.143        | 0.138 (0.008)    | -                | -         |     4.78 | 910, bLitz, mzinho, Senzu, Techno |
|           20 |     2894 | 2024-01-28 | Lynn Vision       | W   | 0.384      | 0.435        | 0.056 (0.009)    | 0.282 (0.047)    | -         |     0.99 | 910, bLitz, mzinho, Senzu, Techno |
|           19 |     2896 | 2024-01-28 | NKT               | W   | 0.383      | -            | -                | -                | -         |     0.16 | 910, bLitz, mzinho, Senzu, Techno |
|           18 |     2906 | 2024-01-27 | TYLOO             | L   | 0.378      | -            | -                | -                | -         |   -11.41 | 910, bLitz, mzinho, Senzu, Techno |
|           17 |     2924 | 2024-01-26 | TYLOO             | W   | 0.371      | -            | -                | -                | -         |     0.46 | 910, bLitz, mzinho, Senzu, Techno |
|           16 |     2931 | 2024-01-26 | The Huns          | W   | 0.370      | -            | -                | -                | -         |     0.10 | 910, bLitz, mzinho, Senzu, Techno |
|           15 |     2935 | 2024-01-26 | TYLOO             | W   | 0.370      | 0.435        | -                | 0.330 (0.053)    | -         |     0.46 | 910, bLitz, mzinho, Senzu, Techno |
|           14 |     2936 | 2024-01-25 | ACME              | W   | 0.369      | -            | -                | -                | -         |     0.11 | 910, bLitz, mzinho, Senzu, Techno |
|           13 |     3046 | 2024-01-21 | ATOX              | W   | 0.336      | -            | -                | -                | -         |     0.33 | 910, bLitz, mzinho, Senzu, Techno |
|           12 |     3137 | 2024-01-19 | MungYu            | W   | 0.324      | -            | -                | -                | -         |     0.04 | 910, bLitz, mzinho, Senzu, Techno |
|           11 |     3145 | 2024-01-19 | NKT               | W   | 0.323      | -            | -                | -                | -         |     0.13 | 910, bLitz, mzinho, Senzu, Techno |
|           10 |     3630 | 2023-12-17 | Virtus.pro        | L   | 0.105      | -            | -                | -                | -         |    -0.74 | 910, bLitz, mzinho, Senzu, Techno |
|            9 |     3659 | 2023-12-16 | Complexity        | W   | 0.099      | 0.500        | 0.260 (0.013)    | -                | -         |     1.94 | 910, bLitz, mzinho, Senzu, Techno |
|            8 |     3678 | 2023-12-15 | Apeks             | L   | 0.094      | -            | -                | -                | -         |    -2.50 | 910, bLitz, mzinho, Senzu, Techno |
|            7 |     3684 | 2023-12-15 | Complexity        | W   | 0.093      | 0.500        | 0.260 (0.012)    | -                | -         |     1.82 | 910, bLitz, mzinho, Senzu, Techno |
|            6 |     3739 | 2023-12-10 | TYLOO             | W   | 0.058      | -            | -                | -                | -         |     0.07 | 910, bLitz, mzinho, Senzu, Techno |
|            5 |     3764 | 2023-12-09 | Lynn Vision       | W   | 0.051      | -            | -                | -                | -         |     0.12 | 910, bLitz, mzinho, Senzu, Techno |
|            4 |     3784 | 2023-12-08 | Newhappy          | W   | 0.044      | -            | -                | -                | -         |     0.01 | 910, bLitz, mzinho, Senzu, Techno |
|            3 |     3814 | 2023-12-07 | GR                | W   | 0.038      | -            | -                | -                | -         |     0.01 | 910, bLitz, mzinho, Senzu, Techno |
|            2 |     3845 | 2023-12-06 | LYG               | W   | 0.031      | -            | -                | -                | -         |     0.01 | 910, bLitz, mzinho, Senzu, Techno |
|            1 |     3873 | 2023-12-05 | Newhappy          | L   | 0.024      | -            | -                | -                | -         |    -0.76 | 910, bLitz, mzinho, Senzu, Techno |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($53,056.31)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.18) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      1.000 | $23,500.00     | $23,500.00      |
| 2024-03-31 |      0.806 | $20,000.00     | $16,122.80      |
| 2024-02-02 |      0.420 | $4,500.00      | $1,889.95       |
| 2024-01-28 |      0.384 | $25,000.00     | $9,600.27       |
| 2023-12-17 |      0.107 | $10,000.00     | $1,069.10       |
| 2023-12-10 |      0.058 | $15,000.00     | $874.19         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
