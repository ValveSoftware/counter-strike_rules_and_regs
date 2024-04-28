### Roster Details<br />
Team Name: Aurora<br />
Roster: delus1onn, KaiR0N-, Lack1, starix, sugaR<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [166](../standings_global.md)<br />
Regional Rank: [109]( ../standings_europe.md)<br />
Final Rank Value:  692.2<br />
<br />
Final Rank Value (692.2) = Starting Rank Value (677.2) + Head To Head Adjustments (15.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.274[<sup>1</sup>](#table2)
- Bounty Collected: 0.243[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.135<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 677.2
- 400 + ( ( 0.135 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 677.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |     2060 | 2022-10-18 | UNGENTIUM          | L   | 0.420      | -            | -                | -                | -         |    -4.79 | delus1onn, KaiR0N-, Lack1, starix, sugaR  |
|           21 |     2134 | 2022-10-15 | Believe            | L   | 0.400      | -            | -                | -                | -         |    -4.30 | delus1onn, KaiR0N-, Lack1, starix, sugaR  |
|           20 |     2214 | 2022-10-13 | ex-Finest          | L   | 0.386      | -            | -                | -                | -         |    -3.42 | delus1onn, KaiR0N-, Lack1, starix, sugaR  |
|           19 |     2247 | 2022-10-12 | UNGENTIUM          | W   | 0.380      | 0.143        | 0.015 (0.001)    | 0.474 (0.026)    | 0 (0.000) |     7.78 | delus1onn, KaiR0N-, Lack1, starix, sugaR  |
|           18 |     2339 | 2022-10-07 | Sangal             | L   | 0.347      | -            | -                | -                | -         |    -2.08 | delus1onn, KaiR0N-, Lack1, RAiLWAY, sugaR |
|           17 |     2365 | 2022-10-06 | Eternal Fire       | L   | 0.339      | -            | -                | -                | -         |    -2.02 | delus1onn, KaiR0N-, Lack1, RAiLWAY, sugaR |
|           16 |     2380 | 2022-10-05 | Iron Branch        | W   | 0.334      | 0.371        | 0.002 (0.000)    | 0.070 (0.009)    | 0 (0.000) |     5.40 | delus1onn, KaiR0N-, Lack1, RAiLWAY, sugaR |
|           15 |     2410 | 2022-10-05 | GamerLegion        | L   | 0.331      | -            | -                | -                | -         |    -0.72 | delus1onn, KaiR0N-, Lack1, RAiLWAY, sugaR |
|           14 |     2426 | 2022-10-04 | fnatic             | L   | 0.325      | -            | -                | -                | -         |    -0.13 | delus1onn, KaiR0N-, Lack1, RAiLWAY, sugaR |
|           13 |     2435 | 2022-10-03 | Believe            | W   | 0.320      | 0.371        | 0.006 (0.001)    | 0.344 (0.041)    | 0 (0.000) |     6.26 | delus1onn, KaiR0N-, Lack1, RAiLWAY, sugaR |
|           12 |     2521 | 2022-09-29 | Permitta           | L   | 0.293      | -            | -                | -                | -         |    -2.51 | delus1onn, KaiR0N-, Lack1, RAiLWAY, sugaR |
|           11 |     2545 | 2022-09-28 | ex-Into the Breach | L   | 0.287      | -            | -                | -                | -         |    -2.73 | delus1onn, KaiR0N-, Lack1, RAiLWAY, sugaR |
|           10 |     2595 | 2022-09-26 | EYEBALLERS         | W   | 0.273      | 0.371        | 0.017 (0.002)    | 0.776 (0.079)    | 0 (0.000) |     6.72 | delus1onn, KaiR0N-, Lack1, RAiLWAY, sugaR |
|            9 |     2709 | 2022-09-23 | B8                 | W   | 0.253      | 0.371        | 0.000 (0.000)    | 0.148 (0.014)    | 0 (0.000) |     2.94 | delus1onn, KaiR0N-, Lack1, RAiLWAY, sugaR |
|            8 |     2779 | 2022-09-21 | ex-Into the Breach | W   | 0.240      | 0.371        | 0.005 (0.000)    | 0.520 (0.046)    | 0 (0.000) |     5.53 | delus1onn, KaiR0N-, Lack1, RAiLWAY, sugaR |
|            7 |     3355 | 2022-09-02 | 1WIN               | L   | 0.113      | -            | -                | -                | -         |    -0.96 | delus1onn, KaiR0N-, Lack1, RAiLWAY, sugaR |
|            6 |     3531 | 2022-08-27 | 500                | W   | 0.072      | 0.435        | 0.085 (0.003)    | 0.760 (0.024)    | 0 (0.000) |     2.06 | delus1onn, KaiR0N-, Lack1, RAiLWAY, sugaR |
|            5 |     3575 | 2022-08-25 | Enterprise         | W   | 0.059      | 0.435        | 0.042 (0.001)    | 0.193 (0.005)    | 0 (0.000) |     1.41 | delus1onn, KaiR0N-, Lack1, RAiLWAY, sugaR |
|            4 |     3646 | 2022-08-22 | Sampi              | W   | 0.039      | 0.435        | 0.001 (0.000)    | 0.016 (0.000)    | 0 (0.000) |     0.56 | delus1onn, KaiR0N-, Lack1, RAiLWAY, sugaR |
|            3 |     3763 | 2022-08-17 | MOUZ               | L   | 0.006      | -            | -                | -                | -         |    -0.01 | delus1onn, KaiR0N-, Lack1, RAiLWAY, sugaR |
|            2 |     3765 | 2022-08-17 | Falcons            | L   | 0.006      | -            | -                | -                | -         |    -0.03 | delus1onn, KaiR0N-, Lack1, RAiLWAY, sugaR |
|            1 |     3791 | 2022-08-16 | BLUEJAYS           | W   | 0.001      | 0.143        | 0.102 (0.000)    | 0.490 (0.000)    | 0 (0.000) |     0.02 | delus1onn, KaiR0N-, Lack1, RAiLWAY, sugaR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,076.11)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
