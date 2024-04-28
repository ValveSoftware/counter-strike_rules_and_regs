### Roster Details<br />
Team Name: ex-Finest<br />
Roster: f0rest, hades, PlesseN, shokz, twist<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [132](../standings_global.md)<br />
Regional Rank: [90]( ../standings_europe.md)<br />
Final Rank Value:  740.3<br />
<br />
Final Rank Value (740.3) = Starting Rank Value (726.8) + Head To Head Adjustments (13.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.319[<sup>1</sup>](#table2)
- Bounty Collected: 0.254[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.042[<sup>2</sup>](#table1)

The average of these factors is 0.160<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 726.8
- 400 + ( ( 0.160 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 726.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     2122 | 2022-10-16 | Lilmix             | W   | 0.405      | 0.429        | 0.022 (0.004)    | 0.208 (0.036)    | 1 (0.405) |     6.50 | f0rest, hades, PlesseN, shokz, twist      |
|           14 |     2149 | 2022-10-15 | EYEBALLERS         | L   | 0.398      | -            | -                | -                | -         |    -3.24 | f0rest, hades, PlesseN, shokz, twist      |
|           13 |     2500 | 2022-09-30 | forZe              | L   | 0.299      | -            | -                | -                | -         |    -1.96 | Jerry, KENSI, Norwi, shalfey, zorte       |
|           12 |     2558 | 2022-09-28 | ex-Into the Breach | W   | 0.285      | 0.384        | 0.005 (0.001)    | 0.520 (0.057)    | 0 (0.000) |     5.90 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|           11 |     2564 | 2022-09-28 | Illuminar          | W   | 0.284      | 0.435        | 0.048 (0.006)    | 0.700 (0.086)    | 0 (0.000) |     7.47 | EXUS, mASKED, morelz, reatz, TOAO         |
|           10 |     2592 | 2022-09-26 | SINNERS            | L   | 0.273      | -            | -                | -                | -         |    -1.47 | beastik, forsyy, SHOCK, ZEDKO, Zero       |
|            9 |     2756 | 2022-09-22 | MASONIC            | L   | 0.245      | -            | -                | -                | -         |    -2.00 | Anlelele, Buzz, J3nsyy, notaN, Tauson     |
|            8 |     2808 | 2022-09-20 | BLUEJAYS           | L   | 0.233      | -            | -                | -                | -         |    -0.85 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ  |
|            7 |     3001 | 2022-09-14 | IKLA               | W   | 0.192      | 0.384        | 0.017 (0.001)    | 0.743 (0.055)    | 0 (0.000) |     4.38 | byr9, Kvem, s4ltovsk1yy, Smash, uQlutzavr |
|            6 |     3358 | 2022-09-02 | IKLA               | L   | 0.112      | -            | -                | -                | -         |    -0.98 | byr9, Kvem, s4ltovsk1yy, Smash, uQlutzavr |
|            5 |     3505 | 2022-08-27 | Forward            | L   | 0.073      | -            | -                | -                | -         |    -0.96 | Dosia, JIaYm, mou, ProbLeM, xiELO         |
|            4 |     3521 | 2022-08-27 | X                  | W   | 0.072      | 0.143        | 0.000 (0.000)    | 0.034 (0.000)    | 0 (0.000) |     0.50 | arbnorz, cerber, deb0, gejmzilla, v1w     |
|            3 |     3609 | 2022-08-23 | ECSTATIC           | L   | 0.046      | -            | -                | -                | -         |    -0.43 | anarkez, kreaz, PlesseN, shokz, twist     |
|            2 |     3625 | 2022-08-23 | Partizan           | W   | 0.046      | 0.143        | 0.005 (0.000)    | 0.653 (0.004)    | 0 (0.000) |     0.92 | anarkez, kreaz, PlesseN, shokz, twist     |
|            1 |     3689 | 2022-08-21 | EYEBALLERS         | L   | 0.033      | -            | -                | -                | -         |    -0.25 | flusha, JW, Sapec, SHiNE, Svedjehed       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,455.82)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-10-16 |      0.406 | $7,000.00      | $2,841.31       |
| 2022-10-01 |      0.307 | $2,000.00      | $614.52         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
