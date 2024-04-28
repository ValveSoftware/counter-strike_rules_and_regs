### Roster Details<br />
Team Name: NKT<br />
Roster: BnTeT, erkaSt, nin9, Senzu, XigN<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [68](../standings_global.md)<br />
Regional Rank: [3]( ../standings_asia.md)<br />
Final Rank Value:  897.6<br />
<br />
Final Rank Value (897.6) = Starting Rank Value (921.3) + Head To Head Adjustments (-23.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.382[<sup>1</sup>](#table2)
- Bounty Collected: 0.295[<sup>2</sup>](#table1)
- Opponent Network: 0.031[<sup>2</sup>](#table1)
- LAN Wins: 0.311[<sup>2</sup>](#table1)

The average of these factors is 0.255<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 921.3
- 400 + ( ( 0.255 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 921.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |      316 | 2023-01-29 | Eruption    | W   | 1.000      | 0.333        | 0.015 (0.005)    | 0.206 (0.069)    | 1 (1.000) |    14.03 | BnTeT, erkaSt, nin9, Senzu, XigN   |
|           18 |      353 | 2023-01-28 | Clutch      | W   | 1.000      | 0.333        | 0.005 (0.002)    | 0.041 (0.014)    | 1 (1.000) |     9.95 | BnTeT, erkaSt, nin9, Senzu, XigN   |
|           17 |      456 | 2023-01-25 | Renewal     | W   | 1.000      | 0.333        | 0.002 (0.001)    | 0.083 (0.028)    | 1 (1.000) |     7.56 | BnTeT, erkaSt, nin9, Senzu, XigN   |
|           16 |      475 | 2023-01-24 | Renewal     | L   | 1.000      | -            | -                | -                | -         |   -24.50 | BnTeT, erkaSt, nin9, Senzu, XigN   |
|           15 |      480 | 2023-01-24 | Newhappy    | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.90 | BnTeT, erkaSt, nin9, Senzu, XigN   |
|           14 |      692 | 2023-01-15 | Eruption    | L   | 1.000      | -            | -                | -                | -         |   -18.93 | BnTeT, erkaSt, nin9, Senzu, XigN   |
|           13 |      701 | 2023-01-14 | Rare Atom   | L   | 1.000      | -            | -                | -                | -         |   -18.86 | BnTeT, erkaSt, nin9, Senzu, XigN   |
|           12 |      822 | 2022-12-17 | IHC         | L   | 0.818      | -            | -                | -                | -         |    -3.46 | erkaSt, nin9, Senzu, XigN, yAmi    |
|           11 |      876 | 2022-12-15 | Lynn Vision | L   | 0.805      | -            | -                | -                | -         |   -14.26 | erkaSt, nin9, Senzu, XigN, yAmi    |
|           10 |      894 | 2022-12-14 | Clutch      | W   | 0.799      | 0.371        | 0.005 (0.001)    | 0.041 (0.012)    | 0 (0.000) |     6.55 | erkaSt, nin9, Senzu, XigN, yAmi    |
|            9 |      918 | 2022-12-13 | IHC         | W   | 0.792      | 0.371        | 0.108 (0.032)    | 0.622 (0.182)    | 0 (0.000) |    21.77 | erkaSt, nin9, Senzu, XigN, yAmi    |
|            8 |     1992 | 2022-10-21 | IHC         | L   | 0.439      | -            | -                | -                | -         |    -1.36 | dobu, erkaSt, MAIROLLS, nin9, XigN |
|            7 |     2019 | 2022-10-20 | Lord Rabbit | W   | 0.432      | 0.371        | 0.001 (0.000)    | 0.018 (0.003)    | 0 (0.000) |     2.21 | dobu, erkaSt, Kntz, nin9, XigN     |
|            6 |     2049 | 2022-10-19 | Lynn Vision | L   | 0.425      | -            | -                | -                | -         |    -8.04 | dobu, erkaSt, Kntz, nin9, XigN     |
|            5 |     2070 | 2022-10-18 | Mazaalai    | W   | 0.419      | 0.371        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     1.24 | dobu, erkaSt, Kntz, nin9, XigN     |
|            4 |     3472 | 2022-08-28 | IHC         | L   | 0.079      | -            | -                | -                | -         |    -0.24 | dobu, erkaSt, Kntz, nin9, XigN     |
|            3 |     3484 | 2022-08-28 | ARAVT       | W   | 0.078      | 0.143        | 0.003 (0.000)    | 0.040 (0.000)    | 0 (0.000) |     0.51 | dobu, erkaSt, Kntz, nin9, XigN     |
|            2 |     3532 | 2022-08-27 | IHC         | L   | 0.072      | -            | -                | -                | -         |    -0.22 | dobu, erkaSt, Kntz, nin9, XigN     |
|            1 |     3541 | 2022-08-27 | ARAVT       | W   | 0.071      | 0.143        | 0.003 (0.000)    | 0.040 (0.000)    | 0 (0.000) |     0.47 | dobu, erkaSt, Kntz, nin9, XigN     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,443.26)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-01-29 |      1.000 | $5,500.00      | $5,500.00       |
| 2023-01-15 |      1.000 | $2,953.00      | $2,953.00       |
| 2022-12-18 |      0.826 | $2,800.00      | $2,311.98       |
| 2022-10-23 |      0.452 | $1,500.00      | $678.28         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
