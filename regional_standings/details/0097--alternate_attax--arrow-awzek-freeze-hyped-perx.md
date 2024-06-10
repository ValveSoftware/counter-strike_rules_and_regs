### Roster Details<br />
Team Name: ALTERNATE aTTaX<br />
Roster: ArroW, awzek, FreeZe, hyped, PerX<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [97](../standings_global.md)<br />
Regional Rank: [68]( ../standings_europe.md)<br />
Final Rank Value:  864.9<br />
<br />
Final Rank Value (864.9) = Starting Rank Value (1021.5) + Head To Head Adjustments (-156.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.427[<sup>1</sup>](#table2)
- Bounty Collected: 0.400[<sup>2</sup>](#table1)
- Opponent Network: 0.310[<sup>2</sup>](#table1)
- LAN Wins: 0.109[<sup>2</sup>](#table1)

The average of these factors is 0.312<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1021.5
- 400 + ( ( 0.312 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1021.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           75 |      122 | 2024-06-08 | The Suspect       | L   | 1.000      | -            | -                | -                | -         |   -18.50 | ArroW, awzek, FreeZe, hyped, PerX  |
|           74 |      161 | 2024-06-07 | Kubix             | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.97 | ArroW, awzek, FreeZe, hyped, PerX  |
|           73 |      611 | 2024-05-24 | Endpoint          | L   | 1.000      | -            | -                | -                | -         |   -13.83 | ArroW, awzek, FreeZe, hyped, PerX  |
|           72 |      628 | 2024-05-23 | Entropiq          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.84 | ArroW, awzek, FreeZe, hyped, PerX  |
|           71 |      652 | 2024-05-22 | VP.Prodigy        | L   | 1.000      | -            | -                | -                | -         |   -16.49 | ArroW, awzek, FreeZe, hyped, PerX  |
|           70 |      736 | 2024-05-20 | Nexus             | L   | 1.000      | -            | -                | -                | -         |   -20.93 | ArroW, awzek, FreeZe, hyped, PerX  |
|           69 |      774 | 2024-05-19 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -13.32 | ArroW, awzek, FreeZe, hyped, PerX  |
|           68 |      809 | 2024-05-18 | Sashi             | L   | 1.000      | -            | -                | -                | -         |    -4.41 | ArroW, awzek, FreeZe, hyped, PerX  |
|           67 |      829 | 2024-05-17 | EYEBALLERS        | L   | 1.000      | -            | -                | -                | -         |   -17.81 | ArroW, awzek, FreeZe, hyped, PerX  |
|           66 |      866 | 2024-05-16 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |    -9.45 | ArroW, awzek, FreeZe, hyped, PerX  |
|           65 |      881 | 2024-05-16 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -12.88 | ArroW, awzek, FreeZe, hyped, PerX  |
|           64 |      971 | 2024-05-14 | PERA              | L   | 1.000      | -            | -                | -                | -         |   -19.18 | ArroW, awzek, FreeZe, hyped, PerX  |
|           63 |      983 | 2024-05-14 | Endpoint          | W   | 1.000      | 0.435        | -                | 0.570 (0.248)    | 0 (0.000) |    14.79 | ArroW, awzek, FreeZe, hyped, PerX  |
|           62 |     1154 | 2024-05-06 | Sashi             | L   | 0.966      | -            | -                | -                | -         |    -5.57 | ArroW, awzek, FreeZe, hyped, PerX  |
|           61 |     1239 | 2024-05-02 | MOUZ NXT          | L   | 0.938      | -            | -                | -                | -         |   -10.80 | ArroW, awzek, FreeZe, hyped, PerX  |
|           60 |     1258 | 2024-05-01 | Sampi             | W   | 0.932      | 0.396        | 0.036 (0.013)    | 0.883 (0.326)    | 0 (0.000) |    14.41 | ArroW, awzek, FreeZe, hyped, PerX  |
|           59 |     1267 | 2024-05-01 | Sangal            | W   | 0.931      | 0.500        | 0.214 (0.099)    | 0.998 (0.465)    | 0 (0.000) |    20.23 | ArroW, awzek, FreeZe, hyped, PerX  |
|           58 |     1276 | 2024-04-30 | Endpoint          | L   | 0.926      | -            | -                | -                | -         |   -16.32 | ArroW, awzek, FreeZe, hyped, PerX  |
|           57 |     1288 | 2024-04-30 | Sampi             | W   | 0.925      | 0.396        | 0.036 (0.013)    | 0.883 (0.323)    | 0 (0.000) |    15.10 | ArroW, awzek, FreeZe, hyped, PerX  |
|           56 |     1317 | 2024-04-28 | Passion UA        | W   | 0.913      | 0.500        | 0.088 (0.040)    | 0.905 (0.413)    | 0 (0.000) |    14.08 | ArroW, awzek, FreeZe, hyped, PerX  |
|           55 |     1376 | 2024-04-26 | Gaimin Gladiators | W   | 0.898      | 0.500        | 0.081 (0.036)    | 0.749 (0.336)    | 0 (0.000) |    23.98 | ArroW, awzek, FreeZe, hyped, skyye |
|           54 |     1444 | 2024-04-23 | Enterprise        | W   | 0.878      | 0.384        | -                | 0.647 (0.218)    | 0 (0.000) |    14.83 | ArroW, FreeZe, hyped, PerX, skyye  |
|           53 |     1446 | 2024-04-23 | Permitta          | L   | 0.877      | -            | -                | -                | -         |   -11.41 | ArroW, FreeZe, hyped, PerX, skyye  |
|           52 |     1456 | 2024-04-22 | ENCE Academy      | W   | 0.871      | -            | -                | -                | -         |    10.07 | ArroW, FreeZe, hyped, PerX, skyye  |
|           51 |     1469 | 2024-04-21 | MOUZ NXT          | L   | 0.866      | -            | -                | -                | -         |    -7.97 | ArroW, awzek, FreeZe, hyped, skyye |
|           50 |     1479 | 2024-04-21 | Sampi             | L   | 0.864      | -            | -                | -                | -         |   -11.36 | ArroW, awzek, FreeZe, hyped, skyye |
|           49 |     1486 | 2024-04-20 | Space             | L   | 0.860      | -            | -                | -                | -         |   -17.09 | ArroW, awzek, FreeZe, hyped, skyye |
|           48 |     1510 | 2024-04-20 | Enterprise        | W   | 0.858      | 0.500        | -                | 0.647 (0.278)    | -         |    14.17 | ArroW, awzek, FreeZe, hyped, skyye |
|           47 |     1546 | 2024-04-19 | Passion UA        | W   | 0.853      | 0.371        | 0.088 (0.028)    | 0.905 (0.286)    | -         |    15.36 | ArroW, awzek, FreeZe, hyped, skyye |
|           46 |     1552 | 2024-04-19 | Zero Tenacity     | L   | 0.852      | -            | -                | -                | -         |   -10.76 | ArroW, awzek, FreeZe, hyped, skyye |
|           45 |     1602 | 2024-04-18 | HAVU              | L   | 0.845      | -            | -                | -                | -         |   -20.77 | ArroW, awzek, FreeZe, hyped, skyye |
|           44 |     1610 | 2024-04-18 | BLEED             | L   | 0.844      | -            | -                | -                | -         |    -2.87 | ArroW, awzek, FreeZe, hyped, skyye |
|           43 |     1671 | 2024-04-16 | Aurora Young Blud | W   | 0.832      | -            | -                | -                | -         |     5.67 | ArroW, awzek, FreeZe, hyped, skyye |
|           42 |     1684 | 2024-04-15 | Zero Tenacity     | L   | 0.827      | -            | -                | -                | -         |   -11.59 | ArroW, awzek, FreeZe, hyped, skyye |
|           41 |     1720 | 2024-04-13 | Alliance          | W   | 0.811      | -            | -                | -                | -         |    10.72 | ArroW, awzek, FreeZe, hyped, skyye |
|           40 |     1863 | 2024-04-09 | ECLOT             | W   | 0.785      | 0.371        | 0.101 (0.029)    | -                | -         |    18.65 | ArroW, awzek, FreeZe, hyped, skyye |
|           39 |     1897 | 2024-04-08 | SINNERS           | L   | 0.778      | -            | -                | -                | -         |    -6.96 | ArroW, awzek, FreeZe, hyped, skyye |
|           38 |     1988 | 2024-04-04 | Rebels            | L   | 0.753      | -            | -                | -                | -         |    -7.82 | ArroW, awzek, FreeZe, hyped, skyye |
|           37 |     2079 | 2024-04-02 | AMKAL             | L   | 0.738      | -            | -                | -                | -         |    -5.58 | ArroW, awzek, FreeZe, hyped, skyye |
|           36 |     2156 | 2024-03-27 | FAVBET            | L   | 0.701      | -            | -                | -                | -         |   -16.73 | ArroW, awzek, FreeZe, hyped, skyye |
|           35 |     2163 | 2024-03-27 | M1X KS            | W   | 0.700      | -            | -                | -                | -         |    14.40 | ArroW, awzek, FreeZe, hyped, skyye |
|           34 |     2196 | 2024-03-25 | ex-Sprout         | W   | 0.687      | -            | -                | -                | -         |     2.40 | ArroW, awzek, FreeZe, hyped, skyye |
|           33 |     2211 | 2024-03-23 | Aurora            | L   | 0.674      | -            | -                | -                | -         |    -0.90 | ArroW, awzek, FreeZe, hyped, skyye |
|           32 |     2400 | 2024-03-14 | Metizport         | W   | 0.612      | 0.143        | 0.078 (0.007)    | -                | -         |    12.38 | ArroW, awzek, FreeZe, hyped, skyye |
|           31 |     2428 | 2024-03-13 | SINNERS           | L   | 0.607      | -            | -                | -                | -         |    -6.60 | ArroW, awzek, FreeZe, hyped, skyye |
|           30 |     2510 | 2024-03-10 | Entropiq          | L   | 0.585      | -            | -                | -                | -         |   -15.88 | ArroW, awzek, FreeZe, hyped, skyye |
|           29 |     2513 | 2024-03-10 | MOUZ NXT          | L   | 0.585      | -            | -                | -                | -         |    -6.32 | ArroW, awzek, FreeZe, hyped, skyye |
|           28 |     2557 | 2024-03-08 | Sashi             | W   | 0.571      | 0.371        | 0.174 (0.037)    | 1.000 (0.212)    | -         |    11.44 | ArroW, awzek, FreeZe, hyped, skyye |
|           27 |     2597 | 2024-03-06 | brazylijski luz   | W   | 0.561      | -            | -                | -                | -         |     4.82 | ArroW, awzek, FreeZe, hyped, skyye |
|           26 |     2656 | 2024-03-05 | Sashi             | W   | 0.551      | 0.143        | 0.174 (0.014)    | -                | -         |    11.60 | ArroW, awzek, FreeZe, hyped, skyye |
|           25 |     2669 | 2024-03-04 | Passion UA        | L   | 0.545      | -            | -                | -                | -         |    -6.54 | ArroW, awzek, FreeZe, hyped, skyye |
|           24 |     2709 | 2024-03-02 | 500               | L   | 0.533      | -            | -                | -                | -         |   -12.43 | ArroW, awzek, FreeZe, hyped, skyye |
|           23 |     2736 | 2024-03-01 | fnatic            | L   | 0.525      | -            | -                | -                | -         |    -2.25 | ArroW, awzek, FreeZe, hyped, skyye |
|           22 |     2762 | 2024-02-28 | BetBoom           | L   | 0.512      | -            | -                | -                | -         |    -0.41 | ArroW, awzek, FreeZe, hyped, skyye |
|           21 |     2779 | 2024-02-27 | RUBY              | L   | 0.506      | -            | -                | -                | -         |    -9.75 | ArroW, awzek, FreeZe, hyped, skyye |
|           20 |     2802 | 2024-02-26 | Endpoint          | W   | 0.498      | -            | -                | -                | -         |     6.22 | ArroW, awzek, FreeZe, hyped, skyye |
|           19 |     2819 | 2024-02-25 | Alliance          | L   | 0.493      | -            | -                | -                | -         |   -10.04 | ArroW, awzek, FreeZe, hyped, skyye |
|           18 |     2982 | 2024-02-18 | Young Ninjas      | L   | 0.447      | -            | -                | -                | -         |    -9.99 | ArroW, awzek, FreeZe, PANIX, PerX  |
|           17 |     3154 | 2024-02-11 | Entropiq          | W   | 0.400      | -            | -                | -                | -         |     1.35 | ArroW, awzek, FreeZe, PANIX, PerX  |
|           16 |     3214 | 2024-02-06 | 500               | W   | 0.366      | -            | -                | -                | -         |     2.47 | awzek, FreeZe, Goody, PANIX, PerX  |
|           15 |     3240 | 2024-02-04 | brazylijski luz   | W   | 0.353      | -            | -                | -                | -         |     2.81 | awzek, FreeZe, Goody, PANIX, PerX  |
|           14 |     3251 | 2024-02-04 | Sangal            | L   | 0.351      | -            | -                | -                | -         |    -3.39 | awzek, FreeZe, PANIX, PerX, S3NSEY |
|           13 |     3279 | 2024-02-03 | TSM               | L   | 0.345      | -            | -                | -                | -         |    -8.85 | awzek, FreeZe, Goody, PANIX, PerX  |
|           12 |     3340 | 2024-02-01 | Sangal            | L   | 0.331      | -            | -                | -                | -         |    -3.17 | awzek, FreeZe, Goody, PANIX, PerX  |
|           11 |     3378 | 2024-01-30 | ex-Sprout         | W   | 0.319      | -            | -                | -                | -         |     0.80 | awzek, FreeZe, Goody, PANIX, PerX  |
|           10 |     3427 | 2024-01-26 | Entropiq          | W   | 0.292      | -            | -                | -                | -         |     0.92 | awzek, FreeZe, Goody, PANIX, PerX  |
|            9 |     3454 | 2024-01-24 | M1X KS            | L   | 0.280      | -            | -                | -                | -         |    -2.95 | awzek, FreeZe, Goody, PANIX, PerX  |
|            8 |     3474 | 2024-01-23 | PERA              | L   | 0.273      | -            | -                | -                | -         |    -5.33 | awzek, FreeZe, Goody, PANIX, PerX  |
|            7 |     3478 | 2024-01-23 | M1X KS            | L   | 0.273      | -            | -                | -                | -         |    -3.02 | awzek, FreeZe, Goody, PANIX, PerX  |
|            6 |     3498 | 2024-01-22 | Viperio           | W   | 0.267      | -            | -                | -                | -         |     0.47 | awzek, FreeZe, Goody, PANIX, PerX  |
|            5 |     3502 | 2024-01-22 | Rebels            | L   | 0.266      | -            | -                | -                | -         |    -3.27 | awzek, FreeZe, Goody, PANIX, PerX  |
|            4 |     3505 | 2024-01-22 | Sampi             | W   | 0.266      | -            | -                | -                | -         |     3.21 | awzek, FreeZe, Goody, PANIX, PerX  |
|            3 |     3860 | 2024-01-14 | Lilmix            | L   | 0.211      | -            | -                | -                | -         |    -6.28 | awzek, FreeZe, Goody, PANIX, PerX  |
|            2 |     3893 | 2024-01-13 | Astralis          | L   | 0.206      | -            | -                | -                | -         |    -0.04 | awzek, FreeZe, Goody, PANIX, PerX  |
|            1 |     4162 | 2023-12-16 | BIG Academy       | W   | 0.020      | -            | -                | -                | 1 (0.020) |     0.03 | awzek, FreeZe, PANIX, PerX, Spiidi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,923.43)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-08 |      1.000 | $1,087.00      | $1,087.00       |
| 2024-05-03 |      0.946 | $12,500.00     | $11,823.41      |
| 2024-04-25 |      0.891 | $1,000.00      | $891.41         |
| 2023-12-16 |      0.020 | $6,188.00      | $121.61         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
