### Roster Details<br />
Team Name: JANO<br />
Roster: allu, doto, Jerppa, juho, Sm1llee<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [174](../standings_global.md)<br />
Regional Rank: [113]( ../standings_europe.md)<br />
Final Rank Value:  630.1<br />
<br />
Final Rank Value (630.1) = Starting Rank Value (642.7) + Head To Head Adjustments (-12.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.233[<sup>1</sup>](#table2)
- Bounty Collected: 0.233[<sup>2</sup>](#table1)
- Opponent Network: 0.036[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.126<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 642.7
- 400 + ( ( 0.126 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 642.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |       64 | 2024-04-20 | Sangal            | L   | 1.000      | -            | -                | -                | -         |    -7.99 | allu, doto, Jerppa, juho, Sm1llee |
|           23 |       97 | 2024-04-19 | NOM               | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.089 (0.013)    | 0 (0.000) |    13.12 | allu, doto, Jerppa, juho, Sm1llee |
|           22 |      197 | 2024-04-17 | RUBY              | L   | 1.000      | -            | -                | -                | -         |    -8.46 | allu, doto, Jerppa, juho, Sm1llee |
|           21 |      206 | 2024-04-17 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |    -5.22 | allu, doto, Jerppa, juho, Sm1llee |
|           20 |      287 | 2024-04-12 | Zero Tenacity     | W   | 1.000      | 0.371        | 0.008 (0.003)    | 0.805 (0.298)    | 0 (0.000) |    21.38 | allu, doto, Jerppa, juho, Sm1llee |
|           19 |      451 | 2024-04-08 | Permitta          | L   | 1.000      | -            | -                | -                | -         |    -6.03 | allu, doto, Jerppa, juho, Sm1llee |
|           18 |      486 | 2024-04-06 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |    -9.17 | allu, doto, Jerppa, juho, Sm1llee |
|           17 |      551 | 2024-04-04 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |    -0.85 | allu, doto, Jerppa, juho, Sm1llee |
|           16 |     1019 | 2024-03-12 | ECF               | L   | 0.926      | -            | -                | -                | -         |   -15.74 | allu, doto, Jelo, Jerppa, Sm1llee |
|           15 |     1109 | 2024-03-08 | INGLORIOUS        | W   | 0.898      | 0.143        | 0.000 (0.000)    | 0.089 (0.011)    | 0 (0.000) |    11.88 | allu, doto, Jelo, Jerppa, Sm1llee |
|           14 |     1219 | 2024-03-04 | Endpoint          | L   | 0.872      | -            | -                | -                | -         |   -19.53 | allu, doto, Jelo, Jerppa, Sm1llee |
|           13 |     1304 | 2024-02-29 | Sashi             | L   | 0.844      | -            | -                | -                | -         |    -5.72 | allu, doto, Jelo, Jerppa, Sm1llee |
|           12 |     2170 | 2024-01-19 | Permitta          | L   | 0.574      | -            | -                | -                | -         |    -4.53 | Aerial, allu, doto, Jelo, Sm1llee |
|           11 |     2226 | 2024-01-18 | OG                | L   | 0.567      | -            | -                | -                | -         |    -0.48 | Aerial, allu, doto, Jelo, Sm1llee |
|           10 |     2244 | 2024-01-18 | 3DMAX             | L   | 0.566      | -            | -                | -                | -         |    -2.04 | Aerial, allu, doto, Jelo, Sm1llee |
|            9 |     2321 | 2024-01-16 | Aurora Young Blud | W   | 0.555      | 0.143        | 0.002 (0.000)    | 0.133 (0.011)    | 0 (0.000) |     9.83 | Aerial, allu, doto, Jelo, Sm1llee |
|            8 |     2329 | 2024-01-16 | ex-Anonymo        | W   | 0.554      | 0.143        | 0.027 (0.002)    | 0.276 (0.022)    | 0 (0.000) |    11.81 | Aerial, allu, doto, Jelo, Sm1llee |
|            7 |     2343 | 2024-01-16 | 9INE              | W   | 0.554      | 0.143        | 0.000 (0.000)    | 0.087 (0.007)    | 0 (0.000) |     6.42 | Aerial, allu, doto, Jelo, Sm1llee |
|            6 |     3127 | 2023-11-22 | Zero Tenacity     | L   | 0.185      | -            | -                | -                | -         |    -1.75 | allu, doto, Jelo, Jerppa, Sm1llee |
|            5 |     3145 | 2023-11-21 | Viperio           | W   | 0.178      | 0.333        | 0.000 (0.000)    | 0.056 (0.003)    | 0 (0.000) |     1.91 | allu, doto, Jelo, Jerppa, Sm1llee |
|            4 |     3676 | 2023-10-30 | Metizport         | L   | 0.032      | -            | -                | -                | -         |    -0.43 | allu, Jelo, Jerppa, Sm1llee, zks  |
|            3 |     3683 | 2023-10-30 | Permitta          | L   | 0.031      | -            | -                | -                | -         |    -0.52 | allu, Jelo, Jerppa, Sm1llee, zks  |
|            2 |     3716 | 2023-10-29 | PGE Turow         | L   | 0.025      | -            | -                | -                | -         |    -0.32 | allu, Jelo, Jerppa, Sm1llee, zks  |
|            1 |     3796 | 2023-10-27 | PGE Turow         | L   | 0.011      | -            | -                | -                | -         |    -0.14 | allu, Jelo, Jerppa, Sm1llee, zks  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($98.92)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
