### Roster Details<br />
Team Name: 1 JIN<br />
Roster: ayy, Jason, LEARSI, REAL, sacrifice<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [171](../standings_global.md)<br />
Regional Rank: [46]( ../standings_americas.md)<br />
Final Rank Value:  669.3<br />
<br />
Final Rank Value (669.3) = Starting Rank Value (690.4) + Head To Head Adjustments (-21.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.310[<sup>1</sup>](#table2)
- Bounty Collected: 0.209[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.035[<sup>2</sup>](#table1)

The average of these factors is 0.142<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 690.4
- 400 + ( ( 0.142 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 690.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |      828 | 2022-12-16 | Detonate             | L   | 0.816      | -            | -                | -                | -         |   -10.32 | ayy, Jason, LEARSI, REAL, sacrifice     |
|           19 |      902 | 2022-12-13 | Eros                 | L   | 0.796      | -            | -                | -                | -         |   -11.88 | ayy, Jason, LEARSI, REAL, sacrifice     |
|           18 |      924 | 2022-12-12 | REIGN                | W   | 0.789      | 0.371        | 0.003 (0.001)    | 0.153 (0.045)    | 0 (0.000) |    11.38 | ayy, Jason, LEARSI, REAL, sacrifice     |
|           17 |      967 | 2022-12-10 | Davenport University | L   | 0.776      | -            | -                | -                | -         |   -10.85 | ayy, Jason, LEARSI, REAL, sacrifice     |
|           16 |     1029 | 2022-12-08 | Take Charge          | W   | 0.762      | 0.371        | 0.000 (0.000)    | 0.105 (0.030)    | 0 (0.000) |     6.30 | ayy, Jason, LEARSI, REAL, sacrifice     |
|           15 |     1199 | 2022-12-03 | Mystic               | W   | 0.729      | 0.384        | 0.000 (0.000)    | 0.111 (0.031)    | 0 (0.000) |     7.24 | ayy, hoggy, Jason, LEARSI, sacrifice    |
|           14 |     1264 | 2022-12-01 | Mad Kings            | L   | 0.716      | -            | -                | -                | -         |   -15.25 | ayy, hoggy, Jason, LEARSI, sacrifice    |
|           13 |     1319 | 2022-11-29 | The Sisterhood       | W   | 0.702      | 0.384        | 0.000 (0.000)    | 0.028 (0.008)    | 0 (0.000) |     6.23 | ayy, Jason, LEARSI, REAL, sacrifice     |
|           12 |     1348 | 2022-11-28 | EG White             | L   | 0.695      | -            | -                | -                | -         |    -5.18 | ayy, Jason, LEARSI, REAL, sacrifice     |
|           11 |     1441 | 2022-11-25 | Take Flyte           | W   | 0.675      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.50 | ayy, Jason, LEARSI, REAL, sacrifice     |
|           10 |     2485 | 2022-09-30 | Disconnected         | L   | 0.301      | -            | -                | -                | -         |    -4.26 | aris, BeaKie, brett, silas, Swahn       |
|            9 |     2826 | 2022-09-19 | Take Flyte           | W   | 0.228      | 0.384        | 0.000 (0.000)    | 0.027 (0.002)    | 0 (0.000) |     1.80 | ayy, hoggy, Jason, LEARSI, sacrifice    |
|            8 |     2844 | 2022-09-18 | Villainous           | W   | 0.221      | 0.384        | 0.003 (0.000)    | 0.097 (0.008)    | 0 (0.000) |     3.13 | Alvin, flixxy, shutout, tatm, zebra     |
|            7 |     2902 | 2022-09-16 | Foggy                | W   | 0.209      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.09 | ayy, hoggy, Jason, LEARSI, sacrifice    |
|            6 |     2975 | 2022-09-14 | Limitless            | L   | 0.196      | -            | -                | -                | -         |    -2.50 | ayy, hoggy, Jason, LEARSI, sacrifice    |
|            5 |     3085 | 2022-09-11 | BIG Academy          | L   | 0.172      | -            | -                | -                | -         |    -0.66 | ayy, farg, Jason, LEARSI, Umar          |
|            4 |     3107 | 2022-09-10 | Task Force 141       | W   | 0.168      | 0.500        | 0.000 (0.000)    | 0.030 (0.002)    | 1 (0.168) |     1.56 | ayy, farg, Jason, LEARSI, Umar          |
|            3 |     3129 | 2022-09-10 | Vendetta             | W   | 0.167      | 0.500        | 0.007 (0.001)    | 0.107 (0.009)    | 1 (0.167) |     2.78 | Elk, Momo, nbgee12, Pluto, Tender       |
|            2 |     3135 | 2022-09-10 | Task Force 141       | L   | 0.166      | -            | -                | -                | -         |    -3.71 | JDubs, jermanji, landmaz, Noxio, Wolffe |
|            1 |     3248 | 2022-09-06 | timbermen            | L   | 0.142      | -            | -                | -                | -         |    -1.57 | ayy, hoggy, Jason, LEARSI, sacrifice    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,813.74)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-15 |      0.810 | $2,000.00      | $1,619.59       |
| 2022-10-02 |      0.315 | $1,000.00      | $314.93         |
| 2022-09-11 |      0.176 | $5,000.00      | $879.22         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
