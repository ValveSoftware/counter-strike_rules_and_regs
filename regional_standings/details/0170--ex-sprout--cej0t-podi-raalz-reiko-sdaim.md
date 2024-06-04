### Roster Details<br />
Team Name: ex-Sprout<br />
Roster: cej0t, podi, raalz, reiko, Sdaim<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [170](../standings_global.md)<br />
Regional Rank: [110]( ../standings_europe.md)<br />
Final Rank Value:  585.8<br />
<br />
Final Rank Value (585.8) = Starting Rank Value (547.1) + Head To Head Adjustments (38.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.284[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.076<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 547.1
- 400 + ( ( 0.076 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 547.1


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
|           17 |     1622 | 2024-03-28 | Rebels          | L   | 0.786      | -            | -                | -                | -         |    -1.69 | cej0t, podi, raalz, reiko, Sdaim            |
|           16 |     1696 | 2024-03-25 | ALTERNATE aTTaX | L   | 0.766      | -            | -                | -                | -         |    -3.75 | cej0t, podi, raalz, reiko, Sdaim            |
|           15 |     1726 | 2024-03-22 | Aurora          | L   | 0.746      | -            | -                | -                | -         |    -0.24 | BELCHONOKK, deko, KENSI, Lack1, Norwi       |
|           14 |     1797 | 2024-03-19 | B8              | L   | 0.724      | -            | -                | -                | -         |    -1.39 | cptkurtka023, esenthial, npl, OWNER, r1nkle |
|           13 |     2082 | 2024-03-07 | Alliance        | L   | 0.644      | -            | -                | -                | -         |    -4.56 | avid, b0denmaster, PlesseN, robiin, twist   |
|           12 |     2147 | 2024-03-05 | KOI             | L   | 0.632      | -            | -                | -                | -         |    -2.14 | cej0t, raalz, reiko, Sdaim, sL1m3           |
|           11 |     2190 | 2024-03-03 | BetBoom         | L   | 0.619      | -            | -                | -                | -         |    -0.25 | Buzz, cej0t, raalz, reiko, sL1m3            |
|           10 |     2658 | 2024-02-11 | Metizport       | L   | 0.478      | -            | -                | -                | -         |    -1.58 | adamb, Jackinho, nilo, susp, ztr            |
|            9 |     2684 | 2024-02-09 | fnatic          | W   | 0.465      | 0.143        | 0.148 (0.010)    | 0.565 (0.038)    | 0 (0.000) |    13.90 | Anlelele, cej0t, raalz, Sdaim, sL1m3        |
|            8 |     2685 | 2024-02-09 | 3DMAX           | W   | 0.465      | 0.143        | 0.105 (0.007)    | 0.669 (0.044)    | 0 (0.000) |    14.04 | Anlelele, cej0t, raalz, Sdaim, sL1m3        |
|            7 |     2705 | 2024-02-07 | Metizport       | L   | 0.452      | -            | -                | -                | -         |    -1.48 | adamb, Jackinho, nilo, susp, ztr            |
|            6 |     2856 | 2024-01-31 | ex-Preasy       | L   | 0.404      | -            | -                | -                | -         |    -1.67 | Anlelele, cej0t, raalz, Sdaim, sL1m3        |
|            5 |     2867 | 2024-01-30 | Nemiga          | L   | 0.399      | -            | -                | -                | -         |    -0.36 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r        |
|            4 |     2875 | 2024-01-30 | ECLOT           | W   | 0.399      | 0.143        | 0.084 (0.005)    | 0.530 (0.030)    | 0 (0.000) |    11.68 | Anlelele, cej0t, raalz, Sdaim, sL1m3        |
|            3 |     2878 | 2024-01-30 | ALTERNATE aTTaX | L   | 0.398      | -            | -                | -                | -         |    -1.43 | awzek, FreeZe, Goody, PANIX, PerX           |
|            2 |     2883 | 2024-01-29 | Pigeons         | W   | 0.390      | 0.143        | 0.025 (0.001)    | 0.310 (0.017)    | 0 (0.000) |     9.26 | ANa, hyskeee, Kat, tory, twenty3            |
|            1 |     2932 | 2024-01-26 | ex-Preasy       | W   | 0.370      | 0.371        | 0.051 (0.007)    | 0.470 (0.064)    | 0 (0.000) |    10.36 | Anlelele, cej0t, raalz, Sdaim, sL1m3        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
