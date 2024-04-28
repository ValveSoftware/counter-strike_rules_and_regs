### Roster Details<br />
Team Name: ALTERNATE aTTaX<br />
Roster: awzek, FreeZe, PerX, slaxz-, Spiidi<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [111](../standings_global.md)<br />
Regional Rank: [79]( ../standings_europe.md)<br />
Final Rank Value:  768.4<br />
<br />
Final Rank Value (768.4) = Starting Rank Value (813.6) + Head To Head Adjustments (-45.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.323[<sup>1</sup>](#table2)
- Bounty Collected: 0.309[<sup>2</sup>](#table1)
- Opponent Network: 0.176[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.202<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 813.6
- 400 + ( ( 0.202 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 813.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |      333 | 2023-01-28 | undefined          | L   | 1.000      | -            | -                | -                | -         |   -17.19 | awzek, FreeZe, PerX, slaxz-, Spiidi |
|           42 |      382 | 2023-01-27 | Into the Breach    | L   | 1.000      | -            | -                | -                | -         |   -23.36 | awzek, FreeZe, PerX, slaxz-, Spiidi |
|           41 |      389 | 2023-01-27 | undefined          | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.41 | awzek, FreeZe, PerX, slaxz-, Spiidi |
|           40 |      492 | 2023-01-23 | SAW                | L   | 1.000      | -            | -                | -                | -         |    -3.26 | awzek, FreeZe, PerX, slaxz-, Spiidi |
|           39 |      503 | 2023-01-23 | EYEBALLERS         | L   | 1.000      | -            | -                | -                | -         |   -10.59 | awzek, FreeZe, PerX, slaxz-, Spiidi |
|           38 |      520 | 2023-01-22 | HONORIS            | W   | 1.000      | 0.435        | 0.011 (0.005)    | 0.748 (0.325)    | 0 (0.000) |    20.22 | awzek, FreeZe, PerX, slaxz-, Spiidi |
|           37 |      530 | 2023-01-22 | Goodfellas         | W   | 1.000      | 0.143        | 0.008 (0.001)    | -                | 0 (0.000) |    10.59 | awzek, FreeZe, PerX, slaxz-, Spiidi |
|           36 |      549 | 2023-01-21 | GenOne             | L   | 1.000      | -            | -                | -                | -         |    -6.29 | awzek, FreeZe, PerX, slaxz-, Spiidi |
|           35 |      555 | 2023-01-21 | Anonymo            | W   | 1.000      | 0.143        | -                | 0.388 (0.055)    | 0 (0.000) |     9.92 | awzek, FreeZe, PerX, slaxz-, Spiidi |
|           34 |      574 | 2023-01-20 | GODSENT            | L   | 1.000      | -            | -                | -                | -         |   -14.16 | awzek, FreeZe, PerX, slaxz-, Spiidi |
|           33 |      594 | 2023-01-19 | Apeks              | L   | 1.000      | -            | -                | -                | -         |    -6.27 | awzek, FreeZe, PerX, slaxz-, Spiidi |
|           32 |      633 | 2023-01-17 | Partizan           | W   | 1.000      | 0.435        | 0.005 (0.002)    | 0.653 (0.284)    | 0 (0.000) |    19.11 | awzek, FreeZe, PerX, slaxz-, Spiidi |
|           31 |      702 | 2023-01-14 | PROSPECTS          | W   | 1.000      | 0.435        | 0.032 (0.014)    | 0.689 (0.300)    | 0 (0.000) |    21.18 | awzek, FreeZe, PerX, slaxz-, Spiidi |
|           30 |      710 | 2023-01-13 | INVSN              | L   | 0.999      | -            | -                | -                | -         |   -11.60 | awzek, FreeZe, PerX, slaxz-, Spiidi |
|           29 |      713 | 2023-01-13 | Fourteen           | L   | 0.998      | -            | -                | -                | -         |   -25.32 | awzek, FreeZe, PerX, slaxz-, Spiidi |
|           28 |      790 | 2022-12-18 | Sprout             | L   | 0.825      | -            | -                | -                | -         |   -15.88 | awzek, FreeZe, PANIX, pdy, PerX     |
|           27 |      804 | 2022-12-17 | HEET               | L   | 0.821      | -            | -                | -                | -         |    -7.83 | awzek, FreeZe, PANIX, pdy, PerX     |
|           26 |      836 | 2022-12-16 | AGO                | L   | 0.814      | -            | -                | -                | -         |   -12.68 | awzek, FreeZe, PANIX, pdy, PerX     |
|           25 |      926 | 2022-12-12 | Apeks              | L   | 0.787      | -            | -                | -                | -         |    -7.41 | awzek, FreeZe, PANIX, pdy, PerX     |
|           24 |      947 | 2022-12-11 | Monte              | L   | 0.780      | -            | -                | -                | -         |    -7.61 | awzek, FreeZe, PANIX, pdy, PerX     |
|           23 |     1019 | 2022-12-09 | MASONIC            | W   | 0.765      | 0.371        | 0.021 (0.006)    | 0.752 (0.214)    | 0 (0.000) |    13.80 | awzek, FreeZe, PANIX, pdy, PerX     |
|           22 |     1081 | 2022-12-07 | ARCRED             | W   | 0.753      | -            | -                | -                | 0 (0.000) |     8.97 | awzek, FreeZe, PANIX, pdy, PerX     |
|           21 |     1101 | 2022-12-06 | HONORIS            | W   | 0.748      | 0.371        | 0.011 (0.003)    | 0.748 (0.208)    | 0 (0.000) |    15.29 | awzek, FreeZe, PANIX, pdy, PerX     |
|           20 |     1131 | 2022-12-06 | ex-Into the Breach | L   | 0.744      | -            | -                | -                | -         |   -10.65 | awzek, FreeZe, PANIX, pdy, PerX     |
|           19 |     1170 | 2022-12-04 | Permitta           | L   | 0.733      | -            | -                | -                | -         |    -9.89 | awzek, FreeZe, PANIX, pdy, PerX     |
|           18 |     1218 | 2022-12-03 | ECLOT              | L   | 0.726      | -            | -                | -                | -         |    -6.83 | awzek, FreeZe, PANIX, pdy, PerX     |
|           17 |     1304 | 2022-11-30 | EC Brugge          | L   | 0.707      | -            | -                | -                | -         |   -13.98 | awzek, FreeZe, PANIX, pdy, PerX     |
|           16 |     1341 | 2022-11-29 | EYEBALLERS         | W   | 0.698      | 0.143        | 0.017 (0.002)    | 0.776 (0.077)    | 0 (0.000) |    13.14 | awzek, FreeZe, PANIX, pdy, PerX     |
|           15 |     1362 | 2022-11-28 | Wolsung            | W   | 0.692      | -            | -                | -                | -         |     3.76 | awzek, FreeZe, PANIX, pdy, PerX     |
|           14 |     1388 | 2022-11-27 | Sprout             | W   | 0.686      | -            | -                | -                | -         |     7.52 | awzek, FreeZe, PANIX, pdy, PerX     |
|           13 |     1415 | 2022-11-26 | ONYX               | W   | 0.680      | -            | -                | -                | -         |     3.57 | awzek, FreeZe, PANIX, pdy, PerX     |
|           12 |     1829 | 2022-10-28 | los kogutos        | L   | 0.485      | -            | -                | -                | -         |    -8.40 | awzek, FreeZe, PANIX, pdy, PerX     |
|           11 |     1964 | 2022-10-22 | Monte              | L   | 0.446      | -            | -                | -                | -         |    -5.07 | awzek, FreeZe, PANIX, pdy, PerX     |
|           10 |     1995 | 2022-10-21 | LIBURNA            | W   | 0.438      | -            | -                | -                | -         |     1.13 | awzek, FreeZe, PANIX, pdy, PerX     |
|            9 |     2095 | 2022-10-17 | Partizan           | W   | 0.411      | 0.435        | 0.005 (0.001)    | 0.653 (0.117)    | -         |     6.42 | awzek, FreeZe, PANIX, pdy, PerX     |
|            8 |     2151 | 2022-10-15 | BLUEJAYS           | W   | 0.398      | 0.435        | 0.102 (0.018)    | 0.490 (0.085)    | -         |     9.96 | awzek, FreeZe, PANIX, pdy, PerX     |
|            7 |     2234 | 2022-10-13 | Tricked            | L   | 0.384      | -            | -                | -                | -         |    -3.23 | awzek, FreeZe, PANIX, pdy, PerX     |
|            6 |     2289 | 2022-10-11 | HAVU               | W   | 0.371      | 0.435        | 0.041 (0.007)    | 0.600 (0.097)    | -         |     8.19 | awzek, FreeZe, PANIX, pdy, PerX     |
|            5 |     2457 | 2022-10-02 | Juggernauts        | W   | 0.311      | -            | -                | -                | -         |     3.50 | awzek, FreeZe, PANIX, pdy, PerX     |
|            4 |     2494 | 2022-09-30 | Partizan           | W   | 0.299      | -            | -                | -                | -         |     4.83 | awzek, FreeZe, PANIX, pdy, PerX     |
|            3 |     2700 | 2022-09-23 | LDLC               | L   | 0.253      | -            | -                | -                | -         |    -4.80 | awzek, FreeZe, PANIX, pdy, PerX     |
|            2 |     2805 | 2022-09-20 | PACT               | L   | 0.234      | -            | -                | -                | -         |    -4.07 | awzek, FreeZe, PANIX, pdy, PerX     |
|            1 |     3445 | 2022-08-29 | schadE halt        | L   | 0.087      | -            | -                | -                | -         |    -2.35 | awzek, FreeZe, PANIX, pdy, PerX     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,810.24)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-18 |      0.826 | $2,276.00      | $1,880.50       |
| 2022-12-15 |      0.807 | $1,250.00      | $1,009.19       |
| 2022-10-24 |      0.460 | $2,000.00      | $920.55         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
