### Roster Details<br />
Team Name: PARIVISION<br />
Roster: ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [124](../standings_global.md)<br />
Regional Rank: [85]( ../standings_europe.md)<br />
Final Rank Value:  749.5<br />
<br />
Final Rank Value (749.5) = Starting Rank Value (690.4) + Head To Head Adjustments (59.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.386[<sup>2</sup>](#table1)
- Opponent Network: 0.215[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.150<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 690.4
- 400 + ( ( 0.150 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 690.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |       21 | 2024-04-21 | Nexus             | W   | 1.000      | 0.435        | 0.023 (0.010)    | 0.544 (0.236)    | 0 (0.000) |    21.02 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           20 |       24 | 2024-04-21 | B8                | L   | 1.000      | -            | -                | -                | -         |   -11.14 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           19 |       81 | 2024-04-19 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -14.13 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           18 |      180 | 2024-04-17 | HAVU              | W   | 1.000      | 0.500        | 0.027 (0.014)    | 0.154 (0.077)    | 0 (0.000) |    15.49 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           17 |      181 | 2024-04-17 | Permitta          | L   | 1.000      | -            | -                | -                | -         |    -8.39 | ArtFr0st, bl1x1, Jerry, Patsi, Qikert      |
|           16 |      303 | 2024-04-11 | 500               | L   | 1.000      | -            | -                | -                | -         |   -14.55 | ArtFr0st, bl1x1, Jerry, Patsi, Qikert      |
|           15 |      342 | 2024-04-10 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -1.91 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           14 |      401 | 2024-04-09 | RUSH B            | L   | 1.000      | -            | -                | -                | -         |   -14.75 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           13 |      573 | 2024-04-03 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |    -9.62 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           12 |      584 | 2024-04-03 | Space             | W   | 1.000      | 0.500        | 0.008 (0.004)    | 0.190 (0.095)    | 0 (0.000) |    13.33 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           11 |      619 | 2024-04-02 | AMKAL             | L   | 1.000      | -            | -                | -                | -         |    -7.26 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           10 |      628 | 2024-04-02 | Insilio           | L   | 1.000      | -            | -                | -                | -         |   -14.61 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            9 |      639 | 2024-04-01 | Metizport         | W   | 1.000      | 0.384        | 0.136 (0.052)    | 1.000 (0.384)    | 0 (0.000) |    24.63 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            8 |      803 | 2024-03-21 | FORZE             | W   | 0.986      | 0.500        | 0.140 (0.069)    | 0.784 (0.387)    | 0 (0.000) |    25.21 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            7 |      985 | 2024-03-13 | 3DMAX             | W   | 0.933      | 0.500        | 0.048 (0.022)    | 0.801 (0.373)    | 0 (0.000) |    23.90 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            6 |     1102 | 2024-03-08 | B8                | W   | 0.899      | 0.500        | 0.003 (0.001)    | 0.655 (0.295)    | 0 (0.000) |    18.79 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            5 |     1157 | 2024-03-06 | Apeks             | W   | 0.886      | 0.500        | 0.193 (0.086)    | 0.687 (0.304)    | 0 (0.000) |    26.98 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            4 |     1270 | 2024-03-02 | Gaimin Gladiators | L   | 0.859      | -            | -                | -                | -         |    -1.03 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            3 |     1301 | 2024-02-29 | Monte             | L   | 0.845      | -            | -                | -                | -         |    -1.18 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            2 |     2283 | 2024-01-17 | Insilio           | L   | 0.561      | -            | -                | -                | -         |    -7.38 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            1 |     2353 | 2024-01-16 | EYEBALLERS        | L   | 0.553      | -            | -                | -                | -         |    -4.27 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |

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
