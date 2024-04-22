### Roster Details<br />
Team Name: FURIA<br />
Roster: chelo, FalleN, KSCERATO, kye, yuurih<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [16](../standings_global.md)<br />
Regional Rank: [5]( ../standings_americas.md)<br />
Final Rank Value:  1326.6<br />
<br />
Final Rank Value (1326.6) = Starting Rank Value (1439.5) + Head To Head Adjustments (-113.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.667[<sup>1</sup>](#table2)
- Bounty Collected: 0.455[<sup>2</sup>](#table1)
- Opponent Network: 0.167[<sup>2</sup>](#table1)
- LAN Wins: 0.865[<sup>2</sup>](#table1)

The average of these factors is 0.538<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1439.5
- 400 + ( ( 0.538 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1439.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           45 |       74 | 2024-04-19 | MIBR              | L   | 1.000      | -            | -                | -                | -         |    -9.46 | chelo, FalleN, KSCERATO, kye, yuurih |
|           44 |       94 | 2024-04-19 | Metizport         | W   | 1.000      | 0.589        | 0.136 (0.080)    | 1.000 (0.589)    | 1 (1.000) |     4.00 | chelo, FalleN, KSCERATO, kye, yuurih |
|           43 |      129 | 2024-04-18 | 9z                | L   | 1.000      | -            | -                | -                | -         |   -26.54 | chelo, FalleN, KSCERATO, kye, yuurih |
|           42 |      415 | 2024-04-09 | HEROIC            | L   | 1.000      | -            | -                | -                | -         |    -8.28 | arT, chelo, FalleN, KSCERATO, yuurih |
|           41 |      438 | 2024-04-08 | MOUZ              | L   | 1.000      | -            | -                | -                | -         |    -2.04 | arT, chelo, FalleN, KSCERATO, yuurih |
|           40 |      457 | 2024-04-07 | Lynn Vision       | W   | 1.000      | 0.624        | 0.136 (0.085)    | 0.458 (0.286)    | 1 (1.000) |     6.93 | arT, chelo, FalleN, KSCERATO, yuurih |
|           39 |      776 | 2024-03-22 | Gaimin Gladiators | L   | 0.994      | -            | -                | -                | -         |   -18.91 | arT, chelo, FalleN, KSCERATO, yuurih |
|           38 |      795 | 2024-03-21 | FaZe              | L   | 0.987      | -            | -                | -                | -         |    -1.32 | arT, chelo, FalleN, KSCERATO, yuurih |
|           37 |      806 | 2024-03-21 | G2                | L   | 0.986      | -            | -                | -                | -         |    -1.92 | arT, chelo, FalleN, KSCERATO, yuurih |
|           36 |      828 | 2024-03-20 | SAW               | W   | 0.980      | 0.143        | -                | 0.824 (0.115)    | 1 (0.980) |    12.38 | arT, chelo, FalleN, KSCERATO, yuurih |
|           35 |      844 | 2024-03-19 | ENCE              | W   | 0.973      | 0.143        | 0.299 (0.042)    | -                | 1 (0.973) |    14.61 | arT, chelo, FalleN, KSCERATO, yuurih |
|           34 |      852 | 2024-03-18 | KOI               | W   | 0.966      | 0.143        | -                | 0.902 (0.124)    | 1 (0.966) |     4.62 | arT, chelo, FalleN, KSCERATO, yuurih |
|           33 |      866 | 2024-03-17 | Lynn Vision       | L   | 0.961      | -            | -                | -                | -         |   -23.22 | arT, chelo, FalleN, KSCERATO, yuurih |
|           32 |      881 | 2024-03-17 | Legacy            | L   | 0.959      | -            | -                | -                | -         |   -25.02 | arT, chelo, FalleN, KSCERATO, yuurih |
|           31 |     1228 | 2024-03-03 | Complexity        | W   | 0.868      | 0.143        | 0.264 (0.033)    | -                | 1 (0.868) |    12.32 | arT, chelo, FalleN, KSCERATO, yuurih |
|           30 |     1263 | 2024-03-02 | Liquid            | W   | 0.859      | 0.143        | -                | 0.728 (0.089)    | 1 (0.859) |     8.09 | arT, chelo, FalleN, KSCERATO, yuurih |
|           29 |     1285 | 2024-03-01 | Nouns             | W   | 0.853      | -            | -                | -                | 1 (0.853) |     0.83 | arT, chelo, FalleN, KSCERATO, yuurih |
|           28 |     1417 | 2024-02-23 | 9z                | L   | 0.809      | -            | -                | -                | -         |   -22.64 | arT, chelo, FalleN, KSCERATO, yuurih |
|           27 |     1430 | 2024-02-22 | 9z                | W   | 0.801      | -            | -                | -                | -         |     2.49 | arT, chelo, FalleN, KSCERATO, yuurih |
|           26 |     1438 | 2024-02-22 | Imperial          | W   | 0.800      | 0.143        | 0.569 (0.065)    | 1.000 (0.114)    | -         |    20.83 | arT, chelo, FalleN, KSCERATO, yuurih |
|           25 |     1719 | 2024-02-10 | Metizport         | L   | 0.719      | -            | -                | -                | -         |   -20.68 | arT, chelo, FalleN, KSCERATO, yuurih |
|           24 |     1721 | 2024-02-10 | ex-Anonymo        | W   | 0.719      | -            | -                | -                | -         |     0.64 | arT, chelo, FalleN, KSCERATO, yuurih |
|           23 |     1723 | 2024-02-10 | Metizport         | L   | 0.719      | -            | -                | -                | -         |   -21.00 | arT, chelo, FalleN, KSCERATO, yuurih |
|           22 |     1877 | 2024-02-01 | Apeks             | L   | 0.661      | -            | -                | -                | -         |   -14.91 | arT, chelo, FalleN, KSCERATO, yuurih |
|           21 |     1900 | 2024-01-31 | TheMongolz        | L   | 0.653      | -            | -                | -                | -         |   -13.29 | arT, chelo, FalleN, KSCERATO, yuurih |
|           20 |     2836 | 2023-12-08 | Spirit            | L   | 0.292      | -            | -                | -                | -         |    -0.71 | arT, chelo, FalleN, KSCERATO, yuurih |
|           19 |     2861 | 2023-12-07 | Astralis          | W   | 0.287      | 0.657        | -                | 0.427 (0.080)    | 1 (0.287) |     3.93 | arT, chelo, FalleN, KSCERATO, yuurih |
|           18 |     2893 | 2023-12-06 | Spirit            | L   | 0.279      | -            | -                | -                | -         |    -0.64 | arT, chelo, FalleN, KSCERATO, yuurih |
|           17 |     2946 | 2023-12-03 | Apeks             | W   | 0.260      | 0.589        | 0.193 (0.030)    | 0.687 (0.105)    | 1 (0.260) |     2.15 | arT, chelo, FalleN, KSCERATO, yuurih |
|           16 |     2971 | 2023-12-02 | HAVU              | W   | 0.253      | -            | -                | -                | -         |     0.24 | arT, chelo, FalleN, KSCERATO, yuurih |
|           15 |     2989 | 2023-12-01 | MOUZ              | W   | 0.247      | 0.589        | 1.000 (0.145)    | 0.603 (0.088)    | -         |     7.11 | arT, chelo, FalleN, KSCERATO, yuurih |
|           14 |     3007 | 2023-11-30 | Apeks             | L   | 0.239      | -            | -                | -                | -         |    -5.58 | arT, chelo, FalleN, KSCERATO, yuurih |
|           13 |     3009 | 2023-11-30 | Complexity        | W   | 0.238      | 0.589        | 0.264 (0.037)    | -                | -         |     3.30 | arT, chelo, FalleN, KSCERATO, yuurih |
|           12 |     3174 | 2023-11-19 | 9 Pandas          | L   | 0.166      | -            | -                | -                | -         |    -4.58 | arT, chelo, FalleN, KSCERATO, yuurih |
|           11 |     3189 | 2023-11-18 | MIBR              | W   | 0.160      | -            | -                | -                | -         |     2.28 | arT, chelo, FalleN, KSCERATO, yuurih |
|           10 |     3199 | 2023-11-18 | Aurora            | W   | 0.159      | 0.500        | 0.763 (0.061)    | 1.000 (0.080)    | -         |     2.10 | arT, chelo, FalleN, KSCERATO, yuurih |
|            9 |     3227 | 2023-11-17 | Eternal Fire      | L   | 0.153      | -            | -                | -                | -         |    -1.27 | arT, chelo, FalleN, KSCERATO, yuurih |
|            8 |     3251 | 2023-11-16 | Aurora            | W   | 0.147      | 0.500        | 0.763 (0.056)    | -                | -         |     1.99 | arT, chelo, FalleN, KSCERATO, yuurih |
|            7 |     3602 | 2023-11-01 | Virtus.pro        | L   | 0.047      | -            | -                | -                | -         |    -0.36 | arT, chelo, FalleN, KSCERATO, yuurih |
|            6 |     3626 | 2023-10-31 | BIG               | L   | 0.040      | -            | -                | -                | -         |    -0.99 | arT, chelo, FalleN, KSCERATO, yuurih |
|            5 |     3643 | 2023-10-31 | Apeks             | W   | 0.039      | -            | -                | -                | -         |     0.32 | arT, chelo, FalleN, KSCERATO, yuurih |
|            4 |     3652 | 2023-10-31 | Nouns             | W   | 0.037      | -            | -                | -                | -         |     0.02 | arT, chelo, FalleN, KSCERATO, yuurih |
|            3 |     3673 | 2023-10-30 | BIG               | L   | 0.032      | -            | -                | -                | -         |    -0.80 | arT, chelo, FalleN, KSCERATO, yuurih |
|            2 |     3793 | 2023-10-27 | HEROIC            | W   | 0.012      | -            | -                | -                | -         |     0.01 | arT, chelo, FalleN, KSCERATO, yuurih |
|            1 |     3848 | 2023-10-25 | Eternal Fire      | W   | 0.000      | -            | -                | -                | -         |     0.00 | arT, chelo, FalleN, KSCERATO, yuurih |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($60,191.88)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.32) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-20 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-04-14 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-03-31 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-02-02 |      0.667 | $2,500.00      | $1,668.47       |
| 2023-12-03 |      0.260 | $100,000.00    | $25,989.96      |
| 2023-11-20 |      0.173 | $10,000.00     | $1,731.25       |
| 2023-11-02 |      0.053 | $15,000.00     | $802.21         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
