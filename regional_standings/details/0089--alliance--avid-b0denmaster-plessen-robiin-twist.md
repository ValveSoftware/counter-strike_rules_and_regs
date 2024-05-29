### Roster Details<br />
Team Name: Alliance<br />
Roster: avid, b0denmaster, PlesseN, robiin, twist<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [89](../standings_global.md)<br />
Regional Rank: [61]( ../standings_europe.md)<br />
Final Rank Value:  842.3<br />
<br />
Final Rank Value (842.3) = Starting Rank Value (835.0) + Head To Head Adjustments (7.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.297[<sup>1</sup>](#table2)
- Bounty Collected: 0.371[<sup>2</sup>](#table1)
- Opponent Network: 0.189[<sup>2</sup>](#table1)
- LAN Wins: 0.040[<sup>2</sup>](#table1)

The average of these factors is 0.224<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 835.0
- 400 + ( ( 0.224 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 835.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           58 |      106 | 2024-05-24 | B8                | L   | 1.000      | -            | -                | -                | -         |    -4.65 | avid, b0denmaster, PlesseN, robiin, twist |
|           57 |      479 | 2024-05-14 | ECF               | L   | 1.000      | -            | -                | -                | -         |   -15.08 | avid, b0denmaster, PlesseN, robiin, twist |
|           56 |      785 | 2024-04-30 | B8                | L   | 1.000      | -            | -                | -                | -         |   -10.51 | avid, b0denmaster, PlesseN, robiin, twist |
|           55 |      810 | 2024-04-29 | Endpoint          | W   | 0.997      | 0.384        | 0.012 (0.005)    | 0.627 (0.240)    | 0 (0.000) |    16.78 | avid, b0denmaster, PlesseN, robiin, twist |
|           54 |      822 | 2024-04-28 | DMS               | W   | 0.991      | 0.500        | -                | 0.397 (0.197)    | 0 (0.000) |     8.82 | avid, b0denmaster, PlesseN, robiin, twist |
|           53 |      862 | 2024-04-26 | B8                | L   | 0.980      | -            | -                | -                | -         |    -9.23 | avid, b0denmaster, PlesseN, robiin, twist |
|           52 |      936 | 2024-04-23 | Metizport         | L   | 0.958      | -            | -                | -                | -         |    -8.88 | avid, b0denmaster, PlesseN, robiin, twist |
|           51 |      953 | 2024-04-22 | B8                | W   | 0.951      | 0.384        | 0.165 (0.060)    | 1.000 (0.365)    | 0 (0.000) |    20.96 | avid, b0denmaster, PlesseN, robiin, twist |
|           50 |      976 | 2024-04-21 | Sangal            | L   | 0.944      | -            | -                | -                | -         |    -7.27 | avid, b0denmaster, PlesseN, robiin, twist |
|           49 |     1056 | 2024-04-19 | 9 Pandas          | W   | 0.930      | 0.500        | 0.108 (0.050)    | 0.798 (0.371)    | 0 (0.000) |    23.02 | avid, b0denmaster, PlesseN, robiin, twist |
|           48 |     1130 | 2024-04-17 | Nemiga            | L   | 0.918      | -            | -                | -                | -         |    -3.31 | avid, b0denmaster, PlesseN, robiin, twist |
|           47 |     1137 | 2024-04-17 | ECLOT             | L   | 0.917      | -            | -                | -                | -         |    -8.54 | avid, b0denmaster, PlesseN, robiin, twist |
|           46 |     1188 | 2024-04-15 | HAVU              | W   | 0.905      | 0.384        | -                | 0.166 (0.058)    | 0 (0.000) |     9.42 | avid, b0denmaster, PlesseN, robiin, twist |
|           45 |     1192 | 2024-04-15 | MOUZ NXT          | L   | 0.904      | -            | -                | -                | -         |    -6.89 | avid, b0denmaster, PlesseN, robiin, twist |
|           44 |     1220 | 2024-04-13 | ALTERNATE aTTaX   | L   | 0.891      | -            | -                | -                | -         |   -12.16 | avid, b0denmaster, PlesseN, robiin, twist |
|           43 |     1262 | 2024-04-11 | Zero Tenacity     | W   | 0.878      | 0.384        | 0.147 (0.049)    | 1.000 (0.337)    | 0 (0.000) |    18.89 | avid, b0denmaster, PlesseN, robiin, twist |
|           42 |     1352 | 2024-04-09 | BLEED             | L   | 0.866      | -            | -                | -                | -         |    -3.35 | avid, b0denmaster, PlesseN, robiin, twist |
|           41 |     1367 | 2024-04-09 | Astralis Talent   | W   | 0.864      | 0.371        | 0.012 (0.004)    | -                | -         |    12.46 | avid, b0denmaster, PlesseN, robiin, twist |
|           40 |     1415 | 2024-04-07 | Johnny Speeds     | L   | 0.852      | -            | -                | -                | -         |    -9.60 | avid, b0denmaster, PlesseN, robiin, twist |
|           39 |     1418 | 2024-04-07 | EYEBALLERS        | L   | 0.851      | -            | -                | -                | -         |   -11.94 | avid, b0denmaster, PlesseN, robiin, twist |
|           38 |     1427 | 2024-04-06 | Lilmix            | W   | 0.846      | 0.330        | 0.006 (0.002)    | -                | -         |     8.33 | avid, b0denmaster, PlesseN, robiin, twist |
|           37 |     1432 | 2024-04-06 | BetBoom           | L   | 0.845      | -            | -                | -                | -         |    -1.54 | avid, b0denmaster, PlesseN, robiin, twist |
|           36 |     1449 | 2024-04-05 | BLEED             | L   | 0.838      | -            | -                | -                | -         |    -3.28 | avid, b0denmaster, PlesseN, robiin, twist |
|           35 |     1484 | 2024-04-04 | BetBoom           | L   | 0.832      | -            | -                | -                | -         |    -1.64 | avid, b0denmaster, PlesseN, robiin, twist |
|           34 |     1494 | 2024-04-04 | Benched Heroes    | W   | 0.831      | -            | -                | -                | -         |     2.04 | avid, b0denmaster, PlesseN, robiin, twist |
|           33 |     1537 | 2024-04-03 | AMKAL             | L   | 0.824      | -            | -                | -                | -         |    -4.14 | avid, b0denmaster, PlesseN, robiin, twist |
|           32 |     1936 | 2024-03-13 | MOUZ NXT          | L   | 0.684      | -            | -                | -                | -         |    -5.53 | avid, b0denmaster, PlesseN, robiin, twist |
|           31 |     1968 | 2024-03-12 | Passion UA        | L   | 0.678      | -            | -                | -                | -         |    -7.37 | avid, b0denmaster, PlesseN, robiin, twist |
|           30 |     2008 | 2024-03-10 | EYEBALLERS        | W   | 0.665      | 0.143        | -                | 0.611 (0.058)    | -         |    11.64 | avid, b0denmaster, PlesseN, robiin, twist |
|           29 |     2023 | 2024-03-09 | BLUDS             | W   | 0.659      | -            | -                | -                | -         |     5.36 | avid, b0denmaster, PlesseN, robiin, twist |
|           28 |     2034 | 2024-03-09 | Johnny Speeds     | W   | 0.658      | 0.143        | 0.057 (0.005)    | -                | -         |    13.48 | avid, b0denmaster, PlesseN, robiin, twist |
|           27 |     2039 | 2024-03-09 | Entropiq          | W   | 0.657      | 0.358        | -                | 0.213 (0.050)    | -         |     5.63 | avid, b0denmaster, PlesseN, robiin, twist |
|           26 |     2082 | 2024-03-07 | ex-Sprout         | W   | 0.644      | -            | -                | -                | -         |     4.56 | avid, b0denmaster, PlesseN, robiin, twist |
|           25 |     2114 | 2024-03-06 | Sashi             | L   | 0.637      | -            | -                | -                | -         |    -6.03 | avid, b0denmaster, PlesseN, robiin, twist |
|           24 |     2157 | 2024-03-05 | Viperio           | W   | 0.630      | -            | -                | -                | -         |     3.12 | avid, b0denmaster, PlesseN, robiin, twist |
|           23 |     2237 | 2024-03-01 | 9INE              | L   | 0.604      | -            | -                | -                | -         |   -16.12 | avid, b0denmaster, PlesseN, robiin, twist |
|           22 |     2264 | 2024-02-28 | Sangal            | W   | 0.591      | 0.143        | 0.166 (0.014)    | 0.911 (0.077)    | -         |    14.43 | avid, b0denmaster, PlesseN, robiin, twist |
|           21 |     2319 | 2024-02-25 | ALTERNATE aTTaX   | W   | 0.572      | 0.358        | 0.048 (0.010)    | 0.650 (0.133)    | -         |    11.49 | avid, b0denmaster, PlesseN, robiin, twist |
|           20 |     2489 | 2024-02-18 | esmagaB           | W   | 0.525      | 0.358        | 0.008 (0.002)    | -                | -         |     6.59 | avid, b0denmaster, PlesseN, robiin, twist |
|           19 |     2718 | 2024-02-06 | 9INE              | W   | 0.444      | -            | -                | -                | -         |     2.51 | avid, b0denmaster, PlesseN, robiin, twist |
|           18 |     2743 | 2024-02-04 | Secret            | L   | 0.432      | -            | -                | -                | -         |   -10.73 | avid, b0denmaster, PlesseN, robiin, twist |
|           17 |     2881 | 2024-01-29 | Passion UA        | L   | 0.392      | -            | -                | -                | -         |    -3.18 | avid, b0denmaster, PlesseN, robiin, twist |
|           16 |     2895 | 2024-01-28 | Spirit Academy    | L   | 0.383      | -            | -                | -                | -         |    -8.21 | avid, b0denmaster, PlesseN, robiin, twist |
|           15 |     2963 | 2024-01-24 | Gaimin Gladiators | L   | 0.357      | -            | -                | -                | -         |    -1.16 | avid, b0denmaster, PlesseN, robiin, twist |
|           14 |     3292 | 2024-01-16 | Nexus             | L   | 0.306      | -            | -                | -                | -         |    -4.26 | avid, b0denmaster, PlesseN, robiin, twist |
|           13 |     3479 | 2024-01-11 | Betera            | L   | 0.271      | -            | -                | -                | -         |    -5.70 | avid, b0denmaster, PlesseN, robiin, twist |
|           12 |     3562 | 2023-12-30 | The Witchers      | L   | 0.191      | -            | -                | -                | -         |    -4.21 | avid, b0denmaster, PlesseN, robiin, twist |
|           11 |     3567 | 2023-12-29 | brazylijski luz   | W   | 0.184      | -            | -                | -                | -         |     2.40 | avid, b0denmaster, PlesseN, robiin, twist |
|           10 |     3569 | 2023-12-28 | Rhyno             | W   | 0.178      | -            | -                | -                | -         |     3.34 | avid, b0denmaster, PlesseN, robiin, twist |
|            9 |     3574 | 2023-12-26 | VP.Prodigy        | L   | 0.165      | -            | -                | -                | -         |    -4.06 | avid, b0denmaster, PlesseN, robiin, twist |
|            8 |     3621 | 2023-12-17 | BLUDS             | W   | 0.106      | -            | -                | -                | 1 (0.106) |     0.86 | avid, b0denmaster, PlesseN, robiin, twist |
|            7 |     3628 | 2023-12-17 | Lilmix            | W   | 0.105      | -            | -                | -                | 1 (0.105) |     0.50 | avid, b0denmaster, PlesseN, robiin, twist |
|            6 |     3633 | 2023-12-17 | Onliners5         | W   | 0.104      | -            | -                | -                | 1 (0.104) |     0.70 | avid, b0denmaster, PlesseN, robiin, twist |
|            5 |     3725 | 2023-12-11 | Sprout            | L   | 0.065      | -            | -                | -                | -         |    -1.60 | avid, b0denmaster, PlesseN, robiin, twist |
|            4 |     3771 | 2023-12-09 | Kappa Bar         | W   | 0.050      | -            | -                | -                | 1 (0.050) |     0.21 | avid, b0denmaster, PlesseN, robiin, twist |
|            3 |     3843 | 2023-12-06 | Sprout            | W   | 0.031      | -            | -                | -                | -         |     0.22 | avid, b0denmaster, PlesseN, robiin, twist |
|            2 |     3896 | 2023-12-03 | Ninjas in Pyjamas | L   | 0.012      | -            | -                | -                | -         |    -0.23 | avid, b0denmaster, PlesseN, robiin, twist |
|            1 |     3921 | 2023-12-02 | EYEBALLERS        | L   | 0.005      | -            | -                | -                | -         |    -0.07 | avid, b0denmaster, PlesseN, robiin, twist |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,293.57)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-18 |      1.000 | $500.00        | $500.00         |
| 2023-12-17 |      0.106 | $5,700.00      | $605.80         |
| 2023-12-13 |      0.079 | $500.00        | $39.68          |
| 2023-12-09 |      0.050 | $2,365.00      | $118.90         |
| 2023-12-03 |      0.013 | $2,286.00      | $29.19          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
