### Roster Details<br />
Team Name: IKLA<br />
Roster: adeX, Kvem, Lekr0, MICHU, Topa<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [186](../standings_global.md)<br />
Regional Rank: [116]( ../standings_europe.md)<br />
Final Rank Value:  563.9<br />
<br />
Final Rank Value (563.9) = Starting Rank Value (538.6) + Head To Head Adjustments (25.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.271[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.070<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 538.6
- 400 + ( ( 0.070 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 538.6


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
|           14 |     3581 | 2024-01-20 | HEROIC       | L   | 0.252      | -            | -                | -                | -         |    -0.01 | adeX, Kvem, Lekr0, MICHU, Topa           |
|           13 |     3631 | 2024-01-19 | PERA         | L   | 0.246      | -            | -                | -                | -         |    -0.95 | adeX, Kvem, Lekr0, MICHU, Topa           |
|           12 |     3683 | 2024-01-18 | Eternal Fire | L   | 0.240      | -            | -                | -                | -         |    -0.01 | adeX, Kvem, Lekr0, MICHU, Topa           |
|           11 |     3687 | 2024-01-18 | Aurora       | W   | 0.239      | 0.143        | 0.513 (0.018)    | 0.918 (0.031)    | 0 (0.000) |     7.52 | adeX, Kvem, Lekr0, MICHU, Topa           |
|           10 |     3951 | 2024-01-11 | PERA         | W   | 0.194      | 0.143        | 0.024 (0.001)    | 0.417 (0.012)    | 0 (0.000) |     5.42 | adeX, Kvem, Lekr0, MICHU, Topa           |
|            9 |     3956 | 2024-01-11 | HEROIC       | L   | 0.194      | -            | -                | -                | -         |    -0.01 | adeX, Kvem, Lekr0, MICHU, Topa           |
|            8 |     3965 | 2024-01-11 | Space        | W   | 0.193      | 0.143        | 0.000 (0.000)    | 0.023 (0.001)    | 0 (0.000) |     1.89 | adeX, Kvem, Lekr0, MICHU, Topa           |
|            7 |     3970 | 2024-01-11 | 00NATION     | W   | 0.192      | 0.143        | 0.000 (0.000)    | 0.016 (0.000)    | 0 (0.000) |     2.50 | adeX, Kvem, Lekr0, MICHU, Topa           |
|            6 |     3985 | 2024-01-10 | GODSENT      | W   | 0.187      | 0.143        | 0.000 (0.000)    | 0.060 (0.002)    | 0 (0.000) |     2.88 | adeX, Kvem, Lekr0, MICHU, Topa           |
|            5 |     4031 | 2024-01-09 | BLEED        | L   | 0.180      | -            | -                | -                | -         |    -0.05 | adeX, Kvem, Lekr0, MICHU, Topa           |
|            4 |     4041 | 2024-01-09 | Metizport    | W   | 0.180      | 0.143        | 0.078 (0.002)    | 0.706 (0.018)    | 0 (0.000) |     5.20 | adeX, Kvem, Lekr0, MICHU, Topa           |
|            3 |     4126 | 2023-12-17 | 9 Pandas     | W   | 0.027      | 0.143        | 0.114 (0.000)    | 0.758 (0.003)    | 0 (0.000) |     0.81 | kensizor, Kvem, MICHU, s4ltovsk1yy, Topa |
|            2 |     4160 | 2023-12-16 | Pompa        | W   | 0.020      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.20 | kensizor, Kvem, MICHU, s4ltovsk1yy, Topa |
|            1 |     4188 | 2023-12-15 | RUSH B       | L   | 0.013      | -            | -                | -                | -         |    -0.06 | kensizor, Kvem, MICHU, s4ltovsk1yy, Topa |

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
