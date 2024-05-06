### Roster Details<br />
Team Name: GamerLegion<br />
Roster: aNdu, isak, sl3nd, Snax, volt<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [20](../standings_global.md)<br />
Regional Rank: [14]( ../standings_europe.md)<br />
Final Rank Value:  1380.6<br />
<br />
Final Rank Value (1380.6) = Starting Rank Value (1494.2) + Head To Head Adjustments (-113.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.578[<sup>1</sup>](#table2)
- Bounty Collected: 0.545[<sup>2</sup>](#table1)
- Opponent Network: 0.264[<sup>2</sup>](#table1)
- LAN Wins: 0.910[<sup>2</sup>](#table1)

The average of these factors is 0.574<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1494.2
- 400 + ( ( 0.574 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1494.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |       56 | 2024-05-03 | ENCE         | W   | 1.000      | 0.889        | 0.360 (0.320)    | 0.450 (0.400)    | 1 (1.000) |    15.64 | aNdu, isak, sl3nd, Snax, volt  |
|           41 |       73 | 2024-05-02 | FORZE        | W   | 1.000      | 0.889        | 0.205 (0.182)    | 0.682 (0.606)    | 1 (1.000) |     7.65 | aNdu, isak, sl3nd, Snax, volt  |
|           40 |      105 | 2024-05-01 | MOUZ         | L   | 1.000      | -            | -                | -                | -         |    -1.81 | aNdu, isak, sl3nd, Snax, volt  |
|           39 |      133 | 2024-04-30 | ENCE         | W   | 1.000      | 0.889        | 0.360 (0.320)    | 0.450 (0.400)    | 1 (1.000) |    16.73 | aNdu, isak, sl3nd, Snax, volt  |
|           38 |      348 | 2024-04-20 | BIG          | L   | 1.000      | -            | -                | -                | -         |   -15.02 | aNdu, Goody, sl3nd, Snax, volt |
|           37 |      438 | 2024-04-18 | Sashi        | L   | 1.000      | -            | -                | -                | -         |   -27.52 | aNdu, isak, sl3nd, Snax, volt  |
|           36 |      515 | 2024-04-16 | MOUZ NXT     | W   | 1.000      | 0.384        | 0.210 (0.081)    | 1.000 (0.384)    | -         |     4.22 | aNdu, isak, sl3nd, Snax, volt  |
|           35 |      907 | 2024-04-02 | Monte        | L   | 0.974      | -            | -                | -                | -         |   -20.19 | aNdu, isak, sl3nd, Snax, volt  |
|           34 |      916 | 2024-04-02 | Blessed      | L   | 0.973      | -            | -                | -                | -         |   -29.65 | aNdu, isak, sl3nd, Snax, volt  |
|           33 |      936 | 2024-04-01 | GUN5         | W   | 0.965      | -            | -                | -                | -         |     0.29 | aNdu, isak, sl3nd, Snax, volt  |
|           32 |     1126 | 2024-03-20 | Imperial     | L   | 0.886      | -            | -                | -                | -         |    -8.35 | acoR, isak, Keoz, Snax, volt   |
|           31 |     1144 | 2024-03-19 | Eternal Fire | L   | 0.879      | -            | -                | -                | -         |    -5.22 | acoR, isak, Keoz, Snax, volt   |
|           30 |     1154 | 2024-03-18 | Legacy       | W   | 0.872      | -            | -                | -                | 1 (0.872) |     3.71 | acoR, isak, Keoz, Snax, volt   |
|           29 |     1163 | 2024-03-17 | SAW          | L   | 0.867      | -            | -                | -                | -         |   -13.27 | acoR, isak, Keoz, Snax, volt   |
|           28 |     1179 | 2024-03-17 | AMKAL        | W   | 0.866      | 0.143        | -                | 0.851 (0.105)    | 1 (0.866) |     4.61 | acoR, isak, Keoz, Snax, volt   |
|           27 |     1395 | 2024-03-08 | BIG          | L   | 0.806      | -            | -                | -                | -         |   -15.69 | acoR, isak, Keoz, Snax, volt   |
|           26 |     1702 | 2024-02-24 | 9 Pandas     | L   | 0.719      | -            | -                | -                | -         |   -19.35 | acoR, isak, Keoz, Snax, volt   |
|           25 |     1711 | 2024-02-24 | Guild Eagles | W   | 0.718      | 0.143        | -                | 0.648 (0.066)    | 1 (0.718) |     1.86 | acoR, isak, Keoz, Snax, volt   |
|           24 |     1717 | 2024-02-23 | fnatic       | W   | 0.713      | 0.143        | 0.327 (0.033)    | 0.677 (0.069)    | 1 (0.713) |     3.71 | acoR, isak, Keoz, Snax, volt   |
|           23 |     1735 | 2024-02-22 | HEROIC       | L   | 0.706      | -            | -                | -                | -         |    -6.83 | acoR, isak, Keoz, Snax, volt   |
|           22 |     1761 | 2024-02-21 | OG           | W   | 0.699      | 0.143        | 0.580 (0.058)    | -                | 1 (0.699) |     5.77 | acoR, isak, Keoz, Snax, volt   |
|           21 |     1792 | 2024-02-20 | ENCE         | L   | 0.691      | -            | -                | -                | -         |   -10.81 | acoR, isak, Keoz, Snax, volt   |
|           20 |     1814 | 2024-02-19 | PERA         | W   | 0.686      | -            | -                | -                | 1 (0.686) |     0.97 | acoR, isak, Keoz, Snax, volt   |
|           19 |     1823 | 2024-02-19 | Vitality     | L   | 0.684      | -            | -                | -                | -         |    -2.53 | acoR, isak, Keoz, Snax, volt   |
|           18 |     2065 | 2024-02-06 | HEROIC       | L   | 0.599      | -            | -                | -                | -         |    -6.14 | acoR, isak, Keoz, Snax, volt   |
|           17 |     2071 | 2024-02-05 | MOUZ         | L   | 0.593      | -            | -                | -                | -         |    -2.40 | acoR, isak, Keoz, Snax, volt   |
|           16 |     2097 | 2024-02-04 | Monte        | W   | 0.585      | 1.000        | 0.188 (0.110)    | 0.589 (0.345)    | 1 (0.585) |     6.20 | acoR, isak, Keoz, Snax, volt   |
|           15 |     2183 | 2024-02-01 | Virtus.pro   | W   | 0.565      | 0.143        | 0.438 (0.035)    | -                | -         |    14.38 | acoR, isak, Keoz, Snax, volt   |
|           14 |     2197 | 2024-01-31 | M80          | W   | 0.559      | -            | -                | -                | -         |     4.00 | acoR, isak, Keoz, Snax, volt   |
|           13 |     2265 | 2024-01-26 | FaZe         | L   | 0.527      | -            | -                | -                | -         |    -0.90 | acoR, isak, Keoz, Snax, volt   |
|           12 |     2293 | 2024-01-25 | Liquid       | L   | 0.518      | -            | -                | -                | -         |   -10.46 | acoR, isak, Keoz, Snax, volt   |
|           11 |     2311 | 2024-01-24 | FaZe         | W   | 0.512      | 0.581        | 1.000 (0.297)    | 0.712 (0.212)    | -         |    15.28 | acoR, isak, Keoz, Snax, volt   |
|           10 |     3023 | 2023-12-15 | Complexity   | L   | 0.249      | -            | -                | -                | -         |    -2.80 | acoR, aNdu, isak, Keoz, Snax   |
|            9 |     3038 | 2023-12-15 | Apeks        | L   | 0.247      | -            | -                | -                | -         |    -5.35 | acoR, aNdu, isak, Keoz, Snax   |
|            8 |     3182 | 2023-12-06 | BetBoom      | L   | 0.187      | -            | -                | -                | -         |    -3.22 | acoR, isak, Keoz, Snax, volt   |
|            7 |     3226 | 2023-12-05 | Cloud9       | L   | 0.178      | -            | -                | -                | -         |    -1.68 | acoR, isak, Keoz, Snax, volt   |
|            6 |     3288 | 2023-12-01 | ENCE         | L   | 0.153      | -            | -                | -                | -         |    -4.72 | acoR, isak, Keoz, Snax, volt   |
|            5 |     3316 | 2023-11-29 | HAVU         | L   | 0.139      | -            | -                | -                | -         |    -4.29 | acoR, isak, Keoz, Snax, volt   |
|            4 |     3320 | 2023-11-29 | fnatic       | W   | 0.138      | 0.589        | 0.327 (0.027)    | 0.677 (0.055)    | -         |     0.73 | acoR, isak, Keoz, Snax, volt   |
|            3 |     3376 | 2023-11-25 | Virtus.pro   | L   | 0.112      | -            | -                | -                | -         |    -0.75 | acoR, isak, Keoz, Snax, volt   |
|            2 |     3381 | 2023-11-24 | 3DMAX        | W   | 0.107      | -            | -                | -                | -         |     0.55 | acoR, isak, Keoz, Snax, volt   |
|            1 |     3393 | 2023-11-24 | MIBR         | L   | 0.105      | -            | -                | -                | -         |    -0.92 | acoR, isak, Keoz, Snax, volt   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($30,235.70)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.19) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-20 |      0.887 | $10,000.00     | $8,865.38       |
| 2024-03-10 |      0.821 | $5,000.00      | $4,102.93       |
| 2024-02-11 |      0.633 | $16,000.00     | $10,130.24      |
| 2024-01-28 |      0.540 | $8,500.00      | $4,589.25       |
| 2023-12-17 |      0.261 | $2,000.00      | $522.01         |
| 2023-12-03 |      0.167 | $10,000.00     | $1,665.93       |
| 2023-11-26 |      0.120 | $3,000.00      | $359.96         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
