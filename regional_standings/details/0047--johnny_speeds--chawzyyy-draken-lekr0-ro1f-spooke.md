### Roster Details<br />
Team Name: Johnny Speeds<br />
Roster: chawzyyy, draken, Lekr0, Ro1f, spooke<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [47](../standings_global.md)<br />
Regional Rank: [35]( ../standings_europe.md)<br />
Final Rank Value:  1100.7<br />
<br />
Final Rank Value (1100.7) = Starting Rank Value (1112.2) + Head To Head Adjustments (-11.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.478[<sup>1</sup>](#table2)
- Bounty Collected: 0.353[<sup>2</sup>](#table1)
- Opponent Network: 0.171[<sup>2</sup>](#table1)
- LAN Wins: 0.426[<sup>2</sup>](#table1)

The average of these factors is 0.357<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1112.2
- 400 + ( ( 0.357 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1112.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |       44 | 2024-06-09 | Alliance        | W   | 1.000      | 0.347        | 0.012 (0.004)    | 0.513 (0.178)    | 1 (1.000) |     7.60 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           26 |       83 | 2024-06-09 | Preasy          | W   | 1.000      | 0.347        | 0.012 (0.004)    | -                | 1 (1.000) |     4.76 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           25 |      357 | 2024-06-04 | Enterprise      | L   | 1.000      | -            | -                | -                | -         |   -21.82 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           24 |      376 | 2024-06-03 | brazylijski luz | W   | 1.000      | 0.371        | -                | 0.355 (0.132)    | 0 (0.000) |     6.61 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           23 |      378 | 2024-06-03 | Zero Tenacity   | W   | 1.000      | 0.371        | 0.154 (0.057)    | 1.000 (0.371)    | 0 (0.000) |    18.03 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           22 |      470 | 2024-05-31 | UNiTY           | L   | 1.000      | -            | -                | -                | -         |   -21.63 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           21 |      575 | 2024-05-26 | Preasy          | W   | 1.000      | 0.371        | 0.012 (0.004)    | -                | 0 (0.000) |     4.77 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           20 |      673 | 2024-05-22 | Permitta        | W   | 1.000      | 0.371        | 0.022 (0.008)    | 0.972 (0.360)    | 0 (0.000) |     6.91 | bobeksde, draken, Lekr0, Ro1f, spooke     |
|           19 |      986 | 2024-05-14 | ECF             | L   | 1.000      | -            | -                | -                | -         |   -25.06 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           18 |     1002 | 2024-05-13 | UNiTY           | W   | 1.000      | 0.333        | 0.029 (0.010)    | 0.247 (0.082)    | 0 (0.000) |     9.46 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           17 |     1008 | 2024-05-13 | ECLOT           | W   | 1.000      | 0.333        | 0.101 (0.034)    | 0.549 (0.183)    | 0 (0.000) |    17.97 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           16 |     1019 | 2024-05-12 | Verdant         | W   | 1.000      | 0.333        | 0.014 (0.005)    | 0.261 (0.087)    | -         |     5.91 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           15 |     1032 | 2024-05-12 | Preasy          | L   | 1.000      | -            | -                | -                | -         |   -27.16 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           14 |     1048 | 2024-05-11 | Lilmix          | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.18 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           13 |     1062 | 2024-05-11 | Flying Angels   | W   | 0.998      | -            | -                | -                | 1 (0.998) |     1.17 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           12 |     1080 | 2024-05-10 | FAVBET          | W   | 0.991      | 0.333        | -                | 0.333 (0.110)    | -         |     5.07 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           11 |     1604 | 2024-04-18 | UNiTY           | W   | 0.845      | 0.333        | 0.029 (0.008)    | -                | -         |     8.82 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           10 |     1669 | 2024-04-16 | Viperio         | W   | 0.832      | -            | -                | -                | -         |     1.95 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            9 |     1915 | 2024-04-07 | Alliance        | W   | 0.773      | 0.330        | -                | 0.513 (0.131)    | -         |     5.96 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|            8 |     1923 | 2024-04-07 | Metizport       | L   | 0.771      | -            | -                | -                | -         |   -13.20 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|            7 |     1933 | 2024-04-06 | JANO            | W   | 0.765      | -            | -                | -                | -         |     2.15 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|            6 |     2534 | 2024-03-09 | Alliance        | L   | 0.579      | -            | -                | -                | -         |   -14.08 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            5 |     2635 | 2024-03-05 | B8              | L   | 0.554      | -            | -                | -                | -         |    -8.83 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            4 |     2641 | 2024-03-05 | Insilio         | W   | 0.553      | -            | -                | -                | -         |     4.44 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            3 |     2648 | 2024-03-05 | Sashi           | W   | 0.553      | 0.143        | 0.174 (0.014)    | 1.000 (0.079)    | -         |     7.67 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            2 |     4030 | 2024-01-09 | Enterprise      | L   | 0.180      | -            | -                | -                | -         |    -4.03 | chawzyyy, draken, HugoXD, RuStY, spooke   |
|            1 |     4052 | 2024-01-09 | UNiTY           | W   | 0.179      | -            | -                | -                | -         |     1.88 | chawzyyy, draken, HugoXD, RuStY, spooke   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($24,689.77)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $7,224.00      | $7,224.00       |
| 2024-06-06 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-05-16 |      1.000 | $500.00        | $500.00         |
| 2024-05-13 |      1.000 | $6,000.00      | $6,000.00       |
| 2024-05-11 |      1.000 | $4,170.00      | $4,170.00       |
| 2024-04-18 |      0.845 | $6,000.00      | $5,069.05       |
| 2024-04-07 |      0.773 | $940.00        | $726.72         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
