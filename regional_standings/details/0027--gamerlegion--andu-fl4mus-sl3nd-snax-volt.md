### Roster Details<br />
Team Name: GamerLegion<br />
Roster: aNdu, FL4MUS, sl3nd, Snax, volt<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [27](../standings_global.md)<br />
Regional Rank: [18]( ../standings_europe.md)<br />
Final Rank Value:  1304.0<br />
<br />
Final Rank Value (1304.0) = Starting Rank Value (1280.6) + Head To Head Adjustments (23.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.605[<sup>1</sup>](#table2)
- Bounty Collected: 0.491[<sup>2</sup>](#table1)
- Opponent Network: 0.371[<sup>2</sup>](#table1)
- LAN Wins: 0.300[<sup>2</sup>](#table1)

The average of these factors is 0.442<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1280.6
- 400 + ( ( 0.442 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1280.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |      101 | 2024-06-08 | 5W                | W   | 1.000      | 0.450        | 0.000 (0.000)    | 0.116 (0.052)    | 0 (0.000) |     0.91 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           18 |      158 | 2024-06-07 | MOUZ NXT          | W   | 1.000      | 0.450        | 0.164 (0.074)    | 1.000 (0.450)    | 0 (0.000) |     9.41 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           17 |      219 | 2024-06-06 | ECLOT             | W   | 1.000      | 0.450        | 0.101 (0.046)    | 0.549 (0.247)    | 0 (0.000) |     8.71 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           16 |      457 | 2024-05-31 | GUN5              | L   | 1.000      | -            | -                | -                | -         |   -27.79 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           15 |      666 | 2024-05-22 | Eternal Fire      | L   | 1.000      | -            | -                | -                | -         |    -2.01 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           14 |      696 | 2024-05-21 | AMKAL             | W   | 1.000      | 0.769        | 0.143 (0.110)    | 0.711 (0.546)    | 0 (0.000) |    15.99 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           13 |      807 | 2024-05-18 | fnatic            | W   | 1.000      | 0.769        | 0.198 (0.152)    | 0.650 (0.500)    | 0 (0.000) |    15.39 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           12 |      828 | 2024-05-17 | Gaimin Gladiators | W   | 1.000      | 0.769        | 0.081 (0.062)    | 0.749 (0.576)    | 0 (0.000) |    11.15 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           11 |     1133 | 2024-05-07 | Virtus.pro        | L   | 0.974      | -            | -                | -                | -         |    -2.84 | aNdu, isak, sl3nd, Snax, volt   |
|           10 |     1207 | 2024-05-03 | ENCE              | W   | 0.946      | 0.889        | 0.205 (0.172)    | 0.407 (0.342)    | 1 (0.946) |    18.90 | aNdu, isak, sl3nd, Snax, volt   |
|            9 |     1224 | 2024-05-02 | FORZE             | W   | 0.940      | 0.889        | 0.100 (0.084)    | 0.415 (0.347)    | 1 (0.940) |     8.70 | aNdu, isak, sl3nd, Snax, volt   |
|            8 |     1256 | 2024-05-01 | MOUZ              | L   | 0.932      | -            | -                | -                | -         |    -0.46 | aNdu, isak, sl3nd, Snax, volt   |
|            7 |     1284 | 2024-04-30 | ENCE              | W   | 0.925      | 0.889        | 0.205 (0.169)    | 0.407 (0.334)    | 1 (0.925) |    19.80 | aNdu, isak, sl3nd, Snax, volt   |
|            6 |     1499 | 2024-04-20 | BIG               | L   | 0.859      | -            | -                | -                | -         |    -7.34 | aNdu, Goody, sl3nd, Snax, volt  |
|            5 |     1589 | 2024-04-18 | Sashi             | L   | 0.846      | -            | -                | -                | -         |   -19.08 | aNdu, isak, sl3nd, Snax, volt   |
|            4 |     1666 | 2024-04-16 | MOUZ NXT          | W   | 0.832      | 0.384        | 0.164 (0.052)    | 1.000 (0.320)    | 0 (0.000) |     7.50 | aNdu, isak, sl3nd, Snax, volt   |
|            3 |     2058 | 2024-04-02 | Monte             | L   | 0.740      | -            | -                | -                | -         |   -12.07 | aNdu, isak, sl3nd, Snax, volt   |
|            2 |     2067 | 2024-04-02 | FAVBET            | L   | 0.739      | -            | -                | -                | -         |   -21.68 | aNdu, isak, sl3nd, Snax, volt   |
|            1 |     2087 | 2024-04-01 | GUN5              | W   | 0.732      | -            | -                | -                | -         |     0.16 | aNdu, isak, sl3nd, Snax, volt   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($67,500.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.22) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-23 |      1.000 | $50,000.00     | $50,000.00      |
| 2024-05-12 |      1.000 | $17,500.00     | $17,500.00      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
