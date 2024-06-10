### Roster Details<br />
Team Name: Spirit<br />
Roster: chopper, donk, magixx, sh1ro, zont1x<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [3](../standings_global.md)<br />
Regional Rank: [3]( ../standings_europe.md)<br />
Final Rank Value:  1930.2<br />
<br />
Final Rank Value (1930.2) = Starting Rank Value (1885.5) + Head To Head Adjustments (44.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.728[<sup>2</sup>](#table1)
- Opponent Network: 0.352[<sup>2</sup>](#table1)
- LAN Wins: 0.901[<sup>2</sup>](#table1)

The average of these factors is 0.745<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1885.5
- 400 + ( ( 0.745 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1885.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |      418 | 2024-06-01 | Vitality      | L   | 1.000      | -            | -                | -                | -         |   -15.74 | chopper, donk, magixx, sh1ro, zont1x |
|           31 |      502 | 2024-05-29 | FaZe          | W   | 1.000      | 0.624        | 1.000 (0.624)    | 0.588 (0.367)    | 1 (1.000) |    16.93 | chopper, donk, magixx, sh1ro, zont1x |
|           30 |      531 | 2024-05-28 | Natus Vincere | W   | 1.000      | 0.624        | 1.000 (0.624)    | -                | 1 (1.000) |    12.93 | chopper, donk, magixx, sh1ro, zont1x |
|           29 |      547 | 2024-05-27 | FlyQuest      | W   | 1.000      | 0.624        | -                | 0.556 (0.347)    | 1 (1.000) |     2.09 | chopper, donk, magixx, sh1ro, zont1x |
|           28 |      769 | 2024-05-19 | MOUZ          | L   | 1.000      | -            | -                | -                | -         |   -10.88 | chopper, donk, magixx, sh1ro, zont1x |
|           27 |      806 | 2024-05-18 | Falcons       | W   | 1.000      | 0.769        | 0.327 (0.252)    | -                | 1 (1.000) |     2.12 | chopper, donk, magixx, sh1ro, zont1x |
|           26 |      870 | 2024-05-16 | HEROIC        | W   | 1.000      | 0.769        | 0.362 (0.278)    | 0.635 (0.488)    | 1 (1.000) |     6.59 | chopper, donk, magixx, sh1ro, zont1x |
|           25 |      928 | 2024-05-15 | Aurora        | W   | 1.000      | 0.769        | 0.513 (0.395)    | 0.918 (0.706)    | 1 (1.000) |     2.17 | chopper, donk, magixx, sh1ro, zont1x |
|           24 |     2117 | 2024-03-28 | FaZe          | L   | 0.708      | -            | -                | -                | -         |    -9.98 | chopper, donk, magixx, sh1ro, zont1x |
|           23 |     2225 | 2024-03-22 | Natus Vincere | W   | 0.667      | 1.000        | 1.000 (0.667)    | 0.312 (0.208)    | 1 (0.667) |     9.30 | chopper, donk, magixx, sh1ro, zont1x |
|           22 |     2240 | 2024-03-21 | Imperial      | W   | 0.661      | 1.000        | 0.415 (0.274)    | 0.799 (0.528)    | 1 (0.661) |     1.92 | chopper, donk, magixx, sh1ro, zont1x |
|           21 |     2252 | 2024-03-21 | Cloud9        | W   | 0.659      | 1.000        | -                | 0.308 (0.203)    | 1 (0.659) |     1.14 | chopper, donk, magixx, sh1ro, zont1x |
|           20 |     2497 | 2024-03-10 | Metizport     | W   | 0.587      | 0.535        | -                | 0.706 (0.222)    | -         |     0.13 | chopper, donk, magixx, sh1ro, zont1x |
|           19 |     2517 | 2024-03-09 | BIG           | W   | 0.580      | -            | -                | -                | -         |     1.14 | chopper, donk, magixx, sh1ro, zont1x |
|           18 |     2552 | 2024-03-08 | Elevate       | W   | 0.572      | -            | -                | -                | -         |     0.06 | chopper, donk, magixx, sh1ro, zont1x |
|           17 |     2907 | 2024-02-21 | HEROIC        | W   | 0.466      | -            | -                | -                | 1 (0.466) |     4.80 | chopper, donk, magixx, sh1ro, zont1x |
|           16 |     2938 | 2024-02-20 | MOUZ          | L   | 0.460      | -            | -                | -                | -         |    -5.70 | chopper, donk, magixx, sh1ro, zont1x |
|           15 |     2957 | 2024-02-19 | Astralis      | W   | 0.454      | -            | -                | -                | -         |     6.96 | chopper, donk, magixx, sh1ro, zont1x |
|           14 |     2972 | 2024-02-19 | ENCE          | W   | 0.451      | -            | -                | -                | -         |     1.10 | chopper, donk, magixx, sh1ro, zont1x |
|           13 |     3155 | 2024-02-11 | FaZe          | W   | 0.400      | 1.000        | 1.000 (0.400)    | 0.588 (0.235)    | -         |     7.83 | chopper, donk, magixx, sh1ro, zont1x |
|           12 |     3163 | 2024-02-10 | Falcons       | W   | 0.394      | -            | -                | -                | -         |     1.01 | chopper, donk, magixx, sh1ro, zont1x |
|           11 |     3212 | 2024-02-06 | FaZe          | W   | 0.366      | 1.000        | 1.000 (0.366)    | 0.588 (0.215)    | -         |     7.24 | chopper, donk, magixx, sh1ro, zont1x |
|           10 |     3241 | 2024-02-04 | Complexity    | W   | 0.353      | -            | -                | -                | -         |     2.22 | chopper, donk, magixx, sh1ro, zont1x |
|            9 |     3262 | 2024-02-03 | Natus Vincere | W   | 0.347      | 1.000        | 1.000 (0.347)    | -                | -         |     5.35 | chopper, donk, magixx, sh1ro, zont1x |
|            8 |     3336 | 2024-02-01 | The MongolZ   | W   | 0.332      | -            | -                | -                | -         |     5.95 | chopper, donk, magixx, sh1ro, zont1x |
|            7 |     3349 | 2024-01-31 | Apeks         | W   | 0.326      | -            | -                | -                | -         |     0.15 | chopper, donk, magixx, sh1ro, zont1x |
|            6 |     3441 | 2024-01-25 | FaZe          | L   | 0.285      | -            | -                | -                | -         |    -3.28 | baz, chopper, hally, sh1ro, zont1x   |
|            5 |     3456 | 2024-01-24 | Liquid        | L   | 0.279      | -            | -                | -                | -         |    -6.71 | baz, chopper, hally, sh1ro, zont1x   |
|            4 |     3573 | 2024-01-20 | MOUZ          | W   | 0.253      | -            | -                | -                | -         |     5.23 | chopper, donk, magixx, sh1ro, zont1x |
|            3 |     3627 | 2024-01-19 | ex-Preasy     | W   | 0.246      | -            | -                | -                | -         |     0.03 | chopper, donk, magixx, sh1ro, zont1x |
|            2 |     3670 | 2024-01-18 | Entropiq      | W   | 0.240      | -            | -                | -                | -         |     0.01 | chopper, donk, magixx, sh1ro, zont1x |
|            1 |     3698 | 2024-01-18 | KOI           | L   | 0.239      | -            | -                | -                | -         |    -7.47 | chopper, donk, magixx, sh1ro, zont1x |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($325,943.21)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-05-19 |      1.000 | $100,000.00    | $100,000.00     |
| 2024-03-31 |      0.727 | $45,000.00     | $32,713.55      |
| 2024-03-10 |      0.587 | $20,000.00     | $11,746.43      |
| 2024-02-11 |      0.400 | $400,000.00    | $159,950.00     |
| 2024-01-28 |      0.307 | $5,000.00      | $1,533.23       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
