### Roster Details<br />
Team Name: Fluxo Demons<br />
Roster: annaEX, goddess, julih, poppins, yungher<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [83](../standings_global.md)<br />
Regional Rank: [19]( ../standings_americas.md)<br />
Final Rank Value:  921.1<br />
<br />
Final Rank Value (921.1) = Starting Rank Value (887.5) + Head To Head Adjustments (33.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.424[<sup>1</sup>](#table2)
- Bounty Collected: 0.297[<sup>2</sup>](#table1)
- Opponent Network: 0.045[<sup>2</sup>](#table1)
- LAN Wins: 0.213[<sup>2</sup>](#table1)

The average of these factors is 0.245<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 887.5
- 400 + ( ( 0.245 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 887.5


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
|           12 |      389 | 2024-06-02 | Imperial fe     | L   | 1.000      | -            | -                | -                | -         |    -8.52 | annaEX, goddess, julih, poppins, yungher |
|           11 |      411 | 2024-06-01 | NAVI Javelins   | W   | 1.000      | 0.524        | 0.041 (0.022)    | 0.330 (0.173)    | 1 (1.000) |    16.19 | annaEX, goddess, julih, poppins, yungher |
|           10 |      445 | 2024-05-31 | Let Her Cook    | L   | 1.000      | -            | -                | -                | -         |   -14.36 | annaEX, goddess, julih, poppins, yungher |
|            9 |      450 | 2024-05-31 | TSM Shimmer     | W   | 1.000      | 0.524        | 0.025 (0.013)    | 0.269 (0.141)    | 1 (1.000) |     8.58 | annaEX, goddess, julih, poppins, yungher |
|            8 |     1523 | 2024-04-19 | FURIA fe        | W   | 0.855      | 0.332        | 0.007 (0.002)    | 0.158 (0.045)    | 0 (0.000) |     7.22 | annaEX, goddess, julih, poppins, yungher |
|            7 |     1786 | 2024-04-10 | GENKID4M4       | W   | 0.794      | 0.332        | 0.004 (0.001)    | 0.039 (0.010)    | 0 (0.000) |     4.00 | annaEX, goddess, julih, poppins, yungher |
|            6 |     1978 | 2024-04-04 | KG fe           | W   | 0.754      | 0.332        | 0.003 (0.001)    | 0.017 (0.004)    | 0 (0.000) |     2.36 | annaEX, goddess, julih, poppins, yungher |
|            5 |     2152 | 2024-03-27 | Divina fe       | W   | 0.701      | 0.332        | 0.004 (0.001)    | 0.049 (0.011)    | 0 (0.000) |     4.44 | annaEX, goddess, julih, poppins, yungher |
|            4 |     2269 | 2024-03-20 | MIBR fe         | W   | 0.654      | 0.332        | 0.008 (0.002)    | 0.119 (0.026)    | 0 (0.000) |     4.75 | annaEX, goddess, julih, poppins, yungher |
|            3 |     2388 | 2024-03-14 | W7M fe          | W   | 0.614      | 0.332        | 0.004 (0.001)    | 0.075 (0.015)    | 0 (0.000) |     3.82 | annaEX, goddess, julih, poppins, yungher |
|            2 |     2592 | 2024-03-06 | Atrix           | W   | 0.562      | 0.332        | 0.005 (0.001)    | 0.115 (0.021)    | 0 (0.000) |     3.89 | annaEX, goddess, julih, poppins, yungher |
|            1 |     3254 | 2024-02-03 | Brasil Storm fe | W   | 0.348      | 0.250        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.18 | annaEX, goddess, josi, julih, yungher    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,261.22)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      1.000 | $13,000.00     | $13,000.00      |
| 2024-02-03 |      0.348 | $750.00        | $261.22         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
