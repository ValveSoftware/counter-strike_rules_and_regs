### Roster Details<br />
Team Name: Cryptova<br />
Roster: bery, kinzo, MAXX, PR, zyored<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [167](../standings_global.md)<br />
Regional Rank: [110]( ../standings_europe.md)<br />
Final Rank Value:  680.4<br />
<br />
Final Rank Value (680.4) = Starting Rank Value (720.9) + Head To Head Adjustments (-40.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.303[<sup>1</sup>](#table2)
- Bounty Collected: 0.238[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.081[<sup>2</sup>](#table1)

The average of these factors is 0.157<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 720.9
- 400 + ( ( 0.157 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 720.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     1391 | 2022-11-27 | Infinite        | L   | 0.686      | -            | -                | -                | -         |   -15.52 | bery, kinzo, MAXX, PR, zyored |
|           14 |     1433 | 2022-11-26 | AVANGAR         | L   | 0.678      | -            | -                | -                | -         |    -8.39 | bery, kinzo, MAXX, PR, zyored |
|           13 |     1510 | 2022-11-22 | Entropiq Prague | L   | 0.654      | -            | -                | -                | -         |    -9.43 | bery, kinzo, MAXX, PR, zyored |
|           12 |     1731 | 2022-11-04 | SINNERS         | L   | 0.532      | -            | -                | -                | -         |    -2.96 | bery, kinzo, MAXX, PR, zyored |
|           11 |     2157 | 2022-10-15 | Entropiq Prague | L   | 0.398      | -            | -                | -                | -         |    -5.93 | bery, kinzo, MAXX, PR, zyored |
|           10 |     2192 | 2022-10-14 | Enterprise      | W   | 0.392      | 0.360        | 0.042 (0.006)    | 0.193 (0.027)    | 1 (0.392) |     9.01 | bery, kinzo, MAXX, PR, zyored |
|            9 |     2205 | 2022-10-13 | Narcis          | W   | 0.387      | 0.360        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.387) |     1.80 | bery, kinzo, MAXX, PR, zyored |
|            8 |     2230 | 2022-10-13 | HONORIS         | L   | 0.385      | -            | -                | -                | -         |    -3.29 | bery, kinzo, MAXX, PR, zyored |
|            7 |     2242 | 2022-10-12 | Sampi           | L   | 0.381      | -            | -                | -                | -         |    -7.33 | bery, kinzo, MAXX, PR, zyored |
|            6 |     2293 | 2022-10-10 | AVANGAR         | W   | 0.367      | 0.143        | 0.003 (0.000)    | 0.314 (0.016)    | 0 (0.000) |     6.44 | bery, kinzo, MAXX, PR, zyored |
|            5 |     2299 | 2022-10-10 | Entropiq Prague | L   | 0.365      | -            | -                | -                | -         |    -5.40 | bery, kinzo, MAXX, PR, zyored |
|            4 |     2312 | 2022-10-09 | AVANGAR         | W   | 0.359      | 0.143        | 0.003 (0.000)    | 0.314 (0.016)    | 0 (0.000) |     6.37 | bery, kinzo, MAXX, PR, zyored |
|            3 |     2480 | 2022-10-01 | Entropiq Prague | L   | 0.304      | -            | -                | -                | -         |    -4.53 | bery, kinzo, MAXX, PR, zyored |
|            2 |     3289 | 2022-09-04 | ECLOT           | L   | 0.126      | -            | -                | -                | -         |    -0.64 | bery, kinzo, MAXX, PR, zyored |
|            1 |     3293 | 2022-09-04 | SINNERS         | L   | 0.125      | -            | -                | -                | -         |    -0.62 | bery, kinzo, MAXX, PR, zyored |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,345.71)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-11-24 |      0.667 | $435.00        | $290.13         |
| 2022-11-06 |      0.547 | $2,600.00      | $1,422.02       |
| 2022-10-16 |      0.405 | $985.00        | $399.00         |
| 2022-10-01 |      0.305 | $455.00        | $138.96         |
| 2022-09-05 |      0.133 | $720.00        | $95.60          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
