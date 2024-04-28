### Roster Details<br />
Team Name: Antic<br />
Roster: cookie, damyo, N1ghtraid, rekonz, SkulL<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [203](../standings_global.md)<br />
Regional Rank: [16]( ../standings_asia.md)<br />
Final Rank Value:  591.5<br />
<br />
Final Rank Value (591.5) = Starting Rank Value (612.4) + Head To Head Adjustments (-20.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.239[<sup>1</sup>](#table2)
- Bounty Collected: 0.173[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.104<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 612.4
- 400 + ( ( 0.104 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 612.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |     1263 | 2022-12-01 | Encore        | L   | 0.717      | -            | -                | -                | -         |    -9.16 | cookie, damyo, N1ghtraid, rekonz, SkulL     |
|           16 |     1287 | 2022-12-01 | Nut-E         | W   | 0.711      | 0.350        | 0.001 (0.000)    | 0.062 (0.015)    | 0 (0.000) |     8.81 | cookie, damyo, N1ghtraid, rekonz, SkulL     |
|           15 |     1316 | 2022-11-30 | Rooster       | L   | 0.703      | -            | -                | -                | -         |    -8.37 | cookie, damyo, N1ghtraid, rekonz, SkulL     |
|           14 |     1504 | 2022-11-23 | yellow        | W   | 0.657      | 0.350        | 0.000 (0.000)    | 0.044 (0.010)    | 0 (0.000) |     5.42 | cookie, damyo, N1ghtraid, rekonz, SkulL     |
|           13 |     1602 | 2022-11-17 | Encore        | L   | 0.618      | -            | -                | -                | -         |    -8.34 | damyo, HUGHMUNGUS, N1ghtraid, rekonz, SkulL |
|           12 |     1875 | 2022-10-26 | VERTEX        | L   | 0.471      | -            | -                | -                | -         |    -6.80 | cookie, damyo, N1ghtraid, rekonz, SkulL     |
|           11 |     2079 | 2022-10-18 | Stirlz Fans   | W   | 0.417      | 0.350        | 0.000 (0.000)    | 0.014 (0.002)    | 0 (0.000) |     3.14 | damyo, mizzy, N1ghtraid, rekonz, SkulL      |
|           10 |     2270 | 2022-10-12 | yellow        | W   | 0.377      | 0.313        | 0.000 (0.000)    | 0.044 (0.005)    | 0 (0.000) |     2.86 | damyo, mizzy, N1ghtraid, rekonz, SkulL      |
|            9 |     2288 | 2022-10-11 | e-LEMON-ators | L   | 0.371      | -            | -                | -                | -         |    -5.48 | damyo, mizzy, N1ghtraid, rekonz, SkulL      |
|            8 |     2432 | 2022-10-04 | Stirlz Fans   | W   | 0.324      | 0.313        | 0.000 (0.000)    | 0.014 (0.001)    | 0 (0.000) |     2.46 | Liki, mizzy, N1ghtraid, rekonz, SkulL       |
|            7 |     2759 | 2022-09-22 | VERTEX        | L   | 0.245      | -            | -                | -                | -         |    -2.59 | damyo, mizzy, N1ghtraid, rekonz, SkulL      |
|            6 |     3037 | 2022-09-13 | Frontier      | W   | 0.184      | 0.350        | 0.000 (0.000)    | 0.041 (0.003)    | 0 (0.000) |     1.38 | Jinxx, mizzy, N1ghtraid, rekonz, SkulL      |
|            5 |     3092 | 2022-09-11 | Encore        | L   | 0.171      | -            | -                | -                | -         |    -2.56 | damyo, mizzy, N1ghtraid, rekonz, SkulL      |
|            4 |     3094 | 2022-09-11 | DeadWeight    | W   | 0.170      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.25 | damyo, mizzy, N1ghtraid, rekonz, SkulL      |
|            3 |     3096 | 2022-09-10 | Encore        | L   | 0.170      | -            | -                | -                | -         |    -2.55 | damyo, mizzy, N1ghtraid, rekonz, SkulL      |
|            2 |     3635 | 2022-08-23 | e-LEMON-ators | L   | 0.045      | -            | -                | -                | -         |    -0.68 | damyo, Jinxx, N1ghtraid, rekonz, SkulL      |
|            1 |     3651 | 2022-08-22 | Stirlz Fans   | W   | 0.038      | 0.143        | 0.000 (0.000)    | 0.014 (0.000)    | 0 (0.000) |     0.28 | damyo, Jinxx, N1ghtraid, rekonz, SkulL      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($307.85)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
