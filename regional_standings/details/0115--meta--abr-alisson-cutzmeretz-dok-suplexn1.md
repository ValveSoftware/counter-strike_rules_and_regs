### Roster Details<br />
Team Name: Meta<br />
Roster: abr, Alisson, CutzMeretz, dok, supLexN1<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [115](../standings_global.md)<br />
Regional Rank: [29]( ../standings_americas.md)<br />
Final Rank Value:  761.8<br />
<br />
Final Rank Value (761.8) = Starting Rank Value (782.5) + Head To Head Adjustments (-20.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.333[<sup>1</sup>](#table2)
- Bounty Collected: 0.259[<sup>2</sup>](#table1)
- Opponent Network: 0.052[<sup>2</sup>](#table1)
- LAN Wins: 0.104[<sup>2</sup>](#table1)

The average of these factors is 0.187<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 782.5
- 400 + ( ( 0.187 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 782.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |       23 | 2023-02-11 | FUSION              | L   | 1.000      | -            | -                | -                | -         |   -15.90 | abr, Alisson, CutzMeretz, dok, supLexN1    |
|           39 |      163 | 2023-02-04 | Corinthians         | L   | 1.000      | -            | -                | -                | -         |   -13.80 | abr, Alisson, CutzMeretz, dok, supLexN1    |
|           38 |      182 | 2023-02-03 | FUSION              | W   | 1.000      | 0.384        | 0.006 (0.002)    | 0.214 (0.082)    | 0 (0.000) |    14.95 | abr, Alisson, CutzMeretz, dok, supLexN1    |
|           37 |      204 | 2023-02-02 | Paquetá             | W   | 1.000      | 0.384        | 0.005 (0.002)    | 0.457 (0.176)    | 0 (0.000) |    14.89 | abr, Alisson, CutzMeretz, dok, supLexN1    |
|           36 |      372 | 2023-01-27 | Sharks              | L   | 1.000      | -            | -                | -                | -         |   -12.59 | abr, Alisson, CutzMeretz, dok, supLexN1    |
|           35 |      377 | 2023-01-27 | ARCTIC              | W   | 1.000      | 0.143        | 0.036 (0.005)    | 0.230 (0.033)    | 0 (0.000) |    20.24 | abr, Alisson, CutzMeretz, dok, supLexN1    |
|           34 |      630 | 2023-01-17 | Flamengo            | L   | 1.000      | -            | -                | -                | -         |   -17.54 | abr, Alisson, CutzMeretz, dok, supLexN1    |
|           33 |      632 | 2023-01-17 | Paquetá             | W   | 1.000      | 0.143        | 0.005 (0.001)    | 0.457 (0.065)    | 0 (0.000) |    15.02 | abr, Alisson, CutzMeretz, dok, supLexN1    |
|           32 |      635 | 2023-01-17 | RED Canids          | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.178 (0.025)    | 0 (0.000) |    13.11 | abr, Alisson, CutzMeretz, dok, supLexN1    |
|           31 |     1120 | 2022-12-06 | Boca Juniors        | L   | 0.746      | -            | -                | -                | -         |   -12.87 | abr, Alisson, CutzMeretz, dok, supLexN1    |
|           30 |     1179 | 2022-12-04 | INTZ                | W   | 0.732      | 0.384        | 0.010 (0.003)    | 0.304 (0.086)    | 0 (0.000) |    11.66 | abr, Alisson, CutzMeretz, dok, supLexN1    |
|           29 |     1564 | 2022-11-18 | Fuscão 1500         | L   | 0.627      | -            | -                | -                | -         |    -9.05 | abr, Alisson, CutzMeretz, dok, supLexN1    |
|           28 |     1838 | 2022-10-27 | Paquetá             | L   | 0.480      | -            | -                | -                | -         |    -7.64 | abr, Alisson, CutzMeretz, dok, supLexN1    |
|           27 |     1927 | 2022-10-23 | SWS                 | W   | 0.454      | 0.371        | 0.001 (0.000)    | 0.125 (0.021)    | -         |     5.07 | abr, Alisson, CutzMeretz, dok, supLexN1    |
|           26 |     1951 | 2022-10-22 | Boca Juniors        | W   | 0.447      | 0.371        | 0.000 (0.000)    | -                | -         |     3.74 | abr, Alisson, CutzMeretz, dok, supLexN1    |
|           25 |     1974 | 2022-10-21 | ARCTIC              | L   | 0.442      | -            | -                | -                | -         |    -4.92 | abr, Alisson, CutzMeretz, dok, supLexN1    |
|           24 |     2014 | 2022-10-20 | RED Canids          | L   | 0.433      | -            | -                | -                | -         |    -8.20 | abr, Alisson, CutzMeretz, dok, supLexN1    |
|           23 |     2032 | 2022-10-19 | DNG                 | W   | 0.427      | 0.371        | 0.004 (0.001)    | 0.113 (0.018)    | -         |     6.49 | abr, Alisson, CutzMeretz, dok, supLexN1    |
|           22 |     2513 | 2022-09-29 | Fuscão 1500         | L   | 0.293      | -            | -                | -                | -         |    -4.42 | abr, Alisson, CutzMeretz, desh, Leomonster |
|           21 |     2587 | 2022-09-26 | River Plate         | W   | 0.275      | -            | -                | -                | 1 (0.275) |     1.71 | abr, Alisson, CutzMeretz, desh, Leomonster |
|           20 |     2613 | 2022-09-25 | Mad Kings           | W   | 0.267      | 0.333        | -                | 0.081 (0.007)    | 1 (0.267) |     1.97 | abr, Alisson, CutzMeretz, desh, Leomonster |
|           19 |     2663 | 2022-09-24 | ex-Isurus           | L   | 0.259      | -            | -                | -                | -         |    -3.04 | abr, Alisson, CutzMeretz, desh, Leomonster |
|           18 |     2704 | 2022-09-23 | Ape Gang            | L   | 0.253      | -            | -                | -                | -         |    -6.04 | abr, Alisson, CutzMeretz, desh, Leomonster |
|           17 |     2751 | 2022-09-22 | Ape Gang            | W   | 0.246      | -            | -                | -                | -         |     1.89 | abr, Alisson, CutzMeretz, desh, Leomonster |
|           16 |     2767 | 2022-09-21 | Los Grandes Academy | L   | 0.242      | -            | -                | -                | -         |    -5.33 | abr, Alisson, CutzMeretz, desh, Leomonster |
|           15 |     2774 | 2022-09-21 | ODDIK               | L   | 0.241      | -            | -                | -                | -         |    -3.89 | abr, Alisson, CutzMeretz, desh, Leomonster |
|           14 |     2810 | 2022-09-20 | Mad Kings           | W   | 0.233      | 0.333        | -                | 0.081 (0.006)    | 1 (0.233) |     1.62 | abr, Alisson, CutzMeretz, desh, Leomonster |
|           13 |     2833 | 2022-09-19 | Sotano              | W   | 0.227      | -            | -                | -                | 1 (0.227) |     0.78 | abr, Alisson, CutzMeretz, desh, Leomonster |
|           12 |     2910 | 2022-09-16 | Furious             | L   | 0.207      | -            | -                | -                | -         |    -4.59 | abr, Alisson, CutzMeretz, desh, Leomonster |
|           11 |     2942 | 2022-09-15 | ex-Isurus           | L   | 0.201      | -            | -                | -                | -         |    -2.47 | abr, Alisson, CutzMeretz, desh, Leomonster |
|           10 |     3200 | 2022-09-08 | Corinthians         | L   | 0.154      | -            | -                | -                | -         |    -2.55 | abr, Alisson, CutzMeretz, desh, Leomonster |
|            9 |     3340 | 2022-09-02 | B4                  | W   | 0.115      | -            | -                | -                | -         |     1.00 | abr, Alisson, CutzMeretz, desh, Leomonster |
|            8 |     3343 | 2022-09-02 | Fuscão 1500         | W   | 0.114      | 0.143        | 0.013 (0.000)    | -                | -         |     1.81 | abr, Alisson, CutzMeretz, desh, Leomonster |
|            7 |     3491 | 2022-08-27 | paiN                | L   | 0.074      | -            | -                | -                | -         |    -0.37 | abr, Alisson, CutzMeretz, desh, Leomonster |
|            6 |     3554 | 2022-08-26 | B4                  | L   | 0.068      | -            | -                | -                | -         |    -1.55 | abr, Alisson, CutzMeretz, desh, Leomonster |
|            5 |     3647 | 2022-08-22 | SWS                 | W   | 0.039      | -            | -                | -                | -         |     0.40 | abr, Alisson, CutzMeretz, desh, Leomonster |
|            4 |     3721 | 2022-08-20 | Fuscão 1500         | L   | 0.026      | -            | -                | -                | -         |    -0.40 | abr, Alisson, CutzMeretz, desh, Leomonster |
|            3 |     3746 | 2022-08-18 | WINDINGO            | W   | 0.014      | -            | -                | -                | -         |     0.15 | abr, Alisson, CutzMeretz, desh, Leomonster |
|            2 |     3759 | 2022-08-17 | 00NATION            | L   | 0.007      | -            | -                | -                | -         |    -0.09 | abr, Alisson, CutzMeretz, desh, Leomonster |
|            1 |     3781 | 2022-08-16 | ARCTIC              | W   | 0.001      | -            | -                | -                | -         |     0.03 | abr, Alisson, CutzMeretz, desh, Leomonster |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,675.24)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-04 |      1.000 | $2,500.00      | $2,500.00       |
| 2022-12-07 |      0.756 | $1,000.00      | $755.75         |
| 2022-11-19 |      0.635 | $325.00        | $206.26         |
| 2022-10-30 |      0.501 | $800.00        | $400.95         |
| 2022-09-30 |      0.302 | $1,000.00      | $301.55         |
| 2022-09-25 |      0.269 | $1,000.00      | $268.81         |
| 2022-09-09 |      0.160 | $1,000.00      | $160.47         |
| 2022-08-28 |      0.081 | $1,000.00      | $81.45          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
