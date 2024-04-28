### Roster Details<br />
Team Name: Coalesce<br />
Roster: AZUWU, dox, Krs7N, leaf, shyyne<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [119](../standings_global.md)<br />
Regional Rank: [81]( ../standings_europe.md)<br />
Final Rank Value:  752.1<br />
<br />
Final Rank Value (752.1) = Starting Rank Value (728.8) + Head To Head Adjustments (23.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.324[<sup>1</sup>](#table2)
- Bounty Collected: 0.271[<sup>2</sup>](#table1)
- Opponent Network: 0.048[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.161<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 728.8
- 400 + ( ( 0.161 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 728.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |       25 | 2023-02-11 | iNation                | L   | 1.000      | -            | -                | -                | -         |    -4.54 | AZUWU, dox, Krs7N, leaf, shyyne           |
|           25 |       61 | 2023-02-09 | BLUEJAYS               | W   | 1.000      | 0.435        | 0.000 (0.000)    | 0.124 (0.054)    | 0 (0.000) |     8.60 | AZUWU, dox, Krs7N, leaf, shyyne           |
|           24 |      131 | 2023-02-06 | Endpoint               | W   | 1.000      | 0.435        | 0.033 (0.014)    | 0.641 (0.279)    | 0 (0.000) |    24.03 | AZUWU, dox, Krs7N, leaf, shyyne           |
|           23 |      300 | 2023-01-29 | EPIC DUDES             | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.083 (0.012)    | 0 (0.000) |     9.02 | AZUWU, dox, Krs7N, leaf, shyyne           |
|           22 |      400 | 2023-01-26 | NtK                    | W   | 1.000      | 0.143        | -                | 0.041 (0.006)    | 0 (0.000) |     4.85 | AZUWU, dox, Krs7N, leaf, shyyne           |
|           21 |      438 | 2023-01-25 | Nexus                  | L   | 1.000      | -            | -                | -                | -         |   -10.31 | AZUWU, dox, Krs7N, leaf, shyyne           |
|           20 |      442 | 2023-01-25 | NtK                    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.49 | AZUWU, dox, Krs7N, leaf, shyyne           |
|           19 |      764 | 2022-12-18 | Dripmen                | L   | 0.828      | -            | -                | -                | -         |   -13.31 | AZUWU, dox, Krs7N, leaf, shyyne           |
|           18 |      774 | 2022-12-18 | Viperio                | W   | 0.827      | 0.277        | 0.007 (0.002)    | 0.192 (0.044)    | 0 (0.000) |    12.76 | arTisT, Girafffe, Gizmy, MMS, Ping        |
|           17 |      809 | 2022-12-17 | 7AM                    | W   | 0.820      | 0.277        | -                | 0.048 (0.011)    | 0 (0.000) |     6.59 | 1Knas, LVN, Silence, Vacancy, yz0         |
|           16 |     1036 | 2022-12-08 | JANO                   | L   | 0.760      | -            | -                | -                | -         |   -12.08 | allu, arvid, sLowi, Sm1llee, ZOREE        |
|           15 |     1060 | 2022-12-07 | MASONIC                | L   | 0.754      | -            | -                | -                | -         |    -6.79 | Anlelele, Buzz, J3nsyy, notaN, Tauson     |
|           14 |     1102 | 2022-12-06 | PGE Turow              | W   | 0.748      | 0.371        | -                | 0.050 (0.014)    | 0 (0.000) |     5.39 | baljs, darko, gRuChA, kadziu, noise       |
|           13 |     1225 | 2022-12-03 | Viperio                | L   | 0.726      | -            | -                | -                | -         |   -11.97 | arTisT, Girafffe, Gizmy, MMS, Ping        |
|           12 |     1477 | 2022-11-24 | Spirit Academy         | L   | 0.666      | -            | -                | -                | -         |    -6.05 | ArtFr0st, baaaaZzz, donk, S0tF1k, zont1x  |
|           11 |     1539 | 2022-11-20 | Viperio                | W   | 0.639      | 0.294        | 0.007 (0.001)    | 0.192 (0.036)    | 0 (0.000) |     9.25 | AZUWU, dox, Krs7N, leaf, shyyne           |
|           10 |     1667 | 2022-11-09 | Genk                   | W   | 0.567      | 0.294        | 0.007 (0.001)    | 0.092 (0.015)    | 0 (0.000) |     9.04 | CrePoW, ReFuZR, Rezst, ryu, Xaka          |
|            9 |     1796 | 2022-10-30 | Invictus International | L   | 0.499      | -            | -                | -                | -         |    -7.91 | AZUWU, dox, Krs7N, leaf, shyyne           |
|            8 |     2614 | 2022-09-25 | HOTU                   | W   | 0.267      | 0.303        | 0.004 (0.000)    | 0.112 (0.009)    | -         |     4.44 | casE, gokushima, mizu, Ruler, swiftsteel  |
|            7 |     2748 | 2022-09-22 | VP.Prodigy             | W   | 0.246      | 0.303        | 0.009 (0.001)    | -                | -         |     3.71 | AZUWU, dox, Krs7N, leaf, shyyne           |
|            6 |     3204 | 2022-09-08 | Iron Branch            | L   | 0.154      | -            | -                | -                | -         |    -2.73 | AZUWU, dox, Krs7N, leaf, shyyne           |
|            5 |     3288 | 2022-09-04 | EKO                    | L   | 0.126      | -            | -                | -                | -         |    -2.60 | arTisT, cryths, Extinct, Gizmy, Tadpole   |
|            4 |     3321 | 2022-09-03 | Arctic Raptors         | W   | 0.120      | 0.275        | 0.002 (0.000)    | -                | -         |     0.97 |   m1ster, Ducky, moz, wfn, zodi           |
|            3 |     3409 | 2022-08-31 | Viperio                | L   | 0.100      | -            | -                | -                | -         |    -1.71 | arTisT, Extinct, Girafffe, Gizmy, Tadpole |
|            2 |     3604 | 2022-08-23 | FANTASY                | L   | 0.046      | -            | -                | -                | -         |    -1.17 | AZUWU, dox, leaf, shyyne, Wolfie          |
|            1 |     3613 | 2022-08-23 | SAW                    | W   | 0.046      | 0.143        | 0.093 (0.001)    | -                | -         |     1.31 | AZUWU, dox, leaf, shyyne, Wolfie          |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,897.08)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-18 |      0.828 | $736.00        | $609.20         |
| 2022-12-04 |      0.734 | $1,413.00      | $1,037.12       |
| 2022-11-28 |      0.692 | $259.00        | $179.33         |
| 2022-11-20 |      0.639 | $1,988.00      | $1,270.10       |
| 2022-09-25 |      0.267 | $3,000.00      | $801.33         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
