### Roster Details<br />
Team Name: Nigma Galaxy<br />
Roster: ANa, Kat, tory, twenty3, vilga<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [19](../standings_global.md)<br />
Regional Rank: [16]( ../standings_europe.md)<br />
Final Rank Value:  1254.0<br />
<br />
Final Rank Value (1254.0) = Starting Rank Value (1252.7) + Head To Head Adjustments (1.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.572[<sup>1</sup>](#table2)
- Bounty Collected: 0.350[<sup>2</sup>](#table1)
- Opponent Network: 0.049[<sup>2</sup>](#table1)
- LAN Wins: 0.696[<sup>2</sup>](#table1)

The average of these factors is 0.417<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1252.7
- 400 + ( ( 0.417 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1252.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |        4 | 2023-02-12 | NAVI Javelins     | W   | 1.000      | 0.500        | 0.078 (0.039)    | 0.250 (0.125)    | 1 (1.000) |     7.68 | ANa, Kat, tory, twenty3, vilga |
|           12 |        9 | 2023-02-12 | FURIA fe          | W   | 1.000      | 0.500        | 0.063 (0.032)    | 0.157 (0.079)    | 1 (1.000) |     7.21 | ANa, Kat, tory, twenty3, vilga |
|           11 |       54 | 2023-02-10 | B4 fe             | W   | 1.000      | 0.500        | 0.041 (0.021)    | 0.154 (0.077)    | 1 (1.000) |     4.78 | ANa, Kat, tory, twenty3, vilga |
|           10 |       60 | 2023-02-10 | Saints            | W   | 1.000      | 0.500        | 0.004 (0.002)    | 0.034 (0.017)    | 1 (1.000) |     1.22 | ANa, Kat, tory, twenty3, vilga |
|            9 |     1392 | 2022-11-27 | FURIA fe          | W   | 0.686      | 0.524        | 0.063 (0.023)    | 0.157 (0.056)    | 1 (0.686) |     5.63 | ANa, Kat, tory, twenty3, vilga |
|            8 |     1399 | 2022-11-27 | 9 Pandas Fearless | W   | 0.685      | 0.524        | 0.027 (0.010)    | 0.225 (0.081)    | 1 (0.685) |     2.87 | ANa, Kat, tory, twenty3, vilga |
|            7 |     1461 | 2022-11-25 | CLG Red           | W   | 0.672      | 0.524        | 0.015 (0.005)    | 0.046 (0.016)    | 1 (0.672) |     1.30 | ANa, Kat, tory, twenty3, vilga |
|            6 |     1468 | 2022-11-25 | HSG fe            | W   | 0.670      | 0.524        | 0.025 (0.009)    | 0.097 (0.034)    | 1 (0.670) |     2.34 | ANa, Kat, tory, twenty3, vilga |
|            5 |     1958 | 2022-10-22 | BIG EQUIPA        | W   | 0.447      | 0.143        | 0.002 (0.000)    | 0.034 (0.002)    | 0 (0.000) |     0.48 | ANa, Kat, tory, twenty3, vilga |
|            4 |     2256 | 2022-10-12 | Wolsung           | L   | 0.379      | -            | -                | -                | -         |   -11.70 | ANa, Kat, tory, twenty3, vilga |
|            3 |     2283 | 2022-10-11 | HONORIS           | L   | 0.372      | -            | -                | -                | -         |   -10.38 | ANa, Kat, tory, twenty3, vilga |
|            2 |     3051 | 2022-09-12 | Infinite          | L   | 0.179      | -            | -                | -                | -         |    -5.54 | ANa, Kat, tory, twenty3, vilga |
|            1 |     3088 | 2022-09-11 | Young Ninjas      | L   | 0.172      | -            | -                | -                | -         |    -4.61 | ANa, Kat, tory, twenty3, vilga |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($84,287.72)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.18) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-12 |      1.000 | $50,000.00     | $50,000.00      |
| 2022-11-27 |      0.686 | $50,000.00     | $34,287.72      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
