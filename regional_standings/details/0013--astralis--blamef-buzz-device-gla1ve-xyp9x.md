### Roster Details<br />
Team Name: Astralis<br />
Roster: blameF, Buzz, device, gla1ve, Xyp9x<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [13](../standings_global.md)<br />
Regional Rank: [11]( ../standings_europe.md)<br />
Final Rank Value:  1336.9<br />
<br />
Final Rank Value (1336.9) = Starting Rank Value (1323.0) + Head To Head Adjustments (13.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.547[<sup>1</sup>](#table2)
- Bounty Collected: 0.442[<sup>2</sup>](#table1)
- Opponent Network: 0.271[<sup>2</sup>](#table1)
- LAN Wins: 0.544[<sup>2</sup>](#table1)

The average of these factors is 0.451<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1323.0
- 400 + ( ( 0.451 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1323.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           45 |      118 | 2023-02-06 | Aurora            | W   | 1.000      | 0.435        | 0.072 (0.032)    | 0.601 (0.261)    | -         |     6.94 | blameF, Buzz, device, gla1ve, Xyp9x   |
|           44 |      124 | 2023-02-06 | Copenhagen Flames | W   | 1.000      | 0.435        | 0.133 (0.058)    | 0.722 (0.314)    | -         |     5.20 | blameF, Buzz, device, gla1ve, Xyp9x   |
|           43 |      150 | 2023-02-05 | 9INE              | W   | 1.000      | 0.435        | -                | 1.000 (0.435)    | -         |     5.01 | blameF, Buzz, device, gla1ve, Xyp9x   |
|           42 |      169 | 2023-02-04 | EYEBALLERS        | W   | 1.000      | 0.435        | -                | 0.776 (0.337)    | -         |     2.75 | blameF, Buzz, device, gla1ve, Xyp9x   |
|           41 |      301 | 2023-01-29 | OG                | W   | 1.000      | 0.571        | 0.237 (0.136)    | 0.365 (0.209)    | 1 (1.000) |    23.85 | blameF, Buzz, device, gla1ve, Xyp9x   |
|           40 |      350 | 2023-01-28 | Ninjas in Pyjamas | W   | 1.000      | 0.571        | 0.136 (0.078)    | -                | 1 (1.000) |    16.31 | blameF, Buzz, device, gla1ve, Xyp9x   |
|           39 |      545 | 2023-01-21 | Heroic            | L   | 1.000      | -            | -                | -                | -         |    -2.29 | blameF, Buzz, device, gla1ve, Xyp9x   |
|           38 |      585 | 2023-01-19 | Vitality          | L   | 1.000      | -            | -                | -                | -         |    -5.54 | blameF, Buzz, device, gla1ve, Xyp9x   |
|           37 |      768 | 2022-12-18 | Copenhagen Flames | L   | 0.827      | -            | -                | -                | -         |   -20.07 | blameF, device, gla1ve, MistR, Xyp9x  |
|           36 |      782 | 2022-12-18 | Apeks             | W   | 0.826      | 0.435        | -                | 0.671 (0.241)    | -         |     5.05 | blameF, device, gla1ve, MistR, Xyp9x  |
|           35 |      800 | 2022-12-17 | 1WIN              | W   | 0.821      | -            | -                | -                | -         |     2.95 | blameF, device, gla1ve, MistR, Xyp9x  |
|           34 |      859 | 2022-12-15 | ECSTATIC          | W   | 0.807      | 0.435        | -                | 0.556 (0.195)    | -         |     1.80 | blameF, device, gla1ve, MistR, Xyp9x  |
|           33 |     1124 | 2022-12-06 | HEET              | L   | 0.746      | -            | -                | -                | -         |   -20.27 | blameF, device, gla1ve, MistR, Xyp9x  |
|           32 |     1174 | 2022-12-04 | Tricked           | W   | 0.733      | 0.435        | -                | 0.954 (0.304)    | -         |     3.12 | blameF, device, gla1ve, MistR, Xyp9x  |
|           31 |     1547 | 2022-11-19 | fnatic            | L   | 0.634      | -            | -                | -                | -         |    -5.94 | blameF, gla1ve, Kristou, MistR, Xyp9x |
|           30 |     1562 | 2022-11-18 | ENCE              | W   | 0.627      | 0.589        | 0.108 (0.040)    | -                | 1 (0.627) |     9.30 | blameF, gla1ve, Kristou, MistR, Xyp9x |
|           29 |     1579 | 2022-11-17 | Complexity        | W   | 0.620      | 0.589        | 0.129 (0.047)    | 0.487 (0.178)    | 1 (0.620) |    10.60 | blameF, gla1ve, Kristou, MistR, Xyp9x |
|           28 |     1586 | 2022-11-17 | 500               | L   | 0.619      | -            | -                | -                | -         |   -15.27 | blameF, gla1ve, Kristou, MistR, Xyp9x |
|           27 |     1589 | 2022-11-17 | fnatic            | L   | 0.619      | -            | -                | -                | -         |    -6.10 | blameF, gla1ve, Kristou, MistR, Xyp9x |
|           26 |     1596 | 2022-11-17 | Bad News Eagles   | W   | 0.618      | 0.589        | 0.066 (0.024)    | -                | 1 (0.618) |     5.82 | blameF, gla1ve, Kristou, MistR, Xyp9x |
|           25 |     1600 | 2022-11-17 | SAW               | W   | 0.618      | 0.589        | 0.093 (0.034)    | 0.642 (0.233)    | 1 (0.618) |     4.86 | blameF, gla1ve, Kristou, MistR, Xyp9x |
|           24 |     1931 | 2022-10-23 | Heroic            | L   | 0.453      | -            | -                | -                | -         |    -0.91 | blameF, Farlig, gla1ve, MistR, Xyp9x  |
|           23 |     1990 | 2022-10-21 | Vitality          | W   | 0.439      | 0.461        | 0.352 (0.071)    | -                | -         |    11.73 | blameF, Farlig, gla1ve, MistR, Xyp9x  |
|           22 |     2034 | 2022-10-19 | Eternal Fire      | W   | 0.427      | -            | -                | -                | -         |     1.74 | blameF, Farlig, gla1ve, MistR, Xyp9x  |
|           21 |     2340 | 2022-10-07 | forZe             | L   | 0.347      | -            | -                | -                | -         |    -9.33 | blameF, Farlig, gla1ve, MistR, Xyp9x  |
|           20 |     2378 | 2022-10-06 | Bad News Eagles   | L   | 0.337      | -            | -                | -                | -         |    -7.51 | blameF, Farlig, gla1ve, MistR, Xyp9x  |
|           19 |     2409 | 2022-10-05 | Eternal Fire      | W   | 0.331      | -            | -                | -                | 1 (0.331) |     1.28 | blameF, Farlig, gla1ve, MistR, Xyp9x  |
|           18 |     2425 | 2022-10-04 | Ninjas in Pyjamas | L   | 0.325      | -            | -                | -                | -         |    -5.80 | blameF, Farlig, gla1ve, MistR, Xyp9x  |
|           17 |     2852 | 2022-09-18 | Heroic            | L   | 0.220      | -            | -                | -                | -         |    -0.45 | blameF, Farlig, gla1ve, k0nfig, Xyp9x |
|           16 |     2883 | 2022-09-17 | ENCE              | W   | 0.213      | -            | -                | -                | 1 (0.213) |     3.04 | blameF, Farlig, gla1ve, k0nfig, Xyp9x |
|           15 |     2930 | 2022-09-16 | HEET              | L   | 0.205      | -            | -                | -                | -         |    -5.76 | blameF, Farlig, gla1ve, k0nfig, Xyp9x |
|           14 |     2967 | 2022-09-15 | MOUZ              | W   | 0.198      | 0.922        | 0.155 (0.028)    | -                | 1 (0.198) |     2.66 | blameF, Farlig, gla1ve, k0nfig, Xyp9x |
|           13 |     2996 | 2022-09-14 | Complexity        | L   | 0.193      | -            | -                | -                | -         |    -2.53 | blameF, Farlig, gla1ve, k0nfig, Xyp9x |
|           12 |     3470 | 2022-08-28 | SAW               | L   | 0.080      | -            | -                | -                | -         |    -1.88 | blameF, Farlig, gla1ve, k0nfig, Xyp9x |
|           11 |     3473 | 2022-08-28 | HEET              | W   | 0.079      | -            | -                | -                | -         |     0.27 | blameF, Farlig, gla1ve, k0nfig, Xyp9x |
|           10 |     3481 | 2022-08-28 | FaZe              | L   | 0.079      | -            | -                | -                | -         |    -0.27 | blameF, Farlig, gla1ve, k0nfig, Xyp9x |
|            9 |     3493 | 2022-08-27 | Illuminar         | W   | 0.074      | -            | -                | -                | -         |     0.38 | blameF, Farlig, gla1ve, k0nfig, Xyp9x |
|            8 |     3501 | 2022-08-27 | BLUEJAYS          | W   | 0.073      | -            | -                | -                | -         |     0.52 | blameF, Farlig, gla1ve, k0nfig, Xyp9x |
|            7 |     3516 | 2022-08-27 | los kogutos       | W   | 0.073      | -            | -                | -                | -         |     0.11 | blameF, Farlig, gla1ve, k0nfig, Xyp9x |
|            6 |     3537 | 2022-08-27 | OG                | L   | 0.071      | -            | -                | -                | -         |    -0.52 | blameF, Farlig, gla1ve, k0nfig, Xyp9x |
|            5 |     3620 | 2022-08-23 | los kogutos       | L   | 0.046      | -            | -                | -                | -         |    -1.37 | blameF, Farlig, gla1ve, k0nfig, Xyp9x |
|            4 |     3737 | 2022-08-19 | Vitality          | W   | 0.020      | -            | -                | -                | 1 (0.020) |     0.52 | blameF, Farlig, gla1ve, k0nfig, Xyp9x |
|            3 |     3739 | 2022-08-19 | Ninjas in Pyjamas | W   | 0.019      | -            | -                | -                | -         |     0.03 | blameF, Farlig, gla1ve, k0nfig, Xyp9x |
|            2 |     3740 | 2022-08-19 | OG                | W   | 0.019      | -            | -                | -                | -         |     0.46 | blameF, Farlig, gla1ve, k0nfig, Xyp9x |
|            1 |     3742 | 2022-08-19 | Ninjas in Pyjamas | L   | 0.018      | -            | -                | -                | -         |    -0.55 | blameF, Farlig, gla1ve, k0nfig, Xyp9x |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($70,553.62)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.15) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-06 |      1.000 | $22,000.00     | $22,000.00      |
| 2023-01-29 |      1.000 | $17,500.00     | $17,500.00      |
| 2022-12-18 |      0.827 | $10,000.00     | $8,270.34       |
| 2022-12-07 |      0.754 | $2,000.00      | $1,507.48       |
| 2022-11-20 |      0.640 | $14,000.00     | $8,954.68       |
| 2022-10-23 |      0.453 | $12,500.00     | $5,667.14       |
| 2022-10-02 |      0.314 | $19,000.00     | $5,966.75       |
| 2022-08-28 |      0.081 | $8,500.00      | $687.22         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
