### Roster Details<br />
Team Name: Passion UA<br />
Roster: fear, jackasmo, jambo, s-chilla, zeRRoFIX<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [80](../standings_global.md)<br />
Regional Rank: [50]( ../standings_europe.md)<br />
Final Rank Value:  848.6<br />
<br />
Final Rank Value (848.6) = Starting Rank Value (907.0) + Head To Head Adjustments (-58.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.399[<sup>1</sup>](#table2)
- Bounty Collected: 0.368[<sup>2</sup>](#table1)
- Opponent Network: 0.283[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.262<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 907.0
- 400 + ( ( 0.262 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 907.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |        0 | 2024-04-22 | B8              | L   | 1.000      | -            | -                | -                | -         |   -16.54 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           38 |       42 | 2024-04-20 | Young Ninjas    | W   | 1.000      | 0.500        | 0.082 (0.041)    | 0.313 (0.156)    | 0 (0.000) |    19.22 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           37 |       62 | 2024-04-20 | Permitta        | L   | 1.000      | -            | -                | -                | -         |   -13.58 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           36 |       99 | 2024-04-19 | ALTERNATE aTTaX | L   | 1.000      | -            | -                | -                | -         |   -18.66 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           35 |      151 | 2024-04-18 | Permitta        | W   | 1.000      | 0.500        | 0.031 (0.015)    | 0.970 (0.485)    | 0 (0.000) |    17.27 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           34 |      184 | 2024-04-17 | Sashi           | W   | 1.000      | 0.371        | 0.064 (0.024)    | 1.000 (0.371)    | 0 (0.000) |    19.31 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           33 |      218 | 2024-04-16 | 500             | L   | 1.000      | -            | -                | -                | -         |   -18.08 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           32 |      257 | 2024-04-14 | SINNERS         | L   | 1.000      | -            | -                | -                | -         |    -7.31 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           31 |      312 | 2024-04-11 | 3DMAX           | W   | 1.000      | 0.384        | 0.048 (0.018)    | 0.801 (0.308)    | 0 (0.000) |    23.53 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           30 |      359 | 2024-04-10 | Sashi           | W   | 1.000      | 0.371        | 0.064 (0.024)    | 1.000 (0.371)    | 0 (0.000) |    19.88 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           29 |      546 | 2024-04-04 | HAVU            | W   | 1.000      | 0.384        | 0.027 (0.011)    | -                | 0 (0.000) |    14.32 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           28 |      618 | 2024-04-02 | BLEED           | L   | 1.000      | -            | -                | -                | -         |    -5.93 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           27 |      648 | 2024-03-31 | Blessed         | L   | 1.000      | -            | -                | -                | -         |   -18.31 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           26 |      655 | 2024-03-30 | Lazer Cats      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.56 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           25 |      663 | 2024-03-29 | NAVI Junior     | L   | 1.000      | -            | -                | -                | -         |   -20.16 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           24 |      682 | 2024-03-28 | GL Academy      | L   | 1.000      | -            | -                | -                | -         |   -20.67 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           23 |      892 | 2024-03-17 | Sampi           | L   | 0.958      | -            | -                | -                | -         |   -12.45 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           22 |      901 | 2024-03-16 | ex-Preasy       | L   | 0.952      | -            | -                | -                | -         |   -17.38 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           21 |      954 | 2024-03-14 | Sampi           | W   | 0.938      | 0.371        | 0.084 (0.029)    | 0.698 (0.243)    | 0 (0.000) |    16.79 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           20 |     1021 | 2024-03-12 | Alliance        | W   | 0.925      | 0.371        | 0.020 (0.007)    | 0.855 (0.293)    | 0 (0.000) |    14.84 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           19 |     1043 | 2024-03-11 | MOUZ NXT        | L   | 0.919      | -            | -                | -                | -         |   -11.84 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           18 |     1062 | 2024-03-10 | MOUZ NXT        | W   | 0.912      | 0.303        | 0.054 (0.015)    | 0.970 (0.268)    | 0 (0.000) |    17.03 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           17 |     1075 | 2024-03-09 | The Chosen Few  | L   | 0.906      | -            | -                | -                | -         |   -19.89 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           16 |     1103 | 2024-03-08 | Spirit Academy  | L   | 0.899      | -            | -                | -                | -         |   -18.38 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           15 |     1107 | 2024-03-08 | Entropiq        | W   | 0.899      | 0.371        | -                | 0.403 (0.134)    | -         |     8.46 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           14 |     1126 | 2024-03-07 | AURA            | W   | 0.893      | -            | -                | -                | -         |     2.66 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           13 |     1164 | 2024-03-06 | Permitta        | L   | 0.886      | -            | -                | -                | -         |   -13.43 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           12 |     1166 | 2024-03-06 | K10             | W   | 0.885      | -            | -                | -                | -         |    10.43 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           11 |     1195 | 2024-03-05 | B8              | L   | 0.880      | -            | -                | -                | -         |   -17.03 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           10 |     1222 | 2024-03-04 | ALTERNATE aTTaX | W   | 0.872      | 0.371        | 0.019 (0.006)    | 0.639 (0.206)    | -         |     9.86 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            9 |     1753 | 2024-02-08 | BLEED           | L   | 0.705      | -            | -                | -                | -         |    -6.76 | jackasmo, jambo, marat2k, s-chilla, Zinchenko |
|            8 |     1934 | 2024-01-29 | Alliance        | W   | 0.639      | -            | -                | -                | -         |     8.83 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |
|            7 |     2261 | 2024-01-18 | MOUZ NXT        | L   | 0.564      | -            | -                | -                | -         |    -9.21 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |
|            6 |     2315 | 2024-01-16 | Zero Tenacity   | L   | 0.555      | -            | -                | -                | -         |   -11.73 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |
|            5 |     2331 | 2024-01-16 | Rebels          | W   | 0.554      | -            | -                | -                | -         |     9.14 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |
|            4 |     2350 | 2024-01-16 | RUBY            | W   | 0.553      | -            | -                | -                | -         |     5.63 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |
|            3 |     2484 | 2024-01-12 | OG              | L   | 0.527      | -            | -                | -                | -         |    -1.52 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |
|            2 |     3545 | 2023-11-04 | ex-Anonymo      | L   | 0.066      | -            | -                | -                | -         |    -1.43 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |
|            1 |     3765 | 2023-10-28 | Permitta        | W   | 0.018      | -            | -                | -                | -         |     0.09 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,928.40)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-31 |      1.000 | $657.00        | $657.00         |
| 2024-03-30 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-03-18 |      0.965 | $3,000.00      | $2,893.50       |
| 2024-03-11 |      0.919 | $1,500.00      | $1,377.90       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
