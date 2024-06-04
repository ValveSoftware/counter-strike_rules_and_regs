### Roster Details<br />
Team Name: Party Astronauts<br />
Roster: ben1337, cxzi, FaNg, Infinite, WolfY<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [66](../standings_global.md)<br />
Regional Rank: [17]( ../standings_americas.md)<br />
Final Rank Value:  947.9<br />
<br />
Final Rank Value (947.9) = Starting Rank Value (893.1) + Head To Head Adjustments (54.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.333[<sup>1</sup>](#table2)
- Bounty Collected: 0.344[<sup>2</sup>](#table1)
- Opponent Network: 0.232[<sup>2</sup>](#table1)
- LAN Wins: 0.107[<sup>2</sup>](#table1)

The average of these factors is 0.254<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 893.1
- 400 + ( ( 0.254 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 893.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           61 |      133 | 2024-05-22 | Nouns           | L   | 1.000      | -            | -                | -                | -         |   -14.32 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           60 |      143 | 2024-05-22 | M80             | W   | 1.000      | 0.477        | 0.135 (0.064)    | 0.789 (0.377)    | 0 (0.000) |    25.89 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           59 |      148 | 2024-05-22 | M80             | L   | 1.000      | -            | -                | -                | -         |    -5.12 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           58 |      181 | 2024-05-21 | Limitless       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.49 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           57 |      184 | 2024-05-21 | Limitless       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.69 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           56 |      217 | 2024-05-20 | G3              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.88 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           55 |      286 | 2024-05-18 | NRG             | L   | 1.000      | -            | -                | -                | -         |   -13.66 | ben1337, chop, cxzi, Infinite, WolfY |
|           54 |      318 | 2024-05-17 | Legacy          | W   | 1.000      | 0.303        | 0.024 (0.007)    | -                | 0 (0.000) |    20.17 | ben1337, chop, cxzi, Infinite, WolfY |
|           53 |      347 | 2024-05-16 | FLUFFY AIMERS   | W   | 1.000      | 0.477        | 0.018 (0.008)    | 0.315 (0.150)    | 0 (0.000) |    10.04 | ben1337, chop, cxzi, Infinite, WolfY |
|           52 |      350 | 2024-05-16 | FLUFFY AIMERS   | W   | 1.000      | 0.477        | 0.018 (0.008)    | -                | 0 (0.000) |    10.86 | ben1337, chop, cxzi, Infinite, WolfY |
|           51 |      440 | 2024-05-14 | Mythic          | W   | 1.000      | 0.477        | -                | 0.439 (0.209)    | 0 (0.000) |    12.12 | ben1337, chop, cxzi, RUSH, WolfY     |
|           50 |      448 | 2024-05-14 | Mythic          | L   | 1.000      | -            | -                | -                | -         |   -19.70 | ben1337, chop, cxzi, RUSH, WolfY     |
|           49 |      541 | 2024-05-11 | BOSS            | L   | 1.000      | -            | -                | -                | -         |   -19.78 | ben1337, chop, cxzi, RUSH, WolfY     |
|           48 |      547 | 2024-05-11 | Take Flyte      | L   | 1.000      | -            | -                | -                | -         |   -23.22 | ben1337, chop, cxzi, RUSH, WolfY     |
|           47 |      603 | 2024-05-08 | LAG             | W   | 1.000      | 0.477        | 0.014 (0.006)    | 0.440 (0.210)    | 0 (0.000) |    12.19 | ben1337, chop, cxzi, RUSH, WolfY     |
|           46 |      608 | 2024-05-08 | LAG             | W   | 1.000      | 0.477        | 0.014 (0.006)    | 0.440 (0.210)    | -         |    13.27 | ben1337, chop, cxzi, RUSH, WolfY     |
|           45 |      628 | 2024-05-07 | Elevate         | L   | 1.000      | -            | -                | -                | -         |   -17.83 | ben1337, chop, cxzi, RUSH, WolfY     |
|           44 |      629 | 2024-05-07 | Elevate         | W   | 1.000      | 0.477        | 0.013 (0.006)    | 0.528 (0.252)    | -         |    13.49 | ben1337, chop, cxzi, RUSH, WolfY     |
|           43 |      647 | 2024-05-06 | NRG             | L   | 1.000      | -            | -                | -                | -         |   -18.58 | ben1337, chop, cxzi, RUSH, WolfY     |
|           42 |      648 | 2024-05-06 | NRG             | W   | 1.000      | 0.477        | -                | 0.605 (0.288)    | -         |    12.67 | ben1337, chop, cxzi, RUSH, WolfY     |
|           41 |      719 | 2024-05-02 | Wildcard        | L   | 1.000      | -            | -                | -                | -         |   -16.89 | ben1337, chop, cxzi, RUSH, WolfY     |
|           40 |      720 | 2024-05-02 | Wildcard        | W   | 1.000      | 0.477        | 0.012 (0.006)    | 0.615 (0.293)    | -         |    14.51 | ben1337, chop, cxzi, RUSH, WolfY     |
|           39 |      856 | 2024-04-27 | Aurora          | L   | 0.983      | -            | -                | -                | -         |    -2.56 | ben1337, chop, cxzi, RUSH, WolfY     |
|           38 |      858 | 2024-04-26 | sunday school   | W   | 0.982      | -            | -                | -                | 1 (0.982) |     5.62 | ben1337, chop, cxzi, RUSH, WolfY     |
|           37 |      884 | 2024-04-25 | Aurora          | L   | 0.974      | -            | -                | -                | -         |    -2.23 | ben1337, chop, cxzi, RUSH, WolfY     |
|           36 |     1323 | 2024-04-09 | One More        | W   | 0.868      | -            | -                | -                | -         |     5.64 | ben1337, chop, cxzi, RUSH, WolfY     |
|           35 |     1330 | 2024-04-09 | One More        | W   | 0.868      | -            | -                | -                | -         |     5.93 | ben1337, chop, cxzi, RUSH, WolfY     |
|           34 |     1454 | 2024-04-04 | MIGHT           | W   | 0.834      | -            | -                | -                | -         |     5.03 | ben1337, chop, cxzi, RUSH, WolfY     |
|           33 |     1462 | 2024-04-04 | MIGHT           | W   | 0.834      | -            | -                | -                | -         |     5.26 | ben1337, chop, cxzi, RUSH, WolfY     |
|           32 |     1551 | 2024-04-02 | Take Flyte      | W   | 0.821      | -            | -                | -                | -         |     7.22 | ben1337, chop, CLASIA, cxzi, WolfY   |
|           31 |     1554 | 2024-04-02 | Nouns           | L   | 0.821      | -            | -                | -                | -         |   -11.34 | ben1337, chop, CLASIA, cxzi, WolfY   |
|           30 |     1633 | 2024-03-27 | Carpe Diem      | W   | 0.781      | -            | -                | -                | -         |     4.34 | ben1337, chop, cxzi, RUSH, WolfY     |
|           29 |     1637 | 2024-03-27 | Carpe Diem      | W   | 0.781      | -            | -                | -                | -         |     4.52 | ben1337, chop, cxzi, RUSH, WolfY     |
|           28 |     1679 | 2024-03-26 | Nouns           | L   | 0.775      | -            | -                | -                | -         |   -10.92 | ben1337, chop, cxzi, RUSH, WolfY     |
|           27 |     1683 | 2024-03-26 | Nouns           | L   | 0.775      | -            | -                | -                | -         |   -11.69 | ben1337, chop, cxzi, RUSH, WolfY     |
|           26 |     1761 | 2024-03-20 | BOSS            | W   | 0.735      | 0.477        | 0.016 (0.006)    | 0.477 (0.167)    | -         |     8.99 | ben1337, chop, cxzi, RUSH, WolfY     |
|           25 |     1765 | 2024-03-20 | BOSS            | W   | 0.735      | 0.477        | 0.016 (0.006)    | 0.477 (0.167)    | -         |     9.57 | ben1337, chop, cxzi, RUSH, WolfY     |
|           24 |     1782 | 2024-03-19 | Take Flyte      | W   | 0.728      | -            | -                | -                | -         |     6.78 | ben1337, chop, cxzi, RUSH, WolfY     |
|           23 |     1785 | 2024-03-19 | Take Flyte      | W   | 0.728      | -            | -                | -                | -         |     7.16 | ben1337, chop, cxzi, RUSH, WolfY     |
|           22 |     1914 | 2024-03-13 | Carpe Diem      | W   | 0.687      | -            | -                | -                | -         |     4.55 | ben1337, chop, cxzi, RUSH, WolfY     |
|           21 |     1952 | 2024-03-12 | Elevate         | W   | 0.681      | -            | -                | -                | -         |     9.97 | ben1337, chop, cxzi, RUSH, WolfY     |
|           20 |     2332 | 2024-02-24 | Wildcard        | L   | 0.567      | -            | -                | -                | -         |    -8.35 | ben1337, chop, cxzi, Walco, WolfY    |
|           19 |     2339 | 2024-02-24 | ex-CatEvil      | W   | 0.567      | -            | -                | -                | -         |     1.07 | ben1337, chop, cxzi, Walco, WolfY    |
|           18 |     2374 | 2024-02-22 | Liquid          | L   | 0.555      | -            | -                | -                | -         |    -0.22 | ben1337, chop, cxzi, Walco, WolfY    |
|           17 |     2376 | 2024-02-22 | NRG             | W   | 0.554      | -            | -                | -                | -         |     7.76 | ben1337, chop, cxzi, Walco, WolfY    |
|           16 |     2381 | 2024-02-22 | One More        | W   | 0.554      | -            | -                | -                | -         |     5.20 | ben1337, chop, cxzi, Walco, WolfY    |
|           15 |     2428 | 2024-02-20 | NRG             | W   | 0.542      | -            | -                | -                | -         |     7.83 | ben1337, chop, cxzi, Walco, WolfY    |
|           14 |     2429 | 2024-02-20 | Mythic          | W   | 0.541      | -            | -                | -                | -         |     7.17 | ben1337, chop, cxzi, Walco, WolfY    |
|           13 |     2453 | 2024-02-19 | NRG             | L   | 0.536      | -            | -                | -                | -         |    -9.17 | ben1337, chop, cxzi, Walco, WolfY    |
|           12 |     2456 | 2024-02-19 | G3              | W   | 0.534      | -            | -                | -                | -         |     5.26 | ben1337, chop, cxzi, Walco, WolfY    |
|           11 |     2782 | 2024-02-02 | NRG             | L   | 0.421      | -            | -                | -                | -         |    -7.46 | ben1337, chop, cxzi, viz, WolfY      |
|           10 |     2784 | 2024-02-02 | Carpe Diem      | W   | 0.421      | -            | -                | -                | -         |     2.57 | ben1337, chop, cxzi, viz, WolfY      |
|            9 |     2788 | 2024-02-02 | NRG             | L   | 0.420      | -            | -                | -                | -         |    -7.58 | ben1337, chop, cxzi, viz, WolfY      |
|            8 |     3216 | 2024-01-17 | MIGHT           | L   | 0.314      | -            | -                | -                | -         |    -7.60 | ben1337, chop, cxzi, viz, WolfY      |
|            7 |     3270 | 2024-01-16 | Elevate         | L   | 0.307      | -            | -                | -                | -         |    -5.46 | ben1337, chop, cxzi, viz, WolfY      |
|            6 |     3316 | 2024-01-15 | Zomblers        | W   | 0.301      | -            | -                | -                | -         |     0.85 | ben1337, chop, cxzi, viz, WolfY      |
|            5 |     3339 | 2024-01-14 | Elevate         | L   | 0.296      | -            | -                | -                | -         |    -5.44 | ben1337, chop, cxzi, viz, WolfY      |
|            4 |     3346 | 2024-01-14 | Liquid          | L   | 0.294      | -            | -                | -                | -         |    -0.12 | ben1337, chop, cxzi, viz, WolfY      |
|            3 |     3365 | 2024-01-13 | Complexity      | L   | 0.288      | -            | -                | -                | -         |    -0.22 | ben1337, chop, cxzi, viz, WolfY      |
|            2 |     3407 | 2024-01-12 | Carpe Diem      | W   | 0.282      | -            | -                | -                | -         |     1.64 | ben1337, chop, cxzi, viz, WolfY      |
|            1 |     3412 | 2024-01-12 | my life be like | W   | 0.282      | -            | -                | -                | -         |     2.14 | ben1337, chop, cxzi, viz, WolfY      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,970.44)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
