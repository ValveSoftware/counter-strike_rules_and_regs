### Roster Details<br />
Team Name: Juggernauts<br />
Roster: fleav, Katalic, sarenii, stYleEeZ, susp<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [138](../standings_global.md)<br />
Regional Rank: [94]( ../standings_europe.md)<br />
Final Rank Value:  733.8<br />
<br />
Final Rank Value (733.8) = Starting Rank Value (706.1) + Head To Head Adjustments (27.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.290[<sup>1</sup>](#table2)
- Bounty Collected: 0.262[<sup>2</sup>](#table1)
- Opponent Network: 0.046[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.150<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 706.1
- 400 + ( ( 0.150 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 706.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |        8 | 2023-02-12 | INVSN           | W   | 1.000      | 0.143        | 0.014 (0.002)    | 0.428 (0.061)    | 0 (0.000) |    20.62 | fleav, Katalic, sarenii, stYleEeZ, susp   |
|           19 |      532 | 2023-01-22 | Websterz        | L   | 1.000      | -            | -                | -                | -         |   -10.84 | fleav, Katalic, Rock1nG, sarenii, susp    |
|           18 |      546 | 2023-01-21 | Sangal          | L   | 1.000      | -            | -                | -                | -         |    -8.35 | dEE, Katalic, Rock1nG, sarenii, susp      |
|           17 |      584 | 2023-01-19 | INVSN           | W   | 1.000      | 0.435        | 0.014 (0.006)    | 0.428 (0.186)    | 0 (0.000) |    21.31 | dEE, Katalic, Rock1nG, sarenii, susp      |
|           16 |      643 | 2023-01-17 | GODSENT         | L   | 1.000      | -            | -                | -                | -         |   -12.38 | dEE, Katalic, Rock1nG, sarenii, susp      |
|           15 |      699 | 2023-01-14 | BLUEJAYS        | W   | 1.000      | 0.435        | 0.000 (0.000)    | 0.124 (0.054)    | 0 (0.000) |     8.35 | dEE, Katalic, Rock1nG, sarenii, susp      |
|           14 |      778 | 2022-12-18 | BLINK           | W   | 0.826      | 0.143        | 0.000 (0.000)    | 0.081 (0.010)    | 0 (0.000) |    10.22 | dEE, Katalic, Rock1nG, sarenii, susp      |
|           13 |      890 | 2022-12-14 | INVSN           | W   | 0.800      | 0.143        | 0.014 (0.002)    | 0.428 (0.049)    | 0 (0.000) |    19.34 | dEE, Katalic, Rock1nG, sarenii, susp      |
|           12 |      897 | 2022-12-14 | ESK             | W   | 0.799      | 0.143        | 0.000 (0.000)    | 0.033 (0.004)    | 0 (0.000) |     4.25 | dEE, Katalic, Rock1nG, sarenii, susp      |
|           11 |     1455 | 2022-11-25 | ARCRED          | L   | 0.673      | -            | -                | -                | -         |    -9.69 | 1NVISIBLEE, DSSj, eN0o, hurtslxrd, Ryujin |
|           10 |     1459 | 2022-11-25 | Partizan        | L   | 0.672      | -            | -                | -                | -         |    -7.16 | dEE, Katalic, Rock1nG, sarenii, susp      |
|            9 |     1644 | 2022-11-13 | Zero Tenacity   | L   | 0.593      | -            | -                | -                | -         |    -7.55 | dEE, Katalic, sarenii, susp, sXe          |
|            8 |     2130 | 2022-10-15 | OneTap          | L   | 0.400      | -            | -                | -                | -         |    -5.73 | dEE, Katalic, sarenii, susp, sXe          |
|            7 |     2168 | 2022-10-14 | iNation         | W   | 0.394      | 0.331        | 0.042 (0.006)    | 0.684 (0.089)    | 0 (0.000) |    10.79 | dEE, Katalic, sarenii, susp, sXe          |
|            6 |     2457 | 2022-10-02 | ALTERNATE aTTaX | L   | 0.311      | -            | -                | -                | -         |    -3.50 | dEE, Katalic, sarenii, susp, sXe          |
|            5 |     2516 | 2022-09-29 | Beyond Possible | W   | 0.293      | 0.143        | 0.000 (0.000)    | 0.088 (0.004)    | 0 (0.000) |     2.51 | dEE, Katalic, sarenii, susp, sXe          |
|            4 |     2526 | 2022-09-29 | Never Surrender | W   | 0.292      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.42 | BlinN, Butello, Face, Gega2k, Palla       |
|            3 |     2560 | 2022-09-28 | OG Academy      | L   | 0.285      | -            | -                | -                | -         |    -4.32 | AwaykeN, Dementor, Marix, oxygeN, s0und   |
|            2 |     3326 | 2022-09-03 | BLUEJAYS        | L   | 0.119      | -            | -                | -                | -         |    -0.38 | dEE, Katalic, sarenii, susp, sXe          |
|            1 |     3387 | 2022-09-01 | Partizan        | L   | 0.106      | -            | -                | -                | -         |    -1.14 | dEE, Katalic, sarenii, susp, sXe          |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,709.39)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-11-28 |      0.692 | $259.00        | $179.33         |
| 2022-11-27 |      0.686 | $219.00        | $150.24         |
| 2022-11-13 |      0.593 | $1,507.00      | $893.79         |
| 2022-10-16 |      0.407 | $1,194.00      | $486.03         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
