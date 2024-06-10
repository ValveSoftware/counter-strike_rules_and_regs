### Roster Details<br />
Team Name: True Rippers<br />
Roster: Crazy_Gamer, DayMake, DEFAULTER, Mcg!LLzZz, Rossi<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [141](../standings_global.md)<br />
Regional Rank: [12]( ../standings_asia.md)<br />
Final Rank Value:  730.6<br />
<br />
Final Rank Value (730.6) = Starting Rank Value (724.8) + Head To Head Adjustments (5.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.374[<sup>1</sup>](#table2)
- Bounty Collected: 0.235[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.042[<sup>2</sup>](#table1)

The average of these factors is 0.163<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 724.8
- 400 + ( ( 0.163 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 724.8


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
|           10 |      580 | 2024-05-26 | Gods Reign | L   | 1.000      | -            | -                | -                | -         |    -9.58 | Crazy_Gamer, DayMake, DEFAULTER, Mcg!LLzZz, Rossi  |
|            9 |      583 | 2024-05-26 | Carnival   | W   | 1.000      | 0.262        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.03 | Crazy_Gamer, DayMake, DEFAULTER, Mcg!LLzZz, Rossi  |
|            8 |     1312 | 2024-04-29 | Carnival   | W   | 0.917      | 0.262        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.87 | Crazy_Gamer, DEFAULTER, Gh0sTTTT, Mcg!LLzZz, Rossi |
|            7 |     2097 | 2024-03-31 | Gods Reign | L   | 0.725      | -            | -                | -                | -         |    -7.09 | Crazy_Gamer, DEFAULTER, Gh0sTTTT, Mcg!LLzZz, Rossi |
|            6 |     2103 | 2024-03-30 | Marcos     | W   | 0.718      | 0.143        | 0.001 (0.000)    | 0.026 (0.003)    | 0 (0.000) |     8.56 | Crazy_Gamer, DEFAULTER, Gh0sTTTT, Mcg!LLzZz, Rossi |
|            5 |     2111 | 2024-03-29 | Grayfox    | W   | 0.712      | 0.143        | 0.001 (0.000)    | 0.019 (0.002)    | 0 (0.000) |     7.79 | Crazy_Gamer, DEFAULTER, Gh0sTTTT, Mcg!LLzZz, Rossi |
|            4 |     2206 | 2024-03-24 | Marcos     | L   | 0.677      | -            | -                | -                | -         |   -13.05 | Anasasis, Crazy_Gamer, DEFAULTER, Mcg!LLzZz, Rossi |
|            3 |     3160 | 2024-02-11 | Marcos     | L   | 0.397      | -            | -                | -                | -         |    -5.06 | DEFAULTER, Gh0sTTTT, kennyS, Mcg!LLzZz, Rossi      |
|            2 |     3175 | 2024-02-09 | Marcos     | W   | 0.390      | 0.435        | 0.026 (0.004)    | 0.047 (0.008)    | 1 (0.390) |     7.40 | DEFAULTER, Gh0sTTTT, kennyS, Mcg!LLzZz, Rossi      |
|            1 |     3541 | 2024-01-21 | Grayfox    | W   | 0.258      | 0.262        | 0.001 (0.000)    | 0.019 (0.001)    | 0 (0.000) |     2.84 | DEFAULTER, DiceDealer, Gh0sTTTT, Mcg!LLzZz, Rossi  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,444.82)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      1.000 | $500.00        | $500.00         |
| 2024-04-29 |      0.917 | $1,000.00      | $917.21         |
| 2024-02-11 |      0.397 | $12,000.00     | $4,769.99       |
| 2024-01-21 |      0.258 | $1,000.00      | $257.61         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
