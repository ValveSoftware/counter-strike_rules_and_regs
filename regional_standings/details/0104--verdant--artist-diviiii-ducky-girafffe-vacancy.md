### Roster Details<br />
Team Name: Verdant<br />
Roster: arTisT, Diviiii, Ducky, Girafffe, Vacancy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [104](../standings_global.md)<br />
Regional Rank: [74]( ../standings_europe.md)<br />
Final Rank Value:  840.3<br />
<br />
Final Rank Value (840.3) = Starting Rank Value (852.6) + Head To Head Adjustments (-12.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.350[<sup>1</sup>](#table2)
- Bounty Collected: 0.349[<sup>2</sup>](#table1)
- Opponent Network: 0.131[<sup>2</sup>](#table1)
- LAN Wins: 0.078[<sup>2</sup>](#table1)

The average of these factors is 0.227<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 852.6
- 400 + ( ( 0.227 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 852.6


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
|           23 |      172 | 2024-06-07 | B8                | L   | 1.000      | -            | -                | -                | -         |    -4.05 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           22 |      182 | 2024-06-07 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -1.32 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           21 |      189 | 2024-06-07 | B8                | W   | 1.000      | 0.143        | 0.160 (0.023)    | 1.000 (0.143)    | 0 (0.000) |    27.78 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           20 |      226 | 2024-06-06 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -18.82 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           19 |      285 | 2024-06-05 | Enterprise        | W   | 1.000      | 0.371        | 0.011 (0.004)    | 0.647 (0.240)    | 0 (0.000) |    20.40 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           18 |      333 | 2024-06-04 | EXO               | L   | 1.000      | -            | -                | -                | -         |   -17.16 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           17 |      365 | 2024-06-03 | LEON              | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.145 (0.054)    | 0 (0.000) |     5.44 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           16 |      419 | 2024-06-01 | V1dar             | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.101 (0.037)    | 0 (0.000) |     6.20 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           15 |      507 | 2024-05-29 | DMS               | L   | 1.000      | -            | -                | -                | -         |   -12.11 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           14 |      713 | 2024-05-21 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |    -5.77 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           13 |      749 | 2024-05-20 | Sampi             | W   | 1.000      | 0.435        | 0.036 (0.016)    | 0.883 (0.384)    | 0 (0.000) |    20.89 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           12 |      812 | 2024-05-18 | Space             | L   | 1.000      | -            | -                | -                | -         |   -13.73 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           11 |      925 | 2024-05-15 | Sangal            | W   | 1.000      | 0.435        | 0.214 (0.093)    | 0.998 (0.434)    | 0 (0.000) |    25.08 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           10 |      980 | 2024-05-14 | B8                | L   | 1.000      | -            | -                | -                | -         |    -3.67 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            9 |     1006 | 2024-05-13 | ECF               | L   | 1.000      | -            | -                | -                | -         |   -14.50 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            8 |     1019 | 2024-05-12 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |    -5.91 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            7 |     1030 | 2024-05-12 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |    -7.81 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            6 |     1050 | 2024-05-11 | V1dar             | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.101 (0.014)    | 0 (0.000) |     5.42 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            5 |     1078 | 2024-05-10 | ECLOT             | L   | 0.992      | -            | -                | -                | -         |    -4.39 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            4 |     2089 | 2024-04-01 | Reason            | W   | 0.731      | 0.301        | 0.004 (0.001)    | 0.000 (0.000)    | 1 (0.731) |     3.77 | arTisT, Ducky, Girafffe, Vacancy, Zax1e     |
|            3 |     2164 | 2024-03-27 | Ninjas in Pyjamas | L   | 0.700      | -            | -                | -                | -         |    -0.25 | arTisT, Ducky, Girafffe, Vacancy, Zax1e     |
|            2 |     2288 | 2024-03-19 | EXO               | L   | 0.647      | -            | -                | -                | -         |   -11.49 | arTisT, Ducky, Girafffe, Vacancy, Zax1e     |
|            1 |     3791 | 2024-01-16 | LL Madagaskar     | L   | 0.227      | -            | -                | -                | -         |    -6.30 | Ducky, Extinct, Girafffe, tvs, Vacancy      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,261.54)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $750.00        | $750.00         |
| 2024-05-13 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-04-01 |      0.731 | $3,153.00      | $2,306.40       |
| 2024-03-19 |      0.647 | $317.00        | $205.14         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
