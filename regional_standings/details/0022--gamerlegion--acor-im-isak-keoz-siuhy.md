### Roster Details<br />
Team Name: GamerLegion<br />
Roster: acoR, iM, isak, Keoz, siuhy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [22](../standings_global.md)<br />
Regional Rank: [18]( ../standings_europe.md)<br />
Final Rank Value:  1112.1<br />
<br />
Final Rank Value (1112.1) = Starting Rank Value (1165.2) + Head To Head Adjustments (-53.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.506[<sup>1</sup>](#table2)
- Bounty Collected: 0.383[<sup>2</sup>](#table1)
- Opponent Network: 0.268[<sup>2</sup>](#table1)
- LAN Wins: 0.339[<sup>2</sup>](#table1)

The average of these factors is 0.374<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1165.2
- 400 + ( ( 0.374 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1165.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |      123 | 2023-02-06 | Falcons         | W   | 1.000      | 0.477        | 0.045 (0.022)    | 0.767 (0.366)    | 0 (0.000) |    13.06 | acoR, iM, isak, Keoz, siuhy   |
|           41 |      127 | 2023-02-06 | GODSENT         | W   | 1.000      | 0.477        | -                | 0.330 (0.157)    | 0 (0.000) |     6.16 | acoR, iM, isak, Keoz, siuhy   |
|           40 |      145 | 2023-02-05 | IKLA            | W   | 1.000      | 0.477        | 0.017 (0.008)    | 0.743 (0.354)    | 0 (0.000) |     9.32 | acoR, iM, isak, Keoz, siuhy   |
|           39 |      156 | 2023-02-05 | Falcons         | L   | 1.000      | -            | -                | -                | -         |   -18.34 | acoR, iM, isak, Keoz, siuhy   |
|           38 |      191 | 2023-02-03 | forZe           | L   | 1.000      | -            | -                | -                | -         |   -18.07 | acoR, iM, isak, Keoz, siuhy   |
|           37 |      272 | 2023-01-31 | Falcons         | L   | 1.000      | -            | -                | -                | -         |   -21.11 | acoR, iM, isak, Keoz, siuhy   |
|           36 |      416 | 2023-01-26 | Aurora          | L   | 1.000      | -            | -                | -                | -         |   -20.73 | acoR, iM, isak, Keoz, siuhy   |
|           35 |      449 | 2023-01-25 | 500             | W   | 1.000      | 0.435        | 0.085 (0.037)    | 0.760 (0.330)    | -         |    11.64 | acoR, iM, isak, Keoz, siuhy   |
|           34 |      497 | 2023-01-23 | PROSPECTS       | W   | 1.000      | 0.435        | 0.032 (0.014)    | 0.689 (0.300)    | -         |     6.27 | acoR, iM, isak, Keoz, siuhy   |
|           33 |      824 | 2022-12-17 | Apeks           | L   | 0.818      | -            | -                | -                | -         |   -16.88 | acoR, iM, isak, Keoz, siuhy   |
|           32 |      842 | 2022-12-16 | MASONIC         | W   | 0.812      | 0.435        | -                | 0.752 (0.266)    | -         |     4.20 | acoR, iM, isak, Keoz, siuhy   |
|           31 |     1077 | 2022-12-07 | ENCE            | L   | 0.753      | -            | -                | -                | -         |    -7.71 | acoR, iM, isak, Keoz, siuhy   |
|           30 |     1116 | 2022-12-06 | ECLOT           | W   | 0.747      | 0.435        | 0.046 (0.015)    | 0.584 (0.189)    | -         |     6.54 | acoR, iM, isak, Keoz, siuhy   |
|           29 |     1187 | 2022-12-04 | 9INE            | W   | 0.731      | 0.435        | 0.045 (0.014)    | 1.000 (0.318)    | -         |     5.66 | acoR, iM, isak, Keoz, siuhy   |
|           28 |     1609 | 2022-11-16 | Sprout          | L   | 0.614      | -            | -                | -                | -         |    -9.75 | acoR, iM, isak, Keoz, siuhy   |
|           27 |     1618 | 2022-11-16 | BIG             | W   | 0.613      | 0.589        | 0.124 (0.045)    | 0.520 (0.188)    | 1 (0.613) |    14.76 | acoR, iM, isak, Keoz, siuhy   |
|           26 |     1621 | 2022-11-16 | HEET            | L   | 0.612      | -            | -                | -                | -         |   -14.68 | acoR, iM, isak, Keoz, siuhy   |
|           25 |     1625 | 2022-11-16 | ENCE            | L   | 0.612      | -            | -                | -                | -         |    -6.46 | acoR, iM, isak, Keoz, siuhy   |
|           24 |     1631 | 2022-11-16 | HAVU            | W   | 0.611      | 0.589        | 0.041 (0.015)    | 0.600 (0.216)    | 1 (0.611) |     4.39 | acoR, iM, isak, Keoz, siuhy   |
|           23 |     1734 | 2022-11-03 | Cloud9          | L   | 0.527      | -            | -                | -                | -         |    -5.48 | acoR, iM, isak, Keoz, siuhy   |
|           22 |     1738 | 2022-11-02 | FURIA           | L   | 0.521      | -            | -                | -                | -         |    -5.95 | acoR, iM, isak, Keoz, siuhy   |
|           21 |     1751 | 2022-11-01 | Bad News Eagles | L   | 0.514      | -            | -                | -                | -         |    -8.97 | acoR, iM, isak, Keoz, siuhy   |
|           20 |     1766 | 2022-10-31 | Vitality        | W   | 0.508      | 0.143        | 0.352 (0.026)    | -                | 1 (0.508) |    14.62 | acoR, iM, isak, Keoz, siuhy   |
|           19 |     1785 | 2022-10-31 | 9z              | W   | 0.505      | -            | -                | -                | 1 (0.505) |     3.05 | acoR, iM, isak, Keoz, siuhy   |
|           18 |     1859 | 2022-10-26 | SAW             | L   | 0.474      | -            | -                | -                | -         |    -8.69 | acoR, iM, isak, Keoz, siuhy   |
|           17 |     1873 | 2022-10-26 | ex-Finest       | W   | 0.471      | -            | -                | -                | -         |     2.57 | acoR, iM, isak, Keoz, siuhy   |
|           16 |     1890 | 2022-10-25 | MASONIC         | W   | 0.466      | -            | -                | -                | -         |     2.94 | acoR, iM, isak, Keoz, siuhy   |
|           15 |     2321 | 2022-10-08 | B8              | W   | 0.353      | -            | -                | -                | 1 (0.353) |     0.47 | acoR, iM, isak, Keoz, siuhy   |
|           14 |     2341 | 2022-10-07 | G2              | W   | 0.346      | 0.143        | 1.000 (0.049)    | -                | 1 (0.346) |    10.79 | acoR, iM, isak, Keoz, siuhy   |
|           13 |     2376 | 2022-10-06 | Spirit          | L   | 0.337      | -            | -                | -                | -         |    -2.63 | acoR, iM, isak, Keoz, siuhy   |
|           12 |     2410 | 2022-10-05 | Aurora          | W   | 0.331      | -            | -                | -                | 1 (0.331) |     0.72 | acoR, iM, isak, Keoz, siuhy   |
|           11 |     2427 | 2022-10-04 | FaZe            | L   | 0.325      | -            | -                | -                | -         |    -0.49 | acoR, iM, isak, Keoz, siuhy   |
|           10 |     3461 | 2022-08-28 | Benched Heroes  | L   | 0.080      | -            | -                | -                | -         |    -2.47 | acoR, iM, isak, Keoz, siuhy   |
|            9 |     3466 | 2022-08-28 | Forward         | W   | 0.080      | -            | -                | -                | -         |     0.27 | acoR, iM, isak, Keoz, siuhy   |
|            8 |     3494 | 2022-08-27 | SAW             | L   | 0.074      | -            | -                | -                | -         |    -1.29 | acoR, iM, isak, Keoz, siuhy   |
|            7 |     3504 | 2022-08-27 | Sashi           | W   | 0.073      | -            | -                | -                | -         |     0.12 | acoR, iM, isak, Keoz, siuhy   |
|            6 |     3512 | 2022-08-27 | Apeks           | W   | 0.073      | -            | -                | -                | -         |     0.50 | acoR, iM, isak, Keoz, siuhy   |
|            5 |     3608 | 2022-08-23 | Eternal Fire    | L   | 0.046      | -            | -                | -                | -         |    -1.15 | acoR, iM, isak, Keoz, siuhy   |
|            4 |     3623 | 2022-08-23 | Zero Tenacity   | W   | 0.046      | -            | -                | -                | -         |     0.15 | acoR, iM, isak, Keoz, siuhy   |
|            3 |     3671 | 2022-08-21 | forZe           | L   | 0.034      | -            | -                | -                | -         |    -0.78 | acoR, iM, isak, rallen, siuhy |
|            2 |     3683 | 2022-08-21 | EYEBALLERS      | W   | 0.033      | -            | -                | -                | -         |     0.22 | acoR, iM, isak, rallen, siuhy |
|            1 |     3693 | 2022-08-21 | Anonymo         | W   | 0.033      | -            | -                | -                | -         |     0.04 | acoR, iM, isak, rallen, siuhy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($49,915.26)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-06 |      1.000 | $30,000.00     | $30,000.00      |
| 2023-01-26 |      1.000 | $5,000.00      | $5,000.00       |
| 2022-12-18 |      0.827 | $2,000.00      | $1,654.07       |
| 2022-12-07 |      0.754 | $5,000.00      | $3,768.71       |
| 2022-11-20 |      0.640 | $4,000.00      | $2,558.48       |
| 2022-11-03 |      0.528 | $10,000.00     | $5,276.16       |
| 2022-10-26 |      0.474 | $3,500.00      | $1,657.84       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
