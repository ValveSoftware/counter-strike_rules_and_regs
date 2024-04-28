### Roster Details<br />
Team Name: Sharks<br />
Roster: chay, drg, Gafolo, rdnzao, togs<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [97](../standings_global.md)<br />
Regional Rank: [22]( ../standings_americas.md)<br />
Final Rank Value:  819.0<br />
<br />
Final Rank Value (819.0) = Starting Rank Value (775.7) + Head To Head Adjustments (43.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.362[<sup>1</sup>](#table2)
- Bounty Collected: 0.305[<sup>2</sup>](#table1)
- Opponent Network: 0.067[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.184<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 775.7
- 400 + ( ( 0.184 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 775.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |      237 | 2023-02-01 | FUSION        | L   | 1.000      | -            | -                | -                | -         |   -18.56 | chay, drg, Gafolo, rdnzao, togs   |
|           29 |      304 | 2023-01-29 | INTZ          | W   | 1.000      | 0.384        | 0.010 (0.004)    | 0.304 (0.117)    | 0 (0.000) |    11.77 | chay, drg, Gafolo, rdnzao, togs   |
|           28 |      369 | 2023-01-27 | O PLANO       | L   | 1.000      | -            | -                | -                | -         |   -20.96 | chay, drg, Gafolo, rdnzao, togs   |
|           27 |      372 | 2023-01-27 | Meta          | W   | 1.000      | 0.143        | 0.010 (0.001)    | 0.302 (0.043)    | 0 (0.000) |    12.59 | chay, drg, Gafolo, rdnzao, togs   |
|           26 |      381 | 2023-01-27 | NOORG         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.18 | chay, drg, Gafolo, rdnzao, togs   |
|           25 |      396 | 2023-01-26 | INTZ          | W   | 1.000      | 0.143        | 0.010 (0.001)    | 0.304 (0.043)    | 0 (0.000) |    13.38 | chay, drg, Gafolo, rdnzao, togs   |
|           24 |      462 | 2023-01-24 | Hype          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.56 | chay, drg, Gafolo, ksloks, rdnzao |
|           23 |      491 | 2023-01-23 | RED Canids    | L   | 1.000      | -            | -                | -                | -         |   -21.30 | chay, drg, Gafolo, ksloks, rdnzao |
|           22 |      974 | 2022-12-10 | 00NATION      | L   | 0.775      | -            | -                | -                | -         |   -11.05 | chay, drg, jnt, n1ssim, togs      |
|           21 |     1003 | 2022-12-09 | ODDIK         | W   | 0.768      | 0.269        | 0.016 (0.003)    | 0.236 (0.049)    | 0 (0.000) |     9.28 | chay, drg, jnt, n1ssim, togs      |
|           20 |     1004 | 2022-12-09 | 9z            | W   | 0.768      | 0.269        | 0.019 (0.004)    | 0.177 (0.037)    | 0 (0.000) |    15.24 | chay, drg, jnt, n1ssim, togs      |
|           19 |     1053 | 2022-12-07 | Fluxo         | L   | 0.756      | -            | -                | -                | -         |    -7.47 | chay, drg, jnt, n1ssim, togs      |
|           18 |     1072 | 2022-12-07 | Boca Juniors  | W   | 0.753      | 0.384        | 0.005 (0.001)    | 0.200 (0.058)    | 0 (0.000) |     8.57 | chay, drg, jnt, n1ssim, togs      |
|           17 |     1163 | 2022-12-04 | ARCTIC        | W   | 0.734      | 0.384        | 0.036 (0.010)    | 0.230 (0.065)    | 0 (0.000) |    13.71 | chay, drg, jnt, n1ssim, togs      |
|           16 |     1274 | 2022-12-01 | SWS           | W   | 0.714      | -            | -                | -                | 0 (0.000) |     6.11 | chay, drg, jnt, n1ssim, togs      |
|           15 |     1345 | 2022-11-28 | Liberty       | W   | 0.695      | -            | -                | -                | -         |     4.80 | chay, drg, jnt, n1ssim, togs      |
|           14 |     1442 | 2022-11-25 | Paquetá       | W   | 0.675      | 0.384        | 0.005 (0.001)    | 0.457 (0.119)    | -         |     9.48 | chay, drg, jnt, n1ssim, togs      |
|           13 |     1957 | 2022-10-22 | MIBR          | L   | 0.447      | -            | -                | -                | -         |    -3.56 | chay, drg, jnt, n1ssim, togs      |
|           12 |     2030 | 2022-10-19 | Complexity    | W   | 0.428      | 0.461        | 0.129 (0.025)    | 0.487 (0.096)    | -         |    12.97 | chay, drg, jnt, n1ssim, togs      |
|           11 |     2629 | 2022-09-25 | Paquetá       | L   | 0.266      | -            | -                | -                | -         |    -4.76 | chay, drg, jnt, n1ssim, togs      |
|           10 |     2649 | 2022-09-24 | Corinthians   | W   | 0.261      | 0.384        | 0.014 (0.001)    | 0.430 (0.043)    | -         |     3.97 | chay, drg, jnt, n1ssim, togs      |
|            9 |     2715 | 2022-09-23 | WINDINGO      | W   | 0.252      | -            | -                | -                | -         |     2.73 | chay, drg, jnt, n1ssim, togs      |
|            8 |     3114 | 2022-09-10 | FURIA Academy | L   | 0.168      | -            | -                | -                | -         |    -3.01 | chay, drg, jnt, n1ssim, togs      |
|            7 |     3159 | 2022-09-09 | Fluxo         | L   | 0.161      | -            | -                | -                | -         |    -1.79 | chay, drg, jnt, n1ssim, togs      |
|            6 |     3164 | 2022-09-09 | FURIA Academy | W   | 0.160      | -            | -                | -                | -         |     2.19 | chay, drg, jnt, n1ssim, togs      |
|            5 |     3191 | 2022-09-08 | ex-Isurus     | W   | 0.155      | -            | -                | -                | -         |     3.06 | chay, drg, jnt, n1ssim, togs      |
|            4 |     3199 | 2022-09-08 | Furious       | W   | 0.154      | -            | -                | -                | -         |     1.50 | chay, drg, jnt, n1ssim, togs      |
|            3 |     3283 | 2022-09-04 | Corinthians   | L   | 0.127      | -            | -                | -                | -         |    -2.06 | chay, drg, jnt, n1ssim, togs      |
|            2 |     3341 | 2022-09-02 | ARCTIC        | L   | 0.114      | -            | -                | -                | -         |    -1.30 | chay, drg, jnt, n1ssim, togs      |
|            1 |     3350 | 2022-09-02 | Stars Horizon | W   | 0.113      | -            | -                | -                | -         |     1.04 | chay, drg, jnt, n1ssim, togs      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,173.79)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-11 |      0.782 | $287.00        | $224.34         |
| 2022-12-07 |      0.756 | $5,000.00      | $3,778.75       |
| 2022-10-23 |      0.455 | $7,500.00      | $3,409.28       |
| 2022-09-25 |      0.269 | $2,500.00      | $672.04         |
| 2022-09-04 |      0.128 | $700.00        | $89.39          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
