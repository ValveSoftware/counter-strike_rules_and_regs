### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: alex, isak, maxster, r1nkle, REZ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [50](../standings_global.md)<br />
Regional Rank: [37]( ../standings_europe.md)<br />
Final Rank Value:  1033.8<br />
<br />
Final Rank Value (1033.8) = Starting Rank Value (1056.3) + Head To Head Adjustments (-22.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.519[<sup>1</sup>](#table2)
- Bounty Collected: 0.429[<sup>2</sup>](#table1)
- Opponent Network: 0.187[<sup>2</sup>](#table1)
- LAN Wins: 0.217[<sup>2</sup>](#table1)

The average of these factors is 0.338<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1056.3
- 400 + ( ( 0.338 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1056.3


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
|           20 |      262 | 2024-05-19 | Sangal          | L   | 1.000      | -            | -                | -                | -         |   -17.36 | alex, isak, maxster, r1nkle, REZ               |
|           19 |      288 | 2024-05-18 | Metizport       | L   | 1.000      | -            | -                | -                | -         |   -16.65 | alex, isak, maxster, r1nkle, REZ               |
|           18 |      363 | 2024-05-16 | Sangal          | W   | 1.000      | 0.500        | 0.166 (0.083)    | 0.911 (0.455)    | 0 (0.000) |    12.09 | alex, isak, maxster, r1nkle, REZ               |
|           17 |      681 | 2024-05-05 | FlyQuest        | L   | 1.000      | -            | -                | -                | -         |    -3.91 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           16 |      688 | 2024-05-04 | HEROIC          | W   | 1.000      | 0.889        | 0.322 (0.286)    | 0.662 (0.589)    | 1 (1.000) |    30.17 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           15 |      702 | 2024-05-03 | BOSS            | W   | 1.000      | 0.889        | 0.016 (0.014)    | 0.477 (0.424)    | 1 (1.000) |     8.52 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           14 |      730 | 2024-05-02 | PERA            | L   | 1.000      | -            | -                | -                | -         |   -22.88 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           13 |      777 | 2024-04-30 | HEROIC          | L   | 1.000      | -            | -                | -                | -         |    -1.00 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           12 |     1086 | 2024-04-18 | brazylijski luz | L   | 0.925      | -            | -                | -                | -         |   -23.23 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|           11 |     1230 | 2024-04-12 | OG              | L   | 0.885      | -            | -                | -                | -         |    -8.35 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|           10 |     1256 | 2024-04-11 | BetBoom         | L   | 0.879      | -            | -                | -                | -         |    -5.10 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            9 |     1353 | 2024-04-09 | Gods Reign      | W   | 0.865      | 0.684        | 0.082 (0.048)    | 0.228 (0.135)    | 0 (0.000) |     6.91 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            8 |     1483 | 2024-04-04 | Aurora          | L   | 0.833      | -            | -                | -                | -         |    -3.56 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            7 |     1491 | 2024-04-04 | Metizport       | W   | 0.832      | 0.143        | 0.088 (0.010)    | 0.860 (0.102)    | 0 (0.000) |    11.90 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            6 |     1524 | 2024-04-03 | Aurora          | L   | 0.826      | -            | -                | -                | -         |    -3.44 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            5 |     1539 | 2024-04-03 | Sampi           | L   | 0.824      | -            | -                | -                | -         |   -17.93 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            4 |     1563 | 2024-04-02 | FAVBET          | W   | 0.819      | 0.143        | 0.004 (0.000)    | 0.257 (0.030)    | 0 (0.000) |     4.18 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            3 |     1568 | 2024-04-02 | Monte           | W   | 0.818      | 0.143        | 0.181 (0.021)    | 0.611 (0.071)    | 0 (0.000) |    17.84 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            2 |     1658 | 2024-03-27 | 500             | W   | 0.780      | 0.143        | 0.002 (0.000)    | 0.436 (0.049)    | 0 (0.000) |     4.86 | alex, BluePho3nix, maxster, REZ, Silence       |
|            1 |     1664 | 2024-03-27 | Verdant         | W   | 0.779      | 0.143        | 0.013 (0.001)    | 0.162 (0.018)    | 0 (0.000) |     4.48 | alex, BluePho3nix, maxster, REZ, Silence       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($35,594.36)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      1.000 | $12,000.00     | $12,000.00      |
| 2024-04-14 |      0.899 | $26,250.00     | $23,594.36      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
