### Roster Details<br />
Team Name: Eruption<br />
Roster: cool4st, dobu, fury5k, shinobi, yAmi<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [86](../standings_global.md)<br />
Regional Rank: [6]( ../standings_asia.md)<br />
Final Rank Value:  844.4<br />
<br />
Final Rank Value (844.4) = Starting Rank Value (844.0) + Head To Head Adjustments (0.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.356[<sup>1</sup>](#table2)
- Bounty Collected: 0.281[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.207[<sup>2</sup>](#table1)

The average of these factors is 0.217<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 844.0
- 400 + ( ( 0.217 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 844.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      316 | 2023-01-29 | NKT         | L   | 1.000      | -            | -                | -                | -         |   -14.03 | cool4st, dobu, fury5k, shinobi, yAmi         |
|           12 |      321 | 2023-01-29 | Clutch      | W   | 1.000      | 0.333        | 0.005 (0.002)    | 0.041 (0.014)    | 1 (1.000) |    10.54 | cool4st, dobu, fury5k, shinobi, yAmi         |
|           11 |      356 | 2023-01-28 | Renewal     | W   | 1.000      | 0.333        | 0.002 (0.001)    | 0.083 (0.028)    | 1 (1.000) |     7.90 | cool4st, dobu, fury5k, shinobi, yAmi         |
|           10 |      392 | 2023-01-27 | IHC         | L   | 1.000      | -            | -                | -                | -         |    -4.28 | cool4st, dobu, fury5k, shinobi, yAmi         |
|            9 |      412 | 2023-01-26 | Lynn Vision | L   | 1.000      | -            | -                | -                | -         |   -12.79 | cool4st, dobu, fury5k, shinobi, yAmi         |
|            8 |      423 | 2023-01-26 | IHC         | W   | 1.000      | 0.143        | 0.108 (0.015)    | 0.622 (0.089)    | 0 (0.000) |    27.43 | cool4st, dobu, fury5k, shinobi, yAmi         |
|            7 |      484 | 2023-01-24 | Clutch      | L   | 1.000      | -            | -                | -                | -         |   -20.24 | cool4st, dobu, fury5k, shinobi, yAmi         |
|            6 |      527 | 2023-01-22 | Kintsugi    | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.041 (0.006)    | 0 (0.000) |     4.18 | cool4st, dobu, fury5k, shinobi, yAmi         |
|            5 |      534 | 2023-01-22 | Clutch      | W   | 1.000      | 0.143        | 0.005 (0.001)    | 0.041 (0.006)    | 0 (0.000) |    11.07 | cool4st, dobu, fury5k, shinobi, yAmi         |
|            4 |      692 | 2023-01-15 | NKT         | W   | 1.000      | 0.396        | 0.024 (0.010)    | 0.236 (0.093)    | 0 (0.000) |    18.93 | cool4st, dobu, fury5k, shinobi, yAmi         |
|            3 |      704 | 2023-01-14 | Lynn Vision | L   | 1.000      | -            | -                | -                | -         |   -10.64 | cool4st, dobu, fury5k, shinobi, yAmi         |
|            2 |      896 | 2022-12-14 | IHC         | L   | 0.799      | -            | -                | -                | -         |    -2.10 | Annihilation, bLitz, kabal, sk0R, Techno     |
|            1 |      921 | 2022-12-13 | Clutch      | L   | 0.792      | -            | -                | -                | -         |   -15.57 | clouden, controlez, cool4st, fury5k, shinobi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,301.57)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-01-29 |      1.000 | $2,500.00      | $2,500.00       |
| 2023-01-15 |      1.000 | $4,430.00      | $4,430.00       |
| 2022-12-18 |      0.826 | $450.00        | $371.57         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
