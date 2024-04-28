### Roster Details<br />
Team Name: Sashi<br />
Roster: alexsomfan, leakz, Ming0, n1xen, Ryxxo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [180](../standings_global.md)<br />
Regional Rank: [118]( ../standings_europe.md)<br />
Final Rank Value:  641.6<br />
<br />
Final Rank Value (641.6) = Starting Rank Value (649.5) + Head To Head Adjustments (-7.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.252[<sup>1</sup>](#table2)
- Bounty Collected: 0.192[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.041[<sup>2</sup>](#table1)

The average of these factors is 0.122<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 649.5
- 400 + ( ( 0.122 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 649.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |     1191 | 2022-12-04 | Astralis Talent | L   | 0.731      | -            | -                | -                | -         |    -4.36 | alexsomfan, leakz, Ming0, n1xen, Ryxxo  |
|           16 |     1235 | 2022-12-03 | Tricked         | L   | 0.724      | -            | -                | -                | -         |    -3.29 | alexsomfan, leakz, Ming0, n1xen, Ryxxo  |
|           15 |     2150 | 2022-10-15 | Tricked         | L   | 0.398      | -            | -                | -                | -         |    -1.64 | alexsomfan, Ming0, n1xen, Ryxxo, vester |
|           14 |     2162 | 2022-10-15 | struggletony    | W   | 0.397      | 0.314        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.397) |     2.44 | alexsomfan, Ming0, n1xen, Ryxxo, vester |
|           13 |     2166 | 2022-10-14 | Atlantic        | L   | 0.394      | -            | -                | -                | -         |    -5.69 | alexsomfan, haste, Ming0, Ryxxo, vester |
|           12 |     2298 | 2022-10-10 | SINNERS         | L   | 0.365      | -            | -                | -                | -         |    -1.41 | alexsomfan, leakz, Ming0, Ryxxo, vester |
|           11 |     2597 | 2022-09-26 | SKADE X         | W   | 0.272      | 0.384        | 0.002 (0.000)    | 0.084 (0.009)    | 0 (0.000) |     4.34 | alexsomfan, leakz, Ming0, Ryxxo, vester |
|           10 |     2815 | 2022-09-20 | ECSTATIC        | L   | 0.232      | -            | -                | -                | -         |    -1.62 | alexsomfan, leakz, Ming0, Ryxxo, vester |
|            9 |     3040 | 2022-09-13 | BLUEJAYS        | L   | 0.184      | -            | -                | -                | -         |    -0.46 | alexsomfan, leakz, Ming0, Ryxxo, vester |
|            8 |     3214 | 2022-09-08 | Tricked         | L   | 0.154      | -            | -                | -                | -         |    -0.63 | alexsomfan, leakz, Ming0, Ryxxo, vester |
|            7 |     3257 | 2022-09-06 | Hotspurs        | W   | 0.139      | 0.143        | 0.000 (0.000)    | 0.012 (0.000)    | 0 (0.000) |     1.31 | alexsomfan, leakz, Ming0, Ryxxo, vester |
|            6 |     3438 | 2022-08-30 | PROSPECTS       | W   | 0.092      | 0.143        | 0.032 (0.000)    | 0.689 (0.009)    | 0 (0.000) |     2.47 | alexsomfan, Ming0, Patti, Ryxxo, vester |
|            5 |     3504 | 2022-08-27 | GamerLegion     | L   | 0.073      | -            | -                | -                | -         |    -0.12 | alexsomfan, Ming0, Patti, Ryxxo, vester |
|            4 |     3526 | 2022-08-27 | Union88         | W   | 0.072      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.45 | alexsomfan, Ming0, Patti, Ryxxo, vester |
|            3 |     3626 | 2022-08-23 | Sangal          | L   | 0.046      | -            | -                | -                | -         |    -0.24 | alexsomfan, lund, Ming0, Ryxxo, vester  |
|            2 |     3634 | 2022-08-23 | KOVA            | W   | 0.045      | 0.143        | 0.001 (0.000)    | 0.003 (0.000)    | 0 (0.000) |     0.64 | alexsomfan, ANSG1, Ming0, Ryxxo, vester |
|            1 |     3719 | 2022-08-20 | Tricked         | L   | 0.026      | -            | -                | -                | -         |    -0.10 | alexsomfan, lund, Ming0, Ryxxo, vester  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($513.11)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
