### Roster Details<br />
Team Name: ARCRED<br />
Roster: 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [134](../standings_global.md)<br />
Regional Rank: [88]( ../standings_europe.md)<br />
Final Rank Value:  701.8<br />
<br />
Final Rank Value (701.8) = Starting Rank Value (669.4) + Head To Head Adjustments (32.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.204[<sup>1</sup>](#table2)
- Bounty Collected: 0.276[<sup>2</sup>](#table1)
- Opponent Network: 0.076[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.139<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 669.4
- 400 + ( ( 0.139 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 669.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |      685 | 2024-05-05 | 9 Pandas        | L   | 1.000      | -            | -                | -                | -         |    -3.63 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           17 |      866 | 2024-04-26 | Insilio         | W   | 0.979      | 0.396        | 0.010 (0.004)    | 0.542 (0.210)    | 0 (0.000) |    24.71 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           16 |      875 | 2024-04-26 | Permitta        | W   | 0.977      | 0.396        | 0.025 (0.010)    | 1.000 (0.387)    | 0 (0.000) |    24.89 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           15 |     1962 | 2024-03-12 | The Chosen Few  | L   | 0.679      | -            | -                | -                | -         |    -9.13 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           14 |     2019 | 2024-03-09 | FORZE YNG       | W   | 0.659      | 0.372        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.78 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           13 |     2045 | 2024-03-08 | RUBY            | L   | 0.652      | -            | -                | -                | -         |    -5.64 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           12 |     2133 | 2024-03-05 | 1WIN            | W   | 0.633      | 0.372        | 0.043 (0.010)    | 0.666 (0.157)    | 0 (0.000) |    16.74 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           11 |     2280 | 2024-02-27 | FORZE           | L   | 0.585      | -            | -                | -                | -         |    -2.56 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           10 |     2487 | 2024-02-18 | brazylijski luz | L   | 0.525      | -            | -                | -                | -         |    -5.62 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|            9 |     2659 | 2024-02-11 | Sashi           | L   | 0.478      | -            | -                | -                | -         |    -1.67 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|            8 |     2747 | 2024-02-04 | esmagaB         | L   | 0.431      | -            | -                | -                | -         |    -5.49 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|            7 |     3301 | 2024-01-16 | Sashi           | L   | 0.306      | -            | -                | -                | -         |    -1.09 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|            6 |     3419 | 2024-01-12 | Space           | L   | 0.280      | -            | -                | -                | -         |    -2.71 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|            5 |     3588 | 2023-12-20 | Metizport       | L   | 0.125      | -            | -                | -                | -         |    -0.62 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|            4 |     3604 | 2023-12-18 | showmakerz      | W   | 0.112      | 0.333        | 0.000 (0.000)    | 0.018 (0.001)    | 0 (0.000) |     0.89 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|            3 |     3607 | 2023-12-18 | Sprout          | L   | 0.111      | -            | -                | -                | -         |    -2.03 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|            2 |     3609 | 2023-12-18 | Sashi           | W   | 0.110      | 0.333        | 0.000 (0.000)    | 0.006 (0.000)    | 0 (0.000) |     1.33 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|            1 |     3894 | 2023-12-03 | Spirit Academy  | W   | 0.012      | 0.294        | 0.003 (0.000)    | 0.131 (0.000)    | 0 (0.000) |     0.21 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($37.39)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
