### Roster Details<br />
Team Name: Dusty Roots<br />
Roster: alexer, maxxkor, OwensinhoM, tom1jed, zock<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [142](../standings_global.md)<br />
Regional Rank: [37]( ../standings_americas.md)<br />
Final Rank Value:  728.7<br />
<br />
Final Rank Value (728.7) = Starting Rank Value (724.3) + Head To Head Adjustments (4.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.314[<sup>1</sup>](#table2)
- Bounty Collected: 0.216[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.107[<sup>2</sup>](#table1)

The average of these factors is 0.163<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 724.3
- 400 + ( ( 0.163 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 724.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      127 | 2024-06-08 | paiN          | L   | 1.000      | -            | -                | -                | -         |    -0.63 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            9 |      220 | 2024-06-06 | Vikings KR    | W   | 1.000      | 0.384        | 0.004 (0.001)    | 0.225 (0.086)    | 0 (0.000) |    14.54 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            8 |      281 | 2024-06-05 | LA RUGONETA   | W   | 1.000      | 0.284        | 0.003 (0.001)    | 0.000 (0.000)    | 1 (1.000) |     8.71 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            7 |      383 | 2024-06-02 | 9z Academy    | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.039 (0.015)    | 0 (0.000) |     4.91 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            6 |      455 | 2024-05-31 | FURIA Academy | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.102 (0.039)    | 0 (0.000) |     9.31 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            5 |      499 | 2024-05-29 | Case          | L   | 1.000      | -            | -                | -                | -         |    -8.80 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            4 |      558 | 2024-05-27 | Galorys       | L   | 1.000      | -            | -                | -                | -         |    -9.80 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            3 |     3035 | 2024-02-16 | FURIA Academy | L   | 0.433      | -            | -                | -                | -         |    -9.94 | alexer, guishu, KvNs, maxxkor, OwensinhoM  |
|            2 |     3151 | 2024-02-12 | Case          | L   | 0.406      | -            | -                | -                | -         |    -3.87 | alexer, guishu, KvNs, maxxkor, OwensinhoM  |
|            1 |     3820 | 2024-01-15 | paiN          | L   | 0.222      | -            | -                | -                | -         |    -0.05 | alexer, guishu, KvNs, maxxkor, OwensinhoM  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,000.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
