### Roster Details<br />
Team Name: One More<br />
Roster: cbass, Grave, jchancE, serv0, z0mb1e<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [141](../standings_global.md)<br />
Regional Rank: [35]( ../standings_americas.md)<br />
Final Rank Value:  720.0<br />
<br />
Final Rank Value (720.0) = Starting Rank Value (737.5) + Head To Head Adjustments (-17.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.334[<sup>1</sup>](#table2)
- Bounty Collected: 0.295[<sup>2</sup>](#table1)
- Opponent Network: 0.079[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.177<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 737.5
- 400 + ( ( 0.177 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 737.5


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
|           20 |      275 | 2024-04-23 | Nouns            | W   | 1.000      | 0.477        | 0.000 (0.000)    | 0.609 (0.290)    | 0 (0.000) |    23.56 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           19 |      277 | 2024-04-23 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -7.43 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           18 |      615 | 2024-04-10 | FLUFFY AIMERS    | W   | 1.000      | 0.477        | 0.027 (0.013)    | 0.207 (0.098)    | 0 (0.000) |    21.59 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           17 |      620 | 2024-04-10 | FLUFFY AIMERS    | L   | 1.000      | -            | -                | -                | -         |    -9.47 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           16 |      672 | 2024-04-09 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -6.38 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           15 |      679 | 2024-04-09 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -6.77 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           14 |      804 | 2024-04-04 | Limitless        | W   | 0.989      | 0.477        | 0.001 (0.001)    | 0.173 (0.081)    | 0 (0.000) |    14.01 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           13 |      809 | 2024-04-04 | Limitless        | L   | 0.988      | -            | -                | -                | -         |   -17.29 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           12 |      981 | 2024-03-27 | BOSS             | L   | 0.936      | -            | -                | -                | -         |   -10.22 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           11 |      985 | 2024-03-27 | BOSS             | W   | 0.935      | 0.477        | 0.049 (0.022)    | 0.507 (0.226)    | 0 (0.000) |    19.67 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           10 |     1224 | 2024-03-14 | Mythic           | L   | 0.849      | -            | -                | -                | -         |   -11.35 | cbass, Grave, jchancE, serv0, z0mb1e        |
|            9 |     1228 | 2024-03-14 | Mythic           | L   | 0.849      | -            | -                | -                | -         |   -12.22 | cbass, Grave, jchancE, serv0, z0mb1e        |
|            8 |     1473 | 2024-03-05 | LAG              | L   | 0.789      | -            | -                | -                | -         |    -6.61 | cbass, Grave, jchancE, serv0, z0mb1e        |
|            7 |     1475 | 2024-03-05 | LAG              | L   | 0.789      | -            | -                | -                | -         |    -6.98 | cbass, Grave, jchancE, serv0, z0mb1e        |
|            6 |     1730 | 2024-02-22 | Party Astronauts | L   | 0.708      | -            | -                | -                | -         |    -7.65 | cbass, Grave, jchancE, serv0, z0mb1e        |
|            5 |     1971 | 2024-02-13 | Take Flyte       | W   | 0.649      | 0.477        | 0.004 (0.001)    | 0.282 (0.087)    | 0 (0.000) |     9.59 | cbass, Grave, jchancE, serv0, z0mb1e        |
|            4 |     1974 | 2024-02-13 | Take Flyte       | L   | 0.649      | -            | -                | -                | -         |   -11.09 | cbass, Grave, jchancE, serv0, z0mb1e        |
|            3 |     3049 | 2023-12-13 | Revenge Nation   | W   | 0.236      | 0.367        | 0.045 (0.004)    | 0.106 (0.009)    | 0 (0.000) |     3.73 | HorizoN, NIGHT666LADE, Rulik, S0ph3R, TABEN |
|            2 |     3122 | 2023-12-08 | Pantsu           | W   | 0.202      | 0.367        | 0.004 (0.000)    | 0.009 (0.001)    | 0 (0.000) |     2.42 | cbass, Grave, jchancE, serv0, z0mb1e        |
|            1 |     3143 | 2023-12-07 | Villainous       | W   | 0.196      | 0.367        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.45 | cbass, Grave, jchancE, serv0, z0mb1e        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,649.96)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
