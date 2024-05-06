### Roster Details<br />
Team Name: PGE Turow<br />
Roster: azizz, darko, kadziu, Markoś, Sobol<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [149](../standings_global.md)<br />
Regional Rank: [98]( ../standings_europe.md)<br />
Final Rank Value:  689.3<br />
<br />
Final Rank Value (689.3) = Starting Rank Value (719.3) + Head To Head Adjustments (-30.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.340[<sup>1</sup>](#table2)
- Bounty Collected: 0.300[<sup>2</sup>](#table1)
- Opponent Network: 0.031[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.168<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 719.3
- 400 + ( ( 0.168 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 719.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |      540 | 2024-04-15 | Secret          | L   | 1.000      | -            | -                | -                | -         |   -18.69 | azizz, darko, kadziu, Markoś, Sobol       |
|           16 |      614 | 2024-04-11 | Sampi           | L   | 1.000      | -            | -                | -                | -         |    -4.88 | azizz, darko, kadziu, Markoś, Sobol       |
|           15 |      801 | 2024-04-05 | SAW             | L   | 0.991      | -            | -                | -                | -         |    -0.52 | azizz, darko, EXUS, kadziu, Markoś        |
|           14 |      848 | 2024-04-04 | ECLOT           | L   | 0.984      | -            | -                | -                | -         |    -3.84 | darko, EXUS, kadziu, Markoś, Sobol        |
|           13 |      884 | 2024-04-03 | Illuminar       | W   | 0.979      | 0.333        | 0.000 (0.000)    | 0.177 (0.058)    | 0 (0.000) |     8.25 | darko, EXUS, kadziu, Markoś, Sobol        |
|           12 |     1653 | 2024-02-26 | ECLOT           | L   | 0.731      | -            | -                | -                | -         |    -2.68 | AxEcHo, darko, kadziu, Markoś, xKacpersky |
|           11 |     1672 | 2024-02-25 | Sashi           | W   | 0.725      | 0.333        | 0.188 (0.045)    | 1.000 (0.242)    | 0 (0.000) |    20.04 | AxEcHo, darko, kadziu, Markoś, xKacpersky |
|           10 |     1739 | 2024-02-22 | Permitta        | L   | 0.704      | -            | -                | -                | -         |    -4.47 | AxEcHo, darko, kadziu, Markoś, xKacpersky |
|            9 |     2644 | 2024-01-16 | 00NATION        | L   | 0.460      | -            | -                | -                | -         |   -11.06 | byali, darko, discoStar, kadziu, Markoś   |
|            8 |     2777 | 2024-01-12 | Betera          | L   | 0.434      | -            | -                | -                | -         |    -6.42 | byali, darko, discoStar, kadziu, Markoś   |
|            7 |     2903 | 2024-01-09 | fnatic          | L   | 0.413      | -            | -                | -                | -         |    -0.79 | darko, discoStar, gRuChA, kadziu, Markoś  |
|            6 |     2939 | 2023-12-20 | Sashi           | L   | 0.278      | -            | -                | -                | -         |    -4.80 | b1elany, darko, gRuChA, kadziu, Markoś    |
|            5 |     2983 | 2023-12-17 | Sashi           | L   | 0.258      | -            | -                | -                | -         |    -1.10 | b1elany, darko, gRuChA, kadziu, Markoś    |
|            4 |     3258 | 2023-12-02 | Enterprise      | L   | 0.161      | -            | -                | -                | -         |    -1.15 | b1elany, darko, gRuChA, kadziu, Markoś    |
|            3 |     3496 | 2023-11-18 | brazylijski luz | W   | 0.066      | 0.343        | 0.017 (0.000)    | 0.373 (0.008)    | 0 (0.000) |     1.30 | b1elany, darko, gRuChA, kadziu, Markoś    |
|            2 |     3605 | 2023-11-15 | ex-Anonymo      | W   | 0.046      | 0.343        | 0.016 (0.000)    | 0.175 (0.003)    | 0 (0.000) |     0.75 | b1elany, darko, gRuChA, kadziu, Markoś    |
|            1 |     3737 | 2023-11-09 | 500             | W   | 0.005      | 0.435        | 0.003 (0.000)    | 0.578 (0.001)    | 0 (0.000) |     0.09 | b1elany, darko, gRuChA, kadziu, Markoś    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,843.99)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-06 |      0.997 | $500.00        | $498.73         |
| 2024-02-28 |      0.745 | $500.00        | $372.27         |
| 2023-12-02 |      0.161 | $6,027.00      | $972.98         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
