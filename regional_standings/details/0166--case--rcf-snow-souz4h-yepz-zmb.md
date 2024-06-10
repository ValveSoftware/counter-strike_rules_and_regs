### Roster Details<br />
Team Name: Case<br />
Roster: RCF, snow, souz4h, yepz, zmb<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [166](../standings_global.md)<br />
Regional Rank: [45]( ../standings_americas.md)<br />
Final Rank Value:  666.4<br />
<br />
Final Rank Value (666.4) = Starting Rank Value (651.2) + Head To Head Adjustments (15.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.230[<sup>1</sup>](#table2)
- Bounty Collected: 0.266[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.126<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 651.2
- 400 + ( ( 0.126 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 651.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |     3520 | 2024-01-21 | paiN        | L   | 0.262      | -            | -                | -                | -         |    -0.04 | RCF, snow, souz4h, yepz, zmb |
|           21 |     3527 | 2024-01-21 | Fluxo       | W   | 0.260      | 0.143        | 0.064 (0.002)    | 0.670 (0.025)    | 0 (0.000) |     7.06 | RCF, snow, souz4h, yepz, zmb |
|           20 |     3553 | 2024-01-20 | adalYamigos | W   | 0.255      | 0.143        | 0.000 (0.000)    | 0.212 (0.008)    | 0 (0.000) |     3.95 | RCF, snow, souz4h, yepz, zmb |
|           19 |     3601 | 2024-01-19 | W7M         | L   | 0.249      | -            | -                | -                | -         |    -2.44 | RCF, snow, souz4h, yepz, zmb |
|           18 |     3622 | 2024-01-19 | RED Canids  | L   | 0.247      | -            | -                | -                | -         |    -0.71 | RCF, snow, souz4h, yepz, zmb |
|           17 |     3775 | 2024-01-16 | RED Canids  | L   | 0.228      | -            | -                | -                | -         |    -0.65 | RCF, snow, souz4h, yepz, zmb |
|           16 |     3777 | 2024-01-16 | paiN        | W   | 0.227      | 0.143        | 0.437 (0.014)    | 0.877 (0.028)    | 0 (0.000) |     7.13 | RCF, snow, souz4h, yepz, zmb |
|           15 |     3794 | 2024-01-16 | Hype        | W   | 0.227      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     1.40 | RCF, snow, souz4h, yepz, zmb |
|           14 |     3870 | 2024-01-13 | W7M         | L   | 0.208      | -            | -                | -                | -         |    -2.01 | RCF, snow, souz4h, yepz, zmb |
|           13 |     3948 | 2024-01-11 | Galorys     | L   | 0.195      | -            | -                | -                | -         |    -1.36 | RCF, snow, souz4h, yepz, zmb |
|           12 |     3955 | 2024-01-11 | AJF         | W   | 0.194      | 0.143        | 0.000 (0.000)    | 0.008 (0.000)    | 0 (0.000) |     1.81 | RCF, snow, souz4h, yepz, zmb |
|           11 |     3959 | 2024-01-11 | Hype        | W   | 0.194      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     1.20 | RCF, snow, souz4h, yepz, zmb |
|           10 |     4014 | 2024-01-09 | Flamengo    | L   | 0.181      | -            | -                | -                | -         |    -3.89 | RCF, snow, souz4h, yepz, zmb |
|            9 |     4026 | 2024-01-09 | Yawara      | W   | 0.180      | 0.143        | 0.000 (0.000)    | 0.024 (0.001)    | 0 (0.000) |     1.76 | RCF, snow, souz4h, yepz, zmb |
|            8 |     4076 | 2023-12-23 | ODDIK       | L   | 0.067      | -            | -                | -                | -         |    -0.31 | RCF, snow, souz4h, yepz, zmb |
|            7 |     4077 | 2023-12-23 | Solid       | W   | 0.066      | 0.303        | 0.055 (0.001)    | 0.604 (0.012)    | 0 (0.000) |     1.70 | RCF, snow, souz4h, yepz, zmb |
|            6 |     4081 | 2023-12-21 | Flamengo    | W   | 0.053      | 0.303        | 0.000 (0.000)    | 0.051 (0.001)    | 0 (0.000) |     0.54 | RCF, snow, souz4h, yepz, zmb |
|            5 |     4085 | 2023-12-20 | ODDIK       | L   | 0.047      | -            | -                | -                | -         |    -0.21 | RCF, snow, souz4h, yepz, zmb |
|            4 |     4120 | 2023-12-17 | VELOX       | W   | 0.027      | 0.303        | -                | 0.001 (0.000)    | 0 (0.000) |     0.17 | RCF, snow, souz4h, yepz, zmb |
|            3 |     4152 | 2023-12-16 | W7M         | L   | 0.022      | -            | -                | -                | -         |    -0.21 | RCF, snow, souz4h, yepz, zmb |
|            2 |     4177 | 2023-12-15 | Corinthians | W   | 0.015      | 0.338        | 0.000 (0.000)    | 0.218 (0.001)    | -         |     0.26 | RCF, snow, souz4h, yepz, zmb |
|            1 |     4186 | 2023-12-15 | Flamengo    | W   | 0.014      | 0.303        | -                | 0.051 (0.000)    | -         |     0.14 | RCF, snow, souz4h, yepz, zmb |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($135.73)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-23 |      0.067 | $1,500.00      | $100.76         |
| 2023-12-18 |      0.032 | $1,080.00      | $34.97          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
