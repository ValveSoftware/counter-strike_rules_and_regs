### Roster Details<br />
Team Name: PGE Turow<br />
Roster: b1elany, darko, gRuChA, kadziu, ultimate<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [216](../standings_global.md)<br />
Regional Rank: [130]( ../standings_europe.md)<br />
Final Rank Value:  518.4<br />
<br />
Final Rank Value (518.4) = Starting Rank Value (509.4) + Head To Head Adjustments (9.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.208[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 509.4
- 400 + ( ( 0.053 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 509.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      289 | 2023-01-30 | BIG Academy     | L   | 1.000      | -            | -                | -                | -         |    -2.90 | b1elany, darko, gRuChA, kadziu, ultimate |
|           11 |      498 | 2023-01-23 | ENCE Academy    | W   | 1.000      | 0.143        | 0.010 (0.001)    | 0.239 (0.034)    | 0 (0.000) |    24.39 | b1elany, darko, gRuChA, kadziu, ultimate |
|           10 |      627 | 2023-01-18 | Falcons         | L   | 1.000      | -            | -                | -                | -         |    -2.46 | b1elany, darko, gRuChA, kadziu, ultimate |
|            9 |      671 | 2023-01-16 | IKLA            | L   | 1.000      | -            | -                | -                | -         |    -2.54 | b1elany, darko, gRuChA, kadziu, ultimate |
|            8 |     1076 | 2022-12-07 | Partizan        | L   | 0.753      | -            | -                | -                | -         |    -3.27 | baljs, darko, gRuChA, kadziu, noise      |
|            7 |     1102 | 2022-12-06 | Coalesce        | L   | 0.748      | -            | -                | -                | -         |    -5.39 | baljs, darko, gRuChA, kadziu, noise      |
|            6 |     1336 | 2022-11-29 | LDLC            | L   | 0.699      | -            | -                | -                | -         |    -4.77 | baljs, darko, gRuChA, kadziu, noise      |
|            5 |     1365 | 2022-11-28 | Astralis Talent | L   | 0.691      | -            | -                | -                | -         |    -2.08 | baljs, darko, gRuChA, kadziu, noise      |
|            4 |     2897 | 2022-09-17 | LDLC            | L   | 0.211      | -            | -                | -                | -         |    -1.52 | baljs, darko, gRuChA, kadziu, noise      |
|            3 |     2947 | 2022-09-15 | sYnck           | W   | 0.200      | 0.143        | 0.002 (0.000)    | 0.397 (0.011)    | 0 (0.000) |     5.04 | baljs, darko, gRuChA, kadziu, noise      |
|            2 |     2954 | 2022-09-15 | Sangal          | L   | 0.199      | -            | -                | -                | -         |    -0.52 | baljs, darko, gRuChA, kadziu, noise      |
|            1 |     2961 | 2022-09-15 | sYnck           | W   | 0.199      | 0.143        | 0.002 (0.000)    | 0.397 (0.011)    | 0 (0.000) |     5.05 | baljs, darko, gRuChA, kadziu, noise      |

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
