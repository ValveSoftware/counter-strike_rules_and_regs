### Roster Details<br />
Team Name: GTZ<br />
Roster: aragornN, Icarus, JAEPE, Shr, snapy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [154](../standings_global.md)<br />
Regional Rank: [102]( ../standings_europe.md)<br />
Final Rank Value:  705.7<br />
<br />
Final Rank Value (705.7) = Starting Rank Value (725.6) + Head To Head Adjustments (-19.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.276[<sup>1</sup>](#table2)
- Bounty Collected: 0.260[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.075[<sup>2</sup>](#table1)

The average of these factors is 0.159<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 725.6
- 400 + ( ( 0.159 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 725.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |      130 | 2023-02-06 | VOYVODA           | L   | 1.000      | -            | -                | -                | -         |   -18.17 | aragornN, Icarus, JAEPE, Shr, snapy          |
|           18 |      188 | 2023-02-03 | Nexus             | L   | 1.000      | -            | -                | -                | -         |   -10.26 | aragornN, Icarus, JAEPE, Shr, snapy          |
|           17 |      214 | 2023-02-02 | EYEBALLERS        | L   | 1.000      | -            | -                | -                | -         |    -9.22 | aragornN, Icarus, JAEPE, Shr, snapy          |
|           16 |      240 | 2023-02-01 | Astralis Talent   | W   | 1.000      | 0.143        | 0.021 (0.003)    | 0.522 (0.075)    | 0 (0.000) |    21.11 | aragornN, Icarus, JAEPE, Shr, snapy          |
|           15 |      291 | 2023-01-30 | Astralis Talent   | W   | 1.000      | 0.143        | 0.021 (0.003)    | 0.522 (0.075)    | 0 (0.000) |    22.75 | aragornN, Icarus, JAEPE, Shr, snapy          |
|           14 |      351 | 2023-01-28 | EC Brugge         | L   | 1.000      | -            | -                | -                | -         |   -17.38 | aragornN, Icarus, JAEPE, Shr, snapy          |
|           13 |      386 | 2023-01-27 | JANO              | L   | 1.000      | -            | -                | -                | -         |   -14.82 | aragornN, Icarus, JAEPE, Shr, snapy          |
|           12 |      447 | 2023-01-25 | GODSENT           | L   | 1.000      | -            | -                | -                | -         |   -11.94 | aragornN, Icarus, JAEPE, Shr, snapy          |
|           11 |      525 | 2023-01-22 | Copenhagen Flames | L   | 1.000      | -            | -                | -                | -         |    -4.45 | aragornN, Icarus, JAEPE, Shr, snapy          |
|           10 |      536 | 2023-01-22 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -2.63 | aragornN, Icarus, JAEPE, Shr, snapy          |
|            9 |      628 | 2023-01-18 | Enhanced          | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.020 (0.003)    | 0 (0.000) |     8.55 | aragornN, Icarus, JAEPE, Shr, snapy          |
|            8 |      669 | 2023-01-16 | BIG Academy       | L   | 1.000      | -            | -                | -                | -         |    -6.34 | aragornN, Icarus, JAEPE, Shr, snapy          |
|            7 |      700 | 2023-01-14 | onLiNeRsX         | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.082 (0.012)    | 0 (0.000) |     8.04 | aragornN, Icarus, JAEPE, Shr, snapy          |
|            6 |      715 | 2023-01-12 | FTW               | W   | 0.993      | 0.143        | 0.026 (0.004)    | 0.300 (0.043)    | 0 (0.000) |    21.34 | aragornN, Icarus, JAEPE, Shr, snapy          |
|            5 |      718 | 2023-01-12 | onLiNeRsX         | L   | 0.992      | -            | -                | -                | -         |   -23.07 | aragornN, Icarus, JAEPE, Shr, snapy          |
|            4 |      719 | 2023-01-12 | FTW               | W   | 0.991      | 0.143        | 0.026 (0.004)    | 0.300 (0.043)    | 0 (0.000) |    21.70 | aragornN, Icarus, JAEPE, Shr, snapy          |
|            3 |     1185 | 2022-12-04 | FTW               | L   | 0.731      | -            | -                | -                | -         |    -6.25 | aragornN, frezbyyc, Icarus, renatoohaxx, Shr |
|            2 |     1222 | 2022-12-03 | GTZ               | W   | 0.726      | 0.342        | 0.003 (0.001)    | 0.000 (0.000)    | 1 (0.726) |     7.29 | dead, Linko, NOPEEJ, rafaxF, snapy           |
|            1 |     1233 | 2022-12-03 | FTW               | L   | 0.724      | -            | -                | -                | -         |    -6.18 | aragornN, frezbyyc, Icarus, renatoohaxx, Shr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,129.88)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
