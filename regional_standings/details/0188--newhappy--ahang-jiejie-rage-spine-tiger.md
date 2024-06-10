### Roster Details<br />
Team Name: Newhappy<br />
Roster: AhaNg, jiejie, rage, SPine, Tiger<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [188](../standings_global.md)<br />
Regional Rank: [23]( ../standings_asia.md)<br />
Final Rank Value:  558.8<br />
<br />
Final Rank Value (558.8) = Starting Rank Value (526.6) + Head To Head Adjustments (32.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.064<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 526.6
- 400 + ( ( 0.064 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 526.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     3015 | 2024-02-17 | Lynn Vision        | W   | 0.439      | 0.143        | 0.129 (0.008)    | 0.303 (0.019)    | 0 (0.000) |    13.45 | AhaNg, jiejie, rage, SPine, Tiger |
|           13 |     3019 | 2024-02-17 | MAG                | W   | 0.438      | 0.143        | 0.000 (0.000)    | 0.096 (0.006)    | 0 (0.000) |     6.77 | AhaNg, jiejie, rage, SPine, Tiger |
|           12 |     3044 | 2024-02-16 | Lynn Vision        | L   | 0.432      | -            | -                | -                | -         |    -0.34 | AhaNg, jiejie, karl, rage, SPine  |
|           11 |     3050 | 2024-02-16 | GR                 | W   | 0.431      | 0.143        | 0.011 (0.001)    | 0.148 (0.009)    | 0 (0.000) |     9.47 | AhaNg, jiejie, karl, rage, SPine  |
|           10 |     3337 | 2024-02-01 | GR                 | L   | 0.332      | -            | -                | -                | -         |    -3.31 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            9 |     3341 | 2024-02-01 | TYLOO              | L   | 0.331      | -            | -                | -                | -         |    -2.08 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            8 |     3342 | 2024-02-01 | Steel Helmet       | W   | 0.331      | 0.143        | 0.011 (0.001)    | 0.046 (0.002)    | 0 (0.000) |     7.04 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            7 |     3446 | 2024-01-25 | Rare Atom          | L   | 0.284      | -            | -                | -                | -         |    -2.67 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            6 |     3459 | 2024-01-24 | Noobs But Diligent | W   | 0.279      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.88 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            5 |     3511 | 2024-01-22 | Eruption           | L   | 0.265      | -            | -                | -                | -         |    -5.60 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            4 |     3545 | 2024-01-21 | Rare Atom          | L   | 0.257      | -            | -                | -                | -         |    -2.46 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            3 |     3593 | 2024-01-20 | Steel Helmet       | W   | 0.251      | 0.143        | 0.011 (0.000)    | 0.046 (0.002)    | 0 (0.000) |     5.37 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            2 |     3646 | 2024-01-19 | TYLOO              | L   | 0.244      | -            | -                | -                | -         |    -1.70 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            1 |     3655 | 2024-01-18 | Rare Atom          | W   | 0.243      | 0.143        | 0.010 (0.000)    | 0.093 (0.003)    | 0 (0.000) |     5.41 | 2x2x, AhaNg, SPine, Tiger, tutu   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
