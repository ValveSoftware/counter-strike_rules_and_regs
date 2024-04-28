### Roster Details<br />
Team Name: K23<br />
Roster: clax, def1zer, Raijin, X5G7V, xsepower<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [197](../standings_global.md)<br />
Regional Rank: [122]( ../standings_europe.md)<br />
Final Rank Value:  613.2<br />
<br />
Final Rank Value (613.2) = Starting Rank Value (574.4) + Head To Head Adjustments (38.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.247[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.071[<sup>2</sup>](#table1)

The average of these factors is 0.085<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 574.4
- 400 + ( ( 0.085 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 574.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |     1757 | 2022-11-01 | HEET              | L   | 0.513      | -            | -                | -                | -         |    -2.14 | clax, def1zer, Raijin, X5G7V, xsepower |
|           19 |     1989 | 2022-10-21 | Copenhagen Flames | L   | 0.439      | -            | -                | -                | -         |    -1.54 | clax, def1zer, Raijin, X5G7V, xsepower |
|           18 |     2131 | 2022-10-15 | Sprout            | L   | 0.400      | -            | -                | -                | -         |    -0.59 | clax, FinigaN, Raijin, X5G7V, xsepower |
|           17 |     2315 | 2022-10-09 | BIG               | L   | 0.358      | -            | -                | -                | -         |    -0.15 | clax, FinigaN, Raijin, X5G7V, xsepower |
|           16 |     2327 | 2022-10-08 | Monte             | W   | 0.352      | 0.143        | 0.010 (0.000)    | 0.042 (0.002)    | 1 (0.352) |     7.13 | clax, FinigaN, Raijin, X5G7V, xsepower |
|           15 |     2358 | 2022-10-06 | AGO               | W   | 0.340      | 0.435        | 0.005 (0.001)    | 0.328 (0.049)    | 0 (0.000) |     7.75 | clax, FinigaN, Raijin, X5G7V, xsepower |
|           14 |     2369 | 2022-10-06 | MOUZ              | L   | 0.338      | -            | -                | -                | -         |    -0.24 | clax, FinigaN, Raijin, X5G7V, xsepower |
|           13 |     2404 | 2022-10-05 | HEET              | W   | 0.331      | 0.143        | 0.028 (0.001)    | 0.250 (0.012)    | 1 (0.331) |     9.19 | clax, FinigaN, Raijin, X5G7V, xsepower |
|           12 |     2422 | 2022-10-04 | Falcons           | L   | 0.326      | -            | -                | -                | -         |    -1.05 | clax, FinigaN, Raijin, X5G7V, xsepower |
|           11 |     2659 | 2022-09-24 | HONORIS           | W   | 0.259      | 0.435        | 0.011 (0.001)    | 0.748 (0.084)    | 0 (0.000) |     6.79 | clax, FinigaN, Raijin, X5G7V, xsepower |
|           10 |     2763 | 2022-09-22 | FTW               | W   | 0.244      | 0.435        | 0.026 (0.003)    | 0.300 (0.032)    | 0 (0.000) |     6.49 | clax, FinigaN, Raijin, X5G7V, xsepower |
|            9 |     2838 | 2022-09-19 | BIG Academy       | W   | 0.224      | 0.435        | 0.020 (0.002)    | 0.434 (0.042)    | 0 (0.000) |     6.56 | clax, FinigaN, Raijin, X5G7V, xsepower |
|            8 |     2868 | 2022-09-18 | eSuba             | L   | 0.217      | -            | -                | -                | -         |    -0.81 | clax, FinigaN, Raijin, X5G7V, xsepower |
|            7 |     3010 | 2022-09-14 | Forward           | L   | 0.191      | -            | -                | -                | -         |    -1.46 | clax, FinigaN, Raijin, X5G7V, xsepower |
|            6 |     3034 | 2022-09-13 | INVSN             | L   | 0.185      | -            | -                | -                | -         |    -0.73 | clax, FinigaN, Raijin, X5G7V, xsepower |
|            5 |     3642 | 2022-08-22 | fnatic            | L   | 0.040      | -            | -                | -                | -         |    -0.01 | clax, FinigaN, Raijin, X5G7V, xsepower |
|            4 |     3644 | 2022-08-22 | forZe             | W   | 0.039      | 0.143        | 0.047 (0.000)    | 0.708 (0.004)    | 0 (0.000) |     1.12 | clax, FinigaN, Raijin, X5G7V, xsepower |
|            3 |     3672 | 2022-08-21 | 1WIN              | W   | 0.034      | 0.143        | 0.023 (0.000)    | 0.313 (0.002)    | 0 (0.000) |     0.88 | clax, FinigaN, Raijin, X5G7V, xsepower |
|            2 |     3680 | 2022-08-21 | sYnck             | W   | 0.033      | 0.143        | 0.002 (0.000)    | 0.397 (0.002)    | 0 (0.000) |     0.76 | clax, FinigaN, Raijin, X5G7V, xsepower |
|            1 |     3691 | 2022-08-21 | Enterprise        | W   | 0.033      | 0.143        | 0.042 (0.000)    | 0.193 (0.001)    | 0 (0.000) |     0.87 | clax, FinigaN, Raijin, X5G7V, xsepower |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
