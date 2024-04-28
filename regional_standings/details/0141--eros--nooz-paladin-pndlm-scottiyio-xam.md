### Roster Details<br />
Team Name: Eros<br />
Roster: nooz, PALADIN, PNDLM, Scottiyio, xam<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [141](../standings_global.md)<br />
Regional Rank: [39]( ../standings_americas.md)<br />
Final Rank Value:  728.8<br />
<br />
Final Rank Value (728.8) = Starting Rank Value (701.8) + Head To Head Adjustments (27.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.311[<sup>1</sup>](#table2)
- Bounty Collected: 0.246[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.147<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 701.8
- 400 + ( ( 0.147 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 701.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |       92 | 2023-02-07 | Strife         | L   | 1.000      | -            | -                | -                | -         |   -12.44 | nooz, PALADIN, PNDLM, Scottiyio, xam   |
|           13 |      139 | 2023-02-05 | Limitless      | W   | 1.000      | 0.384        | 0.007 (0.003)    | 0.287 (0.110)    | 0 (0.000) |    15.03 | nooz, PALADIN, PNDLM, Scottiyio, xam   |
|           12 |      360 | 2023-01-27 | Noxious        | W   | 1.000      | 0.384        | 0.006 (0.002)    | 0.180 (0.069)    | 0 (0.000) |    12.20 | nooz, PALADIN, PNDLM, Scottiyio, xam   |
|           11 |      463 | 2023-01-24 | Cartel terraza | W   | 1.000      | 0.384        | 0.002 (0.001)    | 0.113 (0.043)    | 0 (0.000) |    12.25 | nooz, PALADIN, PNDLM, Scottiyio, xam   |
|           10 |      882 | 2022-12-14 | Limitless      | L   | 0.803      | -            | -                | -                | -         |   -11.01 | Millz, mirth, nooz, PNDLM, Scottiyio   |
|            9 |      902 | 2022-12-13 | 1 JIN          | W   | 0.796      | 0.371        | 0.006 (0.002)    | 0.192 (0.057)    | 0 (0.000) |    11.88 | Millz, mirth, nooz, PNDLM, Scottiyio   |
|            8 |      923 | 2022-12-12 | EX CINERE      | W   | 0.790      | 0.371        | 0.002 (0.001)    | 0.064 (0.019)    | 0 (0.000) |    11.10 | Millz, mirth, nooz, PNDLM, Scottiyio   |
|            7 |      966 | 2022-12-10 | Limitless      | L   | 0.776      | -            | -                | -                | -         |   -10.14 | Millz, mirth, nooz, PNDLM, Scottiyio   |
|            6 |     1023 | 2022-12-08 | Orion          | W   | 0.763      | 0.371        | 0.001 (0.000)    | 0.090 (0.025)    | 0 (0.000) |     9.63 | Millz, mirth, nooz, PNDLM, Scottiyio   |
|            5 |     2272 | 2022-10-11 | X13            | L   | 0.376      | -            | -                | -                | -         |    -6.58 | Millz, nooz, PALADIN, PNDLM, Scottiyio |
|            4 |     2507 | 2022-09-29 | Snakes Den     | L   | 0.296      | -            | -                | -                | -         |    -5.41 | Millz, nooz, PALADIN, PNDLM, Scottiyio |
|            3 |     2568 | 2022-09-27 | Earlybirds     | W   | 0.282      | 0.371        | 0.001 (0.000)    | 0.011 (0.001)    | 0 (0.000) |     3.45 | Millz, nooz, PALADIN, PNDLM, Scottiyio |
|            2 |     2604 | 2022-09-25 | New Threat     | W   | 0.269      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.34 | Millz, nooz, PALADIN, PNDLM, Scottiyio |
|            1 |     2729 | 2022-09-22 | X13            | L   | 0.249      | -            | -                | -                | -         |    -4.32 | Millz, nooz, PALADIN, PNDLM, Scottiyio |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,899.08)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-15 |      0.810 | $3,000.00      | $2,429.38       |
| 2022-10-11 |      0.376 | $1,250.00      | $469.70         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
