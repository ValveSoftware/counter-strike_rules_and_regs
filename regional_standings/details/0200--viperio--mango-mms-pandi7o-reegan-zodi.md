### Roster Details<br />
Team Name: Viperio<br />
Roster: mAnGo, MMS, pandi7o, ReegaN, zodi<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [200](../standings_global.md)<br />
Regional Rank: [121]( ../standings_europe.md)<br />
Final Rank Value:  518.8<br />
<br />
Final Rank Value (518.8) = Starting Rank Value (514.4) + Head To Head Adjustments (4.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.224[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.057<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 514.4
- 400 + ( ( 0.057 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 514.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     2657 | 2024-03-05 | Alliance        | L   | 0.551      | -            | -                | -                | -         |    -2.01 | mAnGo, MMS, pandi7o, ReegaN, zodi |
|            9 |     2739 | 2024-03-01 | ECLOT           | L   | 0.524      | -            | -                | -                | -         |    -0.33 | mAnGo, MMS, pandi7o, ReegaN, zodi |
|            8 |     2975 | 2024-02-19 | NAVI Junior     | L   | 0.451      | -            | -                | -                | -         |    -3.78 | mAnGo, MMS, pandi7o, ReegaN, zodi |
|            7 |     3452 | 2024-01-24 | PERA            | L   | 0.281      | -            | -                | -                | -         |    -0.83 | mAnGo, MMS, pandi7o, ReegaN, zodi |
|            6 |     3476 | 2024-01-23 | Rebels          | W   | 0.273      | 0.143        | 0.053 (0.002)    | 0.472 (0.018)    | 0 (0.000) |     8.26 | mAnGo, MMS, pandi7o, ReegaN, zodi |
|            5 |     3479 | 2024-01-23 | Sampi           | W   | 0.273      | 0.143        | 0.036 (0.001)    | 0.883 (0.034)    | 0 (0.000) |     7.86 | mAnGo, MMS, pandi7o, ReegaN, zodi |
|            4 |     3498 | 2024-01-22 | ALTERNATE aTTaX | L   | 0.267      | -            | -                | -                | -         |    -0.47 | mAnGo, MMS, pandi7o, ReegaN, zodi |
|            3 |     3501 | 2024-01-22 | M1X KS          | L   | 0.266      | -            | -                | -                | -         |    -0.25 | mAnGo, MMS, pandi7o, ReegaN, zodi |
|            2 |     3507 | 2024-01-22 | PERA            | L   | 0.266      | -            | -                | -                | -         |    -0.79 | mAnGo, MMS, pandi7o, ReegaN, zodi |
|            1 |     3993 | 2024-01-10 | 00NATION        | L   | 0.187      | -            | -                | -                | -         |    -3.22 | mAnGo, MMS, pandi7o, ReegaN, zodi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
