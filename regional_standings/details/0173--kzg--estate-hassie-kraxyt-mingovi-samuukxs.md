### Roster Details<br />
Team Name: KZG<br />
Roster: Estate, Hassie, KRAXYT, Mingovi, Samuukxs<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [173](../standings_global.md)<br />
Regional Rank: [24]( ../standings_asia.md)<br />
Final Rank Value:  606.0<br />
<br />
Final Rank Value (606.0) = Starting Rank Value (738.2) + Head To Head Adjustments (-132.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.364[<sup>1</sup>](#table2)
- Bounty Collected: 0.226[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.101[<sup>2</sup>](#table1)

The average of these factors is 0.178<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 738.2
- 400 + ( ( 0.178 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 738.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |      227 | 2024-04-26 | Rooster       | L   | 1.000      | -            | -                | -                | -         |    -5.78 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           28 |      231 | 2024-04-25 | MIBR          | L   | 1.000      | -            | -                | -                | -         |    -0.10 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           27 |      492 | 2024-04-17 | Mindfreak     | L   | 1.000      | -            | -                | -                | -         |   -13.44 | Hassie, Jynx, KRAXYT, Mingovi, Samuukxs       |
|           26 |      663 | 2024-04-10 | Canon Event   | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.44 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           25 |      669 | 2024-04-10 | Canon Event   | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.73 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           24 |      890 | 2024-04-03 | Vantage       | L   | 0.978      | -            | -                | -                | -         |   -15.63 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           23 |      891 | 2024-04-03 | Vantage       | L   | 0.977      | -            | -                | -                | -         |   -17.04 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           22 |     1020 | 2024-03-27 | FlyQuest      | L   | 0.931      | -            | -                | -                | -         |    -0.64 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           21 |     1026 | 2024-03-27 | FlyQuest      | L   | 0.931      | -            | -                | -                | -         |    -0.64 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           20 |     1069 | 2024-03-23 | VexX          | W   | 0.904      | 0.315        | 0.009 (0.003)    | 0.252 (0.072)    | 1 (0.904) |    17.00 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           19 |     1070 | 2024-03-23 | DXA           | L   | 0.904      | -            | -                | -                | -         |   -12.79 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           18 |     1290 | 2024-03-13 | RKON          | L   | 0.838      | -            | -                | -                | -         |   -17.76 | bebest, Estate, Hassie, Mingovi, Samuukxs     |
|           17 |     1296 | 2024-03-13 | RKON          | W   | 0.838      | 0.333        | 0.000 (0.000)    | 0.142 (0.040)    | 0 (0.000) |     8.47 | bebest, Estate, Hassie, Mingovi, Samuukxs     |
|           16 |     1464 | 2024-03-06 | VexX          | L   | 0.791      | -            | -                | -                | -         |   -10.48 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|           15 |     1471 | 2024-03-06 | VexX          | L   | 0.791      | -            | -                | -                | -         |   -11.22 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|           14 |     1767 | 2024-02-21 | Mindfreak     | L   | 0.698      | -            | -                | -                | -         |   -13.42 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|           13 |     1774 | 2024-02-21 | Mindfreak     | L   | 0.697      | -            | -                | -                | -         |   -14.21 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|           12 |     1800 | 2024-02-20 | Cringexe      | L   | 0.691      | -            | -                | -                | -         |   -16.55 | dpr, Estate, Hassie, Mingovi, Samuukxs        |
|           11 |     1844 | 2024-02-18 | VexX          | L   | 0.677      | -            | -                | -                | -         |   -11.66 | dpr, Hassie, Lexon, Mingovi, Samuukxs         |
|           10 |     1898 | 2024-02-16 | sunday school | L   | 0.665      | -            | -                | -                | -         |   -11.98 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            9 |     1923 | 2024-02-15 | sunday school | W   | 0.658      | 0.143        | 0.013 (0.001)    | 0.093 (0.009)    | 0 (0.000) |     8.76 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            8 |     1927 | 2024-02-14 | Vantage       | W   | 0.657      | 0.143        | 0.000 (0.000)    | 0.332 (0.031)    | 0 (0.000) |     5.68 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            7 |     1968 | 2024-02-14 | Mindfreak     | W   | 0.650      | 0.143        | 0.000 (0.000)    | 0.307 (0.029)    | 0 (0.000) |     6.23 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            6 |     1993 | 2024-02-13 | RKON          | W   | 0.644      | 0.143        | 0.000 (0.000)    | 0.142 (0.013)    | 0 (0.000) |     5.04 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            5 |     2314 | 2024-01-24 | Vantage       | L   | 0.511      | -            | -                | -                | -         |   -11.68 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            4 |     2686 | 2024-01-15 | Mindfreak     | L   | 0.450      | -            | -                | -                | -         |    -9.07 | constantinos, Hassie, Mingovi, pain, Samuukxs |
|            3 |     3324 | 2023-11-29 | Antic         | W   | 0.137      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.57 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            2 |     3537 | 2023-11-17 | Mindfreak     | L   | 0.058      | -            | -                | -                | -         |    -1.20 | Estate, Hassie, MSK, pain, Samuukxs           |
|            1 |     3682 | 2023-11-12 | Vantage       | W   | 0.024      | 0.313        | 0.000 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     0.23 | Estate, Hassie, MSK, pain, Samuukxs           |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,897.02)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-28 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-03-23 |      0.904 | $992.00        | $897.02         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
