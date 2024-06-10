### Roster Details<br />
Team Name: AMKAL<br />
Roster: Forester, ICY, Krad, Sdaim, TRAVIS<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [25](../standings_global.md)<br />
Regional Rank: [16]( ../standings_europe.md)<br />
Final Rank Value:  1325.6<br />
<br />
Final Rank Value (1325.6) = Starting Rank Value (1204.4) + Head To Head Adjustments (121.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.542[<sup>1</sup>](#table2)
- Bounty Collected: 0.526[<sup>2</sup>](#table1)
- Opponent Network: 0.409[<sup>2</sup>](#table1)
- LAN Wins: 0.137[<sup>2</sup>](#table1)

The average of these factors is 0.403<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1204.4
- 400 + ( ( 0.403 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1204.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           55 |       37 | 2024-06-09 | Monte             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.86 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           54 |       60 | 2024-06-09 | B8                | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.31 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           53 |      130 | 2024-06-08 | Monte             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.65 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           52 |      133 | 2024-06-08 | 1WIN              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.90 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           51 |      431 | 2024-06-01 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |   -22.61 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           50 |      449 | 2024-05-31 | Permitta          | W   | 1.000      | 0.435        | -                | 0.972 (0.422)    | 0 (0.000) |     3.17 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           49 |      696 | 2024-05-21 | GamerLegion       | L   | 1.000      | -            | -                | -                | -         |   -15.99 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           48 |      767 | 2024-05-19 | paiN              | W   | 1.000      | 0.769        | 0.437 (0.336)    | 0.877 (0.674)    | 0 (0.000) |    22.75 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           47 |      771 | 2024-05-19 | Liquid            | L   | 1.000      | -            | -                | -                | -         |    -3.85 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           46 |      791 | 2024-05-18 | paiN              | W   | 1.000      | 0.769        | 0.437 (0.336)    | 0.877 (0.674)    | 0 (0.000) |    23.99 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           45 |     1189 | 2024-05-04 | BetBoom           | W   | 0.953      | 0.435        | 0.427 (0.177)    | 0.917 (0.380)    | -         |    23.76 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           44 |     1199 | 2024-05-04 | Metizport         | W   | 0.951      | 0.435        | 0.078 (0.032)    | 0.706 (0.292)    | -         |     7.99 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           43 |     1204 | 2024-05-03 | Gaimin Gladiators | W   | 0.946      | 0.435        | 0.081 (0.033)    | 0.749 (0.308)    | -         |    12.74 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           42 |     1225 | 2024-05-02 | BLEED             | W   | 0.940      | 0.435        | 0.349 (0.143)    | 1.000 (0.409)    | -         |    19.28 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           41 |     1252 | 2024-05-01 | fnatic            | L   | 0.933      | -            | -                | -                | -         |   -11.26 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           40 |     1275 | 2024-04-30 | Gaimin Gladiators | W   | 0.927      | 0.384        | 0.081 (0.029)    | 0.749 (0.267)    | -         |    13.43 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           39 |     1298 | 2024-04-29 | Permitta          | W   | 0.919      | 0.384        | -                | 0.972 (0.343)    | -         |     5.92 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           38 |     1421 | 2024-04-24 | Nexus             | W   | 0.885      | -            | -                | -                | -         |     3.86 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           37 |     1470 | 2024-04-21 | Gaimin Gladiators | L   | 0.866      | -            | -                | -                | -         |   -10.68 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           36 |     1549 | 2024-04-19 | ENCE              | W   | 0.852      | 0.384        | 0.205 (0.067)    | -                | -         |    20.00 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           35 |     1591 | 2024-04-18 | Apeks             | L   | 0.846      | -            | -                | -                | -         |   -16.05 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           34 |     1599 | 2024-04-18 | M1X KS            | W   | 0.845      | -            | -                | -                | -         |     8.69 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           33 |     1673 | 2024-04-16 | B8                | W   | 0.831      | 0.384        | 0.160 (0.051)    | 1.000 (0.319)    | -         |     7.93 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           32 |     1725 | 2024-04-12 | Aurora            | L   | 0.807      | -            | -                | -                | -         |    -3.66 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           31 |     1761 | 2024-04-11 | BetBoom           | W   | 0.799      | 0.143        | 0.427 (0.049)    | -                | -         |    22.71 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           30 |     1794 | 2024-04-10 | Apeks             | W   | 0.794      | -            | -                | -                | -         |    11.26 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           29 |     1808 | 2024-04-10 | Enterprise        | L   | 0.791      | -            | -                | -                | -         |   -18.75 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           28 |     2018 | 2024-04-03 | Insilio           | W   | 0.747      | -            | -                | -                | -         |     5.48 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           27 |     2027 | 2024-04-03 | M1X KS            | W   | 0.746      | -            | -                | -                | -         |     8.13 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           26 |     2037 | 2024-04-03 | Alliance          | W   | 0.745      | -            | -                | -                | -         |     4.37 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           25 |     2066 | 2024-04-02 | PARIVISION        | W   | 0.740      | -            | -                | -                | -         |     7.28 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           24 |     2071 | 2024-04-02 | M1X KS            | L   | 0.739      | -            | -                | -                | -         |   -14.80 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           23 |     2079 | 2024-04-02 | ALTERNATE aTTaX   | W   | 0.738      | -            | -                | -                | -         |     5.58 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           22 |     2302 | 2024-03-18 | The MongolZ       | L   | 0.639      | -            | -                | -                | -         |    -0.36 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           21 |     2323 | 2024-03-17 | Apeks             | L   | 0.634      | -            | -                | -                | -         |   -10.56 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           20 |     2330 | 2024-03-17 | GamerLegion       | L   | 0.632      | -            | -                | -                | -         |   -11.02 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           19 |     2637 | 2024-03-05 | FORZE             | L   | 0.553      | -            | -                | -                | -         |   -12.19 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           18 |     2643 | 2024-03-05 | Zero Tenacity     | W   | 0.553      | -            | -                | -                | -         |     5.89 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           17 |     2738 | 2024-03-01 | BIG               | L   | 0.525      | -            | -                | -                | -         |    -3.38 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           16 |     2756 | 2024-02-28 | Young Ninjas      | L   | 0.513      | -            | -                | -                | -         |   -15.02 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           15 |     3017 | 2024-02-17 | 9 Pandas          | W   | 0.438      | -            | -                | -                | 1 (0.438) |     6.15 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           14 |     3047 | 2024-02-16 | Falcons           | W   | 0.432      | -            | -                | -                | 1 (0.432) |    11.07 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           13 |     3071 | 2024-02-15 | fnatic            | L   | 0.425      | -            | -                | -                | -         |    -4.09 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           12 |     3104 | 2024-02-14 | Ninjas in Pyjamas | W   | 0.420      | -            | -                | -                | 1 (0.420) |     0.97 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           11 |     3109 | 2024-02-14 | Enterprise        | L   | 0.418      | -            | -                | -                | -         |   -10.23 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           10 |     3164 | 2024-02-10 | Sashi             | L   | 0.393      | -            | -                | -                | -         |    -7.73 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            9 |     3177 | 2024-02-09 | Nemiga            | L   | 0.387      | -            | -                | -                | -         |    -5.38 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            8 |     3194 | 2024-02-08 | RUBY              | W   | 0.380      | -            | -                | -                | -         |     1.75 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            7 |     3199 | 2024-02-08 | Insilio           | W   | 0.379      | -            | -                | -                | -         |     1.91 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            6 |     3620 | 2024-01-19 | Astralis          | W   | 0.247      | -            | -                | -                | -         |     7.63 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            5 |     3682 | 2024-01-18 | KOI               | W   | 0.240      | -            | -                | -                | -         |     1.92 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            4 |     3701 | 2024-01-18 | ex-sYnck          | W   | 0.239      | -            | -                | -                | -         |     0.15 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            3 |     3704 | 2024-01-18 | Insilio           | W   | 0.238      | -            | -                | -                | -         |     1.21 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            2 |     3723 | 2024-01-17 | FreeESPI          | W   | 0.234      | -            | -                | -                | -         |     0.08 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            1 |     3732 | 2024-01-17 | RUBY              | W   | 0.234      | -            | -                | -                | -         |     1.07 | Forester, ICY, Krad, NickelBack, TRAVIS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($43,406.07)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-05-23 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-05-04 |      0.953 | $22,000.00     | $20,963.66      |
| 2024-05-02 |      0.940 | $1,500.00      | $1,409.68       |
| 2024-03-20 |      0.653 | $10,000.00     | $6,532.73       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
