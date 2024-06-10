### Roster Details<br />
Team Name: ex-sYnck<br />
Roster: eku, fejtZ, Jyo, Wahtzz, xezr<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [193](../standings_global.md)<br />
Regional Rank: [118]( ../standings_europe.md)<br />
Final Rank Value:  540.9<br />
<br />
Final Rank Value (540.9) = Starting Rank Value (507.2) + Head To Head Adjustments (33.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.214[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.054<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 507.2
- 400 + ( ( 0.054 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 507.2


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
|           23 |     2368 | 2024-03-15 | Endpoint          | L   | 0.619      | -            | -                | -                | -         |    -2.44 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           22 |     2402 | 2024-03-14 | Young Ninjas      | W   | 0.612      | 0.143        | 0.023 (0.002)    | 0.020 (0.002)    | 0 (0.000) |    14.93 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           21 |     2581 | 2024-03-07 | Sashi             | L   | 0.566      | -            | -                | -                | -         |    -0.83 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           20 |     2720 | 2024-03-02 | INGLORIOUS        | W   | 0.531      | 0.143        | 0.000 (0.000)    | 0.044 (0.003)    | 0 (0.000) |     8.90 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           19 |     2786 | 2024-02-27 | ECLOT             | L   | 0.505      | -            | -                | -                | -         |    -0.33 | Blytz, Dytor, forsyy, kreaz, nbqq        |
|           18 |     2859 | 2024-02-24 | ENCE Academy      | L   | 0.485      | -            | -                | -                | -         |    -2.60 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           17 |     3526 | 2024-01-21 | 3DMAX             | L   | 0.260      | -            | -                | -                | -         |    -0.17 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           16 |     3531 | 2024-01-21 | PERA              | L   | 0.260      | -            | -                | -                | -         |    -0.83 | Aaron, DGL, Kamion, msN, Porya           |
|           15 |     3535 | 2024-01-21 | Nexus             | L   | 0.259      | -            | -                | -                | -         |    -0.95 | BTN, ERSIN, ragga, s0und, XELLOW         |
|           14 |     3561 | 2024-01-20 | HEROIC            | L   | 0.254      | -            | -                | -                | -         |    -0.01 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS   |
|           13 |     3576 | 2024-01-20 | Entropiq          | W   | 0.252      | 0.143        | 0.000 (0.000)    | 0.166 (0.006)    | 0 (0.000) |     5.01 | c0llins, Marix, mwlky, oxygeN, tiziaN    |
|           12 |     3628 | 2024-01-19 | Enterprise        | L   | 0.246      | -            | -                | -                | -         |    -0.56 | bajmi, Demho, ex1st, fr3nd, TOAO         |
|           11 |     3672 | 2024-01-18 | FORZE             | W   | 0.240      | 0.143        | 0.000 (0.000)    | 0.022 (0.001)    | 0 (0.000) |     3.96 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           10 |     3701 | 2024-01-18 | AMKAL             | L   | 0.239      | -            | -                | -                | -         |    -0.15 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|            9 |     3727 | 2024-01-17 | FreeESPI          | L   | 0.234      | -            | -                | -                | -         |    -4.89 | MAGILA, maty, slokkerR, spardaus, tAk    |
|            8 |     3877 | 2024-01-13 | Permitta          | L   | 0.208      | -            | -                | -                | -         |    -0.62 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|            7 |     3879 | 2024-01-13 | Gaimin Gladiators | L   | 0.207      | -            | -                | -                | -         |    -0.13 | kraghen, Nodios, Patti, Queenix, salazar |
|            6 |     3881 | 2024-01-13 | Betera            | W   | 0.207      | 0.143        | 0.002 (0.000)    | 0.111 (0.003)    | 0 (0.000) |     4.91 | alex666, lollipop21k, MaSvAl, nifee, sad |
|            5 |     3891 | 2024-01-13 | LOADING           | W   | 0.206      | 0.143        | 0.000 (0.000)    | 0.008 (0.000)    | 0 (0.000) |     2.26 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|            4 |     3894 | 2024-01-13 | 00NATION          | W   | 0.205      | 0.143        | 0.000 (0.000)    | 0.016 (0.000)    | 0 (0.000) |     2.95 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|            3 |     3969 | 2024-01-11 | HEROIC            | L   | 0.193      | -            | -                | -                | -         |    -0.01 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS   |
|            2 |     3977 | 2024-01-11 | PrizyvaNet        | W   | 0.192      | 0.143        | 0.000 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     2.14 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|            1 |     3991 | 2024-01-10 | XI                | W   | 0.187      | 0.143        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.07 | eku, fejtZ, Jyo, Wahtzz, xezr            |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
