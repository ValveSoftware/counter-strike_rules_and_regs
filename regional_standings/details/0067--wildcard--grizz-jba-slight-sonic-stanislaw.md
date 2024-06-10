### Roster Details<br />
Team Name: Wildcard<br />
Roster: Grizz, JBa, SLIGHT, Sonic, stanislaw<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [67](../standings_global.md)<br />
Regional Rank: [16]( ../standings_americas.md)<br />
Final Rank Value:  1018.4<br />
<br />
Final Rank Value (1018.4) = Starting Rank Value (960.1) + Head To Head Adjustments (58.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.450[<sup>1</sup>](#table2)
- Bounty Collected: 0.374[<sup>2</sup>](#table1)
- Opponent Network: 0.243[<sup>2</sup>](#table1)
- LAN Wins: 0.057[<sup>2</sup>](#table1)

The average of these factors is 0.281<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 960.1
- 400 + ( ( 0.281 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 960.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           74 |       27 | 2024-06-09 | M80              | L   | 1.000      | -            | -                | -                | -         |    -6.34 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           73 |       86 | 2024-06-08 | Nouns            | W   | 1.000      | 0.477        | 0.064 (0.031)    | 0.567 (0.270)    | 0 (0.000) |    17.25 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           72 |       96 | 2024-06-08 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |   -14.85 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           71 |      145 | 2024-06-07 | LAG              | W   | 1.000      | 0.384        | 0.021 (0.008)    | 0.484 (0.186)    | 0 (0.000) |     9.45 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           70 |      201 | 2024-06-06 | M80              | L   | 1.000      | -            | -                | -                | -         |    -5.82 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           69 |      214 | 2024-06-06 | NRG              | L   | 1.000      | -            | -                | -                | -         |   -18.23 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           68 |      221 | 2024-06-06 | M80              | L   | 1.000      | -            | -                | -                | -         |    -6.68 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           67 |      237 | 2024-06-06 | NRG              | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.41 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           66 |      272 | 2024-06-05 | Party Astronauts | W   | 1.000      | 0.477        | 0.048 (0.023)    | 0.677 (0.323)    | 0 (0.000) |    14.93 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           65 |      326 | 2024-06-04 | Strife           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.35 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           64 |      618 | 2024-05-23 | M80              | L   | 1.000      | -            | -                | -                | -         |    -6.49 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           63 |      632 | 2024-05-22 | One More         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.85 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           62 |      636 | 2024-05-22 | One More         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.00 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           61 |      644 | 2024-05-22 | LAG              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.07 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           60 |      692 | 2024-05-21 | Carpe Diem       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.06 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           59 |      698 | 2024-05-21 | Carpe Diem       | W   | 1.000      | -            | -                | -                | -         |     8.63 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           58 |      755 | 2024-05-19 | Limitless        | W   | 1.000      | -            | -                | -                | -         |     4.19 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           57 |      813 | 2024-05-17 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -17.38 | Grizz, JBa, motm, SLIGHT, stanislaw      |
|           56 |      883 | 2024-05-15 | BOSS             | W   | 1.000      | 0.477        | 0.018 (0.009)    | 0.407 (0.194)    | -         |     9.37 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           55 |      894 | 2024-05-15 | BOSS             | W   | 1.000      | 0.477        | 0.018 (0.009)    | 0.407 (0.194)    | -         |    10.10 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           54 |      939 | 2024-05-14 | FLUFFY AIMERS    | W   | 1.000      | -            | -                | -                | -         |     8.63 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           53 |      943 | 2024-05-14 | FLUFFY AIMERS    | W   | 1.000      | -            | -                | -                | -         |     9.27 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           52 |      989 | 2024-05-13 | Nouns            | W   | 1.000      | 0.477        | 0.064 (0.031)    | 0.567 (0.270)    | -         |    17.86 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           51 |      991 | 2024-05-13 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -13.45 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           50 |     1034 | 2024-05-11 | Elevate          | L   | 1.000      | -            | -                | -                | -         |   -16.95 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           49 |     1036 | 2024-05-11 | Mythic           | L   | 1.000      | -            | -                | -                | -         |   -22.11 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           48 |     1086 | 2024-05-09 | MIGHT            | W   | 0.988      | -            | -                | -                | -         |     2.84 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           47 |     1090 | 2024-05-09 | MIGHT            | W   | 0.988      | -            | -                | -                | -         |     2.92 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           46 |     1102 | 2024-05-08 | Limitless        | W   | 0.982      | -            | -                | -                | -         |     4.09 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           45 |     1105 | 2024-05-08 | Limitless        | W   | 0.982      | -            | -                | -                | -         |     4.26 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           44 |     1219 | 2024-05-02 | Party Astronauts | W   | 0.942      | 0.477        | 0.048 (0.022)    | 0.677 (0.304)    | -         |    16.19 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           43 |     1220 | 2024-05-02 | Party Astronauts | L   | 0.941      | -            | -                | -                | -         |   -13.43 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           42 |     1383 | 2024-04-25 | NRG              | W   | 0.895      | 0.477        | 0.024 (0.010)    | 0.578 (0.247)    | -         |    12.42 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           41 |     1385 | 2024-04-25 | NRG              | L   | 0.895      | -            | -                | -                | -         |   -16.04 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           40 |     1425 | 2024-04-23 | Elevate          | W   | 0.882      | 0.477        | 0.024 (0.010)    | 0.531 (0.223)    | -         |    12.28 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           39 |     1427 | 2024-04-23 | Elevate          | L   | 0.882      | -            | -                | -                | -         |   -15.76 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           38 |     1619 | 2024-04-17 | Elevate          | L   | 0.841      | -            | -                | -                | -         |   -16.36 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           37 |     1872 | 2024-04-08 | Cloud9           | L   | 0.783      | -            | -                | -                | -         |    -2.02 | horvy, motm, SLIGHT, Sonic, stanislaw    |
|           36 |     1901 | 2024-04-08 | Virtus.pro       | L   | 0.777      | -            | -                | -                | -         |    -0.46 | horvy, motm, SLIGHT, Sonic, stanislaw    |
|           35 |     2141 | 2024-03-27 | Mythic           | W   | 0.702      | -            | -                | -                | -         |     7.17 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           34 |     2144 | 2024-03-27 | Mythic           | W   | 0.701      | -            | -                | -                | -         |     7.58 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           33 |     2180 | 2024-03-26 | LAG              | W   | 0.696      | -            | -                | -                | -         |     8.82 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           32 |     2184 | 2024-03-26 | LAG              | L   | 0.695      | -            | -                | -                | -         |   -13.42 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           31 |     2380 | 2024-03-14 | Take Flyte       | W   | 0.615      | -            | -                | -                | -         |     4.59 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           30 |     2382 | 2024-03-14 | Take Flyte       | W   | 0.615      | -            | -                | -                | -         |     4.78 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           29 |     2406 | 2024-03-13 | M80              | W   | 0.609      | 0.477        | 0.206 (0.060)    | 0.749 (0.217)    | -         |    16.18 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           28 |     2408 | 2024-03-13 | M80              | L   | 0.609      | -            | -                | -                | -         |    -2.92 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           27 |     2454 | 2024-03-12 | Mythic           | L   | 0.602      | -            | -                | -                | -         |   -13.09 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           26 |     2687 | 2024-03-03 | M80              | L   | 0.540      | -            | -                | -                | -         |    -2.65 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           25 |     2707 | 2024-03-02 | BESTIA           | W   | 0.533      | -            | -                | -                | 1 (0.533) |     8.96 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           24 |     2728 | 2024-03-01 | RED Canids       | L   | 0.527      | -            | -                | -                | -         |    -6.34 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           23 |     2808 | 2024-02-25 | Liquid           | L   | 0.496      | -            | -                | -                | -         |    -0.34 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           22 |     2813 | 2024-02-25 | BOSS             | L   | 0.495      | -            | -                | -                | -         |   -10.78 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           21 |     2831 | 2024-02-24 | NRG              | W   | 0.489      | -            | -                | -                | -         |     5.87 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           20 |     2832 | 2024-02-24 | Party Astronauts | W   | 0.488      | -            | -                | -                | -         |     7.46 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           19 |     2843 | 2024-02-24 | OMiT             | W   | 0.488      | -            | -                | -                | -         |     3.40 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           18 |     2880 | 2024-02-22 | NRG              | L   | 0.475      | -            | -                | -                | -         |    -9.36 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           17 |     3229 | 2024-02-04 | Elevate          | L   | 0.355      | -            | -                | -                | -         |    -7.02 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           16 |     3253 | 2024-02-03 | Nouns            | W   | 0.349      | -            | -                | -                | -         |     4.94 | Infinite, JBa, motm, SLIGHT, stanislaw   |
|           15 |     3286 | 2024-02-02 | NRG              | W   | 0.341      | -            | -                | -                | -         |     3.87 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           14 |     3291 | 2024-02-02 | Carpe Diem       | W   | 0.341      | -            | -                | -                | -         |     2.57 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           13 |     3555 | 2024-01-20 | M80              | L   | 0.255      | -            | -                | -                | -         |    -1.20 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           12 |     3599 | 2024-01-19 | Liquid           | L   | 0.249      | -            | -                | -                | -         |    -0.16 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           11 |     3604 | 2024-01-19 | M80              | W   | 0.248      | -            | -                | -                | -         |     6.71 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           10 |     3661 | 2024-01-18 | Nouns            | W   | 0.242      | -            | -                | -                | -         |     3.66 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            9 |     3664 | 2024-01-18 | NRG              | W   | 0.241      | -            | -                | -                | -         |     2.85 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            8 |     3666 | 2024-01-18 | MIGHT            | W   | 0.241      | -            | -                | -                | -         |     0.73 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            7 |     3713 | 2024-01-17 | Mythic           | W   | 0.235      | -            | -                | -                | -         |     2.54 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            6 |     3767 | 2024-01-16 | Liquid           | L   | 0.228      | -            | -                | -                | -         |    -0.13 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            5 |     3818 | 2024-01-15 | ex-CatEvil       | W   | 0.222      | -            | -                | -                | -         |     0.28 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            4 |     3861 | 2024-01-13 | M80              | W   | 0.209      | -            | -                | -                | -         |     5.75 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            3 |     3908 | 2024-01-12 | BOSS             | W   | 0.203      | -            | -                | -                | -         |     2.26 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            2 |     3911 | 2024-01-12 | vagrants         | W   | 0.203      | -            | -                | -                | -         |     0.27 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            1 |     4153 | 2023-12-16 | FPL Friends      | L   | 0.022      | -            | -                | -                | -         |    -0.60 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($18,272.25)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $15,000.00     | $15,000.00      |
| 2024-04-14 |      0.818 | $4,000.00      | $3,272.25       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
