### Roster Details<br />
Team Name: G3<br />
Roster: calamity, kralz , Laxiee, N20AmZ, obi<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [115](../standings_global.md)<br />
Regional Rank: [10]( ../standings_asia.md)<br />
Final Rank Value:  760.9<br />
<br />
Final Rank Value (760.9) = Starting Rank Value (766.7) + Head To Head Adjustments (-5.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.348[<sup>1</sup>](#table2)
- Bounty Collected: 0.217[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.194[<sup>2</sup>](#table1)

The average of these factors is 0.193<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 766.7
- 400 + ( ( 0.193 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 766.7


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
|           10 |      466 | 2024-04-17 | Liquid           | L   | 1.000      | -            | -                | -                | -         |    -0.86 | calamity, kralz , Laxiee, N20AmZ, obi     |
|            9 |      470 | 2024-04-17 | NRG              | W   | 1.000      | 0.143        | 0.006 (0.001)    | 0.539 (0.077)    | 0 (0.000) |    20.97 | calamity, kralz , Laxiee, N20AmZ, obi     |
|            8 |     1158 | 2024-03-17 | LAG              | L   | 0.870      | -            | -                | -                | -         |    -7.76 | arviast, C4LLM3SU3, calamity, N20AmZ, obi |
|            7 |     1159 | 2024-03-17 | Xiaoma           | W   | 0.869      | 0.333        | 0.005 (0.002)    | 0.038 (0.011)    | 1 (0.869) |     8.29 | arviast, C4LLM3SU3, calamity, N20AmZ, obi |
|            6 |     1166 | 2024-03-17 | Snakes Den       | W   | 0.867      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.867) |     3.50 | arviast, C4LLM3SU3, calamity, N20AmZ, obi |
|            5 |     1692 | 2024-02-24 | Wildcard         | L   | 0.721      | -            | -                | -                | -         |    -6.46 | C4LLM3SU3, calamity, Laxiee, N20AmZ, obi  |
|            4 |     1803 | 2024-02-19 | Mythic           | L   | 0.689      | -            | -                | -                | -         |    -9.98 | C4LLM3SU3, calamity, Laxiee, N20AmZ, obi  |
|            3 |     1805 | 2024-02-19 | Party Astronauts | L   | 0.688      | -            | -                | -                | -         |    -8.38 | C4LLM3SU3, calamity, Laxiee, N20AmZ, obi  |
|            2 |     1872 | 2024-02-16 | Rocket           | L   | 0.668      | -            | -                | -                | -         |   -12.68 | C4LLM3SU3, calamity, N20AmZ, obi, tmk     |
|            1 |     1902 | 2024-02-15 | Limitless        | W   | 0.662      | 0.143        | 0.001 (0.000)    | 0.173 (0.016)    | 0 (0.000) |     7.50 | C4LLM3SU3, calamity, N20AmZ, obi, tmk     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,173.82)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
