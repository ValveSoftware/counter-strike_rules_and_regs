### Roster Details<br />
Team Name: JANO<br />
Roster: allu, Cliqq, Jerppa, Sm1llee, Villeboe<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [144](../standings_global.md)<br />
Regional Rank: [95]( ../standings_europe.md)<br />
Final Rank Value:  680.0<br />
<br />
Final Rank Value (680.0) = Starting Rank Value (698.7) + Head To Head Adjustments (-18.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.279[<sup>1</sup>](#table2)
- Bounty Collected: 0.301[<sup>2</sup>](#table1)
- Opponent Network: 0.035[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.154<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 698.7
- 400 + ( ( 0.154 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 698.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |        3 | 2024-05-29 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |    -3.21 | allu, Cliqq, Jerppa, Sm1llee, Villeboe |
|           13 |      838 | 2024-04-27 | Sashi             | L   | 0.985      | -            | -                | -                | -         |    -2.00 | allu, doto, Jerppa, juho, Sm1llee      |
|           12 |     1011 | 2024-04-20 | Sangal            | L   | 0.937      | -            | -                | -                | -         |    -3.65 | allu, doto, Jerppa, juho, Sm1llee      |
|           11 |     1044 | 2024-04-19 | NOM               | W   | 0.932      | 0.143        | 0.000 (0.000)    | 0.148 (0.020)    | 0 (0.000) |     9.76 | allu, doto, Jerppa, juho, Sm1llee      |
|           10 |     1144 | 2024-04-17 | RUBY              | L   | 0.917      | -            | -                | -                | -         |    -8.15 | allu, doto, Jerppa, juho, Sm1llee      |
|            9 |     1153 | 2024-04-17 | MOUZ NXT          | L   | 0.916      | -            | -                | -                | -         |    -3.63 | allu, doto, Jerppa, juho, Sm1llee      |
|            8 |     1234 | 2024-04-12 | Zero Tenacity     | W   | 0.883      | 0.371        | 0.147 (0.048)    | 1.000 (0.327)    | 0 (0.000) |    22.98 | allu, doto, Jerppa, juho, Sm1llee      |
|            7 |     1398 | 2024-04-08 | Permitta          | L   | 0.857      | -            | -                | -                | -         |    -5.80 | allu, doto, Jerppa, juho, Sm1llee      |
|            6 |     1433 | 2024-04-06 | Johnny Speeds     | L   | 0.844      | -            | -                | -                | -         |    -5.08 | allu, doto, Jerppa, juho, Sm1llee      |
|            5 |     1498 | 2024-04-04 | Gaimin Gladiators | L   | 0.830      | -            | -                | -                | -         |    -1.18 | allu, doto, Jerppa, juho, Sm1llee      |
|            4 |     1966 | 2024-03-12 | ECF               | L   | 0.678      | -            | -                | -                | -         |    -8.12 | allu, doto, Jelo, Jerppa, Sm1llee      |
|            3 |     2056 | 2024-03-08 | INGLORIOUS        | W   | 0.650      | 0.143        | 0.000 (0.000)    | 0.053 (0.005)    | 0 (0.000) |     7.09 | allu, doto, Jelo, Jerppa, Sm1llee      |
|            2 |     2166 | 2024-03-04 | Endpoint          | L   | 0.625      | -            | -                | -                | -         |   -14.84 | allu, doto, Jelo, Jerppa, Sm1llee      |
|            1 |     2251 | 2024-02-29 | Sashi             | L   | 0.597      | -            | -                | -                | -         |    -2.87 | allu, doto, Jelo, Jerppa, Sm1llee      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($783.87)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
