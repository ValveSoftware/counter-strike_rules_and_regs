### Roster Details<br />
Team Name: GODSENT<br />
Roster: bobeksde, eraa, Golden, Plopski, RuStY<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [194](../standings_global.md)<br />
Regional Rank: [119]( ../standings_europe.md)<br />
Final Rank Value:  540.0<br />
<br />
Final Rank Value (540.0) = Starting Rank Value (536.8) + Head To Head Adjustments (3.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.259[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.069<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 536.8
- 400 + ( ( 0.069 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 536.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |     2464 | 2024-03-12 | MOUZ NXT      | L   | 0.599      | -            | -                | -                | -         |    -0.86 | bobeksde, eraa, Golden, Plopski, RuStY |
|           19 |     2501 | 2024-03-10 | FAVBET        | W   | 0.587      | 0.372        | 0.006 (0.001)    | 0.333 (0.073)    | 0 (0.000) |    14.33 | bobeksde, eraa, Golden, Plopski, RuStY |
|           18 |     2525 | 2024-03-09 | BLUDS         | L   | 0.579      | -            | -                | -                | -         |    -7.13 | bobeksde, eraa, Golden, Plopski, RuStY |
|           17 |     2532 | 2024-03-09 | Young Ninjas  | L   | 0.579      | -            | -                | -                | -         |    -2.49 | bobeksde, eraa, Golden, Plopski, RuStY |
|           16 |     2573 | 2024-03-07 | Passion UA    | L   | 0.567      | -            | -                | -                | -         |    -1.04 | bobeksde, eraa, Golden, Plopski, RuStY |
|           15 |     2608 | 2024-03-06 | Zero Tenacity | L   | 0.559      | -            | -                | -                | -         |    -0.85 | bobeksde, eraa, Golden, Plopski, RuStY |
|           14 |     2621 | 2024-03-06 | Sampi         | L   | 0.558      | -            | -                | -                | -         |    -1.78 | bobeksde, eraa, Golden, Plopski, RuStY |
|           13 |     2651 | 2024-03-05 | Endpoint      | L   | 0.553      | -            | -                | -                | -         |    -2.12 | bobeksde, eraa, Golden, Plopski, RuStY |
|           12 |     2668 | 2024-03-04 | BLEED         | L   | 0.545      | -            | -                | -                | -         |    -0.17 | bobeksde, eraa, Golden, Plopski, RuStY |
|           11 |     2691 | 2024-03-03 | fnatic        | L   | 0.540      | -            | -                | -                | -         |    -0.23 | bobeksde, eraa, Golden, Plopski, RuStY |
|           10 |     2719 | 2024-03-02 | Permitta      | L   | 0.532      | -            | -                | -                | -         |    -1.67 | bobeksde, eraa, Golden, Plopski, RuStY |
|            9 |     2749 | 2024-02-29 | BLEED         | L   | 0.518      | -            | -                | -                | -         |    -0.17 | bobeksde, eraa, Golden, Plopski, RuStY |
|            8 |     2778 | 2024-02-27 | Lotus         | L   | 0.506      | -            | -                | -                | -         |    -8.87 | bobeksde, eraa, Golden, Plopski, RuStY |
|            7 |     2784 | 2024-02-27 | ECF           | L   | 0.506      | -            | -                | -                | -         |    -3.35 | bobeksde, eraa, Golden, Plopski, RuStY |
|            6 |     3198 | 2024-02-08 | Sangal        | W   | 0.379      | 0.143        | 0.214 (0.012)    | 0.998 (0.054)    | 0 (0.000) |    11.51 | bobeksde, eraa, Golden, Plopski, RuStY |
|            5 |     3359 | 2024-01-31 | TSM           | L   | 0.325      | -            | -                | -                | -         |    -2.66 | bobeksde, eraa, Golden, Plopski, Ro1f  |
|            4 |     3379 | 2024-01-30 | 500           | W   | 0.318      | 0.143        | 0.002 (0.000)    | 0.354 (0.016)    | 0 (0.000) |     7.64 | bobeksde, eraa, Golden, Plopski, Ro1f  |
|            3 |     3408 | 2024-01-27 | SINNERS       | L   | 0.298      | -            | -                | -                | -         |    -0.36 | bobeksde, eraa, Golden, Plopski, Ro1f  |
|            2 |     3484 | 2024-01-23 | TSM           | W   | 0.271      | 0.371        | 0.007 (0.001)    | 0.154 (0.015)    | 0 (0.000) |     6.40 | bobeksde, eraa, Golden, Plopski, Ro1f  |
|            1 |     3985 | 2024-01-10 | IKLA          | L   | 0.187      | -            | -                | -                | -         |    -2.88 | bobeksde, eraa, Golden, Plopski, Ro1f  |

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
