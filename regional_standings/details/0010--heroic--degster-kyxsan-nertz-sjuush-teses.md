### Roster Details<br />
Team Name: HEROIC<br />
Roster: degster, kyxsan, NertZ, sjuush, TeSeS<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [10](../standings_global.md)<br />
Regional Rank: [9]( ../standings_europe.md)<br />
Final Rank Value:  1659.9<br />
<br />
Final Rank Value (1659.9) = Starting Rank Value (1788.4) + Head To Head Adjustments (-128.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.694[<sup>1</sup>](#table2)
- Bounty Collected: 0.640[<sup>2</sup>](#table1)
- Opponent Network: 0.452[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.696<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1788.4
- 400 + ( ( 0.696 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1788.4


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
|           59 |      243 | 2024-06-06 | ENCE              | W   | 1.000      | 0.715        | 0.205 (0.147)    | 0.407 (0.291)    | 1 (1.000) |     3.64 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           58 |      260 | 2024-06-06 | Sashi             | W   | 1.000      | 0.715        | 0.174 (0.125)    | 1.000 (0.715)    | 1 (1.000) |     3.31 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           57 |      268 | 2024-06-06 | The MongolZ       | L   | 1.000      | -            | -                | -                | -         |    -8.96 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           56 |      296 | 2024-06-05 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |   -24.14 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           55 |      319 | 2024-06-05 | Astralis          | L   | 1.000      | -            | -                | -                | -         |    -8.22 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           54 |      453 | 2024-05-31 | Vitality          | L   | 1.000      | -            | -                | -                | -         |    -6.83 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           53 |      498 | 2024-05-29 | BIG               | W   | 1.000      | 0.624        | 0.228 (0.142)    | -                | 1 (1.000) |     6.16 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           52 |      510 | 2024-05-29 | Natus Vincere     | W   | 1.000      | 0.624        | 1.000 (0.624)    | -                | 1 (1.000) |    22.26 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           51 |      530 | 2024-05-28 | M80               | W   | 1.000      | 0.624        | 0.206 (0.128)    | 0.749 (0.467)    | 1 (1.000) |     2.92 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           50 |      546 | 2024-05-27 | Virtus.pro        | L   | 1.000      | -            | -                | -                | -         |   -16.03 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           49 |      797 | 2024-05-18 | MOUZ              | L   | 1.000      | -            | -                | -                | -         |    -4.12 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           48 |      830 | 2024-05-17 | MIBR              | W   | 1.000      | 0.769        | 0.284 (0.219)    | 0.750 (0.577)    | 1 (1.000) |    11.17 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           47 |      870 | 2024-05-16 | Spirit            | L   | 1.000      | -            | -                | -                | -         |    -6.59 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           46 |      920 | 2024-05-15 | MIBR              | W   | 1.000      | 0.769        | 0.284 (0.219)    | 0.750 (0.577)    | 1 (1.000) |    11.44 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           45 |     1188 | 2024-05-04 | Ninjas in Pyjamas | L   | 0.953      | -            | -                | -                | -         |   -22.11 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           44 |     1201 | 2024-05-03 | BIG               | L   | 0.947      | -            | -                | -                | -         |   -25.13 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           43 |     1213 | 2024-05-03 | FlyQuest          | W   | 0.945      | 0.889        | -                | 0.556 (0.467)    | 1 (0.945) |     4.58 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           42 |     1231 | 2024-05-02 | Complexity        | L   | 0.939      | -            | -                | -                | -         |   -18.46 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           41 |     1277 | 2024-04-30 | Ninjas in Pyjamas | W   | 0.926      | 0.889        | 0.294 (0.242)    | 0.480 (0.395)    | 1 (0.926) |     6.94 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           40 |     1805 | 2024-04-10 | G2                | L   | 0.792      | -            | -                | -                | -         |    -7.52 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           39 |     1862 | 2024-04-09 | FURIA             | W   | 0.785      | 0.624        | -                | 0.590 (0.289)    | 1 (0.785) |     7.64 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           38 |     1896 | 2024-04-08 | 9z                | W   | 0.778      | 0.624        | -                | 0.724 (0.352)    | -         |     2.39 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           37 |     1906 | 2024-04-07 | Liquid            | L   | 0.776      | -            | -                | -                | -         |   -15.54 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           36 |     2212 | 2024-03-23 | paiN              | L   | 0.674      | -            | -                | -                | -         |   -15.19 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           35 |     2234 | 2024-03-22 | Virtus.pro        | L   | 0.665      | -            | -                | -                | -         |   -11.96 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           34 |     2246 | 2024-03-21 | Complexity        | L   | 0.660      | -            | -                | -                | -         |   -14.57 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           33 |     2254 | 2024-03-21 | FaZe              | W   | 0.659      | 1.000        | 1.000 (0.659)    | 0.588 (0.387)    | -         |    15.63 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           32 |     2303 | 2024-03-18 | Eternal Fire      | W   | 0.639      | -            | -                | -                | -         |    12.34 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           31 |     2324 | 2024-03-17 | Imperial          | W   | 0.633      | -            | -                | -                | -         |     3.97 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           30 |     2334 | 2024-03-17 | Lynn Vision       | W   | 0.632      | -            | -                | -                | -         |     0.84 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           29 |     2434 | 2024-03-13 | Metizport         | W   | 0.606      | -            | -                | -                | -         |     0.40 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           28 |     2459 | 2024-03-12 | Virtus.pro        | L   | 0.600      | -            | -                | -                | -         |   -10.67 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           27 |     2476 | 2024-03-11 | ENCE              | W   | 0.594      | -            | -                | -                | -         |     3.20 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           26 |     2488 | 2024-03-11 | ex-Preasy         | W   | 0.593      | -            | -                | -                | -         |     0.25 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           25 |     2529 | 2024-03-09 | OG                | L   | 0.579      | -            | -                | -                | -         |   -17.54 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           24 |     2605 | 2024-03-06 | Young Ninjas      | W   | 0.560      | -            | -                | -                | -         |     0.11 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           23 |     2886 | 2024-02-22 | GamerLegion       | W   | 0.473      | -            | -                | -                | -         |     0.40 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           22 |     2907 | 2024-02-21 | Spirit            | L   | 0.466      | -            | -                | -                | -         |    -4.80 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           21 |     2944 | 2024-02-20 | Astralis          | W   | 0.458      | -            | -                | -                | -         |     9.51 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           20 |     2958 | 2024-02-19 | Vitality          | L   | 0.454      | -            | -                | -                | -         |    -4.25 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           19 |     2966 | 2024-02-19 | ex-Preasy         | W   | 0.452      | -            | -                | -                | -         |     0.13 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           18 |     3209 | 2024-02-06 | G2                | L   | 0.367      | -            | -                | -                | -         |    -3.77 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           17 |     3216 | 2024-02-06 | GamerLegion       | W   | 0.365      | -            | -                | -                | -         |     0.29 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           16 |     3223 | 2024-02-05 | Vitality          | W   | 0.359      | 1.000        | 0.670 (0.241)    | -                | -         |     8.05 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           15 |     3274 | 2024-02-03 | G2                | L   | 0.346      | -            | -                | -                | -         |    -3.40 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           14 |     3344 | 2024-01-31 | BIG               | W   | 0.327      | -            | -                | -                | -         |     1.52 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           13 |     3354 | 2024-01-31 | Astralis          | W   | 0.326      | -            | -                | -                | -         |     7.15 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           12 |     3438 | 2024-01-25 | BIG               | L   | 0.288      | -            | -                | -                | -         |    -7.80 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           11 |     3453 | 2024-01-24 | Cloud9            | L   | 0.280      | -            | -                | -                | -         |    -8.01 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           10 |     3561 | 2024-01-20 | ex-sYnck          | W   | 0.254      | -            | -                | -                | -         |     0.01 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            9 |     3581 | 2024-01-20 | IKLA              | W   | 0.252      | -            | -                | -                | -         |     0.01 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            8 |     3626 | 2024-01-19 | KOI               | L   | 0.246      | -            | -                | -                | -         |    -7.64 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            7 |     3681 | 2024-01-18 | MOUZ              | L   | 0.240      | -            | -                | -                | -         |    -1.77 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            6 |     3689 | 2024-01-18 | FORZE             | W   | 0.239      | -            | -                | -                | -         |     0.01 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            5 |     3952 | 2024-01-11 | SINNERS           | W   | 0.194      | -            | -                | -                | -         |     0.14 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            4 |     3956 | 2024-01-11 | IKLA              | W   | 0.194      | -            | -                | -                | -         |     0.01 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            3 |     3969 | 2024-01-11 | ex-sYnck          | W   | 0.193      | -            | -                | -                | -         |     0.01 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            2 |     3975 | 2024-01-11 | HAVU              | W   | 0.192      | -            | -                | -                | -         |     0.02 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            1 |     3995 | 2024-01-10 | GUN5              | W   | 0.187      | -            | -                | -                | -         |     0.00 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($109,982.87)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.36) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $8,000.00      | $8,000.00       |
| 2024-06-02 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-05-19 |      1.000 | $50,000.00     | $50,000.00      |
| 2024-05-12 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-04-14 |      0.818 | $6,000.00      | $4,908.37       |
| 2024-03-31 |      0.727 | $20,000.00     | $14,539.36      |
| 2024-03-10 |      0.587 | $7,500.00      | $4,404.91       |
| 2024-02-11 |      0.400 | $24,000.00     | $9,597.00       |
| 2024-01-28 |      0.307 | $5,000.00      | $1,533.23       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
