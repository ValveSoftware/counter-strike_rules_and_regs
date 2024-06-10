### Roster Details<br />
Team Name: Rebels<br />
Roster: casey, Flayy, kisserek, olimp, SZPERO<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [50](../standings_global.md)<br />
Regional Rank: [37]( ../standings_europe.md)<br />
Final Rank Value:  1086.5<br />
<br />
Final Rank Value (1086.5) = Starting Rank Value (1105.6) + Head To Head Adjustments (-19.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.439[<sup>1</sup>](#table2)
- Bounty Collected: 0.445[<sup>2</sup>](#table1)
- Opponent Network: 0.270[<sup>2</sup>](#table1)
- LAN Wins: 0.262[<sup>2</sup>](#table1)

The average of these factors is 0.354<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1105.6
- 400 + ( ( 0.354 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1105.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |       38 | 2024-06-09 | Rhyno             | L   | 1.000      | -            | -                | -                | -         |   -20.51 | casey, Flayy, kisserek, olimp, SZPERO   |
|           39 |      163 | 2024-06-07 | BLEED             | W   | 1.000      | 0.500        | 0.349 (0.174)    | 1.000 (0.500)    | 0 (0.000) |    22.91 | casey, Flayy, innocent, kisserek, olimp |
|           38 |      283 | 2024-06-05 | 9INE              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.96 | casey, Flayy, innocent, kisserek, olimp |
|           37 |      475 | 2024-05-30 | PERA              | W   | 1.000      | 0.379        | 0.024 (0.009)    | 0.417 (0.158)    | 0 (0.000) |    10.43 | casey, Flayy, innocent, kisserek, olimp |
|           36 |      515 | 2024-05-29 | UNiTY             | L   | 1.000      | -            | -                | -                | -         |   -21.93 | casey, Flayy, innocent, kisserek, olimp |
|           35 |      602 | 2024-05-25 | ECF               | W   | 1.000      | 0.371        | -                | 0.378 (0.140)    | 0 (0.000) |     7.13 | casey, Flayy, innocent, kisserek, olimp |
|           34 |      716 | 2024-05-21 | UNiTY             | L   | 1.000      | -            | -                | -                | -         |   -21.12 | casey, Flayy, innocent, kisserek, olimp |
|           33 |      739 | 2024-05-20 | The Prodigies     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.23 | casey, Flayy, innocent, kisserek, olimp |
|           32 |      808 | 2024-05-18 | B8                | L   | 1.000      | -            | -                | -                | -         |   -12.38 | casey, Flayy, innocent, kisserek, olimp |
|           31 |      838 | 2024-05-17 | Gaimin Gladiators | W   | 1.000      | 0.384        | 0.081 (0.031)    | 0.749 (0.288)    | 0 (0.000) |    19.08 | casey, Flayy, innocent, kisserek, olimp |
|           30 |     1330 | 2024-04-28 | Aurora            | L   | 0.910      | -            | -                | -                | -         |    -2.95 | casey, Flayy, innocent, kisserek, olimp |
|           29 |     1379 | 2024-04-26 | MIBR              | W   | 0.897      | 0.500        | 0.284 (0.128)    | 0.750 (0.337)    | 1 (0.897) |    26.63 | casey, Flayy, innocent, kisserek, olimp |
|           28 |     1381 | 2024-04-25 | Rooster           | W   | 0.896      | 0.500        | -                | 0.296 (0.133)    | 1 (0.896) |     6.67 | casey, Flayy, innocent, kisserek, olimp |
|           27 |     1534 | 2024-04-19 | brazylijski luz   | L   | 0.853      | -            | -                | -                | -         |   -20.93 | casey, Flayy, innocent, kisserek, olimp |
|           26 |     1713 | 2024-04-13 | Monte             | L   | 0.813      | -            | -                | -                | -         |    -7.58 | casey, Flayy, innocent, kisserek, olimp |
|           25 |     1845 | 2024-04-09 | B8                | W   | 0.787      | 0.500        | 0.160 (0.063)    | 1.000 (0.394)    | -         |    12.28 | casey, Flayy, innocent, kisserek, olimp |
|           24 |     1988 | 2024-04-04 | ALTERNATE aTTaX   | W   | 0.753      | 0.500        | 0.046 (0.017)    | 0.583 (0.220)    | -         |     7.82 | casey, Flayy, innocent, kisserek, olimp |
|           23 |     2038 | 2024-04-03 | SINNERS           | L   | 0.745      | -            | -                | -                | -         |   -11.37 | casey, Flayy, innocent, kisserek, olimp |
|           22 |     2122 | 2024-03-28 | ex-Sprout         | W   | 0.707      | -            | -                | -                | -         |     1.29 | casey, Flayy, innocent, kisserek, olimp |
|           21 |     2155 | 2024-03-27 | B8                | L   | 0.701      | -            | -                | -                | -         |    -9.86 | casey, Flayy, innocent, kisserek, olimp |
|           20 |     2165 | 2024-03-27 | Sashi             | W   | 0.700      | 0.143        | 0.174 (0.017)    | -                | -         |    11.07 | casey, Flayy, innocent, kisserek, olimp |
|           19 |     2195 | 2024-03-25 | Aurora            | L   | 0.687      | -            | -                | -                | -         |    -1.75 | casey, Flayy, innocent, kisserek, olimp |
|           18 |     2390 | 2024-03-14 | brazylijski luz   | L   | 0.614      | -            | -                | -                | -         |   -16.20 | casey, Flayy, kisserek, olimp, SZPERO   |
|           17 |     2662 | 2024-03-04 | BLEED             | L   | 0.547      | -            | -                | -                | -         |    -3.29 | casey, Flayy, kisserek, olimp, sNx      |
|           16 |     2696 | 2024-03-03 | Sangal            | W   | 0.539      | 0.500        | 0.214 (0.058)    | 0.998 (0.269)    | -         |     8.68 | casey, Flayy, kisserek, olimp, sNx      |
|           15 |     2708 | 2024-03-02 | Aurora            | L   | 0.533      | -            | -                | -                | -         |    -1.36 | casey, Flayy, kisserek, olimp, sNx      |
|           14 |     2743 | 2024-02-29 | Sangal            | W   | 0.520      | 0.500        | 0.214 (0.056)    | 0.998 (0.259)    | -         |     8.69 | casey, Flayy, kisserek, olimp, sNx      |
|           13 |     3234 | 2024-02-04 | Falcons           | L   | 0.354      | -            | -                | -                | -         |    -1.43 | casey, Flayy, kisserek, olimp, sNx      |
|           12 |     3271 | 2024-02-03 | FaZe              | L   | 0.346      | -            | -                | -                | -         |    -0.08 | casey, Flayy, kisserek, olimp, sNx      |
|           11 |     3293 | 2024-02-02 | M80               | W   | 0.340      | 0.143        | 0.206 (0.010)    | -                | 1 (0.340) |     8.17 | casey, Flayy, kisserek, olimp, sNx      |
|           10 |     3345 | 2024-01-31 | Eternal Fire      | L   | 0.327      | -            | -                | -                | -         |    -0.15 | casey, Flayy, kisserek, olimp, sNx      |
|            9 |     3350 | 2024-01-31 | Cloud9            | W   | 0.326      | -            | -                | -                | 1 (0.326) |     8.61 | casey, Flayy, kisserek, olimp, sNx      |
|            8 |     3390 | 2024-01-28 | 9 Pandas          | L   | 0.306      | -            | -                | -                | -         |    -3.74 | casey, Flayy, kisserek, olimp, sNx      |
|            7 |     3476 | 2024-01-23 | Viperio           | L   | 0.273      | -            | -                | -                | -         |    -8.26 | casey, Flayy, kisserek, olimp, sNx      |
|            6 |     3477 | 2024-01-23 | PERA              | L   | 0.273      | -            | -                | -                | -         |    -6.25 | casey, Flayy, kisserek, olimp, sNx      |
|            5 |     3497 | 2024-01-22 | Sampi             | L   | 0.267      | -            | -                | -                | -         |    -6.04 | casey, Flayy, kisserek, olimp, sNx      |
|            4 |     3502 | 2024-01-22 | ALTERNATE aTTaX   | W   | 0.266      | -            | -                | -                | -         |     3.27 | casey, Flayy, kisserek, olimp, sNx      |
|            3 |     3506 | 2024-01-22 | M1X KS            | L   | 0.266      | -            | -                | -                | -         |    -3.89 | casey, Flayy, kisserek, olimp, sNx      |
|            2 |     3778 | 2024-01-16 | Passion UA        | L   | 0.227      | -            | -                | -                | -         |    -4.20 | casey, Flayy, kisserek, olimp, sNx      |
|            1 |     3788 | 2024-01-16 | Gucci Academy     | W   | 0.227      | -            | -                | -                | -         |     0.25 | casey, Flayy, kisserek, olimp, sNx      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,108.48)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-05-18 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-04-28 |      0.911 | $10,000.00     | $9,109.73       |
| 2024-02-11 |      0.400 | $10,000.00     | $3,998.75       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
