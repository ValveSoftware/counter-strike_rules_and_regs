### Roster Details<br />
Team Name: Case<br />
Roster: honda, leo_drk, RCF, steel, yepz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [173](../standings_global.md)<br />
Regional Rank: [48]( ../standings_americas.md)<br />
Final Rank Value:  664.2<br />
<br />
Final Rank Value (664.2) = Starting Rank Value (686.5) + Head To Head Adjustments (-22.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.326[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 686.5
- 400 + ( ( 0.140 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 686.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |       18 | 2023-02-11 | Corinthians | L   | 1.000      | -            | -                | -                | -         |    -9.08 | honda, leo_drk, RCF, steel, yepz |
|           15 |      174 | 2023-02-04 | iNation     | L   | 1.000      | -            | -                | -                | -         |    -3.52 | honda, leo_drk, RCF, steel, yepz |
|           14 |      613 | 2023-01-18 | Partizan    | L   | 1.000      | -            | -                | -                | -         |    -8.50 | honda, leo_drk, RCF, steel, yepz |
|           13 |      642 | 2023-01-17 | Babos       | W   | 1.000      | 0.143        | 0.008 (0.001)    | 0.057 (0.008)    | 0 (0.000) |    16.09 | honda, leo_drk, RCF, steel, yepz |
|           12 |      661 | 2023-01-16 | Endpoint    | L   | 1.000      | -            | -                | -                | -         |    -5.74 | honda, leo_drk, RCF, steel, yepz |
|           11 |      690 | 2023-01-15 | IKLA        | L   | 1.000      | -            | -                | -                | -         |    -6.15 | honda, leo_drk, RCF, steel, yepz |
|           10 |      724 | 2023-01-10 | EC Brugge   | L   | 0.978      | -            | -                | -                | -         |   -13.25 | honda, leo_drk, RCF, steel, yepz |
|            9 |      977 | 2022-12-10 | SAW         | L   | 0.774      | -            | -                | -                | -         |    -2.22 | honda, leo_drk, RCF, steel, yepz |
|            8 |     1393 | 2022-11-27 | FTW         | L   | 0.686      | -            | -                | -                | -         |    -6.18 | honda, leo_drk, RCF, steel, yepz |
|            7 |     1409 | 2022-11-26 | GTZ         | W   | 0.681      | 0.350        | 0.003 (0.001)    | 0.000 (0.000)    | 0 (0.000) |     7.75 | honda, leo_drk, RCF, steel, yepz |
|            6 |     1430 | 2022-11-26 | FTW         | L   | 0.679      | -            | -                | -                | -         |    -6.12 | honda, leo_drk, RCF, steel, yepz |
|            5 |     1471 | 2022-11-24 | FTW         | W   | 0.667      | 0.143        | 0.026 (0.002)    | 0.300 (0.029)    | 0 (0.000) |    15.38 | honda, leo_drk, RCF, steel, yepz |
|            4 |     3556 | 2022-08-26 | Sharks      | L   | 0.067      | -            | -                | -                | -         |    -1.61 | honda, leo_drk, RCF, steel, yepz |
|            3 |     3639 | 2022-08-22 | 9z          | L   | 0.041      | -            | -                | -                | -         |    -0.31 | honda, leo_drk, RCF, steel, yepz |
|            2 |     3659 | 2022-08-21 | ODDIK       | W   | 0.036      | 0.143        | 0.016 (0.000)    | 0.236 (0.001)    | 0 (0.000) |     0.68 | honda, leo_drk, RCF, steel, yepz |
|            1 |     3664 | 2022-08-21 | SWS         | W   | 0.035      | 0.143        | 0.001 (0.000)    | 0.125 (0.001)    | 0 (0.000) |     0.51 | honda, leo_drk, RCF, steel, yepz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,069.94)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-04 |      1.000 | $541.00        | $541.00         |
| 2022-12-10 |      0.774 | $3,000.00      | $2,321.33       |
| 2022-11-27 |      0.687 | $1,757.00      | $1,207.61       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
