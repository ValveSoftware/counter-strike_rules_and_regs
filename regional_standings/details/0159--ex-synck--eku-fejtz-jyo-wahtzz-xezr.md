### Roster Details<br />
Team Name: ex-sYnck<br />
Roster: eku, fejtZ, Jyo, Wahtzz, xezr<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [159](../standings_global.md)<br />
Regional Rank: [104]( ../standings_europe.md)<br />
Final Rank Value:  621.3<br />
<br />
Final Rank Value (621.3) = Starting Rank Value (596.8) + Head To Head Adjustments (24.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.167[<sup>1</sup>](#table2)
- Bounty Collected: 0.236[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.101<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 596.8
- 400 + ( ( 0.101 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 596.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |     1868 | 2024-03-15 | Endpoint          | L   | 0.698      | -            | -                | -                | -         |    -4.63 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           26 |     1902 | 2024-03-14 | Young Ninjas      | W   | 0.691      | 0.143        | 0.027 (0.003)    | 0.025 (0.002)    | 0 (0.000) |    14.91 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           25 |     2081 | 2024-03-07 | Sashi             | L   | 0.645      | -            | -                | -                | -         |    -2.35 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           24 |     2220 | 2024-03-02 | INGLORIOUS        | W   | 0.610      | 0.143        | 0.000 (0.000)    | 0.053 (0.005)    | 0 (0.000) |     7.82 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           23 |     2286 | 2024-02-27 | ECLOT             | L   | 0.584      | -            | -                | -                | -         |    -1.67 | Blytz, Dytor, forsyy, kreaz, nbqq        |
|           22 |     2359 | 2024-02-24 | ENCE Academy      | L   | 0.564      | -            | -                | -                | -         |    -4.49 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           21 |     3026 | 2024-01-21 | 3DMAX             | L   | 0.340      | -            | -                | -                | -         |    -0.49 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           20 |     3031 | 2024-01-21 | PERA              | L   | 0.339      | -            | -                | -                | -         |    -1.95 | Aaron, DGL, Kamion, msN, Porya           |
|           19 |     3035 | 2024-01-21 | Nexus             | L   | 0.338      | -            | -                | -                | -         |    -1.87 | BTN, ERSIN, ragga, s0und, XELLOW         |
|           18 |     3061 | 2024-01-20 | HEROIC            | L   | 0.333      | -            | -                | -                | -         |    -0.02 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS   |
|           17 |     3076 | 2024-01-20 | Entropiq          | W   | 0.331      | 0.143        | 0.000 (0.000)    | 0.213 (0.010)    | 0 (0.000) |     5.38 | c0llins, Marix, mwlky, oxygeN, tiziaN    |
|           16 |     3128 | 2024-01-19 | Enterprise        | L   | 0.325      | -            | -                | -                | -         |    -1.66 | bajmi, Demho, ex1st, fr3nd, TOAO         |
|           15 |     3172 | 2024-01-18 | FORZE             | W   | 0.319      | 0.143        | 0.002 (0.000)    | 0.042 (0.002)    | 0 (0.000) |     6.06 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           14 |     3201 | 2024-01-18 | AMKAL             | L   | 0.318      | -            | -                | -                | -         |    -0.34 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           13 |     3227 | 2024-01-17 | FreeESPI          | L   | 0.313      | -            | -                | -                | -         |    -5.60 | MAGILA, maty, slokkerR, spardaus, tAk    |
|           12 |     3377 | 2024-01-13 | Permitta          | L   | 0.287      | -            | -                | -                | -         |    -1.55 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           11 |     3379 | 2024-01-13 | Gaimin Gladiators | L   | 0.287      | -            | -                | -                | -         |    -0.30 | kraghen, Nodios, Patti, Queenix, salazar |
|           10 |     3381 | 2024-01-13 | Betera            | W   | 0.286      | 0.143        | 0.002 (0.000)    | 0.141 (0.006)    | 0 (0.000) |     5.81 | alex666, lollipop21k, MaSvAl, nifee, sad |
|            9 |     3391 | 2024-01-13 | LOADING           | W   | 0.285      | 0.143        | 0.000 (0.000)    | 0.012 (0.000)    | 0 (0.000) |     2.92 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|            8 |     3394 | 2024-01-13 | 00NATION          | W   | 0.285      | 0.143        | 0.000 (0.000)    | 0.024 (0.001)    | 0 (0.000) |     3.03 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|            7 |     3469 | 2024-01-11 | HEROIC            | L   | 0.272      | -            | -                | -                | -         |    -0.02 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS   |
|            6 |     3477 | 2024-01-11 | PrizyvaNet        | W   | 0.271      | 0.143        | 0.000 (0.000)    | 0.011 (0.000)    | 0 (0.000) |     2.13 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|            5 |     3491 | 2024-01-10 | XI                | W   | 0.267      | 0.143        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.31 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|            4 |     3816 | 2023-12-07 | Endpoint          | L   | 0.038      | -            | -                | -                | -         |    -0.20 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|            3 |     3846 | 2023-12-06 | ALTERNATE aTTaX   | L   | 0.031      | -            | -                | -                | -         |    -0.12 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|            2 |     3886 | 2023-12-04 | paiN              | W   | 0.017      | 0.371        | 0.464 (0.003)    | 0.829 (0.005)    | 0 (0.000) |     0.53 | biguzera, kauez, lux, n1ssim, nqz        |
|            1 |     3920 | 2023-12-02 | FreeESPI          | L   | 0.005      | -            | -                | -                | -         |    -0.09 | fierre, maty, spardaus, tAk, tooi        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3.00)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
