### Roster Details<br />
Team Name: Unjustified<br />
Roster: Cyrix, jsfeltner, Just2EZ, micro, tENSKI<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [221](../standings_global.md)<br />
Regional Rank: [73]( ../standings_americas.md)<br />
Final Rank Value:  501.8<br />
<br />
Final Rank Value (501.8) = Starting Rank Value (506.1) + Head To Head Adjustments (-4.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.205[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.052<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 506.1
- 400 + ( ( 0.052 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 506.1


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
|           11 |     2236 | 2022-10-12 | Red Wolves           | L   | 0.382      | -            | -                | -                | -         |    -3.60 | Cyrix, jsfeltner, Just2EZ, micro, tENSKI |
|           10 |     2570 | 2022-09-27 | Mythic               | L   | 0.282      | -            | -                | -                | -         |    -2.46 | Cyrix, jsfeltner, Just2EZ, micro, tENSKI |
|            9 |     2734 | 2022-09-22 | TeamOne              | L   | 0.248      | -            | -                | -                | -         |    -0.76 | Cyrix, jsfeltner, Just2EZ, micro, tENSKI |
|            8 |     2769 | 2022-09-21 | EG Black             | L   | 0.242      | -            | -                | -                | -         |    -0.92 | Cyrix, jsfeltner, Just2EZ, micro, tENSKI |
|            7 |     2843 | 2022-09-18 | Davenport University | W   | 0.222      | 0.435        | 0.014 (0.001)    | 0.227 (0.022)    | 0 (0.000) |     5.49 | Cyrix, jsfeltner, Just2EZ, micro, tENSKI |
|            6 |     2934 | 2022-09-15 | MIBR                 | L   | 0.202      | -            | -                | -                | -         |    -0.39 | Cyrix, jsfeltner, Just2EZ, micro, tENSKI |
|            5 |     3015 | 2022-09-13 | Phantom Troupe       | L   | 0.189      | -            | -                | -                | -         |    -1.97 | Cyrix, jsfeltner, Just2EZ, micro, tENSKI |
|            4 |     3229 | 2022-09-07 | Brazen               | L   | 0.148      | -            | -                | -                | -         |    -1.57 | Cyrix, jsfeltner, Just2EZ, micro, tENSKI |
|            3 |     3277 | 2022-09-04 | TeamOne              | L   | 0.128      | -            | -                | -                | -         |    -0.43 | Cyrix, jsfeltner, Just2EZ, micro, tENSKI |
|            2 |     3302 | 2022-09-03 | Brazen               | W   | 0.122      | 0.143        | 0.001 (0.000)    | 0.022 (0.000)    | 0 (0.000) |     2.57 | Cyrix, jsfeltner, micro, N07, tENSKI     |
|            1 |     3402 | 2022-08-31 | ATK                  | L   | 0.102      | -            | -                | -                | -         |    -0.25 | Cyrix, jsfeltner, Just2EZ, micro, tENSKI |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
