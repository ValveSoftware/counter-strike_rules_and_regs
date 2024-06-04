### Roster Details<br />
Team Name: TSM<br />
Roster: CYPHER, interz, JACKZ, MoDo, valde<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [156](../standings_global.md)<br />
Regional Rank: [103]( ../standings_europe.md)<br />
Final Rank Value:  628.3<br />
<br />
Final Rank Value (628.3) = Starting Rank Value (626.7) + Head To Head Adjustments (1.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.253[<sup>1</sup>](#table2)
- Bounty Collected: 0.213[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.117<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 626.7
- 400 + ( ( 0.117 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 626.7


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
|           13 |     3624 | 2023-12-17 | ORKS          | W   | 0.106      | 0.143        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     0.98 | CYPHER, interz, JACKZ, MoDo, valde |
|           12 |     3656 | 2023-12-16 | RUSH B        | L   | 0.100      | -            | -                | -                | -         |    -1.18 | CYPHER, interz, JACKZ, MoDo, valde |
|           11 |     3687 | 2023-12-15 | Pompa         | W   | 0.093      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.64 | CYPHER, interz, JACKZ, MoDo, valde |
|           10 |     3724 | 2023-12-11 | RUSH B        | L   | 0.066      | -            | -                | -                | -         |    -0.78 | CYPHER, interz, JACKZ, MoDo, valde |
|            9 |     3743 | 2023-12-10 | ex-Preasy     | L   | 0.057      | -            | -                | -                | -         |    -0.31 | CYPHER, interz, JACKZ, MoDo, valde |
|            8 |     3772 | 2023-12-09 | Sprout        | W   | 0.050      | 0.371        | 0.000 (0.000)    | 0.041 (0.001)    | 0 (0.000) |     0.75 | CYPHER, interz, JACKZ, MoDo, valde |
|            7 |     3778 | 2023-12-08 | BIG Academy   | L   | 0.046      | -            | -                | -                | -         |    -0.73 | CYPHER, interz, JACKZ, MoDo, valde |
|            6 |     3798 | 2023-12-07 | lajtbitexe    | W   | 0.040      | 0.372        | 0.001 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     0.61 | CYPHER, interz, JACKZ, MoDo, valde |
|            5 |     3818 | 2023-12-07 | IKLA          | W   | 0.037      | 0.371        | 0.000 (0.000)    | 0.078 (0.001)    | 0 (0.000) |     0.45 | CYPHER, interz, JACKZ, MoDo, valde |
|            4 |     3829 | 2023-12-06 | Lausanne SE   | W   | 0.033      | 0.372        | 0.000 (0.000)    | 0.003 (0.000)    | 0 (0.000) |     0.45 | CYPHER, interz, JACKZ, MoDo, valde |
|            3 |     3855 | 2023-12-05 | Zero Tenacity | W   | 0.027      | 0.372        | 0.147 (0.001)    | 1.000 (0.010)    | 0 (0.000) |     0.77 | CYPHER, interz, JACKZ, MoDo, valde |
|            2 |     3872 | 2023-12-05 | GODSENT       | L   | 0.024      | -            | -                | -                | -         |    -0.35 | CYPHER, interz, JACKZ, MoDo, valde |
|            1 |     3903 | 2023-12-03 | Zero Tenacity | W   | 0.010      | 0.371        | 0.147 (0.001)    | 1.000 (0.004)    | 0 (0.000) |     0.29 | CYPHER, interz, JACKZ, MoDo, valde |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($332.59)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-13 |      0.079 | $3,300.00      | $260.28         |
| 2023-12-12 |      0.072 | $1,000.00      | $72.31          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
