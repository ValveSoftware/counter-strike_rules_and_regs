### Roster Details<br />
Team Name: LYG<br />
Roster: DeFFeN, Haski4, lame, Sange, ZinGY<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [150](../standings_global.md)<br />
Regional Rank: [98]( ../standings_europe.md)<br />
Final Rank Value:  700.4<br />
<br />
Final Rank Value (700.4) = Starting Rank Value (724.3) + Head To Head Adjustments (-23.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.303[<sup>1</sup>](#table2)
- Bounty Collected: 0.337[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.163<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 724.3
- 400 + ( ( 0.163 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 724.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      306 | 2024-06-05 | Clutch      | L   | 1.000      | -            | -                | -                | -         |   -16.73 | DeFFeN, Haski4, lame, Sange, ZinGY |
|            9 |      351 | 2024-06-04 | TYLOO       | L   | 1.000      | -            | -                | -                | -         |   -10.83 | DeFFeN, Haski4, lame, Sange, ZinGY |
|            8 |     1647 | 2024-04-17 | NKT         | L   | 0.838      | -            | -                | -                | -         |   -20.83 | AceX, Haski4, lame, Sange, ZinGY   |
|            7 |     2046 | 2024-04-03 | The MongolZ | L   | 0.744      | -            | -                | -                | -         |    -0.06 | AceX, Haski4, lame, Sange, ZinGY   |
|            6 |     2073 | 2024-04-02 | Lynn Vision | L   | 0.739      | -            | -                | -                | -         |    -1.68 | AceX, Haski4, lame, Sange, ZinGY   |
|            5 |     2078 | 2024-04-02 | The MongolZ | W   | 0.738      | 0.143        | 0.978 (0.103)    | 0.738 (0.078)    | 0 (0.000) |    23.19 | AceX, Haski4, lame, Sange, ZinGY   |
|            4 |     2438 | 2024-03-13 | TYLOO       | W   | 0.605      | 0.143        | 0.050 (0.004)    | 0.273 (0.024)    | 0 (0.000) |    12.25 | AceX, Haski4, lame, Sange, ZinGY   |
|            3 |     2443 | 2024-03-13 | The Huns    | W   | 0.604      | 0.143        | 0.000 (0.000)    | 0.087 (0.007)    | 0 (0.000) |     5.26 | AceX, Haski4, lame, Sange, ZinGY   |
|            2 |     3021 | 2024-02-16 | Arcade      | L   | 0.436      | -            | -                | -                | -         |    -7.63 | AceX, Haski4, lame, Sange, ZinGY   |
|            1 |     3461 | 2024-01-24 | Wings Up    | L   | 0.278      | -            | -                | -                | -         |    -6.79 | AceX, Haski4, lame, Sange, ZinGY   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,520.99)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $1,300.00      | $1,300.00       |
| 2024-02-17 |      0.442 | $500.00        | $220.99         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
