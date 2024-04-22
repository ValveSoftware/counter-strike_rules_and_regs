### Roster Details<br />
Team Name: IKLA<br />
Roster: adeX, Kvem, Lekr0, MICHU, Topa<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [160](../standings_global.md)<br />
Regional Rank: [106]( ../standings_europe.md)<br />
Final Rank Value:  664.6<br />
<br />
Final Rank Value (664.6) = Starting Rank Value (576.6) + Head To Head Adjustments (88.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.326[<sup>2</sup>](#table1)
- Opponent Network: 0.040[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.091<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 576.6
- 400 + ( ( 0.091 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 576.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |     2134 | 2024-01-20 | HEROIC            | L   | 0.578      | -            | -                | -                | -         |    -0.11 | adeX, Kvem, Lekr0, MICHU, Topa           |
|           25 |     2184 | 2024-01-19 | PERA              | L   | 0.572      | -            | -                | -                | -         |    -5.39 | adeX, Kvem, Lekr0, MICHU, Topa           |
|           24 |     2236 | 2024-01-18 | Eternal Fire      | L   | 0.566      | -            | -                | -                | -         |    -0.09 | adeX, Kvem, Lekr0, MICHU, Topa           |
|           23 |     2240 | 2024-01-18 | Aurora            | W   | 0.566      | 0.143        | 0.763 (0.062)    | 1.000 (0.081)    | 0 (0.000) |    17.50 | adeX, Kvem, Lekr0, MICHU, Topa           |
|           22 |     2504 | 2024-01-11 | PERA              | W   | 0.521      | 0.143        | 0.025 (0.002)    | 0.424 (0.032)    | 0 (0.000) |    11.89 | adeX, Kvem, Lekr0, MICHU, Topa           |
|           21 |     2509 | 2024-01-11 | HEROIC            | L   | 0.520      | -            | -                | -                | -         |    -0.08 | adeX, Kvem, Lekr0, MICHU, Topa           |
|           20 |     2518 | 2024-01-11 | Space             | W   | 0.520      | 0.143        | 0.008 (0.001)    | 0.190 (0.014)    | 0 (0.000) |    10.24 | adeX, Kvem, Lekr0, MICHU, Topa           |
|           19 |     2523 | 2024-01-11 | 00NATION          | W   | 0.519      | 0.143        | 0.005 (0.000)    | -                | 0 (0.000) |     9.13 | adeX, Kvem, Lekr0, MICHU, Topa           |
|           18 |     2538 | 2024-01-10 | GODSENT           | W   | 0.514      | 0.143        | 0.036 (0.003)    | 0.159 (0.012)    | 0 (0.000) |    12.00 | adeX, Kvem, Lekr0, MICHU, Topa           |
|           17 |     2584 | 2024-01-09 | BLEED             | L   | 0.506      | -            | -                | -                | -         |    -1.03 | adeX, Kvem, Lekr0, MICHU, Topa           |
|           16 |     2594 | 2024-01-09 | Metizport         | W   | 0.506      | 0.143        | 0.136 (0.010)    | 1.000 (0.072)    | 0 (0.000) |    13.96 | adeX, Kvem, Lekr0, MICHU, Topa           |
|           15 |     2679 | 2023-12-17 | 9 Pandas          | W   | 0.353      | 0.143        | 0.083 (0.004)    | 0.656 (0.033)    | 0 (0.000) |    10.50 | kensizor, Kvem, MICHU, s4ltovsk1yy, Topa |
|           14 |     2713 | 2023-12-16 | Permitta          | W   | 0.347      | 0.143        | 0.031 (0.002)    | 0.970 (0.048)    | 0 (0.000) |     9.03 | kensizor, Kvem, MICHU, s4ltovsk1yy, Topa |
|           13 |     2741 | 2023-12-15 | RUSH B            | L   | 0.340      | -            | -                | -                | -         |    -2.74 | kensizor, Kvem, MICHU, s4ltovsk1yy, Topa |
|           12 |     2871 | 2023-12-07 | TSM               | L   | 0.284      | -            | -                | -                | -         |    -2.74 | forsyy, Kvem, Lekr0, MICHU, Topa         |
|           11 |     2932 | 2023-12-05 | Preasy            | L   | 0.271      | -            | -                | -                | -         |    -0.63 | forsyy, Kvem, Lekr0, MICHU, Topa         |
|           10 |     2953 | 2023-12-03 | Sangal            | W   | 0.258      | 0.371        | -                | 0.685 (0.066)    | 0 (0.000) |     5.24 | forsyy, Kvem, Lekr0, MICHU, Topa         |
|            9 |     3037 | 2023-11-28 | Entropiq          | W   | 0.224      | 0.371        | 0.002 (0.000)    | 0.403 (0.034)    | 0 (0.000) |     5.18 | Kvem, MICHU, ROGA, Topa, VLDN            |
|            8 |     3039 | 2023-11-27 | Entropiq          | L   | 0.219      | -            | -                | -                | -         |    -1.87 | Kvem, MICHU, ROGA, Topa, VLDN            |
|            7 |     3153 | 2023-11-20 | Alliance          | L   | 0.173      | -            | -                | -                | -         |    -0.74 | draken, Kvem, MICHU, Topa, xicoz         |
|            6 |     3275 | 2023-11-16 | ALTERNATE aTTaX   | L   | 0.145      | -            | -                | -                | -         |    -1.03 | draken, Kvem, MICHU, Topa, xicoz         |
|            5 |     3366 | 2023-11-12 | Sangal            | L   | 0.120      | -            | -                | -                | -         |    -2.29 | draken, Kvem, MICHU, Topa, xicoz         |
|            4 |     3488 | 2023-11-07 | Gaimin Gladiators | W   | 0.086      | 0.143        | 0.156 (0.002)    | 1.000 (0.012)    | -         |     2.67 | draken, Kvem, MICHU, Topa, xicoz         |
|            3 |     3586 | 2023-11-02 | Sashi             | L   | 0.052      | -            | -                | -                | -         |    -0.21 | draken, Kvem, MICHU, Topa, xicoz         |
|            2 |     3600 | 2023-11-01 | KOI               | L   | 0.047      | -            | -                | -                | -         |    -0.10 | draken, kensizor, Kvem, MICHU, Topa      |
|            1 |     3720 | 2023-10-29 | 500               | L   | 0.025      | -            | -                | -                | -         |    -0.33 | draken, Kvem, MICHU, Topa, xicoz         |

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
