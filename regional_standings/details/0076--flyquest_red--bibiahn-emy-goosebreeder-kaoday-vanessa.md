### Roster Details<br />
Team Name: FlyQuest RED<br />
Roster: BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [76](../standings_global.md)<br />
Regional Rank: [22]( ../standings_americas.md)<br />
Final Rank Value:  852.6<br />
<br />
Final Rank Value (852.6) = Starting Rank Value (751.6) + Head To Head Adjustments (101.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.377[<sup>1</sup>](#table2)
- Bounty Collected: 0.291[<sup>2</sup>](#table1)
- Opponent Network: 0.060[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.182<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 751.6
- 400 + ( ( 0.182 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 751.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |       71 | 2024-04-19 | Nouns fe         | W   | 1.000      | 0.322        | 0.007 (0.002)    | 0.134 (0.043)    | 0 (0.000) |     8.22 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|           15 |      248 | 2024-04-14 | Shimmer          | W   | 1.000      | 0.250        | 0.020 (0.005)    | 0.316 (0.079)    | 0 (0.000) |    11.45 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|           14 |      330 | 2024-04-10 | cleanup crew fe  | W   | 1.000      | 0.322        | 0.006 (0.002)    | 0.089 (0.029)    | 0 (0.000) |     7.76 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|           13 |      518 | 2024-04-04 | COVEN            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.47 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|           12 |      668 | 2024-03-28 | WG Bandits       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.89 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|           11 |      817 | 2024-03-20 | Limitless Angels | W   | 0.982      | 0.322        | 0.010 (0.003)    | 0.180 (0.057)    | 0 (0.000) |    10.87 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|           10 |      963 | 2024-03-13 | Karma            | W   | 0.935      | 0.322        | 0.009 (0.003)    | 0.229 (0.069)    | 0 (0.000) |    10.52 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|            9 |     1138 | 2024-03-06 | Shimmer          | W   | 0.889      | 0.322        | 0.020 (0.006)    | 0.316 (0.091)    | 0 (0.000) |     9.81 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|            8 |     1226 | 2024-03-03 | Shimmer          | W   | 0.868      | 0.250        | 0.020 (0.004)    | 0.316 (0.069)    | 0 (0.000) |    10.29 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|            7 |     1368 | 2024-02-25 | Shimmer          | W   | 0.821      | 0.250        | 0.020 (0.004)    | 0.316 (0.065)    | 0 (0.000) |    10.47 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|            6 |     1783 | 2024-02-04 | Shimmer          | W   | 0.681      | 0.250        | 0.020 (0.003)    | 0.316 (0.054)    | -         |     9.30 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|            5 |     1938 | 2024-01-28 | Shimmer          | W   | 0.635      | 0.250        | 0.020 (0.003)    | 0.316 (0.050)    | -         |     9.19 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|            4 |     2823 | 2023-12-09 | HSG fe           | L   | 0.298      | -            | -                | -                | -         |    -5.45 | BiBiAhn, GooseBreeder, Kaoday, madss, uhKelsie |
|            3 |     2842 | 2023-12-08 | Fluxo Demons     | L   | 0.291      | -            | -                | -                | -         |    -4.28 | BiBiAhn, GooseBreeder, Kaoday, madss, uhKelsie |
|            2 |     3691 | 2023-10-29 | Cherry Bombs     | W   | 0.028      | -            | -                | -                | -         |     0.17 | BiBiAhn, GooseBreeder, Kaoday, madss, uhKelsie |
|            1 |     3736 | 2023-10-28 | Shimmer          | W   | 0.022      | -            | -                | -                | -         |     0.31 | BiBiAhn, GooseBreeder, Kaoday, madss, uhKelsie |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,227.81)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $750.00        | $750.00         |
| 2024-03-03 |      0.868 | $750.00        | $651.03         |
| 2024-02-25 |      0.821 | $750.00        | $616.02         |
| 2024-02-04 |      0.681 | $750.00        | $511.03         |
| 2024-01-28 |      0.635 | $750.00        | $476.02         |
| 2023-12-10 |      0.306 | $4,000.00      | $1,223.70       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
