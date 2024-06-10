### Roster Details<br />
Team Name: ATOX<br />
Roster: Annihilation, dobu, kabal, MiQ, Zesta<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [73](../standings_global.md)<br />
Regional Rank: [4]( ../standings_asia.md)<br />
Final Rank Value:  983.4<br />
<br />
Final Rank Value (983.4) = Starting Rank Value (954.5) + Head To Head Adjustments (28.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.388[<sup>1</sup>](#table2)
- Bounty Collected: 0.366[<sup>2</sup>](#table1)
- Opponent Network: 0.038[<sup>2</sup>](#table1)
- LAN Wins: 0.320[<sup>2</sup>](#table1)

The average of these factors is 0.278<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 954.5
- 400 + ( ( 0.278 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 954.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |       55 | 2024-06-09 | Lynn Vision | L   | 1.000      | -            | -                | -                | -         |    -8.72 | Annihilation, dobu, kabal, MiQ, Zesta |
|           25 |      248 | 2024-06-06 | Lynn Vision | W   | 1.000      | 0.416        | 0.129 (0.054)    | 0.303 (0.126)    | 0 (0.000) |    23.13 | Annihilation, dobu, kabal, MiQ, Zesta |
|           24 |      311 | 2024-06-05 | GR          | W   | 1.000      | 0.416        | 0.011 (0.004)    | 0.148 (0.061)    | 0 (0.000) |     4.82 | Annihilation, dobu, kabal, MiQ, Zesta |
|           23 |      352 | 2024-06-04 | -72c        | W   | 1.000      | 0.416        | 0.004 (0.002)    | -                | 0 (0.000) |     2.79 | Annihilation, dobu, kabal, MiQ, Zesta |
|           22 |      442 | 2024-05-31 | Lynn Vision | L   | 1.000      | -            | -                | -                | -         |    -7.58 | Annihilation, dobu, kabal, MiQ, Zesta |
|           21 |      495 | 2024-05-29 | BLEED       | L   | 1.000      | -            | -                | -                | -         |    -5.28 | Annihilation, dobu, kabal, MiQ, Zesta |
|           20 |      518 | 2024-05-29 | OG          | W   | 1.000      | 0.500        | 0.249 (0.125)    | 0.306 (0.153)    | 1 (1.000) |    25.82 | Annihilation, dobu, kabal, MiQ, Zesta |
|           19 |      810 | 2024-05-18 | The MongolZ | L   | 1.000      | -            | -                | -                | -         |    -0.26 | Annihilation, dobu, kabal, MiQ, Zesta |
|           18 |      841 | 2024-05-17 | The Huns    | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.087 (0.012)    | 1 (1.000) |     2.54 | Annihilation, dobu, kabal, MiQ, Zesta |
|           17 |     2074 | 2024-04-02 | The MongolZ | L   | 0.739      | -            | -                | -                | -         |    -0.17 | Annihilation, dobu, kabal, MiQ, Zesta |
|           16 |     2080 | 2024-04-02 | Lynn Vision | L   | 0.737      | -            | -                | -                | -         |    -4.52 | Annihilation, dobu, kabal, MiQ, Zesta |
|           15 |     2437 | 2024-03-13 | -72c        | W   | 0.605      | -            | -                | -                | 0 (0.000) |     0.85 | dobu, FlyNN, kabal, MiQ, Zesta        |
|           14 |     2448 | 2024-03-13 | ROUX        | W   | 0.604      | -            | -                | -                | 0 (0.000) |     0.84 | dobu, FlyNN, kabal, MiQ, Zesta        |
|           13 |     2769 | 2024-02-27 | FlyQuest    | L   | 0.510      | -            | -                | -                | -         |    -1.16 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           12 |     2793 | 2024-02-27 | TYLOO       | W   | 0.504      | 0.143        | 0.004 (0.000)    | 0.122 (0.009)    | 1 (0.504) |     4.43 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           11 |     2796 | 2024-02-26 | MAG         | W   | 0.502      | 0.143        | -                | 0.096 (0.007)    | 1 (0.502) |     1.40 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           10 |     2811 | 2024-02-25 | FlyQuest    | L   | 0.496      | -            | -                | -                | -         |    -1.10 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            9 |     3313 | 2024-02-02 | GR          | L   | 0.337      | -            | -                | -                | -         |    -8.79 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            8 |     3360 | 2024-01-31 | NKT         | W   | 0.324      | 0.143        | 0.004 (0.000)    | -                | 0 (0.000) |     2.05 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            7 |     3361 | 2024-01-31 | Rare Atom   | W   | 0.324      | 0.143        | 0.010 (0.000)    | 0.093 (0.004)    | -         |     1.82 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            6 |     3485 | 2024-01-23 | The Huns    | L   | 0.271      | -            | -                | -                | -         |    -7.84 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            5 |     3512 | 2024-01-22 | Rare Atom   | W   | 0.265      | 0.143        | 0.010 (0.000)    | 0.093 (0.004)    | -         |     1.47 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            4 |     3538 | 2024-01-21 | The Huns    | W   | 0.259      | 0.143        | -                | 0.087 (0.003)    | -         |     0.66 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            3 |     3546 | 2024-01-21 | The MongolZ | L   | 0.257      | -            | -                | -                | -         |    -0.03 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            2 |     3638 | 2024-01-19 | GR          | W   | 0.245      | 0.143        | 0.011 (0.000)    | 0.148 (0.005)    | -         |     1.38 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            1 |     3647 | 2024-01-19 | Fort Arena  | W   | 0.244      | -            | -                | -                | -         |     0.33 | AccuracyTG, dobu, kabal, MiQ, Zesta   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,000.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
