### Roster Details<br />
Team Name: Permitta<br />
Roster: darchevile, hotd0g , KukuBambo, maaryy, tomiko<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [178](../standings_global.md)<br />
Regional Rank: [115]( ../standings_europe.md)<br />
Final Rank Value:  619.2<br />
<br />
Final Rank Value (619.2) = Starting Rank Value (620.1) + Head To Head Adjustments (-0.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.239[<sup>1</sup>](#table2)
- Bounty Collected: 0.214[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.114<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 620.1
- 400 + ( ( 0.114 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 620.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     2695 | 2023-12-17 | Astralis Talent | L   | 0.351      | -            | -                | -                | -         |    -2.47 | darchevile, hotd0g , KukuBambo, maaryy, tomiko  |
|           11 |     3487 | 2023-11-07 | 9 Pandas        | L   | 0.086      | -            | -                | -                | -         |    -0.19 | darchevile, hotd0g , KukuBambo, maaryy, tomiko  |
|           10 |     3525 | 2023-11-05 | ex-Anonymo      | L   | 0.071      | -            | -                | -                | -         |    -0.70 | darchevile, hotd0g , KukuBambo, maaryy, tomiko  |
|            9 |     3536 | 2023-11-04 | ex-Anonymo      | L   | 0.067      | -            | -                | -                | -         |    -0.66 | darchevile, hotd0g , KukuBambo, maaryy, tomiko  |
|            8 |     3561 | 2023-11-03 | PACT            | W   | 0.059      | 0.360        | 0.003 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.71 | darchevile, hotd0g , KukuBambo, maaryy, tomiko  |
|            7 |     3577 | 2023-11-02 | EYEBALLERS      | W   | 0.054      | 0.435        | 0.052 (0.001)    | 0.406 (0.010)    | 0 (0.000) |     1.38 | darchevile, hotd0g , KukuBambo, maaryy, tomiko  |
|            6 |     3651 | 2023-10-31 | SINNERS         | W   | 0.038      | 0.435        | 0.043 (0.001)    | 0.779 (0.013)    | 0 (0.000) |     1.10 | darchevile, hotd0g , KukuBambo, maaryy, tomiko  |
|            5 |     3672 | 2023-10-30 | Project G       | L   | 0.033      | -            | -                | -                | -         |    -0.66 | darchevile, hotd0g , maaryy, tomiko, xKacpersky |
|            4 |     3683 | 2023-10-30 | JANO            | W   | 0.031      | 0.143        | 0.001 (0.000)    | 0.220 (0.001)    | 0 (0.000) |     0.52 | darchevile, hotd0g , maaryy, tomiko, xKacpersky |
|            3 |     3719 | 2023-10-29 | ENCE Academy    | W   | 0.025      | 0.435        | 0.016 (0.000)    | 0.265 (0.003)    | 0 (0.000) |     0.62 | Enzo, EXUS, hotd0g , maaryy, tomiko             |
|            2 |     3725 | 2023-10-29 | Project G       | L   | 0.025      | -            | -                | -                | -         |    -0.49 | Enzo, EXUS, hotd0g , maaryy, tomiko             |
|            1 |     3765 | 2023-10-28 | Passion UA      | L   | 0.018      | -            | -                | -                | -         |    -0.09 | Enzo, EXUS, hotd0g , maaryy, tomiko             |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($124.20)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
