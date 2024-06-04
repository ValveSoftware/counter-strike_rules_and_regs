### Roster Details<br />
Team Name: Crescent fe<br />
Roster: akiyanora, amore, ayaka, Margo, meo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [163](../standings_global.md)<br />
Regional Rank: [108]( ../standings_europe.md)<br />
Final Rank Value:  610.1<br />
<br />
Final Rank Value (610.1) = Starting Rank Value (662.8) + Head To Head Adjustments (-52.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.315[<sup>1</sup>](#table2)
- Bounty Collected: 0.220[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.135<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 662.8
- 400 + ( ( 0.135 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 662.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |       66 | 2024-05-26 | NIP Impact        | W   | 1.000      | 0.250        | 0.007 (0.002)    | 0.227 (0.057)    | 0 (0.000) |    19.86 | akiyanora, amore, ayaka, Margo, meo       |
|           11 |      293 | 2024-05-18 | Pigeons           | L   | 1.000      | -            | -                | -                | -         |    -5.89 | akiyanora, amore, ayaka, Margo, meo       |
|           10 |      676 | 2024-05-05 | Pigeons           | L   | 1.000      | -            | -                | -                | -         |    -6.22 | akiyanora, amore, ayaka, Margo, meo       |
|            9 |     1037 | 2024-04-19 | NAVI Javelins     | L   | 0.933      | -            | -                | -                | -         |    -7.51 | akiyanora, amore, ayaka, Margo, meo       |
|            8 |     1249 | 2024-04-11 | Fearless Cheetahs | L   | 0.879      | -            | -                | -                | -         |   -10.55 | kr4sy, Ksu, t4tty, Victoria, vilga        |
|            7 |     1303 | 2024-04-10 | Permitta W        | L   | 0.872      | -            | -                | -                | -         |   -18.50 | amyb, Gaba, Mrs_Fire, pavlla, Tynka       |
|            6 |     1386 | 2024-04-08 | Pigeons           | L   | 0.858      | -            | -                | -                | -         |    -8.00 | akiyanora, amore, ayaka, Margo, meo       |
|            5 |     1620 | 2024-03-28 | 1WIN Gang         | W   | 0.786      | 0.331        | 0.003 (0.001)    | 0.036 (0.009)    | 0 (0.000) |     8.34 | akiyanora, amore, ayaka, Margo, meo       |
|            4 |     1773 | 2024-03-20 | Spirit fe         | L   | 0.733      | -            | -                | -                | -         |   -11.19 | akiyanora, amore, ayaka, Margo, meo       |
|            3 |     1924 | 2024-03-13 | Let Her Cook      | L   | 0.686      | -            | -                | -                | -         |   -14.16 | Joanana, kezziwow, meli, RacheLL, suns1de |
|            2 |     2358 | 2024-02-24 | NAVI Javelins     | L   | 0.565      | -            | -                | -                | -         |    -6.73 | akiyanora, amore, ayaka, Margo, meo       |
|            1 |     2486 | 2024-02-18 | ex-FORZE Ladies   | W   | 0.526      | 0.143        | 0.005 (0.000)    | 0.073 (0.005)    | 0 (0.000) |     7.93 | k175un4, mikeri, sosya, Stormy, wieenN    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,993.29)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      1.000 | $750.00        | $750.00         |
| 2024-05-05 |      1.000 | $250.00        | $250.00         |
| 2024-04-21 |      0.946 | $1,050.00      | $993.29         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
