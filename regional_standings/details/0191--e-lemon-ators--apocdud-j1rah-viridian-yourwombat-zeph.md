### Roster Details<br />
Team Name: e-LEMON-ators<br />
Roster: apocdud, J1rah, viridian, yourwombat, zeph<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [191](../standings_global.md)<br />
Regional Rank: [15]( ../standings_asia.md)<br />
Final Rank Value:  623.5<br />
<br />
Final Rank Value (623.5) = Starting Rank Value (624.3) + Head To Head Adjustments (-0.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.249[<sup>1</sup>](#table2)
- Bounty Collected: 0.183[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.110<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 624.3
- 400 + ( ( 0.110 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 624.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |     1262 | 2022-12-02 | Rooster    | L   | 0.717      | -            | -                | -                | -         |    -9.53 | apocdud, J1rah, viridian, yourwombat, zeph    |
|           18 |     1291 | 2022-12-01 | God's Work | W   | 0.710      | 0.350        | 0.000 (0.000)    | 0.097 (0.024)    | 0 (0.000) |     7.09 | apocdud, J1rah, viridian, yourwombat, zeph    |
|           17 |     1317 | 2022-11-29 | Encore     | L   | 0.703      | -            | -                | -                | -         |   -10.19 | apocdud, J1rah, KETUBOR, viridian, yourwombat |
|           16 |     1629 | 2022-11-16 | Dynasty    | W   | 0.611      | 0.350        | 0.000 (0.000)    | 0.025 (0.005)    | 0 (0.000) |     4.23 | apocdud, gump, J1rah, viridian, yourwombat    |
|           15 |     1854 | 2022-10-27 | VERTEX     | L   | 0.477      | -            | -                | -                | -         |    -5.40 | ADDICT, BRACE, Forleks, malta, pz             |
|           14 |     1876 | 2022-10-26 | Nut-E      | W   | 0.471      | 0.313        | 0.001 (0.000)    | 0.062 (0.009)    | 0 (0.000) |     5.05 | cl0ver, mega2f, Mr Shark, supar, Velocity     |
|           13 |     2266 | 2022-10-12 | Grayhound  | L   | 0.378      | -            | -                | -                | -         |    -2.86 | apocdud, gump, HUGHMUNGUS, yourwombat, zeph   |
|           12 |     2288 | 2022-10-11 | Antic      | W   | 0.371      | 0.313        | 0.001 (0.000)    | 0.088 (0.010)    | 0 (0.000) |     5.48 | apocdud, gump, HUGHMUNGUS, yourwombat, zeph   |
|           11 |     2429 | 2022-10-04 | Elemental  | W   | 0.325      | 0.313        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.16 | chief, isa1ah, Reapz, roryyytrc, tallaj       |
|           10 |     2762 | 2022-09-22 | Nut-E      | W   | 0.244      | 0.350        | 0.001 (0.000)    | 0.062 (0.005)    | 0 (0.000) |     2.79 | cl0ver, mega2f, Mr Shark, supar, Velocity     |
|            9 |     3056 | 2022-09-12 | Arena      | W   | 0.178      | 0.350        | 0.000 (0.000)    | 0.041 (0.003)    | 0 (0.000) |     1.25 | BaN4na, Forleks, Kiyo, neo, Terryyy           |
|            8 |     3151 | 2022-09-10 | Rooster    | L   | 0.164      | -            | -                | -                | -         |    -2.18 | apocdud, gump, HUGHMUNGUS, yourwombat, zeph   |
|            7 |     3152 | 2022-09-10 | Grayhound  | L   | 0.164      | -            | -                | -                | -         |    -1.25 | apocdud, gump, HUGHMUNGUS, yourwombat, zeph   |
|            6 |     3154 | 2022-09-10 | Rooster    | W   | 0.163      | 0.143        | 0.005 (0.000)    | 0.211 (0.005)    | 0 (0.000) |     3.00 | asap, chelleos, dangeR, TjP, viridian         |
|            5 |     3486 | 2022-08-28 | Encore     | L   | 0.077      | -            | -                | -                | -         |    -1.21 | apocdud, gump, HUGHMUNGUS, yourwombat, zeph   |
|            4 |     3539 | 2022-08-27 | Grayhound  | L   | 0.071      | -            | -                | -                | -         |    -0.54 | aliStair, INS, Liazz, Sico, Vexite            |
|            3 |     3546 | 2022-08-27 | Rooster    | W   | 0.070      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     0.49 | apocdud, gump, HUGHMUNGUS, yourwombat, zeph   |
|            2 |     3635 | 2022-08-23 | Antic      | W   | 0.045      | 0.143        | 0.001 (0.000)    | 0.088 (0.001)    | 0 (0.000) |     0.68 | damyo, Jinxx, N1ghtraid, rekonz, SkulL        |
|            1 |     3652 | 2022-08-22 | yellow     | W   | 0.038      | 0.143        | -                | 0.014 (0.000)    | -         |     0.26 | cheeseball, cookie, Fiend, sunshinez, yellow  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($450.56)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
