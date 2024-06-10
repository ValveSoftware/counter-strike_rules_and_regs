### Roster Details<br />
Team Name: GR<br />
Roster: mediocrity, qqGOD, SALO_MUX, uwrr, weqt2<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [165](../standings_global.md)<br />
Regional Rank: [106]( ../standings_europe.md)<br />
Final Rank Value:  666.9<br />
<br />
Final Rank Value (666.9) = Starting Rank Value (685.2) + Head To Head Adjustments (-18.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.336[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.143<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 685.2
- 400 + ( ( 0.143 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 685.2


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
|           22 |      183 | 2024-06-07 | TYLOO             | L   | 1.000      | -            | -                | -                | -         |    -8.38 | mediocrity, qqGOD, SALO_MUX, uwrr, weqt2     |
|           21 |      255 | 2024-06-06 | Clutch            | W   | 1.000      | 0.416        | 0.007 (0.003)    | 0.078 (0.032)    | 0 (0.000) |    16.62 | mediocrity, qqGOD, SALO_MUX, uwrr, weqt2     |
|           20 |      311 | 2024-06-05 | ATOX              | L   | 1.000      | -            | -                | -                | -         |    -4.82 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|           19 |     3020 | 2024-02-16 | FlyQuest          | L   | 0.436      | -            | -                | -                | -         |    -0.22 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           18 |     3045 | 2024-02-16 | MAG               | L   | 0.432      | -            | -                | -                | -         |    -9.39 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           17 |     3050 | 2024-02-16 | Newhappy          | L   | 0.431      | -            | -                | -                | -         |    -9.47 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           16 |     3072 | 2024-02-15 | The Huns          | W   | 0.425      | 0.143        | 0.000 (0.000)    | 0.087 (0.005)    | 0 (0.000) |     4.28 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           15 |     3115 | 2024-02-14 | ZEUS              | W   | 0.418      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.31 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           14 |     3306 | 2024-02-02 | Rare Atom         | L   | 0.339      | -            | -                | -                | -         |    -5.05 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|           13 |     3313 | 2024-02-02 | ATOX              | W   | 0.337      | 0.143        | 0.026 (0.001)    | 0.315 (0.015)    | 0 (0.000) |     8.79 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|           12 |     3337 | 2024-02-01 | Newhappy          | W   | 0.332      | 0.143        | 0.000 (0.000)    | 0.084 (0.004)    | 0 (0.000) |     3.31 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|           11 |     3339 | 2024-02-01 | Steel Helmet      | W   | 0.331      | 0.143        | 0.011 (0.001)    | 0.046 (0.002)    | 0 (0.000) |     5.05 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|           10 |     3343 | 2024-02-01 | TYLOO             | L   | 0.330      | -            | -                | -                | -         |    -3.63 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|            9 |     3447 | 2024-01-25 | Wings Up          | L   | 0.284      | -            | -                | -                | -         |    -6.39 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            8 |     3458 | 2024-01-24 | -72c              | W   | 0.279      | 0.143        | 0.000 (0.000)    | 0.023 (0.001)    | 0 (0.000) |     1.57 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            7 |     3510 | 2024-01-22 | Steel Helmet      | L   | 0.265      | -            | -                | -                | -         |    -4.35 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            6 |     3577 | 2024-01-20 | The Huns          | L   | 0.252      | -            | -                | -                | -         |    -5.71 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            5 |     3638 | 2024-01-19 | ATOX              | L   | 0.245      | -            | -                | -                | -         |    -1.38 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            4 |     3643 | 2024-01-19 | Eruption          | W   | 0.244      | 0.143        | 0.000 (0.000)    | 0.030 (0.001)    | 0 (0.000) |     1.31 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            3 |     3824 | 2024-01-15 | Fort Arena        | W   | 0.219      | 0.143        | 0.000 (0.000)    | 0.008 (0.000)    | 0 (0.000) |     1.19 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            2 |     3828 | 2024-01-15 | MungYu            | L   | 0.218      | -            | -                | -                | -         |    -5.12 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            1 |     3830 | 2024-01-15 | Chinggis Warriors | W   | 0.218      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.15 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,220.99)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-02-17 |      0.442 | $500.00        | $220.99         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
