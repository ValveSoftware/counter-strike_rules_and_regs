### Roster Details<br />
Team Name: 00NATION<br />
Roster: birdfromsky, FASHR, JDC, syrsoN, VLDN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [193](../standings_global.md)<br />
Regional Rank: [119]( ../standings_europe.md)<br />
Final Rank Value:  502.7<br />
<br />
Final Rank Value (502.7) = Starting Rank Value (494.5) + Head To Head Adjustments (8.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.197[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.050<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 494.5
- 400 + ( ( 0.050 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 494.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     2629 | 2024-01-16 | Endpoint        | L   | 0.461      | -            | -                | -                | -         |    -1.53 | birdfromsky, FASHR, JDC, syrsoN, VLDN |
|            9 |     2644 | 2024-01-16 | PGE Turow       | W   | 0.460      | 0.143        | 0.011 (0.001)    | 0.081 (0.005)    | 0 (0.000) |    11.06 | birdfromsky, FASHR, JDC, syrsoN, VLDN |
|            8 |     2743 | 2024-01-13 | ex-sYnck        | L   | 0.439      | -            | -                | -                | -         |    -3.05 | birdfromsky, FASHR, JDC, syrsoN, VLDN |
|            7 |     2819 | 2024-01-11 | IKLA            | L   | 0.426      | -            | -                | -                | -         |    -4.86 | birdfromsky, FASHR, JDC, syrsoN, VLDN |
|            6 |     2842 | 2024-01-10 | Viperio         | W   | 0.421      | 0.143        | 0.000 (0.000)    | 0.045 (0.003)    | 0 (0.000) |     7.11 | birdfromsky, FASHR, JDC, syrsoN, VLDN |
|            5 |     3337 | 2023-11-27 | ex-Anonymo      | L   | 0.125      | -            | -                | -                | -         |    -0.84 | birdfromsky, JDC, niko, susp, syrsoN  |
|            4 |     3436 | 2023-11-21 | EYEBALLERS      | L   | 0.086      | -            | -                | -                | -         |    -0.23 | birdfromsky, JDC, niko, susp, syrsoN  |
|            3 |     3555 | 2023-11-16 | Into the Breach | L   | 0.053      | -            | -                | -                | -         |    -0.28 | birdfromsky, JDC, niko, susp, syrsoN  |
|            2 |     3610 | 2023-11-15 | BIG             | L   | 0.045      | -            | -                | -                | -         |    -0.01 | birdfromsky, JDC, niko, susp, syrsoN  |
|            1 |     3638 | 2023-11-13 | Sprout          | W   | 0.033      | 0.589        | 0.006 (0.000)    | 0.133 (0.003)    | 0 (0.000) |     0.80 | birdfromsky, JDC, niko, susp, syrsoN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
