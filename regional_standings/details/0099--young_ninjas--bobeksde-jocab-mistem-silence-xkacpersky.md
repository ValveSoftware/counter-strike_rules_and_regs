### Roster Details<br />
Team Name: Young Ninjas<br />
Roster: bobeksde, jocab, MisteM, Silence, xKacpersky<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [99](../standings_global.md)<br />
Regional Rank: [70]( ../standings_europe.md)<br />
Final Rank Value:  862.4<br />
<br />
Final Rank Value (862.4) = Starting Rank Value (826.4) + Head To Head Adjustments (36.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.402[<sup>1</sup>](#table2)
- Bounty Collected: 0.375[<sup>2</sup>](#table1)
- Opponent Network: 0.078[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.214<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 826.4
- 400 + ( ( 0.214 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 826.4


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
|           16 |     1465 | 2024-04-21 | Nexus           | L   | 0.867      | -            | -                | -                | -         |   -12.43 | bobeksde, jocab, MisteM, Silence, xKacpersky    |
|           15 |     1489 | 2024-04-20 | Passion UA      | L   | 0.860      | -            | -                | -                | -         |   -10.16 | bobeksde, jocab, MisteM, Silence, xKacpersky    |
|           14 |     1573 | 2024-04-18 | Nexus           | W   | 0.847      | 0.500        | 0.013 (0.005)    | 0.469 (0.199)    | 0 (0.000) |    14.20 | bobeksde, jocab, MisteM, Silence, xKacpersky    |
|           13 |     1919 | 2024-04-07 | 3DMAX           | L   | 0.772      | -            | -                | -                | -         |    -3.53 | BluePho3nix, jocab, MisteM, Silence, xKacpersky |
|           12 |     2506 | 2024-03-10 | 500             | W   | 0.586      | 0.358        | 0.002 (0.000)    | 0.354 (0.074)    | 0 (0.000) |     7.68 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|           11 |     2532 | 2024-03-09 | GODSENT         | W   | 0.579      | 0.143        | 0.000 (0.000)    | 0.060 (0.005)    | 0 (0.000) |     2.49 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|           10 |     2605 | 2024-03-06 | HEROIC          | L   | 0.560      | -            | -                | -                | -         |    -0.11 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            9 |     2639 | 2024-03-05 | fnatic          | L   | 0.553      | -            | -                | -                | -         |    -1.38 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            8 |     2652 | 2024-03-05 | Permitta        | L   | 0.552      | -            | -                | -                | -         |    -7.04 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            7 |     2663 | 2024-03-04 | Aurora          | W   | 0.546      | 0.500        | 0.513 (0.140)    | 0.918 (0.251)    | 0 (0.000) |    16.81 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            6 |     2680 | 2024-03-03 | BIG             | W   | 0.540      | 0.500        | 0.228 (0.062)    | 0.459 (0.124)    | 0 (0.000) |    16.42 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            5 |     2734 | 2024-03-01 | BLEED           | L   | 0.526      | -            | -                | -                | -         |    -0.84 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            4 |     2747 | 2024-02-29 | Zero Tenacity   | L   | 0.519      | -            | -                | -                | -         |    -3.56 | BluePho3nix, jocab, MisteM, REZ, Silence        |
|            3 |     2982 | 2024-02-18 | ALTERNATE aTTaX | W   | 0.447      | 0.358        | 0.046 (0.007)    | 0.583 (0.093)    | 0 (0.000) |     9.99 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            2 |     3157 | 2024-02-11 | esmagaB         | W   | 0.400      | 0.358        | 0.008 (0.001)    | 0.211 (0.030)    | 0 (0.000) |     4.65 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            1 |     3263 | 2024-02-03 | ex-Anonymo      | W   | 0.347      | 0.358        | 0.001 (0.000)    | 0.044 (0.005)    | 0 (0.000) |     2.80 | BluePho3nix, jocab, maxster, MisteM, Silence    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,933.87)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-10 |      0.587 | $5,000.00      | $2,936.61       |
| 2024-03-06 |      0.560 | $12,500.00     | $6,997.26       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
