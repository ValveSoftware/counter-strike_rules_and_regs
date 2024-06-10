### Roster Details<br />
Team Name: ex-GUILD fe<br />
Roster: Ann4, D7, KiTKaT, Nea, pullox<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [156](../standings_global.md)<br />
Regional Rank: [101]( ../standings_europe.md)<br />
Final Rank Value:  692.0<br />
<br />
Final Rank Value (692.0) = Starting Rank Value (683.0) + Head To Head Adjustments (8.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.301[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.142<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 683.0
- 400 + ( ( 0.142 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 683.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      795 | 2024-05-18 | NIP Impact        | L   | 1.000      | -            | -                | -                | -         |   -12.84 | Ann4, D7, KiTKaT, Nea, pullox              |
|           11 |     1466 | 2024-04-21 | Fearless Cheetahs | W   | 0.867      | 0.331        | 0.006 (0.002)    | 0.121 (0.035)    | 0 (0.000) |    15.48 | kr4sy, Ksu, t4tty, Victoria, vilga         |
|           10 |     1496 | 2024-04-20 | Let Her Cook      | L   | 0.859      | -            | -                | -                | -         |    -5.77 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|            9 |     1539 | 2024-04-19 | Imperial fe       | L   | 0.853      | -            | -                | -                | -         |    -2.65 | Ann4, D7, KiTKaT, Nea, pullox              |
|            8 |     1796 | 2024-04-10 | NIP Impact        | W   | 0.793      | 0.331        | 0.006 (0.002)    | 0.197 (0.052)    | 0 (0.000) |    14.94 | aiM, jenkon, Nayomy, Qiyarah, ramziiN      |
|            7 |     1934 | 2024-04-06 | NIP Impact        | L   | 0.765      | -            | -                | -                | -         |   -10.58 | Ann4, D7, KiTKaT, Nea, pullox              |
|            6 |     2119 | 2024-03-28 | BIG EQUIPA        | W   | 0.707      | 0.331        | 0.025 (0.006)    | 0.295 (0.069)    | 0 (0.000) |    15.03 | Ann4, D7, KiTKaT, Nea, pullox              |
|            5 |     2245 | 2024-03-21 | Astralis W        | W   | 0.660      | 0.331        | 0.002 (0.001)    | 0.049 (0.011)    | 0 (0.000) |     8.94 | Ann4, D7, KiTKaT, Nea, pullox              |
|            4 |     2426 | 2024-03-13 | ENCE Athena       | L   | 0.607      | -            | -                | -                | -         |    -9.81 | Aida, Emmsan, miLo, Waldee, xia            |
|            3 |     2856 | 2024-02-24 | BIG EQUIPA        | L   | 0.486      | -            | -                | -                | -         |    -5.13 | Ann4, D7, KiTKaT, Nea, pullox              |
|            2 |     3094 | 2024-02-14 | Spirit fe         | W   | 0.421      | 0.143        | 0.005 (0.000)    | 0.065 (0.004)    | 0 (0.000) |     6.24 | Ann4, D7, KiTKaT, Nea, pullox              |
|            1 |     3532 | 2024-01-21 | Nemesis fe        | L   | 0.260      | -            | -                | -                | -         |    -4.90 | Ann4, D7, KiTKaT, kr4sy, pullox            |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,451.83)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-21 |      0.867 | $1,600.00      | $1,386.90       |
| 2024-01-21 |      0.260 | $250.00        | $64.93          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
