### Roster Details<br />
Team Name: HEROIC<br />
Roster: kyxsan, NertZ, nicoodoz, sjuush, TeSeS<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [11](../standings_global.md)<br />
Regional Rank: [10]( ../standings_europe.md)<br />
Final Rank Value:  1545.2<br />
<br />
Final Rank Value (1545.2) = Starting Rank Value (1590.4) + Head To Head Adjustments (-45.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.644[<sup>1</sup>](#table2)
- Bounty Collected: 0.609[<sup>2</sup>](#table1)
- Opponent Network: 0.253[<sup>2</sup>](#table1)
- LAN Wins: 0.959[<sup>2</sup>](#table1)

The average of these factors is 0.616<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1590.4
- 400 + ( ( 0.616 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1590.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |      358 | 2024-04-10 | G2           | L   | 1.000      | -            | -                | -                | -         |    -5.69 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           39 |      415 | 2024-04-09 | FURIA        | W   | 1.000      | 0.624        | 0.316 (0.197)    | 0.522 (0.326)    | 1 (1.000) |     8.28 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           38 |      449 | 2024-04-08 | 9z           | W   | 1.000      | 0.624        | 0.047 (0.029)    | 0.554 (0.346)    | 1 (1.000) |     1.74 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           37 |      459 | 2024-04-07 | Liquid       | L   | 1.000      | -            | -                | -                | -         |   -27.29 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           36 |      765 | 2024-03-23 | paiN         | L   | 1.000      | -            | -                | -                | -         |   -14.78 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           35 |      787 | 2024-03-22 | Virtus.pro   | L   | 0.991      | -            | -                | -                | -         |   -12.27 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           34 |      799 | 2024-03-21 | Complexity   | L   | 0.987      | -            | -                | -                | -         |   -24.30 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           33 |      807 | 2024-03-21 | FaZe         | W   | 0.985      | 1.000        | 1.000 (0.985)    | 0.737 (0.726)    | 1 (0.985) |    27.14 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           32 |      856 | 2024-03-18 | Eternal Fire | W   | 0.966      | 0.143        | 0.338 (0.047)    | 0.587 (0.081)    | 1 (0.966) |    17.32 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           31 |      877 | 2024-03-17 | Imperial     | W   | 0.960      | 0.143        | 0.569 (0.078)    | 1.000 (0.137)    | 1 (0.960) |    16.18 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           30 |      887 | 2024-03-17 | Lynn Vision  | W   | 0.959      | -            | -                | -                | 1 (0.959) |     2.69 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           29 |      987 | 2024-03-13 | Metizport    | W   | 0.932      | 0.143        | -                | 1.000 (0.133)    | -         |     1.88 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           28 |     1012 | 2024-03-12 | Virtus.pro   | L   | 0.927      | -            | -                | -                | -         |   -10.56 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           27 |     1029 | 2024-03-11 | ENCE         | W   | 0.920      | 0.143        | 0.299 (0.039)    | -                | -         |     8.20 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           26 |     1041 | 2024-03-11 | Preasy       | W   | 0.919      | 0.143        | -                | 0.723 (0.095)    | -         |     1.93 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           25 |     1082 | 2024-03-09 | OG           | L   | 0.906      | -            | -                | -                | -         |   -23.56 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           24 |     1158 | 2024-03-06 | Young Ninjas | W   | 0.886      | 0.535        | 0.082 (0.039)    | 0.313 (0.148)    | -         |     0.74 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           23 |     1439 | 2024-02-22 | GamerLegion  | W   | 0.799      | -            | -                | -                | 1 (0.799) |     5.62 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           22 |     1460 | 2024-02-21 | Spirit       | L   | 0.793      | -            | -                | -                | -         |    -3.55 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           21 |     1497 | 2024-02-20 | Astralis     | W   | 0.785      | -            | -                | -                | 1 (0.785) |     6.60 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           20 |     1511 | 2024-02-19 | Vitality     | L   | 0.780      | -            | -                | -                | -         |    -5.60 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           19 |     1519 | 2024-02-19 | Preasy       | W   | 0.779      | -            | -                | -                | 1 (0.779) |     1.37 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           18 |     1762 | 2024-02-06 | G2           | L   | 0.694      | -            | -                | -                | -         |    -3.84 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           17 |     1769 | 2024-02-06 | GamerLegion  | W   | 0.692      | 1.000        | 0.185 (0.128)    | 0.368 (0.254)    | 1 (0.692) |     5.04 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           16 |     1776 | 2024-02-05 | Vitality     | W   | 0.686      | 1.000        | 1.000 (0.686)    | 0.420 (0.288)    | -         |    17.07 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           15 |     1827 | 2024-02-03 | G2           | L   | 0.672      | -            | -                | -                | -         |    -3.16 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           14 |     1897 | 2024-01-31 | BIG          | W   | 0.654      | 0.143        | 0.471 (0.044)    | -                | -         |     3.12 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           13 |     1907 | 2024-01-31 | Astralis     | W   | 0.652      | -            | -                | -                | -         |     6.45 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           12 |     1991 | 2024-01-25 | BIG          | L   | 0.614      | -            | -                | -                | -         |   -16.92 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           11 |     2006 | 2024-01-24 | Cloud9       | L   | 0.607      | -            | -                | -                | -         |    -6.65 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           10 |     2114 | 2024-01-20 | ex-sYnck     | W   | 0.580      | -            | -                | -                | -         |     0.20 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            9 |     2134 | 2024-01-20 | IKLA         | W   | 0.578      | -            | -                | -                | -         |     0.11 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            8 |     2179 | 2024-01-19 | KOI          | L   | 0.572      | -            | -                | -                | -         |   -17.19 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            7 |     2234 | 2024-01-18 | MOUZ         | L   | 0.566      | -            | -                | -                | -         |    -3.39 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            6 |     2242 | 2024-01-18 | FORZE        | W   | 0.566      | -            | -                | -                | -         |     0.53 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            5 |     2505 | 2024-01-11 | SINNERS      | W   | 0.521      | -            | -                | -                | -         |     0.82 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            4 |     2509 | 2024-01-11 | IKLA         | W   | 0.520      | -            | -                | -                | -         |     0.08 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            3 |     2522 | 2024-01-11 | ex-sYnck     | W   | 0.519      | -            | -                | -                | -         |     0.15 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            2 |     2528 | 2024-01-11 | HAVU         | W   | 0.519      | -            | -                | -                | -         |     0.24 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            1 |     2548 | 2024-01-10 | GUN5         | W   | 0.514      | -            | -                | -                | -         |     0.08 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($53,454.99)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.28) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $6,000.00      | $6,000.00       |
| 2024-03-31 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-03-10 |      0.914 | $7,500.00      | $6,854.20       |
| 2024-02-11 |      0.726 | $24,000.00     | $17,434.71      |
| 2024-01-28 |      0.633 | $5,000.00      | $3,166.09       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
