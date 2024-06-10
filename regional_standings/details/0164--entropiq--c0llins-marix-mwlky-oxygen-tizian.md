### Roster Details<br />
Team Name: Entropiq<br />
Roster: c0llins, Marix, mwlky, oxygeN, tiziaN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [164](../standings_global.md)<br />
Regional Rank: [105]( ../standings_europe.md)<br />
Final Rank Value:  668.0<br />
<br />
Final Rank Value (668.0) = Starting Rank Value (601.1) + Head To Head Adjustments (66.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.335[<sup>2</sup>](#table1)
- Opponent Network: 0.068[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.101<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 601.1
- 400 + ( ( 0.101 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 601.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |     2367 | 2024-03-15 | MOUZ NXT         | L   | 0.619      | -            | -                | -                | -         |    -1.80 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           27 |     2404 | 2024-03-14 | ex-Preasy        | L   | 0.611      | -            | -                | -                | -         |    -2.89 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           26 |     2493 | 2024-03-11 | ECLOT            | W   | 0.591      | 0.371        | 0.101 (0.022)    | 0.549 (0.120)    | 0 (0.000) |    17.76 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           25 |     2510 | 2024-03-10 | ALTERNATE aTTaX  | W   | 0.585      | 0.371        | 0.046 (0.010)    | 0.583 (0.127)    | 0 (0.000) |    15.88 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           24 |     2539 | 2024-03-09 | Alliance         | L   | 0.578      | -            | -                | -                | -         |    -3.72 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           23 |     2554 | 2024-03-08 | Passion UA       | L   | 0.572      | -            | -                | -                | -         |    -1.82 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           22 |     2655 | 2024-03-05 | 500              | L   | 0.551      | -            | -                | -                | -         |    -5.38 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           21 |     2672 | 2024-03-04 | Sashi            | W   | 0.544      | 0.371        | 0.174 (0.035)    | 1.000 (0.202)    | 0 (0.000) |    15.92 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           20 |     2801 | 2024-02-26 | 9INE             | W   | 0.499      | 0.143        | 0.000 (0.000)    | 0.034 (0.002)    | 0 (0.000) |     5.63 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           19 |     2822 | 2024-02-25 | Secret           | W   | 0.492      | 0.358        | 0.000 (0.000)    | 0.128 (0.023)    | 0 (0.000) |     6.89 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           18 |     2872 | 2024-02-23 | Sampi            | L   | 0.478      | -            | -                | -                | -         |    -2.11 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           17 |     2917 | 2024-02-21 | MOUZ NXT         | L   | 0.465      | -            | -                | -                | -         |    -0.97 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           16 |     3004 | 2024-02-17 | The Chosen Few   | W   | 0.441      | 0.358        | 0.002 (0.000)    | 0.167 (0.026)    | 0 (0.000) |     8.42 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           15 |     3154 | 2024-02-11 | ALTERNATE aTTaX  | L   | 0.400      | -            | -                | -                | -         |    -1.35 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           14 |     3227 | 2024-02-05 | Sashi            | L   | 0.358      | -            | -                | -                | -         |    -0.66 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           13 |     3270 | 2024-02-03 | Sangal           | W   | 0.346      | 0.358        | 0.214 (0.027)    | 0.998 (0.124)    | 0 (0.000) |    10.39 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           12 |     3377 | 2024-01-30 | Endpoint         | L   | 0.319      | -            | -                | -                | -         |    -1.64 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           11 |     3380 | 2024-01-30 | ex-Preasy        | L   | 0.318      | -            | -                | -                | -         |    -1.64 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           10 |     3427 | 2024-01-26 | ALTERNATE aTTaX  | L   | 0.292      | -            | -                | -                | -         |    -0.92 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            9 |     3576 | 2024-01-20 | ex-sYnck         | L   | 0.252      | -            | -                | -                | -         |    -5.01 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            8 |     3618 | 2024-01-19 | EYEBALLERS       | W   | 0.247      | 0.143        | 0.006 (0.000)    | 0.722 (0.025)    | 0 (0.000) |     6.67 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            7 |     3670 | 2024-01-18 | Spirit           | L   | 0.240      | -            | -                | -                | -         |    -0.01 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            6 |     3690 | 2024-01-18 | ex-Preasy        | L   | 0.239      | -            | -                | -                | -         |    -1.25 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            5 |     4005 | 2024-01-09 | fnatic           | L   | 0.182      | -            | -                | -                | -         |    -0.09 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            4 |     4008 | 2024-01-09 | KOI              | L   | 0.181      | -            | -                | -                | -         |    -0.56 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            3 |     4018 | 2024-01-09 | BLEED            | W   | 0.181      | 0.143        | 0.349 (0.009)    | 1.000 (0.026)    | 0 (0.000) |     5.61 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            2 |     4032 | 2024-01-09 | ECF              | W   | 0.180      | 0.143        | 0.013 (0.000)    | 0.378 (0.010)    | 0 (0.000) |     4.20 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            1 |     4050 | 2024-01-09 | Come on now dawg | W   | 0.179      | -            | -                | -                | -         |     1.38 | c0llins, Marix, mwlky, oxygeN, tiziaN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
