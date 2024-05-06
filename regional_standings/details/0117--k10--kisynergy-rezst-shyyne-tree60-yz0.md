### Roster Details<br />
Team Name: K10<br />
Roster: Kisynergy, Rezst, shyyne, Tree60, yz0<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [117](../standings_global.md)<br />
Regional Rank: [79]( ../standings_europe.md)<br />
Final Rank Value:  757.2<br />
<br />
Final Rank Value (757.2) = Starting Rank Value (766.4) + Head To Head Adjustments (-9.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.353[<sup>1</sup>](#table2)
- Bounty Collected: 0.251[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.151[<sup>2</sup>](#table1)

The average of these factors is 0.192<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 766.4
- 400 + ( ( 0.192 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 766.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      953 | 2024-03-29 | EXO        | L   | 0.948      | -            | -                | -                | -         |   -10.72 | Kisynergy, Rezst, shyyne, Tree60, yz0 |
|           14 |     1136 | 2024-03-19 | RAPTORS EC | W   | 0.880      | 0.143        | 0.000 (0.000)    | 0.038 (0.005)    | 0 (0.000) |     3.35 | Kisynergy, Rezst, shyyne, Tree60, yz0 |
|           13 |     1377 | 2024-03-09 | Insilio    | L   | 0.812      | -            | -                | -                | -         |    -7.58 | Rezst, shyyne, SLY, Tree60, yz0       |
|           12 |     1390 | 2024-03-09 | ex-Preasy  | L   | 0.811      | -            | -                | -                | -         |    -3.77 | Rezst, shyyne, SLY, Tree60, yz0       |
|           11 |     1400 | 2024-03-08 | MOUZ NXT   | L   | 0.806      | -            | -                | -                | -         |    -4.54 | Rezst, shyyne, SLY, Tree60, yz0       |
|           10 |     1462 | 2024-03-06 | Passion UA | L   | 0.792      | -            | -                | -                | -         |    -5.96 | Rezst, shyyne, SLY, Tree60, yz0       |
|            9 |     1514 | 2024-03-04 | Secret     | W   | 0.779      | 0.371        | 0.000 (0.000)    | 0.192 (0.055)    | 0 (0.000) |     6.78 | Rezst, shyyne, SLY, Tree60, yz0       |
|            8 |     1670 | 2024-02-25 | EXO        | L   | 0.726      | -            | -                | -                | -         |    -9.79 | Rezst, shyyne, SLY, Tree60, yz0       |
|            7 |     1698 | 2024-02-24 | EXO        | W   | 0.720      | 0.307        | 0.031 (0.007)    | 0.144 (0.032)    | 1 (0.720) |    13.05 | Rezst, shyyne, SLY, Tree60, yz0       |
|            6 |     2877 | 2024-01-09 | KOI        | L   | 0.413      | -            | -                | -                | -         |    -2.56 | dox, Rezst, shyyne, Tree60, yz0       |
|            5 |     2892 | 2024-01-09 | Nexus      | W   | 0.413      | 0.143        | 0.031 (0.002)    | 0.605 (0.036)    | 0 (0.000) |     8.70 | dox, Rezst, shyyne, Tree60, yz0       |
|            4 |     3082 | 2023-12-10 | Verdant    | W   | 0.214      | 0.302        | 0.022 (0.001)    | 0.061 (0.004)    | 1 (0.214) |     3.36 | dox, Rezst, shyyne, Tree60, yz0       |
|            3 |     3085 | 2023-12-10 | Coalesce   | W   | 0.213      | 0.302        | 0.004 (0.000)    | 0.041 (0.003)    | 1 (0.213) |     2.57 | dox, Rezst, shyyne, Tree60, yz0       |
|            2 |     3091 | 2023-12-10 | Verdant    | L   | 0.211      | -            | -                | -                | -         |    -3.36 | dox, Rezst, shyyne, Tree60, yz0       |
|            1 |     3112 | 2023-12-09 | Viperio    | W   | 0.206      | 0.302        | 0.000 (0.000)    | 0.045 (0.003)    | 1 (0.206) |     1.34 | dox, Rezst, shyyne, Tree60, yz0       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,394.70)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-29 |      0.948 | $951.00        | $901.11         |
| 2024-02-25 |      0.726 | $1,197.00      | $868.80         |
| 2023-12-10 |      0.214 | $2,925.00      | $624.80         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
