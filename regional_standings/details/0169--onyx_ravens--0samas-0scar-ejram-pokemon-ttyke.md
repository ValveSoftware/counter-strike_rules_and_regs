### Roster Details<br />
Team Name: Onyx Ravens<br />
Roster: 0SAMAS, 0scar, Ejram, PokemoN, Ttyke<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [169](../standings_global.md)<br />
Regional Rank: [19]( ../standings_asia.md)<br />
Final Rank Value:  642.8<br />
<br />
Final Rank Value (642.8) = Starting Rank Value (660.1) + Head To Head Adjustments (-17.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.323[<sup>1</sup>](#table2)
- Bounty Collected: 0.178[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.033[<sup>2</sup>](#table1)

The average of these factors is 0.135<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 660.1
- 400 + ( ( 0.135 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 660.1


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
|           11 |       93 | 2024-04-19 | JiJieHao   | L   | 1.000      | -            | -                | -                | -         |   -18.33 | 0SAMAS, 0scar, Ejram, PokemoN, Ttyke     |
|           10 |      130 | 2024-04-18 | JiJieHao   | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.161 (0.023)    | 0 (0.000) |    12.57 | 0SAMAS, 0scar, Ejram, PokemoN, Ttyke     |
|            9 |      154 | 2024-04-18 | NoChance   | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.27 | 0SAMAS, 0scar, Ejram, PokemoN, Ttyke     |
|            8 |     1939 | 2024-01-28 | JiJieHao   | L   | 0.634      | -            | -                | -                | -         |   -12.25 | 0SAMAS, Ejram, PokemoN, Ttyke, tudsoN    |
|            7 |     1945 | 2024-01-28 | 15 Average | L   | 0.632      | -            | -                | -                | -         |   -13.87 | 0SAMAS, Ejram, PokemoN, Ttyke, tudsoN    |
|            6 |     1971 | 2024-01-26 | JiJieHao   | W   | 0.620      | 0.143        | 0.000 (0.000)    | 0.161 (0.014)    | 0 (0.000) |     6.85 | 0SAMAS, Ejram, PokemoN, Ttyke, tudsoN    |
|            5 |     1976 | 2024-01-26 | Nixuh      | W   | 0.619      | 0.143        | 0.000 (0.000)    | 0.023 (0.002)    | 0 (0.000) |     3.68 | 0SAMAS, Ejram, PokemoN, Ttyke, tudsoN    |
|            4 |     2611 | 2024-01-09 | 4Point5    | W   | 0.506      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.06 | 0SAMAS, Ejram, PokemoN, Ttyke, tudsoN    |
|            3 |     2735 | 2023-12-15 | HeizerS    | L   | 0.341      | -            | -                | -                | -         |    -5.37 | 0SAMAS, Ejram, PokemoN, Ttyke, tudsoN    |
|            2 |     2743 | 2023-12-15 | Endpoint   | L   | 0.340      | -            | -                | -                | -         |    -3.14 | 0SAMAS, Ejram, PokemoN, Ttyke, tudsoN    |
|            1 |     2785 | 2023-12-10 | Shush      | W   | 0.308      | 0.298        | 0.003 (0.000)    | 0.053 (0.005)    | 1 (0.308) |     3.21 | Aly67, ba6oooy, HopeDaBeast, Lacore, tr1 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,529.54)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-16 |      0.346 | $2,000.00      | $691.46         |
| 2023-12-10 |      0.308 | $2,723.00      | $838.09         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
