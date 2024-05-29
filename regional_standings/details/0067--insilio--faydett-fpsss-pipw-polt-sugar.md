### Roster Details<br />
Team Name: Insilio<br />
Roster: faydett, FpSSS, Pipw, Polt, sugaR<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [67](../standings_global.md)<br />
Regional Rank: [47]( ../standings_europe.md)<br />
Final Rank Value:  937.6<br />
<br />
Final Rank Value (937.6) = Starting Rank Value (871.3) + Head To Head Adjustments (66.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.332[<sup>1</sup>](#table2)
- Bounty Collected: 0.383[<sup>2</sup>](#table1)
- Opponent Network: 0.256[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.243<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 871.3
- 400 + ( ( 0.243 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 871.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |      636 | 2024-05-07 | RUBY            | L   | 1.000      | -            | -                | -                | -         |   -19.09 | faydett, FpSSS, Pipw, Polt, sugaR |
|           38 |      655 | 2024-05-06 | Zero Tenacity   | L   | 1.000      | -            | -                | -                | -         |   -15.09 | faydett, FpSSS, Pipw, Polt, sugaR |
|           37 |      659 | 2024-05-06 | BLEED           | L   | 1.000      | -            | -                | -                | -         |    -6.76 | faydett, FpSSS, Pipw, Polt, sugaR |
|           36 |      705 | 2024-05-03 | Permitta        | W   | 1.000      | 0.435        | 0.025 (0.011)    | 1.000 (0.435)    | 0 (0.000) |    11.85 | faydett, FpSSS, Pipw, Polt, sugaR |
|           35 |      717 | 2024-05-03 | BetBoom         | L   | 1.000      | -            | -                | -                | -         |    -3.58 | faydett, FpSSS, Pipw, Polt, sugaR |
|           34 |      749 | 2024-05-01 | OG              | W   | 1.000      | 0.435        | 0.278 (0.121)    | 0.376 (0.163)    | 0 (0.000) |    26.22 | faydett, FpSSS, Pipw, Polt, sugaR |
|           33 |      760 | 2024-05-01 | Nexus           | W   | 1.000      | 0.435        | 0.014 (0.006)    | 0.518 (0.225)    | 0 (0.000) |    10.52 | faydett, FpSSS, Pipw, Polt, sugaR |
|           32 |      801 | 2024-04-29 | HAVU            | L   | 0.998      | -            | -                | -                | -         |   -25.26 | faydett, FpSSS, Pipw, Polt, sugaR |
|           31 |      837 | 2024-04-27 | ex-Guild Eagles | W   | 0.986      | 0.435        | 0.014 (0.006)    | 0.552 (0.236)    | 0 (0.000) |    15.61 | faydett, FpSSS, Pipw, Polt, sugaR |
|           30 |      844 | 2024-04-27 | Permitta        | W   | 0.985      | 0.396        | 0.025 (0.010)    | 1.000 (0.390)    | 0 (0.000) |    14.71 | faydett, FpSSS, Pipw, Polt, sugaR |
|           29 |      866 | 2024-04-26 | ARCRED          | L   | 0.979      | -            | -                | -                | -         |   -24.71 | faydett, FpSSS, Pipw, Polt, sugaR |
|           28 |      871 | 2024-04-26 | Enterprise      | W   | 0.978      | 0.396        | -                | 0.524 (0.203)    | 0 (0.000) |    12.45 | faydett, FpSSS, Pipw, Polt, sugaR |
|           27 |      905 | 2024-04-25 | MOUZ NXT        | W   | 0.970      | 0.435        | 0.157 (0.066)    | 1.000 (0.422)    | 0 (0.000) |    18.53 | faydett, FpSSS, Pipw, Polt, sugaR |
|           26 |      931 | 2024-04-23 | EYEBALLERS      | W   | 0.959      | 0.435        | 0.009 (0.004)    | 0.611 (0.255)    | 0 (0.000) |    11.63 | faydett, FpSSS, Pipw, Polt, sugaR |
|           25 |      980 | 2024-04-21 | Permitta        | L   | 0.943      | -            | -                | -                | -         |   -14.46 | faydett, FpSSS, Pipw, Polt, sugaR |
|           24 |     1518 | 2024-04-03 | AMKAL           | L   | 0.826      | -            | -                | -                | -         |    -5.84 | faydett, FpSSS, Pipw, Polt, sugaR |
|           23 |     1559 | 2024-04-02 | ex-Guild Eagles | W   | 0.820      | 0.143        | 0.014 (0.002)    | 0.552 (0.065)    | 0 (0.000) |    13.46 | faydett, FpSSS, Pipw, Polt, sugaR |
|           22 |     1575 | 2024-04-02 | PARIVISION      | W   | 0.818      | -            | -                | -                | 0 (0.000) |    15.31 | faydett, FpSSS, Pipw, Polt, sugaR |
|           21 |     1801 | 2024-03-18 | Sashi           | L   | 0.719      | -            | -                | -                | -         |    -9.18 | faydett, FpSSS, Pipw, Polt, sugaR |
|           20 |     1859 | 2024-03-15 | CYBERSHOKE      | W   | 0.700      | -            | -                | -                | -         |     5.38 | faydett, FpSSS, Pipw, Polt, sugaR |
|           19 |     1933 | 2024-03-13 | INGLORIOUS      | W   | 0.685      | -            | -                | -                | -         |     2.75 | faydett, FpSSS, Pipw, Polt, sugaR |
|           18 |     1984 | 2024-03-11 | 1WIN            | W   | 0.672      | 0.372        | 0.043 (0.011)    | 0.666 (0.167)    | -         |    11.84 | faydett, FpSSS, Pipw, Polt, sugaR |
|           17 |     2028 | 2024-03-09 | K10             | W   | 0.658      | -            | -                | -                | -         |     5.43 | faydett, FpSSS, Pipw, Polt, sugaR |
|           16 |     2069 | 2024-03-07 | Sashi           | L   | 0.646      | -            | -                | -                | -         |    -7.70 | faydett, FpSSS, Pipw, Polt, sugaR |
|           15 |     2100 | 2024-03-06 | The Chosen Few  | W   | 0.640      | -            | -                | -                | -         |     5.12 | faydett, FpSSS, Pipw, Polt, sugaR |
|           14 |     2141 | 2024-03-05 | Johnny Speeds   | L   | 0.632      | -            | -                | -                | -         |    -8.52 | faydett, FpSSS, Pipw, Polt, sugaR |
|           13 |     2149 | 2024-03-05 | Betera          | W   | 0.632      | -            | -                | -                | -         |     5.24 | faydett, FpSSS, Pipw, Polt, sugaR |
|           12 |     2683 | 2024-02-09 | Sashi           | L   | 0.465      | -            | -                | -                | -         |    -5.00 | faydett, FpSSS, Pipw, Polt, sugaR |
|           11 |     2693 | 2024-02-08 | ex-Guild Eagles | W   | 0.460      | -            | -                | -                | -         |     8.62 | faydett, FpSSS, Pipw, Polt, sugaR |
|           10 |     2699 | 2024-02-08 | AMKAL           | L   | 0.458      | -            | -                | -                | -         |    -2.02 | faydett, FpSSS, Pipw, Polt, sugaR |
|            9 |     2863 | 2024-01-30 | Sashi           | L   | 0.400      | -            | -                | -                | -         |    -3.95 | faydett, FpSSS, Pipw, Polt, sugaR |
|            8 |     2868 | 2024-01-30 | fnatic          | W   | 0.399      | 0.143        | 0.148 (0.008)    | -                | -         |     9.91 | faydett, FpSSS, Pipw, Polt, sugaR |
|            7 |     2870 | 2024-01-30 | EXO             | W   | 0.399      | -            | -                | -                | -         |     4.63 | faydett, FpSSS, Pipw, Polt, sugaR |
|            6 |     3204 | 2024-01-18 | AMKAL           | L   | 0.317      | -            | -                | -                | -         |    -1.43 | faydett, FpSSS, Pipw, Polt, sugaR |
|            5 |     3224 | 2024-01-17 | esmagaB         | W   | 0.314      | -            | -                | -                | -         |     3.00 | faydett, FpSSS, Pipw, Polt, sugaR |
|            4 |     3230 | 2024-01-17 | PARIVISION      | W   | 0.313      | -            | -                | -                | -         |     5.54 | faydett, FpSSS, Pipw, Polt, sugaR |
|            3 |     3383 | 2024-01-13 | Permitta        | L   | 0.286      | -            | -                | -                | -         |    -4.30 | faydett, FpSSS, Pipw, Polt, sugaR |
|            2 |     3392 | 2024-01-13 | B8              | W   | 0.285      | -            | -                | -                | -         |     1.02 | faydett, FpSSS, Pipw, Polt, sugaR |
|            1 |     3420 | 2024-01-12 | EYEBALLERS      | W   | 0.280      | -            | -                | -                | -         |     4.39 | faydett, FpSSS, Pipw, Polt, sugaR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,957.00)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-04 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-03-25 |      0.766 | $1,250.00      | $957.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
