### Roster Details<br />
Team Name: FLUFFY AIMERS<br />
Roster: brett, jason, nooz, PNDLM, sacrifice<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [117](../standings_global.md)<br />
Regional Rank: [30]( ../standings_americas.md)<br />
Final Rank Value:  736.7<br />
<br />
Final Rank Value (736.7) = Starting Rank Value (853.1) + Head To Head Adjustments (-116.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.363[<sup>1</sup>](#table2)
- Bounty Collected: 0.265[<sup>2</sup>](#table1)
- Opponent Network: 0.099[<sup>2</sup>](#table1)
- LAN Wins: 0.206[<sup>2</sup>](#table1)

The average of these factors is 0.233<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 853.1
- 400 + ( ( 0.233 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 853.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |      180 | 2024-05-21 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -6.60 | brett, jason, nooz, PNDLM, sacrifice   |
|           30 |      183 | 2024-05-21 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -7.00 | brett, jason, nooz, PNDLM, sacrifice   |
|           29 |      220 | 2024-05-20 | Take Flyte       | W   | 1.000      | 0.477        | 0.006 (0.003)    | 0.392 (0.187)    | 0 (0.000) |    16.93 | brett, jason, nooz, PNDLM, sacrifice   |
|           28 |      225 | 2024-05-20 | Take Flyte       | L   | 1.000      | -            | -                | -                | -         |   -14.47 | brett, jason, nooz, PNDLM, sacrifice   |
|           27 |      260 | 2024-05-19 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -7.37 | brett, jason, nooz, PNDLM, sacrifice   |
|           26 |      314 | 2024-05-17 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -8.26 | brett, jason, nooz, PNDLM, sacrifice   |
|           25 |      315 | 2024-05-17 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -8.86 | brett, jason, nooz, PNDLM, sacrifice   |
|           24 |      347 | 2024-05-16 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |   -10.04 | brett, jason, nooz, PNDLM, sacrifice   |
|           23 |      350 | 2024-05-16 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |   -10.86 | brett, jason, nooz, PNDLM, sacrifice   |
|           22 |      384 | 2024-05-15 | MIGHT            | W   | 1.000      | 0.477        | 0.001 (0.000)    | 0.167 (0.080)    | 0 (0.000) |     8.37 | brett, jason, nooz, PNDLM, sacrifice   |
|           21 |      390 | 2024-05-15 | MIGHT            | W   | 1.000      | 0.477        | 0.001 (0.000)    | 0.167 (0.080)    | 0 (0.000) |     8.98 | brett, jason, nooz, PNDLM, sacrifice   |
|           20 |      439 | 2024-05-14 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |    -9.68 | ayy, jason, nooz, PNDLM, sacrifice     |
|           19 |      443 | 2024-05-14 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |   -10.45 | ayy, jason, nooz, PNDLM, sacrifice     |
|           18 |      581 | 2024-05-09 | Limitless        | W   | 1.000      | 0.477        | 0.001 (0.001)    | 0.168 (0.080)    | 0 (0.000) |     9.76 | ayy, jason, nooz, PNDLM, sacrifice     |
|           17 |      583 | 2024-05-09 | Limitless        | L   | 1.000      | -            | -                | -                | -         |   -22.22 | ayy, jason, nooz, PNDLM, sacrifice     |
|           16 |      962 | 2024-04-21 | For Fun          | W   | 0.949      | 0.319        | 0.007 (0.002)    | 0.074 (0.022)    | 1 (0.949) |    10.17 | ayy, brett, Fr3nk1e, jason, PNDLM      |
|           15 |      964 | 2024-04-21 | Will to Win      | W   | 0.947      | 0.319        | 0.001 (0.000)    | -                | 1 (0.947) |     5.27 | ayy, brett, Fr3nk1e, jason, PNDLM      |
|           14 |     1266 | 2024-04-10 | One More         | L   | 0.875      | -            | -                | -                | -         |   -18.16 | ayy, intra, jason, PNDLM, sacrifice    |
|           13 |     1271 | 2024-04-10 | One More         | W   | 0.874      | 0.477        | 0.005 (0.002)    | 0.212 (0.088)    | 0 (0.000) |     9.20 | ayy, jason, nooz, PNDLM, sacrifice     |
|           12 |     1458 | 2024-04-04 | BOSS             | L   | 0.834      | -            | -                | -                | -         |   -12.99 | ayy, intra, jason, nooz, sacrifice     |
|           11 |     1464 | 2024-04-04 | BOSS             | L   | 0.834      | -            | -                | -                | -         |   -13.99 | ayy, intra, jason, PNDLM, sacrifice    |
|           10 |     1853 | 2024-03-15 | NRG              | L   | 0.701      | -            | -                | -                | -         |   -11.15 | ayy, intra, jason, PNDLM, sacrifice    |
|            9 |     1855 | 2024-03-15 | NRG              | W   | 0.701      | 0.477        | 0.010 (0.003)    | 0.605 (0.202)    | 0 (0.000) |    11.14 | ayy, intra, jason, PNDLM, sacrifice    |
|            8 |     2058 | 2024-03-07 | LAG              | L   | 0.648      | -            | -                | -                | -         |    -9.28 | ayy, jason, LEARSI, PNDLM, sacrifice   |
|            7 |     2059 | 2024-03-07 | LAG              | W   | 0.648      | 0.477        | 0.014 (0.004)    | 0.440 (0.136)    | 0 (0.000) |    11.40 | ayy, jason, LEARSI, PNDLM, sacrifice   |
|            6 |     2522 | 2024-02-16 | Mythic           | L   | 0.515      | -            | -                | -                | -         |    -8.76 | intra, jason, LEARSI, PNDLM, sacrifice |
|            5 |     2527 | 2024-02-16 | LAG              | W   | 0.514      | 0.143        | 0.014 (0.001)    | 0.440 (0.032)    | 0 (0.000) |     9.57 | intra, jason, LEARSI, PNDLM, sacrifice |
|            4 |     2580 | 2024-02-14 | Mythic           | L   | 0.502      | -            | -                | -                | -         |    -8.75 | intra, jason, LEARSI, PNDLM, sacrifice |
|            3 |     2582 | 2024-02-14 | Mythic           | L   | 0.501      | -            | -                | -                | -         |    -9.14 | intra, jason, LEARSI, PNDLM, sacrifice |
|            2 |     2620 | 2024-02-13 | Carpe Diem       | L   | 0.495      | -            | -                | -                | -         |   -12.34 | intra, jason, LEARSI, PNDLM, sacrifice |
|            1 |     2624 | 2024-02-13 | Carpe Diem       | W   | 0.495      | 0.477        | -                | 0.369 (0.087)    | -         |     3.23 | intra, jason, LEARSI, PNDLM, sacrifice |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,333.90)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-22 |      1.000 | $1,200.00      | $1,200.00       |
| 2024-04-21 |      0.949 | $4,357.00      | $4,133.90       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
