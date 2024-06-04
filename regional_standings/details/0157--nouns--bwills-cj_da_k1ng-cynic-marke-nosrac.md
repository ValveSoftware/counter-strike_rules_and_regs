### Roster Details<br />
Team Name: Nouns<br />
Roster: Bwills, cJ dA K1nG, cynic, MarKE, nosraC<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [157](../standings_global.md)<br />
Regional Rank: [38]( ../standings_americas.md)<br />
Final Rank Value:  623.7<br />
<br />
Final Rank Value (623.7) = Starting Rank Value (620.6) + Head To Head Adjustments (3.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.273[<sup>1</sup>](#table2)
- Bounty Collected: 0.179[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.114<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 620.6
- 400 + ( ( 0.114 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 620.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     3613 | 2023-12-17 | FPL Friends      | L   | 0.108      | -            | -                | -                | -         |    -1.72 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|            9 |     3617 | 2023-12-17 | Carpe Diem       | W   | 0.107      | 0.294        | 0.000 (0.000)    | 0.369 (0.012)    | 0 (0.000) |     1.72 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|            8 |     3650 | 2023-12-16 | DNA              | W   | 0.101      | 0.294        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.71 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|            7 |     3702 | 2023-12-13 | M80              | L   | 0.081      | -            | -                | -                | -         |    -0.07 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|            6 |     3712 | 2023-12-12 | NRG              | W   | 0.074      | 0.303        | 0.010 (0.000)    | 0.605 (0.014)    | 0 (0.000) |     1.77 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|            5 |     3722 | 2023-12-11 | Akimbo           | W   | 0.067      | 0.303        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.48 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|            4 |     3774 | 2023-12-08 | Party Astronauts | L   | 0.048      | -            | -                | -                | -         |    -0.68 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|            3 |     3795 | 2023-12-07 | Unjustified      | W   | 0.042      | 0.500        | 0.001 (0.000)    | 0.006 (0.000)    | 0 (0.000) |     0.65 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|            2 |     3821 | 2023-12-06 | BOSS             | L   | 0.035      | -            | -                | -                | -         |    -0.24 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|            1 |     3852 | 2023-12-05 | Evil Geniuses    | W   | 0.028      | 0.500        | 0.001 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     0.42 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($649.80)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-17 |      0.108 | $1,000.00      | $108.11         |
| 2023-12-13 |      0.081 | $1,000.00      | $81.26          |
| 2023-12-10 |      0.061 | $7,500.00      | $460.43         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
