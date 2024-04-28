### Roster Details<br />
Team Name: X<br />
Roster: cerber, deb0, gejmzilla, HYPERI1, v1w<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [220](../standings_global.md)<br />
Regional Rank: [131]( ../standings_europe.md)<br />
Final Rank Value:  502.8<br />
<br />
Final Rank Value (502.8) = Starting Rank Value (500.0) + Head To Head Adjustments (2.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.189[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 500.0
- 400 + ( ( 0.049 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 500.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     2124 | 2022-10-16 | NeedDOCTOR    | L   | 0.405      | -            | -                | -                | -         |    -3.47 | cerber, deb0, gejmzilla, HYPERI1, v1w     |
|           14 |     2177 | 2022-10-14 | WLG           | W   | 0.393      | 0.435        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.43 | cerber, deb0, gejmzilla, HYPERI1, v1w     |
|           13 |     2258 | 2022-10-12 | Zero Tenacity | L   | 0.379      | -            | -                | -                | -         |    -2.21 | cerber, deb0, gejmzilla, HYPERI1, v1w     |
|           12 |     2300 | 2022-10-10 | Websterz      | L   | 0.365      | -            | -                | -                | -         |    -1.21 | arbnorz, cerber, deb0, gejmzilla, HYPERI1 |
|           11 |     2650 | 2022-09-24 | OneTap        | L   | 0.260      | -            | -                | -                | -         |    -1.78 | arbnorz, cerber, deb0, gejmzilla, v1w     |
|           10 |     2742 | 2022-09-22 | Partizan      | W   | 0.247      | 0.371        | 0.005 (0.001)    | 0.653 (0.060)    | 0 (0.000) |     6.65 | arbnorz, cerber, deb0, gejmzilla, v1w     |
|            9 |     2814 | 2022-09-20 | ECLOT         | L   | 0.233      | -            | -                | -                | -         |    -0.39 | arbnorz, cerber, deb0, gejmzilla, v1w     |
|            8 |     3267 | 2022-09-05 | BLUEJAYS      | L   | 0.132      | -            | -                | -                | -         |    -0.14 | arbnorz, cerber, deb0, gejmzilla, v1w     |
|            7 |     3287 | 2022-09-04 | iNation       | L   | 0.126      | -            | -                | -                | -         |    -0.17 | arbnorz, cerber, deb0, gejmzilla, v1w     |
|            6 |     3356 | 2022-09-02 | NIJE          | W   | 0.112      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.29 | arbnorz, cerber, deb0, gejmzilla, v1w     |
|            5 |     3475 | 2022-08-28 | sYnck         | L   | 0.079      | -            | -                | -                | -         |    -0.47 | arbnorz, cerber, deb0, gejmzilla, v1w     |
|            4 |     3521 | 2022-08-27 | ex-Finest     | L   | 0.072      | -            | -                | -                | -         |    -0.50 | arbnorz, cerber, deb0, gejmzilla, v1w     |
|            3 |     3569 | 2022-08-26 | Sampi         | W   | 0.064      | 0.435        | 0.001 (0.000)    | 0.016 (0.000)    | 0 (0.000) |     1.39 | arbnorz, cerber, deb0, gejmzilla, v1w     |
|            2 |     3587 | 2022-08-24 | EC Kyiv       | L   | 0.053      | -            | -                | -                | -         |    -0.55 | arbnorz, cerber, deb0, gejmzilla, v1w     |
|            1 |     3605 | 2022-08-23 | Tricked       | L   | 0.046      | -            | -                | -                | -         |    -0.08 | arbnorz, cerber, deb0, gejmzilla, v1w     |

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
