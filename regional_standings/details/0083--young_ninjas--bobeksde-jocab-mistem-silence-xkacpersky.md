### Roster Details<br />
Team Name: Young Ninjas<br />
Roster: bobeksde, jocab, MisteM, Silence, xKacpersky<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [83](../standings_global.md)<br />
Regional Rank: [56]( ../standings_europe.md)<br />
Final Rank Value:  861.8<br />
<br />
Final Rank Value (861.8) = Starting Rank Value (831.2) + Head To Head Adjustments (30.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.412[<sup>1</sup>](#table2)
- Bounty Collected: 0.381[<sup>2</sup>](#table1)
- Opponent Network: 0.095[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.222<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 831.2
- 400 + ( ( 0.222 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 831.2


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
|           16 |      965 | 2024-04-21 | Nexus           | L   | 0.946      | -            | -                | -                | -         |   -14.10 | bobeksde, jocab, MisteM, Silence, xKacpersky    |
|           15 |      989 | 2024-04-20 | Passion UA      | L   | 0.939      | -            | -                | -                | -         |   -13.09 | bobeksde, jocab, MisteM, Silence, xKacpersky    |
|           14 |     1073 | 2024-04-18 | Nexus           | W   | 0.926      | 0.500        | 0.014 (0.007)    | 0.518 (0.240)    | 0 (0.000) |    14.87 | bobeksde, jocab, MisteM, Silence, xKacpersky    |
|           13 |     1419 | 2024-04-07 | 3DMAX           | L   | 0.851      | -            | -                | -                | -         |    -5.21 | BluePho3nix, jocab, MisteM, Silence, xKacpersky |
|           12 |     2006 | 2024-03-10 | 500             | W   | 0.665      | 0.358        | 0.002 (0.000)    | 0.436 (0.104)    | 0 (0.000) |     8.36 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|           11 |     2032 | 2024-03-09 | GODSENT         | W   | 0.658      | 0.143        | 0.001 (0.000)    | 0.081 (0.008)    | 0 (0.000) |     4.38 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|           10 |     2105 | 2024-03-06 | HEROIC          | L   | 0.639      | -            | -                | -                | -         |    -0.19 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            9 |     2139 | 2024-03-05 | fnatic          | L   | 0.632      | -            | -                | -                | -         |    -4.26 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            8 |     2152 | 2024-03-05 | Permitta        | L   | 0.631      | -            | -                | -                | -         |    -9.26 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            7 |     2163 | 2024-03-04 | Aurora          | W   | 0.625      | 0.500        | 0.493 (0.154)    | 0.840 (0.263)    | 0 (0.000) |    18.85 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            6 |     2180 | 2024-03-03 | BIG             | W   | 0.619      | 0.500        | 0.215 (0.067)    | 0.496 (0.154)    | 0 (0.000) |    18.54 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            5 |     2234 | 2024-03-01 | BLEED           | L   | 0.605      | -            | -                | -                | -         |    -2.36 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            4 |     2247 | 2024-02-29 | Zero Tenacity   | L   | 0.598      | -            | -                | -                | -         |    -5.33 | BluePho3nix, jocab, MisteM, REZ, Silence        |
|            3 |     2482 | 2024-02-18 | ALTERNATE aTTaX | W   | 0.526      | 0.358        | 0.048 (0.009)    | 0.650 (0.123)    | 0 (0.000) |    10.13 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            2 |     2657 | 2024-02-11 | esmagaB         | W   | 0.479      | 0.358        | 0.008 (0.001)    | 0.258 (0.044)    | 0 (0.000) |     5.49 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            1 |     2763 | 2024-02-03 | ex-Anonymo      | W   | 0.426      | 0.358        | 0.002 (0.000)    | 0.077 (0.012)    | 0 (0.000) |     3.81 | BluePho3nix, jocab, maxster, MisteM, Silence    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,319.38)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-10 |      0.666 | $5,000.00      | $3,332.47       |
| 2024-03-06 |      0.639 | $12,500.00     | $7,986.91       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
