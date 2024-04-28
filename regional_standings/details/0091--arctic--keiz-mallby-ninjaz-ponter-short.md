### Roster Details<br />
Team Name: ARCTIC<br />
Roster: keiz, MaLLby, ninjaZ, ponter, short<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [91](../standings_global.md)<br />
Regional Rank: [20]( ../standings_americas.md)<br />
Final Rank Value:  831.3<br />
<br />
Final Rank Value (831.3) = Starting Rank Value (876.3) + Head To Head Adjustments (-45.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.409[<sup>1</sup>](#table2)
- Bounty Collected: 0.285[<sup>2</sup>](#table1)
- Opponent Network: 0.056[<sup>2</sup>](#table1)
- LAN Wins: 0.181[<sup>2</sup>](#table1)

The average of these factors is 0.233<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 876.3
- 400 + ( ( 0.233 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 876.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |       24 | 2023-02-11 | Paquetá      | L   | 1.000      | -            | -                | -                | -         |   -18.43 | keiz, MaLLby, ninjaZ, ponter, short    |
|           34 |      196 | 2023-02-03 | Corinthians  | L   | 1.000      | -            | -                | -                | -         |   -17.74 | keiz, MaLLby, ninjaZ, ponter, short    |
|           33 |      223 | 2023-02-01 | TropiCaos    | W   | 1.000      | 0.384        | 0.014 (0.005)    | 0.222 (0.085)    | 0 (0.000) |     9.14 | keiz, MaLLby, ninjaZ, ponter, short    |
|           32 |      377 | 2023-01-27 | Meta         | L   | 1.000      | -            | -                | -                | -         |   -20.24 | keiz, MaLLby, ninjaZ, ponter, short    |
|           31 |      936 | 2022-12-11 | 00NATION     | L   | 0.782      | -            | -                | -                | -         |   -12.26 | history, MaLLby, ninjaZ, ponter, short |
|           30 |      976 | 2022-12-10 | ODDIK        | W   | 0.774      | 0.269        | 0.016 (0.003)    | 0.236 (0.049)    | 0 (0.000) |     8.20 | history, MaLLby, ninjaZ, ponter, short |
|           29 |     1005 | 2022-12-09 | 00NATION     | W   | 0.768      | 0.269        | 0.020 (0.004)    | 0.201 (0.041)    | 0 (0.000) |    12.00 | history, MaLLby, ninjaZ, ponter, short |
|           28 |     1163 | 2022-12-04 | Sharks       | L   | 0.734      | -            | -                | -                | -         |   -13.71 | history, MaLLby, ninjaZ, ponter, short |
|           27 |     1241 | 2022-12-02 | 00NATION     | L   | 0.722      | -            | -                | -                | -         |   -12.13 | history, MaLLby, ninjaZ, ponter, short |
|           26 |     1255 | 2022-12-02 | ODDIK        | W   | 0.719      | 0.371        | 0.016 (0.004)    | 0.236 (0.063)    | 1 (0.719) |     7.92 | history, MaLLby, ninjaZ, ponter, short |
|           25 |     1272 | 2022-12-01 | Fuscão 1500  | W   | 0.715      | 0.371        | 0.013 (0.003)    | 0.221 (0.058)    | 1 (0.715) |     8.50 | history, MaLLby, ninjaZ, ponter, short |
|           24 |     1789 | 2022-10-30 | Fuscão 1500  | W   | 0.501      | 0.371        | 0.013 (0.002)    | 0.221 (0.041)    | 0 (0.000) |     5.99 | history, MaLLby, ninjaZ, ponter, short |
|           23 |     1803 | 2022-10-29 | INTZ         | W   | 0.495      | 0.371        | 0.010 (0.002)    | 0.304 (0.056)    | 0 (0.000) |     5.28 | history, MaLLby, ninjaZ, ponter, short |
|           22 |     1818 | 2022-10-28 | ODDIK        | W   | 0.487      | 0.371        | 0.016 (0.003)    | 0.236 (0.043)    | 0 (0.000) |     5.90 | history, MaLLby, ninjaZ, ponter, short |
|           21 |     1925 | 2022-10-23 | Corinthians  | W   | 0.454      | 0.371        | 0.014 (0.002)    | 0.430 (0.072)    | -         |     5.23 | history, MaLLby, ninjaZ, ponter, short |
|           20 |     1959 | 2022-10-22 | RED Canids   | L   | 0.447      | -            | -                | -                | -         |   -10.17 | history, MaLLby, ninjaZ, ponter, short |
|           19 |     1974 | 2022-10-21 | Meta         | W   | 0.442      | 0.371        | 0.010 (0.002)    | 0.302 (0.049)    | -         |     4.92 | history, MaLLby, ninjaZ, ponter, short |
|           18 |     2009 | 2022-10-20 | Boca Juniors | W   | 0.434      | -            | -                | -                | -         |     2.26 | history, MaLLby, ninjaZ, ponter, short |
|           17 |     2039 | 2022-10-19 | SWS          | L   | 0.427      | -            | -                | -                | -         |   -10.43 | history, MaLLby, ninjaZ, ponter, short |
|           16 |     2357 | 2022-10-06 | ex-Isurus    | L   | 0.340      | -            | -                | -                | -         |    -5.68 | history, MaLLby, ninjaZ, ponter, short |
|           15 |     2383 | 2022-10-05 | ATK          | L   | 0.333      | -            | -                | -                | -         |    -4.40 | history, MaLLby, ninjaZ, ponter, short |
|           14 |     2406 | 2022-10-05 | paiN         | L   | 0.331      | -            | -                | -                | -         |    -2.58 | history, MaLLby, ninjaZ, ponter, short |
|           13 |     3161 | 2022-09-09 | Corinthians  | W   | 0.160      | -            | -                | -                | 1 (0.160) |     1.75 | history, MaLLby, ninjaZ, ponter, short |
|           12 |     3218 | 2022-09-08 | ODDIK        | W   | 0.154      | -            | -                | -                | 1 (0.154) |     1.67 | history, MaLLby, ninjaZ, ponter, short |
|           11 |     3341 | 2022-09-02 | Sharks       | W   | 0.114      | -            | -                | -                | -         |     1.30 | history, MaLLby, ninjaZ, ponter, short |
|           10 |     3354 | 2022-09-02 | Corinthians  | W   | 0.113      | -            | -                | -                | -         |     1.23 | history, MaLLby, ninjaZ, ponter, short |
|            9 |     3490 | 2022-08-27 | ex-Isurus    | W   | 0.074      | -            | -                | -                | -         |     1.14 | history, MaLLby, ninjaZ, ponter, short |
|            8 |     3530 | 2022-08-27 | 9z           | L   | 0.072      | -            | -                | -                | -         |    -1.08 | history, MaLLby, ninjaZ, ponter, short |
|            7 |     3549 | 2022-08-26 | Flamengo     | W   | 0.069      | -            | -                | -                | -         |     0.56 | history, MaLLby, ninjaZ, ponter, short |
|            6 |     3553 | 2022-08-26 | Paquetá      | W   | 0.068      | -            | -                | -                | -         |     0.62 | history, MaLLby, ninjaZ, ponter, short |
|            5 |     3557 | 2022-08-26 | Furious      | W   | 0.067      | -            | -                | -                | -         |     0.43 | history, MaLLby, ninjaZ, ponter, short |
|            4 |     3577 | 2022-08-25 | Redragon     | W   | 0.059      | -            | -                | -                | -         |     0.12 | history, MaLLby, ninjaZ, ponter, short |
|            3 |     3656 | 2022-08-21 | Fluxo        | L   | 0.036      | -            | -                | -                | -         |    -0.55 | history, MaLLby, ninjaZ, ponter, short |
|            2 |     3663 | 2022-08-21 | WINDINGO     | W   | 0.035      | -            | -                | -                | -         |     0.26 | history, MaLLby, ninjaZ, ponter, short |
|            1 |     3781 | 2022-08-16 | Meta         | L   | 0.001      | -            | -                | -                | -         |    -0.03 | history, MaLLby, ninjaZ, ponter, short |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,894.16)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-04 |      1.000 | $1,000.00      | $1,000.00       |
| 2022-12-11 |      0.782 | $476.00        | $372.07         |
| 2022-12-02 |      0.719 | $15,000.00     | $10,789.24      |
| 2022-10-30 |      0.501 | $8,000.00      | $4,009.51       |
| 2022-09-09 |      0.160 | $4,000.00      | $641.89         |
| 2022-08-28 |      0.081 | $1,000.00      | $81.45          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
