### Roster Details<br />
Team Name: brazylijski luz<br />
Roster: POLO, Prism, Qlocuu, swiz, virtuoso<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [87](../standings_global.md)<br />
Regional Rank: [59]( ../standings_europe.md)<br />
Final Rank Value:  842.5<br />
<br />
Final Rank Value (842.5) = Starting Rank Value (770.1) + Head To Head Adjustments (72.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.313[<sup>1</sup>](#table2)
- Bounty Collected: 0.330[<sup>2</sup>](#table1)
- Opponent Network: 0.120[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.191<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 770.1
- 400 + ( ( 0.191 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 770.1


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
|           29 |       12 | 2024-05-29 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -10.49 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           28 |       60 | 2024-05-27 | Entropiq          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.25 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           27 |      120 | 2024-05-23 | GL Academy        | W   | 1.000      | 0.379        | 0.016 (0.006)    | 0.189 (0.072)    | 0 (0.000) |    12.75 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           26 |      131 | 2024-05-23 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |    -7.05 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           25 |      661 | 2024-05-06 | Grannys Knockers  | L   | 1.000      | -            | -                | -                | -         |   -17.67 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           24 |      819 | 2024-04-28 | VP.Prodigy        | W   | 0.992      | 0.396        | -                | 0.433 (0.170)    | 0 (0.000) |     7.44 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           23 |      828 | 2024-04-28 | Nexus             | W   | 0.991      | 0.396        | 0.014 (0.006)    | 0.518 (0.203)    | 0 (0.000) |    15.78 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           22 |      992 | 2024-04-20 | Sangal            | L   | 0.939      | -            | -                | -                | -         |    -7.32 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           21 |     1034 | 2024-04-19 | Rebels            | W   | 0.933      | 0.500        | 0.059 (0.027)    | 0.413 (0.192)    | 0 (0.000) |    22.38 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           20 |     1080 | 2024-04-18 | BetBoom           | L   | 0.925      | -            | -                | -                | -         |    -1.73 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           19 |     1086 | 2024-04-18 | Ninjas in Pyjamas | W   | 0.925      | 0.143        | 0.118 (0.016)    | 0.327 (0.043)    | 0 (0.000) |    23.23 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           18 |     1291 | 2024-04-10 | Betera            | W   | 0.873      | 0.500        | 0.002 (0.001)    | 0.141 (0.062)    | 0 (0.000) |    10.94 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           17 |     1344 | 2024-04-09 | FORZE             | L   | 0.866      | -            | -                | -                | -         |    -4.91 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           16 |     1623 | 2024-03-28 | Aurora            | L   | 0.786      | -            | -                | -                | -         |    -0.74 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           15 |     1890 | 2024-03-14 | Rebels            | W   | 0.693      | 0.500        | 0.059 (0.020)    | 0.413 (0.143)    | 0 (0.000) |    18.11 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           14 |     1981 | 2024-03-11 | SINNERS           | W   | 0.672      | 0.500        | 0.009 (0.003)    | 0.728 (0.245)    | 0 (0.000) |    15.61 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           13 |     2097 | 2024-03-06 | ALTERNATE aTTaX   | L   | 0.640      | -            | -                | -                | -         |    -6.74 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           12 |     2216 | 2024-03-02 | Sashi             | L   | 0.611      | -            | -                | -                | -         |    -4.09 | Furlan, phr, POLO, Prism, Qlocuu          |
|           11 |     2282 | 2024-02-27 | Spirit Academy    | L   | 0.585      | -            | -                | -                | -         |   -11.45 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           10 |     2357 | 2024-02-24 | The Chosen Few    | W   | 0.565      | 0.358        | -                | 0.207 (0.042)    | 0 (0.000) |     6.40 | Furlan, phr, POLO, Prism, Qlocuu          |
|            9 |     2487 | 2024-02-18 | ARCRED            | W   | 0.525      | 0.358        | -                | 0.144 (0.027)    | -         |     5.62 | Furlan, phr, POLO, Prism, Qlocuu          |
|            8 |     2740 | 2024-02-04 | ALTERNATE aTTaX   | L   | 0.432      | -            | -                | -                | -         |    -4.29 | Furlan, phr, POLO, Prism, Qlocuu          |
|            7 |     3529 | 2024-01-09 | Gaimin Gladiators | L   | 0.259      | -            | -                | -                | -         |    -0.65 | Furlan, phr, POLO, Prism, Qlocuu          |
|            6 |     3542 | 2024-01-09 | Nemiga            | W   | 0.259      | 0.143        | 0.363 (0.013)    | -                | -         |     7.53 | Furlan, phr, POLO, Prism, Qlocuu          |
|            5 |     3567 | 2023-12-29 | Alliance          | L   | 0.184      | -            | -                | -                | -         |    -2.40 | avid, b0denmaster, PlesseN, robiin, twist |
|            4 |     3570 | 2023-12-28 | VP.Prodigy        | L   | 0.177      | -            | -                | -                | -         |    -4.01 | Furlan, phr, POLO, Qlocuu, swiz           |
|            3 |     3573 | 2023-12-27 | Rhyno             | W   | 0.171      | 0.371        | 0.013 (0.001)    | -                | -         |     3.63 | Furlan, phr, POLO, Qlocuu, swiz           |
|            2 |     3598 | 2023-12-19 | Astralis Talent   | W   | 0.117      | -            | -                | -                | -         |     2.09 | ANSG1, JBOEN, kiR, kroK, tOPZ             |
|            1 |     3632 | 2023-12-17 | Nexus             | W   | 0.105      | 0.303        | 0.014 (0.000)    | -                | -         |     2.13 | Furlan, phr, POLO, Prism, Qlocuu          |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,910.63)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-22 |      1.000 | $1,500.00      | $1,500.00       |
| 2023-12-19 |      0.117 | $3,500.00      | $410.63         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
