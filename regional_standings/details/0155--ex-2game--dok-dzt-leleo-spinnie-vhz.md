### Roster Details<br />
Team Name: ex-2GAME<br />
Roster: dok, dzt, leleo, spinnie, vhz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [155](../standings_global.md)<br />
Regional Rank: [41]( ../standings_americas.md)<br />
Final Rank Value:  695.9<br />
<br />
Final Rank Value (695.9) = Starting Rank Value (717.3) + Head To Head Adjustments (-21.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.283[<sup>1</sup>](#table2)
- Bounty Collected: 0.276[<sup>2</sup>](#table1)
- Opponent Network: 0.077[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.159<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 717.3
- 400 + ( ( 0.159 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 717.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |      412 | 2024-06-01 | Case        | L   | 1.000      | -            | -                | -                | -         |    -8.63 | dok, dzt, leleo, spinnie, vhz               |
|           31 |      482 | 2024-05-30 | Solid       | L   | 1.000      | -            | -                | -                | -         |    -8.84 | dok, dzt, leleo, spinnie, vhz               |
|           30 |      542 | 2024-05-27 | Vikings KR  | W   | 1.000      | 0.384        | 0.004 (0.001)    | 0.225 (0.086)    | 0 (0.000) |    16.32 | beg0d, dok, dzt, spinnie, vhz               |
|           29 |      691 | 2024-05-21 | BESTIA      | L   | 1.000      | -            | -                | -                | -         |    -4.42 | luchov, meyern, naz, Noktse, tomaszin       |
|           28 |      694 | 2024-05-21 | BESTIA      | L   | 1.000      | -            | -                | -                | -         |    -4.61 | beg0d, dok, dzt, spinnie, vhz               |
|           27 |      900 | 2024-05-15 | Fluxo       | L   | 1.000      | -            | -                | -                | -         |    -2.70 | arT, chayJESUS, Lucaozy, nicks, zevy        |
|           26 |      902 | 2024-05-15 | Fluxo       | L   | 1.000      | -            | -                | -                | -         |    -2.77 | beg0d, dok, dzt, spinnie, vhz               |
|           25 |      958 | 2024-05-14 | 9z          | L   | 1.000      | -            | -                | -                | -         |    -0.92 | buda, dgt, HUASOPEEK, MartinezSa, max       |
|           24 |      963 | 2024-05-14 | 9z          | L   | 1.000      | -            | -                | -                | -         |    -0.93 | beg0d, dok, dzt, spinnie, vhz               |
|           23 |     1781 | 2024-04-10 | RED Canids  | L   | 0.795      | -            | -                | -                | -         |    -2.69 | dav1deuS, hardzao, nython, righi, venomzera |
|           22 |     1785 | 2024-04-10 | RED Canids  | L   | 0.794      | -            | -                | -                | -         |    -2.76 | beg0d, dok, dzt, santos, vhz                |
|           21 |     1943 | 2024-04-05 | adalYamigos | W   | 0.761      | 0.450        | 0.000 (0.000)    | 0.212 (0.073)    | 0 (0.000) |    13.68 | delboNi, f4stzin, piriajr, shz, zqkS        |
|           20 |     1944 | 2024-04-05 | adalYamigos | L   | 0.761      | -            | -                | -                | -         |   -10.37 | beg0d, dok, dzt, santos, vhz                |
|           19 |     2011 | 2024-04-03 | Sharks      | L   | 0.748      | -            | -                | -                | -         |    -4.13 | doc, drg, gafolo, rdnzao, togs              |
|           18 |     2014 | 2024-04-03 | Sharks      | L   | 0.748      | -            | -                | -                | -         |    -4.29 | beg0d, dok, dzt, santos, vhz                |
|           17 |     2147 | 2024-03-27 | Corinthians | W   | 0.701      | 0.450        | 0.000 (0.000)    | 0.218 (0.069)    | 0 (0.000) |     8.81 | abr, CutzMeretz, desh, legy, Leomonster     |
|           16 |     2150 | 2024-03-27 | Corinthians | L   | 0.701      | -            | -                | -                | -         |   -13.62 | beg0d, dok, dzt, santos, vhz                |
|           15 |     2188 | 2024-03-26 | Galorys     | L   | 0.695      | -            | -                | -                | -         |    -7.63 | detr0ittJ, happ, hoax, koala, ninjaZ        |
|           14 |     2190 | 2024-03-26 | Galorys     | L   | 0.695      | -            | -                | -                | -         |    -8.07 | beg0d, dok, dzt, santos, vhz                |
|           13 |     2271 | 2024-03-20 | Solid       | W   | 0.654      | 0.450        | 0.055 (0.016)    | 0.604 (0.178)    | 0 (0.000) |    14.75 | ALLE, CSO, gbb, Lcm, xureba                 |
|           12 |     2272 | 2024-03-20 | Solid       | L   | 0.654      | -            | -                | -                | -         |    -5.82 | beg0d, dok, dzt, santos, vhz                |
|           11 |     2356 | 2024-03-15 | ODDIK       | L   | 0.622      | -            | -                | -                | -         |    -4.32 | matios, naitte, ponter, Tuurtle, WOOD7      |
|           10 |     2357 | 2024-03-15 | ODDIK       | L   | 0.621      | -            | -                | -                | -         |    -4.49 | beg0d, dok, dzt, santos, vhz                |
|            9 |     2629 | 2024-03-05 | W7M         | W   | 0.555      | 0.450        | 0.002 (0.000)    | 0.426 (0.106)    | 0 (0.000) |    10.82 | fokiu, jz, saadzin, stormzyn, zede          |
|            8 |     2631 | 2024-03-05 | W7M         | W   | 0.555      | 0.450        | 0.002 (0.000)    | 0.426 (0.106)    | 0 (0.000) |    11.32 | beg0d, dok, dzt, santos, vhz                |
|            7 |     2835 | 2024-02-24 | Case        | L   | 0.488      | -            | -                | -                | -         |    -4.52 | RCF, RICIOLI, snow, urban0, yepz            |
|            6 |     2842 | 2024-02-24 | Case        | W   | 0.488      | 0.450        | 0.027 (0.006)    | 0.656 (0.144)    | 0 (0.000) |    11.11 | beg0d, dok, dzt, santos, vhz                |
|            5 |     2900 | 2024-02-21 | Imperial    | L   | 0.468      | -            | -                | -                | -         |    -0.15 | decenty, felps, HEN1, noway, VINI           |
|            4 |     2904 | 2024-02-21 | Imperial    | L   | 0.468      | -            | -                | -                | -         |    -0.15 | beg0d, dok, dzt, santos, vhz                |
|            3 |     3085 | 2024-02-14 | 9z          | L   | 0.422      | -            | -                | -                | -         |    -0.39 | buda, dgt, HUASOPEEK, MartinezSa, max       |
|            2 |     3954 | 2024-01-11 | adalYamigos | L   | 0.194      | -            | -                | -                | -         |    -3.77 | BRNZ1K, dok, dzt, santos, vhz               |
|            1 |     3961 | 2024-01-11 | Corinthians | W   | 0.194      | 0.143        | 0.000 (0.000)    | 0.218 (0.006)    | 0 (0.000) |     2.73 | BRNZ1K, dok, dzt, santos, vhz               |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($900.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
