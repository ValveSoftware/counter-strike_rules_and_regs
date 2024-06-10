### Roster Details<br />
Team Name: Eternal Fire<br />
Roster: Calyx, MAJ3R, Wicadia, woxic, XANTARES<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [9](../standings_global.md)<br />
Regional Rank: [8]( ../standings_europe.md)<br />
Final Rank Value:  1708.6<br />
<br />
Final Rank Value (1708.6) = Starting Rank Value (1832.5) + Head To Head Adjustments (-123.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.651[<sup>2</sup>](#table1)
- Opponent Network: 0.464[<sup>2</sup>](#table1)
- LAN Wins: 0.760[<sup>2</sup>](#table1)

The average of these factors is 0.719<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1832.5
- 400 + ( ( 0.719 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1832.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |      242 | 2024-06-06 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |   -24.76 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           39 |      259 | 2024-06-06 | BIG               | W   | 1.000      | 0.715        | 0.228 (0.163)    | 0.459 (0.328)    | 1 (1.000) |     5.00 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           38 |      267 | 2024-06-06 | FURIA             | L   | 1.000      | -            | -                | -                | -         |   -26.00 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           37 |      295 | 2024-06-05 | fnatic            | L   | 1.000      | -            | -                | -                | -         |   -29.69 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           36 |      318 | 2024-06-05 | Complexity        | L   | 1.000      | -            | -                | -                | -         |   -20.95 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           35 |      622 | 2024-05-23 | Liquid            | W   | 1.000      | 0.769        | 0.501 (0.385)    | 0.732 (0.563)    | -         |    10.55 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           34 |      666 | 2024-05-22 | GamerLegion       | W   | 1.000      | 0.769        | 0.222 (0.171)    | -                | -         |     2.01 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           33 |      705 | 2024-05-21 | BetBoom           | W   | 1.000      | 0.769        | 0.427 (0.328)    | 0.917 (0.705)    | -         |     4.53 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           32 |      861 | 2024-05-16 | SAW               | W   | 1.000      | 0.769        | -                | 0.660 (0.507)    | -         |     2.75 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           31 |      873 | 2024-05-16 | PARIVISION        | W   | 1.000      | 0.769        | -                | 0.527 (0.405)    | -         |     0.43 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           30 |     1336 | 2024-04-27 | SAW               | L   | 0.907      | -            | -                | -                | -         |   -26.56 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           29 |     1364 | 2024-04-26 | FaZe              | L   | 0.900      | -            | -                | -                | -         |    -8.47 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           28 |     1391 | 2024-04-25 | fnatic            | W   | 0.894      | 0.889        | 0.198 (0.157)    | 0.650 (0.517)    | 1 (0.894) |     1.43 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           27 |     1411 | 2024-04-24 | Imperial          | W   | 0.887      | 0.889        | 0.415 (0.328)    | 0.799 (0.630)    | 1 (0.887) |     3.73 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           26 |     1433 | 2024-04-23 | Astralis          | L   | 0.879      | -            | -                | -                | -         |   -11.90 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           25 |     1488 | 2024-04-20 | Sashi             | L   | 0.860      | -            | -                | -                | -         |   -26.49 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           24 |     1538 | 2024-04-19 | Sashi             | W   | 0.853      | -            | -                | -                | -         |     0.47 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           23 |     1548 | 2024-04-19 | BetBoom           | W   | 0.852      | -            | -                | -                | -         |     3.90 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           22 |     2108 | 2024-03-29 | Natus Vincere     | L   | 0.713      | -            | -                | -                | -         |   -11.12 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           21 |     2216 | 2024-03-23 | Virtus.pro        | W   | 0.672      | 1.000        | 0.229 (0.154)    | 0.418 (0.281)    | 1 (0.672) |     6.72 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           20 |     2231 | 2024-03-22 | FaZe              | W   | 0.665      | 1.000        | 1.000 (0.665)    | 0.588 (0.391)    | 1 (0.665) |    13.74 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           19 |     2248 | 2024-03-21 | MOUZ              | L   | 0.660      | -            | -                | -                | -         |    -6.26 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           18 |     2256 | 2024-03-21 | Vitality          | W   | 0.659      | 1.000        | 0.670 (0.441)    | 0.474 (0.312)    | 1 (0.659) |    12.53 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           17 |     2295 | 2024-03-19 | GamerLegion       | W   | 0.645      | -            | -                | -                | 1 (0.645) |     0.45 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           16 |     2303 | 2024-03-18 | HEROIC            | L   | 0.639      | -            | -                | -                | -         |   -12.34 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           15 |     2326 | 2024-03-17 | paiN              | W   | 0.633      | -            | -                | -                | 1 (0.633) |     3.57 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           14 |     2337 | 2024-03-17 | The MongolZ       | W   | 0.631      | -            | -                | -                | 1 (0.631) |    11.96 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           13 |     3008 | 2024-02-17 | BetBoom           | W   | 0.439      | -            | -                | -                | 1 (0.439) |     3.61 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           12 |     3042 | 2024-02-16 | FaZe              | L   | 0.432      | -            | -                | -                | -         |    -4.20 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           11 |     3077 | 2024-02-15 | Falcons           | W   | 0.424      | -            | -                | -                | -         |     1.53 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           10 |     3100 | 2024-02-14 | G2                | L   | 0.420      | -            | -                | -                | -         |    -5.29 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            9 |     3110 | 2024-02-14 | Ninjas in Pyjamas | W   | 0.418      | -            | -                | -                | -         |     0.03 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            8 |     3219 | 2024-02-05 | Natus Vincere     | L   | 0.361      | -            | -                | -                | -         |    -5.17 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            7 |     3231 | 2024-02-04 | FaZe              | L   | 0.354      | -            | -                | -                | -         |    -3.52 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            6 |     3276 | 2024-02-03 | Falcons           | W   | 0.345      | 1.000        | 0.327 (0.113)    | -                | -         |     1.02 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            5 |     3345 | 2024-01-31 | Rebels            | W   | 0.327      | -            | -                | -                | -         |     0.15 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            4 |     3353 | 2024-01-31 | BetBoom           | W   | 0.326      | -            | -                | -                | -         |     3.11 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            3 |     3623 | 2024-01-19 | MOUZ              | W   | 0.247      | -            | -                | -                | -         |     5.59 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            2 |     3683 | 2024-01-18 | IKLA              | W   | 0.240      | -            | -                | -                | -         |     0.01 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            1 |     3700 | 2024-01-18 | PERA              | W   | 0.239      | -            | -                | -                | -         |     0.04 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($304,111.55)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $8,000.00      | $8,000.00       |
| 2024-05-23 |      1.000 | $250,000.00    | $250,000.00     |
| 2024-05-12 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-03-31 |      0.727 | $45,000.00     | $32,713.55      |
| 2024-02-11 |      0.400 | $16,000.00     | $6,398.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
