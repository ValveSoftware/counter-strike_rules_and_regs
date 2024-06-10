### Roster Details<br />
Team Name: Flamengo<br />
Roster: Alisson, ALLE, caike, danoco, zock9<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [204](../standings_global.md)<br />
Regional Rank: [54]( ../standings_americas.md)<br />
Final Rank Value:  508.9<br />
<br />
Final Rank Value (508.9) = Starting Rank Value (511.2) + Head To Head Adjustments (-2.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 511.2
- 400 + ( ( 0.056 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 511.2


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
|           12 |     2393 | 2024-03-14 | MIBR Academy  | L   | 0.614      | -            | -                | -                | -         |    -7.30 | Alisson, ALLE, caike, danoco, zock9   |
|           11 |     2399 | 2024-03-14 | RED Canids    | L   | 0.613      | -            | -                | -                | -         |    -0.78 | Alisson, ALLE, caike, danoco, zock9   |
|           10 |     2472 | 2024-03-11 | MIBR Academy  | W   | 0.594      | 0.303        | 0.001 (0.000)    | 0.080 (0.014)    | 0 (0.000) |    11.67 | Alisson, ALLE, caike, danoco, zock9   |
|            9 |     2498 | 2024-03-10 | FURIA Academy | L   | 0.587      | -            | -                | -                | -         |    -8.24 | Alisson, ALLE, danoco, voltera, zock9 |
|            8 |     2548 | 2024-03-08 | adalYamigos   | L   | 0.573      | -            | -                | -                | -         |    -4.16 | Alisson, ALLE, danoco, voltera, zock9 |
|            7 |     2931 | 2024-02-20 | Solid         | L   | 0.461      | -            | -                | -                | -         |    -1.54 | Alisson, ALLE, danoco, LUCAS1, zock9  |
|            6 |     2934 | 2024-02-20 | Sharks        | W   | 0.461      | 0.143        | 0.037 (0.002)    | 0.486 (0.032)    | 0 (0.000) |    13.55 | Alisson, ALLE, danoco, LUCAS1, zock9  |
|            5 |     3028 | 2024-02-16 | Galorys       | L   | 0.434      | -            | -                | -                | -         |    -1.80 | ALLE, danoco, LUCAS1, ph1, zock9      |
|            4 |     3040 | 2024-02-16 | LA RUGONETA   | L   | 0.433      | -            | -                | -                | -         |    -5.82 | ALLE, danoco, LUCAS1, ph1, zock9      |
|            3 |     3065 | 2024-02-15 | Case          | L   | 0.426      | -            | -                | -                | -         |    -1.52 | ALLE, danoco, LUCAS1, ph1, zock9      |
|            2 |     3136 | 2024-02-13 | 9z Academy    | W   | 0.414      | 0.303        | 0.000 (0.000)    | 0.039 (0.005)    | 0 (0.000) |     4.54 | ALLE, danoco, LUCAS1, sakamoto, zock9 |
|            1 |     3152 | 2024-02-12 | Fluxo         | L   | 0.406      | -            | -                | -                | -         |    -0.85 | ALLE, danoco, LUCAS1, sakamoto, zock9 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
