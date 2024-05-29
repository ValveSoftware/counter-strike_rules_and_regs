### Roster Details<br />
Team Name: Fearless Cheetahs<br />
Roster: kr4sy, Ksu, t4tty, Victoria, vilga<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [142](../standings_global.md)<br />
Regional Rank: [94]( ../standings_europe.md)<br />
Final Rank Value:  685.2<br />
<br />
Final Rank Value (685.2) = Starting Rank Value (685.2) + Head To Head Adjustments (-0.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.328[<sup>1</sup>](#table2)
- Bounty Collected: 0.234[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.010[<sup>2</sup>](#table1)

The average of these factors is 0.147<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 685.2
- 400 + ( ( 0.147 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 685.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      966 | 2024-04-21 | ex-GUILD fe   | L   | 0.946      | -            | -                | -                | -         |   -16.19 | kr4sy, Ksu, t4tty, Victoria, vilga     |
|           12 |      985 | 2024-04-20 | BIG EQUIPA    | L   | 0.940      | -            | -                | -                | -         |   -14.86 | kr4sy, Ksu, t4tty, Victoria, vilga     |
|           11 |     1030 | 2024-04-19 | 1WIN Gang     | W   | 0.933      | 0.331        | 0.003 (0.001)    | 0.036 (0.011)    | 0 (0.000) |     7.71 | kr4sy, Ksu, t4tty, Victoria, vilga     |
|           10 |     1249 | 2024-04-11 | Crescent fe   | W   | 0.879      | 0.331        | 0.007 (0.002)    | 0.096 (0.028)    | 0 (0.000) |    10.55 | kr4sy, Ksu, t4tty, Victoria, vilga     |
|            9 |     1421 | 2024-04-07 | NIP Impact    | L   | 0.851      | -            | -                | -                | -         |   -12.70 | kr4sy, Ksu, t4tty, Victoria, vilga     |
|            8 |     1438 | 2024-04-06 | Let Her Cook  | W   | 0.844      | 0.262        | 0.000 (0.000)    | 0.163 (0.036)    | 0 (0.000) |     8.25 | kr4sy, Ksu, t4tty, Victoria, vilga     |
|            7 |     1659 | 2024-03-27 | Spirit fe     | W   | 0.780      | 0.331        | 0.005 (0.001)    | 0.079 (0.020)    | 0 (0.000) |    11.04 | kr4sy, Ksu, t4tty, Victoria, vilga     |
|            6 |     1741 | 2024-03-21 | Let Her Cook  | W   | 0.740      | 0.331        | 0.000 (0.000)    | 0.163 (0.040)    | 0 (0.000) |     7.43 | kr4sy, Ksu, t4tty, Victoria, vilga     |
|            5 |     2099 | 2024-03-06 | NAVI Javelins | L   | 0.640      | -            | -                | -                | -         |    -7.62 | kr4sy, Ksu, t4tty, Victoria, vilga     |
|            4 |     2318 | 2024-02-25 | 1WIN Gang     | W   | 0.573      | 0.250        | 0.003 (0.000)    | 0.036 (0.005)    | 0 (0.000) |     5.47 | kr4sy, Ksu, t4tty, Victoria, vilga     |
|            3 |     3744 | 2023-12-10 | Pigeons       | L   | 0.057      | -            | -                | -                | -         |    -0.72 | ANa, Kat, tory, twenty3, vilga         |
|            2 |     3780 | 2023-12-08 | NAVI Javelins | W   | 0.045      | 0.524        | 0.024 (0.001)    | 0.341 (0.008)    | 1 (0.045) |     0.85 | Angelka, Hanka, LETi, Liina, vicu      |
|            1 |     3786 | 2023-12-08 | FURIA fe      | W   | 0.044      | 0.524        | 0.009 (0.000)    | 0.190 (0.004)    | 1 (0.044) |     0.70 | Elizabeth, f6tal, Ksu, t4tty, Victoria |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,703.85)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-21 |      0.946 | $1,600.00      | $1,513.58       |
| 2024-02-25 |      0.573 | $750.00        | $429.43         |
| 2023-12-10 |      0.059 | $13,000.00     | $760.85         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
