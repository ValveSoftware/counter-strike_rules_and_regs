### Roster Details<br />
Team Name: EYEBALLERS<br />
Roster: Golden, HEAP, JW, Peppzor, Sapec<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [94](../standings_global.md)<br />
Regional Rank: [64]( ../standings_europe.md)<br />
Final Rank Value:  830.9<br />
<br />
Final Rank Value (830.9) = Starting Rank Value (869.8) + Head To Head Adjustments (-39.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.326[<sup>1</sup>](#table2)
- Bounty Collected: 0.371[<sup>2</sup>](#table1)
- Opponent Network: 0.269[<sup>2</sup>](#table1)
- LAN Wins: 0.002[<sup>2</sup>](#table1)

The average of these factors is 0.242<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 869.8
- 400 + ( ( 0.242 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 869.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           53 |      203 | 2024-05-21 | PERA            | L   | 1.000      | -            | -                | -                | -         |   -12.87 | Golden, HEAP, JW, Peppzor, Sapec |
|           52 |      206 | 2024-05-21 | DMS             | L   | 1.000      | -            | -                | -                | -         |   -18.54 | Golden, HEAP, JW, Peppzor, Sapec |
|           51 |      245 | 2024-05-20 | B8              | L   | 1.000      | -            | -                | -                | -         |    -5.51 | Golden, HEAP, JW, Peppzor, Sapec |
|           50 |      329 | 2024-05-17 | ALTERNATE aTTaX | W   | 1.000      | 0.435        | 0.048 (0.021)    | 0.650 (0.282)    | 0 (0.000) |    17.56 | Golden, HEAP, JW, Peppzor, Sapec |
|           49 |      378 | 2024-05-16 | MASONIC         | L   | 1.000      | -            | -                | -                | -         |   -16.13 | Golden, HEAP, JW, Peppzor, Sapec |
|           48 |      409 | 2024-05-15 | Permitta        | W   | 1.000      | 0.435        | 0.025 (0.011)    | 1.000 (0.435)    | 0 (0.000) |    15.52 | Golden, HEAP, JW, Peppzor, Sapec |
|           47 |      422 | 2024-05-15 | 9INE            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.21 | Golden, HEAP, JW, Peppzor, Sapec |
|           46 |      426 | 2024-05-15 | Rhyno           | L   | 1.000      | -            | -                | -                | -         |   -13.44 | Golden, HEAP, JW, Peppzor, Sapec |
|           45 |      467 | 2024-05-14 | Space           | L   | 1.000      | -            | -                | -                | -         |   -17.58 | Golden, HEAP, JW, Peppzor, Sapec |
|           44 |      501 | 2024-05-13 | Zero Tenacity   | L   | 1.000      | -            | -                | -                | -         |   -11.32 | Golden, HEAP, JW, Peppzor, Sapec |
|           43 |      574 | 2024-05-10 | Metizport       | L   | 1.000      | -            | -                | -                | -         |   -10.16 | Golden, HEAP, JW, Peppzor, Sapec |
|           42 |      703 | 2024-05-03 | Zero Tenacity   | W   | 1.000      | 0.435        | 0.147 (0.064)    | 1.000 (0.435)    | 0 (0.000) |    19.66 | Golden, HEAP, JW, Peppzor, Sapec |
|           41 |      736 | 2024-05-02 | RUSH B          | W   | 1.000      | 0.435        | -                | 0.242 (0.105)    | 0 (0.000) |    11.12 | Golden, HEAP, JW, Peppzor, Sapec |
|           40 |      757 | 2024-05-01 | BetBoom         | L   | 1.000      | -            | -                | -                | -         |    -2.21 | Golden, HEAP, JW, Peppzor, Sapec |
|           39 |      774 | 2024-04-30 | Enterprise      | W   | 1.000      | 0.435        | -                | 0.524 (0.228)    | 0 (0.000) |    14.43 | Golden, HEAP, JW, Peppzor, Sapec |
|           38 |      782 | 2024-04-30 | HAVU            | L   | 1.000      | -            | -                | -                | -         |   -22.02 | Golden, HEAP, JW, Peppzor, Sapec |
|           37 |      796 | 2024-04-29 | ex-Guild Eagles | W   | 0.999      | 0.435        | 0.014 (0.006)    | 0.552 (0.240)    | 0 (0.000) |    18.57 | Golden, HEAP, JW, Peppzor, Sapec |
|           36 |      854 | 2024-04-27 | Illuminar       | W   | 0.984      | -            | -                | -                | 0 (0.000) |     5.74 | Golden, HEAP, JW, Peppzor, Sapec |
|           35 |      894 | 2024-04-25 | HAVU            | W   | 0.972      | -            | -                | -                | -         |     8.74 | Golden, HEAP, JW, Peppzor, Sapec |
|           34 |      901 | 2024-04-25 | Zero Tenacity   | W   | 0.971      | 0.384        | 0.147 (0.055)    | 1.000 (0.373)    | -         |    20.61 | Golden, HEAP, JW, Peppzor, Sapec |
|           33 |      931 | 2024-04-23 | Insilio         | L   | 0.959      | -            | -                | -                | -         |   -11.63 | Golden, HEAP, JW, Peppzor, Sapec |
|           32 |      951 | 2024-04-22 | MOUZ NXT        | L   | 0.952      | -            | -                | -                | -         |    -7.66 | Golden, HEAP, JW, Peppzor, Sapec |
|           31 |      990 | 2024-04-20 | PERA            | W   | 0.939      | 0.500        | 0.027 (0.012)    | 0.408 (0.192)    | -         |    15.57 | Golden, HEAP, JW, Peppzor, Sapec |
|           30 |     1087 | 2024-04-18 | DMS             | L   | 0.925      | -            | -                | -                | -         |   -20.69 | Golden, HEAP, JW, Peppzor, Sapec |
|           29 |     1151 | 2024-04-17 | Endpoint        | L   | 0.917      | -            | -                | -                | -         |   -13.98 | Golden, HEAP, JW, Peppzor, Sapec |
|           28 |     1313 | 2024-04-10 | Permitta        | L   | 0.870      | -            | -                | -                | -         |   -11.94 | Golden, HEAP, JW, Peppzor, Sapec |
|           27 |     1414 | 2024-04-07 | Metizport       | L   | 0.852      | -            | -                | -                | -         |    -7.66 | Golden, HEAP, JW, Peppzor, Sapec |
|           26 |     1418 | 2024-04-07 | Alliance        | W   | 0.851      | 0.330        | -                | 0.617 (0.173)    | -         |    11.94 | Golden, HEAP, JW, Peppzor, Sapec |
|           25 |     1430 | 2024-04-06 | Onliners5       | W   | 0.845      | -            | -                | -                | -         |     4.70 | Golden, HEAP, JW, Peppzor, Sapec |
|           24 |     1482 | 2024-04-04 | Sangal          | L   | 0.833      | -            | -                | -                | -         |    -8.92 | Golden, HEAP, JW, Peppzor, Sapec |
|           23 |     1526 | 2024-04-03 | 9 Pandas        | L   | 0.826      | -            | -                | -                | -         |    -4.58 | Golden, HEAP, JW, Peppzor, Sapec |
|           22 |     1536 | 2024-04-03 | BIG             | L   | 0.824      | -            | -                | -                | -         |    -1.62 | Golden, HEAP, JW, Peppzor, Sapec |
|           21 |     1627 | 2024-03-28 | KOI             | W   | 0.785      | 0.500        | 0.025 (0.010)    | 0.570 (0.224)    | -         |    16.64 | Golden, HEAP, JW, Peppzor, Sapec |
|           20 |     1889 | 2024-03-14 | TSM             | L   | 0.693      | -            | -                | -                | -         |   -14.33 | flusha, HEAP, JW, Peppzor, Sapec |
|           19 |     2008 | 2024-03-10 | Alliance        | L   | 0.665      | -            | -                | -                | -         |   -11.64 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           18 |     2031 | 2024-03-09 | Metizport       | W   | 0.658      | 0.143        | 0.088 (0.008)    | -                | -         |    13.90 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           17 |     2035 | 2024-03-09 | Onliners5       | W   | 0.658      | -            | -                | -                | -         |     3.63 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           16 |     2098 | 2024-03-06 | 9INE            | W   | 0.640      | -            | -                | -                | -         |     2.50 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           15 |     2792 | 2024-02-02 | Metizport       | L   | 0.420      | -            | -                | -                | -         |    -4.80 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           14 |     2797 | 2024-02-02 | Sashi           | W   | 0.419      | 0.143        | 0.157 (0.009)    | -                | -         |     9.31 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           13 |     3118 | 2024-01-19 | Entropiq        | L   | 0.326      | -            | -                | -                | -         |    -8.32 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           12 |     3177 | 2024-01-18 | PERA            | L   | 0.319      | -            | -                | -                | -         |    -5.02 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           11 |     3197 | 2024-01-18 | MOUZ            | L   | 0.318      | -            | -                | -                | -         |    -0.02 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           10 |     3263 | 2024-01-16 | The Witchers    | W   | 0.308      | -            | -                | -                | -         |     2.58 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|            9 |     3287 | 2024-01-16 | Sashi           | W   | 0.306      | 0.143        | 0.157 (0.007)    | -                | -         |     6.87 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|            8 |     3300 | 2024-01-16 | PARIVISION      | W   | 0.306      | -            | -                | -                | -         |     5.57 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|            7 |     3420 | 2024-01-12 | Insilio         | L   | 0.280      | -            | -                | -                | -         |    -4.39 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|            6 |     3804 | 2023-12-07 | Apeks           | L   | 0.039      | -            | -                | -                | -         |    -0.20 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|            5 |     3813 | 2023-12-07 | FORZE           | L   | 0.038      | -            | -                | -                | -         |    -0.89 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|            4 |     3830 | 2023-12-06 | ENCE            | W   | 0.033      | -            | -                | -                | -         |     0.97 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|            3 |     3871 | 2023-12-05 | Sashi           | W   | 0.025      | -            | -                | -                | -         |     0.56 | flusha, HEAP, JW, Sapec, SHiNE   |
|            2 |     3892 | 2023-12-03 | GODSENT         | W   | 0.013      | -            | -                | -                | 1 (0.013) |     0.09 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|            1 |     3921 | 2023-12-02 | Alliance        | W   | 0.005      | -            | -                | -                | 1 (0.005) |     0.07 | HEAP, JW, Peppzor, Sapec, SHiNE  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,591.67)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-07 |      0.852 | $2,350.00      | $2,002.86       |
| 2023-12-10 |      0.059 | $5,000.00      | $296.88         |
| 2023-12-03 |      0.013 | $22,864.00     | $291.93         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
