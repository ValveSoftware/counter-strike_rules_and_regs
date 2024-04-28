### Roster Details<br />
Team Name: Fuscão 1500<br />
Roster: DANVIET, gbb, Lcm, nolkz, roz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [116](../standings_global.md)<br />
Regional Rank: [30]( ../standings_americas.md)<br />
Final Rank Value:  760.3<br />
<br />
Final Rank Value (760.3) = Starting Rank Value (790.1) + Head To Head Adjustments (-29.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.346[<sup>1</sup>](#table2)
- Bounty Collected: 0.249[<sup>2</sup>](#table1)
- Opponent Network: 0.034[<sup>2</sup>](#table1)
- LAN Wins: 0.134[<sup>2</sup>](#table1)

The average of these factors is 0.191<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 790.1
- 400 + ( ( 0.191 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 790.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |      225 | 2023-02-01 | Corinthians         | L   | 1.000      | -            | -                | -                | -         |   -14.45 | DANVIET, gbb, Lcm, nolkz, roz                |
|           39 |     1133 | 2022-12-05 | FUSION              | L   | 0.742      | -            | -                | -                | -         |   -13.23 | christo, guidimon, KUN, naz, TIKO            |
|           38 |     1272 | 2022-12-01 | ARCTIC              | L   | 0.715      | -            | -                | -                | -         |    -8.50 | DANVIET, gbb, Lcm, nolkz, roz                |
|           37 |     1546 | 2022-11-19 | ODDIK               | W   | 0.635      | 0.284        | 0.016 (0.003)    | 0.236 (0.043)    | 0 (0.000) |     9.70 | naitte, r1see, remix, RICIOLI, vLa           |
|           36 |     1564 | 2022-11-18 | Meta                | W   | 0.627      | 0.284        | 0.010 (0.002)    | 0.302 (0.054)    | 0 (0.000) |     9.05 | DANVIET, gbb, Lcm, nolkz, roz                |
|           35 |     1770 | 2022-10-31 | Corinthians         | L   | 0.508      | -            | -                | -                | -         |    -8.50 | DANVIET, gbb, Lcm, nolkz, roz                |
|           34 |     1775 | 2022-10-31 | 9z Academy          | W   | 0.507      | -            | -                | -                | 0 (0.000) |     2.92 | DANVIET, gbb, Lcm, nolkz, roz                |
|           33 |     1789 | 2022-10-30 | ARCTIC              | L   | 0.501      | -            | -                | -                | -         |    -5.99 | history, MaLLby, ninjaZ, ponter, short       |
|           32 |     1805 | 2022-10-29 | Paquetá             | W   | 0.494      | 0.371        | 0.005 (0.001)    | 0.457 (0.084)    | 0 (0.000) |     7.25 | DANVIET, gbb, Lcm, nolkz, roz                |
|           31 |     1835 | 2022-10-27 | RED Canids          | W   | 0.481      | 0.371        | 0.001 (0.000)    | 0.178 (0.032)    | 0 (0.000) |     5.96 | DANVIET, gbb, Lcm, nolkz, roz                |
|           30 |     1855 | 2022-10-26 | Los Grandes Academy | W   | 0.474      | -            | -                | -                | -         |     4.49 | proSHOW, puni, spawnzera, suNday, vinaabEAST |
|           29 |     1956 | 2022-10-22 | INTZ                | L   | 0.447      | -            | -                | -                | -         |    -7.77 | BobZ, desh, Leomonster, TEKO, w1             |
|           28 |     1977 | 2022-10-21 | Corinthians         | W   | 0.441      | 0.371        | 0.014 (0.002)    | 0.430 (0.070)    | -         |     6.70 | DANVIET, gbb, Lcm, nolkz, roz                |
|           27 |     2011 | 2022-10-20 | Stars Horizon       | W   | 0.433      | -            | -                | -                | -         |     1.50 | bks, hoax, Mesk, UnK, vNs                    |
|           26 |     2037 | 2022-10-19 | Paquetá             | L   | 0.427      | -            | -                | -                | -         |    -7.50 | ALLE, DeStiNy, Gafolo, venomzera, xns        |
|           25 |     2484 | 2022-09-30 | ex-Isurus           | L   | 0.302      | -            | -                | -                | -         |    -3.73 | deco, luchov, meyern, Noktse, reversive      |
|           24 |     2513 | 2022-09-29 | Meta                | W   | 0.293      | 0.333        | 0.010 (0.001)    | 0.302 (0.030)    | 1 (0.293) |     4.42 | abr, Alisson, CutzMeretz, desh, Leomonster   |
|           23 |     2624 | 2022-09-25 | River Plate         | W   | 0.266      | -            | -                | -                | 1 (0.266) |     1.56 | aw0kenn, gon, guishu, JERUZZZ, maxxkor       |
|           22 |     2689 | 2022-09-23 | Furious             | W   | 0.254      | 0.333        | 0.001 (0.000)    | 0.116 (0.010)    | 1 (0.254) |     2.48 | DANVIET, gbb, Lcm, pancc, roz                |
|           21 |     2743 | 2022-09-22 | 9z Academy          | W   | 0.247      | -            | -                | -                | 1 (0.247) |     1.56 | FURQE, HUASOPEEK, ivz, juaniv, relentless    |
|           20 |     2780 | 2022-09-21 | Ape Gang            | L   | 0.240      | -            | -                | -                | -         |    -5.83 | DANVIET, gbb, Lcm, pancc, roz                |
|           19 |     2830 | 2022-09-19 | DNG                 | W   | 0.228      | 0.333        | 0.004 (0.000)    | 0.113 (0.009)    | 1 (0.228) |     3.35 | abizz, atarax1a, nacho, NikoM, tom1jed       |
|           18 |     3052 | 2022-09-12 | DNG                 | W   | 0.179      | 0.384        | 0.004 (0.000)    | 0.113 (0.008)    | -         |     2.65 | atarax1a, guidimon, minimal, NikoM, tom1jed  |
|           17 |     3061 | 2022-09-11 | Paquetá             | L   | 0.175      | -            | -                | -                | -         |    -3.20 | ALLE, DeStiNy, Gafolo, venomzera, xns        |
|           16 |     3066 | 2022-09-11 | FURIA Academy       | L   | 0.174      | -            | -                | -                | -         |    -3.08 | Bruninho, decenty, kauez, koala, zmb         |
|           15 |     3084 | 2022-09-11 | FUSION              | L   | 0.172      | -            | -                | -                | -         |    -4.46 | BK1, ign, jotti, KUN, naz                    |
|           14 |     3103 | 2022-09-10 | FUSION              | W   | 0.168      | -            | -                | -                | -         |     0.95 | BK1, ign, jotti, KUN, naz                    |
|           13 |     3111 | 2022-09-10 | paiN Academy        | W   | 0.168      | -            | -                | -                | -         |     1.54 | cass1n, GYZER, happ, kye, xureba             |
|           12 |     3190 | 2022-09-08 | Fluxo               | L   | 0.155      | -            | -                | -                | -         |    -1.75 | felps, Lucaozy, lux, vsm, WOOD7              |
|           11 |     3201 | 2022-09-08 | Rehl                | W   | 0.154      | -            | -                | -                | -         |     1.53 | BRNZ1K, DebornY, gh, kurg4n, phx             |
|           10 |     3309 | 2022-09-03 | ODDIK               | L   | 0.121      | -            | -                | -                | -         |    -2.00 | DANVIET, gon, Lcm, paiva, roz                |
|            9 |     3343 | 2022-09-02 | Meta                | L   | 0.114      | -            | -                | -                | -         |    -1.81 | DANVIET, gon, Lcm, paiva, roz                |
|            8 |     3407 | 2022-08-31 | Corinthians         | L   | 0.101      | -            | -                | -                | -         |    -1.69 | Demonos, detr0ittJ, fREQ, r4ul, voltera      |
|            7 |     3426 | 2022-08-30 | Stars Horizon       | L   | 0.094      | -            | -                | -                | -         |    -2.15 | BobZ, hoax, lukz, pigo, UnK                  |
|            6 |     3555 | 2022-08-26 | WINDINGO            | L   | 0.067      | -            | -                | -                | -         |    -1.41 | DANVIET, gon, Lcm, paiva, roz                |
|            5 |     3574 | 2022-08-25 | Fluxo               | L   | 0.060      | -            | -                | -                | -         |    -0.70 | DANVIET, gon, Lcm, paiva, roz                |
|            4 |     3721 | 2022-08-20 | Meta                | W   | 0.026      | 0.384        | 0.010 (0.000)    | 0.302 (0.003)    | -         |     0.40 | DANVIET, gon, Lcm, paiva, roz                |
|            3 |     3745 | 2022-08-18 | Capivara Strong     | W   | 0.015      | -            | -                | -                | -         |     0.05 | D9st, joaosillva, kyu, Nogz1k4, spARK        |
|            2 |     3775 | 2022-08-16 | MIBR                | L   | 0.002      | -            | -                | -                | -         |    -0.01 | brnz4n, exit, HEN1, JOTA, Tuurtle            |
|            1 |     3784 | 2022-08-16 | Leviatan SSJ        | W   | 0.001      | -            | -                | -                | -         |     0.00 | JonY BoY, knark, TIKO, Zoloffff, zrxcs       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,090.57)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-02 |      0.719 | $3,750.00      | $2,697.31       |
| 2022-11-19 |      0.635 | $1,200.00      | $761.58         |
| 2022-10-31 |      0.508 | $500.00        | $253.82         |
| 2022-10-30 |      0.501 | $3,400.00      | $1,704.04       |
| 2022-09-30 |      0.302 | $2,000.00      | $603.09         |
| 2022-09-04 |      0.128 | $300.00        | $38.31          |
| 2022-09-01 |      0.108 | $300.00        | $32.42          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
