### Roster Details<br />
Team Name: LYG<br />
Roster: AceX, Haski4, Sange, Soundwave, ZinGY<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [146](../standings_global.md)<br />
Regional Rank: [98]( ../standings_europe.md)<br />
Final Rank Value:  704.2<br />
<br />
Final Rank Value (704.2) = Starting Rank Value (693.2) + Head To Head Adjustments (11.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.295[<sup>1</sup>](#table2)
- Bounty Collected: 0.297[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 693.2
- 400 + ( ( 0.152 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 693.2


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
|           11 |      200 | 2024-04-17 | NKT         | L   | 1.000      | -            | -                | -                | -         |   -24.13 | AceX, Haski4, Sange, Soundwave, ZinGY |
|           10 |      599 | 2024-04-03 | TheMongolz  | L   | 1.000      | -            | -                | -                | -         |    -1.21 | AceX, Haski4, Sange, Soundwave, ZinGY |
|            9 |      626 | 2024-04-02 | Lynn Vision | L   | 1.000      | -            | -                | -                | -         |    -2.74 | AceX, Haski4, Sange, Soundwave, ZinGY |
|            8 |      631 | 2024-04-02 | TheMongolz  | W   | 1.000      | 0.143        | 0.247 (0.035)    | 0.587 (0.084)    | 0 (0.000) |    30.46 | AceX, Haski4, Sange, Soundwave, ZinGY |
|            7 |      991 | 2024-03-13 | TYLOO       | W   | 0.932      | 0.143        | 0.055 (0.007)    | 0.490 (0.065)    | 0 (0.000) |    22.35 | AceX, Haski4, Sange, Soundwave, ZinGY |
|            6 |      996 | 2024-03-13 | The Huns    | W   | 0.931      | 0.143        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.83 | AceX, Haski4, Sange, Soundwave, ZinGY |
|            5 |     1574 | 2024-02-16 | VexX        | L   | 0.763      | -            | -                | -                | -         |   -12.02 | AceX, Haski4, Sange, Soundwave, ZinGY |
|            4 |     2014 | 2024-01-24 | Wings Up    | L   | 0.605      | -            | -                | -                | -         |   -10.50 | AceX, Haski4, Sange, Soundwave, ZinGY |
|            3 |     2898 | 2023-12-06 | TheMongolz  | L   | 0.278      | -            | -                | -                | -         |    -0.24 | 910, bLitz, mzinho, Senzu, Techno     |
|            2 |     2928 | 2023-12-05 | Clutch      | W   | 0.272      | 0.416        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.41 | clouden, flame, hasteka, IMAGINE, IZR |
|            1 |     3285 | 2023-11-16 | Newhappy    | L   | 0.144      | -            | -                | -                | -         |    -2.21 | AceX, Haski4, Sange, Soundwave, zeins |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($781.66)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-02-17 |      0.769 | $500.00        | $384.27         |
| 2023-12-10 |      0.306 | $1,300.00      | $397.38         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
