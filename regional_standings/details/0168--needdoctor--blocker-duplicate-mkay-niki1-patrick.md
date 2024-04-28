### Roster Details<br />
Team Name: NeedDOCTOR<br />
Roster: blocker, Duplicate, mkay, niki1, Patrick<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [168](../standings_global.md)<br />
Regional Rank: [111]( ../standings_europe.md)<br />
Final Rank Value:  675.7<br />
<br />
Final Rank Value (675.7) = Starting Rank Value (662.2) + Head To Head Adjustments (13.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.271[<sup>1</sup>](#table2)
- Bounty Collected: 0.235[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.128<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 662.2
- 400 + ( ( 0.128 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 662.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     2064 | 2022-10-18 | Monte         | L   | 0.420      | -            | -                | -                | -         |    -2.67 | blocker, Duplicate, mkay, niki1, Patrick        |
|           13 |     2102 | 2022-10-16 | OneTap        | L   | 0.407      | -            | -                | -                | -         |    -5.24 | blocker, Duplicate, h4rn, niki1, Patrick        |
|           12 |     2124 | 2022-10-16 | X             | W   | 0.405      | 0.435        | 0.000 (0.000)    | 0.034 (0.006)    | 0 (0.000) |     3.47 | blocker, Duplicate, h4rn, niki1, Patrick        |
|           11 |     2133 | 2022-10-15 | HAVU          | L   | 0.400      | -            | -                | -                | -         |    -2.34 | blocker, doublemagic, Duplicate, niki1, Patrick |
|           10 |     2144 | 2022-10-15 | allStars      | W   | 0.399      | 0.331        | 0.001 (0.000)    | 0.029 (0.004)    | 0 (0.000) |     5.29 | blocker, bubble, Duplicate, niki1, Patrick      |
|            9 |     2268 | 2022-10-12 | NAVI Junior   | W   | 0.377      | 0.435        | 0.022 (0.004)    | 0.108 (0.018)    | 0 (0.000) |     7.41 | blocker, Duplicate, mkay, niki1, Patrick        |
|            8 |     2274 | 2022-10-11 | Zero Tenacity | W   | 0.373      | 0.331        | 0.011 (0.001)    | 0.210 (0.026)    | 0 (0.000) |     7.63 | blocker, Duplicate, mkay, niki1, Patrick        |
|            7 |     2295 | 2022-10-10 | Tricked       | L   | 0.366      | -            | -                | -                | -         |    -1.58 | blocker, Duplicate, mkay, niki1, Patrick        |
|            6 |     2441 | 2022-10-02 | Illyrians     | W   | 0.313      | 0.143        | 0.000 (0.000)    | 0.025 (0.001)    | 0 (0.000) |     1.92 | blocker, Duplicate, mkay, niki1, Patrick        |
|            5 |     2530 | 2022-09-29 | Zero Tenacity | W   | 0.292      | 0.143        | 0.011 (0.000)    | 0.210 (0.009)    | 0 (0.000) |     6.08 | blocker, Duplicate, mkay, niki1, Patrick        |
|            4 |     2556 | 2022-09-28 | Kyoto         | W   | 0.285      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.74 | blocker, Duplicate, mkay, niki1, Patrick        |
|            3 |     2708 | 2022-09-23 | ARCRED        | L   | 0.253      | -            | -                | -                | -         |    -3.30 | blocker, Duplicate, mkay, niki1, Patrick        |
|            2 |     2785 | 2022-09-21 | Anonymo       | L   | 0.239      | -            | -                | -                | -         |    -4.58 | blocker, Duplicate, mkay, niki1, Patrick        |
|            1 |     3320 | 2022-09-03 | 500           | L   | 0.120      | -            | -                | -                | -         |    -0.34 | blocker, Duplicate, mkay, niki1, Patrick        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($972.06)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
