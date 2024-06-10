### Roster Details<br />
Team Name: GamerLegion<br />
Roster: acoR, isak, Keoz, Snax, volt<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [43](../standings_global.md)<br />
Regional Rank: [31]( ../standings_europe.md)<br />
Final Rank Value:  1152.7<br />
<br />
Final Rank Value (1152.7) = Starting Rank Value (1089.7) + Head To Head Adjustments (63.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.451[<sup>1</sup>](#table2)
- Bounty Collected: 0.396[<sup>2</sup>](#table1)
- Opponent Network: 0.063[<sup>2</sup>](#table1)
- LAN Wins: 0.473[<sup>2</sup>](#table1)

The average of these factors is 0.346<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1089.7
- 400 + ( ( 0.346 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1089.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |     2277 | 2024-03-20 | Imperial     | L   | 0.653      | -            | -                | -                | -         |    -2.75 | acoR, isak, Keoz, Snax, volt |
|           23 |     2295 | 2024-03-19 | Eternal Fire | L   | 0.645      | -            | -                | -                | -         |    -0.45 | acoR, isak, Keoz, Snax, volt |
|           22 |     2305 | 2024-03-18 | Legacy       | W   | 0.638      | 0.143        | 0.087 (0.008)    | 0.461 (0.042)    | 1 (0.638) |     8.18 | acoR, isak, Keoz, Snax, volt |
|           21 |     2314 | 2024-03-17 | SAW          | L   | 0.634      | -            | -                | -                | -         |    -4.43 | acoR, isak, Keoz, Snax, volt |
|           20 |     2330 | 2024-03-17 | AMKAL        | W   | 0.632      | 0.143        | 0.143 (0.013)    | 0.711 (0.064)    | 1 (0.632) |    11.02 | acoR, isak, Keoz, Snax, volt |
|           19 |     2546 | 2024-03-08 | BIG          | L   | 0.573      | -            | -                | -                | -         |    -3.10 | acoR, isak, Keoz, Snax, volt |
|           18 |     2853 | 2024-02-24 | 9 Pandas     | L   | 0.486      | -            | -                | -                | -         |    -7.04 | acoR, isak, Keoz, Snax, volt |
|           17 |     2862 | 2024-02-24 | M1X KS       | W   | 0.485      | 0.143        | 0.028 (0.002)    | 0.537 (0.037)    | 1 (0.485) |     7.07 | acoR, isak, Keoz, Snax, volt |
|           16 |     2868 | 2024-02-23 | fnatic       | W   | 0.479      | 0.143        | 0.198 (0.014)    | 0.650 (0.045)    | 1 (0.479) |    11.22 | acoR, isak, Keoz, Snax, volt |
|           15 |     2886 | 2024-02-22 | HEROIC       | L   | 0.473      | -            | -                | -                | -         |    -0.40 | acoR, isak, Keoz, Snax, volt |
|           14 |     2912 | 2024-02-21 | OG           | W   | 0.466      | 0.143        | 0.249 (0.017)    | 0.306 (0.020)    | 1 (0.466) |     8.43 | acoR, isak, Keoz, Snax, volt |
|           13 |     2943 | 2024-02-20 | ENCE         | L   | 0.458      | -            | -                | -                | -         |    -1.91 | acoR, isak, Keoz, Snax, volt |
|           12 |     2965 | 2024-02-19 | PERA         | W   | 0.453      | 0.143        | 0.024 (0.002)    | 0.417 (0.027)    | 1 (0.453) |     3.61 | acoR, isak, Keoz, Snax, volt |
|           11 |     2974 | 2024-02-19 | Vitality     | L   | 0.451      | -            | -                | -                | -         |    -0.16 | acoR, isak, Keoz, Snax, volt |
|           10 |     3216 | 2024-02-06 | HEROIC       | L   | 0.365      | -            | -                | -                | -         |    -0.29 | acoR, isak, Keoz, Snax, volt |
|            9 |     3222 | 2024-02-05 | MOUZ         | L   | 0.359      | -            | -                | -                | -         |    -0.09 | acoR, isak, Keoz, Snax, volt |
|            8 |     3248 | 2024-02-04 | Monte        | W   | 0.352      | 1.000        | 0.179 (0.063)    | 0.686 (0.241)    | 1 (0.352) |     8.16 | acoR, isak, Keoz, Snax, volt |
|            7 |     3334 | 2024-02-01 | Virtus.pro   | W   | 0.332      | 0.143        | 0.229 (0.011)    | 0.418 (0.020)    | 1 (0.332) |    10.12 | acoR, isak, Keoz, Snax, volt |
|            6 |     3348 | 2024-01-31 | M80          | W   | 0.326      | 0.143        | 0.206 (0.010)    | 0.749 (0.035)    | 1 (0.326) |     7.78 | acoR, isak, Keoz, Snax, volt |
|            5 |     3416 | 2024-01-26 | FaZe         | L   | 0.293      | -            | -                | -                | -         |    -0.07 | acoR, isak, Keoz, Snax, volt |
|            4 |     3444 | 2024-01-25 | Liquid       | L   | 0.285      | -            | -                | -                | -         |    -0.33 | acoR, isak, Keoz, Snax, volt |
|            3 |     3462 | 2024-01-24 | FaZe         | W   | 0.278      | 0.581        | 1.000 (0.162)    | 0.588 (0.095)    | 1 (0.278) |     8.71 | acoR, isak, Keoz, Snax, volt |
|            2 |     4174 | 2023-12-15 | Complexity   | L   | 0.015      | -            | -                | -                | -         |    -0.02 | acoR, aNdu, isak, Keoz, Snax |
|            1 |     4189 | 2023-12-15 | Apeks        | L   | 0.013      | -            | -                | -                | -         |    -0.19 | acoR, aNdu, isak, Keoz, Snax |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($18,529.31)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-20 |      0.653 | $10,000.00     | $6,532.73       |
| 2024-03-10 |      0.587 | $5,000.00      | $2,936.61       |
| 2024-02-11 |      0.400 | $16,000.00     | $6,398.00       |
| 2024-01-28 |      0.307 | $8,500.00      | $2,606.49       |
| 2023-12-17 |      0.028 | $2,000.00      | $55.47          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
