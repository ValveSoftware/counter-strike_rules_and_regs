### Roster Details<br />
Team Name: TSM<br />
Roster: interz, joel, KWERTZZ, valde, Zyphon<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [102](../standings_global.md)<br />
Regional Rank: [70]( ../standings_europe.md)<br />
Final Rank Value:  796.9<br />
<br />
Final Rank Value (796.9) = Starting Rank Value (788.8) + Head To Head Adjustments (8.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.363[<sup>1</sup>](#table2)
- Bounty Collected: 0.348[<sup>2</sup>](#table1)
- Opponent Network: 0.106[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.204<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 788.8
- 400 + ( ( 0.204 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 788.8


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
|           19 |      385 | 2024-04-19 | Sangal            | L   | 1.000      | -            | -                | -                | -         |   -11.92 | interz, joel, KWERTZZ, valde, Zyphon |
|           18 |      641 | 2024-04-10 | FORZE             | L   | 1.000      | -            | -                | -                | -         |    -3.94 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|           17 |      699 | 2024-04-09 | Betera            | W   | 1.000      | 0.500        | 0.004 (0.002)    | 0.199 (0.100)    | 0 (0.000) |    14.10 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|           16 |      830 | 2024-04-04 | 9 Pandas          | L   | 0.987      | -            | -                | -                | -         |    -3.69 | joel, KWERTZZ, poizon, valde, Zyphon |
|           15 |      909 | 2024-04-02 | KOI               | L   | 0.973      | -            | -                | -                | -         |    -5.81 | joel, KWERTZZ, poizon, valde, Zyphon |
|           14 |      970 | 2024-03-28 | 9INE              | W   | 0.940      | 0.500        | 0.000 (0.000)    | 0.070 (0.033)    | 0 (0.000) |     5.27 | joel, KWERTZZ, poizon, valde, Zyphon |
|           13 |     1127 | 2024-03-20 | VP.Prodigy        | L   | 0.885      | -            | -                | -                | -         |   -19.24 | joel, KWERTZZ, poizon, valde, Zyphon |
|           12 |     1238 | 2024-03-14 | EYEBALLERS        | W   | 0.848      | 0.500        | 0.045 (0.019)    | 0.599 (0.254)    | 0 (0.000) |    17.43 | interz, joel, MoDo, valde, Zyphon    |
|           11 |     1450 | 2024-03-06 | Sangal            | L   | 0.794      | -            | -                | -                | -         |   -12.16 | interz, JACKZ, joel, poizon, valde   |
|           10 |     1531 | 2024-03-03 | The Chosen Few    | L   | 0.773      | -            | -                | -                | -         |   -15.45 | joel, KWERTZZ, poizon, valde, Zyphon |
|            9 |     1543 | 2024-03-03 | Nexus             | W   | 0.773      | 0.143        | 0.031 (0.003)    | 0.605 (0.067)    | 0 (0.000) |    14.43 | joel, KWERTZZ, poizon, valde, Zyphon |
|            8 |     2051 | 2024-02-08 | ex-Preasy         | L   | 0.611      | -            | -                | -                | -         |    -4.36 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            7 |     2055 | 2024-02-07 | Gaimin Gladiators | L   | 0.605      | -            | -                | -                | -         |    -1.19 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            6 |     2075 | 2024-02-05 | Metizport         | W   | 0.592      | 0.371        | 0.183 (0.040)    | 1.000 (0.219)    | 0 (0.000) |    13.98 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            5 |     2128 | 2024-02-03 | ALTERNATE aTTaX   | W   | 0.578      | 0.371        | 0.104 (0.022)    | 0.779 (0.167)    | 0 (0.000) |    12.61 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            4 |     2208 | 2024-01-31 | GODSENT           | W   | 0.558      | 0.371        | 0.024 (0.005)    | 0.100 (0.021)    | 0 (0.000) |     8.27 | interz, joel, KWERTZZ, MoDo, valde   |
|            3 |     2260 | 2024-01-27 | MOUZ NXT          | W   | 0.531      | 0.371        | 0.210 (0.041)    | 1.000 (0.197)    | 0 (0.000) |    13.73 | interz, joel, KWERTZZ, MoDo, valde   |
|            2 |     2333 | 2024-01-23 | GODSENT           | L   | 0.505      | -            | -                | -                | -         |    -8.43 | interz, joel, KWERTZZ, MoDo, valde   |
|            1 |     2831 | 2024-01-10 | HAVU              | L   | 0.421      | -            | -                | -                | -         |    -5.52 | interz, JACKZ, joel, MoDo, valde     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,855.37)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-20 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-02-09 |      0.618 | $3,000.00      | $1,855.37       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
