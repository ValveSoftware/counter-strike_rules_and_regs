### Roster Details<br />
Team Name: Young Ninjas<br />
Roster: bobeksde, jocab, MisteM, Silence, xKacpersky<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [69](../standings_global.md)<br />
Regional Rank: [51]( ../standings_europe.md)<br />
Final Rank Value:  927.2<br />
<br />
Final Rank Value (927.2) = Starting Rank Value (909.4) + Head To Head Adjustments (17.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.485[<sup>1</sup>](#table2)
- Bounty Collected: 0.451[<sup>2</sup>](#table1)
- Opponent Network: 0.135[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.267<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 909.4
- 400 + ( ( 0.267 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 909.4


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
|           16 |      314 | 2024-04-21 | Nexus           | L   | 1.000      | -            | -                | -                | -         |   -16.28 | bobeksde, jocab, MisteM, Silence, xKacpersky    |
|           15 |      338 | 2024-04-20 | Passion UA      | L   | 1.000      | -            | -                | -                | -         |   -16.55 | bobeksde, jocab, MisteM, Silence, xKacpersky    |
|           14 |      422 | 2024-04-18 | Nexus           | W   | 1.000      | 0.500        | 0.031 (0.015)    | 0.605 (0.302)    | 0 (0.000) |    14.39 | bobeksde, jocab, MisteM, Silence, xKacpersky    |
|           13 |      768 | 2024-04-07 | 3DMAX           | L   | 1.000      | -            | -                | -                | -         |    -7.37 | BluePho3nix, jocab, MisteM, Silence, xKacpersky |
|           12 |     1355 | 2024-03-10 | 500             | W   | 0.819      | 0.358        | 0.003 (0.001)    | 0.578 (0.170)    | 0 (0.000) |     9.02 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|           11 |     1381 | 2024-03-09 | AURA            | W   | 0.812      | 0.143        | 0.000 (0.000)    | 0.064 (0.007)    | 0 (0.000) |     1.91 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|           10 |     1454 | 2024-03-06 | HEROIC          | L   | 0.793      | -            | -                | -                | -         |    -0.51 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            9 |     1488 | 2024-03-05 | fnatic          | L   | 0.786      | -            | -                | -                | -         |    -5.01 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            8 |     1501 | 2024-03-05 | Permitta        | L   | 0.786      | -            | -                | -                | -         |   -12.82 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            7 |     1512 | 2024-03-04 | Aurora          | W   | 0.779      | 0.500        | 0.973 (0.379)    | 0.967 (0.377)    | 0 (0.000) |    23.47 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            6 |     1529 | 2024-03-03 | BIG             | W   | 0.774      | 0.500        | 0.454 (0.175)    | 0.510 (0.197)    | 0 (0.000) |    22.62 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            5 |     1583 | 2024-03-01 | BLEED           | L   | 0.759      | -            | -                | -                | -         |    -5.20 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            4 |     1596 | 2024-02-29 | Zero Tenacity   | L   | 0.752      | -            | -                | -                | -         |   -12.19 | BluePho3nix, jocab, MisteM, REZ, Silence        |
|            3 |     1831 | 2024-02-18 | ALTERNATE aTTaX | W   | 0.680      | 0.358        | 0.104 (0.025)    | 0.779 (0.190)    | 0 (0.000) |    11.11 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            2 |     2006 | 2024-02-11 | esmagaB         | W   | 0.633      | 0.358        | 0.016 (0.004)    | 0.293 (0.067)    | 0 (0.000) |     5.89 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            1 |     2112 | 2024-02-03 | ex-Anonymo      | W   | 0.580      | 0.358        | 0.016 (0.003)    | 0.175 (0.036)    | 0 (0.000) |     5.26 | BluePho3nix, jocab, maxster, MisteM, Silence    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,016.00)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-10 |      0.821 | $5,000.00      | $4,102.93       |
| 2024-03-06 |      0.793 | $12,500.00     | $9,913.07       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
