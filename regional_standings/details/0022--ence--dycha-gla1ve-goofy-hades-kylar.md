### Roster Details<br />
Team Name: ENCE<br />
Roster: dycha, gla1ve, Goofy, hades, Kylar<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [22](../standings_global.md)<br />
Regional Rank: [16]( ../standings_europe.md)<br />
Final Rank Value:  1276.2<br />
<br />
Final Rank Value (1276.2) = Starting Rank Value (1359.9) + Head To Head Adjustments (-83.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.656[<sup>1</sup>](#table2)
- Bounty Collected: 0.538[<sup>2</sup>](#table1)
- Opponent Network: 0.148[<sup>2</sup>](#table1)
- LAN Wins: 0.646[<sup>2</sup>](#table1)

The average of these factors is 0.497<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1359.9
- 400 + ( ( 0.497 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1359.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           41 |      102 | 2024-04-19 | AMKAL             | L   | 1.000      | -            | -                | -                | -         |   -24.58 | dycha, gla1ve, Goofy, hades, Kylar          |
|           40 |      185 | 2024-04-17 | Enterprise        | W   | 1.000      | 0.384        | 0.026 (0.010)    | 0.452 (0.174)    | 0 (0.000) |     3.44 | dycha, gla1ve, Goofy, hades, Kylar          |
|           39 |      354 | 2024-04-10 | OG                | L   | 1.000      | -            | -                | -                | -         |   -16.84 | dycha, gla1ve, Goofy, hades, Kylar          |
|           38 |      437 | 2024-04-08 | FORZE             | L   | 1.000      | -            | -                | -                | -         |   -26.75 | dycha, gla1ve, Goofy, hades, Kylar          |
|           37 |      548 | 2024-04-04 | Aurora Young Blud | W   | 1.000      | 0.384        | -                | 0.133 (0.051)    | 0 (0.000) |     0.85 | dycha, gla1ve, Goofy, hades, Kylar          |
|           36 |      844 | 2024-03-19 | FURIA             | L   | 0.973      | -            | -                | -                | -         |   -14.61 | dycha, gla1ve, Goofy, hades, Kylar          |
|           35 |      860 | 2024-03-18 | paiN              | L   | 0.965      | -            | -                | -                | -         |    -5.84 | dycha, gla1ve, Goofy, hades, Kylar          |
|           34 |      869 | 2024-03-17 | KOI               | W   | 0.960      | 0.143        | -                | 0.902 (0.124)    | 1 (0.960) |     4.61 | dycha, gla1ve, Goofy, hades, Kylar          |
|           33 |      886 | 2024-03-17 | Imperial          | L   | 0.959      | -            | -                | -                | -         |    -6.33 | dycha, gla1ve, Goofy, hades, Kylar          |
|           32 |     1016 | 2024-03-12 | B8                | L   | 0.926      | -            | -                | -                | -         |   -27.67 | dycha, gla1ve, Goofy, hades, Kylar          |
|           31 |     1029 | 2024-03-11 | HEROIC            | L   | 0.920      | -            | -                | -                | -         |    -8.20 | dycha, gla1ve, Goofy, hades, Kylar          |
|           30 |     1042 | 2024-03-11 | Metizport         | W   | 0.919      | 0.143        | 0.136 (0.018)    | 1.000 (0.131)    | -         |     3.35 | dycha, gla1ve, Goofy, hades, Kylar          |
|           29 |     1442 | 2024-02-22 | Astralis          | W   | 0.798      | 0.143        | 0.155 (0.018)    | -                | 1 (0.798) |    12.65 | dycha, gla1ve, Goofy, hades, Kylar          |
|           28 |     1464 | 2024-02-21 | Vitality          | L   | 0.792      | -            | -                | -                | -         |    -2.48 | dycha, gla1ve, Goofy, hades, Kylar          |
|           27 |     1496 | 2024-02-20 | GamerLegion       | W   | 0.785      | 0.143        | 0.185 (0.021)    | -                | 1 (0.785) |    11.44 | dycha, gla1ve, Goofy, hades, Kylar          |
|           26 |     1517 | 2024-02-19 | Guild Eagles      | W   | 0.779      | 0.143        | -                | 0.727 (0.081)    | 1 (0.779) |     2.74 | dycha, gla1ve, Goofy, hades, Kylar          |
|           25 |     1525 | 2024-02-19 | Spirit            | L   | 0.778      | -            | -                | -                | -         |    -1.17 | dycha, gla1ve, Goofy, hades, Kylar          |
|           24 |     1729 | 2024-02-09 | Falcons           | L   | 0.714      | -            | -                | -                | -         |   -12.75 | dycha, gla1ve, Goofy, hades, Kylar          |
|           23 |     1763 | 2024-02-06 | MOUZ              | L   | 0.693      | -            | -                | -                | -         |    -1.60 | dycha, gla1ve, Goofy, hades, Kylar          |
|           22 |     1774 | 2024-02-05 | G2                | W   | 0.686      | 1.000        | 0.773 (0.530)    | 0.542 (0.372)    | 1 (0.686) |    20.32 | dycha, gla1ve, Goofy, hades, Kylar          |
|           21 |     1810 | 2024-02-03 | Vitality          | W   | 0.674      | 1.000        | 1.000 (0.674)    | 0.420 (0.283)    | 1 (0.674) |    19.77 | dycha, gla1ve, Goofy, hades, Kylar          |
|           20 |     1849 | 2024-02-02 | TheMongolz        | W   | 0.666      | 0.143        | 0.247 (0.024)    | 0.587 (0.056)    | 1 (0.666) |    10.55 | dycha, gla1ve, Goofy, hades, Kylar          |
|           19 |     1878 | 2024-02-01 | Astralis          | W   | 0.660      | 0.143        | 0.155 (0.015)    | -                | 1 (0.660) |    12.57 | dycha, gla1ve, Goofy, hades, Kylar          |
|           18 |     1904 | 2024-01-31 | BIG               | L   | 0.652      | -            | -                | -                | -         |   -12.84 | dycha, gla1ve, Goofy, hades, Kylar          |
|           17 |     2756 | 2023-12-13 | BIG               | L   | 0.327      | -            | -                | -                | -         |    -6.56 | Krimbo, mantuu, prosus, s1n, tabseN         |
|           16 |     2760 | 2023-12-13 | BetBoom           | W   | 0.325      | 0.384        | 0.457 (0.057)    | 0.898 (0.112)    | -         |     3.88 | danistzz, KaiR0N-, Magnojez, nafany, zorte  |
|           15 |     2770 | 2023-12-12 | FORZE             | W   | 0.318      | 0.384        | 0.140 (0.017)    | 0.784 (0.096)    | -         |     1.13 | gokushima, kelieN, r3salt, shalfey, tN1R    |
|           14 |     2883 | 2023-12-06 | EYEBALLERS        | L   | 0.280      | -            | -                | -                | -         |    -8.15 | Goofy, hades, KEi, Kylar, nawrot            |
|           13 |     2912 | 2023-12-05 | SINNERS           | L   | 0.274      | -            | -                | -                | -         |    -7.17 | Goofy, hades, KEi, Kylar, nawrot            |
|           12 |     3049 | 2023-11-26 | Rebels            | L   | 0.213      | -            | -                | -                | -         |    -6.17 | Goofy, hades, jcobbb, KEi, Kylar            |
|           11 |     3068 | 2023-11-25 | ex-Anonymo        | W   | 0.207      | -            | -                | -                | -         |     0.22 | lunAtic, reiko, SaMey, Sobol, virtuoso      |
|           10 |     3138 | 2023-11-21 | Spirit            | L   | 0.180      | -            | -                | -                | -         |    -0.26 | Goofy, hades, jcobbb, KEi, Kylar            |
|            9 |     3154 | 2023-11-20 | Apeks             | W   | 0.173      | -            | -                | -                | -         |     1.91 | Goofy, hades, jcobbb, KEi, Kylar            |
|            8 |     3176 | 2023-11-19 | FORZE             | W   | 0.166      | -            | -                | -                | -         |     0.19 | gokushima, Krad, r3salt, shalfey, tN1R      |
|            7 |     3271 | 2023-11-16 | Spirit            | L   | 0.145      | -            | -                | -                | -         |    -0.21 | ArtFr0st, chopper, donk, magixx, zont1x     |
|            6 |     3452 | 2023-11-08 | 3DMAX             | L   | 0.094      | -            | -                | -                | -         |    -2.56 | Djoko, Ex3rcice, hAdji, Lucky, Maka         |
|            5 |     3483 | 2023-11-07 | SINNERS           | W   | 0.087      | -            | -                | -                | -         |     0.45 | Goofy, hades, KEi, Kylar, nawrot            |
|            4 |     3604 | 2023-11-01 | 1WIN              | W   | 0.047      | -            | -                | -                | -         |     0.03 | Boombl4, deko, Forester, NickelBack, TRAVIS |
|            3 |     3704 | 2023-10-29 | Apeks             | L   | 0.026      | -            | -                | -                | -         |    -0.54 | CacaNito, jkaem, kyxsan, nawwk, sense       |
|            2 |     3753 | 2023-10-28 | BIG               | L   | 0.019      | -            | -                | -                | -         |    -0.42 | Krimbo, mantuu, prosus, s1n, tabseN         |
|            1 |     3820 | 2023-10-26 | Astralis          | W   | 0.005      | -            | -                | -                | -         |     0.01 | Goofy, hades, KEi, Kylar, mynio             |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($57,017.44)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.30) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $15,000.00     | $15,000.00      |
| 2024-03-20 |      0.980 | $10,000.00     | $9,798.45       |
| 2024-02-11 |      0.726 | $40,000.00     | $29,057.85      |
| 2023-12-13 |      0.327 | $3,500.00      | $1,143.66       |
| 2023-12-10 |      0.307 | $4,000.00      | $1,227.10       |
| 2023-11-26 |      0.213 | $3,713.00      | $790.38         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
