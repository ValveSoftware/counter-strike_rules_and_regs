### Roster Details<br />
Team Name: Eros<br />
Roster: Andrew, DJF, nooz, PNDLM, shutout<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [177](../standings_global.md)<br />
Regional Rank: [43]( ../standings_americas.md)<br />
Final Rank Value:  621.3<br />
<br />
Final Rank Value (621.3) = Starting Rank Value (624.6) + Head To Head Adjustments (-3.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.281[<sup>1</sup>](#table2)
- Bounty Collected: 0.183[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.116<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 624.6
- 400 + ( ( 0.116 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 624.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     3183 | 2023-11-18 | Limitless      | L   | 0.162      | -            | -                | -                | -         |    -2.19 | Andrew, DJF, nooz, PNDLM, shutout |
|            9 |     3357 | 2023-11-12 | NRG            | L   | 0.122      | -            | -                | -                | -         |    -1.11 | Andrew, DJF, nooz, PNDLM, shutout |
|            8 |     3392 | 2023-11-11 | Elevate        | L   | 0.115      | -            | -                | -                | -         |    -0.76 | Andrew, DJF, nooz, PNDLM, shutout |
|            7 |     3429 | 2023-11-09 | Rocket         | W   | 0.102      | 0.500        | 0.002 (0.000)    | 0.276 (0.014)    | 0 (0.000) |     1.82 | Andrew, DJF, nooz, PNDLM, shutout |
|            6 |     3448 | 2023-11-08 | BOSS           | L   | 0.095      | -            | -                | -                | -         |    -0.57 | Andrew, DJF, nooz, PNDLM, shutout |
|            5 |     3451 | 2023-11-08 | Carpe Diem     | L   | 0.095      | -            | -                | -                | -         |    -0.96 | Andrew, DJF, nooz, PNDLM, shutout |
|            4 |     3474 | 2023-11-07 | Bad News Bears | L   | 0.088      | -            | -                | -                | -         |    -1.43 | Andrew, DJF, nooz, PNDLM, shutout |
|            3 |     3495 | 2023-11-06 | FLUFFY AIMERS  | W   | 0.082      | 0.500        | 0.005 (0.000)    | 0.028 (0.001)    | 0 (0.000) |     1.40 | Andrew, DJF, nooz, PNDLM, shutout |
|            2 |     3591 | 2023-11-01 | Kari           | W   | 0.048      | 0.500        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.55 | Andrew, DJF, nooz, PNDLM, shutout |
|            1 |     3804 | 2023-10-26 | Mythic         | L   | 0.008      | -            | -                | -                | -         |    -0.08 | Andrew, DJF, nooz, PNDLM, shutout |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($524.94)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
