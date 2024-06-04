### Roster Details<br />
Team Name: Betera<br />
Roster: alex666, El1an, lollipop21k, MaSvAl, nifee<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [128](../standings_global.md)<br />
Regional Rank: [85]( ../standings_europe.md)<br />
Final Rank Value:  716.5<br />
<br />
Final Rank Value (716.5) = Starting Rank Value (707.8) + Head To Head Adjustments (8.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.265[<sup>1</sup>](#table2)
- Bounty Collected: 0.323[<sup>2</sup>](#table1)
- Opponent Network: 0.046[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.159<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 707.8
- 400 + ( ( 0.159 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 707.8


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
|           15 |     1291 | 2024-04-10 | brazylijski luz | L   | 0.873      | -            | -                | -                | -         |   -10.94 | alex666, El1an, lollipop21k, MaSvAl, nifee |
|           14 |     1350 | 2024-04-09 | TSM             | L   | 0.866      | -            | -                | -                | -         |   -12.80 | alex666, El1an, lollipop21k, MaSvAl, nifee |
|           13 |     1486 | 2024-04-04 | SAW             | L   | 0.832      | -            | -                | -                | -         |    -0.78 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|           12 |     1522 | 2024-04-03 | System5         | W   | 0.826      | 0.500        | 0.000 (0.000)    | 0.104 (0.043)    | 0 (0.000) |     6.21 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|           11 |     1624 | 2024-03-28 | Monte           | W   | 0.786      | 0.500        | 0.181 (0.071)    | 0.611 (0.240)    | 0 (0.000) |    23.62 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|           10 |     1862 | 2024-03-15 | PERA            | W   | 0.699      | 0.500        | 0.027 (0.009)    | 0.408 (0.143)    | 0 (0.000) |    15.78 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            9 |     1925 | 2024-03-13 | RUSH B          | L   | 0.686      | -            | -                | -                | -         |   -10.49 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            8 |     2149 | 2024-03-05 | Insilio         | L   | 0.632      | -            | -                | -                | -         |    -5.24 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            7 |     3381 | 2024-01-13 | ex-sYnck        | L   | 0.286      | -            | -                | -                | -         |    -5.81 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            6 |     3389 | 2024-01-13 | esmagaB         | W   | 0.285      | 0.143        | 0.008 (0.000)    | 0.258 (0.011)    | 0 (0.000) |     4.76 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            5 |     3428 | 2024-01-12 | PGE Turow       | W   | 0.280      | 0.143        | 0.003 (0.000)    | 0.058 (0.002)    | 0 (0.000) |     4.05 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            4 |     3476 | 2024-01-11 | ex-Anonymo      | L   | 0.272      | -            | -                | -                | -         |    -4.88 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            3 |     3479 | 2024-01-11 | Alliance        | W   | 0.271      | 0.143        | 0.004 (0.000)    | 0.617 (0.024)    | 0 (0.000) |     5.70 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            2 |     3490 | 2024-01-10 | supresse        | W   | 0.267      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.28 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            1 |     3551 | 2024-01-09 | KOI             | L   | 0.259      | -            | -                | -                | -         |    -1.74 | alex666, lollipop21k, MaSvAl, nifee, sad   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($500.00)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
