### Roster Details<br />
Team Name: Arcade<br />
Roster: apocdud, foggers, Kobe, TRIPLUS, void<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [173](../standings_global.md)<br />
Regional Rank: [20]( ../standings_asia.md)<br />
Final Rank Value:  632.3<br />
<br />
Final Rank Value (632.3) = Starting Rank Value (680.4) + Head To Head Adjustments (-48.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.305[<sup>1</sup>](#table2)
- Bounty Collected: 0.240[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.141<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 680.4
- 400 + ( ( 0.141 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 680.4


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
|           32 |      933 | 2024-05-15 | Bad News Kangaroos | L   | 1.000      | -            | -                | -                | -         |    -5.86 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           31 |      936 | 2024-05-15 | Bad News Kangaroos | L   | 1.000      | -            | -                | -                | -         |    -6.19 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           30 |     1125 | 2024-05-08 | Mindfreak          | L   | 0.978      | -            | -                | -                | -         |    -9.24 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           29 |     1127 | 2024-05-08 | Mindfreak          | L   | 0.977      | -            | -                | -                | -         |    -9.95 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           28 |     1143 | 2024-05-07 | DXA                | L   | 0.971      | -            | -                | -                | -         |   -16.88 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           27 |     1145 | 2024-05-07 | DXA                | W   | 0.971      | 0.333        | 0.005 (0.002)    | 0.209 (0.068)    | 0 (0.000) |    13.61 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           26 |     1635 | 2024-04-17 | Rooster            | L   | 0.838      | -            | -                | -                | -         |    -6.72 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           25 |     1648 | 2024-04-17 | Vantage            | W   | 0.838      | 0.143        | 0.003 (0.000)    | 0.201 (0.024)    | 0 (0.000) |    14.81 | Drox, N1ghtraid, Omichella, SkulL, vision   |
|           24 |     1810 | 2024-04-10 | Vantage            | L   | 0.791      | -            | -                | -                | -         |   -10.96 | Drox, N1ghtraid, Omichella, SkulL, vision   |
|           23 |     1817 | 2024-04-10 | Vantage            | L   | 0.791      | -            | -                | -                | -         |   -11.75 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           22 |     2045 | 2024-04-03 | FlyQuest           | L   | 0.744      | -            | -                | -                | -         |    -0.42 | aliStair, dexter, INS, Liazz, Vexite        |
|           21 |     2049 | 2024-04-03 | FlyQuest           | L   | 0.744      | -            | -                | -                | -         |    -0.42 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           20 |     2172 | 2024-03-27 | Rooster            | L   | 0.698      | -            | -                | -                | -         |    -6.22 | asap, chelleos, dangeR, nettik, TjP         |
|           19 |     2175 | 2024-03-27 | Rooster            | L   | 0.698      | -            | -                | -                | -         |    -6.55 | apocdud, foggers, kibstar, Kobe, void       |
|           18 |     2220 | 2024-03-23 | KZG                | L   | 0.671      | -            | -                | -                | -         |   -11.71 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs   |
|           17 |     2222 | 2024-03-23 | Bad News Kangaroos | L   | 0.670      | -            | -                | -                | -         |    -6.00 | apocdud, foggers, Kobe, rekonz, void        |
|           16 |     2615 | 2024-03-06 | KZG                | W   | 0.558      | 0.333        | 0.010 (0.002)    | 0.168 (0.031)    | 0 (0.000) |     8.22 | Estate, Hassie, Mingovi, pain, Samuukxs     |
|           15 |     2622 | 2024-03-06 | KZG                | W   | 0.558      | 0.333        | 0.010 (0.002)    | 0.168 (0.031)    | 0 (0.000) |     8.63 | apocdud, foggers, Kobe, void, yourwombat    |
|           14 |     2790 | 2024-02-27 | Canon Event        | W   | 0.504      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.96 | Blizz, BoBo, Coppo, Kras, mitzy             |
|           13 |     2792 | 2024-02-27 | Canon Event        | W   | 0.504      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.09 | apocdud, damyo, foggers, Kobe, void         |
|           12 |     2927 | 2024-02-21 | Vantage            | L   | 0.464      | -            | -                | -                | -         |    -7.70 | Drox, Omichella, SkulL, viridian, vision    |
|           11 |     2948 | 2024-02-20 | Cringexe           | W   | 0.458      | 0.143        | 0.000 (0.000)    | 0.018 (0.001)    | 0 (0.000) |     3.76 | BROJVHS, Havoc, luffy, Mr Shark, Winnieeeee |
|           10 |     2950 | 2024-02-20 | gfg123321          | W   | 0.457      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     2.34 | BaN4na, dcey, neo, nub, sunshinez           |
|            9 |     2994 | 2024-02-18 | FlyQuest           | L   | 0.444      | -            | -                | -                | -         |    -0.26 | apocdud, damyo, foggers, Kobe, void         |
|            8 |     2995 | 2024-02-18 | KZG                | W   | 0.444      | 0.143        | 0.010 (0.001)    | 0.168 (0.011)    | 0 (0.000) |     7.81 | dpr, Hassie, Lexon, Mingovi, Samuukxs       |
|            7 |     2998 | 2024-02-17 | FlyQuest           | L   | 0.442      | -            | -                | -                | -         |    -0.24 | apocdud, damyo, foggers, Kobe, void         |
|            6 |     3021 | 2024-02-16 | LYG                | W   | 0.436      | 0.303        | 0.005 (0.001)    | 0.076 (0.010)    | 0 (0.000) |     7.63 | apocdud, damyo, foggers, Kobe, void         |
|            5 |     3141 | 2024-02-13 | DXA                | L   | 0.411      | -            | -                | -                | -         |    -6.07 | apocdud, damyo, foggers, Kobe, SaVage       |
|            4 |     3143 | 2024-02-13 | disciples          | W   | 0.411      | -            | -                | -                | -         |     2.19 | badger, DickStacy, mswag, stevie, Texta     |
|            3 |     3707 | 2024-01-18 | Mindfreak          | L   | 0.238      | -            | -                | -                | -         |    -5.24 | apocdud, damyo, foggers, Kobe, yourwombat   |
|            2 |     3709 | 2024-01-18 | sunday school      | W   | 0.237      | 0.143        | -                | 0.026 (0.001)    | -         |     1.95 | apocdud, damyo, foggers, Kobe, yourwombat   |
|            1 |     3756 | 2024-01-17 | disciples          | W   | 0.231      | -            | -                | -                | -         |     1.25 | apocdud, damyo, foggers, Kobe, yourwombat   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,596.67)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $600.00        | $600.00         |
| 2024-03-23 |      0.671 | $662.00        | $444.20         |
| 2024-02-17 |      0.442 | $1,250.00      | $552.47         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
