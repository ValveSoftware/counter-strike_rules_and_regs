### Roster Details<br />
Team Name: Aurora Young Blud<br />
Roster: bl1x1, bluewh1te, gr1ks, sh1geo, VILBy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [152](../standings_global.md)<br />
Regional Rank: [101]( ../standings_europe.md)<br />
Final Rank Value:  647.1<br />
<br />
Final Rank Value (647.1) = Starting Rank Value (655.6) + Head To Head Adjustments (-8.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.235[<sup>1</sup>](#table2)
- Bounty Collected: 0.273[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.132<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 655.6
- 400 + ( ( 0.132 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 655.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |       11 | 2024-05-29 | FAVBET          | L   | 1.000      | -            | -                | -                | -         |   -10.34 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           13 |     1171 | 2024-04-16 | ALTERNATE aTTaX | L   | 0.911      | -            | -                | -                | -         |    -6.23 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|           12 |     1186 | 2024-04-15 | Sangal          | L   | 0.905      | -            | -                | -                | -         |    -3.95 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|           11 |     1495 | 2024-04-04 | ENCE            | L   | 0.831      | -            | -                | -                | -         |    -0.48 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|           10 |     3140 | 2024-01-19 | Permitta        | L   | 0.323      | -            | -                | -                | -         |    -2.25 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            9 |     3206 | 2024-01-18 | Zero Tenacity   | W   | 0.317      | 0.333        | 0.147 (0.015)    | 1.000 (0.106)    | 0 (0.000) |     8.95 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            8 |     3248 | 2024-01-17 | MOUZ NXT        | L   | 0.310      | -            | -                | -                | -         |    -0.98 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            7 |     3268 | 2024-01-16 | JANO            | L   | 0.307      | -            | -                | -                | -         |    -7.01 | Aerial, allu, doto, Jelo, Sm1llee      |
|            6 |     3284 | 2024-01-16 | esmagaB         | W   | 0.306      | 0.143        | 0.008 (0.000)    | 0.258 (0.011)    | 0 (0.000) |     5.71 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            5 |     3298 | 2024-01-16 | Lemondogs       | W   | 0.306      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.80 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            4 |     3326 | 2024-01-15 | Spirit Academy  | W   | 0.298      | 0.333        | 0.003 (0.000)    | 0.131 (0.013)    | 0 (0.000) |     5.15 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            3 |     3565 | 2023-12-29 | Metizport       | L   | 0.185      | -            | -                | -                | -         |    -0.89 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            2 |     3568 | 2023-12-28 | The Witchers    | L   | 0.178      | -            | -                | -                | -         |    -2.63 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            1 |     3572 | 2023-12-27 | Metizport       | W   | 0.172      | 0.371        | 0.088 (0.006)    | 0.860 (0.055)    | 0 (0.000) |     4.60 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($168.33)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
