### Roster Details<br />
Team Name: TSM<br />
Roster: interz, joel, KWERTZZ, valde, Zyphon<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [126](../standings_global.md)<br />
Regional Rank: [85]( ../standings_europe.md)<br />
Final Rank Value:  758.4<br />
<br />
Final Rank Value (758.4) = Starting Rank Value (733.7) + Head To Head Adjustments (24.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.318[<sup>1</sup>](#table2)
- Bounty Collected: 0.292[<sup>2</sup>](#table1)
- Opponent Network: 0.060[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.167<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 733.7
- 400 + ( ( 0.167 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 733.7


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
|           19 |     1536 | 2024-04-19 | Sangal            | L   | 0.853      | -            | -                | -                | -         |    -3.50 | interz, joel, KWERTZZ, valde, Zyphon |
|           18 |     1792 | 2024-04-10 | FORZE             | L   | 0.794      | -            | -                | -                | -         |    -3.58 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|           17 |     1850 | 2024-04-09 | Betera            | W   | 0.787      | 0.500        | 0.002 (0.001)    | 0.111 (0.044)    | 0 (0.000) |    11.73 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|           16 |     1981 | 2024-04-04 | 9 Pandas          | L   | 0.753      | -            | -                | -                | -         |    -2.06 | joel, KWERTZZ, poizon, valde, Zyphon |
|           15 |     2060 | 2024-04-02 | KOI               | L   | 0.740      | -            | -                | -                | -         |    -3.92 | joel, KWERTZZ, poizon, valde, Zyphon |
|           14 |     2121 | 2024-03-28 | 9INE              | W   | 0.707      | 0.500        | 0.000 (0.000)    | 0.034 (0.012)    | 0 (0.000) |     4.74 | joel, KWERTZZ, poizon, valde, Zyphon |
|           13 |     2278 | 2024-03-20 | VP.Prodigy        | L   | 0.652      | -            | -                | -                | -         |    -7.61 | joel, KWERTZZ, poizon, valde, Zyphon |
|           12 |     2389 | 2024-03-14 | EYEBALLERS        | W   | 0.614      | 0.500        | 0.006 (0.002)    | 0.722 (0.222)    | 0 (0.000) |    14.10 | interz, joel, MoDo, valde, Zyphon    |
|           11 |     2601 | 2024-03-06 | Sangal            | L   | 0.560      | -            | -                | -                | -         |    -2.09 | interz, JACKZ, joel, poizon, valde   |
|           10 |     2682 | 2024-03-03 | The Chosen Few    | L   | 0.540      | -            | -                | -                | -         |    -9.84 | joel, KWERTZZ, poizon, valde, Zyphon |
|            9 |     2694 | 2024-03-03 | Nexus             | W   | 0.540      | 0.143        | 0.013 (0.001)    | 0.469 (0.036)    | 0 (0.000) |    11.08 | joel, KWERTZZ, poizon, valde, Zyphon |
|            8 |     3202 | 2024-02-08 | ex-Preasy         | L   | 0.378      | -            | -                | -                | -         |    -3.35 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            7 |     3206 | 2024-02-07 | Gaimin Gladiators | L   | 0.372      | -            | -                | -                | -         |    -0.80 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            6 |     3226 | 2024-02-05 | Metizport         | W   | 0.358      | 0.371        | 0.078 (0.010)    | 0.706 (0.094)    | 0 (0.000) |     9.01 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            5 |     3279 | 2024-02-03 | ALTERNATE aTTaX   | W   | 0.345      | 0.371        | 0.046 (0.006)    | 0.583 (0.075)    | 0 (0.000) |     8.85 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            4 |     3359 | 2024-01-31 | GODSENT           | W   | 0.325      | 0.371        | 0.000 (0.000)    | 0.060 (0.007)    | 0 (0.000) |     2.66 | interz, joel, KWERTZZ, MoDo, valde   |
|            3 |     3411 | 2024-01-27 | MOUZ NXT          | W   | 0.298      | 0.371        | 0.164 (0.018)    | 1.000 (0.110)    | 0 (0.000) |     8.36 | interz, joel, KWERTZZ, MoDo, valde   |
|            2 |     3484 | 2024-01-23 | GODSENT           | L   | 0.271      | -            | -                | -                | -         |    -6.40 | interz, joel, KWERTZZ, MoDo, valde   |
|            1 |     3982 | 2024-01-10 | HAVU              | L   | 0.188      | -            | -                | -                | -         |    -2.73 | interz, JACKZ, joel, MoDo, valde     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,155.57)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-02-09 |      0.385 | $3,000.00      | $1,155.57       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
