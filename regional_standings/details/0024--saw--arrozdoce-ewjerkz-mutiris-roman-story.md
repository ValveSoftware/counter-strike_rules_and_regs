### Roster Details<br />
Team Name: SAW<br />
Roster: arrozdoce, ewjerkz, MUTiRiS, roman, story<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [24](../standings_global.md)<br />
Regional Rank: [18]( ../standings_europe.md)<br />
Final Rank Value:  1259.3<br />
<br />
Final Rank Value (1259.3) = Starting Rank Value (1260.1) + Head To Head Adjustments (-0.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.568[<sup>1</sup>](#table2)
- Bounty Collected: 0.473[<sup>2</sup>](#table1)
- Opponent Network: 0.223[<sup>2</sup>](#table1)
- LAN Wins: 0.517[<sup>2</sup>](#table1)

The average of these factors is 0.445<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1260.1
- 400 + ( ( 0.445 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1260.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           54 |      225 | 2024-04-16 | Sampi             | L   | 1.000      | -            | -                | -                | -         |   -27.22 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           53 |      343 | 2024-04-10 | 9 Pandas          | W   | 1.000      | 0.500        | 0.083 (0.042)    | 0.656 (0.328)    | 0 (0.000) |     6.37 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           52 |      395 | 2024-04-09 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |   -24.70 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           51 |      505 | 2024-04-05 | PGE Turow         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.06 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           50 |      539 | 2024-04-04 | Betera            | W   | 1.000      | -            | -                | -                | -         |     1.60 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           49 |      582 | 2024-04-03 | PERA              | W   | 1.000      | 0.500        | 0.025 (0.013)    | 0.424 (0.212)    | -         |     2.07 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           48 |      828 | 2024-03-20 | FURIA             | L   | 0.980      | -            | -                | -                | -         |   -12.38 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           47 |      845 | 2024-03-19 | paiN              | L   | 0.972      | -            | -                | -                | -         |    -4.71 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           46 |      853 | 2024-03-18 | Cloud9            | L   | 0.966      | -            | -                | -                | -         |    -4.59 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           45 |      867 | 2024-03-17 | GamerLegion       | W   | 0.961      | 0.143        | 0.185 (0.025)    | -                | 1 (0.961) |    15.16 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           44 |      884 | 2024-03-17 | KOI               | W   | 0.959      | 0.143        | -                | 0.902 (0.124)    | 1 (0.959) |     6.08 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           43 |      972 | 2024-03-13 | System5           | W   | 0.934      | -            | -                | -                | -         |     0.44 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           42 |     1056 | 2024-03-10 | OG                | W   | 0.913      | 0.535        | 0.497 (0.243)    | 0.553 (0.270)    | -         |    14.56 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           41 |     1097 | 2024-03-08 | Cloud9            | W   | 0.901      | 0.535        | 0.475 (0.229)    | 0.623 (0.300)    | -         |    25.10 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           40 |     1131 | 2024-03-07 | Liquid            | W   | 0.893      | 0.535        | 0.111 (0.053)    | 0.728 (0.348)    | -         |    12.58 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           39 |     1187 | 2024-03-05 | Monte             | W   | 0.880      | 0.500        | 0.236 (0.104)    | 0.598 (0.263)    | -         |    11.91 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           38 |     1351 | 2024-02-26 | RUSH B            | W   | 0.827      | 0.500        | -                | 0.307 (0.127)    | -         |     1.69 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           37 |     1565 | 2024-02-17 | fnatic            | W   | 0.766      | 0.143        | 0.240 (0.026)    | -                | 1 (0.766) |     6.95 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           36 |     1589 | 2024-02-16 | Enterprise        | W   | 0.760      | -            | -                | -                | 1 (0.760) |     4.74 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           35 |     1621 | 2024-02-15 | Ninjas in Pyjamas | W   | 0.752      | -            | -                | -                | 1 (0.752) |     2.78 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           34 |     1659 | 2024-02-14 | 9 Pandas          | L   | 0.746      | -            | -                | -                | -         |   -15.92 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           33 |     1670 | 2024-02-14 | Virtus.pro        | L   | 0.744      | -            | -                | -                | -         |    -2.33 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           32 |     1795 | 2024-02-04 | Rhyno             | W   | 0.679      | -            | -                | -                | -         |     1.61 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           31 |     1825 | 2024-02-03 | KOI               | W   | 0.673      | -            | -                | -                | -         |     5.68 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           30 |     1880 | 2024-02-01 | AL QATRAO         | W   | 0.660      | -            | -                | -                | -         |     0.93 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           29 |     1881 | 2024-02-01 | Agency            | W   | 0.659      | -            | -                | -                | -         |     0.37 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           28 |     1886 | 2024-02-01 | AL QATRAO         | L   | 0.659      | -            | -                | -                | -         |   -19.91 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           27 |     2125 | 2024-01-20 | 9 Pandas          | W   | 0.579      | -            | -                | -                | -         |     5.56 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           26 |     2182 | 2024-01-19 | Zero Tenacity     | W   | 0.572      | -            | -                | -                | -         |     1.36 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           25 |     2232 | 2024-01-18 | Virtus.pro        | L   | 0.566      | -            | -                | -                | -         |    -1.71 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           24 |     2239 | 2024-01-18 | fnatic            | W   | 0.566      | 0.143        | 0.240 (0.019)    | -                | -         |     5.01 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           23 |     2779 | 2023-12-11 | FORZE             | L   | 0.312      | -            | -                | -                | -         |    -8.16 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           22 |     2901 | 2023-12-06 | 9 Pandas          | L   | 0.278      | -            | -                | -                | -         |    -6.13 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           21 |     2931 | 2023-12-05 | RED Canids        | W   | 0.271      | 0.589        | 0.110 (0.018)    | 0.842 (0.134)    | -         |     1.69 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           20 |     2935 | 2023-12-04 | Zero Tenacity     | W   | 0.266      | 0.589        | -                | 0.805 (0.126)    | -         |     0.59 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           19 |     2950 | 2023-12-03 | Aurora            | L   | 0.259      | -            | -                | -                | -         |    -2.73 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           18 |     2990 | 2023-12-01 | Space             | W   | 0.246      | -            | -                | -                | -         |     0.38 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           17 |     3010 | 2023-11-30 | 9 Pandas          | W   | 0.238      | -            | -                | -                | -         |     2.26 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           16 |     3051 | 2023-11-26 | Legacy            | W   | 0.213      | -            | -                | -                | 1 (0.213) |     1.74 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           15 |     3073 | 2023-11-25 | Rhyno             | W   | 0.206      | -            | -                | -                | 1 (0.206) |     0.45 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           14 |     3093 | 2023-11-24 | Los Alpacas       | W   | 0.199      | -            | -                | -                | 1 (0.199) |     0.18 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           13 |     3110 | 2023-11-23 | Sashi             | W   | 0.193      | -            | -                | -                | -         |     0.80 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           12 |     3242 | 2023-11-17 | Metizport         | L   | 0.151      | -            | -                | -                | -         |    -4.54 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           11 |     3262 | 2023-11-16 | Entropiq          | W   | 0.146      | -            | -                | -                | -         |     0.27 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           10 |     3310 | 2023-11-15 | Pompa             | W   | 0.139      | -            | -                | -                | -         |     0.07 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|            9 |     3362 | 2023-11-12 | KOI               | L   | 0.120      | -            | -                | -                | -         |    -2.92 | aragornN, arrozdoce, ewjerkz, roman, story |
|            8 |     3402 | 2023-11-11 | PARIVISION        | W   | 0.114      | -            | -                | -                | -         |     0.13 | aragornN, arrozdoce, ewjerkz, roman, story |
|            7 |     3456 | 2023-11-08 | FORZE             | L   | 0.094      | -            | -                | -                | -         |    -2.78 | aragornN, arrozdoce, ewjerkz, roman, story |
|            6 |     3485 | 2023-11-07 | The Prodigies     | W   | 0.087      | -            | -                | -                | -         |     0.04 | aragornN, arrozdoce, ewjerkz, roman, story |
|            5 |     3498 | 2023-11-06 | SINNERS           | L   | 0.080      | -            | -                | -                | -         |    -1.87 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|            4 |     3603 | 2023-11-01 | Spirit            | L   | 0.047      | -            | -                | -                | -         |    -0.04 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|            3 |     3700 | 2023-10-29 | Monte             | L   | 0.027      | -            | -                | -                | -         |    -0.49 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|            2 |     3752 | 2023-10-28 | BOSS              | W   | 0.019      | -            | -                | -                | -         |     0.07 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|            1 |     3782 | 2023-10-27 | FaZe              | L   | 0.013      | -            | -                | -                | -         |    -0.01 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($32,952.29)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.17) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-20 |      0.980 | $10,000.00     | $9,798.45       |
| 2024-03-10 |      0.914 | $20,000.00     | $18,277.85      |
| 2023-12-13 |      0.327 | $500.00        | $163.38         |
| 2023-12-10 |      0.307 | $1,500.00      | $460.16         |
| 2023-12-07 |      0.287 | $5,000.00      | $1,434.70       |
| 2023-11-26 |      0.213 | $5,443.00      | $1,156.79       |
| 2023-11-25 |      0.206 | $6,518.00      | $1,341.74       |
| 2023-11-18 |      0.160 | $2,000.00      | $319.21         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
