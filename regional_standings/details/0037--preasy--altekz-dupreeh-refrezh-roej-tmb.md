### Roster Details<br />
Team Name: Preasy<br />
Roster: Altekz, dupreeh, refrezh, roeJ, TMB<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [37](../standings_global.md)<br />
Regional Rank: [26]( ../standings_europe.md)<br />
Final Rank Value:  1067.2<br />
<br />
Final Rank Value (1067.2) = Starting Rank Value (1013.5) + Head To Head Adjustments (53.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.592[<sup>1</sup>](#table2)
- Bounty Collected: 0.422[<sup>2</sup>](#table1)
- Opponent Network: 0.172[<sup>2</sup>](#table1)
- LAN Wins: 0.085[<sup>2</sup>](#table1)

The average of these factors is 0.318<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1013.5
- 400 + ( ( 0.318 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1013.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           60 |     1028 | 2024-03-11 | Metizport         | L   | 0.921      | -            | -                | -                | -         |   -15.99 | Altekz, dupreeh, refrezh, roeJ, TMB  |
|           59 |     1041 | 2024-03-11 | HEROIC            | L   | 0.919      | -            | -                | -                | -         |    -1.93 | Altekz, dupreeh, refrezh, roeJ, TMB  |
|           58 |     1044 | 2024-03-11 | Permitta          | W   | 0.918      | 0.371        | 0.031 (0.010)    | 0.970 (0.330)    | 0 (0.000) |     7.98 | Altekz, dupreeh, refrezh, roeJ, TMB  |
|           57 |     1094 | 2024-03-09 | K10               | W   | 0.904      | -            | -                | -                | 0 (0.000) |     4.78 | Altekz, dupreeh, refrezh, roeJ, TMB  |
|           56 |     1137 | 2024-03-07 | Secret            | W   | 0.891      | -            | -                | -                | 0 (0.000) |     1.92 | Altekz, dupreeh, refrezh, roeJ, TMB  |
|           55 |     1230 | 2024-03-03 | Gaimin Gladiators | W   | 0.867      | 0.143        | 0.156 (0.019)    | 1.000 (0.124)    | 0 (0.000) |    20.86 | Altekz, dupreeh, refrezh, roeJ, TMB  |
|           54 |     1239 | 2024-03-03 | BetBoom           | W   | 0.866      | 0.143        | 0.457 (0.057)    | 0.898 (0.111)    | 0 (0.000) |    19.39 | Altekz, dupreeh, refrezh, roeJ, TMB  |
|           53 |     1246 | 2024-03-03 | ECF               | W   | 0.866      | -            | -                | -                | 0 (0.000) |     2.33 | Altekz, dupreeh, refrezh, roeJ, TMB  |
|           52 |     1252 | 2024-03-03 | fnatic            | L   | 0.866      | -            | -                | -                | -         |   -12.74 | Altekz, dupreeh, refrezh, roeJ, TMB  |
|           51 |     1255 | 2024-03-03 | MOUZ NXT          | L   | 0.864      | -            | -                | -                | -         |   -17.68 | Altekz, dupreeh, refrezh, roeJ, TMB  |
|           50 |     1283 | 2024-03-01 | BetBoom           | L   | 0.854      | -            | -                | -                | -         |    -8.51 | Altekz, dupreeh, refrezh, roeJ, TMB  |
|           49 |     1305 | 2024-02-28 | fnatic            | W   | 0.841      | 0.500        | 0.240 (0.101)    | 0.624 (0.262)    | 0 (0.000) |    13.07 | Altekz, dupreeh, refrezh, roeJ, TMB  |
|           48 |     1459 | 2024-02-21 | Guild Eagles      | L   | 0.793      | -            | -                | -                | -         |   -14.24 | Altekz, dupreeh, refrezh, roeJ, TMB  |
|           47 |     1490 | 2024-02-20 | PERA              | W   | 0.787      | -            | -                | -                | 1 (0.787) |     6.03 | Altekz, dupreeh, refrezh, roeJ, TMB  |
|           46 |     1516 | 2024-02-19 | OG                | L   | 0.780      | -            | -                | -                | -         |    -5.64 | Altekz, dupreeh, refrezh, roeJ, TMB  |
|           45 |     1519 | 2024-02-19 | HEROIC            | L   | 0.779      | -            | -                | -                | -         |    -1.37 | Altekz, dupreeh, refrezh, roeJ, TMB  |
|           44 |     1739 | 2024-02-09 | Gaimin Gladiators | W   | 0.712      | 0.371        | 0.156 (0.041)    | 1.000 (0.264)    | 0 (0.000) |    17.16 | Altekz, dupreeh, refrezh, roeJ, TMB  |
|           43 |     1755 | 2024-02-08 | TSM               | W   | 0.704      | -            | -                | -                | 0 (0.000) |     4.67 | Altekz, dupreeh, refrezh, roeJ, TMB  |
|           42 |     1761 | 2024-02-07 | Into the Breach   | W   | 0.698      | -            | -                | -                | -         |     5.87 | Altekz, dupreeh, refrezh, roeJ, TMB  |
|           41 |     1770 | 2024-02-06 | Sangal            | W   | 0.692      | 0.371        | -                | 0.685 (0.176)    | -         |     3.01 | Altekz, dupreeh, refrezh, roeJ, TMB  |
|           40 |     1781 | 2024-02-05 | Gaimin Gladiators | L   | 0.685      | -            | -                | -                | -         |    -4.68 | Altekz, dupreeh, refrezh, roeJ, TMB  |
|           39 |     1847 | 2024-02-02 | Metizport         | L   | 0.667      | -            | -                | -                | -         |   -12.93 | Altekz, dupreeh, refrezh, roeJ, TMB  |
|           38 |     1865 | 2024-02-02 | SINNERS           | W   | 0.664      | 0.371        | 0.043 (0.011)    | 0.779 (0.192)    | -         |    10.46 | Altekz, dupreeh, refrezh, roeJ, TMB  |
|           37 |     1909 | 2024-01-31 | ex-Sprout         | W   | 0.652      | -            | -                | -                | -         |     1.77 | Altekz, dupreeh, refrezh, roeJ, TMB  |
|           36 |     1933 | 2024-01-30 | Entropiq          | W   | 0.644      | 0.371        | -                | 0.403 (0.096)    | -         |     3.25 | Altekz, dupreeh, refrezh, roeJ, TMB  |
|           35 |     1985 | 2024-01-26 | ex-Sprout         | L   | 0.617      | -            | -                | -                | -         |   -18.14 | Altekz, dupreeh, refrezh, roeJ, TMB  |
|           34 |     2087 | 2024-01-21 | 3DMAX             | W   | 0.586      | -            | -                | -                | -         |     8.54 | Altekz, dupreeh, refrezh, roeJ, TMB  |
|           33 |     2111 | 2024-01-20 | MOUZ              | L   | 0.581      | -            | -                | -                | -         |    -0.23 | Altekz, dupreeh, refrezh, roeJ, TMB  |
|           32 |     2127 | 2024-01-20 | FORZE             | W   | 0.579      | 0.143        | 0.140 (0.012)    | -                | -         |     7.18 | Altekz, dupreeh, refrezh, roeJ, TMB  |
|           31 |     2180 | 2024-01-19 | Spirit            | L   | 0.572      | -            | -                | -                | -         |    -0.17 | Altekz, dupreeh, refrezh, roeJ, TMB  |
|           30 |     2238 | 2024-01-18 | Astralis          | L   | 0.566      | -            | -                | -                | -         |    -2.16 | Altekz, dupreeh, refrezh, roeJ, TMB  |
|           29 |     2243 | 2024-01-18 | Entropiq          | W   | 0.566      | -            | -                | -                | -         |     2.95 | Altekz, dupreeh, refrezh, roeJ, TMB  |
|           28 |     2767 | 2023-12-12 | ALTERNATE aTTaX   | W   | 0.320      | -            | -                | -                | -         |     2.11 | Altekz, nicoodoz, refrezh, roeJ, TMB |
|           27 |     2769 | 2023-12-12 | BetBoom           | L   | 0.319      | -            | -                | -                | -         |    -2.40 | Altekz, nicoodoz, refrezh, roeJ, TMB |
|           26 |     2776 | 2023-12-11 | 9 Pandas          | W   | 0.314      | -            | -                | -                | -         |     5.89 | Altekz, nicoodoz, refrezh, roeJ, TMB |
|           25 |     2780 | 2023-12-11 | GODSENT           | W   | 0.311      | -            | -                | -                | -         |     2.12 | Altekz, nicoodoz, refrezh, roeJ, TMB |
|           24 |     2796 | 2023-12-10 | TSM               | W   | 0.305      | -            | -                | -                | -         |     1.53 | Altekz, nicoodoz, refrezh, roeJ, TMB |
|           23 |     2820 | 2023-12-09 | Endpoint          | W   | 0.299      | -            | -                | -                | -         |     2.27 | Altekz, nicoodoz, refrezh, roeJ, TMB |
|           22 |     2843 | 2023-12-08 | GODSENT           | L   | 0.291      | -            | -                | -                | -         |    -7.20 | Altekz, nicoodoz, refrezh, roeJ, TMB |
|           21 |     2921 | 2023-12-05 | FORZE             | W   | 0.273      | -            | -                | -                | -         |     1.63 | Altekz, nicoodoz, refrezh, roeJ, TMB |
|           20 |     2932 | 2023-12-05 | IKLA              | W   | 0.271      | -            | -                | -                | -         |     0.63 | Altekz, nicoodoz, refrezh, roeJ, TMB |
|           19 |     3022 | 2023-11-29 | ex-sYnck          | W   | 0.232      | -            | -                | -                | -         |     1.25 | Altekz, nicoodoz, refrezh, roeJ, TMB |
|           18 |     3033 | 2023-11-28 | EYEBALLERS        | W   | 0.226      | -            | -                | -                | -         |     2.19 | Altekz, nicoodoz, refrezh, roeJ, TMB |
|           17 |     3082 | 2023-11-25 | Sashi             | W   | 0.204      | -            | -                | -                | -         |     2.18 | Altekz, nicoodoz, refrezh, roeJ, TMB |
|           16 |     3113 | 2023-11-23 | Gaimin Gladiators | L   | 0.192      | -            | -                | -                | -         |    -0.96 | Altekz, nicoodoz, refrezh, roeJ, TMB |
|           15 |     3164 | 2023-11-19 | paiN              | W   | 0.167      | 0.589        | 0.698 (0.069)    | 0.854 (0.084)    | -         |     5.18 | Altekz, nicoodoz, refrezh, roeJ, TMB |
|           14 |     3197 | 2023-11-18 | paiN              | W   | 0.160      | 0.589        | 0.698 (0.066)    | 0.854 (0.080)    | -         |     4.96 | Altekz, nicoodoz, refrezh, roeJ, TMB |
|           13 |     3226 | 2023-11-17 | BIG               | W   | 0.153      | 0.589        | 0.471 (0.042)    | -                | -         |     3.63 | Altekz, nicoodoz, refrezh, roeJ, TMB |
|           12 |     3308 | 2023-11-15 | Guild Eagles      | W   | 0.140      | -            | -                | -                | -         |     2.23 | Altekz, nicoodoz, refrezh, roeJ, TMB |
|           11 |     3313 | 2023-11-15 | ex-Anonymo        | W   | 0.138      | -            | -                | -                | -         |     0.86 | Altekz, nicoodoz, refrezh, roeJ, TMB |
|           10 |     3360 | 2023-11-12 | Endpoint          | W   | 0.121      | -            | -                | -                | -         |     0.95 | Altekz, nicoodoz, refrezh, roeJ, TMB |
|            9 |     3496 | 2023-11-06 | Gaimin Gladiators | L   | 0.080      | -            | -                | -                | -         |    -0.34 | Altekz, nicoodoz, refrezh, TMB, tOPZ |
|            8 |     3556 | 2023-11-03 | SINNERS           | W   | 0.060      | -            | -                | -                | -         |     1.09 | Altekz, nicoodoz, refrezh, TMB, tOPZ |
|            7 |     3609 | 2023-11-01 | FORZE             | W   | 0.046      | -            | -                | -                | -         |     0.28 | Altekz, nicoodoz, refrezh, TMB, tOPZ |
|            6 |     3670 | 2023-10-30 | The Prodigies     | W   | 0.033      | -            | -                | -                | -         |     0.03 | Altekz, nicoodoz, refrezh, TMB, tOPZ |
|            5 |     3721 | 2023-10-29 | ex-Anonymo        | L   | 0.025      | -            | -                | -                | -         |    -0.64 | Altekz, nicoodoz, refrezh, TMB, tOPZ |
|            4 |     3766 | 2023-10-28 | ARCRED            | L   | 0.018      | -            | -                | -                | -         |    -0.47 | Altekz, nicoodoz, refrezh, TMB, tOPZ |
|            3 |     3790 | 2023-10-27 | 1WIN              | L   | 0.012      | -            | -                | -                | -         |    -0.35 | Altekz, nicoodoz, refrezh, TMB, tOPZ |
|            2 |     3800 | 2023-10-27 | Sangal            | W   | 0.011      | -            | -                | -                | -         |     0.02 | Altekz, nicoodoz, refrezh, TMB, tOPZ |
|            1 |     3823 | 2023-10-26 | 9 Pandas          | W   | 0.005      | -            | -                | -                | -         |     0.09 | Altekz, nicoodoz, refrezh, TMB, tOPZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($39,043.04)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.20) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-18 |      0.965 | $11,000.00     | $10,609.51      |
| 2024-02-09 |      0.712 | $11,000.00     | $7,829.37       |
| 2023-12-13 |      0.327 | $1,000.00      | $326.76         |
| 2023-12-12 |      0.320 | $11,000.00     | $3,516.83       |
| 2023-11-19 |      0.167 | $100,000.00    | $16,694.71      |
| 2023-10-27 |      0.013 | $5,000.00      | $65.85          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
