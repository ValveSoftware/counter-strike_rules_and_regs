### Roster Details<br />
Team Name: KZG<br />
Roster: Estate, Hassie, JiNxZiE, Mingovi, Samuukxs<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [171](../standings_global.md)<br />
Regional Rank: [18]( ../standings_asia.md)<br />
Final Rank Value:  649.7<br />
<br />
Final Rank Value (649.7) = Starting Rank Value (728.1) + Head To Head Adjustments (-78.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.332[<sup>1</sup>](#table2)
- Bounty Collected: 0.233[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.072[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 728.1
- 400 + ( ( 0.165 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 728.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |      672 | 2024-05-22 | Bad News Kangaroos | L   | 1.000      | -            | -                | -                | -         |    -6.00 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs    |
|           31 |      677 | 2024-05-22 | Bad News Kangaroos | L   | 1.000      | -            | -                | -                | -         |    -6.34 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs    |
|           30 |      931 | 2024-05-15 | DXA                | W   | 1.000      | 0.333        | 0.005 (0.002)    | 0.209 (0.070)    | 0 (0.000) |    14.27 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs    |
|           29 |      935 | 2024-05-15 | DXA                | W   | 1.000      | 0.333        | 0.005 (0.002)    | 0.209 (0.070)    | 0 (0.000) |    15.58 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs    |
|           28 |     1124 | 2024-05-08 | Rooster            | L   | 0.978      | -            | -                | -                | -         |    -6.38 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs    |
|           27 |     1126 | 2024-05-08 | Rooster            | L   | 0.977      | -            | -                | -                | -         |    -6.75 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs    |
|           26 |     1378 | 2024-04-26 | Rooster            | L   | 0.898      | -            | -                | -                | -         |    -6.57 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           25 |     1382 | 2024-04-25 | MIBR               | L   | 0.896      | -            | -                | -                | -         |    -0.14 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           24 |     1643 | 2024-04-17 | Mindfreak          | L   | 0.838      | -            | -                | -                | -         |    -9.49 | Hassie, Jynx, KRAXYT, Mingovi, Samuukxs       |
|           23 |     1814 | 2024-04-10 | Canon Event        | W   | 0.791      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.17 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           22 |     1820 | 2024-04-10 | Canon Event        | W   | 0.791      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.50 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           21 |     2041 | 2024-04-03 | Vantage            | L   | 0.744      | -            | -                | -                | -         |   -10.74 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           20 |     2042 | 2024-04-03 | Vantage            | L   | 0.744      | -            | -                | -                | -         |   -11.47 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           19 |     2171 | 2024-03-27 | FlyQuest           | L   | 0.698      | -            | -                | -                | -         |    -0.37 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           18 |     2177 | 2024-03-27 | FlyQuest           | L   | 0.697      | -            | -                | -                | -         |    -0.37 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           17 |     2220 | 2024-03-23 | Arcade             | W   | 0.671      | 0.315        | 0.005 (0.001)    | 0.189 (0.040)    | 1 (0.671) |    11.71 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           16 |     2221 | 2024-03-23 | DXA                | L   | 0.670      | -            | -                | -                | -         |   -10.13 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           15 |     2441 | 2024-03-13 | RKON               | L   | 0.604      | -            | -                | -                | -         |   -13.36 | bebest, Estate, Hassie, Mingovi, Samuukxs     |
|           14 |     2447 | 2024-03-13 | RKON               | W   | 0.604      | 0.333        | 0.000 (0.000)    | 0.088 (0.018)    | 0 (0.000) |     5.68 | bebest, Estate, Hassie, Mingovi, Samuukxs     |
|           13 |     2615 | 2024-03-06 | Arcade             | L   | 0.558      | -            | -                | -                | -         |    -8.22 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|           12 |     2622 | 2024-03-06 | Arcade             | L   | 0.558      | -            | -                | -                | -         |    -8.63 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|           11 |     2918 | 2024-02-21 | Mindfreak          | L   | 0.465      | -            | -                | -                | -         |    -6.77 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|           10 |     2925 | 2024-02-21 | Mindfreak          | L   | 0.464      | -            | -                | -                | -         |    -7.05 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            9 |     2951 | 2024-02-20 | Cringexe           | L   | 0.457      | -            | -                | -                | -         |   -11.13 | dpr, Estate, Hassie, Mingovi, Samuukxs        |
|            8 |     2995 | 2024-02-18 | Arcade             | L   | 0.444      | -            | -                | -                | -         |    -7.81 | dpr, Hassie, Lexon, Mingovi, Samuukxs         |
|            7 |     3049 | 2024-02-16 | sunday school      | L   | 0.431      | -            | -                | -                | -         |    -8.14 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            6 |     3074 | 2024-02-15 | sunday school      | W   | 0.425      | 0.143        | 0.006 (0.000)    | 0.050 (0.003)    | 0 (0.000) |     5.38 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            5 |     3078 | 2024-02-14 | Vantage            | W   | 0.423      | 0.143        | 0.000 (0.000)    | 0.016 (0.001)    | 0 (0.000) |     2.78 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            4 |     3119 | 2024-02-14 | Mindfreak          | W   | 0.417      | 0.143        | 0.005 (0.000)    | 0.260 (0.016)    | 0 (0.000) |     6.53 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            3 |     3144 | 2024-02-13 | RKON               | W   | 0.411      | 0.143        | 0.000 (0.000)    | 0.088 (0.005)    | 0 (0.000) |     3.13 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            2 |     3465 | 2024-01-24 | Vantage            | L   | 0.277      | -            | -                | -                | -         |    -5.04 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            1 |     3837 | 2024-01-15 | Mindfreak          | L   | 0.217      | -            | -                | -                | -         |    -5.22 | constantinos, Hassie, Mingovi, pain, Samuukxs |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,937.57)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $450.00        | $450.00         |
| 2024-04-28 |      0.911 | $2,000.00      | $1,821.95       |
| 2024-03-23 |      0.671 | $992.00        | $665.62         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
