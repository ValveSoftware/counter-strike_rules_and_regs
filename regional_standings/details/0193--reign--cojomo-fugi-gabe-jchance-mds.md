### Roster Details<br />
Team Name: REIGN<br />
Roster: CoJoMo, Fugi, Gabe, jchancE, mds<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [193](../standings_global.md)<br />
Regional Rank: [57]( ../standings_americas.md)<br />
Final Rank Value:  618.4<br />
<br />
Final Rank Value (618.4) = Starting Rank Value (657.6) + Head To Head Adjustments (-39.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.281[<sup>1</sup>](#table2)
- Bounty Collected: 0.213[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.126<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 657.6
- 400 + ( ( 0.126 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 657.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |       75 | 2023-02-08 | Take Flyte        | L   | 1.000      | -            | -                | -                | -         |   -12.29 | CoJoMo, Fugi, Gabe, jchancE, mds |
|           16 |      729 | 2023-01-07 | Noxious           | L   | 0.962      | -            | -                | -                | -         |   -15.88 | Fugi, Gabe, jchancE, mds, xaler  |
|           15 |      759 | 2022-12-18 | Limitless         | L   | 0.829      | -            | -                | -                | -         |    -9.61 | Fugi, Gabe, jchancE, mds, xaler  |
|           14 |      797 | 2022-12-17 | Snakes Den        | W   | 0.822      | 0.143        | 0.002 (0.000)    | 0.059 (0.007)    | 0 (0.000) |    11.91 | Fugi, Gabe, jchancE, mds, xaler  |
|           13 |      831 | 2022-12-16 | Villainous        | L   | 0.815      | -            | -                | -                | -         |   -15.69 | Fugi, Gabe, jchancE, mds, xaler  |
|           12 |      854 | 2022-12-15 | EX CINERE         | W   | 0.809      | 0.371        | 0.002 (0.001)    | 0.064 (0.019)    | 0 (0.000) |    12.44 | Fugi, Gabe, jchancE, mds, xaler  |
|           11 |      924 | 2022-12-12 | 1 JIN             | L   | 0.789      | -            | -                | -                | -         |   -11.38 | Fugi, Gabe, jchancE, mds, xaler  |
|           10 |      931 | 2022-12-11 | Orion             | W   | 0.783      | 0.371        | 0.001 (0.000)    | 0.090 (0.026)    | 0 (0.000) |    11.14 | Fugi, Gabe, jchancE, mds, xaler  |
|            9 |      965 | 2022-12-10 | Cartel terraza    | W   | 0.776      | 0.371        | 0.002 (0.001)    | 0.113 (0.033)    | 0 (0.000) |    12.24 | Fugi, Gabe, jchancE, mds, xaler  |
|            8 |     1027 | 2022-12-08 | Limitless         | L   | 0.762      | -            | -                | -                | -         |    -8.50 | Fugi, Gabe, jchancE, mds, xaler  |
|            7 |     2483 | 2022-09-30 | Cartel terraza    | L   | 0.302      | -            | -                | -                | -         |    -4.58 | Fugi, Gabe, jchancE, mds, xaler  |
|            6 |     2508 | 2022-09-29 | Brazen            | W   | 0.296      | 0.384        | 0.001 (0.000)    | 0.022 (0.002)    | 0 (0.000) |     4.39 | Fugi, Gabe, jchancE, mds, xaler  |
|            5 |     2584 | 2022-09-26 | Earlybirds        | L   | 0.275      | -            | -                | -                | -         |    -4.74 | Fugi, Gabe, jchancE, mds, xaler  |
|            4 |     2726 | 2022-09-22 | Red Wolves        | L   | 0.249      | -            | -                | -                | -         |    -3.86 | Fugi, Gabe, jchancE, mds, xaler  |
|            3 |     2821 | 2022-09-19 | All Gas No Brakes | W   | 0.229      | 0.384        | 0.000 (0.000)    | 0.008 (0.001)    | 0 (0.000) |     1.43 | Fugi, Gabe, jchancE, mds, xaler  |
|            2 |     2904 | 2022-09-16 | X13               | L   | 0.208      | -            | -                | -                | -         |    -3.27 | Fugi, Gabe, jchancE, mds, xaler  |
|            1 |     3021 | 2022-09-13 | Cartel terraza    | L   | 0.188      | -            | -                | -                | -         |    -2.94 | Fugi, Gabe, jchancE, mds, xaler  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,327.17)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-15 |      0.810 | $1,250.00      | $1,012.24       |
| 2022-10-02 |      0.315 | $1,000.00      | $314.93         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
