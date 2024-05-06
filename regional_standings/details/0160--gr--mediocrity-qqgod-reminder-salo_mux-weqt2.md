### Roster Details<br />
Team Name: GR<br />
Roster: mediocrity, qqGOD, Reminder, SALO_MUX, weqt2<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [160](../standings_global.md)<br />
Regional Rank: [104]( ../standings_europe.md)<br />
Final Rank Value:  649.3<br />
<br />
Final Rank Value (649.3) = Starting Rank Value (653.9) + Head To Head Adjustments (-4.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.301[<sup>1</sup>](#table2)
- Bounty Collected: 0.224[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.133<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 653.9
- 400 + ( ( 0.133 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 653.9


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
|           22 |     1869 | 2024-02-16 | FlyQuest          | L   | 0.670      | -            | -                | -                | -         |    -0.44 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           21 |     1894 | 2024-02-16 | MAG               | L   | 0.665      | -            | -                | -                | -         |   -13.57 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           20 |     1899 | 2024-02-16 | Newhappy          | L   | 0.664      | -            | -                | -                | -         |   -10.07 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           19 |     1921 | 2024-02-15 | The Huns          | W   | 0.658      | 0.143        | 0.001 (0.000)    | 0.184 (0.017)    | 0 (0.000) |    10.72 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           18 |     1964 | 2024-02-14 | ZEUS              | W   | 0.651      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.86 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           17 |     2155 | 2024-02-02 | Rare Atom         | L   | 0.572      | -            | -                | -                | -         |    -6.92 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|           16 |     2162 | 2024-02-02 | ATOX              | W   | 0.571      | 0.143        | 0.005 (0.000)    | 0.258 (0.021)    | 0 (0.000) |    11.88 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|           15 |     2186 | 2024-02-01 | Newhappy          | W   | 0.565      | 0.143        | 0.004 (0.000)    | 0.181 (0.015)    | 0 (0.000) |     9.90 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|           14 |     2188 | 2024-02-01 | Steel Helmet      | W   | 0.565      | 0.143        | 0.025 (0.002)    | 0.104 (0.008)    | 0 (0.000) |     9.82 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|           13 |     2192 | 2024-02-01 | TYLOO             | L   | 0.564      | -            | -                | -                | -         |    -2.07 | mediocrity, qqGOD, Runnin, SALO_MUX, weqt2   |
|           12 |     2296 | 2024-01-25 | Wings Up          | L   | 0.518      | -            | -                | -                | -         |    -8.21 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           11 |     2307 | 2024-01-24 | -72c              | W   | 0.512      | 0.143        | 0.003 (0.000)    | 0.053 (0.004)    | 0 (0.000) |     7.74 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           10 |     2359 | 2024-01-22 | Steel Helmet      | L   | 0.499      | -            | -                | -                | -         |    -6.91 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            9 |     2426 | 2024-01-20 | The Huns          | L   | 0.485      | -            | -                | -                | -         |    -7.80 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            8 |     2487 | 2024-01-19 | ATOX              | L   | 0.478      | -            | -                | -                | -         |    -5.42 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            7 |     2492 | 2024-01-19 | Eruption          | W   | 0.477      | 0.143        | 0.000 (0.000)    | 0.067 (0.005)    | 0 (0.000) |     4.23 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            6 |     2673 | 2024-01-15 | Fort Arena        | W   | 0.452      | 0.143        | 0.000 (0.000)    | 0.020 (0.001)    | 0 (0.000) |     2.85 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            5 |     2677 | 2024-01-15 | MungYu            | L   | 0.452      | -            | -                | -                | -         |   -10.07 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            4 |     2679 | 2024-01-15 | Chinggis Warriors | W   | 0.451      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.71 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            3 |     3163 | 2023-12-07 | TheMongolz        | L   | 0.192      | -            | -                | -                | -         |    -0.08 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            2 |     3193 | 2023-12-06 | Lynn Vision       | L   | 0.185      | -            | -                | -                | -         |    -0.34 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|            1 |     3223 | 2023-12-05 | ATOX              | W   | 0.178      | 0.416        | 0.005 (0.000)    | 0.258 (0.019)    | 0 (0.000) |     3.64 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($762.37)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-02-17 |      0.675 | $500.00        | $337.62         |
| 2023-12-10 |      0.212 | $2,000.00      | $424.74         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
