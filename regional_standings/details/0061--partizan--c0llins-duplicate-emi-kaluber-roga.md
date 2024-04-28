### Roster Details<br />
Team Name: Partizan<br />
Roster: c0llins, Duplicate, emi, KalubeR, ROGA<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [61](../standings_global.md)<br />
Regional Rank: [46]( ../standings_europe.md)<br />
Final Rank Value:  918.8<br />
<br />
Final Rank Value (918.8) = Starting Rank Value (825.3) + Head To Head Adjustments (93.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.307[<sup>1</sup>](#table2)
- Bounty Collected: 0.334[<sup>2</sup>](#table1)
- Opponent Network: 0.190[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.208<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 825.3
- 400 + ( ( 0.208 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 825.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |      107 | 2023-02-07 | 9INE                   | L   | 1.000      | -            | -                | -                | -         |   -11.30 | c0llins, Duplicate, emi, KalubeR, ROGA    |
|           38 |      249 | 2023-02-01 | EYEBALLERS             | W   | 1.000      | 0.143        | 0.017 (0.002)    | 0.776 (0.111)    | 0 (0.000) |    14.50 | c0llins, Duplicate, emi, KalubeR, ROGA    |
|           37 |      453 | 2023-01-25 | Aurora                 | L   | 1.000      | -            | -                | -                | -         |   -12.07 | c0llins, Duplicate, emi, KalubeR, ROGA    |
|           36 |      468 | 2023-01-24 | Sprout                 | W   | 1.000      | 0.435        | 0.067 (0.029)    | 0.446 (0.194)    | 0 (0.000) |    23.59 | c0llins, Duplicate, emi, KalubeR, ROGA    |
|           35 |      474 | 2023-01-24 | ECLOT                  | W   | 1.000      | 0.143        | 0.046 (0.007)    | 0.584 (0.083)    | 0 (0.000) |    17.02 | c0llins, Duplicate, emi, KalubeR, ROGA    |
|           34 |      571 | 2023-01-20 | PROSPECTS              | W   | 1.000      | 0.435        | 0.032 (0.014)    | 0.689 (0.300)    | 0 (0.000) |    16.51 | c0llins, Duplicate, emi, KalubeR, ROGA    |
|           33 |      582 | 2023-01-19 | Falcons                | L   | 1.000      | -            | -                | -                | -         |   -11.40 | c0llins, Duplicate, emi, KalubeR, ROGA    |
|           32 |      605 | 2023-01-19 | Tricked                | W   | 1.000      | 0.435        | 0.034 (0.015)    | 0.954 (0.415)    | 0 (0.000) |    19.02 | c0llins, Duplicate, emi, KalubeR, ROGA    |
|           31 |      613 | 2023-01-18 | Case                   | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.50 | c0llins, Duplicate, emi, KalubeR, ROGA    |
|           30 |      633 | 2023-01-17 | ALTERNATE aTTaX        | L   | 1.000      | -            | -                | -                | -         |   -19.11 | c0llins, Duplicate, emi, KalubeR, ROGA    |
|           29 |      644 | 2023-01-17 | Eternal Fire           | L   | 1.000      | -            | -                | -                | -         |   -13.16 | c0llins, Duplicate, emi, KalubeR, ROGA    |
|           28 |      654 | 2023-01-17 | Falcons                | W   | 1.000      | 0.143        | 0.045 (0.006)    | 0.767 (0.110)    | 0 (0.000) |    19.11 | c0llins, Duplicate, emi, KalubeR, ROGA    |
|           27 |      683 | 2023-01-15 | MASONIC                | W   | 1.000      | 0.435        | 0.021 (0.009)    | 0.752 (0.327)    | 0 (0.000) |    16.29 | c0llins, Duplicate, emi, KalubeR, ROGA    |
|           26 |      772 | 2022-12-18 | Invictus International | W   | 0.827      | -            | -                | -                | 0 (0.000) |     9.59 | c0llins, Duplicate, emi, KalubeR, ROGA    |
|           25 |      841 | 2022-12-16 | Genk                   | W   | 0.813      | -            | -                | -                | 0 (0.000) |     8.29 | c0llins, Duplicate, emi, KalubeR, ROGA    |
|           24 |      851 | 2022-12-16 | TENSTAR                | W   | 0.811      | -            | -                | -                | -         |     3.67 | c0llins, Duplicate, emi, KalubeR, ROGA    |
|           23 |      984 | 2022-12-10 | los kogutos            | L   | 0.773      | -            | -                | -                | -         |   -14.15 | c0llins, Duplicate, emi, KalubeR, ROGA    |
|           22 |     1042 | 2022-12-08 | 9 Pandas               | W   | 0.760      | 0.371        | 0.023 (0.006)    | 0.260 (0.073)    | -         |    10.25 | c0llins, Duplicate, emi, KalubeR, ROGA    |
|           21 |     1076 | 2022-12-07 | PGE Turow              | W   | 0.753      | -            | -                | -                | -         |     3.27 | c0llins, Duplicate, emi, KalubeR, ROGA    |
|           20 |     1107 | 2022-12-06 | MASONIC                | L   | 0.747      | -            | -                | -                | -         |   -10.01 | BAXACHA, c0llins, Duplicate, emi, KalubeR |
|           19 |     1386 | 2022-11-27 | iNation                | W   | 0.686      | 0.273        | 0.042 (0.008)    | 0.684 (0.128)    | -         |    16.57 | c0llins, Duplicate, emi, KalubeR, ROGA    |
|           18 |     1432 | 2022-11-26 | BUDI2                  | W   | 0.678      | -            | -                | -                | -         |     3.43 | c0llins, Duplicate, emi, KalubeR, ROGA    |
|           17 |     1459 | 2022-11-25 | Juggernauts            | W   | 0.672      | -            | -                | -                | -         |     7.16 | c0llins, Duplicate, emi, KalubeR, ROGA    |
|           16 |     2068 | 2022-10-18 | Websterz               | L   | 0.419      | -            | -                | -                | -         |    -5.50 | c0llins, emi, KalubeR, ROGA, sausol       |
|           15 |     2095 | 2022-10-17 | ALTERNATE aTTaX        | L   | 0.411      | -            | -                | -                | -         |    -6.42 | c0llins, emi, KalubeR, ROGA, sausol       |
|           14 |     2198 | 2022-10-14 | Monte                  | W   | 0.391      | 0.435        | 0.029 (0.005)    | 0.945 (0.161)    | -         |     7.86 | c0llins, emi, KalubeR, ROGA, sausol       |
|           13 |     2250 | 2022-10-12 | BLINK                  | W   | 0.380      | -            | -                | -                | -         |     3.07 | c0llins, emi, Kind0, ROGA, sausol         |
|           12 |     2284 | 2022-10-11 | IKLA                   | L   | 0.372      | -            | -                | -                | -         |    -4.60 | c0llins, emi, Kind0, ROGA, sausol         |
|           11 |     2447 | 2022-10-02 | OG Academy             | W   | 0.312      | -            | -                | -                | -         |     3.67 | c0llins, emi, Kind0, ROGA, sausol         |
|           10 |     2469 | 2022-10-01 | eSuba                  | W   | 0.306      | -            | -                | -                | -         |     6.46 | c0llins, emi, Kind0, ROGA, sausol         |
|            9 |     2474 | 2022-10-01 | Viary                  | W   | 0.306      | -            | -                | -                | -         |     0.89 | c0llins, emi, Kind0, ROGA, sausol         |
|            8 |     2494 | 2022-09-30 | ALTERNATE aTTaX        | L   | 0.299      | -            | -                | -                | -         |    -4.83 | c0llins, emi, Kind0, ROGA, sausol         |
|            7 |     2742 | 2022-09-22 | X                      | L   | 0.247      | -            | -                | -                | -         |    -6.65 | c0llins, emi, KalubeR, ROGA, sausol       |
|            6 |     2809 | 2022-09-20 | 9 Pandas               | L   | 0.233      | -            | -                | -                | -         |    -4.42 | c0llins, emi, KalubeR, ROGA, sausol       |
|            5 |     3254 | 2022-09-06 | BLUEJAYS               | L   | 0.139      | -            | -                | -                | -         |    -0.79 | c0llins, emi, KalubeR, ROGA, sausol       |
|            4 |     3262 | 2022-09-05 | Zero Tenacity          | W   | 0.134      | -            | -                | -                | -         |     1.87 | c0llins, emi, KalubeR, ROGA, sausol       |
|            3 |     3292 | 2022-09-04 | Strive in chaos        | L   | 0.126      | -            | -                | -                | -         |    -2.94 | c0llins, emi, KalubeR, ROGA, sausol       |
|            2 |     3387 | 2022-09-01 | Juggernauts            | W   | 0.106      | -            | -                | -                | -         |     1.14 | c0llins, emi, KalubeR, ROGA, sausol       |
|            1 |     3625 | 2022-08-23 | ex-Finest              | L   | 0.046      | -            | -                | -                | -         |    -0.92 | c0llins, emi, KalubeR, ROGA, sausol       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,602.32)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-01-26 |      1.000 | $2,000.00      | $2,000.00       |
| 2022-11-27 |      0.686 | $878.00        | $602.32         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
