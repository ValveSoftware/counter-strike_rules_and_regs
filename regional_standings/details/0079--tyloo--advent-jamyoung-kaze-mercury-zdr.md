### Roster Details<br />
Team Name: TYLOO<br />
Roster: advent, JamYoung, kaze, Mercury, zdr<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [79](../standings_global.md)<br />
Regional Rank: [7]( ../standings_asia.md)<br />
Final Rank Value:  882.5<br />
<br />
Final Rank Value (882.5) = Starting Rank Value (899.1) + Head To Head Adjustments (-16.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.420[<sup>1</sup>](#table2)
- Bounty Collected: 0.299[<sup>2</sup>](#table1)
- Opponent Network: 0.059[<sup>2</sup>](#table1)
- LAN Wins: 0.250[<sup>2</sup>](#table1)

The average of these factors is 0.257<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 899.1
- 400 + ( ( 0.257 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 899.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |      840 | 2024-04-27 | M80                | L   | 0.985      | -            | -                | -                | -         |    -4.30 | advent, JamYoung, kaze, Mercury, zdr    |
|           33 |      863 | 2024-04-26 | Sharks             | W   | 0.979      | 0.889        | 0.031 (0.027)    | 0.530 (0.461)    | 1 (0.979) |    17.15 | advent, JamYoung, kaze, Mercury, zdr    |
|           32 |      900 | 2024-04-25 | Falcons            | L   | 0.971      | -            | -                | -                | -         |    -1.17 | advent, JamYoung, kaze, Mercury, zdr    |
|           31 |      922 | 2024-04-24 | G2                 | L   | 0.964      | -            | -                | -                | -         |    -0.18 | advent, JamYoung, kaze, Mercury, zdr    |
|           30 |     1055 | 2024-04-19 | Rare Atom          | L   | 0.931      | -            | -                | -                | -         |   -24.61 | advent, JamYoung, kaze, Mercury, zdr    |
|           29 |     1095 | 2024-04-18 | TheMongolz         | L   | 0.925      | -            | -                | -                | -         |    -1.46 | advent, JamYoung, kaze, Mercury, zdr    |
|           28 |     1108 | 2024-04-18 | Lynn Vision        | W   | 0.924      | 0.143        | 0.056 (0.007)    | 0.282 (0.037)    | 0 (0.000) |    20.16 | advent, JamYoung, kaze, Mercury, zdr    |
|           27 |     1139 | 2024-04-17 | Sheer Conquer      | W   | 0.917      | -            | -                | -                | 0 (0.000) |     2.02 | advent, JamYoung, kaze, Mercury, zdr    |
|           26 |     1145 | 2024-04-17 | The Huns           | W   | 0.917      | 0.143        | -                | 0.119 (0.016)    | 0 (0.000) |     5.18 | advent, JamYoung, kaze, Mercury, zdr    |
|           25 |     1393 | 2024-04-08 | Lynn Vision        | L   | 0.858      | -            | -                | -                | -         |    -7.76 | advent, JamYoung, kaze, Mercury, zdr    |
|           24 |     1403 | 2024-04-08 | MOUZ               | L   | 0.856      | -            | -                | -                | -         |    -0.06 | advent, JamYoung, kaze, Mercury, zdr    |
|           23 |     1938 | 2024-03-13 | LYG                | L   | 0.684      | -            | -                | -                | -         |   -16.82 | advent, JamYoung, lyrics3, Mercury, zdr |
|           22 |     1944 | 2024-03-13 | padaem Holodnie    | W   | 0.683      | -            | -                | -                | 0 (0.000) |     1.25 | advent, JamYoung, lyrics3, Mercury, zdr |
|           21 |     2293 | 2024-02-27 | ATOX               | L   | 0.583      | -            | -                | -                | -         |   -10.29 | advent, aumaN, JamYoung, kaze, Mercury  |
|           20 |     2305 | 2024-02-26 | Lynn Vision        | L   | 0.576      | -            | -                | -                | -         |    -6.83 | advent, aumaN, JamYoung, kaze, Mercury  |
|           19 |     2307 | 2024-02-25 | JiJieHao           | W   | 0.575      | 0.143        | -                | 0.117 (0.010)    | 1 (0.575) |     1.99 | advent, aumaN, JamYoung, kaze, Mercury  |
|           18 |     2811 | 2024-02-02 | Rare Atom          | L   | 0.417      | -            | -                | -                | -         |   -10.20 | advent, aumaN, JamYoung, kaze, Mercury  |
|           17 |     2841 | 2024-02-01 | Newhappy           | W   | 0.410      | 0.143        | 0.001 (0.000)    | 0.112 (0.007)    | 0 (0.000) |     2.23 | advent, aumaN, JamYoung, kaze, Mercury  |
|           16 |     2843 | 2024-02-01 | GR                 | W   | 0.409      | 0.143        | 0.001 (0.000)    | 0.146 (0.009)    | 0 (0.000) |     1.96 | advent, aumaN, JamYoung, kaze, Mercury  |
|           15 |     2897 | 2024-01-27 | Lynn Vision        | L   | 0.382      | -            | -                | -                | -         |    -4.23 | advent, aumaN, JamYoung, kaze, Mercury  |
|           14 |     2906 | 2024-01-27 | TheMongolz         | W   | 0.378      | 0.143        | 0.176 (0.010)    | 0.583 (0.031)    | -         |    11.41 | advent, aumaN, JamYoung, kaze, Mercury  |
|           13 |     2910 | 2024-01-27 | The Huns           | W   | 0.377      | 0.143        | -                | 0.119 (0.006)    | -         |     1.98 | advent, aumaN, JamYoung, kaze, Mercury  |
|           12 |     2913 | 2024-01-26 | ACME               | W   | 0.376      | 0.435        | 0.002 (0.000)    | -                | 1 (0.376) |     2.18 | advent, aumaN, JamYoung, kaze, Mercury  |
|           11 |     2924 | 2024-01-26 | TheMongolz         | L   | 0.371      | -            | -                | -                | -         |    -0.46 | advent, aumaN, JamYoung, kaze, Mercury  |
|           10 |     2928 | 2024-01-26 | Wings Up           | W   | 0.371      | -            | -                | -                | -         |     1.25 | advent, aumaN, JamYoung, kaze, Mercury  |
|            9 |     2935 | 2024-01-26 | TheMongolz         | L   | 0.370      | -            | -                | -                | -         |    -0.46 | advent, aumaN, JamYoung, kaze, Mercury  |
|            8 |     2937 | 2024-01-25 | Incheon On Sla2ers | W   | 0.368      | 0.435        | 0.002 (0.000)    | -                | 1 (0.368) |     1.27 | advent, aumaN, JamYoung, kaze, Mercury  |
|            7 |     3039 | 2024-01-21 | Rare Atom          | W   | 0.338      | 0.143        | 0.011 (0.001)    | 0.125 (0.006)    | -         |     2.44 | advent, aumaN, JamYoung, kaze, Mercury  |
|            6 |     3048 | 2024-01-20 | Lynn Vision        | L   | 0.336      | -            | -                | -                | -         |    -3.59 | advent, aumaN, JamYoung, kaze, Mercury  |
|            5 |     3146 | 2024-01-19 | Newhappy           | W   | 0.323      | 0.143        | 0.001 (0.000)    | 0.112 (0.005)    | -         |     1.93 | advent, aumaN, JamYoung, kaze, Mercury  |
|            4 |     3160 | 2024-01-18 | SHPL               | W   | 0.322      | -            | -                | -                | -         |     0.60 | advent, aumaN, JamYoung, kaze, Mercury  |
|            3 |     3739 | 2023-12-10 | TheMongolz         | L   | 0.058      | -            | -                | -                | -         |    -0.07 | advent, aumaN, JamYoung, kaze, Mercury  |
|            2 |     3812 | 2023-12-07 | Lynn Vision        | W   | 0.038      | 0.416        | 0.056 (0.001)    | -                | -         |     0.80 | advent, aumaN, JamYoung, kaze, Mercury  |
|            1 |     3841 | 2023-12-06 | Newhappy           | W   | 0.032      | -            | -                | -                | -         |     0.18 | advent, aumaN, JamYoung, kaze, Mercury  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,591.22)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-04-14 |      0.897 | $4,000.00      | $3,588.94       |
| 2024-01-28 |      0.384 | $4,000.00      | $1,536.04       |
| 2023-12-10 |      0.058 | $8,000.00      | $466.24         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
