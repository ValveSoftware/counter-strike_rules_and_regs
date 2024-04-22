### Roster Details<br />
Team Name: G3<br />
Roster: calamity, kralz , Laxiee, N20AmZ, obi<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [118](../standings_global.md)<br />
Regional Rank: [11]( ../standings_asia.md)<br />
Final Rank Value:  765.0<br />
<br />
Final Rank Value (765.0) = Starting Rank Value (778.5) + Head To Head Adjustments (-13.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.345[<sup>1</sup>](#table2)
- Bounty Collected: 0.220[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.207[<sup>2</sup>](#table1)

The average of these factors is 0.196<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 778.5
- 400 + ( ( 0.196 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 778.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      170 | 2024-04-17 | Liquid           | L   | 1.000      | -            | -                | -                | -         |    -1.81 | calamity, kralz , Laxiee, N20AmZ, obi     |
|            9 |      174 | 2024-04-17 | NRG              | W   | 1.000      | 0.143        | 0.007 (0.001)    | 0.633 (0.090)    | 0 (0.000) |    20.89 | calamity, kralz , Laxiee, N20AmZ, obi     |
|            8 |      862 | 2024-03-17 | LAG              | L   | 0.963      | -            | -                | -                | -         |    -8.28 | arviast, C4LLM3SU3, calamity, N20AmZ, obi |
|            7 |      863 | 2024-03-17 | Xiaoma           | W   | 0.962      | 0.333        | 0.005 (0.002)    | 0.045 (0.014)    | 1 (0.962) |     9.13 | arviast, C4LLM3SU3, calamity, N20AmZ, obi |
|            6 |      870 | 2024-03-17 | Snakes Den       | W   | 0.960      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.960) |     3.78 | arviast, C4LLM3SU3, calamity, N20AmZ, obi |
|            5 |     1396 | 2024-02-24 | Wildcard         | L   | 0.814      | -            | -                | -                | -         |    -8.24 | C4LLM3SU3, calamity, Laxiee, N20AmZ, obi  |
|            4 |     1507 | 2024-02-19 | Mythic           | L   | 0.783      | -            | -                | -                | -         |   -11.70 | C4LLM3SU3, calamity, Laxiee, N20AmZ, obi  |
|            3 |     1509 | 2024-02-19 | Party Astronauts | L   | 0.781      | -            | -                | -                | -         |   -11.57 | C4LLM3SU3, calamity, Laxiee, N20AmZ, obi  |
|            2 |     1576 | 2024-02-16 | Rocket           | L   | 0.762      | -            | -                | -                | -         |   -14.25 | C4LLM3SU3, calamity, N20AmZ, obi, tmk     |
|            1 |     1606 | 2024-02-15 | Limitless        | W   | 0.755      | 0.143        | 0.001 (0.000)    | 0.201 (0.022)    | 0 (0.000) |     8.46 | C4LLM3SU3, calamity, N20AmZ, obi, tmk     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,407.08)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
