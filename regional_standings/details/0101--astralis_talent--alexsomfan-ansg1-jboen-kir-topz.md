### Roster Details<br />
Team Name: Astralis Talent<br />
Roster: alexsomfan, ANSG1, JBOEN, kiR, tOPZ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [101](../standings_global.md)<br />
Regional Rank: [69]( ../standings_europe.md)<br />
Final Rank Value:  800.3<br />
<br />
Final Rank Value (800.3) = Starting Rank Value (856.7) + Head To Head Adjustments (-56.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.395[<sup>1</sup>](#table2)
- Bounty Collected: 0.290[<sup>2</sup>](#table1)
- Opponent Network: 0.051[<sup>2</sup>](#table1)
- LAN Wins: 0.224[<sup>2</sup>](#table1)

The average of these factors is 0.240<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 856.7
- 400 + ( ( 0.240 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 856.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |      188 | 2024-04-27 | RUBY            | L   | 1.000      | -            | -                | -                | -         |   -13.55 | alexsomfan, ANSG1, JBOEN, kiR, tOPZ |
|           17 |      321 | 2024-04-21 | MASONIC         | L   | 1.000      | -            | -                | -                | -         |   -12.74 | ANSG1, JBOEN, kiR, kroK, tOPZ       |
|           16 |      326 | 2024-04-21 | Preasy          | W   | 1.000      | 0.318        | 0.005 (0.002)    | 0.044 (0.014)    | 1 (1.000) |    10.47 | ANSG1, JBOEN, kiR, kroK, tOPZ       |
|           15 |      342 | 2024-04-20 | Kronjyllands    | W   | 1.000      | 0.318        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     2.79 | ANSG1, JBOEN, kiR, kroK, tOPZ       |
|           14 |      542 | 2024-04-15 | ECLOT           | L   | 1.000      | -            | -                | -                | -         |    -7.50 | ANSG1, JBOEN, kiR, kroK, tOPZ       |
|           13 |      716 | 2024-04-09 | Alliance        | L   | 1.000      | -            | -                | -                | -         |   -15.00 | ANSG1, JBOEN, kiR, kroK, tOPZ       |
|           12 |     1043 | 2024-03-25 | Sashi           | L   | 0.921      | -            | -                | -                | -         |   -18.27 | ANSG1, JBOEN, kiR, kroK, tOPZ       |
|           11 |     1046 | 2024-03-25 | XI              | W   | 0.920      | 0.342        | 0.002 (0.001)    | 0.000 (0.000)    | 0 (0.000) |     3.99 | ANSG1, JBOEN, kiR, kroK, tOPZ       |
|           10 |     1382 | 2024-03-09 | NOM             | L   | 0.812      | -            | -                | -                | -         |   -21.88 | ANSG1, JBOEN, kiR, kroK, tOPZ       |
|            9 |     2392 | 2024-01-21 | MOUZ NXT        | L   | 0.491      | -            | -                | -                | -         |    -4.06 | ANSG1, JBOEN, kiR, kroK, tOPZ       |
|            8 |     2433 | 2024-01-20 | Permitta        | W   | 0.484      | 0.333        | 0.053 (0.009)    | 0.979 (0.158)    | 0 (0.000) |     9.07 | ANSG1, JBOEN, kiR, kroK, tOPZ       |
|            7 |     2483 | 2024-01-19 | MOUZ NXT        | L   | 0.478      | -            | -                | -                | -         |    -3.97 | ANSG1, JBOEN, kiR, kroK, tOPZ       |
|            6 |     2591 | 2024-01-17 | Permitta        | W   | 0.465      | 0.333        | 0.053 (0.008)    | 0.979 (0.152)    | 0 (0.000) |     8.95 | ANSG1, JBOEN, kiR, kroK, tOPZ       |
|            5 |     2708 | 2024-01-14 | Zero Tenacity   | W   | 0.445      | 0.333        | 0.093 (0.014)    | 0.936 (0.139)    | 0 (0.000) |     8.31 | ANSG1, JBOEN, kiR, kroK, tOPZ       |
|            4 |     2947 | 2023-12-19 | brazylijski luz | L   | 0.271      | -            | -                | -                | -         |    -4.79 | ANSG1, JBOEN, kiR, kroK, tOPZ       |
|            3 |     2957 | 2023-12-18 | Nexus           | W   | 0.265      | 0.303        | 0.031 (0.002)    | 0.605 (0.048)    | 0 (0.000) |     4.74 | ANSG1, JBOEN, kiR, kroK, tOPZ       |
|            2 |     2991 | 2023-12-17 | Permitta        | W   | 0.258      | 0.303        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.59 | ANSG1, JBOEN, kiR, kroK, tOPZ       |
|            1 |     3271 | 2023-12-02 | Sashi           | L   | 0.159      | -            | -                | -                | -         |    -3.58 | ANSG1, JBOEN, kiR, kroK, tOPZ       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,736.37)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-21 |      1.000 | $1,426.00      | $1,426.00       |
| 2024-03-25 |      0.921 | $1,490.00      | $1,371.89       |
| 2024-01-21 |      0.491 | $3,000.00      | $1,472.27       |
| 2023-12-19 |      0.271 | $1,500.00      | $407.12         |
| 2023-12-02 |      0.161 | $368.00        | $59.09          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
