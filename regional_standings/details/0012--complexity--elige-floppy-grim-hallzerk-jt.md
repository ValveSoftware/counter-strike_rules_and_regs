### Roster Details<br />
Team Name: Complexity<br />
Roster: EliGE, floppy, Grim, hallzerk, JT<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [12](../standings_global.md)<br />
Regional Rank: [2]( ../standings_americas.md)<br />
Final Rank Value:  1584.5<br />
<br />
Final Rank Value (1584.5) = Starting Rank Value (1560.1) + Head To Head Adjustments (24.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.631[<sup>1</sup>](#table2)
- Bounty Collected: 0.596[<sup>2</sup>](#table1)
- Opponent Network: 0.321[<sup>2</sup>](#table1)
- LAN Wins: 0.842[<sup>2</sup>](#table1)

The average of these factors is 0.598<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1560.1
- 400 + ( ( 0.598 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1560.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |       41 | 2024-05-27 | MOUZ              | L   | 1.000      | -            | -                | -                | -         |    -3.22 | EliGE, floppy, Grim, hallzerk, JT |
|           27 |       53 | 2024-05-27 | Liquid            | L   | 1.000      | -            | -                | -                | -         |   -13.75 | EliGE, floppy, Grim, hallzerk, JT |
|           26 |      544 | 2024-05-11 | MOUZ              | L   | 1.000      | -            | -                | -                | -         |    -3.58 | EliGE, floppy, Grim, hallzerk, JT |
|           25 |      598 | 2024-05-09 | Virtus.pro        | W   | 1.000      | 0.889        | 0.271 (0.241)    | 0.499 (0.444)    | 1 (1.000) |    18.10 | EliGE, floppy, Grim, hallzerk, JT |
|           24 |      665 | 2024-05-05 | Natus Vincere     | W   | 1.000      | 0.889        | 1.000 (0.889)    | 0.382 (0.340)    | 1 (1.000) |    26.63 | EliGE, floppy, Grim, hallzerk, JT |
|           23 |      731 | 2024-05-02 | HEROIC            | W   | 1.000      | 0.889        | 0.322 (0.286)    | 0.662 (0.589)    | 1 (1.000) |    19.83 | EliGE, floppy, Grim, hallzerk, JT |
|           22 |      780 | 2024-04-30 | PERA              | W   | 1.000      | 0.889        | 0.027 (0.024)    | 0.408 (0.363)    | 1 (1.000) |     0.64 | EliGE, floppy, Grim, hallzerk, JT |
|           21 |     1704 | 2024-03-24 | FaZe              | L   | 0.758      | -            | -                | -                | -         |    -2.16 | EliGE, floppy, Grim, hallzerk, JT |
|           20 |     1713 | 2024-03-23 | Vitality          | L   | 0.752      | -            | -                | -                | -         |    -4.00 | EliGE, floppy, Grim, hallzerk, JT |
|           19 |     1728 | 2024-03-22 | MOUZ              | L   | 0.745      | -            | -                | -                | -         |    -1.95 | EliGE, floppy, Grim, hallzerk, JT |
|           18 |     1746 | 2024-03-21 | HEROIC            | W   | 0.739      | 1.000        | 0.322 (0.238)    | 0.662 (0.490)    | 1 (0.739) |    16.85 | EliGE, floppy, Grim, hallzerk, JT |
|           17 |     1755 | 2024-03-21 | paiN              | W   | 0.738      | 1.000        | 0.464 (0.342)    | 0.829 (0.612)    | 1 (0.738) |    13.23 | EliGE, floppy, Grim, hallzerk, JT |
|           16 |     2068 | 2024-03-07 | OG                | L   | 0.646      | -            | -                | -                | -         |   -17.80 | EliGE, floppy, Grim, hallzerk, JT |
|           15 |     2160 | 2024-03-04 | Liquid            | W   | 0.627      | 0.143        | 0.493 (0.044)    | 0.854 (0.076)    | 1 (0.627) |    12.73 | EliGE, floppy, Grim, hallzerk, JT |
|           14 |     2175 | 2024-03-03 | FURIA             | L   | 0.620      | -            | -                | -                | -         |   -14.09 | EliGE, floppy, Grim, hallzerk, JT |
|           13 |     2214 | 2024-03-02 | BOSS              | W   | 0.612      | 0.143        | 0.016 (0.001)    | 0.477 (0.042)    | 1 (0.612) |     0.42 | EliGE, floppy, Grim, hallzerk, JT |
|           12 |     2233 | 2024-03-01 | Elevate           | W   | 0.606      | 0.143        | -                | 0.528 (0.046)    | 1 (0.606) |     0.45 | EliGE, floppy, Grim, hallzerk, JT |
|           11 |     2720 | 2024-02-05 | Falcons           | L   | 0.440      | -            | -                | -                | -         |    -8.29 | EliGE, floppy, Grim, hallzerk, JT |
|           10 |     2741 | 2024-02-04 | Spirit            | L   | 0.432      | -            | -                | -                | -         |    -1.63 | EliGE, floppy, Grim, hallzerk, JT |
|            9 |     2761 | 2024-02-03 | Apeks             | W   | 0.426      | 1.000        | 0.083 (0.035)    | 0.495 (0.211)    | 1 (0.426) |     1.64 | EliGE, floppy, Grim, hallzerk, JT |
|            8 |     2980 | 2024-01-23 | Ninjas in Pyjamas | L   | 0.352      | -            | -                | -                | -         |   -10.96 | EliGE, floppy, Grim, hallzerk, JT |
|            7 |     3008 | 2024-01-22 | Natus Vincere     | L   | 0.345      | -            | -                | -                | -         |    -1.56 | EliGE, floppy, Grim, hallzerk, JT |
|            6 |     3365 | 2024-01-13 | Party Astronauts  | W   | 0.288      | -            | -                | -                | -         |     0.22 | EliGE, floppy, Grim, hallzerk, JT |
|            5 |     3405 | 2024-01-12 | NRG               | W   | 0.282      | -            | -                | -                | -         |     0.15 | EliGE, floppy, Grim, hallzerk, JT |
|            4 |     3416 | 2024-01-12 | FLUFFY AIMERS     | W   | 0.281      | -            | -                | -                | -         |     0.04 | EliGE, floppy, Grim, hallzerk, JT |
|            3 |     3659 | 2023-12-16 | TheMongolz        | L   | 0.099      | -            | -                | -                | -         |    -1.94 | EliGE, floppy, Grim, hallzerk, JT |
|            2 |     3674 | 2023-12-15 | GamerLegion       | W   | 0.095      | 0.500        | 0.072 (0.003)    | -                | -         |     0.26 | EliGE, floppy, Grim, hallzerk, JT |
|            1 |     3684 | 2023-12-15 | TheMongolz        | L   | 0.093      | -            | -                | -                | -         |    -1.82 | EliGE, floppy, Grim, hallzerk, JT |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($78,369.85)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.26) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-29 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-05-12 |      1.000 | $45,000.00     | $45,000.00      |
| 2024-03-31 |      0.806 | $20,000.00     | $16,122.80      |
| 2024-03-10 |      0.666 | $5,000.00      | $3,332.47       |
| 2024-02-11 |      0.479 | $16,000.00     | $7,664.76       |
| 2024-01-28 |      0.386 | $5,000.00      | $1,929.09       |
| 2023-12-17 |      0.107 | $3,000.00      | $320.73         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
