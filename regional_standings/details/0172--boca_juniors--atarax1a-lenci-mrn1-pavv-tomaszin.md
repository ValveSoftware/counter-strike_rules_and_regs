### Roster Details<br />
Team Name: Boca Juniors<br />
Roster: atarax1a, lenci, MRN1, pavv, tomaszin<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [172](../standings_global.md)<br />
Regional Rank: [47]( ../standings_americas.md)<br />
Final Rank Value:  664.7<br />
<br />
Final Rank Value (664.7) = Starting Rank Value (693.3) + Head To Head Adjustments (-28.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.303[<sup>1</sup>](#table2)
- Bounty Collected: 0.244[<sup>2</sup>](#table1)
- Opponent Network: 0.026[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.143<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 693.3
- 400 + ( ( 0.143 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 693.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |       29 | 2023-02-11 | O PLANO      | L   | 1.000      | -            | -                | -                | -         |   -12.23 | atarax1a, lenci, MRN1, pavv, tomaszin |
|           13 |       43 | 2023-02-10 | Paquetá      | L   | 1.000      | -            | -                | -                | -         |   -12.90 | atarax1a, lenci, MRN1, pavv, tomaszin |
|           12 |      202 | 2023-02-02 | Fluxo        | L   | 1.000      | -            | -                | -                | -         |    -6.67 | atarax1a, lenci, MRN1, pavv, tomaszin |
|           11 |      284 | 2023-01-30 | Furious      | W   | 1.000      | 0.384        | 0.001 (0.000)    | 0.116 (0.044)    | 0 (0.000) |    11.93 | atarax1a, lenci, MRN1, pavv, tomaszin |
|           10 |      398 | 2023-01-26 | FUSION       | L   | 1.000      | -            | -                | -                | -         |   -12.89 | atarax1a, lenci, MRN1, pavv, tomaszin |
|            9 |      406 | 2023-01-26 | W7M fe       | W   | 1.000      | 0.384        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.85 | atarax1a, lenci, MRN1, pavv, tomaszin |
|            8 |      465 | 2023-01-24 | TropiCaos    | L   | 1.000      | -            | -                | -                | -         |   -14.55 | atarax1a, lenci, MRN1, pavv, tomaszin |
|            7 |      516 | 2023-01-22 | Corinthians  | L   | 1.000      | -            | -                | -                | -         |   -12.78 | atarax1a, lenci, MRN1, pavv, tomaszin |
|            6 |     1072 | 2022-12-07 | Sharks       | L   | 0.753      | -            | -                | -                | -         |    -8.57 | alexer, Hezz, lenci, MRN1, pavv       |
|            5 |     1120 | 2022-12-06 | Meta         | W   | 0.746      | 0.384        | 0.010 (0.003)    | 0.302 (0.087)    | 0 (0.000) |    12.87 | alexer, Hezz, lenci, MRN1, pavv       |
|            4 |     1171 | 2022-12-04 | TropiCaos    | W   | 0.733      | 0.384        | 0.014 (0.004)    | 0.222 (0.062)    | 0 (0.000) |    13.18 | alexer, Hezz, lenci, MRN1, pavv       |
|            3 |     1281 | 2022-12-01 | MIBR Academy | W   | 0.713      | 0.384        | 0.000 (0.000)    | 0.056 (0.015)    | 0 (0.000) |     6.14 | alexer, Hezz, lenci, MRN1, pavv       |
|            2 |     1326 | 2022-11-29 | INTZ         | L   | 0.701      | -            | -                | -                | -         |    -9.12 | alexer, Hezz, lenci, MRN1, pavv       |
|            1 |     1470 | 2022-11-24 | WINDINGO     | W   | 0.668      | 0.384        | 0.002 (0.001)    | 0.210 (0.054)    | 0 (0.000) |     9.18 | alexer, Hezz, lenci, MRN1, pavv       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,389.38)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-11 |      1.000 | $500.00        | $500.00         |
| 2022-12-07 |      0.756 | $2,500.00      | $1,889.38       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
