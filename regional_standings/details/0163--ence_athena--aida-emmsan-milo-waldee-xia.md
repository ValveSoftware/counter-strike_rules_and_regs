### Roster Details<br />
Team Name: ENCE Athena<br />
Roster: Aida, Emmsan, miLo, Waldee, xia<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [163](../standings_global.md)<br />
Regional Rank: [106]( ../standings_europe.md)<br />
Final Rank Value:  638.9<br />
<br />
Final Rank Value (638.9) = Starting Rank Value (673.7) + Head To Head Adjustments (-34.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.327[<sup>1</sup>](#table2)
- Bounty Collected: 0.238[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.144<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 673.7
- 400 + ( ( 0.144 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 673.7


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
|           11 |      196 | 2024-04-27 | NIP Impact      | L   | 1.000      | -            | -                | -                | -         |   -11.52 | Aida, Emmsan, miLo, Waldee, xia |
|           10 |      381 | 2024-04-19 | Astralis W      | W   | 1.000      | 0.331        | 0.005 (0.002)    | 0.075 (0.025)    | 0 (0.000) |    13.79 | Aida, Emmsan, miLo, Waldee, xia |
|            9 |      761 | 2024-04-07 | ex-FORZE Ladies | L   | 1.000      | -            | -                | -                | -         |   -15.58 | Aida, Emmsan, miLo, Waldee, xia |
|            8 |      785 | 2024-04-06 | Pigeons         | L   | 0.998      | -            | -                | -                | -         |    -7.65 | Aida, Emmsan, miLo, Waldee, xia |
|            7 |      834 | 2024-04-04 | BIG EQUIPA      | L   | 0.986      | -            | -                | -                | -         |   -13.47 | Aida, Emmsan, miLo, Waldee, xia |
|            6 |     1006 | 2024-03-27 | Pigeons         | L   | 0.934      | -            | -                | -                | -         |    -8.10 | Aida, Emmsan, miLo, Waldee, xia |
|            5 |     1123 | 2024-03-20 | NIP Impact      | L   | 0.887      | -            | -                | -                | -         |   -12.87 | Aida, Emmsan, miLo, Waldee, xia |
|            4 |     1275 | 2024-03-13 | GUILD fe        | W   | 0.840      | 0.331        | 0.011 (0.003)    | 0.199 (0.055)    | 0 (0.000) |    13.16 | Aida, Emmsan, miLo, Waldee, xia |
|            3 |     1673 | 2024-02-25 | NAVI Javelins   | L   | 0.725      | -            | -                | -                | -         |    -7.03 | Aida, Emmsan, miLo, Waldee, xia |
|            2 |     1703 | 2024-02-24 | Spirit fe       | W   | 0.719      | 0.238        | 0.010 (0.002)    | 0.105 (0.018)    | 0 (0.000) |    10.86 | Aida, Emmsan, miLo, Waldee, xia |
|            1 |     1945 | 2024-02-14 | more whiskey    | W   | 0.654      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.62 | Aida, Emmsan, miLo, Waldee, xia |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,407.00)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-27 |      1.000 | $107.00        | $107.00         |
| 2024-04-21 |      1.000 | $1,050.00      | $1,050.00       |
| 2024-04-07 |      1.000 | $250.00        | $250.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
