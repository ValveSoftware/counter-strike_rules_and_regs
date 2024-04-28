### Roster Details<br />
Team Name: Eternal Fire Academy<br />
Roster: cyber, EMSTAR, jottAAA, TR0JN, Wicadia<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [205](../standings_global.md)<br />
Regional Rank: [125]( ../standings_europe.md)<br />
Final Rank Value:  569.4<br />
<br />
Final Rank Value (569.4) = Starting Rank Value (541.0) + Head To Head Adjustments (28.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.253[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.069<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 541.0
- 400 + ( ( 0.069 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 541.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |       11 | 2023-02-12 | Anonymo        | L   | 1.000      | -            | -                | -                | -         |   -13.07 | cyber, EMSTAR, jottAAA, TR0JN, Wicadia |
|           11 |      176 | 2023-02-04 | MOUZ NXT       | L   | 1.000      | -            | -                | -                | -         |    -5.64 | cyber, EMSTAR, jottAAA, TR0JN, Wicadia |
|           10 |      276 | 2023-01-31 | UNGENTIUM      | W   | 1.000      | 0.143        | 0.015 (0.002)    | 0.474 (0.068)    | 0 (0.000) |    24.09 | cyber, EMSTAR, jottAAA, TR0JN, Wicadia |
|            9 |     1016 | 2022-12-09 | LDLC           | L   | 0.766      | -            | -                | -                | -         |    -6.48 | cyber, EMSTAR, jottAAA, TR0JN, Wicadia |
|            8 |     1039 | 2022-12-08 | Spirit Academy | W   | 0.760      | 0.371        | 0.032 (0.009)    | 0.447 (0.126)    | 0 (0.000) |    20.89 | cyber, EMSTAR, jottAAA, TR0JN, Wicadia |
|            7 |     1110 | 2022-12-06 | Apeks          | L   | 0.747      | -            | -                | -                | -         |    -2.27 | cyber, EMSTAR, jottAAA, TR0JN, Wicadia |
|            6 |     1724 | 2022-11-05 | MOUZ NXT       | L   | 0.539      | -            | -                | -                | -         |    -3.15 | Cizzx, cyber, EMSTAR, jottAAA, Wicadia |
|            5 |     1730 | 2022-11-04 | Flames Ascent  | W   | 0.533      | 0.320        | 0.001 (0.000)    | 0.120 (0.020)    | 0 (0.000) |    10.20 | Cizzx, cyber, EMSTAR, jottAAA, Wicadia |
|            4 |     1733 | 2022-11-03 | ENCE Academy   | L   | 0.527      | -            | -                | -                | -         |    -3.88 | Cizzx, cyber, EMSTAR, jottAAA, Wicadia |
|            3 |     1759 | 2022-11-01 | Atlantic       | W   | 0.513      | 0.320        | 0.001 (0.000)    | 0.047 (0.008)    | 0 (0.000) |    11.04 | Cizzx, cyber, EMSTAR, jottAAA, Wicadia |
|            2 |     2999 | 2022-09-14 | los kogutos    | L   | 0.192      | -            | -                | -                | -         |    -1.21 | Cizzx, cyber, EMSTAR, jottAAA, zeK     |
|            1 |     3031 | 2022-09-13 | ex-TITANS      | L   | 0.186      | -            | -                | -                | -         |    -2.16 | Cizzx, cyber, EMSTAR, jottAAA, zeK     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
