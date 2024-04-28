### Roster Details<br />
Team Name: INTZ<br />
Roster: BobZ, desh, Leomonster, TEKO, w1<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [109](../standings_global.md)<br />
Regional Rank: [26]( ../standings_americas.md)<br />
Final Rank Value:  770.4<br />
<br />
Final Rank Value (770.4) = Starting Rank Value (738.1) + Head To Head Adjustments (32.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.332[<sup>1</sup>](#table2)
- Bounty Collected: 0.273[<sup>2</sup>](#table1)
- Opponent Network: 0.056[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 738.1
- 400 + ( ( 0.165 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 738.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |       20 | 2023-02-11 | ex-Isurus    | W   | 1.000      | 0.143        | 0.013 (0.002)    | 0.171 (0.024)    | 0 (0.000) |    18.19 | BobZ, desh, Leomonster, TEKO, w1 |
|           19 |      184 | 2023-02-03 | Fluxo        | L   | 1.000      | -            | -                | -                | -         |    -8.46 | BobZ, desh, Leomonster, TEKO, w1 |
|           18 |      232 | 2023-02-01 | ex-Isurus    | W   | 1.000      | 0.384        | 0.013 (0.005)    | 0.171 (0.066)    | 0 (0.000) |    19.43 | BobZ, desh, Leomonster, TEKO, w1 |
|           17 |      286 | 2023-01-30 | NO NAME      | W   | 1.000      | 0.384        | -                | 0.083 (0.032)    | 0 (0.000) |     7.56 | BobZ, desh, Leomonster, TEKO, w1 |
|           16 |      304 | 2023-01-29 | Sharks       | L   | 1.000      | -            | -                | -                | -         |   -11.77 | BobZ, desh, Leomonster, TEKO, w1 |
|           15 |      366 | 2023-01-27 | RED Canids   | L   | 1.000      | -            | -                | -                | -         |   -17.21 | BobZ, desh, Leomonster, TEKO, w1 |
|           14 |      396 | 2023-01-26 | Sharks       | L   | 1.000      | -            | -                | -                | -         |   -13.38 | BobZ, desh, Leomonster, TEKO, w1 |
|           13 |      446 | 2023-01-25 | Corinthians  | W   | 1.000      | 0.384        | 0.014 (0.005)    | 0.430 (0.165)    | 0 (0.000) |    16.15 | BobZ, desh, Leomonster, TEKO, w1 |
|           12 |      507 | 2023-01-22 | TropiCaos    | W   | 1.000      | 0.384        | 0.014 (0.005)    | 0.222 (0.085)    | 0 (0.000) |    14.49 | BobZ, desh, Leomonster, TEKO, w1 |
|           11 |     1179 | 2022-12-04 | Meta         | L   | 0.732      | -            | -                | -                | -         |   -11.66 | BobZ, desh, Leomonster, TEKO, w1 |
|           10 |     1275 | 2022-12-01 | ODDIK        | L   | 0.714      | -            | -                | -                | -         |   -10.86 | BobZ, desh, Leomonster, TEKO, w1 |
|            9 |     1326 | 2022-11-29 | Boca Juniors | W   | 0.701      | 0.384        | 0.005 (0.001)    | 0.200 (0.054)    | 0 (0.000) |     9.12 | BobZ, desh, Leomonster, TEKO, w1 |
|            8 |     1394 | 2022-11-27 | MIBR Academy | W   | 0.686      | -            | -                | -                | 0 (0.000) |     4.37 | BobZ, desh, Leomonster, TEKO, w1 |
|            7 |     1453 | 2022-11-25 | Rehl         | W   | 0.673      | 0.384        | 0.001 (0.000)    | 0.118 (0.031)    | 0 (0.000) |     7.72 | BobZ, desh, Leomonster, TEKO, w1 |
|            6 |     1803 | 2022-10-29 | ARCTIC       | L   | 0.495      | -            | -                | -                | -         |    -5.28 | BobZ, desh, Leomonster, TEKO, w1 |
|            5 |     1815 | 2022-10-28 | Rehl         | W   | 0.487      | 0.371        | 0.001 (0.000)    | 0.118 (0.021)    | 0 (0.000) |     5.77 | BobZ, desh, Leomonster, TEKO, w1 |
|            4 |     1956 | 2022-10-22 | Fuscão 1500  | W   | 0.447      | 0.371        | 0.013 (0.002)    | 0.221 (0.037)    | 0 (0.000) |     7.77 | BobZ, desh, Leomonster, TEKO, w1 |
|            3 |     1980 | 2022-10-21 | Flamengo     | W   | 0.440      | 0.371        | 0.001 (0.000)    | 0.288 (0.047)    | -         |     5.95 | BobZ, desh, Leomonster, TEKO, w1 |
|            2 |     2013 | 2022-10-20 | Rehl         | L   | 0.433      | -            | -                | -                | -         |    -8.54 | BobZ, desh, Leomonster, TEKO, w1 |
|            1 |     2042 | 2022-10-19 | AJF          | W   | 0.426      | 0.371        | 0.000 (0.000)    | -                | -         |     2.85 | BobZ, desh, Leomonster, TEKO, w1 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,599.45)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-04 |      1.000 | $1,000.00      | $1,000.00       |
| 2022-12-02 |      0.719 | $3,750.00      | $2,697.31       |
| 2022-10-30 |      0.501 | $1,800.00      | $902.14         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
