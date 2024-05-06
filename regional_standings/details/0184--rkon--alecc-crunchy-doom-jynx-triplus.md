### Roster Details<br />
Team Name: RKON<br />
Roster: alecc, Crunchy, doom, Jynx, TRIPLUS<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [184](../standings_global.md)<br />
Regional Rank: [26]( ../standings_asia.md)<br />
Final Rank Value:  547.1<br />
<br />
Final Rank Value (547.1) = Starting Rank Value (527.9) + Head To Head Adjustments (19.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.245[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.067<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 527.9
- 400 + ( ( 0.067 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 527.9


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
|           14 |     1017 | 2024-03-27 | DXA         | W   | 0.931      | 0.333        | 0.009 (0.003)    | 0.239 (0.074)    | 0 (0.000) |    20.12 | alecc, Crunchy, doom, Jynx, TRIPLUS    |
|           13 |     1022 | 2024-03-27 | DXA         | L   | 0.931      | -            | -                | -                | -         |    -8.89 | alecc, Crunchy, doom, Jynx, TRIPLUS    |
|           12 |     1290 | 2024-03-13 | KZG         | W   | 0.838      | 0.333        | 0.018 (0.005)    | 0.216 (0.060)    | 0 (0.000) |    17.76 | alecc, Crunchy, Jynx, Poccket, TRIPLUS |
|           11 |     1296 | 2024-03-13 | KZG         | L   | 0.838      | -            | -                | -                | -         |    -8.47 | alecc, Crunchy, Jynx, Poccket, TRIPLUS |
|           10 |     1637 | 2024-02-27 | Vantage     | L   | 0.738      | -            | -                | -                | -         |   -10.36 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            9 |     1640 | 2024-02-27 | Vantage     | W   | 0.737      | 0.333        | 0.000 (0.000)    | 0.332 (0.082)    | 0 (0.000) |    13.16 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            8 |     1769 | 2024-02-21 | Canon Event | W   | 0.698      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.18 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            7 |     1773 | 2024-02-21 | Canon Event | W   | 0.697      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.58 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            6 |     1801 | 2024-02-20 | Mindfreak   | L   | 0.690      | -            | -                | -                | -         |    -8.60 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            5 |     1993 | 2024-02-13 | KZG         | L   | 0.644      | -            | -                | -                | -         |    -5.04 | alecc, Bumb1e, Jynx, PixeL, TRIPLUS    |
|            4 |     2444 | 2024-01-19 | DXA         | L   | 0.483      | -            | -                | -                | -         |   -10.23 | alecc, Crunchy, dingus, Jynx, TRIPLUS  |
|            3 |     2508 | 2024-01-18 | FlyQuest    | L   | 0.476      | -            | -                | -                | -         |    -0.16 | alecc, Crunchy, dingus, Jynx, TRIPLUS  |
|            2 |     2746 | 2024-01-13 | Mindfreak   | L   | 0.437      | -            | -                | -                | -         |    -5.18 | alecc, Crunchy, dingus, Jynx, TRIPLUS  |
|            1 |     2747 | 2024-01-13 | DXA         | W   | 0.437      | 0.143        | 0.009 (0.001)    | 0.239 (0.015)    | 0 (0.000) |    10.30 | alecc, Crunchy, dingus, Jynx, TRIPLUS  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
