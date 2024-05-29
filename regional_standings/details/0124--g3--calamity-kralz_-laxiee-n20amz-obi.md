### Roster Details<br />
Team Name: G3<br />
Roster: calamity, kralz , Laxiee, N20AmZ, obi<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [124](../standings_global.md)<br />
Regional Rank: [10]( ../standings_asia.md)<br />
Final Rank Value:  728.5<br />
<br />
Final Rank Value (728.5) = Starting Rank Value (733.6) + Head To Head Adjustments (-5.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.310[<sup>1</sup>](#table2)
- Bounty Collected: 0.213[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.155[<sup>2</sup>](#table1)

The average of these factors is 0.172<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 733.6
- 400 + ( ( 0.172 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 733.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      217 | 2024-05-20 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -7.88 | calamity, kralz , Laxiee, N20AmZ, obi     |
|           10 |     1117 | 2024-04-17 | Liquid           | L   | 0.920      | -            | -                | -                | -         |    -0.19 | calamity, kralz , Laxiee, N20AmZ, obi     |
|            9 |     1121 | 2024-04-17 | NRG              | W   | 0.920      | 0.143        | 0.010 (0.001)    | 0.605 (0.079)    | 0 (0.000) |    20.50 | calamity, kralz , Laxiee, N20AmZ, obi     |
|            8 |     1809 | 2024-03-17 | LAG              | L   | 0.715      | -            | -                | -                | -         |    -6.44 | arviast, C4LLM3SU3, calamity, N20AmZ, obi |
|            7 |     1810 | 2024-03-17 | Xiaoma           | W   | 0.714      | 0.333        | 0.002 (0.001)    | 0.030 (0.007)    | 1 (0.714) |     6.97 | arviast, C4LLM3SU3, calamity, N20AmZ, obi |
|            6 |     1817 | 2024-03-17 | Snakes Den       | W   | 0.713      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.713) |     3.28 | arviast, C4LLM3SU3, calamity, N20AmZ, obi |
|            5 |     2343 | 2024-02-24 | Wildcard         | L   | 0.567      | -            | -                | -                | -         |    -4.56 | C4LLM3SU3, calamity, Laxiee, N20AmZ, obi  |
|            4 |     2454 | 2024-02-19 | Mythic           | L   | 0.535      | -            | -                | -                | -         |    -6.50 | C4LLM3SU3, calamity, Laxiee, N20AmZ, obi  |
|            3 |     2456 | 2024-02-19 | Party Astronauts | L   | 0.534      | -            | -                | -                | -         |    -5.26 | C4LLM3SU3, calamity, Laxiee, N20AmZ, obi  |
|            2 |     2523 | 2024-02-16 | Rocket           | L   | 0.514      | -            | -                | -                | -         |   -11.69 | C4LLM3SU3, calamity, N20AmZ, obi, tmk     |
|            1 |     2553 | 2024-02-15 | Limitless        | W   | 0.508      | 0.143        | 0.001 (0.000)    | 0.168 (0.012)    | 0 (0.000) |     6.67 | C4LLM3SU3, calamity, N20AmZ, obi, tmk     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,788.58)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
