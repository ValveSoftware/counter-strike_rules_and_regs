### Roster Details<br />
Team Name: BIG Academy<br />
Roster: ArroW, prosus, s1n, skyye, tiziaN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [67](../standings_global.md)<br />
Regional Rank: [49]( ../standings_europe.md)<br />
Final Rank Value:  898.8<br />
<br />
Final Rank Value (898.8) = Starting Rank Value (1038.1) + Head To Head Adjustments (-139.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.371[<sup>1</sup>](#table2)
- Bounty Collected: 0.282[<sup>2</sup>](#table1)
- Opponent Network: 0.053[<sup>2</sup>](#table1)
- LAN Wins: 0.541[<sup>2</sup>](#table1)

The average of these factors is 0.312<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1038.1
- 400 + ( ( 0.312 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1038.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |       66 | 2023-02-09 | Endpoint        | L   | 1.000      | -            | -                | -                | -         |   -13.84 | ArroW, prosus, s1n, skyye, tiziaN  |
|           41 |      168 | 2023-02-04 | PROSPECTS       | L   | 1.000      | -            | -                | -                | -         |   -18.57 | ArroW, hyped, prosus, s1n, skyye   |
|           40 |      212 | 2023-02-02 | Metizport       | W   | 1.000      | -            | -                | -                | -         |     1.53 | ArroW, hyped, prosus, s1n, skyye   |
|           39 |      289 | 2023-01-30 | PGE Turow       | W   | 1.000      | -            | -                | -                | -         |     2.90 | ArroW, hyped, prosus, s1n, skyye   |
|           38 |      478 | 2023-01-24 | ECSTATIC        | L   | 1.000      | -            | -                | -                | -         |   -18.69 | ArroW, hyped, prosus, s1n, skyye   |
|           37 |      568 | 2023-01-20 | Spirit Academy  | L   | 1.000      | -            | -                | -                | -         |   -18.85 | ArroW, hyped, prosus, s1n, skyye   |
|           36 |      600 | 2023-01-19 | Monte           | L   | 1.000      | -            | -                | -                | -         |   -13.34 | ArroW, hyped, prosus, s1n, skyye   |
|           35 |      602 | 2023-01-19 | Falcons         | L   | 1.000      | -            | -                | -                | -         |   -16.76 | ArroW, hyped, prosus, s1n, skyye   |
|           34 |      669 | 2023-01-16 | GTZ             | W   | 1.000      | 0.143        | -                | 0.195 (0.028)    | -         |     6.34 | ArroW, hyped, prosus, s1n, skyye   |
|           33 |      777 | 2022-12-18 | Sprout          | W   | 0.826      | 0.345        | 0.006 (0.002)    | 0.062 (0.018)    | 1 (0.826) |     5.00 | hyped, Krimbo, prosus, s1n, skyye  |
|           32 |      995 | 2022-12-10 | BLUEJAYS        | L   | 0.770      | -            | -                | -                | -         |   -11.09 | hyped, Krimbo, prosus, s1n, skyye  |
|           31 |     1021 | 2022-12-09 | Indonesia       | W   | 0.764      | -            | -                | -                | 1 (0.764) |     1.09 | hyped, Krimbo, prosus, s1n, skyye  |
|           30 |     1025 | 2022-12-08 | IHC             | L   | 0.762      | -            | -                | -                | -         |    -3.87 | hyped, Krimbo, prosus, s1n, skyye  |
|           29 |     1092 | 2022-12-07 | Algeria         | W   | 0.751      | -            | -                | -                | 1 (0.751) |     0.81 | hyped, Krimbo, prosus, s1n, skyye  |
|           28 |     1156 | 2022-12-04 | farfaraway      | W   | 0.736      | 0.143        | 0.033 (0.003)    | -                | 1 (0.736) |    10.70 | hyped, Krimbo, prosus, s1n, skyye  |
|           27 |     1186 | 2022-12-04 | VOYVODA         | W   | 0.731      | 0.143        | -                | 0.319 (0.033)    | 1 (0.731) |     2.34 | hyped, Krimbo, prosus, s1n, skyye  |
|           26 |     1202 | 2022-12-03 | Spain           | W   | 0.729      | -            | -                | -                | 1 (0.729) |     0.85 | hyped, Krimbo, prosus, s1n, skyye  |
|           25 |     1427 | 2022-11-26 | Sprout          | W   | 0.679      | 0.143        | 0.006 (0.001)    | -                | -         |     4.04 | hyped, Krimbo, prosus, s1n, skyye  |
|           24 |     1823 | 2022-10-28 | Young Ninjas    | L   | 0.486      | -            | -                | -                | -         |    -8.55 | Aqua, hyped, prosus, skyye, tiziaN |
|           23 |     1848 | 2022-10-27 | Astralis Talent | L   | 0.479      | -            | -                | -                | -         |    -9.05 | Aqua, hyped, prosus, skyye, tiziaN |
|           22 |     1869 | 2022-10-26 | PROSPECTS       | L   | 0.472      | -            | -                | -                | -         |    -8.54 | Aqua, hyped, prosus, skyye, tiziaN |
|           21 |     1903 | 2022-10-24 | ENCE Academy    | W   | 0.460      | 0.500        | 0.010 (0.002)    | 0.239 (0.055)    | -         |     2.81 | Aqua, hyped, prosus, skyye, tiziaN |
|           20 |     2059 | 2022-10-18 | Spirit Academy  | L   | 0.420      | -            | -                | -                | -         |    -9.30 | Aqua, hyped, prosus, skyye, tiziaN |
|           19 |     2091 | 2022-10-17 | ENCE Academy    | L   | 0.412      | -            | -                | -                | -         |   -10.69 | Aqua, hyped, prosus, skyye, tiziaN |
|           18 |     2117 | 2022-10-16 | MIBR Academy    | W   | 0.405      | -            | -                | -                | -         |     0.81 | Aqua, hyped, prosus, skyye, tiziaN |
|           17 |     2123 | 2022-10-16 | Spirit Academy  | W   | 0.405      | 0.500        | 0.032 (0.006)    | 0.447 (0.090)    | -         |     3.64 | Aqua, hyped, prosus, skyye, tiziaN |
|           16 |     2136 | 2022-10-15 | Astralis Talent | L   | 0.399      | -            | -                | -                | -         |    -8.35 | Aqua, hyped, prosus, skyye, tiziaN |
|           15 |     2176 | 2022-10-14 | PROSPECTS       | W   | 0.393      | 0.500        | 0.032 (0.006)    | 0.689 (0.136)    | -         |     5.14 | Aqua, hyped, prosus, skyye, tiziaN |
|           14 |     2224 | 2022-10-13 | Young Ninjas    | L   | 0.385      | -            | -                | -                | -         |    -7.58 | Aqua, hyped, prosus, skyye, tiziaN |
|           13 |     2259 | 2022-10-12 | MIBR Academy    | W   | 0.379      | -            | -                | -                | -         |     0.75 | Aqua, hyped, prosus, skyye, tiziaN |
|           12 |     2621 | 2022-09-25 | eSuba           | L   | 0.267      | -            | -                | -                | -         |    -5.34 | Aqua, hyped, prosus, s1n, skyye    |
|           11 |     2711 | 2022-09-23 | FTW             | W   | 0.253      | 0.435        | 0.026 (0.003)    | 0.300 (0.033)    | -         |     2.38 | Aqua, hyped, prosus, s1n, skyye    |
|           10 |     2792 | 2022-09-21 | MOUZ NXT        | W   | 0.239      | 0.435        | 0.015 (0.002)    | 0.537 (0.056)    | -         |     1.77 | Aqua, hyped, prosus, s1n, skyye    |
|            9 |     2838 | 2022-09-19 | K23             | L   | 0.224      | -            | -                | -                | -         |    -6.56 | Aqua, hyped, prosus, s1n, skyye    |
|            8 |     2859 | 2022-09-18 | los kogutos     | L   | 0.220      | -            | -                | -                | -         |    -5.53 | Aqua, hyped, prosus, s1n, skyye    |
|            7 |     3059 | 2022-09-11 | EG White        | L   | 0.176      | -            | -                | -                | -         |    -3.91 | Aqua, hyped, prosus, s1n, skyye    |
|            6 |     3062 | 2022-09-11 | Apeks           | W   | 0.175      | 0.500        | 0.024 (0.002)    | 0.671 (0.059)    | 1 (0.175) |     1.96 | Aqua, hyped, prosus, s1n, skyye    |
|            5 |     3085 | 2022-09-11 | 1 JIN           | W   | 0.172      | -            | -                | -                | 1 (0.172) |     0.66 | Aqua, hyped, prosus, s1n, skyye    |
|            4 |     3125 | 2022-09-10 | timbermen       | W   | 0.167      | 0.500        | 0.016 (0.001)    | 0.306 (0.026)    | 1 (0.167) |     1.09 | Aqua, hyped, prosus, s1n, skyye    |
|            3 |     3143 | 2022-09-10 | Argon           | W   | 0.166      | -            | -                | -                | 1 (0.166) |     0.14 | Aqua, hyped, prosus, s1n, skyye    |
|            2 |     3175 | 2022-09-09 | Apeks           | W   | 0.159      | -            | -                | -                | -         |     1.81 | Aqua, hyped, prosus, s1n, skyye    |
|            1 |     3212 | 2022-09-08 | X13             | W   | 0.154      | -            | -                | -                | -         |     0.52 | Aqua, hyped, prosus, s1n, skyye    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,478.50)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-18 |      0.826 | $6,828.00      | $5,641.51       |
| 2022-11-20 |      0.640 | $500.00        | $320.11         |
| 2022-09-11 |      0.176 | $20,000.00     | $3,516.88       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
