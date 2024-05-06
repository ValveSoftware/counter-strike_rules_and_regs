### Roster Details<br />
Team Name: Onyx Ravens<br />
Roster: 0SAMAS, 0scar, Ejram, PokemoN, Ttyke<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [167](../standings_global.md)<br />
Regional Rank: [21]( ../standings_asia.md)<br />
Final Rank Value:  632.0<br />
<br />
Final Rank Value (632.0) = Starting Rank Value (644.5) + Head To Head Adjustments (-12.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.315[<sup>1</sup>](#table2)
- Bounty Collected: 0.171[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.024[<sup>2</sup>](#table1)

The average of these factors is 0.128<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 644.5
- 400 + ( ( 0.128 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 644.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      389 | 2024-04-19 | JiJieHao   | L   | 1.000      | -            | -                | -                | -         |   -18.30 | 0SAMAS, 0scar, Ejram, PokemoN, Ttyke     |
|           10 |      426 | 2024-04-18 | JiJieHao   | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.145 (0.021)    | 0 (0.000) |    12.59 | 0SAMAS, 0scar, Ejram, PokemoN, Ttyke     |
|            9 |      450 | 2024-04-18 | NoChance   | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.58 | 0SAMAS, 0scar, Ejram, PokemoN, Ttyke     |
|            8 |     2235 | 2024-01-28 | JiJieHao   | L   | 0.541      | -            | -                | -                | -         |   -10.44 | 0SAMAS, Ejram, PokemoN, Ttyke, tudsoN    |
|            7 |     2241 | 2024-01-28 | 15 Average | L   | 0.539      | -            | -                | -                | -         |   -11.69 | 0SAMAS, Ejram, PokemoN, Ttyke, tudsoN    |
|            6 |     2267 | 2024-01-26 | JiJieHao   | W   | 0.526      | 0.143        | 0.000 (0.000)    | 0.145 (0.011)    | 0 (0.000) |     5.95 | 0SAMAS, Ejram, PokemoN, Ttyke, tudsoN    |
|            5 |     2272 | 2024-01-26 | Nixuh      | W   | 0.526      | 0.143        | 0.000 (0.000)    | 0.018 (0.001)    | 0 (0.000) |     3.34 | 0SAMAS, Ejram, PokemoN, Ttyke, tudsoN    |
|            4 |     2907 | 2024-01-09 | 4Point5    | W   | 0.412      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.66 | 0SAMAS, Ejram, PokemoN, Ttyke, tudsoN    |
|            3 |     3031 | 2023-12-15 | HeizerS    | L   | 0.247      | -            | -                | -                | -         |    -3.89 | 0SAMAS, Ejram, PokemoN, Ttyke, tudsoN    |
|            2 |     3039 | 2023-12-15 | Endpoint   | L   | 0.246      | -            | -                | -                | -         |    -1.57 | 0SAMAS, Ejram, PokemoN, Ttyke, tudsoN    |
|            1 |     3081 | 2023-12-10 | Shush      | W   | 0.214      | 0.298        | 0.002 (0.000)    | 0.042 (0.003)    | 1 (0.214) |     2.33 | Aly67, ba6oooy, HopeDaBeast, Lacore, tr1 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,088.86)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-16 |      0.252 | $2,000.00      | $504.85         |
| 2023-12-10 |      0.214 | $2,723.00      | $584.01         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
