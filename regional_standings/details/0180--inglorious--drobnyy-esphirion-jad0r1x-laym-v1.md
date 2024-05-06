### Roster Details<br />
Team Name: INGLORIOUS<br />
Roster: Drobnyy, Esphirion, Jad0R1x, LAYM, V1<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [180](../standings_global.md)<br />
Regional Rank: [114]( ../standings_europe.md)<br />
Final Rank Value:  583.8<br />
<br />
Final Rank Value (583.8) = Starting Rank Value (571.4) + Head To Head Adjustments (12.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.316[<sup>2</sup>](#table1)
- Opponent Network: 0.043[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.090<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 571.4
- 400 + ( ( 0.090 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 571.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1282 | 2024-03-13 | Insilio         | L   | 0.839      | -            | -                | -                | -         |    -3.29 | Drobnyy, Esphirion, Jad0R1x, LAYM, V1 |
|            9 |     1370 | 2024-03-09 | Nexus           | L   | 0.813      | -            | -                | -                | -         |    -3.99 | Drobnyy, Esphirion, Jad0R1x, LAYM, V1 |
|            8 |     1405 | 2024-03-08 | JANO            | L   | 0.804      | -            | -                | -                | -         |    -9.17 | Drobnyy, Esphirion, Jad0R1x, LAYM, V1 |
|            7 |     1416 | 2024-03-07 | MOUZ NXT        | W   | 0.801      | 0.372        | 0.210 (0.063)    | 1.000 (0.298)    | 0 (0.000) |    23.59 | Drobnyy, Esphirion, Jad0R1x, LAYM, V1 |
|            6 |     1455 | 2024-03-06 | Enterprise      | W   | 0.793      | 0.372        | 0.022 (0.006)    | 0.459 (0.135)    | 0 (0.000) |    22.94 | Drobnyy, Esphirion, Jad0R1x, LAYM, V1 |
|            5 |     1569 | 2024-03-02 | ex-sYnck        | L   | 0.764      | -            | -                | -                | -         |    -7.00 | Drobnyy, Esphirion, Jad0R1x, LAYM, V1 |
|            4 |     1616 | 2024-02-28 | Metizport       | L   | 0.744      | -            | -                | -                | -         |    -1.57 | Drobnyy, Esphirion, Jad0R1x, LAYM, V1 |
|            3 |     1632 | 2024-02-27 | ECF             | L   | 0.739      | -            | -                | -                | -         |    -9.65 | Drobnyy, Esphirion, Jad0R1x, LAYM, V1 |
|            2 |     3592 | 2023-11-15 | FTW             | L   | 0.047      | -            | -                | -                | -         |    -0.61 | Drobnyy, Esphirion, Jad0R1x, LAYM, V1 |
|            1 |     3602 | 2023-11-15 | Into the Breach | W   | 0.046      | 0.143        | 0.021 (0.000)    | 0.152 (0.001)    | 0 (0.000) |     1.12 | Drobnyy, Esphirion, Jad0R1x, LAYM, V1 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
