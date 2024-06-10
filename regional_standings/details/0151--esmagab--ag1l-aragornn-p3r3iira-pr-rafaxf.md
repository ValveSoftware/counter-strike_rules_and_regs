### Roster Details<br />
Team Name: esmagaB<br />
Roster: Ag1l, aragornN, P3R3IIRA, pr, rafaxF<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [151](../standings_global.md)<br />
Regional Rank: [99]( ../standings_europe.md)<br />
Final Rank Value:  699.7<br />
<br />
Final Rank Value (699.7) = Starting Rank Value (735.2) + Head To Head Adjustments (-35.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.320[<sup>1</sup>](#table2)
- Bounty Collected: 0.221[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.114[<sup>2</sup>](#table1)

The average of these factors is 0.168<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 735.2
- 400 + ( ( 0.168 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 735.2


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
|           26 |      413 | 2024-06-01 | FLuffy Gangsters  | L   | 1.000      | -            | -                | -                | -         |   -23.40 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF          |
|           25 |      479 | 2024-05-30 | RUBY              | L   | 1.000      | -            | -                | -                | -         |    -7.27 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF          |
|           24 |      514 | 2024-05-29 | TNL               | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.28 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF          |
|           23 |     1051 | 2024-05-11 | AL QATRAO         | L   | 1.000      | -            | -                | -                | -         |   -15.29 | Ag1l, aragornN, fox, pr, rafaxF               |
|           22 |     1495 | 2024-04-20 | 1WIN              | L   | 0.860      | -            | -                | -                | -         |    -4.99 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF          |
|           21 |     1529 | 2024-04-19 | Secret            | W   | 0.854      | 0.143        | 0.000 (0.000)    | 0.128 (0.016)    | 0 (0.000) |     8.82 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF          |
|           20 |     1572 | 2024-04-18 | Illuminar         | L   | 0.847      | -            | -                | -                | -         |   -16.97 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF          |
|           19 |     1629 | 2024-04-17 | 500               | W   | 0.839      | 0.143        | 0.002 (0.000)    | 0.354 (0.042)    | 0 (0.000) |    17.43 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF          |
|           18 |     2684 | 2024-03-03 | Rhyno             | W   | 0.540      | 0.314        | 0.012 (0.002)    | 0.428 (0.072)    | 1 (0.540) |    13.16 | DDias, krazy, renatoohaxx, snapy, TMKj        |
|           17 |     2718 | 2024-03-02 | OVERFRAG          | W   | 0.532      | 0.314        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.532) |     4.14 | devineez, HS, Lr0z1n, P3R3IIRA, seabraez      |
|           16 |     2851 | 2024-02-24 | 500               | L   | 0.486      | -            | -                | -                | -         |    -6.93 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           15 |     2989 | 2024-02-18 | Alliance          | L   | 0.445      | -            | -                | -                | -         |    -4.38 | avid, b0denmaster, PlesseN, robiin, twist     |
|           14 |     3157 | 2024-02-11 | Young Ninjas      | L   | 0.400      | -            | -                | -                | -         |    -4.65 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|           13 |     3247 | 2024-02-04 | ARCRED            | W   | 0.352      | 0.358        | 0.000 (0.000)    | 0.271 (0.034)    | 0 (0.000) |     3.74 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|           12 |     3264 | 2024-02-03 | Rhyno             | L   | 0.347      | -            | -                | -                | -         |    -2.56 | DDias, krazy, renatoohaxx, snapy, TMKj        |
|           11 |     3330 | 2024-02-01 | AL QATRAO         | W   | 0.333      | 0.143        | 0.007 (0.000)    | 0.052 (0.002)    | 0 (0.000) |     5.46 | Drext, frozzen, hdstr, nesto, Shr             |
|           10 |     3335 | 2024-02-01 | Agency            | W   | 0.332      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.44 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|            9 |     3724 | 2024-01-17 | Insilio           | L   | 0.234      | -            | -                | -                | -         |    -1.97 | faydett, FpSSS, Pipw, Polt, sugaR             |
|            8 |     3734 | 2024-01-17 | NAVI Junior       | W   | 0.234      | 0.143        | 0.007 (0.000)    | 0.090 (0.003)    | 0 (0.000) |     3.50 | dem0n, fnl, Krabeni, Magic, makazze           |
|            7 |     3784 | 2024-01-16 | Aurora Young Blud | L   | 0.227      | -            | -                | -                | -         |    -3.49 | bl1x1, bluewh1te, easy, sh1geo, VILBy         |
|            6 |     3803 | 2024-01-16 | m1xx              | W   | 0.227      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.98 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|            5 |     3889 | 2024-01-13 | Betera            | L   | 0.206      | -            | -                | -                | -         |    -3.39 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|            4 |     3918 | 2024-01-12 | Walkover          | W   | 0.201      | -            | -                | -                | -         |     0.86 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|            3 |     3992 | 2024-01-10 | PERA              | L   | 0.187      | -            | -                | -                | -         |    -1.57 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|            2 |     4066 | 2023-12-29 | Metizport         | L   | 0.106      | -            | -                | -                | -         |    -0.68 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|            1 |     4071 | 2023-12-27 | The Witchers      | L   | 0.093      | -            | -                | -                | -         |    -1.73 | Dragon, fear, Sdaim, smooya, synyx            |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,294.21)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      1.000 | $539.00        | $539.00         |
| 2024-03-03 |      0.540 | $3,251.00      | $1,755.21       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
