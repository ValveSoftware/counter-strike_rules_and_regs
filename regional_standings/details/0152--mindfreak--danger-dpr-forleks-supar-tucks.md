### Roster Details<br />
Team Name: Mindfreak<br />
Roster: dangeR, dpr, Forleks, supar, tucks<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [152](../standings_global.md)<br />
Regional Rank: [16]( ../standings_asia.md)<br />
Final Rank Value:  685.6<br />
<br />
Final Rank Value (685.6) = Starting Rank Value (619.9) + Head To Head Adjustments (65.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.206[<sup>1</sup>](#table2)
- Bounty Collected: 0.240[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.115<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 619.9
- 400 + ( ( 0.115 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 619.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |     2298 | 2024-01-25 | Rooster        | L   | 0.517      | -            | -                | -                | -         |    -5.32 | dangeR, dpr, Forleks, supar, tucks   |
|           21 |     2315 | 2024-01-24 | DXA            | W   | 0.511      | 0.143        | 0.009 (0.001)    | 0.239 (0.017)    | 0 (0.000) |     8.60 | dangeR, dpr, Forleks, supar, tucks   |
|           20 |     2335 | 2024-01-23 | FlyQuest       | L   | 0.504      | -            | -                | -                | -         |    -0.40 | dangeR, dpr, Forleks, supar, tucks   |
|           19 |     2337 | 2024-01-23 | Rooster        | W   | 0.504      | 0.143        | 0.029 (0.002)    | 0.348 (0.025)    | 0 (0.000) |    11.08 | dangeR, dpr, Forleks, supar, tucks   |
|           18 |     2364 | 2024-01-22 | FlyQuest       | L   | 0.498      | -            | -                | -                | -         |    -0.37 | dangeR, dpr, Forleks, supar, tucks   |
|           17 |     2365 | 2024-01-22 | Rooster        | W   | 0.497      | 0.143        | 0.029 (0.002)    | 0.348 (0.025)    | 0 (0.000) |    11.14 | dangeR, dpr, Forleks, supar, tucks   |
|           16 |     2400 | 2024-01-20 | FlyQuest       | L   | 0.489      | -            | -                | -                | -         |    -0.35 | dangeR, dpr, Forleks, supar, tucks   |
|           15 |     2439 | 2024-01-20 | DXA            | W   | 0.484      | 0.143        | 0.000 (0.000)    | 0.021 (0.001)    | 0 (0.000) |     3.02 | dangeR, dpr, Forleks, supar, tucks   |
|           14 |     2498 | 2024-01-19 | Rooster        | L   | 0.477      | -            | -                | -                | -         |    -4.20 | dangeR, dpr, Forleks, supar, tucks   |
|           13 |     2502 | 2024-01-18 | Vantage        | W   | 0.477      | 0.143        | 0.000 (0.000)    | 0.332 (0.023)    | 0 (0.000) |     5.27 | dangeR, dpr, Forleks, supar, tucks   |
|           12 |     2556 | 2024-01-18 | VexX           | W   | 0.471      | 0.143        | 0.009 (0.001)    | 0.252 (0.017)    | 0 (0.000) |     8.27 | dangeR, dpr, Forleks, supar, tucks   |
|           11 |     2559 | 2024-01-17 | Vantage        | W   | 0.470      | 0.143        | 0.000 (0.000)    | 0.332 (0.022)    | 0 (0.000) |     5.57 | dangeR, dpr, Forleks, supar, tucks   |
|           10 |     2606 | 2024-01-17 | PatatiPatata   | W   | 0.464      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     3.00 | dangeR, dpr, Forleks, supar, tucks   |
|            9 |     2657 | 2024-01-16 | FlyQuest       | L   | 0.457      | -            | -                | -                | -         |    -0.28 | dangeR, dpr, Forleks, supar, tucks   |
|            8 |     2686 | 2024-01-15 | KZG            | W   | 0.450      | 0.143        | 0.018 (0.001)    | 0.216 (0.014)    | 0 (0.000) |     9.07 | dangeR, dpr, Forleks, supar, tucks   |
|            7 |     2746 | 2024-01-13 | RKON           | W   | 0.437      | 0.143        | -                | 0.142 (0.009)    | 0 (0.000) |     5.18 | dangeR, dpr, Forleks, supar, tucks   |
|            6 |     2748 | 2024-01-13 | iM Apartments  | W   | 0.437      | -            | -                | -                | -         |     3.04 | dangeR, dpr, Forleks, supar, tucks   |
|            5 |     2750 | 2024-01-12 | 500x           | W   | 0.437      | -            | -                | -                | -         |     3.08 | dangeR, dpr, Forleks, supar, tucks   |
|            4 |     3509 | 2023-11-17 | sunday school  | L   | 0.063      | -            | -                | -                | -         |    -0.85 | cl0ver, coops, Forleks, supar, tucks |
|            3 |     3537 | 2023-11-17 | KZG            | W   | 0.058      | 0.313        | 0.018 (0.000)    | 0.216 (0.004)    | -         |     1.20 | dangeR, dpr, Forleks, supar, tucks   |
|            2 |     3683 | 2023-11-11 | Rooster        | L   | 0.023      | -            | -                | -                | -         |    -0.18 | dangeR, dpr, Forleks, supar, tucks   |
|            1 |     3711 | 2023-11-11 | Stirlzs Angels | W   | 0.017      | -            | -                | -                | -         |     0.12 | dangeR, dpr, Forleks, supar, tucks   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($22.37)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
