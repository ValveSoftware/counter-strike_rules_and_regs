### Roster Details<br />
Team Name: Fearless Cheetahs<br />
Roster: kr4sy, Ksu, t4tty, Victoria, vilga<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [113](../standings_global.md)<br />
Regional Rank: [76]( ../standings_europe.md)<br />
Final Rank Value:  770.3<br />
<br />
Final Rank Value (770.3) = Starting Rank Value (773.5) + Head To Head Adjustments (-3.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.402[<sup>1</sup>](#table2)
- Bounty Collected: 0.274[<sup>2</sup>](#table1)
- Opponent Network: 0.035[<sup>2</sup>](#table1)
- LAN Wins: 0.063[<sup>2</sup>](#table1)

The average of these factors is 0.193<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 773.5
- 400 + ( ( 0.193 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 773.5


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
|           15 |       19 | 2024-04-21 | GUILD fe      | L   | 1.000      | -            | -                | -                | -         |   -19.29 | kr4sy, Ksu, t4tty, Victoria, vilga         |
|           14 |       38 | 2024-04-20 | BIG EQUIPA    | L   | 1.000      | -            | -                | -                | -         |   -17.26 | kr4sy, Ksu, t4tty, Victoria, vilga         |
|           13 |       83 | 2024-04-19 | 1WIN Gang     | W   | 1.000      | 0.331        | 0.006 (0.002)    | 0.046 (0.015)    | 0 (0.000) |     8.07 | kr4sy, Ksu, t4tty, Victoria, vilga         |
|           12 |      302 | 2024-04-11 | VP.Angels     | W   | 1.000      | 0.331        | 0.006 (0.002)    | 0.082 (0.027)    | 0 (0.000) |     8.49 | kr4sy, Ksu, t4tty, Victoria, vilga         |
|           11 |      474 | 2024-04-07 | NIP Impact    | L   | 1.000      | -            | -                | -                | -         |   -17.65 | kr4sy, Ksu, t4tty, Victoria, vilga         |
|           10 |      491 | 2024-04-06 | Let Her Cook  | W   | 1.000      | 0.262        | 0.001 (0.000)    | 0.228 (0.060)    | 0 (0.000) |    11.12 | kr4sy, Ksu, t4tty, Victoria, vilga         |
|            9 |      712 | 2024-03-27 | Spirit fe     | W   | 1.000      | 0.331        | 0.008 (0.003)    | 0.123 (0.041)    | 0 (0.000) |    10.88 | kr4sy, Ksu, t4tty, Victoria, vilga         |
|            8 |      794 | 2024-03-21 | Let Her Cook  | W   | 0.987      | 0.331        | 0.001 (0.000)    | 0.228 (0.075)    | 0 (0.000) |    11.39 | kr4sy, Ksu, t4tty, Victoria, vilga         |
|            7 |     1152 | 2024-03-06 | NAVI Javelins | L   | 0.887      | -            | -                | -                | -         |   -10.32 | kr4sy, Ksu, t4tty, Victoria, vilga         |
|            6 |     1371 | 2024-02-25 | 1WIN Gang     | W   | 0.820      | 0.250        | 0.006 (0.001)    | 0.046 (0.010)    | 0 (0.000) |     7.90 | kr4sy, Ksu, t4tty, Victoria, vilga         |
|            5 |     2797 | 2023-12-10 | Pigeons       | L   | 0.304      | -            | -                | -                | -         |    -3.40 | ANa, Kat, tory, twenty3, vilga             |
|            4 |     2833 | 2023-12-08 | NAVI Javelins | W   | 0.293      | 0.524        | 0.064 (0.010)    | 0.467 (0.072)    | 1 (0.293) |     5.53 | Angelka, Hanka, LETi, Liina, vicu          |
|            3 |     2839 | 2023-12-08 | FURIA fe      | W   | 0.292      | 0.524        | 0.030 (0.005)    | 0.293 (0.045)    | 1 (0.292) |     4.44 | Elizabeth, f6tal, Ksu, t4tty, Victoria     |
|            2 |     3172 | 2023-11-19 | Let Her Cook  | L   | 0.166      | -            | -                | -                | -         |    -3.34 | Joanana, kezziwow, meli, Moraltis, RacheLL |
|            1 |     3746 | 2023-10-28 | BIG EQUIPA    | W   | 0.020      | 0.329        | 0.007 (0.000)    | 0.376 (0.002)    | 0 (0.000) |     0.26 | Elizabeth, f6tal, Ksu, t4tty, Victoria     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,233.49)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-21 |      1.000 | $1,600.00      | $1,600.00       |
| 2024-02-25 |      0.820 | $750.00        | $614.98         |
| 2023-12-10 |      0.306 | $13,000.00     | $3,977.03       |
| 2023-11-19 |      0.166 | $250.00        | $41.48          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
