### Roster Details<br />
Team Name: Spirit fe<br />
Roster: AverOna, Jammie, Rony4ka, tenweri, uulis<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [175](../standings_global.md)<br />
Regional Rank: [111]( ../standings_europe.md)<br />
Final Rank Value:  597.1<br />
<br />
Final Rank Value (597.1) = Starting Rank Value (670.1) + Head To Head Adjustments (-73.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.333[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.142<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 670.1
- 400 + ( ( 0.142 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 670.1


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
|           13 |      195 | 2024-04-27 | Pigeons           | L   | 1.000      | -            | -                | -                | -         |    -4.62 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|           12 |      384 | 2024-04-19 | Let Her Cook      | L   | 1.000      | -            | -                | -                | -         |   -13.37 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|           11 |      550 | 2024-04-14 | ex-FORZE Ladies   | L   | 1.000      | -            | -                | -                | -         |   -13.95 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|           10 |      606 | 2024-04-11 | NAVI Javelins     | L   | 1.000      | -            | -                | -                | -         |    -7.89 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            9 |      703 | 2024-04-09 | Let Her Cook      | L   | 1.000      | -            | -                | -                | -         |   -14.19 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            8 |      784 | 2024-04-06 | BIG EQUIPA        | L   | 0.998      | -            | -                | -                | -         |   -12.67 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            7 |      829 | 2024-04-04 | NAVI Javelins     | L   | 0.987      | -            | -                | -                | -         |    -8.62 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            6 |     1008 | 2024-03-27 | Fearless Cheetahs | L   | 0.934      | -            | -                | -                | -         |   -11.12 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            5 |     1122 | 2024-03-20 | Crescent fe       | W   | 0.887      | 0.331        | 0.008 (0.002)    | 0.072 (0.021)    | 0 (0.000) |    12.77 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            4 |     1420 | 2024-03-07 | 1WIN Gang         | W   | 0.800      | 0.331        | 0.006 (0.002)    | 0.044 (0.012)    | 0 (0.000) |    11.06 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            3 |     1703 | 2024-02-24 | ENCE Athena       | L   | 0.719      | -            | -                | -                | -         |   -10.86 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            2 |     1834 | 2024-02-18 | Astralis W        | W   | 0.680      | 0.143        | 0.005 (0.001)    | 0.075 (0.007)    | 0 (0.000) |     9.95 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            1 |     1943 | 2024-02-14 | GUILD fe          | L   | 0.654      | -            | -                | -                | -         |    -9.50 | AverOna, Jammie, Rony4ka, tenweri, uulis |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,607.00)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-27 |      1.000 | $107.00        | $107.00         |
| 2024-04-21 |      1.000 | $1,250.00      | $1,250.00       |
| 2024-04-14 |      1.000 | $250.00        | $250.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
