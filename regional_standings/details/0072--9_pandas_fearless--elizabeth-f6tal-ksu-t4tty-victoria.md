### Roster Details<br />
Team Name: 9 Pandas Fearless<br />
Roster: Elizabeth, f6tal, Ksu, t4tty, Victoria<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [72](../standings_global.md)<br />
Regional Rank: [51]( ../standings_europe.md)<br />
Final Rank Value:  885.4<br />
<br />
Final Rank Value (885.4) = Starting Rank Value (874.2) + Head To Head Adjustments (11.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.389[<sup>1</sup>](#table2)
- Bounty Collected: 0.284[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.244[<sup>2</sup>](#table1)

The average of these factors is 0.232<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 874.2
- 400 + ( ( 0.232 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 874.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |       35 | 2023-02-11 | FURIA fe      | L   | 1.000      | -            | -                | -                | -         |   -10.11 | Elizabeth, f6tal, Ksu, t4tty, Victoria    |
|           12 |       44 | 2023-02-10 | CLG Red       | W   | 1.000      | 0.500        | 0.015 (0.007)    | 0.046 (0.023)    | 1 (1.000) |     8.70 | Elizabeth, f6tal, Ksu, t4tty, Victoria    |
|           11 |       55 | 2023-02-10 | FURIA fe      | L   | 1.000      | -            | -                | -                | -         |    -9.95 | Elizabeth, f6tal, Ksu, t4tty, Victoria    |
|           10 |      686 | 2023-01-15 | Astralis fe   | W   | 1.000      | 0.250        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.21 | Elizabeth, f6tal, Ksu, t4tty, Victoria    |
|            9 |      765 | 2022-12-18 | BIG EQUIPA    | W   | 0.828      | 0.143        | 0.002 (0.000)    | 0.034 (0.004)    | 0 (0.000) |     4.92 | Elizabeth, f6tal, Ksu, t4tty, Victoria    |
|            8 |      775 | 2022-12-18 | NIP fe        | W   | 0.826      | 0.143        | 0.003 (0.000)    | 0.083 (0.010)    | 0 (0.000) |     5.09 | Elizabeth, f6tal, Ksu, t4tty, Victoria    |
|            7 |      858 | 2022-12-15 | NAVI Javelins | L   | 0.807      | -            | -                | -                | -         |    -8.37 | Elizabeth, f6tal, Ksu, t4tty, Victoria    |
|            6 |      862 | 2022-12-15 | Astralis fe   | W   | 0.807      | 0.143        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.82 | Elizabeth, f6tal, Ksu, t4tty, Victoria    |
|            5 |     1399 | 2022-11-27 | Nigma Galaxy  | L   | 0.685      | -            | -                | -                | -         |    -2.87 | Elizabeth, f6tal, Ksu, Stormy, Victoria   |
|            4 |     1434 | 2022-11-26 | B4 fe         | W   | 0.678      | 0.524        | 0.041 (0.015)    | 0.154 (0.055)    | 1 (0.678) |    11.42 | Elizabeth, f6tal, Ksu, Stormy, Victoria   |
|            3 |     1450 | 2022-11-25 | ATK fe        | W   | 0.673      | 0.524        | 0.006 (0.002)    | 0.000 (0.000)    | 1 (0.673) |     2.97 | 2SSB, Graceyy, KayC, leafy, M3gzz         |
|            2 |     1465 | 2022-11-25 | FURIA fe      | L   | 0.671      | -            | -                | -                | -         |    -6.48 | Elizabeth, f6tal, Ksu, Stormy, Victoria   |
|            1 |     1928 | 2022-10-23 | NAVI Javelins | W   | 0.454      | 0.143        | 0.078 (0.005)    | 0.250 (0.016)    | 0 (0.000) |     9.76 | Dinowka, Elizabeth, Ksu, Stormy, Victoria |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,664.81)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-12 |      1.000 | $3,000.00      | $3,000.00       |
| 2023-01-15 |      1.000 | $750.00        | $750.00         |
| 2022-11-27 |      0.686 | $13,000.00     | $8,914.81       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
