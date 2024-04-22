### Roster Details<br />
Team Name: Sashi<br />
Roster: Fessor, n1Xen, nut nut, PR1mE, Speedy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [151](../standings_global.md)<br />
Regional Rank: [101]( ../standings_europe.md)<br />
Final Rank Value:  692.6<br />
<br />
Final Rank Value (692.6) = Starting Rank Value (717.7) + Head To Head Adjustments (-25.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.361[<sup>1</sup>](#table2)
- Bounty Collected: 0.236[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.054[<sup>2</sup>](#table1)

The average of these factors is 0.164<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 717.7
- 400 + ( ( 0.164 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 717.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     1818 | 2024-02-03 | showmakerz      | L   | 0.673      | -            | -                | -                | -         |   -15.89 | Fessor, n1Xen, nut nut, PR1mE, Speedy |
|           13 |     2640 | 2023-12-20 | NAVI Junior     | L   | 0.373      | -            | -                | -                | -         |    -5.61 | Fessor, n1Xen, nut nut, PR1mE, Speedy |
|           12 |     2643 | 2023-12-20 | PGE Turow       | W   | 0.372      | 0.333        | 0.014 (0.002)    | 0.108 (0.013)    | 0 (0.000) |     5.98 | Fessor, n1Xen, nut nut, PR1mE, Speedy |
|           11 |     2659 | 2023-12-18 | showmakerz      | L   | 0.359      | -            | -                | -                | -         |    -8.59 | Fessor, n1Xen, nut nut, PR1mE, Speedy |
|           10 |     2662 | 2023-12-18 | ARCRED          | L   | 0.358      | -            | -                | -                | -         |    -5.85 | Fessor, n1Xen, nut nut, PR1mE, Speedy |
|            9 |     2694 | 2023-12-17 | ex-Anonymo      | L   | 0.351      | -            | -                | -                | -         |    -4.80 | Fessor, n1Xen, nut nut, PR1mE, Speedy |
|            8 |     2965 | 2023-12-02 | CEPTER          | W   | 0.254      | 0.341        | 0.004 (0.000)    | 0.012 (0.001)    | 1 (0.254) |     2.99 | aizy, n1Xen, nut nut, PR1mE, Speedy   |
|            7 |     2975 | 2023-12-02 | Astralis Talent | W   | 0.252      | 0.341        | 0.028 (0.002)    | 0.224 (0.019)    | 1 (0.252) |     5.34 | aizy, n1Xen, nut nut, PR1mE, Speedy   |
|            6 |     3027 | 2023-11-29 | NOM             | W   | 0.231      | 0.303        | 0.003 (0.000)    | 0.044 (0.003)    | 0 (0.000) |     3.19 | aizy, n1Xen, nut nut, PR1mE, Speedy   |
|            5 |     3036 | 2023-11-28 | brazylijski luz | W   | 0.225      | 0.303        | 0.019 (0.001)    | 0.356 (0.024)    | 0 (0.000) |     4.35 | aizy, n1Xen, nut nut, PR1mE, Speedy   |
|            4 |     3043 | 2023-11-27 | NOM             | L   | 0.218      | -            | -                | -                | -         |    -3.87 | aizy, n1Xen, nut nut, PR1mE, Speedy   |
|            3 |     3307 | 2023-11-15 | PERA            | L   | 0.140      | -            | -                | -                | -         |    -1.89 | aizy, n1Xen, nut nut, PR1mE, Speedy   |
|            2 |     3792 | 2023-10-27 | Sprout          | L   | 0.012      | -            | -                | -                | -         |    -0.30 | aizy, n1Xen, nut nut, PR1mE, Speedy   |
|            1 |     3818 | 2023-10-26 | GenOne          | L   | 0.006      | -            | -                | -                | -         |    -0.11 | aizy, J3nsyy, nut nut, PR1mE, Speedy  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,234.59)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-02 |      0.254 | $9,555.00      | $2,425.87       |
| 2023-11-29 |      0.231 | $3,500.00      | $808.72         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
