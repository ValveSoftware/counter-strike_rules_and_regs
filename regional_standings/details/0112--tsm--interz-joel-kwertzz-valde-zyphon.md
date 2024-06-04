### Roster Details<br />
Team Name: TSM<br />
Roster: interz, joel, KWERTZZ, valde, Zyphon<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [112](../standings_global.md)<br />
Regional Rank: [76]( ../standings_europe.md)<br />
Final Rank Value:  754.7<br />
<br />
Final Rank Value (754.7) = Starting Rank Value (738.6) + Head To Head Adjustments (16.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.323[<sup>1</sup>](#table2)
- Bounty Collected: 0.302[<sup>2</sup>](#table1)
- Opponent Network: 0.073[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.174<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 738.6
- 400 + ( ( 0.174 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 738.6


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
|           19 |     1036 | 2024-04-19 | Sangal            | L   | 0.933      | -            | -                | -                | -         |    -5.20 | interz, joel, KWERTZZ, valde, Zyphon |
|           18 |     1292 | 2024-04-10 | FORZE             | L   | 0.873      | -            | -                | -                | -         |    -4.16 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|           17 |     1350 | 2024-04-09 | Betera            | W   | 0.866      | 0.500        | 0.002 (0.001)    | 0.141 (0.061)    | 0 (0.000) |    12.80 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|           16 |     1481 | 2024-04-04 | 9 Pandas          | L   | 0.833      | -            | -                | -                | -         |    -2.45 | joel, KWERTZZ, poizon, valde, Zyphon |
|           15 |     1560 | 2024-04-02 | KOI               | L   | 0.819      | -            | -                | -                | -         |    -5.42 | joel, KWERTZZ, poizon, valde, Zyphon |
|           14 |     1621 | 2024-03-28 | 9INE              | W   | 0.786      | 0.500        | 0.000 (0.000)    | 0.046 (0.018)    | 0 (0.000) |     5.22 | joel, KWERTZZ, poizon, valde, Zyphon |
|           13 |     1778 | 2024-03-20 | VP.Prodigy        | L   | 0.731      | -            | -                | -                | -         |   -15.98 | joel, KWERTZZ, poizon, valde, Zyphon |
|           12 |     1889 | 2024-03-14 | EYEBALLERS        | W   | 0.693      | 0.500        | 0.009 (0.003)    | 0.611 (0.212)    | 0 (0.000) |    14.33 | interz, joel, MoDo, valde, Zyphon    |
|           11 |     2101 | 2024-03-06 | Sangal            | L   | 0.639      | -            | -                | -                | -         |    -3.61 | interz, JACKZ, joel, poizon, valde   |
|           10 |     2182 | 2024-03-03 | The Chosen Few    | L   | 0.619      | -            | -                | -                | -         |   -11.71 | joel, KWERTZZ, poizon, valde, Zyphon |
|            9 |     2194 | 2024-03-03 | Nexus             | W   | 0.619      | 0.143        | 0.014 (0.001)    | 0.518 (0.046)    | 0 (0.000) |    12.38 | joel, KWERTZZ, poizon, valde, Zyphon |
|            8 |     2702 | 2024-02-08 | ex-Preasy         | L   | 0.457      | -            | -                | -                | -         |    -4.04 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            7 |     2706 | 2024-02-07 | Gaimin Gladiators | L   | 0.451      | -            | -                | -                | -         |    -1.09 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            6 |     2726 | 2024-02-05 | Metizport         | W   | 0.438      | 0.371        | 0.088 (0.014)    | 0.860 (0.139)    | 0 (0.000) |    10.72 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            5 |     2779 | 2024-02-03 | ALTERNATE aTTaX   | W   | 0.424      | 0.371        | 0.048 (0.008)    | 0.650 (0.102)    | 0 (0.000) |     9.83 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            4 |     2859 | 2024-01-31 | GODSENT           | W   | 0.404      | 0.371        | 0.001 (0.000)    | 0.081 (0.012)    | 0 (0.000) |     5.07 | interz, joel, KWERTZZ, MoDo, valde   |
|            3 |     2911 | 2024-01-27 | MOUZ NXT          | W   | 0.377      | 0.371        | 0.157 (0.022)    | 1.000 (0.140)    | 0 (0.000) |    10.22 | interz, joel, KWERTZZ, MoDo, valde   |
|            2 |     2984 | 2024-01-23 | GODSENT           | L   | 0.350      | -            | -                | -                | -         |    -6.72 | interz, joel, KWERTZZ, MoDo, valde   |
|            1 |     3482 | 2024-01-10 | HAVU              | L   | 0.267      | -            | -                | -                | -         |    -4.08 | interz, JACKZ, joel, MoDo, valde     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,393.09)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-22 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-02-09 |      0.464 | $3,000.00      | $1,393.09       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
