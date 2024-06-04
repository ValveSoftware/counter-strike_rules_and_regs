### Roster Details<br />
Team Name: Onyx Ravens<br />
Roster: 0SAMAS, 0scar, Ejram, PokemoN, Ttyke<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [168](../standings_global.md)<br />
Regional Rank: [20]( ../standings_asia.md)<br />
Final Rank Value:  591.3<br />
<br />
Final Rank Value (591.3) = Starting Rank Value (595.2) + Head To Head Adjustments (-3.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.255[<sup>1</sup>](#table2)
- Bounty Collected: 0.138[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.007[<sup>2</sup>](#table1)

The average of these factors is 0.101<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 595.2
- 400 + ( ( 0.101 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 595.2


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
|           11 |     1040 | 2024-04-19 | JiJieHao   | L   | 0.932      | -            | -                | -                | -         |   -16.62 | 0SAMAS, 0scar, Ejram, PokemoN, Ttyke     |
|           10 |     1077 | 2024-04-18 | JiJieHao   | W   | 0.926      | 0.143        | 0.000 (0.000)    | 0.117 (0.015)    | 0 (0.000) |    12.19 | 0SAMAS, 0scar, Ejram, PokemoN, Ttyke     |
|            9 |     1101 | 2024-04-18 | NoChance   | W   | 0.924      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.31 | 0SAMAS, 0scar, Ejram, PokemoN, Ttyke     |
|            8 |     2886 | 2024-01-28 | JiJieHao   | L   | 0.387      | -            | -                | -                | -         |    -7.18 | 0SAMAS, Ejram, PokemoN, Ttyke, tudsoN    |
|            7 |     2892 | 2024-01-28 | 15 Average | L   | 0.385      | -            | -                | -                | -         |    -7.89 | 0SAMAS, Ejram, PokemoN, Ttyke, tudsoN    |
|            6 |     2918 | 2024-01-26 | JiJieHao   | W   | 0.372      | 0.143        | 0.000 (0.000)    | 0.117 (0.006)    | 0 (0.000) |     4.61 | 0SAMAS, Ejram, PokemoN, Ttyke, tudsoN    |
|            5 |     2923 | 2024-01-26 | Nixuh      | W   | 0.372      | 0.143        | 0.000 (0.000)    | 0.011 (0.001)    | 0 (0.000) |     2.91 | 0SAMAS, Ejram, PokemoN, Ttyke, tudsoN    |
|            4 |     3558 | 2024-01-09 | 4Point5    | W   | 0.258      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.05 | 0SAMAS, Ejram, PokemoN, Ttyke, tudsoN    |
|            3 |     3682 | 2023-12-15 | HeizerS    | L   | 0.093      | -            | -                | -                | -         |    -1.44 | 0SAMAS, Ejram, PokemoN, Ttyke, tudsoN    |
|            2 |     3690 | 2023-12-15 | Endpoint   | L   | 0.092      | -            | -                | -                | -         |    -0.49 | 0SAMAS, Ejram, PokemoN, Ttyke, tudsoN    |
|            1 |     3732 | 2023-12-10 | Shush      | W   | 0.060      | 0.298        | 0.000 (0.000)    | 0.026 (0.000)    | 1 (0.060) |     0.72 | Aly67, ba6oooy, HopeDaBeast, Lacore, tr1 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($361.08)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-16 |      0.098 | $2,000.00      | $196.66         |
| 2023-12-10 |      0.060 | $2,723.00      | $164.42         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
