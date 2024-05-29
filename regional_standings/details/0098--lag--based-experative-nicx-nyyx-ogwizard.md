### Roster Details<br />
Team Name: LAG<br />
Roster: based, Experative, nicx, Nyyx, ogwizard<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [98](../standings_global.md)<br />
Regional Rank: [66]( ../standings_europe.md)<br />
Final Rank Value:  816.3<br />
<br />
Final Rank Value (816.3) = Starting Rank Value (903.9) + Head To Head Adjustments (-87.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.349[<sup>1</sup>](#table2)
- Bounty Collected: 0.290[<sup>2</sup>](#table1)
- Opponent Network: 0.161[<sup>2</sup>](#table1)
- LAN Wins: 0.239[<sup>2</sup>](#table1)

The average of these factors is 0.260<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 903.9
- 400 + ( ( 0.260 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 903.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |      138 | 2024-05-22 | Limitless        | W   | 1.000      | 0.477        | 0.001 (0.001)    | 0.168 (0.080)    | 0 (0.000) |     7.50 | based, Experative, nicx, Nyyx, ogwizard |
|           42 |      141 | 2024-05-22 | Limitless        | W   | 1.000      | 0.477        | -                | 0.168 (0.080)    | 0 (0.000) |     8.01 | based, Experative, nicx, Nyyx, ogwizard |
|           41 |      144 | 2024-05-22 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |    -9.42 | based, Experative, nicx, Nyyx, ogwizard |
|           40 |      388 | 2024-05-15 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -9.75 | based, Experative, nicx, Nyyx, ogwizard |
|           39 |      396 | 2024-05-15 | NRG              | L   | 1.000      | -            | -                | -                | -         |   -10.53 | based, Experative, nicx, Nyyx, ogwizard |
|           38 |      442 | 2024-05-14 | Carpe Diem       | W   | 1.000      | 0.477        | -                | 0.369 (0.176)    | 0 (0.000) |     8.24 | based, Experative, nicx, Nyyx, ogwizard |
|           37 |      449 | 2024-05-14 | Carpe Diem       | L   | 1.000      | -            | -                | -                | -         |   -23.81 | based, Experative, nicx, Nyyx, ogwizard |
|           36 |      584 | 2024-05-09 | M80              | L   | 1.000      | -            | -                | -                | -         |    -3.54 | based, Experative, nicx, Nyyx, ogwizard |
|           35 |      589 | 2024-05-09 | M80              | L   | 1.000      | -            | -                | -                | -         |    -3.67 | based, Experative, nicx, Nyyx, ogwizard |
|           34 |      603 | 2024-05-08 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |   -12.19 | based, Experative, nicx, Nyyx, ogwizard |
|           33 |      608 | 2024-05-08 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |   -13.27 | based, Experative, nicx, Nyyx, ogwizard |
|           32 |     1270 | 2024-04-10 | Mythic           | W   | 0.874      | 0.477        | -                | 0.439 (0.183)    | 0 (0.000) |    10.77 | based, Experative, nicx, Nyyx, ogwizard |
|           31 |     1275 | 2024-04-10 | Mythic           | W   | 0.874      | 0.477        | -                | 0.439 (0.183)    | 0 (0.000) |    11.61 | based, Experative, nicx, Nyyx, ogwizard |
|           30 |     1325 | 2024-04-09 | BOSS             | L   | 0.868      | -            | -                | -                | -         |   -14.49 | based, Experative, nicx, Nyyx, ogwizard |
|           29 |     1328 | 2024-04-09 | BOSS             | L   | 0.868      | -            | -                | -                | -         |   -15.63 | based, Experative, nicx, Nyyx, ogwizard |
|           28 |     1456 | 2024-04-04 | Nouns            | W   | 0.834      | 0.477        | 0.030 (0.012)    | 0.601 (0.239)    | 0 (0.000) |    15.87 | based, Experative, nicx, Nyyx, ogwizard |
|           27 |     1461 | 2024-04-04 | Nouns            | L   | 0.834      | -            | -                | -                | -         |   -10.37 | based, Experative, nicx, Nyyx, ogwizard |
|           26 |     1502 | 2024-04-03 | Elevate          | L   | 0.828      | -            | -                | -                | -         |   -13.40 | based, Experative, nicx, Nyyx, ogwizard |
|           25 |     1505 | 2024-04-03 | Elevate          | W   | 0.828      | 0.477        | 0.013 (0.005)    | 0.528 (0.208)    | -         |    12.82 | based, Experative, nicx, Nyyx, ogwizard |
|           24 |     1680 | 2024-03-26 | Wildcard         | L   | 0.775      | -            | -                | -                | -         |   -11.09 | based, Experative, nicx, Nyyx, ogwizard |
|           23 |     1684 | 2024-03-26 | Wildcard         | W   | 0.775      | 0.477        | 0.012 (0.004)    | 0.615 (0.227)    | -         |    13.59 | based, Experative, nicx, Nyyx, ogwizard |
|           22 |     1766 | 2024-03-20 | Take Flyte       | L   | 0.734      | -            | -                | -                | -         |   -15.96 | based, Experative, nicx, Nyyx, ogwizard |
|           21 |     1768 | 2024-03-20 | Take Flyte       | W   | 0.734      | 0.477        | 0.006 (0.002)    | 0.392 (0.137)    | -         |     7.10 | based, Experative, nicx, Nyyx, ogwizard |
|           20 |     1809 | 2024-03-17 | G3               | W   | 0.715      | 0.333        | 0.006 (0.001)    | -                | 1 (0.715) |     6.44 | based, Experative, nicx, Nyyx, ogwizard |
|           19 |     1811 | 2024-03-17 | my life be like  | W   | 0.714      | 0.333        | 0.007 (0.002)    | -                | 1 (0.714) |     5.74 | based, Experative, nicx, Nyyx, ogwizard |
|           18 |     1821 | 2024-03-17 | WICKED           | W   | 0.713      | -            | -                | -                | 1 (0.713) |     1.41 | based, Experative, nicx, Nyyx, ogwizard |
|           17 |     2058 | 2024-03-07 | FLUFFY AIMERS    | W   | 0.648      | 0.477        | 0.018 (0.005)    | 0.315 (0.097)    | -         |     9.28 | based, Experative, nicx, Nyyx, ogwizard |
|           16 |     2059 | 2024-03-07 | FLUFFY AIMERS    | L   | 0.648      | -            | -                | -                | -         |   -11.40 | based, Experative, nicx, Nyyx, ogwizard |
|           15 |     2087 | 2024-03-06 | MIGHT            | W   | 0.642      | -            | -                | -                | -         |     5.89 | based, Experative, nicx, Nyyx, ogwizard |
|           14 |     2088 | 2024-03-06 | MIGHT            | L   | 0.641      | -            | -                | -                | -         |   -14.68 | based, Experative, nicx, Nyyx, ogwizard |
|           13 |     2124 | 2024-03-05 | One More         | W   | 0.635      | 0.477        | 0.005 (0.001)    | -                | -         |     5.64 | based, Experative, nicx, Nyyx, ogwizard |
|           12 |     2126 | 2024-03-05 | One More         | W   | 0.635      | 0.477        | 0.005 (0.001)    | -                | -         |     5.90 | based, Experative, nicx, Nyyx, ogwizard |
|           11 |     2338 | 2024-02-24 | Limitless        | L   | 0.567      | -            | -                | -                | -         |   -13.64 | based, Experative, nicx, Nyyx, ogwizard |
|           10 |     2527 | 2024-02-16 | FLUFFY AIMERS    | L   | 0.514      | -            | -                | -                | -         |    -9.57 | based, Experative, nicx, Nyyx, ogwizard |
|            9 |     3342 | 2024-01-14 | Bad News Bears   | W   | 0.295      | -            | -                | -                | -         |     0.76 | based, Experative, Nyyx, ogwizard, X-23 |
|            8 |     3614 | 2023-12-17 | MIGHT            | L   | 0.108      | -            | -                | -                | -         |    -2.66 | based, Experative, Nyyx, ogwizard, X-23 |
|            7 |     3648 | 2023-12-16 | NRG              | L   | 0.101      | -            | -                | -                | -         |    -1.94 | based, Experative, Nyyx, ogwizard, X-23 |
|            6 |     3673 | 2023-12-15 | Rocket           | W   | 0.095      | -            | -                | -                | -         |     0.30 | based, Experative, Nyyx, ogwizard, X-23 |
|            5 |     3701 | 2023-12-13 | Villainous       | W   | 0.081      | -            | -                | -                | -         |     0.26 | based, Experative, Nyyx, ogwizard, X-23 |
|            4 |     3746 | 2023-12-09 | Revenge Nation   | L   | 0.055      | -            | -                | -                | -         |    -1.32 | based, Experative, Nyyx, ogwizard, X-23 |
|            3 |     3749 | 2023-12-09 | Unjustified      | L   | 0.054      | -            | -                | -                | -         |    -1.43 | based, Experative, Nyyx, ogwizard, X-23 |
|            2 |     3751 | 2023-12-09 | Kari             | W   | 0.054      | -            | -                | -                | 1 (0.054) |     0.10 | based, Experative, Nyyx, ogwizard, X-23 |
|            1 |     3792 | 2023-12-07 | Pantsu           | L   | 0.042      | -            | -                | -                | -         |    -1.12 | based, Experative, Nyyx, ogwizard, X-23 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,091.38)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-17 |      0.715 | $5,500.00      | $3,934.89       |
| 2023-12-13 |      0.082 | $1,250.00      | $102.02         |
| 2023-12-09 |      0.054 | $1,000.00      | $54.47          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
