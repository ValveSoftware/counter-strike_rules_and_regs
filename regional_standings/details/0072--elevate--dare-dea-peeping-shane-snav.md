### Roster Details<br />
Team Name: Elevate<br />
Roster: dare, dea, Peeping, shane, snav<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [72](../standings_global.md)<br />
Regional Rank: [18]( ../standings_americas.md)<br />
Final Rank Value:  985.7<br />
<br />
Final Rank Value (985.7) = Starting Rank Value (871.2) + Head To Head Adjustments (114.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.381[<sup>1</sup>](#table2)
- Bounty Collected: 0.350[<sup>2</sup>](#table1)
- Opponent Network: 0.214[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.236<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 871.2
- 400 + ( ( 0.236 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 871.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           64 |      151 | 2024-06-07 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -13.86 | dare, dea, Peeping, shane, snav              |
|           63 |      156 | 2024-06-07 | Nouns            | W   | 1.000      | 0.143        | 0.064 (0.009)    | -                | 0 (0.000) |    17.82 | dare, dea, Peeping, shane, snav              |
|           62 |      160 | 2024-06-07 | Legacy           | L   | 1.000      | -            | -                | -                | -         |   -11.86 | dare, dea, Peeping, shane, snav              |
|           61 |      200 | 2024-06-06 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -13.26 | dare, dea, Peeping, shane, snav              |
|           60 |      212 | 2024-06-06 | FlyQuest RED     | W   | 1.000      | 0.384        | 0.028 (0.011)    | -                | 0 (0.000) |     8.17 | dare, dea, Peeping, shane, snav              |
|           59 |      269 | 2024-06-05 | Mythic           | W   | 1.000      | 0.477        | -                | 0.391 (0.187)    | 0 (0.000) |    11.22 | dare, dea, Peeping, shane, snav              |
|           58 |      321 | 2024-06-04 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |   -15.31 | dare, dea, Peeping, shane, snav              |
|           57 |      634 | 2024-05-22 | NRG              | W   | 1.000      | 0.477        | 0.024 (0.011)    | 0.578 (0.276)    | 0 (0.000) |    14.98 | dare, dea, Peeping, shane, snav              |
|           56 |      639 | 2024-05-22 | NRG              | W   | 1.000      | 0.477        | 0.024 (0.011)    | 0.578 (0.276)    | 0 (0.000) |    16.36 | dare, dea, Peeping, shane, snav              |
|           55 |      682 | 2024-05-21 | One More         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.01 | dare, dea, Peeping, shane, snav              |
|           54 |      686 | 2024-05-21 | One More         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.26 | dare, dea, Peeping, shane, snav              |
|           53 |      721 | 2024-05-20 | Mythic           | L   | 1.000      | -            | -                | -                | -         |   -20.49 | dare, dea, Peeping, shane, snav              |
|           52 |      814 | 2024-05-17 | FLUFFY AIMERS    | W   | 1.000      | 0.477        | 0.016 (0.008)    | 0.354 (0.169)    | 0 (0.000) |     7.74 | dare, dea, Peeping, shane, snav              |
|           51 |      815 | 2024-05-17 | FLUFFY AIMERS    | W   | 1.000      | 0.477        | 0.016 (0.008)    | 0.354 (0.169)    | 0 (0.000) |     8.28 | dare, dea, Peeping, shane, snav              |
|           50 |      885 | 2024-05-15 | Limitless        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.67 | dare, dea, Peeping, shane, snav              |
|           49 |      892 | 2024-05-15 | Limitless        | W   | 1.000      | -            | -                | -                | -         |     4.89 | dare, dea, Peeping, shane, snav              |
|           48 |      938 | 2024-05-14 | M80              | L   | 1.000      | -            | -                | -                | -         |    -4.64 | dare, dea, Peeping, shane, snav              |
|           47 |      944 | 2024-05-14 | M80              | L   | 1.000      | -            | -                | -                | -         |    -4.85 | dare, dea, Peeping, shane, snav              |
|           46 |      955 | 2024-05-14 | Take Flyte       | W   | 1.000      | 0.477        | -                | 0.348 (0.166)    | -         |     8.85 | dare, dea, Peeping, shane, snav              |
|           45 |      959 | 2024-05-14 | Take Flyte       | W   | 1.000      | 0.477        | -                | 0.348 (0.166)    | -         |     9.52 | dare, dea, Peeping, shane, snav              |
|           44 |     1013 | 2024-05-12 | NRG              | L   | 1.000      | -            | -                | -                | -         |   -15.67 | dare, dea, intra, Peeping, snav              |
|           43 |     1033 | 2024-05-11 | Nouns            | W   | 1.000      | 0.270        | 0.064 (0.017)    | -                | -         |    17.92 | dare, dea, intra, Peeping, snav              |
|           42 |     1034 | 2024-05-11 | Wildcard         | W   | 1.000      | 0.270        | 0.060 (0.016)    | -                | -         |    16.95 | dare, dea, intra, Peeping, snav              |
|           41 |     1037 | 2024-05-11 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -11.64 | dare, dea, intra, Peeping, snav              |
|           40 |     1104 | 2024-05-08 | MIGHT            | W   | 0.982      | -            | -                | -                | -         |     3.83 | dare, dea, Peeping, shane, snav              |
|           39 |     1106 | 2024-05-08 | MIGHT            | W   | 0.982      | -            | -                | -                | -         |     3.98 | dare, dea, Peeping, shane, snav              |
|           38 |     1128 | 2024-05-07 | Party Astronauts | W   | 0.976      | 0.477        | 0.048 (0.023)    | 0.677 (0.315)    | -         |    18.33 | dare, dea, Peeping, shane, snav              |
|           37 |     1129 | 2024-05-07 | Party Astronauts | L   | 0.975      | -            | -                | -                | -         |   -12.18 | dare, dea, Peeping, shane, snav              |
|           36 |     1425 | 2024-04-23 | Wildcard         | L   | 0.882      | -            | -                | -                | -         |   -12.28 | dare, dea, Peeping, shane, snav              |
|           35 |     1427 | 2024-04-23 | Wildcard         | W   | 0.882      | 0.477        | 0.060 (0.025)    | 0.591 (0.249)    | -         |    15.76 | dare, dea, Peeping, shane, snav              |
|           34 |     1562 | 2024-04-18 | Legacy           | L   | 0.849      | -            | -                | -                | -         |    -7.60 | dare, dea, Peeping, shane, snav              |
|           33 |     1570 | 2024-04-18 | M80              | L   | 0.848      | -            | -                | -                | -         |    -4.88 | dare, dea, Peeping, shane, snav              |
|           32 |     1614 | 2024-04-17 | Nouns            | W   | 0.842      | -            | -                | -                | -         |    16.71 | dare, dea, Peeping, shane, snav              |
|           31 |     1619 | 2024-04-17 | Wildcard         | W   | 0.841      | -            | -                | -                | -         |    16.36 | dare, dea, Peeping, shane, snav              |
|           30 |     1768 | 2024-04-10 | Nouns            | L   | 0.795      | -            | -                | -                | -         |    -9.02 | dare, dea, Peeping, shane, snav              |
|           29 |     1774 | 2024-04-10 | Nouns            | L   | 0.795      | -            | -                | -                | -         |    -9.63 | dare, dea, Peeping, shane, snav              |
|           28 |     2002 | 2024-04-03 | LAG              | W   | 0.749      | 0.477        | -                | 0.484 (0.173)    | -         |    11.83 | dare, dea, Peeping, shane, snav              |
|           27 |     2005 | 2024-04-03 | LAG              | L   | 0.748      | -            | -                | -                | -         |   -11.95 | dare, dea, Peeping, shane, snav              |
|           26 |     2178 | 2024-03-26 | BOSS             | W   | 0.696      | -            | -                | -                | -         |     8.73 | dare, dea, Peeping, shane, snav              |
|           25 |     2185 | 2024-03-26 | BOSS             | W   | 0.695      | -            | -                | -                | -         |     9.27 | dare, dea, Peeping, shane, snav              |
|           24 |     2352 | 2024-03-15 | Carpe Diem       | W   | 0.622      | -            | -                | -                | -         |     6.68 | dare, dea, Peeping, shane, snav              |
|           23 |     2354 | 2024-03-15 | Carpe Diem       | W   | 0.622      | -            | -                | -                | -         |     7.02 | dare, dea, Peeping, shane, snav              |
|           22 |     2452 | 2024-03-12 | Party Astronauts | L   | 0.602      | -            | -                | -                | -         |    -7.51 | dare, dea, Peeping, shane, snav              |
|           21 |     2552 | 2024-03-08 | Spirit           | L   | 0.572      | -            | -                | -                | -         |    -0.06 | dare, MRC9, Peeping, shane, snav             |
|           20 |     2703 | 2024-03-02 | ODDIK            | L   | 0.534      | -            | -                | -                | -         |    -6.95 | dare, nbgee12, Peeping, shane, snav          |
|           19 |     2733 | 2024-03-01 | Complexity       | L   | 0.527      | -            | -                | -                | -         |    -0.28 | dare, nbgee12, Peeping, shane, snav          |
|           18 |     3121 | 2024-02-13 | Mythic           | L   | 0.416      | -            | -                | -                | -         |    -7.70 | Cooper, fl0m, freakazoid, hate, Trucklover86 |
|           17 |     3123 | 2024-02-13 | Mythic           | W   | 0.415      | -            | -                | -                | -         |     5.49 | dare, dea, Peeping, shane, snav              |
|           16 |     3229 | 2024-02-04 | Wildcard         | W   | 0.355      | -            | -                | -                | -         |     7.02 | Infinite, JBa, SLIGHT, Sonic, stanislaw      |
|           15 |     3256 | 2024-02-03 | NRG              | W   | 0.348      | -            | -                | -                | -         |     5.35 | Brehze, daps, FaNg, HexT, oSee               |
|           14 |     3318 | 2024-02-01 | Nouns            | W   | 0.335      | -            | -                | -                | -         |     6.27 | dare, dea, Peeping, shane, snav              |
|           13 |     3321 | 2024-02-01 | BOSS             | W   | 0.334      | -            | -                | -                | -         |     4.81 | dare, dea, Peeping, shane, snav              |
|           12 |     3668 | 2024-01-18 | NRG              | L   | 0.241      | -            | -                | -                | -         |    -3.89 | dare, dea, Peeping, shane, snav              |
|           11 |     3718 | 2024-01-17 | regain           | W   | 0.235      | -            | -                | -                | -         |     0.46 | DYLAN, Joshyy, rayxts, sasha, Zucar          |
|           10 |     3760 | 2024-01-16 | Liquid           | L   | 0.229      | -            | -                | -                | -         |    -0.08 | cadiaN, NAF, skullz, Twistzz, YEKINDAR       |
|            9 |     3765 | 2024-01-16 | NRG              | W   | 0.228      | -            | -                | -                | -         |     3.56 | dare, dea, Peeping, shane, snav              |
|            8 |     3770 | 2024-01-16 | Party Astronauts | W   | 0.228      | -            | -                | -                | -         |     4.58 | dare, dea, Peeping, shane, snav              |
|            7 |     3812 | 2024-01-15 | Mythic           | W   | 0.222      | -            | -                | -                | -         |     3.30 | Cooper, fl0m, freakazoid, hate, Trucklover86 |
|            6 |     3839 | 2024-01-14 | Party Astronauts | W   | 0.216      | -            | -                | -                | -         |     4.46 | dare, dea, Peeping, shane, snav              |
|            5 |     3848 | 2024-01-14 | For Fun          | W   | 0.214      | -            | -                | -                | -         |     1.77 | Momo, onter, Pluto, Tender, WOOHOO           |
|            4 |     3867 | 2024-01-13 | Liquid           | L   | 0.208      | -            | -                | -                | -         |    -0.07 | dare, dea, Peeping, shane, snav              |
|            3 |     3903 | 2024-01-12 | LOS              | W   | 0.203      | -            | -                | -                | -         |     0.43 | history, JOTA, leo_drk, short, t9rnay        |
|            2 |     3914 | 2024-01-12 | NRG              | L   | 0.202      | -            | -                | -                | -         |    -3.08 | Brehze, daps, FaNg, HexT, oSee               |
|            1 |     4151 | 2023-12-16 | Carpe Diem       | L   | 0.022      | -            | -                | -                | -         |    -0.42 | Cyrix, Lake, micro, Seb, Wolffe              |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,186.61)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $4,250.00      | $4,250.00       |
| 2024-03-10 |      0.587 | $5,000.00      | $2,936.61       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
