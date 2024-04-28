### Roster Details<br />
Team Name: BLINK<br />
Roster: BledarD, deb0, gulito, HYPERI1, krabeni<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [201](../standings_global.md)<br />
Regional Rank: [124]( ../standings_europe.md)<br />
Final Rank Value:  594.0<br />
<br />
Final Rank Value (594.0) = Starting Rank Value (625.6) + Head To Head Adjustments (-31.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.230[<sup>1</sup>](#table2)
- Bounty Collected: 0.204[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.110<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 625.6
- 400 + ( ( 0.110 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 625.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      270 | 2023-01-31 | 9INE            | L   | 1.000      | -            | -                | -                | -         |    -3.24 | BledarD, deb0, gulito, HYPERI1, krabeni |
|           14 |      621 | 2023-01-18 | Websterz        | L   | 1.000      | -            | -                | -                | -         |    -7.48 | BledarD, deb0, gulito, HYPERI1, krabeni |
|           13 |      665 | 2023-01-16 | TENSTAR         | L   | 1.000      | -            | -                | -                | -         |   -17.99 | BledarD, deb0, gulito, HYPERI1, krabeni |
|           12 |      681 | 2023-01-15 | Apeks           | L   | 1.000      | -            | -                | -                | -         |    -2.71 | BledarD, deb0, gulito, HYPERI1, krabeni |
|           11 |      778 | 2022-12-18 | Juggernauts     | L   | 0.826      | -            | -                | -                | -         |   -10.22 | BledarD, deb0, gulito, HYPERI1, krabeni |
|           10 |      815 | 2022-12-17 | EC Brugge       | W   | 0.819      | 0.143        | 0.007 (0.001)    | 0.507 (0.059)    | 0 (0.000) |    16.96 | BledarD, deb0, gulito, HYPERI1, krabeni |
|            9 |      823 | 2022-12-17 | Velez Mostar    | W   | 0.818      | 0.143        | 0.002 (0.000)    | 0.041 (0.005)    | 0 (0.000) |    15.01 | BledarD, deb0, gulito, HYPERI1, krabeni |
|            8 |      847 | 2022-12-16 | Beyond Possible | L   | 0.812      | -            | -                | -                | -         |   -15.93 | BledarD, deb0, gulito, HYPERI1, krabeni |
|            7 |     2104 | 2022-10-16 | Websterz        | L   | 0.407      | -            | -                | -                | -         |    -2.50 | BledarD, Caleyy, gulito, krabeni, vAloN |
|            6 |     2250 | 2022-10-12 | Partizan        | L   | 0.380      | -            | -                | -                | -         |    -3.07 | BledarD, Caleyy, gulito, krabeni, vAloN |
|            5 |     2278 | 2022-10-11 | Monte           | L   | 0.373      | -            | -                | -                | -         |    -4.54 | BledarD, Caleyy, gulito, krabeni, vAloN |
|            4 |     3077 | 2022-09-11 | 500             | L   | 0.173      | -            | -                | -                | -         |    -0.43 | BledarD, Caleyy, gulito, krabeni, vAloN |
|            3 |     3087 | 2022-09-11 | Austria         | W   | 0.172      | 0.303        | 0.000 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     2.46 | BledarD, Caleyy, gulito, krabeni, vAloN |
|            2 |     3091 | 2022-09-11 | 500             | L   | 0.171      | -            | -                | -                | -         |    -0.42 | BledarD, Caleyy, gulito, krabeni, vAloN |
|            1 |     3148 | 2022-09-10 | SHAPE           | W   | 0.165      | 0.303        | 0.002 (0.000)    | 0.013 (0.001)    | 0 (0.000) |     2.57 | BledarD, Caleyy, gulito, krabeni, vAloN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($217.04)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
