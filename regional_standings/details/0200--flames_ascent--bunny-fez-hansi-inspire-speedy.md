### Roster Details<br />
Team Name: Flames Ascent<br />
Roster: buNNy, FeZ, Hansi, Inspire, Speedy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [200](../standings_global.md)<br />
Regional Rank: [123]( ../standings_europe.md)<br />
Final Rank Value:  600.1<br />
<br />
Final Rank Value (600.1) = Starting Rank Value (644.1) + Head To Head Adjustments (-44.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.237[<sup>1</sup>](#table2)
- Bounty Collected: 0.228[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.119<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 644.1
- 400 + ( ( 0.119 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 644.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |      187 | 2023-02-03 | Apeks Rebels         | L   | 1.000      | -            | -                | -                | -         |    -9.02 | buNNy, FeZ, Hansi, Inspire, Speedy    |
|           22 |      684 | 2023-01-15 | sYnck                | L   | 1.000      | -            | -                | -                | -         |    -8.76 | buNNy, FeZ, Hansi, Inspire, Speedy    |
|           21 |      723 | 2023-01-11 | Astralis Talent      | L   | 0.984      | -            | -                | -                | -         |    -4.89 | buNNy, FeZ, Hansi, Inspire, Speedy    |
|           20 |      914 | 2022-12-13 | MASONIC              | L   | 0.793      | -            | -                | -                | -         |    -4.89 | buNNy, FeZ, Hansi, Inspire, Speedy    |
|           19 |      922 | 2022-12-13 | CEPTER               | W   | 0.791      | 0.143        | 0.000 (0.000)    | 0.033 (0.004)    | 0 (0.000) |     9.42 | buNNy, FeZ, Hansi, Inspire, Speedy    |
|           18 |     1730 | 2022-11-04 | Eternal Fire Academy | L   | 0.533      | -            | -                | -                | -         |   -10.20 | buNNy, FeZ, Hansi, Inspire, Speedy    |
|           17 |     1747 | 2022-11-02 | VOID                 | W   | 0.520      | 0.320        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.56 | buNNy, FeZ, Hansi, Inspire, Speedy    |
|           16 |     1773 | 2022-10-31 | MOUZ NXT             | L   | 0.507      | -            | -                | -                | -         |    -4.13 | buNNy, FeZ, Hansi, Inspire, Speedy    |
|           15 |     1822 | 2022-10-28 | Believe              | L   | 0.486      | -            | -                | -                | -         |    -4.22 | buNNy, FeZ, Hansi, Inspire, Speedy    |
|           14 |     1872 | 2022-10-26 | Apeks Rebels         | L   | 0.472      | -            | -                | -                | -         |    -4.97 | buNNy, FeZ, Hansi, Inspire, Speedy    |
|           13 |     1874 | 2022-10-26 | OG Academy           | L   | 0.471      | -            | -                | -                | -         |    -5.85 | buNNy, FeZ, Hansi, Inspire, Speedy    |
|           12 |     1914 | 2022-10-24 | MOUZ NXT             | L   | 0.458      | -            | -                | -                | -         |    -3.88 | buNNy, FeZ, Hansi, Inspire, Speedy    |
|           11 |     2063 | 2022-10-18 | FURIA Academy        | W   | 0.420      | 0.500        | 0.004 (0.001)    | 0.278 (0.058)    | 0 (0.000) |     8.27 | buNNy, FeZ, Hansi, Inspire, Speedy    |
|           10 |     2093 | 2022-10-17 | FURIA Academy        | W   | 0.412      | 0.500        | 0.001 (0.000)    | 0.017 (0.004)    | 0 (0.000) |     6.29 | buNNy, FeZ, Hansi, Inspire, Speedy    |
|            9 |     2161 | 2022-10-15 | Brøndby              | L   | 0.397      | -            | -                | -                | -         |    -8.49 | buNNy, FeZ, Hansi, Inspire, Speedy    |
|            8 |     2169 | 2022-10-14 | Astralis Talent      | L   | 0.394      | -            | -                | -                | -         |    -2.51 | buNNy, FeZ, Hansi, Inspire, Speedy    |
|            7 |     2181 | 2022-10-14 | Believe              | L   | 0.393      | -            | -                | -                | -         |    -3.49 | buNNy, FeZ, Hansi, Inspire, Speedy    |
|            6 |     2188 | 2022-10-14 | OG Academy           | W   | 0.392      | 0.500        | 0.005 (0.001)    | 0.161 (0.032)    | 0 (0.000) |     7.51 | buNNy, FeZ, Hansi, Inspire, Speedy    |
|            5 |     2217 | 2022-10-13 | NAVI Junior          | L   | 0.386      | -            | -                | -                | -         |    -4.08 | buNNy, FeZ, Hansi, Inspire, Speedy    |
|            4 |     2252 | 2022-10-12 | MOUZ NXT             | L   | 0.380      | -            | -                | -                | -         |    -3.34 | buNNy, FeZ, Hansi, Inspire, Speedy    |
|            3 |     2257 | 2022-10-12 | NAVI Junior          | L   | 0.379      | -            | -                | -                | -         |    -4.27 | buNNy, FeZ, Hansi, Inspire, Speedy    |
|            2 |     2265 | 2022-10-12 | Apeks Rebels         | W   | 0.378      | 0.500        | 0.010 (0.002)    | 0.174 (0.033)    | 0 (0.000) |     8.09 | buNNy, FeZ, Hansi, Inspire, Speedy    |
|            1 |     3733 | 2022-08-20 | MASONIC              | L   | 0.025      | -            | -                | -                | -         |    -0.14 | buNNy, Hansi, Inspire, leakz, Vaegten |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($280.90)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
