### Roster Details<br />
Team Name: BOSS<br />
Roster: Cryptic, d4rty, freshie, Pluto, PwnAlone<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [113](../standings_global.md)<br />
Regional Rank: [25]( ../standings_americas.md)<br />
Final Rank Value:  806.7<br />
<br />
Final Rank Value (806.7) = Starting Rank Value (850.7) + Head To Head Adjustments (-44.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.365[<sup>1</sup>](#table2)
- Bounty Collected: 0.325[<sup>2</sup>](#table1)
- Opponent Network: 0.159[<sup>2</sup>](#table1)
- LAN Wins: 0.056[<sup>2</sup>](#table1)

The average of these factors is 0.226<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 850.7
- 400 + ( ( 0.226 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 850.7


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
|           54 |      324 | 2024-06-04 | Mythic            | L   | 1.000      | -            | -                | -                | -         |   -12.54 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           53 |      637 | 2024-05-22 | Take Flyte        | W   | 1.000      | 0.477        | -                | 0.348 (0.166)    | 0 (0.000) |    15.87 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           52 |      640 | 2024-05-22 | Take Flyte        | L   | 1.000      | -            | -                | -                | -         |   -15.62 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           51 |      722 | 2024-05-20 | Carpe Diem        | L   | 1.000      | -            | -                | -                | -         |   -16.50 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           50 |      726 | 2024-05-20 | Carpe Diem        | W   | 1.000      | 0.477        | 0.007 (0.003)    | 0.321 (0.153)    | 0 (0.000) |    14.93 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           49 |      757 | 2024-05-19 | M80               | L   | 1.000      | -            | -                | -                | -         |    -2.56 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           48 |      759 | 2024-05-19 | M80               | L   | 1.000      | -            | -                | -                | -         |    -2.63 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           47 |      820 | 2024-05-17 | NRG               | L   | 1.000      | -            | -                | -                | -         |    -8.42 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           46 |      883 | 2024-05-15 | Wildcard          | L   | 1.000      | -            | -                | -                | -         |    -9.37 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           45 |      894 | 2024-05-15 | Wildcard          | L   | 1.000      | -            | -                | -                | -         |   -10.10 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           44 |      945 | 2024-05-14 | MIGHT             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.47 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           43 |      951 | 2024-05-14 | MIGHT             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.76 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           42 |     1039 | 2024-05-11 | Take Flyte        | L   | 1.000      | -            | -                | -                | -         |   -18.47 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           41 |     1041 | 2024-05-11 | Party Astronauts  | W   | 1.000      | 0.270        | 0.048 (0.013)    | 0.677 (0.183)    | 0 (0.000) |    20.87 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           40 |     1045 | 2024-05-11 | NRG               | L   | 1.000      | -            | -                | -                | -         |   -11.95 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           39 |     1082 | 2024-05-09 | Nouns             | L   | 0.989      | -            | -                | -                | -         |    -8.94 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           38 |     1087 | 2024-05-09 | Nouns             | L   | 0.988      | -            | -                | -                | -         |    -9.62 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           37 |     1202 | 2024-05-03 | Ninjas in Pyjamas | L   | 0.947      | -            | -                | -                | -         |    -0.90 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           36 |     1241 | 2024-05-02 | FlyQuest          | L   | 0.938      | -            | -                | -                | -         |    -1.34 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           35 |     1262 | 2024-05-01 | BIG               | L   | 0.932      | -            | -                | -                | -         |    -1.48 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           34 |     1407 | 2024-04-24 | Mythic            | L   | 0.889      | -            | -                | -                | -         |   -16.83 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           33 |     1408 | 2024-04-24 | Mythic            | W   | 0.889      | 0.477        | 0.010 (0.004)    | 0.391 (0.166)    | 0 (0.000) |    11.07 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           32 |     1737 | 2024-04-11 | Limitless         | W   | 0.802      | 0.477        | -                | 0.219 (0.084)    | 0 (0.000) |     5.96 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           31 |     1741 | 2024-04-11 | Limitless         | W   | 0.802      | -            | -                | -                | 0 (0.000) |     6.27 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           30 |     1767 | 2024-04-10 | NRG               | L   | 0.795      | -            | -                | -                | -         |   -11.26 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           29 |     1772 | 2024-04-10 | NRG               | W   | 0.795      | 0.477        | 0.024 (0.009)    | 0.578 (0.219)    | 0 (0.000) |    14.06 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           28 |     1825 | 2024-04-09 | LAG               | W   | 0.789      | 0.477        | 0.021 (0.008)    | 0.484 (0.182)    | -         |    13.68 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           27 |     1828 | 2024-04-09 | LAG               | W   | 0.788      | 0.477        | 0.021 (0.008)    | 0.484 (0.182)    | -         |    14.65 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           26 |     1958 | 2024-04-04 | FLUFFY AIMERS     | W   | 0.755      | 0.477        | 0.016 (0.006)    | 0.354 (0.128)    | -         |    11.84 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           25 |     1964 | 2024-04-04 | FLUFFY AIMERS     | W   | 0.755      | 0.477        | 0.016 (0.006)    | 0.354 (0.127)    | -         |    12.66 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           24 |     2007 | 2024-04-03 | Party Astronauts  | L   | 0.748      | -            | -                | -                | -         |   -19.68 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           23 |     2050 | 2024-04-02 | Nouns             | L   | 0.742      | -            | -                | -                | -         |    -6.23 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           22 |     2055 | 2024-04-02 | Take Flyte        | W   | 0.741      | -            | -                | -                | -         |     9.64 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           21 |     2132 | 2024-03-27 | One More          | W   | 0.702      | -            | -                | -                | -         |     7.73 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           20 |     2136 | 2024-03-27 | One More          | L   | 0.702      | -            | -                | -                | -         |   -14.77 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           19 |     2178 | 2024-03-26 | Elevate           | L   | 0.696      | -            | -                | -                | -         |    -8.73 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           18 |     2185 | 2024-03-26 | Elevate           | L   | 0.695      | -            | -                | -                | -         |    -9.27 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           17 |     2261 | 2024-03-20 | Party Astronauts  | L   | 0.656      | -            | -                | -                | -         |    -6.46 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           16 |     2265 | 2024-03-20 | Party Astronauts  | L   | 0.655      | -            | -                | -                | -         |    -6.80 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           15 |     2697 | 2024-03-03 | Liquid            | L   | 0.539      | -            | -                | -                | -         |    -0.20 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           14 |     2714 | 2024-03-02 | Complexity        | L   | 0.533      | -            | -                | -                | -         |    -0.23 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           13 |     2729 | 2024-03-01 | MIBR              | W   | 0.527      | 0.143        | 0.284 (0.021)    | -                | 1 (0.527) |    16.31 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           12 |     2797 | 2024-02-26 | Liquid            | L   | 0.501      | -            | -                | -                | -         |    -0.17 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           11 |     2810 | 2024-02-25 | Nouns             | L   | 0.496      | -            | -                | -                | -         |    -5.45 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           10 |     2813 | 2024-02-25 | Wildcard          | W   | 0.495      | 0.143        | 0.060 (0.004)    | -                | -         |    10.78 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            9 |     3314 | 2024-02-01 | Nouns             | L   | 0.336      | -            | -                | -                | -         |    -3.80 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            8 |     3316 | 2024-02-01 | Rocket            | W   | 0.335      | -            | -                | -                | -         |     1.66 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            7 |     3321 | 2024-02-01 | Elevate           | L   | 0.334      | -            | -                | -                | -         |    -4.81 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            6 |     3598 | 2024-01-19 | M80               | L   | 0.249      | -            | -                | -                | -         |    -0.61 | brett, Cryptic, cynic, d4rty, freshie    |
|            5 |     3609 | 2024-01-19 | Liquid            | L   | 0.248      | -            | -                | -                | -         |    -0.07 | brett, Cryptic, cynic, d4rty, freshie    |
|            4 |     3845 | 2024-01-14 | Rocket            | W   | 0.215      | -            | -                | -                | -         |     0.99 | brett, Cryptic, cynic, d4rty, freshie    |
|            3 |     3868 | 2024-01-13 | Akimbo            | W   | 0.208      | -            | -                | -                | -         |     2.01 | brett, Cryptic, cynic, d4rty, freshie    |
|            2 |     3908 | 2024-01-12 | Wildcard          | L   | 0.203      | -            | -                | -                | -         |    -2.26 | brett, Cryptic, cynic, d4rty, freshie    |
|            1 |     3910 | 2024-01-12 | For Fun           | W   | 0.203      | -            | -                | -                | -         |     1.83 | brett, Cryptic, cynic, d4rty, freshie    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,500.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-05-12 |      1.000 | $3,500.00      | $3,500.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
