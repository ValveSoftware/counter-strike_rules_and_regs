### Roster Details<br />
Team Name: DNG<br />
Roster: abizz, atarax1a, NikoM, tom1jed, zock<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [128](../standings_global.md)<br />
Regional Rank: [34]( ../standings_americas.md)<br />
Final Rank Value:  745.0<br />
<br />
Final Rank Value (745.0) = Starting Rank Value (755.6) + Head To Head Adjustments (-10.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.294[<sup>1</sup>](#table2)
- Bounty Collected: 0.195[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.198[<sup>2</sup>](#table1)

The average of these factors is 0.174<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 755.6
- 400 + ( ( 0.174 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 755.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |     1923 | 2022-10-23 | ex-Isurus           | L   | 0.455      | -            | -                | -                | -         |    -4.92 | abizz, atarax1a, NikoM, tom1jed, zock       |
|           19 |     1943 | 2022-10-22 | Furious             | W   | 0.448      | 0.333        | 0.001 (0.000)    | 0.116 (0.017)    | 1 (0.448) |     4.75 | abizz, atarax1a, NikoM, tom1jed, zock       |
|           18 |     1960 | 2022-10-22 | Rehl                | L   | 0.446      | -            | -                | -                | -         |    -8.97 | abizz, atarax1a, NikoM, tom1jed, zock       |
|           17 |     1973 | 2022-10-21 | Boca Juniors        | W   | 0.442      | 0.333        | 0.000 (0.000)    | 0.034 (0.005)    | 1 (0.442) |     3.79 | abizz, atarax1a, NikoM, tom1jed, zock       |
|           16 |     1983 | 2022-10-21 | SWS                 | W   | 0.440      | 0.371        | 0.001 (0.000)    | 0.125 (0.020)    | 0 (0.000) |     5.11 | abizz, atarax1a, NikoM, tom1jed, zock       |
|           15 |     2007 | 2022-10-20 | AJF                 | W   | 0.434      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.81 | abizz, atarax1a, NikoM, tom1jed, zock       |
|           14 |     2032 | 2022-10-19 | Meta                | L   | 0.427      | -            | -                | -                | -         |    -6.49 | abizz, atarax1a, NikoM, tom1jed, zock       |
|           13 |     2511 | 2022-09-29 | ex-Isurus           | L   | 0.294      | -            | -                | -                | -         |    -3.31 | abizz, atarax1a, nacho, NikoM, tom1jed      |
|           12 |     2588 | 2022-09-26 | Ape Gang            | W   | 0.274      | 0.333        | 0.000 (0.000)    | 0.045 (0.004)    | 1 (0.274) |     2.28 | andizin, christo, pavv, tomaszin, Yokowow   |
|           11 |     2648 | 2022-09-24 | Furious             | W   | 0.261      | 0.333        | 0.001 (0.000)    | 0.116 (0.010)    | 1 (0.261) |     2.79 | ABM, KAISER, laser, nch, peqexino           |
|           10 |     2694 | 2022-09-23 | River Plate         | L   | 0.254      | -            | -                | -                | -         |    -6.37 | abizz, atarax1a, nacho, NikoM, tom1jed      |
|            9 |     2738 | 2022-09-22 | Mad Kings           | W   | 0.247      | 0.333        | 0.000 (0.000)    | 0.081 (0.007)    | 1 (0.247) |     1.89 | BabyRage, Knight, KOT3, Slayerhz, zockie    |
|            8 |     2802 | 2022-09-20 | WINDINGO            | W   | 0.234      | 0.333        | 0.002 (0.000)    | 0.210 (0.016)    | 1 (0.234) |     2.81 | bichop, DILLION1, FRANAR, PREDI, restikk    |
|            7 |     2830 | 2022-09-19 | Fuscão 1500         | L   | 0.228      | -            | -                | -                | -         |    -3.35 | abizz, atarax1a, nacho, NikoM, tom1jed      |
|            6 |     2850 | 2022-09-18 | Los Grandes Academy | W   | 0.221      | 0.384        | 0.000 (0.000)    | 0.007 (0.001)    | 0 (0.000) |     0.86 | mAThx, perez, puni, suNday, TEKO            |
|            5 |     2994 | 2022-09-14 | SWS                 | W   | 0.193      | 0.384        | 0.001 (0.000)    | 0.125 (0.009)    | 0 (0.000) |     2.19 | abizz, atarax1a, nacho, NikoM, tom1jed      |
|            4 |     3052 | 2022-09-12 | Fuscão 1500         | L   | 0.179      | -            | -                | -                | -         |    -2.65 | atarax1a, guidimon, minimal, NikoM, tom1jed |
|            3 |     3128 | 2022-09-10 | Paquetá             | L   | 0.167      | -            | -                | -                | -         |    -2.92 | atarax1a, guidimon, minimal, NikoM, tom1jed |
|            2 |     3662 | 2022-08-21 | O PLANO             | L   | 0.035      | -            | -                | -                | -         |    -0.87 | caike, kNgV-, NEKIZ, piriaz1n, yel          |
|            1 |     3780 | 2022-08-16 | Paquetá             | L   | 0.001      | -            | -                | -                | -         |    -0.02 | ALLE, DeStiNy, Gafolo, venomzera, xns       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,865.79)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-10-30 |      0.501 | $400.00        | $200.48         |
| 2022-10-23 |      0.455 | $3,000.00      | $1,363.77       |
| 2022-09-30 |      0.302 | $1,000.00      | $301.55         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
