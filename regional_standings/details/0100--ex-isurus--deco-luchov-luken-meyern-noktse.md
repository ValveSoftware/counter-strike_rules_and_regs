### Roster Details<br />
Team Name: ex-Isurus<br />
Roster: deco, luchov, Luken, meyern, Noktse<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [100](../standings_global.md)<br />
Regional Rank: [23]( ../standings_americas.md)<br />
Final Rank Value:  807.8<br />
<br />
Final Rank Value (807.8) = Starting Rank Value (868.8) + Head To Head Adjustments (-61.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.347[<sup>1</sup>](#table2)
- Bounty Collected: 0.260[<sup>2</sup>](#table1)
- Opponent Network: 0.029[<sup>2</sup>](#table1)
- LAN Wins: 0.281[<sup>2</sup>](#table1)

The average of these factors is 0.229<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 868.8
- 400 + ( ( 0.229 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 868.8


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
|           38 |       20 | 2023-02-11 | INTZ                | L   | 1.000      | -            | -                | -                | -         |   -18.19 | deco, luchov, Luken, meyern, Noktse        |
|           37 |      232 | 2023-02-01 | INTZ                | L   | 1.000      | -            | -                | -                | -         |   -19.43 | BobZ, desh, Leomonster, TEKO, w1           |
|           36 |      376 | 2023-01-27 | Flamengo            | L   | 1.000      | -            | -                | -                | -         |   -22.23 | delboNi, f4stzin, n1ssim, SHOOWTiME, zqkS  |
|           35 |     1096 | 2022-12-06 | Fluxo               | L   | 0.749      | -            | -                | -                | -         |    -9.24 | felps, Lucaozy, lux, vsm, WOOD7            |
|           34 |     1143 | 2022-12-05 | Corinthians         | W   | 0.740      | 0.384        | 0.014 (0.004)    | 0.430 (0.122)    | 0 (0.000) |     8.66 | Demonos, fREQ, keiz, r4ul, voltera         |
|           33 |     1923 | 2022-10-23 | DNG                 | W   | 0.455      | 0.333        | 0.004 (0.001)    | 0.113 (0.017)    | 1 (0.455) |     4.92 | deco, luchov, meyern, Noktse, reversive    |
|           32 |     1929 | 2022-10-23 | WINDINGO            | W   | 0.454      | 0.333        | 0.002 (0.000)    | 0.210 (0.032)    | 1 (0.454) |     3.46 | bichop, DILLION1, FRANAR, PREDI, restikk   |
|           31 |     2170 | 2022-10-14 | Imperial            | L   | 0.394      | -            | -                | -                | -         |    -5.51 | deco, luchov, meyern, Noktse, reversive    |
|           30 |     2319 | 2022-10-08 | Complexity          | L   | 0.354      | -            | -                | -                | -         |    -0.62 | deco, luchov, meyern, Noktse, reversive    |
|           29 |     2337 | 2022-10-07 | MIBR                | W   | 0.347      | 0.143        | 0.089 (0.004)    | 0.586 (0.029)    | 1 (0.347) |     7.40 | deco, luchov, meyern, Noktse, reversive    |
|           28 |     2357 | 2022-10-06 | ARCTIC              | W   | 0.340      | 0.143        | 0.036 (0.002)    | 0.230 (0.011)    | 1 (0.340) |     5.68 | history, MaLLby, ninjaZ, ponter, short     |
|           27 |     2381 | 2022-10-05 | 00NATION            | L   | 0.334      | -            | -                | -                | -         |    -5.36 | coldzera, dumau, latto, TACO, try          |
|           26 |     2411 | 2022-10-05 | Imperial            | L   | 0.331      | -            | -                | -                | -         |    -4.94 | deco, luchov, meyern, Noktse, reversive    |
|           25 |     2484 | 2022-09-30 | Fuscão 1500         | W   | 0.302      | 0.333        | 0.013 (0.001)    | 0.221 (0.022)    | 1 (0.302) |     3.73 | deco, luchov, meyern, Noktse, reversive    |
|           24 |     2511 | 2022-09-29 | DNG                 | W   | 0.294      | 0.333        | 0.004 (0.000)    | 0.113 (0.011)    | 1 (0.294) |     3.31 | abizz, atarax1a, nacho, NikoM, tom1jed     |
|           23 |     2618 | 2022-09-25 | Fluxo               | L   | 0.267      | -            | -                | -                | -         |    -3.66 | felps, Lucaozy, lux, vsm, WOOD7            |
|           22 |     2656 | 2022-09-24 | Ape Gang            | W   | 0.260      | -            | -                | -                | 1 (0.260) |     1.35 | andizin, christo, pavv, tomaszin, Yokowow  |
|           21 |     2663 | 2022-09-24 | Meta                | W   | 0.259      | 0.384        | 0.010 (0.001)    | 0.302 (0.030)    | 0 (0.000) |     3.04 | deco, luchov, meyern, Noktse, reversive    |
|           20 |     2687 | 2022-09-23 | Mad Kings           | W   | 0.254      | 0.333        | -                | 0.081 (0.007)    | 1 (0.254) |     1.23 | BabyRage, Knight, KOT3, Slayerhz, zockie   |
|           19 |     2728 | 2022-09-22 | MIBR Academy        | W   | 0.249      | -            | -                | -                | -         |     1.19 | deco, luchov, meyern, Noktse, reversive    |
|           18 |     2907 | 2022-09-16 | Furious             | L   | 0.208      | -            | -                | -                | -         |    -5.12 | ABM, Andrew, KAISER, laser, peqexino       |
|           17 |     2914 | 2022-09-16 | ODDIK               | L   | 0.207      | -            | -                | -                | -         |    -4.12 | deco, luchov, meyern, Noktse, reversive    |
|           16 |     2942 | 2022-09-15 | Meta                | W   | 0.201      | 0.143        | 0.010 (0.000)    | 0.302 (0.009)    | -         |     2.47 | abr, Alisson, CutzMeretz, desh, Leomonster |
|           15 |     3108 | 2022-09-10 | FUSION              | L   | 0.168      | -            | -                | -                | -         |    -4.66 | BK1, ign, jotti, KUN, naz                  |
|           14 |     3191 | 2022-09-08 | Sharks              | L   | 0.155      | -            | -                | -                | -         |    -3.06 | chay, drg, jnt, n1ssim, togs               |
|           13 |     3197 | 2022-09-08 | Stone               | W   | 0.155      | -            | -                | -                | -         |     0.33 | deco, luchov, meyern, Noktse, reversive    |
|           12 |     3487 | 2022-08-27 | ODDIK               | L   | 0.075      | -            | -                | -                | -         |    -1.51 | naitte, r1see, remix, RICIOLI, vLa         |
|           11 |     3490 | 2022-08-27 | ARCTIC              | L   | 0.074      | -            | -                | -                | -         |    -1.14 | deco, luchov, meyern, Noktse, reversive    |
|           10 |     3548 | 2022-08-26 | B4                  | W   | 0.069      | -            | -                | -                | -         |     0.41 | matios, realz1n, supLexN1, t9rnay, w1      |
|            9 |     3552 | 2022-08-26 | ODDIK               | W   | 0.068      | 0.143        | 0.016 (0.000)    | -                | -         |     0.77 | naitte, r1see, remix, RICIOLI, vLa         |
|            8 |     3559 | 2022-08-26 | Stars Horizon       | W   | 0.067      | -            | -                | -                | -         |     0.41 | BobZ, hoax, lukz, pigo, UnK                |
|            7 |     3563 | 2022-08-26 | Sharks              | W   | 0.066      | -            | -                | -                | -         |     0.22 | deco, luchov, meyern, Noktse, reversive    |
|            6 |     3600 | 2022-08-23 | MIBR Academy        | W   | 0.047      | -            | -                | -                | -         |     0.21 | deco, luchov, meyern, Noktse, reversive    |
|            5 |     3661 | 2022-08-21 | B4                  | L   | 0.035      | -            | -                | -                | -         |    -0.91 | deco, luchov, meyern, Noktse, reversive    |
|            4 |     3679 | 2022-08-21 | Los Grandes Academy | W   | 0.033      | -            | -                | -                | -         |     0.07 | deco, luchov, meyern, Noktse, reversive    |
|            3 |     3738 | 2022-08-19 | Boca Juniors        | W   | 0.020      | -            | -                | -                | -         |     0.11 | deco, luchov, meyern, Noktse, reversive    |
|            2 |     3754 | 2022-08-17 | Rehl                | L   | 0.008      | -            | -                | -                | -         |    -0.24 | deco, luchov, meyern, Noktse, reversive    |
|            1 |     3777 | 2022-08-16 | paiN                | L   | 0.001      | -            | -                | -                | -         |    -0.01 | deco, luchov, meyern, Noktse, reversive    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,202.58)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-07 |      0.756 | $1,000.00      | $755.75         |
| 2022-10-23 |      0.455 | $5,000.00      | $2,272.95       |
| 2022-10-16 |      0.407 | $1,500.00      | $611.12         |
| 2022-09-30 |      0.302 | $6,000.00      | $1,809.28       |
| 2022-09-25 |      0.269 | $2,500.00      | $672.04         |
| 2022-08-28 |      0.081 | $1,000.00      | $81.45          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
