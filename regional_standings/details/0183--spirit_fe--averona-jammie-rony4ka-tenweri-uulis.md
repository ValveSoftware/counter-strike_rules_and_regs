### Roster Details<br />
Team Name: Spirit fe<br />
Roster: AverOna, Jammie, Rony4ka, tenweri, uulis<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [183](../standings_global.md)<br />
Regional Rank: [117]( ../standings_europe.md)<br />
Final Rank Value:  567.4<br />
<br />
Final Rank Value (567.4) = Starting Rank Value (654.2) + Head To Head Adjustments (-86.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.303[<sup>1</sup>](#table2)
- Bounty Collected: 0.217[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.131<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 654.2
- 400 + ( ( 0.131 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 654.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      302 | 2024-05-18 | NAVI Javelins     | L   | 1.000      | -            | -                | -                | -         |    -6.70 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|           13 |      846 | 2024-04-27 | Pigeons           | L   | 0.984      | -            | -                | -                | -         |    -5.96 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|           12 |     1035 | 2024-04-19 | Let Her Cook      | L   | 0.933      | -            | -                | -                | -         |   -15.91 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|           11 |     1201 | 2024-04-14 | ex-FORZE Ladies   | L   | 0.898      | -            | -                | -                | -         |   -12.46 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|           10 |     1257 | 2024-04-11 | NAVI Javelins     | L   | 0.878      | -            | -                | -                | -         |    -8.30 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            9 |     1354 | 2024-04-09 | Let Her Cook      | L   | 0.865      | -            | -                | -                | -         |   -15.91 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            8 |     1435 | 2024-04-06 | BIG EQUIPA        | L   | 0.844      | -            | -                | -                | -         |   -11.45 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            7 |     1480 | 2024-04-04 | NAVI Javelins     | L   | 0.833      | -            | -                | -                | -         |    -8.82 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            6 |     1659 | 2024-03-27 | Fearless Cheetahs | L   | 0.780      | -            | -                | -                | -         |   -11.04 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            5 |     1773 | 2024-03-20 | Crescent fe       | W   | 0.733      | 0.331        | 0.007 (0.002)    | 0.096 (0.023)    | 0 (0.000) |    11.19 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            4 |     2071 | 2024-03-07 | 1WIN Gang         | W   | 0.646      | 0.331        | 0.003 (0.001)    | 0.036 (0.008)    | 0 (0.000) |     7.01 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            3 |     2354 | 2024-02-24 | ENCE Athena       | L   | 0.565      | -            | -                | -                | -         |    -8.71 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            2 |     2485 | 2024-02-18 | Astralis W        | W   | 0.526      | 0.143        | 0.003 (0.000)    | 0.058 (0.004)    | 0 (0.000) |     7.71 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            1 |     2594 | 2024-02-14 | ex-GUILD fe       | L   | 0.500      | -            | -                | -                | -         |    -7.50 | AverOna, Jammie, Rony4ka, tenweri, uulis |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,512.46)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-27 |      0.985 | $107.00        | $105.39         |
| 2024-04-21 |      0.946 | $1,250.00      | $1,182.48       |
| 2024-04-14 |      0.898 | $250.00        | $224.59         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
