### Roster Details<br />
Team Name: HEET<br />
Roster: Djoko, Ex3rcice, Lucky, Maka, Razzmo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [88](../standings_global.md)<br />
Regional Rank: [64]( ../standings_europe.md)<br />
Final Rank Value:  837.1<br />
<br />
Final Rank Value (837.1) = Starting Rank Value (737.6) + Head To Head Adjustments (99.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.313[<sup>1</sup>](#table2)
- Bounty Collected: 0.286[<sup>2</sup>](#table1)
- Opponent Network: 0.062[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 737.6
- 400 + ( ( 0.165 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 737.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |       67 | 2023-02-09 | BIG             | L   | 1.000      | -            | -                | -                | -         |    -1.93 | Djoko, Ex3rcice, Lucky, Maka, Razzmo |
|            9 |       77 | 2023-02-08 | HONORIS         | L   | 1.000      | -            | -                | -                | -         |   -14.18 | Djoko, Ex3rcice, Lucky, Maka, Razzmo |
|            8 |       86 | 2023-02-08 | Bad News Eagles | W   | 1.000      | 0.143        | 0.066 (0.009)    | 0.375 (0.054)    | 0 (0.000) |    25.70 | Djoko, Ex3rcice, Lucky, Maka, Razzmo |
|            7 |      142 | 2023-02-05 | HONORIS         | W   | 1.000      | 0.294        | 0.011 (0.003)    | 0.748 (0.220)    | 0 (0.000) |    16.74 | Djoko, Ex3rcice, Lucky, Maka, Razzmo |
|            6 |      329 | 2023-01-28 | Eternal Fire    | W   | 1.000      | 0.143        | 0.034 (0.005)    | 0.496 (0.071)    | 0 (0.000) |    22.45 | Djoko, Ex3rcice, Lucky, Maka, Razzmo |
|            5 |      338 | 2023-01-28 | Apeks           | W   | 1.000      | 0.143        | 0.024 (0.003)    | 0.671 (0.096)    | 0 (0.000) |    25.31 | Djoko, Ex3rcice, Lucky, Maka, Razzmo |
|            4 |      345 | 2023-01-28 | EYEBALLERS      | W   | 1.000      | 0.143        | 0.017 (0.002)    | 0.776 (0.111)    | 0 (0.000) |    22.29 | Djoko, Ex3rcice, Lucky, Maka, Razzmo |
|            3 |      466 | 2023-01-24 | K23             | L   | 1.000      | -            | -                | -                | -         |    -9.15 | Djoko, Ex3rcice, Lucky, Maka, Razzmo |
|            2 |      755 | 2022-12-19 | EYEBALLERS      | L   | 0.833      | -            | -                | -                | -         |    -8.25 | afro, Djoko, Ex3rcice, JACKZ, Lucky  |
|            1 |      769 | 2022-12-18 | SINNERS         | W   | 0.827      | 0.143        | 0.068 (0.008)    | 0.549 (0.065)    | 0 (0.000) |    20.57 | afro, Djoko, Ex3rcice, JACKZ, Lucky  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,000.00)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
