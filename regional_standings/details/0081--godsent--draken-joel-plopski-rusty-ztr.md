### Roster Details<br />
Team Name: GODSENT<br />
Roster: draken, joel, Plopski, RuStY, ztr<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [81](../standings_global.md)<br />
Regional Rank: [59]( ../standings_europe.md)<br />
Final Rank Value:  862.5<br />
<br />
Final Rank Value (862.5) = Starting Rank Value (776.7) + Head To Head Adjustments (85.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.306[<sup>1</sup>](#table2)
- Bounty Collected: 0.292[<sup>2</sup>](#table1)
- Opponent Network: 0.139[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.184<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 776.7
- 400 + ( ( 0.184 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 776.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |       84 | 2023-02-08 | Apeks           | W   | 1.000      | 0.384        | 0.024 (0.009)    | 0.671 (0.258)    | 0 (0.000) |    22.06 | draken, joel, Plopski, RuStY, ztr |
|           13 |      127 | 2023-02-06 | GamerLegion     | L   | 1.000      | -            | -                | -                | -         |    -6.16 | draken, joel, Plopski, RuStY, ztr |
|           12 |      137 | 2023-02-05 | Falcons         | L   | 1.000      | -            | -                | -                | -         |    -7.87 | draken, joel, Plopski, RuStY, ztr |
|           11 |      165 | 2023-02-04 | MOUZ NXT        | L   | 1.000      | -            | -                | -                | -         |   -15.50 | draken, joel, Plopski, RuStY, ztr |
|           10 |      171 | 2023-02-04 | IKLA            | W   | 1.000      | 0.477        | 0.017 (0.008)    | 0.743 (0.354)    | 0 (0.000) |    19.55 | draken, joel, Plopski, RuStY, ztr |
|            9 |      277 | 2023-01-31 | ECSTATIC        | W   | 1.000      | 0.143        | 0.030 (0.004)    | 0.556 (0.079)    | 0 (0.000) |    18.72 | draken, joel, Plopski, RuStY, ztr |
|            8 |      447 | 2023-01-25 | GTZ             | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.195 (0.028)    | 0 (0.000) |    11.94 | draken, joel, Plopski, RuStY, ztr |
|            7 |      479 | 2023-01-24 | 500             | L   | 1.000      | -            | -                | -                | -         |    -6.51 | draken, joel, Plopski, RuStY, ztr |
|            6 |      574 | 2023-01-20 | ALTERNATE aTTaX | W   | 1.000      | 0.435        | 0.008 (0.003)    | 0.486 (0.211)    | 0 (0.000) |    14.16 | draken, joel, Plopski, RuStY, ztr |
|            5 |      587 | 2023-01-19 | Aurora          | L   | 1.000      | -            | -                | -                | -         |    -8.68 | draken, joel, Plopski, RuStY, ztr |
|            4 |      622 | 2023-01-18 | Astralis Talent | W   | 1.000      | 0.143        | 0.021 (0.003)    | 0.522 (0.075)    | 0 (0.000) |    19.77 | draken, joel, Plopski, RuStY, ztr |
|            3 |      643 | 2023-01-17 | Juggernauts     | W   | 1.000      | 0.435        | 0.004 (0.002)    | 0.190 (0.083)    | 0 (0.000) |    12.38 | draken, joel, Plopski, RuStY, ztr |
|            2 |      649 | 2023-01-17 | ECLOT           | L   | 1.000      | -            | -                | -                | -         |    -9.54 | draken, joel, Plopski, RuStY, ztr |
|            1 |      696 | 2023-01-14 | Sangal          | W   | 1.000      | 0.435        | 0.017 (0.007)    | 0.684 (0.297)    | 0 (0.000) |    21.48 | draken, joel, Plopski, RuStY, ztr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,550.00)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
