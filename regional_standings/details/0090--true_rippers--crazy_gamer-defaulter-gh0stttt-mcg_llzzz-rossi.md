### Roster Details<br />
Team Name: True Rippers<br />
Roster: Crazy_Gamer, DEFAULTER, Gh0sTTTT, Mcg!LLzZz, Rossi<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [90](../standings_global.md)<br />
Regional Rank: [8]( ../standings_asia.md)<br />
Final Rank Value:  832.2<br />
<br />
Final Rank Value (832.2) = Starting Rank Value (828.7) + Head To Head Adjustments (3.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.444[<sup>1</sup>](#table2)
- Bounty Collected: 0.280[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.167[<sup>2</sup>](#table1)

The average of these factors is 0.225<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 828.7
- 400 + ( ( 0.225 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 828.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      161 | 2024-04-29 | Carnival   | W   | 1.000      | 0.262        | 0.003 (0.001)    | 0.000 (0.000)    | 0 (0.000) |     4.82 | Crazy_Gamer, DEFAULTER, Gh0sTTTT, Mcg!LLzZz, Rossi |
|           11 |      946 | 2024-03-31 | Gods Reign | L   | 0.958      | -            | -                | -                | -         |   -10.33 | Crazy_Gamer, DEFAULTER, Gh0sTTTT, Mcg!LLzZz, Rossi |
|           10 |      952 | 2024-03-30 | Marcos     | W   | 0.951      | 0.143        | 0.003 (0.000)    | 0.040 (0.005)    | 0 (0.000) |     8.39 | Crazy_Gamer, DEFAULTER, Gh0sTTTT, Mcg!LLzZz, Rossi |
|            9 |      960 | 2024-03-29 | Grayfox    | W   | 0.945      | 0.143        | 0.004 (0.001)    | 0.032 (0.004)    | 0 (0.000) |     7.23 | Crazy_Gamer, DEFAULTER, Gh0sTTTT, Mcg!LLzZz, Rossi |
|            8 |     1055 | 2024-03-24 | Marcos     | L   | 0.910      | -            | -                | -                | -         |   -20.52 | Anasasis, Crazy_Gamer, DEFAULTER, Mcg!LLzZz, Rossi |
|            7 |     2009 | 2024-02-11 | Marcos     | L   | 0.631      | -            | -                | -                | -         |    -8.15 | DEFAULTER, Gh0sTTTT, kennyS, Mcg!LLzZz, Rossi      |
|            6 |     2024 | 2024-02-09 | Marcos     | W   | 0.623      | 0.435        | 0.080 (0.022)    | 0.111 (0.030)    | 1 (0.623) |    11.70 | DEFAULTER, Gh0sTTTT, kennyS, Mcg!LLzZz, Rossi      |
|            5 |     2050 | 2024-02-08 | Gods Reign | W   | 0.611      | 0.435        | 0.011 (0.003)    | 0.143 (0.038)    | 1 (0.611) |     6.22 | DEFAULTER, DiceDealer, Gh0sTTTT, kennyS, Mcg!LLzZz |
|            4 |     2390 | 2024-01-21 | Grayfox    | W   | 0.491      | 0.262        | 0.004 (0.000)    | 0.032 (0.004)    | 0 (0.000) |     3.79 | DEFAULTER, DiceDealer, Gh0sTTTT, Mcg!LLzZz, Rossi  |
|            3 |     2988 | 2023-12-17 | Pakistan   | W   | 0.258      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.258) |     0.68 | BulleT, Executor, insmutje, Jimpphat, SunPayus     |
|            2 |     3353 | 2023-11-26 | Marcos     | L   | 0.118      | -            | -                | -                | -         |    -1.48 | Bhavi, ELV1S, EmbeR, R2B2, reV3nnnn                |
|            1 |     3357 | 2023-11-26 | Gods Reign | W   | 0.117      | 0.262        | 0.011 (0.000)    | 0.143 (0.004)    | 0 (0.000) |     1.23 | DEFAULTER, DiceDealer, Gh0sTTTT, Mcg!LLzZz, Rossi  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,118.98)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-29 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-02-11 |      0.631 | $12,000.00     | $7,569.17       |
| 2024-01-21 |      0.491 | $1,000.00      | $490.87         |
| 2023-11-26 |      0.118 | $500.00        | $58.93          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
