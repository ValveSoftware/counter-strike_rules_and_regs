### Roster Details<br />
Team Name: EG Black<br />
Roster: jeorgesnorts, junior, RUSH, stanislaw, Walco<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [62](../standings_global.md)<br />
Regional Rank: [14]( ../standings_americas.md)<br />
Final Rank Value:  918.2<br />
<br />
Final Rank Value (918.2) = Starting Rank Value (871.6) + Head To Head Adjustments (46.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.383[<sup>1</sup>](#table2)
- Bounty Collected: 0.342[<sup>2</sup>](#table1)
- Opponent Network: 0.130[<sup>2</sup>](#table1)
- LAN Wins: 0.067[<sup>2</sup>](#table1)

The average of these factors is 0.230<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 871.6
- 400 + ( ( 0.230 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 871.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |      695 | 2023-01-14 | Strife               | L   | 1.000      | -            | -                | -                | -         |   -20.97 | jeorgesnorts, junior, RUSH, stanislaw, Walco |
|           34 |      707 | 2023-01-13 | Mythic               | W   | 1.000      | 0.310        | -                | 0.203 (0.063)    | 0 (0.000) |     6.58 | jeorgesnorts, junior, RUSH, stanislaw, Walco |
|           33 |      758 | 2022-12-18 | MIBR                 | L   | 0.829      | -            | -                | -                | -         |   -11.67 | jeorgesnorts, RUSH, stanislaw, Walco, wiz    |
|           32 |      855 | 2022-12-15 | MIBR                 | W   | 0.809      | 0.435        | 0.089 (0.031)    | 0.586 (0.206)    | 0 (0.000) |    13.91 | jeorgesnorts, RUSH, stanislaw, Walco, wiz    |
|           31 |      883 | 2022-12-14 | Nouns                | W   | 0.803      | 0.435        | 0.059 (0.021)    | 0.589 (0.205)    | 0 (0.000) |    12.71 | jeorgesnorts, RUSH, stanislaw, Walco, wiz    |
|           30 |     1099 | 2022-12-06 | TeamOne              | W   | 0.748      | 0.435        | 0.028 (0.009)    | 0.445 (0.145)    | 0 (0.000) |    12.23 | jeorgesnorts, RUSH, stanislaw, Walco, wiz    |
|           29 |     1135 | 2022-12-05 | Strife               | W   | 0.742      | 0.435        | 0.015 (0.005)    | 0.314 (0.101)    | 0 (0.000) |     8.77 | jeorgesnorts, RUSH, stanislaw, Walco, wiz    |
|           28 |     1159 | 2022-12-04 | Detonate             | W   | 0.735      | 0.435        | 0.008 (0.003)    | 0.400 (0.128)    | 0 (0.000) |     7.12 | jeorgesnorts, RUSH, stanislaw, Walco, wiz    |
|           27 |     1203 | 2022-12-03 | Snakes Den           | W   | 0.729      | -            | -                | -                | -         |     4.22 | jeorgesnorts, RUSH, stanislaw, Walco, wiz    |
|           26 |     1240 | 2022-12-02 | MIBR                 | W   | 0.722      | 0.435        | 0.089 (0.028)    | 0.586 (0.184)    | -         |    13.84 | jeorgesnorts, RUSH, stanislaw, Walco, wiz    |
|           25 |     1323 | 2022-11-29 | 7AM NA               | W   | 0.702      | 0.435        | -                | 0.107 (0.033)    | -         |     3.35 | RUSH, stanislaw, viz, Walco, wiz             |
|           24 |     1344 | 2022-11-28 | timbermen            | W   | 0.696      | 0.435        | 0.016 (0.005)    | 0.306 (0.092)    | -         |     9.72 | RUSH, stanislaw, viz, Walco, wiz             |
|           23 |     1367 | 2022-11-27 | MIBR                 | L   | 0.689      | -            | -                | -                | -         |    -8.18 | jeorgesnorts, RUSH, stanislaw, Walco, wiz    |
|           22 |     1372 | 2022-11-27 | Complexity           | L   | 0.688      | -            | -                | -                | -         |    -1.54 | jeorgesnorts, RUSH, stanislaw, Walco, wiz    |
|           21 |     1405 | 2022-11-26 | Nouns                | W   | 0.682      | 0.354        | 0.059 (0.014)    | 0.589 (0.142)    | -         |    11.97 | jeorgesnorts, RUSH, stanislaw, Walco, wiz    |
|           20 |     1999 | 2022-10-20 | TeamOne              | L   | 0.435      | -            | -                | -                | -         |    -6.26 | chop, RUSH, stanislaw, Walco, wiz            |
|           19 |     2029 | 2022-10-19 | MIBR                 | L   | 0.428      | -            | -                | -                | -         |    -4.63 | chop, RUSH, stanislaw, Walco, wiz            |
|           18 |     2054 | 2022-10-18 | Vendetta             | W   | 0.422      | 0.435        | 0.007 (0.001)    | -                | -         |     4.17 | chop, RUSH, stanislaw, Walco, wiz            |
|           17 |     2510 | 2022-09-29 | Davenport University | L   | 0.295      | -            | -                | -                | -         |    -6.46 | chop, RUSH, stanislaw, Walco, wiz            |
|           16 |     2538 | 2022-09-28 | Phantom Troupe       | W   | 0.289      | -            | -                | -                | -         |     1.93 | chop, RUSH, stanislaw, Walco, wiz            |
|           15 |     2573 | 2022-09-27 | Brazen               | W   | 0.282      | -            | -                | -                | -         |     1.87 | chop, RUSH, stanislaw, Walco, wiz            |
|           14 |     2585 | 2022-09-26 | Mythic               | W   | 0.275      | -            | -                | -                | -         |     2.29 | chop, RUSH, stanislaw, Walco, wiz            |
|           13 |     2606 | 2022-09-25 | Davenport University | W   | 0.269      | 0.435        | 0.014 (0.002)    | -                | -         |     2.72 | chop, RUSH, stanislaw, Walco, wiz            |
|           12 |     2737 | 2022-09-22 | TeamOne              | L   | 0.248      | -            | -                | -                | -         |    -3.47 | chop, RUSH, stanislaw, Walco, wiz            |
|           11 |     2769 | 2022-09-21 | Unjustified          | W   | 0.242      | -            | -                | -                | -         |     0.92 | chop, RUSH, stanislaw, Walco, wiz            |
|           10 |     2829 | 2022-09-19 | MIBR                 | L   | 0.228      | -            | -                | -                | -         |    -2.36 | chop, RUSH, stanislaw, Walco, wiz            |
|            9 |     2977 | 2022-09-14 | timbermen            | L   | 0.195      | -            | -                | -                | -         |    -3.65 | chop, RUSH, stanislaw, Walco, wiz            |
|            8 |     2981 | 2022-09-14 | 7AM NA               | W   | 0.195      | -            | -                | -                | -         |     0.93 | chop, RUSH, stanislaw, Walco, wiz            |
|            7 |     3067 | 2022-09-11 | TeamOne              | L   | 0.174      | -            | -                | -                | -         |    -2.53 | chop, RUSH, stanislaw, Walco, wiz            |
|            6 |     3099 | 2022-09-10 | Davenport University | W   | 0.168      | -            | -                | -                | 1 (0.168) |     1.71 | chop, RUSH, stanislaw, Walco, wiz            |
|            5 |     3126 | 2022-09-10 | ATK                  | L   | 0.167      | -            | -                | -                | -         |    -2.06 | chop, RUSH, stanislaw, Walco, wiz            |
|            4 |     3136 | 2022-09-10 | Davenport University | W   | 0.166      | -            | -                | -                | 1 (0.166) |     1.68 | chop, RUSH, stanislaw, Walco, wiz            |
|            3 |     3170 | 2022-09-09 | Task Force 141       | W   | 0.160      | -            | -                | -                | 1 (0.160) |     0.65 | chop, RUSH, stanislaw, Walco, wiz            |
|            2 |     3202 | 2022-09-08 | Snakes Den           | W   | 0.154      | -            | -                | -                | 1 (0.154) |     0.36 | chop, RUSH, stanislaw, Walco, wiz            |
|            1 |     3249 | 2022-09-06 | Vendetta             | L   | 0.141      | -            | -                | -                | -         |    -3.19 | chop, RUSH, stanislaw, Walco, wiz            |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,549.46)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-18 |      0.829 | $11,500.00     | $9,531.89       |
| 2022-10-23 |      0.455 | $2,500.00      | $1,138.35       |
| 2022-09-11 |      0.176 | $5,000.00      | $879.22         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
