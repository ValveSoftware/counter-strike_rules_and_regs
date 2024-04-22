### Roster Details<br />
Team Name: MAG<br />
Roster: ariucle, Derek, lan, Tugu, WasteOfAmmo<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [196](../standings_global.md)<br />
Regional Rank: [29]( ../standings_asia.md)<br />
Final Rank Value:  558.7<br />
<br />
Final Rank Value (558.7) = Starting Rank Value (505.4) + Head To Head Adjustments (53.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.211[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.055<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 505.4
- 400 + ( ( 0.055 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 505.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     1349 | 2024-02-26 | ATOX           | L   | 0.829      | -            | -                | -                | -         |    -5.86 | ariucle, Derek, lan, Tugu, WasteOfAmmo    |
|           14 |     1365 | 2024-02-25 | TheMongolz     | L   | 0.822      | -            | -                | -                | -         |    -0.34 | ariucle, Derek, lan, Tugu, WasteOfAmmo    |
|           13 |     1572 | 2024-02-17 | Newhappy       | L   | 0.764      | -            | -                | -                | -         |    -7.61 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|           12 |     1598 | 2024-02-16 | GR             | W   | 0.759      | 0.143        | 0.005 (0.001)    | 0.267 (0.029)    | 0 (0.000) |    15.31 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|           11 |     1604 | 2024-02-16 | Lynn Vision    | L   | 0.757      | -            | -                | -                | -         |    -0.84 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|           10 |     1629 | 2024-02-15 | SEAW           | W   | 0.751      | 0.143        | 0.000 (0.000)    | 0.035 (0.004)    | 0 (0.000) |     7.28 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            9 |     1665 | 2024-02-14 | -72c           | W   | 0.745      | 0.143        | 0.003 (0.000)    | 0.069 (0.007)    | 0 (0.000) |    14.47 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            8 |     2086 | 2024-01-21 | Trouble makers | L   | 0.586      | -            | -                | -                | -         |    -9.89 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            7 |     2102 | 2024-01-20 | Gods Reign     | W   | 0.583      | 0.143        | 0.010 (0.001)    | 0.180 (0.015)    | 0 (0.000) |    13.63 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            6 |     2188 | 2024-01-19 | Dewa United    | W   | 0.571      | 0.143        | 0.000 (0.000)    | 0.105 (0.009)    | 0 (0.000) |     6.59 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            5 |     2203 | 2024-01-19 | Drippy Lab     | W   | 0.570      | 0.143        | 0.000 (0.000)    | 0.052 (0.004)    | 0 (0.000) |     6.18 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            4 |     2289 | 2024-01-17 | Gods Reign     | L   | 0.559      | -            | -                | -                | -         |    -4.37 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            3 |     2297 | 2024-01-17 | Dewa United    | W   | 0.558      | 0.143        | 0.000 (0.000)    | 0.105 (0.008)    | 0 (0.000) |     6.33 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            2 |     2299 | 2024-01-17 | RESILIENCE     | W   | 0.558      | 0.143        | 0.000 (0.000)    | 0.026 (0.002)    | 0 (0.000) |     6.24 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            1 |     2304 | 2024-01-17 | Enigma         | W   | 0.558      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.17 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
