### Roster Details<br />
Team Name: 9z<br />
Roster: buda, dav1deuS, dgt, max, try<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [66](../standings_global.md)<br />
Regional Rank: [16]( ../standings_americas.md)<br />
Final Rank Value:  898.9<br />
<br />
Final Rank Value (898.9) = Starting Rank Value (892.9) + Head To Head Adjustments (6.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.368[<sup>1</sup>](#table2)
- Bounty Collected: 0.305[<sup>2</sup>](#table1)
- Opponent Network: 0.038[<sup>2</sup>](#table1)
- LAN Wins: 0.252[<sup>2</sup>](#table1)

The average of these factors is 0.241<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 892.9
- 400 + ( ( 0.241 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 892.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |      186 | 2023-02-03 | 9INE          | L   | 1.000      | -            | -                | -                | -         |   -10.74 | buda, dav1deuS, dgt, max, try |
|           27 |     1000 | 2022-12-09 | ODDIK         | L   | 0.768      | -            | -                | -                | -         |   -17.28 | buda, dav1deuS, dgt, max, nqz |
|           26 |     1002 | 2022-12-09 | Fluxo         | W   | 0.768      | 0.269        | 0.087 (0.018)    | 0.528 (0.109)    | 0 (0.000) |    13.68 | buda, dav1deuS, dgt, max, nqz |
|           25 |     1004 | 2022-12-09 | Sharks        | L   | 0.768      | -            | -                | -                | -         |   -15.24 | buda, dav1deuS, dgt, max, nqz |
|           24 |     1160 | 2022-12-04 | SWS           | W   | 0.735      | 0.384        | 0.001 (0.000)    | 0.125 (0.035)    | 0 (0.000) |     3.77 | buda, dav1deuS, dgt, max, nqz |
|           23 |     1732 | 2022-11-03 | fnatic        | L   | 0.528      | -            | -                | -                | -         |    -0.80 | buda, dav1deuS, dgt, max, nqz |
|           22 |     1749 | 2022-11-02 | BIG           | L   | 0.519      | -            | -                | -                | -         |    -1.28 | buda, dav1deuS, dgt, max, nqz |
|           21 |     1762 | 2022-11-01 | Evil Geniuses | W   | 0.512      | 0.143        | 0.062 (0.005)    | 0.234 (0.017)    | 1 (0.512) |    11.23 | buda, dav1deuS, dgt, max, nqz |
|           20 |     1767 | 2022-10-31 | Imperial      | W   | 0.508      | 0.143        | 0.022 (0.002)    | 0.254 (0.018)    | 1 (0.508) |     7.85 | buda, dav1deuS, dgt, max, nqz |
|           19 |     1785 | 2022-10-31 | GamerLegion   | L   | 0.505      | -            | -                | -                | -         |    -3.05 | buda, dav1deuS, dgt, max, nqz |
|           18 |     2108 | 2022-10-16 | Spirit        | L   | 0.406      | -            | -                | -                | -         |    -0.91 | buda, dav1deuS, dgt, max, nqz |
|           17 |     2128 | 2022-10-15 | MIBR          | W   | 0.400      | 0.548        | 0.089 (0.020)    | 0.586 (0.129)    | 1 (0.400) |     7.67 | buda, dav1deuS, dgt, max, nqz |
|           16 |     2352 | 2022-10-07 | ATK           | W   | 0.345      | 0.143        | 0.070 (0.003)    | 0.646 (0.032)    | 1 (0.345) |     6.16 | buda, dav1deuS, dgt, max, nqz |
|           15 |     2363 | 2022-10-06 | Evil Geniuses | L   | 0.339      | -            | -                | -                | -         |    -3.00 | buda, dav1deuS, dgt, max, nqz |
|           14 |     2391 | 2022-10-05 | Imperial      | W   | 0.333      | 0.143        | 0.022 (0.001)    | 0.254 (0.012)    | 1 (0.333) |     5.06 | buda, dav1deuS, dgt, max, nqz |
|           13 |     2400 | 2022-10-05 | 00NATION      | W   | 0.332      | 0.143        | 0.020 (0.001)    | 0.201 (0.010)    | 1 (0.332) |     4.67 | buda, dav1deuS, dgt, max, nqz |
|           12 |     2517 | 2022-09-29 | HONORIS       | L   | 0.293      | -            | -                | -                | -         |    -4.90 | buda, dav1deuS, dgt, max, nqz |
|           11 |     2849 | 2022-09-18 | Fluxo         | L   | 0.221      | -            | -                | -                | -         |    -3.52 | buda, dav1deuS, dgt, max, nqz |
|           10 |     2879 | 2022-09-17 | Furious       | W   | 0.214      | -            | -                | -                | 0 (0.000) |     1.24 | buda, dav1deuS, dgt, max, nqz |
|            9 |     2940 | 2022-09-15 | Fluxo         | W   | 0.201      | 0.143        | 0.087 (0.002)    | 0.528 (0.015)    | 0 (0.000) |     3.14 | buda, dav1deuS, dgt, max, nqz |
|            8 |     2948 | 2022-09-15 | Mad Kings     | W   | 0.200      | -            | -                | -                | -         |     0.78 | buda, dav1deuS, dgt, max, nqz |
|            7 |     3463 | 2022-08-28 | paiN          | L   | 0.080      | -            | -                | -                | -         |    -0.66 | dav1deuS, dgt, max, nqz, rox  |
|            6 |     3530 | 2022-08-27 | ARCTIC        | W   | 0.072      | 0.384        | 0.036 (0.001)    | 0.230 (0.006)    | -         |     1.08 | dav1deuS, dgt, max, nqz, rox  |
|            5 |     3572 | 2022-08-25 | Stars Horizon | W   | 0.060      | -            | -                | -                | -         |     0.33 | dav1deuS, dgt, max, nqz, rox  |
|            4 |     3637 | 2022-08-22 | O PLANO       | W   | 0.042      | -            | -                | -                | -         |     0.15 | dav1deuS, dgt, max, nqz, rox  |
|            3 |     3639 | 2022-08-22 | Case          | W   | 0.041      | -            | -                | -                | -         |     0.31 | dav1deuS, dgt, max, nqz, rox  |
|            2 |     3657 | 2022-08-21 | B4            | W   | 0.036      | -            | -                | -                | -         |     0.19 | dav1deuS, dgt, max, nqz, rox  |
|            1 |     3666 | 2022-08-21 | Sharks        | W   | 0.035      | -            | -                | -                | -         |     0.10 | dav1deuS, dgt, max, nqz, rox  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,087.42)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-07 |      0.756 | $1,000.00      | $755.75         |
| 2022-11-03 |      0.528 | $10,000.00     | $5,276.16       |
| 2022-10-16 |      0.407 | $7,000.00      | $2,851.90       |
| 2022-08-28 |      0.081 | $2,500.00      | $203.62         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
