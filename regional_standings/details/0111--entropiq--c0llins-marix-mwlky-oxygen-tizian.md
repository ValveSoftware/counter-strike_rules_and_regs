### Roster Details<br />
Team Name: Entropiq<br />
Roster: c0llins, Marix, mwlky, oxygeN, tiziaN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [111](../standings_global.md)<br />
Regional Rank: [74]( ../standings_europe.md)<br />
Final Rank Value:  780.0<br />
<br />
Final Rank Value (780.0) = Starting Rank Value (742.9) + Head To Head Adjustments (37.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.250[<sup>1</sup>](#table2)
- Bounty Collected: 0.358[<sup>2</sup>](#table1)
- Opponent Network: 0.112[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.180<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 742.9
- 400 + ( ( 0.180 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 742.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |     1216 | 2024-03-15 | MOUZ NXT          | L   | 0.852      | -            | -                | -                | -         |    -5.17 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           42 |     1253 | 2024-03-14 | ex-Preasy         | L   | 0.844      | -            | -                | -                | -         |    -4.22 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           41 |     1342 | 2024-03-11 | ECLOT             | W   | 0.824      | 0.371        | 0.156 (0.048)    | 0.607 (0.185)    | 0 (0.000) |    21.97 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           40 |     1359 | 2024-03-10 | ALTERNATE aTTaX   | W   | 0.819      | 0.371        | 0.104 (0.032)    | 0.779 (0.236)    | 0 (0.000) |    18.02 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           39 |     1388 | 2024-03-09 | Alliance          | L   | 0.811      | -            | -                | -                | -         |    -9.24 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           38 |     1403 | 2024-03-08 | Passion UA        | L   | 0.805      | -            | -                | -                | -         |    -5.66 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           37 |     1504 | 2024-03-05 | 500               | L   | 0.785      | -            | -                | -                | -         |   -10.61 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           36 |     1521 | 2024-03-04 | Sashi             | W   | 0.778      | 0.371        | 0.188 (0.054)    | 1.000 (0.288)    | 0 (0.000) |    19.62 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           35 |     1650 | 2024-02-26 | 9INE              | W   | 0.732      | 0.143        | -                | 0.070 (0.007)    | 0 (0.000) |     5.34 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           34 |     1671 | 2024-02-25 | Secret            | W   | 0.725      | 0.358        | -                | 0.192 (0.050)    | 0 (0.000) |     7.13 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           33 |     1721 | 2024-02-23 | Sampi             | L   | 0.711      | -            | -                | -                | -         |    -4.37 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           32 |     1766 | 2024-02-21 | MOUZ NXT          | L   | 0.698      | -            | -                | -                | -         |    -3.59 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           31 |     1853 | 2024-02-17 | The Chosen Few    | W   | 0.674      | 0.358        | 0.004 (0.001)    | 0.284 (0.069)    | 0 (0.000) |     9.74 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           30 |     2003 | 2024-02-11 | ALTERNATE aTTaX   | L   | 0.633      | -            | -                | -                | -         |    -5.05 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           29 |     2076 | 2024-02-05 | Sashi             | L   | 0.591      | -            | -                | -                | -         |    -3.44 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           28 |     2119 | 2024-02-03 | Sangal            | W   | 0.579      | 0.358        | -                | 0.797 (0.166)    | 0 (0.000) |    10.19 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           27 |     2226 | 2024-01-30 | Endpoint          | L   | 0.552      | -            | -                | -                | -         |    -5.48 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           26 |     2229 | 2024-01-30 | ex-Preasy         | L   | 0.551      | -            | -                | -                | -         |    -2.95 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           25 |     2276 | 2024-01-26 | ALTERNATE aTTaX   | L   | 0.525      | -            | -                | -                | -         |    -3.96 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           24 |     2425 | 2024-01-20 | ex-sYnck          | L   | 0.485      | -            | -                | -                | -         |    -8.30 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           23 |     2467 | 2024-01-19 | EYEBALLERS        | W   | 0.480      | 0.143        | 0.045 (0.003)    | 0.599 (0.041)    | 0 (0.000) |    11.01 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           22 |     2519 | 2024-01-18 | Spirit            | L   | 0.473      | -            | -                | -                | -         |    -0.04 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           21 |     2539 | 2024-01-18 | ex-Preasy         | L   | 0.473      | -            | -                | -                | -         |    -2.58 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           20 |     2854 | 2024-01-09 | fnatic            | L   | 0.415      | -            | -                | -                | -         |    -0.97 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           19 |     2857 | 2024-01-09 | KOI               | L   | 0.415      | -            | -                | -                | -         |    -2.27 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           18 |     2867 | 2024-01-09 | BLEED             | W   | 0.414      | 0.143        | 0.400 (0.024)    | 1.000 (0.059)    | 0 (0.000) |    11.91 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           17 |     2881 | 2024-01-09 | ECF               | W   | 0.413      | 0.143        | -                | 0.346 (0.020)    | 0 (0.000) |     4.20 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           16 |     2899 | 2024-01-09 | Come on now dawg  | W   | 0.413      | -            | -                | -                | -         |     1.70 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           15 |     3232 | 2023-12-04 | ALTERNATE aTTaX   | L   | 0.172      | -            | -                | -                | -         |    -1.04 | c0llins, Marix, oxygeN, S3NSEY, tiziaN |
|           14 |     3279 | 2023-12-02 | Sangal            | L   | 0.158      | -            | -                | -                | -         |    -2.30 | c0llins, Marix, oxygeN, S3NSEY, tiziaN |
|           13 |     3333 | 2023-11-28 | IKLA              | L   | 0.131      | -            | -                | -                | -         |    -3.02 | c0llins, Marix, oxygeN, S3NSEY, tiziaN |
|           12 |     3335 | 2023-11-27 | IKLA              | W   | 0.126      | -            | -                | -                | -         |     1.08 | c0llins, Marix, oxygeN, S3NSEY, tiziaN |
|           11 |     3444 | 2023-11-20 | paiN              | L   | 0.080      | -            | -                | -                | -         |    -0.01 | c0llins, forsyy, Marix, oxygeN, tiziaN |
|           10 |     3453 | 2023-11-20 | Sprout            | L   | 0.078      | -            | -                | -                | -         |    -1.36 | c0llins, forsyy, Marix, oxygeN, tiziaN |
|            9 |     3558 | 2023-11-16 | SAW               | L   | 0.052      | -            | -                | -                | -         |    -0.03 | c0llins, forsyy, Marix, oxygeN, tiziaN |
|            8 |     3607 | 2023-11-15 | 9 Pandas          | L   | 0.046      | -            | -                | -                | -         |    -0.17 | c0llins, forsyy, Marix, oxygeN, tiziaN |
|            7 |     3628 | 2023-11-14 | Pompa             | W   | 0.039      | -            | -                | -                | -         |     0.25 | c0llins, forsyy, Marix, oxygeN, tiziaN |
|            6 |     3648 | 2023-11-13 | Endpoint          | L   | 0.032      | -            | -                | -                | -         |    -0.30 | c0llins, forsyy, Marix, oxygeN, tiziaN |
|            5 |     3661 | 2023-11-12 | Aurora Young Blud | W   | 0.027      | 0.320        | 0.002 (0.000)    | -                | -         |     0.35 | c0llins, forsyy, Marix, oxygeN, tiziaN |
|            4 |     3676 | 2023-11-12 | GUN5              | L   | 0.025      | -            | -                | -                | -         |    -0.54 | c0llins, forsyy, Marix, oxygeN, tiziaN |
|            3 |     3681 | 2023-11-12 | 9 Pandas          | W   | 0.024      | 0.384        | 0.081 (0.001)    | -                | -         |     0.68 | c0llins, forsyy, Marix, oxygeN, tiziaN |
|            2 |     3703 | 2023-11-11 | ODDIK             | W   | 0.019      | 0.320        | 0.015 (0.000)    | -                | -         |     0.47 | c0llins, forsyy, Marix, oxygeN, tiziaN |
|            1 |     3728 | 2023-11-09 | TSM               | W   | 0.007      | 0.143        | 0.008 (0.000)    | -                | -         |     0.09 | c0llins, forsyy, Marix, oxygeN, tiziaN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($159.44)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-11-21 |      0.087 | $1,500.00      | $130.61         |
| 2023-11-12 |      0.027 | $1,050.00      | $28.83          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
