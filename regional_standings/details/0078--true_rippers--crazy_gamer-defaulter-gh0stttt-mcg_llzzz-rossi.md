### Roster Details<br />
Team Name: True Rippers<br />
Roster: Crazy_Gamer, DEFAULTER, Gh0sTTTT, Mcg!LLzZz, Rossi<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [78](../standings_global.md)<br />
Regional Rank: [7]( ../standings_asia.md)<br />
Final Rank Value:  850.5<br />
<br />
Final Rank Value (850.5) = Starting Rank Value (854.6) + Head To Head Adjustments (-4.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.435[<sup>1</sup>](#table2)
- Bounty Collected: 0.287[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.206[<sup>2</sup>](#table1)

The average of these factors is 0.235<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 854.6
- 400 + ( ( 0.235 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 854.6


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
|           13 |      650 | 2024-03-31 | Gods Reign | L   | 1.000      | -            | -                | -                | -         |   -11.52 | Crazy_Gamer, DEFAULTER, Gh0sTTTT, Mcg!LLzZz, Rossi |
|           12 |      656 | 2024-03-30 | Marcos     | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.046 (0.007)    | 0 (0.000) |     8.12 | Crazy_Gamer, DEFAULTER, Gh0sTTTT, Mcg!LLzZz, Rossi |
|           11 |      664 | 2024-03-29 | Grayfox    | W   | 1.000      | 0.143        | 0.004 (0.001)    | 0.038 (0.005)    | 0 (0.000) |     6.50 | Crazy_Gamer, DEFAULTER, Gh0sTTTT, Mcg!LLzZz, Rossi |
|           10 |      759 | 2024-03-24 | Marcos     | L   | 1.000      | -            | -                | -                | -         |   -23.30 | Anasasis, Crazy_Gamer, DEFAULTER, Mcg!LLzZz, Rossi |
|            9 |     1713 | 2024-02-11 | Marcos     | L   | 0.724      | -            | -                | -                | -         |    -9.43 | DEFAULTER, Gh0sTTTT, kennyS, Mcg!LLzZz, Rossi      |
|            8 |     1728 | 2024-02-09 | Marcos     | W   | 0.716      | 0.435        | 0.079 (0.025)    | 0.142 (0.044)    | 1 (0.716) |    13.33 | DEFAULTER, Gh0sTTTT, kennyS, Mcg!LLzZz, Rossi      |
|            7 |     1754 | 2024-02-08 | Gods Reign | W   | 0.704      | 0.435        | 0.010 (0.003)    | 0.180 (0.055)    | 1 (0.704) |     6.64 | DEFAULTER, DiceDealer, Gh0sTTTT, kennyS, Mcg!LLzZz |
|            6 |     2094 | 2024-01-21 | Grayfox    | W   | 0.584      | 0.262        | 0.004 (0.001)    | 0.038 (0.006)    | 0 (0.000) |     3.78 | DEFAULTER, DiceDealer, Gh0sTTTT, Mcg!LLzZz, Rossi  |
|            5 |     2692 | 2023-12-17 | Pakistan   | W   | 0.351      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.351) |     0.80 | BulleT, Executor, insmutje, Jimpphat, SunPayus     |
|            4 |     3057 | 2023-11-26 | Marcos     | L   | 0.211      | -            | -                | -                | -         |    -2.69 | Bhavi, ELV1S, EmbeR, R2B2, reV3nnnn                |
|            3 |     3061 | 2023-11-26 | Gods Reign | W   | 0.210      | 0.262        | 0.010 (0.001)    | 0.180 (0.010)    | 0 (0.000) |     2.06 | DEFAULTER, DiceDealer, Gh0sTTTT, Mcg!LLzZz, Rossi  |
|            2 |     3520 | 2023-11-05 | Gods Reign | W   | 0.071      | 0.310        | 0.151 (0.003)    | 0.268 (0.006)    | 1 (0.071) |     1.32 | Bhavi, CycloneF, ELV1S, f1redup, R2B2              |
|            1 |     3528 | 2023-11-05 | Carnival   | W   | 0.070      | 0.310        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.070) |     0.27 | Benzene, hattygOD, N1kace, Rider, SpawN            |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,593.37)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-02-11 |      0.724 | $12,000.00     | $8,688.85       |
| 2024-01-21 |      0.584 | $1,000.00      | $584.18         |
| 2023-11-26 |      0.211 | $500.00        | $105.58         |
| 2023-11-05 |      0.071 | $3,004.00      | $214.76         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
