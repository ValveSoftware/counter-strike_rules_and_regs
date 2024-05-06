### Roster Details<br />
Team Name: NIP Impact<br />
Roster: aiM, jenkon, Nayomy, Qiyarah, ramziiN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [128](../standings_global.md)<br />
Regional Rank: [86]( ../standings_europe.md)<br />
Final Rank Value:  740.1<br />
<br />
Final Rank Value (740.1) = Starting Rank Value (719.9) + Head To Head Adjustments (20.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.339[<sup>1</sup>](#table2)
- Bounty Collected: 0.291[<sup>2</sup>](#table1)
- Opponent Network: 0.041[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.168<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 719.9
- 400 + ( ( 0.168 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 719.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      192 | 2024-04-27 | Pigeons           | L   | 1.000      | -            | -                | -                | -         |    -8.55 | aiM, jenkon, Nayomy, Qiyarah, ramziiN |
|           14 |      196 | 2024-04-27 | ENCE Athena       | W   | 1.000      | 0.252        | 0.009 (0.002)    | 0.142 (0.036)    | 0 (0.000) |    11.52 | aiM, jenkon, Nayomy, Qiyarah, ramziiN |
|           13 |      380 | 2024-04-19 | BIG EQUIPA        | L   | 1.000      | -            | -                | -                | -         |   -16.33 | aiM, jenkon, Nayomy, Qiyarah, ramziiN |
|           12 |      534 | 2024-04-15 | NAVI Javelins     | L   | 1.000      | -            | -                | -                | -         |   -12.52 | aiM, jenkon, Nayomy, Qiyarah, ramziiN |
|           11 |      547 | 2024-04-14 | Pigeons           | L   | 1.000      | -            | -                | -                | -         |    -9.61 | aiM, jenkon, Nayomy, Qiyarah, ramziiN |
|           10 |      561 | 2024-04-13 | Astralis W        | W   | 1.000      | 0.303        | 0.005 (0.002)    | 0.075 (0.023)    | 0 (0.000) |     9.37 | aiM, jenkon, Nayomy, Qiyarah, ramziiN |
|            9 |      603 | 2024-04-11 | Let Her Cook      | W   | 1.000      | 0.303        | 0.000 (0.000)    | 0.204 (0.062)    | 0 (0.000) |    11.50 | aiM, jenkon, Nayomy, Qiyarah, ramziiN |
|            8 |      645 | 2024-04-10 | GUILD fe          | L   | 1.000      | -            | -                | -                | -         |   -18.54 | aiM, jenkon, Nayomy, Qiyarah, ramziiN |
|            7 |      707 | 2024-04-09 | NAVI Javelins     | W   | 1.000      | 0.303        | 0.060 (0.018)    | 0.412 (0.125)    | 0 (0.000) |    18.82 | aiM, jenkon, Nayomy, Qiyarah, ramziiN |
|            6 |      765 | 2024-04-07 | Pigeons           | L   | 1.000      | -            | -                | -                | -         |   -10.73 | aiM, jenkon, Nayomy, Qiyarah, ramziiN |
|            5 |      770 | 2024-04-07 | Fearless Cheetahs | W   | 1.000      | 0.262        | 0.030 (0.008)    | 0.192 (0.050)    | 0 (0.000) |    16.60 | aiM, jenkon, Nayomy, Qiyarah, ramziiN |
|            4 |      783 | 2024-04-06 | GUILD fe          | W   | 0.998      | 0.262        | 0.011 (0.003)    | 0.199 (0.052)    | 0 (0.000) |    13.80 | aiM, jenkon, Nayomy, Qiyarah, ramziiN |
|            3 |      874 | 2024-04-03 | Astralis W        | W   | 0.980      | 0.331        | 0.005 (0.002)    | 0.075 (0.024)    | 0 (0.000) |    10.72 | aiM, jenkon, Nayomy, Qiyarah, ramziiN |
|            2 |     1123 | 2024-03-20 | ENCE Athena       | W   | 0.887      | 0.331        | 0.009 (0.003)    | 0.142 (0.042)    | 0 (0.000) |    12.87 | aiM, jenkon, Nayomy, Qiyarah, ramziiN |
|            1 |     1421 | 2024-03-07 | Pigeons           | L   | 0.800      | -            | -                | -                | -         |    -8.65 | aiM, jenkon, Nayomy, Qiyarah, ramziiN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,821.00)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-27 |      1.000 | $321.00        | $321.00         |
| 2024-04-21 |      1.000 | $1,250.00      | $1,250.00       |
| 2024-04-07 |      1.000 | $250.00        | $250.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
