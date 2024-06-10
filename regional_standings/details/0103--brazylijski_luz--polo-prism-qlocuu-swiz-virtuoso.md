### Roster Details<br />
Team Name: brazylijski luz<br />
Roster: POLO, Prism, Qlocuu, swiz, virtuoso<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [103](../standings_global.md)<br />
Regional Rank: [73]( ../standings_europe.md)<br />
Final Rank Value:  840.8<br />
<br />
Final Rank Value (840.8) = Starting Rank Value (792.7) + Head To Head Adjustments (48.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.306[<sup>1</sup>](#table2)
- Bounty Collected: 0.341[<sup>2</sup>](#table1)
- Opponent Network: 0.141[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.197<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 792.7
- 400 + ( ( 0.197 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 792.7


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
|           33 |      344 | 2024-06-04 | The Prodigies     | L   | 1.000      | -            | -                | -                | -         |   -26.15 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           32 |      376 | 2024-06-03 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |    -6.61 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           31 |      402 | 2024-06-02 | ex-iNation        | L   | 1.000      | -            | -                | -                | -         |   -18.11 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           30 |      494 | 2024-05-30 | Enterprise        | W   | 1.000      | 0.371        | 0.011 (0.004)    | 0.647 (0.240)    | 0 (0.000) |    18.51 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           29 |      512 | 2024-05-29 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |    -8.32 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           28 |      560 | 2024-05-27 | Entropiq          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.96 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           27 |      620 | 2024-05-23 | GL Academy        | W   | 1.000      | 0.379        | 0.014 (0.005)    | 0.165 (0.063)    | 0 (0.000) |    12.07 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           26 |      631 | 2024-05-23 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |    -6.28 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           25 |     1161 | 2024-05-06 | Grannys Knockers  | L   | 0.964      | -            | -                | -                | -         |   -17.98 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           24 |     1319 | 2024-04-28 | VP.Prodigy        | W   | 0.913      | 0.396        | 0.016 (0.006)    | 0.539 (0.195)    | 0 (0.000) |    13.71 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           23 |     1328 | 2024-04-28 | Nexus             | W   | 0.911      | 0.396        | 0.013 (0.005)    | 0.469 (0.169)    | 0 (0.000) |    14.42 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           22 |     1492 | 2024-04-20 | Sangal            | L   | 0.860      | -            | -                | -                | -         |    -5.61 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           21 |     1534 | 2024-04-19 | Rebels            | W   | 0.853      | 0.500        | 0.053 (0.023)    | 0.472 (0.201)    | 0 (0.000) |    20.93 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           20 |     1580 | 2024-04-18 | BetBoom           | L   | 0.846      | -            | -                | -                | -         |    -0.57 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           19 |     1586 | 2024-04-18 | Ninjas in Pyjamas | W   | 0.846      | 0.143        | 0.294 (0.036)    | 0.480 (0.058)    | 0 (0.000) |    26.16 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           18 |     1791 | 2024-04-10 | Betera            | W   | 0.794      | 0.500        | 0.002 (0.001)    | 0.111 (0.044)    | 0 (0.000) |     9.46 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           17 |     1844 | 2024-04-09 | FORZE             | L   | 0.787      | -            | -                | -                | -         |    -4.61 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           16 |     2123 | 2024-03-28 | Aurora            | L   | 0.707      | -            | -                | -                | -         |    -0.42 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           15 |     2390 | 2024-03-14 | Rebels            | W   | 0.614      | 0.500        | 0.053 (0.016)    | 0.472 (0.145)    | 0 (0.000) |    16.20 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           14 |     2481 | 2024-03-11 | SINNERS           | W   | 0.593      | 0.500        | 0.045 (0.013)    | 0.844 (0.250)    | 0 (0.000) |    15.57 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           13 |     2597 | 2024-03-06 | ALTERNATE aTTaX   | L   | 0.561      | -            | -                | -                | -         |    -4.82 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           12 |     2716 | 2024-03-02 | Sashi             | L   | 0.532      | -            | -                | -                | -         |    -2.58 | Furlan, phr, POLO, Prism, Qlocuu          |
|           11 |     2782 | 2024-02-27 | Spirit Academy    | L   | 0.506      | -            | -                | -                | -         |   -10.48 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           10 |     2857 | 2024-02-24 | The Chosen Few    | W   | 0.485      | -            | -                | -                | -         |     5.31 | Furlan, phr, POLO, Prism, Qlocuu          |
|            9 |     2987 | 2024-02-18 | ARCRED            | W   | 0.446      | 0.358        | -                | 0.271 (0.043)    | -         |     3.62 | Furlan, phr, POLO, Prism, Qlocuu          |
|            8 |     3240 | 2024-02-04 | ALTERNATE aTTaX   | L   | 0.353      | -            | -                | -                | -         |    -2.81 | Furlan, phr, POLO, Prism, Qlocuu          |
|            7 |     4029 | 2024-01-09 | Gaimin Gladiators | L   | 0.180      | -            | -                | -                | -         |    -0.49 | Furlan, phr, POLO, Prism, Qlocuu          |
|            6 |     4042 | 2024-01-09 | Nemiga            | W   | 0.180      | 0.143        | 0.335 (0.009)    | -                | -         |     5.25 | Furlan, phr, POLO, Prism, Qlocuu          |
|            5 |     4067 | 2023-12-29 | Alliance          | L   | 0.104      | -            | -                | -                | -         |    -1.17 | avid, b0denmaster, PlesseN, robiin, twist |
|            4 |     4070 | 2023-12-28 | VP.Prodigy        | L   | 0.098      | -            | -                | -                | -         |    -1.25 | Furlan, phr, POLO, Qlocuu, swiz           |
|            3 |     4073 | 2023-12-27 | Rhyno             | W   | 0.091      | -            | -                | -                | -         |     2.04 | Furlan, phr, POLO, Qlocuu, swiz           |
|            2 |     4098 | 2023-12-19 | Astralis Talent   | W   | 0.038      | -            | -                | -                | -         |     0.72 | ANSG1, JBOEN, kiR, kroK, tOPZ             |
|            1 |     4132 | 2023-12-17 | Nexus             | W   | 0.025      | -            | -                | -                | -         |     0.49 | Furlan, phr, POLO, Prism, Qlocuu          |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,633.52)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $1,500.00      | $1,500.00       |
| 2023-12-19 |      0.038 | $3,500.00      | $133.52         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
