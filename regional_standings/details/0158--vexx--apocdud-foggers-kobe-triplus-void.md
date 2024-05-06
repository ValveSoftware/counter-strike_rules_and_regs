### Roster Details<br />
Team Name: VexX<br />
Roster: apocdud, foggers, Kobe, TRIPLUS, void<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [158](../standings_global.md)<br />
Regional Rank: [18]( ../standings_asia.md)<br />
Final Rank Value:  656.2<br />
<br />
Final Rank Value (656.2) = Starting Rank Value (687.7) + Head To Head Adjustments (-31.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.328[<sup>1</sup>](#table2)
- Bounty Collected: 0.255[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.151<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 687.7
- 400 + ( ( 0.151 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 687.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |      484 | 2024-04-17 | Rooster            | L   | 1.000      | -            | -                | -                | -         |    -7.19 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           25 |      497 | 2024-04-17 | Vantage            | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.332 (0.047)    | 0 (0.000) |    15.52 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           24 |      659 | 2024-04-10 | Vantage            | L   | 1.000      | -            | -                | -                | -         |   -16.00 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           23 |      666 | 2024-04-10 | Vantage            | L   | 1.000      | -            | -                | -                | -         |   -17.48 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           22 |      894 | 2024-04-03 | FlyQuest           | L   | 0.977      | -            | -                | -                | -         |    -0.80 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           21 |      898 | 2024-04-03 | FlyQuest           | L   | 0.977      | -            | -                | -                | -         |    -0.81 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           20 |     1021 | 2024-03-27 | Rooster            | L   | 0.931      | -            | -                | -                | -         |    -7.93 | apocdud, foggers, kibstar, Kobe, void       |
|           19 |     1024 | 2024-03-27 | Rooster            | L   | 0.931      | -            | -                | -                | -         |    -8.47 | apocdud, foggers, kibstar, Kobe, void       |
|           18 |     1069 | 2024-03-23 | KZG                | L   | 0.904      | -            | -                | -                | -         |   -17.00 | apocdud, foggers, Kobe, rekonz, void        |
|           17 |     1071 | 2024-03-23 | Bad News Kangaroos | L   | 0.904      | -            | -                | -                | -         |    -6.80 | apocdud, foggers, Kobe, rekonz, void        |
|           16 |     1464 | 2024-03-06 | KZG                | W   | 0.791      | 0.333        | 0.018 (0.005)    | 0.216 (0.057)    | 0 (0.000) |    10.48 | apocdud, foggers, Kobe, void, yourwombat    |
|           15 |     1471 | 2024-03-06 | KZG                | W   | 0.791      | 0.333        | 0.018 (0.005)    | 0.216 (0.057)    | 0 (0.000) |    11.22 | apocdud, foggers, Kobe, void, yourwombat    |
|           14 |     1639 | 2024-02-27 | Canon Event        | W   | 0.737      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.34 | apocdud, damyo, foggers, Kobe, void         |
|           13 |     1641 | 2024-02-27 | Canon Event        | W   | 0.737      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.45 | apocdud, damyo, foggers, Kobe, void         |
|           12 |     1776 | 2024-02-21 | Vantage            | L   | 0.697      | -            | -                | -                | -         |   -14.68 | Drox, Omichella, SkulL, viridian, vision    |
|           11 |     1797 | 2024-02-20 | Cringexe           | W   | 0.691      | 0.143        | 0.000 (0.000)    | 0.031 (0.003)    | 0 (0.000) |     5.58 | BROJVHS, Havoc, luffy, Mr Shark, Winnieeeee |
|           10 |     1799 | 2024-02-20 | gfg123321          | W   | 0.691      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.28 | BaN4na, dcey, neo, nub, sunshinez           |
|            9 |     1843 | 2024-02-18 | FlyQuest           | L   | 0.677      | -            | -                | -                | -         |    -0.59 | apocdud, damyo, foggers, Kobe, void         |
|            8 |     1844 | 2024-02-18 | KZG                | W   | 0.677      | 0.143        | 0.018 (0.002)    | 0.216 (0.021)    | 0 (0.000) |    11.66 | dpr, Hassie, Lexon, Mingovi, Samuukxs       |
|            7 |     1847 | 2024-02-17 | FlyQuest           | L   | 0.675      | -            | -                | -                | -         |    -0.56 | apocdud, damyo, foggers, Kobe, void         |
|            6 |     1870 | 2024-02-16 | LYG                | W   | 0.669      | 0.303        | 0.004 (0.001)    | 0.125 (0.025)    | 0 (0.000) |    10.37 | apocdud, damyo, foggers, Kobe, void         |
|            5 |     1990 | 2024-02-13 | DXA                | L   | 0.645      | -            | -                | -                | -         |    -9.50 | apocdud, damyo, foggers, Kobe, SaVage       |
|            4 |     1992 | 2024-02-13 | disciples          | W   | 0.644      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     3.32 | badger, DickStacy, mswag, stevie, Texta     |
|            3 |     2556 | 2024-01-18 | Mindfreak          | L   | 0.471      | -            | -                | -                | -         |    -8.27 | apocdud, damyo, foggers, Kobe, yourwombat   |
|            2 |     2558 | 2024-01-18 | sunday school      | W   | 0.470      | 0.143        | -                | 0.061 (0.004)    | -         |     3.98 | apocdud, damyo, foggers, Kobe, yourwombat   |
|            1 |     2605 | 2024-01-17 | disciples          | W   | 0.464      | -            | -                | -                | -         |     2.42 | apocdud, damyo, foggers, Kobe, yourwombat   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,442.67)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-23 |      0.904 | $662.00        | $598.62         |
| 2024-02-17 |      0.675 | $1,250.00      | $844.05         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
