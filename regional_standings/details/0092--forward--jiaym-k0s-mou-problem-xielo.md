### Roster Details<br />
Team Name: Forward<br />
Roster: JIaYm, k0s, mou, ProbLeM, xiELO<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [92](../standings_global.md)<br />
Regional Rank: [66]( ../standings_europe.md)<br />
Final Rank Value:  829.8<br />
<br />
Final Rank Value (829.8) = Starting Rank Value (784.0) + Head To Head Adjustments (45.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.291[<sup>1</sup>](#table2)
- Bounty Collected: 0.253[<sup>2</sup>](#table1)
- Opponent Network: 0.037[<sup>2</sup>](#table1)
- LAN Wins: 0.170[<sup>2</sup>](#table1)

The average of these factors is 0.188<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 784.0
- 400 + ( ( 0.188 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 784.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |      149 | 2023-02-05 | MOUZ NXT    | W   | 1.000      | 0.143        | 0.015 (0.002)    | 0.537 (0.077)    | 0 (0.000) |    17.46 | JIaYm, k0s, mou, ProbLeM, xiELO   |
|           16 |      173 | 2023-02-04 | undefined   | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.259 (0.037)    | 0 (0.000) |    13.66 | JIaYm, k0s, mou, ProbLeM, xiELO   |
|           15 |      245 | 2023-02-01 | VOYVODA     | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.319 (0.046)    | 0 (0.000) |     8.99 | JIaYm, k0s, mou, ProbLeM, xiELO   |
|           14 |      825 | 2022-12-17 | 9 Pandas    | L   | 0.818      | -            | -                | -                | -         |   -13.70 | JIaYm, k0s, mou, ProbLeM, xiELO   |
|           13 |      849 | 2022-12-16 | BakS        | W   | 0.811      | 0.359        | 0.002 (0.001)    | 0.072 (0.021)    | 0 (0.000) |     8.00 | JIaYm, k0s, mou, ProbLeM, xiELO   |
|           12 |      875 | 2022-12-15 | forZe       | L   | 0.805      | -            | -                | -                | -         |    -6.58 | JIaYm, k0s, mou, ProbLeM, xiELO   |
|           11 |     1178 | 2022-12-04 | Boston crab | L   | 0.732      | -            | -                | -                | -         |    -9.24 | JIaYm, k0s, mou, ProbLeM, xiELO   |
|           10 |     1229 | 2022-12-03 | K23         | W   | 0.725      | 0.333        | 0.020 (0.005)    | 0.329 (0.079)    | 1 (0.725) |    15.53 | JIaYm, k0s, mou, ProbLeM, xiELO   |
|            9 |     1253 | 2022-12-02 | INVSN       | W   | 0.719      | 0.333        | 0.014 (0.003)    | 0.428 (0.103)    | 1 (0.719) |    15.19 | JIaYm, k0s, mou, ProbLeM, xiELO   |
|            8 |     2995 | 2022-09-14 | INVSN       | L   | 0.193      | -            | -                | -                | -         |    -1.91 | Dosia, JIaYm, mou, ProbLeM, xiELO |
|            7 |     3010 | 2022-09-14 | K23         | W   | 0.191      | 0.333        | 0.000 (0.000)    | 0.078 (0.005)    | 1 (0.191) |     1.46 | Dosia, JIaYm, mou, ProbLeM, xiELO |
|            6 |     3027 | 2022-09-13 | AVANGAR     | L   | 0.186      | -            | -                | -                | -         |    -3.10 | Dosia, JIaYm, mou, ProbLeM, xiELO |
|            5 |     3458 | 2022-08-28 | Illuminar   | L   | 0.081      | -            | -                | -                | -         |    -0.52 | Dosia, JIaYm, mou, ProbLeM, xiELO |
|            4 |     3466 | 2022-08-28 | GamerLegion | L   | 0.080      | -            | -                | -                | -         |    -0.27 | Dosia, JIaYm, mou, ProbLeM, xiELO |
|            3 |     3496 | 2022-08-27 | 1WIN        | L   | 0.073      | -            | -                | -                | -         |    -0.93 | Dosia, JIaYm, mou, ProbLeM, xiELO |
|            2 |     3505 | 2022-08-27 | ex-Finest   | W   | 0.073      | 0.143        | 0.007 (0.000)    | 0.053 (0.001)    | 0 (0.000) |     0.96 | Dosia, JIaYm, mou, ProbLeM, xiELO |
|            1 |     3518 | 2022-08-27 | 777         | W   | 0.072      | 0.143        | 0.002 (0.000)    | 0.202 (0.002)    | 0 (0.000) |     0.88 | Dosia, JIaYm, mou, ProbLeM, xiELO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,723.12)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-18 |      0.826 | $1,643.00      | $1,356.45       |
| 2022-12-04 |      0.733 | $500.00        | $366.67         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
