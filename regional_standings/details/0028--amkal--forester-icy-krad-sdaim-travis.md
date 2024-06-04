### Roster Details<br />
Team Name: AMKAL<br />
Roster: Forester, ICY, Krad, Sdaim, TRAVIS<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [28](../standings_global.md)<br />
Regional Rank: [19]( ../standings_europe.md)<br />
Final Rank Value:  1262.5<br />
<br />
Final Rank Value (1262.5) = Starting Rank Value (1198.9) + Head To Head Adjustments (63.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.543[<sup>1</sup>](#table2)
- Bounty Collected: 0.528[<sup>2</sup>](#table1)
- Opponent Network: 0.409[<sup>2</sup>](#table1)
- LAN Wins: 0.166[<sup>2</sup>](#table1)

The average of these factors is 0.412<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1198.9
- 400 + ( ( 0.412 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1198.9


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
|           49 |      196 | 2024-05-21 | GamerLegion       | L   | 1.000      | -            | -                | -                | -         |   -16.37 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           48 |      267 | 2024-05-19 | paiN              | W   | 1.000      | 0.769        | 0.464 (0.357)    | 0.829 (0.637)    | 0 (0.000) |    23.56 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           47 |      271 | 2024-05-19 | Liquid            | L   | 1.000      | -            | -                | -                | -         |    -3.70 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           46 |      291 | 2024-05-18 | paiN              | W   | 1.000      | 0.769        | 0.464 (0.357)    | 0.829 (0.637)    | 0 (0.000) |    24.77 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           45 |      689 | 2024-05-04 | BetBoom           | W   | 1.000      | 0.435        | 0.392 (0.170)    | 0.951 (0.413)    | 0 (0.000) |    20.41 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           44 |      699 | 2024-05-04 | Metizport         | W   | 1.000      | 0.435        | 0.088 (0.038)    | 0.860 (0.374)    | 0 (0.000) |     8.34 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           43 |      704 | 2024-05-03 | Gaimin Gladiators | W   | 1.000      | 0.435        | 0.090 (0.039)    | 0.809 (0.352)    | 0 (0.000) |    13.20 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           42 |      725 | 2024-05-02 | BLEED             | W   | 1.000      | 0.435        | 0.246 (0.107)    | 0.982 (0.427)    | 0 (0.000) |    16.98 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           41 |      752 | 2024-05-01 | fnatic            | L   | 1.000      | -            | -                | -                | -         |   -17.32 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           40 |      775 | 2024-04-30 | Gaimin Gladiators | W   | 1.000      | 0.384        | 0.090 (0.035)    | 0.809 (0.311)    | 0 (0.000) |    13.92 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           39 |      798 | 2024-04-29 | Permitta          | W   | 0.998      | 0.384        | -                | 1.000 (0.384)    | -         |     6.08 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           38 |      921 | 2024-04-24 | Nexus             | W   | 0.964      | -            | -                | -                | -         |     4.49 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           37 |      970 | 2024-04-21 | Gaimin Gladiators | L   | 0.945      | -            | -                | -                | -         |   -11.56 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           36 |     1049 | 2024-04-19 | ENCE              | W   | 0.932      | 0.384        | 0.199 (0.071)    | -                | -         |    20.85 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           35 |     1091 | 2024-04-18 | Apeks             | L   | 0.925      | -            | -                | -                | -         |   -16.19 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           34 |     1099 | 2024-04-18 | ex-Guild Eagles   | W   | 0.925      | -            | -                | -                | -         |     6.69 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           33 |     1173 | 2024-04-16 | B8                | W   | 0.910      | 0.384        | 0.165 (0.058)    | 1.000 (0.350)    | -         |     8.43 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           32 |     1225 | 2024-04-12 | Aurora            | L   | 0.886      | -            | -                | -                | -         |    -6.11 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           31 |     1261 | 2024-04-11 | BetBoom           | W   | 0.878      | 0.143        | 0.392 (0.049)    | -                | -         |    20.86 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           30 |     1294 | 2024-04-10 | Apeks             | W   | 0.873      | -            | -                | -                | -         |    13.59 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           29 |     1308 | 2024-04-10 | Enterprise        | L   | 0.870      | -            | -                | -                | -         |   -21.53 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           28 |     1518 | 2024-04-03 | Insilio           | W   | 0.826      | -            | -                | -                | -         |     5.84 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           27 |     1527 | 2024-04-03 | ex-Guild Eagles   | W   | 0.825      | -            | -                | -                | -         |     5.97 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           26 |     1537 | 2024-04-03 | Alliance          | W   | 0.824      | -            | -                | -                | -         |     4.14 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           25 |     1566 | 2024-04-02 | PARIVISION        | W   | 0.819      | -            | -                | -                | -         |     7.23 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           24 |     1571 | 2024-04-02 | ex-Guild Eagles   | L   | 0.818      | -            | -                | -                | -         |   -19.69 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           23 |     1579 | 2024-04-02 | ALTERNATE aTTaX   | W   | 0.817      | 0.384        | -                | 0.650 (0.204)    | -         |     4.90 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           22 |     1802 | 2024-03-18 | TheMongolz        | L   | 0.718      | -            | -                | -                | -         |    -3.54 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           21 |     1823 | 2024-03-17 | Apeks             | L   | 0.713      | -            | -                | -                | -         |   -10.12 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           20 |     1830 | 2024-03-17 | GamerLegion       | L   | 0.712      | -            | -                | -                | -         |   -10.69 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           19 |     2137 | 2024-03-05 | FORZE             | L   | 0.633      | -            | -                | -                | -         |   -13.73 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           18 |     2143 | 2024-03-05 | Zero Tenacity     | W   | 0.632      | -            | -                | -                | -         |     5.80 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           17 |     2238 | 2024-03-01 | BIG               | L   | 0.604      | -            | -                | -                | -         |    -4.76 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           16 |     2256 | 2024-02-28 | Young Ninjas      | L   | 0.592      | -            | -                | -                | -         |   -17.23 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           15 |     2517 | 2024-02-17 | 9 Pandas          | W   | 0.518      | -            | -                | -                | 1 (0.518) |     7.24 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           14 |     2547 | 2024-02-16 | Falcons           | W   | 0.511      | -            | -                | -                | 1 (0.511) |    13.67 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           13 |     2571 | 2024-02-15 | fnatic            | L   | 0.504      | -            | -                | -                | -         |    -9.57 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           12 |     2604 | 2024-02-14 | Ninjas in Pyjamas | W   | 0.499      | -            | -                | -                | 1 (0.499) |     1.30 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           11 |     2609 | 2024-02-14 | Enterprise        | L   | 0.498      | -            | -                | -                | -         |   -12.97 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           10 |     2664 | 2024-02-10 | Sashi             | L   | 0.472      | -            | -                | -                | -         |   -10.93 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            9 |     2677 | 2024-02-09 | Nemiga            | L   | 0.466      | -            | -                | -                | -         |    -7.16 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            8 |     2694 | 2024-02-08 | RUBY              | W   | 0.459      | -            | -                | -                | -         |     1.60 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            7 |     2699 | 2024-02-08 | Insilio           | W   | 0.458      | -            | -                | -                | -         |     2.02 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            6 |     3120 | 2024-01-19 | Astralis          | W   | 0.326      | -            | -                | -                | -         |     9.80 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            5 |     3182 | 2024-01-18 | KOI               | W   | 0.319      | -            | -                | -                | -         |     1.97 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            4 |     3201 | 2024-01-18 | ex-sYnck          | W   | 0.318      | -            | -                | -                | -         |     0.34 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            3 |     3204 | 2024-01-18 | Insilio           | W   | 0.317      | -            | -                | -                | -         |     1.43 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            2 |     3223 | 2024-01-17 | FreeESPI          | W   | 0.314      | -            | -                | -                | -         |     0.28 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            1 |     3232 | 2024-01-17 | RUBY              | W   | 0.313      | -            | -                | -                | -         |     1.10 | Forester, ICY, Krad, NickelBack, TRAVIS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($43,324.46)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-23 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-05-04 |      1.000 | $22,000.00     | $22,000.00      |
| 2024-05-02 |      1.000 | $1,500.00      | $1,500.00       |
| 2024-03-20 |      0.732 | $10,000.00     | $7,324.46       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
