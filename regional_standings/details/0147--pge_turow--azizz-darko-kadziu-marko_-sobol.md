### Roster Details<br />
Team Name: PGE Turow<br />
Roster: azizz, darko, kadziu, Markoś, Sobol<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [147](../standings_global.md)<br />
Regional Rank: [98]( ../standings_europe.md)<br />
Final Rank Value:  660.8<br />
<br />
Final Rank Value (660.8) = Starting Rank Value (683.9) + Head To Head Adjustments (-23.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.278[<sup>1</sup>](#table2)
- Bounty Collected: 0.284[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.146<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 683.9
- 400 + ( ( 0.146 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 683.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     1191 | 2024-04-15 | Secret     | L   | 0.904      | -            | -                | -                | -         |   -16.72 | azizz, darko, kadziu, Markoś, Sobol       |
|           13 |     1265 | 2024-04-11 | Sampi      | L   | 0.877      | -            | -                | -                | -         |    -4.74 | azizz, darko, kadziu, Markoś, Sobol       |
|           12 |     1452 | 2024-04-05 | SAW        | L   | 0.837      | -            | -                | -                | -         |    -0.57 | azizz, darko, EXUS, kadziu, Markoś        |
|           11 |     1499 | 2024-04-04 | ECLOT      | L   | 0.830      | -            | -                | -                | -         |    -3.54 | darko, EXUS, kadziu, Markoś, Sobol        |
|           10 |     1535 | 2024-04-03 | Illuminar  | W   | 0.825      | 0.333        | 0.000 (0.000)    | 0.155 (0.043)    | 0 (0.000) |     7.58 | darko, EXUS, kadziu, Markoś, Sobol        |
|            9 |     2304 | 2024-02-26 | ECLOT      | L   | 0.577      | -            | -                | -                | -         |    -2.41 | AxEcHo, darko, kadziu, Markoś, xKacpersky |
|            8 |     2323 | 2024-02-25 | Sashi      | W   | 0.571      | 0.333        | 0.157 (0.030)    | 1.000 (0.190)    | 0 (0.000) |    15.91 | AxEcHo, darko, kadziu, Markoś, xKacpersky |
|            7 |     2390 | 2024-02-22 | Permitta   | L   | 0.550      | -            | -                | -                | -         |    -3.71 | AxEcHo, darko, kadziu, Markoś, xKacpersky |
|            6 |     3295 | 2024-01-16 | 00NATION   | L   | 0.306      | -            | -                | -                | -         |    -7.21 | byali, darko, discoStar, kadziu, Markoś   |
|            5 |     3428 | 2024-01-12 | Betera     | L   | 0.280      | -            | -                | -                | -         |    -4.05 | byali, darko, discoStar, kadziu, Markoś   |
|            4 |     3554 | 2024-01-09 | fnatic     | L   | 0.258      | -            | -                | -                | -         |    -0.70 | darko, discoStar, gRuChA, kadziu, Markoś  |
|            3 |     3590 | 2023-12-20 | Sashi      | L   | 0.124      | -            | -                | -                | -         |    -2.50 | b1elany, darko, gRuChA, kadziu, Markoś    |
|            2 |     3634 | 2023-12-17 | Sashi      | L   | 0.104      | -            | -                | -                | -         |    -0.39 | b1elany, darko, gRuChA, kadziu, Markoś    |
|            1 |     3909 | 2023-12-02 | Enterprise | L   | 0.007      | -            | -                | -                | -         |    -0.06 | b1elany, darko, gRuChA, kadziu, Markoś    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($761.18)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-06 |      0.843 | $500.00        | $421.69         |
| 2024-02-28 |      0.590 | $500.00        | $295.23         |
| 2023-12-02 |      0.007 | $6,027.00      | $44.27          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
