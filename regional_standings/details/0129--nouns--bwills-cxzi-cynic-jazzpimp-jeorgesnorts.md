### Roster Details<br />
Team Name: Nouns<br />
Roster: Bwills, cxzi, cynic, JazzPimp, jeorgesnorts<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [129](../standings_global.md)<br />
Regional Rank: [35]( ../standings_americas.md)<br />
Final Rank Value:  742.4<br />
<br />
Final Rank Value (742.4) = Starting Rank Value (737.8) + Head To Head Adjustments (4.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.338[<sup>1</sup>](#table2)
- Bounty Collected: 0.223[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.088[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 737.8
- 400 + ( ( 0.165 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 737.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |     2324 | 2022-10-08 | Imperial       | L   | 0.353      | -            | -                | -                | -         |    -3.54 | Bwills, cxzi, cynic, JazzPimp, jeorgesnorts |
|           20 |     2342 | 2022-10-07 | O PLANO        | W   | 0.346      | 0.143        | 0.000 (0.000)    | 0.054 (0.003)    | 1 (0.346) |     2.85 | Bwills, cxzi, cynic, JazzPimp, jeorgesnorts |
|           19 |     2371 | 2022-10-06 | paiN           | L   | 0.338      | -            | -                | -                | -         |    -1.39 | Bwills, cxzi, cynic, JazzPimp, jeorgesnorts |
|           18 |     2385 | 2022-10-05 | Cartel terraza | W   | 0.333      | 0.143        | 0.002 (0.000)    | 0.113 (0.005)    | 1 (0.333) |     4.08 | Bwills, cxzi, cynic, JazzPimp, jeorgesnorts |
|           17 |     2407 | 2022-10-05 | Evil Geniuses  | L   | 0.331      | -            | -                | -                | -         |    -1.51 | Bwills, cxzi, cynic, JazzPimp, jeorgesnorts |
|           16 |     2798 | 2022-09-20 | Strife         | W   | 0.235      | 0.435        | 0.001 (0.000)    | 0.052 (0.005)    | 0 (0.000) |     2.64 | Bwills, cxzi, cynic, JazzPimp, jeorgesnorts |
|           15 |     2822 | 2022-09-19 | 7AM NA         | W   | 0.229      | 0.435        | 0.000 (0.000)    | 0.107 (0.011)    | 0 (0.000) |     2.00 | Bwills, cxzi, cynic, JazzPimp, jeorgesnorts |
|           14 |     2827 | 2022-09-19 | Vendetta       | L   | 0.228      | -            | -                | -                | -         |    -3.95 | Bwills, cxzi, cynic, JazzPimp, jeorgesnorts |
|           13 |     2848 | 2022-09-18 | TeamOne        | L   | 0.221      | -            | -                | -                | -         |    -2.08 | Bwills, cxzi, cynic, JazzPimp, jeorgesnorts |
|           12 |     2869 | 2022-09-17 | Disconnected   | W   | 0.216      | 0.143        | 0.008 (0.000)    | 0.225 (0.007)    | 0 (0.000) |     3.34 | Bwills, cxzi, cynic, JazzPimp, jeorgesnorts |
|           11 |     2877 | 2022-09-17 | TeamOne        | L   | 0.214      | -            | -                | -                | -         |    -2.00 | Bwills, cxzi, cynic, JazzPimp, jeorgesnorts |
|           10 |     2935 | 2022-09-15 | Task Force 141 | W   | 0.201      | 0.435        | -                | 0.030 (0.003)    | 0 (0.000) |     1.48 | Bwills, cxzi, cynic, JazzPimp, jeorgesnorts |
|            9 |     3019 | 2022-09-13 | ATK            | L   | 0.188      | -            | -                | -                | -         |    -1.42 | Bwills, cxzi, cynic, JazzPimp, jeorgesnorts |
|            8 |     3109 | 2022-09-10 | Apeks          | L   | 0.168      | -            | -                | -                | -         |    -1.36 | Bwills, cxzi, cynic, JazzPimp, jeorgesnorts |
|            7 |     3127 | 2022-09-10 | TeamOne        | L   | 0.167      | -            | -                | -                | -         |    -1.58 | Bwills, cxzi, cynic, JazzPimp, jeorgesnorts |
|            6 |     3137 | 2022-09-10 | Apeks          | W   | 0.166      | 0.500        | 0.024 (0.002)    | 0.671 (0.056)    | 1 (0.166) |     3.91 | jkaem, jL, nawwk, shox, STYKO               |
|            5 |     3259 | 2022-09-05 | Disconnected   | W   | 0.135      | 0.435        | 0.008 (0.000)    | 0.225 (0.013)    | 0 (0.000) |     2.10 | Bwills, cxzi, cynic, JazzPimp, jeorgesnorts |
|            4 |     3584 | 2022-08-24 | timbermen      | W   | 0.055      | 0.435        | 0.016 (0.000)    | 0.306 (0.007)    | 0 (0.000) |     1.02 | dare, droid, intra, shane, snav             |
|            3 |     3757 | 2022-08-17 | Complexity     | L   | 0.007      | -            | -                | -                | -         |    -0.01 | Bwills, cxzi, cynic, JazzPimp, jeorgesnorts |
|            2 |     3773 | 2022-08-16 | Brazen         | W   | 0.002      | 0.143        | 0.001 (0.000)    | -                | 0 (0.000) |     0.02 | Danejoris, grape, Pol0, RZU, xCeeD          |
|            1 |     3790 | 2022-08-16 | Vendetta       | W   | 0.001      | 0.143        | 0.007 (0.000)    | 0.107 (0.000)    | -         |     0.01 | Bwills, cxzi, cynic, JazzPimp, jeorgesnorts |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,236.41)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
