### Roster Details<br />
Team Name: Virtus.pro<br />
Roster: electroNic, fame, FL1T, Jame, n0rb3r7<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [12](../standings_global.md)<br />
Regional Rank: [10]( ../standings_europe.md)<br />
Final Rank Value:  1649.8<br />
<br />
Final Rank Value (1649.8) = Starting Rank Value (1707.6) + Head To Head Adjustments (-57.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.609[<sup>1</sup>](#table2)
- Bounty Collected: 0.621[<sup>2</sup>](#table1)
- Opponent Network: 0.447[<sup>2</sup>](#table1)
- LAN Wins: 0.947[<sup>2</sup>](#table1)

The average of these factors is 0.656<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1707.6
- 400 + ( ( 0.656 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1707.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |      508 | 2024-05-29 | BIG           | L   | 1.000      | -            | -                | -                | -         |   -24.59 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           42 |      523 | 2024-05-28 | FaZe          | L   | 1.000      | -            | -                | -                | -         |    -5.11 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           41 |      546 | 2024-05-27 | HEROIC        | W   | 1.000      | 0.624        | 0.362 (0.226)    | 0.635 (0.396)    | 1 (1.000) |    16.03 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           40 |      836 | 2024-05-17 | Falcons       | L   | 1.000      | -            | -                | -                | -         |   -24.81 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           39 |      876 | 2024-05-16 | MOUZ          | L   | 1.000      | -            | -                | -                | -         |    -4.26 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           38 |      976 | 2024-05-14 | Falcons       | W   | 1.000      | 0.769        | 0.327 (0.252)    | -                | 1 (1.000) |     5.61 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           37 |     1098 | 2024-05-09 | Complexity    | L   | 0.986      | -            | -                | -                | -         |   -16.29 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           36 |     1114 | 2024-05-08 | The MongolZ   | W   | 0.980      | 0.889        | 0.978 (0.853)    | 0.738 (0.643)    | 1 (0.980) |    20.66 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           35 |     1133 | 2024-05-07 | GamerLegion   | W   | 0.974      | 0.889        | 0.222 (0.192)    | 0.334 (0.289)    | 1 (0.974) |     2.84 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           34 |     1321 | 2024-04-28 | SAW           | W   | 0.912      | 0.889        | 0.113 (0.091)    | 0.660 (0.536)    | 1 (0.912) |     3.98 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           33 |     1351 | 2024-04-27 | fnatic        | W   | 0.905      | 0.889        | 0.198 (0.159)    | 0.650 (0.523)    | 1 (0.905) |     3.02 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           32 |     1393 | 2024-04-25 | FaZe          | L   | 0.893      | -            | -                | -                | -         |    -4.71 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           31 |     1417 | 2024-04-24 | SAW           | W   | 0.886      | 0.889        | 0.113 (0.089)    | 0.660 (0.520)    | 1 (0.886) |     3.16 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           30 |     1438 | 2024-04-23 | fnatic        | L   | 0.879      | -            | -                | -                | -         |   -24.88 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           29 |     1735 | 2024-04-12 | G2            | L   | 0.804      | -            | -                | -                | -         |    -6.58 | fame, FL1T, Jame, mir, n0rb3r7        |
|           28 |     1816 | 2024-04-10 | Astralis      | L   | 0.791      | -            | -                | -                | -         |    -7.16 | fame, FL1T, Jame, mir, n0rb3r7        |
|           27 |     1871 | 2024-04-09 | FlyQuest      | W   | 0.784      | 0.624        | -                | 0.556 (0.272)    | 1 (0.784) |     3.87 | fame, FL1T, Jame, mir, n0rb3r7        |
|           26 |     1901 | 2024-04-08 | Wildcard      | W   | 0.777      | 0.624        | -                | 0.591 (0.287)    | 1 (0.777) |     0.46 | fame, FL1T, Jame, mir, n0rb3r7        |
|           25 |     2202 | 2024-03-24 | G2            | L   | 0.679      | -            | -                | -                | -         |    -5.73 | fame, FL1T, Jame, mir, n0rb3r7        |
|           24 |     2216 | 2024-03-23 | Eternal Fire  | L   | 0.672      | -            | -                | -                | -         |    -6.72 | fame, FL1T, Jame, mir, n0rb3r7        |
|           23 |     2234 | 2024-03-22 | HEROIC        | W   | 0.665      | 1.000        | 0.362 (0.240)    | 0.635 (0.422)    | 1 (0.665) |    11.96 | fame, FL1T, Jame, mir, n0rb3r7        |
|           22 |     2247 | 2024-03-21 | paiN          | W   | 0.660      | 1.000        | 0.437 (0.288)    | 0.877 (0.579)    | -         |     6.60 | fame, FL1T, Jame, mir, n0rb3r7        |
|           21 |     2258 | 2024-03-21 | Imperial      | L   | 0.658      | -            | -                | -                | -         |   -16.02 | fame, FL1T, Jame, mir, n0rb3r7        |
|           20 |     2459 | 2024-03-12 | HEROIC        | W   | 0.600      | -            | -                | -                | -         |    10.67 | fame, FL1T, Jame, mir, n0rb3r7        |
|           19 |     2474 | 2024-03-11 | Apeks         | W   | 0.594      | -            | -                | -                | -         |     0.84 | fame, FL1T, Jame, mir, n0rb3r7        |
|           18 |     2485 | 2024-03-11 | B8            | W   | 0.593      | -            | -                | -                | -         |     0.64 | fame, FL1T, Jame, mir, n0rb3r7        |
|           17 |     3067 | 2024-02-15 | Natus Vincere | W   | 0.426      | 0.143        | 1.000 (0.061)    | -                | -         |     9.58 | fame, FL1T, Jame, mir, n0rb3r7        |
|           16 |     3099 | 2024-02-14 | fnatic        | W   | 0.420      | -            | -                | -                | -         |     1.62 | fame, FL1T, Jame, mir, n0rb3r7        |
|           15 |     3117 | 2024-02-14 | SAW           | W   | 0.418      | -            | -                | -                | -         |     1.54 | fame, FL1T, Jame, mir, n0rb3r7        |
|           14 |     3298 | 2024-02-02 | Cloud9        | L   | 0.340      | -            | -                | -                | -         |    -9.21 | fame, FL1T, Jame, mir, n0rb3r7        |
|           13 |     3334 | 2024-02-01 | GamerLegion   | L   | 0.332      | -            | -                | -                | -         |   -10.12 | fame, FL1T, Jame, mir, n0rb3r7        |
|           12 |     3346 | 2024-01-31 | Rooster       | W   | 0.327      | -            | -                | -                | -         |     0.07 | fame, FL1T, Jame, mir, n0rb3r7        |
|           11 |     3399 | 2024-01-27 | BIG           | W   | 0.300      | -            | -                | -                | -         |     1.82 | fame, FL1T, Jame, mir, n0rb3r7        |
|           10 |     3440 | 2024-01-25 | Cloud9        | W   | 0.286      | -            | -                | -                | -         |     1.22 | fame, FL1T, Jame, mir, n0rb3r7        |
|            9 |     3455 | 2024-01-24 | BIG           | W   | 0.280      | -            | -                | -                | -         |     1.64 | fame, FL1T, Jame, mir, n0rb3r7        |
|            8 |     3569 | 2024-01-20 | fnatic        | W   | 0.253      | -            | -                | -                | -         |     0.99 | fame, FL1T, Jame, mir, n0rb3r7        |
|            7 |     3624 | 2024-01-19 | Natus Vincere | L   | 0.247      | -            | -                | -                | -         |    -2.34 | fame, FL1T, Jame, mir, n0rb3r7        |
|            6 |     3679 | 2024-01-18 | SAW           | W   | 0.240      | -            | -                | -                | -         |     0.84 | fame, FL1T, Jame, mir, n0rb3r7        |
|            5 |     3695 | 2024-01-18 | SINNERS       | W   | 0.239      | -            | -                | -                | -         |     0.27 | fame, FL1T, Jame, mir, n0rb3r7        |
|            4 |     4119 | 2023-12-17 | Apeks         | W   | 0.028      | -            | -                | -                | -         |     0.03 | fame, FL1T, Jame, mir, n0rb3r7        |
|            3 |     4130 | 2023-12-17 | The MongolZ   | W   | 0.026      | -            | -                | -                | -         |     0.63 | fame, FL1T, Jame, mir, n0rb3r7        |
|            2 |     4181 | 2023-12-15 | Monte         | W   | 0.014      | -            | -                | -                | -         |     0.04 | fame, FL1T, Jame, mir, n0rb3r7        |
|            1 |     4191 | 2023-12-15 | M80           | W   | 0.013      | -            | -                | -                | -         |     0.04 | fame, FL1T, Jame, mir, n0rb3r7        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($69,540.07)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.23) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-12 |      1.000 | $32,000.00     | $32,000.00      |
| 2024-04-14 |      0.818 | $10,000.00     | $8,180.62       |
| 2024-03-31 |      0.727 | $20,000.00     | $14,539.36      |
| 2024-02-02 |      0.341 | $4,500.00      | $1,533.68       |
| 2024-01-28 |      0.307 | $22,500.00     | $6,899.54       |
| 2023-12-17 |      0.028 | $50,000.00     | $1,386.88       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
