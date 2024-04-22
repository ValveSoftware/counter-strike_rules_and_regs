### Roster Details<br />
Team Name: esmagaB<br />
Roster: Ag1l, aragornN, P3R3IIRA, pr, rafaxF<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [130](../standings_global.md)<br />
Regional Rank: [88]( ../standings_europe.md)<br />
Final Rank Value:  741.8<br />
<br />
Final Rank Value (741.8) = Starting Rank Value (791.6) + Head To Head Adjustments (-49.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.353[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.185[<sup>2</sup>](#table1)

The average of these factors is 0.203<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 791.6
- 400 + ( ( 0.203 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 791.6


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
|           22 |       48 | 2024-04-20 | 1WIN              | L   | 1.000      | -            | -                | -                | -         |   -18.52 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF          |
|           21 |       82 | 2024-04-19 | Secret            | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.210 (0.030)    | 0 (0.000) |    10.21 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF          |
|           20 |      125 | 2024-04-18 | Illuminar         | L   | 1.000      | -            | -                | -                | -         |   -24.74 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF          |
|           19 |      182 | 2024-04-17 | 500               | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.622 (0.089)    | 0 (0.000) |    17.15 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF          |
|           18 |     1237 | 2024-03-03 | Rhyno             | W   | 0.866      | 0.314        | 0.019 (0.005)    | 0.171 (0.046)    | 1 (0.866) |    15.24 | DDias, krazy, renatoohaxx, snapy, TMKj        |
|           17 |     1271 | 2024-03-02 | OVERFRAG          | W   | 0.859      | 0.314        | 0.004 (0.001)    | 0.000 (0.000)    | 1 (0.859) |     6.18 | devineez, HS, Lr0z1n, P3R3IIRA, seabraez      |
|           16 |     1404 | 2024-02-24 | 500               | L   | 0.813      | -            | -                | -                | -         |   -15.40 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           15 |     1542 | 2024-02-18 | Alliance          | L   | 0.772      | -            | -                | -                | -         |    -9.37 | avid, b0denmaster, PlesseN, robiin, twist     |
|           14 |     1710 | 2024-02-11 | Young Ninjas      | L   | 0.726      | -            | -                | -                | -         |    -6.59 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|           13 |     1800 | 2024-02-04 | ARCRED            | W   | 0.679      | 0.358        | 0.008 (0.002)    | 0.164 (0.040)    | 0 (0.000) |     8.66 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|           12 |     1817 | 2024-02-03 | Rhyno             | L   | 0.673      | -            | -                | -                | -         |   -10.09 | DDias, krazy, renatoohaxx, snapy, TMKj        |
|           11 |     1883 | 2024-02-01 | AL QATRAO         | W   | 0.659      | 0.143        | 0.004 (0.000)    | 0.031 (0.003)    | 0 (0.000) |     8.25 | Drext, frozzen, hdstr, nesto, Shr             |
|           10 |     1888 | 2024-02-01 | Agency            | W   | 0.659      | 0.143        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.25 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|            9 |     2277 | 2024-01-17 | Insilio           | L   | 0.561      | -            | -                | -                | -         |    -9.14 | faydett, FpSSS, Pipw, Polt, sugaR             |
|            8 |     2287 | 2024-01-17 | NAVI Junior       | W   | 0.560      | 0.143        | 0.019 (0.002)    | 0.195 (0.016)    | 0 (0.000) |     8.12 | dem0n, fnl, Krabeni, Magic, makazze           |
|            7 |     2337 | 2024-01-16 | Aurora Young Blud | L   | 0.554      | -            | -                | -                | -         |   -10.23 | bl1x1, bluewh1te, easy, sh1geo, VILBy         |
|            6 |     2356 | 2024-01-16 | m1xx              | W   | 0.553      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.98 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|            5 |     2442 | 2024-01-13 | Betera            | L   | 0.532      | -            | -                | -                | -         |    -8.79 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|            4 |     2471 | 2024-01-12 | Walkover          | W   | 0.528      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.82 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|            3 |     2545 | 2024-01-10 | PERA              | L   | 0.514      | -            | -                | -                | -         |    -7.58 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|            2 |     2619 | 2023-12-29 | Metizport         | L   | 0.432      | -            | -                | -                | -         |    -3.77 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|            1 |     2624 | 2023-12-27 | The Witchers      | L   | 0.420      | -            | -                | -                | -         |    -7.45 | Dragon, fear, Sdaim, smooya, synyx            |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,816.90)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
