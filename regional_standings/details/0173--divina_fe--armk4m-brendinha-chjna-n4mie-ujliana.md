### Roster Details<br />
Team Name: Divina fe<br />
Roster: armk4m, Brendinha, chjna, n4mie, ujliana<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [173](../standings_global.md)<br />
Regional Rank: [41]( ../standings_americas.md)<br />
Final Rank Value:  631.7<br />
<br />
Final Rank Value (631.7) = Starting Rank Value (666.6) + Head To Head Adjustments (-34.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.318[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.138<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 666.6
- 400 + ( ( 0.138 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 666.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |       77 | 2024-04-19 | W7M fe       | L   | 1.000      | -            | -                | -                | -         |   -15.57 | armk4m, Brendinha, chjna, n4mie, ujliana |
|            9 |      299 | 2024-04-11 | Atrix        | L   | 1.000      | -            | -                | -                | -         |   -14.52 | armk4m, Brendinha, chjna, n4mie, ujliana |
|            8 |      568 | 2024-04-03 | FURIA fe     | L   | 1.000      | -            | -                | -                | -         |    -9.64 | armk4m, Brendinha, chjna, n4mie, ujliana |
|            7 |      705 | 2024-03-27 | Fluxo Demons | L   | 1.000      | -            | -                | -                | -         |    -9.75 | armk4m, Brendinha, chjna, n4mie, ujliana |
|            6 |      823 | 2024-03-20 | GENKID4M4    | W   | 0.981      | 0.332        | 0.007 (0.002)    | 0.077 (0.025)    | 0 (0.000) |    14.10 | armk4m, Brendinha, chjna, n4mie, ujliana |
|            5 |      968 | 2024-03-13 | KG fe        | W   | 0.934      | 0.332        | 0.005 (0.002)    | 0.036 (0.011)    | 0 (0.000) |    12.17 | armk4m, Brendinha, chjna, n4mie, ujliana |
|            4 |     1117 | 2024-03-07 | MIBR fe      | L   | 0.894      | -            | -                | -                | -         |   -11.88 | armk4m, Brendinha, chjna, n4mie, ujliana |
|            3 |     1687 | 2024-02-13 | KG fe        | W   | 0.741      | 0.143        | 0.005 (0.001)    | 0.036 (0.004)    | 0 (0.000) |    10.16 | armk4m, Brendinha, chjna, n4mie, ujliana |
|            2 |     1951 | 2024-01-27 | MIBR fe      | L   | 0.628      | -            | -                | -                | -         |    -8.68 | Babs, Dani, ferzy, khizha, REGIANE       |
|            1 |     3531 | 2023-11-04 | MEGAZORD fe  | L   | 0.068      | -            | -                | -                | -         |    -1.30 | Babs, chjna, josi, REGIANE, yungher      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,374.03)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-19 |      1.000 | $1,200.00      | $1,200.00       |
| 2024-01-27 |      0.628 | $250.00        | $157.07         |
| 2023-11-04 |      0.068 | $250.00        | $16.96          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
