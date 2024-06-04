### Roster Details<br />
Team Name: Secret<br />
Roster: anarkez, Juve, Kind0, NOPEEJ, Tauson<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [182](../standings_global.md)<br />
Regional Rank: [116]( ../standings_europe.md)<br />
Final Rank Value:  569.9<br />
<br />
Final Rank Value (569.9) = Starting Rank Value (570.9) + Head To Head Adjustments (-1.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.293[<sup>2</sup>](#table1)
- Opponent Network: 0.059[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.088<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 570.9
- 400 + ( ( 0.088 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 570.9


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
|           21 |      484 | 2024-05-14 | WOPA          | L   | 1.000      | -            | -                | -                | -         |   -16.70 | anarkez, Juve, Kind0, NOPEEJ, Tauson   |
|           20 |      494 | 2024-05-13 | LEON          | L   | 1.000      | -            | -                | -                | -         |   -20.10 | anarkez, Juve, Kind0, NOPEEJ, Tauson   |
|           19 |     1029 | 2024-04-19 | esmagaB       | L   | 0.933      | -            | -                | -                | -         |    -9.73 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           18 |     1088 | 2024-04-18 | Nemiga        | L   | 0.925      | -            | -                | -                | -         |    -1.08 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           17 |     1103 | 2024-04-18 | 500           | W   | 0.924      | 0.143        | 0.002 (0.000)    | 0.436 (0.058)    | 0 (0.000) |    22.55 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           16 |     1126 | 2024-04-17 | Illuminar     | L   | 0.919      | -            | -                | -                | -         |   -17.57 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           15 |     1175 | 2024-04-16 | Sampi         | L   | 0.910      | -            | -                | -                | -         |    -3.91 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           14 |     1191 | 2024-04-15 | PGE Turow     | W   | 0.904      | 0.371        | 0.003 (0.001)    | 0.058 (0.019)    | 0 (0.000) |    16.72 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           13 |     1263 | 2024-04-11 | ENCE Academy  | L   | 0.877      | -            | -                | -                | -         |    -6.40 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           12 |     1450 | 2024-04-05 | 9 Pandas      | W   | 0.838      | 0.384        | 0.108 (0.035)    | 0.798 (0.257)    | 0 (0.000) |    25.29 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           11 |     1969 | 2024-03-12 | Endpoint      | L   | 0.678      | -            | -                | -                | -         |    -3.54 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           10 |     2055 | 2024-03-08 | Metizport     | L   | 0.651      | -            | -                | -                | -         |    -1.72 | anarkez, innocent, Kind0, Maze, Tauson |
|            9 |     2084 | 2024-03-07 | ex-Preasy     | L   | 0.644      | -            | -                | -                | -         |    -2.04 | anarkez, innocent, Kind0, Maze, Tauson |
|            8 |     2165 | 2024-03-04 | K10           | L   | 0.625      | -            | -                | -                | -         |    -6.73 | anarkez, innocent, Kind0, Maze, Tauson |
|            7 |     2201 | 2024-03-03 | Zero Tenacity | L   | 0.617      | -            | -                | -                | -         |    -1.65 | anarkez, innocent, Kind0, Maze, Tauson |
|            6 |     2221 | 2024-03-02 | Zero Tenacity | L   | 0.610      | -            | -                | -                | -         |    -1.66 | anarkez, innocent, Kind0, Maze, Tauson |
|            5 |     2263 | 2024-02-28 | Permitta      | W   | 0.591      | 0.143        | 0.025 (0.002)    | 1.000 (0.084)    | 0 (0.000) |    15.96 | anarkez, innocent, Kind0, Maze, Tauson |
|            4 |     2322 | 2024-02-25 | Entropiq      | L   | 0.571      | -            | -                | -                | -         |    -7.99 | anarkez, innocent, Kind0, Maze, Tauson |
|            3 |     2518 | 2024-02-17 | Sampi         | L   | 0.518      | -            | -                | -                | -         |    -2.12 | anarkez, innocent, Kind0, Maze, Tauson |
|            2 |     2671 | 2024-02-10 | 500           | W   | 0.471      | 0.358        | 0.002 (0.000)    | 0.436 (0.074)    | 0 (0.000) |    10.74 | anarkez, innocent, Kind0, Maze, Tauson |
|            1 |     2743 | 2024-02-04 | Alliance      | W   | 0.432      | 0.358        | 0.004 (0.001)    | 0.617 (0.095)    | 0 (0.000) |    10.73 | anarkez, innocent, Kind0, Maze, Tauson |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
