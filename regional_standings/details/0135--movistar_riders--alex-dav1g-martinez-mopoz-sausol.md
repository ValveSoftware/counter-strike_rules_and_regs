### Roster Details<br />
Team Name: Movistar Riders<br />
Roster: alex, dav1g, Martinez, mopoz, sausol<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [135](../standings_global.md)<br />
Regional Rank: [92]( ../standings_europe.md)<br />
Final Rank Value:  736.8<br />
<br />
Final Rank Value (736.8) = Starting Rank Value (779.0) + Head To Head Adjustments (-42.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.332[<sup>1</sup>](#table2)
- Bounty Collected: 0.318[<sup>2</sup>](#table1)
- Opponent Network: 0.050[<sup>2</sup>](#table1)
- LAN Wins: 0.041[<sup>2</sup>](#table1)

The average of these factors is 0.185<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 779.0
- 400 + ( ( 0.185 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 779.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |      266 | 2023-01-31 | VOYVODA           | L   | 1.000      | -            | -                | -                | -         |   -21.78 | alex, dav1g, Martinez, mopoz, sausol  |
|           23 |      469 | 2023-01-24 | LDLC              | L   | 1.000      | -            | -                | -                | -         |   -13.83 | alex, dav1g, Martinez, mopoz, sausol  |
|           22 |      502 | 2023-01-23 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -7.08 | alex, dav1g, Martinez, mopoz, sausol  |
|           21 |      512 | 2023-01-22 | Copenhagen Flames | L   | 1.000      | -            | -                | -                | -         |    -5.17 | alex, dav1g, Martinez, mopoz, sausol  |
|           20 |      531 | 2023-01-22 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -3.12 | alex, dav1g, Martinez, mopoz, sausol  |
|           19 |      537 | 2023-01-22 | Copenhagen Flames | W   | 1.000      | 0.358        | 0.133 (0.048)    | 0.722 (0.258)    | 0 (0.000) |    26.69 | alex, dav1g, Martinez, mopoz, sausol  |
|           18 |      879 | 2022-12-15 | ECLOT             | L   | 0.805      | -            | -                | -                | -         |    -6.86 | alex, dav1g, Martinez, mopoz, sausol  |
|           17 |      909 | 2022-12-13 | Sangal            | L   | 0.793      | -            | -                | -                | -         |    -6.99 | alex, dav1g, Martinez, mopoz, sausol  |
|           16 |     1152 | 2022-12-05 | forZe             | L   | 0.738      | -            | -                | -                | -         |    -5.84 | alex, dav1g, Martinez, mopoz, sausol  |
|           15 |     1355 | 2022-11-28 | BLUEJAYS          | L   | 0.693      | -            | -                | -                | -         |    -4.48 | alex, dav1g, Martinez, mopoz, sausol  |
|           14 |     1446 | 2022-11-25 | SAW               | L   | 0.674      | -            | -                | -                | -         |    -2.94 | alex, dav1g, Martinez, mopoz, sausol  |
|           13 |     1635 | 2022-11-15 | SINNERS           | W   | 0.607      | 0.435        | 0.068 (0.018)    | 0.549 (0.145)    | 0 (0.000) |    15.06 | alex, dav1g, Martinez, mopoz, sausol  |
|           12 |     1879 | 2022-10-25 | SAW               | L   | 0.467      | -            | -                | -                | -         |    -1.96 | alex, dav1g, Martinez, mopoz, sausol  |
|           11 |     2145 | 2022-10-15 | Eternal Fire      | L   | 0.399      | -            | -                | -                | -         |    -3.40 | alex, dav1g, DeathZz, Martinez, mopoz |
|           10 |     2179 | 2022-10-14 | MOUZ              | L   | 0.393      | -            | -                | -                | -         |    -0.73 | alex, dav1g, DeathZz, Martinez, mopoz |
|            9 |     2190 | 2022-10-14 | Eternal Fire      | W   | 0.392      | 0.500        | 0.034 (0.007)    | 0.496 (0.097)    | 1 (0.392) |     9.15 | alex, dav1g, DeathZz, Martinez, mopoz |
|            8 |     2623 | 2022-09-25 | Eternal Fire      | L   | 0.267      | -            | -                | -                | -         |    -2.20 | alex, dav1g, DeathZz, Martinez, mopoz |
|            7 |     2669 | 2022-09-24 | Evil Geniuses     | L   | 0.258      | -            | -                | -                | -         |    -1.37 | alex, dav1g, DeathZz, Martinez, mopoz |
|            6 |     2722 | 2022-09-23 | Cloud9            | L   | 0.251      | -            | -                | -                | -         |    -0.41 | alex, dav1g, DeathZz, Martinez, mopoz |
|            5 |     2755 | 2022-09-22 | FURIA             | L   | 0.246      | -            | -                | -                | -         |    -0.47 | alex, dav1g, DeathZz, Martinez, mopoz |
|            4 |     2777 | 2022-09-21 | Liquid            | L   | 0.241      | -            | -                | -                | -         |    -0.02 | alex, dav1g, DeathZz, Martinez, mopoz |
|            3 |     3223 | 2022-09-08 | ECLOT             | L   | 0.153      | -            | -                | -                | -         |    -0.98 | alex, dav1g, DeathZz, Martinez, mopoz |
|            2 |     3239 | 2022-09-07 | sYnck             | L   | 0.146      | -            | -                | -                | -         |    -2.40 | alex, dav1g, DeathZz, Martinez, mopoz |
|            1 |     3622 | 2022-08-23 | B8                | L   | 0.046      | -            | -                | -                | -         |    -1.07 | alex, dav1g, DeathZz, Martinez, mopoz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,586.88)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-11-25 |      0.674 | $1,500.00      | $1,010.57       |
| 2022-10-26 |      0.474 | $1,000.00      | $473.67         |
| 2022-10-16 |      0.406 | $3,000.00      | $1,218.40       |
| 2022-10-02 |      0.314 | $6,000.00      | $1,884.24       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
