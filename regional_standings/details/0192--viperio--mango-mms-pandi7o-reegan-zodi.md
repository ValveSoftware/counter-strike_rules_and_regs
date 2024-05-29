### Roster Details<br />
Team Name: Viperio<br />
Roster: mAnGo, MMS, pandi7o, ReegaN, zodi<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [192](../standings_global.md)<br />
Regional Rank: [119]( ../standings_europe.md)<br />
Final Rank Value:  517.4<br />
<br />
Final Rank Value (517.4) = Starting Rank Value (515.4) + Head To Head Adjustments (2.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.232[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.059<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 515.4
- 400 + ( ( 0.059 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 515.4


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
|           12 |     2157 | 2024-03-05 | Alliance        | L   | 0.630      | -            | -                | -                | -         |    -3.12 | mAnGo, MMS, pandi7o, ReegaN, zodi |
|           11 |     2239 | 2024-03-01 | ECLOT           | L   | 0.603      | -            | -                | -                | -         |    -1.01 | mAnGo, MMS, pandi7o, ReegaN, zodi |
|           10 |     2475 | 2024-02-19 | NAVI Junior     | L   | 0.530      | -            | -                | -                | -         |    -4.62 | mAnGo, MMS, pandi7o, ReegaN, zodi |
|            9 |     2952 | 2024-01-24 | PERA            | L   | 0.360      | -            | -                | -                | -         |    -1.25 | mAnGo, MMS, pandi7o, ReegaN, zodi |
|            8 |     2976 | 2024-01-23 | Rebels          | W   | 0.352      | 0.143        | 0.059 (0.003)    | 0.413 (0.021)    | 0 (0.000) |    10.58 | mAnGo, MMS, pandi7o, ReegaN, zodi |
|            7 |     2979 | 2024-01-23 | Sampi           | W   | 0.352      | 0.143        | 0.038 (0.002)    | 0.794 (0.040)    | 0 (0.000) |    10.11 | mAnGo, MMS, pandi7o, ReegaN, zodi |
|            6 |     2998 | 2024-01-22 | ALTERNATE aTTaX | L   | 0.346      | -            | -                | -                | -         |    -0.86 | mAnGo, MMS, pandi7o, ReegaN, zodi |
|            5 |     3001 | 2024-01-22 | ex-Guild Eagles | L   | 0.346      | -            | -                | -                | -         |    -0.77 | mAnGo, MMS, pandi7o, ReegaN, zodi |
|            4 |     3007 | 2024-01-22 | PERA            | L   | 0.345      | -            | -                | -                | -         |    -1.20 | mAnGo, MMS, pandi7o, ReegaN, zodi |
|            3 |     3493 | 2024-01-10 | 00NATION        | L   | 0.266      | -            | -                | -                | -         |    -4.56 | mAnGo, MMS, pandi7o, ReegaN, zodi |
|            2 |     3758 | 2023-12-09 | Duck Duck Goose | L   | 0.053      | -            | -                | -                | -         |    -0.87 | JAUSTERE, MMS, papp, ReegaN, zodi |
|            1 |     3763 | 2023-12-09 | K10             | L   | 0.052      | -            | -                | -                | -         |    -0.43 | JAUSTERE, MMS, papp, ReegaN, zodi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
