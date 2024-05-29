### Roster Details<br />
Team Name: PARIVISION<br />
Roster: ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [65](../standings_global.md)<br />
Regional Rank: [46]( ../standings_europe.md)<br />
Final Rank Value:  964.3<br />
<br />
Final Rank Value (964.3) = Starting Rank Value (924.1) + Head To Head Adjustments (40.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.265[<sup>1</sup>](#table2)
- Bounty Collected: 0.444[<sup>2</sup>](#table1)
- Opponent Network: 0.371[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.270<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 924.1
- 400 + ( ( 0.270 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 924.1


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
|           35 |      246 | 2024-05-20 | Sangal            | L   | 1.000      | -            | -                | -                | -         |   -13.54 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           34 |      324 | 2024-05-17 | Zero Tenacity     | W   | 1.000      | 0.500        | 0.147 (0.073)    | 1.000 (0.500)    | 0 (0.000) |    18.02 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           33 |      355 | 2024-05-16 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -3.80 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           32 |      373 | 2024-05-16 | Eternal Fire      | L   | 1.000      | -            | -                | -                | -         |    -0.38 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           31 |      413 | 2024-05-15 | B8                | W   | 1.000      | 0.500        | 0.165 (0.082)    | 1.000 (0.500)    | 0 (0.000) |    22.27 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           30 |      596 | 2024-05-09 | Endpoint          | L   | 1.000      | -            | -                | -                | -         |   -15.41 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           29 |      755 | 2024-05-01 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -17.12 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           28 |      769 | 2024-05-01 | fnatic            | L   | 1.000      | -            | -                | -                | -         |    -9.27 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           27 |      794 | 2024-04-29 | 3DMAX             | L   | 0.999      | -            | -                | -                | -         |    -7.92 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           26 |      804 | 2024-04-29 | Zero Tenacity     | W   | 0.998      | 0.500        | 0.147 (0.073)    | 1.000 (0.499)    | 0 (0.000) |    15.95 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           25 |      841 | 2024-04-27 | Sangal            | W   | 0.985      | 0.500        | 0.166 (0.082)    | 0.911 (0.449)    | 0 (0.000) |    18.98 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           24 |      869 | 2024-04-26 | SINNERS           | W   | 0.978      | 0.435        | -                | 0.728 (0.309)    | 0 (0.000) |    16.72 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           23 |      897 | 2024-04-25 | ex-Guild Eagles   | W   | 0.972      | -            | -                | -                | 0 (0.000) |    17.19 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           22 |      919 | 2024-04-24 | MOUZ NXT          | W   | 0.965      | 0.435        | 0.157 (0.066)    | 1.000 (0.419)    | 0 (0.000) |    19.95 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           21 |      968 | 2024-04-21 | Nexus             | W   | 0.945      | 0.435        | -                | 0.518 (0.213)    | 0 (0.000) |    14.66 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           20 |      971 | 2024-04-21 | B8                | L   | 0.944      | -            | -                | -                | -         |   -10.21 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           19 |     1028 | 2024-04-19 | Zero Tenacity     | L   | 0.933      | -            | -                | -                | -         |   -12.32 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           18 |     1127 | 2024-04-17 | HAVU              | W   | 0.919      | -            | -                | -                | 0 (0.000) |     6.94 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           17 |     1128 | 2024-04-17 | Permitta          | L   | 0.919      | -            | -                | -                | -         |   -13.12 | ArtFr0st, bl1x1, Jerry, Patsi, Qikert      |
|           16 |     1250 | 2024-04-11 | 500               | L   | 0.879      | -            | -                | -                | -         |   -17.64 | ArtFr0st, bl1x1, Jerry, Patsi, Qikert      |
|           15 |     1289 | 2024-04-10 | Aurora            | L   | 0.873      | -            | -                | -                | -         |    -2.29 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           14 |     1348 | 2024-04-09 | RUSH B            | L   | 0.866      | -            | -                | -                | -         |   -20.53 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           13 |     1520 | 2024-04-03 | MOUZ NXT          | L   | 0.826      | -            | -                | -                | -         |   -10.95 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           12 |     1531 | 2024-04-03 | Space             | W   | 0.825      | -            | -                | -                | 0 (0.000) |     7.75 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           11 |     1566 | 2024-04-02 | AMKAL             | L   | 0.819      | -            | -                | -                | -         |    -7.23 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           10 |     1575 | 2024-04-02 | Insilio           | L   | 0.818      | -            | -                | -                | -         |   -15.31 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            9 |     1586 | 2024-04-01 | Metizport         | W   | 0.812      | 0.384        | 0.088 (0.028)    | 0.860 (0.268)    | -         |    14.21 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            8 |     1750 | 2024-03-21 | FORZE             | W   | 0.739      | 0.500        | 0.108 (0.040)    | -                | -         |    13.89 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            7 |     1932 | 2024-03-13 | 3DMAX             | W   | 0.686      | 0.500        | 0.105 (0.036)    | 0.669 (0.229)    | -         |    15.53 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            6 |     2049 | 2024-03-08 | B8                | W   | 0.652      | 0.500        | 0.165 (0.054)    | 1.000 (0.326)    | -         |    14.52 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            5 |     2104 | 2024-03-06 | Apeks             | W   | 0.639      | 0.500        | 0.083 (0.027)    | -                | -         |    16.91 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            4 |     2217 | 2024-03-02 | Gaimin Gladiators | L   | 0.611      | -            | -                | -                | -         |    -3.18 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            3 |     2248 | 2024-02-29 | Monte             | L   | 0.598      | -            | -                | -                | -         |    -1.90 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            2 |     3230 | 2024-01-17 | Insilio           | L   | 0.313      | -            | -                | -                | -         |    -5.54 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            1 |     3300 | 2024-01-16 | EYEBALLERS        | L   | 0.306      | -            | -                | -                | -         |    -5.57 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($500.00)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
