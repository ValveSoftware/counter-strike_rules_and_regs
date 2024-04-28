### Roster Details<br />
Team Name: Nemiga<br />
Roster: 1eeR, BELCHONOKK, faydett, Synyx, xsepower<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [214](../standings_global.md)<br />
Regional Rank: [129]( ../standings_europe.md)<br />
Final Rank Value:  543.6<br />
<br />
Final Rank Value (543.6) = Starting Rank Value (546.8) + Head To Head Adjustments (-3.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.280[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.072<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 546.8
- 400 + ( ( 0.072 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 546.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      673 | 2023-01-16 | UNGENTIUM   | L   | 1.000      | -            | -                | -                | -         |    -6.57 | 1eeR, BELCHONOKK, faydett, Synyx, xsepower    |
|            9 |      717 | 2023-01-12 | 777         | L   | 0.992      | -            | -                | -                | -         |    -9.12 | 1eeR, BELCHONOKK, faydett, Synyx, xsepower    |
|            8 |     1397 | 2022-11-27 | los kogutos | L   | 0.685      | -            | -                | -                | -         |    -4.75 | 1eeR, BELCHONOKK, FinigaN, Synyx, xsepower    |
|            7 |     1425 | 2022-11-26 | sYnck       | L   | 0.679      | -            | -                | -                | -         |    -5.90 | 1eeR, BELCHONOKK, FinigaN, Synyx, xsepower    |
|            6 |     1523 | 2022-11-21 | 777         | L   | 0.646      | -            | -                | -                | -         |    -6.31 | 1eeR, BELCHONOKK, FinigaN, Synyx, xsepower    |
|            5 |     1581 | 2022-11-17 | GenOne      | W   | 0.620      | 0.143        | 0.300 (0.027)    | 0.400 (0.035)    | 0 (0.000) |    18.72 | 1eeR, BELCHONOKK, FinigaN, iDISBALANCE, Synyx |
|            4 |     1599 | 2022-11-17 | Prosapia    | W   | 0.618      | 0.143        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     9.07 | 1eeR, BELCHONOKK, FinigaN, iDISBALANCE, Synyx |
|            3 |     1645 | 2022-11-13 | B8          | L   | 0.593      | -            | -                | -                | -         |    -7.70 | 1eeR, BELCHONOKK, FinigaN, iDISBALANCE, Synyx |
|            2 |     1651 | 2022-11-12 | SINNERS     | L   | 0.586      | -            | -                | -                | -         |    -1.32 | 1eeR, BELCHONOKK, FinigaN, iDISBALANCE, Synyx |
|            1 |     1654 | 2022-11-12 | B8          | W   | 0.585      | 0.426        | 0.000 (0.000)    | 0.148 (0.037)    | 0 (0.000) |    10.66 | 1eeR, BELCHONOKK, FinigaN, iDISBALANCE, Synyx |

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
