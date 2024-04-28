### Roster Details<br />
Team Name: Heroic<br />
Roster: cadiaN, jabbi, sjuush, stavn, TeSeS<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [2](../standings_global.md)<br />
Regional Rank: [2]( ../standings_europe.md)<br />
Final Rank Value:  1741.3<br />
<br />
Final Rank Value (1741.3) = Starting Rank Value (1803.8) + Head To Head Adjustments (-62.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.822[<sup>1</sup>](#table2)
- Bounty Collected: 0.666[<sup>2</sup>](#table1)
- Opponent Network: 0.319[<sup>2</sup>](#table1)
- LAN Wins: 0.937[<sup>2</sup>](#table1)

The average of these factors is 0.686<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1803.8
- 400 + ( ( 0.686 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1803.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           45 |        0 | 2023-02-12 | G2                | L   | 1.000      | -            | -                | -                | -         |    -7.10 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|           44 |       33 | 2023-02-11 | Natus Vincere     | W   | 1.000      | 1.000        | 0.358 (0.358)    | 0.372 (0.372)    | 1 (1.000) |    12.33 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|           43 |      105 | 2023-02-07 | Vitality          | W   | 1.000      | 1.000        | 0.352 (0.352)    | 0.437 (0.437)    | 1 (1.000) |    10.06 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|           42 |      132 | 2023-02-06 | OG                | W   | 1.000      | 1.000        | 0.237 (0.237)    | 0.365 (0.365)    | 1 (1.000) |     7.59 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|           41 |      155 | 2023-02-05 | Complexity        | W   | 1.000      | 1.000        | 0.129 (0.129)    | 0.487 (0.487)    | 1 (1.000) |     2.95 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|           40 |      311 | 2023-01-29 | BIG               | W   | 1.000      | 0.571        | -                | 0.520 (0.297)    | 1 (1.000) |     3.34 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|           39 |      431 | 2023-01-25 | Vitality          | L   | 1.000      | -            | -                | -                | -         |   -22.00 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|           38 |      473 | 2023-01-24 | Evil Geniuses     | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.83 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|           37 |      545 | 2023-01-21 | Astralis          | W   | 1.000      | 0.571        | -                | 0.538 (0.308)    | 1 (1.000) |     2.29 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|           36 |      591 | 2023-01-19 | Evil Geniuses     | L   | 1.000      | -            | -                | -                | -         |   -30.79 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|           35 |      874 | 2022-12-15 | Natus Vincere     | L   | 0.805      | -            | -                | -                | -         |   -17.44 | cadiaN, jabbi, k0nfig, sjuush, TeSeS |
|           34 |      892 | 2022-12-14 | OG                | L   | 0.799      | -            | -                | -                | -         |   -21.82 | cadiaN, jabbi, k0nfig, sjuush, TeSeS |
|           33 |     1380 | 2022-11-27 | FaZe              | W   | 0.687      | 0.729        | 0.433 (0.217)    | -                | 1 (0.687) |     7.29 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|           32 |     1421 | 2022-11-26 | Liquid            | W   | 0.680      | 0.729        | 0.760 (0.377)    | 0.450 (0.223)    | 1 (0.680) |    11.02 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|           31 |     1457 | 2022-11-25 | G2                | W   | 0.673      | 0.729        | 1.000 (0.490)    | -                | 1 (0.673) |    15.22 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|           30 |     1483 | 2022-11-24 | FaZe              | L   | 0.665      | -            | -                | -                | -         |   -13.62 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|           29 |     1500 | 2022-11-23 | Ninjas in Pyjamas | W   | 0.659      | -            | -                | -                | -         |     1.10 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|           28 |     1643 | 2022-11-13 | Outsiders         | L   | 0.594      | -            | -                | -                | -         |   -13.16 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|           27 |     1648 | 2022-11-12 | FURIA             | W   | 0.588      | -            | -                | -                | -         |     1.25 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|           26 |     1656 | 2022-11-11 | Spirit            | W   | 0.580      | 1.000        | -                | 0.350 (0.203)    | -         |     1.60 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|           25 |     1682 | 2022-11-07 | Liquid            | W   | 0.554      | 1.000        | 0.760 (0.421)    | 0.450 (0.250)    | -         |     9.17 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|           24 |     1696 | 2022-11-06 | Cloud9            | L   | 0.547      | -            | -                | -                | -         |   -16.00 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|           23 |     1709 | 2022-11-05 | fnatic            | W   | 0.542      | 1.000        | 0.243 (0.132)    | 0.454 (0.246)    | -         |     2.30 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|           22 |     1721 | 2022-11-05 | Outsiders         | W   | 0.539      | 1.000        | 0.801 (0.432)    | -                | -         |     4.66 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|           21 |     1931 | 2022-10-23 | Astralis          | W   | 0.453      | -            | -                | -                | -         |     0.91 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|           20 |     1963 | 2022-10-22 | Sangal            | W   | 0.446      | -            | -                | -                | -         |     0.13 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|           19 |     2010 | 2022-10-20 | ECSTATIC          | W   | 0.434      | -            | -                | -                | -         |     0.08 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|           18 |     2304 | 2022-10-09 | OG                | W   | 0.360      | -            | -                | -                | -         |     2.08 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|           17 |     2317 | 2022-10-09 | Vitality          | W   | 0.358      | -            | -                | -                | -         |     3.10 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|           16 |     2333 | 2022-10-08 | BIG               | W   | 0.351      | -            | -                | -                | -         |     1.08 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|           15 |     2375 | 2022-10-06 | Sangal            | W   | 0.338      | -            | -                | -                | -         |     0.10 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|           14 |     2387 | 2022-10-05 | Outsiders         | L   | 0.333      | -            | -                | -                | -         |    -7.43 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|           13 |     2421 | 2022-10-04 | SAW               | W   | 0.326      | -            | -                | -                | -         |     0.24 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|           12 |     2542 | 2022-09-28 | Natus Vincere     | L   | 0.288      | -            | -                | -                | -         |    -5.90 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|           11 |     2852 | 2022-09-18 | Astralis          | W   | 0.220      | -            | -                | -                | -         |     0.45 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|           10 |     2894 | 2022-09-17 | HEET              | W   | 0.212      | -            | -                | -                | -         |     0.06 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|            9 |     2926 | 2022-09-16 | Complexity        | W   | 0.206      | -            | -                | -                | -         |     0.59 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|            8 |     2949 | 2022-09-15 | ENCE              | W   | 0.200      | -            | -                | -                | -         |     0.34 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|            7 |     3006 | 2022-09-14 | MOUZ              | L   | 0.191      | -            | -                | -                | -         |    -5.75 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|            6 |     3469 | 2022-08-28 | Ninjas in Pyjamas | L   | 0.080      | -            | -                | -                | -         |    -2.50 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|            5 |     3529 | 2022-08-27 | Liquid            | L   | 0.072      | -            | -                | -                | -         |    -1.04 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|            4 |     3682 | 2022-08-21 | FaZe              | W   | 0.033      | -            | -                | -                | -         |     0.37 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|            3 |     3699 | 2022-08-21 | BIG               | W   | 0.032      | -            | -                | -                | -         |     0.09 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|            2 |     3705 | 2022-08-21 | FaZe              | L   | 0.032      | -            | -                | -                | -         |    -0.64 | cadiaN, jabbi, sjuush, stavn, TeSeS  |
|            1 |     3708 | 2022-08-21 | BIG               | W   | 0.031      | -            | -                | -                | -         |     0.09 | cadiaN, jabbi, sjuush, stavn, TeSeS  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($287,966.28)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.61) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-01-29 |      1.000 | $17,500.00     | $17,500.00      |
| 2022-12-18 |      0.824 | $15,000.00     | $12,367.37      |
| 2022-11-27 |      0.687 | $200,000.00    | $137,387.47     |
| 2022-11-13 |      0.594 | $170,000.00    | $100,907.53     |
| 2022-10-23 |      0.453 | $20,000.00     | $9,067.42       |
| 2022-10-02 |      0.314 | $32,000.00     | $10,049.26      |
| 2022-08-28 |      0.081 | $8,500.00      | $687.22         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
