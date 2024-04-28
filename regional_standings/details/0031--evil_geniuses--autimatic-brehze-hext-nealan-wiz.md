### Roster Details<br />
Team Name: Evil Geniuses<br />
Roster: autimatic, Brehze, HexT, neaLaN, wiz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [31](../standings_global.md)<br />
Regional Rank: [5]( ../standings_americas.md)<br />
Final Rank Value:  1046.4<br />
<br />
Final Rank Value (1046.4) = Starting Rank Value (1056.1) + Head To Head Adjustments (-9.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.452[<sup>1</sup>](#table2)
- Bounty Collected: 0.421[<sup>2</sup>](#table1)
- Opponent Network: 0.096[<sup>2</sup>](#table1)
- LAN Wins: 0.313[<sup>2</sup>](#table1)

The average of these factors is 0.321<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1056.1
- 400 + ( ( 0.321 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1056.1


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
|           32 |      175 | 2023-02-04 | Illuminar         | L   | 1.000      | -            | -                | -                | -         |   -17.53 | autimatic, Brehze, HexT, neaLaN, wiz        |
|           31 |      209 | 2023-02-02 | Sprout            | L   | 1.000      | -            | -                | -                | -         |   -14.37 | autimatic, Brehze, HexT, neaLaN, wiz        |
|           30 |      246 | 2023-02-01 | fnatic            | L   | 1.000      | -            | -                | -                | -         |    -3.00 | autimatic, Brehze, HexT, neaLaN, wiz        |
|           29 |      383 | 2023-01-27 | Complexity        | L   | 1.000      | -            | -                | -                | -         |    -6.92 | autimatic, Brehze, HexT, neaLaN, wiz        |
|           28 |      473 | 2023-01-24 | Heroic            | L   | 1.000      | -            | -                | -                | -         |    -0.83 | autimatic, Brehze, HexT, neaLaN, wiz        |
|           27 |      550 | 2023-01-21 | Vitality          | L   | 1.000      | -            | -                | -                | -         |    -2.10 | autimatic, Brehze, HexT, neaLaN, wiz        |
|           26 |      591 | 2023-01-19 | Heroic            | W   | 1.000      | 0.571        | 0.608 (0.347)    | 0.560 (0.320)    | 1 (1.000) |    30.79 | autimatic, Brehze, HexT, neaLaN, wiz        |
|           25 |      761 | 2022-12-18 | ATK               | L   | 0.828      | -            | -                | -                | -         |   -16.70 | autimatic, Brehze, HexT, PwnAlone, viz      |
|           24 |      934 | 2022-12-11 | ATK               | W   | 0.782      | 0.354        | 0.070 (0.019)    | 0.646 (0.179)    | 0 (0.000) |     9.23 | b0denmaster, djay, Fadey, MisteM, Swisher   |
|           23 |      940 | 2022-12-11 | MIBR              | W   | 0.781      | 0.354        | 0.089 (0.025)    | 0.586 (0.162)    | 0 (0.000) |     8.47 | autimatic, Brehze, jeorgesnorts, Walco, wiz |
|           22 |      971 | 2022-12-10 | Strife            | W   | 0.775      | 0.354        | 0.015 (0.004)    | 0.314 (0.086)    | 0 (0.000) |     4.52 | Infinite, J0LZ, reck, Snakes, tENSKI        |
|           21 |     1739 | 2022-11-02 | Cloud9            | L   | 0.521      | -            | -                | -                | -         |    -3.50 | autimatic, Brehze, CeRq, HexT, neaLaN       |
|           20 |     1762 | 2022-11-01 | 9z                | L   | 0.512      | -            | -                | -                | -         |   -11.23 | autimatic, Brehze, CeRq, HexT, neaLaN       |
|           19 |     1769 | 2022-10-31 | MOUZ              | L   | 0.508      | -            | -                | -                | -         |    -3.68 | autimatic, Brehze, CeRq, HexT, neaLaN       |
|           18 |     1778 | 2022-10-31 | IHC               | W   | 0.506      | 0.143        | 0.108 (0.008)    | 0.622 (0.045)    | 1 (0.506) |    12.55 | autimatic, Brehze, CeRq, HexT, neaLaN       |
|           17 |     1979 | 2022-10-21 | Fluxo             | L   | 0.441      | -            | -                | -                | -         |    -9.64 | autimatic, Brehze, CeRq, HexT, neaLaN       |
|           16 |     2308 | 2022-10-09 | Liquid            | L   | 0.359      | -            | -                | -                | -         |    -0.17 | autimatic, Brehze, CeRq, HexT, neaLaN       |
|           15 |     2363 | 2022-10-06 | 9z                | W   | 0.339      | 0.143        | 0.019 (0.001)    | 0.177 (0.009)    | 1 (0.339) |     3.00 | autimatic, Brehze, CeRq, HexT, neaLaN       |
|           14 |     2394 | 2022-10-05 | FURIA             | W   | 0.332      | 0.143        | 0.131 (0.006)    | 0.279 (0.013)    | 1 (0.332) |     7.97 | autimatic, Brehze, CeRq, HexT, neaLaN       |
|           13 |     2407 | 2022-10-05 | Nouns             | W   | 0.331      | -            | -                | -                | 1 (0.331) |     1.51 | autimatic, Brehze, CeRq, HexT, neaLaN       |
|           12 |     2620 | 2022-09-25 | FURIA             | L   | 0.267      | -            | -                | -                | -         |    -2.00 | autimatic, Brehze, CeRq, HexT, neaLaN       |
|           11 |     2669 | 2022-09-24 | Movistar Riders   | W   | 0.258      | 0.922        | 0.010 (0.002)    | 0.082 (0.020)    | 1 (0.258) |     1.37 | autimatic, Brehze, CeRq, HexT, neaLaN       |
|           10 |     2714 | 2022-09-23 | Eternal Fire      | W   | 0.252      | 0.922        | 0.034 (0.008)    | 0.496 (0.115)    | 1 (0.252) |     2.72 | autimatic, Brehze, CeRq, HexT, neaLaN       |
|            9 |     2745 | 2022-09-22 | Liquid            | L   | 0.247      | -            | -                | -                | -         |    -0.10 | autimatic, Brehze, CeRq, HexT, neaLaN       |
|            8 |     2793 | 2022-09-21 | Cloud9            | L   | 0.238      | -            | -                | -                | -         |    -1.58 | autimatic, Brehze, CeRq, HexT, neaLaN       |
|            7 |     3342 | 2022-09-02 | ATK               | W   | 0.114      | 0.143        | 0.070 (0.001)    | 0.646 (0.011)    | -         |     1.27 | autimatic, Brehze, CeRq, HexT, neaLaN       |
|            6 |     3373 | 2022-09-01 | Disconnected      | W   | 0.108      | -            | -                | -                | -         |     0.48 | autimatic, Brehze, CeRq, HexT, neaLaN       |
|            5 |     3376 | 2022-09-01 | TeamOne           | W   | 0.108      | -            | -                | -                | -         |     0.95 | autimatic, Brehze, CeRq, HexT, neaLaN       |
|            4 |     3400 | 2022-08-31 | Limitless         | W   | 0.102      | -            | -                | -                | -         |     0.53 | autimatic, Brehze, CeRq, HexT, neaLaN       |
|            3 |     3576 | 2022-08-25 | Ninjas in Pyjamas | L   | 0.059      | -            | -                | -                | -         |    -1.54 | autimatic, Brehze, CeRq, HexT, neaLaN       |
|            2 |     3703 | 2022-08-21 | BIG               | L   | 0.032      | -            | -                | -                | -         |    -0.14 | Brehze, CeRq, HexT, neaLaN, RUSH            |
|            1 |     3710 | 2022-08-21 | FaZe              | L   | 0.031      | -            | -                | -                | -         |    -0.03 | Brehze, CeRq, HexT, neaLaN, RUSH            |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($29,180.66)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-03 |      1.000 | $2,500.00      | $2,500.00       |
| 2023-01-29 |      1.000 | $5,666.00      | $5,666.00       |
| 2022-12-11 |      0.782 | $9,000.00      | $7,040.80       |
| 2022-11-03 |      0.528 | $10,000.00     | $5,276.16       |
| 2022-10-23 |      0.455 | $5,000.00      | $2,272.85       |
| 2022-10-02 |      0.314 | $19,000.00     | $5,966.75       |
| 2022-08-28 |      0.081 | $5,666.00      | $458.09         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
