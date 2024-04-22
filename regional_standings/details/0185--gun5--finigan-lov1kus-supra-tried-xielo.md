### Roster Details<br />
Team Name: GUN5<br />
Roster: FinigaN, lov1kus, supra, tried, xiELO<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [185](../standings_global.md)<br />
Regional Rank: [119]( ../standings_europe.md)<br />
Final Rank Value:  603.9<br />
<br />
Final Rank Value (603.9) = Starting Rank Value (638.7) + Head To Head Adjustments (-34.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.281[<sup>1</sup>](#table2)
- Bounty Collected: 0.210[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.124<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 638.7
- 400 + ( ( 0.124 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 638.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      436 | 2024-04-08 | KOI           | L   | 1.000      | -            | -                | -                | -         |    -2.79 | FinigaN, lov1kus, supra, tried, xiELO     |
|           14 |      445 | 2024-04-08 | Apeks         | L   | 1.000      | -            | -                | -                | -         |    -1.53 | FinigaN, lov1kus, supra, tried, xiELO     |
|           13 |      640 | 2024-04-01 | GamerLegion   | L   | 1.000      | -            | -                | -                | -         |   -18.28 | FinigaN, lov1kus, supra, tried, xiELO     |
|           12 |      846 | 2024-03-19 | 3DMAX         | L   | 0.972      | -            | -                | -                | -         |    -3.50 | FinigaN, lov1kus, supra, tried, xiELO     |
|           11 |     1199 | 2024-03-05 | Nemiga        | L   | 0.880      | -            | -                | -                | -         |    -3.19 | FinigaN, lov1kus, supra, tried, xiELO     |
|           10 |     1919 | 2024-01-30 | FORZE         | L   | 0.647      | -            | -                | -                | -         |    -2.79 | FinigaN, lov1kus, supra, tried, xiELO     |
|            9 |     2284 | 2024-01-17 | Sprout        | L   | 0.561      | -            | -                | -                | -         |    -6.30 | FinigaN, lov1kus, supra, xiELO, znxxX     |
|            8 |     2342 | 2024-01-16 | Endpoint      | L   | 0.554      | -            | -                | -                | -         |    -4.89 | FinigaN, lov1kus, supra, xiELO, znxxX     |
|            7 |     2548 | 2024-01-10 | HEROIC        | L   | 0.514      | -            | -                | -                | -         |    -0.08 | FinigaN, lov1kus, supra, xiELO, znxxX     |
|            6 |     2647 | 2023-12-19 | PERA          | L   | 0.366      | -            | -                | -                | -         |    -3.63 | FinigaN, lov1kus, ResoLuxe, supra, xiELO  |
|            5 |     2650 | 2023-12-19 | Metizport     | L   | 0.365      | -            | -                | -                | -         |    -1.66 | FinigaN, lov1kus, ResoLuxe, supra, xiELO  |
|            4 |     2652 | 2023-12-19 | Gucci Academy | W   | 0.364      | 0.333        | 0.013 (0.002)    | 0.093 (0.011)    | 0 (0.000) |     7.78 | FinigaN, lov1kus, ResoLuxe, supra, xiELO  |
|            3 |     3359 | 2023-11-12 | VP.Prodigy    | W   | 0.121      | 0.320        | 0.001 (0.000)    | 0.182 (0.007)    | 0 (0.000) |     2.06 | FinigaN, L1GH7n1nG, lov1kus, supra, xiELO |
|            2 |     3380 | 2023-11-12 | Entropiq      | W   | 0.118      | 0.320        | 0.002 (0.000)    | 0.403 (0.015)    | 0 (0.000) |     2.44 | FinigaN, L1GH7n1nG, lov1kus, supra, xiELO |
|            1 |     3411 | 2023-11-11 | GenOne        | W   | 0.112      | 0.320        | 0.001 (0.000)    | 0.008 (0.000)    | 0 (0.000) |     1.57 | FinigaN, L1GH7n1nG, lov1kus, supra, xiELO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($525.30)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
