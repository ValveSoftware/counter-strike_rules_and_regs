### Roster Details<br />
Team Name: Young Ninjas<br />
Roster: bobeksde, jocab, MisteM, Silence, xKacpersky<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [60](../standings_global.md)<br />
Regional Rank: [42]( ../standings_europe.md)<br />
Final Rank Value:  907.4<br />
<br />
Final Rank Value (907.4) = Starting Rank Value (917.9) + Head To Head Adjustments (-10.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.480[<sup>1</sup>](#table2)
- Bounty Collected: 0.445[<sup>2</sup>](#table1)
- Opponent Network: 0.148[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.268<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 917.9
- 400 + ( ( 0.268 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 917.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |       18 | 2024-04-21 | Nexus           | L   | 1.000      | -            | -                | -                | -         |   -18.17 | bobeksde, jocab, MisteM, Silence, xKacpersky    |
|           15 |       42 | 2024-04-20 | Passion UA      | L   | 1.000      | -            | -                | -                | -         |   -19.22 | bobeksde, jocab, MisteM, Silence, xKacpersky    |
|           14 |      126 | 2024-04-18 | Nexus           | W   | 1.000      | 0.500        | 0.023 (0.011)    | 0.544 (0.272)    | 0 (0.000) |    12.43 | bobeksde, jocab, MisteM, Silence, xKacpersky    |
|           13 |      472 | 2024-04-07 | 3DMAX           | L   | 1.000      | -            | -                | -                | -         |   -11.16 | BluePho3nix, jocab, MisteM, Silence, xKacpersky |
|           12 |     1059 | 2024-03-10 | 500             | W   | 0.913      | 0.358        | 0.000 (0.000)    | 0.622 (0.203)    | 0 (0.000) |     7.20 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|           11 |     1085 | 2024-03-09 | AURA            | W   | 0.905      | 0.143        | 0.000 (0.000)    | 0.075 (0.010)    | 0 (0.000) |     2.12 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|           10 |     1158 | 2024-03-06 | HEROIC          | L   | 0.886      | -            | -                | -                | -         |    -0.74 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            9 |     1192 | 2024-03-05 | fnatic          | L   | 0.880      | -            | -                | -                | -         |    -8.80 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            8 |     1205 | 2024-03-05 | Permitta        | L   | 0.879      | -            | -                | -                | -         |   -16.70 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            7 |     1216 | 2024-03-04 | Aurora          | W   | 0.873      | 0.500        | 0.763 (0.333)    | 1.000 (0.436)    | 0 (0.000) |    23.92 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            6 |     1233 | 2024-03-03 | BIG             | W   | 0.867      | 0.500        | 0.471 (0.204)    | 0.529 (0.229)    | 0 (0.000) |    22.83 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            5 |     1287 | 2024-03-01 | BLEED           | L   | 0.853      | -            | -                | -                | -         |    -8.26 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            4 |     1300 | 2024-02-29 | Zero Tenacity   | L   | 0.845      | -            | -                | -                | -         |   -18.43 | BluePho3nix, jocab, MisteM, REZ, Silence        |
|            3 |     1535 | 2024-02-18 | ALTERNATE aTTaX | W   | 0.774      | 0.358        | 0.019 (0.005)    | 0.639 (0.177)    | 0 (0.000) |     9.45 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            2 |     1710 | 2024-02-11 | esmagaB         | W   | 0.726      | 0.358        | 0.015 (0.004)    | 0.342 (0.089)    | 0 (0.000) |     6.59 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            1 |     1816 | 2024-02-03 | ex-Anonymo      | W   | 0.673      | 0.358        | 0.027 (0.006)    | 0.276 (0.067)    | 0 (0.000) |     6.45 | BluePho3nix, jocab, maxster, MisteM, Silence    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,648.86)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-10 |      0.914 | $5,000.00      | $4,569.46       |
| 2024-03-06 |      0.886 | $12,500.00     | $11,079.40      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
