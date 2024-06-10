### Roster Details<br />
Team Name: DMS<br />
Roster: AW, h1te, kAlash, sFade8, sm3t<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [81](../standings_global.md)<br />
Regional Rank: [58]( ../standings_europe.md)<br />
Final Rank Value:  931.9<br />
<br />
Final Rank Value (931.9) = Starting Rank Value (866.5) + Head To Head Adjustments (65.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.295[<sup>1</sup>](#table2)
- Bounty Collected: 0.420[<sup>2</sup>](#table1)
- Opponent Network: 0.221[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.234<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 866.5
- 400 + ( ( 0.234 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 866.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |      157 | 2024-06-07 | Zero Tenacity  | L   | 1.000      | -            | -                | -                | -         |    -9.64 | AW, h1te, kAlash, sFade8, sm3t |
|           33 |      258 | 2024-06-06 | CYBERSHOKE     | L   | 1.000      | -            | -                | -                | -         |   -22.78 | AW, h1te, kAlash, sFade8, sm3t |
|           32 |      358 | 2024-06-04 | Sampi          | L   | 1.000      | -            | -                | -                | -         |   -17.67 | AW, h1te, kAlash, sFade8, sm3t |
|           31 |      374 | 2024-06-03 | ARCRED         | L   | 1.000      | -            | -                | -                | -         |   -25.99 | AW, h1te, kAlash, sFade8, sm3t |
|           30 |      385 | 2024-06-02 | Zero Tenacity  | L   | 1.000      | -            | -                | -                | -         |    -9.96 | AW, h1te, kAlash, sFade8, sm3t |
|           29 |      396 | 2024-06-02 | fnatic         | W   | 1.000      | 0.143        | 0.198 (0.028)    | 0.650 (0.093)    | 0 (0.000) |    25.92 | AW, h1te, kAlash, sFade8, sm3t |
|           28 |      420 | 2024-06-01 | ENCE           | W   | 1.000      | 0.143        | 0.205 (0.029)    | 0.407 (0.058)    | 0 (0.000) |    27.21 | AW, h1te, kAlash, sFade8, sm3t |
|           27 |      430 | 2024-06-01 | Zero Tenacity  | L   | 1.000      | -            | -                | -                | -         |    -8.72 | AW, h1te, kAlash, sFade8, sm3t |
|           26 |      435 | 2024-06-01 | ENCE           | W   | 1.000      | 0.143        | 0.205 (0.029)    | -                | 0 (0.000) |    28.00 | AW, h1te, kAlash, sFade8, sm3t |
|           25 |      452 | 2024-05-31 | Spirit Academy | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.55 | AW, h1te, kAlash, sFade8, sm3t |
|           24 |      488 | 2024-05-30 | Nemiga         | W   | 1.000      | 0.371        | 0.335 (0.124)    | 0.638 (0.237)    | 0 (0.000) |    26.05 | AW, h1te, kAlash, sFade8, sm3t |
|           23 |      507 | 2024-05-29 | Verdant        | W   | 1.000      | 0.371        | 0.014 (0.005)    | 0.261 (0.097)    | 0 (0.000) |    12.11 | AW, h1te, kAlash, sFade8, sm3t |
|           22 |      578 | 2024-05-26 | GUN5           | L   | 1.000      | -            | -                | -                | -         |   -14.74 | AW, h1te, kAlash, sFade8, sm3t |
|           21 |      607 | 2024-05-24 | VP.Prodigy     | L   | 1.000      | -            | -                | -                | -         |   -16.95 | AW, h1te, kAlash, sFade8, sm3t |
|           20 |      616 | 2024-05-24 | BetBoom        | L   | 1.000      | -            | -                | -                | -         |    -1.53 | AW, h1te, kAlash, sFade8, sm3t |
|           19 |      626 | 2024-05-23 | B8             | L   | 1.000      | -            | -                | -                | -         |    -5.77 | AW, h1te, kAlash, sFade8, sm3t |
|           18 |      706 | 2024-05-21 | EYEBALLERS     | W   | 1.000      | 0.435        | -                | 0.722 (0.314)    | 0 (0.000) |    14.40 | AW, h1te, kAlash, sFade8, sm3t |
|           17 |      709 | 2024-05-21 | MOUZ NXT       | W   | 1.000      | 0.435        | 0.164 (0.071)    | 1.000 (0.435)    | 0 (0.000) |    22.47 | AW, h1te, kAlash, sFade8, sm3t |
|           16 |      764 | 2024-05-19 | Space          | L   | 1.000      | -            | -                | -                | -         |   -17.04 | AW, h1te, kAlash, sFade8, sm3t |
|           15 |      796 | 2024-05-18 | 777            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.81 | AW, h1te, kAlash, sFade8, sm3t |
|           14 |      801 | 2024-05-18 | Sampi          | W   | 1.000      | 0.435        | 0.036 (0.016)    | 0.883 (0.384)    | 0 (0.000) |    18.50 | AW, h1te, kAlash, sFade8, sm3t |
|           13 |      845 | 2024-05-17 | MOUZ NXT       | L   | 1.000      | -            | -                | -                | -         |    -7.88 | AW, h1te, kAlash, sFade8, sm3t |
|           12 |      865 | 2024-05-16 | B8             | L   | 1.000      | -            | -                | -                | -         |    -6.11 | AW, h1te, kAlash, sFade8, sm3t |
|           11 |      917 | 2024-05-15 | Monte          | L   | 1.000      | -            | -                | -                | -         |    -3.80 | AW, h1te, kAlash, sFade8, sm3t |
|           10 |      977 | 2024-05-14 | Rare Atom      | W   | 1.000      | -            | -                | -                | -         |     6.19 | AW, h1te, kAlash, sFade8, sm3t |
|            9 |      988 | 2024-05-14 | Sangal         | W   | 1.000      | 0.435        | 0.214 (0.093)    | 0.998 (0.434)    | -         |    23.41 | AW, h1te, kAlash, sFade8, sm3t |
|            8 |     1004 | 2024-05-13 | Heimo          | W   | 1.000      | -            | -                | -                | -         |     9.34 | AW, h1te, kAlash, sFade8, sm3t |
|            7 |     1057 | 2024-05-11 | CYBERSHOKE     | W   | 0.999      | 0.143        | 0.041 (0.006)    | -                | -         |    12.49 | AW, h1te, kAlash, sFade8, sm3t |
|            6 |     1322 | 2024-04-28 | Alliance       | L   | 0.912      | -            | -                | -                | -         |   -12.69 | AW, h1te, kAlash, sFade8, sm3t |
|            5 |     1373 | 2024-04-26 | BLEED          | L   | 0.898      | -            | -                | -                | -         |    -1.84 | AW, h1te, kAlash, sFade8, sm3t |
|            4 |     1578 | 2024-04-18 | Apeks          | L   | 0.846      | -            | -                | -                | -         |    -5.10 | AW, h1te, kAlash, sFade8, sm3t |
|            3 |     1587 | 2024-04-18 | EYEBALLERS     | W   | 0.846      | 0.143        | -                | 0.722 (0.087)    | -         |    14.13 | AW, h1te, kAlash, sFade8, sm3t |
|            2 |     2773 | 2024-02-27 | ECF            | L   | 0.507      | -            | -                | -                | -         |    -9.67 | AW, h1te, kAlash, sFade8, sm3t |
|            1 |     2777 | 2024-02-27 | B8             | W   | 0.506      | 0.143        | 0.160 (0.012)    | 1.000 (0.072)    | -         |    12.72 | AW, h1te, kAlash, sFade8, sm3t |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,250.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
