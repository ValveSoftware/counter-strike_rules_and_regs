### Roster Details<br />
Team Name: ex-Sprout<br />
Roster: cej0t, podi, raalz, reiko, Sdaim<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [170](../standings_global.md)<br />
Regional Rank: [109]( ../standings_europe.md)<br />
Final Rank Value:  627.3<br />
<br />
Final Rank Value (627.3) = Starting Rank Value (571.9) + Head To Head Adjustments (55.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.327[<sup>2</sup>](#table1)
- Opponent Network: 0.034[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.090<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 571.9
- 400 + ( ( 0.090 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 571.9


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
|           17 |      971 | 2024-03-28 | Rebels          | L   | 0.940      | -            | -                | -                | -         |    -2.31 | cej0t, podi, raalz, reiko, Sdaim            |
|           16 |     1045 | 2024-03-25 | ALTERNATE aTTaX | L   | 0.920      | -            | -                | -                | -         |    -5.09 | cej0t, podi, raalz, reiko, Sdaim            |
|           15 |     1075 | 2024-03-22 | Aurora          | L   | 0.900      | -            | -                | -                | -         |    -0.24 | BELCHONOKK, deko, KENSI, Lack1, Norwi       |
|           14 |     1146 | 2024-03-19 | B8              | L   | 0.878      | -            | -                | -                | -         |    -3.22 | cptkurtka023, esenthial, npl, OWNER, r1nkle |
|           13 |     1431 | 2024-03-07 | Alliance        | L   | 0.798      | -            | -                | -                | -         |    -6.00 | avid, b0denmaster, PlesseN, robiin, twist   |
|           12 |     1496 | 2024-03-05 | KOI             | L   | 0.786      | -            | -                | -                | -         |    -2.21 | cej0t, raalz, reiko, Sdaim, sL1m3           |
|           11 |     1539 | 2024-03-03 | BetBoom         | L   | 0.773      | -            | -                | -                | -         |    -0.38 | Buzz, cej0t, raalz, reiko, sL1m3            |
|           10 |     2007 | 2024-02-11 | Metizport       | L   | 0.632      | -            | -                | -                | -         |    -2.16 | adamb, Jackinho, nilo, susp, ztr            |
|            9 |     2033 | 2024-02-09 | fnatic          | W   | 0.619      | 0.143        | 0.327 (0.029)    | 0.677 (0.060)    | 0 (0.000) |    18.74 | Anlelele, cej0t, raalz, Sdaim, sL1m3        |
|            8 |     2034 | 2024-02-09 | 3DMAX           | W   | 0.619      | 0.143        | 0.055 (0.005)    | 0.810 (0.072)    | 0 (0.000) |    18.62 | Anlelele, cej0t, raalz, Sdaim, sL1m3        |
|            7 |     2054 | 2024-02-07 | Metizport       | L   | 0.606      | -            | -                | -                | -         |    -2.09 | adamb, Jackinho, nilo, susp, ztr            |
|            6 |     2205 | 2024-01-31 | ex-Preasy       | L   | 0.558      | -            | -                | -                | -         |    -1.54 | Anlelele, cej0t, raalz, Sdaim, sL1m3        |
|            5 |     2216 | 2024-01-30 | Nemiga          | L   | 0.553      | -            | -                | -                | -         |    -0.45 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r        |
|            4 |     2224 | 2024-01-30 | ECLOT           | W   | 0.553      | 0.143        | 0.156 (0.012)    | 0.607 (0.048)    | 0 (0.000) |    16.35 | Anlelele, cej0t, raalz, Sdaim, sL1m3        |
|            3 |     2227 | 2024-01-30 | ALTERNATE aTTaX | L   | 0.552      | -            | -                | -                | -         |    -2.04 | awzek, FreeZe, Goody, PANIX, PerX           |
|            2 |     2232 | 2024-01-29 | Pigeons         | W   | 0.545      | 0.143        | 0.090 (0.007)    | 0.373 (0.029)    | 0 (0.000) |    14.01 | ANa, hyskeee, Kat, tory, twenty3            |
|            1 |     2281 | 2024-01-26 | ex-Preasy       | W   | 0.524      | 0.371        | 0.173 (0.034)    | 0.700 (0.136)    | 0 (0.000) |    15.37 | Anlelele, cej0t, raalz, Sdaim, sL1m3        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
