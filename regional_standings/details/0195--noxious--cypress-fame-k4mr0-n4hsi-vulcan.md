### Roster Details<br />
Team Name: Noxious<br />
Roster: cypress, FAME, K4mr0, N4hSi, VulcaN<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [195](../standings_global.md)<br />
Regional Rank: [59]( ../standings_americas.md)<br />
Final Rank Value:  615.1<br />
<br />
Final Rank Value (615.1) = Starting Rank Value (695.6) + Head To Head Adjustments (-80.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.307[<sup>1</sup>](#table2)
- Bounty Collected: 0.237[<sup>2</sup>](#table1)
- Opponent Network: 0.034[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.144<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 695.6
- 400 + ( ( 0.144 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 695.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |       73 | 2023-02-08 | Vendetta       | L   | 1.000      | -            | -                | -                | -         |    -6.56 | cypress, FAME, K4mr0, N4hSi, VulcaN       |
|           24 |       96 | 2023-02-07 | ATK            | L   | 1.000      | -            | -                | -                | -         |    -4.67 | cypress, FAME, K4mr0, N4hSi, VulcaN       |
|           23 |      144 | 2023-02-05 | Vendetta       | L   | 1.000      | -            | -                | -                | -         |    -6.95 | cypress, FAME, K4mr0, N4hSi, VulcaN       |
|           22 |      254 | 2023-01-31 | Mythic         | L   | 1.000      | -            | -                | -                | -         |   -13.48 | cypress, FAME, K4mr0, N4hSi, VulcaN       |
|           21 |      256 | 2023-01-31 | Cartel terraza | W   | 1.000      | 0.384        | 0.002 (0.001)    | 0.113 (0.043)    | 0 (0.000) |    14.62 | cypress, FAME, K4mr0, N4hSi, VulcaN       |
|           20 |      360 | 2023-01-27 | Eros           | L   | 1.000      | -            | -                | -                | -         |   -12.20 | cypress, FAME, K4mr0, N4hSi, VulcaN       |
|           19 |      425 | 2023-01-25 | Limitless      | W   | 1.000      | 0.384        | 0.007 (0.003)    | 0.287 (0.110)    | 0 (0.000) |    20.04 | cypress, FAME, K4mr0, N4hSi, VulcaN       |
|           18 |      427 | 2023-01-25 | Nouns          | L   | 1.000      | -            | -                | -                | -         |    -5.93 | cypress, FAME, K4mr0, N4hSi, VulcaN       |
|           17 |      729 | 2023-01-07 | REIGN          | W   | 0.962      | 0.143        | 0.003 (0.000)    | 0.153 (0.021)    | 0 (0.000) |    15.88 | cypress, FAME, Slash, VulcaN, YuZ         |
|           16 |      757 | 2022-12-18 | Villainous     | L   | 0.829      | -            | -                | -                | -         |   -14.36 | cypress, FAME, Slash, VulcaN, YuZ         |
|           15 |      829 | 2022-12-16 | Limitless      | L   | 0.816      | -            | -                | -                | -         |    -8.74 | Grizz, JBa, kmrn, Makzwell, scar          |
|           14 |     1054 | 2022-12-07 | Red Wolves     | W   | 0.756      | 0.435        | 0.002 (0.001)    | 0.291 (0.095)    | 0 (0.000) |    12.72 | cypress, FAME, Slash, VulcaN, YuZ         |
|           13 |     1095 | 2022-12-06 | Vendetta       | L   | 0.749      | -            | -                | -                | -         |    -6.90 | chop, CLASIA, consti, Pluto, Tender       |
|           12 |     1100 | 2022-12-06 | ATK            | L   | 0.748      | -            | -                | -                | -         |    -3.29 | b0denmaster, djay, Fadey, MisteM, Swisher |
|           11 |     1132 | 2022-12-05 | Mythic         | L   | 0.742      | -            | -                | -                | -         |   -10.20 | Cooper, fl0m, freakazoid, hate, tweiss    |
|           10 |     1322 | 2022-11-29 | Mystic         | L   | 0.702      | -            | -                | -                | -         |   -14.64 | Brashi, Creed, dAVE, supa, xam            |
|            9 |     1370 | 2022-11-27 | Red Wolves     | L   | 0.689      | -            | -                | -                | -         |   -11.23 | Fatality, K4mr0, Locke, sam, SummY        |
|            8 |     1403 | 2022-11-26 | The Sisterhood | L   | 0.682      | -            | -                | -                | -         |   -15.45 | flixxy, nicx, pengnax, TiCx, xCAPE        |
|            7 |     1508 | 2022-11-22 | Disconnected   | L   | 0.655      | -            | -                | -                | -         |    -8.96 | aris, D4rtyMontana, Fr3nk1e, silas, Swahn |
|            6 |     1666 | 2022-11-09 | Nouns          | L   | 0.568      | -            | -                | -                | -         |    -4.37 | Bwills, cJ, cxzi, cynic, nosraC           |
|            5 |     1670 | 2022-11-08 | Villainous     | L   | 0.562      | -            | -                | -                | -         |   -12.81 | Alvin, BeaKie, shutout, tatm, zebra       |
|            4 |     2302 | 2022-10-09 | Villainous     | W   | 0.362      | 0.371        | 0.003 (0.000)    | 0.097 (0.013)    | 0 (0.000) |     4.89 | Alvin, omniscient, shutout, tatm, zebra   |
|            3 |     2379 | 2022-10-05 | Red Wolves     | W   | 0.336      | 0.371        | 0.002 (0.000)    | 0.291 (0.036)    | 0 (0.000) |     4.72 | Fatality, K4mr0, Locke, sam, Shawta       |
|            2 |     2571 | 2022-09-27 | Snakes Den     | W   | 0.282      | 0.371        | 0.002 (0.000)    | 0.059 (0.006)    | 0 (0.000) |     3.77 | ChwE, Pat_, Pr0mise, Reason, turnz        |
|            1 |     2725 | 2022-09-22 | Cartel terraza | W   | 0.249      | 0.371        | 0.002 (0.000)    | 0.113 (0.010)    | 0 (0.000) |     3.55 | cypress, FAME, Slash, Swqft, VulcaN       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,630.33)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
