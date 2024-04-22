### Roster Details<br />
Team Name: 00NATION<br />
Roster: birdfromsky, FASHR, JDC, syrsoN, VLDN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [165](../standings_global.md)<br />
Regional Rank: [109]( ../standings_europe.md)<br />
Final Rank Value:  657.5<br />
<br />
Final Rank Value (657.5) = Starting Rank Value (659.8) + Head To Head Adjustments (-2.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.299[<sup>1</sup>](#table2)
- Bounty Collected: 0.233[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.135<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 659.8
- 400 + ( ( 0.135 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 659.8


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
|           17 |     2333 | 2024-01-16 | Endpoint        | L   | 0.554      | -            | -                | -                | -         |    -5.10 | birdfromsky, FASHR, JDC, syrsoN, VLDN |
|           16 |     2348 | 2024-01-16 | PGE Turow       | W   | 0.553      | 0.143        | 0.014 (0.001)    | 0.108 (0.009)    | 0 (0.000) |     9.80 | birdfromsky, FASHR, JDC, syrsoN, VLDN |
|           15 |     2447 | 2024-01-13 | ex-sYnck        | L   | 0.532      | -            | -                | -                | -         |    -6.14 | birdfromsky, FASHR, JDC, syrsoN, VLDN |
|           14 |     2523 | 2024-01-11 | IKLA            | L   | 0.519      | -            | -                | -                | -         |    -9.13 | birdfromsky, FASHR, JDC, syrsoN, VLDN |
|           13 |     2546 | 2024-01-10 | Viperio         | W   | 0.514      | 0.143        | 0.000 (0.000)    | 0.056 (0.004)    | 0 (0.000) |     4.91 | birdfromsky, FASHR, JDC, syrsoN, VLDN |
|           12 |     3041 | 2023-11-27 | ex-Anonymo      | L   | 0.218      | -            | -                | -                | -         |    -2.58 | birdfromsky, JDC, niko, susp, syrsoN  |
|           11 |     3140 | 2023-11-21 | EYEBALLERS      | L   | 0.179      | -            | -                | -                | -         |    -1.28 | birdfromsky, JDC, niko, susp, syrsoN  |
|           10 |     3259 | 2023-11-16 | Into the Breach | L   | 0.146      | -            | -                | -                | -         |    -1.42 | birdfromsky, JDC, niko, susp, syrsoN  |
|            9 |     3314 | 2023-11-15 | BIG             | L   | 0.138      | -            | -                | -                | -         |    -0.19 | birdfromsky, JDC, niko, susp, syrsoN  |
|            8 |     3342 | 2023-11-13 | Sprout          | W   | 0.127      | 0.589        | 0.010 (0.001)    | 0.221 (0.016)    | 0 (0.000) |     2.34 | birdfromsky, JDC, niko, susp, syrsoN  |
|            7 |     3503 | 2023-11-06 | GODSENT         | W   | 0.078      | 0.371        | 0.036 (0.001)    | 0.159 (0.005)    | 0 (0.000) |     1.67 | birdfromsky, JDC, niko, susp, syrsoN  |
|            6 |     3524 | 2023-11-05 | The Witchers    | W   | 0.071      | 0.371        | 0.038 (0.001)    | 0.172 (0.005)    | 0 (0.000) |     1.44 | birdfromsky, JDC, niko, susp, syrsoN  |
|            5 |     3552 | 2023-11-04 | ALTERNATE aTTaX | W   | 0.064      | 0.371        | 0.019 (0.000)    | 0.639 (0.015)    | 0 (0.000) |     1.48 | birdfromsky, JDC, niko, susp, syrsoN  |
|            4 |     3562 | 2023-11-03 | Sprout          | W   | 0.059      | 0.371        | 0.010 (0.000)    | 0.221 (0.005)    | 0 (0.000) |     1.10 | birdfromsky, JDC, niko, susp, syrsoN  |
|            3 |     3587 | 2023-11-02 | HAVU            | W   | 0.051      | 0.371        | 0.027 (0.001)    | 0.154 (0.003)    | 0 (0.000) |     1.14 | birdfromsky, JDC, niko, susp, syrsoN  |
|            2 |     3649 | 2023-10-31 | ex-Anonymo      | L   | 0.038      | -            | -                | -                | -         |    -0.43 | birdfromsky, JDC, niko, susp, syrsoN  |
|            1 |     3825 | 2023-10-26 | ECLOT           | W   | 0.005      | 0.371        | 0.019 (0.000)    | 0.028 (0.000)    | 0 (0.000) |     0.09 | birdfromsky, JDC, niko, susp, syrsoN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($860.97)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
