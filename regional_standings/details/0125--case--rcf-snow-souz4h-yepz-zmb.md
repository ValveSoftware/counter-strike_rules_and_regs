### Roster Details<br />
Team Name: Case<br />
Roster: RCF, snow, souz4h, yepz, zmb<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [125](../standings_global.md)<br />
Regional Rank: [30]( ../standings_americas.md)<br />
Final Rank Value:  746.4<br />
<br />
Final Rank Value (746.4) = Starting Rank Value (719.0) + Head To Head Adjustments (27.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.319[<sup>1</sup>](#table2)
- Bounty Collected: 0.324[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.167<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 719.0
- 400 + ( ( 0.167 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 719.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |     2369 | 2024-01-21 | paiN        | L   | 0.495      | -            | -                | -                | -         |    -0.07 | RCF, snow, souz4h, yepz, zmb |
|           30 |     2376 | 2024-01-21 | Fluxo       | W   | 0.494      | 0.143        | 0.148 (0.010)    | 0.569 (0.040)    | 0 (0.000) |    13.06 | RCF, snow, souz4h, yepz, zmb |
|           29 |     2402 | 2024-01-20 | adalYamigos | W   | 0.488      | 0.143        | -                | 0.373 (0.026)    | 0 (0.000) |     6.79 | RCF, snow, souz4h, yepz, zmb |
|           28 |     2450 | 2024-01-19 | W7M         | L   | 0.482      | -            | -                | -                | -         |    -5.76 | RCF, snow, souz4h, yepz, zmb |
|           27 |     2471 | 2024-01-19 | RED Canids  | L   | 0.480      | -            | -                | -                | -         |    -3.09 | RCF, snow, souz4h, yepz, zmb |
|           26 |     2624 | 2024-01-16 | RED Canids  | L   | 0.461      | -            | -                | -                | -         |    -2.92 | RCF, snow, souz4h, yepz, zmb |
|           25 |     2626 | 2024-01-16 | paiN        | W   | 0.461      | 0.143        | 0.786 (0.052)    | 0.869 (0.057)    | 0 (0.000) |    14.46 | RCF, snow, souz4h, yepz, zmb |
|           24 |     2643 | 2024-01-16 | Hype        | W   | 0.460      | -            | -                | -                | 0 (0.000) |     2.02 | RCF, snow, souz4h, yepz, zmb |
|           23 |     2719 | 2024-01-13 | W7M         | L   | 0.441      | -            | -                | -                | -         |    -5.16 | RCF, snow, souz4h, yepz, zmb |
|           22 |     2797 | 2024-01-11 | Galorys     | L   | 0.428      | -            | -                | -                | -         |    -4.26 | RCF, snow, souz4h, yepz, zmb |
|           21 |     2804 | 2024-01-11 | AJF         | W   | 0.427      | 0.143        | 0.001 (0.000)    | -                | 0 (0.000) |     4.91 | RCF, snow, souz4h, yepz, zmb |
|           20 |     2808 | 2024-01-11 | Hype        | W   | 0.427      | -            | -                | -                | 0 (0.000) |     1.87 | RCF, snow, souz4h, yepz, zmb |
|           19 |     2863 | 2024-01-09 | Flamengo    | L   | 0.414      | -            | -                | -                | -         |    -9.83 | RCF, snow, souz4h, yepz, zmb |
|           18 |     2875 | 2024-01-09 | Yawara      | W   | 0.413      | -            | -                | -                | 0 (0.000) |     2.90 | RCF, snow, souz4h, yepz, zmb |
|           17 |     2925 | 2023-12-23 | ODDIK       | L   | 0.300      | -            | -                | -                | -         |    -2.02 | RCF, snow, souz4h, yepz, zmb |
|           16 |     2926 | 2023-12-23 | Solid       | W   | 0.300      | 0.303        | 0.132 (0.012)    | 0.503 (0.046)    | 0 (0.000) |     6.84 | RCF, snow, souz4h, yepz, zmb |
|           15 |     2930 | 2023-12-21 | Flamengo    | W   | 0.287      | 0.303        | -                | 0.142 (0.012)    | 0 (0.000) |     2.25 | RCF, snow, souz4h, yepz, zmb |
|           14 |     2934 | 2023-12-20 | ODDIK       | L   | 0.280      | -            | -                | -                | -         |    -1.88 | RCF, snow, souz4h, yepz, zmb |
|           13 |     2969 | 2023-12-17 | VELOX       | W   | 0.261      | 0.303        | 0.002 (0.000)    | -                | 0 (0.000) |     2.90 | RCF, snow, souz4h, yepz, zmb |
|           12 |     3001 | 2023-12-16 | W7M         | L   | 0.255      | -            | -                | -                | -         |    -3.01 | RCF, snow, souz4h, yepz, zmb |
|           11 |     3026 | 2023-12-15 | Corinthians | W   | 0.248      | 0.338        | 0.001 (0.000)    | 0.123 (0.010)    | -         |     3.14 | RCF, snow, souz4h, yepz, zmb |
|           10 |     3035 | 2023-12-15 | Flamengo    | W   | 0.247      | 0.303        | -                | 0.142 (0.011)    | -         |     1.93 | RCF, snow, souz4h, yepz, zmb |
|            9 |     3282 | 2023-12-01 | adalYamigos | L   | 0.155      | -            | -                | -                | -         |    -2.87 | RCF, snow, souz4h, yepz, zmb |
|            8 |     3298 | 2023-11-30 | Corinthians | W   | 0.148      | 0.143        | 0.001 (0.000)    | 0.123 (0.003)    | -         |     1.89 | RCF, snow, souz4h, yepz, zmb |
|            7 |     3358 | 2023-11-25 | Imperial    | L   | 0.115      | -            | -                | -                | -         |    -0.01 | RCF, snow, souz4h, yepz, zmb |
|            6 |     3362 | 2023-11-25 | 9z          | W   | 0.114      | 0.435        | 0.056 (0.003)    | 0.520 (0.026)    | -         |     2.72 | RCF, snow, souz4h, yepz, zmb |
|            5 |     3388 | 2023-11-24 | RED Canids  | W   | 0.106      | 0.435        | 0.105 (0.005)    | 0.808 (0.037)    | -         |     2.70 | RCF, snow, souz4h, yepz, zmb |
|            4 |     3400 | 2023-11-23 | BESTIA      | L   | 0.101      | -            | -                | -                | -         |    -1.19 | RCF, snow, souz4h, yepz, zmb |
|            3 |     3553 | 2023-11-16 | Flamengo    | L   | 0.053      | -            | -                | -                | -         |    -1.26 | RCF, snow, souz4h, yepz, zmb |
|            2 |     3622 | 2023-11-14 | Corinthians | W   | 0.040      | 0.303        | 0.001 (0.000)    | -                | -         |     0.52 | RCF, snow, souz4h, yepz, zmb |
|            1 |     3657 | 2023-11-12 | RED Canids  | L   | 0.027      | -            | -                | -                | -         |    -0.16 | RCF, snow, souz4h, yepz, zmb |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,189.55)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-23 |      0.300 | $1,500.00      | $450.66         |
| 2023-12-18 |      0.266 | $1,080.00      | $286.89         |
| 2023-11-26 |      0.121 | $3,750.00      | $452.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
