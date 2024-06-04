### Roster Details<br />
Team Name: GamerLegion<br />
Roster: acoR, isak, Keoz, Snax, volt<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [33](../standings_global.md)<br />
Regional Rank: [23]( ../standings_europe.md)<br />
Final Rank Value:  1185.5<br />
<br />
Final Rank Value (1185.5) = Starting Rank Value (1137.5) + Head To Head Adjustments (48.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.467[<sup>1</sup>](#table2)
- Bounty Collected: 0.410[<sup>2</sup>](#table1)
- Opponent Network: 0.074[<sup>2</sup>](#table1)
- LAN Wins: 0.569[<sup>2</sup>](#table1)

The average of these factors is 0.380<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1137.5
- 400 + ( ( 0.380 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1137.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |     1777 | 2024-03-20 | Imperial        | L   | 0.732      | -            | -                | -                | -         |    -3.75 | acoR, isak, Keoz, Snax, volt |
|           25 |     1795 | 2024-03-19 | Eternal Fire    | L   | 0.724      | -            | -                | -                | -         |    -0.68 | acoR, isak, Keoz, Snax, volt |
|           24 |     1805 | 2024-03-18 | Legacy          | W   | 0.718      | 0.143        | 0.024 (0.002)    | 0.328 (0.034)    | 1 (0.718) |     6.76 | acoR, isak, Keoz, Snax, volt |
|           23 |     1814 | 2024-03-17 | SAW             | L   | 0.713      | -            | -                | -                | -         |    -5.54 | acoR, isak, Keoz, Snax, volt |
|           22 |     1830 | 2024-03-17 | AMKAL           | W   | 0.712      | 0.143        | 0.144 (0.015)    | 0.736 (0.075)    | 1 (0.712) |    10.69 | acoR, isak, Keoz, Snax, volt |
|           21 |     2046 | 2024-03-08 | BIG             | L   | 0.652      | -            | -                | -                | -         |    -5.47 | acoR, isak, Keoz, Snax, volt |
|           20 |     2353 | 2024-02-24 | 9 Pandas        | L   | 0.565      | -            | -                | -                | -         |    -9.47 | acoR, isak, Keoz, Snax, volt |
|           19 |     2362 | 2024-02-24 | ex-Guild Eagles | W   | 0.564      | 0.143        | 0.014 (0.001)    | 0.552 (0.044)    | 1 (0.564) |     4.14 | acoR, isak, Keoz, Snax, volt |
|           18 |     2368 | 2024-02-23 | fnatic          | W   | 0.559      | 0.143        | 0.148 (0.012)    | 0.565 (0.045)    | 1 (0.559) |     6.80 | acoR, isak, Keoz, Snax, volt |
|           17 |     2386 | 2024-02-22 | HEROIC          | L   | 0.552      | -            | -                | -                | -         |    -0.92 | acoR, isak, Keoz, Snax, volt |
|           16 |     2412 | 2024-02-21 | OG              | W   | 0.545      | 0.143        | 0.278 (0.022)    | 0.376 (0.029)    | 1 (0.545) |     8.76 | acoR, isak, Keoz, Snax, volt |
|           15 |     2443 | 2024-02-20 | ENCE            | L   | 0.537      | -            | -                | -                | -         |    -3.67 | acoR, isak, Keoz, Snax, volt |
|           14 |     2465 | 2024-02-19 | PERA            | W   | 0.532      | 0.143        | 0.027 (0.002)    | 0.408 (0.031)    | 1 (0.532) |     2.94 | acoR, isak, Keoz, Snax, volt |
|           13 |     2474 | 2024-02-19 | Vitality        | L   | 0.530      | -            | -                | -                | -         |    -0.39 | acoR, isak, Keoz, Snax, volt |
|           12 |     2716 | 2024-02-06 | HEROIC          | L   | 0.445      | -            | -                | -                | -         |    -0.70 | acoR, isak, Keoz, Snax, volt |
|           11 |     2722 | 2024-02-05 | MOUZ            | L   | 0.439      | -            | -                | -                | -         |    -0.16 | acoR, isak, Keoz, Snax, volt |
|           10 |     2748 | 2024-02-04 | Monte           | W   | 0.431      | 1.000        | 0.181 (0.078)    | 0.611 (0.264)    | 1 (0.431) |     9.16 | acoR, isak, Keoz, Snax, volt |
|            9 |     2834 | 2024-02-01 | Virtus.pro      | W   | 0.411      | 0.143        | 0.271 (0.016)    | 0.499 (0.029)    | 1 (0.411) |    12.36 | acoR, isak, Keoz, Snax, volt |
|            8 |     2848 | 2024-01-31 | M80             | W   | 0.405      | 0.143        | 0.135 (0.008)    | 0.789 (0.046)    | 1 (0.405) |     8.49 | acoR, isak, Keoz, Snax, volt |
|            7 |     2916 | 2024-01-26 | FaZe            | L   | 0.373      | -            | -                | -                | -         |    -0.10 | acoR, isak, Keoz, Snax, volt |
|            6 |     2944 | 2024-01-25 | Liquid          | L   | 0.364      | -            | -                | -                | -         |    -0.57 | acoR, isak, Keoz, Snax, volt |
|            5 |     2962 | 2024-01-24 | FaZe            | W   | 0.357      | 0.581        | 1.000 (0.208)    | 0.688 (0.143)    | 1 (0.357) |    11.17 | acoR, isak, Keoz, Snax, volt |
|            4 |     3674 | 2023-12-15 | Complexity      | L   | 0.095      | -            | -                | -                | -         |    -0.26 | acoR, aNdu, isak, Keoz, Snax |
|            3 |     3689 | 2023-12-15 | Apeks           | L   | 0.092      | -            | -                | -                | -         |    -1.33 | acoR, aNdu, isak, Keoz, Snax |
|            2 |     3833 | 2023-12-06 | BetBoom         | L   | 0.033      | -            | -                | -                | -         |    -0.17 | acoR, isak, Keoz, Snax, volt |
|            1 |     3877 | 2023-12-05 | Cloud9          | L   | 0.024      | -            | -                | -                | -         |    -0.14 | acoR, isak, Keoz, Snax, volt |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($21,814.96)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-20 |      0.732 | $10,000.00     | $7,324.46       |
| 2024-03-10 |      0.666 | $5,000.00      | $3,332.47       |
| 2024-02-11 |      0.479 | $16,000.00     | $7,664.76       |
| 2024-01-28 |      0.386 | $8,500.00      | $3,279.46       |
| 2023-12-17 |      0.107 | $2,000.00      | $213.82         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
