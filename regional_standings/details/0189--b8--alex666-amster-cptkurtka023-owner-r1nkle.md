### Roster Details<br />
Team Name: B8<br />
Roster: alex666, amster, cptkurtka023, OWNER, r1nkle<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [189](../standings_global.md)<br />
Regional Rank: [120]( ../standings_europe.md)<br />
Final Rank Value:  626.5<br />
<br />
Final Rank Value (626.5) = Starting Rank Value (587.8) + Head To Head Adjustments (38.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.270[<sup>2</sup>](#table1)
- Opponent Network: 0.028[<sup>2</sup>](#table1)
- LAN Wins: 0.069[<sup>2</sup>](#table1)

The average of these factors is 0.092<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 587.8
- 400 + ( ( 0.092 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 587.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |      339 | 2023-01-28 | Monte              | L   | 1.000      | -            | -                | -                | -         |    -2.89 | alex666, amster, cptkurtka023, OWNER, r1nkle |
|           23 |      344 | 2023-01-28 | Boston crab        | W   | 1.000      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     6.83 | alex666, amster, cptkurtka023, OWNER, r1nkle |
|           22 |     1645 | 2022-11-13 | Nemiga             | W   | 0.593      | 0.426        | 0.000 (0.000)    | 0.075 (0.019)    | 0 (0.000) |     7.70 | alex666, amster, cptkurtka023, r1nkle, t0kk  |
|           21 |     1647 | 2022-11-13 | MASONIC            | W   | 0.592      | 0.426        | 0.021 (0.005)    | 0.752 (0.190)    | 0 (0.000) |    15.79 | alex666, amster, cptkurtka023, r1nkle, t0kk  |
|           20 |     1654 | 2022-11-12 | Nemiga             | L   | 0.585      | -            | -                | -                | -         |   -10.66 | alex666, amster, OWNER, r1nkle, t0kk         |
|           19 |     2321 | 2022-10-08 | GamerLegion        | L   | 0.353      | -            | -                | -                | -         |    -0.47 | alex666, amster, cptkurtka023, Hkta, r1nkle  |
|           18 |     2346 | 2022-10-07 | Sprout             | L   | 0.346      | -            | -                | -                | -         |    -0.45 | alex666, amster, cptkurtka023, Hkta, r1nkle  |
|           17 |     2377 | 2022-10-06 | fnatic             | W   | 0.337      | 0.143        | 0.243 (0.012)    | 0.454 (0.022)    | 1 (0.337) |    10.54 | alex666, amster, cptkurtka023, Hkta, r1nkle  |
|           16 |     2413 | 2022-10-05 | ECSTATIC           | W   | 0.331      | 0.143        | 0.030 (0.001)    | 0.556 (0.026)    | 1 (0.331) |     8.78 | alex666, amster, cptkurtka023, Hkta, r1nkle  |
|           15 |     2430 | 2022-10-04 | Cloud9             | L   | 0.324      | -            | -                | -                | -         |    -0.18 | alex666, amster, cptkurtka023, Hkta, r1nkle  |
|           14 |     2590 | 2022-09-26 | OneTap             | L   | 0.273      | -            | -                | -                | -         |    -2.66 | alex666, amster, cptkurtka023, Hkta, r1nkle  |
|           13 |     2651 | 2022-09-24 | ARCRED             | W   | 0.260      | 0.371        | 0.003 (0.000)    | 0.069 (0.007)    | 0 (0.000) |     5.53 | alex666, amster, cptkurtka023, Hkta, r1nkle  |
|           12 |     2709 | 2022-09-23 | Aurora             | L   | 0.253      | -            | -                | -                | -         |    -2.94 | alex666, amster, cptkurtka023, Hkta, r1nkle  |
|           11 |     2788 | 2022-09-21 | xDDDD              | W   | 0.239      | 0.371        | -                | 0.003 (0.000)    | 0 (0.000) |     2.58 | alex666, amster, cptkurtka023, Hkta, r1nkle  |
|           10 |     3119 | 2022-09-10 | ECSTATIC           | L   | 0.167      | -            | -                | -                | -         |    -0.85 | alex666, amster, cptkurtka023, Hkta, r1nkle  |
|            9 |     3222 | 2022-09-08 | Hotspurs           | L   | 0.153      | -            | -                | -                | -         |    -3.01 | alex666, amster, cptkurtka023, Hkta, r1nkle  |
|            8 |     3242 | 2022-09-07 | EYEBALLERS         | L   | 0.145      | -            | -                | -                | -         |    -0.61 | alex666, amster, cptkurtka023, Hkta, r1nkle  |
|            7 |     3420 | 2022-08-31 | Tricked            | W   | 0.097      | 0.143        | 0.034 (0.000)    | 0.954 (0.013)    | 0 (0.000) |     2.79 | alex666, amster, cptkurtka023, Hkta, r1nkle  |
|            6 |     3578 | 2022-08-25 | ex-Into the Breach | L   | 0.058      | -            | -                | -                | -         |    -0.35 | alex666, amster, cptkurtka023, Hkta, r1nkle  |
|            5 |     3591 | 2022-08-24 | Sangal             | L   | 0.052      | -            | -                | -                | -         |    -0.20 | alex666, amster, cptkurtka023, Hkta, r1nkle  |
|            4 |     3602 | 2022-08-23 | HEET               | W   | 0.047      | 0.143        | 0.028 (0.000)    | 0.250 (0.002)    | 0 (0.000) |     1.30 | alex666, amster, cptkurtka023, Hkta, r1nkle  |
|            3 |     3610 | 2022-08-23 | AVANGAR            | W   | 0.046      | 0.143        | 0.003 (0.000)    | 0.314 (0.002)    | 0 (0.000) |     1.07 | alex666, amster, cptkurtka023, Hkta, r1nkle  |
|            2 |     3622 | 2022-08-23 | Movistar Riders    | W   | 0.046      | 0.143        | 0.010 (0.000)    | 0.082 (0.001)    | -         |     1.07 | alex666, amster, cptkurtka023, Hkta, r1nkle  |
|            1 |     3702 | 2022-08-21 | fnatic             | L   | 0.032      | -            | -                | -                | -         |    -0.01 | alex666, amster, cptkurtka023, Hkta, r1nkle  |

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
