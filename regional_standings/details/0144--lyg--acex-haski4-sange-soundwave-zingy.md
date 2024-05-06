### Roster Details<br />
Team Name: LYG<br />
Roster: AceX, Haski4, Sange, Soundwave, ZinGY<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [144](../standings_global.md)<br />
Regional Rank: [95]( ../standings_europe.md)<br />
Final Rank Value:  707.0<br />
<br />
Final Rank Value (707.0) = Starting Rank Value (689.5) + Head To Head Adjustments (17.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.292[<sup>1</sup>](#table2)
- Bounty Collected: 0.300[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 689.5
- 400 + ( ( 0.152 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 689.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      496 | 2024-04-17 | NKT         | L   | 1.000      | -            | -                | -                | -         |   -24.28 | AceX, Haski4, Sange, Soundwave, ZinGY |
|           10 |      895 | 2024-04-03 | TheMongolz  | L   | 0.977      | -            | -                | -                | -         |    -0.74 | AceX, Haski4, Sange, Soundwave, ZinGY |
|            9 |      922 | 2024-04-02 | Lynn Vision | L   | 0.972      | -            | -                | -                | -         |    -2.75 | AceX, Haski4, Sange, Soundwave, ZinGY |
|            8 |      927 | 2024-04-02 | TheMongolz  | W   | 0.971      | 0.143        | 0.253 (0.035)    | 0.595 (0.082)    | 0 (0.000) |    29.96 | AceX, Haski4, Sange, Soundwave, ZinGY |
|            7 |     1287 | 2024-03-13 | TYLOO       | W   | 0.838      | 0.143        | 0.093 (0.011)    | 0.436 (0.052)    | 0 (0.000) |    21.52 | AceX, Haski4, Sange, Soundwave, ZinGY |
|            6 |     1292 | 2024-03-13 | The Huns    | W   | 0.838      | 0.143        | 0.001 (0.000)    | 0.184 (0.022)    | 0 (0.000) |    12.83 | AceX, Haski4, Sange, Soundwave, ZinGY |
|            5 |     1870 | 2024-02-16 | VexX        | L   | 0.669      | -            | -                | -                | -         |   -10.37 | AceX, Haski4, Sange, Soundwave, ZinGY |
|            4 |     2310 | 2024-01-24 | Wings Up    | L   | 0.512      | -            | -                | -                | -         |    -9.34 | AceX, Haski4, Sange, Soundwave, ZinGY |
|            3 |     3194 | 2023-12-06 | TheMongolz  | L   | 0.185      | -            | -                | -                | -         |    -0.09 | 910, bLitz, mzinho, Senzu, Techno     |
|            2 |     3224 | 2023-12-05 | Clutch      | W   | 0.178      | 0.416        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.57 | clouden, flame, hasteka, IMAGINE, IZR |
|            1 |     3581 | 2023-11-16 | Newhappy    | L   | 0.051      | -            | -                | -                | -         |    -0.81 | AceX, Haski4, Sange, Soundwave, zeins |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($613.70)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-02-17 |      0.675 | $500.00        | $337.62         |
| 2023-12-10 |      0.212 | $1,300.00      | $276.08         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
