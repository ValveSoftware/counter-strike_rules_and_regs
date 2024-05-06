### Roster Details<br />
Team Name: brazylijski luz<br />
Roster: POLO, Prism, Qlocuu, swiz, virtuoso<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [79](../standings_global.md)<br />
Regional Rank: [56]( ../standings_europe.md)<br />
Final Rank Value:  878.6<br />
<br />
Final Rank Value (878.6) = Starting Rank Value (811.6) + Head To Head Adjustments (67.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.360[<sup>1</sup>](#table2)
- Bounty Collected: 0.374[<sup>2</sup>](#table1)
- Opponent Network: 0.131[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.216<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 811.6
- 400 + ( ( 0.216 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 811.6


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
|           30 |       10 | 2024-05-06 | Grannys Knockers  | L   | 1.000      | -            | -                | -                | -         |   -24.45 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           29 |      168 | 2024-04-28 | VP.Prodigy        | W   | 1.000      | 0.396        | -                | 0.233 (0.093)    | 0 (0.000) |     8.02 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           28 |      177 | 2024-04-28 | Nexus             | W   | 1.000      | 0.396        | 0.031 (0.012)    | 0.605 (0.240)    | 0 (0.000) |    15.19 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           27 |      341 | 2024-04-20 | Sangal            | L   | 1.000      | -            | -                | -                | -         |   -14.65 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           26 |      383 | 2024-04-19 | Rebels            | W   | 1.000      | 0.500        | 0.111 (0.056)    | 0.375 (0.187)    | 0 (0.000) |    22.90 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           25 |      429 | 2024-04-18 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |    -2.19 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           24 |      435 | 2024-04-18 | Ninjas in Pyjamas | W   | 1.000      | 0.143        | 0.236 (0.034)    | 0.346 (0.049)    | 0 (0.000) |    24.71 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           23 |      640 | 2024-04-10 | Betera            | W   | 1.000      | 0.500        | 0.004 (0.002)    | 0.199 (0.100)    | 0 (0.000) |    11.94 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           22 |      693 | 2024-04-09 | FORZE             | L   | 1.000      | -            | -                | -                | -         |    -4.62 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           21 |      972 | 2024-03-28 | Aurora            | L   | 0.940      | -            | -                | -                | -         |    -0.76 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           20 |     1239 | 2024-03-14 | Rebels            | W   | 0.848      | 0.500        | 0.111 (0.047)    | 0.375 (0.159)    | 0 (0.000) |    21.60 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           19 |     1330 | 2024-03-11 | SINNERS           | W   | 0.826      | 0.500        | 0.033 (0.014)    | 0.749 (0.309)    | 0 (0.000) |    19.71 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           18 |     1446 | 2024-03-06 | ALTERNATE aTTaX   | L   | 0.794      | -            | -                | -                | -         |    -9.26 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           17 |     1565 | 2024-03-02 | Sashi             | L   | 0.765      | -            | -                | -                | -         |    -5.91 | Furlan, phr, POLO, Prism, Qlocuu          |
|           16 |     1631 | 2024-02-27 | Spirit Academy    | L   | 0.739      | -            | -                | -                | -         |   -14.38 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           15 |     1706 | 2024-02-24 | The Chosen Few    | W   | 0.719      | 0.358        | -                | 0.284 (0.073)    | 0 (0.000) |     7.65 | Furlan, phr, POLO, Prism, Qlocuu          |
|           14 |     1836 | 2024-02-18 | ARCRED            | W   | 0.680      | 0.358        | -                | 0.198 (0.048)    | 0 (0.000) |     7.26 | Furlan, phr, POLO, Prism, Qlocuu          |
|           13 |     2089 | 2024-02-04 | ALTERNATE aTTaX   | L   | 0.586      | -            | -                | -                | -         |    -6.60 | Furlan, phr, POLO, Prism, Qlocuu          |
|           12 |     2878 | 2024-01-09 | Gaimin Gladiators | L   | 0.413      | -            | -                | -                | -         |    -0.71 | Furlan, phr, POLO, Prism, Qlocuu          |
|           11 |     2891 | 2024-01-09 | Nemiga            | W   | 0.413      | 0.143        | 0.667 (0.039)    | -                | 0 (0.000) |    12.12 | Furlan, phr, POLO, Prism, Qlocuu          |
|           10 |     2916 | 2023-12-29 | Alliance          | L   | 0.338      | -            | -                | -                | -         |    -4.19 | avid, b0denmaster, PlesseN, robiin, twist |
|            9 |     2919 | 2023-12-28 | VP.Prodigy        | L   | 0.331      | -            | -                | -                | -         |    -7.28 | Furlan, phr, POLO, Qlocuu, swiz           |
|            8 |     2922 | 2023-12-27 | Rhyno             | W   | 0.325      | 0.371        | 0.015 (0.002)    | -                | -         |     4.08 | Furlan, phr, POLO, Qlocuu, swiz           |
|            7 |     2947 | 2023-12-19 | Astralis Talent   | W   | 0.271      | 0.303        | 0.029 (0.002)    | -                | -         |     4.79 | ANSG1, JBOEN, kiR, kroK, tOPZ             |
|            6 |     2981 | 2023-12-17 | Nexus             | W   | 0.259      | 0.303        | 0.031 (0.002)    | 0.605 (0.047)    | -         |     5.18 | Furlan, phr, POLO, Prism, Qlocuu          |
|            5 |     3332 | 2023-11-28 | Sashi             | L   | 0.131      | -            | -                | -                | -         |    -2.76 | Furlan, phr, POLO, Prism, Qlocuu          |
|            4 |     3338 | 2023-11-27 | The Prodigies SE  | W   | 0.125      | -            | -                | -                | -         |     0.66 | jayzaR, jocab, pupcake, TIMhehe, upE      |
|            3 |     3464 | 2023-11-19 | Enterprise        | L   | 0.073      | -            | -                | -                | -         |    -0.75 | bajmi, Demho, ex1st, fr3nd, Klameczka     |
|            2 |     3496 | 2023-11-18 | PGE Turow         | L   | 0.066      | -            | -                | -                | -         |    -1.30 | Furlan, phr, POLO, Prism, Qlocuu          |
|            1 |     3593 | 2023-11-15 | Enterprise        | W   | 0.047      | -            | -                | -                | -         |     0.99 | bajmi, Demho, ex1st, fr3nd, Klameczka     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,714.29)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-20 |      1.000 | $1,500.00      | $1,500.00       |
| 2023-12-19 |      0.271 | $3,500.00      | $949.95         |
| 2023-11-19 |      0.073 | $3,616.00      | $264.34         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
