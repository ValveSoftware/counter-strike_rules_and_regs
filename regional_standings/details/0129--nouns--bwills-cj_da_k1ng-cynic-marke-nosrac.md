### Roster Details<br />
Team Name: Nouns<br />
Roster: Bwills, cJ dA K1nG, cynic, MarKE, nosraC<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [129](../standings_global.md)<br />
Regional Rank: [30]( ../standings_americas.md)<br />
Final Rank Value:  745.6<br />
<br />
Final Rank Value (745.6) = Starting Rank Value (738.7) + Head To Head Adjustments (6.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.368[<sup>1</sup>](#table2)
- Bounty Collected: 0.292[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.021[<sup>2</sup>](#table1)

The average of these factors is 0.175<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 738.7
- 400 + ( ( 0.175 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 738.7


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
|           19 |     2666 | 2023-12-17 | FPL Friends      | L   | 0.356      | -            | -                | -                | -         |    -6.66 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|           18 |     2670 | 2023-12-17 | Carpe Diem       | W   | 0.355      | 0.294        | 0.011 (0.001)    | 0.315 (0.033)    | 0 (0.000) |     5.85 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|           17 |     2703 | 2023-12-16 | DNA              | W   | 0.349      | 0.294        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.39 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|           16 |     2755 | 2023-12-13 | M80              | L   | 0.329      | -            | -                | -                | -         |    -2.08 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|           15 |     2765 | 2023-12-12 | NRG              | W   | 0.322      | 0.303        | 0.007 (0.001)    | 0.633 (0.062)    | 0 (0.000) |     5.82 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|           14 |     2775 | 2023-12-11 | Akimbo           | W   | 0.315      | 0.303        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.28 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|           13 |     2827 | 2023-12-08 | Party Astronauts | L   | 0.295      | -            | -                | -                | -         |    -3.75 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|           12 |     2848 | 2023-12-07 | Carpe Diem       | W   | 0.289      | 0.500        | 0.011 (0.002)    | 0.315 (0.046)    | 0 (0.000) |     4.77 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|           11 |     2874 | 2023-12-06 | BOSS             | L   | 0.282      | -            | -                | -                | -         |    -2.78 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|           10 |     2905 | 2023-12-05 | Evil Geniuses    | W   | 0.275      | 0.500        | 0.007 (0.001)    | 0.013 (0.002)    | 0 (0.000) |     3.50 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|            9 |     3076 | 2023-11-25 | Eternal Fire     | L   | 0.206      | -            | -                | -                | -         |    -0.05 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|            8 |     3095 | 2023-11-24 | Monte            | L   | 0.199      | -            | -                | -                | -         |    -0.45 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|            7 |     3101 | 2023-11-24 | Eternal Fire     | W   | 0.198      | 0.500        | 0.338 (0.033)    | 0.587 (0.058)    | 1 (0.198) |     6.18 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|            6 |     3221 | 2023-11-17 | ARCRED           | L   | 0.154      | -            | -                | -                | -         |    -2.68 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|            5 |     3276 | 2023-11-16 | paiN             | L   | 0.145      | -            | -                | -                | -         |    -0.01 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|            4 |     3421 | 2023-11-10 | Elevate          | L   | 0.108      | -            | -                | -                | -         |    -1.12 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|            3 |     3449 | 2023-11-08 | Rocket           | L   | 0.095      | -            | -                | -                | -         |    -1.78 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|            2 |     3652 | 2023-10-31 | FURIA            | L   | 0.037      | -            | -                | -                | -         |    -0.02 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|            1 |     3682 | 2023-10-30 | HEROIC           | L   | 0.031      | -            | -                | -                | -         |    -0.47 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,639.96)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-17 |      0.356 | $1,000.00      | $355.51         |
| 2023-12-13 |      0.329 | $1,000.00      | $328.66         |
| 2023-12-10 |      0.309 | $7,500.00      | $2,315.92       |
| 2023-11-26 |      0.213 | $3,000.00      | $639.88         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
