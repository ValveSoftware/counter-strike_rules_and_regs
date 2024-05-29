### Roster Details<br />
Team Name: GR<br />
Roster: mediocrity, qqGOD, Reminder, SALO_MUX, weqt2<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [161](../standings_global.md)<br />
Regional Rank: [106]( ../standings_europe.md)<br />
Final Rank Value:  617.6<br />
<br />
Final Rank Value (617.6) = Starting Rank Value (621.3) + Head To Head Adjustments (-3.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.256[<sup>1</sup>](#table2)
- Bounty Collected: 0.196[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.114<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 621.3
- 400 + ( ( 0.114 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 621.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |     2520 | 2024-02-16 | FlyQuest          | L   | 0.516      | -            | -                | -                | -         |    -0.20 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           21 |     2545 | 2024-02-16 | MAG               | L   | 0.511      | -            | -                | -                | -         |   -10.28 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           20 |     2550 | 2024-02-16 | Newhappy          | L   | 0.510      | -            | -                | -                | -         |    -8.12 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           19 |     2572 | 2024-02-15 | The Huns          | W   | 0.504      | 0.143        | 0.000 (0.000)    | 0.119 (0.009)    | 0 (0.000) |     7.66 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           18 |     2615 | 2024-02-14 | ZEUS              | W   | 0.497      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.44 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           17 |     2806 | 2024-02-02 | Rare Atom         | L   | 0.418      | -            | -                | -                | -         |    -5.24 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|           16 |     2813 | 2024-02-02 | ATOX              | W   | 0.417      | 0.143        | 0.000 (0.000)    | 0.248 (0.015)    | 0 (0.000) |    10.39 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|           15 |     2837 | 2024-02-01 | Newhappy          | W   | 0.411      | 0.143        | 0.001 (0.000)    | 0.112 (0.007)    | 0 (0.000) |     6.82 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|           14 |     2839 | 2024-02-01 | Steel Helmet      | W   | 0.411      | 0.143        | 0.012 (0.001)    | 0.065 (0.004)    | 0 (0.000) |     7.21 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|           13 |     2843 | 2024-02-01 | TYLOO             | L   | 0.409      | -            | -                | -                | -         |    -1.96 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|           12 |     2947 | 2024-01-25 | Wings Up          | L   | 0.363      | -            | -                | -                | -         |    -7.36 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           11 |     2958 | 2024-01-24 | -72c              | W   | 0.358      | 0.143        | 0.000 (0.000)    | 0.031 (0.002)    | 0 (0.000) |     5.10 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           10 |     3010 | 2024-01-22 | Steel Helmet      | L   | 0.344      | -            | -                | -                | -         |    -4.79 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            9 |     3077 | 2024-01-20 | The Huns          | L   | 0.331      | -            | -                | -                | -         |    -5.67 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            8 |     3138 | 2024-01-19 | ATOX              | L   | 0.324      | -            | -                | -                | -         |    -2.15 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            7 |     3143 | 2024-01-19 | Eruption          | W   | 0.323      | 0.143        | 0.000 (0.000)    | 0.042 (0.002)    | 0 (0.000) |     3.12 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            6 |     3324 | 2024-01-15 | Fort Arena        | W   | 0.298      | 0.143        | 0.000 (0.000)    | 0.012 (0.001)    | 0 (0.000) |     2.16 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            5 |     3328 | 2024-01-15 | MungYu            | L   | 0.297      | -            | -                | -                | -         |    -6.43 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            4 |     3330 | 2024-01-15 | Chinggis Warriors | W   | 0.297      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.09 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            3 |     3814 | 2023-12-07 | TheMongolz        | L   | 0.038      | -            | -                | -                | -         |    -0.01 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            2 |     3844 | 2023-12-06 | Lynn Vision       | L   | 0.031      | -            | -                | -                | -         |    -0.10 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            1 |     3874 | 2023-12-05 | ATOX              | W   | 0.024      | 0.416        | 0.000 (0.000)    | 0.248 (0.003)    | 0 (0.000) |     0.61 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($377.13)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-02-17 |      0.521 | $500.00        | $260.57         |
| 2023-12-10 |      0.058 | $2,000.00      | $116.56         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
