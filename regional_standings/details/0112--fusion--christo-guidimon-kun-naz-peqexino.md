### Roster Details<br />
Team Name: FUSION<br />
Roster: christo, guidimon, KUN, naz, peqexino<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [112](../standings_global.md)<br />
Regional Rank: [27]( ../standings_americas.md)<br />
Final Rank Value:  766.4<br />
<br />
Final Rank Value (766.4) = Starting Rank Value (716.2) + Head To Head Adjustments (50.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.311[<sup>1</sup>](#table2)
- Bounty Collected: 0.261[<sup>2</sup>](#table1)
- Opponent Network: 0.046[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.155<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 716.2
- 400 + ( ( 0.155 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 716.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |        2 | 2023-02-12 | Fluxo         | L   | 1.000      | -            | -                | -                | -         |    -7.89 | christo, guidimon, KUN, naz, peqexino |
|           10 |       23 | 2023-02-11 | Meta          | W   | 1.000      | 0.143        | 0.010 (0.001)    | 0.302 (0.043)    | 0 (0.000) |    15.90 | christo, guidimon, KUN, naz, peqexino |
|            9 |      182 | 2023-02-03 | Meta          | L   | 1.000      | -            | -                | -                | -         |   -14.95 | christo, guidimon, KUN, naz, peqexino |
|            8 |      237 | 2023-02-01 | Sharks        | W   | 1.000      | 0.384        | 0.017 (0.007)    | 0.439 (0.169)    | 0 (0.000) |    18.56 | christo, guidimon, KUN, naz, peqexino |
|            7 |      374 | 2023-01-27 | Fluxo         | L   | 1.000      | -            | -                | -                | -         |    -8.25 | christo, guidimon, KUN, naz, peqexino |
|            6 |      398 | 2023-01-26 | Boca Juniors  | W   | 1.000      | 0.143        | 0.005 (0.001)    | 0.200 (0.029)    | 0 (0.000) |    12.89 | christo, guidimon, KUN, naz, peqexino |
|            5 |     1059 | 2022-12-07 | Fluxo         | L   | 0.754      | -            | -                | -                | -         |    -5.70 | christo, guidimon, KUN, naz, TIKO     |
|            4 |     1112 | 2022-12-06 | FURIA Academy | W   | 0.747      | 0.384        | 0.004 (0.001)    | 0.278 (0.080)    | 0 (0.000) |    11.80 | christo, guidimon, KUN, naz, TIKO     |
|            3 |     1133 | 2022-12-05 | Fuscão 1500   | W   | 0.742      | 0.384        | 0.013 (0.004)    | 0.221 (0.063)    | 0 (0.000) |    13.23 | christo, guidimon, KUN, naz, TIKO     |
|            2 |     1321 | 2022-11-29 | FURIA Academy | W   | 0.702      | 0.384        | 0.004 (0.001)    | 0.278 (0.075)    | 0 (0.000) |    11.48 | christo, guidimon, KUN, naz, TIKO     |
|            1 |     1376 | 2022-11-27 | Hype          | W   | 0.688      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.12 | christo, guidimon, KUN, naz, TIKO     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,889.38)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-04 |      1.000 | $1,000.00      | $1,000.00       |
| 2022-12-07 |      0.756 | $2,500.00      | $1,889.38       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
