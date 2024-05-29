### Roster Details<br />
Team Name: FlyQuest RED<br />
Roster: BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [93](../standings_global.md)<br />
Regional Rank: [22]( ../standings_americas.md)<br />
Final Rank Value:  832.6<br />
<br />
Final Rank Value (832.6) = Starting Rank Value (726.7) + Head To Head Adjustments (105.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.359[<sup>1</sup>](#table2)
- Bounty Collected: 0.272[<sup>2</sup>](#table1)
- Opponent Network: 0.043[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.168<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 726.7
- 400 + ( ( 0.168 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 726.7


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
|           16 |       63 | 2024-05-26 | TSM Shimmer      | W   | 1.000      | 0.303        | 0.014 (0.004)    | 0.268 (0.081)    | 0 (0.000) |    12.11 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|           15 |       67 | 2024-05-26 | Limitless Angels | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.10 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|           14 |     1018 | 2024-04-19 | Nouns fe         | W   | 0.934      | 0.322        | 0.004 (0.001)    | 0.092 (0.028)    | 0 (0.000) |     8.31 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|           13 |     1195 | 2024-04-14 | TSM Shimmer      | W   | 0.901      | 0.250        | 0.014 (0.003)    | 0.268 (0.060)    | 0 (0.000) |    11.06 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|           12 |     1277 | 2024-04-10 | cleanup crew fe  | W   | 0.874      | -            | -                | -                | 0 (0.000) |     7.57 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|           11 |     1465 | 2024-04-04 | COVEN            | W   | 0.834      | -            | -                | -                | 0 (0.000) |     4.46 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|           10 |     1615 | 2024-03-28 | WG Bandits       | W   | 0.788      | -            | -                | -                | 0 (0.000) |     7.01 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|            9 |     1764 | 2024-03-20 | Limitless Angels | W   | 0.735      | 0.322        | 0.005 (0.001)    | 0.124 (0.029)    | 0 (0.000) |     8.50 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|            8 |     1910 | 2024-03-13 | Karma            | W   | 0.688      | 0.322        | 0.007 (0.002)    | 0.168 (0.037)    | 0 (0.000) |     8.21 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|            7 |     2085 | 2024-03-06 | TSM Shimmer      | W   | 0.642      | 0.322        | 0.014 (0.003)    | 0.268 (0.055)    | 0 (0.000) |     7.80 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|            6 |     2173 | 2024-03-03 | TSM Shimmer      | W   | 0.621      | 0.250        | 0.014 (0.002)    | 0.268 (0.042)    | -         |     7.96 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|            5 |     2315 | 2024-02-25 | TSM Shimmer      | W   | 0.574      | 0.250        | 0.014 (0.002)    | 0.268 (0.038)    | -         |     7.75 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|            4 |     2730 | 2024-02-04 | TSM Shimmer      | W   | 0.434      | 0.250        | 0.014 (0.001)    | 0.268 (0.029)    | -         |     6.13 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|            3 |     2885 | 2024-01-28 | TSM Shimmer      | W   | 0.387      | 0.250        | 0.014 (0.001)    | 0.268 (0.026)    | -         |     5.67 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|            2 |     3770 | 2023-12-09 | HSG fe           | L   | 0.050      | -            | -                | -                | -         |    -1.02 | BiBiAhn, GooseBreeder, Kaoday, madss, uhKelsie |
|            1 |     3789 | 2023-12-08 | Fluxo Demons     | L   | 0.044      | -            | -                | -                | -         |    -0.78 | BiBiAhn, GooseBreeder, Kaoday, madss, uhKelsie |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,921.45)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      1.000 | $2,500.00      | $2,500.00       |
| 2024-04-14 |      0.901 | $750.00        | $675.43         |
| 2024-03-03 |      0.621 | $750.00        | $465.48         |
| 2024-02-25 |      0.574 | $750.00        | $430.47         |
| 2024-02-04 |      0.434 | $750.00        | $325.48         |
| 2024-01-28 |      0.387 | $750.00        | $290.47         |
| 2023-12-10 |      0.059 | $4,000.00      | $234.11         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
