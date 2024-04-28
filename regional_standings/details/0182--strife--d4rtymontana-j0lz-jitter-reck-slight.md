### Roster Details<br />
Team Name: Strife<br />
Roster: D4rtyMontana, J0LZ, jitter, reck, SLIGHT<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [182](../standings_global.md)<br />
Regional Rank: [51]( ../standings_americas.md)<br />
Final Rank Value:  636.4<br />
<br />
Final Rank Value (636.4) = Starting Rank Value (629.7) + Head To Head Adjustments (6.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.239[<sup>1</sup>](#table2)
- Bounty Collected: 0.204[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.112<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 629.7
- 400 + ( ( 0.112 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 629.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |     2536 | 2022-09-28 | X13                  | W   | 0.289      | 0.384        | 0.001 (0.000)    | 0.090 (0.010)    | 0 (0.000) |     4.95 | D4rtyMontana, J0LZ, jitter, reck, SLIGHT |
|           16 |     2565 | 2022-09-27 | Vendetta             | L   | 0.283      | -            | -                | -                | -         |    -3.45 | D4rtyMontana, J0LZ, jitter, reck, SLIGHT |
|           15 |     2766 | 2022-09-21 | 7AM NA               | W   | 0.242      | 0.435        | 0.000 (0.000)    | 0.107 (0.011)    | 0 (0.000) |     3.09 | D4rtyMontana, J0LZ, jitter, reck, SLIGHT |
|           14 |     2798 | 2022-09-20 | Nouns                | L   | 0.235      | -            | -                | -                | -         |    -2.64 | D4rtyMontana, J0LZ, jitter, reck, SLIGHT |
|           13 |     2820 | 2022-09-19 | Disconnected         | W   | 0.229      | 0.435        | 0.008 (0.001)    | 0.225 (0.022)    | 0 (0.000) |     4.59 | D4rtyMontana, J0LZ, jitter, reck, SLIGHT |
|           12 |     2905 | 2022-09-16 | ATK                  | L   | 0.208      | -            | -                | -                | -         |    -0.94 | D4rtyMontana, J0LZ, jitter, reck, SLIGHT |
|           11 |     2976 | 2022-09-14 | Disconnected         | L   | 0.195      | -            | -                | -                | -         |    -2.26 | D4rtyMontana, J0LZ, jitter, reck, SLIGHT |
|           10 |     2984 | 2022-09-14 | Cartel terraza       | W   | 0.195      | 0.143        | 0.002 (0.000)    | 0.113 (0.003)    | 0 (0.000) |     3.34 | D4rtyMontana, J0LZ, jitter, reck, SLIGHT |
|            9 |     3018 | 2022-09-13 | Task Force 141       | W   | 0.188      | 0.435        | 0.000 (0.000)    | 0.030 (0.002)    | 0 (0.000) |     2.18 | D4rtyMontana, J0LZ, jitter, reck, SLIGHT |
|            8 |     3246 | 2022-09-06 | Phantom Troupe       | L   | 0.142      | -            | -                | -                | -         |    -2.22 | becker, D4rtyMontana, J0LZ, jitter, reck |
|            7 |     3301 | 2022-09-03 | Pete's Hookah Lounge | L   | 0.122      | -            | -                | -                | -         |    -2.70 | D4rtyMontana, J0LZ, jitter, reck, SLIGHT |
|            6 |     3370 | 2022-09-01 | ATK                  | L   | 0.109      | -            | -                | -                | -         |    -0.50 | D4rtyMontana, J0LZ, jitter, reck, SLIGHT |
|            5 |     3377 | 2022-09-01 | timbermen            | W   | 0.108      | 0.143        | 0.016 (0.000)    | 0.306 (0.005)    | 0 (0.000) |     2.45 | D4rtyMontana, J0LZ, jitter, reck, SLIGHT |
|            4 |     3403 | 2022-08-31 | 7AM NA               | W   | 0.102      | 0.143        | 0.000 (0.000)    | 0.107 (0.002)    | 0 (0.000) |     1.27 | D4rtyMontana, J0LZ, jitter, reck, SLIGHT |
|            3 |     3596 | 2022-08-23 | timbermen            | L   | 0.049      | -            | -                | -                | -         |    -0.42 | D4rtyMontana, J0LZ, jitter, reck, SLIGHT |
|            2 |     3776 | 2022-08-16 | Complexity           | L   | 0.002      | -            | -                | -                | -         |    -0.00 | D4rtyMontana, J0LZ, jitter, reck, SLIGHT |
|            1 |     3786 | 2022-08-16 | Detonate             | W   | 0.001      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.01 | D4rtyMontana, J0LZ, jitter, reck, SLIGHT |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($314.93)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
