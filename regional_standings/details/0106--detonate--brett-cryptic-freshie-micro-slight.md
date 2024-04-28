### Roster Details<br />
Team Name: Detonate<br />
Roster: brett, Cryptic, freshie, micro, SLIGHT<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [106](../standings_global.md)<br />
Regional Rank: [25]( ../standings_americas.md)<br />
Final Rank Value:  782.8<br />
<br />
Final Rank Value (782.8) = Starting Rank Value (755.3) + Head To Head Adjustments (27.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.323[<sup>1</sup>](#table2)
- Bounty Collected: 0.294[<sup>2</sup>](#table1)
- Opponent Network: 0.077[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.174<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 755.3
- 400 + ( ( 0.174 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 755.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |       39 | 2023-02-10 | Strife         | L   | 1.000      | -            | -                | -                | -         |   -14.55 | brett, Cryptic, freshie, micro, SLIGHT   |
|           21 |       91 | 2023-02-07 | Red Wolves     | W   | 1.000      | 0.384        | 0.002 (0.001)    | 0.291 (0.112)    | 0 (0.000) |     9.43 | brett, Cryptic, freshie, micro, SLIGHT   |
|           20 |      113 | 2023-02-06 | ATK            | W   | 1.000      | 0.435        | 0.070 (0.031)    | 0.646 (0.281)    | 0 (0.000) |    22.70 | brett, Cryptic, freshie, micro, SLIGHT   |
|           19 |      294 | 2023-01-29 | Mythic         | W   | 1.000      | 0.354        | 0.001 (0.000)    | 0.203 (0.072)    | 0 (0.000) |    12.80 | brett, Cryptic, freshie, micro, SLIGHT   |
|           18 |      298 | 2023-01-29 | Nouns          | L   | 1.000      | -            | -                | -                | -         |    -9.98 | brett, Cryptic, freshie, micro, SLIGHT   |
|           17 |      326 | 2023-01-28 | Strife         | W   | 1.000      | 0.354        | 0.015 (0.005)    | 0.314 (0.111)    | 0 (0.000) |    18.43 | brett, Cryptic, freshie, micro, SLIGHT   |
|           16 |      367 | 2023-01-27 | ATK            | L   | 1.000      | -            | -                | -                | -         |    -6.07 | brett, Cryptic, freshie, micro, SLIGHT   |
|           15 |      706 | 2023-01-13 | Vendetta       | L   | 1.000      | -            | -                | -                | -         |   -15.29 | brett, Cryptic, Florence, freshie, micro |
|           14 |      796 | 2022-12-17 | Limitless      | W   | 0.822      | 0.143        | 0.007 (0.001)    | 0.287 (0.034)    | 0 (0.000) |    12.74 | brett, Cryptic, Florence, freshie, micro |
|           13 |      828 | 2022-12-16 | 1 JIN          | W   | 0.816      | 0.143        | 0.006 (0.001)    | 0.192 (0.022)    | 0 (0.000) |    10.32 | brett, Cryptic, Florence, freshie, micro |
|           12 |      996 | 2022-12-09 | Cartel terraza | W   | 0.769      | 0.384        | 0.002 (0.001)    | 0.113 (0.033)    | 0 (0.000) |     9.28 | brett, Cryptic, Florence, freshie, micro |
|           11 |     1094 | 2022-12-06 | Strife         | L   | 0.749      | -            | -                | -                | -         |    -9.58 | brett, Cryptic, Florence, freshie, micro |
|           10 |     1159 | 2022-12-04 | EG Black       | L   | 0.735      | -            | -                | -                | -         |    -7.12 | brett, Cryptic, Florence, freshie, micro |
|            9 |     1242 | 2022-12-02 | Eclipse        | W   | 0.721      | 0.384        | 0.000 (0.000)    | 0.058 (0.016)    | 0 (0.000) |     2.97 | brett, Cryptic, Florence, freshie, micro |
|            8 |     1265 | 2022-12-01 | 7AM NA         | W   | 0.716      | 0.435        | 0.000 (0.000)    | 0.107 (0.033)    | 0 (0.000) |     5.79 | brett, Cryptic, Florence, freshie, micro |
|            7 |     1292 | 2022-11-30 | TeamOne        | L   | 0.709      | -            | -                | -                | -         |    -6.32 | brett, Cryptic, Florence, freshie, micro |
|            6 |     1324 | 2022-11-29 | TeamOne        | L   | 0.702      | -            | -                | -                | -         |    -6.59 | brett, Cryptic, Florence, freshie, micro |
|            5 |     1342 | 2022-11-28 | Villainous     | W   | 0.696      | 0.384        | -                | 0.226 (0.060)    | 0 (0.000) |     5.23 | brett, Cryptic, Florence, freshie, micro |
|            4 |     1350 | 2022-11-28 | MIBR           | L   | 0.695      | -            | -                | -                | -         |    -5.18 | brett, Cryptic, Florence, freshie, micro |
|            3 |     1411 | 2022-11-26 | DNA            | W   | 0.681      | -            | -                | -                | -         |     2.53 | brett, Calix, Cryptic, Florence, freshie |
|            2 |     1505 | 2022-11-22 | timbermen      | L   | 0.656      | -            | -                | -                | -         |    -9.12 | brett, Cryptic, Florence, freshie, micro |
|            1 |     1878 | 2022-10-25 | Snakes Den     | W   | 0.469      | 0.435        | 0.002 (0.000)    | -                | -         |     5.12 | Cryptic, Florence, freshie, micro, niise |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,782.55)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-10 |      1.000 | $1,000.00      | $1,000.00       |
| 2023-01-29 |      1.000 | $2,000.00      | $2,000.00       |
| 2022-12-11 |      0.783 | $1,000.00      | $782.55         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
