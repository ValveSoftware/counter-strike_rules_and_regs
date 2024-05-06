### Roster Details<br />
Team Name: Astralis<br />
Roster: br0, device, jabbi, Staehr, stavn<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [10](../standings_global.md)<br />
Regional Rank: [9]( ../standings_europe.md)<br />
Final Rank Value:  1617.4<br />
<br />
Final Rank Value (1617.4) = Starting Rank Value (1573.7) + Head To Head Adjustments (43.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.568[<sup>1</sup>](#table2)
- Bounty Collected: 0.643[<sup>2</sup>](#table1)
- Opponent Network: 0.311[<sup>2</sup>](#table1)
- LAN Wins: 0.943[<sup>2</sup>](#table1)

The average of these factors is 0.616<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1573.7
- 400 + ( ( 0.616 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1573.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |      191 | 2024-04-27 | 3DMAX             | W   | 1.000      | 0.889        | 0.055 (0.049)    | 0.810 (0.720)    | 1 (1.000) |     3.02 | br0, device, jabbi, Staehr, stavn    |
|           26 |      261 | 2024-04-24 | FaZe              | W   | 1.000      | 0.889        | 1.000 (0.889)    | 0.712 (0.633)    | 1 (1.000) |    27.11 | br0, device, jabbi, Staehr, stavn    |
|           25 |      282 | 2024-04-23 | Eternal Fire      | W   | 1.000      | 0.889        | 0.397 (0.353)    | 0.579 (0.515)    | 1 (1.000) |    21.21 | br0, device, jabbi, Staehr, stavn    |
|           24 |      568 | 2024-04-13 | FaZe              | L   | 1.000      | -            | -                | -                | -         |    -3.85 | br0, device, jabbi, Staehr, stavn    |
|           23 |      665 | 2024-04-10 | Virtus.pro        | W   | 1.000      | 0.624        | 0.438 (0.273)    | 0.520 (0.325)    | 1 (1.000) |    22.41 | br0, device, jabbi, Staehr, stavn    |
|           22 |      717 | 2024-04-09 | FaZe              | W   | 1.000      | 0.624        | 1.000 (0.624)    | 0.712 (0.444)    | 1 (1.000) |    28.34 | br0, device, jabbi, Staehr, stavn    |
|           21 |      749 | 2024-04-08 | Steel Helmet      | W   | 1.000      | 0.624        | 0.025 (0.015)    | 0.104 (0.065)    | 1 (1.000) |     0.27 | br0, device, jabbi, Staehr, stavn    |
|           20 |     1719 | 2024-02-23 | 9 Pandas          | L   | 0.711      | -            | -                | -                | -         |   -20.15 | blameF, device, jabbi, Staehr, stavn |
|           19 |     1738 | 2024-02-22 | ENCE              | L   | 0.705      | -            | -                | -                | -         |   -12.63 | blameF, device, jabbi, Staehr, stavn |
|           18 |     1765 | 2024-02-21 | Monte             | W   | 0.698      | 0.143        | 0.188 (0.019)    | -                | 1 (0.698) |     6.39 | blameF, device, jabbi, Staehr, stavn |
|           17 |     1793 | 2024-02-20 | HEROIC            | L   | 0.691      | -            | -                | -                | -         |    -8.66 | blameF, device, jabbi, Staehr, stavn |
|           16 |     1806 | 2024-02-19 | Spirit            | L   | 0.687      | -            | -                | -                | -         |    -3.73 | blameF, device, jabbi, Staehr, stavn |
|           15 |     1816 | 2024-02-19 | Nexus             | W   | 0.685      | 0.143        | -                | 0.605 (0.059)    | 1 (0.685) |     0.55 | blameF, device, jabbi, Staehr, stavn |
|           14 |     2174 | 2024-02-01 | ENCE              | L   | 0.567      | -            | -                | -                | -         |   -11.67 | blameF, device, jabbi, Staehr, stavn |
|           13 |     2203 | 2024-01-31 | HEROIC            | L   | 0.559      | -            | -                | -                | -         |    -8.11 | blameF, device, jabbi, Staehr, stavn |
|           12 |     2240 | 2024-01-28 | BIG               | W   | 0.539      | 0.581        | 0.454 (0.142)    | 0.510 (0.160)    | 1 (0.539) |     4.87 | blameF, device, jabbi, Staehr, stavn |
|           11 |     2256 | 2024-01-27 | Vitality          | L   | 0.532      | -            | -                | -                | -         |    -2.56 | blameF, device, jabbi, Staehr, stavn |
|           10 |     2322 | 2024-01-23 | Vitality          | W   | 0.507      | 0.581        | 1.000 (0.294)    | 0.442 (0.130)    | 1 (0.507) |    13.73 | blameF, device, jabbi, Staehr, stavn |
|            9 |     2349 | 2024-01-22 | Falcons           | W   | 0.500      | 0.581        | 0.417 (0.121)    | 0.203 (0.059)    | -         |     3.26 | blameF, device, jabbi, Staehr, stavn |
|            8 |     2419 | 2024-01-20 | PERA              | W   | 0.486      | -            | -                | -                | -         |     0.41 | blameF, device, jabbi, Staehr, stavn |
|            7 |     2469 | 2024-01-19 | AMKAL             | L   | 0.480      | -            | -                | -                | -         |   -13.32 | blameF, device, jabbi, Staehr, stavn |
|            6 |     2534 | 2024-01-18 | ex-Preasy         | W   | 0.473      | -            | -                | -                | -         |     0.70 | blameF, device, jabbi, Staehr, stavn |
|            5 |     2537 | 2024-01-18 | Enterprise        | W   | 0.473      | -            | -                | -                | -         |     0.50 | blameF, device, jabbi, Staehr, stavn |
|            4 |     2706 | 2024-01-14 | Ninjas in Pyjamas | W   | 0.446      | -            | -                | -                | -         |     0.22 | blameF, device, jabbi, Staehr, stavn |
|            3 |     2742 | 2024-01-13 | ALTERNATE aTTaX   | W   | 0.439      | -            | -                | -                | -         |     0.51 | blameF, device, jabbi, Staehr, stavn |
|            2 |     3157 | 2023-12-07 | FURIA             | L   | 0.193      | -            | -                | -                | -         |    -3.29 | blameF, device, jabbi, Staehr, stavn |
|            1 |     3198 | 2023-12-06 | Virtus.pro        | L   | 0.185      | -            | -                | -                | -         |    -1.74 | blameF, device, jabbi, Staehr, stavn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($28,184.10)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.17) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-02-02 |      0.574 | $2,500.00      | $1,435.21       |
| 2024-01-28 |      0.540 | $12,500.00     | $6,748.89       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
