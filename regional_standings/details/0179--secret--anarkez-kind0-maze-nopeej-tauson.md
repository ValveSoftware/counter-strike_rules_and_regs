### Roster Details<br />
Team Name: Secret<br />
Roster: anarkez, Kind0, Maze, NOPEEJ, Tauson<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [179](../standings_global.md)<br />
Regional Rank: [116]( ../standings_europe.md)<br />
Final Rank Value:  619.1<br />
<br />
Final Rank Value (619.1) = Starting Rank Value (586.3) + Head To Head Adjustments (32.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.299[<sup>2</sup>](#table1)
- Opponent Network: 0.086[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.096<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 586.3
- 400 + ( ( 0.096 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 586.3


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
|           19 |       82 | 2024-04-19 | esmagaB       | L   | 1.000      | -            | -                | -                | -         |   -10.21 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           18 |      141 | 2024-04-18 | Nemiga        | L   | 1.000      | -            | -                | -                | -         |    -3.76 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           17 |      156 | 2024-04-18 | 500           | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.622 (0.089)    | 0 (0.000) |    22.26 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           16 |      179 | 2024-04-17 | Illuminar     | L   | 1.000      | -            | -                | -                | -         |   -20.54 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           15 |      228 | 2024-04-16 | Sampi         | L   | 1.000      | -            | -                | -                | -         |    -5.10 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           14 |      244 | 2024-04-15 | PGE Turow     | W   | 1.000      | 0.371        | 0.014 (0.005)    | 0.108 (0.040)    | 0 (0.000) |    18.45 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           13 |      316 | 2024-04-11 | ENCE Academy  | L   | 1.000      | -            | -                | -                | -         |    -6.34 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           12 |      503 | 2024-04-05 | 9 Pandas      | W   | 1.000      | 0.384        | 0.083 (0.032)    | 0.656 (0.252)    | 0 (0.000) |    29.57 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           11 |     1022 | 2024-03-12 | Endpoint      | L   | 0.925      | -            | -                | -                | -         |    -6.79 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           10 |     1108 | 2024-03-08 | Metizport     | L   | 0.899      | -            | -                | -                | -         |    -2.36 | anarkez, innocent, Kind0, Maze, Tauson |
|            9 |     1137 | 2024-03-07 | Preasy        | L   | 0.891      | -            | -                | -                | -         |    -1.92 | anarkez, innocent, Kind0, Maze, Tauson |
|            8 |     1218 | 2024-03-04 | K10           | L   | 0.872      | -            | -                | -                | -         |    -6.85 | anarkez, innocent, Kind0, Maze, Tauson |
|            7 |     1254 | 2024-03-03 | Zero Tenacity | L   | 0.864      | -            | -                | -                | -         |    -6.91 | anarkez, innocent, Kind0, Maze, Tauson |
|            6 |     1274 | 2024-03-02 | Zero Tenacity | L   | 0.858      | -            | -                | -                | -         |    -7.27 | anarkez, innocent, Kind0, Maze, Tauson |
|            5 |     1316 | 2024-02-28 | Permitta      | W   | 0.839      | 0.143        | 0.031 (0.004)    | 0.970 (0.116)    | 0 (0.000) |    21.57 | anarkez, innocent, Kind0, Maze, Tauson |
|            4 |     1375 | 2024-02-25 | Entropiq      | L   | 0.819      | -            | -                | -                | -         |    -8.64 | anarkez, innocent, Kind0, Maze, Tauson |
|            3 |     1571 | 2024-02-17 | Sampi         | L   | 0.765      | -            | -                | -                | -         |    -2.96 | anarkez, innocent, Kind0, Maze, Tauson |
|            2 |     1724 | 2024-02-10 | 500           | W   | 0.718      | 0.358        | 0.000 (0.000)    | 0.622 (0.160)    | 0 (0.000) |    13.41 | anarkez, innocent, Kind0, Maze, Tauson |
|            1 |     1796 | 2024-02-04 | Alliance      | W   | 0.679      | 0.358        | 0.020 (0.005)    | 0.855 (0.208)    | 0 (0.000) |    17.22 | anarkez, innocent, Kind0, Maze, Tauson |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
