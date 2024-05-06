### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: alex, BluePho3nix, maxster, r1nkle, xKacpersky<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [42](../standings_global.md)<br />
Regional Rank: [30]( ../standings_europe.md)<br />
Final Rank Value:  1086.4<br />
<br />
Final Rank Value (1086.4) = Starting Rank Value (1083.7) + Head To Head Adjustments (2.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.615[<sup>1</sup>](#table2)
- Bounty Collected: 0.439[<sup>2</sup>](#table1)
- Opponent Network: 0.159[<sup>2</sup>](#table1)
- LAN Wins: 0.224[<sup>2</sup>](#table1)

The average of these factors is 0.359<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1083.7
- 400 + ( ( 0.359 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1083.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |       30 | 2024-05-05 | FlyQuest        | L   | 1.000      | -            | -                | -                | -         |    -5.51 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           16 |       37 | 2024-05-04 | HEROIC          | W   | 1.000      | 0.889        | 0.347 (0.309)    | 0.712 (0.633)    | 1 (1.000) |    29.51 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           15 |       51 | 2024-05-03 | BOSS            | W   | 1.000      | 0.889        | 0.049 (0.044)    | 0.507 (0.451)    | 1 (1.000) |     7.83 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           14 |       79 | 2024-05-02 | PERA            | L   | 1.000      | -            | -                | -                | -         |   -22.77 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           13 |      126 | 2024-04-30 | HEROIC          | L   | 1.000      | -            | -                | -                | -         |    -1.56 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           12 |      435 | 2024-04-18 | brazylijski luz | L   | 1.000      | -            | -                | -                | -         |   -24.71 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|           11 |      579 | 2024-04-12 | OG              | L   | 1.000      | -            | -                | -                | -         |    -6.78 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|           10 |      605 | 2024-04-11 | BetBoom         | L   | 1.000      | -            | -                | -                | -         |    -6.46 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            9 |      702 | 2024-04-09 | Gods Reign      | W   | 1.000      | 0.684        | 0.169 (0.115)    | 0.232 (0.159)    | 0 (0.000) |     9.05 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            8 |      832 | 2024-04-04 | Aurora          | L   | 0.987      | -            | -                | -                | -         |    -3.51 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            7 |      840 | 2024-04-04 | Metizport       | W   | 0.986      | 0.143        | 0.183 (0.026)    | 1.000 (0.141)    | 0 (0.000) |    14.55 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            6 |      873 | 2024-04-03 | Aurora          | L   | 0.980      | -            | -                | -                | -         |    -3.36 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            5 |      888 | 2024-04-03 | Sampi           | L   | 0.978      | -            | -                | -                | -         |   -20.59 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            4 |      912 | 2024-04-02 | Blessed         | W   | 0.973      | 0.143        | 0.008 (0.001)    | 0.285 (0.040)    | 0 (0.000) |     4.94 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            3 |      917 | 2024-04-02 | Monte           | W   | 0.972      | 0.143        | 0.188 (0.026)    | 0.589 (0.082)    | 0 (0.000) |    22.18 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            2 |     1007 | 2024-03-27 | 500             | W   | 0.934      | 0.143        | 0.003 (0.000)    | 0.578 (0.077)    | 0 (0.000) |     6.16 | alex, BluePho3nix, maxster, REZ, Silence       |
|            1 |     1013 | 2024-03-27 | Verdant         | W   | 0.933      | 0.143        | 0.022 (0.003)    | 0.061 (0.008)    | 0 (0.000) |     3.72 | alex, BluePho3nix, maxster, REZ, Silence       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($38,250.00)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.24) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-05 |      1.000 | $12,000.00     | $12,000.00      |
| 2024-04-14 |      1.000 | $26,250.00     | $26,250.00      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
