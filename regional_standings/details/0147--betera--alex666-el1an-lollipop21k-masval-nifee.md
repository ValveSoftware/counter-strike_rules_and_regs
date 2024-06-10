### Roster Details<br />
Team Name: Betera<br />
Roster: alex666, El1an, lollipop21k, MaSvAl, nifee<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [147](../standings_global.md)<br />
Regional Rank: [97]( ../standings_europe.md)<br />
Final Rank Value:  722.7<br />
<br />
Final Rank Value (722.7) = Starting Rank Value (711.4) + Head To Head Adjustments (11.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.264[<sup>1</sup>](#table2)
- Bounty Collected: 0.318[<sup>2</sup>](#table1)
- Opponent Network: 0.043[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.156<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 711.4
- 400 + ( ( 0.156 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 711.4


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
|           15 |     1791 | 2024-04-10 | brazylijski luz | L   | 0.794      | -            | -                | -                | -         |    -9.46 | alex666, El1an, lollipop21k, MaSvAl, nifee |
|           14 |     1850 | 2024-04-09 | TSM             | L   | 0.787      | -            | -                | -                | -         |   -11.73 | alex666, El1an, lollipop21k, MaSvAl, nifee |
|           13 |     1986 | 2024-04-04 | SAW             | L   | 0.753      | -            | -                | -                | -         |    -0.73 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|           12 |     2022 | 2024-04-03 | System5         | W   | 0.747      | 0.500        | 0.000 (0.000)    | 0.092 (0.034)    | 0 (0.000) |     5.56 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|           11 |     2124 | 2024-03-28 | Monte           | W   | 0.707      | 0.500        | 0.179 (0.063)    | 0.686 (0.242)    | 0 (0.000) |    21.27 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|           10 |     2362 | 2024-03-15 | PERA            | W   | 0.620      | 0.500        | 0.024 (0.008)    | 0.417 (0.129)    | 0 (0.000) |    14.57 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            9 |     2425 | 2024-03-13 | RUSH B          | L   | 0.607      | -            | -                | -                | -         |    -6.28 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            8 |     2649 | 2024-03-05 | Insilio         | L   | 0.553      | -            | -                | -                | -         |    -4.05 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            7 |     3881 | 2024-01-13 | ex-sYnck        | L   | 0.207      | -            | -                | -                | -         |    -4.91 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            6 |     3889 | 2024-01-13 | esmagaB         | W   | 0.206      | 0.143        | 0.008 (0.000)    | 0.211 (0.006)    | 0 (0.000) |     3.39 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            5 |     3928 | 2024-01-12 | PGE Turow       | W   | 0.201      | 0.143        | 0.002 (0.000)    | 0.048 (0.001)    | 0 (0.000) |     2.94 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            4 |     3976 | 2024-01-11 | ex-Anonymo      | L   | 0.192      | -            | -                | -                | -         |    -3.72 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            3 |     3979 | 2024-01-11 | Alliance        | W   | 0.192      | 0.143        | 0.012 (0.000)    | 0.513 (0.014)    | 0 (0.000) |     4.47 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            2 |     3990 | 2024-01-10 | supresse        | W   | 0.187      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.88 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            1 |     4051 | 2024-01-09 | KOI             | L   | 0.179      | -            | -                | -                | -         |    -0.90 | alex666, lollipop21k, MaSvAl, nifee, sad   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($500.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
