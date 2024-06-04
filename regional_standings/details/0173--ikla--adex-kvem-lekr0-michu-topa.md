### Roster Details<br />
Team Name: IKLA<br />
Roster: adeX, Kvem, Lekr0, MICHU, Topa<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [173](../standings_global.md)<br />
Regional Rank: [112]( ../standings_europe.md)<br />
Final Rank Value:  585.1<br />
<br />
Final Rank Value (585.1) = Starting Rank Value (543.4) + Head To Head Adjustments (41.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.283[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.074<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 543.4
- 400 + ( ( 0.074 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 543.4


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
|           17 |     3081 | 2024-01-20 | HEROIC       | L   | 0.331      | -            | -                | -                | -         |    -0.02 | adeX, Kvem, Lekr0, MICHU, Topa           |
|           16 |     3131 | 2024-01-19 | PERA         | L   | 0.325      | -            | -                | -                | -         |    -1.62 | adeX, Kvem, Lekr0, MICHU, Topa           |
|           15 |     3183 | 2024-01-18 | Eternal Fire | L   | 0.319      | -            | -                | -                | -         |    -0.01 | adeX, Kvem, Lekr0, MICHU, Topa           |
|           14 |     3187 | 2024-01-18 | Aurora       | W   | 0.319      | 0.143        | 0.493 (0.022)    | 0.840 (0.038)    | 0 (0.000) |     9.97 | adeX, Kvem, Lekr0, MICHU, Topa           |
|           13 |     3451 | 2024-01-11 | PERA         | W   | 0.273      | 0.143        | 0.027 (0.001)    | 0.408 (0.016)    | 0 (0.000) |     7.36 | adeX, Kvem, Lekr0, MICHU, Topa           |
|           12 |     3456 | 2024-01-11 | HEROIC       | L   | 0.273      | -            | -                | -                | -         |    -0.01 | adeX, Kvem, Lekr0, MICHU, Topa           |
|           11 |     3465 | 2024-01-11 | Space        | W   | 0.273      | 0.143        | 0.007 (0.000)    | 0.437 (0.017)    | 0 (0.000) |     6.93 | adeX, Kvem, Lekr0, MICHU, Topa           |
|           10 |     3470 | 2024-01-11 | 00NATION     | W   | 0.272      | 0.143        | 0.000 (0.000)    | 0.024 (0.001)    | 0 (0.000) |     3.41 | adeX, Kvem, Lekr0, MICHU, Topa           |
|            9 |     3485 | 2024-01-10 | GODSENT      | W   | 0.267      | 0.143        | 0.001 (0.000)    | 0.081 (0.003)    | 0 (0.000) |     5.39 | adeX, Kvem, Lekr0, MICHU, Topa           |
|            8 |     3531 | 2024-01-09 | BLEED        | L   | 0.259      | -            | -                | -                | -         |    -0.21 | adeX, Kvem, Lekr0, MICHU, Topa           |
|            7 |     3541 | 2024-01-09 | Metizport    | W   | 0.259      | 0.143        | 0.088 (0.003)    | 0.860 (0.032)    | 0 (0.000) |     7.41 | adeX, Kvem, Lekr0, MICHU, Topa           |
|            6 |     3626 | 2023-12-17 | 9 Pandas     | W   | 0.106      | 0.143        | 0.108 (0.002)    | 0.798 (0.012)    | 0 (0.000) |     3.22 | kensizor, Kvem, MICHU, s4ltovsk1yy, Topa |
|            5 |     3660 | 2023-12-16 | Pompa        | W   | 0.099      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.97 | kensizor, Kvem, MICHU, s4ltovsk1yy, Topa |
|            4 |     3688 | 2023-12-15 | RUSH B       | L   | 0.093      | -            | -                | -                | -         |    -0.79 | kensizor, Kvem, MICHU, s4ltovsk1yy, Topa |
|            3 |     3818 | 2023-12-07 | TSM          | L   | 0.037      | -            | -                | -                | -         |    -0.45 | forsyy, Kvem, Lekr0, MICHU, Topa         |
|            2 |     3879 | 2023-12-05 | ex-Preasy    | L   | 0.024      | -            | -                | -                | -         |    -0.09 | forsyy, Kvem, Lekr0, MICHU, Topa         |
|            1 |     3900 | 2023-12-03 | Sangal       | W   | 0.011      | 0.371        | 0.166 (0.001)    | 0.911 (0.004)    | 0 (0.000) |     0.32 | forsyy, Kvem, Lekr0, MICHU, Topa         |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
