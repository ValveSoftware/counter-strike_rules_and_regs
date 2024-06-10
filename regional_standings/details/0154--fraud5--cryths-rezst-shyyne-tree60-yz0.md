### Roster Details<br />
Team Name: Fraud5<br />
Roster: cryths, Rezst, shyyne, Tree60, yz0<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [154](../standings_global.md)<br />
Regional Rank: [100]( ../standings_europe.md)<br />
Final Rank Value:  696.5<br />
<br />
Final Rank Value (696.5) = Starting Rank Value (685.1) + Head To Head Adjustments (11.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.296[<sup>1</sup>](#table2)
- Bounty Collected: 0.217[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.052[<sup>2</sup>](#table1)

The average of these factors is 0.143<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 685.1
- 400 + ( ( 0.143 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 685.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      288 | 2024-06-05 | RAPTORS EC | W   | 1.000      | 0.282        | 0.001 (0.000)    | 0.058 (0.016)    | 0 (0.000) |    13.26 | cryths, Rezst, shyyne, Tree60, yz0      |
|           11 |     2104 | 2024-03-29 | EXO        | L   | 0.714      | -            | -                | -                | -         |    -7.63 | Adam9130, bevve, dobbo, eraa, Thomas    |
|           10 |     2287 | 2024-03-19 | RAPTORS EC | W   | 0.647      | 0.143        | 0.000 (0.000)    | 0.024 (0.002)    | 0 (0.000) |     3.51 | CYPHER, eMy, ifan, Rhys, Ziimzey        |
|            9 |     2528 | 2024-03-09 | Insilio    | L   | 0.579      | -            | -                | -                | -         |    -3.88 | Rezst, shyyne, SLY, Tree60, yz0         |
|            8 |     2541 | 2024-03-09 | ex-Preasy  | L   | 0.578      | -            | -                | -                | -         |    -3.07 | Rezst, shyyne, SLY, Tree60, yz0         |
|            7 |     2551 | 2024-03-08 | MOUZ NXT   | L   | 0.573      | -            | -                | -                | -         |    -1.78 | Rezst, shyyne, SLY, Tree60, yz0         |
|            6 |     2613 | 2024-03-06 | Passion UA | L   | 0.558      | -            | -                | -                | -         |    -2.23 | Rezst, shyyne, SLY, Tree60, yz0         |
|            5 |     2665 | 2024-03-04 | Secret     | W   | 0.546      | 0.371        | 0.000 (0.000)    | 0.128 (0.026)    | 0 (0.000) |     6.14 | Rezst, shyyne, SLY, Tree60, yz0         |
|            4 |     2821 | 2024-02-25 | EXO        | L   | 0.493      | -            | -                | -                | -         |    -5.92 | Adam9130, bevve, dobbo, Extinct, smooya |
|            3 |     2849 | 2024-02-24 | EXO        | W   | 0.487      | 0.307        | 0.011 (0.002)    | 0.142 (0.021)    | 1 (0.487) |     9.61 | Rezst, shyyne, SLY, Tree60, yz0         |
|            2 |     4028 | 2024-01-09 | KOI        | L   | 0.180      | -            | -                | -                | -         |    -0.81 | dox, Rezst, shyyne, Tree60, yz0         |
|            1 |     4043 | 2024-01-09 | Nexus      | W   | 0.180      | 0.143        | 0.013 (0.000)    | 0.469 (0.012)    | 0 (0.000) |     4.17 | BTN, ERSIN, ragga, s0und, XELLOW        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,268.85)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-29 |      0.714 | $951.00        | $679.27         |
| 2024-02-25 |      0.493 | $1,197.00      | $589.58         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
