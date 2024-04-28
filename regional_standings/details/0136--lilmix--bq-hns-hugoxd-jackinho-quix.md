### Roster Details<br />
Team Name: Lilmix<br />
Roster: bq, hns, HugoXD, Jackinho, quix<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [136](../standings_global.md)<br />
Regional Rank: [93]( ../standings_europe.md)<br />
Final Rank Value:  736.1<br />
<br />
Final Rank Value (736.1) = Starting Rank Value (747.5) + Head To Head Adjustments (-11.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.376[<sup>1</sup>](#table2)
- Bounty Collected: 0.236[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.056[<sup>2</sup>](#table1)

The average of these factors is 0.170<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 747.5
- 400 + ( ( 0.170 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 747.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |      273 | 2023-01-31 | Eternal Fire      | L   | 1.000      | -            | -                | -                | -         |    -7.30 | bq, hns, HugoXD, Jackinho, quix |
|           19 |      489 | 2023-01-23 | GenOne            | L   | 1.000      | -            | -                | -                | -         |    -5.18 | bq, hns, HugoXD, Jackinho, quix |
|           18 |      564 | 2023-01-20 | JANO              | W   | 1.000      | 0.143        | 0.008 (0.001)    | 0.307 (0.044)    | 0 (0.000) |    15.99 | bq, hns, HugoXD, Jackinho, quix |
|           17 |      569 | 2023-01-20 | nomix             | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.20 | bq, hns, HugoXD, Jackinho, quix |
|           16 |      593 | 2023-01-19 | JANO              | L   | 1.000      | -            | -                | -                | -         |   -14.87 | bq, hns, HugoXD, Jackinho, quix |
|           15 |      780 | 2022-12-18 | Goodfellas        | W   | 0.826      | 0.360        | 0.008 (0.002)    | 0.100 (0.030)    | 0 (0.000) |    10.38 | bq, hns, Jackinho, quix, robiin |
|           14 |      929 | 2022-12-12 | PACT              | L   | 0.786      | -            | -                | -                | -         |   -10.85 | bq, hns, Jackinho, quix, robiin |
|           13 |     1175 | 2022-12-04 | Conquer           | W   | 0.733      | 0.360        | 0.008 (0.002)    | 0.132 (0.035)    | 0 (0.000) |     8.88 | bq, hns, Jackinho, quix, robiin |
|           12 |     1329 | 2022-11-29 | Vikings           | W   | 0.700      | 0.360        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.94 | bq, hns, Jackinho, quix, robiin |
|           11 |     1445 | 2022-11-25 | PROSPECTS         | L   | 0.674      | -            | -                | -                | -         |    -4.88 | bq, hns, Jackinho, quix, robiin |
|           10 |     2122 | 2022-10-16 | ex-Finest         | L   | 0.405      | -            | -                | -                | -         |    -6.50 | bq, hns, Jackinho, quix, robiin |
|            9 |     2139 | 2022-10-15 | Ninjas in Pyjamas | L   | 0.399      | -            | -                | -                | -         |    -0.58 | bq, hns, Jackinho, quix, robiin |
|            8 |     2174 | 2022-10-14 | Kappa Bar         | W   | 0.393      | 0.429        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.393) |     2.86 | bq, hns, Jackinho, quix, robiin |
|            7 |     2524 | 2022-09-29 | PROSPECTS         | L   | 0.292      | -            | -                | -                | -         |    -2.18 | bq, hns, Jackinho, quix, robiin |
|            6 |     2559 | 2022-09-28 | Illuminar         | L   | 0.285      | -            | -                | -                | -         |    -1.66 | bq, hns, Jackinho, quix, robiin |
|            5 |     2712 | 2022-09-23 | MASONIC           | L   | 0.252      | -            | -                | -                | -         |    -2.21 | bq, hns, Jackinho, quix, robiin |
|            4 |     2717 | 2022-09-23 | DUSTY             | W   | 0.252      | 0.143        | 0.000 (0.000)    | 0.027 (0.001)    | 0 (0.000) |     1.00 | bq, hns, Jackinho, quix, robiin |
|            3 |     2723 | 2022-09-23 | MASONIC           | L   | 0.251      | -            | -                | -                | -         |    -2.19 | bq, hns, Jackinho, quix, robiin |
|            2 |     3498 | 2022-08-27 | askars            | W   | 0.073      | 0.143        | 0.000 (0.000)    | 0.003 (0.000)    | 1 (0.073) |     0.46 | bq, hns, quix, robiin, WolfY    |
|            1 |     3538 | 2022-08-27 | Throw Potential   | W   | 0.071      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.071) |     0.28 | bq, hns, quix, robiin, WolfY    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,422.59)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-18 |      0.826 | $9,553.00      | $7,889.85       |
| 2022-11-26 |      0.679 | $2,356.00      | $1,599.17       |
| 2022-10-16 |      0.406 | $2,300.00      | $933.57         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
