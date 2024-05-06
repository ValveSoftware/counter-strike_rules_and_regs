### Roster Details<br />
Team Name: Viperio<br />
Roster: mAnGo, MMS, pandi7o, ReegaN, zodi<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [187](../standings_global.md)<br />
Regional Rank: [116]( ../standings_europe.md)<br />
Final Rank Value:  531.5<br />
<br />
Final Rank Value (531.5) = Starting Rank Value (528.7) + Head To Head Adjustments (2.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.262[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.068<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 528.7
- 400 + ( ( 0.068 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 528.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     1506 | 2024-03-05 | Alliance        | L   | 0.784      | -            | -                | -                | -         |    -3.54 | mAnGo, MMS, pandi7o, ReegaN, zodi    |
|           13 |     1588 | 2024-03-01 | ECLOT           | L   | 0.757      | -            | -                | -                | -         |    -0.99 | mAnGo, MMS, pandi7o, ReegaN, zodi    |
|           12 |     1824 | 2024-02-19 | NAVI Junior     | L   | 0.684      | -            | -                | -                | -         |    -5.59 | mAnGo, MMS, pandi7o, ReegaN, zodi    |
|           11 |     2301 | 2024-01-24 | PERA            | L   | 0.514      | -            | -                | -                | -         |    -1.58 | mAnGo, MMS, pandi7o, ReegaN, zodi    |
|           10 |     2325 | 2024-01-23 | Rebels          | W   | 0.506      | 0.143        | 0.111 (0.008)    | 0.375 (0.027)    | 0 (0.000) |    15.30 | mAnGo, MMS, pandi7o, ReegaN, zodi    |
|            9 |     2328 | 2024-01-23 | Sampi           | W   | 0.506      | 0.143        | 0.101 (0.007)    | 0.731 (0.053)    | 0 (0.000) |    14.97 | mAnGo, MMS, pandi7o, ReegaN, zodi    |
|            8 |     2347 | 2024-01-22 | ALTERNATE aTTaX | L   | 0.500      | -            | -                | -                | -         |    -1.10 | mAnGo, MMS, pandi7o, ReegaN, zodi    |
|            7 |     2350 | 2024-01-22 | Guild Eagles    | L   | 0.500      | -            | -                | -                | -         |    -0.76 | mAnGo, MMS, pandi7o, ReegaN, zodi    |
|            6 |     2356 | 2024-01-22 | PERA            | L   | 0.499      | -            | -                | -                | -         |    -1.53 | mAnGo, MMS, pandi7o, ReegaN, zodi    |
|            5 |     2842 | 2024-01-10 | 00NATION        | L   | 0.421      | -            | -                | -                | -         |    -7.11 | mAnGo, MMS, pandi7o, ReegaN, zodi    |
|            4 |     3107 | 2023-12-09 | Coalesce        | L   | 0.207      | -            | -                | -                | -         |    -1.94 | JAUSTERE, MMS, papp, ReegaN, zodi    |
|            3 |     3112 | 2023-12-09 | K10             | L   | 0.206      | -            | -                | -                | -         |    -1.34 | JAUSTERE, MMS, papp, ReegaN, zodi    |
|            2 |     3441 | 2023-11-21 | JANO            | L   | 0.084      | -            | -                | -                | -         |    -0.73 | allu, doto, Jelo, Jerppa, Sm1llee    |
|            1 |     3454 | 2023-11-20 | Lazer Cats      | L   | 0.078      | -            | -                | -                | -         |    -1.27 | Adam9130, AwaykeN, MMS, ReegaN, zodi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
