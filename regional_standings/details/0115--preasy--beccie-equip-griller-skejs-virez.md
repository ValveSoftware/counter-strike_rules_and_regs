### Roster Details<br />
Team Name: Preasy<br />
Roster: Beccie, Equip, Griller, Skejs, VireZ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [115](../standings_global.md)<br />
Regional Rank: [78]( ../standings_europe.md)<br />
Final Rank Value:  750.7<br />
<br />
Final Rank Value (750.7) = Starting Rank Value (769.7) + Head To Head Adjustments (-19.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.303[<sup>2</sup>](#table1)
- Opponent Network: 0.036[<sup>2</sup>](#table1)
- LAN Wins: 0.102[<sup>2</sup>](#table1)

The average of these factors is 0.190<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 769.7
- 400 + ( ( 0.190 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 769.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |       35 | 2024-05-28 | Permitta        | L   | 1.000      | -            | -                | -                | -         |   -11.07 | Beccie, Equip, Griller, Skejs, VireZ   |
|            9 |       75 | 2024-05-26 | Johnny Speeds   | L   | 1.000      | -            | -                | -                | -         |    -7.50 | Beccie, Equip, Griller, Skejs, VireZ   |
|            8 |      169 | 2024-05-22 | ECLOT           | W   | 1.000      | 0.371        | 0.084 (0.031)    | 0.530 (0.196)    | 0 (0.000) |    25.25 | Beccie, Equip, Griller, Skejs, VireZ   |
|            7 |      432 | 2024-05-15 | ECF             | L   | 1.000      | -            | -                | -                | -         |   -10.13 | Beccie, Equip, Griller, Skejs, VireZ   |
|            6 |      482 | 2024-05-14 | Zero Tenacity   | L   | 1.000      | -            | -                | -                | -         |    -6.51 | AcilioN, Beccie, Equip, Griller, VireZ |
|            5 |      532 | 2024-05-12 | Johnny Speeds   | W   | 1.000      | 0.333        | 0.057 (0.019)    | 0.492 (0.164)    | 0 (0.000) |    24.02 | Beccie, Equip, Griller, Skejs, VireZ   |
|            4 |      566 | 2024-05-11 | Passion UA      | L   | 1.000      | -            | -                | -                | -         |    -7.72 | Beccie, Equip, Griller, Skejs, VireZ   |
|            3 |      845 | 2024-04-27 | 777             | L   | 0.985      | -            | -                | -                | -         |   -17.30 | Beccie, Equip, Griller, Skejs, VireZ   |
|            2 |      977 | 2024-04-21 | Astralis Talent | L   | 0.943      | -            | -                | -                | -         |   -13.88 | Beccie, Equip, Griller, Skejs, VireZ   |
|            1 |      984 | 2024-04-20 | Sashi Academy   | W   | 0.940      | 0.318        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.940) |     5.80 | Beccie, Equip, Griller, Skejs, VireZ   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,283.87)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-16 |      1.000 | $1,500.00      | $1,500.00       |
| 2024-04-27 |      0.986 | $795.00        | $783.87         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
