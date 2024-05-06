### Roster Details<br />
Team Name: TSM<br />
Roster: CYPHER, interz, JACKZ, MoDo, valde<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [145](../standings_global.md)<br />
Regional Rank: [96]( ../standings_europe.md)<br />
Final Rank Value:  705.2<br />
<br />
Final Rank Value (705.2) = Starting Rank Value (690.9) + Head To Head Adjustments (14.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.325[<sup>1</sup>](#table2)
- Bounty Collected: 0.266[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.153<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 690.9
- 400 + ( ( 0.153 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 690.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |     2973 | 2023-12-17 | ORKS          | W   | 0.260      | 0.143        | 0.000 (0.000)    | 0.011 (0.000)    | 0 (0.000) |     1.86 | CYPHER, interz, JACKZ, MoDo, valde |
|           19 |     3005 | 2023-12-16 | RUSH B        | L   | 0.254      | -            | -                | -                | -         |    -3.31 | CYPHER, interz, JACKZ, MoDo, valde |
|           18 |     3036 | 2023-12-15 | Pompa         | W   | 0.247      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     1.88 | CYPHER, interz, JACKZ, MoDo, valde |
|           17 |     3073 | 2023-12-11 | RUSH B        | L   | 0.220      | -            | -                | -                | -         |    -2.88 | CYPHER, interz, JACKZ, MoDo, valde |
|           16 |     3092 | 2023-12-10 | ex-Preasy     | L   | 0.211      | -            | -                | -                | -         |    -0.99 | CYPHER, interz, JACKZ, MoDo, valde |
|           15 |     3121 | 2023-12-09 | Sprout        | W   | 0.204      | 0.371        | 0.006 (0.000)    | 0.133 (0.010)    | 0 (0.000) |     3.40 | CYPHER, interz, JACKZ, MoDo, valde |
|           14 |     3127 | 2023-12-08 | BIG Academy   | L   | 0.200      | -            | -                | -                | -         |    -3.28 | CYPHER, interz, JACKZ, MoDo, valde |
|           13 |     3147 | 2023-12-07 | lajtbitexe    | W   | 0.194      | 0.372        | 0.003 (0.000)    | 0.017 (0.001)    | 0 (0.000) |     2.78 | CYPHER, interz, JACKZ, MoDo, valde |
|           12 |     3167 | 2023-12-07 | IKLA          | W   | 0.191      | 0.371        | -                | 0.151 (0.011)    | 0 (0.000) |     1.94 | CYPHER, interz, JACKZ, MoDo, valde |
|           11 |     3178 | 2023-12-06 | Lausanne SE   | W   | 0.187      | 0.372        | 0.001 (0.000)    | 0.017 (0.001)    | 0 (0.000) |     2.31 | CYPHER, interz, JACKZ, MoDo, valde |
|           10 |     3204 | 2023-12-05 | Zero Tenacity | W   | 0.181      | 0.372        | 0.093 (0.006)    | 0.936 (0.063)    | 0 (0.000) |     4.57 | CYPHER, interz, JACKZ, MoDo, valde |
|            9 |     3221 | 2023-12-05 | GODSENT       | L   | 0.179      | -            | -                | -                | -         |    -2.29 | CYPHER, interz, JACKZ, MoDo, valde |
|            8 |     3252 | 2023-12-03 | Zero Tenacity | W   | 0.164      | 0.371        | 0.093 (0.006)    | 0.936 (0.057)    | 0 (0.000) |     4.18 | CYPHER, interz, JACKZ, MoDo, valde |
|            7 |     3290 | 2023-12-01 | Legacy        | W   | 0.152      | 0.371        | 0.055 (0.003)    | 0.408 (0.023)    | 0 (0.000) |     4.18 | CYPHER, interz, JACKZ, MoDo, valde |
|            6 |     3340 | 2023-11-27 | Sprout        | L   | 0.124      | -            | -                | -                | -         |    -1.87 | CYPHER, interz, JACKZ, MoDo, valde |
|            5 |     3528 | 2023-11-17 | SINNERS       | L   | 0.059      | -            | -                | -                | -         |    -0.21 | CYPHER, interz, JACKZ, MoDo, valde |
|            4 |     3565 | 2023-11-16 | 3DMAX         | W   | 0.052      | 0.589        | 0.055 (0.002)    | 0.810 (0.025)    | 0 (0.000) |     1.55 | CYPHER, interz, JACKZ, MoDo, valde |
|            3 |     3621 | 2023-11-14 | Sprout        | W   | 0.040      | 0.589        | 0.006 (0.000)    | 0.133 (0.003)    | -         |     0.66 | CYPHER, interz, JACKZ, MoDo, valde |
|            2 |     3635 | 2023-11-13 | BIG           | L   | 0.034      | -            | -                | -                | -         |    -0.02 | CYPHER, interz, JACKZ, MoDo, valde |
|            1 |     3728 | 2023-11-09 | Entropiq      | L   | 0.007      | -            | -                | -                | -         |    -0.09 | CYPHER, interz, JACKZ, MoDo, valde |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,363.40)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-13 |      0.233 | $3,300.00      | $768.79         |
| 2023-12-12 |      0.226 | $1,000.00      | $226.41         |
| 2023-11-19 |      0.074 | $5,000.00      | $368.20         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
