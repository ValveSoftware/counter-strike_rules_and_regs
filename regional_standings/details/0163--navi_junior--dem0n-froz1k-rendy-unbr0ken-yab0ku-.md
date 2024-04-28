### Roster Details<br />
Team Name: NAVI Junior<br />
Roster: Dem0N, froz1k, rendY, UNBR0KEN, yab0ku-<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [163](../standings_global.md)<br />
Regional Rank: [107]( ../standings_europe.md)<br />
Final Rank Value:  693.6<br />
<br />
Final Rank Value (693.6) = Starting Rank Value (762.7) + Head To Head Adjustments (-69.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.376[<sup>1</sup>](#table2)
- Bounty Collected: 0.265[<sup>2</sup>](#table1)
- Opponent Network: 0.068[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.177<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 762.7
- 400 + ( ( 0.177 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 762.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |      213 | 2023-02-02 | Anonymo           | L   | 1.000      | -            | -                | -                | -         |   -19.32 | Dem0N, froz1k, rendY, UNBR0KEN, yab0ku-   |
|           21 |      234 | 2023-02-01 | Into the Breach   | L   | 1.000      | -            | -                | -                | -         |   -18.89 | Dem0N, froz1k, rendY, UNBR0KEN, yab0ku-   |
|           20 |      259 | 2023-01-31 | 7AM               | L   | 1.000      | -            | -                | -                | -         |   -24.23 | Dem0N, froz1k, npl, UNBR0KEN, yab0ku-     |
|           19 |      728 | 2023-01-08 | Lazer Cats        | L   | 0.965      | -            | -                | -                | -         |   -19.36 | Dem0N, froz1k, rendY, UNBR0KEN, yab0ku-   |
|           18 |     1537 | 2022-11-20 | Young Ninjas      | L   | 0.639      | -            | -                | -                | -         |    -5.53 | Dem0N, froz1k, npl, rendY, UNBR0KEN       |
|           17 |     1552 | 2022-11-19 | MOUZ NXT          | W   | 0.633      | 0.500        | 0.015 (0.005)    | 0.537 (0.170)    | 0 (0.000) |    10.71 | crush, Dem0N, froz1k, headtr1ck, UNBR0KEN |
|           16 |     1558 | 2022-11-19 | Young Ninjas      | L   | 0.631      | -            | -                | -                | -         |    -5.21 | Dem0N, froz1k, headtr1ck, rendY, UNBR0KEN |
|           15 |     1816 | 2022-10-28 | FURIA Academy     | W   | 0.487      | 0.500        | 0.004 (0.001)    | 0.278 (0.068)    | 0 (0.000) |     6.86 | Dem0N, froz1k, headtr1ck, npl, yab0ku-    |
|           14 |     1825 | 2022-10-28 | OG Academy        | L   | 0.486      | -            | -                | -                | -         |    -8.47 | Dem0N, froz1k, headtr1ck, npl, yab0ku-    |
|           13 |     1842 | 2022-10-27 | FURIA Academy     | W   | 0.480      | 0.500        | 0.004 (0.001)    | 0.278 (0.067)    | 0 (0.000) |     6.47 | Dem0N, froz1k, headtr1ck, npl, UNBR0KEN   |
|           12 |     1868 | 2022-10-26 | OG Academy        | L   | 0.472      | -            | -                | -                | -         |    -8.50 | Dem0N, froz1k, npl, rendY, UNBR0KEN       |
|           11 |     1888 | 2022-10-25 | Believe           | W   | 0.466      | 0.500        | 0.006 (0.001)    | 0.344 (0.080)    | 0 (0.000) |     8.19 | Dem0N, froz1k, headtr1ck, npl, yab0ku-    |
|           10 |     1892 | 2022-10-25 | Apeks Rebels      | L   | 0.466      | -            | -                | -                | -         |    -7.83 | Dem0N, froz1k, npl, rendY, yab0ku-        |
|            9 |     2090 | 2022-10-17 | MOUZ NXT          | W   | 0.412      | 0.500        | 0.015 (0.003)    | 0.537 (0.111)    | 0 (0.000) |     7.37 | Dem0N, froz1k, headtr1ck, npl, yab0ku-    |
|            8 |     2114 | 2022-10-16 | Believe           | L   | 0.406      | -            | -                | -                | -         |    -5.41 | Dem0N, froz1k, headtr1ck, npl, yab0ku-    |
|            7 |     2121 | 2022-10-16 | MOUZ NXT          | W   | 0.405      | 0.500        | 0.015 (0.003)    | 0.537 (0.109)    | 0 (0.000) |     7.29 | Dem0N, froz1k, headtr1ck, npl, UNBR0KEN   |
|            6 |     2217 | 2022-10-13 | Flames Ascent     | W   | 0.386      | 0.500        | 0.001 (0.000)    | 0.120 (0.023)    | 0 (0.000) |     4.08 | Dem0N, froz1k, headtr1ck, npl, UNBR0KEN   |
|            5 |     2221 | 2022-10-13 | Apeks Rebels      | W   | 0.386      | 0.500        | 0.010 (0.002)    | 0.174 (0.034)    | 0 (0.000) |     6.17 | Dem0N, froz1k, npl, rendY, yab0ku-        |
|            4 |     2257 | 2022-10-12 | Flames Ascent     | W   | 0.379      | 0.500        | 0.001 (0.000)    | 0.120 (0.023)    | 0 (0.000) |     4.27 | Dem0N, froz1k, npl, rendY, UNBR0KEN       |
|            3 |     2268 | 2022-10-12 | NeedDOCTOR        | L   | 0.377      | -            | -                | -                | -         |    -7.41 | Dem0N, npl, rendY, UNBR0KEN, yab0ku-      |
|            2 |     2280 | 2022-10-11 | Copenhagen Flames | L   | 0.372      | -            | -                | -                | -         |    -2.69 | Dem0N, froz1k, npl, rendY, yab0ku-        |
|            1 |     2615 | 2022-09-25 | GUESS             | W   | 0.267      | 0.268        | 0.000 (0.000)    | 0.011 (0.001)    | 0 (0.000) |     2.33 | Dem0N, froz1k, npl, rendY, UNBR0KEN       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,370.02)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-01-08 |      0.965 | $540.00        | $521.23         |
| 2022-11-20 |      0.640 | $15,000.00     | $9,603.27       |
| 2022-09-25 |      0.267 | $920.00        | $245.52         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
