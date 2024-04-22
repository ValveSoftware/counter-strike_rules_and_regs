### Roster Details<br />
Team Name: BOSS<br />
Roster: Cryptic, d4rty, FaNg, freshie, PwnAlone<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [70](../standings_global.md)<br />
Regional Rank: [18]( ../standings_americas.md)<br />
Final Rank Value:  866.7<br />
<br />
Final Rank Value (866.7) = Starting Rank Value (887.6) + Head To Head Adjustments (-20.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.405[<sup>1</sup>](#table2)
- Bounty Collected: 0.332[<sup>2</sup>](#table1)
- Opponent Network: 0.148[<sup>2</sup>](#table1)
- LAN Wins: 0.124[<sup>2</sup>](#table1)

The average of these factors is 0.252<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 887.6
- 400 + ( ( 0.252 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 887.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           51 |      290 | 2024-04-11 | Limitless        | W   | 1.000      | 0.477        | -                | 0.201 (0.096)    | 0 (0.000) |     7.32 | Cryptic, d4rty, FaNg, freshie, PwnAlone   |
|           50 |      294 | 2024-04-11 | Limitless        | W   | 1.000      | 0.477        | -                | 0.201 (0.096)    | 0 (0.000) |     7.81 | Cryptic, d4rty, FaNg, freshie, PwnAlone   |
|           49 |      320 | 2024-04-10 | NRG              | L   | 1.000      | -            | -                | -                | -         |   -15.71 | Cryptic, d4rty, FaNg, freshie, PwnAlone   |
|           48 |      325 | 2024-04-10 | NRG              | W   | 1.000      | 0.477        | 0.007 (0.003)    | 0.633 (0.302)    | 0 (0.000) |    15.79 | Cryptic, d4rty, FaNg, freshie, PwnAlone   |
|           47 |      378 | 2024-04-09 | LAG              | W   | 1.000      | 0.477        | 0.032 (0.015)    | 0.560 (0.267)    | 0 (0.000) |    17.27 | Cryptic, d4rty, FaNg, freshie, PwnAlone   |
|           46 |      381 | 2024-04-09 | LAG              | W   | 1.000      | 0.477        | 0.032 (0.015)    | 0.560 (0.267)    | 0 (0.000) |    18.83 | Cryptic, d4rty, FaNg, freshie, PwnAlone   |
|           45 |      511 | 2024-04-04 | FLUFFY AIMERS    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.01 | Cryptic, d4rty, FaNg, freshie, PwnAlone   |
|           44 |      517 | 2024-04-04 | FLUFFY AIMERS    | W   | 1.000      | 0.477        | 0.023 (0.011)    | 0.225 (0.107)    | 0 (0.000) |    17.66 | Cryptic, d4rty, FaNg, freshie, PwnAlone   |
|           43 |      560 | 2024-04-03 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |   -12.41 | Cryptic, d4rty, FaNg, freshie, PwnAlone   |
|           42 |      603 | 2024-04-02 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -13.53 | Cryptic, d4rty, FaNg, freshie, PwnAlone   |
|           41 |      608 | 2024-04-02 | Take Flyte       | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.56 | Cryptic, d4rty, FaNg, freshie, PwnAlone   |
|           40 |      685 | 2024-03-27 | One More         | W   | 1.000      | 0.477        | 0.012 (0.006)    | 0.216 (0.103)    | -         |    11.69 | brett, Cryptic, d4rty, freshie, PwnAlone  |
|           39 |      689 | 2024-03-27 | One More         | L   | 1.000      | -            | -                | -                | -         |   -20.16 | brett, Cryptic, d4rty, freshie, PwnAlone  |
|           38 |      731 | 2024-03-26 | Elevate          | L   | 1.000      | -            | -                | -                | -         |   -12.09 | brett, Cryptic, d4rty, freshie, PwnAlone  |
|           37 |      738 | 2024-03-26 | Elevate          | L   | 1.000      | -            | -                | -                | -         |   -13.16 | brett, Cryptic, d4rty, freshie, PwnAlone  |
|           36 |      814 | 2024-03-20 | Party Astronauts | L   | 0.982      | -            | -                | -                | -         |   -13.72 | brett, Cryptic, d4rty, freshie, PwnAlone  |
|           35 |      818 | 2024-03-20 | Party Astronauts | L   | 0.982      | -            | -                | -                | -         |   -14.95 | brett, Cryptic, d4rty, freshie, PwnAlone  |
|           34 |     1250 | 2024-03-03 | Liquid           | L   | 0.866      | -            | -                | -                | -         |    -3.27 | brett, Cryptic, d4rty, freshie, PwnAlone  |
|           33 |     1267 | 2024-03-02 | Complexity       | L   | 0.859      | -            | -                | -                | -         |    -1.65 | brett, Cryptic, d4rty, freshie, PwnAlone  |
|           32 |     1282 | 2024-03-01 | MIBR             | W   | 0.854      | 0.143        | 0.305 (0.037)    | 0.853 (0.104)    | 1 (0.854) |    25.50 | brett, Cryptic, d4rty, freshie, PwnAlone  |
|           31 |     1350 | 2024-02-26 | Liquid           | L   | 0.828      | -            | -                | -                | -         |    -2.82 | brett, Cryptic, d4rty, freshie, PwnAlone  |
|           30 |     1363 | 2024-02-25 | Nouns            | L   | 0.822      | -            | -                | -                | -         |   -16.67 | brett, Cryptic, d4rty, freshie, PwnAlone  |
|           29 |     1366 | 2024-02-25 | Wildcard         | W   | 0.822      | 0.143        | 0.021 (0.002)    | 0.503 (0.059)    | -         |    14.35 | brett, Cryptic, d4rty, freshie, PwnAlone  |
|           28 |     1867 | 2024-02-01 | Nouns            | L   | 0.662      | -            | -                | -                | -         |   -14.38 | brett, Cryptic, d4rty, freshie, PwnAlone  |
|           27 |     1869 | 2024-02-01 | Rocket           | W   | 0.662      | -            | -                | -                | -         |     5.91 | brett, Cryptic, d4rty, freshie, PwnAlone  |
|           26 |     1874 | 2024-02-01 | Elevate          | L   | 0.661      | -            | -                | -                | -         |   -10.12 | brett, Cryptic, d4rty, freshie, PwnAlone  |
|           25 |     2151 | 2024-01-19 | M80              | L   | 0.576      | -            | -                | -                | -         |    -6.51 | brett, Cryptic, cynic, d4rty, freshie     |
|           24 |     2162 | 2024-01-19 | Liquid           | L   | 0.575      | -            | -                | -                | -         |    -2.32 | brett, Cryptic, cynic, d4rty, freshie     |
|           23 |     2398 | 2024-01-14 | Rocket           | W   | 0.542      | -            | -                | -                | -         |     4.58 | brett, Cryptic, cynic, d4rty, freshie     |
|           22 |     2421 | 2024-01-13 | my life be like  | W   | 0.535      | -            | -                | -                | -         |     5.20 | brett, Cryptic, cynic, d4rty, freshie     |
|           21 |     2461 | 2024-01-12 | Wildcard         | L   | 0.530      | -            | -                | -                | -         |    -9.36 | brett, Cryptic, cynic, d4rty, freshie     |
|           20 |     2463 | 2024-01-12 | For Fun          | W   | 0.529      | -            | -                | -                | -         |     4.59 | brett, Cryptic, cynic, d4rty, freshie     |
|           19 |     2764 | 2023-12-12 | M80              | L   | 0.322      | -            | -                | -                | -         |    -3.57 | brett, Cryptic, d4rty, freshie, WolfY     |
|           18 |     2771 | 2023-12-11 | Party Astronauts | W   | 0.316      | 0.303        | 0.020 (0.002)    | -                | -         |     4.08 | brett, Cryptic, d4rty, freshie, WolfY     |
|           17 |     2783 | 2023-12-10 | M80              | L   | 0.309      | -            | -                | -                | -         |    -3.46 | brett, Cryptic, d4rty, freshie, WolfY     |
|           16 |     2800 | 2023-12-09 | Party Astronauts | W   | 0.302      | 0.500        | 0.020 (0.003)    | 0.554 (0.084)    | -         |     3.95 | brett, Cryptic, d4rty, freshie, WolfY     |
|           15 |     2803 | 2023-12-09 | Elevate          | L   | 0.302      | -            | -                | -                | -         |    -4.94 | brett, Cryptic, d4rty, dea, freshie       |
|           14 |     2807 | 2023-12-09 | Supernova        | W   | 0.301      | -            | -                | -                | 1 (0.301) |     0.60 | brett, Cryptic, d4rty, dea, freshie       |
|           13 |     2849 | 2023-12-07 | M80              | L   | 0.289      | -            | -                | -                | -         |    -3.32 | brett, Cryptic, d4rty, freshie, WolfY     |
|           12 |     2874 | 2023-12-06 | Nouns            | W   | 0.282      | 0.500        | 0.019 (0.003)    | -                | -         |     2.78 | brett, Cryptic, d4rty, freshie, WolfY     |
|           11 |     3116 | 2023-11-22 | Party Astronauts | L   | 0.189      | -            | -                | -                | -         |    -3.60 | brett, Cryptic, d4rty, freshie, WolfY     |
|           10 |     3132 | 2023-11-21 | NRG              | W   | 0.182      | -            | -                | -                | -         |     2.14 | brett, Cryptic, d4rty, freshie, WolfY     |
|            9 |     3147 | 2023-11-20 | Rocket           | W   | 0.175      | -            | -                | -                | -         |     1.28 | brett, Cryptic, d4rty, freshie, WolfY     |
|            8 |     3162 | 2023-11-19 | M80              | L   | 0.169      | -            | -                | -                | -         |    -2.03 | brett, Cryptic, d4rty, freshie, WolfY     |
|            7 |     3214 | 2023-11-17 | Take Flyte       | W   | 0.156      | -            | -                | -                | -         |     1.46 | brett, Cryptic, d4rty, freshie, WolfY     |
|            6 |     3321 | 2023-11-14 | MIGHT            | L   | 0.135      | -            | -                | -                | -         |    -3.05 | CLASIA, djay, Nifty, scar, stamina        |
|            5 |     3448 | 2023-11-08 | Eros             | W   | 0.095      | -            | -                | -                | -         |     0.57 | brett, Cryptic, d4rty, freshie, SLIGHT    |
|            4 |     3519 | 2023-11-05 | ex-Anonymo       | L   | 0.072      | -            | -                | -                | -         |    -1.50 | fr3nd, lunAtic, reiko, Sobol, virtuoso    |
|            3 |     3551 | 2023-11-04 | ex-sYnck         | L   | 0.064      | -            | -                | -                | -         |    -1.42 | brett, Cryptic, d4rty, freshie, SLIGHT    |
|            2 |     3752 | 2023-10-28 | SAW              | L   | 0.019      | -            | -                | -                | -         |    -0.07 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            1 |     3797 | 2023-10-27 | Monte            | L   | 0.011      | -            | -                | -                | -         |    -0.05 | brett, Cryptic, d4rty, freshie, SLIGHT    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,477.66)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-10 |      0.309 | $20,000.00     | $6,175.78       |
| 2023-12-09 |      0.302 | $1,000.00      | $301.87         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
