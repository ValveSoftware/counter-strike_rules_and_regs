### Roster Details<br />
Team Name: FLUFFY AIMERS<br />
Roster: ayy, intra, jason, nooz, sacrifice<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [204](../standings_global.md)<br />
Regional Rank: [49]( ../standings_americas.md)<br />
Final Rank Value:  512.9<br />
<br />
Final Rank Value (512.9) = Starting Rank Value (525.5) + Head To Head Adjustments (-12.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.243[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.065<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 525.5
- 400 + ( ( 0.065 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 525.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      511 | 2024-04-04 | BOSS            | L   | 1.000      | -            | -                | -                | -         |    -5.01 | ayy, intra, jason, nooz, sacrifice      |
|           14 |     1575 | 2024-02-16 | Mythic          | L   | 0.762      | -            | -                | -                | -         |    -4.58 | intra, jason, LEARSI, PNDLM, sacrifice  |
|           13 |     1580 | 2024-02-16 | LAG             | W   | 0.761      | 0.143        | 0.032 (0.003)    | 0.560 (0.061)    | 0 (0.000) |    22.08 | intra, jason, LEARSI, PNDLM, sacrifice  |
|           12 |     1633 | 2024-02-14 | Mythic          | L   | 0.749      | -            | -                | -                | -         |    -4.29 | intra, jason, LEARSI, PNDLM, sacrifice  |
|           11 |     1635 | 2024-02-14 | Mythic          | L   | 0.749      | -            | -                | -                | -         |    -4.47 | intra, jason, LEARSI, PNDLM, sacrifice  |
|           10 |     1673 | 2024-02-13 | Carpe Diem      | L   | 0.742      | -            | -                | -                | -         |    -6.16 | intra, jason, LEARSI, PNDLM, sacrifice  |
|            9 |     1677 | 2024-02-13 | Carpe Diem      | W   | 0.742      | 0.477        | 0.011 (0.004)    | 0.315 (0.112)    | 0 (0.000) |    17.66 | intra, jason, LEARSI, PNDLM, sacrifice  |
|            8 |     2265 | 2024-01-17 | Rocket          | L   | 0.562      | -            | -                | -                | -         |    -4.21 | consti, intra, jason, LEARSI, sacrifice |
|            7 |     2363 | 2024-01-15 | regain          | L   | 0.548      | -            | -                | -                | -         |   -11.20 | consti, intra, jason, LEARSI, sacrifice |
|            6 |     2415 | 2024-01-13 | LOS             | L   | 0.536      | -            | -                | -                | -         |   -11.11 | consti, intra, jason, LEARSI, sacrifice |
|            5 |     2457 | 2024-01-12 | my life be like | L   | 0.530      | -            | -                | -                | -         |    -4.09 | consti, intra, jason, LEARSI, sacrifice |
|            4 |     2469 | 2024-01-12 | Complexity      | L   | 0.529      | -            | -                | -                | -         |    -0.14 | consti, intra, jason, LEARSI, sacrifice |
|            3 |     2494 | 2024-01-12 | For Fun         | L   | 0.523      | -            | -                | -                | -         |    -4.39 | consti, intra, jason, LEARSI, sacrifice |
|            2 |     2496 | 2024-01-11 | Bad News Bears  | W   | 0.523      | 0.143        | 0.002 (0.000)    | 0.020 (0.001)    | 0 (0.000) |    10.18 | consti, intra, jason, LEARSI, sacrifice |
|            1 |     2702 | 2023-12-16 | Strife          | L   | 0.349      | -            | -                | -                | -         |    -2.91 | consti, intra, jason, LEARSI, sacrifice |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
