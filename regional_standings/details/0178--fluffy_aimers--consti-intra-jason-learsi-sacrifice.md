### Roster Details<br />
Team Name: FLUFFY AIMERS<br />
Roster: consti, intra, jason, LEARSI, sacrifice<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [178](../standings_global.md)<br />
Regional Rank: [42]( ../standings_americas.md)<br />
Final Rank Value:  572.9<br />
<br />
Final Rank Value (572.9) = Starting Rank Value (595.2) + Head To Head Adjustments (-22.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.237[<sup>1</sup>](#table2)
- Bounty Collected: 0.164[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

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


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     3212 | 2024-01-17 | Rocket          | L   | 0.314      | -            | -                | -                | -         |    -5.39 | consti, intra, jason, LEARSI, sacrifice |
|            9 |     3310 | 2024-01-15 | regain          | L   | 0.301      | -            | -                | -                | -         |    -6.17 | consti, intra, jason, LEARSI, sacrifice |
|            8 |     3362 | 2024-01-13 | LOS             | L   | 0.289      | -            | -                | -                | -         |    -6.01 | consti, intra, jason, LEARSI, sacrifice |
|            7 |     3404 | 2024-01-12 | my life be like | L   | 0.282      | -            | -                | -                | -         |    -3.30 | consti, intra, jason, LEARSI, sacrifice |
|            6 |     3416 | 2024-01-12 | Complexity      | L   | 0.281      | -            | -                | -                | -         |    -0.04 | consti, intra, jason, LEARSI, sacrifice |
|            5 |     3441 | 2024-01-12 | For Fun         | L   | 0.276      | -            | -                | -                | -         |    -3.18 | consti, intra, jason, LEARSI, sacrifice |
|            4 |     3443 | 2024-01-11 | Bad News Bears  | W   | 0.276      | 0.143        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     2.85 | consti, intra, jason, LEARSI, sacrifice |
|            3 |     3649 | 2023-12-16 | Strife          | L   | 0.101      | -            | -                | -                | -         |    -1.25 | consti, intra, jason, LEARSI, sacrifice |
|            2 |     3819 | 2023-12-06 | Unjustified     | L   | 0.035      | -            | -                | -                | -         |    -0.52 | dea, jason, LEARSI, Peeping, sacrifice  |
|            1 |     3851 | 2023-12-05 | Take Flyte      | W   | 0.028      | 0.500        | 0.006 (0.000)    | 0.392 (0.006)    | 0 (0.000) |     0.66 | dea, jason, LEARSI, Peeping, sacrifice  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($184.17)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
