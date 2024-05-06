### Roster Details<br />
Team Name: GUILD fe<br />
Roster: Ann4, D7, KiTKaT, Nea, pullox<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [147](../standings_global.md)<br />
Regional Rank: [97]( ../standings_europe.md)<br />
Final Rank Value:  703.9<br />
<br />
Final Rank Value (703.9) = Starting Rank Value (701.1) + Head To Head Adjustments (2.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.336[<sup>1</sup>](#table2)
- Bounty Collected: 0.267[<sup>2</sup>](#table1)
- Opponent Network: 0.029[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.158<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 701.1
- 400 + ( ( 0.158 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 701.1


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
|           11 |      315 | 2024-04-21 | Fearless Cheetahs | W   | 1.000      | 0.331        | 0.030 (0.010)    | 0.192 (0.064)    | 0 (0.000) |    18.59 | Ann4, D7, KiTKaT, Nea, pullox   |
|           10 |      345 | 2024-04-20 | Let Her Cook      | L   | 1.000      | -            | -                | -                | -         |   -16.45 | Ann4, D7, KiTKaT, Nea, pullox   |
|            9 |      388 | 2024-04-19 | Pigeons           | L   | 1.000      | -            | -                | -                | -         |    -7.67 | Ann4, D7, KiTKaT, Nea, pullox   |
|            8 |      645 | 2024-04-10 | NIP Impact        | W   | 1.000      | 0.331        | 0.011 (0.004)    | 0.266 (0.088)    | 0 (0.000) |    18.54 | Ann4, D7, KiTKaT, Nea, pullox   |
|            7 |      783 | 2024-04-06 | NIP Impact        | L   | 0.998      | -            | -                | -                | -         |   -13.80 | Ann4, D7, KiTKaT, Nea, pullox   |
|            6 |      968 | 2024-03-28 | BIG EQUIPA        | W   | 0.940      | 0.331        | 0.006 (0.002)    | 0.334 (0.104)    | 0 (0.000) |    15.63 | Ann4, D7, KiTKaT, Nea, pullox   |
|            5 |     1094 | 2024-03-21 | Astralis W        | W   | 0.893      | 0.331        | 0.005 (0.002)    | 0.075 (0.022)    | 0 (0.000) |    11.97 | Ann4, D7, KiTKaT, Nea, pullox   |
|            4 |     1275 | 2024-03-13 | ENCE Athena       | L   | 0.840      | -            | -                | -                | -         |   -13.16 | Ann4, D7, KiTKaT, Nea, pullox   |
|            3 |     1705 | 2024-02-24 | BIG EQUIPA        | L   | 0.719      | -            | -                | -                | -         |   -11.10 | Ann4, D7, KiTKaT, Nea, pullox   |
|            2 |     1943 | 2024-02-14 | Spirit fe         | W   | 0.654      | 0.143        | 0.010 (0.001)    | 0.105 (0.010)    | 0 (0.000) |     9.50 | Ann4, D7, KiTKaT, Nea, pullox   |
|            1 |     2381 | 2024-01-21 | Nemesis fe        | L   | 0.493      | -            | -                | -                | -         |    -9.21 | Ann4, D7, KiTKaT, kr4sy, pullox |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,723.25)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-21 |      1.000 | $1,600.00      | $1,600.00       |
| 2024-01-21 |      0.493 | $250.00        | $123.25         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
