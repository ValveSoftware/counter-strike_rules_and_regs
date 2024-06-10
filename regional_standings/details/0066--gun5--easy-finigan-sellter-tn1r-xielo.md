### Roster Details<br />
Team Name: GUN5<br />
Roster: easy, FinigaN, SELLTER, tN1R, xiELO<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [66](../standings_global.md)<br />
Regional Rank: [48]( ../standings_europe.md)<br />
Final Rank Value:  1022.1<br />
<br />
Final Rank Value (1022.1) = Starting Rank Value (926.7) + Head To Head Adjustments (95.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.476[<sup>1</sup>](#table2)
- Bounty Collected: 0.387[<sup>2</sup>](#table1)
- Opponent Network: 0.194[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.264<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 926.7
- 400 + ( ( 0.264 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 926.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |       14 | 2024-06-10 | EYEBALLERS  | W   | 1.000      | 0.435        | 0.006 (0.003)    | 0.722 (0.314)    | 0 (0.000) |    11.10 | easy, FinigaN, SELLTER, tN1R, xiELO       |
|           16 |      168 | 2024-06-07 | HAVU        | W   | 1.000      | 0.435        | 0.003 (0.001)    | 0.254 (0.110)    | 0 (0.000) |     6.30 | easy, FinigaN, SELLTER, tN1R, xiELO       |
|           15 |      294 | 2024-06-05 | CYBERSHOKE  | W   | 1.000      | 0.435        | 0.041 (0.018)    | 0.194 (0.084)    | 0 (0.000) |     6.89 | easy, FinigaN, SELLTER, tN1R, xiELO       |
|           14 |      379 | 2024-06-03 | Permitta    | L   | 1.000      | -            | -                | -                | -         |   -20.01 | easy, FinigaN, SELLTER, tN1R, xiELO       |
|           13 |      393 | 2024-06-02 | FURIA       | W   | 1.000      | 0.435        | 0.249 (0.108)    | 0.590 (0.257)    | 0 (0.000) |    29.33 | easy, FinigaN, SELLTER, tN1R, xiELO       |
|           12 |      404 | 2024-06-02 | VP.Prodigy  | W   | 1.000      | 0.435        | 0.016 (0.007)    | 0.539 (0.234)    | 0 (0.000) |    13.77 | easy, FinigaN, SELLTER, tN1R, xiELO       |
|           11 |      414 | 2024-06-01 | SINNERS     | W   | 1.000      | 0.435        | 0.045 (0.020)    | 0.844 (0.367)    | 0 (0.000) |    20.09 | easy, FinigaN, SELLTER, tN1R, xiELO       |
|           10 |      457 | 2024-05-31 | GamerLegion | W   | 1.000      | 0.435        | 0.222 (0.096)    | 0.334 (0.145)    | 0 (0.000) |    27.79 | easy, FinigaN, SELLTER, tN1R, xiELO       |
|            9 |      538 | 2024-05-28 | Permitta    | L   | 1.000      | -            | -                | -                | -         |   -16.64 | easy, FinigaN, SELLTER, tN1R, xiELO       |
|            8 |      578 | 2024-05-26 | DMS         | W   | 1.000      | 0.435        | 0.004 (0.002)    | 0.524 (0.228)    | 0 (0.000) |    14.74 | easy, FinigaN, SELLTER, tN1R, xiELO       |
|            7 |      604 | 2024-05-24 | SINNERS     | L   | 1.000      | -            | -                | -                | -         |   -11.25 | easy, FinigaN, SELLTER, tN1R, xiELO       |
|            6 |      619 | 2024-05-23 | Sampi       | L   | 1.000      | -            | -                | -                | -         |   -15.45 | easy, FinigaN, SELLTER, tN1R, xiELO       |
|            5 |      790 | 2024-05-18 | NOM         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.54 | easy, FinigaN, SELLTER, tN1R, xiELO       |
|            4 |      862 | 2024-05-16 | Space       | W   | 1.000      | 0.143        | -                | 0.410 (0.059)    | 0 (0.000) |    13.46 | easy, FinigaN, SELLTER, tN1R, xiELO       |
|            3 |      911 | 2024-05-15 | 777         | W   | 1.000      | 0.143        | 0.024 (0.003)    | -                | -         |     7.75 | easy, FinigaN, SELLTER, tN1R, xiELO       |
|            2 |     2021 | 2024-04-03 | 3DMAX       | L   | 0.747      | -            | -                | -                | -         |    -4.68 | easy, kelieN, SELLTER, spirit, tN1R       |
|            1 |     2125 | 2024-03-28 | Space       | W   | 0.706      | 0.500        | 0.007 (0.002)    | 0.410 (0.145)    | -         |     8.62 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($24,000.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-06-02 |      1.000 | $22,000.00     | $22,000.00      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
