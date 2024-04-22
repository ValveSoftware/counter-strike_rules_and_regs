### Roster Details<br />
Team Name: Flamengo<br />
Roster: Alisson, ALLE, caike, danoco, zock9<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [203](../standings_global.md)<br />
Regional Rank: [48]( ../standings_americas.md)<br />
Final Rank Value:  516.4<br />
<br />
Final Rank Value (516.4) = Starting Rank Value (518.0) + Head To Head Adjustments (-1.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.234[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.061<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 518.0
- 400 + ( ( 0.061 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 518.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      946 | 2024-03-14 | MIBR Academy  | L   | 0.941      | -            | -                | -                | -         |   -10.46 | Alisson, ALLE, caike, danoco, zock9   |
|           11 |      952 | 2024-03-14 | RED Canids    | L   | 0.939      | -            | -                | -                | -         |    -1.63 | Alisson, ALLE, caike, danoco, zock9   |
|           10 |     1025 | 2024-03-11 | MIBR Academy  | W   | 0.921      | 0.303        | 0.003 (0.001)    | 0.157 (0.044)    | 0 (0.000) |    18.58 | Alisson, ALLE, caike, danoco, zock9   |
|            9 |     1051 | 2024-03-10 | FURIA Academy | L   | 0.914      | -            | -                | -                | -         |   -12.99 | Alisson, ALLE, danoco, voltera, zock9 |
|            8 |     1101 | 2024-03-08 | adalYamigos   | L   | 0.900      | -            | -                | -                | -         |    -4.37 | Alisson, ALLE, danoco, voltera, zock9 |
|            7 |     1484 | 2024-02-20 | Solid         | L   | 0.788      | -            | -                | -                | -         |    -2.99 | Alisson, ALLE, danoco, LUCAS1, zock9  |
|            6 |     1487 | 2024-02-20 | Sharks        | W   | 0.787      | 0.143        | 0.040 (0.005)    | 0.532 (0.060)    | 0 (0.000) |    22.74 | Alisson, ALLE, danoco, LUCAS1, zock9  |
|            5 |     1581 | 2024-02-16 | Galorys       | L   | 0.761      | -            | -                | -                | -         |    -3.73 | ALLE, danoco, LUCAS1, ph1, zock9      |
|            4 |     1593 | 2024-02-16 | LA RUGONETA   | L   | 0.759      | -            | -                | -                | -         |   -10.48 | ALLE, danoco, LUCAS1, ph1, zock9      |
|            3 |     1618 | 2024-02-15 | Case          | L   | 0.753      | -            | -                | -                | -         |    -2.81 | ALLE, danoco, LUCAS1, ph1, zock9      |
|            2 |     1689 | 2024-02-13 | 9z Academy    | W   | 0.741      | 0.303        | 0.000 (0.000)    | 0.011 (0.003)    | 0 (0.000) |     7.81 | ALLE, danoco, LUCAS1, sakamoto, zock9 |
|            1 |     1705 | 2024-02-12 | Fluxo         | L   | 0.732      | -            | -                | -                | -         |    -1.29 | ALLE, danoco, LUCAS1, sakamoto, zock9 |

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
