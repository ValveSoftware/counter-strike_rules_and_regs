### Roster Details<br />
Team Name: Limitless<br />
Roster: Danejoris, grape, Mellow, PoseidoNN, xCAPE<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [177](../standings_global.md)<br />
Regional Rank: [47]( ../standings_americas.md)<br />
Final Rank Value:  625.7<br />
<br />
Final Rank Value (625.7) = Starting Rank Value (682.0) + Head To Head Adjustments (-56.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.258[<sup>1</sup>](#table2)
- Bounty Collected: 0.258[<sup>2</sup>](#table1)
- Opponent Network: 0.050[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.141<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 682.0
- 400 + ( ( 0.141 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 682.0


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
|           36 |      146 | 2024-06-07 | Vibe             | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.039 (0.015)    | 0 (0.000) |     7.50 | Danejoris, grape, Mellow, PoseidoNN, xCAPE |
|           35 |      211 | 2024-06-06 | Strife           | L   | 1.000      | -            | -                | -                | -         |   -11.06 | Danejoris, grape, Mellow, PoseidoNN, xCAPE |
|           34 |      375 | 2024-06-03 | Asian Kings      | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.82 | Danejoris, grape, Mellow, PoseidoNN, xCAPE |
|           33 |      638 | 2024-05-22 | LAG              | L   | 1.000      | -            | -                | -                | -         |    -6.99 | Danejoris, DooM, grape, Mellow, PoseidoNN  |
|           32 |      641 | 2024-05-22 | LAG              | L   | 1.000      | -            | -                | -                | -         |    -7.44 | Danejoris, DooM, grape, Mellow, PoseidoNN  |
|           31 |      681 | 2024-05-21 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -3.87 | Danejoris, DooM, grape, Mellow, PoseidoNN  |
|           30 |      684 | 2024-05-21 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -4.03 | Danejoris, DooM, grape, Mellow, PoseidoNN  |
|           29 |      755 | 2024-05-19 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |    -4.19 | CAJUN, Danejoris, Mellow, PoseidoNN, xCAPE |
|           28 |      885 | 2024-05-15 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -4.67 | Danejoris, DooM, grape, Mellow, PoseidoNN  |
|           27 |      892 | 2024-05-15 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -4.89 | Danejoris, DooM, grape, Mellow, PoseidoNN  |
|           26 |     1067 | 2024-05-10 | M80              | L   | 0.995      | -            | -                | -                | -         |    -1.02 | Danejoris, DooM, grape, Mellow, PoseidoNN  |
|           25 |     1069 | 2024-05-10 | M80              | L   | 0.995      | -            | -                | -                | -         |    -1.03 | Danejoris, DooM, grape, Mellow, PoseidoNN  |
|           24 |     1081 | 2024-05-09 | FLUFFY AIMERS    | L   | 0.989      | -            | -                | -                | -         |    -9.68 | Danejoris, DooM, grape, Mellow, PoseidoNN  |
|           23 |     1083 | 2024-05-09 | FLUFFY AIMERS    | W   | 0.989      | 0.477        | 0.016 (0.008)    | 0.354 (0.167)    | 0 (0.000) |    21.95 | Danejoris, DooM, grape, Mellow, PoseidoNN  |
|           22 |     1102 | 2024-05-08 | Wildcard         | L   | 0.982      | -            | -                | -                | -         |    -4.09 | Danejoris, DooM, grape, Mellow, PoseidoNN  |
|           21 |     1105 | 2024-05-08 | Wildcard         | L   | 0.982      | -            | -                | -                | -         |    -4.26 | Danejoris, DooM, grape, Mellow, PoseidoNN  |
|           20 |     1678 | 2024-04-15 | Nouns            | L   | 0.829      | -            | -                | -                | -         |    -3.05 | Danejoris, DooM, grape, Mellow, PoseidoNN  |
|           19 |     1679 | 2024-04-15 | Nouns            | L   | 0.829      | -            | -                | -                | -         |    -3.15 | Danejoris, DooM, grape, Mellow, PoseidoNN  |
|           18 |     1737 | 2024-04-11 | BOSS             | L   | 0.802      | -            | -                | -                | -         |    -5.96 | Danejoris, DooM, grape, Mellow, PoseidoNN  |
|           17 |     1741 | 2024-04-11 | BOSS             | L   | 0.802      | -            | -                | -                | -         |    -6.27 | Danejoris, DooM, grape, Mellow, PoseidoNN  |
|           16 |     1955 | 2024-04-04 | One More         | L   | 0.755      | -            | -                | -                | -         |   -11.33 | Danejoris, DooM, grape, Mellow, PoseidoNN  |
|           15 |     1960 | 2024-04-04 | One More         | W   | 0.755      | 0.477        | 0.003 (0.001)    | 0.177 (0.064)    | 0 (0.000) |    12.70 | Danejoris, DooM, grape, Mellow, PoseidoNN  |
|           14 |     2001 | 2024-04-03 | Take Flyte       | L   | 0.749      | -            | -                | -                | -         |    -8.84 | Danejoris, DooM, grape, Mellow, PoseidoNN  |
|           13 |     2004 | 2024-04-03 | Take Flyte       | L   | 0.748      | -            | -                | -                | -         |    -9.42 | Danejoris, DooM, grape, Mellow, PoseidoNN  |
|           12 |     2131 | 2024-03-27 | MIGHT            | W   | 0.702      | 0.477        | 0.000 (0.000)    | 0.133 (0.044)    | 0 (0.000) |     8.29 | Danejoris, DooM, grape, Mellow, PoseidoNN  |
|           11 |     2138 | 2024-03-27 | MIGHT            | W   | 0.702      | 0.477        | 0.000 (0.000)    | 0.133 (0.044)    | 0 (0.000) |     8.80 | Danejoris, DooM, grape, Mellow, PoseidoNN  |
|           10 |     2181 | 2024-03-26 | Mythic           | L   | 0.696      | -            | -                | -                | -         |    -5.49 | Danejoris, DooM, grape, Mellow, PoseidoNN  |
|            9 |     2186 | 2024-03-26 | Mythic           | W   | 0.695      | 0.477        | 0.010 (0.003)    | 0.391 (0.130)    | 0 (0.000) |    16.83 | Danejoris, DooM, grape, Mellow, PoseidoNN  |
|            8 |     2373 | 2024-03-14 | NRG              | L   | 0.616      | -            | -                | -                | -         |    -4.28 | Danejoris, grape, Mellow, PoseidoNN, RiFT  |
|            7 |     2378 | 2024-03-14 | NRG              | L   | 0.615      | -            | -                | -                | -         |    -4.45 | Danejoris, grape, Mellow, PoseidoNN, RiFT  |
|            6 |     2586 | 2024-03-06 | Carpe Diem       | L   | 0.562      | -            | -                | -                | -         |    -6.44 | Danejoris, DooM, grape, Mellow, PoseidoNN  |
|            5 |     2589 | 2024-03-06 | Carpe Diem       | L   | 0.562      | -            | -                | -                | -         |    -6.74 | Danejoris, DooM, grape, Mellow, PoseidoNN  |
|            4 |     2834 | 2024-02-24 | NRG              | L   | 0.488      | -            | -                | -                | -         |    -3.56 | Danejoris, DooM, grape, Mellow, RiFT       |
|            3 |     2838 | 2024-02-24 | LAG              | W   | 0.488      | 0.143        | 0.021 (0.001)    | 0.484 (0.034)    | 0 (0.000) |    12.08 | Danejoris, DooM, grape, Mellow, RiFT       |
|            2 |     3053 | 2024-02-15 | OMiT             | L   | 0.429      | -            | -                | -                | -         |    -5.10 | Danejoris, DooM, grape, Mellow, RiFT       |
|            1 |     4172 | 2023-12-15 | Pantsu           | W   | 0.016      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.08 | N20AmZ, obi, Termina, tmk, Zamgaa          |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($400.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
