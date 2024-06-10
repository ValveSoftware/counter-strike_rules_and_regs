### Roster Details<br />
Team Name: ex-Sprout<br />
Roster: cej0t, podi, raalz, reiko, Sdaim<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [181](../standings_global.md)<br />
Regional Rank: [112]( ../standings_europe.md)<br />
Final Rank Value:  589.0<br />
<br />
Final Rank Value (589.0) = Starting Rank Value (552.2) + Head To Head Adjustments (36.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.289[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.076<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 552.2
- 400 + ( ( 0.076 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 552.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |     2122 | 2024-03-28 | Rebels          | L   | 0.707      | -            | -                | -                | -         |    -1.29 | cej0t, podi, raalz, reiko, Sdaim            |
|           16 |     2196 | 2024-03-25 | ALTERNATE aTTaX | L   | 0.687      | -            | -                | -                | -         |    -2.40 | cej0t, podi, raalz, reiko, Sdaim            |
|           15 |     2226 | 2024-03-22 | Aurora          | L   | 0.667      | -            | -                | -                | -         |    -0.12 | BELCHONOKK, deko, KENSI, Lack1, Norwi       |
|           14 |     2297 | 2024-03-19 | B8              | L   | 0.645      | -            | -                | -                | -         |    -1.05 | cptkurtka023, esenthial, npl, OWNER, r1nkle |
|           13 |     2582 | 2024-03-07 | Alliance        | L   | 0.565      | -            | -                | -                | -         |    -3.00 | avid, b0denmaster, PlesseN, robiin, twist   |
|           12 |     2647 | 2024-03-05 | KOI             | L   | 0.553      | -            | -                | -                | -         |    -1.40 | cej0t, raalz, reiko, Sdaim, sL1m3           |
|           11 |     2690 | 2024-03-03 | BetBoom         | L   | 0.540      | -            | -                | -                | -         |    -0.05 | Buzz, cej0t, raalz, reiko, sL1m3            |
|           10 |     3158 | 2024-02-11 | Metizport       | L   | 0.399      | -            | -                | -                | -         |    -1.23 | adamb, Jackinho, nilo, susp, ztr            |
|            9 |     3184 | 2024-02-09 | fnatic          | W   | 0.386      | 0.143        | 0.198 (0.011)    | 0.650 (0.036)    | 0 (0.000) |    11.98 | Anlelele, cej0t, raalz, Sdaim, sL1m3        |
|            8 |     3185 | 2024-02-09 | 3DMAX           | W   | 0.385      | 0.143        | 0.122 (0.007)    | 0.821 (0.045)    | 0 (0.000) |    11.77 | Anlelele, cej0t, raalz, Sdaim, sL1m3        |
|            7 |     3205 | 2024-02-07 | Metizport       | L   | 0.373      | -            | -                | -                | -         |    -1.14 | adamb, Jackinho, nilo, susp, ztr            |
|            6 |     3356 | 2024-01-31 | ex-Preasy       | L   | 0.325      | -            | -                | -                | -         |    -1.43 | Anlelele, cej0t, raalz, Sdaim, sL1m3        |
|            5 |     3367 | 2024-01-30 | Nemiga          | L   | 0.320      | -            | -                | -                | -         |    -0.24 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r        |
|            4 |     3375 | 2024-01-30 | ECLOT           | W   | 0.320      | 0.143        | 0.101 (0.005)    | 0.549 (0.025)    | 0 (0.000) |     9.82 | Anlelele, cej0t, raalz, Sdaim, sL1m3        |
|            3 |     3378 | 2024-01-30 | ALTERNATE aTTaX | L   | 0.319      | -            | -                | -                | -         |    -0.80 | awzek, FreeZe, Goody, PANIX, PerX           |
|            2 |     3383 | 2024-01-29 | Imperial fe     | W   | 0.311      | 0.143        | 0.178 (0.008)    | 0.393 (0.017)    | 0 (0.000) |     9.37 | ANa, hyskeee, Kat, tory, twenty3            |
|            1 |     3432 | 2024-01-26 | ex-Preasy       | W   | 0.291      | 0.371        | 0.041 (0.004)    | 0.369 (0.040)    | 0 (0.000) |     8.06 | Anlelele, cej0t, raalz, Sdaim, sL1m3        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
