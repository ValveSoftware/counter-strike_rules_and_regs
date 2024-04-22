### Roster Details<br />
Team Name: Astralis Talent<br />
Roster: ANSG1, JBOEN, kiR, kroK, tOPZ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [106](../standings_global.md)<br />
Regional Rank: [69]( ../standings_europe.md)<br />
Final Rank Value:  789.9<br />
<br />
Final Rank Value (789.9) = Starting Rank Value (848.4) + Head To Head Adjustments (-58.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.391[<sup>1</sup>](#table2)
- Bounty Collected: 0.264[<sup>2</sup>](#table1)
- Opponent Network: 0.059[<sup>2</sup>](#table1)
- LAN Wins: 0.215[<sup>2</sup>](#table1)

The average of these factors is 0.232<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 848.4
- 400 + ( ( 0.232 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 848.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |       25 | 2024-04-21 | MASONIC         | L   | 1.000      | -            | -                | -                | -         |   -11.95 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|           16 |       30 | 2024-04-21 | Preasy          | W   | 1.000      | 0.318        | 0.000 (0.000)    | 0.046 (0.015)    | 1 (1.000) |     6.57 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|           15 |       46 | 2024-04-20 | Kronjyllands    | W   | 1.000      | 0.318        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     3.10 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|           14 |      246 | 2024-04-15 | ECLOT           | L   | 1.000      | -            | -                | -                | -         |    -8.52 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|           13 |      420 | 2024-04-09 | Alliance        | L   | 1.000      | -            | -                | -                | -         |   -15.21 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|           12 |      747 | 2024-03-25 | Sashi           | L   | 1.000      | -            | -                | -                | -         |   -18.78 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|           11 |      750 | 2024-03-25 | XI              | W   | 1.000      | 0.342        | 0.002 (0.001)    | 0.000 (0.000)    | 0 (0.000) |     4.76 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|           10 |     1086 | 2024-03-09 | NOM             | L   | 0.905      | -            | -                | -                | -         |   -23.93 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            9 |     2096 | 2024-01-21 | MOUZ NXT        | L   | 0.584      | -            | -                | -                | -         |    -7.78 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            8 |     2137 | 2024-01-20 | Permitta        | W   | 0.578      | 0.333        | 0.031 (0.006)    | 0.970 (0.187)    | 0 (0.000) |     9.27 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            7 |     2187 | 2024-01-19 | MOUZ NXT        | L   | 0.572      | -            | -                | -                | -         |    -7.86 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            6 |     2295 | 2024-01-17 | Permitta        | W   | 0.558      | 0.333        | 0.031 (0.006)    | 0.970 (0.180)    | 0 (0.000) |     9.14 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            5 |     2412 | 2024-01-14 | Zero Tenacity   | W   | 0.538      | 0.333        | 0.008 (0.001)    | 0.805 (0.144)    | 0 (0.000) |     6.70 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            4 |     2651 | 2023-12-19 | brazylijski luz | L   | 0.365      | -            | -                | -                | -         |    -6.55 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            3 |     2661 | 2023-12-18 | Nexus           | W   | 0.358      | 0.303        | 0.023 (0.002)    | 0.544 (0.059)    | 0 (0.000) |     5.46 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            2 |     2695 | 2023-12-17 | Permitta        | W   | 0.351      | 0.303        | 0.001 (0.000)    | 0.010 (0.001)    | 0 (0.000) |     2.47 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            1 |     2975 | 2023-12-02 | Sashi           | L   | 0.252      | -            | -                | -                | -         |    -5.34 | ANSG1, JBOEN, kiR, kroK, tOPZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,308.70)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-21 |      1.000 | $1,426.00      | $1,426.00       |
| 2024-03-25 |      1.000 | $1,490.00      | $1,490.00       |
| 2024-01-21 |      0.584 | $3,000.00      | $1,752.19       |
| 2023-12-19 |      0.365 | $1,500.00      | $547.08         |
| 2023-12-02 |      0.254 | $368.00        | $93.43          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
