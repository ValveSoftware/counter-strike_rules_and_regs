### Roster Details<br />
Team Name: LAG<br />
Roster: based, Experative, nicx, Nyyx, ogwizard<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [78](../standings_global.md)<br />
Regional Rank: [55]( ../standings_europe.md)<br />
Final Rank Value:  886.2<br />
<br />
Final Rank Value (886.2) = Starting Rank Value (960.1) + Head To Head Adjustments (-73.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.402[<sup>1</sup>](#table2)
- Bounty Collected: 0.309[<sup>2</sup>](#table1)
- Opponent Network: 0.150[<sup>2</sup>](#table1)
- LAN Wins: 0.315[<sup>2</sup>](#table1)

The average of these factors is 0.294<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 960.1
- 400 + ( ( 0.294 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 960.1


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
|           32 |      619 | 2024-04-10 | Mythic          | W   | 1.000      | 0.477        | 0.003 (0.001)    | 0.402 (0.192)    | 0 (0.000) |    10.89 | based, Experative, nicx, Nyyx, ogwizard |
|           31 |      624 | 2024-04-10 | Mythic          | W   | 1.000      | 0.477        | 0.003 (0.001)    | 0.402 (0.192)    | 0 (0.000) |    11.81 | based, Experative, nicx, Nyyx, ogwizard |
|           30 |      674 | 2024-04-09 | BOSS            | L   | 1.000      | -            | -                | -                | -         |   -16.20 | based, Experative, nicx, Nyyx, ogwizard |
|           29 |      677 | 2024-04-09 | BOSS            | L   | 1.000      | -            | -                | -                | -         |   -17.68 | based, Experative, nicx, Nyyx, ogwizard |
|           28 |      805 | 2024-04-04 | Nouns           | W   | 0.989      | 0.477        | -                | 0.609 (0.287)    | 0 (0.000) |    14.37 | based, Experative, nicx, Nyyx, ogwizard |
|           27 |      810 | 2024-04-04 | Nouns           | L   | 0.988      | -            | -                | -                | -         |   -16.89 | based, Experative, nicx, Nyyx, ogwizard |
|           26 |      851 | 2024-04-03 | Elevate         | L   | 0.982      | -            | -                | -                | -         |   -15.72 | based, Experative, nicx, Nyyx, ogwizard |
|           25 |      854 | 2024-04-03 | Elevate         | W   | 0.982      | 0.477        | 0.036 (0.017)    | 0.361 (0.169)    | 0 (0.000) |    15.21 | based, Experative, nicx, Nyyx, ogwizard |
|           24 |     1029 | 2024-03-26 | Wildcard        | L   | 0.929      | -            | -                | -                | -         |   -14.30 | based, Experative, nicx, Nyyx, ogwizard |
|           23 |     1033 | 2024-03-26 | Wildcard        | W   | 0.929      | 0.477        | 0.025 (0.011)    | 0.490 (0.217)    | 0 (0.000) |    15.08 | based, Experative, nicx, Nyyx, ogwizard |
|           22 |     1115 | 2024-03-20 | Take Flyte      | L   | 0.889      | -            | -                | -                | -         |   -21.64 | based, Experative, nicx, Nyyx, ogwizard |
|           21 |     1117 | 2024-03-20 | Take Flyte      | W   | 0.888      | 0.477        | 0.004 (0.002)    | 0.282 (0.119)    | 0 (0.000) |     6.02 | based, Experative, nicx, Nyyx, ogwizard |
|           20 |     1158 | 2024-03-17 | G3              | W   | 0.870      | 0.333        | 0.013 (0.004)    | -                | 1 (0.870) |     7.76 | based, Experative, nicx, Nyyx, ogwizard |
|           19 |     1160 | 2024-03-17 | my life be like | W   | 0.868      | 0.333        | 0.017 (0.005)    | -                | 1 (0.868) |     7.12 | based, Experative, nicx, Nyyx, ogwizard |
|           18 |     1170 | 2024-03-17 | WICKED          | W   | 0.867      | -            | -                | -                | 1 (0.867) |     1.46 | based, Experative, nicx, Nyyx, ogwizard |
|           17 |     1407 | 2024-03-07 | FLUFFY AIMERS   | W   | 0.802      | 0.477        | 0.027 (0.010)    | 0.207 (0.079)    | -         |    11.48 | based, Experative, nicx, Nyyx, ogwizard |
|           16 |     1408 | 2024-03-07 | FLUFFY AIMERS   | L   | 0.802      | -            | -                | -                | -         |   -14.05 | based, Experative, nicx, Nyyx, ogwizard |
|           15 |     1436 | 2024-03-06 | MIGHT           | W   | 0.796      | 0.477        | -                | 0.190 (0.072)    | -         |     7.61 | based, Experative, nicx, Nyyx, ogwizard |
|           14 |     1437 | 2024-03-06 | MIGHT           | L   | 0.795      | -            | -                | -                | -         |   -17.90 | based, Experative, nicx, Nyyx, ogwizard |
|           13 |     1473 | 2024-03-05 | One More        | W   | 0.789      | 0.477        | 0.010 (0.004)    | 0.231 (0.087)    | -         |     6.61 | based, Experative, nicx, Nyyx, ogwizard |
|           12 |     1475 | 2024-03-05 | One More        | W   | 0.789      | 0.477        | 0.010 (0.004)    | 0.231 (0.087)    | -         |     6.98 | based, Experative, nicx, Nyyx, ogwizard |
|           11 |     1687 | 2024-02-24 | Limitless       | L   | 0.721      | -            | -                | -                | -         |   -18.07 | based, Experative, nicx, Nyyx, ogwizard |
|           10 |     1876 | 2024-02-16 | FLUFFY AIMERS   | L   | 0.668      | -            | -                | -                | -         |   -19.27 | based, Experative, nicx, Nyyx, ogwizard |
|            9 |     2691 | 2024-01-14 | Bad News Bears  | W   | 0.449      | -            | -                | -                | -         |     0.99 | based, Experative, Nyyx, ogwizard, X-23 |
|            8 |     2963 | 2023-12-17 | MIGHT           | L   | 0.262      | -            | -                | -                | -         |    -6.58 | based, Experative, Nyyx, ogwizard, X-23 |
|            7 |     2997 | 2023-12-16 | NRG             | L   | 0.255      | -            | -                | -                | -         |    -5.72 | based, Experative, Nyyx, ogwizard, X-23 |
|            6 |     3022 | 2023-12-15 | Rocket          | W   | 0.249      | -            | -                | -                | -         |     1.28 | based, Experative, Nyyx, ogwizard, X-23 |
|            5 |     3050 | 2023-12-13 | Villainous      | W   | 0.235      | -            | -                | -                | -         |     0.64 | based, Experative, Nyyx, ogwizard, X-23 |
|            4 |     3095 | 2023-12-09 | Revenge Nation  | L   | 0.209      | -            | -                | -                | -         |    -5.07 | based, Experative, Nyyx, ogwizard, X-23 |
|            3 |     3098 | 2023-12-09 | Carpe Diem      | L   | 0.209      | -            | -                | -                | -         |    -5.16 | based, Experative, Nyyx, ogwizard, X-23 |
|            2 |     3100 | 2023-12-09 | Kari            | W   | 0.208      | -            | -                | -                | 1 (0.208) |     0.28 | based, Experative, Nyyx, ogwizard, X-23 |
|            1 |     3141 | 2023-12-07 | Pantsu          | L   | 0.196      | -            | -                | -                | -         |    -5.27 | based, Experative, Nyyx, ogwizard, X-23 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,285.60)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-17 |      0.870 | $5,500.00      | $4,782.40       |
| 2023-12-13 |      0.236 | $1,250.00      | $294.64         |
| 2023-12-09 |      0.209 | $1,000.00      | $208.57         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
