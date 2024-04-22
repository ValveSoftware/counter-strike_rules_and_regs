### Roster Details<br />
Team Name: FURIA Academy<br />
Roster: cerolzin, GYZER, kye, mello, zmb<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [195](../standings_global.md)<br />
Regional Rank: [46]( ../standings_americas.md)<br />
Final Rank Value:  562.7<br />
<br />
Final Rank Value (562.7) = Starting Rank Value (550.3) + Head To Head Adjustments (12.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.290[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.078<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 550.3
- 400 + ( ( 0.078 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 550.3


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
|           13 |      311 | 2024-04-11 | Case        | L   | 1.000      | -            | -                | -                | -         |    -6.06 | cerolzin, GYZER, kye, mello, zmb      |
|           12 |      466 | 2024-04-07 | Imperial    | L   | 1.000      | -            | -                | -                | -         |    -0.11 | Bruninho, cerolzin, GYZER, kye, mello |
|           11 |      951 | 2024-03-14 | Case        | L   | 0.940      | -            | -                | -                | -         |    -5.66 | Bruninho, cerolzin, GYZER, kye, mello |
|           10 |     1011 | 2024-03-12 | Solid       | W   | 0.927      | 0.303        | 0.126 (0.035)    | 0.584 (0.164)    | 0 (0.000) |    24.31 | Bruninho, cerolzin, GYZER, kye, mello |
|            9 |     1024 | 2024-03-11 | BESTIA      | L   | 0.921      | -            | -                | -                | -         |    -4.31 | Bruninho, cerolzin, GYZER, kye, mello |
|            8 |     1049 | 2024-03-10 | Case        | L   | 0.914      | -            | -                | -                | -         |    -4.37 | Bruninho, cerolzin, GYZER, kye, mello |
|            7 |     1051 | 2024-03-10 | Flamengo    | W   | 0.914      | 0.435        | 0.000 (0.000)    | 0.114 (0.045)    | 0 (0.000) |    12.99 | Bruninho, cerolzin, GYZER, kye, mello |
|            6 |     1095 | 2024-03-08 | BESTIA      | L   | 0.901      | -            | -                | -                | -         |    -3.90 | Bruninho, cerolzin, GYZER, kye, mello |
|            5 |     1537 | 2024-02-18 | BESTIA      | L   | 0.773      | -            | -                | -                | -         |    -3.51 | Bruninho, cerolzin, GYZER, kye, mello |
|            4 |     1588 | 2024-02-16 | Dusty Roots | W   | 0.760      | 0.435        | 0.000 (0.000)    | 0.024 (0.008)    | 0 (0.000) |     7.31 | Bruninho, cerolzin, GYZER, kye, mello |
|            3 |     1699 | 2024-02-12 | BESTIA      | L   | 0.735      | -            | -                | -                | -         |    -3.15 | Bruninho, cerolzin, GYZER, kye, mello |
|            2 |     3298 | 2023-11-15 | W7M         | L   | 0.140      | -            | -                | -                | -         |    -0.74 | Bruninho, GYZER, kye, lub, mello      |
|            1 |     3340 | 2023-11-13 | Solid       | L   | 0.127      | -            | -                | -                | -         |    -0.41 | Bruninho, GYZER, kye, lub, mello      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
