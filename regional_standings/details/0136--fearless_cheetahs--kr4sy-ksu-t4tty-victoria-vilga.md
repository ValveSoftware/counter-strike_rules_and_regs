### Roster Details<br />
Team Name: Fearless Cheetahs<br />
Roster: kr4sy, Ksu, t4tty, Victoria, vilga<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [136](../standings_global.md)<br />
Regional Rank: [91]( ../standings_europe.md)<br />
Final Rank Value:  735.3<br />
<br />
Final Rank Value (735.3) = Starting Rank Value (707.6) + Head To Head Adjustments (27.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.309[<sup>1</sup>](#table2)
- Bounty Collected: 0.293[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.154<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 707.6
- 400 + ( ( 0.154 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 707.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1466 | 2024-04-21 | ex-GUILD fe   | L   | 0.867      | -            | -                | -                | -         |   -15.48 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            9 |     1485 | 2024-04-20 | BIG EQUIPA    | L   | 0.860      | -            | -                | -                | -         |   -10.81 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            8 |     1530 | 2024-04-19 | 1WIN Gang     | W   | 0.854      | 0.331        | 0.003 (0.001)    | 0.031 (0.009)    | 0 (0.000) |    10.08 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            7 |     1749 | 2024-04-11 | Crescent fe   | W   | 0.800      | 0.331        | 0.007 (0.002)    | 0.122 (0.032)    | 0 (0.000) |     9.34 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            6 |     1921 | 2024-04-07 | NIP Impact    | L   | 0.771      | -            | -                | -                | -         |   -12.33 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            5 |     1938 | 2024-04-06 | Let Her Cook  | W   | 0.765      | 0.262        | 0.082 (0.016)    | 0.225 (0.045)    | 0 (0.000) |    18.73 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            4 |     2159 | 2024-03-27 | Spirit fe     | W   | 0.700      | 0.331        | 0.005 (0.001)    | 0.065 (0.015)    | 0 (0.000) |     9.16 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            3 |     2241 | 2024-03-21 | Let Her Cook  | W   | 0.660      | 0.331        | 0.082 (0.018)    | 0.225 (0.049)    | 0 (0.000) |    16.88 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            2 |     2599 | 2024-03-06 | NAVI Javelins | L   | 0.561      | -            | -                | -                | -         |    -4.96 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            1 |     2818 | 2024-02-25 | 1WIN Gang     | W   | 0.493      | 0.250        | 0.003 (0.000)    | 0.031 (0.004)    | 0 (0.000) |     7.08 | kr4sy, Ksu, t4tty, Victoria, vilga |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,756.95)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-21 |      0.867 | $1,600.00      | $1,386.90       |
| 2024-02-25 |      0.493 | $750.00        | $370.05         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
