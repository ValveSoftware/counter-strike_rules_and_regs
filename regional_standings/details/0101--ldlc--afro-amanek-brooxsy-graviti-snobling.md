### Roster Details<br />
Team Name: LDLC<br />
Roster: afro, AMANEK, Brooxsy, Graviti, Snobling<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [101](../standings_global.md)<br />
Regional Rank: [72]( ../standings_europe.md)<br />
Final Rank Value:  805.7<br />
<br />
Final Rank Value (805.7) = Starting Rank Value (723.3) + Head To Head Adjustments (82.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.276[<sup>1</sup>](#table2)
- Bounty Collected: 0.290[<sup>2</sup>](#table1)
- Opponent Network: 0.066[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.158<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 723.3
- 400 + ( ( 0.158 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 723.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |       82 | 2023-02-08 | Endpoint             | L   | 1.000      | -            | -                | -                | -         |   -10.41 | afro, AMANEK, Brooxsy, Graviti, Snobling    |
|           34 |      469 | 2023-01-24 | Movistar Riders      | W   | 1.000      | 0.435        | 0.010 (0.004)    | 0.082 (0.036)    | 0 (0.000) |    13.83 | afro, AMANEK, Brooxsy, Graviti, Snobling    |
|           33 |      753 | 2022-12-19 | 500                  | W   | 0.834      | 0.143        | 0.085 (0.010)    | 0.760 (0.090)    | 0 (0.000) |    22.01 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling |
|           32 |      770 | 2022-12-18 | UNGENTIUM            | W   | 0.827      | 0.143        | 0.015 (0.002)    | 0.474 (0.056)    | 0 (0.000) |    14.16 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling |
|           31 |      803 | 2022-12-17 | EPG Family           | W   | 0.821      | 0.143        | 0.025 (0.003)    | 0.137 (0.016)    | 0 (0.000) |    15.24 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling |
|           30 |      832 | 2022-12-16 | 1WIN                 | L   | 0.814      | -            | -                | -                | -         |    -7.47 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling |
|           29 |      857 | 2022-12-15 | JANO                 | W   | 0.807      | 0.371        | 0.008 (0.002)    | 0.307 (0.092)    | 0 (0.000) |    12.91 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling |
|           28 |      975 | 2022-12-10 | Apeks                | L   | 0.774      | -            | -                | -                | -         |    -5.65 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling |
|           27 |     1016 | 2022-12-09 | Eternal Fire Academy | W   | 0.766      | 0.371        | -                | 0.116 (0.033)    | 0 (0.000) |     6.48 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling |
|           26 |     1038 | 2022-12-08 | Looking For Org      | W   | 0.760      | -            | -                | -                | 0 (0.000) |     3.19 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling |
|           25 |     1083 | 2022-12-07 | EYEBALLERS           | L   | 0.753      | -            | -                | -                | -         |    -6.66 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling |
|           24 |     1119 | 2022-12-06 | Anonymo              | W   | 0.746      | 0.371        | -                | 0.388 (0.108)    | 0 (0.000) |     7.97 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling |
|           23 |     1332 | 2022-11-29 | Astralis Talent      | L   | 0.700      | -            | -                | -                | -         |    -6.22 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling |
|           22 |     1336 | 2022-11-29 | PGE Turow            | W   | 0.699      | -            | -                | -                | 0 (0.000) |     4.77 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling |
|           21 |     1364 | 2022-11-28 | Apeks                | L   | 0.692      | -            | -                | -                | -         |    -5.71 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling |
|           20 |     1541 | 2022-11-20 | undefined            | L   | 0.639      | -            | -                | -                | -         |   -10.19 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling |
|           19 |     1612 | 2022-11-16 | Falcons              | L   | 0.613      | -            | -                | -                | -         |    -4.88 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling |
|           18 |     1662 | 2022-11-10 | Websterz             | W   | 0.573      | 0.426        | 0.007 (0.002)    | 0.403 (0.098)    | 0 (0.000) |    12.33 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling |
|           17 |     1664 | 2022-11-10 | ex-Finest            | W   | 0.571      | 0.426        | 0.015 (0.004)    | 0.357 (0.087)    | -         |    12.44 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling |
|           16 |     1701 | 2022-11-06 | GenOne               | L   | 0.545      | -            | -                | -                | -         |    -1.79 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling |
|           15 |     1887 | 2022-10-25 | HEET                 | L   | 0.466      | -            | -                | -                | -         |    -3.65 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling |
|           14 |     2446 | 2022-10-02 | PROSPECTS            | L   | 0.313      | -            | -                | -                | -         |    -2.29 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling |
|           13 |     2490 | 2022-09-30 | 777                  | W   | 0.300      | -            | -                | -                | -         |     4.32 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling |
|           12 |     2502 | 2022-09-30 | SMIX                 | W   | 0.298      | -            | -                | -                | -         |     1.22 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling |
|           11 |     2577 | 2022-09-27 | 500                  | L   | 0.280      | -            | -                | -                | -         |    -1.31 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling |
|           10 |     2625 | 2022-09-25 | ex-TAG               | W   | 0.266      | 0.371        | 0.010 (0.001)    | -                | -         |     4.06 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling |
|            9 |     2700 | 2022-09-23 | ALTERNATE aTTaX      | W   | 0.253      | 0.371        | 0.008 (0.001)    | 0.486 (0.046)    | -         |     4.80 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling |
|            8 |     2784 | 2022-09-21 | JANO                 | L   | 0.240      | -            | -                | -                | -         |    -3.78 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling |
|            7 |     2884 | 2022-09-17 | Sangal               | L   | 0.213      | -            | -                | -                | -         |    -1.56 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling |
|            6 |     2897 | 2022-09-17 | PGE Turow            | W   | 0.211      | -            | -                | -                | -         |     1.52 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling |
|            5 |     2921 | 2022-09-16 | fnatic               | W   | 0.206      | 0.143        | 0.243 (0.007)    | -                | -         |     6.41 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling |
|            4 |     2923 | 2022-09-16 | PACT                 | W   | 0.206      | -            | -                | -                | -         |     3.67 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling |
|            3 |     3416 | 2022-08-31 | Falcons              | W   | 0.099      | -            | -                | -                | -         |     2.53 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling |
|            2 |     3436 | 2022-08-30 | PIGNOUF              | W   | 0.092      | -            | -                | -                | -         |     0.41 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling |
|            1 |     3697 | 2022-08-21 | Monte                | L   | 0.033      | -            | -                | -                | -         |    -0.26 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,119.77)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-11-06 |      0.547 | $980.00        | $535.93         |
| 2022-10-26 |      0.473 | $1,234.00      | $583.84         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
