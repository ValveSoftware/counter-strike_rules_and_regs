### Roster Details<br />
Team Name: Strife<br />
Roster: Gabie, J0LZ, Melio, TENSKEE, YuZ<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [153](../standings_global.md)<br />
Regional Rank: [40]( ../standings_americas.md)<br />
Final Rank Value:  696.5<br />
<br />
Final Rank Value (696.5) = Starting Rank Value (713.7) + Head To Head Adjustments (-17.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.349[<sup>1</sup>](#table2)
- Bounty Collected: 0.258[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
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


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |        1 | 2024-06-10 | E-Xolos LAZER  | L   | 1.000      | -            | -                | -                | -         |   -15.12 | Gabie, J0LZ, Melio, TENSKEE, YuZ     |
|           10 |       89 | 2024-06-08 | LAG            | L   | 1.000      | -            | -                | -                | -         |    -9.49 | Gabie, J0LZ, Melio, TENSKEE, YuZ     |
|            9 |      144 | 2024-06-07 | E-Xolos LAZER  | L   | 1.000      | -            | -                | -                | -         |   -17.70 | Gabie, J0LZ, Melio, TENSKEE, YuZ     |
|            8 |      211 | 2024-06-06 | Limitless      | W   | 1.000      | 0.384        | 0.001 (0.001)    | 0.219 (0.084)    | 0 (0.000) |    11.06 | Gabie, J0LZ, Melio, TENSKEE, YuZ     |
|            7 |      326 | 2024-06-04 | Wildcard       | L   | 1.000      | -            | -                | -                | -         |    -5.35 | Gabie, J0LZ, Melio, TENSKEE, YuZ     |
|            6 |      336 | 2024-06-04 | TSM Shimmer    | W   | 1.000      | 0.384        | 0.025 (0.010)    | 0.269 (0.104)    | 0 (0.000) |    15.88 | Gabie, J0LZ, Melio, TENSKEE, YuZ     |
|            5 |     2208 | 2024-03-23 | Revenge Nation | L   | 0.675      | -            | -                | -                | -         |   -11.34 | Gabie, J0LZ, Melio, TENSKEE, YuZ     |
|            4 |     2235 | 2024-03-21 | Final Form     | W   | 0.662      | 0.359        | 0.007 (0.002)    | 0.039 (0.009)    | 0 (0.000) |     5.69 | Gabie, J0LZ, Melio, TENSKEE, YuZ     |
|            3 |     2284 | 2024-03-19 | Akimbo         | W   | 0.649      | 0.359        | 0.007 (0.002)    | 0.117 (0.027)    | 0 (0.000) |     9.70 | Gabie, J0LZ, Melio, TENSKEE, YuZ     |
|            2 |     4118 | 2023-12-17 | FPL Friends    | L   | 0.028      | -            | -                | -                | -         |    -0.57 | CLASIA, Pol0, PwnAlone, silas, steel |
|            1 |     4149 | 2023-12-16 | FLUFFY AIMERS  | W   | 0.022      | 0.294        | 0.000 (0.000)    | 0.008 (0.000)    | 0 (0.000) |     0.10 | FAME, Gabie, J0LZ, Melio, TENSKEE    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,153.76)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $1,250.00      | $1,250.00       |
| 2024-03-23 |      0.675 | $4,300.00      | $2,903.76       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
