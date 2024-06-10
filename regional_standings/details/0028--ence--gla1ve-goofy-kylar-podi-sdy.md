### Roster Details<br />
Team Name: ENCE<br />
Roster: gla1ve, Goofy, Kylar, podi, sdy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [28](../standings_global.md)<br />
Regional Rank: [19]( ../standings_europe.md)<br />
Final Rank Value:  1292.6<br />
<br />
Final Rank Value (1292.6) = Starting Rank Value (1431.8) + Head To Head Adjustments (-139.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.592[<sup>1</sup>](#table2)
- Bounty Collected: 0.512[<sup>2</sup>](#table1)
- Opponent Network: 0.333[<sup>2</sup>](#table1)
- LAN Wins: 0.633[<sup>2</sup>](#table1)

The average of these factors is 0.518<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1431.8
- 400 + ( ( 0.518 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1431.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           41 |      243 | 2024-06-06 | HEROIC             | L   | 1.000      | -            | -                | -                | -         |    -3.64 | gla1ve, Goofy, Kylar, podi, sdy    |
|           40 |      256 | 2024-06-06 | Astralis           | L   | 1.000      | -            | -                | -                | -         |    -1.57 | gla1ve, Goofy, Kylar, podi, sdy    |
|           39 |      293 | 2024-06-05 | Sashi              | W   | 1.000      | 0.715        | 0.174 (0.125)    | 1.000 (0.715)    | 1 (1.000) |    15.36 | gla1ve, Goofy, Kylar, podi, sdy    |
|           38 |      303 | 2024-06-05 | The MongolZ        | L   | 1.000      | -            | -                | -                | -         |    -1.51 | gla1ve, Goofy, Kylar, podi, sdy    |
|           37 |      313 | 2024-06-05 | Ninjas in Pyjamas  | L   | 1.000      | -            | -                | -                | -         |    -9.22 | gla1ve, Goofy, Kylar, podi, sdy    |
|           36 |      420 | 2024-06-01 | DMS                | L   | 1.000      | -            | -                | -                | -         |   -27.21 | gla1ve, Goofy, Kylar, podi, sdy    |
|           35 |      426 | 2024-06-01 | KOI                | W   | 1.000      | 0.143        | -                | 0.522 (0.075)    | -         |     5.10 | gla1ve, Goofy, Kylar, podi, sdy    |
|           34 |      435 | 2024-06-01 | DMS                | L   | 1.000      | -            | -                | -                | -         |   -28.00 | gla1ve, Goofy, Kylar, podi, sdy    |
|           33 |      715 | 2024-05-21 | Liquid             | L   | 1.000      | -            | -                | -                | -         |    -4.71 | dycha, gla1ve, Goofy, hades, Kylar |
|           32 |      798 | 2024-05-18 | fnatic             | W   | 1.000      | 0.769        | 0.198 (0.152)    | 0.650 (0.500)    | -         |    12.58 | dycha, gla1ve, Goofy, hades, Kylar |
|           31 |      822 | 2024-05-17 | Gaimin Gladiators  | W   | 1.000      | 0.769        | 0.081 (0.062)    | 0.749 (0.576)    | -         |     8.75 | dycha, gla1ve, Goofy, hades, Kylar |
|           30 |      835 | 2024-05-17 | fnatic             | L   | 1.000      | -            | -                | -                | -         |   -18.13 | dycha, gla1ve, Goofy, hades, Kylar |
|           29 |     1191 | 2024-05-04 | FURIA              | L   | 0.953      | -            | -                | -                | -         |    -8.41 | dycha, gla1ve, Goofy, hades, Kylar |
|           28 |     1207 | 2024-05-03 | GamerLegion        | L   | 0.946      | -            | -                | -                | -         |   -18.90 | dycha, gla1ve, Goofy, hades, Kylar |
|           27 |     1226 | 2024-05-02 | Monte              | W   | 0.940      | 0.889        | 0.179 (0.149)    | 0.686 (0.573)    | 1 (0.940) |     9.69 | dycha, gla1ve, Goofy, hades, Kylar |
|           26 |     1253 | 2024-05-01 | Bad News Kangaroos | W   | 0.933      | 0.889        | 0.033 (0.027)    | 0.262 (0.218)    | 1 (0.933) |     1.97 | dycha, gla1ve, Goofy, hades, Kylar |
|           25 |     1284 | 2024-04-30 | GamerLegion        | L   | 0.925      | -            | -                | -                | -         |   -19.80 | dycha, gla1ve, Goofy, hades, Kylar |
|           24 |     1549 | 2024-04-19 | AMKAL              | L   | 0.852      | -            | -                | -                | -         |   -20.00 | dycha, gla1ve, Goofy, hades, Kylar |
|           23 |     1632 | 2024-04-17 | Enterprise         | W   | 0.839      | 0.384        | -                | 0.647 (0.209)    | -         |     2.26 | dycha, gla1ve, Goofy, hades, Kylar |
|           22 |     1801 | 2024-04-10 | OG                 | L   | 0.793      | -            | -                | -                | -         |   -18.91 | dycha, gla1ve, Goofy, hades, Kylar |
|           21 |     1884 | 2024-04-08 | FORZE              | L   | 0.779      | -            | -                | -                | -         |   -21.75 | dycha, gla1ve, Goofy, hades, Kylar |
|           20 |     1995 | 2024-04-04 | Aurora Young Blud  | W   | 0.752      | 0.384        | -                | 0.310 (0.090)    | -         |     0.46 | dycha, gla1ve, Goofy, hades, Kylar |
|           19 |     2291 | 2024-03-19 | FURIA              | L   | 0.647      | -            | -                | -                | -         |    -5.82 | dycha, gla1ve, Goofy, hades, Kylar |
|           18 |     2307 | 2024-03-18 | paiN               | L   | 0.638      | -            | -                | -                | -         |    -6.76 | dycha, gla1ve, Goofy, hades, Kylar |
|           17 |     2316 | 2024-03-17 | KOI                | W   | 0.634      | -            | -                | -                | 1 (0.634) |     2.02 | dycha, gla1ve, Goofy, hades, Kylar |
|           16 |     2333 | 2024-03-17 | Imperial           | L   | 0.632      | -            | -                | -                | -         |    -8.73 | dycha, gla1ve, Goofy, hades, Kylar |
|           15 |     2463 | 2024-03-12 | B8                 | L   | 0.600      | -            | -                | -                | -         |   -16.52 | dycha, gla1ve, Goofy, hades, Kylar |
|           14 |     2476 | 2024-03-11 | HEROIC             | L   | 0.594      | -            | -                | -                | -         |    -3.20 | dycha, gla1ve, Goofy, hades, Kylar |
|           13 |     2489 | 2024-03-11 | Metizport          | W   | 0.593      | -            | -                | -                | -         |     1.44 | dycha, gla1ve, Goofy, hades, Kylar |
|           12 |     2889 | 2024-02-22 | Astralis           | W   | 0.471      | 0.143        | 0.474 (0.032)    | -                | 1 (0.471) |    13.52 | dycha, gla1ve, Goofy, hades, Kylar |
|           11 |     2911 | 2024-02-21 | Vitality           | L   | 0.466      | -            | -                | -                | -         |    -1.08 | dycha, gla1ve, Goofy, hades, Kylar |
|           10 |     2943 | 2024-02-20 | GamerLegion        | W   | 0.458      | -            | -                | -                | 1 (0.458) |     1.91 | dycha, gla1ve, Goofy, hades, Kylar |
|            9 |     2964 | 2024-02-19 | M1X KS             | W   | 0.453      | -            | -                | -                | 1 (0.453) |     1.73 | dycha, gla1ve, Goofy, hades, Kylar |
|            8 |     2972 | 2024-02-19 | Spirit             | L   | 0.451      | -            | -                | -                | -         |    -1.10 | dycha, gla1ve, Goofy, hades, Kylar |
|            7 |     3176 | 2024-02-09 | Falcons            | L   | 0.387      | -            | -                | -                | -         |    -6.24 | dycha, gla1ve, Goofy, hades, Kylar |
|            6 |     3210 | 2024-02-06 | MOUZ               | L   | 0.367      | -            | -                | -                | -         |    -0.58 | dycha, gla1ve, Goofy, hades, Kylar |
|            5 |     3221 | 2024-02-05 | G2                 | W   | 0.360      | 1.000        | 0.746 (0.268)    | 0.580 (0.209)    | 1 (0.360) |    10.51 | dycha, gla1ve, Goofy, hades, Kylar |
|            4 |     3257 | 2024-02-03 | Vitality           | W   | 0.348      | 1.000        | 0.670 (0.233)    | 0.474 (0.165)    | 1 (0.348) |    10.29 | dycha, gla1ve, Goofy, hades, Kylar |
|            3 |     3296 | 2024-02-02 | The MongolZ        | W   | 0.340      | 0.143        | 0.978 (0.047)    | -                | 1 (0.340) |    10.02 | dycha, gla1ve, Goofy, hades, Kylar |
|            2 |     3325 | 2024-02-01 | Astralis           | W   | 0.334      | 0.143        | 0.474 (0.023)    | -                | -         |     9.84 | dycha, gla1ve, Goofy, hades, Kylar |
|            1 |     3351 | 2024-01-31 | BIG                | L   | 0.326      | -            | -                | -                | -         |    -4.81 | dycha, gla1ve, Goofy, hades, Kylar |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($62,322.64)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.20) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $8,000.00      | $8,000.00       |
| 2024-05-23 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-05-12 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-04-14 |      0.820 | $15,000.00     | $12,294.91      |
| 2024-03-20 |      0.653 | $10,000.00     | $6,532.73       |
| 2024-02-11 |      0.400 | $40,000.00     | $15,995.00      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
