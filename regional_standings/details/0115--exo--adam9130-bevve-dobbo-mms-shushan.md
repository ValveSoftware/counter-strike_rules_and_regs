### Roster Details<br />
Team Name: EXO<br />
Roster: Adam9130, bevve, dobbo, MMS, shushan<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [115](../standings_global.md)<br />
Regional Rank: [80]( ../standings_europe.md)<br />
Final Rank Value:  801.5<br />
<br />
Final Rank Value (801.5) = Starting Rank Value (787.5) + Head To Head Adjustments (14.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.340[<sup>1</sup>](#table2)
- Bounty Collected: 0.241[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.181[<sup>2</sup>](#table1)

The average of these factors is 0.194<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 787.5
- 400 + ( ( 0.194 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 787.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      333 | 2024-06-04 | Verdant         | W   | 1.000      | 0.282        | 0.014 (0.004)    | 0.261 (0.074)    | 0 (0.000) |    17.16 | Adam9130, bevve, dobbo, MMS, shushan       |
|           11 |      417 | 2024-06-01 | CYBERSHOKE      | L   | 1.000      | -            | -                | -                | -         |   -15.80 | Adam9130, bevve, dobbo, MMS, shushan       |
|           10 |      476 | 2024-05-30 | The Last Resort | W   | 1.000      | 0.282        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.88 | Adam9130, bevve, dobbo, MMS, shushan       |
|            9 |     1355 | 2024-04-27 | GL Academy      | L   | 0.904      | -            | -                | -                | -         |   -15.02 | Adam9130, bevve, dobbo, MMS, shushan       |
|            8 |     2104 | 2024-03-29 | Fraud5          | W   | 0.714      | 0.282        | 0.004 (0.001)    | 0.111 (0.022)    | 1 (0.714) |     7.63 | Adam9130, bevve, dobbo, eraa, Thomas       |
|            7 |     2288 | 2024-03-19 | Verdant         | W   | 0.647      | 0.143        | 0.014 (0.001)    | 0.261 (0.024)    | 0 (0.000) |    11.49 | Adam9130, bevve, dobbo, eraa, RuStY        |
|            6 |     2392 | 2024-03-14 | RAPTORS EC      | W   | 0.614      | 0.143        | 0.001 (0.000)    | 0.058 (0.005)    | 0 (0.000) |     5.79 | BehinDx, Karrar, moz, Prime, wfn           |
|            5 |     2821 | 2024-02-25 | Fraud5          | W   | 0.493      | 0.307        | 0.004 (0.001)    | 0.111 (0.017)    | 1 (0.493) |     5.92 | Adam9130, bevve, dobbo, Extinct, smooya    |
|            4 |     2827 | 2024-02-25 | RAPTORS EC      | W   | 0.491      | 0.307        | 0.001 (0.000)    | 0.058 (0.009)    | 1 (0.491) |     4.94 | BehinDx, Karrar, moz, Prime, wfn           |
|            3 |     2849 | 2024-02-24 | Fraud5          | L   | 0.487      | -            | -                | -                | -         |    -9.61 | Rezst, shyyne, SLY, Tree60, yz0            |
|            2 |     3301 | 2024-02-02 | Sashi Academy   | W   | 0.339      | 0.284        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.03 | Adam9130, AwaykeN, bevve, dobbo, Duplicate |
|            1 |     3370 | 2024-01-30 | Insilio         | L   | 0.320      | -            | -                | -                | -         |    -3.36 | faydett, FpSSS, Pipw, Polt, sugaR          |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,496.12)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-29 |      0.714 | $1,902.00      | $1,358.54       |
| 2024-02-25 |      0.493 | $2,962.00      | $1,458.93       |
| 2024-02-02 |      0.339 | $2,000.00      | $678.65         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
