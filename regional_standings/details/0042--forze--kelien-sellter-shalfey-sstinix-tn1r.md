### Roster Details<br />
Team Name: FORZE<br />
Roster: kelieN, SELLTER, shalfey, sstiNiX, tN1R<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [42](../standings_global.md)<br />
Regional Rank: [29]( ../standings_europe.md)<br />
Final Rank Value:  1031.0<br />
<br />
Final Rank Value (1031.0) = Starting Rank Value (957.2) + Head To Head Adjustments (73.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.539[<sup>1</sup>](#table2)
- Bounty Collected: 0.452[<sup>2</sup>](#table1)
- Opponent Network: 0.163[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.289<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 957.2
- 400 + ( ( 0.289 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 957.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |      280 | 2024-04-12 | BIG             | L   | 1.000      | -            | -                | -                | -         |    -8.38 | kelieN, SELLTER, shalfey, sstiNiX, tN1R   |
|           36 |      313 | 2024-04-11 | Aurora          | L   | 1.000      | -            | -                | -                | -         |    -7.33 | kelieN, SELLTER, shalfey, sstiNiX, tN1R   |
|           35 |      345 | 2024-04-10 | TSM             | W   | 1.000      | 0.500        | -                | 0.299 (0.150)    | 0 (0.000) |     6.28 | kelieN, SELLTER, shalfey, spirit, tN1R    |
|           34 |      397 | 2024-04-09 | brazylijski luz | W   | 1.000      | 0.500        | 0.019 (0.009)    | 0.356 (0.178)    | 0 (0.000) |     6.92 | kelieN, SELLTER, shalfey, spirit, tN1R    |
|           33 |      437 | 2024-04-08 | ENCE            | W   | 1.000      | 0.684        | 0.299 (0.205)    | 0.446 (0.305)    | 0 (0.000) |    26.75 | kelieN, SELLTER, shalfey, sstiNiX, tN1R   |
|           32 |      574 | 2024-04-03 | 3DMAX           | L   | 1.000      | -            | -                | -                | -         |   -15.17 | easy, kelieN, SELLTER, spirit, tN1R       |
|           31 |      678 | 2024-03-28 | Space           | W   | 1.000      | 0.500        | -                | 0.190 (0.095)    | 0 (0.000) |     4.76 | easy, r3salt, SELLTER, shalfey, tN1R      |
|           30 |      715 | 2024-03-27 | 500             | L   | 1.000      | -            | -                | -                | -         |   -26.03 | gokushima, r3salt, SELLTER, shalfey, tN1R |
|           29 |      746 | 2024-03-26 | Apeks           | W   | 1.000      | 0.500        | 0.193 (0.097)    | 0.687 (0.343)    | 0 (0.000) |    23.41 | gokushima, r3salt, SELLTER, shalfey, tN1R |
|           28 |      751 | 2024-03-25 | B8              | L   | 1.000      | -            | -                | -                | -         |   -22.44 | gokushima, r3salt, SELLTER, shalfey, tN1R |
|           27 |      756 | 2024-03-24 | BetBoom         | W   | 1.000      | 0.143        | 0.457 (0.065)    | 0.898 (0.128)    | 0 (0.000) |    22.35 | gokushima, r3salt, SELLTER, shalfey, tN1R |
|           26 |      768 | 2024-03-23 | VP.Prodigy      | W   | 0.999      | -            | -                | -                | 0 (0.000) |     4.81 | gokushima, r3salt, SELLTER, shalfey, tN1R |
|           25 |      782 | 2024-03-22 | ex-Preasy       | W   | 0.992      | 0.143        | 0.064 (0.009)    | -                | 0 (0.000) |     9.30 | gokushima, r3salt, SELLTER, shalfey, tN1R |
|           24 |      803 | 2024-03-21 | PARIVISION      | L   | 0.986      | -            | -                | -                | -         |   -25.21 | gokushima, r3salt, SELLTER, shalfey, tN1R |
|           23 |      829 | 2024-03-20 | NAVI Junior     | W   | 0.979      | -            | -                | -                | 0 (0.000) |     4.57 | gokushima, r3salt, SELLTER, shalfey, tN1R |
|           22 |     1185 | 2024-03-05 | KOI             | L   | 0.881      | -            | -                | -                | -         |   -12.68 | gokushima, r3salt, SELLTER, shalfey, tN1R |
|           21 |     1190 | 2024-03-05 | AMKAL           | W   | 0.880      | -            | -                | -                | 0 (0.000) |    13.42 | gokushima, r3salt, SELLTER, shalfey, tN1R |
|           20 |     1198 | 2024-03-05 | 3DMAX           | W   | 0.880      | 0.143        | -                | 0.801 (0.101)    | -         |    13.70 | gokushima, r3salt, SELLTER, shalfey, tN1R |
|           19 |     1280 | 2024-03-01 | Aurora          | L   | 0.854      | -            | -                | -                | -         |    -4.72 | gokushima, r3salt, SELLTER, shalfey, tN1R |
|           18 |     1294 | 2024-02-29 | 9 Pandas        | W   | 0.847      | 0.143        | 0.083 (0.010)    | -                | -         |    17.66 | gokushima, r3salt, SELLTER, shalfey, tN1R |
|           17 |     1307 | 2024-02-28 | KOI             | W   | 0.840      | 0.143        | -                | 0.902 (0.108)    | -         |    16.50 | gokushima, r3salt, SELLTER, shalfey, tN1R |
|           16 |     1313 | 2024-02-28 | Aurora          | W   | 0.839      | 0.143        | 0.763 (0.091)    | 1.000 (0.120)    | -         |    22.57 | gokushima, r3salt, SELLTER, shalfey, tN1R |
|           15 |     1327 | 2024-02-27 | V1dar           | W   | 0.833      | -            | -                | -                | -         |     2.41 | gokushima, r3salt, SELLTER, shalfey, tN1R |
|           14 |     1333 | 2024-02-27 | ARCRED          | W   | 0.833      | -            | -                | -                | -         |     4.48 | gokushima, r3salt, SELLTER, shalfey, tN1R |
|           13 |     1731 | 2024-02-09 | Sashi           | L   | 0.713      | -            | -                | -                | -         |   -12.81 | gokushima, r3salt, SELLTER, shalfey, tN1R |
|           12 |     1733 | 2024-02-09 | RUBY            | W   | 0.713      | -            | -                | -                | -         |     6.15 | gokushima, r3salt, SELLTER, shalfey, tN1R |
|           11 |     1744 | 2024-02-08 | BetBoom         | W   | 0.707      | 0.143        | 0.457 (0.046)    | -                | -         |    18.59 | gokushima, r3salt, SELLTER, shalfey, tN1R |
|           10 |     1748 | 2024-02-08 | Sashi           | L   | 0.706      | -            | -                | -                | -         |   -12.66 | gokushima, r3salt, SELLTER, shalfey, tN1R |
|            9 |     1918 | 2024-01-30 | Sashi           | L   | 0.647      | -            | -                | -                | -         |   -11.84 | gokushima, r3salt, shalfey, sstiNiX, tN1R |
|            8 |     1919 | 2024-01-30 | GUN5            | W   | 0.647      | -            | -                | -                | -         |     2.79 | gokushima, r3salt, shalfey, sstiNiX, tN1R |
|            7 |     2127 | 2024-01-20 | Preasy          | L   | 0.579      | -            | -                | -                | -         |    -7.18 | gokushima, kelieN, r3salt, shalfey, tN1R  |
|            6 |     2166 | 2024-01-19 | Aurora          | W   | 0.574      | 0.143        | 0.763 (0.063)    | -                | -         |    16.09 | gokushima, kelieN, r3salt, shalfey, tN1R  |
|            5 |     2225 | 2024-01-18 | ex-sYnck        | L   | 0.567      | -            | -                | -                | -         |   -13.65 | gokushima, kelieN, r3salt, shalfey, tN1R  |
|            4 |     2242 | 2024-01-18 | HEROIC          | L   | 0.566      | -            | -                | -                | -         |    -0.53 | gokushima, kelieN, r3salt, shalfey, tN1R  |
|            3 |     2770 | 2023-12-12 | ENCE            | L   | 0.318      | -            | -                | -                | -         |    -1.13 | gokushima, kelieN, r3salt, shalfey, tN1R  |
|            2 |     2779 | 2023-12-11 | SAW             | W   | 0.312      | 0.384        | 0.173 (0.021)    | 0.824 (0.099)    | -         |     8.16 | gokushima, kelieN, r3salt, shalfey, tN1R  |
|            1 |     2866 | 2023-12-07 | EYEBALLERS      | W   | 0.285      | -            | -                | -                | -         |     3.84 | gokushima, kelieN, r3salt, shalfey, tN1R  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($26,576.76)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $26,250.00     | $26,250.00      |
| 2023-12-13 |      0.327 | $1,000.00      | $326.76         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
