### Roster Details<br />
Team Name: Akimbo<br />
Roster: alula, Drew, Halen, taggy, Weeza<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [159](../standings_global.md)<br />
Regional Rank: [42]( ../standings_americas.md)<br />
Final Rank Value:  678.8<br />
<br />
Final Rank Value (678.8) = Starting Rank Value (703.8) + Head To Head Adjustments (-25.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.314[<sup>1</sup>](#table2)
- Bounty Collected: 0.226[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.068[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 703.8
- 400 + ( ( 0.152 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 703.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |       33 | 2024-06-09 | Lore             | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.96 | alula, Drew, Halen, taggy, Weeza     |
|           12 |       97 | 2024-06-08 | E-Xolos LAZER    | L   | 1.000      | -            | -                | -                | -         |   -14.84 | alula, Drew, Halen, taggy, Weeza     |
|           11 |      280 | 2024-06-05 | Final Form       | W   | 1.000      | 0.384        | 0.007 (0.003)    | 0.039 (0.015)    | 0 (0.000) |     9.51 | alula, Drew, Halen, taggy, Weeza     |
|           10 |      369 | 2024-06-03 | FLUFFY AIMERS    | L   | 1.000      | -            | -                | -                | -         |   -12.32 | abp, alula, Halen, rayxts, Weeza     |
|            9 |     2284 | 2024-03-19 | Strife           | L   | 0.649      | -            | -                | -                | -         |    -9.70 | Gabie, J0LZ, Melio, TENSKEE, YuZ     |
|            8 |     2311 | 2024-03-17 | LAG              | L   | 0.635      | -            | -                | -                | -         |    -5.01 | alula, Drew, Ethex, taggy, Weeza     |
|            7 |     2315 | 2024-03-17 | Villainous       | W   | 0.634      | 0.333        | 0.004 (0.001)    | 0.000 (0.000)    | 1 (0.634) |     5.86 | Beast, Cyrix, dopplahs, TyRa, Zamgaa |
|            6 |     3851 | 2024-01-14 | Carpe Diem       | L   | 0.214      | -            | -                | -                | -         |    -2.58 | alula, Drew, Ethex, legacy, Weeza    |
|            5 |     3868 | 2024-01-13 | BOSS             | L   | 0.208      | -            | -                | -                | -         |    -2.01 | alula, Drew, Ethex, legacy, Weeza    |
|            4 |     3904 | 2024-01-12 | FLUFFY AIMERS    | W   | 0.203      | 0.143        | 0.000 (0.000)    | 0.008 (0.000)    | 0 (0.000) |     0.99 | alula, Drew, Ethex, legacy, Weeza    |
|            3 |     3912 | 2024-01-12 | Party Astronauts | L   | 0.202      | -            | -                | -                | -         |    -1.12 | alula, Drew, Ethex, legacy, Weeza    |
|            2 |     3997 | 2024-01-09 | NRG              | L   | 0.183      | -            | -                | -                | -         |    -1.58 | alula, Drew, Ethex, legacy, Weeza    |
|            1 |     3999 | 2024-01-09 | Revenge Nation   | W   | 0.183      | 0.143        | 0.016 (0.000)    | 0.050 (0.001)    | 0 (0.000) |     2.79 | alula, Drew, Ethex, legacy, Weeza    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,986.85)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-23 |      0.675 | $2,000.00      | $1,350.59       |
| 2024-03-17 |      0.636 | $1,000.00      | $636.26         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
