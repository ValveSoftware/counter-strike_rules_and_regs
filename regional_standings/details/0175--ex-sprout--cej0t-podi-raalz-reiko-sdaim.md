### Roster Details<br />
Team Name: ex-Sprout<br />
Roster: cej0t, podi, raalz, reiko, Sdaim<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [175](../standings_global.md)<br />
Regional Rank: [114]( ../standings_europe.md)<br />
Final Rank Value:  623.9<br />
<br />
Final Rank Value (623.9) = Starting Rank Value (578.5) + Head To Head Adjustments (45.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.330[<sup>2</sup>](#table1)
- Opponent Network: 0.040[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.092<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 578.5
- 400 + ( ( 0.092 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 578.5


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
|           17 |      675 | 2024-03-28 | Rebels          | L   | 1.000      | -            | -                | -                | -         |    -5.67 | cej0t, podi, raalz, reiko, Sdaim            |
|           16 |      749 | 2024-03-25 | ALTERNATE aTTaX | L   | 1.000      | -            | -                | -                | -         |    -7.86 | cej0t, podi, raalz, reiko, Sdaim            |
|           15 |      779 | 2024-03-22 | Aurora          | L   | 0.993      | -            | -                | -                | -         |    -0.82 | BELCHONOKK, deko, KENSI, Lack1, Norwi       |
|           14 |      850 | 2024-03-19 | B8              | L   | 0.971      | -            | -                | -                | -         |    -6.99 | cptkurtka023, esenthial, npl, OWNER, r1nkle |
|           13 |     1135 | 2024-03-07 | Alliance        | L   | 0.892      | -            | -                | -                | -         |    -7.23 | avid, b0denmaster, PlesseN, robiin, twist   |
|           12 |     1200 | 2024-03-05 | KOI             | L   | 0.879      | -            | -                | -                | -         |    -2.78 | cej0t, raalz, reiko, Sdaim, sL1m3           |
|           11 |     1243 | 2024-03-03 | BetBoom         | L   | 0.866      | -            | -                | -                | -         |    -1.20 | Buzz, cej0t, raalz, reiko, sL1m3            |
|           10 |     1711 | 2024-02-11 | Metizport       | L   | 0.726      | -            | -                | -                | -         |    -3.11 | adamb, Jackinho, nilo, susp, ztr            |
|            9 |     1737 | 2024-02-09 | fnatic          | W   | 0.712      | 0.143        | 0.240 (0.024)    | 0.624 (0.064)    | 0 (0.000) |    20.67 | Anlelele, cej0t, raalz, Sdaim, sL1m3        |
|            8 |     1738 | 2024-02-09 | 3DMAX           | W   | 0.712      | 0.143        | 0.048 (0.005)    | 0.801 (0.081)    | 0 (0.000) |    19.99 | Anlelele, cej0t, raalz, Sdaim, sL1m3        |
|            7 |     1758 | 2024-02-07 | Metizport       | L   | 0.699      | -            | -                | -                | -         |    -3.06 | adamb, Jackinho, nilo, susp, ztr            |
|            6 |     1909 | 2024-01-31 | Preasy          | L   | 0.652      | -            | -                | -                | -         |    -1.77 | Anlelele, cej0t, raalz, Sdaim, sL1m3        |
|            5 |     1920 | 2024-01-30 | Nemiga          | L   | 0.647      | -            | -                | -                | -         |    -3.06 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r        |
|            4 |     1928 | 2024-01-30 | ECLOT           | W   | 0.646      | 0.143        | 0.083 (0.008)    | 0.623 (0.058)    | 0 (0.000) |    18.67 | Anlelele, cej0t, raalz, Sdaim, sL1m3        |
|            3 |     1931 | 2024-01-30 | ALTERNATE aTTaX | L   | 0.645      | -            | -                | -                | -         |    -5.27 | awzek, FreeZe, God6y, PANIX, PerX           |
|            2 |     1936 | 2024-01-29 | Pigeons         | W   | 0.638      | 0.143        | 0.095 (0.009)    | 0.353 (0.032)    | 0 (0.000) |    16.74 | ANa, hyskeee, Kat, tory, twenty3            |
|            1 |     1985 | 2024-01-26 | Preasy          | W   | 0.617      | 0.371        | 0.205 (0.047)    | 0.723 (0.165)    | 0 (0.000) |    18.14 | Anlelele, cej0t, raalz, Sdaim, sL1m3        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
