### Roster Details<br />
Team Name: AMKAL<br />
Roster: Forester, ICY, Krad, Sdaim, TRAVIS<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [29](../standings_global.md)<br />
Regional Rank: [21]( ../standings_europe.md)<br />
Final Rank Value:  1265.3<br />
<br />
Final Rank Value (1265.3) = Starting Rank Value (1197.8) + Head To Head Adjustments (67.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.588[<sup>1</sup>](#table2)
- Bounty Collected: 0.498[<sup>2</sup>](#table1)
- Opponent Network: 0.366[<sup>2</sup>](#table1)
- LAN Wins: 0.223[<sup>2</sup>](#table1)

The average of these factors is 0.419<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1197.8
- 400 + ( ( 0.419 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1197.8


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
|           45 |       38 | 2024-05-04 | BetBoom           | W   | 1.000      | 0.435        | 0.563 (0.245)    | 1.000 (0.435)    | 0 (0.000) |    19.76 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           44 |       48 | 2024-05-04 | Metizport         | W   | 1.000      | 0.435        | 0.183 (0.080)    | 1.000 (0.435)    | 0 (0.000) |     8.17 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           43 |       53 | 2024-05-03 | Gaimin Gladiators | W   | 1.000      | 0.435        | 0.189 (0.082)    | 0.990 (0.430)    | 0 (0.000) |    14.96 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           42 |       74 | 2024-05-02 | BLEED             | W   | 1.000      | 0.435        | 0.400 (0.174)    | 1.000 (0.435)    | 0 (0.000) |    15.45 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           41 |      101 | 2024-05-01 | fnatic            | L   | 1.000      | -            | -                | -                | -         |   -15.30 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           40 |      124 | 2024-04-30 | Gaimin Gladiators | W   | 1.000      | 0.384        | 0.189 (0.073)    | 0.990 (0.381)    | 0 (0.000) |    15.96 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           39 |      147 | 2024-04-29 | Permitta          | W   | 1.000      | 0.384        | -                | 0.979 (0.376)    | 0 (0.000) |     5.87 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           38 |      270 | 2024-04-24 | Nexus             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.70 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           37 |      319 | 2024-04-21 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |    -9.59 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           36 |      398 | 2024-04-19 | ENCE              | W   | 1.000      | 0.384        | 0.360 (0.138)    | -                | -         |    23.77 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           35 |      440 | 2024-04-18 | Apeks             | L   | 1.000      | -            | -                | -                | -         |   -14.03 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           34 |      448 | 2024-04-18 | Guild Eagles      | W   | 1.000      | 0.384        | -                | 0.648 (0.249)    | -         |     8.45 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           33 |      522 | 2024-04-16 | B8                | W   | 1.000      | 0.384        | -                | 0.851 (0.327)    | -         |     6.80 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           32 |      574 | 2024-04-12 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -5.79 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           31 |      610 | 2024-04-11 | BetBoom           | W   | 1.000      | 0.143        | 0.563 (0.080)    | -                | -         |    23.43 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           30 |      643 | 2024-04-10 | Apeks             | W   | 1.000      | 0.143        | 0.237 (0.034)    | -                | -         |    19.44 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           29 |      657 | 2024-04-10 | Enterprise        | L   | 1.000      | -            | -                | -                | -         |   -22.94 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           28 |      867 | 2024-04-03 | Insilio           | W   | 0.980      | -            | -                | -                | -         |     7.53 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           27 |      876 | 2024-04-03 | Guild Eagles      | W   | 0.979      | -            | -                | -                | -         |     8.60 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           26 |      886 | 2024-04-03 | Alliance          | W   | 0.978      | 0.384        | -                | 0.815 (0.306)    | -         |     5.48 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           25 |      915 | 2024-04-02 | PARIVISION        | W   | 0.973      | -            | -                | -                | -         |     8.40 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           24 |      920 | 2024-04-02 | Guild Eagles      | L   | 0.972      | -            | -                | -                | -         |   -21.49 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           23 |      928 | 2024-04-02 | ALTERNATE aTTaX   | W   | 0.971      | 0.384        | 0.104 (0.039)    | 0.779 (0.291)    | -         |     6.07 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           22 |     1151 | 2024-03-18 | TheMongolz        | L   | 0.872      | -            | -                | -                | -         |    -5.04 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           21 |     1172 | 2024-03-17 | Apeks             | L   | 0.867      | -            | -                | -                | -         |    -7.31 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           20 |     1179 | 2024-03-17 | GamerLegion       | L   | 0.866      | -            | -                | -                | -         |    -4.61 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           19 |     1486 | 2024-03-05 | FORZE             | L   | 0.787      | -            | -                | -                | -         |   -14.06 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           18 |     1492 | 2024-03-05 | Zero Tenacity     | W   | 0.786      | -            | -                | -                | -         |     4.90 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           17 |     1587 | 2024-03-01 | BIG               | L   | 0.758      | -            | -                | -                | -         |    -5.78 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           16 |     1605 | 2024-02-28 | Young Ninjas      | L   | 0.746      | -            | -                | -                | -         |   -21.32 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           15 |     1866 | 2024-02-17 | 9 Pandas          | W   | 0.672      | -            | -                | -                | 1 (0.672) |     8.86 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           14 |     1896 | 2024-02-16 | Falcons           | W   | 0.665      | 0.143        | 0.417 (0.040)    | -                | 1 (0.665) |    15.37 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           13 |     1920 | 2024-02-15 | fnatic            | L   | 0.658      | -            | -                | -                | -         |    -9.87 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           12 |     1953 | 2024-02-14 | Ninjas in Pyjamas | W   | 0.653      | -            | -                | -                | 1 (0.653) |     2.46 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           11 |     1958 | 2024-02-14 | Enterprise        | L   | 0.652      | -            | -                | -                | -         |   -15.44 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           10 |     2013 | 2024-02-10 | Sashi             | L   | 0.626      | -            | -                | -                | -         |   -14.19 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            9 |     2026 | 2024-02-09 | Nemiga            | L   | 0.620      | -            | -                | -                | -         |    -8.10 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            8 |     2043 | 2024-02-08 | RUBY              | W   | 0.613      | -            | -                | -                | -         |     1.70 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            7 |     2048 | 2024-02-08 | Insilio           | W   | 0.612      | -            | -                | -                | -         |     3.20 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            6 |     2469 | 2024-01-19 | Astralis          | W   | 0.480      | -            | -                | -                | -         |    13.32 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            5 |     2531 | 2024-01-18 | KOI               | W   | 0.473      | -            | -                | -                | -         |     4.26 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            4 |     2550 | 2024-01-18 | ex-sYnck          | W   | 0.472      | -            | -                | -                | -         |     0.94 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            3 |     2553 | 2024-01-18 | Insilio           | W   | 0.472      | -            | -                | -                | -         |     2.57 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            2 |     2572 | 2024-01-17 | FreeESPI          | W   | 0.468      | -            | -                | -                | -         |     0.67 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            1 |     2581 | 2024-01-17 | RUBY              | W   | 0.467      | -            | -                | -                | -         |     1.28 | Forester, ICY, Krad, NickelBack, TRAVIS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($32,365.38)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.20) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-04 |      1.000 | $22,000.00     | $22,000.00      |
| 2024-05-02 |      1.000 | $1,500.00      | $1,500.00       |
| 2024-03-20 |      0.887 | $10,000.00     | $8,865.38       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
