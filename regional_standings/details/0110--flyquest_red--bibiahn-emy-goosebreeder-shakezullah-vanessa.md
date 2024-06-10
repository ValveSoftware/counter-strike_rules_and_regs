### Roster Details<br />
Team Name: FlyQuest RED<br />
Roster: BiBiAhn, Emy, GooseBreeder, Shakezullah, vanessa<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [110](../standings_global.md)<br />
Regional Rank: [24]( ../standings_americas.md)<br />
Final Rank Value:  811.3<br />
<br />
Final Rank Value (811.3) = Starting Rank Value (755.4) + Head To Head Adjustments (55.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.391[<sup>1</sup>](#table2)
- Bounty Collected: 0.285[<sup>2</sup>](#table1)
- Opponent Network: 0.037[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.178<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 755.4
- 400 + ( ( 0.178 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 755.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |      212 | 2024-06-06 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -8.17 | BiBiAhn, Emy, GooseBreeder, Shakezullah, vanessa |
|           16 |      421 | 2024-06-01 | HSG fe           | L   | 1.000      | -            | -                | -                | -         |   -13.75 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           15 |      458 | 2024-05-31 | BIG EQUIPA       | L   | 1.000      | -            | -                | -                | -         |   -16.04 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           14 |      563 | 2024-05-26 | TSM Shimmer      | W   | 1.000      | 0.303        | 0.025 (0.008)    | 0.269 (0.082)    | 0 (0.000) |    12.08 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           13 |      567 | 2024-05-26 | Limitless Angels | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.80 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           12 |     1518 | 2024-04-19 | Nouns fe         | W   | 0.855      | 0.322        | 0.004 (0.001)    | 0.077 (0.021)    | 0 (0.000) |     7.20 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           11 |     1695 | 2024-04-14 | TSM Shimmer      | W   | 0.821      | 0.250        | 0.025 (0.005)    | 0.269 (0.055)    | 0 (0.000) |    10.10 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           10 |     1777 | 2024-04-10 | cleanup crew fe  | W   | 0.795      | -            | -                | -                | 0 (0.000) |     6.52 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            9 |     1965 | 2024-04-04 | COVEN            | W   | 0.755      | -            | -                | -                | 0 (0.000) |     3.78 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            8 |     2115 | 2024-03-28 | WG Bandits       | W   | 0.708      | -            | -                | -                | 0 (0.000) |     5.92 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            7 |     2264 | 2024-03-20 | Limitless Angels | W   | 0.655      | 0.322        | 0.005 (0.001)    | 0.104 (0.022)    | 0 (0.000) |     7.03 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            6 |     2410 | 2024-03-13 | Karma            | W   | 0.608      | 0.322        | 0.006 (0.001)    | 0.142 (0.028)    | 0 (0.000) |     6.72 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            5 |     2585 | 2024-03-06 | TSM Shimmer      | W   | 0.563      | 0.322        | 0.025 (0.005)    | 0.269 (0.049)    | 0 (0.000) |     6.86 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            4 |     2673 | 2024-03-03 | TSM Shimmer      | W   | 0.541      | 0.250        | 0.025 (0.003)    | 0.269 (0.036)    | -         |     6.92 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            3 |     2815 | 2024-02-25 | TSM Shimmer      | W   | 0.495      | 0.250        | 0.025 (0.003)    | 0.269 (0.033)    | -         |     6.61 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            2 |     3230 | 2024-02-04 | TSM Shimmer      | W   | 0.355      | 0.250        | 0.025 (0.002)    | 0.269 (0.024)    | -         |     4.92 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            1 |     3385 | 2024-01-28 | TSM Shimmer      | W   | 0.308      | 0.250        | 0.025 (0.002)    | 0.269 (0.021)    | -         |     4.39 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,390.45)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-05-26 |      1.000 | $2,500.00      | $2,500.00       |
| 2024-04-14 |      0.821 | $750.00        | $616.05         |
| 2024-03-03 |      0.541 | $750.00        | $406.11         |
| 2024-02-25 |      0.495 | $750.00        | $371.09         |
| 2024-02-04 |      0.355 | $750.00        | $266.10         |
| 2024-01-28 |      0.308 | $750.00        | $231.10         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
