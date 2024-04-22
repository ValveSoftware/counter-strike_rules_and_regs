### Roster Details<br />
Team Name: GUILD fe<br />
Roster: Ann4, D7, KiTKaT, Nea, pullox<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [144](../standings_global.md)<br />
Regional Rank: [97]( ../standings_europe.md)<br />
Final Rank Value:  708.1<br />
<br />
Final Rank Value (708.1) = Starting Rank Value (703.9) + Head To Head Adjustments (4.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.330[<sup>1</sup>](#table2)
- Bounty Collected: 0.267[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.157<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 703.9
- 400 + ( ( 0.157 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 703.9


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
|           12 |       19 | 2024-04-21 | Fearless Cheetahs | W   | 1.000      | 0.331        | 0.033 (0.011)    | 0.214 (0.071)    | 0 (0.000) |    19.29 | Ann4, D7, KiTKaT, Nea, pullox   |
|           11 |       49 | 2024-04-20 | Let Her Cook      | L   | 1.000      | -            | -                | -                | -         |   -15.98 | Ann4, D7, KiTKaT, Nea, pullox   |
|           10 |       92 | 2024-04-19 | Pigeons           | L   | 1.000      | -            | -                | -                | -         |    -7.17 | Ann4, D7, KiTKaT, Nea, pullox   |
|            9 |      349 | 2024-04-10 | NIP Impact        | W   | 1.000      | 0.331        | 0.008 (0.003)    | 0.278 (0.092)    | 0 (0.000) |    18.50 | Ann4, D7, KiTKaT, Nea, pullox   |
|            8 |      487 | 2024-04-06 | NIP Impact        | L   | 1.000      | -            | -                | -                | -         |   -14.01 | Ann4, D7, KiTKaT, Nea, pullox   |
|            7 |      672 | 2024-03-28 | BIG EQUIPA        | W   | 1.000      | 0.331        | 0.007 (0.002)    | 0.376 (0.124)    | 0 (0.000) |    17.24 | Ann4, D7, KiTKaT, Nea, pullox   |
|            6 |      798 | 2024-03-21 | Astralis W        | W   | 0.987      | 0.331        | 0.005 (0.001)    | 0.082 (0.027)    | 0 (0.000) |    13.10 | Ann4, D7, KiTKaT, Nea, pullox   |
|            5 |      979 | 2024-03-13 | ENCE Athena       | L   | 0.934      | -            | -                | -                | -         |   -14.55 | Ann4, D7, KiTKaT, Nea, pullox   |
|            4 |     1409 | 2024-02-24 | BIG EQUIPA        | L   | 0.812      | -            | -                | -                | -         |   -11.97 | Ann4, D7, KiTKaT, Nea, pullox   |
|            3 |     1647 | 2024-02-14 | Spirit fe         | W   | 0.748      | 0.143        | 0.008 (0.001)    | 0.123 (0.013)    | 0 (0.000) |    10.68 | Ann4, D7, KiTKaT, Nea, pullox   |
|            2 |     2085 | 2024-01-21 | Nemesis fe        | L   | 0.586      | -            | -                | -                | -         |   -10.87 | Ann4, D7, KiTKaT, kr4sy, pullox |
|            1 |     3849 | 2023-10-25 | G2 Oya            | L   | 0.000      | -            | -                | -                | -         |    -0.00 | Ann4, KiKi, KiTKaT, Nea, pullox |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,761.42)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-21 |      1.000 | $1,600.00      | $1,600.00       |
| 2024-01-21 |      0.586 | $250.00        | $146.57         |
| 2023-10-28 |      0.020 | $750.00        | $14.85          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
