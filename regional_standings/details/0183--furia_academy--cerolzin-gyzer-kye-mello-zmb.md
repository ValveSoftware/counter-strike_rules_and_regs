### Roster Details<br />
Team Name: FURIA Academy<br />
Roster: cerolzin, GYZER, kye, mello, zmb<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [183](../standings_global.md)<br />
Regional Rank: [43]( ../standings_americas.md)<br />
Final Rank Value:  554.6<br />
<br />
Final Rank Value (554.6) = Starting Rank Value (545.0) + Head To Head Adjustments (9.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.288[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.076<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 545.0
- 400 + ( ( 0.076 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 545.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      607 | 2024-04-11 | Case        | L   | 1.000      | -            | -                | -                | -         |    -6.10 | cerolzin, GYZER, kye, mello, zmb      |
|           12 |      762 | 2024-04-07 | Imperial    | L   | 1.000      | -            | -                | -                | -         |    -0.10 | Bruninho, cerolzin, GYZER, kye, mello |
|           11 |     1247 | 2024-03-14 | Case        | L   | 0.847      | -            | -                | -                | -         |    -5.21 | Bruninho, cerolzin, GYZER, kye, mello |
|           10 |     1307 | 2024-03-12 | Solid       | W   | 0.834      | 0.303        | 0.132 (0.033)    | 0.503 (0.127)    | 0 (0.000) |    21.87 | Bruninho, cerolzin, GYZER, kye, mello |
|            9 |     1320 | 2024-03-11 | BESTIA      | L   | 0.828      | -            | -                | -                | -         |    -4.21 | Bruninho, cerolzin, GYZER, kye, mello |
|            8 |     1345 | 2024-03-10 | Case        | L   | 0.821      | -            | -                | -                | -         |    -4.15 | Bruninho, cerolzin, GYZER, kye, mello |
|            7 |     1347 | 2024-03-10 | Flamengo    | W   | 0.820      | 0.435        | 0.000 (0.000)    | 0.096 (0.034)    | 0 (0.000) |    11.84 | Bruninho, cerolzin, GYZER, kye, mello |
|            6 |     1391 | 2024-03-08 | BESTIA      | L   | 0.808      | -            | -                | -                | -         |    -3.84 | Bruninho, cerolzin, GYZER, kye, mello |
|            5 |     1833 | 2024-02-18 | BESTIA      | L   | 0.680      | -            | -                | -                | -         |    -3.46 | Bruninho, cerolzin, GYZER, kye, mello |
|            4 |     1884 | 2024-02-16 | Dusty Roots | W   | 0.666      | 0.435        | 0.000 (0.000)    | 0.018 (0.005)    | 0 (0.000) |     6.53 | Bruninho, cerolzin, GYZER, kye, mello |
|            3 |     1995 | 2024-02-12 | BESTIA      | L   | 0.642      | -            | -                | -                | -         |    -3.12 | Bruninho, cerolzin, GYZER, kye, mello |
|            2 |     3594 | 2023-11-15 | W7M         | L   | 0.047      | -            | -                | -                | -         |    -0.26 | Bruninho, GYZER, kye, lub, mello      |
|            1 |     3636 | 2023-11-13 | Solid       | L   | 0.034      | -            | -                | -                | -         |    -0.12 | Bruninho, GYZER, kye, lub, mello      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
