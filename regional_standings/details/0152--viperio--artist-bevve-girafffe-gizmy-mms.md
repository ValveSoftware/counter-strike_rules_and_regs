### Roster Details<br />
Team Name: Viperio<br />
Roster: arTisT, bevve, Girafffe, Gizmy, MMS<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [152](../standings_global.md)<br />
Regional Rank: [101]( ../standings_europe.md)<br />
Final Rank Value:  707.3<br />
<br />
Final Rank Value (707.3) = Starting Rank Value (699.3) + Head To Head Adjustments (8.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.320[<sup>1</sup>](#table2)
- Bounty Collected: 0.236[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.008[<sup>2</sup>](#table1)

The average of these factors is 0.146<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 699.3
- 400 + ( ( 0.146 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 699.3


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
|           22 |      308 | 2023-01-29 | Into the Breach        | L   | 1.000      | -            | -                | -                | -         |   -19.48 | arTisT, bevve, Girafffe, Gizmy, MMS       |
|           21 |      404 | 2023-01-26 | Dripmen                | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.163 (0.023)    | 0 (0.000) |    15.59 | arTisT, bevve, Girafffe, Gizmy, MMS       |
|           20 |      439 | 2023-01-25 | Mixfits                | L   | 1.000      | -            | -                | -                | -         |   -17.30 | arTisT, bevve, Girafffe, Gizmy, MMS       |
|           19 |      445 | 2023-01-25 | Dripmen                | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.163 (0.023)    | 0 (0.000) |    15.55 | arTisT, bevve, Girafffe, Gizmy, MMS       |
|           18 |      653 | 2023-01-17 | iNation                | L   | 1.000      | -            | -                | -                | -         |    -4.70 | arTisT, bevve, Girafffe, Gizmy, MMS       |
|           17 |      714 | 2023-01-13 | Monte                  | L   | 0.997      | -            | -                | -                | -         |    -5.75 | arTisT, bevve, Girafffe, Gizmy, MMS       |
|           16 |      726 | 2023-01-09 | Invictus International | W   | 0.972      | 0.371        | 0.001 (0.000)    | 0.167 (0.060)    | 0 (0.000) |    16.20 | arTisT, bevve, Girafffe, Gizmy, MMS       |
|           15 |      774 | 2022-12-18 | Coalesce               | L   | 0.827      | -            | -                | -                | -         |   -12.76 | arTisT, Girafffe, Gizmy, MMS, Ping        |
|           14 |      801 | 2022-12-17 | Clique                 | W   | 0.821      | -            | -                | -                | 0 (0.000) |     3.70 | arTisT, Girafffe, Gizmy, MMS, Ping        |
|           13 |     1164 | 2022-12-04 | Endpoint               | L   | 0.734      | -            | -                | -                | -         |    -5.46 | arTisT, Girafffe, Gizmy, MMS, Ping        |
|           12 |     1225 | 2022-12-03 | Coalesce               | W   | 0.726      | 0.353        | 0.008 (0.002)    | 0.315 (0.081)    | 0 (0.000) |    11.97 | arTisT, Girafffe, Gizmy, MMS, Ping        |
|           11 |     1352 | 2022-11-28 | ROYALS                 | W   | 0.694      | 0.353        | 0.006 (0.001)    | 0.034 (0.008)    | 0 (0.000) |     9.86 | arTisT, Girafffe, Gizmy, MMS, Ping        |
|           10 |     1539 | 2022-11-20 | Coalesce               | L   | 0.639      | -            | -                | -                | -         |    -9.25 | arTisT, Girafffe, Gizmy, MMS, Ping        |
|            9 |     1677 | 2022-11-08 | ROYALS                 | W   | 0.560      | 0.294        | 0.006 (0.001)    | 0.034 (0.006)    | 0 (0.000) |     8.19 | arTisT, Girafffe, Gizmy, MMS, Ping        |
|            8 |     2951 | 2022-09-15 | sYnck                  | L   | 0.200      | -            | -                | -                | -         |    -2.65 | arTisT, Extinct, Girafffe, Gizmy, Tadpole |
|            7 |     2955 | 2022-09-15 | Sangal                 | L   | 0.199      | -            | -                | -                | -         |    -1.31 | arTisT, Extinct, Girafffe, Gizmy, Tadpole |
|            6 |     3279 | 2022-09-04 | Into the Bin           | W   | 0.128      | 0.275        | 0.000 (0.000)    | 0.051 (0.002)    | 0 (0.000) |     1.72 | arTisT, Extinct, Girafffe, Gizmy, Tadpole |
|            5 |     3325 | 2022-09-03 | tokyoxd                | W   | 0.119      | 0.275        | -                | 0.004 (0.000)    | 0 (0.000) |     0.58 | bevve, entz, fear, ifan, smooya           |
|            4 |     3383 | 2022-09-01 | ex-Into the Breach     | W   | 0.107      | 0.143        | 0.005 (0.000)    | 0.520 (0.008)    | -         |     2.34 | arTisT, Extinct, Girafffe, Gizmy, Tadpole |
|            3 |     3409 | 2022-08-31 | Coalesce               | W   | 0.100      | 0.143        | 0.008 (0.000)    | 0.315 (0.005)    | -         |     1.71 | arTisT, Extinct, Girafffe, Gizmy, Tadpole |
|            2 |     3451 | 2022-08-29 | eMasters               | L   | 0.085      | -            | -                | -                | -         |    -1.36 | eMy, fluFFs, MMS, mrhui, ReegaN           |
|            1 |     3479 | 2022-08-28 | Leicester 5            | W   | 0.079      | 0.310        | 0.000 (0.000)    | -                | 1 (0.079) |     0.62 | arTisT, Extinct, Girafffe, Gizmy, Mad     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,520.36)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-18 |      0.828 | $123.00        | $101.81         |
| 2022-12-04 |      0.734 | $3,063.00      | $2,248.20       |
| 2022-11-20 |      0.639 | $1,243.00      | $794.13         |
| 2022-09-04 |      0.128 | $1,757.00      | $224.04         |
| 2022-08-29 |      0.085 | $1,785.00      | $152.18         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
