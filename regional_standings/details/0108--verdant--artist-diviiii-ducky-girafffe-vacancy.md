### Roster Details<br />
Team Name: Verdant<br />
Roster: arTisT, Diviiii, Ducky, Girafffe, Vacancy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [108](../standings_global.md)<br />
Regional Rank: [72]( ../standings_europe.md)<br />
Final Rank Value:  768.7<br />
<br />
Final Rank Value (768.7) = Starting Rank Value (812.4) + Head To Head Adjustments (-43.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.346[<sup>1</sup>](#table2)
- Bounty Collected: 0.328[<sup>2</sup>](#table1)
- Opponent Network: 0.076[<sup>2</sup>](#table1)
- LAN Wins: 0.100[<sup>2</sup>](#table1)

The average of these factors is 0.212<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 812.4
- 400 + ( ( 0.212 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 812.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |        7 | 2024-05-29 | DMS               | L   | 1.000      | -            | -                | -                | -         |   -16.22 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           17 |      213 | 2024-05-21 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |    -5.86 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           16 |      249 | 2024-05-20 | Sampi             | W   | 1.000      | 0.435        | 0.038 (0.016)    | 0.794 (0.345)    | 0 (0.000) |    20.68 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           15 |      312 | 2024-05-18 | Space             | L   | 1.000      | -            | -                | -                | -         |   -13.87 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           14 |      425 | 2024-05-15 | Sangal            | W   | 1.000      | 0.435        | 0.166 (0.072)    | 0.911 (0.396)    | 0 (0.000) |    24.53 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           13 |      480 | 2024-05-14 | B8                | L   | 1.000      | -            | -                | -                | -         |    -3.75 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           12 |      506 | 2024-05-13 | ECF               | L   | 1.000      | -            | -                | -                | -         |   -12.91 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           11 |      519 | 2024-05-12 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |    -8.84 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           10 |      530 | 2024-05-12 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |    -8.09 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            9 |      550 | 2024-05-11 | V1dar             | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.117 (0.017)    | 0 (0.000) |     6.57 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            8 |      578 | 2024-05-10 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |    -6.42 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            7 |     1589 | 2024-04-01 | Reason            | W   | 0.811      | 0.301        | 0.004 (0.001)    | 0.000 (0.000)    | 1 (0.811) |     5.10 | arTisT, Ducky, Girafffe, Vacancy, Zax1e     |
|            6 |     1664 | 2024-03-27 | Ninjas in Pyjamas | L   | 0.779      | -            | -                | -                | -         |    -4.48 | arTisT, Ducky, Girafffe, Vacancy, Zax1e     |
|            5 |     1788 | 2024-03-19 | EXO               | L   | 0.726      | -            | -                | -                | -         |   -11.54 | arTisT, Ducky, Girafffe, Vacancy, Zax1e     |
|            4 |     3291 | 2024-01-16 | LL Madagaskar     | L   | 0.306      | -            | -                | -                | -         |    -8.24 | Ducky, Extinct, Girafffe, tvs, Vacancy      |
|            3 |     3733 | 2023-12-10 | K10               | L   | 0.060      | -            | -                | -                | -         |    -1.23 | arTisT, Ducky, Extinct, Girafffe, Wolfie    |
|            2 |     3742 | 2023-12-10 | K10               | W   | 0.057      | 0.302        | 0.005 (0.000)    | 0.097 (0.002)    | 1 (0.057) |     0.63 | arTisT, Ducky, Extinct, Girafffe, Wolfie    |
|            1 |     3768 | 2023-12-09 | Duck Duck Goose   | W   | 0.051      | 0.302        | 0.000 (0.000)    | 0.002 (0.000)    | 1 (0.051) |     0.24 | arTisT, Ducky, Extinct, Girafffe, Wolfie    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,873.28)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-13 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-04-01 |      0.811 | $3,153.00      | $2,556.03       |
| 2024-03-19 |      0.726 | $317.00        | $230.24         |
| 2023-12-10 |      0.060 | $1,462.00      | $87.01          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
