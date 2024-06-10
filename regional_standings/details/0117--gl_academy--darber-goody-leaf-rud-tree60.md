### Roster Details<br />
Team Name: GL Academy<br />
Roster: darber, Goody, leaf, rud, Tree60<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [117](../standings_global.md)<br />
Regional Rank: [81]( ../standings_europe.md)<br />
Final Rank Value:  794.9<br />
<br />
Final Rank Value (794.9) = Starting Rank Value (751.7) + Head To Head Adjustments (43.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.351[<sup>1</sup>](#table2)
- Bounty Collected: 0.298[<sup>2</sup>](#table1)
- Opponent Network: 0.057[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.176<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 751.7
- 400 + ( ( 0.176 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 751.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      367 | 2024-06-03 | PERA            | L   | 1.000      | -            | -                | -                | -         |    -9.45 | darber, Goody, leaf, rud, Tree60 |
|            9 |      527 | 2024-05-28 | UNiTY           | W   | 1.000      | 0.379        | 0.029 (0.011)    | 0.247 (0.094)    | 0 (0.000) |    21.70 | darber, Goody, leaf, rud, Tree60 |
|            8 |      620 | 2024-05-23 | brazylijski luz | L   | 1.000      | -            | -                | -                | -         |   -12.07 | darber, Goody, leaf, rud, Tree60 |
|            7 |     1183 | 2024-05-05 | MOUZ NXT        | L   | 0.958      | -            | -                | -                | -         |    -5.59 | darber, Goody, leaf, rud, shadiy |
|            6 |     1196 | 2024-05-04 | B8              | L   | 0.952      | -            | -                | -                | -         |    -5.62 | darber, Goody, leaf, rud, shadiy |
|            5 |     1266 | 2024-05-01 | RUBY            | W   | 0.931      | 0.435        | 0.022 (0.009)    | 0.555 (0.225)    | 0 (0.000) |    18.77 | darber, Goody, leaf, rud, shadiy |
|            4 |     1270 | 2024-04-30 | Sampi           | L   | 0.927      | -            | -                | -                | -         |    -7.17 | darber, Goody, leaf, rud, sSen   |
|            3 |     1355 | 2024-04-27 | EXO             | W   | 0.904      | 0.143        | 0.011 (0.001)    | 0.142 (0.018)    | 0 (0.000) |    15.02 | darber, Goody, leaf, rud, sSen   |
|            2 |     2101 | 2024-03-30 | NAVI Junior     | W   | 0.718      | 0.333        | 0.007 (0.002)    | 0.090 (0.021)    | 0 (0.000) |     9.97 | darber, Goody, leaf, nestee, rud |
|            1 |     2129 | 2024-03-28 | Passion UA      | W   | 0.705      | 0.333        | 0.088 (0.021)    | 0.905 (0.213)    | 0 (0.000) |    17.58 | darber, Goody, leaf, nestee, rud |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,310.47)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
