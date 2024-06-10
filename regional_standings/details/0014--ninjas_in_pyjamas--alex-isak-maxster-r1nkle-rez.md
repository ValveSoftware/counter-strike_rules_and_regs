### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: alex, isak, maxster, r1nkle, REZ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [14](../standings_global.md)<br />
Regional Rank: [11]( ../standings_europe.md)<br />
Final Rank Value:  1523.1<br />
<br />
Final Rank Value (1523.1) = Starting Rank Value (1635.4) + Head To Head Adjustments (-112.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.653[<sup>1</sup>](#table2)
- Bounty Collected: 0.562[<sup>2</sup>](#table1)
- Opponent Network: 0.422[<sup>2</sup>](#table1)
- LAN Wins: 0.842[<sup>2</sup>](#table1)

The average of these factors is 0.620<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1635.4
- 400 + ( ( 0.620 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1635.4


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
|           28 |       46 | 2024-06-09 | The MongolZ     | L   | 1.000      | -            | -                | -                | -         |    -4.75 | alex, isak, maxster, r1nkle, REZ               |
|           27 |      112 | 2024-06-08 | FURIA           | W   | 1.000      | 0.715        | 0.249 (0.178)    | 0.590 (0.422)    | 1 (1.000) |    14.87 | alex, isak, maxster, r1nkle, REZ               |
|           26 |      162 | 2024-06-07 | fnatic          | W   | 1.000      | 0.715        | 0.198 (0.142)    | 0.650 (0.465)    | 1 (1.000) |     8.19 | alex, isak, maxster, r1nkle, REZ               |
|           25 |      228 | 2024-06-06 | Sashi           | W   | 1.000      | 0.715        | 0.174 (0.125)    | 1.000 (0.715)    | 1 (1.000) |     6.67 | alex, isak, maxster, r1nkle, REZ               |
|           24 |      250 | 2024-06-06 | The MongolZ     | L   | 1.000      | -            | -                | -                | -         |    -4.32 | alex, isak, maxster, r1nkle, REZ               |
|           23 |      262 | 2024-06-06 | Astralis        | W   | 1.000      | 0.715        | 0.474 (0.339)    | 0.537 (0.384)    | 1 (1.000) |    27.59 | alex, isak, maxster, r1nkle, REZ               |
|           22 |      296 | 2024-06-05 | HEROIC          | W   | 1.000      | 0.715        | 0.362 (0.259)    | 0.635 (0.454)    | 1 (1.000) |    24.14 | alex, isak, maxster, r1nkle, REZ               |
|           21 |      313 | 2024-06-05 | ENCE            | W   | 1.000      | 0.715        | 0.205 (0.147)    | 0.407 (0.291)    | 1 (1.000) |     9.22 | alex, isak, maxster, r1nkle, REZ               |
|           20 |      762 | 2024-05-19 | Sangal          | L   | 1.000      | -            | -                | -                | -         |   -28.02 | alex, isak, maxster, r1nkle, REZ               |
|           19 |      788 | 2024-05-18 | Metizport       | L   | 1.000      | -            | -                | -                | -         |   -28.41 | alex, isak, maxster, r1nkle, REZ               |
|           18 |      863 | 2024-05-16 | Sangal          | W   | 1.000      | 0.500        | 0.214 (0.107)    | 0.998 (0.499)    | 0 (0.000) |     2.37 | alex, isak, maxster, r1nkle, REZ               |
|           17 |     1181 | 2024-05-05 | FlyQuest        | L   | 0.958      | -            | -                | -                | -         |   -18.54 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           16 |     1188 | 2024-05-04 | HEROIC          | W   | 0.953      | 0.889        | 0.362 (0.306)    | 0.635 (0.538)    | 1 (0.953) |    22.11 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           15 |     1202 | 2024-05-03 | BOSS            | W   | 0.947      | 0.889        | -                | 0.407 (0.343)    | 1 (0.947) |     0.90 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           14 |     1230 | 2024-05-02 | PERA            | L   | 0.940      | -            | -                | -                | -         |   -28.65 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           13 |     1277 | 2024-04-30 | HEROIC          | L   | 0.926      | -            | -                | -                | -         |    -6.94 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           12 |     1586 | 2024-04-18 | brazylijski luz | L   | 0.846      | -            | -                | -                | -         |   -26.16 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|           11 |     1730 | 2024-04-12 | OG              | L   | 0.806      | -            | -                | -                | -         |   -22.08 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|           10 |     1756 | 2024-04-11 | BetBoom         | L   | 0.799      | -            | -                | -                | -         |   -13.03 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            9 |     1853 | 2024-04-09 | Gods Reign      | W   | 0.786      | 0.684        | 0.073 (0.039)    | 0.198 (0.107)    | 0 (0.000) |     0.46 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            8 |     1983 | 2024-04-04 | Aurora          | L   | 0.753      | -            | -                | -                | -         |   -14.14 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            7 |     1991 | 2024-04-04 | Metizport       | W   | 0.753      | -            | -                | -                | -         |     1.09 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            6 |     2024 | 2024-04-03 | Aurora          | L   | 0.747      | -            | -                | -                | -         |   -14.89 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            5 |     2039 | 2024-04-03 | Sampi           | L   | 0.745      | -            | -                | -                | -         |   -22.89 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            4 |     2063 | 2024-04-02 | FAVBET          | W   | 0.740      | -            | -                | -                | -         |     0.24 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            3 |     2068 | 2024-04-02 | Monte           | W   | 0.739      | 0.143        | 0.179 (0.019)    | -                | -         |     2.27 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            2 |     2158 | 2024-03-27 | 500             | W   | 0.700      | -            | -                | -                | -         |     0.23 | alex, BluePho3nix, maxster, REZ, Silence       |
|            1 |     2164 | 2024-03-27 | Verdant         | W   | 0.700      | -            | -                | -                | -         |     0.25 | alex, BluePho3nix, maxster, REZ, Silence       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($89,516.09)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.29) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $56,000.00     | $56,000.00      |
| 2024-05-12 |      1.000 | $12,000.00     | $12,000.00      |
| 2024-04-14 |      0.820 | $26,250.00     | $21,516.09      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
