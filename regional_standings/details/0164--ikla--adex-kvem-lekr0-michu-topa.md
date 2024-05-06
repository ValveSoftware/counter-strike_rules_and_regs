### Roster Details<br />
Team Name: IKLA<br />
Roster: adeX, Kvem, Lekr0, MICHU, Topa<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [164](../standings_global.md)<br />
Regional Rank: [107]( ../standings_europe.md)<br />
Final Rank Value:  637.1<br />
<br />
Final Rank Value (637.1) = Starting Rank Value (567.2) + Head To Head Adjustments (69.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.326[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.088<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 567.2
- 400 + ( ( 0.088 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 567.2


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
|           22 |     2430 | 2024-01-20 | HEROIC          | L   | 0.485      | -            | -                | -                | -         |    -0.06 | adeX, Kvem, Lekr0, MICHU, Topa           |
|           21 |     2480 | 2024-01-19 | PERA            | L   | 0.479      | -            | -                | -                | -         |    -2.67 | adeX, Kvem, Lekr0, MICHU, Topa           |
|           20 |     2532 | 2024-01-18 | Eternal Fire    | L   | 0.473      | -            | -                | -                | -         |    -0.04 | adeX, Kvem, Lekr0, MICHU, Topa           |
|           19 |     2536 | 2024-01-18 | Aurora          | W   | 0.473      | 0.143        | 0.973 (0.066)    | 0.967 (0.065)    | 0 (0.000) |    14.82 | adeX, Kvem, Lekr0, MICHU, Topa           |
|           18 |     2800 | 2024-01-11 | PERA            | W   | 0.427      | 0.143        | 0.062 (0.004)    | 0.365 (0.022)    | 0 (0.000) |    11.33 | adeX, Kvem, Lekr0, MICHU, Topa           |
|           17 |     2805 | 2024-01-11 | HEROIC          | L   | 0.427      | -            | -                | -                | -         |    -0.04 | adeX, Kvem, Lekr0, MICHU, Topa           |
|           16 |     2814 | 2024-01-11 | Space           | W   | 0.427      | 0.143        | 0.006 (0.000)    | 0.149 (0.009)    | 0 (0.000) |     9.22 | adeX, Kvem, Lekr0, MICHU, Topa           |
|           15 |     2819 | 2024-01-11 | 00NATION        | W   | 0.426      | 0.143        | 0.000 (0.000)    | 0.041 (0.002)    | 0 (0.000) |     4.86 | adeX, Kvem, Lekr0, MICHU, Topa           |
|           14 |     2834 | 2024-01-10 | GODSENT         | W   | 0.421      | 0.143        | 0.024 (0.001)    | 0.100 (0.006)    | 0 (0.000) |     9.61 | adeX, Kvem, Lekr0, MICHU, Topa           |
|           13 |     2880 | 2024-01-09 | BLEED           | L   | 0.413      | -            | -                | -                | -         |    -0.49 | adeX, Kvem, Lekr0, MICHU, Topa           |
|           12 |     2890 | 2024-01-09 | Metizport       | W   | 0.413      | 0.143        | 0.183 (0.011)    | 1.000 (0.059)    | 0 (0.000) |    11.80 | adeX, Kvem, Lekr0, MICHU, Topa           |
|           11 |     2975 | 2023-12-17 | 9 Pandas        | W   | 0.260      | 0.143        | 0.081 (0.003)    | 0.676 (0.025)    | 0 (0.000) |     7.81 | kensizor, Kvem, MICHU, s4ltovsk1yy, Topa |
|           10 |     3009 | 2023-12-16 | Pompa           | W   | 0.253      | 0.143        | 0.000 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     3.23 | kensizor, Kvem, MICHU, s4ltovsk1yy, Topa |
|            9 |     3037 | 2023-12-15 | RUSH B          | L   | 0.247      | -            | -                | -                | -         |    -1.93 | kensizor, Kvem, MICHU, s4ltovsk1yy, Topa |
|            8 |     3167 | 2023-12-07 | TSM             | L   | 0.191      | -            | -                | -                | -         |    -1.94 | forsyy, Kvem, Lekr0, MICHU, Topa         |
|            7 |     3228 | 2023-12-05 | ex-Preasy       | L   | 0.178      | -            | -                | -                | -         |    -0.42 | forsyy, Kvem, Lekr0, MICHU, Topa         |
|            6 |     3249 | 2023-12-03 | Sangal          | W   | 0.165      | 0.371        | 0.000 (0.000)    | 0.797 (0.049)    | 0 (0.000) |     3.91 | forsyy, Kvem, Lekr0, MICHU, Topa         |
|            5 |     3333 | 2023-11-28 | Entropiq        | W   | 0.131      | 0.371        | 0.001 (0.000)    | 0.315 (0.015)    | 0 (0.000) |     3.02 | Kvem, MICHU, ROGA, Topa, VLDN            |
|            4 |     3335 | 2023-11-27 | Entropiq        | L   | 0.126      | -            | -                | -                | -         |    -1.08 | Kvem, MICHU, ROGA, Topa, VLDN            |
|            3 |     3449 | 2023-11-20 | Alliance        | L   | 0.079      | -            | -                | -                | -         |    -0.34 | draken, Kvem, MICHU, Topa, xicoz         |
|            2 |     3571 | 2023-11-16 | ALTERNATE aTTaX | L   | 0.052      | -            | -                | -                | -         |    -0.13 | draken, Kvem, MICHU, Topa, xicoz         |
|            1 |     3662 | 2023-11-12 | Sangal          | L   | 0.027      | -            | -                | -                | -         |    -0.51 | draken, Kvem, MICHU, Topa, xicoz         |

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
