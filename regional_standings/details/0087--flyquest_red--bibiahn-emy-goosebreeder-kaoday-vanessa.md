### Roster Details<br />
Team Name: FlyQuest RED<br />
Roster: BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [87](../standings_global.md)<br />
Regional Rank: [20]( ../standings_americas.md)<br />
Final Rank Value:  843.3<br />
<br />
Final Rank Value (843.3) = Starting Rank Value (744.6) + Head To Head Adjustments (98.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.376[<sup>1</sup>](#table2)
- Bounty Collected: 0.293[<sup>2</sup>](#table1)
- Opponent Network: 0.054[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.181<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 744.6
- 400 + ( ( 0.181 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 744.6


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
|           14 |      367 | 2024-04-19 | Nouns fe         | W   | 1.000      | 0.322        | 0.008 (0.003)    | 0.119 (0.038)    | 0 (0.000) |     8.54 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|           13 |      544 | 2024-04-14 | Shimmer          | W   | 1.000      | 0.250        | 0.024 (0.006)    | 0.325 (0.081)    | 0 (0.000) |    11.84 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|           12 |      626 | 2024-04-10 | cleanup crew fe  | W   | 1.000      | 0.322        | 0.007 (0.002)    | 0.077 (0.025)    | 0 (0.000) |     8.13 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|           11 |      814 | 2024-04-04 | COVEN            | W   | 0.988      | -            | -                | -                | 0 (0.000) |     4.75 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|           10 |      964 | 2024-03-28 | WG Bandits       | W   | 0.942      | -            | -                | -                | 0 (0.000) |     7.88 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|            9 |     1113 | 2024-03-20 | Limitless Angels | W   | 0.889      | 0.322        | 0.011 (0.003)    | 0.159 (0.045)    | 0 (0.000) |    10.16 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|            8 |     1259 | 2024-03-13 | Karma            | W   | 0.842      | 0.322        | 0.010 (0.003)    | 0.209 (0.057)    | 0 (0.000) |     9.80 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|            7 |     1434 | 2024-03-06 | Shimmer          | W   | 0.796      | 0.322        | 0.024 (0.006)    | 0.325 (0.083)    | 0 (0.000) |     9.20 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|            6 |     1522 | 2024-03-03 | Shimmer          | W   | 0.775      | 0.250        | 0.024 (0.005)    | 0.325 (0.063)    | 0 (0.000) |     9.57 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|            5 |     1664 | 2024-02-25 | Shimmer          | W   | 0.728      | 0.250        | 0.024 (0.004)    | 0.325 (0.059)    | 0 (0.000) |     9.60 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|            4 |     2079 | 2024-02-04 | Shimmer          | W   | 0.588      | 0.250        | 0.024 (0.003)    | 0.325 (0.048)    | -         |     8.23 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|            3 |     2234 | 2024-01-28 | Shimmer          | W   | 0.541      | 0.250        | 0.024 (0.003)    | 0.325 (0.044)    | -         |     7.97 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa    |
|            2 |     3119 | 2023-12-09 | HSG fe           | L   | 0.204      | -            | -                | -                | -         |    -3.84 | BiBiAhn, GooseBreeder, Kaoday, madss, uhKelsie |
|            1 |     3138 | 2023-12-08 | Fluxo Demons     | L   | 0.198      | -            | -                | -                | -         |    -3.06 | BiBiAhn, GooseBreeder, Kaoday, madss, uhKelsie |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,574.67)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $750.00        | $750.00         |
| 2024-03-03 |      0.775 | $750.00        | $581.05         |
| 2024-02-25 |      0.728 | $750.00        | $546.04         |
| 2024-02-04 |      0.588 | $750.00        | $441.05         |
| 2024-01-28 |      0.541 | $750.00        | $406.04         |
| 2023-12-10 |      0.213 | $4,000.00      | $850.48         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
