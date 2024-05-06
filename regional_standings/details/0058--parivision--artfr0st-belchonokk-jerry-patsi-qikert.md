### Roster Details<br />
Team Name: PARIVISION<br />
Roster: ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [58](../standings_global.md)<br />
Regional Rank: [44]( ../standings_europe.md)<br />
Final Rank Value:  959.5<br />
<br />
Final Rank Value (959.5) = Starting Rank Value (908.9) + Head To Head Adjustments (50.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.285[<sup>1</sup>](#table2)
- Bounty Collected: 0.433[<sup>2</sup>](#table1)
- Opponent Network: 0.351[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.267<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 908.9
- 400 + ( ( 0.267 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 908.9


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
|           29 |      104 | 2024-05-01 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -16.88 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           28 |      118 | 2024-05-01 | fnatic            | L   | 1.000      | -            | -                | -                | -         |    -6.69 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           27 |      143 | 2024-04-29 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -6.80 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           26 |      153 | 2024-04-29 | Zero Tenacity     | W   | 1.000      | 0.500        | 0.093 (0.047)    | 0.936 (0.468)    | 0 (0.000) |    14.37 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           25 |      190 | 2024-04-27 | Sangal            | W   | 1.000      | 0.500        | -                | 0.797 (0.399)    | 0 (0.000) |    14.53 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           24 |      218 | 2024-04-26 | SINNERS           | W   | 1.000      | 0.435        | 0.033 (0.014)    | 0.749 (0.325)    | 0 (0.000) |    19.11 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           23 |      246 | 2024-04-25 | Guild Eagles      | W   | 1.000      | 0.384        | 0.035 (0.013)    | -                | 0 (0.000) |    19.47 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           22 |      268 | 2024-04-24 | MOUZ NXT          | W   | 1.000      | 0.435        | 0.210 (0.091)    | 1.000 (0.435)    | 0 (0.000) |    21.35 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           21 |      317 | 2024-04-21 | Nexus             | W   | 1.000      | 0.435        | 0.031 (0.013)    | 0.605 (0.263)    | 0 (0.000) |    17.14 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           20 |      320 | 2024-04-21 | B8                | L   | 1.000      | -            | -                | -                | -         |   -12.71 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           19 |      377 | 2024-04-19 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -16.09 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           18 |      476 | 2024-04-17 | HAVU              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.91 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           17 |      477 | 2024-04-17 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -12.42 | ArtFr0st, bl1x1, Jerry, Patsi, Qikert      |
|           16 |      599 | 2024-04-11 | 500               | L   | 1.000      | -            | -                | -                | -         |   -18.08 | ArtFr0st, bl1x1, Jerry, Patsi, Qikert      |
|           15 |      638 | 2024-04-10 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -1.95 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           14 |      697 | 2024-04-09 | RUSH B            | L   | 1.000      | -            | -                | -                | -         |   -21.82 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           13 |      869 | 2024-04-03 | MOUZ NXT          | L   | 0.980      | -            | -                | -                | -         |   -12.48 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           12 |      880 | 2024-04-03 | Space             | W   | 0.979      | -            | -                | -                | 0 (0.000) |     7.29 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           11 |      915 | 2024-04-02 | AMKAL             | L   | 0.973      | -            | -                | -                | -         |    -8.40 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           10 |      924 | 2024-04-02 | Insilio           | L   | 0.972      | -            | -                | -                | -         |   -17.08 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            9 |      935 | 2024-04-01 | Metizport         | W   | 0.966      | 0.384        | 0.183 (0.068)    | 1.000 (0.371)    | 0 (0.000) |    18.52 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            8 |     1099 | 2024-03-21 | FORZE             | W   | 0.893      | 0.500        | 0.205 (0.092)    | 0.682 (0.305)    | 0 (0.000) |    19.95 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            7 |     1281 | 2024-03-13 | 3DMAX             | W   | 0.840      | 0.500        | 0.055 (0.023)    | 0.810 (0.340)    | -         |    19.95 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            6 |     1398 | 2024-03-08 | B8                | W   | 0.806      | 0.500        | 0.080 (0.032)    | 0.851 (0.343)    | -         |    14.91 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            5 |     1453 | 2024-03-06 | Apeks             | W   | 0.793      | 0.500        | 0.237 (0.094)    | 0.667 (0.265)    | -         |    23.34 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            4 |     1566 | 2024-03-02 | Gaimin Gladiators | L   | 0.765      | -            | -                | -                | -         |    -2.29 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            3 |     1597 | 2024-02-29 | Monte             | L   | 0.752      | -            | -                | -                | -         |    -1.43 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            2 |     2579 | 2024-01-17 | Insilio           | L   | 0.467      | -            | -                | -                | -         |    -7.12 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            1 |     2649 | 2024-01-16 | EYEBALLERS        | L   | 0.460      | -            | -                | -                | -         |    -7.01 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($500.00)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
