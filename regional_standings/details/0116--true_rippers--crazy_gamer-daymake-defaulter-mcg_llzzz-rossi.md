### Roster Details<br />
Team Name: True Rippers<br />
Roster: Crazy_Gamer, DayMake, DEFAULTER, Mcg!LLzZz, Rossi<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [116](../standings_global.md)<br />
Regional Rank: [9]( ../standings_asia.md)<br />
Final Rank Value:  736.8<br />
<br />
Final Rank Value (736.8) = Starting Rank Value (730.6) + Head To Head Adjustments (6.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.385[<sup>1</sup>](#table2)
- Bounty Collected: 0.244[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.051[<sup>2</sup>](#table1)

The average of these factors is 0.170<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 730.6
- 400 + ( ( 0.170 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 730.6


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
|           10 |       80 | 2024-05-26 | Gods Reign | L   | 1.000      | -            | -                | -                | -         |    -9.71 | Crazy_Gamer, DayMake, DEFAULTER, Mcg!LLzZz, Rossi  |
|            9 |       83 | 2024-05-26 | Carnival   | W   | 1.000      | 0.262        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.74 | Crazy_Gamer, DayMake, DEFAULTER, Mcg!LLzZz, Rossi  |
|            8 |      812 | 2024-04-29 | Carnival   | W   | 0.996      | 0.262        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.14 | Crazy_Gamer, DEFAULTER, Gh0sTTTT, Mcg!LLzZz, Rossi |
|            7 |     1597 | 2024-03-31 | Gods Reign | L   | 0.804      | -            | -                | -                | -         |    -7.76 | Crazy_Gamer, DEFAULTER, Gh0sTTTT, Mcg!LLzZz, Rossi |
|            6 |     1603 | 2024-03-30 | Marcos     | W   | 0.797      | 0.143        | 0.001 (0.000)    | 0.031 (0.004)    | 0 (0.000) |     9.25 | Crazy_Gamer, DEFAULTER, Gh0sTTTT, Mcg!LLzZz, Rossi |
|            5 |     1611 | 2024-03-29 | Grayfox    | W   | 0.791      | 0.143        | 0.002 (0.000)    | 0.024 (0.003)    | 0 (0.000) |     8.38 | Crazy_Gamer, DEFAULTER, Gh0sTTTT, Mcg!LLzZz, Rossi |
|            4 |     1706 | 2024-03-24 | Marcos     | L   | 0.756      | -            | -                | -                | -         |   -14.79 | Anasasis, Crazy_Gamer, DEFAULTER, Mcg!LLzZz, Rossi |
|            3 |     2660 | 2024-02-11 | Marcos     | L   | 0.477      | -            | -                | -                | -         |    -5.80 | DEFAULTER, Gh0sTTTT, kennyS, Mcg!LLzZz, Rossi      |
|            2 |     2675 | 2024-02-09 | Marcos     | W   | 0.469      | 0.435        | 0.032 (0.007)    | 0.067 (0.014)    | 1 (0.469) |     9.18 | DEFAULTER, Gh0sTTTT, kennyS, Mcg!LLzZz, Rossi      |
|            1 |     3041 | 2024-01-21 | Grayfox    | W   | 0.337      | 0.262        | 0.002 (0.000)    | 0.024 (0.002)    | 0 (0.000) |     3.61 | DEFAULTER, DiceDealer, Gh0sTTTT, Mcg!LLzZz, Rossi  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,553.23)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      1.000 | $500.00        | $500.00         |
| 2024-04-29 |      0.996 | $1,000.00      | $996.38         |
| 2024-02-11 |      0.477 | $12,000.00     | $5,720.06       |
| 2024-01-21 |      0.337 | $1,000.00      | $336.78         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
