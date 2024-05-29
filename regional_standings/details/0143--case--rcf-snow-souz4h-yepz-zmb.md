### Roster Details<br />
Team Name: Case<br />
Roster: RCF, snow, souz4h, yepz, zmb<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [143](../standings_global.md)<br />
Regional Rank: [36]( ../standings_americas.md)<br />
Final Rank Value:  684.6<br />
<br />
Final Rank Value (684.6) = Starting Rank Value (664.3) + Head To Head Adjustments (20.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.253[<sup>1</sup>](#table2)
- Bounty Collected: 0.279[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.136<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 664.3
- 400 + ( ( 0.136 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 664.3


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
|           23 |     3020 | 2024-01-21 | paiN        | L   | 0.341      | -            | -                | -                | -         |    -0.06 | RCF, snow, souz4h, yepz, zmb |
|           22 |     3027 | 2024-01-21 | Fluxo       | W   | 0.339      | 0.143        | 0.066 (0.003)    | 0.647 (0.031)    | 0 (0.000) |     9.08 | RCF, snow, souz4h, yepz, zmb |
|           21 |     3053 | 2024-01-20 | adalYamigos | W   | 0.334      | 0.143        | 0.000 (0.000)    | 0.266 (0.013)    | 0 (0.000) |     5.15 | RCF, snow, souz4h, yepz, zmb |
|           20 |     3101 | 2024-01-19 | W7M         | L   | 0.328      | -            | -                | -                | -         |    -3.63 | RCF, snow, souz4h, yepz, zmb |
|           19 |     3122 | 2024-01-19 | RED Canids  | L   | 0.326      | -            | -                | -                | -         |    -1.36 | RCF, snow, souz4h, yepz, zmb |
|           18 |     3275 | 2024-01-16 | RED Canids  | L   | 0.307      | -            | -                | -                | -         |    -1.27 | RCF, snow, souz4h, yepz, zmb |
|           17 |     3277 | 2024-01-16 | paiN        | W   | 0.307      | 0.143        | 0.464 (0.020)    | 0.829 (0.036)    | 0 (0.000) |     9.61 | RCF, snow, souz4h, yepz, zmb |
|           16 |     3294 | 2024-01-16 | Hype        | W   | 0.306      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     1.76 | RCF, snow, souz4h, yepz, zmb |
|           15 |     3370 | 2024-01-13 | W7M         | L   | 0.287      | -            | -                | -                | -         |    -3.13 | RCF, snow, souz4h, yepz, zmb |
|           14 |     3448 | 2024-01-11 | Galorys     | L   | 0.274      | -            | -                | -                | -         |    -2.17 | RCF, snow, souz4h, yepz, zmb |
|           13 |     3455 | 2024-01-11 | AJF         | W   | 0.273      | 0.143        | 0.000 (0.000)    | 0.012 (0.000)    | 0 (0.000) |     2.48 | RCF, snow, souz4h, yepz, zmb |
|           12 |     3459 | 2024-01-11 | Hype        | W   | 0.273      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     1.57 | RCF, snow, souz4h, yepz, zmb |
|           11 |     3514 | 2024-01-09 | Flamengo    | L   | 0.260      | -            | -                | -                | -         |    -5.79 | RCF, snow, souz4h, yepz, zmb |
|           10 |     3526 | 2024-01-09 | Yawara      | W   | 0.259      | 0.143        | 0.000 (0.000)    | 0.028 (0.001)    | 0 (0.000) |     2.36 | RCF, snow, souz4h, yepz, zmb |
|            9 |     3576 | 2023-12-23 | ODDIK       | L   | 0.146      | -            | -                | -                | -         |    -0.76 | RCF, snow, souz4h, yepz, zmb |
|            8 |     3577 | 2023-12-23 | Solid       | W   | 0.145      | 0.303        | 0.062 (0.003)    | 0.627 (0.028)    | 0 (0.000) |     3.63 | RCF, snow, souz4h, yepz, zmb |
|            7 |     3581 | 2023-12-21 | Flamengo    | W   | 0.133      | 0.303        | -                | 0.080 (0.003)    | 0 (0.000) |     1.24 | RCF, snow, souz4h, yepz, zmb |
|            6 |     3585 | 2023-12-20 | ODDIK       | L   | 0.126      | -            | -                | -                | -         |    -0.65 | RCF, snow, souz4h, yepz, zmb |
|            5 |     3620 | 2023-12-17 | VELOX       | W   | 0.107      | 0.303        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     1.13 | RCF, snow, souz4h, yepz, zmb |
|            4 |     3652 | 2023-12-16 | W7M         | L   | 0.101      | -            | -                | -                | -         |    -1.10 | RCF, snow, souz4h, yepz, zmb |
|            3 |     3677 | 2023-12-15 | Corinthians | W   | 0.094      | 0.338        | 0.000 (0.000)    | 0.124 (0.004)    | -         |     1.35 | RCF, snow, souz4h, yepz, zmb |
|            2 |     3686 | 2023-12-15 | Flamengo    | W   | 0.093      | 0.303        | -                | 0.080 (0.002)    | -         |     0.86 | RCF, snow, souz4h, yepz, zmb |
|            1 |     3933 | 2023-12-01 | adalYamigos | L   | 0.001      | -            | -                | -                | -         |    -0.01 | RCF, snow, souz4h, yepz, zmb |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($339.99)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-23 |      0.146 | $1,500.00      | $219.52         |
| 2023-12-18 |      0.112 | $1,080.00      | $120.47         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
