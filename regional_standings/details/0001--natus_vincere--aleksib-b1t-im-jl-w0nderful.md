### Roster Details<br />
Team Name: Natus Vincere<br />
Roster: Aleksib, b1t, iM, jL, w0nderful<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [1](../standings_global.md)<br />
Regional Rank: [1]( ../standings_europe.md)<br />
Final Rank Value:  1925.2<br />
<br />
Final Rank Value (1925.2) = Starting Rank Value (1958.6) + Head To Head Adjustments (-33.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.761[<sup>2</sup>](#table1)
- Opponent Network: 0.509[<sup>2</sup>](#table1)
- LAN Wins: 0.957[<sup>2</sup>](#table1)

The average of these factors is 0.807<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1958.6
- 400 + ( ( 0.807 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1958.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |      645 | 2024-03-31 | FaZe              | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.737 (0.737)    | 1 (1.000) |    16.53 | Aleksib, b1t, iM, jL, w0nderful |
|           28 |      651 | 2024-03-30 | G2                | W   | 1.000      | 1.000        | 0.773 (0.773)    | 0.542 (0.542)    | 1 (1.000) |    13.53 | Aleksib, b1t, iM, jL, w0nderful |
|           27 |      661 | 2024-03-29 | Eternal Fire      | W   | 1.000      | 1.000        | 0.338 (0.338)    | 0.587 (0.587)    | 1 (1.000) |     7.36 | Aleksib, b1t, iM, jL, w0nderful |
|           26 |      754 | 2024-03-24 | paiN              | W   | 1.000      | 1.000        | 0.698 (0.698)    | 0.854 (0.854)    | 1 (1.000) |     5.36 | Aleksib, b1t, iM, jL, w0nderful |
|           25 |      762 | 2024-03-23 | Cloud9            | L   | 1.000      | -            | -                | -                | -         |   -24.71 | Aleksib, b1t, iM, jL, w0nderful |
|           24 |      778 | 2024-03-22 | Spirit            | L   | 0.993      | -            | -                | -                | -         |   -15.61 | Aleksib, b1t, iM, jL, w0nderful |
|           23 |      796 | 2024-03-21 | G2                | W   | 0.987      | 1.000        | 0.773 (0.763)    | 0.542 (0.535)    | 1 (0.987) |    13.24 | Aleksib, b1t, iM, jL, w0nderful |
|           22 |      813 | 2024-03-21 | TheMongolz        | W   | 0.985      | 1.000        | 0.247 (0.244)    | 0.587 (0.578)    | 1 (0.985) |     1.25 | Aleksib, b1t, iM, jL, w0nderful |
|           21 |     1585 | 2024-02-16 | BetBoom           | W   | 0.760      | -            | -                | -                | 1 (0.760) |     0.48 | Aleksib, b1t, iM, jL, w0nderful |
|           20 |     1620 | 2024-02-15 | Virtus.pro        | L   | 0.753      | -            | -                | -                | -         |   -19.61 | Aleksib, b1t, iM, jL, w0nderful |
|           19 |     1650 | 2024-02-14 | Enterprise        | W   | 0.747      | -            | -                | -                | 1 (0.747) |     0.12 | Aleksib, b1t, iM, jL, w0nderful |
|           18 |     1667 | 2024-02-14 | KOI               | W   | 0.745      | -            | -                | -                | 1 (0.745) |     0.17 | Aleksib, b1t, iM, jL, w0nderful |
|           17 |     1764 | 2024-02-06 | Falcons           | L   | 0.693      | -            | -                | -                | -         |   -21.19 | Aleksib, b1t, iM, jL, w0nderful |
|           16 |     1772 | 2024-02-05 | Eternal Fire      | W   | 0.687      | 1.000        | 0.338 (0.232)    | 0.587 (0.404)    | 1 (0.687) |     3.08 | Aleksib, b1t, iM, jL, w0nderful |
|           15 |     1789 | 2024-02-04 | Apeks             | W   | 0.680      | 1.000        | -                | 0.687 (0.467)    | -         |     0.49 | Aleksib, b1t, iM, jL, w0nderful |
|           14 |     1815 | 2024-02-03 | Spirit            | L   | 0.673      | -            | -                | -                | -         |   -13.13 | Aleksib, b1t, iM, jL, w0nderful |
|           13 |     1958 | 2024-01-27 | G2                | W   | 0.626      | 0.581        | 0.773 (0.281)    | 0.542 (0.197)    | -         |     7.65 | Aleksib, b1t, iM, jL, w0nderful |
|           12 |     2035 | 2024-01-23 | G2                | W   | 0.598      | 0.581        | 0.773 (0.269)    | 0.542 (0.189)    | -         |     7.71 | Aleksib, b1t, iM, jL, w0nderful |
|           11 |     2061 | 2024-01-22 | Complexity        | W   | 0.592      | -            | -                | -                | -         |     0.79 | Aleksib, b1t, iM, jL, w0nderful |
|           10 |     2177 | 2024-01-19 | Virtus.pro        | W   | 0.573      | -            | -                | -                | -         |     2.91 | Aleksib, b1t, iM, jL, w0nderful |
|            9 |     2233 | 2024-01-18 | 9 Pandas          | W   | 0.566      | -            | -                | -                | -         |     0.15 | Aleksib, b1t, iM, jL, w0nderful |
|            8 |     2249 | 2024-01-18 | Gaimin Gladiators | W   | 0.566      | -            | -                | -                | -         |     0.51 | Aleksib, b1t, iM, jL, w0nderful |
|            7 |     2719 | 2023-12-16 | Vitality          | L   | 0.346      | -            | -                | -                | -         |    -7.23 | Aleksib, b1t, iM, jL, w0nderful |
|            6 |     2747 | 2023-12-15 | G2                | W   | 0.339      | 1.000        | 0.773 (0.262)    | -                | -         |     4.50 | Aleksib, b1t, iM, jL, w0nderful |
|            5 |     2752 | 2023-12-14 | ENCE              | W   | 0.330      | -            | -                | -                | -         |     0.02 | Aleksib, b1t, iM, jL, w0nderful |
|            4 |     2762 | 2023-12-13 | Vitality          | L   | 0.324      | -            | -                | -                | -         |    -6.94 | Aleksib, b1t, iM, jL, w0nderful |
|            3 |     3087 | 2023-11-24 | Complexity        | L   | 0.200      | -            | -                | -                | -         |    -6.04 | Aleksib, b1t, iM, jL, w0nderful |
|            2 |     3115 | 2023-11-23 | Ninjas in Pyjamas | W   | 0.191      | -            | -                | -                | -         |     0.01 | Aleksib, b1t, iM, jL, w0nderful |
|            1 |     3128 | 2023-11-22 | Cloud9            | L   | 0.185      | -            | -                | -                | -         |    -4.74 | Aleksib, b1t, iM, jL, w0nderful |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($565,875.62)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-31 |      1.000 | $500,000.00    | $500,000.00     |
| 2024-02-11 |      0.726 | $24,000.00     | $17,434.71      |
| 2024-01-28 |      0.633 | $22,500.00     | $14,247.40      |
| 2023-12-17 |      0.352 | $85,000.00     | $29,938.11      |
| 2023-11-26 |      0.213 | $20,000.00     | $4,255.40       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
