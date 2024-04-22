### Roster Details<br />
Team Name: Betera<br />
Roster: alex666, El1an, lollipop21k, MaSvAl, nifee<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [122](../standings_global.md)<br />
Regional Rank: [83]( ../standings_europe.md)<br />
Final Rank Value:  751.2<br />
<br />
Final Rank Value (751.2) = Starting Rank Value (742.1) + Head To Head Adjustments (9.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.296[<sup>1</sup>](#table2)
- Bounty Collected: 0.348[<sup>2</sup>](#table1)
- Opponent Network: 0.064[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.177<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 742.1
- 400 + ( ( 0.177 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 742.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |      344 | 2024-04-10 | brazylijski luz | L   | 1.000      | -            | -                | -                | -         |   -13.30 | alex666, El1an, lollipop21k, MaSvAl, nifee |
|           18 |      403 | 2024-04-09 | TSM             | L   | 1.000      | -            | -                | -                | -         |   -14.91 | alex666, El1an, lollipop21k, MaSvAl, nifee |
|           17 |      539 | 2024-04-04 | SAW             | L   | 1.000      | -            | -                | -                | -         |    -1.60 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|           16 |      575 | 2024-04-03 | System5         | W   | 1.000      | 0.500        | 0.000 (0.000)    | 0.085 (0.042)    | 0 (0.000) |     6.59 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|           15 |      677 | 2024-03-28 | Monte           | W   | 1.000      | 0.500        | 0.236 (0.118)    | 0.598 (0.299)    | 0 (0.000) |    28.77 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|           14 |      915 | 2024-03-15 | PERA            | W   | 0.947      | 0.500        | 0.025 (0.012)    | 0.424 (0.201)    | 0 (0.000) |    18.51 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|           13 |      978 | 2024-03-13 | RUSH B          | L   | 0.934      | -            | -                | -                | -         |   -13.73 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|           12 |     1202 | 2024-03-05 | Insilio         | L   | 0.879      | -            | -                | -                | -         |   -12.25 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|           11 |     2434 | 2024-01-13 | ex-sYnck        | L   | 0.533      | -            | -                | -                | -         |    -8.26 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|           10 |     2442 | 2024-01-13 | esmagaB         | W   | 0.532      | 0.143        | 0.015 (0.001)    | 0.342 (0.026)    | 0 (0.000) |     8.79 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            9 |     2481 | 2024-01-12 | PGE Turow       | W   | 0.527      | 0.143        | 0.014 (0.001)    | 0.108 (0.008)    | 0 (0.000) |     7.41 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            8 |     2529 | 2024-01-11 | ex-Anonymo      | L   | 0.519      | -            | -                | -                | -         |    -7.66 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            7 |     2532 | 2024-01-11 | Alliance        | W   | 0.519      | 0.143        | 0.020 (0.001)    | 0.855 (0.063)    | 0 (0.000) |    11.39 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            6 |     2543 | 2024-01-10 | supresse        | W   | 0.514      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.10 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            5 |     2604 | 2024-01-09 | KOI             | L   | 0.506      | -            | -                | -                | -         |    -2.59 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            4 |     3399 | 2023-11-11 | KOI             | L   | 0.114      | -            | -                | -                | -         |    -0.57 | Ganginho, lollipop21k, MaSvAl, nifee, sad  |
|            3 |     3454 | 2023-11-08 | EYEBALLERS      | L   | 0.094      | -            | -                | -                | -         |    -0.91 | Ganginho, lollipop21k, MaSvAl, nifee, sad  |
|            2 |     3480 | 2023-11-07 | PARIVISION      | W   | 0.087      | 0.500        | 0.002 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     1.09 | Ganginho, lollipop21k, MaSvAl, nifee, sad  |
|            1 |     3605 | 2023-11-01 | ORKS            | W   | 0.047      | 0.500        | 0.000 (0.000)    | 0.016 (0.000)    | 0 (0.000) |     0.28 | Ganginho, lollipop21k, MaSvAl, nifee, sad  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($806.78)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-20 |      1.000 | $500.00        | $500.00         |
| 2023-12-10 |      0.307 | $1,000.00      | $306.78         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
