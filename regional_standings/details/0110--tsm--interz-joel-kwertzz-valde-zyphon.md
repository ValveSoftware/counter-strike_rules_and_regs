### Roster Details<br />
Team Name: TSM<br />
Roster: interz, joel, KWERTZZ, valde, Zyphon<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [110](../standings_global.md)<br />
Regional Rank: [73]( ../standings_europe.md)<br />
Final Rank Value:  777.9<br />
<br />
Final Rank Value (777.9) = Starting Rank Value (781.6) + Head To Head Adjustments (-3.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.359[<sup>1</sup>](#table2)
- Bounty Collected: 0.329[<sup>2</sup>](#table1)
- Opponent Network: 0.102[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.198<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 781.6
- 400 + ( ( 0.198 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 781.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |       89 | 2024-04-19 | Sangal            | L   | 1.000      | -            | -                | -                | -         |   -14.40 | interz, joel, KWERTZZ, valde, Zyphon |
|           18 |      345 | 2024-04-10 | FORZE             | L   | 1.000      | -            | -                | -                | -         |    -6.28 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|           17 |      403 | 2024-04-09 | Betera            | W   | 1.000      | 0.500        | 0.004 (0.002)    | 0.240 (0.120)    | 0 (0.000) |    14.91 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|           16 |      534 | 2024-04-04 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |    -4.46 | joel, KWERTZZ, poizon, valde, Zyphon |
|           15 |      613 | 2024-04-02 | KOI               | L   | 1.000      | -            | -                | -                | -         |    -6.66 | joel, KWERTZZ, poizon, valde, Zyphon |
|           14 |      674 | 2024-03-28 | 9INE              | W   | 1.000      | 0.500        | 0.000 (0.000)    | 0.087 (0.043)    | 0 (0.000) |     5.82 | joel, KWERTZZ, poizon, valde, Zyphon |
|           13 |      831 | 2024-03-20 | VP.Prodigy        | L   | 0.978      | -            | -                | -                | -         |   -20.50 | joel, KWERTZZ, poizon, valde, Zyphon |
|           12 |      942 | 2024-03-14 | EYEBALLERS        | W   | 0.941      | 0.500        | 0.052 (0.024)    | 0.406 (0.191)    | 0 (0.000) |    18.52 | interz, joel, MoDo, valde, Zyphon    |
|           11 |     1154 | 2024-03-06 | Sangal            | L   | 0.887      | -            | -                | -                | -         |   -15.81 | interz, JACKZ, joel, poizon, valde   |
|           10 |     1235 | 2024-03-03 | The Chosen Few    | L   | 0.867      | -            | -                | -                | -         |   -17.14 | joel, KWERTZZ, poizon, valde, Zyphon |
|            9 |     1247 | 2024-03-03 | Nexus             | W   | 0.866      | 0.143        | 0.023 (0.003)    | 0.544 (0.067)    | 0 (0.000) |    14.23 | joel, KWERTZZ, poizon, valde, Zyphon |
|            8 |     1755 | 2024-02-08 | Preasy            | L   | 0.704      | -            | -                | -                | -         |    -4.67 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            7 |     1759 | 2024-02-07 | Gaimin Gladiators | L   | 0.698      | -            | -                | -                | -         |    -1.57 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            6 |     1779 | 2024-02-05 | Metizport         | W   | 0.685      | 0.371        | 0.136 (0.034)    | 1.000 (0.254)    | 0 (0.000) |    15.43 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            5 |     1832 | 2024-02-03 | ALTERNATE aTTaX   | W   | 0.672      | 0.371        | 0.026 (0.007)    | 0.327 (0.081)    | 0 (0.000) |    10.34 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            4 |     1912 | 2024-01-31 | GODSENT           | W   | 0.651      | 0.371        | 0.036 (0.009)    | 0.159 (0.038)    | 0 (0.000) |    10.72 | interz, joel, KWERTZZ, MoDo, valde   |
|            3 |     1964 | 2024-01-27 | MOUZ NXT          | W   | 0.624      | 0.371        | 0.054 (0.013)    | 0.970 (0.224)    | 0 (0.000) |    13.50 | interz, joel, KWERTZZ, MoDo, valde   |
|            2 |     2037 | 2024-01-23 | GODSENT           | L   | 0.598      | -            | -                | -                | -         |    -8.84 | interz, joel, KWERTZZ, MoDo, valde   |
|            1 |     2535 | 2024-01-10 | HAVU              | L   | 0.514      | -            | -                | -                | -         |    -6.86 | interz, JACKZ, joel, MoDo, valde     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,135.28)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-20 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-02-09 |      0.712 | $3,000.00      | $2,135.28       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
