### Roster Details<br />
Team Name: Entropiq<br />
Roster: c0llins, Marix, mwlky, oxygeN, tiziaN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [146](../standings_global.md)<br />
Regional Rank: [97]( ../standings_europe.md)<br />
Final Rank Value:  672.2<br />
<br />
Final Rank Value (672.2) = Starting Rank Value (602.5) + Head To Head Adjustments (69.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.336[<sup>2</sup>](#table1)
- Opponent Network: 0.082[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.104<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 602.5
- 400 + ( ( 0.104 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 602.5


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
|           30 |     1867 | 2024-03-15 | MOUZ NXT         | L   | 0.698      | -            | -                | -                | -         |    -2.66 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           29 |     1904 | 2024-03-14 | ex-Preasy        | L   | 0.690      | -            | -                | -                | -         |    -3.31 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           28 |     1993 | 2024-03-11 | ECLOT            | W   | 0.670      | 0.371        | 0.084 (0.021)    | 0.530 (0.132)    | 0 (0.000) |    18.67 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           27 |     2010 | 2024-03-10 | ALTERNATE aTTaX  | W   | 0.665      | 0.371        | 0.048 (0.012)    | 0.650 (0.160)    | 0 (0.000) |    16.76 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           26 |     2039 | 2024-03-09 | Alliance         | L   | 0.657      | -            | -                | -                | -         |    -5.63 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           25 |     2054 | 2024-03-08 | Passion UA       | L   | 0.651      | -            | -                | -                | -         |    -2.62 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           24 |     2155 | 2024-03-05 | 500              | L   | 0.631      | -            | -                | -                | -         |    -6.53 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           23 |     2172 | 2024-03-04 | Sashi            | W   | 0.624      | 0.371        | 0.157 (0.036)    | 1.000 (0.231)    | 0 (0.000) |    17.33 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           22 |     2301 | 2024-02-26 | 9INE             | W   | 0.578      | 0.143        | 0.000 (0.000)    | 0.046 (0.004)    | 0 (0.000) |     6.38 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           21 |     2322 | 2024-02-25 | Secret           | W   | 0.571      | 0.358        | 0.000 (0.000)    | 0.153 (0.031)    | 0 (0.000) |     7.99 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           20 |     2372 | 2024-02-23 | Sampi            | L   | 0.557      | -            | -                | -                | -         |    -2.76 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           19 |     2417 | 2024-02-21 | MOUZ NXT         | L   | 0.544      | -            | -                | -                | -         |    -1.50 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           18 |     2504 | 2024-02-17 | The Chosen Few   | W   | 0.520      | 0.358        | 0.002 (0.000)    | 0.207 (0.039)    | 0 (0.000) |     9.66 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           17 |     2654 | 2024-02-11 | ALTERNATE aTTaX  | L   | 0.479      | -            | -                | -                | -         |    -2.35 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           16 |     2727 | 2024-02-05 | Sashi            | L   | 0.437      | -            | -                | -                | -         |    -1.44 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           15 |     2770 | 2024-02-03 | Sangal           | W   | 0.425      | 0.358        | 0.166 (0.025)    | 0.911 (0.139)    | 0 (0.000) |    12.41 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           14 |     2877 | 2024-01-30 | Endpoint         | L   | 0.398      | -            | -                | -                | -         |    -2.39 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           13 |     2880 | 2024-01-30 | ex-Preasy        | L   | 0.397      | -            | -                | -                | -         |    -2.00 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           12 |     2927 | 2024-01-26 | ALTERNATE aTTaX  | L   | 0.371      | -            | -                | -                | -         |    -1.72 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           11 |     3076 | 2024-01-20 | ex-sYnck         | L   | 0.331      | -            | -                | -                | -         |    -5.38 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           10 |     3118 | 2024-01-19 | EYEBALLERS       | W   | 0.326      | 0.143        | 0.009 (0.000)    | 0.611 (0.028)    | 0 (0.000) |     8.32 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|            9 |     3170 | 2024-01-18 | Spirit           | L   | 0.319      | -            | -                | -                | -         |    -0.01 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|            8 |     3190 | 2024-01-18 | ex-Preasy        | L   | 0.318      | -            | -                | -                | -         |    -1.62 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|            7 |     3505 | 2024-01-09 | fnatic           | L   | 0.261      | -            | -                | -                | -         |    -0.50 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|            6 |     3508 | 2024-01-09 | KOI              | L   | 0.260      | -            | -                | -                | -         |    -1.14 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|            5 |     3518 | 2024-01-09 | BLEED            | W   | 0.260      | 0.143        | 0.246 (0.009)    | 0.982 (0.036)    | 0 (0.000) |     7.89 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|            4 |     3532 | 2024-01-09 | ECF              | W   | 0.259      | 0.143        | 0.013 (0.000)    | 0.436 (0.016)    | 0 (0.000) |     5.93 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|            3 |     3550 | 2024-01-09 | Come on now dawg | W   | 0.259      | -            | -                | -                | -         |     1.98 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|            2 |     3883 | 2023-12-04 | ALTERNATE aTTaX  | L   | 0.018      | -            | -                | -                | -         |    -0.07 | c0llins, Marix, oxygeN, S3NSEY, tiziaN |
|            1 |     3930 | 2023-12-02 | Sangal           | L   | 0.003      | -            | -                | -                | -         |    -0.01 | c0llins, Marix, oxygeN, S3NSEY, tiziaN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
