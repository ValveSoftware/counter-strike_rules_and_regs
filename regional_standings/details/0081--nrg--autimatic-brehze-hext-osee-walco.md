### Roster Details<br />
Team Name: NRG<br />
Roster: autimatic, Brehze, HexT, oSee, Walco<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [81](../standings_global.md)<br />
Regional Rank: [18]( ../standings_americas.md)<br />
Final Rank Value:  866.8<br />
<br />
Final Rank Value (866.8) = Starting Rank Value (775.8) + Head To Head Adjustments (91.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.310[<sup>1</sup>](#table2)
- Bounty Collected: 0.317[<sup>2</sup>](#table1)
- Opponent Network: 0.162[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.197<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 775.8
- 400 + ( ( 0.197 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 775.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           61 |      232 | 2024-04-25 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |   -14.07 | autimatic, Brehze, HexT, oSee, Walco   |
|           60 |      234 | 2024-04-25 | Wildcard         | W   | 1.000      | 0.477        | 0.025 (0.012)    | 0.490 (0.233)    | 0 (0.000) |    17.59 | autimatic, Brehze, HexT, oSee, Walco   |
|           59 |      470 | 2024-04-17 | G3               | L   | 1.000      | -            | -                | -                | -         |   -20.97 | autimatic, Brehze, HexT, oSee, Walco   |
|           58 |      529 | 2024-04-15 | Mythic           | W   | 1.000      | 0.477        | -                | 0.402 (0.192)    | 0 (0.000) |     9.73 | autimatic, Brehze, HexT, oSee, Walco   |
|           57 |      530 | 2024-04-15 | Mythic           | W   | 1.000      | 0.477        | -                | 0.402 (0.192)    | 0 (0.000) |    10.51 | autimatic, Brehze, HexT, oSee, Walco   |
|           56 |      616 | 2024-04-10 | BOSS             | W   | 1.000      | 0.477        | 0.049 (0.024)    | 0.507 (0.242)    | 0 (0.000) |    16.65 | autimatic, Brehze, HexT, oSee, Walco   |
|           55 |      621 | 2024-04-10 | BOSS             | L   | 1.000      | -            | -                | -                | -         |   -14.77 | autimatic, Brehze, HexT, oSee, Walco   |
|           54 |      675 | 2024-04-09 | Carpe Diem       | W   | 1.000      | 0.477        | 0.009 (0.004)    | 0.253 (0.121)    | 0 (0.000) |     7.40 | autimatic, Brehze, HexT, oSee, Walco   |
|           53 |      678 | 2024-04-09 | Carpe Diem       | W   | 1.000      | 0.477        | 0.009 (0.004)    | 0.253 (0.121)    | 0 (0.000) |     7.90 | autimatic, Brehze, HexT, oSee, Walco   |
|           52 |      979 | 2024-03-27 | Nouns            | W   | 0.936      | 0.477        | -                | 0.609 (0.272)    | 0 (0.000) |    14.87 | autimatic, Brehze, HexT, oSee, Walco   |
|           51 |      984 | 2024-03-27 | Nouns            | L   | 0.935      | -            | -                | -                | -         |   -14.67 | autimatic, Brehze, HexT, oSee, Walco   |
|           50 |     1031 | 2024-03-26 | MIGHT            | W   | 0.929      | 0.477        | -                | 0.190 (0.084)    | 0 (0.000) |    10.16 | autimatic, Brehze, HexT, oSee, Walco   |
|           49 |     1036 | 2024-03-26 | MIGHT            | W   | 0.929      | 0.477        | -                | 0.190 (0.084)    | 0 (0.000) |    10.96 | autimatic, Brehze, HexT, oSee, Walco   |
|           48 |     1202 | 2024-03-15 | FLUFFY AIMERS    | W   | 0.856      | 0.477        | 0.027 (0.011)    | 0.207 (0.084)    | 0 (0.000) |    15.02 | autimatic, Brehze, HexT, oSee, Walco   |
|           47 |     1204 | 2024-03-15 | FLUFFY AIMERS    | L   | 0.855      | -            | -                | -                | -         |   -11.96 | autimatic, Brehze, HexT, oSee, Walco   |
|           46 |     1222 | 2024-03-14 | Limitless        | W   | 0.849      | -            | -                | -                | -         |     7.17 | autimatic, Brehze, HexT, oSee, Walco   |
|           45 |     1227 | 2024-03-14 | Limitless        | W   | 0.849      | -            | -                | -                | -         |     7.61 | autimatic, Brehze, HexT, oSee, Walco   |
|           44 |     1300 | 2024-03-12 | Carpe Diem       | L   | 0.835      | -            | -                | -                | -         |   -16.88 | autimatic, Brehze, HexT, oSee, Walco   |
|           43 |     1555 | 2024-03-02 | MIBR             | L   | 0.767      | -            | -                | -                | -         |    -0.30 | Brehze, daps, FaNg, HexT, oSee         |
|           42 |     1574 | 2024-03-01 | Imperial         | L   | 0.761      | -            | -                | -                | -         |    -0.29 | Brehze, daps, FaNg, HexT, oSee         |
|           41 |     1680 | 2024-02-24 | Wildcard         | L   | 0.722      | -            | -                | -                | -         |    -8.51 | Brehze, daps, FaNg, HexT, oSee         |
|           40 |     1683 | 2024-02-24 | Limitless        | W   | 0.721      | -            | -                | -                | -         |     6.79 | Brehze, daps, FaNg, HexT, oSee         |
|           39 |     1689 | 2024-02-24 | Mythic           | W   | 0.721      | -            | -                | -                | -         |     9.83 | Brehze, daps, FaNg, HexT, oSee         |
|           38 |     1725 | 2024-02-22 | Party Astronauts | L   | 0.708      | -            | -                | -                | -         |    -9.85 | Brehze, daps, FaNg, HexT, oSee         |
|           37 |     1729 | 2024-02-22 | Wildcard         | W   | 0.708      | 0.143        | 0.025 (0.002)    | -                | -         |    14.03 | Brehze, daps, FaNg, HexT, oSee         |
|           36 |     1777 | 2024-02-20 | Party Astronauts | L   | 0.696      | -            | -                | -                | -         |   -10.10 | Brehze, daps, FaNg, HexT, oSee         |
|           35 |     1802 | 2024-02-19 | Party Astronauts | W   | 0.690      | 0.143        | 0.035 (0.003)    | -                | -         |    11.69 | Brehze, daps, FaNg, HexT, oSee         |
|           34 |     1804 | 2024-02-19 | Mythic           | W   | 0.688      | -            | -                | -                | -         |    10.14 | Brehze, daps, FaNg, HexT, oSee         |
|           33 |     2105 | 2024-02-03 | Elevate          | L   | 0.581      | -            | -                | -                | -         |    -7.16 | Brehze, daps, FaNg, HexT, oSee         |
|           32 |     2131 | 2024-02-02 | Party Astronauts | W   | 0.575      | 0.143        | 0.035 (0.003)    | -                | -         |    10.18 | Brehze, daps, FaNg, HexT, oSee         |
|           31 |     2135 | 2024-02-02 | Wildcard         | L   | 0.575      | -            | -                | -                | -         |    -6.21 | Brehze, daps, FaNg, HexT, oSee         |
|           30 |     2137 | 2024-02-02 | Party Astronauts | W   | 0.574      | 0.143        | 0.035 (0.003)    | -                | -         |    10.38 | Brehze, daps, FaNg, HexT, oSee         |
|           29 |     2513 | 2024-01-18 | Wildcard         | L   | 0.475      | -            | -                | -                | -         |    -5.51 | Brehze, daps, FaNg, HexT, oSee         |
|           28 |     2517 | 2024-01-18 | Elevate          | W   | 0.474      | 0.143        | 0.036 (0.002)    | -                | -         |     9.18 | Brehze, daps, FaNg, HexT, oSee         |
|           27 |     2563 | 2024-01-17 | squids           | W   | 0.468      | -            | -                | -                | -         |     1.50 | Brehze, daps, FaNg, HexT, oSee         |
|           26 |     2614 | 2024-01-16 | Elevate          | L   | 0.461      | -            | -                | -                | -         |    -5.66 | Brehze, daps, FaNg, HexT, oSee         |
|           25 |     2620 | 2024-01-16 | regain           | W   | 0.461      | -            | -                | -                | -         |     1.50 | Brehze, daps, FaNg, HexT, oSee         |
|           24 |     2660 | 2024-01-15 | Shimmer          | W   | 0.455      | -            | -                | -                | -         |     5.79 | Brehze, daps, FaNg, HexT, oSee         |
|           23 |     2689 | 2024-01-14 | Rocket           | L   | 0.450      | -            | -                | -                | -         |    -9.22 | Brehze, daps, FaNg, HexT, oSee         |
|           22 |     2699 | 2024-01-14 | LOS              | W   | 0.448      | -            | -                | -                | -         |     1.46 | Brehze, daps, FaNg, HexT, oSee         |
|           21 |     2715 | 2024-01-13 | Nouns            | L   | 0.442      | -            | -                | -                | -         |    -9.25 | Brehze, daps, FaNg, HexT, oSee         |
|           20 |     2754 | 2024-01-12 | Complexity       | L   | 0.436      | -            | -                | -                | -         |    -0.18 | Brehze, daps, FaNg, HexT, oSee         |
|           19 |     2763 | 2024-01-12 | Elevate          | W   | 0.435      | -            | -                | -                | -         |     7.91 | Brehze, daps, FaNg, HexT, oSee         |
|           18 |     2845 | 2024-01-09 | Liquid           | L   | 0.416      | -            | -                | -                | -         |    -0.49 | Brehze, daps, FaNg, HexT, oSee         |
|           17 |     2846 | 2024-01-09 | my life be like  | W   | 0.416      | -            | -                | -                | -         |     5.41 | Brehze, daps, FaNg, HexT, oSee         |
|           16 |     2849 | 2024-01-09 | MagicLight       | W   | 0.416      | -            | -                | -                | -         |     1.32 | Brehze, daps, FaNg, HexT, oSee         |
|           15 |     2997 | 2023-12-16 | LAG              | W   | 0.255      | -            | -                | -                | -         |     5.72 | Brehze, daps, FaNg, HexT, oSee         |
|           14 |     3025 | 2023-12-15 | Revenge Nation   | W   | 0.248      | -            | -                | -                | -         |     3.45 | Brehze, daps, FaNg, HexT, oSee         |
|           13 |     3061 | 2023-12-12 | Nouns            | L   | 0.228      | -            | -                | -                | -         |    -4.28 | Brehze, daps, FaNg, HexT, oSee         |
|           12 |     3070 | 2023-12-11 | Wildcard         | W   | 0.222      | -            | -                | -                | -         |     4.37 | Brehze, daps, FaNg, HexT, oSee         |
|           11 |     3080 | 2023-12-10 | huge sweaty      | W   | 0.215      | -            | -                | -                | -         |     0.72 | Brehze, daps, FaNg, HexT, oSee         |
|           10 |     3238 | 2023-12-03 | M80              | L   | 0.168      | -            | -                | -                | -         |    -0.33 | Brehze, daps, FaNg, HexT, oSee         |
|            9 |     3256 | 2023-12-02 | Party Astronauts | W   | 0.162      | -            | -                | -                | -         |     3.23 | Brehze, daps, FaNg, HexT, oSee         |
|            8 |     3428 | 2023-11-21 | BOSS             | L   | 0.089      | -            | -                | -                | -         |    -0.97 | autimatic, HexT, Jeorge, junior, Walco |
|            7 |     3512 | 2023-11-17 | M80              | L   | 0.062      | -            | -                | -                | -         |    -0.12 | autimatic, HexT, Jeorge, junior, Walco |
|            6 |     3543 | 2023-11-16 | M80              | L   | 0.056      | -            | -                | -                | -         |    -0.11 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|            5 |     3584 | 2023-11-15 | Party Astronauts | W   | 0.049      | -            | -                | -                | -         |     0.97 | ben1337, chop, cxzi, PwnAlone, viz     |
|            4 |     3587 | 2023-11-15 | Wildcard         | W   | 0.048      | -            | -                | -                | -         |     0.95 | autimatic, HexT, Jeorge, junior, Walco |
|            3 |     3614 | 2023-11-14 | Limitless        | W   | 0.042      | -            | -                | -                | -         |     0.47 | autimatic, HexT, Jeorge, junior, Walco |
|            2 |     3653 | 2023-11-12 | Eros             | W   | 0.029      | -            | -                | -                | -         |     0.24 | Andrew, DJF, nooz, PNDLM, shutout      |
|            1 |     3746 | 2023-11-08 | Take Flyte       | W   | 0.002      | -            | -                | -                | -         |     0.03 | autimatic, HexT, Jeorge, junior, Walco |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($969.67)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
