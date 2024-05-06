### Roster Details<br />
Team Name: esmagaB<br />
Roster: Ag1l, aragornN, P3R3IIRA, pr, rafaxF<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [124](../standings_global.md)<br />
Regional Rank: [84]( ../standings_europe.md)<br />
Final Rank Value:  748.1<br />
<br />
Final Rank Value (748.1) = Starting Rank Value (776.3) + Head To Head Adjustments (-28.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.356[<sup>1</sup>](#table2)
- Bounty Collected: 0.243[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.172[<sup>2</sup>](#table1)

The average of these factors is 0.198<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 776.3
- 400 + ( ( 0.198 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 776.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |      344 | 2024-04-20 | 1WIN              | L   | 1.000      | -            | -                | -                | -         |   -16.40 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF          |
|           21 |      378 | 2024-04-19 | Secret            | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.192 (0.027)    | 0 (0.000) |    10.51 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF          |
|           20 |      421 | 2024-04-18 | Illuminar         | L   | 1.000      | -            | -                | -                | -         |   -23.95 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF          |
|           19 |      478 | 2024-04-17 | 500               | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.578 (0.083)    | 0 (0.000) |    20.86 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF          |
|           18 |     1533 | 2024-03-03 | Rhyno             | W   | 0.773      | 0.314        | 0.015 (0.004)    | 0.130 (0.032)    | 1 (0.773) |    12.43 | DDias, krazy, renatoohaxx, snapy, TMKj        |
|           17 |     1567 | 2024-03-02 | OVERFRAG          | W   | 0.765      | 0.314        | 0.004 (0.001)    | 0.000 (0.000)    | 1 (0.765) |     5.48 | devineez, HS, Lr0z1n, P3R3IIRA, seabraez      |
|           16 |     1700 | 2024-02-24 | 500               | L   | 0.719      | -            | -                | -                | -         |   -10.15 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           15 |     1838 | 2024-02-18 | Alliance          | L   | 0.679      | -            | -                | -                | -         |    -8.08 | avid, b0denmaster, PlesseN, robiin, twist     |
|           14 |     2006 | 2024-02-11 | Young Ninjas      | L   | 0.633      | -            | -                | -                | -         |    -5.89 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|           13 |     2096 | 2024-02-04 | ARCRED            | W   | 0.585      | 0.358        | 0.004 (0.001)    | 0.198 (0.042)    | 0 (0.000) |     7.99 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|           12 |     2113 | 2024-02-03 | Rhyno             | L   | 0.580      | -            | -                | -                | -         |    -9.55 | DDias, krazy, renatoohaxx, snapy, TMKj        |
|           11 |     2179 | 2024-02-01 | AL QATRAO         | W   | 0.566      | 0.143        | 0.004 (0.000)    | 0.025 (0.002)    | 0 (0.000) |     7.12 | Drext, frozzen, hdstr, nesto, Shr             |
|           10 |     2184 | 2024-02-01 | Agency            | W   | 0.565      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.57 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|            9 |     2573 | 2024-01-17 | Insilio           | L   | 0.468      | -            | -                | -                | -         |    -4.25 | faydett, FpSSS, Pipw, Polt, sugaR             |
|            8 |     2583 | 2024-01-17 | NAVI Junior       | W   | 0.467      | 0.143        | 0.020 (0.001)    | 0.164 (0.011)    | 0 (0.000) |     7.00 | dem0n, fnl, Krabeni, Magic, makazze           |
|            7 |     2633 | 2024-01-16 | Aurora Young Blud | L   | 0.460      | -            | -                | -                | -         |    -8.51 | bl1x1, bluewh1te, easy, sh1geo, VILBy         |
|            6 |     2652 | 2024-01-16 | m1xx              | W   | 0.460      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.71 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|            5 |     2738 | 2024-01-13 | Betera            | L   | 0.439      | -            | -                | -                | -         |    -7.36 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|            4 |     2767 | 2024-01-12 | Walkover          | W   | 0.434      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.57 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|            3 |     2841 | 2024-01-10 | PERA              | L   | 0.421      | -            | -                | -                | -         |    -4.16 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|            2 |     2915 | 2023-12-29 | Metizport         | L   | 0.339      | -            | -                | -                | -         |    -2.35 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|            1 |     2920 | 2023-12-27 | The Witchers      | L   | 0.326      | -            | -                | -                | -         |    -5.80 | Dragon, fear, Sdaim, smooya, synyx            |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,513.56)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
