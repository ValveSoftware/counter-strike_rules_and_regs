### Roster Details<br />
Team Name: paiN<br />
Roster: biguzera, hardzao, NEKIZ, skullz, zevy<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [29](../standings_global.md)<br />
Regional Rank: [4]( ../standings_americas.md)<br />
Final Rank Value:  1074.1<br />
<br />
Final Rank Value (1074.1) = Starting Rank Value (1078.9) + Head To Head Adjustments (-4.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.501[<sup>1</sup>](#table2)
- Bounty Collected: 0.334[<sup>2</sup>](#table1)
- Opponent Network: 0.116[<sup>2</sup>](#table1)
- LAN Wins: 0.376[<sup>2</sup>](#table1)

The average of these factors is 0.332<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1078.9
- 400 + ( ( 0.332 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1078.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |       42 | 2023-02-10 | Take Flyte  | W   | 1.000      | 0.384        | -                | 0.225 (0.087)    | -         |     3.63 | biguzera, hardzao, NEKIZ, skullz, zevy |
|           34 |       71 | 2023-02-08 | Limitless   | W   | 1.000      | 0.384        | 0.007 (0.003)    | 0.287 (0.110)    | -         |     4.38 | biguzera, hardzao, NEKIZ, skullz, zevy |
|           33 |      219 | 2023-02-02 | IHC         | L   | 1.000      | -            | -                | -                | -         |   -11.21 | biguzera, hardzao, PKL, skullz, zevy   |
|           32 |      250 | 2023-02-01 | ENCE        | L   | 1.000      | -            | -                | -                | -         |    -7.01 | biguzera, hardzao, PKL, skullz, zevy   |
|           31 |      760 | 2022-12-18 | ATK         | L   | 0.829      | -            | -                | -                | -         |   -16.96 | biguzera, hardzao, PKL, skullz, zevy   |
|           30 |      762 | 2022-12-18 | Nouns       | W   | 0.828      | 0.354        | 0.059 (0.017)    | 0.589 (0.173)    | -         |     6.59 | biguzera, hardzao, PKL, skullz, zevy   |
|           29 |      799 | 2022-12-17 | Villainous  | W   | 0.822      | -            | -                | -                | -         |     1.39 | biguzera, hardzao, PKL, skullz, zevy   |
|           28 |      830 | 2022-12-16 | Snakes Den  | W   | 0.815      | -            | -                | -                | -         |     1.76 | biguzera, hardzao, PKL, skullz, zevy   |
|           27 |      932 | 2022-12-11 | Nouns       | W   | 0.783      | 0.384        | 0.059 (0.018)    | 0.589 (0.177)    | -         |     7.11 | biguzera, hardzao, PKL, skullz, zevy   |
|           26 |      942 | 2022-12-11 | MIBR        | W   | 0.781      | 0.384        | 0.089 (0.027)    | 0.586 (0.176)    | -         |     8.21 | biguzera, hardzao, PKL, skullz, zevy   |
|           25 |      960 | 2022-12-10 | EG White    | W   | 0.776      | 0.384        | 0.048 (0.014)    | 0.340 (0.102)    | -         |     6.77 | biguzera, hardzao, PKL, skullz, zevy   |
|           24 |      970 | 2022-12-10 | timbermen   | L   | 0.775      | -            | -                | -                | -         |   -20.12 | biguzera, hardzao, PKL, skullz, zevy   |
|           23 |     1207 | 2022-12-03 | 00NATION    | W   | 0.728      | 0.371        | 0.020 (0.005)    | 0.201 (0.054)    | 1 (0.728) |     5.35 | biguzera, hardzao, PKL, skullz, zevy   |
|           22 |     1244 | 2022-12-02 | ODDIK       | W   | 0.721      | 0.371        | 0.016 (0.004)    | 0.236 (0.063)    | 1 (0.721) |     3.44 | biguzera, hardzao, PKL, skullz, zevy   |
|           21 |     2101 | 2022-10-16 | Spirit      | L   | 0.407      | -            | -                | -                | -         |    -2.13 | biguzera, hardzao, PKL, skullz, zevy   |
|           20 |     2116 | 2022-10-16 | Imperial    | W   | 0.405      | 0.548        | 0.022 (0.005)    | 0.254 (0.056)    | 1 (0.405) |     3.53 | biguzera, hardzao, PKL, skullz, zevy   |
|           19 |     2180 | 2022-10-14 | MASONIC     | W   | 0.393      | 0.548        | 0.021 (0.005)    | 0.752 (0.162)    | 1 (0.393) |     3.61 | biguzera, hardzao, PKL, skullz, zevy   |
|           18 |     2314 | 2022-10-09 | Imperial    | L   | 0.358      | -            | -                | -                | -         |    -8.48 | biguzera, hardzao, PKL, skullz, zevy   |
|           17 |     2329 | 2022-10-08 | ATK         | W   | 0.351      | 0.143        | 0.070 (0.004)    | -                | 1 (0.351) |     3.47 | biguzera, hardzao, PKL, skullz, zevy   |
|           16 |     2349 | 2022-10-07 | FURIA       | L   | 0.345      | -            | -                | -                | -         |    -2.92 | biguzera, hardzao, PKL, skullz, zevy   |
|           15 |     2371 | 2022-10-06 | Nouns       | W   | 0.338      | -            | -                | -                | 1 (0.338) |     1.39 | biguzera, hardzao, PKL, skullz, zevy   |
|           14 |     2389 | 2022-10-05 | Complexity  | L   | 0.333      | -            | -                | -                | -         |    -1.67 | biguzera, hardzao, PKL, skullz, zevy   |
|           13 |     2406 | 2022-10-05 | ARCTIC      | W   | 0.331      | -            | -                | -                | 1 (0.331) |     2.58 | biguzera, hardzao, PKL, skullz, zevy   |
|           12 |     3298 | 2022-09-04 | Imperial    | W   | 0.124      | -            | -                | -                | 1 (0.124) |     0.96 | biguzera, hardzao, PKL, skullz, zevy   |
|           11 |     3299 | 2022-09-03 | Wings Up    | W   | 0.122      | -            | -                | -                | 1 (0.122) |     0.44 | biguzera, hardzao, PKL, skullz, zevy   |
|           10 |     3366 | 2022-09-02 | Imperial    | W   | 0.111      | -            | -                | -                | 1 (0.111) |     0.86 | biguzera, hardzao, PKL, skullz, zevy   |
|            9 |     3368 | 2022-09-01 | Grayhound   | W   | 0.110      | -            | -                | -                | -         |     0.69 | biguzera, hardzao, PKL, skullz, zevy   |
|            8 |     3456 | 2022-08-28 | Fluxo       | L   | 0.081      | -            | -                | -                | -         |    -1.93 | biguzera, hardzao, PKL, skullz, zevy   |
|            7 |     3463 | 2022-08-28 | 9z          | W   | 0.080      | -            | -                | -                | -         |     0.66 | biguzera, hardzao, PKL, skullz, zevy   |
|            6 |     3491 | 2022-08-27 | Meta        | W   | 0.074      | -            | -                | -                | -         |     0.37 | biguzera, hardzao, PKL, skullz, zevy   |
|            5 |     3566 | 2022-08-26 | Corinthians | W   | 0.065      | -            | -                | -                | -         |     0.30 | biguzera, hardzao, PKL, skullz, zevy   |
|            4 |     3753 | 2022-08-17 | MIBR        | W   | 0.009      | -            | -                | -                | -         |     0.10 | biguzera, hardzao, PKL, skullz, zevy   |
|            3 |     3756 | 2022-08-17 | 00NATION    | W   | 0.008      | -            | -                | -                | -         |     0.05 | biguzera, hardzao, PKL, skullz, zevy   |
|            2 |     3772 | 2022-08-16 | ODDIK       | W   | 0.002      | -            | -                | -                | -         |     0.01 | biguzera, hardzao, PKL, skullz, zevy   |
|            1 |     3777 | 2022-08-16 | ex-Isurus   | W   | 0.001      | -            | -                | -                | -         |     0.01 | biguzera, hardzao, PKL, skullz, zevy   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($47,802.96)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-03 |      1.000 | $2,500.00      | $2,500.00       |
| 2022-12-18 |      0.829 | $4,000.00      | $3,314.98       |
| 2022-12-11 |      0.783 | $11,000.00     | $8,608.10       |
| 2022-12-03 |      0.728 | $20,000.00     | $14,565.80      |
| 2022-10-16 |      0.407 | $30,000.00     | $12,222.41      |
| 2022-09-04 |      0.124 | $50,000.00     | $6,184.43       |
| 2022-08-28 |      0.081 | $5,000.00      | $407.24         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
