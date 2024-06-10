### Roster Details<br />
Team Name: MAG<br />
Roster: ariucle, Derek, lan, Tugu, WasteOfAmmo<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [197](../standings_global.md)<br />
Regional Rank: [26]( ../standings_asia.md)<br />
Final Rank Value:  527.2<br />
<br />
Final Rank Value (527.2) = Starting Rank Value (500.1) + Head To Head Adjustments (27.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.199[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.050<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 500.1
- 400 + ( ( 0.050 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 500.1


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
|           15 |     2796 | 2024-02-26 | ATOX           | L   | 0.502      | -            | -                | -                | -         |    -1.40 | ariucle, Derek, lan, Tugu, WasteOfAmmo    |
|           14 |     2812 | 2024-02-25 | The MongolZ    | L   | 0.495      | -            | -                | -                | -         |    -0.01 | ariucle, Derek, lan, Tugu, WasteOfAmmo    |
|           13 |     3019 | 2024-02-17 | Newhappy       | L   | 0.438      | -            | -                | -                | -         |    -6.77 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|           12 |     3045 | 2024-02-16 | GR             | W   | 0.432      | 0.143        | 0.011 (0.001)    | 0.148 (0.009)    | 0 (0.000) |     9.39 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|           11 |     3051 | 2024-02-16 | Lynn Vision    | L   | 0.431      | -            | -                | -                | -         |    -0.32 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|           10 |     3076 | 2024-02-15 | SEAW           | W   | 0.424      | 0.143        | 0.000 (0.000)    | 0.016 (0.001)    | 0 (0.000) |     6.14 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            9 |     3112 | 2024-02-14 | -72c           | W   | 0.418      | 0.143        | 0.000 (0.000)    | 0.023 (0.001)    | 0 (0.000) |     4.47 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            8 |     3533 | 2024-01-21 | Trouble makers | L   | 0.260      | -            | -                | -                | -         |    -4.32 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            7 |     3549 | 2024-01-20 | Gods Reign     | W   | 0.257      | 0.143        | 0.003 (0.000)    | 0.061 (0.002)    | 0 (0.000) |     5.71 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            6 |     3635 | 2024-01-19 | Dewa United    | W   | 0.245      | 0.143        | 0.003 (0.000)    | 0.037 (0.001)    | 0 (0.000) |     4.23 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            5 |     3650 | 2024-01-19 | Drippy Lab     | W   | 0.244      | 0.143        | 0.000 (0.000)    | 0.018 (0.001)    | 0 (0.000) |     2.74 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            4 |     3736 | 2024-01-17 | Gods Reign     | L   | 0.232      | -            | -                | -                | -         |    -2.13 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            3 |     3744 | 2024-01-17 | Dewa United    | W   | 0.232      | 0.143        | 0.003 (0.000)    | 0.037 (0.001)    | 0 (0.000) |     4.03 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            2 |     3746 | 2024-01-17 | RESILIENCE     | W   | 0.231      | 0.143        | 0.000 (0.000)    | 0.009 (0.000)    | 0 (0.000) |     2.65 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            1 |     3751 | 2024-01-17 | Enigma         | W   | 0.231      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.64 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
