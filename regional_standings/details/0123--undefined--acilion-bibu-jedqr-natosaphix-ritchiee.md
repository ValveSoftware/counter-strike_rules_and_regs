### Roster Details<br />
Team Name: undefined<br />
Roster: AcilioN, Bibu, jedqr, NaToSaphiX, ritchiEE<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [123](../standings_global.md)<br />
Regional Rank: [84]( ../standings_europe.md)<br />
Final Rank Value:  749.3<br />
<br />
Final Rank Value (749.3) = Starting Rank Value (746.4) + Head To Head Adjustments (2.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.258[<sup>1</sup>](#table2)
- Bounty Collected: 0.252[<sup>2</sup>](#table1)
- Opponent Network: 0.034[<sup>2</sup>](#table1)
- LAN Wins: 0.132[<sup>2</sup>](#table1)

The average of these factors is 0.169<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 746.4
- 400 + ( ( 0.169 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 746.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |        7 | 2023-02-12 | Anonymo         | L   | 1.000      | -            | -                | -                | -         |   -20.29 | AcilioN, Bibu, jedqr, NaToSaphiX, ritchiEE   |
|           14 |       16 | 2023-02-12 | NtK             | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.041 (0.006)    | 0 (0.000) |     3.64 | AcilioN, Bibu, jedqr, NaToSaphiX, ritchiEE   |
|           13 |       30 | 2023-02-11 | iNation         | L   | 1.000      | -            | -                | -                | -         |    -4.96 | AcilioN, Bibu, jedqr, NaToSaphiX, ritchiEE   |
|           12 |      153 | 2023-02-05 | Astralis Talent | W   | 1.000      | 0.143        | 0.021 (0.003)    | 0.522 (0.075)    | 0 (0.000) |    19.73 | AcilioN, Bibu, kRYSTAL, NaToSaphiX, ritchiEE |
|           11 |      173 | 2023-02-04 | Forward         | L   | 1.000      | -            | -                | -                | -         |   -13.66 | AcilioN, Bibu, kRYSTAL, NaToSaphiX, ritchiEE |
|           10 |      279 | 2023-01-31 | ECSTATIC        | W   | 1.000      | 0.143        | 0.030 (0.004)    | 0.556 (0.079)    | 0 (0.000) |    22.98 | AcilioN, Bibu, kRYSTAL, NaToSaphiX, ritchiEE |
|            9 |      314 | 2023-01-29 | Nexus           | L   | 1.000      | -            | -                | -                | -         |   -11.15 | AcilioN, Bibu, kRYSTAL, NaToSaphiX, ritchiEE |
|            8 |      333 | 2023-01-28 | ALTERNATE aTTaX | W   | 1.000      | 0.143        | 0.008 (0.001)    | 0.486 (0.069)    | 0 (0.000) |    17.19 | AcilioN, Bibu, kRYSTAL, NaToSaphiX, ritchiEE |
|            7 |      354 | 2023-01-28 | Zero Tenacity   | W   | 1.000      | 0.143        | 0.011 (0.002)    | 0.210 (0.030)    | 0 (0.000) |    16.07 | AcilioN, Bibu, kRYSTAL, NaToSaphiX, ritchiEE |
|            6 |      389 | 2023-01-27 | ALTERNATE aTTaX | L   | 1.000      | -            | -                | -                | -         |   -12.41 | AcilioN, Bibu, kRYSTAL, NaToSaphiX, ritchiEE |
|            5 |      579 | 2023-01-20 | Nexus           | L   | 1.000      | -            | -                | -                | -         |   -13.67 | AcilioN, Bibu, Blytz, NaToSaphiX, ritchiEE   |
|            4 |      603 | 2023-01-19 | UNGENTIUM       | L   | 1.000      | -            | -                | -                | -         |   -14.47 | AcilioN, Bibu, Blytz, NaToSaphiX, ritchiEE   |
|            3 |     1532 | 2022-11-20 | GenOne          | L   | 0.640      | -            | -                | -                | -         |    -2.47 | Bibu, jEROMEE, NaToSaphiX, ritchiEE, ZywOo   |
|            2 |     1538 | 2022-11-20 | The Prodigies   | W   | 0.639      | 0.289        | 0.001 (0.000)    | 0.041 (0.008)    | 1 (0.639) |     6.14 | Bibu, jEROMEE, NaToSaphiX, ritchiEE, ZywOo   |
|            1 |     1541 | 2022-11-20 | LDLC            | W   | 0.639      | 0.289        | 0.002 (0.000)    | 0.418 (0.077)    | 1 (0.639) |    10.19 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($639.81)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
