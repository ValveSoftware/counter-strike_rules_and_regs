### Roster Details<br />
Team Name: Conquer<br />
Roster: Choco, eDi, Elfern, Jelo, LYNXi<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [169](../standings_global.md)<br />
Regional Rank: [112]( ../standings_europe.md)<br />
Final Rank Value:  672.8<br />
<br />
Final Rank Value (672.8) = Starting Rank Value (676.1) + Head To Head Adjustments (-3.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.324[<sup>1</sup>](#table2)
- Bounty Collected: 0.210[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.135<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 676.1
- 400 + ( ( 0.135 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 676.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      687 | 2023-01-15 | EXEN            | W   | 1.000      | 0.278        | 0.002 (0.001)    | 0.031 (0.008)    | 0 (0.000) |    13.38 | Choco, eDi, Elfern, Jelo, LYNXi |
|           11 |      781 | 2022-12-18 | Hvor Er Du Bro? | W   | 0.826      | 0.360        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.85 | Choco, eDi, Elfern, Jelo, LYNXi |
|           10 |      951 | 2022-12-11 | JANO            | L   | 0.779      | -            | -                | -                | -         |    -9.50 | Choco, eDi, Elfern, Jelo, LYNXi |
|            9 |     1069 | 2022-12-07 | EXEN            | W   | 0.754      | 0.304        | 0.002 (0.000)    | 0.031 (0.007)    | 0 (0.000) |    10.81 | Choco, eDi, Elfern, Jelo, LYNXi |
|            8 |     1144 | 2022-12-05 | Bob             | W   | 0.740      | 0.304        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.57 | Choco, eDi, Elfern, Jelo, LYNXi |
|            7 |     1175 | 2022-12-04 | Lilmix          | L   | 0.733      | -            | -                | -                | -         |    -8.88 | Choco, eDi, Elfern, Jelo, LYNXi |
|            6 |     1302 | 2022-11-30 | JANO            | L   | 0.707      | -            | -                | -                | -         |    -9.28 | Choco, eDi, Elfern, Jelo, LYNXi |
|            5 |     1566 | 2022-11-18 | AGO             | L   | 0.627      | -            | -                | -                | -         |    -6.60 | Choco, eDi, Elfern, Jelo, LYNXi |
|            4 |     1572 | 2022-11-18 | EC Brugge       | W   | 0.625      | 0.143        | 0.007 (0.001)    | 0.507 (0.045)    | 0 (0.000) |    12.52 | Choco, eDi, Elfern, Jelo, LYNXi |
|            3 |     1595 | 2022-11-17 | AGO             | L   | 0.618      | -            | -                | -                | -         |    -6.19 | Choco, eDi, Elfern, Jelo, LYNXi |
|            2 |     1812 | 2022-10-29 | ENCE Academy    | L   | 0.492      | -            | -                | -                | -         |    -6.15 | Choco, eDi, Elfern, Jelo, LYNXi |
|            1 |     2865 | 2022-09-18 | JANO            | L   | 0.219      | -            | -                | -                | -         |    -2.89 | Choco, eDi, Elfern, Jelo, LYNXi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,842.23)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-01-15 |      1.000 | $1,500.00      | $1,500.00       |
| 2022-12-18 |      0.826 | $2,388.00      | $1,972.26       |
| 2022-10-29 |      0.493 | $750.00        | $369.98         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
