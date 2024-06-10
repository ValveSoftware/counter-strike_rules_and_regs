### Roster Details<br />
Team Name: BIG<br />
Roster: JDC, Krimbo, prosus, syrsoN, tabseN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [20](../standings_global.md)<br />
Regional Rank: [14]( ../standings_europe.md)<br />
Final Rank Value:  1410.2<br />
<br />
Final Rank Value (1410.2) = Starting Rank Value (1458.8) + Head To Head Adjustments (-48.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.609[<sup>1</sup>](#table2)
- Bounty Collected: 0.499[<sup>2</sup>](#table1)
- Opponent Network: 0.299[<sup>2</sup>](#table1)
- LAN Wins: 0.717[<sup>2</sup>](#table1)

The average of these factors is 0.531<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1458.8
- 400 + ( ( 0.531 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1458.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |      227 | 2024-06-06 | fnatic        | L   | 1.000      | -            | -                | -                | -         |   -20.23 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           41 |      259 | 2024-06-06 | Eternal Fire  | L   | 1.000      | -            | -                | -                | -         |    -5.00 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           40 |      290 | 2024-06-05 | BetBoom       | L   | 1.000      | -            | -                | -                | -         |   -15.63 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           39 |      304 | 2024-06-05 | Complexity    | L   | 1.000      | -            | -                | -                | -         |    -6.75 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           38 |      314 | 2024-06-05 | FURIA         | W   | 1.000      | 0.715        | 0.249 (0.178)    | 0.590 (0.422)    | 1 (1.000) |    15.48 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           37 |      498 | 2024-05-29 | HEROIC        | L   | 1.000      | -            | -                | -                | -         |    -6.16 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           36 |      508 | 2024-05-29 | Virtus.pro    | W   | 1.000      | 0.624        | 0.229 (0.143)    | 0.418 (0.261)    | 1 (1.000) |    24.59 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           35 |      525 | 2024-05-28 | FlyQuest      | W   | 1.000      | 0.624        | 0.121 (0.076)    | 0.556 (0.347)    | 1 (1.000) |    16.53 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           34 |      549 | 2024-05-27 | Natus Vincere | L   | 1.000      | -            | -                | -                | -         |    -2.29 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           33 |      744 | 2024-05-20 | MIBR          | L   | 1.000      | -            | -                | -                | -         |    -9.81 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           32 |      763 | 2024-05-19 | Astralis      | L   | 1.000      | -            | -                | -                | -         |    -2.12 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           31 |     1139 | 2024-05-07 | G2            | L   | 0.972      | -            | -                | -                | -         |    -2.62 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           30 |     1201 | 2024-05-03 | HEROIC        | W   | 0.947      | 0.889        | 0.362 (0.304)    | 0.635 (0.534)    | 1 (0.947) |    25.13 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           29 |     1210 | 2024-05-03 | PERA          | W   | 0.945      | 0.889        | -                | 0.417 (0.351)    | 1 (0.945) |     1.84 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           28 |     1237 | 2024-05-02 | Natus Vincere | L   | 0.939      | -            | -                | -                | -         |    -1.72 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           27 |     1262 | 2024-05-01 | BOSS          | W   | 0.932      | 0.889        | -                | 0.407 (0.337)    | 1 (0.932) |     1.48 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           26 |     1473 | 2024-04-21 | BLEED         | L   | 0.865      | -            | -                | -                | -         |   -15.42 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           25 |     1499 | 2024-04-20 | GamerLegion   | W   | 0.859      | 0.384        | 0.222 (0.073)    | 0.334 (0.110)    | 0 (0.000) |     7.34 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           24 |     1609 | 2024-04-18 | LEON          | W   | 0.844      | -            | -                | -                | -         |     0.20 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           23 |     1718 | 2024-04-13 | OG            | L   | 0.812      | -            | -                | -                | -         |   -18.43 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           22 |     1727 | 2024-04-12 | FORZE         | W   | 0.807      | 0.684        | 0.100 (0.055)    | 0.415 (0.229)    | -         |     3.30 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           21 |     1798 | 2024-04-10 | Gods Reign    | W   | 0.793      | 0.684        | 0.073 (0.040)    | -                | -         |     1.14 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           20 |     1857 | 2024-04-09 | BetBoom       | L   | 0.786      | -            | -                | -                | -         |    -7.47 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           19 |     2036 | 2024-04-03 | EYEBALLERS    | W   | 0.745      | 0.384        | -                | 0.722 (0.207)    | -         |     1.40 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           18 |     2517 | 2024-03-09 | Spirit        | L   | 0.580      | -            | -                | -                | -         |    -1.14 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           17 |     2546 | 2024-03-08 | GamerLegion   | W   | 0.573      | -            | -                | -                | -         |     3.10 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           16 |     2680 | 2024-03-03 | Young Ninjas  | L   | 0.540      | -            | -                | -                | -         |   -16.42 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           15 |     2738 | 2024-03-01 | AMKAL         | W   | 0.525      | 0.500        | 0.143 (0.037)    | 0.711 (0.186)    | -         |     3.38 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           14 |     2765 | 2024-02-28 | BLEED         | L   | 0.511      | -            | -                | -                | -         |   -10.02 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           13 |     3289 | 2024-02-02 | Apeks         | L   | 0.341      | -            | -                | -                | -         |    -9.20 | Krimbo, mantuu, prosus, s1n, tabseN |
|           12 |     3344 | 2024-01-31 | HEROIC        | L   | 0.327      | -            | -                | -                | -         |    -1.52 | Krimbo, mantuu, prosus, s1n, tabseN |
|           11 |     3351 | 2024-01-31 | ENCE          | W   | 0.326      | -            | -                | -                | 1 (0.326) |     4.81 | Krimbo, mantuu, prosus, s1n, tabseN |
|           10 |     3391 | 2024-01-28 | Astralis      | L   | 0.306      | -            | -                | -                | -         |    -0.68 | Krimbo, mantuu, prosus, s1n, tabseN |
|            9 |     3399 | 2024-01-27 | Virtus.pro    | L   | 0.300      | -            | -                | -                | -         |    -1.82 | Krimbo, mantuu, prosus, s1n, tabseN |
|            8 |     3415 | 2024-01-26 | Cloud9        | W   | 0.294      | 0.581        | 0.159 (0.027)    | -                | 1 (0.294) |     3.68 | Krimbo, mantuu, prosus, s1n, tabseN |
|            7 |     3438 | 2024-01-25 | HEROIC        | W   | 0.288      | 0.581        | 0.362 (0.060)    | -                | 1 (0.288) |     7.80 | Krimbo, mantuu, prosus, s1n, tabseN |
|            6 |     3455 | 2024-01-24 | Virtus.pro    | L   | 0.280      | -            | -                | -                | -         |    -1.64 | Krimbo, mantuu, prosus, s1n, tabseN |
|            5 |     3578 | 2024-01-20 | Nexus         | L   | 0.252      | -            | -                | -                | -         |    -7.62 | Krimbo, mantuu, prosus, s1n, tabseN |
|            4 |     3632 | 2024-01-19 | fnatic        | L   | 0.246      | -            | -                | -                | -         |    -4.94 | Krimbo, mantuu, prosus, s1n, tabseN |
|            3 |     3684 | 2024-01-18 | BetBoom       | L   | 0.240      | -            | -                | -                | -         |    -1.59 | Krimbo, mantuu, prosus, s1n, tabseN |
|            2 |     3694 | 2024-01-18 | Permitta      | W   | 0.239      | -            | -                | -                | -         |     0.37 | Krimbo, mantuu, prosus, s1n, tabseN |
|            1 |     4203 | 2023-12-13 | 9INE          | W   | 0.000      | -            | -                | -                | -         |     0.00 | Krimbo, mantuu, prosus, s1n, tabseN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($69,348.86)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.23) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $8,000.00      | $8,000.00       |
| 2024-06-02 |      1.000 | $6,000.00      | $6,000.00       |
| 2024-05-12 |      1.000 | $17,500.00     | $17,500.00      |
| 2024-04-14 |      0.820 | $35,000.00     | $28,688.12      |
| 2024-03-10 |      0.587 | $7,500.00      | $4,404.91       |
| 2024-02-02 |      0.341 | $4,500.00      | $1,533.68       |
| 2024-01-28 |      0.307 | $10,500.00     | $3,219.79       |
| 2023-12-13 |      0.000 | $12,500.00     | $2.36           |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
