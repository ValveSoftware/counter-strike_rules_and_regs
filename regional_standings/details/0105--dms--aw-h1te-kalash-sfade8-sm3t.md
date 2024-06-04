### Roster Details<br />
Team Name: DMS<br />
Roster: AW, h1te, kAlash, sFade8, sm3t<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [105](../standings_global.md)<br />
Regional Rank: [71]( ../standings_europe.md)<br />
Final Rank Value:  774.3<br />
<br />
Final Rank Value (774.3) = Starting Rank Value (661.7) + Head To Head Adjustments (112.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.366[<sup>2</sup>](#table1)
- Opponent Network: 0.173[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.135<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 661.7
- 400 + ( ( 0.135 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 661.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |        7 | 2024-05-29 | Verdant    | W   | 1.000      | 0.371        | 0.013 (0.005)    | 0.162 (0.060)    | 0 (0.000) |    16.22 | AW, h1te, kAlash, sFade8, sm3t |
|           22 |       78 | 2024-05-26 | GUN5       | L   | 1.000      | -            | -                | -                | -         |   -16.78 | AW, h1te, kAlash, sFade8, sm3t |
|           21 |      107 | 2024-05-24 | VP.Prodigy | L   | 1.000      | -            | -                | -                | -         |   -18.32 | AW, h1te, kAlash, sFade8, sm3t |
|           20 |      116 | 2024-05-24 | BetBoom    | L   | 1.000      | -            | -                | -                | -         |    -1.46 | AW, h1te, kAlash, sFade8, sm3t |
|           19 |      126 | 2024-05-23 | B8         | L   | 1.000      | -            | -                | -                | -         |    -3.76 | AW, h1te, kAlash, sFade8, sm3t |
|           18 |      206 | 2024-05-21 | EYEBALLERS | W   | 1.000      | 0.435        | 0.009 (0.004)    | 0.611 (0.265)    | 0 (0.000) |    18.54 | AW, h1te, kAlash, sFade8, sm3t |
|           17 |      209 | 2024-05-21 | MOUZ NXT   | W   | 1.000      | 0.435        | 0.157 (0.068)    | 1.000 (0.435)    | 0 (0.000) |    25.30 | AW, h1te, kAlash, sFade8, sm3t |
|           16 |      264 | 2024-05-19 | Space      | L   | 1.000      | -            | -                | -                | -         |   -12.60 | AW, h1te, kAlash, sFade8, sm3t |
|           15 |      296 | 2024-05-18 | 777        | W   | 1.000      | 0.143        | 0.026 (0.004)    | 0.194 (0.028)    | 0 (0.000) |    14.50 | AW, h1te, kAlash, sFade8, sm3t |
|           14 |      301 | 2024-05-18 | Sampi      | W   | 1.000      | 0.435        | 0.038 (0.016)    | 0.794 (0.345)    | 0 (0.000) |    22.98 | AW, h1te, kAlash, sFade8, sm3t |
|           13 |      345 | 2024-05-17 | MOUZ NXT   | L   | 1.000      | -            | -                | -                | -         |    -4.81 | AW, h1te, kAlash, sFade8, sm3t |
|           12 |      365 | 2024-05-16 | B8         | L   | 1.000      | -            | -                | -                | -         |    -3.47 | AW, h1te, kAlash, sFade8, sm3t |
|           11 |      417 | 2024-05-15 | Monte      | L   | 1.000      | -            | -                | -                | -         |    -1.88 | AW, h1te, kAlash, sFade8, sm3t |
|           10 |      477 | 2024-05-14 | Rare Atom  | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.194 (0.028)    | 0 (0.000) |    10.47 | AW, h1te, kAlash, sFade8, sm3t |
|            9 |      488 | 2024-05-14 | Sangal     | W   | 1.000      | 0.435        | 0.166 (0.072)    | 0.911 (0.396)    | 0 (0.000) |    26.70 | AW, h1te, kAlash, sFade8, sm3t |
|            8 |      504 | 2024-05-13 | Heimo      | W   | 1.000      | 0.143        | 0.011 (0.002)    | 0.083 (0.012)    | 0 (0.000) |    16.92 | AW, h1te, kAlash, sFade8, sm3t |
|            7 |      557 | 2024-05-11 | CYBERSHOKE | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.29 | AW, h1te, kAlash, sFade8, sm3t |
|            6 |      822 | 2024-04-28 | Alliance   | L   | 0.991      | -            | -                | -                | -         |    -8.82 | AW, h1te, kAlash, sFade8, sm3t |
|            5 |      873 | 2024-04-26 | BLEED      | L   | 0.978      | -            | -                | -                | -         |    -1.46 | AW, h1te, kAlash, sFade8, sm3t |
|            4 |     1078 | 2024-04-18 | Apeks      | L   | 0.926      | -            | -                | -                | -         |    -2.22 | AW, h1te, kAlash, sFade8, sm3t |
|            3 |     1087 | 2024-04-18 | EYEBALLERS | W   | 0.925      | 0.143        | 0.009 (0.001)    | 0.611 (0.081)    | 0 (0.000) |    20.69 | AW, h1te, kAlash, sFade8, sm3t |
|            2 |     2273 | 2024-02-27 | ECF        | L   | 0.586      | -            | -                | -                | -         |    -6.33 | AW, h1te, kAlash, sFade8, sm3t |
|            1 |     2277 | 2024-02-27 | B8         | W   | 0.585      | 0.143        | 0.165 (0.014)    | 1.000 (0.084)    | -         |    16.86 | AW, h1te, kAlash, sFade8, sm3t |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
