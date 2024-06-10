### Roster Details<br />
Team Name: MIGHT<br />
Roster: djay, Fr3nk1e, Nifty, scar, Snakes<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [189](../standings_global.md)<br />
Regional Rank: [50]( ../standings_americas.md)<br />
Final Rank Value:  552.9<br />
<br />
Final Rank Value (552.9) = Starting Rank Value (562.3) + Head To Head Adjustments (-9.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.264[<sup>2</sup>](#table1)
- Opponent Network: 0.061[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.081<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 562.3
- 400 + ( ( 0.081 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 562.3


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
|           37 |      635 | 2024-05-22 | Carpe Diem       | L   | 1.000      | -            | -                | -                | -         |    -6.23 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           36 |      642 | 2024-05-22 | Carpe Diem       | L   | 1.000      | -            | -                | -                | -         |    -6.60 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           35 |      719 | 2024-05-20 | One More         | L   | 1.000      | -            | -                | -                | -         |   -11.35 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           34 |      724 | 2024-05-20 | One More         | W   | 1.000      | 0.477        | 0.003 (0.001)    | 0.177 (0.084)    | 0 (0.000) |    20.54 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           33 |      884 | 2024-05-15 | FLUFFY AIMERS    | L   | 1.000      | -            | -                | -                | -         |    -6.37 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           32 |      890 | 2024-05-15 | FLUFFY AIMERS    | L   | 1.000      | -            | -                | -                | -         |    -6.75 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           31 |      945 | 2024-05-14 | BOSS             | L   | 1.000      | -            | -                | -                | -         |    -5.47 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           30 |      951 | 2024-05-14 | BOSS             | L   | 1.000      | -            | -                | -                | -         |    -5.76 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           29 |     1086 | 2024-05-09 | Wildcard         | L   | 0.988      | -            | -                | -                | -         |    -2.84 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           28 |     1090 | 2024-05-09 | Wildcard         | L   | 0.988      | -            | -                | -                | -         |    -2.92 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           27 |     1104 | 2024-05-08 | Elevate          | L   | 0.982      | -            | -                | -                | -         |    -3.83 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           26 |     1106 | 2024-05-08 | Elevate          | L   | 0.982      | -            | -                | -                | -         |    -3.98 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           25 |     1769 | 2024-04-10 | Take Flyte       | W   | 0.795      | 0.477        | 0.005 (0.002)    | 0.348 (0.132)    | 0 (0.000) |    19.23 | danss, djay, Nifty, scar, Snakes   |
|           24 |     1776 | 2024-04-10 | Take Flyte       | L   | 0.795      | -            | -                | -                | -         |    -5.62 | danss, djay, Nifty, scar, Snakes   |
|           23 |     1824 | 2024-04-09 | Nouns            | L   | 0.789      | -            | -                | -                | -         |    -2.24 | danss, djay, Louie, scar, Snakes   |
|           22 |     1827 | 2024-04-09 | Nouns            | L   | 0.789      | -            | -                | -                | -         |    -2.29 | danss, djay, Nifty, scar, Snakes   |
|           21 |     1954 | 2024-04-04 | Party Astronauts | L   | 0.755      | -            | -                | -                | -         |    -2.27 | danss, djay, Nifty, scar, Snakes   |
|           20 |     1962 | 2024-04-04 | Party Astronauts | L   | 0.755      | -            | -                | -                | -         |    -2.32 | danss, djay, Nifty, scar, Snakes   |
|           19 |     2131 | 2024-03-27 | Limitless        | L   | 0.702      | -            | -                | -                | -         |    -8.29 | danss, djay, Nifty, scar, Snakes   |
|           18 |     2138 | 2024-03-27 | Limitless        | L   | 0.702      | -            | -                | -                | -         |    -8.80 | danss, djay, Nifty, scar, Snakes   |
|           17 |     2182 | 2024-03-26 | NRG              | L   | 0.696      | -            | -                | -                | -         |    -3.64 | danss, djay, Nifty, scar, Snakes   |
|           16 |     2187 | 2024-03-26 | NRG              | L   | 0.695      | -            | -                | -                | -         |    -3.77 | danss, djay, Nifty, scar, Snakes   |
|           15 |     2587 | 2024-03-06 | LAG              | L   | 0.562      | -            | -                | -                | -         |    -3.04 | danss, djay, Nifty, scar, Snakes   |
|           14 |     2588 | 2024-03-06 | LAG              | W   | 0.562      | 0.477        | 0.021 (0.006)    | 0.484 (0.130)    | 0 (0.000) |    14.94 | danss, djay, Nifty, scar, Snakes   |
|           13 |     2625 | 2024-03-05 | Mythic           | W   | 0.556      | 0.477        | 0.010 (0.003)    | 0.391 (0.104)    | 0 (0.000) |    14.04 | danss, djay, Nifty, scar, Snakes   |
|           12 |     2627 | 2024-03-05 | Mythic           | W   | 0.555      | 0.477        | 0.010 (0.003)    | 0.391 (0.104)    | 0 (0.000) |    14.46 | danss, djay, Nifty, scar, Snakes   |
|           11 |     2878 | 2024-02-22 | Liquid           | L   | 0.475      | -            | -                | -                | -         |    -0.03 | danss, djay, Nifty, scar, Snakes   |
|           10 |     2879 | 2024-02-22 | Take Flyte       | W   | 0.475      | 0.143        | 0.005 (0.000)    | 0.348 (0.024)    | 0 (0.000) |    11.54 | danss, djay, Nifty, scar, Snakes   |
|            9 |     3026 | 2024-02-16 | Rocket           | L   | 0.435      | -            | -                | -                | -         |    -7.09 | danss, djay, Nifty, scar, Snakes   |
|            8 |     3666 | 2024-01-18 | Wildcard         | L   | 0.241      | -            | -                | -                | -         |    -0.73 | danss, djay, Louie, Nifty, scar    |
|            7 |     3716 | 2024-01-17 | Party Astronauts | W   | 0.235      | 0.143        | 0.048 (0.002)    | 0.677 (0.023)    | 0 (0.000) |     6.73 | danss, djay, Louie, Nifty, scar    |
|            6 |     3769 | 2024-01-16 | huge sweaty      | L   | 0.228      | -            | -                | -                | -         |    -5.16 | danss, djay, Louie, Nifty, scar    |
|            5 |     3814 | 2024-01-15 | Carpe Diem       | W   | 0.222      | 0.143        | 0.007 (0.000)    | 0.321 (0.010)    | 0 (0.000) |     5.43 | danss, djay, Louie, Nifty, scar    |
|            4 |     4112 | 2023-12-17 | Rocket           | W   | 0.030      | 0.143        | 0.000 (0.000)    | 0.093 (0.000)    | 0 (0.000) |     0.41 | djay, Louie, Nifty, scar, stamina  |
|            3 |     4114 | 2023-12-17 | LAG              | W   | 0.029      | 0.143        | 0.021 (0.000)    | 0.484 (0.002)    | 0 (0.000) |     0.80 | djay, Louie, Nifty, scar, stamina  |
|            2 |     4147 | 2023-12-16 | Pantsu           | W   | 0.022      | -            | -                | -                | -         |     0.20 | djay, Louie, Nifty, scar, stamina  |
|            1 |     4175 | 2023-12-15 | Bad News Bears   | L   | 0.015      | -            | -                | -                | -         |    -0.34 | djay, Louie, Nifty, scar, stamina  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
