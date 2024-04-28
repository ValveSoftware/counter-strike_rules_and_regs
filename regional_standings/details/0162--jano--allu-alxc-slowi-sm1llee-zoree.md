### Roster Details<br />
Team Name: JANO<br />
Roster: allu, Alxc, sLowi, Sm1llee, ZOREE<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [162](../standings_global.md)<br />
Regional Rank: [106]( ../standings_europe.md)<br />
Final Rank Value:  693.9<br />
<br />
Final Rank Value (693.9) = Starting Rank Value (736.5) + Head To Head Adjustments (-42.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.274[<sup>2</sup>](#table1)
- Opponent Network: 0.063[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.164<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 736.5
- 400 + ( ( 0.164 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 736.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |      141 | 2023-02-05 | UNGENTIUM       | L   | 1.000      | -            | -                | -                | -         |   -11.82 | allu, Alxc, sLowi, Sm1llee, ZOREE  |
|           32 |      195 | 2023-02-03 | Into the Breach | L   | 1.000      | -            | -                | -                | -         |   -17.77 | allu, Alxc, sLowi, Sm1llee, ZOREE  |
|           31 |      292 | 2023-01-30 | Anonymo         | W   | 1.000      | 0.143        | -                | 0.388 (0.055)    | 0 (0.000) |    11.42 | allu, Alxc, sLowi, Sm1llee, ZOREE  |
|           30 |      330 | 2023-01-28 | EC Brugge       | L   | 1.000      | -            | -                | -                | -         |   -17.17 | allu, Alxc, sLowi, Sm1llee, ZOREE  |
|           29 |      378 | 2023-01-27 | EPIC DUDES      | L   | 1.000      | -            | -                | -                | -         |   -23.50 | allu, Alxc, sLowi, Sm1llee, ZOREE  |
|           28 |      386 | 2023-01-27 | GTZ             | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.195 (0.028)    | 0 (0.000) |    14.82 | allu, Alxc, sLowi, Sm1llee, ZOREE  |
|           27 |      564 | 2023-01-20 | Lilmix          | L   | 1.000      | -            | -                | -                | -         |   -15.99 | allu, Alxc, sLowi, Sm1llee, ZOREE  |
|           26 |      586 | 2023-01-19 | EYEBALLERS      | L   | 1.000      | -            | -                | -                | -         |    -9.20 | allu, Alxc, sLowi, Sm1llee, ZOREE  |
|           25 |      593 | 2023-01-19 | Lilmix          | W   | 1.000      | 0.143        | 0.022 (0.003)    | 0.208 (0.030)    | 0 (0.000) |    14.87 | allu, Alxc, sLowi, Sm1llee, ZOREE  |
|           24 |      857 | 2022-12-15 | LDLC            | L   | 0.807      | -            | -                | -                | -         |   -12.91 | allu, arvid, sLowi, Sm1llee, ZOREE |
|           23 |      943 | 2022-12-11 | ENCE Academy    | W   | 0.780      | 0.304        | 0.010 (0.002)    | 0.239 (0.057)    | 0 (0.000) |    12.90 | allu, arvid, sLowi, Sm1llee, ZOREE |
|           22 |      951 | 2022-12-11 | Conquer         | W   | 0.779      | 0.304        | 0.008 (0.002)    | 0.132 (0.031)    | 0 (0.000) |     9.50 | allu, arvid, sLowi, Sm1llee, ZOREE |
|           21 |      985 | 2022-12-10 | 500             | L   | 0.773      | -            | -                | -                | -         |    -2.65 | allu, arvid, sLowi, Sm1llee, ZOREE |
|           20 |     1010 | 2022-12-09 | Tricked         | W   | 0.767      | 0.371        | 0.034 (0.010)    | 0.954 (0.272)    | 0 (0.000) |    19.55 | allu, arvid, sLowi, Sm1llee, ZOREE |
|           19 |     1036 | 2022-12-08 | Coalesce        | W   | 0.760      | 0.371        | 0.008 (0.002)    | 0.315 (0.089)    | 0 (0.000) |    12.08 | allu, arvid, sLowi, Sm1llee, ZOREE |
|           18 |     1079 | 2022-12-07 | ENCE Academy    | L   | 0.753      | -            | -                | -                | -         |   -10.09 | allu, arvid, sLowi, Sm1llee, ZOREE |
|           17 |     1122 | 2022-12-06 | 9 Pandas        | L   | 0.746      | -            | -                | -                | -         |    -9.77 | allu, arvid, sLowi, Sm1llee, ZOREE |
|           16 |     1302 | 2022-11-30 | Conquer         | W   | 0.707      | 0.304        | 0.008 (0.002)    | 0.132 (0.028)    | 0 (0.000) |     9.28 | allu, arvid, sLowi, Sm1llee, ZOREE |
|           15 |     1570 | 2022-11-18 | GenOne          | L   | 0.626      | -            | -                | -                | -         |    -2.01 | allu, arvid, sLowi, Sm1llee, ZOREE |
|           14 |     1575 | 2022-11-18 | Prosapia        | W   | 0.624      | 0.143        | 0.001 (0.000)    | -                | 0 (0.000) |     4.84 | allu, arvid, sLowi, Sm1llee, ZOREE |
|           13 |     1590 | 2022-11-17 | GenOne          | L   | 0.619      | -            | -                | -                | -         |    -1.80 | allu, arvid, ottob, sLowi, ZOREE   |
|           12 |     1806 | 2022-10-29 | HAVU            | L   | 0.493      | -            | -                | -                | -         |    -3.61 | allu, arvid, ottob, sLowi, ZOREE   |
|           11 |     1828 | 2022-10-28 | Enhanced        | W   | 0.485      | -            | -                | -                | 0 (0.000) |     5.18 | allu, arvid, ottob, sLowi, ZOREE   |
|           10 |     2476 | 2022-10-01 | SKADE X         | L   | 0.305      | -            | -                | -                | -         |    -5.79 | allu, arvid, ottob, sLowi, ZOREE   |
|            9 |     2503 | 2022-09-30 | IMMA PROBLEM    | L   | 0.298      | -            | -                | -                | -         |    -7.41 | allu, arvid, ottob, sLowi, ZOREE   |
|            8 |     2626 | 2022-09-25 | HOTU            | L   | 0.266      | -            | -                | -                | -         |    -4.08 | allu, arvid, ottob, sLowi, ZOREE   |
|            7 |     2753 | 2022-09-22 | PACT            | L   | 0.246      | -            | -                | -                | -         |    -3.45 | allu, arvid, ottob, sLowi, ZOREE   |
|            6 |     2784 | 2022-09-21 | LDLC            | W   | 0.240      | 0.371        | 0.002 (0.000)    | 0.418 (0.037)    | -         |     3.78 | allu, arvid, ottob, sLowi, ZOREE   |
|            5 |     2856 | 2022-09-18 | HAVU            | L   | 0.220      | -            | -                | -                | -         |    -1.55 | allu, arvid, ottob, sLowi, ZOREE   |
|            4 |     2865 | 2022-09-18 | Conquer         | W   | 0.219      | 0.143        | 0.008 (0.000)    | 0.132 (0.004)    | -         |     2.89 | allu, arvid, ottob, sLowi, ZOREE   |
|            3 |     3271 | 2022-09-05 | ECLOT           | L   | 0.131      | -            | -                | -                | -         |    -0.71 | allu, arvid, ottob, sLowi, ZOREE   |
|            2 |     3418 | 2022-08-31 | SKADE X         | L   | 0.099      | -            | -                | -                | -         |    -1.90 | allu, arvid, ottob, sLowi, ZOREE   |
|            1 |     3581 | 2022-08-25 | EYEBALLERS      | L   | 0.058      | -            | -                | -                | -         |    -0.46 | allu, arvid, ottob, sLowi, ZOREE   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,606.65)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-11 |      0.780 | $4,147.00      | $3,236.68       |
| 2022-10-29 |      0.493 | $750.00        | $369.98         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
