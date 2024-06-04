### Roster Details<br />
Team Name: RKON<br />
Roster: alecc, Crunchy, doom, Jynx, TRIPLUS<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [187](../standings_global.md)<br />
Regional Rank: [26]( ../standings_asia.md)<br />
Final Rank Value:  539.2<br />
<br />
Final Rank Value (539.2) = Starting Rank Value (518.7) + Head To Head Adjustments (20.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.228[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.061<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 518.7
- 400 + ( ( 0.061 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 518.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     1668 | 2024-03-27 | DXA         | W   | 0.777      | 0.333        | 0.005 (0.001)    | 0.244 (0.063)    | 0 (0.000) |    16.90 | alecc, Crunchy, doom, Jynx, TRIPLUS    |
|           13 |     1673 | 2024-03-27 | DXA         | L   | 0.777      | -            | -                | -                | -         |    -7.46 | alecc, Crunchy, doom, Jynx, TRIPLUS    |
|           12 |     1941 | 2024-03-13 | KZG         | W   | 0.684      | 0.333        | 0.011 (0.002)    | 0.199 (0.045)    | 0 (0.000) |    14.87 | alecc, Crunchy, Jynx, Poccket, TRIPLUS |
|           11 |     1947 | 2024-03-13 | KZG         | L   | 0.683      | -            | -                | -                | -         |    -6.63 | alecc, Crunchy, Jynx, Poccket, TRIPLUS |
|           10 |     2288 | 2024-02-27 | Vantage     | L   | 0.583      | -            | -                | -                | -         |    -8.63 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            9 |     2291 | 2024-02-27 | Vantage     | W   | 0.583      | 0.333        | 0.000 (0.000)    | 0.247 (0.048)    | 0 (0.000) |     9.97 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            8 |     2420 | 2024-02-21 | Canon Event | W   | 0.544      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.27 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            7 |     2424 | 2024-02-21 | Canon Event | W   | 0.543      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.67 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            6 |     2452 | 2024-02-20 | Mindfreak   | L   | 0.536      | -            | -                | -                | -         |    -6.85 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            5 |     2644 | 2024-02-13 | KZG         | L   | 0.490      | -            | -                | -                | -         |    -3.74 | alecc, Bumb1e, Jynx, PixeL, TRIPLUS    |
|            4 |     3095 | 2024-01-19 | DXA         | L   | 0.329      | -            | -                | -                | -         |    -6.85 | alecc, Crunchy, dingus, Jynx, TRIPLUS  |
|            3 |     3159 | 2024-01-18 | FlyQuest    | L   | 0.322      | -            | -                | -                | -         |    -0.07 | alecc, Crunchy, dingus, Jynx, TRIPLUS  |
|            2 |     3397 | 2024-01-13 | Mindfreak   | L   | 0.283      | -            | -                | -                | -         |    -4.57 | alecc, Crunchy, dingus, Jynx, TRIPLUS  |
|            1 |     3398 | 2024-01-13 | DXA         | W   | 0.283      | 0.143        | 0.005 (0.000)    | 0.244 (0.010)    | 0 (0.000) |     6.65 | alecc, Crunchy, dingus, Jynx, TRIPLUS  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
