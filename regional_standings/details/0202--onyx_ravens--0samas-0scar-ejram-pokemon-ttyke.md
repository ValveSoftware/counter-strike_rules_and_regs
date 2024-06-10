### Roster Details<br />
Team Name: Onyx Ravens<br />
Roster: 0SAMAS, 0scar, Ejram, PokemoN, Ttyke<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [202](../standings_global.md)<br />
Regional Rank: [28]( ../standings_asia.md)<br />
Final Rank Value:  511.7<br />
<br />
Final Rank Value (511.7) = Starting Rank Value (502.5) + Head To Head Adjustments (9.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.204[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 502.5
- 400 + ( ( 0.051 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 502.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1540 | 2024-04-19 | JiJieHao   | L   | 0.853      | -            | -                | -                | -         |   -13.18 | 0SAMAS, 0scar, Ejram, PokemoN, Ttyke  |
|            9 |     1577 | 2024-04-18 | JiJieHao   | W   | 0.846      | 0.143        | 0.000 (0.000)    | 0.097 (0.012)    | 0 (0.000) |    13.40 | 0SAMAS, 0scar, Ejram, PokemoN, Ttyke  |
|            8 |     1601 | 2024-04-18 | NoChance   | W   | 0.845      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     9.34 | 0SAMAS, 0scar, Ejram, PokemoN, Ttyke  |
|            7 |     3386 | 2024-01-28 | JiJieHao   | L   | 0.308      | -            | -                | -                | -         |    -4.81 | 0SAMAS, Ejram, PokemoN, Ttyke, tudsoN |
|            6 |     3392 | 2024-01-28 | 15 Average | L   | 0.306      | -            | -                | -                | -         |    -5.29 | 0SAMAS, Ejram, PokemoN, Ttyke, tudsoN |
|            5 |     3418 | 2024-01-26 | JiJieHao   | W   | 0.293      | 0.143        | 0.000 (0.000)    | 0.097 (0.004)    | 0 (0.000) |     4.58 | 0SAMAS, Ejram, PokemoN, Ttyke, tudsoN |
|            4 |     3423 | 2024-01-26 | Nixuh      | W   | 0.292      | 0.143        | 0.000 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     3.29 | 0SAMAS, Ejram, PokemoN, Ttyke, tudsoN |
|            3 |     4058 | 2024-01-09 | 4Point5    | W   | 0.179      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.03 | 0SAMAS, Ejram, PokemoN, Ttyke, tudsoN |
|            2 |     4182 | 2023-12-15 | HeizerS    | L   | 0.014      | -            | -                | -                | -         |    -0.18 | 0SAMAS, Ejram, PokemoN, Ttyke, tudsoN |
|            1 |     4190 | 2023-12-15 | Endpoint   | L   | 0.013      | -            | -                | -                | -         |    -0.04 | 0SAMAS, Ejram, PokemoN, Ttyke, tudsoN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($38.32)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
