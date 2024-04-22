### Roster Details<br />
Team Name: One More<br />
Roster: cbass, Grave, jchancE, serv0, z0mb1e<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [149](../standings_global.md)<br />
Regional Rank: [35]( ../standings_americas.md)<br />
Final Rank Value:  698.9<br />
<br />
Final Rank Value (698.9) = Starting Rank Value (733.8) + Head To Head Adjustments (-34.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.343[<sup>1</sup>](#table2)
- Bounty Collected: 0.290[<sup>2</sup>](#table1)
- Opponent Network: 0.059[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.173<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 733.8
- 400 + ( ( 0.173 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 733.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |      319 | 2024-04-10 | FLUFFY AIMERS    | W   | 1.000      | 0.477        | 0.023 (0.011)    | 0.225 (0.107)    | 0 (0.000) |    21.89 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           17 |      324 | 2024-04-10 | FLUFFY AIMERS    | L   | 1.000      | -            | -                | -                | -         |    -9.16 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           16 |      376 | 2024-04-09 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -6.74 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           15 |      383 | 2024-04-09 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -7.16 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           14 |      508 | 2024-04-04 | Limitless        | W   | 1.000      | 0.477        | 0.001 (0.001)    | 0.201 (0.096)    | 0 (0.000) |    14.69 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           13 |      513 | 2024-04-04 | Limitless        | L   | 1.000      | -            | -                | -                | -         |   -16.91 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           12 |      685 | 2024-03-27 | BOSS             | L   | 1.000      | -            | -                | -                | -         |   -11.69 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           11 |      689 | 2024-03-27 | BOSS             | W   | 1.000      | 0.477        | 0.034 (0.016)    | 0.530 (0.253)    | 0 (0.000) |    20.16 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           10 |      928 | 2024-03-14 | Mythic           | L   | 0.942      | -            | -                | -                | -         |   -12.60 | cbass, Grave, jchancE, serv0, z0mb1e        |
|            9 |      932 | 2024-03-14 | Mythic           | L   | 0.942      | -            | -                | -                | -         |   -13.68 | cbass, Grave, jchancE, serv0, z0mb1e        |
|            8 |     1177 | 2024-03-05 | LAG              | L   | 0.882      | -            | -                | -                | -         |    -6.87 | cbass, Grave, jchancE, serv0, z0mb1e        |
|            7 |     1179 | 2024-03-05 | LAG              | L   | 0.882      | -            | -                | -                | -         |    -7.29 | cbass, Grave, jchancE, serv0, z0mb1e        |
|            6 |     1434 | 2024-02-22 | Party Astronauts | L   | 0.801      | -            | -                | -                | -         |   -10.03 | cbass, Grave, jchancE, serv0, z0mb1e        |
|            5 |     1675 | 2024-02-13 | Take Flyte       | W   | 0.742      | 0.477        | 0.005 (0.002)    | 0.318 (0.113)    | 0 (0.000) |    11.41 | cbass, Grave, jchancE, serv0, z0mb1e        |
|            4 |     1678 | 2024-02-13 | Take Flyte       | L   | 0.742      | -            | -                | -                | -         |   -12.19 | cbass, Grave, jchancE, serv0, z0mb1e        |
|            3 |     2753 | 2023-12-13 | Revenge Nation   | W   | 0.329      | 0.367        | 0.044 (0.005)    | 0.133 (0.016)    | 0 (0.000) |     5.39 | HorizoN, NIGHT666LADE, Rulik, S0ph3R, TABEN |
|            2 |     2826 | 2023-12-08 | Pantsu           | W   | 0.296      | 0.367        | 0.005 (0.001)    | 0.013 (0.001)    | 0 (0.000) |     3.74 | cbass, Grave, jchancE, serv0, z0mb1e        |
|            1 |     2847 | 2023-12-07 | Villainous       | W   | 0.289      | 0.367        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.21 | cbass, Grave, jchancE, serv0, z0mb1e        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,303.10)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
