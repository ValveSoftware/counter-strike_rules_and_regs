### Roster Details<br />
Team Name: Secret<br />
Roster: anarkez, Kind0, Maze, NOPEEJ, Tauson<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [168](../standings_global.md)<br />
Regional Rank: [108]( ../standings_europe.md)<br />
Final Rank Value:  630.6<br />
<br />
Final Rank Value (630.6) = Starting Rank Value (579.2) + Head To Head Adjustments (51.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.299[<sup>2</sup>](#table1)
- Opponent Network: 0.078[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.094<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 579.2
- 400 + ( ( 0.094 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 579.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |      378 | 2024-04-19 | esmagaB       | L   | 1.000      | -            | -                | -                | -         |   -10.51 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           18 |      437 | 2024-04-18 | Nemiga        | L   | 1.000      | -            | -                | -                | -         |    -1.08 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           17 |      452 | 2024-04-18 | 500           | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.578 (0.083)    | 0 (0.000) |    24.86 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           16 |      475 | 2024-04-17 | Illuminar     | L   | 1.000      | -            | -                | -                | -         |   -19.57 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           15 |      524 | 2024-04-16 | Sampi         | L   | 1.000      | -            | -                | -                | -         |    -3.80 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           14 |      540 | 2024-04-15 | PGE Turow     | W   | 1.000      | 0.371        | 0.011 (0.004)    | 0.081 (0.030)    | 0 (0.000) |    18.69 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           13 |      612 | 2024-04-11 | ENCE Academy  | L   | 1.000      | -            | -                | -                | -         |    -6.04 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           12 |      799 | 2024-04-05 | 9 Pandas      | W   | 0.992      | 0.384        | 0.081 (0.031)    | 0.676 (0.258)    | 0 (0.000) |    29.75 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           11 |     1318 | 2024-03-12 | Endpoint      | L   | 0.832      | -            | -                | -                | -         |    -4.55 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           10 |     1404 | 2024-03-08 | Metizport     | L   | 0.805      | -            | -                | -                | -         |    -1.81 | anarkez, innocent, Kind0, Maze, Tauson |
|            9 |     1433 | 2024-03-07 | ex-Preasy     | L   | 0.798      | -            | -                | -                | -         |    -1.60 | anarkez, innocent, Kind0, Maze, Tauson |
|            8 |     1514 | 2024-03-04 | K10           | L   | 0.779      | -            | -                | -                | -         |    -6.78 | anarkez, innocent, Kind0, Maze, Tauson |
|            7 |     1550 | 2024-03-03 | Zero Tenacity | L   | 0.771      | -            | -                | -                | -         |    -3.57 | anarkez, innocent, Kind0, Maze, Tauson |
|            6 |     1570 | 2024-03-02 | Zero Tenacity | L   | 0.764      | -            | -                | -                | -         |    -3.66 | anarkez, innocent, Kind0, Maze, Tauson |
|            5 |     1612 | 2024-02-28 | Permitta      | W   | 0.745      | 0.143        | 0.053 (0.006)    | 0.979 (0.104)    | 0 (0.000) |    20.45 | anarkez, innocent, Kind0, Maze, Tauson |
|            4 |     1671 | 2024-02-25 | Entropiq      | L   | 0.725      | -            | -                | -                | -         |    -7.13 | anarkez, innocent, Kind0, Maze, Tauson |
|            3 |     1867 | 2024-02-17 | Sampi         | L   | 0.672      | -            | -                | -                | -         |    -2.07 | anarkez, innocent, Kind0, Maze, Tauson |
|            2 |     2020 | 2024-02-10 | 500           | W   | 0.625      | 0.358        | 0.003 (0.001)    | 0.578 (0.130)    | 0 (0.000) |    14.75 | anarkez, innocent, Kind0, Maze, Tauson |
|            1 |     2092 | 2024-02-04 | Alliance      | W   | 0.586      | 0.358        | 0.016 (0.003)    | 0.815 (0.171)    | 0 (0.000) |    15.04 | anarkez, innocent, Kind0, Maze, Tauson |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
