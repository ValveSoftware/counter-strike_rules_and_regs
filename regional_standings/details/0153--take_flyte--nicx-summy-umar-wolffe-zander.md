### Roster Details<br />
Team Name: Take Flyte<br />
Roster: nicx, SummY, Umar, Wolffe, zander<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [153](../standings_global.md)<br />
Regional Rank: [43]( ../standings_americas.md)<br />
Final Rank Value:  706.8<br />
<br />
Final Rank Value (706.8) = Starting Rank Value (685.4) + Head To Head Adjustments (21.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.288[<sup>1</sup>](#table2)
- Bounty Collected: 0.239[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.139<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 685.4
- 400 + ( ( 0.139 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 685.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |       42 | 2023-02-10 | paiN                 | L   | 1.000      | -            | -                | -                | -         |    -3.63 | nicx, SummY, Umar, Wolffe, zander |
|            9 |       75 | 2023-02-08 | REIGN                | W   | 1.000      | 0.384        | 0.003 (0.001)    | 0.153 (0.059)    | 0 (0.000) |    12.29 | nicx, SummY, Umar, Wolffe, zander |
|            8 |      282 | 2023-01-30 | Snakes Den           | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.124 (0.048)    | 0 (0.000) |     9.48 | nicx, SummY, Umar, Wolffe, zander |
|            7 |      362 | 2023-01-27 | Davenport University | W   | 1.000      | 0.384        | 0.014 (0.005)    | 0.227 (0.087)    | 0 (0.000) |    18.68 | nicx, SummY, Umar, Wolffe, zander |
|            6 |      461 | 2023-01-24 | Villainous           | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.226 (0.087)    | 0 (0.000) |    12.39 | nicx, SummY, Umar, Wolffe, zander |
|            5 |      933 | 2022-12-11 | EX CINERE            | L   | 0.782      | -            | -                | -                | -         |   -12.77 | GRAVES, Seb, Umar, Wolffe, zander |
|            4 |      969 | 2022-12-10 | Zero MarksMen        | W   | 0.775      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.36 | GRAVES, Seb, Umar, Wolffe, zander |
|            3 |     1273 | 2022-12-01 | Orion                | L   | 0.715      | -            | -                | -                | -         |   -12.61 | GRAVES, Seb, Umar, Wolffe, zander |
|            2 |     1298 | 2022-11-30 | Take Charge          | L   | 0.708      | -            | -                | -                | -         |   -16.17 | GRAVES, Seb, Umar, Wolffe, zander |
|            1 |     1373 | 2022-11-27 | X13                  | W   | 0.688      | 0.384        | 0.001 (0.000)    | 0.090 (0.024)    | 0 (0.000) |     9.37 | GRAVES, Seb, Umar, Wolffe, zander |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,607.35)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-10 |      1.000 | $1,000.00      | $1,000.00       |
| 2022-12-15 |      0.810 | $750.00        | $607.35         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
