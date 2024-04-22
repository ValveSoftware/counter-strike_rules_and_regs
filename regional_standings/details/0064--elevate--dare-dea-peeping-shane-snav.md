### Roster Details<br />
Team Name: Elevate<br />
Roster: dare, dea, Peeping, shane, snav<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [64](../standings_global.md)<br />
Regional Rank: [16]( ../standings_americas.md)<br />
Final Rank Value:  892.8<br />
<br />
Final Rank Value (892.8) = Starting Rank Value (871.2) + Head To Head Adjustments (21.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.412[<sup>1</sup>](#table2)
- Bounty Collected: 0.318[<sup>2</sup>](#table1)
- Opponent Network: 0.149[<sup>2</sup>](#table1)
- LAN Wins: 0.097[<sup>2</sup>](#table1)

The average of these factors is 0.244<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 871.2
- 400 + ( ( 0.244 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 871.2


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
|           48 |      115 | 2024-04-18 | Legacy           | L   | 1.000      | -            | -                | -                | -         |    -7.00 | dare, dea, Peeping, shane, snav                  |
|           47 |      123 | 2024-04-18 | M80              | L   | 1.000      | -            | -                | -                | -         |   -14.84 | dare, dea, Peeping, shane, snav                  |
|           46 |      167 | 2024-04-17 | Nouns            | W   | 1.000      | 0.143        | -                | 0.632 (0.090)    | 0 (0.000) |    16.23 | dare, dea, Peeping, shane, snav                  |
|           45 |      172 | 2024-04-17 | Wildcard         | W   | 1.000      | 0.143        | 0.021 (0.003)    | 0.503 (0.072)    | 0 (0.000) |    16.47 | dare, dea, Peeping, shane, snav                  |
|           44 |      321 | 2024-04-10 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -15.35 | dare, dea, Peeping, shane, snav                  |
|           43 |      327 | 2024-04-10 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -16.77 | dare, dea, Peeping, shane, snav                  |
|           42 |      555 | 2024-04-03 | LAG              | W   | 1.000      | 0.477        | 0.032 (0.015)    | 0.560 (0.267)    | 0 (0.000) |    16.19 | dare, dea, Peeping, shane, snav                  |
|           41 |      558 | 2024-04-03 | LAG              | L   | 1.000      | -            | -                | -                | -         |   -15.27 | dare, dea, Peeping, shane, snav                  |
|           40 |      731 | 2024-03-26 | BOSS             | W   | 1.000      | 0.477        | 0.034 (0.016)    | 0.530 (0.253)    | 0 (0.000) |    12.09 | dare, dea, Peeping, shane, snav                  |
|           39 |      738 | 2024-03-26 | BOSS             | W   | 1.000      | 0.477        | 0.034 (0.016)    | 0.530 (0.253)    | 0 (0.000) |    13.16 | dare, dea, Peeping, shane, snav                  |
|           38 |      905 | 2024-03-15 | Carpe Diem       | W   | 0.949      | 0.477        | 0.011 (0.005)    | 0.315 (0.143)    | 0 (0.000) |     8.55 | dare, dea, Peeping, shane, snav                  |
|           37 |      907 | 2024-03-15 | Carpe Diem       | W   | 0.949      | 0.477        | 0.011 (0.005)    | 0.315 (0.143)    | 0 (0.000) |     9.17 | dare, dea, Peeping, shane, snav                  |
|           36 |     1005 | 2024-03-12 | Party Astronauts | L   | 0.928      | -            | -                | -                | -         |   -16.62 | dare, dea, Peeping, shane, snav                  |
|           35 |     1105 | 2024-03-08 | Spirit           | L   | 0.899      | -            | -                | -                | -         |    -0.10 | dare, MRC9, Peeping, shane, snav                 |
|           34 |     1256 | 2024-03-02 | ODDIK            | L   | 0.861      | -            | -                | -                | -         |   -13.06 | dare, nbgee12, Peeping, shane, snav              |
|           33 |     1286 | 2024-03-01 | Complexity       | L   | 0.853      | -            | -                | -                | -         |    -1.90 | dare, nbgee12, Peeping, shane, snav              |
|           32 |     1674 | 2024-02-13 | Mythic           | L   | 0.742      | -            | -                | -                | -         |   -16.53 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|           31 |     1676 | 2024-02-13 | Mythic           | W   | 0.742      | 0.477        | -                | 0.413 (0.146)    | -         |     6.75 | dare, dea, Peeping, shane, snav                  |
|           30 |     1782 | 2024-02-04 | Wildcard         | W   | 0.682      | 0.143        | 0.021 (0.002)    | -                | -         |    10.54 | Infinite, JBa, SLIGHT, Sonic, stanislaw          |
|           29 |     1809 | 2024-02-03 | NRG              | W   | 0.675      | 0.143        | -                | 0.633 (0.061)    | -         |     8.23 | Brehze, daps, FaNg, HexT, oSee                   |
|           28 |     1871 | 2024-02-01 | Nouns            | W   | 0.662      | 0.143        | -                | 0.632 (0.060)    | -         |     5.86 | dare, dea, Peeping, shane, snav                  |
|           27 |     1874 | 2024-02-01 | BOSS             | W   | 0.661      | 0.143        | 0.034 (0.003)    | -                | -         |    10.12 | dare, dea, Peeping, shane, snav                  |
|           26 |     2221 | 2024-01-18 | NRG              | L   | 0.568      | -            | -                | -                | -         |   -10.91 | dare, dea, Peeping, shane, snav                  |
|           25 |     2271 | 2024-01-17 | regain           | W   | 0.562      | -            | -                | -                | -         |     1.13 | DYLAN, Joshyy, rayxts, sasha, Zucar              |
|           24 |     2313 | 2024-01-16 | Liquid           | L   | 0.555      | -            | -                | -                | -         |    -2.34 | cadiaN, NAF, skullz, Twistzz, YEKINDAR           |
|           23 |     2318 | 2024-01-16 | NRG              | W   | 0.555      | -            | -                | -                | -         |     6.83 | dare, dea, Peeping, shane, snav                  |
|           22 |     2323 | 2024-01-16 | Party Astronauts | W   | 0.555      | 0.143        | 0.020 (0.002)    | -                | -         |     7.18 | dare, dea, Peeping, shane, snav                  |
|           21 |     2365 | 2024-01-15 | Mythic           | W   | 0.548      | -            | -                | -                | -         |     6.19 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|           20 |     2392 | 2024-01-14 | Party Astronauts | W   | 0.543      | -            | -                | -                | -         |     7.46 | dare, dea, Peeping, shane, snav                  |
|           19 |     2401 | 2024-01-14 | For Fun          | W   | 0.541      | -            | -                | -                | -         |     4.88 | Momo, onter, Pluto, Tender, WOOHOO               |
|           18 |     2420 | 2024-01-13 | Liquid           | L   | 0.535      | -            | -                | -                | -         |    -2.00 | dare, dea, Peeping, shane, snav                  |
|           17 |     2456 | 2024-01-12 | LOS              | W   | 0.530      | -            | -                | -                | -         |     1.21 | history, JOTA, leo_drk, short, t9rnay            |
|           16 |     2467 | 2024-01-12 | NRG              | L   | 0.529      | -            | -                | -                | -         |    -9.52 | Brehze, daps, FaNg, HexT, oSee                   |
|           15 |     2704 | 2023-12-16 | Carpe Diem       | L   | 0.348      | -            | -                | -                | -         |    -7.18 | Cyrix, Lake, micro, Seb, Wolffe                  |
|           14 |     2801 | 2023-12-09 | Carpe Diem       | W   | 0.302      | -            | -                | -                | 1 (0.302) |     3.33 | arcade, Cyrix, Lake, Seb, Wolffe                 |
|           13 |     2803 | 2023-12-09 | BOSS             | W   | 0.302      | 0.333        | 0.034 (0.003)    | -                | 1 (0.302) |     4.94 | dare, nbgee12, Peeping, shane, snav              |
|           12 |     2806 | 2023-12-09 | MIGHT            | W   | 0.302      | -            | -                | -                | 1 (0.302) |     2.92 | danss, djay, Nifty, scar, stamina                |
|           11 |     2873 | 2023-12-06 | Evil Geniuses    | L   | 0.282      | -            | -                | -                | -         |    -6.71 | consti, dare, Fr3nk1e, shane, snav               |
|           10 |     2906 | 2023-12-05 | Mythic           | W   | 0.275      | -            | -                | -                | -         |     3.20 | Cooper, fl0m, freakazoid, Stewie2K, Trucklover86 |
|            9 |     3118 | 2023-11-22 | Take Flyte       | W   | 0.189      | -            | -                | -                | -         |     1.89 | CoJoMo, Gabe, mds, Sandman, xaler                |
|            8 |     3392 | 2023-11-11 | Eros             | W   | 0.115      | -            | -                | -                | -         |     0.76 | consti, dare, Fr3nk1e, shane, snav               |
|            7 |     3419 | 2023-11-10 | M80              | L   | 0.109      | -            | -                | -                | -         |    -1.25 | consti, dare, Fr3nk1e, shane, snav               |
|            6 |     3421 | 2023-11-10 | Nouns            | W   | 0.108      | -            | -                | -                | -         |     1.12 | consti, dare, Fr3nk1e, shane, snav               |
|            5 |     3428 | 2023-11-09 | Carpe Diem       | L   | 0.102      | -            | -                | -                | -         |    -2.08 | arcade, Cyrix, Lake, Seb, Wolffe                 |
|            4 |     3447 | 2023-11-08 | FLUFFY AIMERS    | L   | 0.095      | -            | -                | -                | -         |    -2.30 | consti, dare, Fr3nk1e, shane, snav               |
|            3 |     3473 | 2023-11-07 | Party Astronauts | L   | 0.089      | -            | -                | -                | -         |    -2.08 | ben1337, chop, Grizz, PwnAlone, spek             |
|            2 |     3590 | 2023-11-01 | NRG              | L   | 0.048      | -            | -                | -                | -         |    -0.95 | autimatic, HexT, Jeorge, junior, Walco           |
|            1 |     3834 | 2023-10-25 | Reason           | W   | 0.002      | -            | -                | -                | -         |     0.01 | consti, dare, Fr3nk1e, shane, snav               |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,156.13)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-10 |      0.914 | $5,000.00      | $4,569.46       |
| 2023-12-10 |      0.309 | $3,000.00      | $926.37         |
| 2023-12-09 |      0.302 | $5,500.00      | $1,660.30       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
