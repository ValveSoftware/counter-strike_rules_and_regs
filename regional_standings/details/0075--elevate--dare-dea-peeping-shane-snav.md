### Roster Details<br />
Team Name: Elevate<br />
Roster: dare, dea, Peeping, shane, snav<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [75](../standings_global.md)<br />
Regional Rank: [15]( ../standings_americas.md)<br />
Final Rank Value:  898.3<br />
<br />
Final Rank Value (898.3) = Starting Rank Value (854.2) + Head To Head Adjustments (44.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.410[<sup>1</sup>](#table2)
- Bounty Collected: 0.329[<sup>2</sup>](#table1)
- Opponent Network: 0.145[<sup>2</sup>](#table1)
- LAN Wins: 0.070[<sup>2</sup>](#table1)

The average of these factors is 0.238<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 854.2
- 400 + ( ( 0.238 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 854.2


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
|           47 |      274 | 2024-04-23 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |   -15.35 | dare, dea, Peeping, shane, snav                  |
|           46 |      276 | 2024-04-23 | Wildcard         | W   | 1.000      | 0.477        | 0.025 (0.012)    | 0.490 (0.233)    | 0 (0.000) |    16.18 | dare, dea, Peeping, shane, snav                  |
|           45 |      411 | 2024-04-18 | Legacy           | L   | 1.000      | -            | -                | -                | -         |    -7.04 | dare, dea, Peeping, shane, snav                  |
|           44 |      419 | 2024-04-18 | M80              | L   | 1.000      | -            | -                | -                | -         |    -7.29 | dare, dea, Peeping, shane, snav                  |
|           43 |      463 | 2024-04-17 | Nouns            | W   | 1.000      | 0.143        | -                | 0.609 (0.087)    | 0 (0.000) |    16.22 | dare, dea, Peeping, shane, snav                  |
|           42 |      468 | 2024-04-17 | Wildcard         | W   | 1.000      | 0.143        | 0.025 (0.004)    | 0.490 (0.070)    | 0 (0.000) |    17.76 | dare, dea, Peeping, shane, snav                  |
|           41 |      617 | 2024-04-10 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -15.31 | dare, dea, Peeping, shane, snav                  |
|           40 |      623 | 2024-04-10 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -16.72 | dare, dea, Peeping, shane, snav                  |
|           39 |      851 | 2024-04-03 | LAG              | W   | 0.982      | 0.477        | 0.033 (0.015)    | 0.484 (0.227)    | 0 (0.000) |    15.72 | dare, dea, Peeping, shane, snav                  |
|           38 |      854 | 2024-04-03 | LAG              | L   | 0.982      | -            | -                | -                | -         |   -15.21 | dare, dea, Peeping, shane, snav                  |
|           37 |     1027 | 2024-03-26 | BOSS             | W   | 0.929      | 0.477        | 0.049 (0.022)    | 0.507 (0.225)    | 0 (0.000) |    12.41 | dare, dea, Peeping, shane, snav                  |
|           36 |     1034 | 2024-03-26 | BOSS             | W   | 0.929      | 0.477        | 0.049 (0.022)    | 0.507 (0.225)    | 0 (0.000) |    13.45 | dare, dea, Peeping, shane, snav                  |
|           35 |     1201 | 2024-03-15 | Carpe Diem       | W   | 0.856      | 0.477        | 0.009 (0.004)    | 0.253 (0.103)    | 0 (0.000) |     7.37 | dare, dea, Peeping, shane, snav                  |
|           34 |     1203 | 2024-03-15 | Carpe Diem       | W   | 0.855      | 0.477        | 0.009 (0.004)    | 0.253 (0.103)    | -         |     7.83 | dare, dea, Peeping, shane, snav                  |
|           33 |     1301 | 2024-03-12 | Party Astronauts | L   | 0.835      | -            | -                | -                | -         |   -13.47 | dare, dea, Peeping, shane, snav                  |
|           32 |     1401 | 2024-03-08 | Spirit           | L   | 0.806      | -            | -                | -                | -         |    -0.12 | dare, MRC9, Peeping, shane, snav                 |
|           31 |     1552 | 2024-03-02 | ODDIK            | L   | 0.768      | -            | -                | -                | -         |   -10.19 | dare, nbgee12, Peeping, shane, snav              |
|           30 |     1582 | 2024-03-01 | Complexity       | L   | 0.760      | -            | -                | -                | -         |    -0.60 | dare, nbgee12, Peeping, shane, snav              |
|           29 |     1970 | 2024-02-13 | Mythic           | L   | 0.649      | -            | -                | -                | -         |   -14.03 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|           28 |     1972 | 2024-02-13 | Mythic           | W   | 0.649      | 0.477        | -                | 0.402 (0.124)    | -         |     6.40 | dare, dea, Peeping, shane, snav                  |
|           27 |     2078 | 2024-02-04 | Wildcard         | W   | 0.588      | -            | -                | -                | -         |    10.07 | Infinite, JBa, SLIGHT, Sonic, stanislaw          |
|           26 |     2105 | 2024-02-03 | NRG              | W   | 0.581      | -            | -                | -                | -         |     7.16 | Brehze, daps, FaNg, HexT, oSee                   |
|           25 |     2167 | 2024-02-01 | Nouns            | W   | 0.568      | 0.143        | -                | 0.609 (0.049)    | -         |     5.01 | dare, dea, Peeping, shane, snav                  |
|           24 |     2170 | 2024-02-01 | BOSS             | W   | 0.568      | 0.143        | 0.049 (0.004)    | -                | -         |     9.44 | dare, dea, Peeping, shane, snav                  |
|           23 |     2517 | 2024-01-18 | NRG              | L   | 0.474      | -            | -                | -                | -         |    -9.18 | dare, dea, Peeping, shane, snav                  |
|           22 |     2567 | 2024-01-17 | regain           | W   | 0.468      | -            | -                | -                | -         |     0.98 | DYLAN, Joshyy, rayxts, sasha, Zucar              |
|           21 |     2609 | 2024-01-16 | Liquid           | L   | 0.462      | -            | -                | -                | -         |    -0.86 | cadiaN, NAF, skullz, Twistzz, YEKINDAR           |
|           20 |     2614 | 2024-01-16 | NRG              | W   | 0.461      | -            | -                | -                | -         |     5.66 | dare, dea, Peeping, shane, snav                  |
|           19 |     2619 | 2024-01-16 | Party Astronauts | W   | 0.461      | 0.143        | 0.035 (0.002)    | -                | -         |     7.32 | dare, dea, Peeping, shane, snav                  |
|           18 |     2661 | 2024-01-15 | Mythic           | W   | 0.455      | -            | -                | -                | -         |     5.45 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|           17 |     2688 | 2024-01-14 | Party Astronauts | W   | 0.450      | -            | -                | -                | -         |     7.51 | dare, dea, Peeping, shane, snav                  |
|           16 |     2697 | 2024-01-14 | For Fun          | W   | 0.448      | -            | -                | -                | -         |     4.27 | Momo, onter, Pluto, Tender, WOOHOO               |
|           15 |     2716 | 2024-01-13 | Liquid           | L   | 0.441      | -            | -                | -                | -         |    -0.72 | dare, dea, Peeping, shane, snav                  |
|           14 |     2752 | 2024-01-12 | LOS              | W   | 0.436      | -            | -                | -                | -         |     1.05 | history, JOTA, leo_drk, short, t9rnay            |
|           13 |     2763 | 2024-01-12 | NRG              | L   | 0.435      | -            | -                | -                | -         |    -7.91 | Brehze, daps, FaNg, HexT, oSee                   |
|           12 |     3000 | 2023-12-16 | Carpe Diem       | L   | 0.255      | -            | -                | -                | -         |    -5.46 | Cyrix, Lake, micro, Seb, Wolffe                  |
|           11 |     3097 | 2023-12-09 | Carpe Diem       | W   | 0.209      | -            | -                | -                | 1 (0.209) |     2.12 | arcade, Cyrix, Lake, Seb, Wolffe                 |
|           10 |     3099 | 2023-12-09 | BOSS             | W   | 0.209      | 0.333        | 0.049 (0.003)    | -                | 1 (0.209) |     3.62 | dare, nbgee12, Peeping, shane, snav              |
|            9 |     3102 | 2023-12-09 | MIGHT            | W   | 0.208      | -            | -                | -                | 1 (0.208) |     1.95 | danss, djay, Nifty, scar, stamina                |
|            8 |     3169 | 2023-12-06 | Evil Geniuses    | L   | 0.189      | -            | -                | -                | -         |    -4.50 | consti, dare, Fr3nk1e, shane, snav               |
|            7 |     3202 | 2023-12-05 | Mythic           | W   | 0.182      | -            | -                | -                | -         |     2.25 | Cooper, fl0m, freakazoid, Stewie2K, Trucklover86 |
|            6 |     3414 | 2023-11-22 | Take Flyte       | W   | 0.095      | -            | -                | -                | -         |     0.93 | CoJoMo, Gabe, mds, Sandman, xaler                |
|            5 |     3688 | 2023-11-11 | Eros             | W   | 0.022      | -            | -                | -                | -         |     0.13 | consti, dare, Fr3nk1e, shane, snav               |
|            4 |     3715 | 2023-11-10 | M80              | L   | 0.015      | -            | -                | -                | -         |    -0.04 | consti, dare, Fr3nk1e, shane, snav               |
|            3 |     3717 | 2023-11-10 | Nouns            | W   | 0.015      | -            | -                | -                | -         |     0.14 | consti, dare, Fr3nk1e, shane, snav               |
|            2 |     3724 | 2023-11-09 | Carpe Diem       | L   | 0.009      | -            | -                | -                | -         |    -0.19 | arcade, Cyrix, Lake, Seb, Wolffe                 |
|            1 |     3743 | 2023-11-08 | FLUFFY AIMERS    | L   | 0.002      | -            | -                | -                | -         |    -0.05 | consti, dare, Fr3nk1e, shane, snav               |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,896.50)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-10 |      0.821 | $5,000.00      | $4,102.93       |
| 2023-12-10 |      0.215 | $3,000.00      | $646.45         |
| 2023-12-09 |      0.209 | $5,500.00      | $1,147.12       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
