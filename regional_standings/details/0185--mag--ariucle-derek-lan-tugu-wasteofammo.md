### Roster Details<br />
Team Name: MAG<br />
Roster: ariucle, Derek, lan, Tugu, WasteOfAmmo<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [185](../standings_global.md)<br />
Regional Rank: [27]( ../standings_asia.md)<br />
Final Rank Value:  547.0<br />
<br />
Final Rank Value (547.0) = Starting Rank Value (500.8) + Head To Head Adjustments (46.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.206[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 500.8
- 400 + ( ( 0.053 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 500.8


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
|           15 |     1645 | 2024-02-26 | ATOX           | L   | 0.735      | -            | -                | -                | -         |    -5.26 | ariucle, Derek, lan, Tugu, WasteOfAmmo    |
|           14 |     1661 | 2024-02-25 | TheMongolz     | L   | 0.729      | -            | -                | -                | -         |    -0.17 | ariucle, Derek, lan, Tugu, WasteOfAmmo    |
|           13 |     1868 | 2024-02-17 | Newhappy       | L   | 0.671      | -            | -                | -                | -         |    -6.78 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|           12 |     1894 | 2024-02-16 | GR             | W   | 0.665      | 0.143        | 0.005 (0.000)    | 0.217 (0.021)    | 0 (0.000) |    13.57 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|           11 |     1900 | 2024-02-16 | Lynn Vision    | L   | 0.664      | -            | -                | -                | -         |    -0.78 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|           10 |     1925 | 2024-02-15 | SEAW           | W   | 0.658      | 0.143        | 0.000 (0.000)    | 0.029 (0.003)    | 0 (0.000) |     6.64 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            9 |     1961 | 2024-02-14 | -72c           | W   | 0.652      | 0.143        | 0.003 (0.000)    | 0.053 (0.005)    | 0 (0.000) |    12.62 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            8 |     2382 | 2024-01-21 | Trouble makers | L   | 0.493      | -            | -                | -                | -         |    -8.26 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            7 |     2398 | 2024-01-20 | Gods Reign     | W   | 0.490      | 0.143        | 0.011 (0.001)    | 0.143 (0.010)    | 0 (0.000) |    11.45 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            6 |     2484 | 2024-01-19 | Dewa United    | W   | 0.478      | 0.143        | 0.000 (0.000)    | 0.084 (0.006)    | 0 (0.000) |     5.58 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            5 |     2499 | 2024-01-19 | Drippy Lab     | W   | 0.477      | 0.143        | 0.000 (0.000)    | 0.041 (0.003)    | 0 (0.000) |     5.29 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            4 |     2585 | 2024-01-17 | Gods Reign     | L   | 0.466      | -            | -                | -                | -         |    -3.69 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            3 |     2593 | 2024-01-17 | Dewa United    | W   | 0.465      | 0.143        | 0.000 (0.000)    | 0.084 (0.006)    | 0 (0.000) |     5.35 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            2 |     2595 | 2024-01-17 | RESILIENCE     | W   | 0.465      | 0.143        | 0.000 (0.000)    | 0.021 (0.001)    | 0 (0.000) |     5.29 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            1 |     2600 | 2024-01-17 | Enigma         | W   | 0.464      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.25 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
