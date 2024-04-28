### Roster Details<br />
Team Name: farfaraway<br />
Roster: fenvicious, Frothe, shady, spirit, xdENiSZERA<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [50](../standings_global.md)<br />
Regional Rank: [40]( ../standings_europe.md)<br />
Final Rank Value:  931.1<br />
<br />
Final Rank Value (931.1) = Starting Rank Value (963.6) + Head To Head Adjustments (-32.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.402[<sup>1</sup>](#table2)
- Bounty Collected: 0.293[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.384[<sup>2</sup>](#table1)

The average of these factors is 0.275<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 963.6
- 400 + ( ( 0.275 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 963.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      493 | 2023-01-23 | Young Ninjas | L   | 1.000      | -            | -                | -                | -         |   -14.20 | fenvicious, Frothe, shady, spirit, xdENiSZERA |
|            9 |      548 | 2023-01-21 | Tricked      | L   | 1.000      | -            | -                | -                | -         |   -16.92 | fenvicious, Frothe, shady, spirit, xdENiSZERA |
|            8 |      992 | 2022-12-10 | BLUEJAYS     | L   | 0.771      | -            | -                | -                | -         |   -10.03 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ      |
|            7 |      997 | 2022-12-09 | IHC          | L   | 0.769      | -            | -                | -                | -         |    -3.47 | Annihilation, bLitz, kabal, sk0R, Techno      |
|            6 |     1048 | 2022-12-08 | BLUEJAYS     | W   | 0.758      | 0.500        | 0.102 (0.039)    | 0.490 (0.186)    | 1 (0.758) |    13.83 | fenvicious, Frothe, shady, spirit, xdENiSZERA |
|            5 |     1093 | 2022-12-06 | Argentina    | W   | 0.750      | 0.500        | 0.000 (0.000)    | 0.031 (0.012)    | 1 (0.750) |     1.21 | fenvicious, Frothe, shady, spirit, xdENiSZERA |
|            4 |     1154 | 2022-12-05 | OneTap       | W   | 0.737      | 0.143        | 0.004 (0.000)    | 0.141 (0.015)    | 1 (0.737) |     5.67 | Ciocardau, GEOHYPE, MoDo, smekk-, swiiffter   |
|            3 |     1156 | 2022-12-04 | BIG Academy  | L   | 0.736      | -            | -                | -                | -         |   -10.70 | hyped, Krimbo, prosus, s1n, skyye             |
|            2 |     1189 | 2022-12-04 | Norway       | W   | 0.731      | 0.143        | 0.000 (0.000)    | 0.030 (0.003)    | 1 (0.731) |     1.21 | fenvicious, Frothe, shady, spirit, xdENiSZERA |
|            1 |     1204 | 2022-12-03 | Austria      | W   | 0.729      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.729) |     0.93 | farmaG, Maku, Orbit, xTreMe, Yoshi            |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,517.13)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
