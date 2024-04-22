### Roster Details<br />
Team Name: GamerLegion<br />
Roster: acoR, isak, Keoz, Snax, volt<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [18](../standings_global.md)<br />
Regional Rank: [12]( ../standings_europe.md)<br />
Final Rank Value:  1303.9<br />
<br />
Final Rank Value (1303.9) = Starting Rank Value (1364.5) + Head To Head Adjustments (-60.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.577[<sup>1</sup>](#table2)
- Bounty Collected: 0.465[<sup>2</sup>](#table1)
- Opponent Network: 0.127[<sup>2</sup>](#table1)
- LAN Wins: 0.828[<sup>2</sup>](#table1)

The average of these factors is 0.499<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1364.5
- 400 + ( ( 0.499 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1364.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |      830 | 2024-03-20 | Imperial     | L   | 0.979      | -            | -                | -                | -         |    -5.89 | acoR, isak, Keoz, Snax, volt |
|           31 |      848 | 2024-03-19 | Eternal Fire | L   | 0.972      | -            | -                | -                | -         |    -4.49 | acoR, isak, Keoz, Snax, volt |
|           30 |      858 | 2024-03-18 | Legacy       | W   | 0.965      | 0.143        | 0.055 (0.008)    | 0.501 (0.069)    | 1 (0.965) |     7.68 | acoR, isak, Keoz, Snax, volt |
|           29 |      867 | 2024-03-17 | SAW          | L   | 0.961      | -            | -                | -                | -         |   -15.16 | acoR, isak, Keoz, Snax, volt |
|           28 |      883 | 2024-03-17 | AMKAL        | W   | 0.959      | 0.143        | 0.051 (0.007)    | 0.703 (0.096)    | 1 (0.959) |     4.55 | acoR, isak, Keoz, Snax, volt |
|           27 |     1099 | 2024-03-08 | BIG          | L   | 0.900      | -            | -                | -                | -         |   -18.71 | acoR, isak, Keoz, Snax, volt |
|           26 |     1406 | 2024-02-24 | 9 Pandas     | L   | 0.813      | -            | -                | -                | -         |   -20.08 | acoR, isak, Keoz, Snax, volt |
|           25 |     1415 | 2024-02-24 | Guild Eagles | W   | 0.811      | 0.143        | 0.046 (0.005)    | 0.727 (0.084)    | 1 (0.811) |     3.63 | acoR, isak, Keoz, Snax, volt |
|           24 |     1421 | 2024-02-23 | fnatic       | W   | 0.806      | 0.143        | 0.240 (0.028)    | 0.624 (0.072)    | 1 (0.806) |     4.24 | acoR, isak, Keoz, Snax, volt |
|           23 |     1439 | 2024-02-22 | HEROIC       | L   | 0.799      | -            | -                | -                | -         |    -5.62 | acoR, isak, Keoz, Snax, volt |
|           22 |     1465 | 2024-02-21 | OG           | W   | 0.792      | 0.143        | 0.497 (0.056)    | 0.553 (0.063)    | 1 (0.792) |     9.74 | acoR, isak, Keoz, Snax, volt |
|           21 |     1496 | 2024-02-20 | ENCE         | L   | 0.785      | -            | -                | -                | -         |   -11.44 | acoR, isak, Keoz, Snax, volt |
|           20 |     1518 | 2024-02-19 | PERA         | W   | 0.779      | -            | -                | -                | 1 (0.779) |     1.49 | acoR, isak, Keoz, Snax, volt |
|           19 |     1527 | 2024-02-19 | Vitality     | L   | 0.778      | -            | -                | -                | -         |    -2.00 | acoR, isak, Keoz, Snax, volt |
|           18 |     1769 | 2024-02-06 | HEROIC       | L   | 0.692      | -            | -                | -                | -         |    -5.04 | acoR, isak, Keoz, Snax, volt |
|           17 |     1775 | 2024-02-05 | MOUZ         | L   | 0.686      | -            | -                | -                | -         |    -1.41 | acoR, isak, Keoz, Snax, volt |
|           16 |     1801 | 2024-02-04 | Monte        | W   | 0.678      | 1.000        | 0.236 (0.160)    | 0.598 (0.405)    | 1 (0.678) |     6.32 | acoR, isak, Keoz, Snax, volt |
|           15 |     1887 | 2024-02-01 | Virtus.pro   | W   | 0.659      | 0.143        | 0.530 (0.050)    | 0.605 (0.057)    | 1 (0.659) |    17.61 | acoR, isak, Keoz, Snax, volt |
|           14 |     1901 | 2024-01-31 | M80          | W   | 0.653      | 0.143        | 0.087 (0.008)    | -                | 1 (0.653) |     2.80 | acoR, isak, Keoz, Snax, volt |
|           13 |     1969 | 2024-01-26 | FaZe         | L   | 0.620      | -            | -                | -                | -         |    -0.50 | acoR, isak, Keoz, Snax, volt |
|           12 |     1997 | 2024-01-25 | Liquid       | L   | 0.611      | -            | -                | -                | -         |   -12.46 | acoR, isak, Keoz, Snax, volt |
|           11 |     2015 | 2024-01-24 | FaZe         | W   | 0.605      | 0.581        | 1.000 (0.351)    | 0.737 (0.259)    | 1 (0.605) |    18.59 | acoR, isak, Keoz, Snax, volt |
|           10 |     2727 | 2023-12-15 | Complexity   | L   | 0.342      | -            | -                | -                | -         |    -4.60 | acoR, aNdu, isak, Keoz, Snax |
|            9 |     2742 | 2023-12-15 | Apeks        | L   | 0.340      | -            | -                | -                | -         |    -6.76 | acoR, aNdu, isak, Keoz, Snax |
|            8 |     2886 | 2023-12-06 | BetBoom      | L   | 0.280      | -            | -                | -                | -         |    -5.73 | acoR, isak, Keoz, Snax, volt |
|            7 |     2930 | 2023-12-05 | Cloud9       | L   | 0.271      | -            | -                | -                | -         |    -1.06 | acoR, isak, Keoz, Snax, volt |
|            6 |     2992 | 2023-12-01 | ENCE         | L   | 0.246      | -            | -                | -                | -         |    -7.42 | acoR, isak, Keoz, Snax, volt |
|            5 |     3020 | 2023-11-29 | HAVU         | L   | 0.233      | -            | -                | -                | -         |    -7.00 | acoR, isak, Keoz, Snax, volt |
|            4 |     3024 | 2023-11-29 | fnatic       | W   | 0.231      | 0.589        | 0.240 (0.033)    | 0.624 (0.085)    | -         |     1.21 | acoR, isak, Keoz, Snax, volt |
|            3 |     3080 | 2023-11-25 | Virtus.pro   | L   | 0.205      | -            | -                | -                | -         |    -1.15 | acoR, isak, Keoz, Snax, volt |
|            2 |     3085 | 2023-11-24 | 3DMAX        | W   | 0.201      | 0.500        | -                | 0.801 (0.080)    | -         |     0.81 | acoR, isak, Keoz, Snax, volt |
|            1 |     3097 | 2023-11-24 | MIBR         | L   | 0.199      | -            | -                | -                | -         |    -2.76 | acoR, isak, Keoz, Snax, volt |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($35,320.89)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.19) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-20 |      0.980 | $10,000.00     | $9,798.45       |
| 2024-03-10 |      0.914 | $5,000.00      | $4,569.46       |
| 2024-02-11 |      0.726 | $16,000.00     | $11,623.14      |
| 2024-01-28 |      0.633 | $8,500.00      | $5,382.35       |
| 2023-12-17 |      0.354 | $2,000.00      | $708.62         |
| 2023-12-03 |      0.260 | $10,000.00     | $2,599.00       |
| 2023-11-26 |      0.213 | $3,000.00      | $639.88         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
