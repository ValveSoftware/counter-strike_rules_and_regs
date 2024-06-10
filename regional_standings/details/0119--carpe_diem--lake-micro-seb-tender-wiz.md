### Roster Details<br />
Team Name: Carpe Diem<br />
Roster: Lake, micro, Seb, Tender, wiz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [119](../standings_global.md)<br />
Regional Rank: [28]( ../standings_americas.md)<br />
Final Rank Value:  783.8<br />
<br />
Final Rank Value (783.8) = Starting Rank Value (794.5) + Head To Head Adjustments (-10.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.314[<sup>1</sup>](#table2)
- Bounty Collected: 0.329[<sup>2</sup>](#table1)
- Opponent Network: 0.148[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.198<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 794.5
- 400 + ( ( 0.198 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 794.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           45 |      279 | 2024-06-05 | LAG              | L   | 1.000      | -            | -                | -                | -         |   -12.07 | Lake, micro, Seb, Tender, wiz   |
|           44 |      322 | 2024-06-04 | LAG              | L   | 1.000      | -            | -                | -                | -         |   -13.14 | Lake, micro, Seb, Tender, wiz   |
|           43 |      635 | 2024-05-22 | MIGHT            | W   | 1.000      | 0.477        | -                | 0.133 (0.063)    | 0 (0.000) |     6.23 | Lake, micro, Seb, Tender, wiz   |
|           42 |      642 | 2024-05-22 | MIGHT            | W   | 1.000      | 0.477        | -                | 0.133 (0.063)    | 0 (0.000) |     6.60 | Lake, micro, Seb, Tender, wiz   |
|           41 |      688 | 2024-05-21 | Legacy           | L   | 1.000      | -            | -                | -                | -         |    -5.67 | Lake, micro, Seb, Tender, wiz   |
|           40 |      692 | 2024-05-21 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |    -8.06 | Lake, micro, Seb, Tender, wiz   |
|           39 |      698 | 2024-05-21 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |    -8.63 | Lake, micro, Seb, Tender, wiz   |
|           38 |      722 | 2024-05-20 | BOSS             | W   | 1.000      | 0.477        | 0.018 (0.009)    | 0.407 (0.194)    | 0 (0.000) |    16.50 | Lake, micro, Seb, Tender, wiz   |
|           37 |      726 | 2024-05-20 | BOSS             | L   | 1.000      | -            | -                | -                | -         |   -14.93 | Lake, micro, Seb, Tender, wiz   |
|           36 |      848 | 2024-05-16 | One More         | W   | 1.000      | 0.477        | 0.003 (0.001)    | 0.177 (0.084)    | 0 (0.000) |    10.74 | Lake, micro, Seb, Tender, wiz   |
|           35 |      849 | 2024-05-16 | One More         | W   | 1.000      | 0.477        | 0.003 (0.001)    | 0.177 (0.084)    | 0 (0.000) |    11.65 | Lake, micro, Seb, Tender, wiz   |
|           34 |      886 | 2024-05-15 | Nouns            | W   | 1.000      | 0.477        | 0.064 (0.031)    | 0.567 (0.270)    | 0 (0.000) |    22.79 | Lake, micro, Seb, Tender, wiz   |
|           33 |      891 | 2024-05-15 | Nouns            | W   | 1.000      | 0.477        | 0.064 (0.031)    | 0.567 (0.270)    | 0 (0.000) |    24.36 | Lake, micro, Seb, Tender, wiz   |
|           32 |      942 | 2024-05-14 | LAG              | L   | 1.000      | -            | -                | -                | -         |   -11.07 | Lake, micro, Seb, Tender, wiz   |
|           31 |      949 | 2024-05-14 | LAG              | W   | 1.000      | 0.477        | 0.021 (0.010)    | 0.484 (0.231)    | 0 (0.000) |    20.83 | Lake, micro, Seb, Tender, wiz   |
|           30 |     1736 | 2024-04-11 | Mythic           | W   | 0.802      | 0.477        | 0.010 (0.004)    | 0.391 (0.150)    | 0 (0.000) |    16.57 | arcade, Lake, micro, Seb, wiz   |
|           29 |     1739 | 2024-04-11 | Mythic           | L   | 0.802      | -            | -                | -                | -         |    -8.60 | arcade, Lake, micro, Seb, wiz   |
|           28 |     1826 | 2024-04-09 | NRG              | L   | 0.789      | -            | -                | -                | -         |    -6.57 | arcade, Lake, micro, Seb, wiz   |
|           27 |     1829 | 2024-04-09 | NRG              | L   | 0.788      | -            | -                | -                | -         |    -6.94 | arcade, Lake, micro, Seb, wiz   |
|           26 |     1953 | 2024-04-04 | Take Flyte       | L   | 0.755      | -            | -                | -                | -         |   -10.52 | arcade, Lake, micro, Seb, wiz   |
|           25 |     1959 | 2024-04-04 | Take Flyte       | L   | 0.755      | -            | -                | -                | -         |   -11.24 | arcade, Lake, micro, Seb, wiz   |
|           24 |     2133 | 2024-03-27 | Party Astronauts | L   | 0.702      | -            | -                | -                | -         |    -5.00 | arcade, Lake, micro, Seb, wiz   |
|           23 |     2137 | 2024-03-27 | Party Astronauts | L   | 0.702      | -            | -                | -                | -         |    -5.23 | arcade, Lake, micro, Seb, wiz   |
|           22 |     2352 | 2024-03-15 | Elevate          | L   | 0.622      | -            | -                | -                | -         |    -6.68 | arcade, Lake, micro, Seb, wiz   |
|           21 |     2354 | 2024-03-15 | Elevate          | L   | 0.622      | -            | -                | -                | -         |    -7.02 | arcade, Lake, micro, Seb, wiz   |
|           20 |     2414 | 2024-03-13 | Party Astronauts | L   | 0.608      | -            | -                | -                | -         |    -5.04 | arcade, Lake, micro, Seb, wiz   |
|           19 |     2451 | 2024-03-12 | NRG              | W   | 0.602      | 0.143        | 0.024 (0.002)    | -                | 0 (0.000) |    12.29 | arcade, Lake, micro, Seb, wiz   |
|           18 |     2586 | 2024-03-06 | Limitless        | W   | 0.562      | 0.477        | 0.001 (0.000)    | -                | -         |     6.44 | arcade, Lake, micro, Seb, wiz   |
|           17 |     2589 | 2024-03-06 | Limitless        | W   | 0.562      | -            | -                | -                | -         |     6.74 | arcade, Lake, micro, Seb, wiz   |
|           16 |     3081 | 2024-02-14 | Rocket           | W   | 0.422      | -            | -                | -                | -         |     3.14 | arcade, Lake, micro, Seb, wiz   |
|           15 |     3083 | 2024-02-14 | Rocket           | L   | 0.422      | -            | -                | -                | -         |   -10.36 | arcade, Lake, micro, Seb, wiz   |
|           14 |     3120 | 2024-02-13 | FLUFFY AIMERS    | W   | 0.416      | 0.477        | 0.016 (0.003)    | 0.354 (0.070)    | -         |     8.13 | arcade, Lake, micro, Seb, wiz   |
|           13 |     3124 | 2024-02-13 | FLUFFY AIMERS    | L   | 0.415      | -            | -                | -                | -         |    -5.04 | arcade, Lake, micro, Seb, wiz   |
|           12 |     3284 | 2024-02-02 | Party Astronauts | L   | 0.342      | -            | -                | -                | -         |    -2.79 | arcade, Lake, Seb, Walco, wiz   |
|           11 |     3291 | 2024-02-02 | Wildcard         | L   | 0.341      | -            | -                | -                | -         |    -2.57 | arcade, Lake, Seb, Walco, wiz   |
|           10 |     3667 | 2024-01-18 | Rocket           | L   | 0.241      | -            | -                | -                | -         |    -6.02 | Lake, Seb, Walco, wiz, Wolffe   |
|            9 |     3719 | 2024-01-17 | LOS              | W   | 0.235      | -            | -                | -                | -         |     0.79 | Lake, Seb, Walco, wiz, Wolffe   |
|            8 |     3814 | 2024-01-15 | MIGHT            | L   | 0.222      | -            | -                | -                | -         |    -5.43 | Lake, Seb, Walco, wiz, Wolffe   |
|            7 |     3841 | 2024-01-14 | Nouns            | L   | 0.216      | -            | -                | -                | -         |    -1.93 | Lake, Seb, Walco, wiz, Wolffe   |
|            6 |     3851 | 2024-01-14 | Akimbo           | W   | 0.214      | -            | -                | -                | -         |     2.58 | Lake, Seb, Walco, wiz, Wolffe   |
|            5 |     3871 | 2024-01-13 | Rocket           | L   | 0.208      | -            | -                | -                | -         |    -5.32 | Lake, Seb, Walco, wiz, Wolffe   |
|            4 |     3907 | 2024-01-12 | Party Astronauts | L   | 0.203      | -            | -                | -                | -         |    -1.65 | Lake, Seb, Walco, wiz, Wolffe   |
|            3 |     3913 | 2024-01-12 | LOS              | W   | 0.202      | -            | -                | -                | -         |     0.63 | Lake, Seb, Walco, wiz, Wolffe   |
|            2 |     4117 | 2023-12-17 | Nouns            | L   | 0.028      | -            | -                | -                | -         |    -0.69 | Cyrix, Lake, micro, Seb, Wolffe |
|            1 |     4151 | 2023-12-16 | Elevate          | W   | 0.022      | -            | -                | -                | -         |     0.42 | Cyrix, Lake, micro, Seb, Wolffe |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,000.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
