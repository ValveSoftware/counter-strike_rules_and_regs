### Roster Details<br />
Team Name: GR<br />
Roster: mediocrity, qqGOD, Reminder, SALO_MUX, weqt2<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [166](../standings_global.md)<br />
Regional Rank: [110]( ../standings_europe.md)<br />
Final Rank Value:  655.1<br />
<br />
Final Rank Value (655.1) = Starting Rank Value (664.2) + Head To Head Adjustments (-9.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.305[<sup>1</sup>](#table2)
- Bounty Collected: 0.228[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.137<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 664.2
- 400 + ( ( 0.137 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 664.2


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
|           22 |     1573 | 2024-02-16 | FlyQuest          | L   | 0.763      | -            | -                | -                | -         |    -1.63 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           21 |     1598 | 2024-02-16 | MAG               | L   | 0.759      | -            | -                | -                | -         |   -15.31 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           20 |     1603 | 2024-02-16 | Newhappy          | L   | 0.758      | -            | -                | -                | -         |   -11.26 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           19 |     1625 | 2024-02-15 | The Huns          | W   | 0.751      | 0.143        | 0.000 (0.000)    | 0.232 (0.025)    | 0 (0.000) |     9.59 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           18 |     1668 | 2024-02-14 | ZEUS              | W   | 0.745      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.19 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           17 |     1859 | 2024-02-02 | Rare Atom         | L   | 0.665      | -            | -                | -                | -         |    -8.01 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|           16 |     1866 | 2024-02-02 | ATOX              | W   | 0.664      | 0.143        | 0.007 (0.001)    | 0.329 (0.031)    | 0 (0.000) |    13.98 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|           15 |     1890 | 2024-02-01 | Newhappy          | W   | 0.658      | 0.143        | 0.005 (0.000)    | 0.238 (0.022)    | 0 (0.000) |    11.73 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|           14 |     1892 | 2024-02-01 | Steel Helmet      | W   | 0.658      | 0.143        | 0.021 (0.002)    | 0.131 (0.012)    | 0 (0.000) |    11.26 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|           13 |     1896 | 2024-02-01 | TYLOO             | L   | 0.657      | -            | -                | -                | -         |    -3.38 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|           12 |     2000 | 2024-01-25 | Wings Up          | L   | 0.611      | -            | -                | -                | -         |    -9.26 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           11 |     2011 | 2024-01-24 | -72c              | W   | 0.605      | 0.143        | 0.003 (0.000)    | 0.069 (0.006)    | 0 (0.000) |     9.32 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           10 |     2063 | 2024-01-22 | Steel Helmet      | L   | 0.592      | -            | -                | -                | -         |    -8.32 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            9 |     2130 | 2024-01-20 | The Huns          | L   | 0.579      | -            | -                | -                | -         |   -11.96 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            8 |     2191 | 2024-01-19 | ATOX              | L   | 0.571      | -            | -                | -                | -         |    -6.30 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            7 |     2196 | 2024-01-19 | Eruption          | W   | 0.571      | 0.143        | 0.000 (0.000)    | 0.091 (0.007)    | 0 (0.000) |     7.25 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            6 |     2377 | 2024-01-15 | Fort Arena        | W   | 0.545      | 0.143        | 0.000 (0.000)    | 0.025 (0.002)    | 0 (0.000) |     3.27 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            5 |     2381 | 2024-01-15 | MungYu            | L   | 0.545      | -            | -                | -                | -         |   -12.32 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            4 |     2383 | 2024-01-15 | Chinggis Warriors | W   | 0.545      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.09 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            3 |     2867 | 2023-12-07 | TheMongolz        | L   | 0.285      | -            | -                | -                | -         |    -0.22 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            2 |     2897 | 2023-12-06 | Lynn Vision       | L   | 0.279      | -            | -                | -                | -         |    -0.45 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            1 |     2927 | 2023-12-05 | ATOX              | W   | 0.272      | 0.416        | 0.007 (0.001)    | 0.329 (0.037)    | 0 (0.000) |     5.68 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($995.63)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-02-17 |      0.769 | $500.00        | $384.27         |
| 2023-12-10 |      0.306 | $2,000.00      | $611.36         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
