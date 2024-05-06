### Roster Details<br />
Team Name: Guild Eagles<br />
Roster: gxx-, juanflatroo, rigoN, SENER1, sinnopsyy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [63](../standings_global.md)<br />
Regional Rank: [48]( ../standings_europe.md)<br />
Final Rank Value:  943.3<br />
<br />
Final Rank Value (943.3) = Starting Rank Value (1013.1) + Head To Head Adjustments (-69.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.407[<sup>1</sup>](#table2)
- Bounty Collected: 0.420[<sup>2</sup>](#table1)
- Opponent Network: 0.225[<sup>2</sup>](#table1)
- LAN Wins: 0.235[<sup>2</sup>](#table1)

The average of these factors is 0.322<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1013.1
- 400 + ( ( 0.322 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1013.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           63 |       33 | 2024-05-05 | 1WIN               | L   | 1.000      | -            | -                | -                | -         |   -22.34 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           62 |      145 | 2024-04-29 | EYEBALLERS         | L   | 1.000      | -            | -                | -                | -         |   -19.12 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           61 |      186 | 2024-04-27 | Insilio            | L   | 1.000      | -            | -                | -                | -         |   -16.20 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           60 |      214 | 2024-04-26 | BLEED              | L   | 1.000      | -            | -                | -                | -         |    -7.13 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           59 |      246 | 2024-04-25 | PARIVISION         | L   | 1.000      | -            | -                | -                | -         |   -19.47 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           58 |      272 | 2024-04-24 | Zero Tenacity      | W   | 1.000      | 0.435        | 0.093 (0.040)    | 0.936 (0.407)    | 0 (0.000) |    11.71 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           57 |      298 | 2024-04-22 | 3DMAX              | L   | 1.000      | -            | -                | -                | -         |    -9.44 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           56 |      310 | 2024-04-22 | Sangal             | W   | 1.000      | 0.435        | -                | 0.797 (0.346)    | 0 (0.000) |    11.74 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           55 |      423 | 2024-04-18 | Sashi              | L   | 1.000      | -            | -                | -                | -         |   -14.17 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           54 |      432 | 2024-04-18 | KOI                | W   | 1.000      | 0.143        | -                | 0.772 (0.110)    | 0 (0.000) |    18.78 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           53 |      442 | 2024-04-18 | FRAGMATIC          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.01 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           52 |      448 | 2024-04-18 | AMKAL              | L   | 1.000      | -            | -                | -                | -         |    -8.45 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           51 |      516 | 2024-04-16 | Sashi              | W   | 1.000      | 0.384        | 0.188 (0.072)    | 1.000 (0.384)    | 0 (0.000) |    17.25 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           50 |      710 | 2024-04-09 | Metizport          | W   | 1.000      | 0.384        | 0.183 (0.070)    | 1.000 (0.384)    | 0 (0.000) |    18.96 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           49 |      876 | 2024-04-03 | AMKAL              | L   | 0.979      | -            | -                | -                | -         |    -8.60 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           48 |      908 | 2024-04-02 | Insilio            | L   | 0.974      | -            | -                | -                | -         |   -17.15 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           47 |      920 | 2024-04-02 | AMKAL              | W   | 0.972      | 0.143        | 0.200 (0.028)    | 0.851 (0.118)    | 0 (0.000) |    21.49 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           46 |      926 | 2024-04-02 | 500                | L   | 0.971      | -            | -                | -                | -         |   -21.17 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           45 |      932 | 2024-04-01 | 500                | W   | 0.967      | 0.384        | -                | 0.578 (0.215)    | -         |     8.99 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           44 |     1012 | 2024-03-27 | ALTERNATE aTTaX    | L   | 0.933      | -            | -                | -                | -         |   -18.21 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           43 |     1081 | 2024-03-22 | VP.Prodigy         | L   | 0.898      | -            | -                | -                | -         |   -24.56 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           42 |     1621 | 2024-02-27 | Lotus              | L   | 0.740      | -            | -                | -                | -         |   -22.14 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           41 |     1630 | 2024-02-27 | Metizport          | W   | 0.739      | 0.143        | 0.183 (0.019)    | 1.000 (0.106)    | -         |    11.14 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           40 |     1711 | 2024-02-24 | GamerLegion        | L   | 0.718      | -            | -                | -                | -         |    -1.86 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           39 |     1718 | 2024-02-23 | BetBoom            | W   | 0.712      | 0.143        | 0.563 (0.057)    | 1.000 (0.102)    | 1 (0.712) |    19.75 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           38 |     1736 | 2024-02-22 | Gaimin Gladiators  | L   | 0.706      | -            | -                | -                | -         |    -3.94 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           37 |     1755 | 2024-02-21 | ex-Preasy          | W   | 0.700      | 0.143        | 0.173 (0.017)    | -                | 1 (0.700) |    11.89 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           36 |     1789 | 2024-02-20 | Nexus              | W   | 0.692      | -            | -                | -                | 1 (0.692) |     7.41 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           35 |     1813 | 2024-02-19 | ENCE               | L   | 0.686      | -            | -                | -                | -         |    -1.48 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           34 |     1822 | 2024-02-19 | MOUZ               | L   | 0.685      | -            | -                | -                | -         |    -0.22 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           33 |     2042 | 2024-02-08 | Insilio            | L   | 0.614      | -            | -                | -                | -         |   -12.12 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           32 |     2045 | 2024-02-08 | RUBY               | L   | 0.613      | -            | -                | -                | -         |   -15.39 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           31 |     2288 | 2024-01-25 | PERA               | L   | 0.521      | -            | -                | -                | -         |   -10.64 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           30 |     2303 | 2024-01-24 | ALTERNATE aTTaX    | W   | 0.513      | -            | -                | -                | -         |     6.05 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           29 |     2324 | 2024-01-23 | Sampi              | W   | 0.506      | -            | -                | -                | -         |     6.83 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           28 |     2327 | 2024-01-23 | ALTERNATE aTTaX    | W   | 0.506      | -            | -                | -                | -         |     6.57 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           27 |     2348 | 2024-01-22 | PERA               | L   | 0.500      | -            | -                | -                | -         |   -10.70 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           26 |     2350 | 2024-01-22 | Viperio            | W   | 0.500      | -            | -                | -                | -         |     0.76 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           25 |     2355 | 2024-01-22 | Rebels             | W   | 0.499      | -            | -                | -                | -         |     9.69 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           24 |     2554 | 2024-01-18 | Sprout             | W   | 0.471      | -            | -                | -                | -         |     2.32 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           23 |     2571 | 2024-01-17 | Into the Breach    | W   | 0.468      | -            | -                | -                | -         |     3.02 | Devilwalk, juanflatroo, rigoN, SENER1, sinnopsyy |
|           22 |     2577 | 2024-01-17 | Capcarap           | W   | 0.467      | -            | -                | -                | -         |     0.41 | Devilwalk, juanflatroo, rigoN, SENER1, sinnopsyy |
|           21 |     3062 | 2023-12-12 | Aurora             | L   | 0.227      | -            | -                | -                | -         |    -0.30 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           20 |     3077 | 2023-12-11 | ex-Anonymo         | W   | 0.217      | -            | -                | -                | -         |     1.13 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           19 |     3158 | 2023-12-07 | Aurora             | L   | 0.193      | -            | -                | -                | -         |    -0.25 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           18 |     3173 | 2023-12-06 | 9 Pandas           | W   | 0.187      | -            | -                | -                | -         |     3.75 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           17 |     3188 | 2023-12-06 | G2                 | W   | 0.186      | 0.589        | 0.841 (0.092)    | -                | -         |     5.80 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           16 |     3219 | 2023-12-05 | ex-Anonymo         | W   | 0.179      | -            | -                | -                | -         |     0.94 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           15 |     3234 | 2023-12-04 | ALTERNATE aTTaX    | W   | 0.172      | 0.589        | 0.104 (0.011)    | 0.779 (0.079)    | -         |     2.54 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           14 |     3244 | 2023-12-03 | BIG                | L   | 0.166      | -            | -                | -                | -         |    -0.55 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           13 |     3291 | 2023-12-01 | Bad News Kangaroos | W   | 0.151      | -            | -                | -                | -         |     1.85 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           12 |     3302 | 2023-11-30 | Gaimin Gladiators  | W   | 0.146      | 0.384        | 0.189 (0.011)    | -                | -         |     3.98 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           11 |     3342 | 2023-11-26 | Zero Tenacity      | W   | 0.120      | -            | -                | -                | -         |     1.59 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           10 |     3363 | 2023-11-25 | Zero Tenacity      | W   | 0.114      | -            | -                | -                | -         |     1.52 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|            9 |     3403 | 2023-11-23 | The Suspect        | W   | 0.100      | -            | -                | -                | -         |     0.18 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|            8 |     3420 | 2023-11-22 | GODSENT            | W   | 0.093      | -            | -                | -                | -         |     0.57 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|            7 |     3497 | 2023-11-18 | Gucci Academy      | L   | 0.066      | -            | -                | -                | -         |    -1.72 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|            6 |     3549 | 2023-11-16 | ALTERNATE aTTaX    | L   | 0.054      | -            | -                | -                | -         |    -0.87 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|            5 |     3575 | 2023-11-16 | Space              | L   | 0.051      | -            | -                | -                | -         |    -1.32 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|            4 |     3604 | 2023-11-15 | ex-Preasy          | L   | 0.046      | -            | -                | -                | -         |    -0.73 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|            3 |     3642 | 2023-11-13 | EYEBALLERS         | W   | 0.033      | -            | -                | -                | -         |     0.38 | HEAP, JW, Peppzor, Sapec, SHiNE                  |
|            2 |     3678 | 2023-11-12 | Legacy             | W   | 0.025      | -            | -                | -                | -         |     0.42 | b4rtiN, coldzera, dumau, latto, NEKIZ            |
|            1 |     3751 | 2023-11-08 | ARCRED             | L   | 0.000      | -            | -                | -                | -         |    -0.01 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,645.51)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-13 |      0.233 | $1,000.00      | $233.45         |
| 2023-12-07 |      0.194 | $25,000.00     | $4,840.86       |
| 2023-11-26 |      0.120 | $4,634.00      | $557.64         |
| 2023-11-09 |      0.007 | $2,000.00      | $13.56          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
