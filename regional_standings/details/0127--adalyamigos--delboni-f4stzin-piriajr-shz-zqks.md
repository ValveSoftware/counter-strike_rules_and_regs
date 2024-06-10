### Roster Details<br />
Team Name: adalYamigos<br />
Roster: delboNi, f4stzin, piriajr, shz, zqkS<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [127](../standings_global.md)<br />
Regional Rank: [31]( ../standings_americas.md)<br />
Final Rank Value:  757.4<br />
<br />
Final Rank Value (757.4) = Starting Rank Value (634.2) + Head To Head Adjustments (123.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.324[<sup>2</sup>](#table1)
- Opponent Network: 0.146[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.117<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 634.2
- 400 + ( ( 0.117 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 634.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |     1723 | 2024-04-12 | Case        | L   | 0.809      | -            | -                | -                | -         |    -9.58 | delboNi, f4stzin, piriajr, shz, zqkS |
|           34 |     1743 | 2024-04-11 | Imperial    | L   | 0.802      | -            | -                | -                | -         |    -0.46 | delboNi, f4stzin, piriajr, shz, zqkS |
|           33 |     1832 | 2024-04-09 | MIBR        | L   | 0.788      | -            | -                | -                | -         |    -0.34 | delboNi, f4stzin, piriajr, shz, zqkS |
|           32 |     1836 | 2024-04-09 | MIBR        | L   | 0.788      | -            | -                | -                | -         |    -0.34 | delboNi, f4stzin, piriajr, shz, zqkS |
|           31 |     1908 | 2024-04-07 | Case        | W   | 0.775      | 0.435        | 0.027 (0.009)    | 0.656 (0.221)    | 0 (0.000) |    15.45 | delboNi, f4stzin, piriajr, shz, zqkS |
|           30 |     1943 | 2024-04-05 | ex-2GAME    | L   | 0.761      | -            | -                | -                | -         |   -13.68 | delboNi, f4stzin, piriajr, shz, zqkS |
|           29 |     1944 | 2024-04-05 | ex-2GAME    | W   | 0.761      | 0.450        | -                | 0.161 (0.055)    | 0 (0.000) |    10.37 | delboNi, f4stzin, piriajr, shz, zqkS |
|           28 |     1963 | 2024-04-04 | BESTIA      | W   | 0.755      | 0.450        | 0.031 (0.011)    | 0.631 (0.214)    | 0 (0.000) |    18.09 | delboNi, f4stzin, piriajr, shz, zqkS |
|           27 |     1967 | 2024-04-04 | BESTIA      | L   | 0.755      | -            | -                | -                | -         |    -5.53 | delboNi, f4stzin, piriajr, shz, zqkS |
|           26 |     2455 | 2024-03-12 | Solid       | L   | 0.601      | -            | -                | -                | -         |    -6.46 | delboNi, f4stzin, piriajr, shz, zqkS |
|           25 |     2494 | 2024-03-10 | BESTIA      | W   | 0.588      | 0.435        | 0.031 (0.008)    | 0.631 (0.161)    | 0 (0.000) |    14.94 | delboNi, f4stzin, piriajr, shz, zqkS |
|           24 |     2548 | 2024-03-08 | Flamengo    | W   | 0.573      | -            | -                | -                | 0 (0.000) |     4.16 | delboNi, f4stzin, piriajr, shz, zqkS |
|           23 |     2628 | 2024-03-05 | Case        | W   | 0.555      | 0.450        | 0.027 (0.007)    | 0.656 (0.164)    | 0 (0.000) |    11.94 | delboNi, f4stzin, piriajr, shz, zqkS |
|           22 |     2630 | 2024-03-05 | Case        | W   | 0.555      | 0.450        | 0.027 (0.007)    | 0.656 (0.164)    | 0 (0.000) |    12.44 | delboNi, f4stzin, piriajr, shz, zqkS |
|           21 |     2898 | 2024-02-21 | Galorys     | W   | 0.468      | 0.450        | 0.025 (0.005)    | 0.596 (0.126)    | 0 (0.000) |    10.22 | delboNi, f4stzin, piriajr, shz, zqkS |
|           20 |     2902 | 2024-02-21 | Galorys     | W   | 0.468      | 0.450        | 0.025 (0.005)    | 0.596 (0.125)    | 0 (0.000) |    10.57 | delboNi, f4stzin, piriajr, shz, zqkS |
|           19 |     2978 | 2024-02-18 | Solid       | L   | 0.448      | -            | -                | -                | -         |    -3.40 | delboNi, f4stzin, piriajr, shz, zqkS |
|           18 |     3005 | 2024-02-17 | Imperial    | L   | 0.441      | -            | -                | -                | -         |    -0.13 | delboNi, f4stzin, piriajr, shz, zqkS |
|           17 |     3084 | 2024-02-14 | Corinthians | W   | 0.422      | -            | -                | -                | 0 (0.000) |     6.24 | delboNi, f4stzin, piriajr, shz, zqkS |
|           16 |     3093 | 2024-02-14 | Corinthians | W   | 0.421      | -            | -                | -                | -         |     6.48 | delboNi, f4stzin, piriajr, shz, zqkS |
|           15 |     3126 | 2024-02-13 | Solid       | W   | 0.415      | 0.450        | 0.055 (0.010)    | 0.604 (0.113)    | -         |    10.17 | delboNi, f4stzin, piriajr, shz, zqkS |
|           14 |     3130 | 2024-02-13 | Solid       | W   | 0.415      | 0.450        | 0.055 (0.010)    | 0.604 (0.113)    | -         |    10.42 | delboNi, f4stzin, piriajr, shz, zqkS |
|           13 |     3140 | 2024-02-13 | inSanitY    | W   | 0.412      | -            | -                | -                | -         |     2.54 | delboNi, f4stzin, piriajr, shz, zqkS |
|           12 |     3468 | 2024-01-23 | Sharks      | L   | 0.274      | -            | -                | -                | -         |    -1.16 | delboNi, f4stzin, piriajr, shz, zqkS |
|           11 |     3495 | 2024-01-22 | MIBR        | W   | 0.268      | 0.143        | 0.284 (0.011)    | -                | -         |     8.40 | delboNi, f4stzin, piriajr, shz, zqkS |
|           10 |     3553 | 2024-01-20 | Case        | L   | 0.255      | -            | -                | -                | -         |    -3.95 | delboNi, f4stzin, piriajr, shz, zqkS |
|            9 |     3600 | 2024-01-19 | 9z          | L   | 0.249      | -            | -                | -                | -         |    -0.16 | delboNi, f4stzin, piriajr, shz, zqkS |
|            8 |     3615 | 2024-01-19 | Fluxo       | L   | 0.247      | -            | -                | -                | -         |    -1.02 | delboNi, f4stzin, piriajr, shz, zqkS |
|            7 |     3782 | 2024-01-16 | RED Canids  | L   | 0.227      | -            | -                | -                | -         |    -0.62 | delboNi, f4stzin, piriajr, shz, zqkS |
|            6 |     3802 | 2024-01-16 | ODDIK       | W   | 0.227      | -            | -                | -                | -         |     6.13 | delboNi, f4stzin, piriajr, shz, zqkS |
|            5 |     3947 | 2024-01-11 | Galorys     | W   | 0.195      | -            | -                | -                | -         |     4.86 | delboNi, f4stzin, piriajr, shz, zqkS |
|            4 |     3949 | 2024-01-11 | TIMACETA    | W   | 0.194      | -            | -                | -                | -         |     2.05 | delboNi, f4stzin, piriajr, shz, zqkS |
|            3 |     3954 | 2024-01-11 | ex-2GAME    | W   | 0.194      | -            | -                | -                | -         |     3.77 | delboNi, f4stzin, piriajr, shz, zqkS |
|            2 |     3963 | 2024-01-11 | ex-LRV      | W   | 0.193      | -            | -                | -                | -         |     1.29 | delboNi, f4stzin, piriajr, shz, zqkS |
|            1 |     4021 | 2024-01-09 | Legacy      | L   | 0.180      | -            | -                | -                | -         |    -0.59 | delboNi, f4stzin, piriajr, shz, zqkS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
