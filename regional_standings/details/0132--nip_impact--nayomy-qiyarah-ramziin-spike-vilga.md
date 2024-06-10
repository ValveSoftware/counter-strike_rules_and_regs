### Roster Details<br />
Team Name: NIP Impact<br />
Roster: Nayomy, Qiyarah, ramziiN, spike, vilga<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [132](../standings_global.md)<br />
Regional Rank: [89]( ../standings_europe.md)<br />
Final Rank Value:  746.9<br />
<br />
Final Rank Value (746.9) = Starting Rank Value (713.7) + Head To Head Adjustments (33.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.310[<sup>1</sup>](#table2)
- Bounty Collected: 0.291[<sup>2</sup>](#table1)
- Opponent Network: 0.029[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.157<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 713.7
- 400 + ( ( 0.157 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 713.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |      566 | 2024-05-26 | Crescent fe       | L   | 1.000      | -            | -                | -                | -         |   -20.49 | Nayomy, Qiyarah, ramziiN, spike, vilga |
|           17 |      776 | 2024-05-19 | Imperial fe       | L   | 1.000      | -            | -                | -                | -         |    -4.17 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           16 |      795 | 2024-05-18 | ex-GUILD fe       | W   | 1.000      | 0.281        | 0.005 (0.001)    | 0.134 (0.038)    | 0 (0.000) |    12.84 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           15 |     1343 | 2024-04-27 | Imperial fe       | L   | 0.906      | -            | -                | -                | -         |    -3.77 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           14 |     1347 | 2024-04-27 | ENCE Athena       | W   | 0.905      | 0.252        | 0.004 (0.001)    | 0.092 (0.021)    | 0 (0.000) |    10.05 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           13 |     1531 | 2024-04-19 | BIG EQUIPA        | L   | 0.854      | -            | -                | -                | -         |   -11.20 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           12 |     1685 | 2024-04-15 | NAVI Javelins     | L   | 0.826      | -            | -                | -                | -         |    -9.18 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           11 |     1698 | 2024-04-14 | Imperial fe       | L   | 0.820      | -            | -                | -                | -         |    -3.45 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           10 |     1712 | 2024-04-13 | Astralis W        | W   | 0.813      | 0.303        | 0.002 (0.001)    | 0.049 (0.012)    | 0 (0.000) |     7.65 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            9 |     1754 | 2024-04-11 | Let Her Cook      | W   | 0.800      | 0.303        | 0.082 (0.020)    | 0.225 (0.055)    | 0 (0.000) |    18.25 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            8 |     1796 | 2024-04-10 | ex-GUILD fe       | L   | 0.793      | -            | -                | -                | -         |   -14.94 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            7 |     1858 | 2024-04-09 | NAVI Javelins     | W   | 0.786      | 0.303        | 0.041 (0.010)    | 0.330 (0.079)    | 0 (0.000) |    16.50 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            6 |     1916 | 2024-04-07 | Imperial fe       | L   | 0.772      | -            | -                | -                | -         |    -3.09 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            5 |     1921 | 2024-04-07 | Fearless Cheetahs | W   | 0.771      | 0.262        | 0.006 (0.001)    | 0.121 (0.024)    | 0 (0.000) |    12.33 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            4 |     1934 | 2024-04-06 | ex-GUILD fe       | W   | 0.765      | 0.262        | 0.005 (0.001)    | 0.134 (0.027)    | 0 (0.000) |    10.58 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            3 |     2025 | 2024-04-03 | Astralis W        | W   | 0.747      | 0.331        | 0.002 (0.001)    | 0.049 (0.012)    | 0 (0.000) |     8.22 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            2 |     2274 | 2024-03-20 | ENCE Athena       | W   | 0.654      | 0.331        | 0.004 (0.001)    | 0.092 (0.020)    | 0 (0.000) |     9.03 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            1 |     2572 | 2024-03-07 | Imperial fe       | L   | 0.567      | -            | -                | -                | -         |    -2.03 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,817.36)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      1.000 | $250.00        | $250.00         |
| 2024-04-27 |      0.906 | $321.00        | $290.74         |
| 2024-04-21 |      0.867 | $1,250.00      | $1,083.52       |
| 2024-04-07 |      0.772 | $250.00        | $193.10         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
