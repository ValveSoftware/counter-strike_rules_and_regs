### Roster Details<br />
Team Name: NIP Impact<br />
Roster: aiM, jenkon, Nayomy, Qiyarah, ramziiN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [131](../standings_global.md)<br />
Regional Rank: [89]( ../standings_europe.md)<br />
Final Rank Value:  741.2<br />
<br />
Final Rank Value (741.2) = Starting Rank Value (716.7) + Head To Head Adjustments (24.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.323[<sup>1</sup>](#table2)
- Bounty Collected: 0.290[<sup>2</sup>](#table1)
- Opponent Network: 0.043[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.164<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 716.7
- 400 + ( ( 0.164 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 716.7


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
|           14 |       84 | 2024-04-19 | BIG EQUIPA        | L   | 1.000      | -            | -                | -                | -         |   -15.83 | aiM, jenkon, Nayomy, Qiyarah, ramziiN |
|           13 |      238 | 2024-04-15 | NAVI Javelins     | L   | 1.000      | -            | -                | -                | -         |   -11.63 | aiM, jenkon, Nayomy, Qiyarah, ramziiN |
|           12 |      251 | 2024-04-14 | Pigeons           | L   | 1.000      | -            | -                | -                | -         |    -9.00 | aiM, jenkon, Nayomy, Qiyarah, ramziiN |
|           11 |      265 | 2024-04-13 | Astralis W        | W   | 1.000      | 0.303        | 0.005 (0.001)    | 0.082 (0.025)    | 0 (0.000) |     9.27 | aiM, jenkon, Nayomy, Qiyarah, ramziiN |
|           10 |      307 | 2024-04-11 | Let Her Cook      | W   | 1.000      | 0.303        | 0.001 (0.000)    | 0.228 (0.069)    | 0 (0.000) |    12.05 | aiM, jenkon, Nayomy, Qiyarah, ramziiN |
|            9 |      349 | 2024-04-10 | GUILD fe          | L   | 1.000      | -            | -                | -                | -         |   -18.50 | aiM, jenkon, Nayomy, Qiyarah, ramziiN |
|            8 |      411 | 2024-04-09 | NAVI Javelins     | W   | 1.000      | 0.303        | 0.064 (0.019)    | 0.467 (0.141)    | 0 (0.000) |    19.92 | aiM, jenkon, Nayomy, Qiyarah, ramziiN |
|            7 |      469 | 2024-04-07 | Pigeons           | L   | 1.000      | -            | -                | -                | -         |    -9.91 | aiM, jenkon, Nayomy, Qiyarah, ramziiN |
|            6 |      474 | 2024-04-07 | Fearless Cheetahs | W   | 1.000      | 0.262        | 0.033 (0.009)    | 0.214 (0.056)    | 0 (0.000) |    17.65 | aiM, jenkon, Nayomy, Qiyarah, ramziiN |
|            5 |      487 | 2024-04-06 | GUILD fe          | W   | 1.000      | 0.262        | 0.009 (0.002)    | 0.220 (0.058)    | 0 (0.000) |    14.01 | aiM, jenkon, Nayomy, Qiyarah, ramziiN |
|            4 |      578 | 2024-04-03 | Astralis W        | W   | 1.000      | 0.331        | 0.005 (0.002)    | 0.082 (0.027)    | 0 (0.000) |    10.93 | aiM, jenkon, Nayomy, Qiyarah, ramziiN |
|            3 |      827 | 2024-03-20 | ENCE Athena       | W   | 0.980      | 0.331        | 0.007 (0.002)    | 0.162 (0.053)    | 0 (0.000) |    14.34 | aiM, jenkon, Nayomy, Qiyarah, ramziiN |
|            2 |     1125 | 2024-03-07 | Pigeons           | L   | 0.894      | -            | -                | -                | -         |    -8.77 | aiM, jenkon, Nayomy, Qiyarah, ramziiN |
|            1 |     3846 | 2023-10-25 | BIG EQUIPA        | L   | 0.000      | -            | -                | -                | -         |    -0.00 | aiM, ASTRA, jenkon, Nayomy, Qiyarah   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,524.75)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-21 |      1.000 | $1,250.00      | $1,250.00       |
| 2024-04-07 |      1.000 | $250.00        | $250.00         |
| 2023-10-28 |      0.020 | $1,250.00      | $24.75          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
