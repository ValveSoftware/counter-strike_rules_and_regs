### Roster Details<br />
Team Name: HEET<br />
Roster: afro, bodyy, Djoko, Ex3rcice, JACKZ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [43](../standings_global.md)<br />
Regional Rank: [34]( ../standings_europe.md)<br />
Final Rank Value:  966.8<br />
<br />
Final Rank Value (966.8) = Starting Rank Value (944.3) + Head To Head Adjustments (22.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.392[<sup>1</sup>](#table2)
- Bounty Collected: 0.360[<sup>2</sup>](#table1)
- Opponent Network: 0.128[<sup>2</sup>](#table1)
- LAN Wins: 0.184[<sup>2</sup>](#table1)

The average of these factors is 0.266<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 944.3
- 400 + ( ( 0.266 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 944.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |      804 | 2022-12-17 | ALTERNATE aTTaX    | W   | 0.821      | -            | -                | -                | 0 (0.000) |     7.83 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|           39 |      837 | 2022-12-16 | 500                | L   | 0.813      | -            | -                | -                | -         |    -8.03 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|           38 |     1089 | 2022-12-07 | HAVU               | L   | 0.751      | -            | -                | -                | -         |   -11.10 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|           37 |     1111 | 2022-12-06 | Sangal             | L   | 0.747      | -            | -                | -                | -         |   -14.23 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|           36 |     1124 | 2022-12-06 | Astralis           | W   | 0.746      | 0.435        | 0.149 (0.048)    | 0.538 (0.175)    | 0 (0.000) |    20.27 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|           35 |     1150 | 2022-12-05 | ex-Into the Breach | W   | 0.739      | 0.435        | 0.005 (0.002)    | 0.520 (0.167)    | 0 (0.000) |     7.52 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|           34 |     1300 | 2022-11-30 | Spirit             | L   | 0.707      | -            | -                | -                | -         |    -2.08 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|           33 |     1608 | 2022-11-16 | HAVU               | W   | 0.614      | 0.589        | 0.041 (0.015)    | 0.600 (0.217)    | 1 (0.614) |     8.94 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|           32 |     1615 | 2022-11-16 | ENCE               | L   | 0.613      | -            | -                | -                | -         |    -2.75 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|           31 |     1621 | 2022-11-16 | GamerLegion        | W   | 0.612      | 0.589        | 0.105 (0.038)    | 0.469 (0.169)    | 1 (0.612) |    14.68 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|           30 |     1626 | 2022-11-16 | Sprout             | L   | 0.611      | -            | -                | -                | -         |    -5.02 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|           29 |     1630 | 2022-11-16 | BIG                | L   | 0.611      | -            | -                | -                | -         |    -1.78 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|           28 |     1757 | 2022-11-01 | K23                | W   | 0.513      | -            | -                | -                | 0 (0.000) |     2.14 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|           27 |     1862 | 2022-10-26 | Falcons            | W   | 0.473      | 0.333        | 0.045 (0.007)    | 0.767 (0.121)    | 0 (0.000) |     8.00 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|           26 |     1887 | 2022-10-25 | LDLC               | W   | 0.466      | 0.333        | -                | 0.418 (0.065)    | 0 (0.000) |     3.65 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|           25 |     2012 | 2022-10-20 | 9INE               | L   | 0.433      | -            | -                | -                | -         |    -7.25 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|           24 |     2038 | 2022-10-19 | Falcons            | W   | 0.427      | 0.435        | 0.045 (0.008)    | 0.767 (0.142)    | -         |     7.38 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|           23 |     2061 | 2022-10-18 | 1WIN               | L   | 0.420      | -            | -                | -                | -         |    -7.65 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|           22 |     2326 | 2022-10-08 | Falcons            | L   | 0.352      | -            | -                | -                | -         |    -5.05 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|           21 |     2351 | 2022-10-07 | SAW                | W   | 0.345      | 0.143        | 0.093 (0.005)    | -                | 1 (0.345) |     7.81 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|           20 |     2404 | 2022-10-05 | K23                | L   | 0.331      | -            | -                | -                | -         |    -9.19 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|           19 |     2420 | 2022-10-04 | ENCE               | L   | 0.326      | -            | -                | -                | -         |    -1.55 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|           18 |     2578 | 2022-09-27 | SINNERS            | W   | 0.280      | 0.435        | 0.068 (0.008)    | 0.549 (0.067)    | -         |     5.15 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|           17 |     2596 | 2022-09-26 | BLUEJAYS           | L   | 0.272      | -            | -                | -                | -         |    -2.61 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|           16 |     2781 | 2022-09-21 | SINNERS            | W   | 0.240      | 0.435        | 0.068 (0.007)    | 0.549 (0.057)    | -         |     4.42 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|           15 |     2853 | 2022-09-18 | MOUZ               | L   | 0.220      | -            | -                | -                | -         |    -0.98 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|           14 |     2894 | 2022-09-17 | Heroic             | L   | 0.212      | -            | -                | -                | -         |    -0.06 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|           13 |     2930 | 2022-09-16 | Astralis           | W   | 0.205      | 0.922        | 0.149 (0.028)    | 0.538 (0.102)    | 1 (0.205) |     5.76 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|           12 |     2958 | 2022-09-15 | Complexity         | L   | 0.199      | -            | -                | -                | -         |    -0.49 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|           11 |     2991 | 2022-09-14 | ENCE               | L   | 0.193      | -            | -                | -                | -         |    -0.79 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|           10 |     3471 | 2022-08-28 | 1WIN               | W   | 0.080      | -            | -                | -                | -         |     0.95 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|            9 |     3473 | 2022-08-28 | Astralis           | L   | 0.079      | -            | -                | -                | -         |    -0.27 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|            8 |     3489 | 2022-08-27 | Benched Heroes     | W   | 0.074      | -            | -                | -                | -         |     0.19 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|            7 |     3499 | 2022-08-27 | xDDDD              | W   | 0.073      | -            | -                | -                | -         |     0.15 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|            6 |     3514 | 2022-08-27 | Pusheens           | W   | 0.073      | -            | -                | -                | -         |     0.10 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|            5 |     3586 | 2022-08-24 | ECSTATIC           | L   | 0.053      | -            | -                | -                | -         |    -0.98 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|            4 |     3589 | 2022-08-24 | Entropiq           | W   | 0.053      | -            | -                | -                | -         |     0.37 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|            3 |     3602 | 2022-08-23 | B8                 | L   | 0.047      | -            | -                | -                | -         |    -1.30 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|            2 |     3606 | 2022-08-23 | GRGECHI            | W   | 0.046      | -            | -                | -                | -         |     0.11 | afro, bodyy, Djoko, Ex3rcice, JACKZ |
|            1 |     3614 | 2022-08-23 | EC Kyiv            | W   | 0.046      | -            | -                | -                | -         |     0.21 | afro, bodyy, Djoko, Ex3rcice, JACKZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,252.15)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-07 |      0.754 | $5,000.00      | $3,768.71       |
| 2022-11-20 |      0.640 | $4,000.00      | $2,558.48       |
| 2022-10-26 |      0.473 | $4,937.00      | $2,335.84       |
| 2022-10-23 |      0.454 | $2,500.00      | $1,134.68       |
| 2022-10-02 |      0.314 | $11,000.00     | $3,454.43       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
