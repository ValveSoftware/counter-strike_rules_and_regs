### Roster Details<br />
Team Name: Fearless Cheetahs<br />
Roster: kr4sy, Ksu, t4tty, Victoria, vilga<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [121](../standings_global.md)<br />
Regional Rank: [81]( ../standings_europe.md)<br />
Final Rank Value:  750.3<br />
<br />
Final Rank Value (750.3) = Starting Rank Value (750.2) + Head To Head Adjustments (0.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.397[<sup>1</sup>](#table2)
- Bounty Collected: 0.268[<sup>2</sup>](#table1)
- Opponent Network: 0.026[<sup>2</sup>](#table1)
- LAN Wins: 0.045[<sup>2</sup>](#table1)

The average of these factors is 0.184<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 750.2
- 400 + ( ( 0.184 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 750.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      315 | 2024-04-21 | GUILD fe      | L   | 1.000      | -            | -                | -                | -         |   -18.59 | kr4sy, Ksu, t4tty, Victoria, vilga         |
|           13 |      334 | 2024-04-20 | BIG EQUIPA    | L   | 1.000      | -            | -                | -                | -         |   -17.01 | kr4sy, Ksu, t4tty, Victoria, vilga         |
|           12 |      379 | 2024-04-19 | 1WIN Gang     | W   | 1.000      | 0.331        | 0.006 (0.002)    | 0.044 (0.015)    | 0 (0.000) |     8.70 | kr4sy, Ksu, t4tty, Victoria, vilga         |
|           11 |      598 | 2024-04-11 | Crescent fe   | W   | 1.000      | 0.331        | 0.008 (0.003)    | 0.072 (0.024)    | 0 (0.000) |     9.37 | kr4sy, Ksu, t4tty, Victoria, vilga         |
|           10 |      770 | 2024-04-07 | NIP Impact    | L   | 1.000      | -            | -                | -                | -         |   -16.60 | kr4sy, Ksu, t4tty, Victoria, vilga         |
|            9 |      787 | 2024-04-06 | Let Her Cook  | W   | 0.998      | 0.262        | 0.000 (0.000)    | 0.204 (0.053)    | 0 (0.000) |    11.40 | kr4sy, Ksu, t4tty, Victoria, vilga         |
|            8 |     1008 | 2024-03-27 | Spirit fe     | W   | 0.934      | 0.331        | 0.010 (0.003)    | 0.105 (0.032)    | 0 (0.000) |    11.12 | kr4sy, Ksu, t4tty, Victoria, vilga         |
|            7 |     1090 | 2024-03-21 | Let Her Cook  | W   | 0.894      | 0.331        | 0.000 (0.000)    | 0.204 (0.060)    | 0 (0.000) |    10.64 | kr4sy, Ksu, t4tty, Victoria, vilga         |
|            6 |     1448 | 2024-03-06 | NAVI Javelins | L   | 0.794      | -            | -                | -                | -         |    -9.44 | kr4sy, Ksu, t4tty, Victoria, vilga         |
|            5 |     1667 | 2024-02-25 | 1WIN Gang     | W   | 0.727      | 0.250        | 0.006 (0.001)    | 0.044 (0.008)    | 0 (0.000) |     7.55 | kr4sy, Ksu, t4tty, Victoria, vilga         |
|            4 |     3093 | 2023-12-10 | Pigeons       | L   | 0.211      | -            | -                | -                | -         |    -2.41 | ANa, Kat, tory, twenty3, vilga             |
|            3 |     3129 | 2023-12-08 | NAVI Javelins | W   | 0.200      | 0.524        | 0.060 (0.006)    | 0.412 (0.043)    | 1 (0.200) |     3.73 | Angelka, Hanka, LETi, Liina, vicu          |
|            2 |     3135 | 2023-12-08 | FURIA fe      | W   | 0.198      | 0.524        | 0.027 (0.003)    | 0.253 (0.026)    | 1 (0.198) |     3.04 | Elizabeth, f6tal, Ksu, t4tty, Victoria     |
|            1 |     3468 | 2023-11-19 | Let Her Cook  | L   | 0.073      | -            | -                | -                | -         |    -1.44 | Joanana, kezziwow, meli, Moraltis, RacheLL |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,927.20)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-21 |      1.000 | $1,600.00      | $1,600.00       |
| 2024-02-25 |      0.727 | $750.00        | $545.00         |
| 2023-12-10 |      0.213 | $13,000.00     | $2,764.05       |
| 2023-11-19 |      0.073 | $250.00        | $18.15          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
