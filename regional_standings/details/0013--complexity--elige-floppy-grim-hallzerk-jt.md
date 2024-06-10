### Roster Details<br />
Team Name: Complexity<br />
Roster: EliGE, floppy, Grim, hallzerk, JT<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [13](../standings_global.md)<br />
Regional Rank: [2]( ../standings_americas.md)<br />
Final Rank Value:  1617.0<br />
<br />
Final Rank Value (1617.0) = Starting Rank Value (1647.5) + Head To Head Adjustments (-30.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.638[<sup>1</sup>](#table2)
- Bounty Collected: 0.647[<sup>2</sup>](#table1)
- Opponent Network: 0.343[<sup>2</sup>](#table1)
- LAN Wins: 0.875[<sup>2</sup>](#table1)

The average of these factors is 0.626<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1647.5
- 400 + ( ( 0.626 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1647.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |      235 | 2024-06-06 | FURIA             | L   | 1.000      | -            | -                | -                | -         |   -21.27 | EliGE, floppy, Grim, hallzerk, JT |
|           32 |      254 | 2024-06-06 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |   -23.25 | EliGE, floppy, Grim, hallzerk, JT |
|           31 |      265 | 2024-06-06 | fnatic            | L   | 1.000      | -            | -                | -                | -         |   -28.09 | EliGE, floppy, Grim, hallzerk, JT |
|           30 |      304 | 2024-06-05 | BIG               | W   | 1.000      | 0.715        | 0.228 (0.163)    | 0.459 (0.328)    | 1 (1.000) |     6.75 | EliGE, floppy, Grim, hallzerk, JT |
|           29 |      318 | 2024-06-05 | Eternal Fire      | W   | 1.000      | 0.715        | 1.000 (0.715)    | 0.560 (0.401)    | 1 (1.000) |    20.95 | EliGE, floppy, Grim, hallzerk, JT |
|           28 |      541 | 2024-05-27 | MOUZ              | L   | 1.000      | -            | -                | -                | -         |    -3.96 | EliGE, floppy, Grim, hallzerk, JT |
|           27 |      553 | 2024-05-27 | Liquid            | L   | 1.000      | -            | -                | -                | -         |   -15.48 | EliGE, floppy, Grim, hallzerk, JT |
|           26 |     1044 | 2024-05-11 | MOUZ              | L   | 1.000      | -            | -                | -                | -         |    -4.50 | EliGE, floppy, Grim, hallzerk, JT |
|           25 |     1098 | 2024-05-09 | Virtus.pro        | W   | 0.986      | 0.889        | 0.229 (0.200)    | 0.418 (0.367)    | 1 (0.986) |    16.29 | EliGE, floppy, Grim, hallzerk, JT |
|           24 |     1165 | 2024-05-05 | Natus Vincere     | W   | 0.960      | 0.889        | 1.000 (0.854)    | 0.312 (0.267)    | 1 (0.960) |    23.68 | EliGE, floppy, Grim, hallzerk, JT |
|           23 |     1231 | 2024-05-02 | HEROIC            | W   | 0.939      | 0.889        | 0.362 (0.302)    | 0.635 (0.530)    | 1 (0.939) |    18.46 | EliGE, floppy, Grim, hallzerk, JT |
|           22 |     1280 | 2024-04-30 | PERA              | W   | 0.926      | 0.889        | 0.024 (0.020)    | 0.417 (0.344)    | 1 (0.926) |     0.45 | EliGE, floppy, Grim, hallzerk, JT |
|           21 |     2204 | 2024-03-24 | FaZe              | L   | 0.678      | -            | -                | -                | -         |    -3.00 | EliGE, floppy, Grim, hallzerk, JT |
|           20 |     2213 | 2024-03-23 | Vitality          | L   | 0.673      | -            | -                | -                | -         |    -3.59 | EliGE, floppy, Grim, hallzerk, JT |
|           19 |     2228 | 2024-03-22 | MOUZ              | L   | 0.666      | -            | -                | -                | -         |    -2.42 | EliGE, floppy, Grim, hallzerk, JT |
|           18 |     2246 | 2024-03-21 | HEROIC            | W   | 0.660      | 1.000        | 0.362 (0.239)    | 0.635 (0.419)    | 1 (0.660) |    14.57 | EliGE, floppy, Grim, hallzerk, JT |
|           17 |     2255 | 2024-03-21 | paiN              | W   | 0.659      | 1.000        | 0.437 (0.288)    | 0.877 (0.578)    | 1 (0.659) |     9.25 | EliGE, floppy, Grim, hallzerk, JT |
|           16 |     2568 | 2024-03-07 | OG                | L   | 0.567      | -            | -                | -                | -         |   -16.50 | EliGE, floppy, Grim, hallzerk, JT |
|           15 |     2660 | 2024-03-04 | Liquid            | W   | 0.548      | 0.143        | 0.501 (0.039)    | 0.732 (0.057)    | 1 (0.548) |     9.34 | EliGE, floppy, Grim, hallzerk, JT |
|           14 |     2675 | 2024-03-03 | FURIA             | L   | 0.541      | -            | -                | -                | -         |    -8.31 | EliGE, floppy, Grim, hallzerk, JT |
|           13 |     2714 | 2024-03-02 | BOSS              | W   | 0.533      | -            | -                | -                | 1 (0.533) |     0.23 | EliGE, floppy, Grim, hallzerk, JT |
|           12 |     2733 | 2024-03-01 | Elevate           | W   | 0.527      | -            | -                | -                | -         |     0.28 | EliGE, floppy, Grim, hallzerk, JT |
|           11 |     3220 | 2024-02-05 | Falcons           | L   | 0.360      | -            | -                | -                | -         |    -8.51 | EliGE, floppy, Grim, hallzerk, JT |
|           10 |     3241 | 2024-02-04 | Spirit            | L   | 0.353      | -            | -                | -                | -         |    -2.22 | EliGE, floppy, Grim, hallzerk, JT |
|            9 |     3261 | 2024-02-03 | Apeks             | W   | 0.347      | 1.000        | 0.066 (0.023)    | 0.403 (0.140)    | -         |     0.64 | EliGE, floppy, Grim, hallzerk, JT |
|            8 |     3480 | 2024-01-23 | Ninjas in Pyjamas | L   | 0.272      | -            | -                | -                | -         |    -8.53 | EliGE, floppy, Grim, hallzerk, JT |
|            7 |     3508 | 2024-01-22 | Natus Vincere     | L   | 0.265      | -            | -                | -                | -         |    -1.93 | EliGE, floppy, Grim, hallzerk, JT |
|            6 |     3865 | 2024-01-13 | Party Astronauts  | W   | 0.209      | -            | -                | -                | -         |     0.16 | EliGE, floppy, Grim, hallzerk, JT |
|            5 |     3905 | 2024-01-12 | NRG               | W   | 0.203      | -            | -                | -                | -         |     0.09 | EliGE, floppy, Grim, hallzerk, JT |
|            4 |     3916 | 2024-01-12 | FLUFFY AIMERS     | W   | 0.202      | -            | -                | -                | -         |     0.01 | EliGE, floppy, Grim, hallzerk, JT |
|            3 |     4159 | 2023-12-16 | The MongolZ       | L   | 0.020      | -            | -                | -                | -         |    -0.11 | EliGE, floppy, Grim, hallzerk, JT |
|            2 |     4174 | 2023-12-15 | GamerLegion       | W   | 0.015      | -            | -                | -                | -         |     0.02 | EliGE, floppy, Grim, hallzerk, JT |
|            1 |     4184 | 2023-12-15 | The MongolZ       | L   | 0.014      | -            | -                | -                | -         |    -0.07 | EliGE, floppy, Grim, hallzerk, JT |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($82,490.41)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.27) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $8,000.00      | $8,000.00       |
| 2024-06-02 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-05-12 |      1.000 | $45,000.00     | $45,000.00      |
| 2024-03-31 |      0.727 | $20,000.00     | $14,539.36      |
| 2024-03-10 |      0.587 | $5,000.00      | $2,936.61       |
| 2024-02-11 |      0.400 | $16,000.00     | $6,398.00       |
| 2024-01-28 |      0.307 | $5,000.00      | $1,533.23       |
| 2023-12-17 |      0.028 | $3,000.00      | $83.21          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
