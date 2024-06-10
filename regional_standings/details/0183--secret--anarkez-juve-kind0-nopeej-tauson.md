### Roster Details<br />
Team Name: Secret<br />
Roster: anarkez, Juve, Kind0, NOPEEJ, Tauson<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [183](../standings_global.md)<br />
Regional Rank: [114]( ../standings_europe.md)<br />
Final Rank Value:  571.6<br />
<br />
Final Rank Value (571.6) = Starting Rank Value (568.6) + Head To Head Adjustments (3.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.292[<sup>2</sup>](#table1)
- Opponent Network: 0.046[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.085<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 568.6
- 400 + ( ( 0.085 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 568.6


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
|           21 |      984 | 2024-05-14 | WOPA          | L   | 1.000      | -            | -                | -                | -         |   -18.41 | anarkez, Juve, Kind0, NOPEEJ, Tauson   |
|           20 |      994 | 2024-05-13 | LEON          | L   | 1.000      | -            | -                | -                | -         |   -18.36 | anarkez, Juve, Kind0, NOPEEJ, Tauson   |
|           19 |     1529 | 2024-04-19 | esmagaB       | L   | 0.854      | -            | -                | -                | -         |    -8.82 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           18 |     1588 | 2024-04-18 | Nemiga        | L   | 0.846      | -            | -                | -                | -         |    -0.80 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           17 |     1603 | 2024-04-18 | 500           | W   | 0.845      | 0.143        | 0.002 (0.000)    | 0.354 (0.043)    | 0 (0.000) |    21.05 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           16 |     1626 | 2024-04-17 | Illuminar     | L   | 0.840      | -            | -                | -                | -         |   -12.13 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           15 |     1675 | 2024-04-16 | Sampi         | L   | 0.831      | -            | -                | -                | -         |    -2.89 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           14 |     1691 | 2024-04-15 | PGE Turow     | W   | 0.825      | 0.371        | 0.002 (0.001)    | 0.048 (0.015)    | 0 (0.000) |    16.01 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           13 |     1763 | 2024-04-11 | ENCE Academy  | L   | 0.798      | -            | -                | -                | -         |    -5.75 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           12 |     1950 | 2024-04-05 | 9 Pandas      | W   | 0.759      | 0.384        | 0.114 (0.033)    | 0.758 (0.221)    | 0 (0.000) |    23.01 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           11 |     2469 | 2024-03-12 | Endpoint      | L   | 0.598      | -            | -                | -                | -         |    -2.68 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           10 |     2555 | 2024-03-08 | Metizport     | L   | 0.572      | -            | -                | -                | -         |    -1.37 | anarkez, innocent, Kind0, Maze, Tauson |
|            9 |     2584 | 2024-03-07 | ex-Preasy     | L   | 0.565      | -            | -                | -                | -         |    -1.78 | anarkez, innocent, Kind0, Maze, Tauson |
|            8 |     2665 | 2024-03-04 | Fraud5        | L   | 0.546      | -            | -                | -                | -         |    -6.14 | anarkez, innocent, Kind0, Maze, Tauson |
|            7 |     2701 | 2024-03-03 | Zero Tenacity | L   | 0.538      | -            | -                | -                | -         |    -1.06 | anarkez, innocent, Kind0, Maze, Tauson |
|            6 |     2721 | 2024-03-02 | Zero Tenacity | L   | 0.531      | -            | -                | -                | -         |    -1.06 | anarkez, innocent, Kind0, Maze, Tauson |
|            5 |     2763 | 2024-02-28 | Permitta      | W   | 0.512      | 0.143        | 0.022 (0.002)    | 0.972 (0.071)    | 0 (0.000) |    14.28 | anarkez, innocent, Kind0, Maze, Tauson |
|            4 |     2822 | 2024-02-25 | Entropiq      | L   | 0.492      | -            | -                | -                | -         |    -6.89 | anarkez, innocent, Kind0, Maze, Tauson |
|            3 |     3018 | 2024-02-17 | Sampi         | L   | 0.438      | -            | -                | -                | -         |    -1.60 | anarkez, innocent, Kind0, Maze, Tauson |
|            2 |     3171 | 2024-02-10 | 500           | W   | 0.392      | 0.358        | 0.002 (0.000)    | 0.354 (0.050)    | 0 (0.000) |     9.01 | anarkez, innocent, Kind0, Maze, Tauson |
|            1 |     3243 | 2024-02-04 | Alliance      | W   | 0.353      | 0.358        | 0.012 (0.001)    | 0.513 (0.065)    | 0 (0.000) |     9.41 | anarkez, innocent, Kind0, Maze, Tauson |

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
