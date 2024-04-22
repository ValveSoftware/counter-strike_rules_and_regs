### Roster Details<br />
Team Name: LAG<br />
Roster: based, Experative, nicx, Nyyx, ogwizard<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [66](../standings_global.md)<br />
Regional Rank: [45]( ../standings_europe.md)<br />
Final Rank Value:  890.2<br />
<br />
Final Rank Value (890.2) = Starting Rank Value (989.5) + Head To Head Adjustments (-99.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.400[<sup>1</sup>](#table2)
- Bounty Collected: 0.312[<sup>2</sup>](#table1)
- Opponent Network: 0.167[<sup>2</sup>](#table1)
- LAN Wins: 0.342[<sup>2</sup>](#table1)

The average of these factors is 0.305<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 989.5
- 400 + ( ( 0.305 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 989.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |      323 | 2024-04-10 | Mythic          | W   | 1.000      | 0.477        | 0.003 (0.002)    | 0.413 (0.197)    | 0 (0.000) |    10.30 | based, Experative, nicx, Nyyx, ogwizard |
|           31 |      328 | 2024-04-10 | Mythic          | W   | 1.000      | 0.477        | 0.003 (0.002)    | 0.413 (0.197)    | 0 (0.000) |    11.15 | based, Experative, nicx, Nyyx, ogwizard |
|           30 |      378 | 2024-04-09 | BOSS            | L   | 1.000      | -            | -                | -                | -         |   -17.27 | based, Experative, nicx, Nyyx, ogwizard |
|           29 |      381 | 2024-04-09 | BOSS            | L   | 1.000      | -            | -                | -                | -         |   -18.83 | based, Experative, nicx, Nyyx, ogwizard |
|           28 |      509 | 2024-04-04 | Nouns           | W   | 1.000      | 0.477        | -                | 0.632 (0.302)    | 0 (0.000) |    14.31 | based, Experative, nicx, Nyyx, ogwizard |
|           27 |      514 | 2024-04-04 | Nouns           | L   | 1.000      | -            | -                | -                | -         |   -17.33 | based, Experative, nicx, Nyyx, ogwizard |
|           26 |      555 | 2024-04-03 | Elevate         | L   | 1.000      | -            | -                | -                | -         |   -16.19 | based, Experative, nicx, Nyyx, ogwizard |
|           25 |      558 | 2024-04-03 | Elevate         | W   | 1.000      | 0.477        | 0.038 (0.018)    | 0.431 (0.205)    | 0 (0.000) |    15.27 | based, Experative, nicx, Nyyx, ogwizard |
|           24 |      733 | 2024-03-26 | Wildcard        | L   | 1.000      | -            | -                | -                | -         |   -17.13 | based, Experative, nicx, Nyyx, ogwizard |
|           23 |      737 | 2024-03-26 | Wildcard        | W   | 1.000      | 0.477        | 0.021 (0.010)    | 0.503 (0.240)    | 0 (0.000) |    14.25 | based, Experative, nicx, Nyyx, ogwizard |
|           22 |      819 | 2024-03-20 | Take Flyte      | L   | 0.982      | -            | -                | -                | -         |   -24.11 | based, Experative, nicx, Nyyx, ogwizard |
|           21 |      821 | 2024-03-20 | Take Flyte      | W   | 0.982      | 0.477        | 0.005 (0.002)    | 0.318 (0.149)    | 0 (0.000) |     6.34 | based, Experative, nicx, Nyyx, ogwizard |
|           20 |      862 | 2024-03-17 | G3              | W   | 0.963      | 0.333        | 0.013 (0.004)    | -                | 1 (0.963) |     8.28 | based, Experative, nicx, Nyyx, ogwizard |
|           19 |      864 | 2024-03-17 | my life be like | W   | 0.961      | 0.333        | 0.016 (0.005)    | -                | 1 (0.961) |     7.60 | based, Experative, nicx, Nyyx, ogwizard |
|           18 |      874 | 2024-03-17 | WICKED          | W   | 0.960      | -            | -                | -                | 1 (0.960) |     1.48 | based, Experative, nicx, Nyyx, ogwizard |
|           17 |     1111 | 2024-03-07 | FLUFFY AIMERS   | W   | 0.896      | 0.477        | 0.023 (0.010)    | 0.225 (0.096)    | -         |    12.50 | based, Experative, nicx, Nyyx, ogwizard |
|           16 |     1112 | 2024-03-07 | FLUFFY AIMERS   | L   | 0.895      | -            | -                | -                | -         |   -15.96 | based, Experative, nicx, Nyyx, ogwizard |
|           15 |     1140 | 2024-03-06 | MIGHT           | W   | 0.889      | 0.477        | -                | 0.233 (0.099)    | -         |     8.69 | based, Experative, nicx, Nyyx, ogwizard |
|           14 |     1141 | 2024-03-06 | MIGHT           | L   | 0.889      | -            | -                | -                | -         |   -19.79 | based, Experative, nicx, Nyyx, ogwizard |
|           13 |     1177 | 2024-03-05 | One More        | W   | 0.882      | 0.477        | 0.012 (0.005)    | 0.216 (0.091)    | -         |     6.87 | based, Experative, nicx, Nyyx, ogwizard |
|           12 |     1179 | 2024-03-05 | One More        | W   | 0.882      | 0.477        | 0.012 (0.005)    | 0.216 (0.091)    | -         |     7.29 | based, Experative, nicx, Nyyx, ogwizard |
|           11 |     1391 | 2024-02-24 | Limitless       | L   | 0.815      | -            | -                | -                | -         |   -20.50 | based, Experative, nicx, Nyyx, ogwizard |
|           10 |     1580 | 2024-02-16 | FLUFFY AIMERS   | L   | 0.761      | -            | -                | -                | -         |   -22.08 | based, Experative, nicx, Nyyx, ogwizard |
|            9 |     2395 | 2024-01-14 | Bad News Bears  | W   | 0.542      | -            | -                | -                | -         |     2.10 | based, Experative, Nyyx, ogwizard, X-23 |
|            8 |     2667 | 2023-12-17 | MIGHT           | L   | 0.355      | -            | -                | -                | -         |    -8.95 | based, Experative, Nyyx, ogwizard, X-23 |
|            7 |     2701 | 2023-12-16 | NRG             | L   | 0.349      | -            | -                | -                | -         |    -7.94 | based, Experative, Nyyx, ogwizard, X-23 |
|            6 |     2726 | 2023-12-15 | Rocket          | W   | 0.342      | -            | -                | -                | -         |     1.67 | based, Experative, Nyyx, ogwizard, X-23 |
|            5 |     2754 | 2023-12-13 | Villainous      | W   | 0.329      | -            | -                | -                | -         |     0.81 | based, Experative, Nyyx, ogwizard, X-23 |
|            4 |     2799 | 2023-12-09 | Revenge Nation  | L   | 0.302      | -            | -                | -                | -         |    -7.49 | based, Experative, Nyyx, ogwizard, X-23 |
|            3 |     2802 | 2023-12-09 | Carpe Diem      | L   | 0.302      | -            | -                | -                | -         |    -7.42 | based, Experative, Nyyx, ogwizard, X-23 |
|            2 |     2804 | 2023-12-09 | Kari            | W   | 0.302      | -            | -                | -                | 1 (0.302) |     0.67 | based, Experative, Nyyx, ogwizard, X-23 |
|            1 |     2845 | 2023-12-07 | Pantsu          | L   | 0.289      | -            | -                | -                | -         |    -7.87 | based, Experative, Nyyx, ogwizard, X-23 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,008.72)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-17 |      0.963 | $5,500.00      | $5,295.58       |
| 2023-12-13 |      0.329 | $1,250.00      | $411.27         |
| 2023-12-09 |      0.302 | $1,000.00      | $301.87         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
