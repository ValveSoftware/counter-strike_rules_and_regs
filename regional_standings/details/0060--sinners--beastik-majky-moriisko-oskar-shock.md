### Roster Details<br />
Team Name: SINNERS<br />
Roster: beastik, majky, MoriiSko, oskar, SHOCK<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [60](../standings_global.md)<br />
Regional Rank: [44]( ../standings_europe.md)<br />
Final Rank Value:  976.8<br />
<br />
Final Rank Value (976.8) = Starting Rank Value (981.9) + Head To Head Adjustments (-5.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.326[<sup>1</sup>](#table2)
- Bounty Collected: 0.424[<sup>2</sup>](#table1)
- Opponent Network: 0.295[<sup>2</sup>](#table1)
- LAN Wins: 0.154[<sup>2</sup>](#table1)

The average of these factors is 0.300<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 981.9
- 400 + ( ( 0.300 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 981.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           61 |       12 | 2024-05-29 | brazylijski luz   | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.49 | beastik, majky, MoriiSko, oskar, SHOCK |
|           60 |       71 | 2024-05-26 | Sampi             | W   | 1.000      | 0.435        | -                | 0.794 (0.345)    | 0 (0.000) |    12.41 | beastik, majky, MoriiSko, oskar, SHOCK |
|           59 |      104 | 2024-05-24 | GUN5              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.37 | AJTT, beastik, majky, MoriiSko, oskar  |
|           58 |      112 | 2024-05-24 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |   -10.10 | AJTT, beastik, majky, oskar, SHOCK     |
|           57 |      123 | 2024-05-23 | UNiTY             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.28 | AJTT, beastik, majky, MoriiSko, oskar  |
|           56 |      130 | 2024-05-23 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -15.26 | AJTT, beastik, majky, MoriiSko, oskar  |
|           55 |      247 | 2024-05-20 | VP.Prodigy        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.93 | AJTT, beastik, majky, MoriiSko, oskar  |
|           54 |      300 | 2024-05-18 | 1WIN              | L   | 1.000      | -            | -                | -                | -         |   -12.09 | AJTT, beastik, oskar, SHOCK, Tomkeejs  |
|           53 |      381 | 2024-05-16 | ALTERNATE aTTaX   | W   | 1.000      | 0.435        | 0.048 (0.021)    | 0.650 (0.282)    | 0 (0.000) |    14.18 | AJTT, beastik, majky, oskar, SHOCK     |
|           52 |      474 | 2024-05-14 | Passion UA        | W   | 1.000      | 0.435        | 0.056 (0.025)    | 0.759 (0.330)    | 0 (0.000) |    15.38 | AJTT, beastik, majky, oskar, SHOCK     |
|           51 |      642 | 2024-05-07 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |    -5.39 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           50 |      677 | 2024-05-05 | Endpoint          | W   | 1.000      | 0.396        | -                | 0.627 (0.248)    | 0 (0.000) |    16.75 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           49 |      740 | 2024-05-02 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |    -7.42 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           48 |      768 | 2024-05-01 | B8                | L   | 1.000      | -            | -                | -                | -         |   -13.05 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           47 |      803 | 2024-04-29 | 1WIN              | W   | 0.998      | 0.435        | 0.043 (0.019)    | 0.666 (0.289)    | -         |    17.17 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           46 |      809 | 2024-04-29 | Sangal            | L   | 0.997      | -            | -                | -                | -         |   -10.60 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           45 |      820 | 2024-04-28 | Zero Tenacity     | L   | 0.992      | -            | -                | -                | -         |   -13.79 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           44 |      853 | 2024-04-27 | Zero Tenacity     | L   | 0.984      | -            | -                | -                | -         |   -15.32 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           43 |      869 | 2024-04-26 | PARIVISION        | L   | 0.978      | -            | -                | -                | -         |   -16.72 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           42 |      918 | 2024-04-24 | Endpoint          | L   | 0.965      | -            | -                | -                | -         |   -19.75 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           41 |      954 | 2024-04-22 | HAVU              | W   | 0.951      | -            | -                | -                | -         |     4.86 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           40 |     1003 | 2024-04-20 | ENCE Academy      | L   | 0.938      | -            | -                | -                | -         |   -22.08 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           39 |     1059 | 2024-04-19 | ECLOT             | L   | 0.930      | -            | -                | -                | -         |   -15.82 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           38 |     1142 | 2024-04-17 | Gaimin Gladiators | L   | 0.917      | -            | -                | -                | -         |    -7.42 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           37 |     1174 | 2024-04-16 | BLEED             | L   | 0.910      | -            | -                | -                | -         |    -9.05 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           36 |     1204 | 2024-04-14 | Passion UA        | W   | 0.897      | 0.371        | 0.056 (0.019)    | 0.759 (0.252)    | -         |     9.98 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           35 |     1293 | 2024-04-10 | 3DMAX             | W   | 0.873      | 0.500        | 0.105 (0.046)    | 0.669 (0.292)    | -         |    17.90 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           34 |     1312 | 2024-04-10 | UNiTY             | W   | 0.870      | -            | -                | -                | -         |     6.44 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           33 |     1343 | 2024-04-09 | 9 Pandas          | W   | 0.866      | 0.500        | 0.108 (0.047)    | 0.798 (0.346)    | -         |    17.42 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           32 |     1397 | 2024-04-08 | ALTERNATE aTTaX   | W   | 0.857      | -            | -                | -                | -         |     8.96 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           31 |     1447 | 2024-04-05 | Nexus             | W   | 0.839      | -            | -                | -                | -         |     9.82 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           30 |     1538 | 2024-04-03 | Rebels            | W   | 0.824      | 0.500        | 0.059 (0.024)    | -                | -         |    15.56 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           29 |     1582 | 2024-04-01 | Aurora            | W   | 0.813      | 0.500        | 0.493 (0.200)    | 0.840 (0.342)    | -         |    23.74 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           28 |     1607 | 2024-03-29 | ex-Sprout         | W   | 0.792      | -            | -                | -                | -         |     1.12 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           27 |     1822 | 2024-03-17 | ECLOT             | L   | 0.713      | -            | -                | -                | -         |    -9.75 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           26 |     1829 | 2024-03-17 | UNiTY             | W   | 0.712      | -            | -                | -                | 1 (0.712) |     7.03 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           25 |     1847 | 2024-03-16 | Sampi             | W   | 0.705      | -            | -                | -                | 1 (0.705) |    11.13 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           24 |     1860 | 2024-03-15 | UNiTY             | L   | 0.700      | -            | -                | -                | -         |   -15.06 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           23 |     1928 | 2024-03-13 | ALTERNATE aTTaX   | W   | 0.686      | 0.500        | 0.048 (0.017)    | 0.650 (0.223)    | -         |     8.90 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           22 |     1981 | 2024-03-11 | brazylijski luz   | L   | 0.672      | -            | -                | -                | -         |   -15.61 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           21 |     2195 | 2024-03-03 | Gaimin Gladiators | L   | 0.619      | -            | -                | -                | -         |    -3.79 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           20 |     2483 | 2024-02-18 | Monte             | L   | 0.526      | -            | -                | -                | -         |    -2.05 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           19 |     2531 | 2024-02-16 | 500               | W   | 0.512      | -            | -                | -                | -         |     3.90 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           18 |     2538 | 2024-02-16 | PERA              | W   | 0.512      | -            | -                | -                | -         |     6.97 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           17 |     2543 | 2024-02-16 | 500               | L   | 0.511      | -            | -                | -                | -         |   -12.34 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           16 |     2749 | 2024-02-04 | Into the Breach   | L   | 0.431      | -            | -                | -                | -         |   -10.99 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           15 |     2812 | 2024-02-02 | ex-Preasy         | L   | 0.417      | -            | -                | -                | -         |    -7.75 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           14 |     2908 | 2024-01-27 | GODSENT           | W   | 0.377      | -            | -                | -                | -         |     1.67 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           13 |     2981 | 2024-01-23 | MOUZ NXT          | W   | 0.351      | 0.371        | 0.157 (0.020)    | -                | -         |     6.84 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           12 |     3114 | 2024-01-19 | Nexus             | L   | 0.326      | -            | -                | -                | -         |    -6.59 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           11 |     3174 | 2024-01-18 | fnatic            | L   | 0.319      | -            | -                | -                | -         |    -3.42 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           10 |     3195 | 2024-01-18 | Virtus.pro        | L   | 0.318      | -            | -                | -                | -         |    -0.18 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            9 |     3452 | 2024-01-11 | HEROIC            | L   | 0.273      | -            | -                | -                | -         |    -0.14 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            8 |     3457 | 2024-01-11 | PERA              | W   | 0.273      | -            | -                | -                | -         |     3.20 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            7 |     3468 | 2024-01-11 | ILIN              | W   | 0.272      | -            | -                | -                | -         |     0.56 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            6 |     3473 | 2024-01-11 | V1dar             | W   | 0.272      | -            | -                | -                | -         |     0.65 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            5 |     3488 | 2024-01-10 | The Prodigies     | W   | 0.267      | -            | -                | -                | -         |     0.63 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            4 |     3757 | 2023-12-09 | FORZE             | L   | 0.053      | -            | -                | -                | -         |    -1.41 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO  |
|            3 |     3801 | 2023-12-07 | 3DMAX             | L   | 0.040      | -            | -                | -                | -         |    -0.32 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO  |
|            2 |     3828 | 2023-12-06 | Spirit Academy    | W   | 0.033      | -            | -                | -                | -         |     0.17 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO  |
|            1 |     3859 | 2023-12-05 | ENCE              | W   | 0.026      | -            | -                | -                | -         |     0.74 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,601.79)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-17 |      0.713 | $2,984.00      | $2,126.78       |
| 2023-12-10 |      0.059 | $8,000.00      | $475.01         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
