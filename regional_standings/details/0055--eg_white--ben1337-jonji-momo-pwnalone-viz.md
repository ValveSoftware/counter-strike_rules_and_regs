### Roster Details<br />
Team Name: EG White<br />
Roster: ben1337, Jonji, Momo, PwnAlone, viz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [55](../standings_global.md)<br />
Regional Rank: [12]( ../standings_americas.md)<br />
Final Rank Value:  925.9<br />
<br />
Final Rank Value (925.9) = Starting Rank Value (883.8) + Head To Head Adjustments (42.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.431[<sup>1</sup>](#table2)
- Bounty Collected: 0.310[<sup>2</sup>](#table1)
- Opponent Network: 0.084[<sup>2</sup>](#table1)
- LAN Wins: 0.121[<sup>2</sup>](#table1)

The average of these factors is 0.236<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 883.8
- 400 + ( ( 0.236 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 883.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |       41 | 2023-02-10 | ATK            | L   | 1.000      | -            | -                | -                | -         |   -16.23 | ben1337, Jonji, Momo, PwnAlone, viz |
|           22 |      428 | 2023-01-25 | Mythic         | W   | 1.000      | 0.384        | -                | 0.203 (0.078)    | 0 (0.000) |     6.09 | ben1337, Jonji, Momo, PwnAlone, viz |
|           21 |      506 | 2023-01-22 | Nouns          | W   | 1.000      | 0.354        | 0.059 (0.021)    | 0.589 (0.209)    | 0 (0.000) |    13.77 | ben1337, Jonji, Momo, PwnAlone, viz |
|           20 |      508 | 2023-01-22 | ATK            | W   | 1.000      | 0.354        | 0.070 (0.025)    | 0.646 (0.229)    | 0 (0.000) |    19.63 | ben1337, Jonji, Momo, PwnAlone, viz |
|           19 |      543 | 2023-01-21 | Red Wolves     | W   | 1.000      | 0.354        | 0.002 (0.001)    | 0.291 (0.103)    | -         |     5.95 | ben1337, Jonji, Momo, PwnAlone, viz |
|           18 |      960 | 2022-12-10 | paiN           | L   | 0.776      | -            | -                | -                | -         |    -6.77 | ben1337, Jonji, Momo, PwnAlone, viz |
|           17 |     1294 | 2022-11-30 | Eclipse        | W   | 0.709      | -            | -                | -                | -         |     1.34 | ben1337, Jonji, Momo, PwnAlone, viz |
|           16 |     1348 | 2022-11-28 | 1 JIN          | W   | 0.695      | 0.384        | 0.006 (0.002)    | 0.192 (0.051)    | -         |     5.18 | ben1337, Jonji, Momo, PwnAlone, viz |
|           15 |     1443 | 2022-11-25 | X13            | W   | 0.675      | -            | -                | -                | -         |     4.24 | ben1337, Jonji, Momo, PwnAlone, viz |
|           14 |     1786 | 2022-10-30 | TropiCaos      | W   | 0.503      | 0.354        | 0.014 (0.002)    | 0.222 (0.039)    | -         |     5.25 | ben1337, PwnAlone, viz, Walco, wiz  |
|           13 |     1790 | 2022-10-30 | TBB            | W   | 0.501      | -            | -                | -                | -         |     0.97 | ben1337, PwnAlone, viz, Walco, wiz  |
|           12 |     2647 | 2022-09-24 | TeamOne        | L   | 0.261      | -            | -                | -                | -         |    -3.83 | ben1337, djay, Jonji, PwnAlone, viz |
|           11 |     2679 | 2022-09-23 | ATK            | W   | 0.256      | 0.143        | 0.070 (0.003)    | 0.646 (0.024)    | -         |     4.66 | ben1337, djay, Jonji, PwnAlone, viz |
|           10 |     2684 | 2022-09-23 | Strife         | L   | 0.255      | -            | -                | -                | -         |    -5.10 | ben1337, djay, Jonji, PwnAlone, viz |
|            9 |     3059 | 2022-09-11 | BIG Academy    | W   | 0.176      | 0.500        | 0.020 (0.002)    | 0.434 (0.038)    | 1 (0.176) |     3.91 | ben1337, djay, Jonji, PwnAlone, viz |
|            8 |     3063 | 2022-09-11 | TeamOne        | W   | 0.174      | 0.500        | 0.028 (0.002)    | 0.445 (0.039)    | 1 (0.174) |     2.86 | ben1337, djay, Jonji, PwnAlone, viz |
|            7 |     3076 | 2022-09-11 | timbermen      | W   | 0.173      | 0.500        | 0.016 (0.001)    | 0.306 (0.026)    | 1 (0.173) |     2.12 | ben1337, djay, Jonji, PwnAlone, viz |
|            6 |     3132 | 2022-09-10 | Task Force 141 | W   | 0.167      | -            | -                | -                | 1 (0.167) |     0.65 | ben1337, djay, Jonji, PwnAlone, viz |
|            5 |     3139 | 2022-09-10 | Vendetta       | W   | 0.166      | 0.500        | 0.007 (0.001)    | -                | 1 (0.166) |     1.44 | ben1337, djay, Jonji, PwnAlone, viz |
|            4 |     3165 | 2022-09-09 | 7AM            | W   | 0.160      | -            | -                | -                | 1 (0.160) |     0.61 | ben1337, djay, Jonji, PwnAlone, viz |
|            3 |     3216 | 2022-09-08 | Vireo.pro      | W   | 0.154      | -            | -                | -                | 1 (0.154) |     0.32 | ben1337, djay, Jonji, PwnAlone, viz |
|            2 |     3363 | 2022-09-02 | Wings Up       | L   | 0.111      | -            | -                | -                | -         |    -2.54 | ben1337, djay, Jonji, PwnAlone, viz |
|            1 |     3371 | 2022-09-01 | Entropiq       | L   | 0.109      | -            | -                | -                | -         |    -2.45 | ben1337, djay, Jonji, PwnAlone, viz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($22,586.32)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-10 |      1.000 | $1,000.00      | $1,000.00       |
| 2023-01-22 |      1.000 | $9,000.00      | $9,000.00       |
| 2022-12-11 |      0.783 | $1,000.00      | $782.55         |
| 2022-10-30 |      0.503 | $9,000.00      | $4,522.62       |
| 2022-09-11 |      0.176 | $40,000.00     | $7,033.77       |
| 2022-09-04 |      0.124 | $2,000.00      | $247.38         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
