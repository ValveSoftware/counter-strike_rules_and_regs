### Roster Details<br />
Team Name: Flamengo<br />
Roster: Alisson, ALLE, caike, danoco, zock9<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [190](../standings_global.md)<br />
Regional Rank: [45]( ../standings_americas.md)<br />
Final Rank Value:  514.0<br />
<br />
Final Rank Value (514.0) = Starting Rank Value (517.7) + Head To Head Adjustments (-3.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.239[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.062<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 517.7
- 400 + ( ( 0.062 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 517.7


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
|           12 |     1242 | 2024-03-14 | MIBR Academy  | L   | 0.847      | -            | -                | -                | -         |    -9.53 | Alisson, ALLE, caike, danoco, zock9   |
|           11 |     1248 | 2024-03-14 | RED Canids    | L   | 0.846      | -            | -                | -                | -         |    -1.65 | Alisson, ALLE, caike, danoco, zock9   |
|           10 |     1321 | 2024-03-11 | MIBR Academy  | W   | 0.828      | 0.303        | 0.003 (0.001)    | 0.133 (0.033)    | 0 (0.000) |    16.67 | Alisson, ALLE, caike, danoco, zock9   |
|            9 |     1347 | 2024-03-10 | FURIA Academy | L   | 0.820      | -            | -                | -                | -         |   -11.84 | Alisson, ALLE, danoco, voltera, zock9 |
|            8 |     1397 | 2024-03-08 | adalYamigos   | L   | 0.806      | -            | -                | -                | -         |    -4.68 | Alisson, ALLE, danoco, voltera, zock9 |
|            7 |     1780 | 2024-02-20 | Solid         | L   | 0.694      | -            | -                | -                | -         |    -2.78 | Alisson, ALLE, danoco, LUCAS1, zock9  |
|            6 |     1783 | 2024-02-20 | Sharks        | W   | 0.694      | 0.143        | 0.060 (0.006)    | 0.453 (0.045)    | 0 (0.000) |    19.87 | Alisson, ALLE, danoco, LUCAS1, zock9  |
|            5 |     1877 | 2024-02-16 | Galorys       | L   | 0.668      | -            | -                | -                | -         |    -3.38 | ALLE, danoco, LUCAS1, ph1, zock9      |
|            4 |     1889 | 2024-02-16 | LA RUGONETA   | L   | 0.666      | -            | -                | -                | -         |    -9.37 | ALLE, danoco, LUCAS1, ph1, zock9      |
|            3 |     1914 | 2024-02-15 | Case          | L   | 0.660      | -            | -                | -                | -         |    -2.72 | ALLE, danoco, LUCAS1, ph1, zock9      |
|            2 |     1985 | 2024-02-13 | 9z Academy    | W   | 0.648      | 0.303        | 0.000 (0.000)    | 0.007 (0.001)    | 0 (0.000) |     6.85 | ALLE, danoco, LUCAS1, sakamoto, zock9 |
|            1 |     2001 | 2024-02-12 | Fluxo         | L   | 0.639      | -            | -                | -                | -         |    -1.13 | ALLE, danoco, LUCAS1, sakamoto, zock9 |

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
