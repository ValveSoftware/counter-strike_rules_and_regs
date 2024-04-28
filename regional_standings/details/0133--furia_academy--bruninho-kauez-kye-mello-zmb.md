### Roster Details<br />
Team Name: FURIA Academy<br />
Roster: Bruninho, kauez, kye, mello, zmb<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [133](../standings_global.md)<br />
Regional Rank: [37]( ../standings_americas.md)<br />
Final Rank Value:  739.8<br />
<br />
Final Rank Value (739.8) = Starting Rank Value (725.7) + Head To Head Adjustments (14.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.298[<sup>1</sup>](#table2)
- Bounty Collected: 0.268[<sup>2</sup>](#table1)
- Opponent Network: 0.071[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.159<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 725.7
- 400 + ( ( 0.159 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 725.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |       26 | 2023-02-11 | Paquetá       | L   | 1.000      | -            | -                | -                | -         |   -15.08 | Bruninho, kauez, kye, mello, zmb     |
|           26 |       48 | 2023-02-10 | O PLANO       | W   | 1.000      | 0.333        | 0.005 (0.002)    | 0.289 (0.096)    | 0 (0.000) |    16.06 | Bruninho, kauez, kye, mello, zmb     |
|           25 |      189 | 2023-02-03 | O PLANO       | L   | 1.000      | -            | -                | -                | -         |   -15.03 | Bruninho, kauez, kye, mello, zmb     |
|           24 |      210 | 2023-02-02 | WINDINGO      | W   | 1.000      | 0.384        | 0.002 (0.001)    | 0.210 (0.081)    | 0 (0.000) |    11.87 | Bruninho, kauez, kye, mello, zmb     |
|           23 |     1112 | 2022-12-06 | FUSION        | L   | 0.747      | -            | -                | -                | -         |   -11.80 | Bruninho, drop, kauez, mello, zmb    |
|           22 |     1138 | 2022-12-05 | ODDIK         | W   | 0.741      | 0.384        | 0.016 (0.004)    | 0.236 (0.067)    | 0 (0.000) |    12.38 | Bruninho, drop, kauez, mello, zmb    |
|           21 |     1277 | 2022-12-01 | Paquetá       | W   | 0.714      | 0.384        | 0.005 (0.001)    | 0.457 (0.125)    | 0 (0.000) |    11.68 | Bruninho, drop, kauez, mello, zmb    |
|           20 |     1321 | 2022-11-29 | FUSION        | L   | 0.702      | -            | -                | -                | -         |   -11.48 | Bruninho, drop, kauez, mello, zmb    |
|           19 |     1385 | 2022-11-27 | SWS           | W   | 0.686      | 0.384        | -                | 0.125 (0.033)    | 0 (0.000) |     8.02 | Bruninho, drop, kauez, mello, zmb    |
|           18 |     1460 | 2022-11-25 | Liberty       | W   | 0.672      | 0.384        | -                | 0.053 (0.014)    | 0 (0.000) |     6.18 | Bruninho, drop, kauez, mello, zmb    |
|           17 |     1816 | 2022-10-28 | NAVI Junior   | L   | 0.487      | -            | -                | -                | -         |    -6.86 | Bruninho, decenty, kauez, koala, zmb |
|           16 |     1831 | 2022-10-28 | MOUZ NXT      | W   | 0.485      | 0.500        | 0.015 (0.004)    | 0.537 (0.130)    | 0 (0.000) |     9.51 | Bruninho, decenty, kauez, koala, zmb |
|           15 |     1837 | 2022-10-27 | Apeks Rebels  | W   | 0.480      | 0.500        | 0.010 (0.002)    | 0.174 (0.042)    | 0 (0.000) |     8.49 | Bruninho, decenty, kauez, koala, zmb |
|           14 |     1842 | 2022-10-27 | NAVI Junior   | L   | 0.480      | -            | -                | -                | -         |    -6.47 | Bruninho, decenty, kauez, koala, zmb |
|           13 |     1849 | 2022-10-27 | Believe       | L   | 0.478      | -            | -                | -                | -         |    -5.85 | Bruninho, decenty, kauez, koala, zmb |
|           12 |     1886 | 2022-10-25 | Believe       | W   | 0.466      | 0.500        | 0.006 (0.001)    | 0.344 (0.080)    | 0 (0.000) |     9.05 | Bruninho, decenty, kauez, koala, zmb |
|           11 |     1906 | 2022-10-24 | OG Academy    | L   | 0.459      | -            | -                | -                | -         |    -7.49 | Bruninho, decenty, kauez, koala, zmb |
|           10 |     2063 | 2022-10-18 | Flames Ascent | L   | 0.420      | -            | -                | -                | -         |    -8.27 | Bruninho, decenty, kauez, koala, zmb |
|            9 |     2066 | 2022-10-18 | Apeks Rebels  | W   | 0.419      | 0.500        | 0.010 (0.002)    | 0.174 (0.036)    | 0 (0.000) |     6.93 | Bruninho, decenty, kauez, koala, zmb |
|            8 |     2690 | 2022-09-23 | Paquetá       | L   | 0.254      | -            | -                | -                | -         |    -4.09 | Bruninho, decenty, kauez, koala, zmb |
|            7 |     2974 | 2022-09-14 | O PLANO       | L   | 0.196      | -            | -                | -                | -         |    -4.57 | Bruninho, decenty, kauez, koala, zmb |
|            6 |     3066 | 2022-09-11 | Fuscão 1500   | W   | 0.174      | -            | -                | -                | -         |     3.08 | Bruninho, decenty, kauez, koala, zmb |
|            5 |     3097 | 2022-09-10 | ODDIK         | W   | 0.169      | 0.143        | 0.016 (0.000)    | -                | -         |     2.91 | Bruninho, decenty, kauez, koala, zmb |
|            4 |     3114 | 2022-09-10 | Sharks        | W   | 0.168      | 0.143        | 0.017 (0.000)    | -                | -         |     3.01 | Bruninho, decenty, kauez, koala, zmb |
|            3 |     3164 | 2022-09-09 | Sharks        | L   | 0.160      | -            | -                | -                | -         |    -2.19 | Bruninho, decenty, kauez, koala, zmb |
|            2 |     3189 | 2022-09-08 | Paquetá       | W   | 0.155      | -            | -                | -                | -         |     2.37 | Bruninho, decenty, kauez, koala, zmb |
|            1 |     3193 | 2022-09-08 | Stars Horizon | W   | 0.155      | -            | -                | -                | -         |     1.70 | Bruninho, decenty, kauez, koala, zmb |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,075.86)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-04 |      1.000 | $1,000.00      | $1,000.00       |
| 2022-12-07 |      0.756 | $1,000.00      | $755.75         |
| 2022-11-20 |      0.640 | $500.00        | $320.11         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
