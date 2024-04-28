### Roster Details<br />
Team Name: ENCE Academy<br />
Roster: HENU, juissi, myltsi, podi, S1rva<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [174](../standings_global.md)<br />
Regional Rank: [114]( ../standings_europe.md)<br />
Final Rank Value:  663.6<br />
<br />
Final Rank Value (663.6) = Starting Rank Value (738.5) + Head To Head Adjustments (-74.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.334[<sup>1</sup>](#table2)
- Bounty Collected: 0.278[<sup>2</sup>](#table1)
- Opponent Network: 0.049[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 738.5
- 400 + ( ( 0.165 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 738.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |      221 | 2023-02-02 | UNGENTIUM            | L   | 1.000      | -            | -                | -                | -         |   -11.04 | HENU, juissi, myltsi, podi, S1rva |
|           32 |      263 | 2023-01-31 | MOUZ NXT             | L   | 1.000      | -            | -                | -                | -         |    -9.29 | HENU, juissi, myltsi, podi, S1rva |
|           31 |      418 | 2023-01-26 | Dripmen              | L   | 1.000      | -            | -                | -                | -         |   -14.67 | HENU, juissi, myltsi, podi, S1rva |
|           30 |      452 | 2023-01-25 | Mixfits              | L   | 1.000      | -            | -                | -                | -         |   -17.51 | HENU, juissi, myltsi, podi, S1rva |
|           29 |      498 | 2023-01-23 | PGE Turow            | L   | 1.000      | -            | -                | -                | -         |   -24.39 | HENU, juissi, myltsi, podi, S1rva |
|           28 |      625 | 2023-01-18 | ECSTATIC             | L   | 1.000      | -            | -                | -                | -         |   -12.49 | HENU, juissi, myltsi, podi, S1rva |
|           27 |      674 | 2023-01-16 | PROSPECTS            | L   | 1.000      | -            | -                | -                | -         |   -10.22 | HENU, juissi, myltsi, podi, S1rva |
|           26 |      943 | 2022-12-11 | JANO                 | L   | 0.780      | -            | -                | -                | -         |   -12.90 | HENU, juissi, myltsi, podi, S1rva |
|           25 |     1079 | 2022-12-07 | JANO                 | W   | 0.753      | 0.304        | 0.008 (0.002)    | 0.307 (0.070)    | 0 (0.000) |    10.09 | HENU, juissi, myltsi, podi, S1rva |
|           24 |     1126 | 2022-12-06 | Endpoint             | L   | 0.746      | -            | -                | -                | -         |    -6.66 | HENU, juissi, myltsi, podi, S1rva |
|           23 |     1166 | 2022-12-04 | GenOne               | L   | 0.733      | -            | -                | -                | -         |    -3.41 | HENU, juissi, myltsi, podi, S1rva |
|           22 |     1231 | 2022-12-03 | Monte                | L   | 0.725      | -            | -                | -                | -         |    -5.99 | HENU, juissi, myltsi, podi, S1rva |
|           21 |     1306 | 2022-11-30 | EXEN                 | W   | 0.706      | 0.304        | 0.002 (0.000)    | -                | 0 (0.000) |     6.59 | HENU, juissi, myltsi, podi, S1rva |
|           20 |     1544 | 2022-11-20 | HAVU                 | L   | 0.638      | -            | -                | -                | -         |    -6.27 | HENU, juissi, myltsi, podi, S1rva |
|           19 |     1695 | 2022-11-06 | Believe              | W   | 0.547      | 0.320        | 0.006 (0.001)    | 0.344 (0.060)    | 0 (0.000) |     9.26 | HENU, juissi, myltsi, podi, S1rva |
|           18 |     1717 | 2022-11-05 | Believe              | W   | 0.540      | 0.320        | 0.006 (0.001)    | 0.344 (0.059)    | 0 (0.000) |     9.48 | HENU, juissi, myltsi, podi, S1rva |
|           17 |     1733 | 2022-11-03 | Eternal Fire Academy | W   | 0.527      | 0.320        | -                | 0.116 (0.020)    | 0 (0.000) |     3.88 | HENU, juissi, myltsi, podi, S1rva |
|           16 |     1752 | 2022-11-01 | OG Academy           | W   | 0.514      | 0.320        | 0.005 (0.001)    | 0.161 (0.027)    | 0 (0.000) |     7.93 | HENU, juissi, myltsi, podi, S1rva |
|           15 |     1812 | 2022-10-29 | Conquer              | W   | 0.492      | 0.143        | 0.008 (0.001)    | 0.132 (0.009)    | 0 (0.000) |     6.15 | HENU, juissi, myltsi, podi, S1rva |
|           14 |     1820 | 2022-10-28 | KOVA                 | W   | 0.486      | 0.143        | 0.001 (0.000)    | -                | 0 (0.000) |     5.04 | HENU, juissi, myltsi, podi, S1rva |
|           13 |     1847 | 2022-10-27 | FcottoNd             | W   | 0.479      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     3.31 | HENU, juissi, myltsi, podi, S1rva |
|           12 |     1852 | 2022-10-27 | Spirit Academy       | L   | 0.478      | -            | -                | -                | -         |    -4.80 | HENU, juissi, myltsi, podi, S1rva |
|           11 |     1858 | 2022-10-26 | Astralis Talent      | L   | 0.474      | -            | -                | -                | -         |    -4.14 | HENU, juissi, myltsi, podi, S1rva |
|           10 |     1861 | 2022-10-26 | MIBR Academy         | W   | 0.473      | 0.500        | -                | 0.042 (0.010)    | 0 (0.000) |     3.67 | HENU, juissi, myltsi, podi, S1rva |
|            9 |     1883 | 2022-10-25 | Astralis Talent      | L   | 0.467      | -            | -                | -                | -         |    -4.01 | HENU, juissi, myltsi, podi, S1rva |
|            8 |     1903 | 2022-10-24 | BIG Academy          | L   | 0.460      | -            | -                | -                | -         |    -2.81 | HENU, juissi, myltsi, podi, S1rva |
|            7 |     2069 | 2022-10-18 | PROSPECTS            | L   | 0.419      | -            | -                | -                | -         |    -3.43 | HENU, juissi, myltsi, podi, S1rva |
|            6 |     2091 | 2022-10-17 | BIG Academy          | W   | 0.412      | 0.500        | 0.020 (0.004)    | 0.434 (0.089)    | -         |    10.69 | HENU, juissi, myltsi, podi, S1rva |
|            5 |     2110 | 2022-10-16 | Young Ninjas         | W   | 0.406      | 0.500        | 0.076 (0.015)    | 0.694 (0.141)    | -         |     9.88 | HENU, juissi, myltsi, podi, S1rva |
|            4 |     2146 | 2022-10-15 | Spirit Academy       | L   | 0.399      | -            | -                | -                | -         |    -4.30 | HENU, juissi, myltsi, podi, S1rva |
|            3 |     2185 | 2022-10-14 | MIBR Academy         | W   | 0.393      | 0.500        | -                | 0.042 (0.008)    | -         |     3.16 | HENU, juissi, myltsi, podi, S1rva |
|            2 |     2207 | 2022-10-13 | PROSPECTS            | L   | 0.387      | -            | -                | -                | -         |    -2.68 | HENU, juissi, myltsi, podi, S1rva |
|            1 |     2253 | 2022-10-12 | Young Ninjas         | L   | 0.379      | -            | -                | -                | -         |    -3.02 | HENU, juissi, myltsi, podi, S1rva |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,824.47)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-11 |      0.780 | $1,037.00      | $809.36         |
| 2022-11-20 |      0.638 | $2,000.00      | $1,276.66       |
| 2022-11-06 |      0.547 | $5,010.00      | $2,738.45       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
