### Roster Details<br />
Team Name: OG<br />
Roster: degster, F1KU, NEOFRAG, nexa, ruggah<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [8](../standings_global.md)<br />
Regional Rank: [7]( ../standings_europe.md)<br />
Final Rank Value:  1502.6<br />
<br />
Final Rank Value (1502.6) = Starting Rank Value (1533.9) + Head To Head Adjustments (-31.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.615[<sup>1</sup>](#table2)
- Bounty Collected: 0.581[<sup>2</sup>](#table1)
- Opponent Network: 0.192[<sup>2</sup>](#table1)
- LAN Wins: 0.828[<sup>2</sup>](#table1)

The average of these factors is 0.554<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1533.9
- 400 + ( ( 0.554 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1533.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           41 |      110 | 2023-02-07 | Outsiders         | L   | 1.000      | -            | -                | -                | -         |   -10.94 | degster, F1KU, NEOFRAG, nexa, ruggah |
|           40 |      132 | 2023-02-06 | Heroic            | L   | 1.000      | -            | -                | -                | -         |    -7.59 | degster, F1KU, flameZ, NEOFRAG, nexa |
|           39 |      161 | 2023-02-04 | MOUZ              | W   | 1.000      | 1.000        | 0.155 (0.155)    | 0.276 (0.276)    | 1 (1.000) |     8.27 | degster, F1KU, flameZ, NEOFRAG, nexa |
|           38 |      224 | 2023-02-01 | fnatic            | W   | 1.000      | 0.143        | 0.243 (0.035)    | 0.454 (0.065)    | 1 (1.000) |    14.44 | degster, F1KU, flameZ, NEOFRAG, nexa |
|           37 |      242 | 2023-02-01 | Sprout            | W   | 1.000      | 0.143        | 0.067 (0.010)    | 0.446 (0.064)    | 1 (1.000) |     3.03 | degster, F1KU, flameZ, NEOFRAG, nexa |
|           36 |      301 | 2023-01-29 | Astralis          | L   | 1.000      | -            | -                | -                | -         |   -23.85 | degster, F1KU, flameZ, NEOFRAG, nexa |
|           35 |      410 | 2023-01-26 | FaZe              | L   | 1.000      | -            | -                | -                | -         |    -8.01 | degster, F1KU, flameZ, NEOFRAG, nexa |
|           34 |      467 | 2023-01-24 | Liquid            | W   | 1.000      | 0.571        | 0.760 (0.434)    | 0.450 (0.257)    | 1 (1.000) |    24.84 | degster, F1KU, flameZ, NEOFRAG, nexa |
|           33 |      523 | 2023-01-22 | FaZe              | L   | 1.000      | -            | -                | -                | -         |    -7.71 | degster, F1KU, flameZ, NEOFRAG, nexa |
|           32 |      570 | 2023-01-20 | Liquid            | W   | 1.000      | 0.571        | 0.760 (0.434)    | 0.450 (0.257)    | 1 (1.000) |    25.96 | degster, F1KU, flameZ, NEOFRAG, nexa |
|           31 |      820 | 2022-12-17 | Liquid            | L   | 0.819      | -            | -                | -                | -         |    -3.97 | degster, F1KU, flameZ, NEOFRAG, nexa |
|           30 |      867 | 2022-12-15 | Vitality          | W   | 0.806      | 1.000        | 0.352 (0.284)    | 0.437 (0.352)    | 1 (0.806) |    15.79 | degster, F1KU, flameZ, NEOFRAG, nexa |
|           29 |      892 | 2022-12-14 | Heroic            | W   | 0.799      | 1.000        | 0.608 (0.486)    | 0.560 (0.447)    | 1 (0.799) |    21.82 | degster, F1KU, flameZ, NEOFRAG, nexa |
|           28 |     1167 | 2022-12-04 | HAVU              | L   | 0.733      | -            | -                | -                | -         |   -21.81 | degster, F1KU, flameZ, NEOFRAG, nexa |
|           27 |     1485 | 2022-11-24 | Ninjas in Pyjamas | L   | 0.664      | -            | -                | -                | -         |   -16.05 | degster, F1KU, flameZ, NEOFRAG, nexa |
|           26 |     1503 | 2022-11-23 | FaZe              | L   | 0.657      | -            | -                | -                | -         |    -5.87 | degster, F1KU, flameZ, NEOFRAG, nexa |
|           25 |     1736 | 2022-11-03 | Vitality          | L   | 0.526      | -            | -                | -                | -         |    -6.49 | degster, F1KU, flameZ, NEOFRAG, nexa |
|           24 |     1748 | 2022-11-02 | IHC               | W   | 0.519      | 0.143        | -                | 0.622 (0.046)    | 1 (0.519) |     3.82 | degster, F1KU, flameZ, NEOFRAG, nexa |
|           23 |     1760 | 2022-11-01 | FURIA             | L   | 0.513      | -            | -                | -                | -         |   -12.86 | degster, F1KU, flameZ, NEOFRAG, nexa |
|           22 |     1765 | 2022-10-31 | fnatic            | L   | 0.508      | -            | -                | -                | -         |    -9.07 | degster, F1KU, flameZ, NEOFRAG, nexa |
|           21 |     1781 | 2022-10-31 | Grayhound         | W   | 0.506      | -            | -                | -                | 1 (0.506) |     0.35 | degster, F1KU, flameZ, NEOFRAG, nexa |
|           20 |     2304 | 2022-10-09 | Heroic            | L   | 0.360      | -            | -                | -                | -         |    -2.08 | degster, F1KU, flameZ, NEOFRAG, nexa |
|           19 |     2330 | 2022-10-08 | Outsiders         | W   | 0.351      | 0.143        | 0.801 (0.040)    | -                | 1 (0.351) |     7.27 | degster, F1KU, flameZ, NEOFRAG, nexa |
|           18 |     2370 | 2022-10-06 | Falcons           | W   | 0.338      | -            | -                | -                | -         |     0.52 | degster, F1KU, flameZ, NEOFRAG, nexa |
|           17 |     2401 | 2022-10-05 | Illuminar         | W   | 0.332      | -            | -                | -                | -         |     0.60 | degster, F1KU, flameZ, NEOFRAG, nexa |
|           16 |     2418 | 2022-10-04 | MOUZ              | L   | 0.326      | -            | -                | -                | -         |    -8.26 | degster, F1KU, flameZ, NEOFRAG, nexa |
|           15 |     2463 | 2022-10-01 | forZe             | L   | 0.307      | -            | -                | -                | -         |    -9.24 | degster, F1KU, flameZ, NEOFRAG, nexa |
|           14 |     2471 | 2022-10-01 | Endpoint          | W   | 0.306      | 0.435        | -                | 0.641 (0.085)    | -         |     0.28 | degster, F1KU, flameZ, NEOFRAG, nexa |
|           13 |     2495 | 2022-09-30 | SINNERS           | W   | 0.299      | 0.435        | 0.068 (0.009)    | 0.549 (0.071)    | -         |     0.49 | degster, F1KU, flameZ, NEOFRAG, nexa |
|           12 |     2552 | 2022-09-28 | Enterprise        | W   | 0.286      | -            | -                | -                | -         |     0.24 | degster, F1KU, flameZ, NEOFRAG, nexa |
|           11 |     3338 | 2022-09-02 | Wings Up          | L   | 0.116      | -            | -                | -                | -         |    -3.62 | degster, F1KU, flameZ, NEOFRAG, nexa |
|           10 |     3367 | 2022-09-02 | Entropiq          | L   | 0.110      | -            | -                | -                | -         |    -3.44 | degster, F1KU, flameZ, NEOFRAG, nexa |
|            9 |     3372 | 2022-09-01 | Wings Up          | W   | 0.108      | -            | -                | -                | -         |     0.03 | degster, F1KU, flameZ, NEOFRAG, nexa |
|            8 |     3537 | 2022-08-27 | Astralis          | W   | 0.071      | -            | -                | -                | -         |     0.52 | degster, F1KU, flameZ, NEOFRAG, nexa |
|            7 |     3567 | 2022-08-26 | FaZe              | W   | 0.065      | 0.571        | 0.433 (0.016)    | -                | -         |     1.47 | degster, F1KU, flameZ, NEOFRAG, nexa |
|            6 |     3579 | 2022-08-25 | Complexity        | W   | 0.058      | -            | -                | -                | -         |     0.55 | degster, F1KU, flameZ, NEOFRAG, nexa |
|            5 |     3740 | 2022-08-19 | Astralis          | L   | 0.019      | -            | -                | -                | -         |    -0.46 | degster, F1KU, flameZ, NEOFRAG, nexa |
|            4 |     3743 | 2022-08-19 | Vitality          | L   | 0.018      | -            | -                | -                | -         |    -0.23 | degster, F1KU, flameZ, NEOFRAG, nexa |
|            3 |     3761 | 2022-08-17 | GTZ               | W   | 0.007      | -            | -                | -                | -         |     0.00 | degster, F1KU, flameZ, NEOFRAG, nexa |
|            2 |     3768 | 2022-08-17 | BLUEJAYS          | W   | 0.006      | -            | -                | -                | -         |     0.01 | degster, F1KU, flameZ, NEOFRAG, nexa |
|            1 |     3788 | 2022-08-16 | Falcons           | L   | 0.001      | -            | -                | -                | -         |    -0.03 | degster, F1KU, flameZ, NEOFRAG, nexa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($112,394.34)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.24) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-12 |      1.000 | $16,000.00     | $16,000.00      |
| 2023-01-29 |      1.000 | $8,500.00      | $8,500.00       |
| 2022-12-18 |      0.824 | $85,000.00     | $70,081.78      |
| 2022-11-27 |      0.687 | $10,000.00     | $6,869.37       |
| 2022-11-03 |      0.528 | $10,000.00     | $5,276.16       |
| 2022-10-01 |      0.307 | $10,000.00     | $3,072.59       |
| 2022-09-04 |      0.124 | $3,000.00      | $371.07         |
| 2022-08-28 |      0.081 | $27,500.00     | $2,223.37       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
