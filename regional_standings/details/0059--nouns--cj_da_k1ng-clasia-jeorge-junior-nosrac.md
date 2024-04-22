### Roster Details<br />
Team Name: Nouns<br />
Roster: cJ dA K1nG, CLASIA, Jeorge, junior, nosraC<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [59](../standings_global.md)<br />
Regional Rank: [14]( ../standings_americas.md)<br />
Final Rank Value:  909.3<br />
<br />
Final Rank Value (909.3) = Starting Rank Value (681.6) + Head To Head Adjustments (227.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.361[<sup>2</sup>](#table1)
- Opponent Network: 0.222[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.146<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 681.6
- 400 + ( ( 0.146 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 681.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |      167 | 2024-04-17 | Elevate          | L   | 1.000      | -            | -                | -                | -         |   -16.23 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           38 |      171 | 2024-04-17 | Take Flyte       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.87 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           37 |      231 | 2024-04-15 | Limitless        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.50 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           36 |      232 | 2024-04-15 | Limitless        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.79 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           35 |      321 | 2024-04-10 | Elevate          | W   | 1.000      | 0.477        | 0.038 (0.018)    | 0.431 (0.205)    | 0 (0.000) |    15.35 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           34 |      327 | 2024-04-10 | Elevate          | W   | 1.000      | 0.477        | 0.038 (0.018)    | 0.431 (0.205)    | 0 (0.000) |    16.77 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           33 |      377 | 2024-04-09 | MIGHT            | W   | 1.000      | 0.477        | -                | 0.233 (0.111)    | 0 (0.000) |     7.95 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           32 |      380 | 2024-04-09 | MIGHT            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.50 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           31 |      509 | 2024-04-04 | LAG              | L   | 1.000      | -            | -                | -                | -         |   -14.31 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           30 |      514 | 2024-04-04 | LAG              | W   | 1.000      | 0.477        | 0.032 (0.015)    | 0.560 (0.267)    | 0 (0.000) |    17.33 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           29 |      553 | 2024-04-03 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |   -14.55 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           28 |      603 | 2024-04-02 | BOSS             | W   | 1.000      | 0.143        | 0.034 (0.005)    | -                | 0 (0.000) |    13.53 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           27 |      607 | 2024-04-02 | Party Astronauts | W   | 1.000      | -            | -                | -                | 0 (0.000) |    16.73 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           26 |      683 | 2024-03-27 | NRG              | L   | 1.000      | -            | -                | -                | -         |   -15.85 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           25 |      688 | 2024-03-27 | NRG              | W   | 1.000      | 0.477        | -                | 0.633 (0.302)    | -         |    15.64 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           24 |      732 | 2024-03-26 | Party Astronauts | W   | 1.000      | 0.477        | 0.020 (0.010)    | 0.554 (0.264)    | -         |    17.43 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           23 |      736 | 2024-03-26 | Party Astronauts | W   | 1.000      | 0.477        | 0.020 (0.010)    | 0.554 (0.264)    | -         |    19.00 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           22 |      815 | 2024-03-20 | Mythic           | L   | 0.982      | -            | -                | -                | -         |   -16.08 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           21 |      820 | 2024-03-20 | Mythic           | W   | 0.982      | 0.477        | -                | 0.413 (0.193)    | -         |    14.82 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           20 |      927 | 2024-03-14 | M80              | W   | 0.942      | 0.477        | 0.087 (0.039)    | 0.454 (0.204)    | -         |    21.31 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           19 |      930 | 2024-03-14 | M80              | W   | 0.942      | 0.477        | 0.087 (0.039)    | 0.454 (0.204)    | -         |    22.71 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           18 |     1257 | 2024-03-02 | Legacy           | L   | 0.861      | -            | -                | -                | -         |    -4.28 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           17 |     1285 | 2024-03-01 | FURIA            | L   | 0.853      | -            | -                | -                | -         |    -0.83 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           16 |     1348 | 2024-02-26 | Liquid           | L   | 0.829      | -            | -                | -                | -         |    -1.80 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           15 |     1363 | 2024-02-25 | BOSS             | W   | 0.822      | 0.143        | 0.034 (0.004)    | -                | -         |    16.67 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           14 |     1367 | 2024-02-25 | Liquid           | W   | 0.821      | 0.143        | 0.111 (0.013)    | -                | -         |    24.42 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           13 |     1806 | 2024-02-03 | Wildcard         | L   | 0.676      | -            | -                | -                | -         |    -5.98 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           12 |     1867 | 2024-02-01 | BOSS             | W   | 0.662      | -            | -                | -                | -         |    14.38 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           11 |     1871 | 2024-02-01 | Elevate          | L   | 0.662      | -            | -                | -                | -         |    -5.86 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           10 |     1876 | 2024-02-01 | Rocket           | W   | 0.661      | -            | -                | -                | -         |    10.18 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            9 |     2214 | 2024-01-18 | Wildcard         | L   | 0.569      | -            | -                | -                | -         |    -5.24 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            8 |     2216 | 2024-01-18 | Rocket           | W   | 0.568      | -            | -                | -                | -         |     9.12 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            7 |     2218 | 2024-01-18 | Zomblers         | W   | 0.568      | -            | -                | -                | -         |     4.29 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            6 |     2273 | 2024-01-17 | Snakes Den       | W   | 0.561      | -            | -                | -                | -         |     2.73 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            5 |     2394 | 2024-01-14 | Carpe Diem       | W   | 0.543      | -            | -                | -                | -         |     9.85 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            4 |     2396 | 2024-01-14 | M80              | L   | 0.542      | -            | -                | -                | -         |    -2.74 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            3 |     2419 | 2024-01-13 | NRG              | W   | 0.535      | -            | -                | -                | -         |    11.34 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            2 |     2455 | 2024-01-12 | vagrants         | W   | 0.530      | -            | -                | -                | -         |     2.93 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            1 |     2468 | 2024-01-12 | Liquid           | L   | 0.529      | -            | -                | -                | -         |    -0.75 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
