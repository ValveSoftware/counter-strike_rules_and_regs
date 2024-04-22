### Roster Details<br />
Team Name: Blessed<br />
Roster: bondik, guthriee, j3kie, Smash, t3ns1on<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [114](../standings_global.md)<br />
Regional Rank: [77]( ../standings_europe.md)<br />
Final Rank Value:  767.6<br />
<br />
Final Rank Value (767.6) = Starting Rank Value (729.2) + Head To Head Adjustments (38.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.316[<sup>1</sup>](#table2)
- Bounty Collected: 0.322[<sup>2</sup>](#table1)
- Opponent Network: 0.043[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.170<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 729.2
- 400 + ( ( 0.170 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 729.2


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
|           14 |      583 | 2024-04-03 | Metizport         | L   | 1.000      | -            | -                | -                | -         |    -6.60 | bondik, guthriee, j3kie, Smash, t3ns1on   |
|           13 |      616 | 2024-04-02 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |    -8.27 | bondik, guthriee, j3kie, Smash, t3ns1on   |
|           12 |      620 | 2024-04-02 | GamerLegion       | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.093 (0.013)    | 0 (0.000) |     7.31 | bondik, guthriee, j3kie, Smash, t3ns1on   |
|           11 |      648 | 2024-03-31 | Passion UA        | W   | 1.000      | 0.276        | 0.031 (0.009)    | 0.625 (0.172)    | 0 (0.000) |    18.31 | bondik, guthriee, j3kie, Smash, t3ns1on   |
|           10 |      653 | 2024-03-30 | L&G               | W   | 1.000      | 0.276        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.75 | bondik, guthriee, j3kie, Smash, t3ns1on   |
|            9 |      709 | 2024-03-27 | ALTERNATE aTTaX   | W   | 1.000      | 0.143        | 0.019 (0.003)    | 0.639 (0.091)    | 0 (0.000) |    20.29 | bondik, guthriee, j3kie, Smash, t3ns1on   |
|            8 |      719 | 2024-03-27 | BetBoom           | W   | 1.000      | 0.143        | 0.457 (0.065)    | 0.898 (0.128)    | 0 (0.000) |    29.16 | bondik, guthriee, j3kie, Smash, t3ns1on   |
|            7 |     1054 | 2024-03-10 | AURA              | L   | 0.913      | -            | -                | -                | -         |   -22.42 | bondik, guthriee, j3kie, Smash, t3ns1on   |
|            6 |     1100 | 2024-03-08 | Nexus             | L   | 0.900      | -            | -                | -                | -         |   -10.33 | bondik, guthriee, j3kie, Smash, t3ns1on   |
|            5 |     1156 | 2024-03-06 | CYBERSHOKE        | W   | 0.886      | 0.372        | 0.004 (0.001)    | 0.085 (0.028)    | 0 (0.000) |    11.16 | fen2k, FenomeN, flamie, Re1GN, sh1nejezzz |
|            4 |     2334 | 2024-01-16 | Nexus             | L   | 0.554      | -            | -                | -                | -         |    -6.05 | BTN, ERSIN, ragga, s0und, XELLOW          |
|            3 |     2352 | 2024-01-16 | OWL               | W   | 0.553      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.40 | bondik, guthriee, j3kie, Smash, t3ns1on   |
|            2 |     2439 | 2024-01-13 | ex-Anonymo        | L   | 0.532      | -            | -                | -                | -         |    -7.27 | bondik, guthriee, j3kie, Smash, t3ns1on   |
|            1 |     2475 | 2024-01-12 | Wolves            | W   | 0.527      | 0.143        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.96 | bondik, guthriee, j3kie, Smash, t3ns1on   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,315.00)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
