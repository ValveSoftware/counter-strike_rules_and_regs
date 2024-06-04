### Roster Details<br />
Team Name: Arcade<br />
Roster: apocdud, foggers, Kobe, TRIPLUS, void<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [165](../standings_global.md)<br />
Regional Rank: [18]( ../standings_asia.md)<br />
Final Rank Value:  608.5<br />
<br />
Final Rank Value (608.5) = Starting Rank Value (678.5) + Head To Head Adjustments (-70.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.309[<sup>1</sup>](#table2)
- Bounty Collected: 0.242[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.144<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 678.5
- 400 + ( ( 0.144 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 678.5


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
|           32 |      433 | 2024-05-15 | Bad News Kangaroos | L   | 1.000      | -            | -                | -                | -         |    -5.58 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           31 |      436 | 2024-05-15 | Bad News Kangaroos | L   | 1.000      | -            | -                | -                | -         |    -5.88 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           30 |      625 | 2024-05-08 | Mindfreak          | L   | 1.000      | -            | -                | -                | -         |   -12.20 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           29 |      627 | 2024-05-08 | Mindfreak          | L   | 1.000      | -            | -                | -                | -         |   -13.28 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           28 |      643 | 2024-05-07 | DXA                | L   | 1.000      | -            | -                | -                | -         |   -17.68 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           27 |      645 | 2024-05-07 | DXA                | W   | 1.000      | 0.333        | 0.005 (0.002)    | 0.244 (0.081)    | 0 (0.000) |    13.64 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           26 |     1135 | 2024-04-17 | Rooster            | L   | 0.917      | -            | -                | -                | -         |    -7.67 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           25 |     1148 | 2024-04-17 | Vantage            | W   | 0.917      | 0.143        | 0.000 (0.000)    | 0.247 (0.032)    | 0 (0.000) |    13.57 | Drox, N1ghtraid, Omichella, SkulL, vision   |
|           24 |     1310 | 2024-04-10 | Vantage            | L   | 0.870      | -            | -                | -                | -         |   -14.68 | Drox, N1ghtraid, Omichella, SkulL, vision   |
|           23 |     1317 | 2024-04-10 | Vantage            | L   | 0.870      | -            | -                | -                | -         |   -15.84 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           22 |     1545 | 2024-04-03 | FlyQuest           | L   | 0.823      | -            | -                | -                | -         |    -0.46 | aliStair, dexter, INS, Liazz, Vexite        |
|           21 |     1549 | 2024-04-03 | FlyQuest           | L   | 0.823      | -            | -                | -                | -         |    -0.47 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           20 |     1672 | 2024-03-27 | Rooster            | L   | 0.777      | -            | -                | -                | -         |    -7.62 | asap, chelleos, dangeR, nettik, TjP         |
|           19 |     1675 | 2024-03-27 | Rooster            | L   | 0.777      | -            | -                | -                | -         |    -8.09 | apocdud, foggers, kibstar, Kobe, void       |
|           18 |     1720 | 2024-03-23 | KZG                | L   | 0.750      | -            | -                | -                | -         |   -13.52 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs   |
|           17 |     1722 | 2024-03-23 | Bad News Kangaroos | L   | 0.750      | -            | -                | -                | -         |    -6.61 | apocdud, foggers, Kobe, rekonz, void        |
|           16 |     2115 | 2024-03-06 | KZG                | W   | 0.637      | 0.333        | 0.011 (0.002)    | 0.199 (0.042)    | 0 (0.000) |     9.00 | Estate, Hassie, Mingovi, pain, Samuukxs     |
|           15 |     2122 | 2024-03-06 | KZG                | W   | 0.637      | 0.333        | 0.011 (0.002)    | 0.199 (0.042)    | 0 (0.000) |     9.52 | apocdud, foggers, Kobe, void, yourwombat    |
|           14 |     2290 | 2024-02-27 | Canon Event        | W   | 0.583      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.53 | Blizz, BoBo, Coppo, Kras, mitzy             |
|           13 |     2292 | 2024-02-27 | Canon Event        | W   | 0.583      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.71 | apocdud, damyo, foggers, Kobe, void         |
|           12 |     2427 | 2024-02-21 | Vantage            | L   | 0.543      | -            | -                | -                | -         |   -11.68 | Drox, Omichella, SkulL, viridian, vision    |
|           11 |     2448 | 2024-02-20 | Cringexe           | W   | 0.537      | 0.143        | 0.000 (0.000)    | 0.022 (0.002)    | 0 (0.000) |     4.45 | BROJVHS, Havoc, luffy, Mr Shark, Winnieeeee |
|           10 |     2450 | 2024-02-20 | gfg123321          | W   | 0.537      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     2.73 | BaN4na, dcey, neo, nub, sunshinez           |
|            9 |     2494 | 2024-02-18 | FlyQuest           | L   | 0.523      | -            | -                | -                | -         |    -0.29 | apocdud, damyo, foggers, Kobe, void         |
|            8 |     2495 | 2024-02-18 | KZG                | W   | 0.523      | 0.143        | 0.011 (0.001)    | 0.199 (0.015)    | 0 (0.000) |     9.18 | dpr, Hassie, Lexon, Mingovi, Samuukxs       |
|            7 |     2498 | 2024-02-17 | FlyQuest           | L   | 0.521      | -            | -                | -                | -         |    -0.28 | apocdud, damyo, foggers, Kobe, void         |
|            6 |     2521 | 2024-02-16 | LYG                | W   | 0.515      | 0.303        | 0.001 (0.000)    | 0.091 (0.014)    | 0 (0.000) |     7.65 | apocdud, damyo, foggers, Kobe, void         |
|            5 |     2641 | 2024-02-13 | DXA                | L   | 0.491      | -            | -                | -                | -         |    -7.24 | apocdud, damyo, foggers, Kobe, SaVage       |
|            4 |     2643 | 2024-02-13 | disciples          | W   | 0.490      | -            | -                | -                | -         |     2.62 | badger, DickStacy, mswag, stevie, Texta     |
|            3 |     3207 | 2024-01-18 | Mindfreak          | L   | 0.317      | -            | -                | -                | -         |    -6.92 | apocdud, damyo, foggers, Kobe, yourwombat   |
|            2 |     3209 | 2024-01-18 | sunday school      | W   | 0.316      | 0.143        | -                | 0.038 (0.002)    | -         |     2.66 | apocdud, damyo, foggers, Kobe, yourwombat   |
|            1 |     3256 | 2024-01-17 | disciples          | W   | 0.310      | -            | -                | -                | -         |     1.69 | apocdud, damyo, foggers, Kobe, yourwombat   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,748.04)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-22 |      1.000 | $600.00        | $600.00         |
| 2024-03-23 |      0.750 | $662.00        | $496.61         |
| 2024-02-17 |      0.521 | $1,250.00      | $651.44         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
