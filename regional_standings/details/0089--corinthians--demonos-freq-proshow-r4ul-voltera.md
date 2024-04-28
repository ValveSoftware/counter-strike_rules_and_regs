### Roster Details<br />
Team Name: Corinthians<br />
Roster: Demonos, fREQ, proSHOW, r4ul, voltera<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [89](../standings_global.md)<br />
Regional Rank: [19]( ../standings_americas.md)<br />
Final Rank Value:  834.5<br />
<br />
Final Rank Value (834.5) = Starting Rank Value (765.1) + Head To Head Adjustments (69.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.350[<sup>1</sup>](#table2)
- Bounty Collected: 0.283[<sup>2</sup>](#table1)
- Opponent Network: 0.065[<sup>2</sup>](#table1)
- LAN Wins: 0.016[<sup>2</sup>](#table1)

The average of these factors is 0.178<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 765.1
- 400 + ( ( 0.178 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 765.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |       18 | 2023-02-11 | Case                | W   | 1.000      | 0.143        | 0.009 (0.001)    | -                | 0 (0.000) |     9.08 | Demonos, fREQ, proSHOW, r4ul, voltera     |
|           38 |      159 | 2023-02-04 | Fluxo               | L   | 1.000      | -            | -                | -                | -         |   -10.54 | Demonos, fREQ, proSHOW, r4ul, voltera     |
|           37 |      163 | 2023-02-04 | Meta                | W   | 1.000      | 0.384        | 0.010 (0.004)    | 0.302 (0.116)    | 0 (0.000) |    13.80 | Demonos, fREQ, proSHOW, r4ul, voltera     |
|           36 |      196 | 2023-02-03 | ARCTIC              | W   | 1.000      | 0.384        | 0.036 (0.014)    | 0.230 (0.088)    | 0 (0.000) |    17.74 | Demonos, fREQ, proSHOW, r4ul, voltera     |
|           35 |      225 | 2023-02-01 | Fuscão 1500         | W   | 1.000      | 0.384        | 0.013 (0.005)    | 0.221 (0.085)    | 0 (0.000) |    14.45 | Demonos, fREQ, proSHOW, r4ul, voltera     |
|           34 |      296 | 2023-01-29 | Furious             | W   | 1.000      | 0.384        | 0.001 (0.000)    | 0.116 (0.044)    | 0 (0.000) |     8.66 | Demonos, fREQ, proSHOW, r4ul, voltera     |
|           33 |      384 | 2023-01-27 | Flamengo            | W   | 1.000      | 0.384        | -                | 0.288 (0.111)    | 0 (0.000) |    12.32 | Demonos, fREQ, proSHOW, r4ul, voltera     |
|           32 |      446 | 2023-01-25 | INTZ                | L   | 1.000      | -            | -                | -                | -         |   -16.15 | Demonos, fREQ, proSHOW, r4ul, voltera     |
|           31 |      516 | 2023-01-22 | Boca Juniors        | W   | 1.000      | 0.384        | 0.005 (0.002)    | 0.200 (0.077)    | 0 (0.000) |    12.78 | Demonos, fREQ, proSHOW, r4ul, voltera     |
|           30 |     1143 | 2022-12-05 | ex-Isurus           | L   | 0.740      | -            | -                | -                | -         |    -8.66 | Demonos, fREQ, keiz, r4ul, voltera        |
|           29 |     1252 | 2022-12-02 | Rehl                | W   | 0.719      | 0.384        | -                | 0.118 (0.033)    | 0 (0.000) |     7.22 | Demonos, fREQ, keiz, r4ul, voltera        |
|           28 |     1360 | 2022-11-28 | NO ORG              | W   | 0.692      | -            | -                | -                | 0 (0.000) |     5.92 | Demonos, fREQ, keiz, r4ul, voltera        |
|           27 |     1770 | 2022-10-31 | Fuscão 1500         | W   | 0.508      | 0.268        | 0.013 (0.002)    | 0.221 (0.030)    | -         |     8.50 | DANVIET, gbb, Lcm, nolkz, roz             |
|           26 |     1857 | 2022-10-26 | 9z Academy          | W   | 0.474      | -            | -                | -                | -         |     3.13 | Demonos, detr0ittJ, fREQ, r4ul, voltera   |
|           25 |     1925 | 2022-10-23 | ARCTIC              | L   | 0.454      | -            | -                | -                | -         |    -5.23 | Demonos, detr0ittJ, fREQ, r4ul, voltera   |
|           24 |     1944 | 2022-10-22 | Flamengo            | W   | 0.448      | 0.371        | -                | 0.288 (0.048)    | -         |     5.49 | delboNi, KAOS, ph1, SHOOWTiME, zqkS       |
|           23 |     1977 | 2022-10-21 | Fuscão 1500         | L   | 0.441      | -            | -                | -                | -         |    -6.70 | DANVIET, gbb, Lcm, nolkz, roz             |
|           22 |     2004 | 2022-10-20 | Paquetá             | L   | 0.434      | -            | -                | -                | -         |    -7.32 | ALLE, DeStiNy, Gafolo, venomzera, xns     |
|           21 |     2035 | 2022-10-19 | Stars Horizon       | W   | 0.427      | -            | -                | -                | -         |     1.51 | bks, hoax, Mesk, UnK, vNs                 |
|           20 |     2540 | 2022-09-28 | NO ORG              | W   | 0.288      | -            | -                | -                | -         |     2.79 | bnc, cerolzin, fetixe, tkl, will1zera     |
|           19 |     2589 | 2022-09-26 | NO ORG              | W   | 0.274      | -            | -                | -                | -         |     2.67 | bnc, cerolzin, fetixe, tkl, will1zera     |
|           18 |     2649 | 2022-09-24 | Sharks              | L   | 0.261      | -            | -                | -                | -         |    -3.97 | chay, drg, jnt, n1ssim, togs              |
|           17 |     2695 | 2022-09-23 | ODDIK               | L   | 0.254      | -            | -                | -                | -         |    -4.02 | Demonos, detr0ittJ, fREQ, r4ul, voltera   |
|           16 |     2732 | 2022-09-22 | Los Grandes Academy | W   | 0.249      | -            | -                | -                | -         |     2.42 | Demonos, detr0ittJ, fREQ, r4ul, voltera   |
|           15 |     2736 | 2022-09-22 | FUSION              | W   | 0.248      | -            | -                | -                | -         |     1.53 | Demonos, detr0ittJ, fREQ, r4ul, voltera   |
|           14 |     2768 | 2022-09-21 | RED Canids          | W   | 0.242      | -            | -                | -                | -         |     3.00 | Demonos, detr0ittJ, fREQ, r4ul, voltera   |
|           13 |     2776 | 2022-09-21 | Fluxo               | L   | 0.241      | -            | -                | -                | -         |    -2.44 | Demonos, detr0ittJ, fREQ, r4ul, voltera   |
|           12 |     3161 | 2022-09-09 | ARCTIC              | L   | 0.160      | -            | -                | -                | -         |    -1.75 | Demonos, detr0ittJ, fREQ, r4ul, voltera   |
|           11 |     3200 | 2022-09-08 | Meta                | W   | 0.154      | 0.323        | 0.010 (0.000)    | 0.302 (0.015)    | 1 (0.154) |     2.55 | Demonos, detr0ittJ, fREQ, r4ul, voltera   |
|           10 |     3283 | 2022-09-04 | Sharks              | W   | 0.127      | 0.143        | 0.017 (0.000)    | -                | -         |     2.06 | Demonos, detr0ittJ, fREQ, r4ul, voltera   |
|            9 |     3319 | 2022-09-03 | Stars Horizon       | W   | 0.120      | -            | -                | -                | -         |     1.15 | BobZ, hoax, lukz, pigo, UnK               |
|            8 |     3354 | 2022-09-02 | ARCTIC              | L   | 0.113      | -            | -                | -                | -         |    -1.23 | Demonos, detr0ittJ, fREQ, r4ul, voltera   |
|            7 |     3374 | 2022-09-01 | Stars Horizon       | L   | 0.108      | -            | -                | -                | -         |    -2.38 | Demonos, detr0ittJ, fREQ, r4ul, voltera   |
|            6 |     3407 | 2022-08-31 | Fuscão 1500         | W   | 0.101      | 0.268        | 0.013 (0.000)    | -                | -         |     1.69 | Demonos, detr0ittJ, fREQ, r4ul, voltera   |
|            5 |     3425 | 2022-08-30 | AJF                 | W   | 0.095      | -            | -                | -                | -         |     0.54 | antonini, Haz4rt, HPS, MITHPUTTINI, nolkz |
|            4 |     3560 | 2022-08-26 | Flamengo            | L   | 0.067      | -            | -                | -                | -         |    -1.29 | ckzao, danoco, delboNi, SHOOWTiME, zqkS   |
|            3 |     3566 | 2022-08-26 | paiN                | L   | 0.065      | -            | -                | -                | -         |    -0.30 | Demonos, detr0ittJ, fREQ, r4ul, voltera   |
|            2 |     3713 | 2022-08-20 | Ape Gang            | W   | 0.026      | -            | -                | -                | -         |     0.19 | andizin, christo, pavv, refused, Yokowow  |
|            1 |     3749 | 2022-08-18 | SWS                 | W   | 0.013      | -            | -                | -                | -         |     0.14 | bsd, CSO, mxa, SaNt0S, stainzin           |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,641.39)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-04 |      1.000 | $5,000.00      | $5,000.00       |
| 2022-10-31 |      0.508 | $800.00        | $406.11         |
| 2022-10-30 |      0.501 | $400.00        | $200.48         |
| 2022-09-28 |      0.288 | $800.00        | $230.18         |
| 2022-09-25 |      0.269 | $1,000.00      | $268.81         |
| 2022-09-25 |      0.268 | $600.00        | $160.83         |
| 2022-09-09 |      0.160 | $2,000.00      | $320.95         |
| 2022-09-01 |      0.108 | $500.00        | $54.04          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
