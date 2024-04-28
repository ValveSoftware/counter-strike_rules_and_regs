### Roster Details<br />
Team Name: Take Charge<br />
Roster: catez, Hunter, reham, Sandman, Talen<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [223](../standings_global.md)<br />
Regional Rank: [74]( ../standings_americas.md)<br />
Final Rank Value:  479.8<br />
<br />
Final Rank Value (479.8) = Starting Rank Value (513.2) + Head To Head Adjustments (-33.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.199[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.017[<sup>2</sup>](#table1)

The average of these factors is 0.055<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 513.2
- 400 + ( ( 0.055 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 513.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      181 | 2023-02-03 | Cartel terraza       | L   | 1.000      | -            | -                | -                | -         |   -10.38 | catez, Hunter, reham, Sandman, Talen  |
|           13 |      253 | 2023-01-31 | DNA                  | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    11.20 | catez, Hunter, reham, Sandman, Talen  |
|           12 |      328 | 2023-01-28 | Limitless            | L   | 1.000      | -            | -                | -                | -         |    -6.38 | catez, Hunter, reham, Sandman, Talen  |
|           11 |      429 | 2023-01-25 | Davenport University | L   | 1.000      | -            | -                | -                | -         |    -5.83 | catez, Hunter, reham, Sandman, Talen  |
|           10 |      963 | 2022-12-10 | EX CINERE            | L   | 0.776      | -            | -                | -                | -         |    -7.45 | Drop, Hunter, reham, Sandman, Talen   |
|            9 |     1029 | 2022-12-08 | 1 JIN                | L   | 0.762      | -            | -                | -                | -         |    -6.30 | Drop, Hunter, reham, Sandman, Talen   |
|            8 |     1206 | 2022-12-03 | Eclipse              | L   | 0.728      | -            | -                | -                | -         |   -14.64 | catez, Hunter, reham, Sandman, Talen  |
|            7 |     1239 | 2022-12-02 | Red Wolves           | L   | 0.722      | -            | -                | -                | -         |    -7.14 | catez, Hunter, reham, Sandman, Talen  |
|            6 |     1298 | 2022-11-30 | Take Flyte           | W   | 0.708      | 0.384        | 0.003 (0.001)    | 0.225 (0.061)    | 0 (0.000) |    16.17 | catez, Hunter, reham, Sandman, Talen  |
|            5 |     1371 | 2022-11-27 | DNA                  | W   | 0.688      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.41 | catez, Hunter, reham, Sandman, Talen  |
|            4 |     1404 | 2022-11-26 | Villainous           | L   | 0.682      | -            | -                | -                | -         |    -9.87 | Drop, Hunter, reham, Sandman, Talen   |
|            3 |     3168 | 2022-09-09 | X13                  | L   | 0.160      | -            | -                | -                | -         |    -1.54 | catez, Hunter, Jersey, reham, Sandman |
|            2 |     3173 | 2022-09-09 | DU Black             | W   | 0.159      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.159) |     1.74 | arcade, BeBO, N07, RiFT, tactile      |
|            1 |     3209 | 2022-09-08 | Apeks                | L   | 0.154      | -            | -                | -                | -         |    -0.41 | catez, Hunter, Jersey, reham, Sandman |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
