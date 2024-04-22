### Roster Details<br />
Team Name: NAVI Javelins<br />
Roster: Angelka, Hanka, LETi, Liina, vicu<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [67](../standings_global.md)<br />
Regional Rank: [46]( ../standings_europe.md)<br />
Final Rank Value:  888.0<br />
<br />
Final Rank Value (888.0) = Starting Rank Value (845.3) + Head To Head Adjustments (42.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.456[<sup>1</sup>](#table2)
- Bounty Collected: 0.311[<sup>2</sup>](#table1)
- Opponent Network: 0.059[<sup>2</sup>](#table1)
- LAN Wins: 0.096[<sup>2</sup>](#table1)

The average of these factors is 0.231<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 845.3
- 400 + ( ( 0.231 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 845.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |       90 | 2024-04-19 | VP.Angels         | W   | 1.000      | 0.331        | 0.006 (0.002)    | -                | 0 (0.000) |     5.54 | Angelka, Hanka, LETi, Liina, vicu |
|           19 |      217 | 2024-04-16 | Pigeons           | W   | 1.000      | 0.303        | 0.095 (0.029)    | 0.353 (0.107)    | 0 (0.000) |    18.32 | Angelka, Hanka, LETi, Liina, vicu |
|           18 |      238 | 2024-04-15 | NIP Impact        | W   | 1.000      | 0.303        | 0.008 (0.002)    | 0.278 (0.084)    | 0 (0.000) |    11.63 | Angelka, Hanka, LETi, Liina, vicu |
|           17 |      256 | 2024-04-14 | Astralis W        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.50 | Angelka, Hanka, LETi, Liina, vicu |
|           16 |      269 | 2024-04-13 | Pigeons           | L   | 1.000      | -            | -                | -                | -         |   -12.54 | Angelka, Hanka, LETi, Liina, vicu |
|           15 |      310 | 2024-04-11 | Spirit fe         | W   | 1.000      | 0.303        | 0.008 (0.002)    | 0.123 (0.037)    | 0 (0.000) |     7.11 | Angelka, Hanka, LETi, Liina, vicu |
|           14 |      411 | 2024-04-09 | NIP Impact        | L   | 1.000      | -            | -                | -                | -         |   -19.92 | Angelka, Hanka, LETi, Liina, vicu |
|           13 |      533 | 2024-04-04 | Spirit fe         | W   | 1.000      | 0.331        | 0.008 (0.003)    | 0.123 (0.041)    | 0 (0.000) |     7.76 | Angelka, Hanka, LETi, Liina, vicu |
|           12 |      572 | 2024-04-03 | Let Her Cook      | L   | 1.000      | -            | -                | -                | -         |   -23.34 | Angelka, Hanka, LETi, Liina, vicu |
|           11 |      950 | 2024-03-14 | 1WIN Gang         | W   | 0.940      | 0.331        | 0.006 (0.002)    | -                | 0 (0.000) |     5.35 | Angelka, Hanka, LETi, Liina, vicu |
|           10 |     1152 | 2024-03-06 | Fearless Cheetahs | W   | 0.887      | 0.331        | 0.033 (0.010)    | 0.214 (0.063)    | -         |    10.32 | Angelka, Hanka, LETi, Liina, vicu |
|            9 |     1373 | 2024-02-25 | BIG EQUIPA        | W   | 0.819      | 0.238        | -                | 0.376 (0.073)    | -         |     8.41 | Angelka, Hanka, LETi, Liina, vicu |
|            8 |     1377 | 2024-02-25 | ENCE Athena       | W   | 0.818      | 0.238        | -                | 0.162 (0.032)    | -         |     7.10 | Angelka, Hanka, LETi, Liina, vicu |
|            7 |     1411 | 2024-02-24 | VP.Angels         | W   | 0.812      | -            | -                | -                | -         |     6.66 | Angelka, Hanka, LETi, Liina, vicu |
|            6 |     1790 | 2024-02-04 | VIOLET            | W   | 0.680      | -            | -                | -                | -         |     2.93 | Angelka, Hanka, LETi, Liina, vicu |
|            5 |     2788 | 2023-12-10 | Pigeons           | L   | 0.306      | -            | -                | -                | -         |    -4.27 | Angelka, Hanka, LETi, Liina, vicu |
|            4 |     2794 | 2023-12-10 | Fluxo Demons      | W   | 0.305      | 0.524        | 0.025 (0.004)    | 0.375 (0.060)    | 1 (0.305) |     3.97 | Angelka, Hanka, LETi, Liina, vicu |
|            3 |     2818 | 2023-12-09 | FURIA fe          | W   | 0.299      | 0.524        | 0.030 (0.005)    | 0.293 (0.046)    | 1 (0.299) |     3.61 | Angelka, Hanka, LETi, Liina, vicu |
|            2 |     2833 | 2023-12-08 | Fearless Cheetahs | L   | 0.293      | -            | -                | -                | -         |    -5.53 | Angelka, Hanka, LETi, Liina, vicu |
|            1 |     2835 | 2023-12-08 | Shimmer           | W   | 0.292      | 0.524        | 0.020 (0.003)    | 0.316 (0.048)    | 1 (0.292) |     3.08 | Angelka, Hanka, LETi, Liina, vicu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,174.15)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-16 |      1.000 | $3,500.00      | $3,500.00       |
| 2024-02-25 |      0.819 | $630.00        | $516.17         |
| 2024-02-04 |      0.680 | $750.00        | $509.84         |
| 2023-12-10 |      0.306 | $25,000.00     | $7,648.14       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
