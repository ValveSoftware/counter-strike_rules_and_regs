### Roster Details<br />
Team Name: NAVI Junior<br />
Roster: dem0n, dezt, Krabeni, Magic, makazze<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [126](../standings_global.md)<br />
Regional Rank: [85]( ../standings_europe.md)<br />
Final Rank Value:  745.5<br />
<br />
Final Rank Value (745.5) = Starting Rank Value (735.6) + Head To Head Adjustments (10.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.372[<sup>1</sup>](#table2)
- Bounty Collected: 0.306[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.176<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 735.6
- 400 + ( ( 0.176 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 735.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |      950 | 2024-03-30 | GL Academy     | L   | 0.952      | -            | -                | -                | -         |   -13.46 | dem0n, dezt, Krabeni, Magic, makazze     |
|           15 |      959 | 2024-03-29 | Passion UA     | W   | 0.945      | 0.333        | 0.111 (0.035)    | 0.644 (0.203)    | 0 (0.000) |    21.81 | dem0n, dezt, Krabeni, Magic, makazze     |
|           14 |      962 | 2024-03-29 | Sashi          | W   | 0.944      | 0.333        | 0.055 (0.017)    | 0.082 (0.026)    | 0 (0.000) |    15.90 | dem0n, dezt, Krabeni, Magic, makazze     |
|           13 |     1009 | 2024-03-27 | Metizport      | L   | 0.933      | -            | -                | -                | -         |    -3.76 | dem0n, dezt, Krabeni, Magic, makazze     |
|           12 |     1125 | 2024-03-20 | FORZE          | L   | 0.886      | -            | -                | -                | -         |    -2.71 | dem0n, froz1k, Krabeni, Magic, makazze   |
|           11 |     1791 | 2024-02-20 | ECLOT          | L   | 0.692      | -            | -                | -                | -         |    -2.87 | alkarenn, dem0n, Krabeni, Magic, makazze |
|           10 |     1824 | 2024-02-19 | Viperio        | W   | 0.684      | 0.303        | 0.000 (0.000)    | 0.045 (0.009)    | 0 (0.000) |     5.59 | alkarenn, dem0n, Krabeni, Magic, makazze |
|            9 |     2149 | 2024-02-02 | The Chosen Few | L   | 0.573      | -            | -                | -                | -         |    -9.45 | dem0n, fnl, Krabeni, Magic, makazze      |
|            8 |     2154 | 2024-02-02 | Zero Tenacity  | L   | 0.572      | -            | -                | -                | -         |    -4.54 | dem0n, fnl, Krabeni, Magic, makazze      |
|            7 |     2156 | 2024-02-02 | The Chosen Few | W   | 0.572      | 0.143        | 0.004 (0.000)    | 0.284 (0.023)    | 0 (0.000) |     8.57 | dem0n, fnl, Krabeni, Magic, makazze      |
|            6 |     2583 | 2024-01-17 | esmagaB        | L   | 0.467      | -            | -                | -                | -         |    -7.00 | dem0n, fnl, Krabeni, Magic, makazze      |
|            5 |     2928 | 2023-12-22 | ex-Anonymo     | L   | 0.291      | -            | -                | -                | -         |    -4.51 | dem0n, fnl, Krabeni, Magic, makazze      |
|            4 |     2932 | 2023-12-21 | NOM            | W   | 0.284      | 0.333        | 0.002 (0.000)    | 0.030 (0.003)    | 0 (0.000) |     3.67 | dem0n, fnl, Krabeni, Magic, makazze      |
|            3 |     2936 | 2023-12-20 | Sashi          | W   | 0.279      | 0.333        | 0.012 (0.001)    | 0.038 (0.004)    | 0 (0.000) |     3.83 | dem0n, fnl, Krabeni, Magic, makazze      |
|            2 |     2950 | 2023-12-19 | Spirit Academy | L   | 0.271      | -            | -                | -                | -         |    -4.28 | dem0n, fnl, Krabeni, Magic, makazze      |
|            1 |     3019 | 2023-12-16 | NOM            | W   | 0.251      | 0.333        | 0.002 (0.000)    | 0.030 (0.002)    | 0 (0.000) |     3.17 | dem0n, fnl, Krabeni, Magic, makazze      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,301.33)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-30 |      0.952 | $3,000.00      | $2,855.03       |
| 2023-12-23 |      0.298 | $1,500.00      | $446.30         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
