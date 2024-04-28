### Roster Details<br />
Team Name: OneTap<br />
Roster: Ciocardau, GEOHYPE, MoDo, smekk-, swiiffter<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [120](../standings_global.md)<br />
Regional Rank: [82]( ../standings_europe.md)<br />
Final Rank Value:  751.9<br />
<br />
Final Rank Value (751.9) = Starting Rank Value (740.4) + Head To Head Adjustments (11.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.295[<sup>1</sup>](#table2)
- Bounty Collected: 0.210[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.151[<sup>2</sup>](#table1)

The average of these factors is 0.166<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 740.4
- 400 + ( ( 0.166 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 740.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     1154 | 2022-12-05 | farfaraway           | L   | 0.737      | -            | -                | -                | -         |    -5.67 | Ciocardau, GEOHYPE, MoDo, smekk-, swiiffter |
|           15 |     1155 | 2022-12-04 | IHC                  | L   | 0.737      | -            | -                | -                | -         |    -1.14 | Ciocardau, GEOHYPE, MoDo, smekk-, swiiffter |
|           14 |     1193 | 2022-12-04 | Hong Kong            | W   | 0.731      | 0.143        | 0.000 (0.000)    | 0.030 (0.003)    | 1 (0.731) |     3.46 | Ciocardau, GEOHYPE, MoDo, smekk-, swiiffter |
|           13 |     1196 | 2022-12-03 | Bosnia & Herzegovina | W   | 0.730      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.730) |     2.78 | Ciocardau, GEOHYPE, MoDo, smekk-, swiiffter |
|           12 |     2102 | 2022-10-16 | NeedDOCTOR           | W   | 0.407      | 0.331        | 0.002 (0.000)    | 0.089 (0.012)    | 0 (0.000) |     5.24 | Ciocardau, MoDo, smekk-, swiiffter, zewts   |
|           11 |     2130 | 2022-10-15 | Juggernauts          | W   | 0.400      | 0.331        | 0.004 (0.000)    | 0.190 (0.025)    | 0 (0.000) |     5.73 | Ciocardau, MoDo, smekk-, swiiffter, zewts   |
|           10 |     2182 | 2022-10-14 | Nexus                | W   | 0.393      | 0.331        | 0.001 (0.000)    | 0.162 (0.021)    | 0 (0.000) |     5.95 | Ciocardau, MoDo, smekk-, swiiffter, zewts   |
|            9 |     2549 | 2022-09-28 | Believe              | L   | 0.286      | -            | -                | -                | -         |    -4.10 | Ciocardau, GEOHYPE, MoDo, smekk-, swiiffter |
|            8 |     2590 | 2022-09-26 | B8                   | W   | 0.273      | 0.371        | 0.000 (0.000)    | 0.148 (0.015)    | 0 (0.000) |     2.66 | Ciocardau, GEOHYPE, MoDo, smekk-, swiiffter |
|            7 |     2650 | 2022-09-24 | X                    | W   | 0.260      | 0.371        | 0.000 (0.000)    | 0.034 (0.003)    | 0 (0.000) |     1.78 | Ciocardau, GEOHYPE, MoDo, smekk-, swiiffter |
|            6 |     2713 | 2022-09-23 | EYEBALLERS           | L   | 0.252      | -            | -                | -                | -         |    -2.12 | Ciocardau, GEOHYPE, MoDo, smekk-, swiiffter |
|            5 |     2811 | 2022-09-20 | ThunderFlash         | W   | 0.233      | 0.371        | 0.010 (0.001)    | 0.054 (0.005)    | 0 (0.000) |     3.50 | Ciocardau, GEOHYPE, MoDo, smekk-, swiiffter |
|            4 |     3078 | 2022-09-11 | allStars             | L   | 0.173      | -            | -                | -                | -         |    -3.61 | Ciocardau, GEOHYPE, MoDo, smekk-, swiiffter |
|            3 |     3089 | 2022-09-11 | Nexus                | L   | 0.172      | -            | -                | -                | -         |    -2.28 | Ciocardau, GEOHYPE, MoDo, smekk-, swiiffter |
|            2 |     3513 | 2022-08-27 | BLUEJAYS             | L   | 0.073      | -            | -                | -                | -         |    -0.27 | Ciocardau, GEOHYPE, MoDo, smekk-, swiiffter |
|            1 |     3621 | 2022-08-23 | ECSTATIC             | L   | 0.046      | -            | -                | -                | -         |    -0.45 | Ciocardau, GEOHYPE, MoDo, smekk-, swiiffter |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,944.11)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
