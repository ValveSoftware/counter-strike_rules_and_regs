### Roster Details<br />
Team Name: Vitality<br />
Roster: apEX, flameZ, mezii, Spinx, ZywOo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [6](../standings_global.md)<br />
Regional Rank: [6]( ../standings_europe.md)<br />
Final Rank Value:  1774.2<br />
<br />
Final Rank Value (1774.2) = Starting Rank Value (1803.3) + Head To Head Adjustments (-29.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.660[<sup>2</sup>](#table1)
- Opponent Network: 0.369[<sup>2</sup>](#table1)
- LAN Wins: 0.877[<sup>2</sup>](#table1)

The average of these factors is 0.727<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1803.3
- 400 + ( ( 0.727 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1803.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |      652 | 2024-03-30 | FaZe          | L   | 1.000      | -            | -                | -                | -         |    -9.14 | apEX, flameZ, mezii, Spinx, ZywOo |
|           23 |      679 | 2024-03-28 | Cloud9        | W   | 1.000      | 1.000        | 0.475 (0.475)    | 0.623 (0.623)    | 1 (1.000) |    11.21 | apEX, flameZ, mezii, Spinx, ZywOo |
|           22 |      766 | 2024-03-23 | Complexity    | W   | 1.000      | 1.000        | 0.264 (0.264)    | 0.353 (0.352)    | 1 (1.000) |     3.32 | apEX, flameZ, mezii, Spinx, ZywOo |
|           21 |      783 | 2024-03-22 | Imperial      | W   | 0.992      | 1.000        | 0.569 (0.565)    | 1.000 (0.992)    | 1 (0.992) |     8.13 | apEX, flameZ, mezii, Spinx, ZywOo |
|           20 |      802 | 2024-03-21 | TheMongolz    | W   | 0.986      | 1.000        | 0.247 (0.244)    | 0.587 (0.579)    | 1 (0.986) |     2.71 | apEX, flameZ, mezii, Spinx, ZywOo |
|           19 |      809 | 2024-03-21 | Eternal Fire  | L   | 0.985      | -            | -                | -                | -         |   -20.93 | apEX, flameZ, mezii, Spinx, ZywOo |
|           18 |     1464 | 2024-02-21 | ENCE          | W   | 0.792      | -            | -                | -                | 1 (0.792) |     2.48 | apEX, flameZ, mezii, Spinx, ZywOo |
|           17 |     1494 | 2024-02-20 | Cloud9        | L   | 0.786      | -            | -                | -                | -         |   -17.34 | apEX, flameZ, mezii, Spinx, ZywOo |
|           16 |     1511 | 2024-02-19 | HEROIC        | W   | 0.780      | -            | -                | -                | 1 (0.780) |     5.60 | apEX, flameZ, mezii, Spinx, ZywOo |
|           15 |     1527 | 2024-02-19 | GamerLegion   | W   | 0.778      | -            | -                | -                | 1 (0.778) |     2.00 | apEX, flameZ, mezii, Spinx, ZywOo |
|           14 |     1776 | 2024-02-05 | HEROIC        | L   | 0.686      | -            | -                | -                | -         |   -17.07 | apEX, flameZ, mezii, Spinx, ZywOo |
|           13 |     1810 | 2024-02-03 | ENCE          | L   | 0.674      | -            | -                | -                | -         |   -19.77 | apEX, flameZ, mezii, Spinx, ZywOo |
|           12 |     1960 | 2024-01-27 | Astralis      | W   | 0.625      | 0.581        | -                | 0.427 (0.155)    | 1 (0.625) |     1.77 | apEX, flameZ, mezii, Spinx, ZywOo |
|           11 |     1979 | 2024-01-26 | Falcons       | W   | 0.618      | -            | -                | -                | 1 (0.618) |     0.97 | apEX, flameZ, mezii, Spinx, ZywOo |
|           10 |     2026 | 2024-01-23 | Astralis      | L   | 0.600      | -            | -                | -                | -         |   -17.38 | apEX, flameZ, mezii, Spinx, ZywOo |
|            9 |     2057 | 2024-01-22 | OG            | W   | 0.593      | 0.581        | 0.497 (0.171)    | 0.553 (0.190)    | 1 (0.593) |     0.89 | apEX, flameZ, mezii, Spinx, ZywOo |
|            8 |     2684 | 2023-12-17 | FaZe          | W   | 0.352      | 1.000        | 1.000 (0.352)    | 0.737 (0.260)    | -         |     8.07 | apEX, flameZ, mezii, Spinx, ZywOo |
|            7 |     2719 | 2023-12-16 | Natus Vincere | W   | 0.346      | 1.000        | 1.000 (0.346)    | 0.499 (0.172)    | -         |     7.23 | apEX, flameZ, mezii, Spinx, ZywOo |
|            6 |     2751 | 2023-12-14 | Cloud9        | W   | 0.331      | 1.000        | 0.475 (0.157)    | 0.623 (0.206)    | -         |     3.31 | apEX, flameZ, mezii, Spinx, ZywOo |
|            5 |     2762 | 2023-12-13 | Natus Vincere | W   | 0.324      | 1.000        | 1.000 (0.324)    | 0.499 (0.162)    | -         |     6.94 | apEX, flameZ, mezii, Spinx, ZywOo |
|            4 |     3050 | 2023-11-26 | FaZe          | W   | 0.213      | 0.729        | 1.000 (0.155)    | -                | -         |     5.04 | apEX, flameZ, mezii, Spinx, ZywOo |
|            3 |     3071 | 2023-11-25 | Cloud9        | W   | 0.206      | -            | -                | -                | -         |     2.32 | apEX, flameZ, mezii, Spinx, ZywOo |
|            2 |     3106 | 2023-11-23 | Complexity    | W   | 0.194      | -            | -                | -                | -         |     0.55 | apEX, flameZ, mezii, Spinx, ZywOo |
|            1 |     3125 | 2023-11-22 | HEROIC        | W   | 0.186      | -            | -                | -                | -         |     0.02 | apEX, flameZ, mezii, Spinx, ZywOo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($320,172.46)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-31 |      1.000 | $80,000.00     | $80,000.00      |
| 2024-02-11 |      0.726 | $10,000.00     | $7,264.46       |
| 2024-01-28 |      0.633 | $22,500.00     | $14,247.40      |
| 2023-12-17 |      0.352 | $500,000.00    | $176,106.56     |
| 2023-11-26 |      0.213 | $200,000.00    | $42,554.04      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
