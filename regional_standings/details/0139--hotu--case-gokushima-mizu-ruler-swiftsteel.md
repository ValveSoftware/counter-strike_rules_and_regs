### Roster Details<br />
Team Name: HOTU<br />
Roster: casE, gokushima, mizu, Ruler, swiftsteel<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [139](../standings_global.md)<br />
Regional Rank: [95]( ../standings_europe.md)<br />
Final Rank Value:  733.3<br />
<br />
Final Rank Value (733.3) = Starting Rank Value (736.6) + Head To Head Adjustments (-3.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.290[<sup>1</sup>](#table2)
- Bounty Collected: 0.256[<sup>2</sup>](#table1)
- Opponent Network: 0.038[<sup>2</sup>](#table1)
- LAN Wins: 0.074[<sup>2</sup>](#table1)

The average of these factors is 0.164<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 736.6
- 400 + ( ( 0.164 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 736.6


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
|           15 |     1260 | 2022-12-02 | Boston crab    | L   | 0.718      | -            | -                | -                | -         |    -7.26 | casE, gokushima, mizu, Ruler, swiftsteel |
|           14 |     1276 | 2022-12-01 | POLET          | W   | 0.714      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.714) |     2.90 | casE, gokushima, mizu, Ruler, swiftsteel |
|           13 |     1289 | 2022-12-01 | Boston crab    | L   | 0.711      | -            | -                | -                | -         |    -7.18 | casE, gokushima, mizu, Ruler, swiftsteel |
|           12 |     1390 | 2022-11-27 | 9 Pandas       | L   | 0.686      | -            | -                | -                | -         |   -10.18 | casE, gokushima, mizu, Ruler, swiftsteel |
|           11 |     1414 | 2022-11-26 | Monte          | L   | 0.680      | -            | -                | -                | -         |    -5.40 | casE, gokushima, mizu, Ruler, swiftsteel |
|           10 |     1501 | 2022-11-23 | Tricked        | W   | 0.658      | 0.303        | 0.034 (0.007)    | 0.954 (0.190)    | 0 (0.000) |    16.15 | casE, gokushima, mizu, Ruler, swiftsteel |
|            9 |     2445 | 2022-10-02 | ex-TAG         | L   | 0.313      | -            | -                | -                | -         |    -5.12 | casE, gokushima, mizu, Ruler, swiftsteel |
|            8 |     2455 | 2022-10-02 | Spirit Academy | W   | 0.311      | 0.303        | 0.032 (0.003)    | 0.447 (0.042)    | 0 (0.000) |     6.34 | casE, gokushima, mizu, Ruler, swiftsteel |
|            7 |     2501 | 2022-09-30 | Iron Branch    | L   | 0.298      | -            | -                | -                | -         |    -5.40 | casE, gokushima, mizu, Ruler, swiftsteel |
|            6 |     2593 | 2022-09-26 | EC Brugge      | W   | 0.273      | 0.371        | 0.007 (0.001)    | 0.507 (0.051)    | 0 (0.000) |     5.10 | casE, gokushima, mizu, Ruler, swiftsteel |
|            5 |     2614 | 2022-09-25 | Coalesce       | L   | 0.267      | -            | -                | -                | -         |    -4.44 | casE, gokushima, mizu, Ruler, swiftsteel |
|            4 |     2626 | 2022-09-25 | JANO           | W   | 0.266      | 0.371        | 0.008 (0.001)    | 0.307 (0.030)    | 0 (0.000) |     4.08 | casE, gokushima, mizu, Ruler, swiftsteel |
|            3 |     2701 | 2022-09-23 | Zero Tenacity  | W   | 0.253      | 0.303        | 0.011 (0.001)    | 0.210 (0.016)    | 0 (0.000) |     4.44 | casE, gokushima, mizu, Ruler, swiftsteel |
|            2 |     2744 | 2022-09-22 | Nexus          | W   | 0.247      | 0.371        | 0.001 (0.000)    | 0.542 (0.050)    | 0 (0.000) |     4.59 | casE, gokushima, mizu, Ruler, swiftsteel |
|            1 |     2783 | 2022-09-21 | Apeks          | L   | 0.240      | -            | -                | -                | -         |    -1.88 | casE, gokushima, mizu, Ruler, swiftsteel |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,688.43)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-11-27 |      0.687 | $800.00        | $549.23         |
| 2022-10-09 |      0.359 | $750.00        | $269.03         |
| 2022-10-02 |      0.313 | $1,500.00      | $469.51         |
| 2022-09-25 |      0.267 | $1,500.00      | $400.67         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
