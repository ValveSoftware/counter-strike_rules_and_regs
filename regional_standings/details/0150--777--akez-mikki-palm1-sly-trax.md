### Roster Details<br />
Team Name: 777<br />
Roster: akez, mikki, PALM1, SLY, Trax<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [150](../standings_global.md)<br />
Regional Rank: [99]( ../standings_europe.md)<br />
Final Rank Value:  713.8<br />
<br />
Final Rank Value (713.8) = Starting Rank Value (702.0) + Head To Head Adjustments (11.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.270[<sup>1</sup>](#table2)
- Bounty Collected: 0.271[<sup>2</sup>](#table1)
- Opponent Network: 0.048[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.148<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 702.0
- 400 + ( ( 0.148 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 702.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |      205 | 2023-02-02 | Atlantic          | L   | 1.000      | -            | -                | -                | -         |   -24.46 | akez, mikki, PALM1, SLY, Trax |
|           23 |      496 | 2023-01-23 | Astralis Talent   | L   | 1.000      | -            | -                | -                | -         |    -9.08 | akez, mikki, PALM1, SLY, Trax |
|           22 |      557 | 2023-01-21 | EC Brugge         | W   | 1.000      | 0.371        | 0.007 (0.003)    | 0.507 (0.188)    | 0 (0.000) |    14.47 | akez, mikki, PALM1, SLY, Trax |
|           21 |      575 | 2023-01-20 | iNation           | L   | 1.000      | -            | -                | -                | -         |    -5.05 | akez, mikki, PALM1, SLY, Trax |
|           20 |      668 | 2023-01-16 | ECSTATIC          | W   | 1.000      | 0.371        | 0.030 (0.011)    | 0.556 (0.206)    | 0 (0.000) |    20.47 | akez, mikki, PALM1, SLY, Trax |
|           19 |      717 | 2023-01-12 | Nemiga            | W   | 0.992      | 0.371        | 0.000 (0.000)    | 0.075 (0.028)    | 0 (0.000) |     9.12 | akez, mikki, PALM1, SLY, Trax |
|           18 |     1366 | 2022-11-28 | Tricked           | L   | 0.691      | -            | -                | -                | -         |    -5.00 | akez, mikki, PALM1, SLY, Trax |
|           17 |     1417 | 2022-11-26 | Illuminar         | L   | 0.680      | -            | -                | -                | -         |    -3.38 | akez, mikki, PALM1, SLY, Trax |
|           16 |     1454 | 2022-11-25 | 9INE              | L   | 0.673      | -            | -                | -                | -         |    -4.49 | akez, mikki, PALM1, SLY, Trax |
|           15 |     1523 | 2022-11-21 | Nemiga            | W   | 0.646      | 0.143        | 0.000 (0.000)    | 0.075 (0.007)    | 0 (0.000) |     6.31 | akez, mikki, PALM1, SLY, Trax |
|           14 |     1529 | 2022-11-20 | Apeks Rebels      | W   | 0.640      | 0.143        | 0.010 (0.001)    | 0.174 (0.016)    | 0 (0.000) |    11.89 | akez, mikki, PALM1, SLY, Trax |
|           13 |     1548 | 2022-11-19 | Illuminar         | L   | 0.633      | -            | -                | -                | -         |    -2.86 | akez, mikki, PALM1, SLY, Trax |
|           12 |     1555 | 2022-11-19 | Genk              | W   | 0.632      | 0.143        | 0.007 (0.001)    | 0.092 (0.008)    | 0 (0.000) |    10.57 | akez, mikki, PALM1, SLY, Trax |
|           11 |     1653 | 2022-11-12 | Apeks Rebels      | L   | 0.585      | -            | -                | -                | -         |    -7.75 | akez, H4RR3, mikki, SLY, Trax |
|           10 |     2467 | 2022-10-01 | Nemiga            | L   | 0.307      | -            | -                | -                | -         |    -4.37 | akez, H4RR3, mikki, SLY, Trax |
|            9 |     2490 | 2022-09-30 | LDLC              | L   | 0.300      | -            | -                | -                | -         |    -4.32 | akez, H4RR3, mikki, SLY, Trax |
|            8 |     2499 | 2022-09-30 | Nemiga            | W   | 0.299      | 0.143        | 0.008 (0.000)    | 0.115 (0.005)    | 0 (0.000) |     5.19 | akez, H4RR3, mikki, SLY, Trax |
|            7 |     2660 | 2022-09-24 | ENCE              | L   | 0.259      | -            | -                | -                | -         |    -0.34 | akez, H4RR3, mikki, SLY, Trax |
|            6 |     2664 | 2022-09-24 | Copenhagen Flames | W   | 0.259      | 0.143        | 0.133 (0.005)    | 0.722 (0.027)    | 0 (0.000) |     6.67 | akez, H4RR3, mikki, SLY, Trax |
|            5 |     2672 | 2022-09-24 | ENCE              | L   | 0.257      | -            | -                | -                | -         |    -0.31 | akez, H4RR3, mikki, SLY, Trax |
|            4 |     3258 | 2022-09-06 | Tricked           | L   | 0.137      | -            | -                | -                | -         |    -0.69 | akez, H4RR3, mikki, SLY, Trax |
|            3 |     3454 | 2022-08-29 | KOVA              | W   | 0.084      | 0.143        | 0.001 (0.000)    | 0.003 (0.000)    | 0 (0.000) |     1.02 | akez, H4RR3, mikki, SLY, Trax |
|            2 |     3518 | 2022-08-27 | Forward           | L   | 0.072      | -            | -                | -                | -         |    -0.88 | akez, H4RR3, mikki, SLY, Trax |
|            1 |     3649 | 2022-08-22 | Hotspurs          | L   | 0.038      | -            | -                | -                | -         |    -0.91 | akez, H4RR3, mikki, SLY, Trax |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($948.55)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
