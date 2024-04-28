### Roster Details<br />
Team Name: IHC<br />
Roster: Annihilation, Bart4k, bLitz, sk0R, Techno<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [20](../standings_global.md)<br />
Regional Rank: [1]( ../standings_asia.md)<br />
Final Rank Value:  1221.1<br />
<br />
Final Rank Value (1221.1) = Starting Rank Value (1322.4) + Head To Head Adjustments (-101.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.508[<sup>1</sup>](#table2)
- Bounty Collected: 0.374[<sup>2</sup>](#table1)
- Opponent Network: 0.092[<sup>2</sup>](#table1)
- LAN Wins: 0.829[<sup>2</sup>](#table1)

The average of these factors is 0.451<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1322.4
- 400 + ( ( 0.451 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1322.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           41 |      119 | 2023-02-06 | FaZe                   | L   | 1.000      | -            | -                | -                | -         |    -1.86 | Annihilation, Bart4k, bLitz, sk0R, Techno |
|           40 |      138 | 2023-02-05 | Cloud9                 | W   | 1.000      | 1.000        | 0.114 (0.114)    | 0.287 (0.287)    | 1 (1.000) |    21.25 | Annihilation, Bart4k, bLitz, sk0R, Techno |
|           39 |      164 | 2023-02-04 | Liquid                 | L   | 1.000      | -            | -                | -                | -         |    -1.75 | Annihilation, Bart4k, bLitz, sk0R, Techno |
|           38 |      190 | 2023-02-03 | FURIA                  | W   | 1.000      | 0.143        | 0.131 (0.019)    | 0.279 (0.040)    | 1 (1.000) |    20.37 | Annihilation, Bart4k, bLitz, sk0R, Techno |
|           37 |      219 | 2023-02-02 | paiN                   | W   | 1.000      | 0.143        | 0.101 (0.014)    | 0.402 (0.057)    | 1 (1.000) |    11.21 | Annihilation, Bart4k, bLitz, sk0R, Techno |
|           36 |      251 | 2023-02-01 | Cloud9                 | L   | 1.000      | -            | -                | -                | -         |    -8.99 | Annihilation, Bart4k, bLitz, sk0R, Techno |
|           35 |      388 | 2023-01-27 | Lynn Vision            | W   | 1.000      | 0.143        | 0.052 (0.007)    | -                | -         |     6.07 | Annihilation, Bart4k, bLitz, sk0R, Techno |
|           34 |      392 | 2023-01-27 | Eruption               | W   | 1.000      | -            | -                | -                | -         |     4.28 | Annihilation, Bart4k, bLitz, sk0R, Techno |
|           33 |      413 | 2023-01-26 | Renewal                | W   | 1.000      | -            | -                | -                | -         |     1.66 | Annihilation, Bart4k, bLitz, sk0R, Techno |
|           32 |      423 | 2023-01-26 | Eruption               | L   | 1.000      | -            | -                | -                | -         |   -27.43 | Annihilation, Bart4k, bLitz, sk0R, Techno |
|           31 |      572 | 2023-01-20 | Lynn Vision            | W   | 1.000      | 0.143        | 0.052 (0.007)    | -                | -         |     5.31 | Annihilation, Bart4k, bLitz, sk0R, Techno |
|           30 |      624 | 2023-01-18 | Rare Atom              | L   | 1.000      | -            | -                | -                | -         |   -26.96 | Annihilation, Bart4k, bLitz, sk0R, Techno |
|           29 |      746 | 2022-12-24 | Lynn Vision            | L   | 0.865      | -            | -                | -                | -         |   -22.91 | Annihilation, Bart4k, bLitz, sk0R, Techno |
|           28 |      783 | 2022-12-18 | Lynn Vision            | L   | 0.826      | -            | -                | -                | -         |   -22.69 | Annihilation, bLitz, kabal, sk0R, Techno  |
|           27 |      822 | 2022-12-17 | NKT                    | W   | 0.818      | 0.371        | 0.024 (0.007)    | 0.236 (0.072)    | -         |     3.46 | Annihilation, bLitz, kabal, sk0R, Techno  |
|           26 |      845 | 2022-12-16 | Wings Up               | W   | 0.812      | -            | -                | -                | -         |     1.25 | Annihilation, bLitz, kabal, sk0R, Techno  |
|           25 |      877 | 2022-12-15 | Rare Atom              | W   | 0.805      | 0.371        | 0.062 (0.019)    | 0.228 (0.068)    | -         |     1.88 | Annihilation, bLitz, kabal, sk0R, Techno  |
|           24 |      896 | 2022-12-14 | Eruption               | W   | 0.799      | 0.371        | 0.015 (0.005)    | 0.206 (0.061)    | -         |     2.10 | Annihilation, bLitz, kabal, sk0R, Techno  |
|           23 |      918 | 2022-12-13 | NKT                    | L   | 0.792      | -            | -                | -                | -         |   -21.77 | Annihilation, bLitz, kabal, sk0R, Techno  |
|           22 |      962 | 2022-12-10 | BLUEJAYS               | L   | 0.776      | -            | -                | -                | -         |   -19.47 | Annihilation, bLitz, kabal, sk0R, Techno  |
|           21 |      997 | 2022-12-09 | farfaraway             | W   | 0.769      | 0.500        | 0.033 (0.013)    | 0.153 (0.059)    | 1 (0.769) |     3.47 | Annihilation, bLitz, kabal, sk0R, Techno  |
|           20 |     1025 | 2022-12-08 | BIG Academy            | W   | 0.762      | 0.500        | 0.020 (0.008)    | 0.434 (0.166)    | 1 (0.762) |     3.87 | Annihilation, bLitz, kabal, sk0R, Techno  |
|           19 |     1088 | 2022-12-07 | Vietnam                | W   | 0.752      | -            | -                | -                | 1 (0.752) |     0.16 | Annihilation, bLitz, kabal, sk0R, Techno  |
|           18 |     1155 | 2022-12-04 | OneTap                 | W   | 0.737      | -            | -                | -                | 1 (0.737) |     1.14 | Annihilation, bLitz, kabal, sk0R, Techno  |
|           17 |     1190 | 2022-12-04 | iNation                | W   | 0.731      | 0.143        | -                | 0.684 (0.071)    | 1 (0.731) |     4.46 | Annihilation, bLitz, kabal, sk0R, Techno  |
|           16 |     1197 | 2022-12-03 | Belgium                | W   | 0.730      | -            | -                | -                | 1 (0.730) |     0.16 | Annihilation, bLitz, kabal, sk0R, Techno  |
|           15 |     1748 | 2022-11-02 | OG                     | L   | 0.519      | -            | -                | -                | -         |    -3.82 | Annihilation, bLitz, kabal, sk0R, Techno  |
|           14 |     1753 | 2022-11-01 | 00NATION               | W   | 0.514      | -            | -                | -                | 1 (0.514) |     1.40 | Annihilation, bLitz, kabal, sk0R, Techno  |
|           13 |     1771 | 2022-10-31 | Outsiders              | L   | 0.507      | -            | -                | -                | -         |    -2.31 | Annihilation, bLitz, kabal, sk0R, Techno  |
|           12 |     1778 | 2022-10-31 | Evil Geniuses          | L   | 0.506      | -            | -                | -                | -         |   -12.55 | Annihilation, bLitz, kabal, sk0R, Techno  |
|           11 |     1935 | 2022-10-23 | Lynn Vision            | L   | 0.452      | -            | -                | -                | -         |   -13.18 | Annihilation, bLitz, kabal, sk0R, Techno  |
|           10 |     1966 | 2022-10-22 | ARAVT                  | W   | 0.445      | -            | -                | -                | -         |     0.43 | Annihilation, bLitz, kabal, sk0R, Techno  |
|            9 |     1992 | 2022-10-21 | NKT                    | W   | 0.439      | 0.371        | -                | 0.236 (0.038)    | -         |     1.36 | Annihilation, bLitz, kabal, sk0R, Techno  |
|            8 |     2023 | 2022-10-20 | Clutch                 | W   | 0.432      | -            | -                | -                | -         |     0.26 | Annihilation, bLitz, kabal, sk0R, Techno  |
|            7 |     2048 | 2022-10-19 | ARAVT                  | L   | 0.425      | -            | -                | -                | -         |   -13.01 | Annihilation, bLitz, kabal, sk0R, Techno  |
|            6 |     2074 | 2022-10-18 | Renewal                | W   | 0.418      | -            | -                | -                | -         |     0.34 | Annihilation, bLitz, kabal, sk0R, Techno  |
|            5 |     2334 | 2022-10-08 | Grayhound              | W   | 0.350      | -            | -                | -                | -         |     0.67 | Annihilation, bLitz, kabal, sk0R, Techno  |
|            4 |     2356 | 2022-10-06 | Invictus International | W   | 0.342      | -            | -                | -                | -         |     0.36 | Annihilation, bLitz, kabal, sk0R, Techno  |
|            3 |     3472 | 2022-08-28 | NKT                    | W   | 0.079      | -            | -                | -                | -         |     0.24 | Annihilation, bLitz, kabal, sk0R, Techno  |
|            2 |     3532 | 2022-08-27 | NKT                    | W   | 0.072      | -            | -                | -                | -         |     0.22 | Annihilation, bLitz, kabal, sk0R, Techno  |
|            1 |     3543 | 2022-08-27 | Mazaalai               | W   | 0.071      | -            | -                | -                | -         |     0.02 | Annihilation, bLitz, kabal, sk0R, Techno  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($50,941.32)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-12 |      1.000 | $16,000.00     | $16,000.00      |
| 2022-12-18 |      0.826 | $5,000.00      | $4,128.54       |
| 2022-12-10 |      0.776 | $30,000.00     | $23,275.69      |
| 2022-11-03 |      0.528 | $10,000.00     | $5,276.16       |
| 2022-10-23 |      0.452 | $5,000.00      | $2,260.94       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
