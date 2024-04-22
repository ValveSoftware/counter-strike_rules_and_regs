### Roster Details<br />
Team Name: Pigeons<br />
Roster: ANa, Kat, tory, twenty3, zAAz<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [55](../standings_global.md)<br />
Regional Rank: [40]( ../standings_europe.md)<br />
Final Rank Value:  930.0<br />
<br />
Final Rank Value (930.0) = Starting Rank Value (888.1) + Head To Head Adjustments (41.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.494[<sup>1</sup>](#table2)
- Bounty Collected: 0.304[<sup>2</sup>](#table1)
- Opponent Network: 0.084[<sup>2</sup>](#table1)
- LAN Wins: 0.129[<sup>2</sup>](#table1)

The average of these factors is 0.253<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 888.1
- 400 + ( ( 0.253 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 888.1


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
|           21 |       92 | 2024-04-19 | GUILD fe          | W   | 1.000      | 0.331        | 0.009 (0.003)    | 0.220 (0.073)    | 0 (0.000) |     7.17 | ANa, Kat, tory, twenty3, zAAz          |
|           20 |      217 | 2024-04-16 | NAVI Javelins     | L   | 1.000      | -            | -                | -                | -         |   -18.32 | ANa, Kat, tory, twenty3, zAAz          |
|           19 |      251 | 2024-04-14 | NIP Impact        | W   | 1.000      | 0.303        | 0.008 (0.002)    | 0.278 (0.084)    | 0 (0.000) |     9.00 | ANa, Kat, tory, twenty3, zAAz          |
|           18 |      269 | 2024-04-13 | NAVI Javelins     | W   | 1.000      | 0.303        | 0.064 (0.019)    | 0.467 (0.141)    | 0 (0.000) |    12.54 | ANa, Kat, tory, twenty3, zAAz          |
|           17 |      305 | 2024-04-11 | Astralis W        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.84 | ANa, Kat, tory, twenty3, zAAz          |
|           16 |      352 | 2024-04-10 | Astralis W        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.08 | ANa, Kat, tory, twenty3, zAAz          |
|           15 |      439 | 2024-04-08 | VP.Angels         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.91 | ANa, Kat, tory, twenty3, zAAz          |
|           14 |      469 | 2024-04-07 | NIP Impact        | W   | 1.000      | 0.262        | 0.008 (0.002)    | 0.278 (0.073)    | -         |     9.91 | ANa, Kat, tory, twenty3, zAAz          |
|           13 |      473 | 2024-04-07 | BIG EQUIPA        | W   | 1.000      | 0.262        | -                | 0.376 (0.098)    | -         |     9.69 | ANa, Kat, tory, twenty3, zAAz          |
|           12 |      489 | 2024-04-06 | ENCE Athena       | W   | 1.000      | 0.262        | 0.007 (0.002)    | 0.162 (0.042)    | -         |     7.02 | ANa, Kat, tory, twenty3, zAAz          |
|           11 |      710 | 2024-03-27 | ENCE Athena       | W   | 1.000      | 0.331        | 0.007 (0.002)    | 0.162 (0.054)    | -         |     7.91 | ANa, Kat, tory, twenty3, zAAz          |
|           10 |      947 | 2024-03-14 | BIG EQUIPA        | W   | 0.940      | 0.331        | 0.007 (0.002)    | 0.376 (0.117)    | -         |    10.12 | ANa, Kat, tory, twenty3, zAAz          |
|            9 |     1125 | 2024-03-07 | NIP Impact        | W   | 0.894      | 0.331        | 0.008 (0.002)    | 0.278 (0.082)    | -         |     8.77 | ANa, Kat, tory, twenty3, zAAz          |
|            8 |     1356 | 2024-02-26 | 500               | L   | 0.825      | -            | -                | -                | -         |   -18.83 | ANa, Kat, tory, twenty3, zAAz          |
|            7 |     1777 | 2024-02-05 | Sampi             | L   | 0.686      | -            | -                | -                | -         |    -8.46 | ANa, Kat, tory, twenty3, zAAz          |
|            6 |     1936 | 2024-01-29 | ex-Sprout         | L   | 0.638      | -            | -                | -                | -         |   -16.74 | ANa, hyskeee, Kat, tory, twenty3       |
|            5 |     2788 | 2023-12-10 | NAVI Javelins     | W   | 0.306      | 0.524        | 0.064 (0.010)    | 0.467 (0.075)    | 1 (0.306) |     4.27 | Angelka, Hanka, LETi, Liina, vicu      |
|            4 |     2797 | 2023-12-10 | Fearless Cheetahs | W   | 0.304      | 0.524        | 0.033 (0.005)    | -                | 1 (0.304) |     3.40 | ANa, Kat, tory, twenty3, vilga         |
|            3 |     2814 | 2023-12-09 | HSG fe            | W   | 0.300      | -            | -                | -                | 1 (0.300) |     2.40 | Argent, gfi, Hazel, Olga, XiaoWu       |
|            2 |     2834 | 2023-12-08 | Fluxo Demons      | L   | 0.293      | -            | -                | -                | -         |    -5.98 | goddess, julih, nani, poppins, yungher |
|            1 |     2844 | 2023-12-08 | HSG fe            | W   | 0.291      | -            | -                | -                | 1 (0.291) |     2.26 | Argent, gfi, Hazel, Olga, XiaoWu       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($18,046.28)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-16 |      1.000 | $1,500.00      | $1,500.00       |
| 2024-04-07 |      1.000 | $1,250.00      | $1,250.00       |
| 2023-12-10 |      0.306 | $50,000.00     | $15,296.28      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
