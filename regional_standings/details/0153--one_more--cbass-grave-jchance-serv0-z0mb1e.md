### Roster Details<br />
Team Name: One More<br />
Roster: cbass, Grave, jchancE, serv0, z0mb1e<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [153](../standings_global.md)<br />
Regional Rank: [37]( ../standings_americas.md)<br />
Final Rank Value:  644.4<br />
<br />
Final Rank Value (644.4) = Starting Rank Value (722.9) + Head To Head Adjustments (-78.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.299[<sup>1</sup>](#table2)
- Bounty Collected: 0.284[<sup>2</sup>](#table1)
- Opponent Network: 0.083[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.166<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 722.9
- 400 + ( ( 0.166 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 722.9


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
|           32 |      132 | 2024-05-22 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |    -4.44 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           31 |      136 | 2024-05-22 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |    -4.64 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           30 |      182 | 2024-05-21 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -5.46 | cbass, Champ, jchancE, serv0, z0mb1e        |
|           29 |      186 | 2024-05-21 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -5.74 | cbass, Champ, jchancE, serv0, z0mb1e        |
|           28 |      219 | 2024-05-20 | MIGHT            | W   | 1.000      | 0.477        | 0.001 (0.000)    | 0.167 (0.080)    | 0 (0.000) |    13.84 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           27 |      224 | 2024-05-20 | MIGHT            | L   | 1.000      | -            | -                | -                | -         |   -17.84 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           26 |      348 | 2024-05-16 | Carpe Diem       | L   | 1.000      | -            | -                | -                | -         |   -14.21 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           25 |      349 | 2024-05-16 | Carpe Diem       | L   | 1.000      | -            | -                | -                | -         |   -15.52 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           24 |      389 | 2024-05-15 | M80              | L   | 1.000      | -            | -                | -                | -         |    -1.51 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           23 |      395 | 2024-05-15 | M80              | L   | 1.000      | -            | -                | -                | -         |    -1.53 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           22 |      441 | 2024-05-14 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -6.67 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           21 |      447 | 2024-05-14 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -7.08 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           20 |      926 | 2024-04-23 | Nouns            | W   | 0.961      | 0.477        | 0.030 (0.014)    | 0.601 (0.275)    | 0 (0.000) |    24.58 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           19 |      928 | 2024-04-23 | Nouns            | L   | 0.961      | -            | -                | -                | -         |    -5.26 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           18 |     1266 | 2024-04-10 | FLUFFY AIMERS    | W   | 0.875      | 0.477        | 0.018 (0.007)    | 0.315 (0.132)    | 0 (0.000) |    18.16 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           17 |     1271 | 2024-04-10 | FLUFFY AIMERS    | L   | 0.874      | -            | -                | -                | -         |    -9.20 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           16 |     1323 | 2024-04-09 | Party Astronauts | L   | 0.868      | -            | -                | -                | -         |    -5.64 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           15 |     1330 | 2024-04-09 | Party Astronauts | L   | 0.868      | -            | -                | -                | -         |    -5.93 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           14 |     1455 | 2024-04-04 | Limitless        | W   | 0.834      | 0.477        | 0.001 (0.001)    | 0.168 (0.067)    | 0 (0.000) |    12.35 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           13 |     1460 | 2024-04-04 | Limitless        | L   | 0.834      | -            | -                | -                | -         |   -14.16 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           12 |     1632 | 2024-03-27 | BOSS             | L   | 0.782      | -            | -                | -                | -         |    -9.01 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           11 |     1636 | 2024-03-27 | BOSS             | W   | 0.781      | 0.477        | 0.016 (0.006)    | 0.477 (0.178)    | 0 (0.000) |    16.00 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           10 |     1875 | 2024-03-14 | Mythic           | L   | 0.695      | -            | -                | -                | -         |    -8.37 | cbass, Grave, jchancE, serv0, z0mb1e        |
|            9 |     1879 | 2024-03-14 | Mythic           | L   | 0.694      | -            | -                | -                | -         |    -8.88 | cbass, Grave, jchancE, serv0, z0mb1e        |
|            8 |     2124 | 2024-03-05 | LAG              | L   | 0.635      | -            | -                | -                | -         |    -5.64 | cbass, Grave, jchancE, serv0, z0mb1e        |
|            7 |     2126 | 2024-03-05 | LAG              | L   | 0.635      | -            | -                | -                | -         |    -5.90 | cbass, Grave, jchancE, serv0, z0mb1e        |
|            6 |     2381 | 2024-02-22 | Party Astronauts | L   | 0.554      | -            | -                | -                | -         |    -5.20 | cbass, Grave, jchancE, serv0, z0mb1e        |
|            5 |     2622 | 2024-02-13 | Take Flyte       | W   | 0.495      | 0.477        | 0.006 (0.001)    | 0.392 (0.092)    | 0 (0.000) |     9.06 | cbass, Grave, jchancE, serv0, z0mb1e        |
|            4 |     2625 | 2024-02-13 | Take Flyte       | L   | 0.495      | -            | -                | -                | -         |    -6.64 | cbass, Grave, jchancE, serv0, z0mb1e        |
|            3 |     3700 | 2023-12-13 | Revenge Nation   | W   | 0.082      | 0.367        | 0.019 (0.001)    | 0.067 (0.002)    | 0 (0.000) |     1.18 | HorizoN, NIGHT666LADE, Rulik, S0ph3R, TABEN |
|            2 |     3773 | 2023-12-08 | Pantsu           | W   | 0.048      | 0.367        | 0.001 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     0.52 | cbass, Grave, jchancE, serv0, z0mb1e        |
|            1 |     3794 | 2023-12-07 | Villainous       | W   | 0.042      | 0.367        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.30 | cbass, Grave, jchancE, serv0, z0mb1e        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,371.31)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-22 |      1.000 | $800.00        | $800.00         |
| 2023-12-13 |      0.082 | $7,000.00      | $571.31         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
