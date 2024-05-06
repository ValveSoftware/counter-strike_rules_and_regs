### Roster Details<br />
Team Name: Passion UA<br />
Roster: fear, jackasmo, jambo, s-chilla, zeRRoFIX<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [62](../standings_global.md)<br />
Regional Rank: [47]( ../standings_europe.md)<br />
Final Rank Value:  945.3<br />
<br />
Final Rank Value (945.3) = Starting Rank Value (997.4) + Head To Head Adjustments (-52.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.511[<sup>1</sup>](#table2)
- Bounty Collected: 0.422[<sup>2</sup>](#table1)
- Opponent Network: 0.322[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.314<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 997.4
- 400 + ( ( 0.314 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 997.4


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
|           44 |       78 | 2024-05-02 | Nemiga          | L   | 1.000      | -            | -                | -                | -         |    -5.57 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           43 |      104 | 2024-05-01 | PARIVISION      | W   | 1.000      | 0.500        | -                | 0.544 (0.272)    | 0 (0.000) |    16.88 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           42 |      139 | 2024-04-30 | 9 Pandas        | W   | 1.000      | 0.500        | 0.081 (0.040)    | 0.676 (0.338)    | 0 (0.000) |    20.56 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           41 |      166 | 2024-04-28 | ALTERNATE aTTaX | L   | 1.000      | -            | -                | -                | -         |   -15.62 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           40 |      216 | 2024-04-26 | 9 Pandas        | W   | 1.000      | 0.500        | 0.081 (0.040)    | 0.676 (0.338)    | 0 (0.000) |    20.59 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           39 |      252 | 2024-04-25 | Sashi           | L   | 1.000      | -            | -                | -                | -         |    -5.32 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           38 |      264 | 2024-04-24 | Permitta        | L   | 1.000      | -            | -                | -                | -         |   -13.18 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           37 |      296 | 2024-04-22 | B8              | L   | 1.000      | -            | -                | -                | -         |   -14.88 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           36 |      338 | 2024-04-20 | Young Ninjas    | W   | 1.000      | 0.500        | 0.086 (0.043)    | -                | 0 (0.000) |    16.55 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           35 |      358 | 2024-04-20 | Permitta        | L   | 1.000      | -            | -                | -                | -         |   -14.21 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           34 |      395 | 2024-04-19 | ALTERNATE aTTaX | L   | 1.000      | -            | -                | -                | -         |   -18.90 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           33 |      447 | 2024-04-18 | Permitta        | W   | 1.000      | 0.500        | 0.053 (0.027)    | 0.979 (0.489)    | 0 (0.000) |    16.57 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           32 |      480 | 2024-04-17 | Sashi           | W   | 1.000      | 0.371        | 0.188 (0.070)    | 1.000 (0.371)    | 0 (0.000) |    19.71 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           31 |      514 | 2024-04-16 | 500             | L   | 1.000      | -            | -                | -                | -         |   -17.60 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           30 |      553 | 2024-04-14 | SINNERS         | L   | 1.000      | -            | -                | -                | -         |    -8.85 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           29 |      608 | 2024-04-11 | 3DMAX           | W   | 1.000      | 0.384        | 0.055 (0.021)    | 0.810 (0.311)    | 0 (0.000) |    24.48 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           28 |      655 | 2024-04-10 | Sashi           | W   | 1.000      | 0.371        | 0.188 (0.070)    | 1.000 (0.371)    | 0 (0.000) |    20.34 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           27 |      842 | 2024-04-04 | HAVU            | W   | 0.985      | -            | -                | -                | 0 (0.000) |    11.59 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           26 |      914 | 2024-04-02 | BLEED           | L   | 0.973      | -            | -                | -                | -         |    -5.72 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           25 |      944 | 2024-03-31 | Blessed         | L   | 0.959      | -            | -                | -                | -         |   -20.11 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           24 |      951 | 2024-03-30 | Lazer Cats      | W   | 0.951      | -            | -                | -                | 0 (0.000) |     2.86 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           23 |      959 | 2024-03-29 | NAVI Junior     | L   | 0.945      | -            | -                | -                | -         |   -21.81 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           22 |      978 | 2024-03-28 | GL Academy      | L   | 0.938      | -            | -                | -                | -         |   -21.58 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           21 |     1188 | 2024-03-17 | Sampi           | L   | 0.864      | -            | -                | -                | -         |   -12.63 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           20 |     1197 | 2024-03-16 | ex-Preasy       | L   | 0.859      | -            | -                | -                | -         |    -9.30 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           19 |     1250 | 2024-03-14 | Sampi           | W   | 0.845      | 0.371        | 0.101 (0.032)    | 0.731 (0.229)    | -         |    13.99 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           18 |     1317 | 2024-03-12 | Alliance        | W   | 0.832      | 0.371        | -                | 0.815 (0.251)    | -         |    10.56 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           17 |     1339 | 2024-03-11 | MOUZ NXT        | L   | 0.825      | -            | -                | -                | -         |    -9.77 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           16 |     1358 | 2024-03-10 | MOUZ NXT        | W   | 0.819      | 0.303        | 0.210 (0.052)    | 1.000 (0.248)    | -         |    16.38 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           15 |     1371 | 2024-03-09 | The Chosen Few  | L   | 0.813      | -            | -                | -                | -         |   -19.97 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           14 |     1399 | 2024-03-08 | Spirit Academy  | L   | 0.806      | -            | -                | -                | -         |   -19.12 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           13 |     1403 | 2024-03-08 | Entropiq        | W   | 0.805      | -            | -                | -                | -         |     5.66 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           12 |     1422 | 2024-03-07 | AURA            | W   | 0.800      | -            | -                | -                | -         |     1.55 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           11 |     1460 | 2024-03-06 | Permitta        | L   | 0.792      | -            | -                | -                | -         |   -13.15 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           10 |     1462 | 2024-03-06 | K10             | W   | 0.792      | -            | -                | -                | -         |     5.96 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            9 |     1491 | 2024-03-05 | B8              | L   | 0.786      | -            | -                | -                | -         |   -13.14 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            8 |     1518 | 2024-03-04 | ALTERNATE aTTaX | W   | 0.778      | 0.371        | 0.104 (0.030)    | -                | -         |     8.63 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            7 |     2049 | 2024-02-08 | BLEED           | L   | 0.612      | -            | -                | -                | -         |    -6.10 | jackasmo, jambo, marat2k, s-chilla, Zinchenko |
|            6 |     2230 | 2024-01-29 | Alliance        | W   | 0.546      | -            | -                | -                | -         |     5.42 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |
|            5 |     2557 | 2024-01-18 | MOUZ NXT        | L   | 0.471      | -            | -                | -                | -         |    -6.42 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |
|            4 |     2611 | 2024-01-16 | Zero Tenacity   | L   | 0.462      | -            | -                | -                | -         |    -8.78 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |
|            3 |     2627 | 2024-01-16 | Rebels          | W   | 0.461      | -            | -                | -                | -         |     9.85 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |
|            2 |     2646 | 2024-01-16 | RUBY            | W   | 0.460      | -            | -                | -                | -         |     3.35 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |
|            1 |     2780 | 2024-01-12 | OG              | L   | 0.434      | -            | -                | -                | -         |    -1.87 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($17,933.29)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-03 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-03-31 |      0.959 | $657.00        | $630.09         |
| 2024-03-30 |      0.952 | $1,000.00      | $951.68         |
| 2024-03-18 |      0.871 | $3,000.00      | $2,613.59       |
| 2024-03-11 |      0.825 | $1,500.00      | $1,237.94       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
