### Roster Details<br />
Team Name: NRG<br />
Roster: autimatic, Brehze, HexT, oSee, Walco<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [70](../standings_global.md)<br />
Regional Rank: [17]( ../standings_americas.md)<br />
Final Rank Value:  999.2<br />
<br />
Final Rank Value (999.2) = Starting Rank Value (879.7) + Head To Head Adjustments (119.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.381[<sup>1</sup>](#table2)
- Bounty Collected: 0.366[<sup>2</sup>](#table1)
- Opponent Network: 0.215[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.241<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 879.7
- 400 + ( ( 0.241 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 879.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           79 |       41 | 2024-06-09 | M80              | W   | 1.000      | 0.143        | 0.206 (0.029)    | -                | 0 (0.000) |    26.38 | autimatic, Brehze, HexT, oSee, Walco |
|           78 |      103 | 2024-06-08 | Party Astronauts | W   | 1.000      | -            | -                | -                | 0 (0.000) |    18.98 | autimatic, Brehze, HexT, oSee, Walco |
|           77 |      159 | 2024-06-07 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |   -12.28 | autimatic, Brehze, HexT, oSee, Walco |
|           76 |      202 | 2024-06-06 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |   -14.14 | autimatic, Brehze, HexT, oSee, Walco |
|           75 |      214 | 2024-06-06 | Wildcard         | W   | 1.000      | 0.143        | 0.060 (0.009)    | -                | 0 (0.000) |    18.23 | autimatic, Brehze, HexT, oSee, Walco |
|           74 |      216 | 2024-06-06 | FLUFFY AIMERS    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.70 | autimatic, Brehze, HexT, oSee, Walco |
|           73 |      237 | 2024-06-06 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |   -12.41 | autimatic, Brehze, HexT, oSee, Walco |
|           72 |      270 | 2024-06-05 | LAG              | W   | 1.000      | 0.477        | 0.021 (0.010)    | 0.484 (0.231)    | 0 (0.000) |    12.03 | autimatic, Brehze, HexT, oSee, Walco |
|           71 |      282 | 2024-06-05 | FLUFFY AIMERS    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.27 | autimatic, Brehze, HexT, oSee, Walco |
|           70 |      320 | 2024-06-04 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -11.45 | autimatic, Brehze, HexT, oSee, Walco |
|           69 |      617 | 2024-05-23 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -12.32 | autimatic, Brehze, HexT, oSee, Walco |
|           68 |      634 | 2024-05-22 | Elevate          | L   | 1.000      | -            | -                | -                | -         |   -14.98 | autimatic, Brehze, HexT, oSee, Walco |
|           67 |      639 | 2024-05-22 | Elevate          | L   | 1.000      | -            | -                | -                | -         |   -16.36 | autimatic, Brehze, HexT, oSee, Walco |
|           66 |      662 | 2024-05-22 | Legacy           | W   | 1.000      | 0.384        | 0.087 (0.034)    | 0.461 (0.177)    | 0 (0.000) |    18.84 | autimatic, Brehze, HexT, oSee, Walco |
|           65 |      685 | 2024-05-21 | Take Flyte       | L   | 1.000      | -            | -                | -                | -         |   -23.79 | autimatic, Brehze, HexT, oSee, Walco |
|           64 |      687 | 2024-05-21 | Take Flyte       | W   | 1.000      | 0.477        | -                | 0.348 (0.166)    | 0 (0.000) |     7.21 | autimatic, Brehze, HexT, oSee, Walco |
|           63 |      718 | 2024-05-20 | M80              | L   | 1.000      | -            | -                | -                | -         |    -5.84 | autimatic, Brehze, HexT, oSee, Walco |
|           62 |      723 | 2024-05-20 | M80              | L   | 1.000      | -            | -                | -                | -         |    -6.17 | autimatic, Brehze, HexT, oSee, Walco |
|           61 |      781 | 2024-05-18 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -16.85 | autimatic, Brehze, HexT, oSee, Walco |
|           60 |      786 | 2024-05-18 | Party Astronauts | W   | 1.000      | 0.303        | 0.048 (0.015)    | 0.677 (0.205)    | 0 (0.000) |    14.08 | autimatic, Brehze, HexT, oSee, Walco |
|           59 |      820 | 2024-05-17 | BOSS             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.42 | autimatic, Brehze, HexT, oSee, Walco |
|           58 |      888 | 2024-05-15 | LAG              | W   | 1.000      | 0.477        | 0.021 (0.010)    | 0.484 (0.231)    | -         |     9.56 | autimatic, Brehze, HexT, oSee, Walco |
|           57 |      896 | 2024-05-15 | LAG              | W   | 1.000      | 0.477        | 0.021 (0.010)    | 0.484 (0.231)    | -         |    10.32 | autimatic, Brehze, HexT, oSee, Walco |
|           56 |      941 | 2024-05-14 | One More         | W   | 1.000      | -            | -                | -                | -         |     5.79 | autimatic, Brehze, HexT, oSee, Walco |
|           55 |      947 | 2024-05-14 | One More         | W   | 1.000      | -            | -                | -                | -         |     6.11 | autimatic, Brehze, HexT, oSee, Walco |
|           54 |     1011 | 2024-05-12 | Take Flyte       | W   | 1.000      | -            | -                | -                | -         |     9.23 | autimatic, Brehze, HexT, oSee, Walco |
|           53 |     1013 | 2024-05-12 | Elevate          | W   | 1.000      | -            | -                | -                | -         |    15.67 | autimatic, Brehze, HexT, oSee, Walco |
|           52 |     1043 | 2024-05-11 | Take Flyte       | W   | 1.000      | -            | -                | -                | -         |     9.14 | autimatic, Brehze, HexT, oSee, Walco |
|           51 |     1045 | 2024-05-11 | BOSS             | W   | 1.000      | -            | -                | -                | -         |    11.95 | autimatic, Brehze, HexT, oSee, Walco |
|           50 |     1147 | 2024-05-06 | Party Astronauts | W   | 0.969      | 0.477        | 0.048 (0.022)    | 0.677 (0.313)    | -         |    18.63 | autimatic, Brehze, HexT, oSee, Walco |
|           49 |     1148 | 2024-05-06 | Party Astronauts | L   | 0.968      | -            | -                | -                | -         |   -11.64 | autimatic, Brehze, HexT, oSee, Walco |
|           48 |     1383 | 2024-04-25 | Wildcard         | L   | 0.895      | -            | -                | -                | -         |   -12.42 | autimatic, Brehze, HexT, oSee, Walco |
|           47 |     1385 | 2024-04-25 | Wildcard         | W   | 0.895      | 0.477        | 0.060 (0.026)    | 0.591 (0.252)    | -         |    16.04 | autimatic, Brehze, HexT, oSee, Walco |
|           46 |     1621 | 2024-04-17 | OMiT             | L   | 0.841      | -            | -                | -                | -         |   -18.99 | autimatic, Brehze, HexT, oSee, Walco |
|           45 |     1680 | 2024-04-15 | Mythic           | W   | 0.828      | 0.477        | -                | 0.391 (0.155)    | -         |     9.10 | autimatic, Brehze, HexT, oSee, Walco |
|           44 |     1681 | 2024-04-15 | Mythic           | W   | 0.828      | -            | -                | -                | -         |     9.73 | autimatic, Brehze, HexT, oSee, Walco |
|           43 |     1767 | 2024-04-10 | BOSS             | W   | 0.795      | -            | -                | -                | -         |    11.26 | autimatic, Brehze, HexT, oSee, Walco |
|           42 |     1772 | 2024-04-10 | BOSS             | L   | 0.795      | -            | -                | -                | -         |   -14.06 | autimatic, Brehze, HexT, oSee, Walco |
|           41 |     1826 | 2024-04-09 | Carpe Diem       | W   | 0.789      | -            | -                | -                | -         |     6.57 | autimatic, Brehze, HexT, oSee, Walco |
|           40 |     1829 | 2024-04-09 | Carpe Diem       | W   | 0.788      | -            | -                | -                | -         |     6.94 | autimatic, Brehze, HexT, oSee, Walco |
|           39 |     2130 | 2024-03-27 | Nouns            | W   | 0.703      | 0.477        | 0.064 (0.021)    | 0.567 (0.190)    | -         |    14.52 | autimatic, Brehze, HexT, oSee, Walco |
|           38 |     2135 | 2024-03-27 | Nouns            | L   | 0.702      | -            | -                | -                | -         |    -7.60 | autimatic, Brehze, HexT, oSee, Walco |
|           37 |     2182 | 2024-03-26 | MIGHT            | W   | 0.696      | -            | -                | -                | -         |     3.64 | autimatic, Brehze, HexT, oSee, Walco |
|           36 |     2187 | 2024-03-26 | MIGHT            | W   | 0.695      | -            | -                | -                | -         |     3.77 | autimatic, Brehze, HexT, oSee, Walco |
|           35 |     2353 | 2024-03-15 | FLUFFY AIMERS    | W   | 0.622      | -            | -                | -                | -         |     8.83 | autimatic, Brehze, HexT, oSee, Walco |
|           34 |     2355 | 2024-03-15 | FLUFFY AIMERS    | L   | 0.622      | -            | -                | -                | -         |   -11.03 | autimatic, Brehze, HexT, oSee, Walco |
|           33 |     2373 | 2024-03-14 | Limitless        | W   | 0.616      | -            | -                | -                | -         |     4.28 | autimatic, Brehze, HexT, oSee, Walco |
|           32 |     2378 | 2024-03-14 | Limitless        | W   | 0.615      | -            | -                | -                | -         |     4.45 | autimatic, Brehze, HexT, oSee, Walco |
|           31 |     2451 | 2024-03-12 | Carpe Diem       | L   | 0.602      | -            | -                | -                | -         |   -12.29 | autimatic, Brehze, HexT, oSee, Walco |
|           30 |     2706 | 2024-03-02 | MIBR             | L   | 0.533      | -            | -                | -                | -         |    -0.40 | Brehze, daps, FaNg, HexT, oSee       |
|           29 |     2725 | 2024-03-01 | Imperial         | L   | 0.527      | -            | -                | -                | -         |    -0.57 | Brehze, daps, FaNg, HexT, oSee       |
|           28 |     2831 | 2024-02-24 | Wildcard         | L   | 0.489      | -            | -                | -                | -         |    -5.87 | Brehze, daps, FaNg, HexT, oSee       |
|           27 |     2834 | 2024-02-24 | Limitless        | W   | 0.488      | -            | -                | -                | -         |     3.56 | Brehze, daps, FaNg, HexT, oSee       |
|           26 |     2840 | 2024-02-24 | Mythic           | W   | 0.488      | -            | -                | -                | -         |     7.04 | Brehze, daps, FaNg, HexT, oSee       |
|           25 |     2876 | 2024-02-22 | Party Astronauts | L   | 0.475      | -            | -                | -                | -         |    -6.02 | Brehze, daps, FaNg, HexT, oSee       |
|           24 |     2880 | 2024-02-22 | Wildcard         | W   | 0.475      | -            | -                | -                | -         |     9.36 | Brehze, daps, FaNg, HexT, oSee       |
|           23 |     2928 | 2024-02-20 | Party Astronauts | L   | 0.463      | -            | -                | -                | -         |    -5.98 | Brehze, daps, FaNg, HexT, oSee       |
|           22 |     2953 | 2024-02-19 | Party Astronauts | W   | 0.456      | -            | -                | -                | -         |     8.57 | Brehze, daps, FaNg, HexT, oSee       |
|           21 |     2955 | 2024-02-19 | Mythic           | W   | 0.455      | -            | -                | -                | -         |     6.97 | Brehze, daps, FaNg, HexT, oSee       |
|           20 |     3256 | 2024-02-03 | Elevate          | L   | 0.348      | -            | -                | -                | -         |    -5.35 | Brehze, daps, FaNg, HexT, oSee       |
|           19 |     3282 | 2024-02-02 | Party Astronauts | W   | 0.342      | -            | -                | -                | -         |     6.61 | Brehze, daps, FaNg, HexT, oSee       |
|           18 |     3286 | 2024-02-02 | Wildcard         | L   | 0.341      | -            | -                | -                | -         |    -3.87 | Brehze, daps, FaNg, HexT, oSee       |
|           17 |     3288 | 2024-02-02 | Party Astronauts | W   | 0.341      | -            | -                | -                | -         |     6.68 | Brehze, daps, FaNg, HexT, oSee       |
|           16 |     3664 | 2024-01-18 | Wildcard         | L   | 0.241      | -            | -                | -                | -         |    -2.85 | Brehze, daps, FaNg, HexT, oSee       |
|           15 |     3668 | 2024-01-18 | Elevate          | W   | 0.241      | -            | -                | -                | -         |     3.89 | Brehze, daps, FaNg, HexT, oSee       |
|           14 |     3714 | 2024-01-17 | squids           | W   | 0.235      | -            | -                | -                | -         |     0.48 | Brehze, daps, FaNg, HexT, oSee       |
|           13 |     3765 | 2024-01-16 | Elevate          | L   | 0.228      | -            | -                | -                | -         |    -3.56 | Brehze, daps, FaNg, HexT, oSee       |
|           12 |     3771 | 2024-01-16 | regain           | W   | 0.228      | -            | -                | -                | -         |     0.47 | Brehze, daps, FaNg, HexT, oSee       |
|           11 |     3811 | 2024-01-15 | TSM Shimmer      | W   | 0.222      | -            | -                | -                | -         |     2.07 | Brehze, daps, FaNg, HexT, oSee       |
|           10 |     3840 | 2024-01-14 | Rocket           | L   | 0.216      | -            | -                | -                | -         |    -5.96 | Brehze, daps, FaNg, HexT, oSee       |
|            9 |     3850 | 2024-01-14 | LOS              | W   | 0.214      | -            | -                | -                | -         |     0.43 | Brehze, daps, FaNg, HexT, oSee       |
|            8 |     3866 | 2024-01-13 | Nouns            | L   | 0.208      | -            | -                | -                | -         |    -2.65 | Brehze, daps, FaNg, HexT, oSee       |
|            7 |     3905 | 2024-01-12 | Complexity       | L   | 0.203      | -            | -                | -                | -         |    -0.09 | Brehze, daps, FaNg, HexT, oSee       |
|            6 |     3914 | 2024-01-12 | Elevate          | W   | 0.202      | -            | -                | -                | -         |     3.08 | Brehze, daps, FaNg, HexT, oSee       |
|            5 |     3996 | 2024-01-09 | Liquid           | L   | 0.183      | -            | -                | -                | -         |    -0.06 | Brehze, daps, FaNg, HexT, oSee       |
|            4 |     3997 | 2024-01-09 | Akimbo           | W   | 0.183      | -            | -                | -                | -         |     1.58 | Brehze, daps, FaNg, HexT, oSee       |
|            3 |     4000 | 2024-01-09 | MagicLight       | W   | 0.183      | -            | -                | -                | -         |     0.37 | Brehze, daps, FaNg, HexT, oSee       |
|            2 |     4148 | 2023-12-16 | LAG              | W   | 0.022      | -            | -                | -                | -         |     0.39 | Brehze, daps, FaNg, HexT, oSee       |
|            1 |     4176 | 2023-12-15 | Revenge Nation   | W   | 0.015      | -            | -                | -                | -         |     0.13 | Brehze, daps, FaNg, HexT, oSee       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,250.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $4,250.00      | $4,250.00       |
| 2024-05-18 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-05-12 |      1.000 | $2,000.00      | $2,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
