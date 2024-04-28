### Roster Details<br />
Team Name: Vitality<br />
Roster: apEX, dupreeh, Magisk, Spinx, ZywOo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [7](../standings_global.md)<br />
Regional Rank: [6]( ../standings_europe.md)<br />
Final Rank Value:  1580.9<br />
<br />
Final Rank Value (1580.9) = Starting Rank Value (1592.2) + Head To Head Adjustments (-11.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.688[<sup>1</sup>](#table2)
- Bounty Collected: 0.596[<sup>2</sup>](#table1)
- Opponent Network: 0.228[<sup>2</sup>](#table1)
- LAN Wins: 0.818[<sup>2</sup>](#table1)

The average of these factors is 0.583<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1592.2
- 400 + ( ( 0.583 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1592.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |       45 | 2023-02-10 | Liquid            | L   | 1.000      | -            | -                | -                | -         |   -10.22 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           39 |      105 | 2023-02-07 | Heroic            | L   | 1.000      | -            | -                | -                | -         |   -10.06 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           38 |      122 | 2023-02-06 | fnatic            | W   | 1.000      | 1.000        | 0.243 (0.243)    | 0.454 (0.454)    | 1 (1.000) |    11.09 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           37 |      170 | 2023-02-04 | Ninjas in Pyjamas | W   | 1.000      | 1.000        | 0.136 (0.136)    | 0.253 (0.253)    | 1 (1.000) |     5.47 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           36 |      431 | 2023-01-25 | Heroic            | W   | 1.000      | 0.571        | 0.608 (0.347)    | 0.560 (0.320)    | 1 (1.000) |    22.00 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           35 |      550 | 2023-01-21 | Evil Geniuses     | W   | 1.000      | 0.571        | -                | 0.234 (0.134)    | 1 (1.000) |     2.10 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           34 |      585 | 2023-01-19 | Astralis          | W   | 1.000      | 0.571        | 0.149 (0.085)    | 0.538 (0.308)    | 1 (1.000) |     5.54 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           33 |      839 | 2022-12-16 | G2                | L   | 0.813      | -            | -                | -                | -         |    -3.03 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           32 |      867 | 2022-12-15 | OG                | L   | 0.806      | -            | -                | -                | -         |   -15.79 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           31 |      887 | 2022-12-14 | Natus Vincere     | W   | 0.800      | 1.000        | 0.358 (0.286)    | 0.372 (0.297)    | 1 (0.800) |    15.02 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           30 |     1684 | 2022-11-07 | ENCE              | L   | 0.553      | -            | -                | -                | -         |   -14.53 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           29 |     1702 | 2022-11-06 | MOUZ              | L   | 0.545      | -            | -                | -                | -         |   -14.05 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           28 |     1713 | 2022-11-05 | FaZe              | W   | 0.541      | 1.000        | 0.433 (0.234)    | 0.358 (0.194)    | 1 (0.541) |    10.86 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           27 |     1720 | 2022-11-05 | Natus Vincere     | L   | 0.540      | -            | -                | -                | -         |    -5.88 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           26 |     1736 | 2022-11-03 | OG                | W   | 0.526      | -            | -                | -                | 1 (0.526) |     6.49 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           25 |     1746 | 2022-11-02 | Grayhound         | W   | 0.520      | -            | -                | -                | 1 (0.520) |     0.28 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           24 |     1763 | 2022-11-01 | Outsiders         | L   | 0.512      | -            | -                | -                | -         |    -7.45 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           23 |     1766 | 2022-10-31 | GamerLegion       | L   | 0.508      | -            | -                | -                | -         |   -14.62 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           22 |     1777 | 2022-10-31 | Imperial          | W   | 0.506      | -            | -                | -                | 1 (0.506) |     0.32 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           21 |     1990 | 2022-10-21 | Astralis          | L   | 0.439      | -            | -                | -                | -         |   -11.73 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           20 |     2045 | 2022-10-19 | TYLOO             | W   | 0.426      | -            | -                | -                | -         |     0.08 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           19 |     2317 | 2022-10-09 | Heroic            | L   | 0.358      | -            | -                | -                | -         |    -3.10 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           18 |     2331 | 2022-10-08 | MOUZ              | W   | 0.351      | -            | -                | -                | -         |     1.45 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           17 |     2373 | 2022-10-06 | Monte             | W   | 0.338      | -            | -                | -                | -         |     0.07 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           16 |     2390 | 2022-10-05 | BIG               | L   | 0.333      | -            | -                | -                | -         |    -8.23 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           15 |     2423 | 2022-10-04 | FANTASY           | W   | 0.326      | -            | -                | -                | -         |     0.02 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           14 |     2440 | 2022-10-02 | Liquid            | W   | 0.314      | 0.922        | 0.760 (0.220)    | 0.450 (0.130)    | -         |     7.53 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           13 |     2466 | 2022-10-01 | G2                | W   | 0.307      | 0.922        | 1.000 (0.283)    | 0.326 (0.092)    | -         |     8.71 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           12 |     2496 | 2022-09-30 | Outsiders         | W   | 0.299      | 0.922        | 0.801 (0.221)    | 0.353 (0.097)    | -         |     5.17 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           11 |     3286 | 2022-09-04 | Spirit            | W   | 0.127      | -            | -                | -                | -         |     0.86 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           10 |     3312 | 2022-09-03 | Natus Vincere     | W   | 0.120      | 0.922        | 0.358 (0.040)    | -                | -         |     2.39 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|            9 |     3347 | 2022-09-02 | fnatic            | W   | 0.114      | -            | -                | -                | -         |     1.27 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|            8 |     3381 | 2022-09-01 | Ninjas in Pyjamas | W   | 0.107      | -            | -                | -                | -         |     0.04 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|            7 |     3417 | 2022-08-31 | Endpoint          | W   | 0.099      | -            | -                | -                | -         |     0.06 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|            6 |     3457 | 2022-08-28 | G2                | L   | 0.081      | -            | -                | -                | -         |    -0.24 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|            5 |     3502 | 2022-08-27 | Natus Vincere     | L   | 0.073      | -            | -                | -                | -         |    -0.84 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|            4 |     3562 | 2022-08-26 | G2                | W   | 0.067      | -            | -                | -                | -         |     1.91 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|            3 |     3737 | 2022-08-19 | Astralis          | L   | 0.020      | -            | -                | -                | -         |    -0.52 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|            2 |     3741 | 2022-08-19 | Ninjas in Pyjamas | W   | 0.019      | -            | -                | -                | -         |     0.01 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|            1 |     3743 | 2022-08-19 | OG                | W   | 0.018      | -            | -                | -                | -         |     0.23 | apEX, dupreeh, Magisk, Spinx, ZywOo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($166,879.15)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.35) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-12 |      1.000 | $40,000.00     | $40,000.00      |
| 2023-01-29 |      1.000 | $27,500.00     | $27,500.00      |
| 2022-12-18 |      0.824 | $25,000.00     | $20,612.29      |
| 2022-11-13 |      0.594 | $20,000.00     | $11,871.47      |
| 2022-10-23 |      0.453 | $7,500.00      | $3,400.28       |
| 2022-10-02 |      0.314 | $200,000.00    | $62,807.89      |
| 2022-08-28 |      0.081 | $8,500.00      | $687.22         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
