### Roster Details<br />
Team Name: iNation<br />
Roster: choiv7, DEPRESHN, Dragon, Kind0, VLDN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [28](../standings_global.md)<br />
Regional Rank: [24]( ../standings_europe.md)<br />
Final Rank Value:  1074.9<br />
<br />
Final Rank Value (1074.9) = Starting Rank Value (1054.7) + Head To Head Adjustments (20.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.421[<sup>1</sup>](#table2)
- Bounty Collected: 0.313[<sup>2</sup>](#table1)
- Opponent Network: 0.150[<sup>2</sup>](#table1)
- LAN Wins: 0.395[<sup>2</sup>](#table1)

The average of these factors is 0.320<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1054.7
- 400 + ( ( 0.320 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1054.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |       25 | 2023-02-11 | Coalesce               | W   | 1.000      | 0.435        | 0.008 (0.004)    | 0.315 (0.137)    | 0 (0.000) |     4.54 | choiv7, DEPRESHN, Dragon, Kind0, VLDN       |
|           33 |       30 | 2023-02-11 | undefined              | W   | 1.000      | 0.351        | -                | 0.259 (0.091)    | 0 (0.000) |     4.96 | choiv7, DEPRESHN, Dragon, Kind0, VLDN       |
|           32 |       68 | 2023-02-09 | Nexus                  | W   | 1.000      | 0.435        | -                | 0.542 (0.236)    | 0 (0.000) |     7.73 | choiv7, DEPRESHN, Dragon, Kind0, VLDN       |
|           31 |      116 | 2023-02-06 | FTW                    | W   | 1.000      | 0.435        | 0.026 (0.011)    | 0.300 (0.130)    | 0 (0.000) |     6.44 | choiv7, DEPRESHN, Dragon, Kind0, VLDN       |
|           30 |      162 | 2023-02-04 | Zero Tenacity          | W   | 1.000      | 0.306        | 0.011 (0.003)    | -                | 1 (1.000) |     4.56 | choiv7, DEPRESHN, Dragon, Kind0, VLDN       |
|           29 |      174 | 2023-02-04 | Case                   | W   | 1.000      | 0.306        | 0.009 (0.003)    | -                | 1 (1.000) |     3.52 | choiv7, DEPRESHN, Dragon, Kind0, VLDN       |
|           28 |      302 | 2023-01-29 | zu krass               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.08 | choiv7, DEPRESHN, Dragon, Kind0, VLDN       |
|           27 |      309 | 2023-01-29 | 9 Pandas               | W   | 1.000      | 0.294        | 0.023 (0.007)    | 0.260 (0.077)    | -         |     5.32 | choiv7, DEPRESHN, Dragon, Kind0, VLDN       |
|           26 |      448 | 2023-01-25 | ECSTATIC               | L   | 1.000      | -            | -                | -                | -         |   -20.86 | choiv7, DEPRESHN, Dragon, Kind0, VLDN       |
|           25 |      482 | 2023-01-24 | Monte                  | W   | 1.000      | 0.371        | 0.029 (0.011)    | 0.945 (0.350)    | -         |    15.18 | choiv7, DEPRESHN, Dragon, Kind0, VLDN       |
|           24 |      529 | 2023-01-22 | sYnck                  | W   | 1.000      | 0.371        | -                | 0.397 (0.147)    | -         |     6.80 | choiv7, DEPRESHN, Dragon, Kind0, VLDN       |
|           23 |      575 | 2023-01-20 | 777                    | W   | 1.000      | 0.371        | -                | 0.202 (0.075)    | -         |     5.05 | choiv7, DEPRESHN, Dragon, Kind0, VLDN       |
|           22 |      653 | 2023-01-17 | Viperio                | W   | 1.000      | 0.371        | 0.007 (0.003)    | -                | -         |     4.70 | choiv7, DEPRESHN, Dragon, Kind0, VLDN       |
|           21 |      691 | 2023-01-15 | Invictus International | W   | 1.000      | -            | -                | -                | -         |     5.03 | choiv7, DEPRESHN, Dragon, Kind0, VLDN       |
|           20 |      727 | 2023-01-09 | Monte                  | L   | 0.971      | -            | -                | -                | -         |   -17.53 | choiv7, DEPRESHN, Dragon, Kind0, VLDN       |
|           19 |      735 | 2022-12-30 | ALTERNATE aTTaX        | W   | 0.905      | -            | -                | -                | -         |     3.59 | choiv7, DEPRESHN, Dragon, Kind0, VLDN       |
|           18 |      738 | 2022-12-29 | Nexus                  | W   | 0.897      | 0.333        | -                | 0.542 (0.162)    | -         |     5.72 | choiv7, DEPRESHN, Dragon, Kind0, VLDN       |
|           17 |     1190 | 2022-12-04 | IHC                    | L   | 0.731      | -            | -                | -                | -         |    -4.46 | choiv7, Dragon, EXR1G, pTKKK, VLDN          |
|           16 |     1198 | 2022-12-03 | Ecuador                | W   | 0.729      | -            | -                | -                | 1 (0.729) |     0.65 | choiv7, Dragon, EXR1G, pTKKK, VLDN          |
|           15 |     1386 | 2022-11-27 | Partizan               | L   | 0.686      | -            | -                | -                | -         |   -16.57 | choiv7, DEPRESHN, Dragon, Kind0, VLDN       |
|           14 |     1419 | 2022-11-26 | BLUEJAYS               | W   | 0.680      | 0.273        | 0.102 (0.019)    | 0.490 (0.091)    | -         |    10.41 | choiv7, DEPRESHN, Dragon, Kind0, VLDN       |
|           13 |     1554 | 2022-11-19 | Zero Tenacity          | W   | 0.632      | 0.335        | 0.011 (0.002)    | -                | 1 (0.632) |     3.81 | brutmonster, Cjoffo, fajkus, nEMANHA, simke |
|           12 |     1936 | 2022-10-23 | BUDI2                  | W   | 0.452      | -            | -                | -                | 1 (0.452) |     0.80 | c0llins, choiv7, Dragon, Kind0, VLDN        |
|           11 |     2168 | 2022-10-14 | Juggernauts            | L   | 0.394      | -            | -                | -                | -         |   -10.79 | choiv7, DEPRESHN, Dragon, Kind0, VLDN       |
|           10 |     2657 | 2022-09-24 | Eternal Fire           | L   | 0.260      | -            | -                | -                | -         |    -5.23 | DEPRESHN, Dragon, Kind0, NENO, VLDN         |
|            9 |     2667 | 2022-09-24 | Strive in chaos        | W   | 0.258      | -            | -                | -                | -         |     0.77 | EIZA, Maki, mouz, powerdy, Sego             |
|            8 |     2676 | 2022-09-24 | 500                    | L   | 0.257      | -            | -                | -                | -         |    -3.97 | DEPRESHN, DiMKE, Dragon, NENO, VLDN         |
|            7 |     2880 | 2022-09-17 | Enterprise             | W   | 0.214      | -            | -                | -                | -         |     1.90 | Blytz, h4rn, manguss, SYSTEM, The eLiVe     |
|            6 |     2922 | 2022-09-16 | Hatred                 | W   | 0.206      | -            | -                | -                | -         |     0.17 | doublemagic, mar, POP0V, Rock1nG, viltrex   |
|            5 |     3221 | 2022-09-08 | Strive in chaos        | L   | 0.153      | -            | -                | -                | -         |    -4.39 | DEPRESHN, Dragon, Kind0, NENO, VLDN         |
|            4 |     3236 | 2022-09-07 | BLUEJAYS               | W   | 0.146      | 0.143        | 0.102 (0.002)    | -                | -         |     2.60 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ    |
|            3 |     3252 | 2022-09-06 | Strive in chaos        | L   | 0.140      | -            | -                | -                | -         |    -4.03 | DiMKE, Dragon, Kind0, NENO, VLDN            |
|            2 |     3287 | 2022-09-04 | X                      | W   | 0.126      | -            | -                | -                | -         |     0.17 | DiMKE, Dragon, Kind0, NENO, VLDN            |
|            1 |     3349 | 2022-09-02 | Zero Tenacity          | W   | 0.113      | -            | -                | -                | -         |     0.64 | DiMKE, Dragon, Kind0, NENO, VLDN            |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($20,006.35)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-04 |      1.000 | $3,247.00      | $3,247.00       |
| 2023-01-29 |      1.000 | $3,000.00      | $3,000.00       |
| 2023-01-25 |      1.000 | $5,000.00      | $5,000.00       |
| 2022-12-30 |      0.905 | $5,000.00      | $4,526.03       |
| 2022-11-27 |      0.686 | $439.00        | $301.16         |
| 2022-11-19 |      0.632 | $6,217.00      | $3,932.16       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
