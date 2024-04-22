### Roster Details<br />
Team Name: Johnny Speeds<br />
Roster: chawzyyy, draken, Lekr0, Ro1f, spooke<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [91](../standings_global.md)<br />
Regional Rank: [59]( ../standings_europe.md)<br />
Final Rank Value:  827.2<br />
<br />
Final Rank Value (827.2) = Starting Rank Value (771.3) + Head To Head Adjustments (55.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.410[<sup>1</sup>](#table2)
- Bounty Collected: 0.291[<sup>2</sup>](#table1)
- Opponent Network: 0.068[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.192<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 771.3
- 400 + ( ( 0.192 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 771.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      157 | 2024-04-18 | UNiTY      | W   | 1.000      | 0.333        | 0.047 (0.016)    | 0.261 (0.087)    | 0 (0.000) |    16.48 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           10 |      222 | 2024-04-16 | Viperio    | W   | 1.000      | 0.333        | 0.005 (0.002)    | 0.093 (0.031)    | 0 (0.000) |     9.30 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            9 |      468 | 2024-04-07 | Alliance   | W   | 1.000      | 0.330        | 0.020 (0.007)    | 0.855 (0.282)    | 0 (0.000) |    17.01 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|            8 |      476 | 2024-04-07 | Metizport  | L   | 1.000      | -            | -                | -                | -         |    -6.83 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|            7 |      486 | 2024-04-06 | JANO       | W   | 1.000      | 0.330        | 0.001 (0.000)    | 0.220 (0.073)    | 0 (0.000) |     9.17 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|            6 |     1087 | 2024-03-09 | Alliance   | L   | 0.905      | -            | -                | -                | -         |   -11.53 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            5 |     1188 | 2024-03-05 | B8         | L   | 0.880      | -            | -                | -                | -         |   -12.56 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            4 |     1194 | 2024-03-05 | Insilio    | W   | 0.880      | 0.143        | 0.007 (0.001)    | 0.483 (0.061)    | 0 (0.000) |    13.53 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            3 |     1201 | 2024-03-05 | Sashi      | W   | 0.879      | 0.143        | 0.064 (0.008)    | 1.000 (0.126)    | 0 (0.000) |    16.83 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            2 |     2583 | 2024-01-09 | Enterprise | L   | 0.506      | -            | -                | -                | -         |    -5.32 | chawzyyy, draken, HugoXD, RuStY, spooke   |
|            1 |     2605 | 2024-01-09 | UNiTY      | W   | 0.506      | 0.143        | 0.047 (0.003)    | 0.261 (0.019)    | 0 (0.000) |     9.76 | chawzyyy, draken, HugoXD, RuStY, spooke   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,940.00)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-18 |      1.000 | $6,000.00      | $6,000.00       |
| 2024-04-07 |      1.000 | $940.00        | $940.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
