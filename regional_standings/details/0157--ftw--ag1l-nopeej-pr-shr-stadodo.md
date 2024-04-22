### Roster Details<br />
Team Name: FTW<br />
Roster: Ag1l, NOPEEJ, pr, Shr, stadodo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [157](../standings_global.md)<br />
Regional Rank: [105]( ../standings_europe.md)<br />
Final Rank Value:  674.0<br />
<br />
Final Rank Value (674.0) = Starting Rank Value (670.6) + Head To Head Adjustments (3.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.290[<sup>1</sup>](#table2)
- Bounty Collected: 0.233[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.034[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 670.6
- 400 + ( ( 0.140 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 670.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     3098 | 2023-11-24 | Rhyno          | L   | 0.198      | -            | -                | -                | -         |    -2.20 | Ag1l, NOPEEJ, pr, Shr, stadodo |
|           11 |     3169 | 2023-11-19 | Rhyno          | L   | 0.166      | -            | -                | -                | -         |    -1.87 | Ag1l, NOPEEJ, pr, Shr, stadodo |
|           10 |     3190 | 2023-11-18 | Rhyno          | W   | 0.160      | 0.337        | 0.019 (0.001)    | 0.171 (0.009)    | 1 (0.160) |     3.27 | Ag1l, NOPEEJ, pr, Shr, stadodo |
|            9 |     3208 | 2023-11-18 | Los Alpacas    | W   | 0.158      | 0.337        | 0.003 (0.000)    | 0.007 (0.000)    | 1 (0.158) |     2.13 | Ag1l, NOPEEJ, pr, Shr, stadodo |
|            8 |     3222 | 2023-11-17 | FORZE          | L   | 0.154      | -            | -                | -                | -         |    -1.79 | Ag1l, NOPEEJ, pr, Shr, stadodo |
|            7 |     3266 | 2023-11-16 | Apeks          | W   | 0.146      | 0.143        | 0.193 (0.004)    | 0.687 (0.014)    | 0 (0.000) |     4.42 | Ag1l, NOPEEJ, pr, Shr, stadodo |
|            6 |     3296 | 2023-11-15 | INGLORIOUS     | W   | 0.140      | 0.143        | 0.000 (0.000)    | 0.089 (0.002)    | 0 (0.000) |     1.57 | Ag1l, NOPEEJ, pr, Shr, stadodo |
|            5 |     3302 | 2023-11-15 | PARTIZAN       | W   | 0.140      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.80 | Ag1l, NOPEEJ, pr, Shr, stadodo |
|            4 |     3341 | 2023-11-13 | Permitta       | L   | 0.127      | -            | -                | -                | -         |    -0.97 | Ag1l, NOPEEJ, pr, Shr, stadodo |
|            3 |     3379 | 2023-11-12 | PERA           | L   | 0.119      | -            | -                | -                | -         |    -1.93 | Ag1l, NOPEEJ, pr, Shr, stadodo |
|            2 |     3780 | 2023-10-27 | The Chosen Few | L   | 0.013      | -            | -                | -                | -         |    -0.18 | Ag1l, NOPEEJ, pr, Shr, stadodo |
|            1 |     3809 | 2023-10-26 | Entropiq       | W   | 0.007      | 0.143        | 0.002 (0.000)    | 0.403 (0.000)    | 0 (0.000) |     0.13 | Ag1l, NOPEEJ, pr, Shr, stadodo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($679.85)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-11-25 |      0.206 | $1,358.00      | $279.55         |
| 2023-11-19 |      0.166 | $2,409.00      | $400.31         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
