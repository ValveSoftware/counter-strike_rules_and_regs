### Roster Details<br />
Team Name: ENCE Athena<br />
Roster: Aida, Emmsan, miLo, Waldee, xia<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [160](../standings_global.md)<br />
Regional Rank: [105]( ../standings_europe.md)<br />
Final Rank Value:  617.7<br />
<br />
Final Rank Value (617.7) = Starting Rank Value (653.8) + Head To Head Adjustments (-36.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.298[<sup>1</sup>](#table2)
- Bounty Collected: 0.219[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.131<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 653.8
- 400 + ( ( 0.131 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 653.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      847 | 2024-04-27 | NIP Impact      | L   | 0.984      | -            | -                | -                | -         |   -12.06 | Aida, Emmsan, miLo, Waldee, xia |
|           10 |     1032 | 2024-04-19 | Astralis W      | W   | 0.933      | 0.331        | 0.003 (0.001)    | 0.058 (0.018)    | 0 (0.000) |    13.06 | Aida, Emmsan, miLo, Waldee, xia |
|            9 |     1412 | 2024-04-07 | ex-FORZE Ladies | L   | 0.853      | -            | -                | -                | -         |   -13.12 | Aida, Emmsan, miLo, Waldee, xia |
|            8 |     1436 | 2024-04-06 | Pigeons         | L   | 0.844      | -            | -                | -                | -         |    -8.54 | Aida, Emmsan, miLo, Waldee, xia |
|            7 |     1485 | 2024-04-04 | BIG EQUIPA      | L   | 0.832      | -            | -                | -                | -         |   -11.94 | Aida, Emmsan, miLo, Waldee, xia |
|            6 |     1657 | 2024-03-27 | Pigeons         | L   | 0.780      | -            | -                | -                | -         |    -8.81 | Aida, Emmsan, miLo, Waldee, xia |
|            5 |     1774 | 2024-03-20 | NIP Impact      | L   | 0.733      | -            | -                | -                | -         |   -10.76 | Aida, Emmsan, miLo, Waldee, xia |
|            4 |     1926 | 2024-03-13 | ex-GUILD fe     | W   | 0.686      | 0.331        | 0.005 (0.001)    | 0.159 (0.036)    | 0 (0.000) |    10.80 | Aida, Emmsan, miLo, Waldee, xia |
|            3 |     2324 | 2024-02-25 | NAVI Javelins   | L   | 0.571      | -            | -                | -                | -         |    -6.53 | Aida, Emmsan, miLo, Waldee, xia |
|            2 |     2354 | 2024-02-24 | Spirit fe       | W   | 0.565      | 0.238        | 0.005 (0.001)    | 0.079 (0.011)    | 0 (0.000) |     8.71 | Aida, Emmsan, miLo, Waldee, xia |
|            1 |     2596 | 2024-02-14 | more whiskey    | W   | 0.500      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.04 | Aida, Emmsan, miLo, Waldee, xia |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,311.88)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-27 |      0.985 | $107.00        | $105.39         |
| 2024-04-21 |      0.946 | $1,050.00      | $993.29         |
| 2024-04-07 |      0.853 | $250.00        | $213.20         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
