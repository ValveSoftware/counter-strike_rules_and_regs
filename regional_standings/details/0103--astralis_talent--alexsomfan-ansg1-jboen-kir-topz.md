### Roster Details<br />
Team Name: Astralis Talent<br />
Roster: alexsomfan, ANSG1, JBOEN, kiR, tOPZ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [103](../standings_global.md)<br />
Regional Rank: [70]( ../standings_europe.md)<br />
Final Rank Value:  776.1<br />
<br />
Final Rank Value (776.1) = Starting Rank Value (816.6) + Head To Head Adjustments (-40.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.343[<sup>1</sup>](#table2)
- Bounty Collected: 0.274[<sup>2</sup>](#table1)
- Opponent Network: 0.036[<sup>2</sup>](#table1)
- LAN Wins: 0.205[<sup>2</sup>](#table1)

The average of these factors is 0.215<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 816.6
- 400 + ( ( 0.215 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 816.6


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
|           18 |      839 | 2024-04-27 | RUBY            | L   | 0.985      | -            | -                | -                | -         |   -11.65 | alexsomfan, ANSG1, JBOEN, kiR, tOPZ |
|           17 |      972 | 2024-04-21 | MASONIC         | L   | 0.944      | -            | -                | -                | -         |   -12.11 | ANSG1, JBOEN, kiR, kroK, tOPZ       |
|           16 |      977 | 2024-04-21 | Preasy          | W   | 0.943      | 0.318        | 0.008 (0.002)    | 0.122 (0.036)    | 1 (0.943) |    13.88 | ANSG1, JBOEN, kiR, kroK, tOPZ       |
|           15 |      993 | 2024-04-20 | Kronjyllands    | W   | 0.939      | 0.318        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.939) |     3.06 | ANSG1, JBOEN, kiR, kroK, tOPZ       |
|           14 |     1193 | 2024-04-15 | ECLOT           | L   | 0.903      | -            | -                | -                | -         |    -7.10 | ANSG1, JBOEN, kiR, kroK, tOPZ       |
|           13 |     1367 | 2024-04-09 | Alliance        | L   | 0.864      | -            | -                | -                | -         |   -12.46 | ANSG1, JBOEN, kiR, kroK, tOPZ       |
|           12 |     1694 | 2024-03-25 | Sashi           | L   | 0.767      | -            | -                | -                | -         |   -15.41 | ANSG1, JBOEN, kiR, kroK, tOPZ       |
|           11 |     1697 | 2024-03-25 | XI              | W   | 0.766      | 0.342        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.79 | ANSG1, JBOEN, kiR, kroK, tOPZ       |
|           10 |     2033 | 2024-03-09 | NOM             | L   | 0.658      | -            | -                | -                | -         |   -17.34 | ANSG1, JBOEN, kiR, kroK, tOPZ       |
|            9 |     3043 | 2024-01-21 | MOUZ NXT        | L   | 0.337      | -            | -                | -                | -         |    -2.30 | ANSG1, JBOEN, kiR, kroK, tOPZ       |
|            8 |     3084 | 2024-01-20 | Permitta        | W   | 0.330      | 0.333        | 0.025 (0.003)    | 1.000 (0.110)    | 0 (0.000) |     6.18 | ANSG1, JBOEN, kiR, kroK, tOPZ       |
|            7 |     3134 | 2024-01-19 | MOUZ NXT        | L   | 0.324      | -            | -                | -                | -         |    -2.21 | ANSG1, JBOEN, kiR, kroK, tOPZ       |
|            6 |     3242 | 2024-01-17 | Permitta        | W   | 0.311      | 0.333        | 0.025 (0.003)    | 1.000 (0.104)    | 0 (0.000) |     5.93 | ANSG1, JBOEN, kiR, kroK, tOPZ       |
|            5 |     3359 | 2024-01-14 | Zero Tenacity   | W   | 0.290      | 0.333        | 0.147 (0.014)    | 1.000 (0.097)    | 0 (0.000) |     7.16 | ANSG1, JBOEN, kiR, kroK, tOPZ       |
|            4 |     3598 | 2023-12-19 | brazylijski luz | L   | 0.117      | -            | -                | -                | -         |    -2.09 | ANSG1, JBOEN, kiR, kroK, tOPZ       |
|            3 |     3608 | 2023-12-18 | Nexus           | W   | 0.110      | 0.303        | 0.014 (0.000)    | 0.518 (0.017)    | 0 (0.000) |     2.02 | ANSG1, JBOEN, kiR, kroK, tOPZ       |
|            2 |     3642 | 2023-12-17 | Permitta        | W   | 0.103      | 0.303        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.29 | ANSG1, JBOEN, kiR, kroK, tOPZ       |
|            1 |     3922 | 2023-12-02 | Sashi           | L   | 0.005      | -            | -                | -                | -         |    -0.12 | ANSG1, JBOEN, kiR, kroK, tOPZ       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,677.26)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-21 |      0.944 | $1,426.00      | $1,346.61       |
| 2024-03-25 |      0.767 | $1,490.00      | $1,142.29       |
| 2024-01-21 |      0.337 | $3,000.00      | $1,009.99       |
| 2023-12-19 |      0.117 | $1,500.00      | $175.98         |
| 2023-12-02 |      0.006 | $368.00        | $2.39           |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
