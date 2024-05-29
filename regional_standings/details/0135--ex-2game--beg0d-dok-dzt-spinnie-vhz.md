### Roster Details<br />
Team Name: ex-2GAME<br />
Roster: beg0d, dok, dzt, spinnie, vhz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [135](../standings_global.md)<br />
Regional Rank: [35]( ../standings_americas.md)<br />
Final Rank Value:  701.2<br />
<br />
Final Rank Value (701.2) = Starting Rank Value (714.0) + Head To Head Adjustments (-12.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.284[<sup>1</sup>](#table2)
- Bounty Collected: 0.285[<sup>2</sup>](#table1)
- Opponent Network: 0.078[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.162<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 714.0
- 400 + ( ( 0.162 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 714.0


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
|           30 |       42 | 2024-05-27 | Vikings KR  | W   | 1.000      | 0.384        | 0.004 (0.002)    | 0.078 (0.030)    | 0 (0.000) |    14.47 | beg0d, dok, dzt, spinnie, vhz               |
|           29 |      191 | 2024-05-21 | BESTIA      | L   | 1.000      | -            | -                | -                | -         |    -4.69 | luchov, meyern, naz, Noktse, tomaszin       |
|           28 |      194 | 2024-05-21 | BESTIA      | L   | 1.000      | -            | -                | -                | -         |    -4.91 | beg0d, dok, dzt, spinnie, vhz               |
|           27 |      400 | 2024-05-15 | Fluxo       | L   | 1.000      | -            | -                | -                | -         |    -2.66 | arT, chayJESUS, Lucaozy, nicks, zevy        |
|           26 |      402 | 2024-05-15 | Fluxo       | L   | 1.000      | -            | -                | -                | -         |    -2.74 | beg0d, dok, dzt, spinnie, vhz               |
|           25 |      458 | 2024-05-14 | 9z          | L   | 1.000      | -            | -                | -                | -         |    -1.22 | buda, dgt, HUASOPEEK, MartinezSa, max       |
|           24 |      463 | 2024-05-14 | 9z          | L   | 1.000      | -            | -                | -                | -         |    -1.23 | beg0d, dok, dzt, spinnie, vhz               |
|           23 |     1281 | 2024-04-10 | RED Canids  | L   | 0.874      | -            | -                | -                | -         |    -3.39 | dav1deuS, hardzao, nython, righi, venomzera |
|           22 |     1285 | 2024-04-10 | RED Canids  | L   | 0.873      | -            | -                | -                | -         |    -3.51 | beg0d, dok, dzt, santos, vhz                |
|           21 |     1443 | 2024-04-05 | adalYamigos | W   | 0.840      | 0.450        | 0.000 (0.000)    | 0.266 (0.100)    | 0 (0.000) |    16.04 | delboNi, f4stzin, piriajr, shz, zqkS        |
|           20 |     1444 | 2024-04-05 | adalYamigos | L   | 0.840      | -            | -                | -                | -         |   -10.38 | beg0d, dok, dzt, santos, vhz                |
|           19 |     1511 | 2024-04-03 | Sharks      | L   | 0.827      | -            | -                | -                | -         |    -5.28 | doc, drg, gafolo, rdnzao, togs              |
|           18 |     1514 | 2024-04-03 | Sharks      | L   | 0.827      | -            | -                | -                | -         |    -5.54 | beg0d, dok, dzt, santos, vhz                |
|           17 |     1647 | 2024-03-27 | Corinthians | W   | 0.781      | 0.450        | 0.000 (0.000)    | 0.124 (0.044)    | 0 (0.000) |     8.68 | abr, CutzMeretz, desh, legy, Leomonster     |
|           16 |     1650 | 2024-03-27 | Corinthians | L   | 0.780      | -            | -                | -                | -         |   -16.32 | beg0d, dok, dzt, santos, vhz                |
|           15 |     1688 | 2024-03-26 | Galorys     | L   | 0.774      | -            | -                | -                | -         |    -9.02 | detr0ittJ, happ, hoax, koala, ninjaZ        |
|           14 |     1690 | 2024-03-26 | Galorys     | L   | 0.774      | -            | -                | -                | -         |    -9.62 | beg0d, dok, dzt, santos, vhz                |
|           13 |     1771 | 2024-03-20 | Solid       | W   | 0.733      | 0.450        | 0.062 (0.020)    | 0.627 (0.207)    | 0 (0.000) |    16.23 | ALLE, CSO, gbb, Lcm, xureba                 |
|           12 |     1772 | 2024-03-20 | Solid       | L   | 0.733      | -            | -                | -                | -         |    -6.78 | beg0d, dok, dzt, santos, vhz                |
|           11 |     1856 | 2024-03-15 | ODDIK       | L   | 0.701      | -            | -                | -                | -         |    -5.07 | matios, naitte, ponter, Tuurtle, WOOD7      |
|           10 |     1857 | 2024-03-15 | ODDIK       | L   | 0.700      | -            | -                | -                | -         |    -5.30 | beg0d, dok, dzt, santos, vhz                |
|            9 |     2129 | 2024-03-05 | W7M         | W   | 0.634      | 0.450        | 0.003 (0.001)    | 0.385 (0.110)    | 0 (0.000) |    12.04 | fokiu, jz, saadzin, stormzyn, zede          |
|            8 |     2131 | 2024-03-05 | W7M         | W   | 0.634      | 0.450        | 0.003 (0.001)    | 0.385 (0.110)    | 0 (0.000) |    12.69 | beg0d, dok, dzt, santos, vhz                |
|            7 |     2335 | 2024-02-24 | Case        | L   | 0.567      | -            | -                | -                | -         |    -5.39 | RCF, RICIOLI, snow, urban0, yepz            |
|            6 |     2342 | 2024-02-24 | Case        | W   | 0.567      | 0.450        | 0.028 (0.007)    | 0.693 (0.177)    | 0 (0.000) |    12.79 | beg0d, dok, dzt, santos, vhz                |
|            5 |     2400 | 2024-02-21 | Imperial    | L   | 0.547      | -            | -                | -                | -         |    -0.17 | decenty, felps, HEN1, noway, VINI           |
|            4 |     2404 | 2024-02-21 | Imperial    | L   | 0.547      | -            | -                | -                | -         |    -0.17 | beg0d, dok, dzt, santos, vhz                |
|            3 |     2585 | 2024-02-14 | 9z          | L   | 0.501      | -            | -                | -                | -         |    -0.61 | buda, dgt, HUASOPEEK, MartinezSa, max       |
|            2 |     3454 | 2024-01-11 | adalYamigos | L   | 0.273      | -            | -                | -                | -         |    -5.15 | BRNZ1K, dok, dzt, santos, vhz               |
|            1 |     3461 | 2024-01-11 | Corinthians | W   | 0.273      | 0.143        | 0.000 (0.000)    | 0.124 (0.005)    | 0 (0.000) |     3.34 | BRNZ1K, dok, dzt, santos, vhz               |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($900.00)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
