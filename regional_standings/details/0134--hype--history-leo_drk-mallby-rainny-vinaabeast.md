### Roster Details<br />
Team Name: Hype<br />
Roster: history, leo_drk, MaLLby, rainny, vinaabEAST<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [134](../standings_global.md)<br />
Regional Rank: [34]( ../standings_americas.md)<br />
Final Rank Value:  743.2<br />
<br />
Final Rank Value (743.2) = Starting Rank Value (608.5) + Head To Head Adjustments (134.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.294[<sup>2</sup>](#table1)
- Opponent Network: 0.125[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.105<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 608.5
- 400 + ( ( 0.105 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 608.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |       34 | 2024-06-09 | KRÜ         | W   | 1.000      | 0.450        | 0.016 (0.007)    | 0.131 (0.059)    | 0 (0.000) |    18.16 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           14 |       91 | 2024-06-08 | paiN        | L   | 1.000      | -            | -                | -                | -         |    -0.62 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           13 |      110 | 2024-06-08 | Sharks      | L   | 1.000      | -            | -                | -                | -         |    -4.67 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           12 |      148 | 2024-06-07 | inSanitY    | W   | 1.000      | 0.450        | 0.003 (0.001)    | 0.270 (0.122)    | 0 (0.000) |    22.28 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           11 |      416 | 2024-06-01 | Galorys     | W   | 1.000      | 0.384        | 0.025 (0.009)    | 0.596 (0.229)    | 0 (0.000) |    22.00 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|           10 |      471 | 2024-05-30 | W7M         | W   | 1.000      | 0.384        | 0.002 (0.001)    | 0.426 (0.164)    | 0 (0.000) |    17.70 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|            9 |      529 | 2024-05-28 | Corinthians | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.218 (0.084)    | 0 (0.000) |    13.26 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|            8 |      827 | 2024-05-17 | Case        | L   | 1.000      | -            | -                | -                | -         |    -7.67 | history, leo_drk, MaLLby, r1see, rainny      |
|            7 |      858 | 2024-05-16 | Sharks      | L   | 1.000      | -            | -                | -                | -         |    -3.99 | BALEROSTYLE, history, leo_drk, r1see, rainny |
|            6 |      904 | 2024-05-15 | Galorys     | L   | 1.000      | -            | -                | -                | -         |    -8.47 | history, leo_drk, MaLLby, r1see, rainny      |
|            5 |      914 | 2024-05-15 | BESTIA      | W   | 1.000      | 0.371        | 0.031 (0.012)    | 0.631 (0.234)    | 0 (0.000) |    25.41 | history, leo_drk, MaLLby, r1see, rainny      |
|            4 |      966 | 2024-05-14 | W7M         | W   | 1.000      | 0.371        | 0.002 (0.001)    | 0.426 (0.158)    | 0 (0.000) |    21.34 | history, leo_drk, MaLLby, r1see, rainny      |
|            3 |      973 | 2024-05-14 | Case        | W   | 1.000      | 0.303        | 0.027 (0.008)    | 0.656 (0.199)    | 0 (0.000) |    23.59 | history, leo_drk, MaLLby, r1see, rainny      |
|            2 |      996 | 2024-05-13 | Fluxo       | L   | 1.000      | -            | -                | -                | -         |    -1.76 | history, leo_drk, MaLLby, r1see, rainny      |
|            1 |     1655 | 2024-04-16 | Fluxo       | L   | 0.835      | -            | -                | -                | -         |    -1.84 | history, leo_drk, MaLLby, r1see, rainny      |

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
