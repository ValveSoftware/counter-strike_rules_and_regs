### Roster Details<br />
Team Name: Nexus<br />
Roster: BTN, Ciocardau, ERSIN, ragga, XELLOW<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [127](../standings_global.md)<br />
Regional Rank: [84]( ../standings_europe.md)<br />
Final Rank Value:  721.5<br />
<br />
Final Rank Value (721.5) = Starting Rank Value (877.6) + Head To Head Adjustments (-156.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.351[<sup>1</sup>](#table2)
- Bounty Collected: 0.395[<sup>2</sup>](#table1)
- Opponent Network: 0.238[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.246<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 877.6
- 400 + ( ( 0.246 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 877.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           56 |       50 | 2024-05-27 | The Prodigies     | L   | 1.000      | -            | -                | -                | -         |   -23.77 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           55 |       61 | 2024-05-27 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |    -5.48 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           54 |       95 | 2024-05-25 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -12.03 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           53 |      124 | 2024-05-23 | RUBY              | L   | 1.000      | -            | -                | -                | -         |    -9.45 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           52 |      236 | 2024-05-20 | ALTERNATE aTTaX   | W   | 1.000      | 0.435        | 0.048 (0.021)    | 0.650 (0.282)    | 0 (0.000) |    20.14 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           51 |      242 | 2024-05-20 | PERA              | L   | 1.000      | -            | -                | -                | -         |   -10.07 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           50 |      339 | 2024-05-17 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |    -8.46 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           49 |      430 | 2024-05-15 | Space             | L   | 1.000      | -            | -                | -                | -         |   -12.80 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           48 |      505 | 2024-05-13 | Sampi             | L   | 1.000      | -            | -                | -                | -         |    -9.22 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           47 |      715 | 2024-05-03 | ENCE Academy      | L   | 1.000      | -            | -                | -                | -         |   -17.64 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           46 |      760 | 2024-05-01 | Insilio           | L   | 1.000      | -            | -                | -                | -         |   -10.52 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           45 |      792 | 2024-04-30 | fnatic            | L   | 1.000      | -            | -                | -                | -         |    -4.84 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           44 |      797 | 2024-04-29 | Endpoint          | L   | 0.999      | -            | -                | -                | -         |   -13.35 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           43 |      800 | 2024-04-29 | VP.Prodigy        | L   | 0.998      | -            | -                | -                | -         |   -23.45 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           42 |      807 | 2024-04-29 | LEON              | W   | 0.997      | -            | -                | -                | 0 (0.000) |     3.46 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           41 |      811 | 2024-04-29 | Enterprise        | W   | 0.997      | 0.384        | -                | 0.524 (0.201)    | 0 (0.000) |    15.66 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           40 |      828 | 2024-04-28 | brazylijski luz   | L   | 0.991      | -            | -                | -                | -         |   -15.78 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           39 |      892 | 2024-04-25 | Metizport         | W   | 0.973      | 0.384        | 0.088 (0.033)    | 0.860 (0.321)    | 0 (0.000) |    21.89 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           38 |      899 | 2024-04-25 | Grannys Knockers  | L   | 0.971      | -            | -                | -                | -         |   -18.02 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           37 |      921 | 2024-04-24 | AMKAL             | L   | 0.964      | -            | -                | -                | -         |    -4.49 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           36 |      942 | 2024-04-23 | Illuminar         | L   | 0.957      | -            | -                | -                | -         |   -25.10 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           35 |      955 | 2024-04-22 | Zero Tenacity     | L   | 0.951      | -            | -                | -                | -         |   -11.09 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           34 |      965 | 2024-04-21 | Young Ninjas      | W   | 0.946      | 0.500        | 0.038 (0.018)    | 0.204 (0.096)    | 0 (0.000) |    14.10 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           33 |      968 | 2024-04-21 | PARIVISION        | L   | 0.945      | -            | -                | -                | -         |   -14.66 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           32 |     1004 | 2024-04-20 | Permitta          | W   | 0.938      | 0.500        | 0.025 (0.012)    | 1.000 (0.469)    | 0 (0.000) |    16.50 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           31 |     1073 | 2024-04-18 | Young Ninjas      | L   | 0.926      | -            | -                | -                | -         |   -14.87 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           30 |     1107 | 2024-04-18 | Enterprise        | L   | 0.924      | -            | -                | -                | -         |   -13.91 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           29 |     1304 | 2024-04-10 | B8                | W   | 0.871      | 0.384        | 0.165 (0.055)    | 1.000 (0.335)    | 0 (0.000) |    18.81 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           28 |     1447 | 2024-04-05 | SINNERS           | L   | 0.839      | -            | -                | -                | -         |    -9.82 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           27 |     1590 | 2024-04-01 | Sashi             | W   | 0.811      | 0.384        | 0.157 (0.049)    | 1.000 (0.312)    | 0 (0.000) |    16.52 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           26 |     1699 | 2024-03-25 | Sashi             | L   | 0.766      | -            | -                | -                | -         |    -8.09 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           25 |     1960 | 2024-03-12 | Nemiga            | W   | 0.679      | 0.372        | 0.363 (0.092)    | 0.647 (0.164)    | 0 (0.000) |    18.69 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           24 |     1982 | 2024-03-11 | RUBY              | W   | 0.672      | 0.372        | 0.012 (0.003)    | 0.547 (0.137)    | 0 (0.000) |    10.00 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           23 |     2021 | 2024-03-09 | INGLORIOUS        | W   | 0.659      | -            | -                | -                | -         |     3.32 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           22 |     2047 | 2024-03-08 | FAVBET            | W   | 0.652      | 0.372        | 0.004 (0.001)    | 0.257 (0.062)    | -         |     6.62 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           21 |     2194 | 2024-03-03 | TSM               | L   | 0.619      | -            | -                | -                | -         |   -12.38 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           20 |     2440 | 2024-02-20 | ex-Guild Eagles   | L   | 0.538      | -            | -                | -                | -         |    -6.54 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           19 |     2462 | 2024-02-19 | Monte             | L   | 0.532      | -            | -                | -                | -         |    -1.30 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           18 |     2467 | 2024-02-19 | Astralis          | L   | 0.531      | -            | -                | -                | -         |    -0.14 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           17 |     2767 | 2024-02-03 | 500               | L   | 0.426      | -            | -                | -                | -         |    -9.32 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           16 |     2769 | 2024-02-03 | Jake Bube         | W   | 0.425      | -            | -                | -                | -         |     0.84 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           15 |     2778 | 2024-02-03 | AIRLYA            | L   | 0.424      | -            | -                | -                | -         |   -12.00 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           14 |     3035 | 2024-01-21 | ex-sYnck          | W   | 0.338      | -            | -                | -                | -         |     1.87 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           13 |     3066 | 2024-01-20 | OG                | L   | 0.333      | -            | -                | -                | -         |    -1.59 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           12 |     3078 | 2024-01-20 | BIG               | W   | 0.331      | 0.143        | 0.215 (0.010)    | -                | -         |     9.85 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           11 |     3114 | 2024-01-19 | SINNERS           | W   | 0.326      | -            | -                | -                | -         |     6.59 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           10 |     3171 | 2024-01-18 | Gaimin Gladiators | L   | 0.319      | -            | -                | -                | -         |    -1.30 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            9 |     3193 | 2024-01-18 | 9 Pandas          | L   | 0.318      | -            | -                | -                | -         |    -1.91 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            8 |     3266 | 2024-01-16 | Endpoint          | W   | 0.307      | -            | -                | -                | -         |     4.83 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            7 |     3281 | 2024-01-16 | FAVBET            | W   | 0.306      | -            | -                | -                | -         |     2.85 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            6 |     3292 | 2024-01-16 | Alliance          | W   | 0.306      | -            | -                | -                | -         |     4.26 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            5 |     3388 | 2024-01-13 | OG                | L   | 0.285      | -            | -                | -                | -         |    -1.21 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            4 |     3423 | 2024-01-12 | Gucci Academy     | W   | 0.280      | -            | -                | -                | -         |     1.73 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            3 |     3543 | 2024-01-09 | K10               | L   | 0.259      | -            | -                | -                | -         |    -5.90 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            2 |     3608 | 2023-12-18 | Astralis Talent   | L   | 0.110      | -            | -                | -                | -         |    -2.02 | BTN, ragga, s0und, smekk-, XELLOW    |
|            1 |     3632 | 2023-12-17 | brazylijski luz   | L   | 0.105      | -            | -                | -                | -         |    -2.13 | BTN, ragga, s0und, smekk-, XELLOW    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,292.08)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-02 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-03-25 |      0.766 | $4,300.00      | $3,292.08       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
