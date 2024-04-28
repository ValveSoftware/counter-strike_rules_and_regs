### Roster Details<br />
Team Name: Apeks Rebels<br />
Roster: berzerk, Brave, sense, Tapewaare, vhw<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [114](../standings_global.md)<br />
Regional Rank: [80]( ../standings_europe.md)<br />
Final Rank Value:  762.6<br />
<br />
Final Rank Value (762.6) = Starting Rank Value (781.2) + Head To Head Adjustments (-18.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.334[<sup>1</sup>](#table2)
- Bounty Collected: 0.256[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.121[<sup>2</sup>](#table1)

The average of these factors is 0.186<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 781.2
- 400 + ( ( 0.186 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 781.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |      147 | 2023-02-05 | Young Ninjas  | L   | 1.000      | -            | -                | -                | -         |    -9.59 | berzerk, Brave, sense, Tapewaare, vhw |
|           18 |      187 | 2023-02-03 | Flames Ascent | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.120 (0.017)    | 0 (0.000) |     9.02 | berzerk, Brave, sense, Tapewaare, vhw |
|           17 |     1529 | 2022-11-20 | 777           | L   | 0.640      | -            | -                | -                | -         |   -11.89 | berzerk, Brave, sense, Tapewaare, vhw |
|           16 |     1540 | 2022-11-20 | Genk          | W   | 0.639      | 0.143        | 0.007 (0.001)    | 0.092 (0.008)    | 0 (0.000) |     8.42 | berzerk, Brave, sense, Tapewaare, vhw |
|           15 |     1559 | 2022-11-19 | Illuminar     | L   | 0.631      | -            | -                | -                | -         |    -3.92 | berzerk, Brave, sense, Tapewaare, vhw |
|           14 |     1650 | 2022-11-12 | Wizard        | W   | 0.587      | 0.358        | 0.006 (0.001)    | 0.024 (0.005)    | 1 (0.587) |     7.35 | berzerk, Brave, sense, Tapewaare, vhw |
|           13 |     1653 | 2022-11-12 | 777           | W   | 0.585      | 0.358        | 0.002 (0.000)    | 0.202 (0.042)    | 1 (0.585) |     7.75 | berzerk, Brave, sense, Tapewaare, vhw |
|           12 |     1837 | 2022-10-27 | FURIA Academy | L   | 0.480      | -            | -                | -                | -         |    -8.49 | berzerk, Brave, sense, Tapewaare, vhw |
|           11 |     1844 | 2022-10-27 | OG Academy    | L   | 0.479      | -            | -                | -                | -         |    -8.30 | berzerk, Brave, sense, Tapewaare, vhw |
|           10 |     1846 | 2022-10-27 | Believe       | W   | 0.479      | 0.500        | 0.006 (0.001)    | 0.344 (0.082)    | 0 (0.000) |     8.48 | berzerk, Brave, sense, Tapewaare, vhw |
|            9 |     1872 | 2022-10-26 | Flames Ascent | W   | 0.472      | 0.500        | 0.001 (0.000)    | 0.120 (0.028)    | 0 (0.000) |     4.97 | berzerk, Brave, sense, Tapewaare, vhw |
|            8 |     1892 | 2022-10-25 | NAVI Junior   | W   | 0.466      | 0.500        | 0.022 (0.005)    | 0.108 (0.025)    | 0 (0.000) |     7.83 | berzerk, Brave, sense, Tapewaare, vhw |
|            7 |     1896 | 2022-10-25 | MOUZ NXT      | W   | 0.465      | 0.500        | 0.015 (0.003)    | 0.537 (0.125)    | 0 (0.000) |     8.98 | berzerk, Brave, sense, Tapewaare, vhw |
|            6 |     2066 | 2022-10-18 | FURIA Academy | L   | 0.419      | -            | -                | -                | -         |    -6.93 | berzerk, Brave, sense, Tapewaare, vhw |
|            5 |     2075 | 2022-10-18 | MOUZ NXT      | L   | 0.418      | -            | -                | -                | -         |    -5.36 | berzerk, Brave, sense, Tapewaare, vhw |
|            4 |     2193 | 2022-10-14 | OG Academy    | L   | 0.392      | -            | -                | -                | -         |    -6.92 | berzerk, Brave, sense, Tapewaare, vhw |
|            3 |     2221 | 2022-10-13 | NAVI Junior   | L   | 0.386      | -            | -                | -                | -         |    -6.17 | berzerk, Brave, sense, Tapewaare, vhw |
|            2 |     2227 | 2022-10-13 | Believe       | L   | 0.385      | -            | -                | -                | -         |    -5.68 | berzerk, Brave, sense, Tapewaare, vhw |
|            1 |     2265 | 2022-10-12 | Flames Ascent | L   | 0.378      | -            | -                | -                | -         |    -8.09 | berzerk, Brave, sense, Tapewaare, vhw |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,803.74)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
