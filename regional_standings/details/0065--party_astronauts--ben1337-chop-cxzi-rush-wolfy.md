### Roster Details<br />
Team Name: Party Astronauts<br />
Roster: ben1337, chop, cxzi, RUSH, WolfY<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [65](../standings_global.md)<br />
Regional Rank: [13]( ../standings_americas.md)<br />
Final Rank Value:  941.6<br />
<br />
Final Rank Value (941.6) = Starting Rank Value (871.8) + Head To Head Adjustments (69.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.407[<sup>1</sup>](#table2)
- Bounty Collected: 0.328[<sup>2</sup>](#table1)
- Opponent Network: 0.144[<sup>2</sup>](#table1)
- LAN Wins: 0.112[<sup>2</sup>](#table1)

The average of these factors is 0.248<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 871.8
- 400 + ( ( 0.248 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 871.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           56 |       68 | 2024-05-02 | Wildcard        | L   | 1.000      | -            | -                | -                | -         |   -17.36 | ben1337, chop, cxzi, RUSH, WolfY   |
|           55 |       69 | 2024-05-02 | Wildcard        | W   | 1.000      | 0.477        | 0.025 (0.012)    | 0.490 (0.233)    | 0 (0.000) |    14.00 | ben1337, chop, cxzi, RUSH, WolfY   |
|           54 |      205 | 2024-04-27 | Aurora          | L   | 1.000      | -            | -                | -                | -         |    -2.04 | ben1337, chop, cxzi, RUSH, WolfY   |
|           53 |      207 | 2024-04-26 | sunday school   | W   | 1.000      | 0.500        | 0.013 (0.006)    | -                | 1 (1.000) |     6.12 | ben1337, chop, cxzi, RUSH, WolfY   |
|           52 |      233 | 2024-04-25 | Aurora          | L   | 1.000      | -            | -                | -                | -         |    -1.78 | ben1337, chop, cxzi, RUSH, WolfY   |
|           51 |      672 | 2024-04-09 | One More        | W   | 1.000      | 0.477        | 0.010 (0.005)    | 0.231 (0.110)    | 0 (0.000) |     6.38 | ben1337, chop, cxzi, RUSH, WolfY   |
|           50 |      679 | 2024-04-09 | One More        | W   | 1.000      | 0.477        | 0.010 (0.005)    | 0.231 (0.110)    | 0 (0.000) |     6.77 | ben1337, chop, cxzi, RUSH, WolfY   |
|           49 |      803 | 2024-04-04 | MIGHT           | W   | 0.989      | 0.477        | -                | 0.190 (0.089)    | 0 (0.000) |     6.27 | ben1337, chop, cxzi, RUSH, WolfY   |
|           48 |      811 | 2024-04-04 | MIGHT           | W   | 0.988      | -            | -                | -                | 0 (0.000) |     6.64 | ben1337, chop, cxzi, RUSH, WolfY   |
|           47 |      849 | 2024-04-03 | Nouns           | W   | 0.982      | -            | -                | -                | 0 (0.000) |    13.30 | ben1337, chop, CLASIA, cxzi, RUSH  |
|           46 |      856 | 2024-04-03 | BOSS            | W   | 0.981      | 0.143        | 0.049 (0.007)    | -                | 0 (0.000) |    12.22 | ben1337, chop, CLASIA, cxzi, RUSH  |
|           45 |      900 | 2024-04-02 | Take Flyte      | W   | 0.975      | -            | -                | -                | 0 (0.000) |     7.54 | ben1337, chop, CLASIA, cxzi, WolfY |
|           44 |      903 | 2024-04-02 | Nouns           | L   | 0.975      | -            | -                | -                | -         |   -17.49 | ben1337, chop, CLASIA, cxzi, WolfY |
|           43 |      982 | 2024-03-27 | Carpe Diem      | W   | 0.936      | 0.477        | 0.009 (0.004)    | 0.253 (0.113)    | 0 (0.000) |     7.02 | ben1337, chop, cxzi, RUSH, WolfY   |
|           42 |      986 | 2024-03-27 | Carpe Diem      | W   | 0.935      | 0.477        | 0.009 (0.004)    | 0.253 (0.113)    | -         |     7.46 | ben1337, chop, cxzi, RUSH, WolfY   |
|           41 |     1028 | 2024-03-26 | Nouns           | L   | 0.929      | -            | -                | -                | -         |   -17.50 | ben1337, chop, cxzi, RUSH, WolfY   |
|           40 |     1032 | 2024-03-26 | Nouns           | L   | 0.929      | -            | -                | -                | -         |   -18.91 | ben1337, chop, cxzi, RUSH, WolfY   |
|           39 |     1110 | 2024-03-20 | BOSS            | W   | 0.889      | 0.477        | 0.049 (0.021)    | 0.507 (0.215)    | -         |    12.36 | ben1337, chop, cxzi, RUSH, WolfY   |
|           38 |     1114 | 2024-03-20 | BOSS            | W   | 0.889      | 0.477        | 0.049 (0.021)    | 0.507 (0.215)    | -         |    13.37 | ben1337, chop, cxzi, RUSH, WolfY   |
|           37 |     1131 | 2024-03-19 | Take Flyte      | W   | 0.882      | 0.477        | -                | 0.282 (0.119)    | -         |     6.83 | ben1337, chop, cxzi, RUSH, WolfY   |
|           36 |     1134 | 2024-03-19 | Take Flyte      | W   | 0.882      | 0.477        | -                | 0.282 (0.118)    | -         |     7.25 | ben1337, chop, cxzi, RUSH, WolfY   |
|           35 |     1263 | 2024-03-13 | Carpe Diem      | W   | 0.841      | -            | -                | -                | -         |     7.72 | ben1337, chop, cxzi, RUSH, WolfY   |
|           34 |     1301 | 2024-03-12 | Elevate         | W   | 0.835      | 0.143        | 0.036 (0.004)    | -                | -         |    13.47 | ben1337, chop, cxzi, RUSH, WolfY   |
|           33 |     1681 | 2024-02-24 | Wildcard        | L   | 0.721      | -            | -                | -                | -         |    -9.95 | ben1337, chop, cxzi, Walco, WolfY  |
|           32 |     1688 | 2024-02-24 | ex-CatEvil      | W   | 0.721      | -            | -                | -                | -         |     1.49 | ben1337, chop, cxzi, Walco, WolfY  |
|           31 |     1723 | 2024-02-22 | Liquid          | L   | 0.709      | -            | -                | -                | -         |    -1.17 | ben1337, chop, cxzi, Walco, WolfY  |
|           30 |     1725 | 2024-02-22 | NRG             | W   | 0.708      | -            | -                | -                | -         |     9.85 | ben1337, chop, cxzi, Walco, WolfY  |
|           29 |     1730 | 2024-02-22 | One More        | W   | 0.708      | -            | -                | -                | -         |     7.65 | ben1337, chop, cxzi, Walco, WolfY  |
|           28 |     1777 | 2024-02-20 | NRG             | W   | 0.696      | -            | -                | -                | -         |    10.10 | ben1337, chop, cxzi, Walco, WolfY  |
|           27 |     1778 | 2024-02-20 | Mythic          | W   | 0.695      | -            | -                | -                | -         |     9.24 | ben1337, chop, cxzi, Walco, WolfY  |
|           26 |     1802 | 2024-02-19 | NRG             | L   | 0.690      | -            | -                | -                | -         |   -11.69 | ben1337, chop, cxzi, Walco, WolfY  |
|           25 |     1805 | 2024-02-19 | G3              | W   | 0.688      | -            | -                | -                | -         |     8.38 | ben1337, chop, cxzi, Walco, WolfY  |
|           24 |     2131 | 2024-02-02 | NRG             | L   | 0.575      | -            | -                | -                | -         |   -10.18 | ben1337, chop, cxzi, viz, WolfY    |
|           23 |     2133 | 2024-02-02 | Carpe Diem      | W   | 0.575      | -            | -                | -                | -         |     5.51 | ben1337, chop, cxzi, viz, WolfY    |
|           22 |     2137 | 2024-02-02 | NRG             | L   | 0.574      | -            | -                | -                | -         |   -10.38 | ben1337, chop, cxzi, viz, WolfY    |
|           21 |     2565 | 2024-01-17 | MIGHT           | L   | 0.468      | -            | -                | -                | -         |   -10.45 | ben1337, chop, cxzi, viz, WolfY    |
|           20 |     2619 | 2024-01-16 | Elevate         | L   | 0.461      | -            | -                | -                | -         |    -7.32 | ben1337, chop, cxzi, viz, WolfY    |
|           19 |     2665 | 2024-01-15 | Zomblers        | W   | 0.455      | -            | -                | -                | -         |     1.50 | ben1337, chop, cxzi, viz, WolfY    |
|           18 |     2688 | 2024-01-14 | Elevate         | L   | 0.450      | -            | -                | -                | -         |    -7.51 | ben1337, chop, cxzi, viz, WolfY    |
|           17 |     2695 | 2024-01-14 | Liquid          | L   | 0.448      | -            | -                | -                | -         |    -0.85 | ben1337, chop, cxzi, viz, WolfY    |
|           16 |     2714 | 2024-01-13 | Complexity      | L   | 0.442      | -            | -                | -                | -         |    -0.27 | ben1337, chop, cxzi, viz, WolfY    |
|           15 |     2756 | 2024-01-12 | Carpe Diem      | W   | 0.436      | -            | -                | -                | -         |     4.18 | ben1337, chop, cxzi, viz, WolfY    |
|           14 |     2761 | 2024-01-12 | my life be like | W   | 0.436      | -            | -                | -                | -         |     4.20 | ben1337, chop, cxzi, viz, WolfY    |
|           13 |     3067 | 2023-12-11 | BOSS            | L   | 0.223      | -            | -                | -                | -         |    -3.33 | ben1337, chop, cxzi, PwnAlone, viz |
|           12 |     3096 | 2023-12-09 | BOSS            | L   | 0.209      | -            | -                | -                | -         |    -3.17 | ben1337, chop, cxzi, PwnAlone, viz |
|           11 |     3123 | 2023-12-08 | Nouns           | W   | 0.202      | -            | -                | -                | -         |     1.86 | ben1337, chop, cxzi, PwnAlone, viz |
|           10 |     3142 | 2023-12-07 | Evil Geniuses   | W   | 0.196      | -            | -                | -                | -         |     1.42 | ben1337, chop, cxzi, PwnAlone, viz |
|            9 |     3171 | 2023-12-06 | M80             | L   | 0.189      | -            | -                | -                | -         |    -0.59 | ben1337, chop, cxzi, PwnAlone, viz |
|            8 |     3203 | 2023-12-05 | Carpe Diem      | W   | 0.182      | -            | -                | -                | -         |     1.74 | ben1337, chop, cxzi, PwnAlone, viz |
|            7 |     3256 | 2023-12-02 | NRG             | L   | 0.162      | -            | -                | -                | -         |    -3.23 | ben1337, chop, cxzi, PwnAlone, viz |
|            6 |     3412 | 2023-11-22 | BOSS            | W   | 0.096      | -            | -                | -                | -         |     1.59 | ben1337, chop, cxzi, PwnAlone, viz |
|            5 |     3429 | 2023-11-21 | Mythic          | W   | 0.088      | -            | -                | -                | -         |     1.02 | ben1337, chop, cxzi, PwnAlone, viz |
|            4 |     3545 | 2023-11-16 | M80             | L   | 0.054      | -            | -                | -                | -         |    -0.17 | ben1337, chop, cxzi, PwnAlone, viz |
|            3 |     3584 | 2023-11-15 | NRG             | L   | 0.049      | -            | -                | -                | -         |    -0.97 | ben1337, chop, cxzi, PwnAlone, viz |
|            2 |     3585 | 2023-11-15 | M80             | W   | 0.048      | -            | -                | -                | -         |     1.36 | ben1337, chop, cxzi, PwnAlone, viz |
|            1 |     3634 | 2023-11-13 | Take Flyte      | W   | 0.035      | -            | -                | -                | -         |     0.32 | ben1337, chop, cxzi, PwnAlone, viz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,693.54)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-28 |      1.000 | $3,000.00      | $3,000.00       |
| 2023-12-10 |      0.215 | $12,500.00     | $2,693.54       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
