### Roster Details<br />
Team Name: Into the Breach<br />
Roster: Bymas, CRUC1AL, misutaaa, rallen, Thomas<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [143](../standings_global.md)<br />
Regional Rank: [94]( ../standings_europe.md)<br />
Final Rank Value:  727.1<br />
<br />
Final Rank Value (727.1) = Starting Rank Value (698.7) + Head To Head Adjustments (28.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.257[<sup>1</sup>](#table2)
- Bounty Collected: 0.310[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.150<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 698.7
- 400 + ( ( 0.150 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 698.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     3064 | 2024-02-15 | 3DMAX             | L   | 0.426      | -            | -                | -                | -         |    -0.99 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|           11 |     3105 | 2024-02-14 | BetBoom           | L   | 0.419      | -            | -                | -                | -         |    -0.08 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|           10 |     3116 | 2024-02-14 | G2                | L   | 0.418      | -            | -                | -                | -         |    -0.02 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            9 |     3208 | 2024-02-07 | ex-Preasy         | L   | 0.371      | -            | -                | -                | -         |    -3.06 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            8 |     3213 | 2024-02-06 | Metizport         | W   | 0.366      | 0.371        | 0.078 (0.011)    | 0.706 (0.096)    | 0 (0.000) |     9.34 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            7 |     3249 | 2024-02-04 | SINNERS           | W   | 0.352      | 0.371        | 0.045 (0.006)    | 0.844 (0.110)    | 0 (0.000) |     9.97 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            6 |     3310 | 2024-02-02 | Gaimin Gladiators | L   | 0.338      | -            | -                | -                | -         |    -0.57 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            5 |     3338 | 2024-02-01 | BLEED             | W   | 0.332      | 0.371        | 0.349 (0.043)    | 1.000 (0.123)    | 0 (0.000) |    10.19 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            4 |     3384 | 2024-01-29 | BIG Academy       | W   | 0.311      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.48 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            3 |     3448 | 2024-01-25 | BLEED             | L   | 0.284      | -            | -                | -                | -         |    -0.21 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            2 |     3722 | 2024-01-17 | M1X KS            | L   | 0.235      | -            | -                | -                | -         |    -0.63 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            1 |     3726 | 2024-01-17 | Gucci Academy     | W   | 0.234      | 0.143        | 0.000 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     1.94 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($385.19)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
