### Roster Details<br />
Team Name: PGE Turow<br />
Roster: azizz, darko, kadziu, Markoś, Sobol<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [161](../standings_global.md)<br />
Regional Rank: [104]( ../standings_europe.md)<br />
Final Rank Value:  677.6<br />
<br />
Final Rank Value (677.6) = Starting Rank Value (688.8) + Head To Head Adjustments (-11.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.272[<sup>1</sup>](#table2)
- Bounty Collected: 0.282[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.145<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 688.8
- 400 + ( ( 0.145 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 688.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     1691 | 2024-04-15 | Secret    | L   | 0.825      | -            | -                | -                | -         |   -16.01 | azizz, darko, kadziu, Markoś, Sobol       |
|           12 |     1765 | 2024-04-11 | Sampi     | L   | 0.798      | -            | -                | -                | -         |    -3.89 | azizz, darko, kadziu, Markoś, Sobol       |
|           11 |     1952 | 2024-04-05 | SAW       | L   | 0.758      | -            | -                | -                | -         |    -0.56 | azizz, darko, EXUS, kadziu, Markoś        |
|           10 |     1999 | 2024-04-04 | ECLOT     | L   | 0.751      | -            | -                | -                | -         |    -1.55 | darko, EXUS, kadziu, Markoś, Sobol        |
|            9 |     2035 | 2024-04-03 | Illuminar | W   | 0.745      | 0.333        | 0.000 (0.000)    | 0.366 (0.091)    | 0 (0.000) |     9.82 | darko, EXUS, kadziu, Markoś, Sobol        |
|            8 |     2804 | 2024-02-26 | ECLOT     | L   | 0.498      | -            | -                | -                | -         |    -0.83 | AxEcHo, darko, kadziu, Markoś, xKacpersky |
|            7 |     2823 | 2024-02-25 | Sashi     | W   | 0.492      | 0.333        | 0.174 (0.029)    | 1.000 (0.164)    | 0 (0.000) |    14.30 | AxEcHo, darko, kadziu, Markoś, xKacpersky |
|            6 |     2890 | 2024-02-22 | Permitta  | L   | 0.471      | -            | -                | -                | -         |    -2.82 | AxEcHo, darko, kadziu, Markoś, xKacpersky |
|            5 |     3795 | 2024-01-16 | 00NATION  | L   | 0.227      | -            | -                | -                | -         |    -5.42 | byali, darko, discoStar, kadziu, Markoś   |
|            4 |     3928 | 2024-01-12 | Betera    | L   | 0.201      | -            | -                | -                | -         |    -2.94 | byali, darko, discoStar, kadziu, Markoś   |
|            3 |     4054 | 2024-01-09 | fnatic    | L   | 0.179      | -            | -                | -                | -         |    -0.13 | darko, discoStar, gRuChA, kadziu, Markoś  |
|            2 |     4090 | 2023-12-20 | Sashi     | L   | 0.045      | -            | -                | -                | -         |    -1.09 | b1elany, darko, gRuChA, kadziu, Markoś    |
|            1 |     4134 | 2023-12-17 | Sashi     | L   | 0.025      | -            | -                | -                | -         |    -0.06 | b1elany, darko, gRuChA, kadziu, Markoś    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($637.74)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-06 |      0.764 | $500.00        | $382.10         |
| 2024-02-28 |      0.511 | $500.00        | $255.64         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
