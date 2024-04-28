### Roster Details<br />
Team Name: B4 fe<br />
Roster: goddess, julih, nani, poppins, yungher<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [54](../standings_global.md)<br />
Regional Rank: [11]( ../standings_americas.md)<br />
Final Rank Value:  928.0<br />
<br />
Final Rank Value (928.0) = Starting Rank Value (915.3) + Head To Head Adjustments (12.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.419[<sup>1</sup>](#table2)
- Bounty Collected: 0.297[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.277[<sup>2</sup>](#table1)

The average of these factors is 0.252<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 915.3
- 400 + ( ( 0.252 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 915.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |       14 | 2023-02-12 | NAVI Javelins     | L   | 1.000      | -            | -                | -                | -         |   -10.92 | goddess, julih, nani, poppins, yungher |
|           11 |       31 | 2023-02-11 | HSG fe            | W   | 1.000      | 0.500        | 0.025 (0.013)    | 0.097 (0.049)    | 1 (1.000) |    11.88 | goddess, julih, nani, poppins, yungher |
|           10 |       54 | 2023-02-10 | Nigma Galaxy      | L   | 1.000      | -            | -                | -                | -         |    -4.78 | goddess, julih, nani, poppins, yungher |
|            9 |       59 | 2023-02-10 | HSG fe            | W   | 1.000      | 0.500        | 0.025 (0.013)    | 0.097 (0.049)    | 1 (1.000) |    12.35 | goddess, julih, nani, poppins, yungher |
|            8 |      763 | 2022-12-18 | MIBR fe           | W   | 0.828      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.35 | goddess, julih, nani, poppins, yungher |
|            7 |      939 | 2022-12-11 | FURIA fe          | W   | 0.781      | 0.325        | 0.063 (0.016)    | 0.157 (0.040)    | 0 (0.000) |    16.45 | goddess, julih, nani, poppins, yungher |
|            6 |     1434 | 2022-11-26 | 9 Pandas Fearless | L   | 0.678      | -            | -                | -                | -         |   -11.42 | goddess, julih, nani, poppins, yungher |
|            5 |     1458 | 2022-11-25 | FURIA fe          | L   | 0.673      | -            | -                | -                | -         |    -7.25 | goddess, julih, nani, poppins, yungher |
|            4 |     1464 | 2022-11-25 | ATK fe            | W   | 0.672      | 0.524        | 0.006 (0.002)    | 0.000 (0.000)    | 1 (0.672) |     2.47 | goddess, julih, nani, poppins, yungher |
|            3 |     1920 | 2022-10-23 | Black Dragons fe  | W   | 0.455      | 0.143        | 0.001 (0.000)    | 0.011 (0.001)    | 0 (0.000) |     2.03 | goddess, julih, nani, poppins, yungher |
|            2 |     2851 | 2022-09-18 | Black Dragons fe  | W   | 0.221      | 0.250        | 0.001 (0.000)    | 0.011 (0.001)    | 0 (0.000) |     0.98 | goddess, julih, nani, poppins, yungher |
|            1 |     3748 | 2022-08-18 | MIBR fe           | L   | 0.013      | -            | -                | -                | -         |    -0.38 | dinha, goddess, julih, nani, yungher   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($19,440.49)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-12 |      1.000 | $10,000.00     | $10,000.00      |
| 2022-12-11 |      0.781 | $5,727.00      | $4,474.57       |
| 2022-11-27 |      0.686 | $7,000.00      | $4,800.28       |
| 2022-09-18 |      0.221 | $750.00        | $165.64         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
