### Roster Details<br />
Team Name: Liquid<br />
Roster: EliGE, NAF, nitr0, oSee, YEKINDAR<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [3](../standings_global.md)<br />
Regional Rank: [1]( ../standings_americas.md)<br />
Final Rank Value:  1715.3<br />
<br />
Final Rank Value (1715.3) = Starting Rank Value (1832.5) + Head To Head Adjustments (-117.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.894[<sup>1</sup>](#table2)
- Bounty Collected: 0.661[<sup>2</sup>](#table1)
- Opponent Network: 0.337[<sup>2</sup>](#table1)
- LAN Wins: 0.908[<sup>2</sup>](#table1)

The average of these factors is 0.700<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1832.5
- 400 + ( ( 0.700 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1832.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           41 |       27 | 2023-02-11 | G2                | L   | 1.000      | -            | -                | -                | -         |    -6.52 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|           40 |       45 | 2023-02-10 | Vitality          | W   | 1.000      | 1.000        | 0.352 (0.352)    | 0.437 (0.437)    | 1 (1.000) |    10.22 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|           39 |      102 | 2023-02-07 | FaZe              | W   | 1.000      | 1.000        | 0.433 (0.433)    | 0.358 (0.358)    | 1 (1.000) |    16.01 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|           38 |      117 | 2023-02-06 | Spirit            | W   | 1.000      | 1.000        | 0.211 (0.211)    | 0.350 (0.350)    | 1 (1.000) |     3.88 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|           37 |      140 | 2023-02-05 | Natus Vincere     | L   | 1.000      | -            | -                | -                | -         |   -17.90 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|           36 |      164 | 2023-02-04 | IHC               | W   | 1.000      | 1.000        | 0.108 (0.108)    | 0.622 (0.622)    | 1 (1.000) |     1.75 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|           35 |      379 | 2023-01-27 | BIG               | L   | 1.000      | -            | -                | -                | -         |   -28.52 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|           34 |      467 | 2023-01-24 | OG                | L   | 1.000      | -            | -                | -                | -         |   -24.84 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|           33 |      519 | 2023-01-22 | Complexity        | W   | 1.000      | 0.571        | -                | 0.487 (0.278)    | 1 (1.000) |     2.33 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|           32 |      570 | 2023-01-20 | OG                | L   | 1.000      | -            | -                | -                | -         |   -25.96 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|           31 |      792 | 2022-12-18 | G2                | L   | 0.824      | -            | -                | -                | -         |    -8.24 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|           30 |      820 | 2022-12-17 | OG                | W   | 0.819      | 1.000        | 0.237 (0.194)    | 0.365 (0.299)    | 1 (0.819) |     3.97 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|           29 |      846 | 2022-12-16 | Natus Vincere     | W   | 0.812      | 1.000        | 0.358 (0.290)    | 0.372 (0.302)    | 1 (0.812) |     7.85 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|           28 |      880 | 2022-12-15 | FaZe              | L   | 0.804      | -            | -                | -                | -         |   -15.93 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|           27 |      901 | 2022-12-14 | Outsiders         | W   | 0.797      | 1.000        | 0.801 (0.639)    | 0.353 (0.281)    | 1 (0.797) |     7.52 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|           26 |     1421 | 2022-11-26 | Heroic            | L   | 0.680      | -            | -                | -                | -         |   -11.02 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|           25 |     1475 | 2022-11-24 | Natus Vincere     | W   | 0.667      | 0.729        | 0.358 (0.174)    | -                | 1 (0.667) |     6.76 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|           24 |     1494 | 2022-11-23 | G2                | W   | 0.660      | 0.729        | 1.000 (0.481)    | -                | 1 (0.660) |    15.04 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|           23 |     1673 | 2022-11-08 | Spirit            | L   | 0.561      | -            | -                | -                | -         |   -16.22 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|           22 |     1682 | 2022-11-07 | Heroic            | L   | 0.554      | -            | -                | -                | -         |    -9.17 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|           21 |     1703 | 2022-11-06 | Natus Vincere     | W   | 0.545      | 1.000        | 0.358 (0.195)    | 0.372 (0.203)    | -         |     5.85 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|           20 |     1714 | 2022-11-05 | Sprout            | W   | 0.541      | 1.000        | -                | 0.446 (0.241)    | -         |     0.39 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|           19 |     1726 | 2022-11-05 | MOUZ              | L   | 0.539      | -            | -                | -                | -         |   -16.01 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|           18 |     2308 | 2022-10-09 | Evil Geniuses     | W   | 0.359      | -            | -                | -                | -         |     0.17 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|           17 |     2361 | 2022-10-06 | Complexity        | W   | 0.339      | -            | -                | -                | -         |     0.88 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|           16 |     2388 | 2022-10-05 | MIBR              | W   | 0.333      | -            | -                | -                | -         |     0.11 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|           15 |     2398 | 2022-10-05 | TeamOne           | W   | 0.332      | -            | -                | -                | -         |     0.07 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|           14 |     2440 | 2022-10-02 | Vitality          | L   | 0.314      | -            | -                | -                | -         |    -7.53 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|           13 |     2472 | 2022-10-01 | Cloud9            | W   | 0.306      | -            | -                | -                | -         |     0.52 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|           12 |     2523 | 2022-09-29 | MOUZ              | W   | 0.292      | -            | -                | -                | -         |     0.40 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|           11 |     2579 | 2022-09-27 | fnatic            | W   | 0.279      | -            | -                | -                | -         |     1.12 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|           10 |     2617 | 2022-09-25 | Cloud9            | W   | 0.267      | -            | -                | -                | -         |     0.44 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|            9 |     2661 | 2022-09-24 | Eternal Fire      | L   | 0.259      | -            | -                | -                | -         |    -8.10 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|            8 |     2697 | 2022-09-23 | FURIA             | L   | 0.253      | -            | -                | -                | -         |    -7.67 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|            7 |     2745 | 2022-09-22 | Evil Geniuses     | W   | 0.247      | -            | -                | -                | -         |     0.10 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|            6 |     2777 | 2022-09-21 | Movistar Riders   | W   | 0.241      | -            | -                | -                | -         |     0.02 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|            5 |     3529 | 2022-08-27 | Heroic            | W   | 0.072      | -            | -                | -                | -         |     1.04 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|            4 |     3564 | 2022-08-26 | Ninjas in Pyjamas | W   | 0.066      | -            | -                | -                | -         |     0.01 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|            3 |     3715 | 2022-08-20 | Natus Vincere     | L   | 0.026      | -            | -                | -                | -         |    -0.57 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|            2 |     3724 | 2022-08-20 | Complexity        | W   | 0.025      | -            | -                | -                | -         |     0.06 | EliGE, NAF, nitr0, oSee, YEKINDAR |
|            1 |     3731 | 2022-08-20 | G2                | W   | 0.025      | -            | -                | -                | -         |     0.56 | EliGE, NAF, nitr0, oSee, YEKINDAR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($360,054.57)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.76) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-12 |      1.000 | $80,000.00     | $80,000.00      |
| 2023-01-29 |      1.000 | $5,666.00      | $5,666.00       |
| 2022-12-18 |      0.824 | $250,000.00    | $206,122.88     |
| 2022-11-27 |      0.687 | $40,000.00     | $27,477.49      |
| 2022-11-13 |      0.594 | $20,000.00     | $11,871.47      |
| 2022-10-02 |      0.314 | $85,000.00     | $26,693.35      |
| 2022-08-28 |      0.081 | $27,500.00     | $2,223.37       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
