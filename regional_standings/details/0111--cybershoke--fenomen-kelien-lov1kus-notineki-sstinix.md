### Roster Details<br />
Team Name: CYBERSHOKE<br />
Roster: FenomeN, kelieN, lov1kus, notineki, sstiNiX<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [111](../standings_global.md)<br />
Regional Rank: [78]( ../standings_europe.md)<br />
Final Rank Value:  806.9<br />
<br />
Final Rank Value (806.9) = Starting Rank Value (801.9) + Head To Head Adjustments (5.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.419[<sup>1</sup>](#table2)
- Bounty Collected: 0.277[<sup>2</sup>](#table1)
- Opponent Network: 0.110[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.202<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 801.9
- 400 + ( ( 0.202 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 801.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |        7 | 2024-06-10 | Rhyno            | L   | 1.000      | -            | -                | -                | -         |    -8.11 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|           12 |       50 | 2024-06-09 | EYEBALLERS       | W   | 1.000      | 0.500        | 0.006 (0.003)    | 0.722 (0.361)    | 0 (0.000) |    20.84 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|           11 |      139 | 2024-06-08 | Sampi            | W   | 1.000      | 0.500        | 0.036 (0.018)    | 0.883 (0.441)    | 0 (0.000) |    22.05 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|           10 |      196 | 2024-06-07 | Illuminar        | L   | 1.000      | -            | -                | -                | -         |   -21.30 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|            9 |      258 | 2024-06-06 | DMS              | W   | 1.000      | 0.500        | 0.004 (0.002)    | 0.524 (0.262)    | 0 (0.000) |    22.78 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|            8 |      294 | 2024-06-05 | GUN5             | L   | 1.000      | -            | -                | -                | -         |    -6.89 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|            7 |      340 | 2024-06-04 | Zero Tenacity    | L   | 1.000      | -            | -                | -                | -         |    -3.62 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|            6 |      346 | 2024-06-04 | Nemiga           | L   | 1.000      | -            | -                | -                | -         |    -3.24 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|            5 |      372 | 2024-06-03 | Grannys Knockers | L   | 1.000      | -            | -                | -                | -         |   -14.59 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|            4 |      417 | 2024-06-01 | EXO              | W   | 1.000      | 0.143        | 0.011 (0.002)    | 0.142 (0.020)    | 0 (0.000) |    15.80 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|            3 |      463 | 2024-05-31 | HOTU             | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.039 (0.014)    | 0 (0.000) |     3.43 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|            2 |      526 | 2024-05-28 | VP.Prodigy       | L   | 1.000      | -            | -                | -                | -         |    -9.64 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|            1 |     1057 | 2024-05-11 | DMS              | L   | 0.999      | -            | -                | -                | -         |   -12.49 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,500.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
