### Roster Details<br />
Team Name: Limitless<br />
Roster: Grizz, JBa, kmrn, Makzwell, scar<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [131](../standings_global.md)<br />
Regional Rank: [36]( ../standings_americas.md)<br />
Final Rank Value:  740.4<br />
<br />
Final Rank Value (740.4) = Starting Rank Value (764.8) + Head To Head Adjustments (-24.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.319[<sup>1</sup>](#table2)
- Bounty Collected: 0.292[<sup>2</sup>](#table1)
- Opponent Network: 0.069[<sup>2</sup>](#table1)
- LAN Wins: 0.033[<sup>2</sup>](#table1)

The average of these factors is 0.178<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 764.8
- 400 + ( ( 0.178 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 764.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |       71 | 2023-02-08 | paiN                 | L   | 1.000      | -            | -                | -                | -         |    -4.38 | Grizz, JBa, kmrn, Makzwell, scar   |
|           26 |       93 | 2023-02-07 | ATK                  | W   | 1.000      | 0.435        | 0.070 (0.031)    | 0.646 (0.281)    | 0 (0.000) |    23.57 | Grizz, JBa, kmrn, Makzwell, scar   |
|           25 |      135 | 2023-02-05 | Cartel terraza       | W   | 1.000      | 0.384        | 0.002 (0.001)    | 0.113 (0.043)    | 0 (0.000) |    11.27 | Grizz, JBa, kmrn, Makzwell, scar   |
|           24 |      139 | 2023-02-05 | Eros                 | L   | 1.000      | -            | -                | -                | -         |   -15.03 | Grizz, JBa, kmrn, Makzwell, scar   |
|           23 |      255 | 2023-01-31 | timbermen            | L   | 1.000      | -            | -                | -                | -         |   -14.59 | Grizz, JBa, kmrn, Makzwell, scar   |
|           22 |      283 | 2023-01-30 | Villainous           | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.226 (0.087)    | 0 (0.000) |     9.64 | Grizz, JBa, kmrn, Makzwell, scar   |
|           21 |      328 | 2023-01-28 | Take Charge          | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.105 (0.041)    | 0 (0.000) |     6.38 | Grizz, JBa, kmrn, Makzwell, scar   |
|           20 |      425 | 2023-01-25 | Noxious              | L   | 1.000      | -            | -                | -                | -         |   -20.04 | Grizz, JBa, kmrn, Makzwell, scar   |
|           19 |      542 | 2023-01-21 | Nouns                | L   | 1.000      | -            | -                | -                | -         |   -10.52 | Grizz, JBa, kmrn, Makzwell, scar   |
|           18 |      759 | 2022-12-18 | REIGN                | W   | 0.829      | 0.143        | 0.003 (0.000)    | 0.153 (0.018)    | 0 (0.000) |     9.61 | Grizz, JBa, kmrn, Makzwell, scar   |
|           17 |      796 | 2022-12-17 | Detonate             | L   | 0.822      | -            | -                | -                | -         |   -12.74 | Grizz, JBa, kmrn, Makzwell, scar   |
|           16 |      829 | 2022-12-16 | Noxious              | W   | 0.816      | 0.143        | 0.006 (0.001)    | 0.180 (0.021)    | 0 (0.000) |     8.74 | Grizz, JBa, kmrn, Makzwell, scar   |
|           15 |      852 | 2022-12-15 | Davenport University | L   | 0.810      | -            | -                | -                | -         |   -12.92 | Grizz, JBa, kmrn, Makzwell, scar   |
|           14 |      882 | 2022-12-14 | Eros                 | W   | 0.803      | 0.371        | 0.006 (0.002)    | 0.243 (0.073)    | 0 (0.000) |    11.01 | Grizz, JBa, kmrn, Makzwell, scar   |
|           13 |      925 | 2022-12-12 | Davenport University | L   | 0.789      | -            | -                | -                | -         |   -13.12 | Grizz, JBa, kmrn, Makzwell, scar   |
|           12 |      966 | 2022-12-10 | Eros                 | W   | 0.776      | 0.371        | 0.006 (0.002)    | 0.243 (0.070)    | 0 (0.000) |    10.14 | Grizz, JBa, kmrn, Makzwell, scar   |
|           11 |     1027 | 2022-12-08 | REIGN                | W   | 0.762      | 0.371        | 0.003 (0.001)    | 0.153 (0.043)    | -         |     8.50 | Grizz, JBa, kmrn, Makzwell, scar   |
|           10 |     2773 | 2022-09-21 | Davenport University | L   | 0.241      | -            | -                | -                | -         |    -4.05 | JBa, kmrn, Makzwell, scar, stamina |
|            9 |     2823 | 2022-09-19 | Cartel terraza       | L   | 0.229      | -            | -                | -                | -         |    -4.54 | JBa, kmrn, Makzwell, scar, stamina |
|            8 |     2874 | 2022-09-17 | 7AM NA               | L   | 0.214      | -            | -                | -                | -         |    -5.06 | JBa, kmrn, Makzwell, scar, stamina |
|            7 |     2975 | 2022-09-14 | 1 JIN                | W   | 0.196      | 0.384        | 0.006 (0.000)    | 0.192 (0.014)    | -         |     2.50 | JBa, kmrn, Makzwell, scar, stamina |
|            6 |     3157 | 2022-09-09 | 7AM NA               | L   | 0.161      | -            | -                | -                | -         |    -3.85 | JBa, kmrn, Makzwell, scar, stamina |
|            5 |     3162 | 2022-09-09 | Vireo.pro            | W   | 0.160      | -            | -                | -                | 1 (0.160) |     0.63 | JBa, kmrn, Makzwell, scar, stamina |
|            4 |     3180 | 2022-09-09 | boyfriend peek       | W   | 0.159      | -            | -                | -                | 1 (0.159) |     0.59 | JBa, kmrn, Makzwell, scar, stamina |
|            3 |     3208 | 2022-09-08 | 7AM                  | L   | 0.154      | -            | -                | -                | -         |    -3.85 | JBa, kmrn, Makzwell, scar, stamina |
|            2 |     3306 | 2022-09-03 | timbermen            | L   | 0.122      | -            | -                | -                | -         |    -1.72 | JBa, kmrn, Makzwell, scar, stamina |
|            1 |     3400 | 2022-08-31 | Evil Geniuses        | L   | 0.102      | -            | -                | -                | -         |    -0.53 | JBa, kmrn, Makzwell, scar, stamina |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,482.12)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
