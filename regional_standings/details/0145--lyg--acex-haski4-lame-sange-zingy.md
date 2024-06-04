### Roster Details<br />
Team Name: LYG<br />
Roster: AceX, Haski4, lame, Sange, ZinGY<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [145](../standings_global.md)<br />
Regional Rank: [96]( ../standings_europe.md)<br />
Final Rank Value:  673.7<br />
<br />
Final Rank Value (673.7) = Starting Rank Value (662.7) + Head To Head Adjustments (10.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.253[<sup>1</sup>](#table2)
- Bounty Collected: 0.277[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.135<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 662.7
- 400 + ( ( 0.135 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 662.7


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
|           10 |     1147 | 2024-04-17 | NKT         | L   | 0.917      | -            | -                | -                | -         |   -21.54 | AceX, Haski4, lame, Sange, ZinGY      |
|            9 |     1546 | 2024-04-03 | TheMongolz  | L   | 0.823      | -            | -                | -                | -         |    -0.45 | AceX, Haski4, lame, Sange, ZinGY      |
|            8 |     1573 | 2024-04-02 | Lynn Vision | L   | 0.818      | -            | -                | -                | -         |    -3.33 | AceX, Haski4, lame, Sange, ZinGY      |
|            7 |     1578 | 2024-04-02 | TheMongolz  | W   | 0.817      | 0.143        | 0.176 (0.021)    | 0.583 (0.068)    | 0 (0.000) |    25.35 | AceX, Haski4, lame, Sange, ZinGY      |
|            6 |     1938 | 2024-03-13 | TYLOO       | W   | 0.684      | 0.143        | 0.042 (0.004)    | 0.330 (0.032)    | 0 (0.000) |    16.82 | AceX, Haski4, lame, Sange, ZinGY      |
|            5 |     1943 | 2024-03-13 | The Huns    | W   | 0.684      | 0.143        | 0.000 (0.000)    | 0.119 (0.012)    | 0 (0.000) |     9.52 | AceX, Haski4, lame, Sange, ZinGY      |
|            4 |     2521 | 2024-02-16 | Arcade      | L   | 0.515      | -            | -                | -                | -         |    -7.65 | AceX, Haski4, lame, Sange, ZinGY      |
|            3 |     2961 | 2024-01-24 | Wings Up    | L   | 0.358      | -            | -                | -                | -         |    -8.00 | AceX, Haski4, lame, Sange, ZinGY      |
|            2 |     3845 | 2023-12-06 | TheMongolz  | L   | 0.031      | -            | -                | -                | -         |    -0.01 | 910, bLitz, mzinho, Senzu, Techno     |
|            1 |     3875 | 2023-12-05 | Clutch      | W   | 0.024      | 0.416        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.22 | clouden, flame, hasteka, IMAGINE, IZR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($336.34)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-02-17 |      0.521 | $500.00        | $260.57         |
| 2023-12-10 |      0.058 | $1,300.00      | $75.76          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
