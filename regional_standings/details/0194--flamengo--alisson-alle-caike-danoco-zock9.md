### Roster Details<br />
Team Name: Flamengo<br />
Roster: Alisson, ALLE, caike, danoco, zock9<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [194](../standings_global.md)<br />
Regional Rank: [47]( ../standings_americas.md)<br />
Final Rank Value:  506.1<br />
<br />
Final Rank Value (506.1) = Starting Rank Value (508.8) + Head To Head Adjustments (-2.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 508.8
- 400 + ( ( 0.056 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 508.8


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
|           12 |     1893 | 2024-03-14 | MIBR Academy  | L   | 0.693      | -            | -                | -                | -         |    -8.10 | Alisson, ALLE, caike, danoco, zock9   |
|           11 |     1899 | 2024-03-14 | RED Canids    | L   | 0.692      | -            | -                | -                | -         |    -1.13 | Alisson, ALLE, caike, danoco, zock9   |
|           10 |     1972 | 2024-03-11 | MIBR Academy  | W   | 0.674      | 0.303        | 0.001 (0.000)    | 0.099 (0.020)    | 0 (0.000) |    13.35 | Alisson, ALLE, caike, danoco, zock9   |
|            9 |     1998 | 2024-03-10 | FURIA Academy | L   | 0.666      | -            | -                | -                | -         |    -9.49 | Alisson, ALLE, danoco, voltera, zock9 |
|            8 |     2048 | 2024-03-08 | adalYamigos   | L   | 0.652      | -            | -                | -                | -         |    -4.29 | Alisson, ALLE, danoco, voltera, zock9 |
|            7 |     2431 | 2024-02-20 | Solid         | L   | 0.540      | -            | -                | -                | -         |    -1.94 | Alisson, ALLE, danoco, LUCAS1, zock9  |
|            6 |     2434 | 2024-02-20 | Sharks        | W   | 0.540      | 0.143        | 0.031 (0.002)    | 0.530 (0.041)    | 0 (0.000) |    15.67 | Alisson, ALLE, danoco, LUCAS1, zock9  |
|            5 |     2528 | 2024-02-16 | Galorys       | L   | 0.514      | -            | -                | -                | -         |    -2.32 | ALLE, danoco, LUCAS1, ph1, zock9      |
|            4 |     2540 | 2024-02-16 | LA RUGONETA   | L   | 0.512      | -            | -                | -                | -         |    -6.99 | ALLE, danoco, LUCAS1, ph1, zock9      |
|            3 |     2565 | 2024-02-15 | Case          | L   | 0.505      | -            | -                | -                | -         |    -1.85 | ALLE, danoco, LUCAS1, ph1, zock9      |
|            2 |     2636 | 2024-02-13 | 9z Academy    | W   | 0.493      | 0.303        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.42 | ALLE, danoco, LUCAS1, sakamoto, zock9 |
|            1 |     2652 | 2024-02-12 | Fluxo         | L   | 0.485      | -            | -                | -                | -         |    -1.00 | ALLE, danoco, LUCAS1, sakamoto, zock9 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
