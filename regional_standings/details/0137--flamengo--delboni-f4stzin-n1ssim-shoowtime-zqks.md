### Roster Details<br />
Team Name: Flamengo<br />
Roster: delboNi, f4stzin, n1ssim, SHOOWTiME, zqkS<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [137](../standings_global.md)<br />
Regional Rank: [38]( ../standings_americas.md)<br />
Final Rank Value:  735.9<br />
<br />
Final Rank Value (735.9) = Starting Rank Value (686.6) + Head To Head Adjustments (49.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.243[<sup>1</sup>](#table2)
- Bounty Collected: 0.285[<sup>2</sup>](#table1)
- Opponent Network: 0.032[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 686.6
- 400 + ( ( 0.140 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 686.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |      361 | 2023-01-27 | O PLANO        | L   | 1.000      | -            | -                | -                | -         |   -16.26 | delboNi, f4stzin, n1ssim, SHOOWTiME, zqkS |
|           25 |      370 | 2023-01-27 | Fluxo          | W   | 1.000      | 0.143        | 0.087 (0.012)    | 0.528 (0.075)    | 0 (0.000) |    23.64 | delboNi, f4stzin, n1ssim, SHOOWTiME, zqkS |
|           24 |      373 | 2023-01-27 | TropiCaos      | W   | 1.000      | 0.143        | 0.014 (0.002)    | 0.222 (0.032)    | 0 (0.000) |    16.37 | delboNi, f4stzin, n1ssim, SHOOWTiME, zqkS |
|           23 |      376 | 2023-01-27 | ex-Isurus      | W   | 1.000      | 0.143        | 0.013 (0.002)    | 0.171 (0.024)    | 0 (0.000) |    22.23 | delboNi, f4stzin, n1ssim, SHOOWTiME, zqkS |
|           22 |      384 | 2023-01-27 | Corinthians    | L   | 1.000      | -            | -                | -                | -         |   -12.32 | delboNi, f4stzin, n1ssim, SHOOWTiME, zqkS |
|           21 |      430 | 2023-01-25 | RED Canids     | L   | 1.000      | -            | -                | -                | -         |   -15.66 | delboNi, f4stzin, n1ssim, SHOOWTiME, zqkS |
|           20 |      485 | 2023-01-23 | Hype           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.28 | delboNi, f4stzin, n1ssim, SHOOWTiME, zqkS |
|           19 |      562 | 2023-01-20 | 00NATION       | L   | 1.000      | -            | -                | -                | -         |    -8.61 | delboNi, f4stzin, n1ssim, SHOOWTiME, zqkS |
|           18 |      610 | 2023-01-18 | 00NATION       | L   | 1.000      | -            | -                | -                | -         |    -8.67 | delboNi, f4stzin, n1ssim, SHOOWTiME, zqkS |
|           17 |      630 | 2023-01-17 | Meta           | W   | 1.000      | 0.143        | 0.010 (0.001)    | 0.302 (0.043)    | 0 (0.000) |    17.54 | delboNi, f4stzin, n1ssim, SHOOWTiME, zqkS |
|           16 |      631 | 2023-01-17 | Fluxo          | W   | 1.000      | 0.143        | 0.087 (0.012)    | 0.528 (0.075)    | 0 (0.000) |    25.24 | delboNi, f4stzin, n1ssim, SHOOWTiME, zqkS |
|           15 |      636 | 2023-01-17 | O PLANO        | W   | 1.000      | 0.143        | 0.005 (0.001)    | 0.289 (0.041)    | 0 (0.000) |    15.81 | delboNi, f4stzin, n1ssim, SHOOWTiME, zqkS |
|           14 |     1944 | 2022-10-22 | Corinthians    | L   | 0.448      | -            | -                | -                | -         |    -5.49 | Demonos, detr0ittJ, fREQ, r4ul, voltera   |
|           13 |     1980 | 2022-10-21 | INTZ           | L   | 0.440      | -            | -                | -                | -         |    -5.95 | delboNi, KAOS, ph1, SHOOWTiME, zqkS       |
|           12 |     2005 | 2022-10-20 | Liberty        | W   | 0.434      | 0.371        | 0.000 (0.000)    | 0.053 (0.009)    | 0 (0.000) |     4.95 | delboNi, KAOS, ph1, SHOOWTiME, zqkS       |
|           11 |     2043 | 2022-10-19 | ODDIK          | L   | 0.426      | -            | -                | -                | -         |    -5.15 | delboNi, KAOS, ph1, SHOOWTiME, zqkS       |
|           10 |     2652 | 2022-09-24 | Fluxo          | L   | 0.260      | -            | -                | -                | -         |    -1.86 | felps, Lucaozy, lux, vsm, WOOD7           |
|            9 |     2740 | 2022-09-22 | Furious        | W   | 0.247      | 0.384        | 0.001 (0.000)    | 0.116 (0.011)    | 0 (0.000) |     3.36 | danoco, delboNi, ph1, SHOOWTiME, zqkS     |
|            8 |     3101 | 2022-09-10 | O PLANO        | L   | 0.168      | -            | -                | -                | -         |    -3.67 | danoco, delboNi, ph1, SHOOWTiME, zqkS     |
|            7 |     3105 | 2022-09-10 | Selecao do bt0 | W   | 0.168      | -            | -                | -                | 0 (0.000) |     0.89 | b4rtiN, bt0, noway, ped, t9rnay           |
|            6 |     3192 | 2022-09-08 | O PLANO        | L   | 0.155      | -            | -                | -                | -         |    -3.42 | caike, kNgV-, NEKIZ, piriaz1n, yel        |
|            5 |     3198 | 2022-09-08 | Liberty        | W   | 0.155      | -            | -                | -                | -         |     1.81 | brokeN, Lich, mtsGOD, nyezin, rdnzao      |
|            4 |     3488 | 2022-08-27 | B4             | L   | 0.075      | -            | -                | -                | -         |    -1.44 | matios, realz1n, supLexN1, t9rnay, w1     |
|            3 |     3549 | 2022-08-26 | ARCTIC         | L   | 0.069      | -            | -                | -                | -         |    -0.56 | ckzao, danoco, delboNi, SHOOWTiME, zqkS   |
|            2 |     3550 | 2022-08-26 | WINDINGO       | W   | 0.068      | 0.143        | 0.002 (0.000)    | 0.210 (0.002)    | -         |     1.01 | bichop, DILLION1, FRANAR, PREDI, restikk  |
|            1 |     3560 | 2022-08-26 | Corinthians    | W   | 0.067      | 0.143        | 0.014 (0.000)    | 0.430 (0.004)    | -         |     1.29 | Demonos, detr0ittJ, fREQ, r4ul, voltera   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($369.05)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-10-30 |      0.501 | $200.00        | $100.24         |
| 2022-09-25 |      0.269 | $1,000.00      | $268.81         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
