### Roster Details<br />
Team Name: Nouns<br />
Roster: Bwills, cJ dA K1nG, cynic, MarKE, nosraC<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [140](../standings_global.md)<br />
Regional Rank: [34]( ../standings_americas.md)<br />
Final Rank Value:  720.7<br />
<br />
Final Rank Value (720.7) = Starting Rank Value (711.0) + Head To Head Adjustments (9.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.355[<sup>1</sup>](#table2)
- Bounty Collected: 0.275[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.012[<sup>2</sup>](#table1)

The average of these factors is 0.163<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 711.0
- 400 + ( ( 0.163 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 711.0


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
|           17 |     2962 | 2023-12-17 | FPL Friends      | L   | 0.262      | -            | -                | -                | -         |    -4.78 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|           16 |     2966 | 2023-12-17 | Carpe Diem       | W   | 0.262      | 0.294        | 0.009 (0.001)    | 0.253 (0.019)    | 0 (0.000) |     4.21 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|           15 |     2999 | 2023-12-16 | DNA              | W   | 0.255      | 0.294        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.15 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|           14 |     3051 | 2023-12-13 | M80              | L   | 0.235      | -            | -                | -                | -         |    -0.33 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|           13 |     3061 | 2023-12-12 | NRG              | W   | 0.228      | 0.303        | 0.006 (0.000)    | 0.539 (0.037)    | 0 (0.000) |     4.28 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|           12 |     3071 | 2023-12-11 | Akimbo           | W   | 0.222      | 0.303        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.02 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|           11 |     3123 | 2023-12-08 | Party Astronauts | L   | 0.202      | -            | -                | -                | -         |    -1.86 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|           10 |     3144 | 2023-12-07 | Carpe Diem       | W   | 0.196      | 0.500        | 0.009 (0.001)    | 0.253 (0.025)    | 0 (0.000) |     3.16 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|            9 |     3170 | 2023-12-06 | BOSS             | L   | 0.189      | -            | -                | -                | -         |    -1.62 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|            8 |     3201 | 2023-12-05 | Evil Geniuses    | W   | 0.182      | 0.500        | 0.006 (0.001)    | 0.008 (0.001)    | 0 (0.000) |     2.41 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|            7 |     3372 | 2023-11-25 | Eternal Fire     | L   | 0.112      | -            | -                | -                | -         |    -0.01 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|            6 |     3391 | 2023-11-24 | Monte            | L   | 0.106      | -            | -                | -                | -         |    -0.08 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|            5 |     3397 | 2023-11-24 | Eternal Fire     | W   | 0.104      | 0.500        | 0.397 (0.021)    | 0.579 (0.030)    | 1 (0.104) |     3.27 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|            4 |     3517 | 2023-11-17 | ARCRED           | L   | 0.060      | -            | -                | -                | -         |    -0.94 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|            3 |     3572 | 2023-11-16 | paiN             | L   | 0.052      | -            | -                | -                | -         |    -0.00 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|            2 |     3717 | 2023-11-10 | Elevate          | L   | 0.015      | -            | -                | -                | -         |    -0.14 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |
|            1 |     3745 | 2023-11-08 | Rocket           | L   | 0.002      | -            | -                | -                | -         |    -0.04 | Bwills, cJ dA K1nG, cynic, MarKE, nosraC |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,473.64)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-17 |      0.262 | $1,000.00      | $262.21         |
| 2023-12-13 |      0.235 | $1,000.00      | $235.35         |
| 2023-12-10 |      0.215 | $7,500.00      | $1,616.12       |
| 2023-11-26 |      0.120 | $3,000.00      | $359.96         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
