### Roster Details<br />
Team Name: Metizport<br />
Roster: adamb, hns, Jackinho, nilo, RuStY<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [147](../standings_global.md)<br />
Regional Rank: [99]( ../standings_europe.md)<br />
Final Rank Value:  700.7<br />
<br />
Final Rank Value (700.7) = Starting Rank Value (693.2) + Head To Head Adjustments (7.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.323[<sup>1</sup>](#table2)
- Bounty Collected: 0.267[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 693.2
- 400 + ( ( 0.152 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 693.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     2991 | 2023-12-01 | GODSENT       | L   | 0.246      | -            | -                | -                | -         |    -2.84 | adamb, hns, Jackinho, nilo, RuStY |
|           12 |     3075 | 2023-11-25 | Gucci Academy | L   | 0.206      | -            | -                | -                | -         |    -2.70 | adamb, hns, Jackinho, nilo, RuStY |
|           11 |     3177 | 2023-11-19 | Sprout        | W   | 0.165      | 0.358        | 0.010 (0.001)    | 0.221 (0.013)    | 0 (0.000) |     2.80 | adamb, hns, Jackinho, nilo, RuStY |
|           10 |     3205 | 2023-11-18 | Sprout        | L   | 0.159      | -            | -                | -                | -         |    -2.33 | adamb, hns, Jackinho, nilo, RuStY |
|            9 |     3242 | 2023-11-17 | SAW           | W   | 0.151      | 0.435        | 0.173 (0.011)    | 0.824 (0.054)    | 0 (0.000) |     4.54 | adamb, hns, Jackinho, nilo, RuStY |
|            8 |     3317 | 2023-11-15 | ODDIK         | W   | 0.138      | 0.435        | 0.017 (0.001)    | 0.552 (0.033)    | 0 (0.000) |     3.35 | adamb, hns, Jackinho, nilo, RuStY |
|            7 |     3367 | 2023-11-12 | ex-Anonymo    | W   | 0.120      | 0.358        | 0.027 (0.001)    | 0.276 (0.012)    | 0 (0.000) |     2.24 | adamb, hns, Jackinho, nilo, RuStY |
|            6 |     3397 | 2023-11-11 | Lilmix        | L   | 0.114      | -            | -                | -                | -         |    -2.25 | adamb, hns, Jackinho, nilo, RuStY |
|            5 |     3423 | 2023-11-10 | MOUZ NXT      | W   | 0.106      | 0.435        | 0.054 (0.003)    | 0.970 (0.045)    | 0 (0.000) |     2.59 | adamb, hns, Jackinho, nilo, RuStY |
|            4 |     3461 | 2023-11-08 | Space         | W   | 0.093      | 0.435        | 0.008 (0.000)    | 0.190 (0.008)    | 0 (0.000) |     1.59 | adamb, hns, Jackinho, nilo, RuStY |
|            3 |     3499 | 2023-11-06 | ECLOT         | L   | 0.079      | -            | -                | -                | -         |    -1.20 | adamb, hns, Jackinho, nilo, RuStY |
|            2 |     3521 | 2023-11-05 | The Witchers  | W   | 0.071      | 0.435        | 0.038 (0.001)    | 0.172 (0.005)    | 0 (0.000) |     1.34 | adamb, hns, Jackinho, nilo, RuStY |
|            1 |     3676 | 2023-10-30 | JANO          | W   | 0.032      | 0.143        | 0.001 (0.000)    | 0.220 (0.001)    | 0 (0.000) |     0.43 | adamb, hns, Jackinho, nilo, RuStY |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,520.07)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-03 |      0.260 | $1,372.00      | $356.95         |
| 2023-11-26 |      0.212 | $1,600.00      | $339.41         |
| 2023-11-18 |      0.160 | $5,000.00      | $798.03         |
| 2023-11-11 |      0.115 | $223.00        | $25.68          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
