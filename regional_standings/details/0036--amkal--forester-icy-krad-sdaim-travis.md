### Roster Details<br />
Team Name: AMKAL<br />
Roster: Forester, ICY, Krad, Sdaim, TRAVIS<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [36](../standings_global.md)<br />
Regional Rank: [25]( ../standings_europe.md)<br />
Final Rank Value:  1068.3<br />
<br />
Final Rank Value (1068.3) = Starting Rank Value (1007.3) + Head To Head Adjustments (60.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.437[<sup>1</sup>](#table2)
- Bounty Collected: 0.399[<sup>2</sup>](#table1)
- Opponent Network: 0.178[<sup>2</sup>](#table1)
- LAN Wins: 0.244[<sup>2</sup>](#table1)

The average of these factors is 0.314<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1007.3
- 400 + ( ( 0.314 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1007.3


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
|           37 |       23 | 2024-04-21 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |    -7.05 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           36 |      102 | 2024-04-19 | ENCE              | W   | 1.000      | 0.384        | 0.299 (0.115)    | 0.446 (0.171)    | 0 (0.000) |    24.58 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           35 |      144 | 2024-04-18 | Apeks             | L   | 1.000      | -            | -                | -                | -         |   -12.81 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           34 |      152 | 2024-04-18 | Guild Eagles      | W   | 1.000      | 0.384        | 0.046 (0.018)    | 0.727 (0.280)    | 0 (0.000) |    11.72 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           33 |      226 | 2024-04-16 | B8                | W   | 1.000      | 0.384        | -                | 0.655 (0.252)    | 0 (0.000) |     7.24 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           32 |      278 | 2024-04-12 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -6.59 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           31 |      314 | 2024-04-11 | BetBoom           | W   | 1.000      | 0.143        | 0.457 (0.065)    | 0.898 (0.128)    | 0 (0.000) |    22.59 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           30 |      347 | 2024-04-10 | Apeks             | W   | 1.000      | 0.143        | 0.193 (0.028)    | 0.687 (0.098)    | 0 (0.000) |    20.88 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           29 |      361 | 2024-04-10 | Enterprise        | L   | 1.000      | -            | -                | -                | -         |   -19.46 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           28 |      571 | 2024-04-03 | Insilio           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.28 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           27 |      580 | 2024-04-03 | Guild Eagles      | W   | 1.000      | 0.143        | 0.046 (0.007)    | 0.727 (0.104)    | 0 (0.000) |    12.72 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           26 |      590 | 2024-04-03 | Alliance          | W   | 1.000      | 0.384        | 0.020 (0.008)    | 0.855 (0.328)    | -         |     9.70 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           25 |      619 | 2024-04-02 | PARIVISION        | W   | 1.000      | -            | -                | -                | -         |     7.26 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           24 |      624 | 2024-04-02 | Guild Eagles      | L   | 1.000      | -            | -                | -                | -         |   -17.34 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           23 |      632 | 2024-04-02 | ALTERNATE aTTaX   | W   | 1.000      | 0.384        | 0.019 (0.007)    | 0.639 (0.246)    | -         |     8.72 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           22 |      855 | 2024-03-18 | TheMongolz        | L   | 0.966      | -            | -                | -                | -         |    -4.24 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           21 |      876 | 2024-03-17 | Apeks             | L   | 0.960      | -            | -                | -                | -         |    -6.03 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           20 |      883 | 2024-03-17 | GamerLegion       | L   | 0.959      | -            | -                | -                | -         |    -4.55 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           19 |     1190 | 2024-03-05 | FORZE             | L   | 0.880      | -            | -                | -                | -         |   -13.42 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           18 |     1196 | 2024-03-05 | Zero Tenacity     | W   | 0.880      | 0.143        | -                | 0.805 (0.101)    | -         |     6.47 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           17 |     1291 | 2024-03-01 | BIG               | L   | 0.851      | -            | -                | -                | -         |    -6.70 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           16 |     1309 | 2024-02-28 | Ninjas in Pyjamas | L   | 0.839      | -            | -                | -                | -         |   -17.81 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           15 |     1570 | 2024-02-17 | 9 Pandas          | W   | 0.765      | 0.143        | 0.083 (0.009)    | -                | 1 (0.765) |    14.12 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           14 |     1600 | 2024-02-16 | Falcons           | W   | 0.758      | 0.143        | 0.389 (0.042)    | -                | 1 (0.758) |    20.35 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           13 |     1624 | 2024-02-15 | fnatic            | L   | 0.751      | -            | -                | -                | -         |    -9.82 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           12 |     1657 | 2024-02-14 | Ninjas in Pyjamas | W   | 0.746      | -            | -                | -                | 1 (0.746) |     7.12 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           11 |     1662 | 2024-02-14 | Enterprise        | L   | 0.745      | -            | -                | -                | -         |   -13.29 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           10 |     1717 | 2024-02-10 | Sashi             | L   | 0.720      | -            | -                | -                | -         |   -14.74 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            9 |     1730 | 2024-02-09 | Nemiga            | L   | 0.713      | -            | -                | -                | -         |   -13.49 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            8 |     1747 | 2024-02-08 | RUBY              | W   | 0.707      | -            | -                | -                | -         |     4.24 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            7 |     1752 | 2024-02-08 | Insilio           | W   | 0.706      | -            | -                | -                | -         |     4.01 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            6 |     2173 | 2024-01-19 | Astralis          | W   | 0.573      | 0.143        | 0.155 (0.013)    | -                | -         |    15.96 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            5 |     2235 | 2024-01-18 | KOI               | W   | 0.566      | 0.143        | -                | 0.902 (0.073)    | -         |     9.55 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            4 |     2254 | 2024-01-18 | ex-sYnck          | W   | 0.566      | -            | -                | -                | -         |     3.28 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            3 |     2257 | 2024-01-18 | Insilio           | W   | 0.565      | -            | -                | -                | -         |     3.40 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            2 |     2276 | 2024-01-17 | FreeESPI          | W   | 0.561      | -            | -                | -                | -         |     2.43 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            1 |     2285 | 2024-01-17 | RUBY              | W   | 0.561      | -            | -                | -                | -         |     3.65 | Forester, ICY, Krad, NickelBack, TRAVIS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,798.45)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
