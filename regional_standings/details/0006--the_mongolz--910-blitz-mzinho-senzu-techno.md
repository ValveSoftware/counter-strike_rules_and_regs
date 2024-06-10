### Roster Details<br />
Team Name: The MongolZ<br />
Roster: 910, bLitz, mzinho, Senzu, Techno<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [6](../standings_global.md)<br />
Regional Rank: [1]( ../standings_asia.md)<br />
Final Rank Value:  1836.5<br />
<br />
Final Rank Value (1836.5) = Starting Rank Value (1933.1) + Head To Head Adjustments (-96.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.991[<sup>1</sup>](#table2)
- Bounty Collected: 0.632[<sup>2</sup>](#table1)
- Opponent Network: 0.453[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.769<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1933.1
- 400 + ( ( 0.769 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1933.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           52 |       46 | 2024-06-09 | Ninjas in Pyjamas | W   | 1.000      | 0.715        | 0.294 (0.211)    | 0.480 (0.343)    | 1 (1.000) |     4.75 | 910, bLitz, mzinho, Senzu, Techno |
|           51 |      124 | 2024-06-08 | Astralis          | W   | 1.000      | 0.715        | 0.474 (0.339)    | 0.537 (0.384)    | 1 (1.000) |    16.25 | 910, bLitz, mzinho, Senzu, Techno |
|           50 |      236 | 2024-06-06 | Astralis          | L   | 1.000      | -            | -                | -                | -         |   -15.39 | 910, bLitz, mzinho, Senzu, Techno |
|           49 |      250 | 2024-06-06 | Ninjas in Pyjamas | W   | 1.000      | 0.715        | 0.294 (0.211)    | 0.480 (0.343)    | 1 (1.000) |     4.32 | 910, bLitz, mzinho, Senzu, Techno |
|           48 |      268 | 2024-06-06 | HEROIC            | W   | 1.000      | 0.715        | 0.362 (0.259)    | 0.635 (0.454)    | 1 (1.000) |     8.96 | 910, bLitz, mzinho, Senzu, Techno |
|           47 |      303 | 2024-06-05 | ENCE              | W   | 1.000      | 0.715        | 0.205 (0.147)    | -                | 1 (1.000) |     1.51 | 910, bLitz, mzinho, Senzu, Techno |
|           46 |      315 | 2024-06-05 | Sashi             | W   | 1.000      | 0.715        | -                | 1.000 (0.715)    | 1 (1.000) |     1.34 | 910, bLitz, mzinho, Senzu, Techno |
|           45 |      397 | 2024-06-02 | BLEED             | W   | 1.000      | 0.500        | 0.349 (0.174)    | 1.000 (0.500)    | 1 (1.000) |     1.51 | 910, bLitz, mzinho, Senzu, Techno |
|           44 |      437 | 2024-06-01 | BLEED             | W   | 1.000      | 0.500        | 0.349 (0.174)    | 1.000 (0.500)    | 1 (1.000) |     1.36 | 910, bLitz, mzinho, Senzu, Techno |
|           43 |      516 | 2024-05-29 | Aurora            | W   | 1.000      | 0.500        | 0.513 (0.257)    | 0.918 (0.459)    | 1 (1.000) |     3.47 | 910, bLitz, mzinho, Senzu, Techno |
|           42 |      537 | 2024-05-28 | Gaimin Gladiators | W   | 1.000      | 0.500        | -                | 0.749 (0.375)    | 1 (1.000) |     0.80 | 910, bLitz, mzinho, Senzu, Techno |
|           41 |      810 | 2024-05-18 | ATOX              | W   | 1.000      | -            | -                | -                | -         |     0.26 | 910, bLitz, mzinho, Senzu, Techno |
|           40 |      846 | 2024-05-17 | Chinggis Warriors | W   | 1.000      | -            | -                | -                | -         |     0.08 | 910, bLitz, mzinho, Senzu, Techno |
|           39 |     1114 | 2024-05-08 | Virtus.pro        | L   | 0.980      | -            | -                | -                | -         |   -20.66 | 910, bLitz, mzinho, Senzu, Techno |
|           38 |     1325 | 2024-04-28 | Vitality          | L   | 0.912      | -            | -                | -                | -         |   -11.03 | 910, bLitz, mzinho, Senzu, Techno |
|           37 |     1402 | 2024-04-25 | G2                | W   | 0.892      | 0.889        | 0.746 (0.592)    | 0.580 (0.460)    | -         |    15.90 | 910, bLitz, mzinho, Senzu, Techno |
|           36 |     1420 | 2024-04-24 | Falcons           | W   | 0.885      | 0.889        | 0.327 (0.258)    | -                | -         |     2.84 | 910, bLitz, mzinho, Senzu, Techno |
|           35 |     1545 | 2024-04-19 | Rare Atom         | W   | 0.853      | -            | -                | -                | -         |     0.04 | 910, bLitz, mzinho, Senzu, Techno |
|           34 |     1595 | 2024-04-18 | TYLOO             | W   | 0.846      | -            | -                | -                | -         |     0.11 | 910, bLitz, mzinho, Senzu, Techno |
|           33 |     1605 | 2024-04-18 | Rare Atom         | W   | 0.845      | -            | -                | -                | -         |     0.03 | 910, bLitz, mzinho, Senzu, Techno |
|           32 |     2032 | 2024-04-03 | Lynn Vision       | W   | 0.745      | -            | -                | -                | -         |     0.74 | 910, bLitz, mzinho, Senzu, Techno |
|           31 |     2046 | 2024-04-03 | LYG               | W   | 0.744      | -            | -                | -                | -         |     0.06 | 910, bLitz, mzinho, Senzu, Techno |
|           30 |     2074 | 2024-04-02 | ATOX              | W   | 0.739      | -            | -                | -                | -         |     0.17 | 910, bLitz, mzinho, Senzu, Techno |
|           29 |     2078 | 2024-04-02 | LYG               | L   | 0.738      | -            | -                | -                | -         |   -23.19 | 910, bLitz, mzinho, Senzu, Techno |
|           28 |     2227 | 2024-03-22 | paiN              | L   | 0.666      | -            | -                | -                | -         |   -17.45 | 910, bLitz, mzinho, Senzu, Techno |
|           27 |     2249 | 2024-03-21 | Vitality          | L   | 0.660      | -            | -                | -                | -         |    -9.20 | 910, bLitz, mzinho, Senzu, Techno |
|           26 |     2260 | 2024-03-21 | Natus Vincere     | L   | 0.658      | -            | -                | -                | -         |   -10.81 | 910, bLitz, mzinho, Senzu, Techno |
|           25 |     2279 | 2024-03-20 | Legacy            | W   | 0.652      | -            | -                | -                | -         |     0.24 | 910, bLitz, mzinho, Senzu, Techno |
|           24 |     2296 | 2024-03-19 | Lynn Vision       | W   | 0.645      | -            | -                | -                | -         |     0.45 | 910, bLitz, mzinho, Senzu, Techno |
|           23 |     2302 | 2024-03-18 | AMKAL             | W   | 0.639      | -            | -                | -                | -         |     0.36 | 910, bLitz, mzinho, Senzu, Techno |
|           22 |     2325 | 2024-03-17 | Gaimin Gladiators | L   | 0.633      | -            | -                | -                | -         |   -19.47 | 910, bLitz, mzinho, Senzu, Techno |
|           21 |     2337 | 2024-03-17 | Eternal Fire      | L   | 0.631      | -            | -                | -                | -         |   -11.96 | 910, bLitz, mzinho, Senzu, Techno |
|           20 |     2770 | 2024-02-27 | Lynn Vision       | W   | 0.509      | -            | -                | -                | -         |     0.27 | 910, bLitz, mzinho, Senzu, Techno |
|           19 |     2806 | 2024-02-25 | FlyQuest          | W   | 0.496      | -            | -                | -                | -         |     0.88 | 910, bLitz, mzinho, Senzu, Techno |
|           18 |     2812 | 2024-02-25 | MAG               | W   | 0.495      | -            | -                | -                | -         |     0.01 | 910, bLitz, mzinho, Senzu, Techno |
|           17 |     3296 | 2024-02-02 | ENCE              | L   | 0.340      | -            | -                | -                | -         |   -10.02 | 910, bLitz, mzinho, Senzu, Techno |
|           16 |     3336 | 2024-02-01 | Spirit            | L   | 0.332      | -            | -                | -                | -         |    -5.95 | 910, bLitz, mzinho, Senzu, Techno |
|           15 |     3347 | 2024-01-31 | FURIA             | W   | 0.326      | -            | -                | -                | -         |     1.95 | 910, bLitz, mzinho, Senzu, Techno |
|           14 |     3394 | 2024-01-28 | Lynn Vision       | W   | 0.305      | -            | -                | -                | -         |     0.18 | 910, bLitz, mzinho, Senzu, Techno |
|           13 |     3396 | 2024-01-28 | NKT               | W   | 0.304      | -            | -                | -                | -         |     0.01 | 910, bLitz, mzinho, Senzu, Techno |
|           12 |     3406 | 2024-01-27 | TYLOO             | L   | 0.299      | -            | -                | -                | -         |    -9.40 | 910, bLitz, mzinho, Senzu, Techno |
|           11 |     3424 | 2024-01-26 | TYLOO             | W   | 0.292      | -            | -                | -                | -         |     0.01 | 910, bLitz, mzinho, Senzu, Techno |
|           10 |     3431 | 2024-01-26 | The Huns          | W   | 0.291      | -            | -                | -                | -         |     0.00 | 910, bLitz, mzinho, Senzu, Techno |
|            9 |     3435 | 2024-01-26 | TYLOO             | W   | 0.290      | -            | -                | -                | -         |     0.01 | 910, bLitz, mzinho, Senzu, Techno |
|            8 |     3436 | 2024-01-25 | ACME              | W   | 0.290      | -            | -                | -                | -         |     0.01 | 910, bLitz, mzinho, Senzu, Techno |
|            7 |     3546 | 2024-01-21 | ATOX              | W   | 0.257      | -            | -                | -                | -         |     0.03 | 910, bLitz, mzinho, Senzu, Techno |
|            6 |     3637 | 2024-01-19 | MungYu            | W   | 0.245      | -            | -                | -                | -         |     0.00 | 910, bLitz, mzinho, Senzu, Techno |
|            5 |     3645 | 2024-01-19 | NKT               | W   | 0.244      | -            | -                | -                | -         |     0.01 | 910, bLitz, mzinho, Senzu, Techno |
|            4 |     4130 | 2023-12-17 | Virtus.pro        | L   | 0.026      | -            | -                | -                | -         |    -0.63 | 910, bLitz, mzinho, Senzu, Techno |
|            3 |     4159 | 2023-12-16 | Complexity        | W   | 0.020      | -            | -                | -                | -         |     0.11 | 910, bLitz, mzinho, Senzu, Techno |
|            2 |     4178 | 2023-12-15 | Apeks             | L   | 0.015      | -            | -                | -                | -         |    -0.45 | 910, bLitz, mzinho, Senzu, Techno |
|            1 |     4184 | 2023-12-15 | Complexity        | W   | 0.014      | -            | -                | -                | -         |     0.07 | 910, bLitz, mzinho, Senzu, Techno |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($297,471.37)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.98) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $200,000.00    | $200,000.00     |
| 2024-06-02 |      1.000 | $50,000.00     | $50,000.00      |
| 2024-05-12 |      1.000 | $23,500.00     | $23,500.00      |
| 2024-03-31 |      0.727 | $20,000.00     | $14,539.36      |
| 2024-02-02 |      0.341 | $4,500.00      | $1,533.68       |
| 2024-01-28 |      0.305 | $25,000.00     | $7,620.96       |
| 2023-12-17 |      0.028 | $10,000.00     | $277.38         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
