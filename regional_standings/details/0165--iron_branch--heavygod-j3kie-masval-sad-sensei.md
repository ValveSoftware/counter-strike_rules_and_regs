### Roster Details<br />
Team Name: Iron Branch<br />
Roster: HeavyGod, j3kie, MaSvAl, sad, SENSEi<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [165](../standings_global.md)<br />
Regional Rank: [108]( ../standings_europe.md)<br />
Final Rank Value:  692.4<br />
<br />
Final Rank Value (692.4) = Starting Rank Value (675.0) + Head To Head Adjustments (17.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.262[<sup>1</sup>](#table2)
- Bounty Collected: 0.252[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.134<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 675.0
- 400 + ( ( 0.134 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 675.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     2206 | 2022-10-13 | Believe      | L   | 0.387      | -            | -                | -                | -         |    -4.37 | HeavyGod, j3kie, MaSvAl, sad, SENSEi |
|            9 |     2245 | 2022-10-12 | AGO          | L   | 0.380      | -            | -                | -                | -         |    -4.73 | HeavyGod, j3kie, MaSvAl, sad, SENSEi |
|            8 |     2380 | 2022-10-05 | Aurora       | L   | 0.334      | -            | -                | -                | -         |    -5.40 | HeavyGod, j3kie, MaSvAl, sad, SENSEi |
|            7 |     2444 | 2022-10-02 | ECLOT        | W   | 0.313      | 0.371        | 0.046 (0.005)    | 0.584 (0.068)    | 0 (0.000) |     8.38 | HeavyGod, j3kie, MaSvAl, sad, SENSEi |
|            6 |     2501 | 2022-09-30 | HOTU         | W   | 0.298      | 0.371        | 0.004 (0.000)    | 0.112 (0.012)    | 0 (0.000) |     5.40 | HeavyGod, j3kie, MaSvAl, sad, SENSEi |
|            5 |     2543 | 2022-09-28 | EYEBALLERS   | W   | 0.287      | 0.371        | 0.017 (0.002)    | 0.776 (0.083)    | 0 (0.000) |     7.01 | HeavyGod, j3kie, MaSvAl, sad, SENSEi |
|            4 |     2575 | 2022-09-27 | Anonymo      | W   | 0.281      | 0.371        | 0.000 (0.000)    | 0.388 (0.040)    | 0 (0.000) |     3.31 | HeavyGod, j3kie, MaSvAl, sad, SENSEi |
|            3 |     2616 | 2022-09-25 | 9 Pandas     | W   | 0.267      | 0.371        | 0.023 (0.002)    | 0.260 (0.026)    | 0 (0.000) |     5.05 | HeavyGod, j3kie, MaSvAl, sad, SENSEi |
|            2 |     2739 | 2022-09-22 | ThunderFlash | W   | 0.247      | 0.371        | 0.010 (0.001)    | 0.054 (0.005)    | 0 (0.000) |     4.33 | HeavyGod, j3kie, MaSvAl, sad, SENSEi |
|            1 |     2778 | 2022-09-21 | EYEBALLERS   | L   | 0.241      | -            | -                | -                | -         |    -1.56 | HeavyGod, j3kie, MaSvAl, sad, SENSEi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($717.41)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
