### Roster Details<br />
Team Name: Astralis<br />
Roster: br0, device, jabbi, Staehr, stavn<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [8](../standings_global.md)<br />
Regional Rank: [8]( ../standings_europe.md)<br />
Final Rank Value:  1741.7<br />
<br />
Final Rank Value (1741.7) = Starting Rank Value (1751.1) + Head To Head Adjustments (-9.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.712[<sup>1</sup>](#table2)
- Bounty Collected: 0.711[<sup>2</sup>](#table1)
- Opponent Network: 0.496[<sup>2</sup>](#table1)
- LAN Wins: 0.865[<sup>2</sup>](#table1)

The average of these factors is 0.696<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1751.1
- 400 + ( ( 0.696 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1751.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |      168 | 2024-05-22 | Liquid            | L   | 1.000      | -            | -                | -                | -         |   -20.82 | br0, device, jabbi, Staehr, stavn    |
|           32 |      210 | 2024-05-21 | Aurora            | W   | 1.000      | 0.769        | 0.493 (0.379)    | 0.840 (0.646)    | -         |     2.63 | br0, device, jabbi, Staehr, stavn    |
|           31 |      240 | 2024-05-20 | BetBoom           | W   | 1.000      | 0.769        | 0.392 (0.302)    | 0.951 (0.731)    | -         |     2.40 | br0, device, jabbi, Staehr, stavn    |
|           30 |      263 | 2024-05-19 | BIG               | W   | 1.000      | 0.769        | 0.215 (0.166)    | 0.496 (0.381)    | -         |     3.00 | br0, device, jabbi, Staehr, stavn    |
|           29 |      555 | 2024-05-11 | Vitality          | L   | 1.000      | -            | -                | -                | -         |   -11.50 | br0, device, jabbi, Staehr, stavn    |
|           28 |      576 | 2024-05-10 | Liquid            | W   | 1.000      | 0.889        | 0.493 (0.438)    | 0.854 (0.759)    | 1 (1.000) |     9.71 | br0, device, jabbi, Staehr, stavn    |
|           27 |      842 | 2024-04-27 | 3DMAX             | W   | 0.985      | 0.889        | 0.105 (0.092)    | 0.669 (0.586)    | 1 (0.985) |     1.18 | br0, device, jabbi, Staehr, stavn    |
|           26 |      912 | 2024-04-24 | FaZe              | W   | 0.966      | 0.889        | 1.000 (0.859)    | 0.688 (0.591)    | 1 (0.966) |    23.34 | br0, device, jabbi, Staehr, stavn    |
|           25 |      933 | 2024-04-23 | Eternal Fire      | W   | 0.958      | 0.889        | 1.000 (0.852)    | 0.605 (0.516)    | 1 (0.958) |    18.08 | br0, device, jabbi, Staehr, stavn    |
|           24 |     1219 | 2024-04-13 | FaZe              | L   | 0.891      | -            | -                | -                | -         |    -6.07 | br0, device, jabbi, Staehr, stavn    |
|           23 |     1316 | 2024-04-10 | Virtus.pro        | W   | 0.870      | 0.624        | 0.271 (0.147)    | 0.499 (0.271)    | 1 (0.870) |    12.76 | br0, device, jabbi, Staehr, stavn    |
|           22 |     1368 | 2024-04-09 | FaZe              | W   | 0.863      | 0.624        | 1.000 (0.539)    | 0.688 (0.371)    | 1 (0.863) |    21.94 | br0, device, jabbi, Staehr, stavn    |
|           21 |     1400 | 2024-04-08 | Steel Helmet      | W   | 0.856      | -            | -                | -                | 1 (0.856) |     0.08 | br0, device, jabbi, Staehr, stavn    |
|           20 |     2370 | 2024-02-23 | 9 Pandas          | L   | 0.557      | -            | -                | -                | -         |   -16.76 | blameF, device, jabbi, Staehr, stavn |
|           19 |     2389 | 2024-02-22 | ENCE              | L   | 0.551      | -            | -                | -                | -         |   -14.63 | blameF, device, jabbi, Staehr, stavn |
|           18 |     2416 | 2024-02-21 | Monte             | W   | 0.544      | -            | -                | -                | 1 (0.544) |     1.56 | blameF, device, jabbi, Staehr, stavn |
|           17 |     2444 | 2024-02-20 | HEROIC            | L   | 0.537      | -            | -                | -                | -         |    -9.09 | blameF, device, jabbi, Staehr, stavn |
|           16 |     2457 | 2024-02-19 | Spirit            | L   | 0.533      | -            | -                | -                | -         |    -4.18 | blameF, device, jabbi, Staehr, stavn |
|           15 |     2467 | 2024-02-19 | Nexus             | W   | 0.531      | -            | -                | -                | 1 (0.531) |     0.14 | blameF, device, jabbi, Staehr, stavn |
|           14 |     2825 | 2024-02-01 | ENCE              | L   | 0.413      | -            | -                | -                | -         |   -11.54 | blameF, device, jabbi, Staehr, stavn |
|           13 |     2854 | 2024-01-31 | HEROIC            | L   | 0.405      | -            | -                | -                | -         |    -7.37 | blameF, device, jabbi, Staehr, stavn |
|           12 |     2891 | 2024-01-28 | BIG               | W   | 0.385      | 0.581        | -                | 0.496 (0.111)    | 1 (0.385) |     1.50 | blameF, device, jabbi, Staehr, stavn |
|           11 |     2907 | 2024-01-27 | Vitality          | L   | 0.378      | -            | -                | -                | -         |    -4.13 | blameF, device, jabbi, Staehr, stavn |
|           10 |     2973 | 2024-01-23 | Vitality          | W   | 0.353      | 0.581        | 0.699 (0.143)    | -                | -         |     7.38 | blameF, device, jabbi, Staehr, stavn |
|            9 |     3000 | 2024-01-22 | Falcons           | W   | 0.346      | -            | -                | -                | -         |     1.97 | blameF, device, jabbi, Staehr, stavn |
|            8 |     3070 | 2024-01-20 | PERA              | W   | 0.332      | -            | -                | -                | -         |     0.09 | blameF, device, jabbi, Staehr, stavn |
|            7 |     3120 | 2024-01-19 | AMKAL             | L   | 0.326      | -            | -                | -                | -         |    -9.80 | blameF, device, jabbi, Staehr, stavn |
|            6 |     3185 | 2024-01-18 | ex-Preasy         | W   | 0.319      | -            | -                | -                | -         |     0.09 | blameF, device, jabbi, Staehr, stavn |
|            5 |     3188 | 2024-01-18 | Enterprise        | W   | 0.319      | -            | -                | -                | -         |     0.08 | blameF, device, jabbi, Staehr, stavn |
|            4 |     3357 | 2024-01-14 | Ninjas in Pyjamas | W   | 0.292      | -            | -                | -                | -         |     0.03 | blameF, device, jabbi, Staehr, stavn |
|            3 |     3393 | 2024-01-13 | ALTERNATE aTTaX   | W   | 0.285      | -            | -                | -                | -         |     0.10 | blameF, device, jabbi, Staehr, stavn |
|            2 |     3808 | 2023-12-07 | FURIA             | L   | 0.039      | -            | -                | -                | -         |    -1.10 | blameF, device, jabbi, Staehr, stavn |
|            1 |     3849 | 2023-12-06 | Virtus.pro        | L   | 0.031      | -            | -                | -                | -         |    -0.56 | blameF, device, jabbi, Staehr, stavn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($118,817.39)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.39) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-23 |      1.000 | $50,000.00     | $50,000.00      |
| 2024-05-12 |      1.000 | $45,000.00     | $45,000.00      |
| 2024-04-14 |      0.897 | $20,000.00     | $17,944.69      |
| 2024-02-02 |      0.420 | $2,500.00      | $1,049.97       |
| 2024-01-28 |      0.386 | $12,500.00     | $4,822.73       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
