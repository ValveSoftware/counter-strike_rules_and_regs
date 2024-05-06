### Roster Details<br />
Team Name: Betera<br />
Roster: alex666, El1an, lollipop21k, MaSvAl, nifee<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [122](../standings_global.md)<br />
Regional Rank: [82]( ../standings_europe.md)<br />
Final Rank Value:  749.2<br />
<br />
Final Rank Value (749.2) = Starting Rank Value (730.3) + Head To Head Adjustments (18.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.298[<sup>1</sup>](#table2)
- Bounty Collected: 0.341[<sup>2</sup>](#table1)
- Opponent Network: 0.054[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.173<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 730.3
- 400 + ( ( 0.173 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 730.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |      640 | 2024-04-10 | brazylijski luz | L   | 1.000      | -            | -                | -                | -         |   -11.94 | alex666, El1an, lollipop21k, MaSvAl, nifee |
|           16 |      699 | 2024-04-09 | TSM             | L   | 1.000      | -            | -                | -                | -         |   -14.10 | alex666, El1an, lollipop21k, MaSvAl, nifee |
|           15 |      835 | 2024-04-04 | SAW             | L   | 0.986      | -            | -                | -                | -         |    -0.73 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|           14 |      871 | 2024-04-03 | System5         | W   | 0.980      | 0.500        | 0.000 (0.000)    | 0.077 (0.038)    | 0 (0.000) |     6.81 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|           13 |      973 | 2024-03-28 | Monte           | W   | 0.940      | 0.500        | 0.188 (0.089)    | 0.589 (0.277)    | 0 (0.000) |    28.48 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|           12 |     1211 | 2024-03-15 | PERA            | W   | 0.853      | 0.500        | 0.062 (0.027)    | 0.365 (0.156)    | 0 (0.000) |    19.52 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|           11 |     1274 | 2024-03-13 | RUSH B          | L   | 0.840      | -            | -                | -                | -         |   -12.09 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|           10 |     1498 | 2024-03-05 | Insilio         | L   | 0.786      | -            | -                | -                | -         |    -6.06 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            9 |     2730 | 2024-01-13 | ex-sYnck        | L   | 0.440      | -            | -                | -                | -         |    -7.27 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            8 |     2738 | 2024-01-13 | esmagaB         | W   | 0.439      | 0.143        | 0.016 (0.001)    | 0.293 (0.018)    | 0 (0.000) |     7.36 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            7 |     2777 | 2024-01-12 | PGE Turow       | W   | 0.434      | 0.143        | 0.011 (0.001)    | 0.081 (0.005)    | 0 (0.000) |     6.42 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            6 |     2825 | 2024-01-11 | ex-Anonymo      | L   | 0.426      | -            | -                | -                | -         |    -6.58 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            5 |     2828 | 2024-01-11 | Alliance        | W   | 0.425      | 0.143        | 0.016 (0.001)    | 0.815 (0.049)    | 0 (0.000) |     9.41 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            4 |     2839 | 2024-01-10 | supresse        | W   | 0.421      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.81 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            3 |     2900 | 2024-01-09 | KOI             | L   | 0.413      | -            | -                | -                | -         |    -2.06 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            2 |     3695 | 2023-11-11 | KOI             | L   | 0.020      | -            | -                | -                | -         |    -0.10 | Ganginho, lollipop21k, MaSvAl, nifee, sad  |
|            1 |     3750 | 2023-11-08 | EYEBALLERS      | L   | 0.000      | -            | -                | -                | -         |    -0.00 | Ganginho, lollipop21k, MaSvAl, nifee, sad  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($713.47)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-20 |      1.000 | $500.00        | $500.00         |
| 2023-12-10 |      0.213 | $1,000.00      | $213.47         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
