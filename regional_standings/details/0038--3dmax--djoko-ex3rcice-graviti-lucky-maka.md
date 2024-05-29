### Roster Details<br />
Team Name: 3DMAX<br />
Roster: Djoko, Ex3rcice, Graviti, Lucky, Maka<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [38](../standings_global.md)<br />
Regional Rank: [28]( ../standings_europe.md)<br />
Final Rank Value:  1140.3<br />
<br />
Final Rank Value (1140.3) = Starting Rank Value (1171.9) + Head To Head Adjustments (-31.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.505[<sup>1</sup>](#table2)
- Bounty Collected: 0.469[<sup>2</sup>](#table1)
- Opponent Network: 0.352[<sup>2</sup>](#table1)
- LAN Wins: 0.264[<sup>2</sup>](#table1)

The average of these factors is 0.398<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1171.9
- 400 + ( ( 0.398 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1171.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           50 |      100 | 2024-05-25 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |   -21.98 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           49 |      125 | 2024-05-23 | Zero Tenacity     | W   | 1.000      | 0.435        | 0.147 (0.064)    | 1.000 (0.435)    | 0 (0.000) |    11.64 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           48 |      337 | 2024-05-17 | B8                | L   | 1.000      | -            | -                | -                | -         |   -17.49 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           47 |      423 | 2024-05-15 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -22.66 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           46 |      620 | 2024-05-08 | G2                | L   | 1.000      | -            | -                | -                | -         |    -1.36 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           45 |      761 | 2024-05-01 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -15.91 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           44 |      787 | 2024-04-30 | BetBoom           | W   | 1.000      | 0.384        | 0.392 (0.151)    | 0.951 (0.366)    | 0 (0.000) |    21.85 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           43 |      794 | 2024-04-29 | PARIVISION        | W   | 0.999      | -            | -                | -                | 0 (0.000) |     7.92 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           42 |      842 | 2024-04-27 | Astralis          | L   | 0.985      | -            | -                | -                | -         |    -1.18 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           41 |      914 | 2024-04-24 | fnatic            | W   | 0.965      | 0.889        | 0.148 (0.127)    | 0.565 (0.485)    | 1 (0.965) |    13.61 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           40 |      939 | 2024-04-23 | SAW               | W   | 0.958      | 0.889        | 0.109 (0.093)    | 0.611 (0.520)    | 1 (0.958) |    21.41 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           39 |      949 | 2024-04-22 | ex-Guild Eagles   | W   | 0.952      | 0.384        | -                | 0.552 (0.202)    | 0 (0.000) |     8.43 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           38 |     1134 | 2024-04-17 | BLEED             | W   | 0.918      | 0.384        | 0.246 (0.087)    | 0.982 (0.346)    | 0 (0.000) |    17.17 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           37 |     1202 | 2024-04-14 | BetBoom           | L   | 0.898      | -            | -                | -                | -         |    -7.24 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           36 |     1217 | 2024-04-13 | ex-Preasy         | W   | 0.891      | -            | -                | -                | 0 (0.000) |     9.83 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           35 |     1259 | 2024-04-11 | Passion UA        | L   | 0.878      | -            | -                | -                | -         |   -20.66 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           34 |     1293 | 2024-04-10 | SINNERS           | L   | 0.873      | -            | -                | -                | -         |   -17.90 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           33 |     1342 | 2024-04-09 | SAW               | W   | 0.866      | 0.500        | 0.109 (0.047)    | 0.611 (0.265)    | 0 (0.000) |    20.95 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           32 |     1419 | 2024-04-07 | Young Ninjas      | W   | 0.851      | -            | -                | -                | -         |     5.21 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           31 |     1492 | 2024-04-04 | Space             | W   | 0.831      | -            | -                | -                | -         |     3.71 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           30 |     1521 | 2024-04-03 | GUN5              | W   | 0.826      | -            | -                | -                | -         |     2.31 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           29 |     1572 | 2024-04-02 | Permitta          | W   | 0.818      | 0.384        | -                | 1.000 (0.314)    | -         |     6.55 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           28 |     1628 | 2024-03-28 | Apeks             | W   | 0.785      | 0.500        | 0.083 (0.033)    | -                | -         |    14.01 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           27 |     1751 | 2024-03-21 | fnatic            | L   | 0.739      | -            | -                | -                | -         |   -11.22 | Djoko, Ex3rcice, Lucky, Maka, NBK-     |
|           26 |     1793 | 2024-03-19 | GUN5              | W   | 0.725      | -            | -                | -                | -         |     0.57 | Djoko, Ex3rcice, Lucky, Maka, NBK-     |
|           25 |     1864 | 2024-03-15 | B8                | W   | 0.699      | 0.500        | 0.165 (0.058)    | 1.000 (0.349)    | -         |    10.44 | Djoko, Ex3rcice, Lucky, Maka, misutaaa |
|           24 |     1932 | 2024-03-13 | PARIVISION        | L   | 0.686      | -            | -                | -                | -         |   -15.53 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           23 |     2145 | 2024-03-05 | FORZE             | L   | 0.632      | -            | -                | -                | -         |   -12.76 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           22 |     2167 | 2024-03-04 | fnatic            | L   | 0.625      | -            | -                | -                | -         |   -11.08 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           21 |     2205 | 2024-03-02 | Monte             | W   | 0.613      | 0.500        | 0.181 (0.055)    | -                | -         |    13.89 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           20 |     2242 | 2024-02-29 | Gaimin Gladiators | W   | 0.600      | 0.500        | 0.090 (0.027)    | 0.809 (0.243)    | -         |    11.71 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           19 |     2539 | 2024-02-16 | 9 Pandas          | L   | 0.512      | -            | -                | -                | -         |    -7.42 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           18 |     2564 | 2024-02-15 | Into the Breach   | W   | 0.506      | -            | -                | -                | 1 (0.506) |     1.60 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           17 |     2601 | 2024-02-14 | KOI               | L   | 0.499      | -            | -                | -                | -         |   -11.26 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           16 |     2607 | 2024-02-14 | Falcons           | L   | 0.498      | -            | -                | -                | -         |    -1.83 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           15 |     2656 | 2024-02-11 | Apeks             | L   | 0.479      | -            | -                | -                | -         |    -6.34 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           14 |     2679 | 2024-02-09 | fnatic            | W   | 0.466      | -            | -                | -                | -         |     6.60 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           13 |     2682 | 2024-02-09 | Endpoint          | W   | 0.465      | -            | -                | -                | -         |     2.83 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           12 |     2685 | 2024-02-09 | ex-Sprout         | L   | 0.465      | -            | -                | -                | -         |   -14.04 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           11 |     2872 | 2024-01-30 | Permitta          | L   | 0.399      | -            | -                | -                | -         |   -10.21 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           10 |     3026 | 2024-01-21 | ex-sYnck          | W   | 0.340      | -            | -                | -                | -         |     0.49 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            9 |     3034 | 2024-01-21 | ex-Preasy         | L   | 0.338      | -            | -                | -                | -         |    -8.52 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            8 |     3059 | 2024-01-20 | 9 Pandas          | L   | 0.333      | -            | -                | -                | -         |    -5.61 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            7 |     3079 | 2024-01-20 | Zero Tenacity     | W   | 0.331      | -            | -                | -                | -         |     3.45 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            6 |     3133 | 2024-01-19 | OG                | L   | 0.325      | -            | -                | -                | -         |    -4.71 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            5 |     3178 | 2024-01-18 | Cloud9            | L   | 0.319      | -            | -                | -                | -         |    -2.10 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            4 |     3191 | 2024-01-18 | JANO              | W   | 0.318      | -            | -                | -                | -         |     0.23 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            3 |     3734 | 2023-12-10 | FORZE             | W   | 0.059      | -            | -                | -                | -         |     0.11 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            2 |     3801 | 2023-12-07 | SINNERS           | W   | 0.040      | -            | -                | -                | -         |     0.32 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            1 |     3831 | 2023-12-06 | Apeks             | W   | 0.033      | -            | -                | -                | -         |     0.51 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($31,483.42)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-05-12 |      1.000 | $23,500.00     | $23,500.00      |
| 2024-05-02 |      1.000 | $1,500.00      | $1,500.00       |
| 2024-04-14 |      0.898 | $4,000.00      | $3,592.77       |
| 2023-12-10 |      0.059 | $15,000.00     | $890.65         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
