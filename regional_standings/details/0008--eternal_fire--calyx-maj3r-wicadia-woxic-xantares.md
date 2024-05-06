### Roster Details<br />
Team Name: Eternal Fire<br />
Roster: Calyx, MAJ3R, Wicadia, woxic, XANTARES<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [8](../standings_global.md)<br />
Regional Rank: [8]( ../standings_europe.md)<br />
Final Rank Value:  1672.3<br />
<br />
Final Rank Value (1672.3) = Starting Rank Value (1699.7) + Head To Head Adjustments (-27.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.714[<sup>1</sup>](#table2)
- Bounty Collected: 0.693[<sup>2</sup>](#table1)
- Opponent Network: 0.357[<sup>2</sup>](#table1)
- LAN Wins: 0.966[<sup>2</sup>](#table1)

The average of these factors is 0.682<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1699.7
- 400 + ( ( 0.682 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1699.7


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
|           41 |      185 | 2024-04-27 | SAW               | L   | 1.000      | -            | -                | -                | -         |   -26.27 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           40 |      213 | 2024-04-26 | FaZe              | L   | 1.000      | -            | -                | -                | -         |    -7.16 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           39 |      240 | 2024-04-25 | fnatic            | W   | 1.000      | 0.889        | 0.327 (0.291)    | 0.677 (0.602)    | 1 (1.000) |     1.85 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           38 |      260 | 2024-04-24 | Imperial          | W   | 1.000      | 0.889        | 0.656 (0.583)    | 0.965 (0.858)    | 1 (1.000) |     9.19 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           37 |      282 | 2024-04-23 | Astralis          | L   | 1.000      | -            | -                | -                | -         |   -21.21 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           36 |      337 | 2024-04-20 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -30.42 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           35 |      387 | 2024-04-19 | Sashi             | W   | 1.000      | 0.143        | -                | 1.000 (0.143)    | -         |     0.79 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           34 |      397 | 2024-04-19 | BetBoom           | W   | 1.000      | 0.143        | 0.563 (0.080)    | 1.000 (0.143)    | -         |     3.06 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           33 |      957 | 2024-03-29 | Natus Vincere     | L   | 0.946      | -            | -                | -                | -         |    -8.24 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           32 |     1065 | 2024-03-23 | Virtus.pro        | W   | 0.905      | 1.000        | 0.438 (0.396)    | 0.520 (0.471)    | 1 (0.905) |    14.33 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           31 |     1080 | 2024-03-22 | FaZe              | W   | 0.898      | 1.000        | 1.000 (0.898)    | 0.712 (0.639)    | 1 (0.898) |    21.66 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           30 |     1097 | 2024-03-21 | MOUZ              | L   | 0.893      | -            | -                | -                | -         |    -8.93 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           29 |     1105 | 2024-03-21 | Vitality          | W   | 0.892      | 1.000        | 1.000 (0.892)    | 0.442 (0.394)    | 1 (0.892) |    18.66 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           28 |     1144 | 2024-03-19 | GamerLegion       | W   | 0.879      | -            | -                | -                | 1 (0.879) |     5.22 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           27 |     1152 | 2024-03-18 | HEROIC            | L   | 0.872      | -            | -                | -                | -         |   -16.50 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           26 |     1175 | 2024-03-17 | paiN              | W   | 0.866      | 0.143        | 0.786 (0.097)    | 0.869 (0.108)    | 1 (0.866) |    11.99 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           25 |     1186 | 2024-03-17 | TheMongolz        | W   | 0.865      | -            | -                | -                | 1 (0.865) |     5.12 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           24 |     1857 | 2024-02-17 | BetBoom           | W   | 0.673      | 0.143        | 0.563 (0.054)    | 1.000 (0.096)    | 1 (0.673) |     3.46 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           23 |     1891 | 2024-02-16 | FaZe              | L   | 0.666      | -            | -                | -                | -         |    -3.86 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           22 |     1926 | 2024-02-15 | Falcons           | W   | 0.658      | -            | -                | -                | 1 (0.658) |     2.90 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           21 |     1949 | 2024-02-14 | G2                | L   | 0.653      | -            | -                | -                | -         |    -6.50 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           20 |     1959 | 2024-02-14 | Ninjas in Pyjamas | W   | 0.652      | -            | -                | -                | -         |     0.16 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           19 |     2068 | 2024-02-05 | Natus Vincere     | L   | 0.594      | -            | -                | -                | -         |    -3.49 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           18 |     2080 | 2024-02-04 | FaZe              | L   | 0.588      | -            | -                | -                | -         |    -3.19 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           17 |     2125 | 2024-02-03 | Falcons           | W   | 0.579      | 1.000        | 0.417 (0.241)    | 0.203 (0.117)    | -         |     1.89 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           16 |     2194 | 2024-01-31 | Rebels            | W   | 0.560      | -            | -                | -                | -         |     0.55 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           15 |     2202 | 2024-01-31 | BetBoom           | W   | 0.559      | -            | -                | -                | -         |     3.56 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           14 |     2472 | 2024-01-19 | MOUZ              | W   | 0.480      | 0.143        | 1.000 (0.069)    | -                | -         |    10.69 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           13 |     2532 | 2024-01-18 | IKLA              | W   | 0.473      | -            | -                | -                | -         |     0.04 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           12 |     2549 | 2024-01-18 | PERA              | W   | 0.472      | -            | -                | -                | -         |     0.18 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           11 |     3343 | 2023-11-26 | Monte             | L   | 0.120      | -            | -                | -                | -         |    -3.23 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           10 |     3348 | 2023-11-26 | MIBR              | W   | 0.119      | -            | -                | -                | -         |     1.73 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            9 |     3372 | 2023-11-25 | Nouns             | W   | 0.112      | -            | -                | -                | -         |     0.01 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            8 |     3377 | 2023-11-25 | TYLOO             | W   | 0.111      | -            | -                | -                | -         |     0.06 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            7 |     3397 | 2023-11-24 | Nouns             | L   | 0.104      | -            | -                | -                | -         |    -3.27 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            6 |     3447 | 2023-11-20 | 9 Pandas          | L   | 0.080      | -            | -                | -                | -         |    -2.42 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            5 |     3463 | 2023-11-19 | MIBR              | W   | 0.073      | -            | -                | -                | -         |     1.04 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            4 |     3523 | 2023-11-17 | FURIA             | W   | 0.059      | -            | -                | -                | -         |     0.54 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            3 |     3556 | 2023-11-16 | PARIVISION        | W   | 0.053      | -            | -                | -                | -         |     0.00 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            2 |     3629 | 2023-11-14 | BIG               | L   | 0.039      | -            | -                | -                | -         |    -1.02 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            1 |     3702 | 2023-11-11 | Aurora            | L   | 0.019      | -            | -                | -                | -         |    -0.39 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($64,336.80)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.40) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-05 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-03-31 |      0.960 | $45,000.00     | $43,210.48      |
| 2024-02-11 |      0.633 | $16,000.00     | $10,130.24      |
| 2023-11-26 |      0.120 | $20,000.00     | $2,399.71       |
| 2023-11-20 |      0.080 | $20,000.00     | $1,596.37       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
