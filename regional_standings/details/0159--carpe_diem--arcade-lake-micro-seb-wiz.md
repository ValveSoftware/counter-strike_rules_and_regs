### Roster Details<br />
Team Name: Carpe Diem<br />
Roster: arcade, Lake, micro, Seb, wiz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [159](../standings_global.md)<br />
Regional Rank: [38]( ../standings_americas.md)<br />
Final Rank Value:  654.5<br />
<br />
Final Rank Value (654.5) = Starting Rank Value (724.2) + Head To Head Adjustments (-69.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.329[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.055[<sup>2</sup>](#table1)
- LAN Wins: 0.047[<sup>2</sup>](#table1)

The average of these factors is 0.170<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 724.2
- 400 + ( ( 0.170 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 724.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           41 |      585 | 2024-04-11 | Mythic           | W   | 1.000      | 0.477        | 0.003 (0.001)    | 0.402 (0.192)    | 0 (0.000) |    20.76 | arcade, Lake, micro, Seb, wiz              |
|           40 |      588 | 2024-04-11 | Mythic           | L   | 1.000      | -            | -                | -                | -         |   -10.34 | arcade, Lake, micro, Seb, wiz              |
|           39 |      675 | 2024-04-09 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -7.40 | arcade, Lake, micro, Seb, wiz              |
|           38 |      678 | 2024-04-09 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -7.90 | arcade, Lake, micro, Seb, wiz              |
|           37 |      802 | 2024-04-04 | Take Flyte       | L   | 0.989      | -            | -                | -                | -         |   -12.75 | arcade, Lake, micro, Seb, wiz              |
|           36 |      808 | 2024-04-04 | Take Flyte       | L   | 0.988      | -            | -                | -                | -         |   -13.89 | arcade, Lake, micro, Seb, wiz              |
|           35 |      982 | 2024-03-27 | Party Astronauts | L   | 0.936      | -            | -                | -                | -         |    -7.02 | arcade, Lake, micro, Seb, wiz              |
|           34 |      986 | 2024-03-27 | Party Astronauts | L   | 0.935      | -            | -                | -                | -         |    -7.46 | arcade, Lake, micro, Seb, wiz              |
|           33 |     1201 | 2024-03-15 | Elevate          | L   | 0.856      | -            | -                | -                | -         |    -7.37 | arcade, Lake, micro, Seb, wiz              |
|           32 |     1203 | 2024-03-15 | Elevate          | L   | 0.855      | -            | -                | -                | -         |    -7.83 | arcade, Lake, micro, Seb, wiz              |
|           31 |     1263 | 2024-03-13 | Party Astronauts | L   | 0.841      | -            | -                | -                | -         |    -7.72 | arcade, Lake, micro, Seb, wiz              |
|           30 |     1300 | 2024-03-12 | NRG              | W   | 0.835      | 0.143        | 0.006 (0.001)    | 0.539 (0.064)    | 0 (0.000) |    16.88 | arcade, Lake, micro, Seb, wiz              |
|           29 |     1435 | 2024-03-06 | Limitless        | W   | 0.796      | 0.477        | 0.001 (0.000)    | 0.173 (0.065)    | 0 (0.000) |    11.01 | arcade, Lake, micro, Seb, wiz              |
|           28 |     1438 | 2024-03-06 | Limitless        | W   | 0.795      | 0.477        | 0.001 (0.000)    | 0.173 (0.065)    | 0 (0.000) |    11.80 | arcade, Lake, micro, Seb, wiz              |
|           27 |     1930 | 2024-02-14 | Rocket           | W   | 0.656      | 0.477        | 0.002 (0.001)    | 0.213 (0.067)    | 0 (0.000) |    10.65 | arcade, Lake, micro, Seb, wiz              |
|           26 |     1932 | 2024-02-14 | Rocket           | L   | 0.655      | -            | -                | -                | -         |   -10.19 | arcade, Lake, micro, Seb, wiz              |
|           25 |     1969 | 2024-02-13 | FLUFFY AIMERS    | W   | 0.649      | 0.477        | -                | 0.077 (0.024)    | 0 (0.000) |     5.64 | arcade, Lake, micro, Seb, wiz              |
|           24 |     1973 | 2024-02-13 | FLUFFY AIMERS    | L   | 0.649      | -            | -                | -                | -         |   -15.18 | arcade, Lake, micro, Seb, wiz              |
|           23 |     2133 | 2024-02-02 | Party Astronauts | L   | 0.575      | -            | -                | -                | -         |    -5.51 | arcade, Lake, Seb, Walco, wiz              |
|           22 |     2140 | 2024-02-02 | Wildcard         | L   | 0.574      | -            | -                | -                | -         |    -4.22 | arcade, Lake, Seb, Walco, wiz              |
|           21 |     2516 | 2024-01-18 | Rocket           | L   | 0.474      | -            | -                | -                | -         |    -7.74 | Lake, Seb, Walco, wiz, Wolffe              |
|           20 |     2568 | 2024-01-17 | LOS              | W   | 0.468      | -            | -                | -                | 0 (0.000) |     2.31 | Lake, Seb, Walco, wiz, Wolffe              |
|           19 |     2663 | 2024-01-15 | MIGHT            | L   | 0.455      | -            | -                | -                | -         |    -7.31 | Lake, Seb, Walco, wiz, Wolffe              |
|           18 |     2690 | 2024-01-14 | Nouns            | L   | 0.449      | -            | -                | -                | -         |    -7.73 | Lake, Seb, Walco, wiz, Wolffe              |
|           17 |     2700 | 2024-01-14 | my life be like  | W   | 0.447      | 0.143        | 0.017 (0.001)    | 0.076 (0.005)    | 0 (0.000) |     7.08 | Lake, Seb, Walco, wiz, Wolffe              |
|           16 |     2720 | 2024-01-13 | Rocket           | L   | 0.441      | -            | -                | -                | -         |    -7.80 | Lake, Seb, Walco, wiz, Wolffe              |
|           15 |     2756 | 2024-01-12 | Party Astronauts | L   | 0.436      | -            | -                | -                | -         |    -4.18 | Lake, Seb, Walco, wiz, Wolffe              |
|           14 |     2762 | 2024-01-12 | LOS              | W   | 0.436      | -            | -                | -                | -         |     1.93 | Lake, Seb, Walco, wiz, Wolffe              |
|           13 |     2966 | 2023-12-17 | Nouns            | L   | 0.262      | -            | -                | -                | -         |    -4.21 | Cyrix, Lake, micro, Seb, Wolffe            |
|           12 |     3000 | 2023-12-16 | Elevate          | W   | 0.255      | 0.294        | 0.036 (0.003)    | 0.361 (0.027)    | -         |     5.46 | Cyrix, Lake, micro, Seb, Wolffe            |
|           11 |     3097 | 2023-12-09 | Elevate          | L   | 0.209      | -            | -                | -                | -         |    -2.12 | arcade, Cyrix, Lake, Seb, Wolffe           |
|           10 |     3098 | 2023-12-09 | LAG              | W   | 0.209      | 0.333        | 0.033 (0.002)    | 0.484 (0.034)    | 1 (0.209) |     5.16 | based, Experative, Nyyx, ogwizard, X-23    |
|            9 |     3101 | 2023-12-09 | Revel            | W   | 0.208      | -            | -                | -                | 1 (0.208) |     0.93 | BATSPEED, blessA, Jachro, kajohnray, P3nny |
|            8 |     3144 | 2023-12-07 | Nouns            | L   | 0.196      | -            | -                | -                | -         |    -3.16 | arcade, Cyrix, Lake, Seb, Wolffe           |
|            7 |     3168 | 2023-12-06 | FLUFFY AIMERS    | W   | 0.189      | 0.500        | 0.004 (0.000)    | -                | -         |     2.27 | dea, jason, LEARSI, Peeping, sacrifice     |
|            6 |     3203 | 2023-12-05 | Party Astronauts | L   | 0.182      | -            | -                | -                | -         |    -1.74 | ben1337, chop, cxzi, PwnAlone, viz         |
|            5 |     3413 | 2023-11-22 | Mythic           | L   | 0.095      | -            | -                | -                | -         |    -1.29 | arcade, Cyrix, Lake, Seb, Wolffe           |
|            4 |     3583 | 2023-11-15 | Rocket           | W   | 0.049      | 0.500        | -                | 0.213 (0.005)    | -         |     0.62 | arcade, Cyrix, Lake, Seb, Wolffe           |
|            3 |     3618 | 2023-11-14 | Wildcard         | L   | 0.041      | -            | -                | -                | -         |    -0.39 | arcade, Cyrix, Lake, Seb, Wolffe           |
|            2 |     3724 | 2023-11-09 | Elevate          | W   | 0.009      | 0.500        | 0.036 (0.000)    | -                | -         |     0.19 | arcade, Cyrix, Lake, Seb, Wolffe           |
|            1 |     3747 | 2023-11-08 | Eros             | W   | 0.001      | -            | -                | -                | -         |     0.01 | Andrew, DJF, nooz, PNDLM, shutout          |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,491.09)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-10 |      0.215 | $4,500.00      | $969.67         |
| 2023-12-09 |      0.209 | $2,500.00      | $521.42         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
