### Roster Details<br />
Team Name: inSanitY<br />
Roster: cass1n, f4stzin, iDk, pesadelo, shz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [96](../standings_global.md)<br />
Regional Rank: [22]( ../standings_americas.md)<br />
Final Rank Value:  866.9<br />
<br />
Final Rank Value (866.9) = Starting Rank Value (787.2) + Head To Head Adjustments (79.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.287[<sup>1</sup>](#table2)
- Bounty Collected: 0.327[<sup>2</sup>](#table1)
- Opponent Network: 0.163[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.194<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 787.2
- 400 + ( ( 0.194 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 787.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |       31 | 2024-06-09 | Bounty Hunters | L   | 1.000      | -            | -                | -                | -         |   -22.21 | cass1n, f4stzin, iDk, pesadelo, shz |
|           13 |       39 | 2024-06-09 | Bounty Hunters | W   | 1.000      | 0.450        | 0.000 (0.000)    | 0.233 (0.105)    | 0 (0.000) |     8.82 | cass1n, f4stzin, iDk, pesadelo, shz |
|           12 |      108 | 2024-06-08 | Solid          | W   | 1.000      | 0.450        | 0.055 (0.025)    | 0.604 (0.272)    | 0 (0.000) |    15.25 | cass1n, f4stzin, iDk, pesadelo, shz |
|           11 |      148 | 2024-06-07 | Hype           | L   | 1.000      | -            | -                | -                | -         |   -22.28 | cass1n, f4stzin, iDk, pesadelo, shz |
|           10 |      177 | 2024-06-07 | KRÜ            | W   | 1.000      | 0.384        | 0.016 (0.006)    | 0.131 (0.050)    | 0 (0.000) |    11.79 | cass1n, f4stzin, iDk, pesadelo, shz |
|            9 |      215 | 2024-06-06 | BESTIA         | W   | 1.000      | 0.450        | 0.031 (0.014)    | 0.631 (0.284)    | 0 (0.000) |    23.26 | cass1n, f4stzin, iDk, pesadelo, shz |
|            8 |      408 | 2024-06-01 | Solid          | W   | 1.000      | 0.384        | 0.055 (0.021)    | 0.604 (0.232)    | 0 (0.000) |    17.03 | cass1n, f4stzin, iDk, pesadelo, shz |
|            7 |      487 | 2024-05-30 | Intense        | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.154 (0.059)    | 0 (0.000) |     5.53 | cass1n, f4stzin, iDk, pesadelo, shz |
|            6 |      545 | 2024-05-27 | Bounty Hunters | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.233 (0.089)    | 0 (0.000) |     7.76 | cass1n, f4stzin, iDk, pesadelo, shz |
|            5 |     1010 | 2024-05-12 | 9z             | L   | 1.000      | -            | -                | -                | -         |    -1.73 | cass1n, f4stzin, pesadelo, shz, vsm |
|            4 |     1068 | 2024-05-10 | 9z             | L   | 0.995      | -            | -                | -                | -         |    -1.69 | cass1n, f4stzin, iDk, pesadelo, shz |
|            3 |     1095 | 2024-05-09 | ODDIK          | W   | 0.986      | 0.435        | 0.024 (0.010)    | 0.602 (0.258)    | 0 (0.000) |    21.01 | cass1n, f4stzin, iDk, pesadelo, shz |
|            2 |     1134 | 2024-05-07 | Case           | W   | 0.973      | 0.435        | 0.027 (0.011)    | 0.656 (0.277)    | 0 (0.000) |    17.88 | cass1n, f4stzin, iDk, pesadelo, shz |
|            1 |     1170 | 2024-05-05 | Imperial       | L   | 0.960      | -            | -                | -                | -         |    -0.68 | cass1n, f4stzin, iDk, pesadelo, shz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,000.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
