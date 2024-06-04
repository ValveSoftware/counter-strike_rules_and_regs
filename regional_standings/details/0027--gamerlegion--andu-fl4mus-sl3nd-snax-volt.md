### Roster Details<br />
Team Name: GamerLegion<br />
Roster: aNdu, FL4MUS, sl3nd, Snax, volt<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [27](../standings_global.md)<br />
Regional Rank: [18]( ../standings_europe.md)<br />
Final Rank Value:  1263.0<br />
<br />
Final Rank Value (1263.0) = Starting Rank Value (1237.5) + Head To Head Adjustments (25.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.606[<sup>1</sup>](#table2)
- Bounty Collected: 0.477[<sup>2</sup>](#table1)
- Opponent Network: 0.317[<sup>2</sup>](#table1)
- LAN Wins: 0.326[<sup>2</sup>](#table1)

The average of these factors is 0.431<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1237.5
- 400 + ( ( 0.431 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1237.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      166 | 2024-05-22 | Eternal Fire      | L   | 1.000      | -            | -                | -                | -         |    -1.85 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           14 |      196 | 2024-05-21 | AMKAL             | W   | 1.000      | 0.769        | 0.144 (0.111)    | 0.736 (0.566)    | 0 (0.000) |    16.37 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           13 |      307 | 2024-05-18 | fnatic            | W   | 1.000      | 0.769        | 0.148 (0.114)    | 0.565 (0.434)    | 0 (0.000) |    11.35 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           12 |      328 | 2024-05-17 | Gaimin Gladiators | W   | 1.000      | 0.769        | 0.090 (0.069)    | 0.809 (0.622)    | 0 (0.000) |    11.10 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           11 |      633 | 2024-05-07 | Virtus.pro        | L   | 1.000      | -            | -                | -                | -         |    -2.71 | aNdu, isak, sl3nd, Snax, volt   |
|           10 |      707 | 2024-05-03 | ENCE              | W   | 1.000      | 0.889        | 0.199 (0.177)    | 0.422 (0.375)    | 1 (1.000) |    19.32 | aNdu, isak, sl3nd, Snax, volt   |
|            9 |      724 | 2024-05-02 | FORZE             | W   | 1.000      | 0.889        | 0.108 (0.096)    | 0.499 (0.443)    | 1 (1.000) |    10.25 | aNdu, isak, sl3nd, Snax, volt   |
|            8 |      756 | 2024-05-01 | MOUZ              | L   | 1.000      | -            | -                | -                | -         |    -0.45 | aNdu, isak, sl3nd, Snax, volt   |
|            7 |      784 | 2024-04-30 | ENCE              | W   | 1.000      | 0.889        | 0.199 (0.177)    | 0.422 (0.375)    | 1 (1.000) |    20.77 | aNdu, isak, sl3nd, Snax, volt   |
|            6 |      999 | 2024-04-20 | BIG               | L   | 0.938      | -            | -                | -                | -         |    -8.51 | aNdu, Goody, sl3nd, Snax, volt  |
|            5 |     1089 | 2024-04-18 | Sashi             | L   | 0.925      | -            | -                | -                | -         |   -21.90 | aNdu, isak, sl3nd, Snax, volt   |
|            4 |     1166 | 2024-04-16 | MOUZ NXT          | W   | 0.912      | 0.384        | 0.157 (0.055)    | 1.000 (0.350)    | 0 (0.000) |     8.11 | aNdu, isak, sl3nd, Snax, volt   |
|            3 |     1558 | 2024-04-02 | Monte             | L   | 0.820      | -            | -                | -                | -         |   -12.80 | aNdu, isak, sl3nd, Snax, volt   |
|            2 |     1567 | 2024-04-02 | FAVBET            | L   | 0.818      | -            | -                | -                | -         |   -23.86 | aNdu, isak, sl3nd, Snax, volt   |
|            1 |     1587 | 2024-04-01 | GUN5              | W   | 0.811      | 0.384        | 0.000 (0.000)    | 0.005 (0.002)    | 0 (0.000) |     0.32 | aNdu, isak, sl3nd, Snax, volt   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($67,500.00)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.22) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-23 |      1.000 | $50,000.00     | $50,000.00      |
| 2024-05-12 |      1.000 | $17,500.00     | $17,500.00      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
