### Roster Details<br />
Team Name: Sprout<br />
Roster: Anlelele, Buzz, cej0t, raalz, sL1m3<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [162](../standings_global.md)<br />
Regional Rank: [107]( ../standings_europe.md)<br />
Final Rank Value:  614.9<br />
<br />
Final Rank Value (614.9) = Starting Rank Value (610.6) + Head To Head Adjustments (4.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.218[<sup>1</sup>](#table2)
- Bounty Collected: 0.209[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.108<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 610.6
- 400 + ( ( 0.108 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 610.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |     2287 | 2024-02-27 | Permitta          | L   | 0.584      | -            | -                | -                | -         |    -2.91 | Anlelele, Buzz, cej0t, raalz, sL1m3   |
|           16 |     3205 | 2024-01-18 | ex-Guild Eagles   | L   | 0.317      | -            | -                | -                | -         |    -1.28 | Anlelele, cej0t, raalz, sL1m3, Zyphon |
|           15 |     3221 | 2024-01-17 | 500               | W   | 0.314      | 0.143        | 0.002 (0.000)    | 0.436 (0.020)    | 0 (0.000) |     6.80 | Anlelele, cej0t, raalz, sL1m3, Zyphon |
|           14 |     3231 | 2024-01-17 | GUN5              | W   | 0.313      | 0.143        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     3.04 | Anlelele, cej0t, raalz, sL1m3, Zyphon |
|           13 |     3430 | 2024-01-12 | LOADING           | L   | 0.280      | -            | -                | -                | -         |    -6.09 | Anlelele, cej0t, raalz, sL1m3, Zyphon |
|           12 |     3589 | 2023-12-20 | PERA              | L   | 0.124      | -            | -                | -                | -         |    -0.72 | Anlelele, cej0t, raalz, sL1m3, spooke |
|           11 |     3607 | 2023-12-18 | ARCRED            | W   | 0.111      | 0.333        | 0.000 (0.000)    | 0.144 (0.005)    | 0 (0.000) |     2.03 | Anlelele, cej0t, raalz, sL1m3, spooke |
|           10 |     3610 | 2023-12-18 | showmakerz        | W   | 0.110      | 0.333        | 0.000 (0.000)    | 0.018 (0.001)    | 0 (0.000) |     1.09 | Anlelele, cej0t, raalz, sL1m3, spooke |
|            9 |     3715 | 2023-12-12 | BIG               | L   | 0.072      | -            | -                | -                | -         |    -0.03 | cej0t, fNk, raalz, sL1m3, spooke      |
|            8 |     3725 | 2023-12-11 | Alliance          | W   | 0.065      | 0.384        | 0.004 (0.000)    | 0.617 (0.015)    | 0 (0.000) |     1.60 | cej0t, fNk, raalz, sL1m3, spooke      |
|            7 |     3772 | 2023-12-09 | TSM               | L   | 0.050      | -            | -                | -                | -         |    -0.75 | Anlelele, cej0t, raalz, sL1m3, spooke |
|            6 |     3787 | 2023-12-08 | ALTERNATE aTTaX   | L   | 0.044      | -            | -                | -                | -         |    -0.18 | Anlelele, cej0t, raalz, sL1m3, spooke |
|            5 |     3805 | 2023-12-07 | Gaimin Gladiators | W   | 0.039      | 0.384        | 0.090 (0.001)    | 0.809 (0.012)    | 0 (0.000) |     1.20 | AJTT, cej0t, raalz, sL1m3, spooke     |
|            4 |     3843 | 2023-12-06 | Alliance          | L   | 0.031      | -            | -                | -                | -         |    -0.22 | AJTT, cej0t, raalz, sL1m3, spooke     |
|            3 |     3850 | 2023-12-06 | Endpoint          | W   | 0.030      | 0.371        | 0.012 (0.000)    | 0.627 (0.007)    | 0 (0.000) |     0.78 | Anlelele, cej0t, raalz, sL1m3, spooke |
|            2 |     3881 | 2023-12-04 | RED Canids        | L   | 0.019      | -            | -                | -                | -         |    -0.06 | Anlelele, cej0t, raalz, sL1m3, spooke |
|            1 |     3899 | 2023-12-03 | G2                | L   | 0.011      | -            | -                | -                | -         |     0.00 | Anlelele, cej0t, raalz, sL1m3, spooke |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($79.36)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
