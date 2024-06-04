### Roster Details<br />
Team Name: esmagaB<br />
Roster: Ag1l, aragornN, P3R3IIRA, pr, rafaxF<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [126](../standings_global.md)<br />
Regional Rank: [83]( ../standings_europe.md)<br />
Final Rank Value:  725.8<br />
<br />
Final Rank Value (725.8) = Starting Rank Value (741.2) + Head To Head Adjustments (-15.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.326[<sup>1</sup>](#table2)
- Bounty Collected: 0.226[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.134[<sup>2</sup>](#table1)

The average of these factors is 0.176<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 741.2
- 400 + ( ( 0.176 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 741.2


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
|           24 |       14 | 2024-05-29 | TNL               | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.38 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF          |
|           23 |      551 | 2024-05-11 | AL QATRAO         | L   | 1.000      | -            | -                | -                | -         |   -15.28 | Ag1l, aragornN, fox, pr, rafaxF               |
|           22 |      995 | 2024-04-20 | 1WIN              | L   | 0.939      | -            | -                | -                | -         |    -5.95 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF          |
|           21 |     1029 | 2024-04-19 | Secret            | W   | 0.933      | 0.143        | 0.000 (0.000)    | 0.153 (0.020)    | 0 (0.000) |     9.73 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF          |
|           20 |     1072 | 2024-04-18 | Illuminar         | L   | 0.926      | -            | -                | -                | -         |   -21.95 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF          |
|           19 |     1129 | 2024-04-17 | 500               | W   | 0.918      | 0.143        | 0.002 (0.000)    | 0.436 (0.057)    | 0 (0.000) |    18.45 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF          |
|           18 |     2184 | 2024-03-03 | Rhyno             | W   | 0.619      | 0.314        | 0.013 (0.002)    | 0.344 (0.067)    | 1 (0.619) |    14.10 | DDias, krazy, renatoohaxx, snapy, TMKj        |
|           17 |     2218 | 2024-03-02 | OVERFRAG          | W   | 0.611      | 0.314        | 0.002 (0.000)    | 0.000 (0.000)    | 1 (0.611) |     4.72 | devineez, HS, Lr0z1n, P3R3IIRA, seabraez      |
|           16 |     2351 | 2024-02-24 | 500               | L   | 0.565      | -            | -                | -                | -         |    -8.15 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           15 |     2489 | 2024-02-18 | Alliance          | L   | 0.525      | -            | -                | -                | -         |    -6.59 | avid, b0denmaster, PlesseN, robiin, twist     |
|           14 |     2657 | 2024-02-11 | Young Ninjas      | L   | 0.479      | -            | -                | -                | -         |    -5.49 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|           13 |     2747 | 2024-02-04 | ARCRED            | W   | 0.431      | 0.358        | 0.000 (0.000)    | 0.144 (0.022)    | 0 (0.000) |     5.49 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|           12 |     2764 | 2024-02-03 | Rhyno             | L   | 0.426      | -            | -                | -                | -         |    -3.90 | DDias, krazy, renatoohaxx, snapy, TMKj        |
|           11 |     2830 | 2024-02-01 | AL QATRAO         | W   | 0.412      | 0.143        | 0.007 (0.000)    | 0.058 (0.003)    | 0 (0.000) |     6.71 | Drext, frozzen, hdstr, nesto, Shr             |
|           10 |     2835 | 2024-02-01 | Agency            | W   | 0.411      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.78 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|            9 |     3224 | 2024-01-17 | Insilio           | L   | 0.314      | -            | -                | -                | -         |    -3.00 | faydett, FpSSS, Pipw, Polt, sugaR             |
|            8 |     3234 | 2024-01-17 | NAVI Junior       | W   | 0.313      | 0.143        | 0.009 (0.000)    | 0.115 (0.005)    | 0 (0.000) |     4.58 | dem0n, fnl, Krabeni, Magic, makazze           |
|            7 |     3284 | 2024-01-16 | Aurora Young Blud | L   | 0.306      | -            | -                | -                | -         |    -5.71 | bl1x1, bluewh1te, easy, sh1geo, VILBy         |
|            6 |     3303 | 2024-01-16 | m1xx              | W   | 0.306      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.30 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|            5 |     3389 | 2024-01-13 | Betera            | L   | 0.285      | -            | -                | -                | -         |    -4.76 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|            4 |     3418 | 2024-01-12 | Walkover          | W   | 0.280      | -            | -                | -                | -         |     1.18 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|            3 |     3492 | 2024-01-10 | PERA              | L   | 0.266      | -            | -                | -                | -         |    -2.58 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|            2 |     3566 | 2023-12-29 | Metizport         | L   | 0.185      | -            | -                | -                | -         |    -1.29 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|            1 |     3571 | 2023-12-27 | The Witchers      | L   | 0.172      | -            | -                | -                | -         |    -3.17 | Dragon, fear, Sdaim, smooya, synyx            |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,551.60)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      1.000 | $539.00        | $539.00         |
| 2024-03-03 |      0.619 | $3,251.00      | $2,012.60       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
