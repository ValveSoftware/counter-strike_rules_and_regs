### Roster Details<br />
Team Name: ex-Preasy<br />
Roster: Altekz, Kristou, refrezh, roeJ, TMB<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [71](../standings_global.md)<br />
Regional Rank: [51]( ../standings_europe.md)<br />
Final Rank Value:  997.8<br />
<br />
Final Rank Value (997.8) = Starting Rank Value (900.1) + Head To Head Adjustments (97.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.419[<sup>1</sup>](#table2)
- Bounty Collected: 0.374[<sup>2</sup>](#table1)
- Opponent Network: 0.161[<sup>2</sup>](#table1)
- LAN Wins: 0.049[<sup>2</sup>](#table1)

The average of these factors is 0.251<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 900.1
- 400 + ( ( 0.251 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 900.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |     1689 | 2024-04-15 | Sashi             | L   | 0.825      | -            | -                | -                | -         |    -9.58 | Altekz, Kristou, refrezh, roeJ, TMB            |
|           39 |     1717 | 2024-04-13 | 3DMAX             | L   | 0.812      | -            | -                | -                | -         |    -7.22 | Altekz, Kristou, refrezh, roeJ, TMB            |
|           38 |     1869 | 2024-04-09 | ECF               | W   | 0.784      | 0.384        | -                | 0.378 (0.114)    | 0 (0.000) |     5.96 | Altekz, Kristou, refrezh, roeJ, TMB            |
|           37 |     1922 | 2024-04-07 | Zero Tenacity     | W   | 0.771      | 0.358        | 0.154 (0.043)    | 1.000 (0.276)    | 0 (0.000) |    14.17 | Altekz, Kristou, refrezh, roeJ, TMB            |
|           36 |     2229 | 2024-03-22 | FORZE             | L   | 0.665      | -            | -                | -                | -         |    -9.41 | gokushima, r3salt, SELLTER, shalfey, tN1R      |
|           35 |     2308 | 2024-03-18 | Sampi             | W   | 0.638      | 0.371        | 0.036 (0.009)    | 0.883 (0.209)    | 0 (0.000) |     9.45 | fino, manguss, sAvana1, The eLiVe, ZEDKO       |
|           34 |     2348 | 2024-03-16 | Passion UA        | W   | 0.625      | 0.371        | 0.088 (0.020)    | 0.905 (0.210)    | 0 (0.000) |    10.77 | fear, jackasmo, jambo, s-chilla, zeRRoFIX      |
|           33 |     2404 | 2024-03-14 | Entropiq          | W   | 0.611      | -            | -                | -                | 0 (0.000) |     2.89 | Altekz, Kristou, refrezh, roeJ, TMB            |
|           32 |     2475 | 2024-03-11 | Metizport         | L   | 0.594      | -            | -                | -                | -         |    -8.12 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           31 |     2488 | 2024-03-11 | HEROIC            | L   | 0.593      | -            | -                | -                | -         |    -0.25 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           30 |     2491 | 2024-03-11 | Permitta          | W   | 0.592      | 0.371        | 0.022 (0.005)    | 0.972 (0.213)    | 0 (0.000) |     8.92 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           29 |     2541 | 2024-03-09 | Fraud5            | W   | 0.578      | -            | -                | -                | 0 (0.000) |     3.07 | Rezst, shyyne, SLY, Tree60, yz0                |
|           28 |     2584 | 2024-03-07 | Secret            | W   | 0.565      | -            | -                | -                | 0 (0.000) |     1.78 | anarkez, innocent, Kind0, Maze, Tauson         |
|           27 |     2677 | 2024-03-03 | Gaimin Gladiators | W   | 0.541      | 0.143        | 0.081 (0.006)    | -                | 0 (0.000) |    14.02 | kraghen, Nodios, Patti, Queenix, salazar       |
|           26 |     2686 | 2024-03-03 | BetBoom           | W   | 0.540      | 0.143        | 0.427 (0.033)    | 0.917 (0.071)    | -         |    16.61 | danistzz, KaiR0N-, nafany, s1ren, zorte        |
|           25 |     2693 | 2024-03-03 | ECF               | W   | 0.540      | -            | -                | -                | -         |     5.31 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy |
|           24 |     2699 | 2024-03-03 | fnatic            | L   | 0.539      | -            | -                | -                | -         |    -1.95 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           23 |     2702 | 2024-03-03 | MOUZ NXT          | L   | 0.538      | -            | -                | -                | -         |    -4.94 | Burmylov, Chr1zN, Neityu, PR, sirah            |
|           22 |     2730 | 2024-03-01 | BetBoom           | L   | 0.527      | -            | -                | -                | -         |    -0.37 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           21 |     2752 | 2024-02-28 | fnatic            | W   | 0.514      | 0.500        | 0.198 (0.051)    | 0.650 (0.167)    | -         |    14.45 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           20 |     2906 | 2024-02-21 | M1X KS            | L   | 0.466      | -            | -                | -                | -         |    -4.03 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           19 |     2937 | 2024-02-20 | PERA              | W   | 0.460      | -            | -                | -                | 1 (0.460) |     7.16 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           18 |     2963 | 2024-02-19 | OG                | L   | 0.453      | -            | -                | -                | -         |    -2.75 | F1KU, HeavyGod, k1to, Nexius, regali           |
|           17 |     2966 | 2024-02-19 | HEROIC            | L   | 0.452      | -            | -                | -                | -         |    -0.13 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS         |
|           16 |     3186 | 2024-02-09 | Gaimin Gladiators | W   | 0.385      | 0.371        | 0.081 (0.012)    | 0.749 (0.107)    | -         |    10.19 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           15 |     3202 | 2024-02-08 | TSM               | W   | 0.378      | -            | -                | -                | -         |     3.35 | joel, KWERTZZ, MoDo, valde, Zyphon             |
|           14 |     3208 | 2024-02-07 | Into the Breach   | W   | 0.371      | -            | -                | -                | -         |     3.06 | Bymas, CRUC1AL, misutaaa, rallen, Thomas       |
|           13 |     3217 | 2024-02-06 | Sangal            | W   | 0.365      | 0.371        | 0.214 (0.029)    | 0.998 (0.135)    | -         |     9.04 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           12 |     3228 | 2024-02-05 | Gaimin Gladiators | L   | 0.358      | -            | -                | -                | -         |    -1.68 | kraghen, Nodios, Patti, Queenix, salazar       |
|           11 |     3294 | 2024-02-02 | Metizport         | L   | 0.340      | -            | -                | -                | -         |    -4.29 | adamb, Jackinho, nilo, susp, ztr               |
|           10 |     3312 | 2024-02-02 | SINNERS           | W   | 0.338      | 0.371        | 0.045 (0.006)    | 0.844 (0.106)    | -         |     8.12 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|            9 |     3356 | 2024-01-31 | ex-Sprout         | W   | 0.325      | -            | -                | -                | -         |     1.43 | Anlelele, cej0t, raalz, Sdaim, sL1m3           |
|            8 |     3380 | 2024-01-30 | Entropiq          | W   | 0.318      | -            | -                | -                | -         |     1.64 | c0llins, Marix, mwlky, oxygeN, tiziaN          |
|            7 |     3432 | 2024-01-26 | ex-Sprout         | L   | 0.291      | -            | -                | -                | -         |    -8.06 | Anlelele, cej0t, raalz, Sdaim, sL1m3           |
|            6 |     3534 | 2024-01-21 | 3DMAX             | W   | 0.259      | -            | -                | -                | -         |     6.95 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|            5 |     3558 | 2024-01-20 | MOUZ              | L   | 0.254      | -            | -                | -                | -         |    -0.02 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|            4 |     3574 | 2024-01-20 | FORZE             | W   | 0.252      | -            | -                | -                | -         |     0.92 | gokushima, kelieN, r3salt, shalfey, tN1R       |
|            3 |     3627 | 2024-01-19 | Spirit            | L   | 0.246      | -            | -                | -                | -         |    -0.03 | chopper, donk, magixx, sh1ro, zont1x           |
|            2 |     3685 | 2024-01-18 | Astralis          | L   | 0.240      | -            | -                | -                | -         |    -0.03 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|            1 |     3690 | 2024-01-18 | Entropiq          | W   | 0.239      | -            | -                | -                | -         |     1.25 | c0llins, Marix, mwlky, oxygeN, tiziaN          |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,564.76)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      0.819 | $1,600.00      | $1,310.43       |
| 2024-03-18 |      0.638 | $11,000.00     | $7,017.23       |
| 2024-02-09 |      0.385 | $11,000.00     | $4,237.09       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
