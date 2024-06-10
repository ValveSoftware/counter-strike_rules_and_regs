### Roster Details<br />
Team Name: Imperial fe<br />
Roster: ANa, Kat, tory, twenty3, zAAz<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [46](../standings_global.md)<br />
Regional Rank: [34]( ../standings_europe.md)<br />
Final Rank Value:  1116.4<br />
<br />
Final Rank Value (1116.4) = Starting Rank Value (1110.6) + Head To Head Adjustments (5.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.572[<sup>1</sup>](#table2)
- Bounty Collected: 0.345[<sup>2</sup>](#table1)
- Opponent Network: 0.082[<sup>2</sup>](#table1)
- LAN Wins: 0.426[<sup>2</sup>](#table1)

The average of these factors is 0.356<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1110.6
- 400 + ( ( 0.356 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1110.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |      382 | 2024-06-02 | Let Her Cook  | W   | 1.000      | 0.524        | 0.082 (0.043)    | 0.225 (0.118)    | 1 (1.000) |     9.69 | ANa, Kat, tory, twenty3, zAAz            |
|           25 |      389 | 2024-06-02 | Fluxo Demons  | W   | 1.000      | 0.524        | 0.044 (0.023)    | 0.282 (0.148)    | 1 (1.000) |     8.52 | ANa, Kat, tory, twenty3, zAAz            |
|           24 |      447 | 2024-05-31 | BIG EQUIPA    | W   | 1.000      | 0.524        | 0.025 (0.013)    | 0.295 (0.155)    | 1 (1.000) |     6.08 | ANa, Kat, tory, twenty3, zAAz            |
|           23 |      464 | 2024-05-31 | HSG fe        | W   | 1.000      | 0.524        | 0.043 (0.022)    | 0.100 (0.052)    | 1 (1.000) |     7.11 | ANa, Kat, tory, twenty3, zAAz            |
|           22 |      766 | 2024-05-19 | NAVI Javelins | L   | 1.000      | -            | -                | -                | -         |   -22.38 | Angelka, Hanka, LETi, Liina, vicu        |
|           21 |      776 | 2024-05-19 | NIP Impact    | W   | 1.000      | 0.281        | -                | 0.197 (0.055)    | 0 (0.000) |     4.17 | ANa, Kat, tory, twenty3, zAAz            |
|           20 |      793 | 2024-05-18 | Crescent fe   | W   | 1.000      | 0.281        | 0.007 (0.002)    | -                | 0 (0.000) |     2.17 | akiyanora, amore, ayaka, Margo, meo      |
|           19 |     1176 | 2024-05-05 | Crescent fe   | W   | 0.959      | 0.250        | 0.007 (0.002)    | -                | 0 (0.000) |     2.13 | akiyanora, amore, ayaka, Margo, meo      |
|           18 |     1343 | 2024-04-27 | NIP Impact    | W   | 0.906      | 0.252        | -                | 0.197 (0.045)    | 0 (0.000) |     3.77 | ANa, Kat, tory, twenty3, zAAz            |
|           17 |     1346 | 2024-04-27 | Spirit fe     | W   | 0.905      | -            | -                | -                | 0 (0.000) |     1.91 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|           16 |     1539 | 2024-04-19 | ex-GUILD fe   | W   | 0.853      | -            | -                | -                | 0 (0.000) |     2.65 | Ann4, D7, KiTKaT, Nea, pullox            |
|           15 |     1664 | 2024-04-16 | NAVI Javelins | L   | 0.833      | -            | -                | -                | -         |   -20.10 | Angelka, Hanka, LETi, Liina, vicu        |
|           14 |     1698 | 2024-04-14 | NIP Impact    | W   | 0.820      | 0.303        | -                | 0.197 (0.049)    | -         |     3.45 | aiM, jenkon, Nayomy, Qiyarah, ramziiN    |
|           13 |     1716 | 2024-04-13 | NAVI Javelins | W   | 0.812      | 0.303        | 0.041 (0.010)    | 0.330 (0.081)    | -         |     5.48 | Angelka, Hanka, LETi, Liina, vicu        |
|           12 |     1752 | 2024-04-11 | Astralis W    | W   | 0.800      | -            | -                | -                | -         |     1.55 | anja, aurora, Ismo, josefine, marie      |
|           11 |     1799 | 2024-04-10 | Astralis W    | W   | 0.793      | -            | -                | -                | -         |     1.56 | anja, aurora, Ismo, josefine, marie      |
|           10 |     1886 | 2024-04-08 | Crescent fe   | W   | 0.779      | 0.303        | 0.007 (0.002)    | -                | -         |     2.10 | akiyanora, amore, ayaka, Margo, meo      |
|            9 |     1916 | 2024-04-07 | NIP Impact    | W   | 0.772      | -            | -                | -                | -         |     3.09 | ANa, Kat, tory, twenty3, zAAz            |
|            8 |     1920 | 2024-04-07 | BIG EQUIPA    | W   | 0.772      | 0.262        | 0.025 (0.005)    | 0.295 (0.060)    | -         |     4.31 | JennyR, juliano, kyossa, pauliiee, Zana  |
|            7 |     1936 | 2024-04-06 | ENCE Athena   | W   | 0.765      | -            | -                | -                | -         |     1.96 | Aida, Emmsan, miLo, Waldee, xia          |
|            6 |     2157 | 2024-03-27 | ENCE Athena   | W   | 0.701      | -            | -                | -                | -         |     1.90 | Aida, Emmsan, miLo, Waldee, xia          |
|            5 |     2394 | 2024-03-14 | BIG EQUIPA    | W   | 0.614      | 0.331        | 0.025 (0.005)    | 0.295 (0.060)    | -         |     3.64 | JennyR, juliano, kyossa, pauliiee, Zana  |
|            4 |     2572 | 2024-03-07 | NIP Impact    | W   | 0.567      | -            | -                | -                | -         |     2.03 | aiM, jenkon, Nayomy, Qiyarah, ramziiN    |
|            3 |     2803 | 2024-02-26 | 500           | L   | 0.498      | -            | -                | -                | -         |   -13.47 | ANa, Kat, tory, twenty3, zAAz            |
|            2 |     3224 | 2024-02-05 | Sampi         | L   | 0.359      | -            | -                | -                | -         |    -8.11 | ANa, Kat, tory, twenty3, zAAz            |
|            1 |     3383 | 2024-01-29 | ex-Sprout     | L   | 0.311      | -            | -                | -                | -         |    -9.37 | ANa, hyskeee, Kat, tory, twenty3         |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($54,219.40)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.18) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      1.000 | $50,000.00     | $50,000.00      |
| 2024-05-19 |      1.000 | $800.00        | $800.00         |
| 2024-05-05 |      0.959 | $750.00        | $719.19         |
| 2024-04-27 |      0.906 | $535.00        | $484.57         |
| 2024-04-16 |      0.833 | $1,500.00      | $1,250.15       |
| 2024-04-07 |      0.772 | $1,250.00      | $965.48         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
