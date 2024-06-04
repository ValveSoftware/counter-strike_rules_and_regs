### Roster Details<br />
Team Name: Elevate<br />
Roster: dare, dea, Peeping, shane, snav<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [63](../standings_global.md)<br />
Regional Rank: [15]( ../standings_americas.md)<br />
Final Rank Value:  968.7<br />
<br />
Final Rank Value (968.7) = Starting Rank Value (836.3) + Head To Head Adjustments (132.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.345[<sup>1</sup>](#table2)
- Bounty Collected: 0.312[<sup>2</sup>](#table1)
- Opponent Network: 0.224[<sup>2</sup>](#table1)
- LAN Wins: 0.018[<sup>2</sup>](#table1)

The average of these factors is 0.225<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 836.3
- 400 + ( ( 0.225 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 836.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           62 |      134 | 2024-05-22 | NRG              | W   | 1.000      | 0.477        | 0.010 (0.005)    | 0.605 (0.288)    | 0 (0.000) |    14.64 | dare, dea, Peeping, shane, snav                  |
|           61 |      139 | 2024-05-22 | NRG              | W   | 1.000      | 0.477        | 0.010 (0.005)    | 0.605 (0.288)    | 0 (0.000) |    16.00 | dare, dea, Peeping, shane, snav                  |
|           60 |      182 | 2024-05-21 | One More         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.46 | dare, dea, Peeping, shane, snav                  |
|           59 |      186 | 2024-05-21 | One More         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.74 | dare, dea, Peeping, shane, snav                  |
|           58 |      221 | 2024-05-20 | Mythic           | L   | 1.000      | -            | -                | -                | -         |   -21.17 | dare, dea, Peeping, shane, snav                  |
|           57 |      314 | 2024-05-17 | FLUFFY AIMERS    | W   | 1.000      | 0.477        | 0.018 (0.008)    | -                | 0 (0.000) |     8.26 | dare, dea, Peeping, shane, snav                  |
|           56 |      315 | 2024-05-17 | FLUFFY AIMERS    | W   | 1.000      | 0.477        | 0.018 (0.008)    | -                | 0 (0.000) |     8.86 | dare, dea, Peeping, shane, snav                  |
|           55 |      385 | 2024-05-15 | Limitless        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.06 | dare, dea, Peeping, shane, snav                  |
|           54 |      392 | 2024-05-15 | Limitless        | W   | 1.000      | -            | -                | -                | -         |     5.31 | dare, dea, Peeping, shane, snav                  |
|           53 |      438 | 2024-05-14 | M80              | L   | 1.000      | -            | -                | -                | -         |    -4.82 | dare, dea, Peeping, shane, snav                  |
|           52 |      444 | 2024-05-14 | M80              | L   | 1.000      | -            | -                | -                | -         |    -5.05 | dare, dea, Peeping, shane, snav                  |
|           51 |      455 | 2024-05-14 | Take Flyte       | W   | 1.000      | 0.477        | -                | 0.392 (0.187)    | -         |     9.10 | dare, dea, Peeping, shane, snav                  |
|           50 |      459 | 2024-05-14 | Take Flyte       | W   | 1.000      | 0.477        | -                | 0.392 (0.187)    | -         |     9.80 | dare, dea, Peeping, shane, snav                  |
|           49 |      513 | 2024-05-12 | NRG              | L   | 1.000      | -            | -                | -                | -         |   -16.12 | dare, dea, intra, Peeping, snav                  |
|           48 |      533 | 2024-05-11 | Nouns            | W   | 1.000      | 0.270        | 0.030 (0.008)    | -                | -         |    17.75 | dare, dea, intra, Peeping, snav                  |
|           47 |      534 | 2024-05-11 | Wildcard         | W   | 1.000      | 0.270        | -                | 0.615 (0.166)    | -         |    16.27 | dare, dea, intra, Peeping, snav                  |
|           46 |      537 | 2024-05-11 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -11.82 | dare, dea, intra, Peeping, snav                  |
|           45 |      604 | 2024-05-08 | MIGHT            | W   | 1.000      | -            | -                | -                | -         |     6.16 | dare, dea, Peeping, shane, snav                  |
|           44 |      606 | 2024-05-08 | MIGHT            | W   | 1.000      | -            | -                | -                | -         |     6.52 | dare, dea, Peeping, shane, snav                  |
|           43 |      628 | 2024-05-07 | Party Astronauts | W   | 1.000      | 0.477        | 0.010 (0.005)    | 0.670 (0.319)    | -         |    17.83 | dare, dea, Peeping, shane, snav                  |
|           42 |      629 | 2024-05-07 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |   -13.49 | dare, dea, Peeping, shane, snav                  |
|           41 |      925 | 2024-04-23 | Wildcard         | L   | 0.961      | -            | -                | -                | -         |   -14.26 | dare, dea, Peeping, shane, snav                  |
|           40 |      927 | 2024-04-23 | Wildcard         | W   | 0.961      | 0.477        | 0.012 (0.005)    | 0.615 (0.282)    | -         |    16.15 | dare, dea, Peeping, shane, snav                  |
|           39 |     1062 | 2024-04-18 | Legacy           | L   | 0.928      | -            | -                | -                | -         |    -8.64 | dare, dea, Peeping, shane, snav                  |
|           38 |     1070 | 2024-04-18 | M80              | L   | 0.927      | -            | -                | -                | -         |    -5.61 | dare, dea, Peeping, shane, snav                  |
|           37 |     1114 | 2024-04-17 | Nouns            | W   | 0.921      | -            | -                | -                | -         |    18.02 | dare, dea, Peeping, shane, snav                  |
|           36 |     1119 | 2024-04-17 | Wildcard         | W   | 0.920      | -            | -                | -                | -         |    16.97 | dare, dea, Peeping, shane, snav                  |
|           35 |     1268 | 2024-04-10 | Nouns            | L   | 0.875      | -            | -                | -                | -         |   -10.16 | dare, dea, Peeping, shane, snav                  |
|           34 |     1274 | 2024-04-10 | Nouns            | L   | 0.874      | -            | -                | -                | -         |   -10.93 | dare, dea, Peeping, shane, snav                  |
|           33 |     1502 | 2024-04-03 | LAG              | W   | 0.828      | 0.477        | 0.014 (0.005)    | 0.440 (0.174)    | -         |    13.40 | dare, dea, Peeping, shane, snav                  |
|           32 |     1505 | 2024-04-03 | LAG              | L   | 0.828      | -            | -                | -                | -         |   -12.82 | dare, dea, Peeping, shane, snav                  |
|           31 |     1678 | 2024-03-26 | BOSS             | W   | 0.775      | 0.477        | 0.016 (0.006)    | 0.477 (0.176)    | -         |    10.26 | dare, dea, Peeping, shane, snav                  |
|           30 |     1685 | 2024-03-26 | BOSS             | W   | 0.775      | 0.477        | 0.016 (0.006)    | 0.477 (0.176)    | -         |    10.97 | dare, dea, Peeping, shane, snav                  |
|           29 |     1852 | 2024-03-15 | Carpe Diem       | W   | 0.702      | -            | -                | -                | -         |     5.13 | dare, dea, Peeping, shane, snav                  |
|           28 |     1854 | 2024-03-15 | Carpe Diem       | W   | 0.701      | -            | -                | -                | -         |     5.36 | dare, dea, Peeping, shane, snav                  |
|           27 |     1952 | 2024-03-12 | Party Astronauts | L   | 0.681      | -            | -                | -                | -         |    -9.97 | dare, dea, Peeping, shane, snav                  |
|           26 |     2052 | 2024-03-08 | Spirit           | L   | 0.652      | -            | -                | -                | -         |    -0.05 | dare, MRC9, Peeping, shane, snav                 |
|           25 |     2203 | 2024-03-02 | ODDIK            | L   | 0.613      | -            | -                | -                | -         |    -7.40 | dare, nbgee12, Peeping, shane, snav              |
|           24 |     2233 | 2024-03-01 | Complexity       | L   | 0.606      | -            | -                | -                | -         |    -0.45 | dare, nbgee12, Peeping, shane, snav              |
|           23 |     2621 | 2024-02-13 | Mythic           | L   | 0.495      | -            | -                | -                | -         |   -10.02 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|           22 |     2623 | 2024-02-13 | Mythic           | W   | 0.495      | -            | -                | -                | -         |     5.64 | dare, dea, Peeping, shane, snav                  |
|           21 |     2729 | 2024-02-04 | Wildcard         | W   | 0.434      | -            | -                | -                | -         |     7.82 | Infinite, JBa, SLIGHT, Sonic, stanislaw          |
|           20 |     2756 | 2024-02-03 | NRG              | W   | 0.427      | -            | -                | -                | -         |     6.13 | Brehze, daps, FaNg, HexT, oSee                   |
|           19 |     2818 | 2024-02-01 | Nouns            | W   | 0.414      | -            | -                | -                | -         |     7.26 | dare, dea, Peeping, shane, snav                  |
|           18 |     2821 | 2024-02-01 | BOSS             | W   | 0.414      | -            | -                | -                | -         |     6.37 | dare, dea, Peeping, shane, snav                  |
|           17 |     3168 | 2024-01-18 | NRG              | L   | 0.320      | -            | -                | -                | -         |    -5.48 | dare, dea, Peeping, shane, snav                  |
|           16 |     3218 | 2024-01-17 | regain           | W   | 0.314      | -            | -                | -                | -         |     1.07 | DYLAN, Joshyy, rayxts, sasha, Zucar              |
|           15 |     3260 | 2024-01-16 | Liquid           | L   | 0.308      | -            | -                | -                | -         |    -0.10 | cadiaN, NAF, skullz, Twistzz, YEKINDAR           |
|           14 |     3265 | 2024-01-16 | NRG              | W   | 0.307      | -            | -                | -                | -         |     4.51 | dare, dea, Peeping, shane, snav                  |
|           13 |     3270 | 2024-01-16 | Party Astronauts | W   | 0.307      | -            | -                | -                | -         |     5.46 | dare, dea, Peeping, shane, snav                  |
|           12 |     3312 | 2024-01-15 | Mythic           | W   | 0.301      | -            | -                | -                | -         |     4.01 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|           11 |     3339 | 2024-01-14 | Party Astronauts | W   | 0.296      | -            | -                | -                | -         |     5.44 | dare, dea, Peeping, shane, snav                  |
|           10 |     3348 | 2024-01-14 | For Fun          | W   | 0.294      | -            | -                | -                | -         |     2.81 | Momo, onter, Pluto, Tender, WOOHOO               |
|            9 |     3367 | 2024-01-13 | Liquid           | L   | 0.287      | -            | -                | -                | -         |    -0.08 | dare, dea, Peeping, shane, snav                  |
|            8 |     3403 | 2024-01-12 | LOS              | W   | 0.282      | -            | -                | -                | -         |     1.04 | history, JOTA, leo_drk, short, t9rnay            |
|            7 |     3414 | 2024-01-12 | NRG              | L   | 0.281      | -            | -                | -                | -         |    -4.51 | Brehze, daps, FaNg, HexT, oSee                   |
|            6 |     3651 | 2023-12-16 | Carpe Diem       | L   | 0.101      | -            | -                | -                | -         |    -2.43 | Cyrix, Lake, micro, Seb, Wolffe                  |
|            5 |     3748 | 2023-12-09 | Unjustified      | W   | 0.054      | -            | -                | -                | 1 (0.054) |     0.39 | arcade, Cyrix, Lake, Seb, Wolffe                 |
|            4 |     3750 | 2023-12-09 | BOSS             | W   | 0.054      | -            | -                | -                | 1 (0.054) |     0.87 | dare, nbgee12, Peeping, shane, snav              |
|            3 |     3753 | 2023-12-09 | MIGHT            | W   | 0.054      | -            | -                | -                | 1 (0.054) |     0.49 | danss, djay, Nifty, scar, stamina                |
|            2 |     3820 | 2023-12-06 | Evil Geniuses    | L   | 0.035      | -            | -                | -                | -         |    -0.86 | consti, dare, Fr3nk1e, shane, snav               |
|            1 |     3853 | 2023-12-05 | Mythic           | W   | 0.028      | -            | -                | -                | -         |     0.38 | Cooper, fl0m, freakazoid, Stewie2K, Trucklover86 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,816.25)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-10 |      0.666 | $5,000.00      | $3,332.47       |
| 2023-12-10 |      0.061 | $3,000.00      | $184.17         |
| 2023-12-09 |      0.054 | $5,500.00      | $299.61         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
