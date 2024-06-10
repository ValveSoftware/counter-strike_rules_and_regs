### Roster Details<br />
Team Name: RKON<br />
Roster: alecc, Crunchy, doom, Jynx, TRIPLUS<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [191](../standings_global.md)<br />
Regional Rank: [24]( ../standings_asia.md)<br />
Final Rank Value:  545.1<br />
<br />
Final Rank Value (545.1) = Starting Rank Value (518.7) + Head To Head Adjustments (26.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.226[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.060<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 518.7
- 400 + ( ( 0.060 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 518.7


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
|           14 |     2168 | 2024-03-27 | DXA         | W   | 0.698      | 0.333        | 0.005 (0.001)    | 0.209 (0.049)    | 0 (0.000) |    15.33 | alecc, Crunchy, doom, Jynx, TRIPLUS    |
|           13 |     2173 | 2024-03-27 | DXA         | L   | 0.698      | -            | -                | -                | -         |    -6.60 | alecc, Crunchy, doom, Jynx, TRIPLUS    |
|           12 |     2441 | 2024-03-13 | KZG         | W   | 0.604      | 0.333        | 0.010 (0.002)    | 0.168 (0.034)    | 0 (0.000) |    13.36 | alecc, Crunchy, Jynx, Poccket, TRIPLUS |
|           11 |     2447 | 2024-03-13 | KZG         | L   | 0.604      | -            | -                | -                | -         |    -5.68 | alecc, Crunchy, Jynx, Poccket, TRIPLUS |
|           10 |     2788 | 2024-02-27 | Vantage     | L   | 0.504      | -            | -                | -                | -         |    -5.18 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            9 |     2791 | 2024-02-27 | Vantage     | W   | 0.504      | 0.333        | 0.003 (0.000)    | 0.201 (0.034)    | 0 (0.000) |    10.97 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            8 |     2920 | 2024-02-21 | Canon Event | W   | 0.464      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.09 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            7 |     2924 | 2024-02-21 | Canon Event | W   | 0.464      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.39 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            6 |     2952 | 2024-02-20 | Mindfreak   | L   | 0.457      | -            | -                | -                | -         |    -3.36 | alecc, Bumb1e, Crunchy, Jynx, TRIPLUS  |
|            5 |     3144 | 2024-02-13 | KZG         | L   | 0.411      | -            | -                | -                | -         |    -3.13 | alecc, Bumb1e, Jynx, PixeL, TRIPLUS    |
|            4 |     3595 | 2024-01-19 | DXA         | L   | 0.250      | -            | -                | -                | -         |    -5.21 | alecc, Crunchy, dingus, Jynx, TRIPLUS  |
|            3 |     3659 | 2024-01-18 | FlyQuest    | L   | 0.243      | -            | -                | -                | -         |    -0.05 | alecc, Crunchy, dingus, Jynx, TRIPLUS  |
|            2 |     3897 | 2024-01-13 | Mindfreak   | L   | 0.204      | -            | -                | -                | -         |    -3.29 | alecc, Crunchy, dingus, Jynx, TRIPLUS  |
|            1 |     3898 | 2024-01-13 | DXA         | W   | 0.204      | 0.143        | 0.005 (0.000)    | 0.209 (0.006)    | 0 (0.000) |     4.78 | alecc, Crunchy, dingus, Jynx, TRIPLUS  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
