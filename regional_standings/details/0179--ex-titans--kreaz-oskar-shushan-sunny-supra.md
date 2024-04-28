### Roster Details<br />
Team Name: ex-TITANS<br />
Roster: kreaz, oskar, shushan, suNny, supra<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [179](../standings_global.md)<br />
Regional Rank: [117]( ../standings_europe.md)<br />
Final Rank Value:  644.2<br />
<br />
Final Rank Value (644.2) = Starting Rank Value (635.3) + Head To Head Adjustments (8.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.226[<sup>1</sup>](#table2)
- Bounty Collected: 0.229[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.115<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 635.3
- 400 + ( ( 0.115 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 635.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     2138 | 2022-10-15 | 9INE                 | L   | 0.399      | -            | -                | -                | -         |    -2.29 | kreaz, oskar, shushan, suNny, supra       |
|           15 |     2173 | 2022-10-14 | BLUEJAYS             | L   | 0.394      | -            | -                | -                | -         |    -1.12 | kreaz, oskar, shushan, suNny, supra       |
|           14 |     2260 | 2022-10-12 | ex-Into the Breach   | L   | 0.379      | -            | -                | -                | -         |    -3.01 | oskar, rallen, shushan, suNny, supra      |
|           13 |     2443 | 2022-10-02 | Young Ninjas         | W   | 0.313      | 0.143        | 0.076 (0.003)    | 0.694 (0.031)    | 0 (0.000) |     8.27 | adamb, eraa, maxster, nilo, ztr           |
|           12 |     2491 | 2022-09-30 | IMMA PROBLEM         | W   | 0.300      | 0.143        | 0.000 (0.000)    | 0.012 (0.001)    | 0 (0.000) |     2.97 | oskar, rallen, suNny, supra, Synyx        |
|           11 |     2497 | 2022-09-30 | SKADE X              | W   | 0.299      | 0.143        | 0.002 (0.000)    | 0.084 (0.004)    | 0 (0.000) |     4.93 | oskar, rallen, suNny, supra, Synyx        |
|           10 |     2993 | 2022-09-14 | los kogutos          | L   | 0.193      | -            | -                | -                | -         |    -1.83 | darchevile, Enzo, kRaSnaL, maaryy, tomiko |
|            9 |     3022 | 2022-09-13 | Nexus                | L   | 0.187      | -            | -                | -                | -         |    -1.68 | MSL, Nodios, oskar, suNny, supra          |
|            8 |     3031 | 2022-09-13 | Eternal Fire Academy | W   | 0.186      | 0.143        | 0.000 (0.000)    | 0.116 (0.003)    | 0 (0.000) |     2.16 | Cizzx, cyber, EMSTAR, jottAAA, zeK        |
|            7 |     3211 | 2022-09-08 | 1WIN                 | L   | 0.154      | -            | -                | -                | -         |    -1.06 | MSL, Nodios, oskar, suNny, supra          |
|            6 |     3251 | 2022-09-06 | sYnck                | L   | 0.140      | -            | -                | -                | -         |    -1.49 | consss, eku, fejtZ, MakiG, Wahtzz         |
|            5 |     3261 | 2022-09-05 | ECLOT                | L   | 0.134      | -            | -                | -                | -         |    -0.45 | capseN, Dytor, K1-FiDa, nbqq, Valencio    |
|            4 |     3266 | 2022-09-05 | ROYALS               | W   | 0.132      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.87 | CHANKY, MistFire, PALM1, Sterzig, zykes   |
|            3 |     3269 | 2022-09-05 | ECLOT                | L   | 0.132      | -            | -                | -                | -         |    -0.45 | MSL, Nodios, oskar, suNny, supra          |
|            2 |     3281 | 2022-09-04 | SINNERS              | L   | 0.127      | -            | -                | -                | -         |    -0.42 | beastik, forsyy, SHOCK, ZEDKO, Zero       |
|            1 |     3296 | 2022-09-04 | ECLOT                | W   | 0.125      | 0.143        | 0.046 (0.001)    | 0.584 (0.010)    | 0 (0.000) |     3.52 | MSL, Nodios, oskar, suNny, supra          |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($177.93)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
