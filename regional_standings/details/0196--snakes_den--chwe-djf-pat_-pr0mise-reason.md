### Roster Details<br />
Team Name: Snakes Den<br />
Roster: ChwE, DJF, Pat_, Pr0mise, Reason<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [196](../standings_global.md)<br />
Regional Rank: [60]( ../standings_americas.md)<br />
Final Rank Value:  613.4<br />
<br />
Final Rank Value (613.4) = Starting Rank Value (642.4) + Head To Head Adjustments (-28.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.263[<sup>1</sup>](#table2)
- Bounty Collected: 0.203[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.118<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 642.4
- 400 + ( ( 0.118 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 642.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      797 | 2022-12-17 | REIGN        | L   | 0.822      | -            | -                | -                | -         |   -11.91 | ChwE, DJF, Pat_, Pr0mise, Reason   |
|           14 |      830 | 2022-12-16 | paiN         | L   | 0.815      | -            | -                | -                | -         |    -1.76 | ChwE, DJF, Pat_, Pr0mise, Reason   |
|           13 |     1097 | 2022-12-06 | 7AM NA       | W   | 0.749      | 0.435        | 0.000 (0.000)    | 0.107 (0.035)    | 0 (0.000) |     9.27 | ChwE, DJF, Pat_, Pr0mise, Reason   |
|           12 |     1203 | 2022-12-03 | EG Black     | L   | 0.729      | -            | -                | -                | -         |    -4.22 | ChwE, DJF, Pat_, Pr0mise, Reason   |
|           11 |     1346 | 2022-11-28 | MIBR         | L   | 0.695      | -            | -                | -                | -         |    -2.82 | ChwE, DJF, Pat_, Pr0mise, Reason   |
|           10 |     1488 | 2022-11-23 | timbermen    | L   | 0.662      | -            | -                | -                | -         |    -5.61 | ChwE, DJF, Pat_, Pr0mise, Reason   |
|            9 |     1607 | 2022-11-16 | Strife       | L   | 0.615      | -            | -                | -                | -         |    -5.63 | ChwE, DJF, Pat_, Pr0mise, Reason   |
|            8 |     1671 | 2022-11-08 | TeamOne      | L   | 0.562      | -            | -                | -                | -         |    -3.44 | ChwE, DJF, Pat_, Pr0mise, Reason   |
|            7 |     1878 | 2022-10-25 | Detonate     | L   | 0.469      | -            | -                | -                | -         |    -5.12 | ChwE, DJF, Pat_, Pr0mise, Reason   |
|            6 |     2164 | 2022-10-14 | Villainous   | W   | 0.395      | 0.143        | 0.003 (0.000)    | 0.097 (0.005)    | 0 (0.000) |     6.42 | ChwE, DJF, Pat_, Pr0mise, Reason   |
|            5 |     2239 | 2022-10-12 | Disconnected | L   | 0.382      | -            | -                | -                | -         |    -4.50 | ChwE, DJF, Pat_, Pr0mise, Reason   |
|            4 |     2416 | 2022-10-04 | Villainous   | L   | 0.329      | -            | -                | -                | -         |    -5.16 | ChwE, DJF, Pat_, Pr0mise, Reason   |
|            3 |     2507 | 2022-09-29 | Eros         | W   | 0.296      | 0.371        | 0.006 (0.001)    | 0.243 (0.027)    | 0 (0.000) |     5.41 | ChwE, Pat_, Pr0mise, Reason, turnz |
|            2 |     2571 | 2022-09-27 | Noxious      | L   | 0.282      | -            | -                | -                | -         |    -3.77 | ChwE, Pat_, Pr0mise, Reason, turnz |
|            1 |     2727 | 2022-09-22 | Villainous   | W   | 0.249      | 0.371        | 0.003 (0.000)    | 0.097 (0.009)    | 0 (0.000) |     3.93 | ChwE, Pat_, Pr0mise, Reason, turnz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($751.52)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
