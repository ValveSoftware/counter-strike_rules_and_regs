### Roster Details<br />
Team Name: INGLORIOUS<br />
Roster: Drobnyy, Esphirion, Jad0R1x, LAYM, V1<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [194](../standings_global.md)<br />
Regional Rank: [121]( ../standings_europe.md)<br />
Final Rank Value:  566.9<br />
<br />
Final Rank Value (566.9) = Starting Rank Value (558.6) + Head To Head Adjustments (8.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.281[<sup>2</sup>](#table1)
- Opponent Network: 0.048[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.082<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 558.6
- 400 + ( ( 0.082 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 558.6


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
|           10 |      986 | 2024-03-13 | Insilio         | L   | 0.933      | -            | -                | -                | -         |    -6.17 | Drobnyy, Esphirion, Jad0R1x, LAYM, V1 |
|            9 |     1074 | 2024-03-09 | Nexus           | L   | 0.906      | -            | -                | -                | -         |    -5.40 | Drobnyy, Esphirion, Jad0R1x, LAYM, V1 |
|            8 |     1109 | 2024-03-08 | JANO            | L   | 0.898      | -            | -                | -                | -         |   -11.88 | Drobnyy, Esphirion, Jad0R1x, LAYM, V1 |
|            7 |     1120 | 2024-03-07 | MOUZ NXT        | W   | 0.894      | 0.372        | 0.054 (0.018)    | 0.970 (0.323)    | 0 (0.000) |    24.91 | Drobnyy, Esphirion, Jad0R1x, LAYM, V1 |
|            6 |     1159 | 2024-03-06 | Enterprise      | W   | 0.886      | 0.372        | 0.026 (0.009)    | 0.452 (0.149)    | 0 (0.000) |    25.30 | Drobnyy, Esphirion, Jad0R1x, LAYM, V1 |
|            5 |     1273 | 2024-03-02 | ex-sYnck        | L   | 0.858      | -            | -                | -                | -         |    -6.78 | Drobnyy, Esphirion, Jad0R1x, LAYM, V1 |
|            4 |     1320 | 2024-02-28 | Metizport       | L   | 0.838      | -            | -                | -                | -         |    -1.97 | Drobnyy, Esphirion, Jad0R1x, LAYM, V1 |
|            3 |     1336 | 2024-02-27 | ECF             | L   | 0.833      | -            | -                | -                | -         |   -11.67 | Drobnyy, Esphirion, Jad0R1x, LAYM, V1 |
|            2 |     3296 | 2023-11-15 | FTW             | L   | 0.140      | -            | -                | -                | -         |    -1.57 | Drobnyy, Esphirion, Jad0R1x, LAYM, V1 |
|            1 |     3306 | 2023-11-15 | Into the Breach | W   | 0.140      | 0.143        | 0.037 (0.001)    | 0.225 (0.004)    | 0 (0.000) |     3.56 | Drobnyy, Esphirion, Jad0R1x, LAYM, V1 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
