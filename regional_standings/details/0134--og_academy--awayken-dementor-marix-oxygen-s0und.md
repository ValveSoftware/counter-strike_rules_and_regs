### Roster Details<br />
Team Name: OG Academy<br />
Roster: AwaykeN, Dementor, Marix, oxygeN, s0und<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [134](../standings_global.md)<br />
Regional Rank: [91]( ../standings_europe.md)<br />
Final Rank Value:  739.7<br />
<br />
Final Rank Value (739.7) = Starting Rank Value (719.6) + Head To Head Adjustments (20.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.306[<sup>1</sup>](#table2)
- Bounty Collected: 0.275[<sup>2</sup>](#table1)
- Opponent Network: 0.044[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.156<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 719.6
- 400 + ( ( 0.156 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 719.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |     1728 | 2022-11-04 | MOUZ NXT        | L   | 0.534      | -            | -                | -                | -         |    -6.83 | AwaykeN, Dementor, Marix, oxygeN, s0und |
|           21 |     1740 | 2022-11-02 | Atlantic        | W   | 0.521      | 0.320        | 0.001 (0.000)    | 0.047 (0.008)    | 0 (0.000) |     6.52 | AwaykeN, Dementor, Marix, oxygeN, s0und |
|           20 |     1752 | 2022-11-01 | ENCE Academy    | L   | 0.514      | -            | -                | -                | -         |    -7.93 | AwaykeN, Dementor, Marix, oxygeN, s0und |
|           19 |     1776 | 2022-10-31 | MOUZ NXT        | L   | 0.507      | -            | -                | -                | -         |    -6.72 | AwaykeN, Dementor, Marix, oxygeN, s0und |
|           18 |     1794 | 2022-10-30 | Astralis Talent | W   | 0.500      | 0.500        | 0.021 (0.005)    | 0.522 (0.131)    | 0 (0.000) |    11.53 | AwaykeN, Dementor, Marix, oxygeN, s0und |
|           17 |     1825 | 2022-10-28 | NAVI Junior     | W   | 0.486      | 0.500        | 0.022 (0.005)    | 0.108 (0.026)    | 0 (0.000) |     8.47 | AwaykeN, Dementor, Marix, oxygeN, s0und |
|           16 |     1833 | 2022-10-28 | MOUZ NXT        | L   | 0.485      | -            | -                | -                | -         |    -6.08 | AwaykeN, Dementor, Marix, oxygeN, s0und |
|           15 |     1844 | 2022-10-27 | Apeks Rebels    | W   | 0.479      | 0.500        | 0.010 (0.002)    | 0.174 (0.042)    | 0 (0.000) |     8.30 | AwaykeN, Dementor, Marix, oxygeN, s0und |
|           14 |     1868 | 2022-10-26 | NAVI Junior     | W   | 0.472      | 0.500        | 0.022 (0.005)    | 0.108 (0.026)    | 0 (0.000) |     8.50 | AwaykeN, Dementor, Marix, oxygeN, s0und |
|           13 |     1874 | 2022-10-26 | Flames Ascent   | W   | 0.471      | 0.500        | 0.001 (0.000)    | 0.120 (0.028)    | 0 (0.000) |     5.85 | AwaykeN, Dementor, Marix, oxygeN, s0und |
|           12 |     1906 | 2022-10-24 | FURIA Academy   | W   | 0.459      | 0.500        | 0.004 (0.001)    | 0.278 (0.064)    | 0 (0.000) |     7.49 | AwaykeN, Dementor, Marix, oxygeN, s0und |
|           11 |     2071 | 2022-10-18 | Believe         | W   | 0.418      | 0.500        | 0.006 (0.001)    | 0.344 (0.072)    | 0 (0.000) |     8.78 | AwaykeN, Dementor, Marix, oxygeN, s0und |
|           10 |     2086 | 2022-10-17 | FURIA Academy   | L   | 0.413      | -            | -                | -                | -         |    -8.06 | AwaykeN, Dementor, Marix, oxygeN, s0und |
|            9 |     2153 | 2022-10-15 | MOUZ NXT        | L   | 0.398      | -            | -                | -                | -         |    -4.45 | AwaykeN, Dementor, Marix, oxygeN, s0und |
|            8 |     2188 | 2022-10-14 | Flames Ascent   | L   | 0.392      | -            | -                | -                | -         |    -7.51 | AwaykeN, Dementor, Marix, oxygeN, s0und |
|            7 |     2193 | 2022-10-14 | Apeks Rebels    | W   | 0.392      | 0.500        | 0.010 (0.002)    | 0.174 (0.034)    | 0 (0.000) |     6.92 | AwaykeN, Dementor, Marix, oxygeN, s0und |
|            6 |     2262 | 2022-10-12 | Believe         | L   | 0.378      | -            | -                | -                | -         |    -4.76 | AwaykeN, Dementor, Marix, oxygeN, s0und |
|            5 |     2447 | 2022-10-02 | Partizan        | L   | 0.312      | -            | -                | -                | -         |    -3.67 | AwaykeN, Dementor, Marix, oxygeN, s0und |
|            4 |     2544 | 2022-09-28 | Beyond Possible | W   | 0.287      | -            | -                | -                | 0 (0.000) |     2.29 | AwaykeN, Dementor, Marix, oxygeN, s0und |
|            3 |     2560 | 2022-09-28 | Juggernauts     | W   | 0.285      | 0.143        | 0.004 (0.000)    | 0.190 (0.008)    | -         |     4.32 | AwaykeN, Dementor, Marix, oxygeN, s0und |
|            2 |     2997 | 2022-09-14 | 9INE            | L   | 0.193      | -            | -                | -                | -         |    -1.44 | AwaykeN, Dementor, Marix, oxygeN, s0und |
|            1 |     3028 | 2022-09-13 | eSuba           | L   | 0.186      | -            | -                | -                | -         |    -1.38 | AwaykeN, Dementor, Marix, oxygeN, s0und |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,560.87)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
