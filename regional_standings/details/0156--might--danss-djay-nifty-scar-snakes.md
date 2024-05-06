### Roster Details<br />
Team Name: MIGHT<br />
Roster: danss, djay, Nifty, scar, Snakes<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [156](../standings_global.md)<br />
Regional Rank: [37]( ../standings_americas.md)<br />
Final Rank Value:  668.6<br />
<br />
Final Rank Value (668.6) = Starting Rank Value (699.1) + Head To Head Adjustments (-30.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.283[<sup>1</sup>](#table2)
- Bounty Collected: 0.272[<sup>2</sup>](#table1)
- Opponent Network: 0.073[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.157<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 699.1
- 400 + ( ( 0.157 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 699.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |      618 | 2024-04-10 | Take Flyte       | W   | 1.000      | 0.477        | 0.004 (0.002)    | 0.282 (0.134)    | 0 (0.000) |    19.27 | danss, djay, Nifty, scar, Snakes   |
|           29 |      625 | 2024-04-10 | Take Flyte       | L   | 1.000      | -            | -                | -                | -         |   -11.93 | danss, djay, Nifty, scar, Snakes   |
|           28 |      673 | 2024-04-09 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -7.68 | danss, djay, Louie, scar, Snakes   |
|           27 |      676 | 2024-04-09 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -8.20 | danss, djay, Nifty, scar, Snakes   |
|           26 |      803 | 2024-04-04 | Party Astronauts | L   | 0.989      | -            | -                | -                | -         |    -6.27 | danss, djay, Nifty, scar, Snakes   |
|           25 |      811 | 2024-04-04 | Party Astronauts | L   | 0.988      | -            | -                | -                | -         |    -6.64 | danss, djay, Nifty, scar, Snakes   |
|           24 |      980 | 2024-03-27 | Limitless        | L   | 0.936      | -            | -                | -                | -         |   -15.86 | danss, djay, Nifty, scar, Snakes   |
|           23 |      987 | 2024-03-27 | Limitless        | L   | 0.935      | -            | -                | -                | -         |   -17.20 | danss, djay, Nifty, scar, Snakes   |
|           22 |     1031 | 2024-03-26 | NRG              | L   | 0.929      | -            | -                | -                | -         |   -10.16 | danss, djay, Nifty, scar, Snakes   |
|           21 |     1036 | 2024-03-26 | NRG              | L   | 0.929      | -            | -                | -                | -         |   -10.96 | danss, djay, Nifty, scar, Snakes   |
|           20 |     1436 | 2024-03-06 | LAG              | L   | 0.796      | -            | -                | -                | -         |    -7.61 | danss, djay, Nifty, scar, Snakes   |
|           19 |     1437 | 2024-03-06 | LAG              | W   | 0.795      | 0.477        | 0.033 (0.012)    | 0.484 (0.184)    | 0 (0.000) |    17.90 | danss, djay, Nifty, scar, Snakes   |
|           18 |     1474 | 2024-03-05 | Mythic           | W   | 0.789      | 0.477        | 0.003 (0.001)    | 0.402 (0.151)    | 0 (0.000) |    13.15 | danss, djay, Nifty, scar, Snakes   |
|           17 |     1476 | 2024-03-05 | Mythic           | W   | 0.789      | 0.477        | 0.003 (0.001)    | 0.402 (0.151)    | 0 (0.000) |    14.09 | danss, djay, Nifty, scar, Snakes   |
|           16 |     1727 | 2024-02-22 | Liquid           | L   | 0.708      | -            | -                | -                | -         |    -0.48 | danss, djay, Nifty, scar, Snakes   |
|           15 |     1728 | 2024-02-22 | Take Flyte       | W   | 0.708      | 0.143        | 0.004 (0.000)    | 0.282 (0.028)    | 0 (0.000) |    11.30 | danss, djay, Nifty, scar, Snakes   |
|           14 |     1875 | 2024-02-16 | Rocket           | L   | 0.668      | -            | -                | -                | -         |   -11.07 | danss, djay, Nifty, scar, Snakes   |
|           13 |     2515 | 2024-01-18 | Wildcard         | L   | 0.474      | -            | -                | -                | -         |    -4.00 | danss, djay, Louie, Nifty, scar    |
|           12 |     2565 | 2024-01-17 | Party Astronauts | W   | 0.468      | 0.143        | 0.035 (0.002)    | 0.570 (0.038)    | 0 (0.000) |    10.45 | danss, djay, Louie, Nifty, scar    |
|           11 |     2618 | 2024-01-16 | huge sweaty      | L   | 0.461      | -            | -                | -                | -         |   -11.29 | danss, djay, Louie, Nifty, scar    |
|           10 |     2663 | 2024-01-15 | Carpe Diem       | W   | 0.455      | 0.143        | 0.009 (0.001)    | 0.253 (0.016)    | 0 (0.000) |     7.31 | danss, djay, Louie, Nifty, scar    |
|            9 |     2961 | 2023-12-17 | Rocket           | W   | 0.263      | 0.143        | -                | 0.213 (0.008)    | 0 (0.000) |     3.66 | djay, Louie, Nifty, scar, stamina  |
|            8 |     2963 | 2023-12-17 | LAG              | W   | 0.262      | 0.143        | 0.033 (0.001)    | 0.484 (0.018)    | 0 (0.000) |     6.58 | djay, Louie, Nifty, scar, stamina  |
|            7 |     2996 | 2023-12-16 | Pantsu           | W   | 0.255      | 0.143        | 0.004 (0.000)    | -                | 0 (0.000) |     3.47 | djay, Louie, Nifty, scar, stamina  |
|            6 |     3024 | 2023-12-15 | Bad News Bears   | L   | 0.249      | -            | -                | -                | -         |    -6.03 | djay, Louie, Nifty, scar, stamina  |
|            5 |     3078 | 2023-12-10 | Revenge Nation   | L   | 0.216      | -            | -                | -                | -         |    -3.03 | djay, Louie, Nifty, scar, stamina  |
|            4 |     3094 | 2023-12-09 | Villainous       | W   | 0.209      | -            | -                | -                | -         |     1.82 | djay, Louie, Nifty, scar, stamina  |
|            3 |     3102 | 2023-12-09 | Elevate          | L   | 0.208      | -            | -                | -                | -         |    -1.95 | danss, djay, Nifty, scar, stamina  |
|            2 |     3615 | 2023-11-14 | M80              | L   | 0.042      | -            | -                | -                | -         |    -0.05 | CLASIA, djay, Nifty, scar, stamina |
|            1 |     3617 | 2023-11-14 | BOSS             | W   | 0.041      | 0.143        | 0.049 (0.000)    | 0.507 (0.003)    | -         |     0.97 | CLASIA, djay, Nifty, scar, stamina |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($471.42)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
