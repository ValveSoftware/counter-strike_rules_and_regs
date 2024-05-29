### Roster Details<br />
Team Name: MIGHT<br />
Roster: djay, Fr3nk1e, Nifty, scar, Snakes<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [169](../standings_global.md)<br />
Regional Rank: [40]( ../standings_americas.md)<br />
Final Rank Value:  586.2<br />
<br />
Final Rank Value (586.2) = Starting Rank Value (671.7) + Head To Head Adjustments (-85.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.234[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.075[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 671.7
- 400 + ( ( 0.140 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 671.7


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
|           40 |      135 | 2024-05-22 | Carpe Diem       | L   | 1.000      | -            | -                | -                | -         |   -10.19 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           39 |      142 | 2024-05-22 | Carpe Diem       | L   | 1.000      | -            | -                | -                | -         |   -11.03 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           38 |      219 | 2024-05-20 | One More         | L   | 1.000      | -            | -                | -                | -         |   -13.84 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           37 |      224 | 2024-05-20 | One More         | W   | 1.000      | 0.477        | 0.005 (0.002)    | 0.212 (0.101)    | 0 (0.000) |    17.84 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           36 |      384 | 2024-05-15 | FLUFFY AIMERS    | L   | 1.000      | -            | -                | -                | -         |    -8.37 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           35 |      390 | 2024-05-15 | FLUFFY AIMERS    | L   | 1.000      | -            | -                | -                | -         |    -8.98 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           34 |      445 | 2024-05-14 | BOSS             | L   | 1.000      | -            | -                | -                | -         |    -7.73 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           33 |      451 | 2024-05-14 | BOSS             | L   | 1.000      | -            | -                | -                | -         |    -8.27 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           32 |      586 | 2024-05-09 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |    -4.90 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           31 |      590 | 2024-05-09 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |    -5.13 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           30 |      604 | 2024-05-08 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -6.16 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           29 |      606 | 2024-05-08 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -6.52 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           28 |     1269 | 2024-04-10 | Take Flyte       | W   | 0.874      | 0.477        | 0.006 (0.002)    | 0.392 (0.163)    | 0 (0.000) |    18.37 | danss, djay, Nifty, scar, Snakes   |
|           27 |     1276 | 2024-04-10 | Take Flyte       | L   | 0.874      | -            | -                | -                | -         |    -8.98 | danss, djay, Nifty, scar, Snakes   |
|           26 |     1324 | 2024-04-09 | Nouns            | L   | 0.868      | -            | -                | -                | -         |    -4.36 | danss, djay, Louie, scar, Snakes   |
|           25 |     1327 | 2024-04-09 | Nouns            | L   | 0.868      | -            | -                | -                | -         |    -4.54 | danss, djay, Nifty, scar, Snakes   |
|           24 |     1454 | 2024-04-04 | Party Astronauts | L   | 0.834      | -            | -                | -                | -         |    -5.03 | danss, djay, Nifty, scar, Snakes   |
|           23 |     1462 | 2024-04-04 | Party Astronauts | L   | 0.834      | -            | -                | -                | -         |    -5.26 | danss, djay, Nifty, scar, Snakes   |
|           22 |     1631 | 2024-03-27 | Limitless        | L   | 0.782      | -            | -                | -                | -         |   -12.41 | danss, djay, Nifty, scar, Snakes   |
|           21 |     1638 | 2024-03-27 | Limitless        | L   | 0.781      | -            | -                | -                | -         |   -13.29 | danss, djay, Nifty, scar, Snakes   |
|           20 |     1682 | 2024-03-26 | NRG              | L   | 0.775      | -            | -                | -                | -         |    -7.32 | danss, djay, Nifty, scar, Snakes   |
|           19 |     1687 | 2024-03-26 | NRG              | L   | 0.775      | -            | -                | -                | -         |    -7.76 | danss, djay, Nifty, scar, Snakes   |
|           18 |     2087 | 2024-03-06 | LAG              | L   | 0.642      | -            | -                | -                | -         |    -5.89 | danss, djay, Nifty, scar, Snakes   |
|           17 |     2088 | 2024-03-06 | LAG              | W   | 0.641      | 0.477        | 0.014 (0.004)    | 0.440 (0.135)    | 0 (0.000) |    14.68 | danss, djay, Nifty, scar, Snakes   |
|           16 |     2125 | 2024-03-05 | Mythic           | W   | 0.635      | 0.477        | 0.000 (0.000)    | 0.439 (0.133)    | 0 (0.000) |    12.32 | danss, djay, Nifty, scar, Snakes   |
|           15 |     2127 | 2024-03-05 | Mythic           | W   | 0.635      | 0.477        | 0.000 (0.000)    | 0.439 (0.133)    | 0 (0.000) |    12.98 | danss, djay, Nifty, scar, Snakes   |
|           14 |     2378 | 2024-02-22 | Liquid           | L   | 0.554      | -            | -                | -                | -         |    -0.07 | danss, djay, Nifty, scar, Snakes   |
|           13 |     2379 | 2024-02-22 | Take Flyte       | W   | 0.554      | 0.143        | 0.006 (0.000)    | 0.392 (0.031)    | 0 (0.000) |    11.13 | danss, djay, Nifty, scar, Snakes   |
|           12 |     2526 | 2024-02-16 | Rocket           | L   | 0.514      | -            | -                | -                | -         |   -10.64 | danss, djay, Nifty, scar, Snakes   |
|           11 |     3166 | 2024-01-18 | Wildcard         | L   | 0.320      | -            | -                | -                | -         |    -2.34 | danss, djay, Louie, Nifty, scar    |
|           10 |     3216 | 2024-01-17 | Party Astronauts | W   | 0.314      | 0.143        | 0.010 (0.000)    | 0.670 (0.030)    | 0 (0.000) |     7.60 | danss, djay, Louie, Nifty, scar    |
|            9 |     3269 | 2024-01-16 | huge sweaty      | L   | 0.307      | -            | -                | -                | -         |    -7.31 | danss, djay, Louie, Nifty, scar    |
|            8 |     3314 | 2024-01-15 | Carpe Diem       | W   | 0.301      | 0.143        | -                | 0.369 (0.016)    | 0 (0.000) |     4.11 | danss, djay, Louie, Nifty, scar    |
|            7 |     3612 | 2023-12-17 | Rocket           | W   | 0.109      | 0.143        | -                | 0.132 (0.002)    | 0 (0.000) |     1.00 | djay, Louie, Nifty, scar, stamina  |
|            6 |     3614 | 2023-12-17 | LAG              | W   | 0.108      | 0.143        | 0.014 (0.000)    | 0.440 (0.007)    | 0 (0.000) |     2.66 | djay, Louie, Nifty, scar, stamina  |
|            5 |     3647 | 2023-12-16 | Pantsu           | W   | 0.101      | 0.143        | 0.001 (0.000)    | -                | -         |     1.30 | djay, Louie, Nifty, scar, stamina  |
|            4 |     3675 | 2023-12-15 | Bad News Bears   | L   | 0.095      | -            | -                | -                | -         |    -2.25 | djay, Louie, Nifty, scar, stamina  |
|            3 |     3729 | 2023-12-10 | Revenge Nation   | L   | 0.062      | -            | -                | -                | -         |    -0.91 | djay, Louie, Nifty, scar, stamina  |
|            2 |     3745 | 2023-12-09 | Villainous       | W   | 0.055      | 0.367        | 0.000 (0.000)    | -                | -         |     0.50 | djay, Louie, Nifty, scar, stamina  |
|            1 |     3753 | 2023-12-09 | Elevate          | L   | 0.054      | -            | -                | -                | -         |    -0.49 | danss, djay, Nifty, scar, stamina  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($163.23)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
