### Roster Details<br />
Team Name: Mad Kings<br />
Roster: BabyRage, Knight, SJR, tor1towOw, zockie<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [218](../standings_global.md)<br />
Regional Rank: [72]( ../standings_americas.md)<br />
Final Rank Value:  512.5<br />
<br />
Final Rank Value (512.5) = Starting Rank Value (542.7) + Head To Head Adjustments (-30.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.210[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.063[<sup>2</sup>](#table1)

The average of these factors is 0.070<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 542.7
- 400 + ( ( 0.070 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 542.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |      201 | 2023-02-02 | Red Wolves   | L   | 1.000      | -            | -                | -                | -         |   -11.02 | BabyRage, Knight, SJR, tor1towOw, zockie    |
|           16 |      327 | 2023-01-28 | Villainous   | L   | 1.000      | -            | -                | -                | -         |   -13.27 | BabyRage, Knight, SJR, tor1towOw, zockie    |
|           15 |      426 | 2023-01-25 | Snakes Den   | L   | 1.000      | -            | -                | -                | -         |   -16.89 | BabyRage, Knight, SJR, tor1towOw, zockie    |
|           14 |      998 | 2022-12-09 | Disconnected | L   | 0.769      | -            | -                | -                | -         |   -12.30 | BabyRage, Knight, KOT3, Slayerhz, zockie    |
|           13 |     1264 | 2022-12-01 | 1 JIN        | W   | 0.716      | 0.384        | 0.006 (0.002)    | 0.192 (0.053)    | 0 (0.000) |    15.25 | BabyRage, Knight, KOT3, Slayerhz, zockie    |
|           12 |     1343 | 2022-11-28 | TeamOne      | L   | 0.696      | -            | -                | -                | -         |    -2.73 | BabyRage, Knight, KOT3, Slayerhz, zockie    |
|           11 |     1438 | 2022-11-25 | New Threat   | W   | 0.676      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.39 | BabyRage, Knight, KOT3, Slayerhz, zockie    |
|           10 |     2613 | 2022-09-25 | Meta         | L   | 0.267      | -            | -                | -                | -         |    -1.97 | BabyRage, Knight, KOT3, Slayerhz, zockie    |
|            9 |     2687 | 2022-09-23 | ex-Isurus    | L   | 0.254      | -            | -                | -                | -         |    -1.23 | BabyRage, Knight, KOT3, Slayerhz, zockie    |
|            8 |     2733 | 2022-09-22 | 9z Academy   | W   | 0.248      | 0.333        | 0.000 (0.000)    | 0.010 (0.001)    | 1 (0.248) |     3.66 | BabyRage, Knight, KOT3, Slayerhz, zockie    |
|            7 |     2738 | 2022-09-22 | DNG          | L   | 0.247      | -            | -                | -                | -         |    -1.89 | BabyRage, Knight, KOT3, Slayerhz, zockie    |
|            6 |     2810 | 2022-09-20 | Meta         | L   | 0.233      | -            | -                | -                | -         |    -1.62 | BabyRage, Knight, KOT3, Slayerhz, zockie    |
|            5 |     2825 | 2022-09-19 | 9z Academy   | W   | 0.228      | 0.333        | 0.000 (0.000)    | 0.010 (0.001)    | 1 (0.228) |     3.38 | BabyRage, Knight, KOT3, Slayerhz, zockie    |
|            4 |     2909 | 2022-09-16 | Fluxo        | L   | 0.207      | -            | -                | -                | -         |    -0.83 | BabyRage, Hezz, Knight, KOT3, zockie        |
|            3 |     2920 | 2022-09-16 | WINDINGO     | W   | 0.206      | 0.143        | 0.002 (0.000)    | 0.210 (0.006)    | 0 (0.000) |     4.37 | BabyRage, Knight, KOT3, Slayerhz, zockie    |
|            2 |     2948 | 2022-09-15 | 9z           | L   | 0.200      | -            | -                | -                | -         |    -0.78 | BabyRage, Knight, KOT3, Slayerhz, zockie    |
|            1 |     3274 | 2022-09-04 | Supremacy    | W   | 0.128      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.128) |     1.25 | BabyRage, ExtasY, Knight, Notjuanjo, zockie |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
