### Roster Details<br />
Team Name: Shimmer<br />
Roster: abby, empathy, Lx, madss, phoebe<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [120](../standings_global.md)<br />
Regional Rank: [29]( ../standings_americas.md)<br />
Final Rank Value:  752.6<br />
<br />
Final Rank Value (752.6) = Starting Rank Value (720.8) + Head To Head Adjustments (31.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.381[<sup>1</sup>](#table2)
- Bounty Collected: 0.269[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.168<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 720.8
- 400 + ( ( 0.168 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 720.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |       12 | 2024-05-05 | Limitless Angels | W   | 1.000      | 0.250        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.88 | abby, empathy, Lx, madss, phoebe     |
|           19 |      366 | 2024-04-19 | Limitless Angels | W   | 1.000      | 0.322        | 0.011 (0.004)    | 0.159 (0.051)    | 0 (0.000) |    13.12 | abby, empathy, Lx, madss, phoebe     |
|           18 |      544 | 2024-04-14 | FlyQuest RED     | L   | 1.000      | -            | -                | -                | -         |   -11.84 | abby, empathy, Lx, madss, phoebe     |
|           17 |      593 | 2024-04-11 | COVEN            | W   | 1.000      | 0.322        | 0.006 (0.002)    | 0.000 (0.000)    | 0 (0.000) |     6.50 | abby, empathy, Lx, madss, phoebe     |
|           16 |      758 | 2024-04-07 | Limitless Angels | W   | 1.000      | 0.250        | 0.011 (0.003)    | 0.159 (0.040)    | 0 (0.000) |    13.35 | abby, empathy, Lx, madss, phoebe     |
|           15 |      857 | 2024-04-03 | WG Bandits       | W   | 0.981      | 0.322        | 0.007 (0.002)    | 0.073 (0.023)    | 0 (0.000) |    11.08 | abby, empathy, Lx, madss, phoebe     |
|           14 |      988 | 2024-03-27 | cleanup crew fe  | W   | 0.935      | 0.322        | 0.007 (0.002)    | 0.077 (0.023)    | 0 (0.000) |    12.62 | abby, empathy, Lx, madss, phoebe     |
|           13 |     1085 | 2024-03-21 | Karma            | W   | 0.895      | 0.322        | 0.010 (0.003)    | 0.209 (0.060)    | 0 (0.000) |    13.55 | abby, empathy, Lx, madss, phoebe     |
|           12 |     1225 | 2024-03-14 | Nouns fe         | W   | 0.849      | 0.322        | 0.008 (0.002)    | 0.119 (0.032)    | 0 (0.000) |    13.47 | abby, empathy, Lx, madss, phoebe     |
|           11 |     1434 | 2024-03-06 | FlyQuest RED     | L   | 0.796      | -            | -                | -                | -         |    -9.20 | abby, empathy, Lx, madss, phoebe     |
|           10 |     1522 | 2024-03-03 | FlyQuest RED     | L   | 0.775      | -            | -                | -                | -         |    -9.57 | abby, empathy, Lx, madss, phoebe     |
|            9 |     1664 | 2024-02-25 | FlyQuest RED     | L   | 0.728      | -            | -                | -                | -         |    -9.60 | abby, empathy, Lx, madss, phoebe     |
|            8 |     2079 | 2024-02-04 | FlyQuest RED     | L   | 0.588      | -            | -                | -                | -         |    -8.23 | abby, empathy, Lx, madss, phoebe     |
|            7 |     2234 | 2024-01-28 | FlyQuest RED     | L   | 0.541      | -            | -                | -                | -         |    -7.97 | abby, empathy, Lx, madss, phoebe     |
|            6 |     2371 | 2024-01-21 | NA savers        | W   | 0.495      | 0.250        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.82 | abby, empathy, Lx, phoebe, raynee    |
|            5 |     2660 | 2024-01-15 | NRG              | L   | 0.455      | -            | -                | -                | -         |    -5.79 | abby, chigen, empathy, Lx, phoebe    |
|            4 |     2965 | 2023-12-17 | Limitless Angels | W   | 0.262      | 0.250        | 0.011 (0.001)    | 0.159 (0.010)    | 0 (0.000) |     3.71 | chigen, empathy, Lx, phoebe, vanessa |
|            3 |     3128 | 2023-12-08 | FURIA fe         | L   | 0.200      | -            | -                | -                | -         |    -3.00 | Aidy, Bouchard, empathy, Lx, phoebe  |
|            2 |     3131 | 2023-12-08 | NAVI Javelins    | L   | 0.199      | -            | -                | -                | -         |    -2.31 | Aidy, Bouchard, empathy, Lx, phoebe  |
|            1 |     3237 | 2023-12-03 | Nouns fe         | W   | 0.168      | -            | -                | -                | -         |     1.21 | abby, Bouchard, empathy, Lx, phoebe  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,825.93)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-05 |      1.000 | $750.00        | $750.00         |
| 2024-04-14 |      1.000 | $250.00        | $250.00         |
| 2024-04-07 |      1.000 | $750.00        | $750.00         |
| 2024-03-03 |      0.775 | $250.00        | $193.68         |
| 2024-02-25 |      0.728 | $250.00        | $182.01         |
| 2024-02-04 |      0.588 | $250.00        | $147.02         |
| 2024-01-28 |      0.541 | $250.00        | $135.35         |
| 2024-01-21 |      0.495 | $750.00        | $371.03         |
| 2023-12-17 |      0.262 | $750.00        | $196.36         |
| 2023-12-10 |      0.213 | $4,000.00      | $850.48         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
