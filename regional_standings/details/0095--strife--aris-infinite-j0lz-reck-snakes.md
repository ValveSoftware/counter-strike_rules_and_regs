### Roster Details<br />
Team Name: Strife<br />
Roster: aris, Infinite, J0LZ, reck, Snakes<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [95](../standings_global.md)<br />
Regional Rank: [21]( ../standings_americas.md)<br />
Final Rank Value:  824.5<br />
<br />
Final Rank Value (824.5) = Starting Rank Value (790.2) + Head To Head Adjustments (34.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.355[<sup>1</sup>](#table2)
- Bounty Collected: 0.306[<sup>2</sup>](#table1)
- Opponent Network: 0.101[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.191<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 790.2
- 400 + ( ( 0.191 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 790.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |       39 | 2023-02-10 | Detonate      | W   | 1.000      | 0.384        | 0.008 (0.003)    | 0.400 (0.154)    | 0 (0.000) |    14.55 | aris, Infinite, J0LZ, reck, Snakes       |
|           24 |       74 | 2023-02-08 | MIBR          | L   | 1.000      | -            | -                | -                | -         |    -7.55 | aris, Infinite, J0LZ, reck, Snakes       |
|           23 |       92 | 2023-02-07 | Eros          | W   | 1.000      | 0.384        | 0.006 (0.002)    | 0.243 (0.094)    | 0 (0.000) |    12.44 | aris, Infinite, J0LZ, reck, Snakes       |
|           22 |      326 | 2023-01-28 | Detonate      | L   | 1.000      | -            | -                | -                | -         |   -18.43 | aris, Infinite, J0LZ, reck, Snakes       |
|           21 |      363 | 2023-01-27 | Nouns         | L   | 1.000      | -            | -                | -                | -         |   -12.80 | aris, Infinite, J0LZ, reck, Snakes       |
|           20 |      365 | 2023-01-27 | Disconnected  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.31 | aris, Infinite, J0LZ, reck, Snakes       |
|           19 |      510 | 2023-01-22 | Nouns         | L   | 1.000      | -            | -                | -                | -         |   -13.72 | aris, becker, Infinite, J0LZ, Snakes     |
|           18 |      541 | 2023-01-21 | timbermen     | W   | 1.000      | 0.354        | 0.016 (0.006)    | 0.306 (0.108)    | 0 (0.000) |    13.73 | aris, Infinite, J0LZ, reck, Snakes       |
|           17 |      677 | 2023-01-15 | Vendetta      | W   | 1.000      | 0.310        | 0.017 (0.005)    | 0.361 (0.112)    | 0 (0.000) |    14.22 | aris, Infinite, J0LZ, reck, Snakes       |
|           16 |      695 | 2023-01-14 | EG Black      | W   | 1.000      | 0.310        | 0.024 (0.008)    | 0.362 (0.112)    | 0 (0.000) |    20.97 | aris, Infinite, J0LZ, reck, Snakes       |
|           15 |      705 | 2023-01-13 | Disconnected  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.58 | aris, Infinite, J0LZ, reck, Snakes       |
|           14 |      971 | 2022-12-10 | Evil Geniuses | L   | 0.775      | -            | -                | -                | -         |    -4.52 | Infinite, J0LZ, reck, Snakes, tENSKI     |
|           13 |     1057 | 2022-12-07 | 7AM NA        | L   | 0.756      | -            | -                | -                | -         |   -19.32 | Infinite, J0LZ, jitter, reck, Snakes     |
|           12 |     1094 | 2022-12-06 | Detonate      | W   | 0.749      | 0.435        | 0.008 (0.003)    | 0.400 (0.130)    | 0 (0.000) |     9.58 | Infinite, J0LZ, jitter, reck, Snakes     |
|           11 |     1135 | 2022-12-05 | EG Black      | L   | 0.742      | -            | -                | -                | -         |    -8.77 | Infinite, J0LZ, jitter, reck, Snakes     |
|           10 |     1157 | 2022-12-04 | Complexity    | L   | 0.735      | -            | -                | -                | -         |    -1.20 | Infinite, J0LZ, jitter, reck, Snakes     |
|            9 |     1161 | 2022-12-04 | ATK           | W   | 0.735      | 0.354        | 0.070 (0.018)    | 0.646 (0.168)    | 0 (0.000) |    16.92 | Infinite, J0LZ, jitter, reck, Snakes     |
|            8 |     1268 | 2022-12-01 | timbermen     | W   | 0.715      | 0.435        | 0.016 (0.005)    | 0.306 (0.095)    | 0 (0.000) |    12.09 | Infinite, J0LZ, jitter, reck, Snakes     |
|            7 |     1296 | 2022-11-30 | MIBR          | L   | 0.709      | -            | -                | -                | -         |    -5.95 | Infinite, J0LZ, jitter, reck, Snakes     |
|            6 |     1489 | 2022-11-23 | TeamOne       | L   | 0.662      | -            | -                | -                | -         |    -7.46 | Infinite, J0LZ, jitter, reck, Snakes     |
|            5 |     1607 | 2022-11-16 | Snakes Den    | W   | 0.615      | 0.435        | -                | 0.059 (0.016)    | -         |     5.63 | Infinite, J0LZ, jitter, reck, Snakes     |
|            4 |     2486 | 2022-09-30 | TropiCaos     | L   | 0.301      | -            | -                | -                | -         |    -5.50 | D4rtyMontana, J0LZ, jitter, reck, Snakes |
|            3 |     2641 | 2022-09-24 | Nouns         | L   | 0.262      | -            | -                | -                | -         |    -3.31 | J0LZ, jitter, reck, SLIGHT, Snakes       |
|            2 |     2681 | 2022-09-23 | ATK           | W   | 0.255      | 0.143        | 0.070 (0.003)    | 0.646 (0.024)    | -         |     5.64 | J0LZ, jitter, reck, SLIGHT, Snakes       |
|            1 |     2684 | 2022-09-23 | EG White      | W   | 0.255      | 0.143        | 0.048 (0.002)    | -                | -         |     5.10 | J0LZ, jitter, reck, SLIGHT, Snakes       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,256.50)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-01-15 |      1.000 | $4,000.00      | $4,000.00       |
| 2022-12-04 |      0.735 | $4,000.00      | $2,941.57       |
| 2022-10-02 |      0.315 | $1,000.00      | $314.93         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
