### Roster Details<br />
Team Name: VexX<br />
Roster: apocdud, foggers, Kobe, TRIPLUS, void<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [171](../standings_global.md)<br />
Regional Rank: [20]( ../standings_asia.md)<br />
Final Rank Value:  641.3<br />
<br />
Final Rank Value (641.3) = Starting Rank Value (681.8) + Head To Head Adjustments (-40.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.326[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.146<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 681.8
- 400 + ( ( 0.146 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 681.8


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
|           26 |      188 | 2024-04-17 | Rooster            | L   | 1.000      | -            | -                | -                | -         |    -8.21 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           25 |      201 | 2024-04-17 | Vantage            | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.383 (0.055)    | 0 (0.000) |    15.93 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           24 |      363 | 2024-04-10 | Vantage            | L   | 1.000      | -            | -                | -                | -         |   -15.56 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           23 |      370 | 2024-04-10 | Vantage            | L   | 1.000      | -            | -                | -                | -         |   -17.00 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           22 |      598 | 2024-04-03 | FlyQuest           | L   | 1.000      | -            | -                | -                | -         |    -1.91 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           21 |      602 | 2024-04-03 | FlyQuest           | L   | 1.000      | -            | -                | -                | -         |    -1.95 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           20 |      725 | 2024-03-27 | Rooster            | L   | 1.000      | -            | -                | -                | -         |    -9.85 | apocdud, foggers, kibstar, Kobe, void       |
|           19 |      728 | 2024-03-27 | Rooster            | L   | 1.000      | -            | -                | -                | -         |   -10.64 | apocdud, foggers, kibstar, Kobe, void       |
|           18 |      773 | 2024-03-23 | KZG                | L   | 0.998      | -            | -                | -                | -         |   -19.43 | apocdud, foggers, Kobe, rekonz, void        |
|           17 |      775 | 2024-03-23 | Bad News Kangaroos | L   | 0.997      | -            | -                | -                | -         |    -8.24 | apocdud, foggers, Kobe, rekonz, void        |
|           16 |     1168 | 2024-03-06 | KZG                | W   | 0.884      | 0.333        | 0.005 (0.002)    | 0.251 (0.074)    | 0 (0.000) |    10.89 | apocdud, foggers, Kobe, void, yourwombat    |
|           15 |     1175 | 2024-03-06 | KZG                | W   | 0.884      | 0.333        | 0.005 (0.002)    | 0.251 (0.074)    | 0 (0.000) |    11.74 | apocdud, foggers, Kobe, void, yourwombat    |
|           14 |     1343 | 2024-02-27 | Canon Event        | W   | 0.831      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.81 | apocdud, damyo, foggers, Kobe, void         |
|           13 |     1345 | 2024-02-27 | Canon Event        | W   | 0.831      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.96 | apocdud, damyo, foggers, Kobe, void         |
|           12 |     1480 | 2024-02-21 | Vantage            | L   | 0.790      | -            | -                | -                | -         |   -16.40 | Drox, Omichella, SkulL, viridian, vision    |
|           11 |     1501 | 2024-02-20 | Cringexe           | W   | 0.784      | 0.143        | 0.000 (0.000)    | 0.036 (0.004)    | 0 (0.000) |     6.31 | BROJVHS, Havoc, luffy, Mr Shark, Winnieeeee |
|           10 |     1503 | 2024-02-20 | gfg123321          | W   | 0.784      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.81 | BaN4na, dcey, neo, nub, sunshinez           |
|            9 |     1547 | 2024-02-18 | FlyQuest           | L   | 0.771      | -            | -                | -                | -         |    -1.98 | apocdud, damyo, foggers, Kobe, void         |
|            8 |     1548 | 2024-02-18 | KZG                | W   | 0.770      | 0.143        | 0.005 (0.001)    | 0.251 (0.028)    | 0 (0.000) |    12.71 | dpr, Hassie, Lexon, Mingovi, Samuukxs       |
|            7 |     1551 | 2024-02-17 | FlyQuest           | L   | 0.769      | -            | -                | -                | -         |    -1.89 | apocdud, damyo, foggers, Kobe, void         |
|            6 |     1574 | 2024-02-16 | LYG                | W   | 0.763      | 0.303        | 0.004 (0.001)    | 0.146 (0.034)    | 0 (0.000) |    12.02 | apocdud, damyo, foggers, Kobe, void         |
|            5 |     1694 | 2024-02-13 | DXA                | L   | 0.738      | -            | -                | -                | -         |   -10.85 | apocdud, damyo, foggers, Kobe, SaVage       |
|            4 |     1696 | 2024-02-13 | disciples          | W   | 0.737      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     3.87 | badger, DickStacy, mswag, stevie, Texta     |
|            3 |     2260 | 2024-01-18 | Mindfreak          | L   | 0.564      | -            | -                | -                | -         |    -9.61 | apocdud, damyo, foggers, Kobe, yourwombat   |
|            2 |     2262 | 2024-01-18 | sunday school      | W   | 0.563      | 0.143        | -                | 0.077 (0.006)    | -         |     4.98 | apocdud, damyo, foggers, Kobe, yourwombat   |
|            1 |     2309 | 2024-01-17 | disciples          | W   | 0.557      | -            | -                | -                | -         |     2.98 | apocdud, damyo, foggers, Kobe, yourwombat   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,621.07)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-23 |      0.998 | $662.00        | $660.39         |
| 2024-02-17 |      0.769 | $1,250.00      | $960.68         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
