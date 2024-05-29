### Roster Details<br />
Team Name: ex-GUILD fe<br />
Roster: Ann4, D7, KiTKaT, Nea, pullox<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [149](../standings_global.md)<br />
Regional Rank: [99]( ../standings_europe.md)<br />
Final Rank Value:  657.4<br />
<br />
Final Rank Value (657.4) = Starting Rank Value (674.0) + Head To Head Adjustments (-16.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.305[<sup>1</sup>](#table2)
- Bounty Collected: 0.238[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.141<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 674.0
- 400 + ( ( 0.141 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 674.0


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
|           12 |      295 | 2024-05-18 | NIP Impact        | L   | 1.000      | -            | -                | -                | -         |   -13.85 | Ann4, D7, KiTKaT, Nea, pullox              |
|           11 |      966 | 2024-04-21 | Fearless Cheetahs | W   | 0.946      | 0.331        | 0.009 (0.003)    | 0.146 (0.046)    | 0 (0.000) |    16.19 | kr4sy, Ksu, t4tty, Victoria, vilga         |
|           10 |      996 | 2024-04-20 | Let Her Cook      | L   | 0.939      | -            | -                | -                | -         |   -18.40 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|            9 |     1039 | 2024-04-19 | Pigeons           | L   | 0.932      | -            | -                | -                | -         |    -8.94 | Ann4, D7, KiTKaT, Nea, pullox              |
|            8 |     1296 | 2024-04-10 | NIP Impact        | W   | 0.873      | 0.331        | 0.007 (0.002)    | 0.227 (0.065)    | 0 (0.000) |    15.84 | aiM, jenkon, Nayomy, Qiyarah, ramziiN      |
|            7 |     1434 | 2024-04-06 | NIP Impact        | L   | 0.844      | -            | -                | -                | -         |   -11.88 | Ann4, D7, KiTKaT, Nea, pullox              |
|            6 |     1619 | 2024-03-28 | BIG EQUIPA        | W   | 0.786      | 0.331        | 0.003 (0.001)    | 0.303 (0.079)    | 0 (0.000) |    12.71 | Ann4, D7, KiTKaT, Nea, pullox              |
|            5 |     1745 | 2024-03-21 | Astralis W        | W   | 0.739      | 0.331        | 0.003 (0.001)    | 0.058 (0.014)    | 0 (0.000) |    10.22 | Ann4, D7, KiTKaT, Nea, pullox              |
|            4 |     1926 | 2024-03-13 | ENCE Athena       | L   | 0.686      | -            | -                | -                | -         |   -10.80 | Aida, Emmsan, miLo, Waldee, xia            |
|            3 |     2356 | 2024-02-24 | BIG EQUIPA        | L   | 0.565      | -            | -                | -                | -         |    -8.91 | Ann4, D7, KiTKaT, Nea, pullox              |
|            2 |     2594 | 2024-02-14 | Spirit fe         | W   | 0.500      | 0.143        | 0.005 (0.000)    | 0.079 (0.006)    | 0 (0.000) |     7.50 | Ann4, D7, KiTKaT, Nea, pullox              |
|            1 |     3032 | 2024-01-21 | Nemesis fe        | L   | 0.339      | -            | -                | -                | -         |    -6.25 | Ann4, D7, KiTKaT, kr4sy, pullox            |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,598.30)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-21 |      0.946 | $1,600.00      | $1,513.58       |
| 2024-01-21 |      0.339 | $250.00        | $84.72          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
