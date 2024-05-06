### Roster Details<br />
Team Name: BIG Academy<br />
Roster: b1elany, hyped, pr1metapz, skyye, xicoz<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [150](../standings_global.md)<br />
Regional Rank: [99]( ../standings_europe.md)<br />
Final Rank Value:  688.5<br />
<br />
Final Rank Value (688.5) = Starting Rank Value (684.0) + Head To Head Adjustments (4.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.358[<sup>1</sup>](#table2)
- Bounty Collected: 0.229[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.149<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 684.0
- 400 + ( ( 0.149 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 684.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1737 | 2024-02-22 | ECLOT           | L   | 0.705      | -            | -                | -                | -         |    -2.29 | b1elany, hyped, pr1metapz, skyye, xicoz |
|            9 |     2233 | 2024-01-29 | Into the Breach | L   | 0.544      | -            | -                | -                | -         |    -6.38 | b1elany, hyped, pr1metapz, skyye, xicoz |
|            8 |     2292 | 2024-01-25 | Metizport       | L   | 0.518      | -            | -                | -                | -         |    -2.79 | b1elany, hyped, pr1metapz, skyye, xicoz |
|            7 |     3011 | 2023-12-16 | ALTERNATE aTTaX | L   | 0.253      | -            | -                | -                | -         |    -1.35 | ArroW, hyped, MRC9, pr1metapz, skyye    |
|            6 |     3053 | 2023-12-13 | RUSH B          | W   | 0.233      | 0.372        | 0.006 (0.001)    | 0.340 (0.029)    | 0 (0.000) |     4.41 | ArroW, hyped, MRC9, pr1metapz, skyye    |
|            5 |     3127 | 2023-12-08 | TSM             | W   | 0.200      | 0.372        | 0.008 (0.001)    | 0.074 (0.006)    | 0 (0.000) |     3.28 | ArroW, hyped, MRC9, pr1metapz, skyye    |
|            4 |     3156 | 2023-12-07 | Endpoint        | W   | 0.193      | 0.372        | 0.020 (0.001)    | 0.694 (0.050)    | 0 (0.000) |     4.67 | ArroW, hyped, MRC9, pr1metapz, skyye    |
|            3 |     3184 | 2023-12-06 | TUSTE CHOPAKI   | W   | 0.187      | 0.372        | 0.000 (0.000)    | 0.008 (0.001)    | 0 (0.000) |     0.99 | ArroW, hyped, MRC9, pr1metapz, skyye    |
|            2 |     3213 | 2023-12-05 | LT5             | W   | 0.180      | 0.372        | 0.000 (0.000)    | 0.008 (0.001)    | 0 (0.000) |     0.95 | ArroW, hyped, MRC9, pr1metapz, skyye    |
|            1 |     3368 | 2023-11-25 | ALTERNATE aTTaX | W   | 0.113      | 0.143        | 0.104 (0.002)    | 0.779 (0.013)    | 0 (0.000) |     3.04 | ArroW, hyped, MRC9, pr1metapz, skyye    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,591.60)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-16 |      0.253 | $3,799.00      | $960.83         |
| 2023-12-13 |      0.233 | $7,000.00      | $1,630.76       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
