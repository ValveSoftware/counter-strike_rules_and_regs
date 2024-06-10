### Roster Details<br />
Team Name: E-Xolos LAZER<br />
Roster: land1n, mawth, RenanZin, tatazin, w1<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [144](../standings_global.md)<br />
Regional Rank: [38]( ../standings_americas.md)<br />
Final Rank Value:  725.9<br />
<br />
Final Rank Value (725.9) = Starting Rank Value (705.6) + Head To Head Adjustments (20.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.333[<sup>1</sup>](#table2)
- Bounty Collected: 0.262[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.153<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 705.6
- 400 + ( ( 0.153 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 705.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |        1 | 2024-06-10 | Strife           | W   | 1.000      | 0.384        | 0.014 (0.005)    | 0.129 (0.050)    | 0 (0.000) |    15.12 | land1n, mawth, RenanZin, tatazin, w1 |
|           11 |       26 | 2024-06-09 | OMiT             | L   | 1.000      | -            | -                | -                | -         |   -12.11 | land1n, mawth, RenanZin, tatazin, w1 |
|           10 |       88 | 2024-06-08 | straykids        | W   | 1.000      | 0.367        | 0.007 (0.002)    | 0.039 (0.014)    | 0 (0.000) |    13.43 | land1n, mawth, RenanZin, tatazin, w1 |
|            9 |       97 | 2024-06-08 | Akimbo           | W   | 1.000      | 0.384        | 0.007 (0.003)    | 0.117 (0.045)    | 0 (0.000) |    14.84 | land1n, mawth, RenanZin, tatazin, w1 |
|            8 |      144 | 2024-06-07 | Strife           | W   | 1.000      | 0.367        | 0.014 (0.005)    | 0.129 (0.047)    | 0 (0.000) |    17.70 | land1n, mawth, RenanZin, tatazin, w1 |
|            7 |      205 | 2024-06-06 | Snakes Den       | L   | 1.000      | -            | -                | -                | -         |   -22.22 | land1n, mawth, RenanZin, tatazin, w1 |
|            6 |      218 | 2024-06-06 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -4.98 | land1n, mawth, RenanZin, tatazin, w1 |
|            5 |      323 | 2024-06-04 | Legacy           | L   | 1.000      | -            | -                | -                | -         |    -3.90 | land1n, mawth, RenanZin, tatazin, w1 |
|            4 |      364 | 2024-06-03 | Perseverance     | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.078 (0.030)    | 0 (0.000) |     8.46 | land1n, mawth, RenanZin, tatazin, w1 |
|            3 |      733 | 2024-05-20 | M80              | L   | 1.000      | -            | -                | -                | -         |    -1.34 | land1n, mawth, RenanZin, tatazin, w1 |
|            2 |     3025 | 2024-02-16 | Mythic           | L   | 0.435      | -            | -                | -                | -         |    -3.94 | land1n, mawth, RenanZin, tatazin, w1 |
|            1 |     3874 | 2024-01-13 | RED Canids       | L   | 0.208      | -            | -                | -                | -         |    -0.76 | land1n, RenanZin, tatazin, w1, watts |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,000.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
