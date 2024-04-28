### Roster Details<br />
Team Name: Beyond Possible<br />
Roster: rafftu, REDSTAR, SAIKY, SPELLAN, viltrex<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [213](../standings_global.md)<br />
Regional Rank: [128]( ../standings_europe.md)<br />
Final Rank Value:  550.0<br />
<br />
Final Rank Value (550.0) = Starting Rank Value (521.5) + Head To Head Adjustments (28.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.225[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.059<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 521.5
- 400 + ( ( 0.059 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 521.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |      793 | 2022-12-18 | INVSN           | L   | 0.824      | -            | -                | -                | -         |    -3.27 | rafftu, REDSTAR, SAIKY, SPELLAN, viltrex |
|           15 |      826 | 2022-12-17 | EC Brugge       | W   | 0.818      | 0.143        | 0.007 (0.001)    | 0.507 (0.059)    | 0 (0.000) |    19.93 | rafftu, REDSTAR, SAIKY, SPELLAN, viltrex |
|           14 |      847 | 2022-12-16 | BLINK           | W   | 0.812      | 0.143        | 0.000 (0.000)    | 0.081 (0.009)    | 0 (0.000) |    15.93 | rafftu, REDSTAR, SAIKY, SPELLAN, viltrex |
|           13 |     2297 | 2022-10-10 | los kogutos     | L   | 0.366      | -            | -                | -                | -         |    -2.02 | rafftu, Rock1nG, SAIKY, SPELLAN, viltrex |
|           12 |     2310 | 2022-10-09 | Rapid Ninjas    | L   | 0.359      | -            | -                | -                | -         |    -4.91 | rafftu, Rock1nG, SAIKY, SPELLAN, viltrex |
|           11 |     2516 | 2022-09-29 | Juggernauts     | L   | 0.293      | -            | -                | -                | -         |    -2.51 | rafftu, Rock1nG, SAIKY, SPELLAN, viltrex |
|           10 |     2544 | 2022-09-28 | OG Academy      | L   | 0.287      | -            | -                | -                | -         |    -2.29 | rafftu, Rock1nG, SAIKY, SPELLAN, viltrex |
|            9 |     2554 | 2022-09-28 | Never Surrender | W   | 0.286      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.96 | rafftu, Rock1nG, SAIKY, SPELLAN, viltrex |
|            8 |     3121 | 2022-09-10 | BLUEJAYS        | L   | 0.167      | -            | -                | -                | -         |    -0.21 | rafftu, SAIKY, SPELLAN, v1c7oR, viltrex  |
|            7 |     3362 | 2022-09-02 | forZe           | L   | 0.111      | -            | -                | -                | -         |    -0.25 | AwaykeN, rafftu, SAIKY, SPELLAN, v1c7oR  |
|            6 |     3437 | 2022-08-30 | Illuminar       | W   | 0.092      | 0.435        | 0.048 (0.002)    | 0.700 (0.028)    | 0 (0.000) |     2.75 | AwaykeN, rafftu, SAIKY, SPELLAN, v1c7oR  |
|            5 |     3465 | 2022-08-28 | MASONIC         | W   | 0.080      | 0.435        | 0.021 (0.001)    | 0.752 (0.026)    | 0 (0.000) |     2.26 | AwaykeN, rafftu, SAIKY, SPELLAN, v1c7oR  |
|            4 |     3544 | 2022-08-27 | EC Kyiv         | L   | 0.071      | -            | -                | -                | -         |    -0.80 | AwaykeN, rafftu, SAIKY, SPELLAN, v1c7oR  |
|            3 |     3592 | 2022-08-24 | Sampi           | W   | 0.052      | 0.435        | 0.001 (0.000)    | 0.016 (0.000)    | 0 (0.000) |     1.09 | AwaykeN, rafftu, SAIKY, SPELLAN, v1c7oR  |
|            2 |     3648 | 2022-08-22 | Enterprise      | L   | 0.038      | -            | -                | -                | -         |    -0.14 | AwaykeN, rafftu, SAIKY, SPELLAN, v1c7oR  |
|            1 |     3698 | 2022-08-21 | SAW             | L   | 0.033      | -            | -                | -                | -         |    -0.03 | AwaykeN, rafftu, SAIKY, SPELLAN, v1c7oR  |

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
