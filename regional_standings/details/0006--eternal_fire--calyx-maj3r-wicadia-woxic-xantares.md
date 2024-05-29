### Roster Details<br />
Team Name: Eternal Fire<br />
Roster: Calyx, MAJ3R, Wicadia, woxic, XANTARES<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [6](../standings_global.md)<br />
Regional Rank: [6]( ../standings_europe.md)<br />
Final Rank Value:  1770.5<br />
<br />
Final Rank Value (1770.5) = Starting Rank Value (1830.3) + Head To Head Adjustments (-59.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.657[<sup>2</sup>](#table1)
- Opponent Network: 0.493[<sup>2</sup>](#table1)
- LAN Wins: 0.798[<sup>2</sup>](#table1)

The average of these factors is 0.737<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1830.3
- 400 + ( ( 0.737 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1830.3


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
|           35 |      122 | 2024-05-23 | Liquid            | W   | 1.000      | 0.769        | 0.493 (0.379)    | 0.854 (0.656)    | -         |    10.38 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           34 |      166 | 2024-05-22 | GamerLegion       | W   | 1.000      | 0.769        | 0.224 (0.172)    | 0.278 (0.214)    | -         |     1.85 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           33 |      205 | 2024-05-21 | BetBoom           | W   | 1.000      | 0.769        | 0.392 (0.302)    | 0.951 (0.731)    | -         |     2.70 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           32 |      361 | 2024-05-16 | SAW               | W   | 1.000      | 0.769        | 0.109 (0.084)    | 0.611 (0.470)    | -         |     3.08 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           31 |      373 | 2024-05-16 | PARIVISION        | W   | 1.000      | 0.769        | -                | 0.475 (0.365)    | -         |     0.38 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           30 |      836 | 2024-04-27 | SAW               | L   | 0.986      | -            | -                | -                | -         |   -28.54 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           29 |      864 | 2024-04-26 | FaZe              | L   | 0.979      | -            | -                | -                | -         |    -8.69 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           28 |      891 | 2024-04-25 | fnatic            | W   | 0.973      | 0.889        | 0.148 (0.128)    | 0.565 (0.489)    | 1 (0.973) |     0.74 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           27 |      911 | 2024-04-24 | Imperial          | W   | 0.966      | 0.889        | 0.373 (0.320)    | 0.889 (0.764)    | 1 (0.966) |     4.43 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           26 |      933 | 2024-04-23 | Astralis          | L   | 0.958      | -            | -                | -                | -         |   -18.08 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           25 |      988 | 2024-04-20 | Sashi             | L   | 0.939      | -            | -                | -                | -         |   -29.07 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           24 |     1038 | 2024-04-19 | Sashi             | W   | 0.932      | -            | -                | -                | -         |     0.39 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           23 |     1048 | 2024-04-19 | BetBoom           | W   | 0.932      | -            | -                | -                | -         |     1.65 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           22 |     1608 | 2024-03-29 | Natus Vincere     | L   | 0.792      | -            | -                | -                | -         |   -11.93 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           21 |     1716 | 2024-03-23 | Virtus.pro        | W   | 0.751      | 1.000        | 0.271 (0.203)    | 0.499 (0.375)    | 1 (0.751) |     7.58 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           20 |     1731 | 2024-03-22 | FaZe              | W   | 0.744      | 1.000        | 1.000 (0.744)    | 0.688 (0.512)    | 1 (0.744) |    16.02 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           19 |     1748 | 2024-03-21 | MOUZ              | L   | 0.739      | -            | -                | -                | -         |    -7.07 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           18 |     1756 | 2024-03-21 | Vitality          | W   | 0.738      | 1.000        | 0.699 (0.516)    | 0.481 (0.355)    | 1 (0.738) |    12.03 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           17 |     1795 | 2024-03-19 | GamerLegion       | W   | 0.724      | -            | -                | -                | 1 (0.724) |     0.68 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           16 |     1803 | 2024-03-18 | HEROIC            | L   | 0.718      | -            | -                | -                | -         |   -15.42 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           15 |     1826 | 2024-03-17 | paiN              | W   | 0.712      | -            | -                | -                | 1 (0.712) |     4.31 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           14 |     1837 | 2024-03-17 | TheMongolz        | W   | 0.711      | -            | -                | -                | 1 (0.711) |     2.70 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           13 |     2508 | 2024-02-17 | BetBoom           | W   | 0.519      | -            | -                | -                | 1 (0.519) |     1.35 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           12 |     2542 | 2024-02-16 | FaZe              | L   | 0.512      | -            | -                | -                | -         |    -4.69 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           11 |     2577 | 2024-02-15 | Falcons           | W   | 0.504      | -            | -                | -                | 1 (0.504) |     2.19 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           10 |     2600 | 2024-02-14 | G2                | L   | 0.499      | -            | -                | -                | -         |    -8.75 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            9 |     2610 | 2024-02-14 | Ninjas in Pyjamas | W   | 0.498      | -            | -                | -                | -         |     0.04 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            8 |     2719 | 2024-02-05 | Natus Vincere     | L   | 0.440      | -            | -                | -                | -         |    -6.04 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            7 |     2731 | 2024-02-04 | FaZe              | L   | 0.434      | -            | -                | -                | -         |    -4.02 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            6 |     2776 | 2024-02-03 | Falcons           | W   | 0.424      | 1.000        | 0.355 (0.151)    | -                | -         |     1.50 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            5 |     2845 | 2024-01-31 | Rebels            | W   | 0.406      | -            | -                | -                | -         |     0.16 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            4 |     2853 | 2024-01-31 | BetBoom           | W   | 0.405      | -            | -                | -                | -         |     1.21 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            3 |     3123 | 2024-01-19 | MOUZ              | W   | 0.326      | -            | -                | -                | -         |     7.11 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            2 |     3183 | 2024-01-18 | IKLA              | W   | 0.319      | -            | -                | -                | -         |     0.01 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            1 |     3200 | 2024-01-18 | PERA              | W   | 0.318      | -            | -                | -                | -         |     0.05 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($300,941.06)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-23 |      1.000 | $250,000.00    | $250,000.00     |
| 2024-05-12 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-03-31 |      0.806 | $45,000.00     | $36,276.31      |
| 2024-02-11 |      0.479 | $16,000.00     | $7,664.76       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
