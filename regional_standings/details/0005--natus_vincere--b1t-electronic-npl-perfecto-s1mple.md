### Roster Details<br />
Team Name: Natus Vincere<br />
Roster: b1t, electroNic, npl, Perfecto, s1mple<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [5](../standings_global.md)<br />
Regional Rank: [4]( ../standings_europe.md)<br />
Final Rank Value:  1657.3<br />
<br />
Final Rank Value (1657.3) = Starting Rank Value (1689.8) + Head To Head Adjustments (-32.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.691[<sup>1</sup>](#table2)
- Bounty Collected: 0.645[<sup>2</sup>](#table1)
- Opponent Network: 0.295[<sup>2</sup>](#table1)
- LAN Wins: 0.889[<sup>2</sup>](#table1)

The average of these factors is 0.630<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1689.8
- 400 + ( ( 0.630 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1689.8


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
|           37 |       33 | 2023-02-11 | Heroic            | L   | 1.000      | -            | -                | -                | -         |   -12.33 | b1t, electroNic, npl, Perfecto, s1mple    |
|           36 |       53 | 2023-02-10 | Outsiders         | W   | 1.000      | 1.000        | 0.801 (0.801)    | 0.353 (0.353)    | 1 (1.000) |    14.07 | b1t, electroNic, npl, Perfecto, s1mple    |
|           35 |       98 | 2023-02-07 | G2                | L   | 1.000      | -            | -                | -                | -         |    -5.08 | b1t, electroNic, npl, Perfecto, s1mple    |
|           34 |      140 | 2023-02-05 | Liquid            | W   | 1.000      | 1.000        | 0.760 (0.760)    | 0.450 (0.450)    | 1 (1.000) |    17.90 | b1t, electroNic, npl, Perfecto, s1mple    |
|           33 |      177 | 2023-02-04 | Cloud9            | W   | 1.000      | 1.000        | 0.114 (0.114)    | 0.287 (0.287)    | 1 (1.000) |     5.32 | b1t, electroNic, npl, Perfecto, s1mple    |
|           32 |      332 | 2023-01-28 | Complexity        | W   | 1.000      | 0.571        | 0.129 (0.074)    | 0.487 (0.278)    | 1 (1.000) |     4.43 | b1t, electroNic, npl, Perfecto, s1mple    |
|           31 |      405 | 2023-01-26 | G2                | L   | 1.000      | -            | -                | -                | -         |    -4.85 | b1t, electroNic, npl, Perfecto, s1mple    |
|           30 |      444 | 2023-01-25 | Ninjas in Pyjamas | W   | 1.000      | 0.571        | 0.136 (0.078)    | -                | 1 (1.000) |     4.33 | b1t, electroNic, npl, Perfecto, s1mple    |
|           29 |      495 | 2023-01-23 | G2                | L   | 1.000      | -            | -                | -                | -         |    -4.98 | b1t, electroNic, npl, Perfecto, s1mple    |
|           28 |      554 | 2023-01-21 | Ninjas in Pyjamas | W   | 1.000      | 0.571        | 0.136 (0.078)    | -                | 1 (1.000) |     4.07 | b1t, electroNic, npl, Perfecto, s1mple    |
|           27 |      846 | 2022-12-16 | Liquid            | L   | 0.812      | -            | -                | -                | -         |    -7.85 | b1t, electroNic, npl, Perfecto, s1mple    |
|           26 |      874 | 2022-12-15 | Heroic            | W   | 0.805      | 1.000        | 0.608 (0.490)    | 0.560 (0.451)    | 1 (0.805) |    17.44 | b1t, electroNic, Perfecto, s1mple, sdy    |
|           25 |      887 | 2022-12-14 | Vitality          | L   | 0.800      | -            | -                | -                | -         |   -15.02 | b1t, electroNic, Perfecto, s1mple, sdy    |
|           24 |     1444 | 2022-11-25 | Ninjas in Pyjamas | L   | 0.674      | -            | -                | -                | -         |   -18.80 | b1t, electroNic, Perfecto, s1mple, sdy    |
|           23 |     1475 | 2022-11-24 | Liquid            | L   | 0.667      | -            | -                | -                | -         |    -6.76 | b1t, electroNic, Perfecto, s1mple, sdy    |
|           22 |     1497 | 2022-11-23 | Fluxo             | W   | 0.660      | 0.729        | -                | 0.528 (0.254)    | 1 (0.660) |     0.36 | b1t, electroNic, Perfecto, s1mple, sdy    |
|           21 |     1655 | 2022-11-11 | FURIA             | L   | 0.581      | -            | -                | -                | -         |   -16.20 | b1t, electroNic, Perfecto, s1mple, sdy    |
|           20 |     1676 | 2022-11-08 | BIG               | W   | 0.560      | 1.000        | 0.124 (0.069)    | 0.520 (0.291)    | 1 (0.560) |     2.54 | b1t, electroNic, Perfecto, s1mple, sdy    |
|           19 |     1688 | 2022-11-07 | Bad News Eagles   | W   | 0.552      | 1.000        | -                | 0.375 (0.207)    | 1 (0.552) |     0.89 | b1t, electroNic, Perfecto, s1mple, sdy    |
|           18 |     1703 | 2022-11-06 | Liquid            | L   | 0.545      | -            | -                | -                | -         |    -5.85 | b1t, electroNic, Perfecto, s1mple, sdy    |
|           17 |     1712 | 2022-11-05 | Cloud9            | L   | 0.541      | -            | -                | -                | -         |   -15.20 | b1t, electroNic, Perfecto, s1mple, sdy    |
|           16 |     1720 | 2022-11-05 | Vitality          | W   | 0.540      | 1.000        | 0.352 (0.190)    | 0.437 (0.236)    | -         |     5.88 | b1t, electroNic, Perfecto, s1mple, sdy    |
|           15 |     2359 | 2022-10-06 | Outsiders         | W   | 0.340      | -            | -                | -                | -         |     4.56 | b1t, electroNic, Perfecto, s1mple, sdy    |
|           14 |     2384 | 2022-10-05 | MOUZ              | W   | 0.333      | -            | -                | -                | -         |     0.94 | b1t, electroNic, Perfecto, s1mple, sdy    |
|           13 |     2417 | 2022-10-04 | Illuminar         | W   | 0.327      | -            | -                | -                | -         |     0.23 | b1t, electroNic, Perfecto, s1mple, sdy    |
|           12 |     2487 | 2022-09-30 | G2                | L   | 0.300      | -            | -                | -                | -         |    -1.41 | b1t, electroNic, Perfecto, s1mple, sdy    |
|           11 |     2542 | 2022-09-28 | Heroic            | W   | 0.288      | 0.922        | 0.608 (0.161)    | 0.560 (0.148)    | -         |     5.90 | b1t, electroNic, Perfecto, s1mple, sdy    |
|           10 |     3282 | 2022-09-04 | Ninjas in Pyjamas | L   | 0.127      | -            | -                | -                | -         |    -3.98 | b1t, electroNic, Perfecto, s1mple, sdy    |
|            9 |     3312 | 2022-09-03 | Vitality          | L   | 0.120      | -            | -                | -                | -         |    -2.39 | b1t, electroNic, Perfecto, s1mple, sdy    |
|            8 |     3364 | 2022-09-02 | Endpoint          | L   | 0.111      | -            | -                | -                | -         |    -3.47 | b1t, electroNic, Perfecto, s1mple, sdy    |
|            7 |     3388 | 2022-09-01 | fnatic            | W   | 0.106      | -            | -                | -                | -         |     0.81 | b1t, electroNic, Perfecto, s1mple, sdy    |
|            6 |     3419 | 2022-08-31 | Spirit            | W   | 0.098      | -            | -                | -                | -         |     0.43 | b1t, electroNic, Perfecto, s1mple, sdy    |
|            5 |     3502 | 2022-08-27 | Vitality          | W   | 0.073      | -            | -                | -                | -         |     0.84 | b1t, electroNic, Perfecto, s1mple, sdy    |
|            4 |     3715 | 2022-08-20 | Liquid            | W   | 0.026      | -            | -                | -                | -         |     0.57 | b1t, electroNic, headtr1ck, Perfecto, sdy |
|            3 |     3720 | 2022-08-20 | Complexity        | W   | 0.026      | -            | -                | -                | -         |     0.12 | b1t, electroNic, headtr1ck, Perfecto, sdy |
|            2 |     3722 | 2022-08-20 | G2                | W   | 0.026      | -            | -                | -                | -         |     0.69 | b1t, electroNic, headtr1ck, Perfecto, sdy |
|            1 |     3734 | 2022-08-20 | Complexity        | L   | 0.024      | -            | -                | -                | -         |    -0.66 | b1t, electroNic, headtr1ck, Perfecto, sdy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($169,421.30)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.36) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-12 |      1.000 | $80,000.00     | $80,000.00      |
| 2023-01-29 |      1.000 | $17,500.00     | $17,500.00      |
| 2022-12-18 |      0.824 | $25,000.00     | $20,612.29      |
| 2022-11-27 |      0.687 | $20,000.00     | $13,738.75      |
| 2022-11-13 |      0.594 | $45,000.00     | $26,710.82      |
| 2022-10-02 |      0.314 | $27,500.00     | $8,636.08       |
| 2022-08-28 |      0.081 | $27,500.00     | $2,223.37       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
