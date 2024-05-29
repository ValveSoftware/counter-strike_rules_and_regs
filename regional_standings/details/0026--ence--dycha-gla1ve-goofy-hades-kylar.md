### Roster Details<br />
Team Name: ENCE<br />
Roster: dycha, gla1ve, Goofy, hades, Kylar<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [26](../standings_global.md)<br />
Regional Rank: [17]( ../standings_europe.md)<br />
Final Rank Value:  1270.9<br />
<br />
Final Rank Value (1270.9) = Starting Rank Value (1374.1) + Head To Head Adjustments (-103.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.588[<sup>1</sup>](#table2)
- Bounty Collected: 0.495[<sup>2</sup>](#table1)
- Opponent Network: 0.269[<sup>2</sup>](#table1)
- LAN Wins: 0.655[<sup>2</sup>](#table1)

The average of these factors is 0.502<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1374.1
- 400 + ( ( 0.502 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1374.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |      215 | 2024-05-21 | Liquid             | L   | 1.000      | -            | -                | -                | -         |    -3.92 | dycha, gla1ve, Goofy, hades, Kylar         |
|           37 |      298 | 2024-05-18 | fnatic             | W   | 1.000      | 0.769        | 0.148 (0.114)    | 0.565 (0.434)    | -         |     9.87 | dycha, gla1ve, Goofy, hades, Kylar         |
|           36 |      322 | 2024-05-17 | Gaimin Gladiators  | W   | 1.000      | 0.769        | 0.090 (0.069)    | 0.809 (0.622)    | -         |     9.58 | dycha, gla1ve, Goofy, hades, Kylar         |
|           35 |      335 | 2024-05-17 | fnatic             | L   | 1.000      | -            | -                | -                | -         |   -21.28 | dycha, gla1ve, Goofy, hades, Kylar         |
|           34 |      691 | 2024-05-04 | FURIA              | L   | 1.000      | -            | -                | -                | -         |   -14.83 | dycha, gla1ve, Goofy, hades, Kylar         |
|           33 |      707 | 2024-05-03 | GamerLegion        | L   | 1.000      | -            | -                | -                | -         |   -19.32 | dycha, gla1ve, Goofy, hades, Kylar         |
|           32 |      726 | 2024-05-02 | Monte              | W   | 1.000      | 0.889        | 0.181 (0.161)    | 0.611 (0.543)    | 1 (1.000) |    11.55 | dycha, gla1ve, Goofy, hades, Kylar         |
|           31 |      753 | 2024-05-01 | Bad News Kangaroos | W   | 1.000      | 0.889        | 0.032 (0.028)    | 0.306 (0.272)    | 1 (1.000) |     2.78 | dycha, gla1ve, Goofy, hades, Kylar         |
|           30 |      784 | 2024-04-30 | GamerLegion        | L   | 1.000      | -            | -                | -                | -         |   -20.77 | dycha, gla1ve, Goofy, hades, Kylar         |
|           29 |     1049 | 2024-04-19 | AMKAL              | L   | 0.932      | -            | -                | -                | -         |   -20.85 | dycha, gla1ve, Goofy, hades, Kylar         |
|           28 |     1132 | 2024-04-17 | Enterprise         | W   | 0.918      | 0.384        | -                | 0.524 (0.185)    | -         |     2.46 | dycha, gla1ve, Goofy, hades, Kylar         |
|           27 |     1301 | 2024-04-10 | OG                 | L   | 0.872      | -            | -                | -                | -         |   -18.73 | dycha, gla1ve, Goofy, hades, Kylar         |
|           26 |     1384 | 2024-04-08 | FORZE              | L   | 0.858      | -            | -                | -                | -         |   -23.14 | dycha, gla1ve, Goofy, hades, Kylar         |
|           25 |     1495 | 2024-04-04 | Aurora Young Blud  | W   | 0.831      | -            | -                | -                | -         |     0.48 | dycha, gla1ve, Goofy, hades, Kylar         |
|           24 |     1791 | 2024-03-19 | FURIA              | L   | 0.726      | -            | -                | -                | -         |   -12.81 | dycha, gla1ve, Goofy, hades, Kylar         |
|           23 |     1807 | 2024-03-18 | paiN               | L   | 0.717      | -            | -                | -                | -         |    -6.20 | dycha, gla1ve, Goofy, hades, Kylar         |
|           22 |     1816 | 2024-03-17 | KOI                | W   | 0.713      | 0.143        | -                | 0.570 (0.058)    | 1 (0.713) |     2.37 | dycha, gla1ve, Goofy, hades, Kylar         |
|           21 |     1833 | 2024-03-17 | Imperial           | L   | 0.711      | -            | -                | -                | -         |    -8.27 | dycha, gla1ve, Goofy, hades, Kylar         |
|           20 |     1963 | 2024-03-12 | B8                 | L   | 0.679      | -            | -                | -                | -         |   -18.37 | dycha, gla1ve, Goofy, hades, Kylar         |
|           19 |     1976 | 2024-03-11 | HEROIC             | L   | 0.673      | -            | -                | -                | -         |    -4.04 | dycha, gla1ve, Goofy, hades, Kylar         |
|           18 |     1989 | 2024-03-11 | Metizport          | W   | 0.672      | 0.143        | -                | 0.860 (0.083)    | -         |     1.97 | dycha, gla1ve, Goofy, hades, Kylar         |
|           17 |     2389 | 2024-02-22 | Astralis           | W   | 0.551      | 0.143        | 0.395 (0.031)    | -                | 1 (0.551) |    14.63 | dycha, gla1ve, Goofy, hades, Kylar         |
|           16 |     2411 | 2024-02-21 | Vitality           | L   | 0.545      | -            | -                | -                | -         |    -1.46 | dycha, gla1ve, Goofy, hades, Kylar         |
|           15 |     2443 | 2024-02-20 | GamerLegion        | W   | 0.537      | -            | -                | -                | 1 (0.537) |     3.67 | dycha, gla1ve, Goofy, hades, Kylar         |
|           14 |     2464 | 2024-02-19 | ex-Guild Eagles    | W   | 0.532      | 0.143        | -                | 0.552 (0.042)    | 1 (0.532) |     1.23 | dycha, gla1ve, Goofy, hades, Kylar         |
|           13 |     2472 | 2024-02-19 | Spirit             | L   | 0.531      | -            | -                | -                | -         |    -0.87 | dycha, gla1ve, Goofy, hades, Kylar         |
|           12 |     2676 | 2024-02-09 | Falcons            | L   | 0.466      | -            | -                | -                | -         |    -5.68 | dycha, gla1ve, Goofy, hades, Kylar         |
|           11 |     2710 | 2024-02-06 | MOUZ               | L   | 0.446      | -            | -                | -                | -         |    -0.60 | dycha, gla1ve, Goofy, hades, Kylar         |
|           10 |     2721 | 2024-02-05 | G2                 | W   | 0.439      | 1.000        | 0.469 (0.206)    | 0.565 (0.248)    | 1 (0.439) |    12.43 | dycha, gla1ve, Goofy, hades, Kylar         |
|            9 |     2757 | 2024-02-03 | Vitality           | W   | 0.427      | 1.000        | 0.699 (0.298)    | 0.481 (0.205)    | 1 (0.427) |    12.55 | dycha, gla1ve, Goofy, hades, Kylar         |
|            8 |     2796 | 2024-02-02 | TheMongolz         | W   | 0.419      | 0.143        | 0.176 (0.011)    | -                | 1 (0.419) |     8.13 | dycha, gla1ve, Goofy, hades, Kylar         |
|            7 |     2825 | 2024-02-01 | Astralis           | W   | 0.413      | 0.143        | 0.395 (0.023)    | -                | 1 (0.413) |    11.54 | dycha, gla1ve, Goofy, hades, Kylar         |
|            6 |     2851 | 2024-01-31 | BIG                | L   | 0.405      | -            | -                | -                | -         |    -5.94 | dycha, gla1ve, Goofy, hades, Kylar         |
|            5 |     3703 | 2023-12-13 | BIG                | L   | 0.079      | -            | -                | -                | -         |    -1.14 | Krimbo, mantuu, prosus, s1n, tabseN        |
|            4 |     3707 | 2023-12-13 | BetBoom            | W   | 0.078      | 0.384        | 0.392 (0.012)    | -                | -         |     1.44 | danistzz, KaiR0N-, Magnojez, nafany, zorte |
|            3 |     3717 | 2023-12-12 | FORZE              | W   | 0.070      | -            | -                | -                | -         |     0.04 | gokushima, kelieN, r3salt, shalfey, tN1R   |
|            2 |     3830 | 2023-12-06 | EYEBALLERS         | L   | 0.033      | -            | -                | -                | -         |    -0.97 | Goofy, hades, KEi, Kylar, nawrot           |
|            1 |     3859 | 2023-12-05 | SINNERS            | L   | 0.026      | -            | -                | -                | -         |    -0.74 | Goofy, hades, KEi, Kylar, nawrot           |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($59,984.11)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.20) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-23 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-05-12 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-04-14 |      0.899 | $15,000.00     | $13,482.49      |
| 2024-03-20 |      0.732 | $10,000.00     | $7,324.46       |
| 2024-02-11 |      0.479 | $40,000.00     | $19,161.89      |
| 2023-12-13 |      0.079 | $3,500.00      | $277.76         |
| 2023-12-10 |      0.059 | $4,000.00      | $237.51         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
