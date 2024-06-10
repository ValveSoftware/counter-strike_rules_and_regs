### Roster Details<br />
Team Name: Galorys<br />
Roster: detr0ittJ, happ, hoax, ninjaZ, Tomate<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [116](../standings_global.md)<br />
Regional Rank: [26]( ../standings_americas.md)<br />
Final Rank Value:  795.5<br />
<br />
Final Rank Value (795.5) = Starting Rank Value (881.6) + Head To Head Adjustments (-86.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.383[<sup>1</sup>](#table2)
- Bounty Collected: 0.353[<sup>2</sup>](#table1)
- Opponent Network: 0.230[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.242<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 881.6
- 400 + ( ( 0.242 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 881.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           81 |       30 | 2024-06-09 | ODDIK        | L   | 1.000      | -            | -                | -                | -         |   -11.72 | detr0ittJ, happ, hoax, ninjaZ, Tomate    |
|           80 |      120 | 2024-06-08 | Case         | W   | 1.000      | 0.450        | 0.027 (0.012)    | 0.656 (0.295)    | 0 (0.000) |    15.24 | detr0ittJ, happ, hoax, ninjaZ, Tomate    |
|           79 |      153 | 2024-06-07 | Imperial     | L   | 1.000      | -            | -                | -                | -         |    -1.18 | detr0ittJ, happ, hoax, ninjaZ, Tomate    |
|           78 |      181 | 2024-06-07 | W7M          | L   | 1.000      | -            | -                | -                | -         |   -18.57 | detr0ittJ, happ, hoax, ninjaZ, Tomate    |
|           77 |      199 | 2024-06-06 | paiN         | L   | 1.000      | -            | -                | -                | -         |    -1.00 | detr0ittJ, happ, hoax, ninjaZ, Tomate    |
|           76 |      213 | 2024-06-06 | Corinthians  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.75 | detr0ittJ, happ, hoax, ninjaZ, Tomate    |
|           75 |      330 | 2024-06-04 | MIBR         | L   | 1.000      | -            | -                | -                | -         |    -0.45 | detr0ittJ, happ, hoax, ninjaZ, piriajr   |
|           74 |      366 | 2024-06-03 | Intense      | L   | 1.000      | -            | -                | -                | -         |   -24.96 | detr0ittJ, happ, hoax, ninjaZ, Tomate    |
|           73 |      416 | 2024-06-01 | Hype         | L   | 1.000      | -            | -                | -                | -         |   -22.00 | detr0ittJ, happ, hoax, ninjaZ, Tomate    |
|           72 |      472 | 2024-05-30 | Hawks        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.12 | detr0ittJ, happ, hoax, ninjaZ, Tomate    |
|           71 |      558 | 2024-05-27 | Dusty Roots  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.80 | detr0ittJ, happ, hoax, ninjaZ, Tomate    |
|           70 |      738 | 2024-05-20 | Case         | L   | 1.000      | -            | -                | -                | -         |   -14.89 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           69 |      761 | 2024-05-19 | Solid        | W   | 1.000      | 0.303        | 0.055 (0.017)    | 0.604 (0.183)    | 0 (0.000) |    16.12 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           68 |      789 | 2024-05-18 | ODDIK        | L   | 1.000      | -            | -                | -                | -         |   -12.42 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           67 |      904 | 2024-05-15 | Hype         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.47 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           66 |      915 | 2024-05-15 | Case         | L   | 1.000      | -            | -                | -                | -         |   -17.47 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           65 |      956 | 2024-05-14 | Case         | L   | 1.000      | -            | -                | -                | -         |   -19.04 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           64 |      960 | 2024-05-14 | Case         | W   | 1.000      | 0.450        | 0.027 (0.012)    | 0.656 (0.295)    | 0 (0.000) |    12.18 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           63 |      972 | 2024-05-14 | 9z           | L   | 1.000      | -            | -                | -                | -         |    -2.18 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           62 |      990 | 2024-05-13 | 9z           | L   | 1.000      | -            | -                | -                | -         |    -2.23 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           61 |      997 | 2024-05-13 | Yawara       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.56 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           60 |     1016 | 2024-05-12 | KRÜ          | W   | 1.000      | -            | -                | -                | 0 (0.000) |    14.59 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           59 |     1056 | 2024-05-11 | Case         | W   | 0.999      | 0.384        | 0.027 (0.010)    | 0.656 (0.252)    | 0 (0.000) |    15.30 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           58 |     1116 | 2024-05-08 | paiN         | L   | 0.980      | -            | -                | -                | -         |    -0.58 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           57 |     1118 | 2024-05-08 | paiN         | L   | 0.980      | -            | -                | -                | -         |    -0.59 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           56 |     1138 | 2024-05-07 | KRÜ          | L   | 0.973      | -            | -                | -                | -         |   -17.28 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           55 |     1175 | 2024-05-05 | W7M          | L   | 0.959      | -            | -                | -                | -         |   -17.77 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           54 |     1481 | 2024-04-20 | Solid        | W   | 0.861      | 0.450        | 0.055 (0.021)    | 0.604 (0.234)    | -         |    13.79 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           53 |     1483 | 2024-04-20 | Solid        | L   | 0.861      | -            | -                | -                | -         |   -13.47 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           52 |     1659 | 2024-04-16 | Case         | L   | 0.835      | -            | -                | -                | -         |   -13.88 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           51 |     1696 | 2024-04-14 | MIBR         | L   | 0.821      | -            | -                | -                | -         |    -0.59 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           50 |     1715 | 2024-04-13 | Fluxo        | W   | 0.813      | 0.435        | 0.064 (0.023)    | 0.670 (0.237)    | -         |    19.33 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           49 |     1724 | 2024-04-12 | Sharks       | W   | 0.808      | 0.435        | 0.028 (0.010)    | -                | -         |    10.02 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           48 |     1742 | 2024-04-11 | Vikings KR   | L   | 0.802      | -            | -                | -                | -         |   -17.36 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           47 |     1751 | 2024-04-11 | BESTIA       | W   | 0.800      | 0.435        | 0.031 (0.011)    | 0.631 (0.219)    | -         |    14.31 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           46 |     1782 | 2024-04-10 | MIBR         | L   | 0.795      | -            | -                | -                | -         |    -0.54 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           45 |     1783 | 2024-04-10 | MIBR         | L   | 0.794      | -            | -                | -                | -         |    -0.54 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           44 |     1833 | 2024-04-09 | BESTIA       | W   | 0.788      | 0.450        | 0.031 (0.011)    | 0.631 (0.224)    | -         |    15.07 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           43 |     1838 | 2024-04-09 | BESTIA       | L   | 0.788      | -            | -                | -                | -         |    -9.75 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           42 |     1911 | 2024-04-07 | paiN         | L   | 0.774      | -            | -                | -                | -         |    -0.40 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           41 |     2142 | 2024-03-27 | Fluxo        | W   | 0.702      | 0.450        | 0.064 (0.020)    | 0.670 (0.212)    | -         |    16.20 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           40 |     2148 | 2024-03-27 | Fluxo        | L   | 0.701      | -            | -                | -                | -         |    -5.81 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           39 |     2188 | 2024-03-26 | ex-2GAME     | W   | 0.695      | -            | -                | -                | -         |     7.63 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           38 |     2190 | 2024-03-26 | ex-2GAME     | W   | 0.695      | -            | -                | -                | -         |     8.07 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           37 |     2384 | 2024-03-14 | W7M          | W   | 0.615      | -            | -                | -                | -         |     8.97 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           36 |     2387 | 2024-03-14 | W7M          | W   | 0.615      | -            | -                | -                | -         |     9.47 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           35 |     2430 | 2024-03-13 | RED Canids   | L   | 0.606      | -            | -                | -                | -         |    -3.67 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           34 |     2473 | 2024-03-11 | LA RUGONETA  | L   | 0.594      | -            | -                | -                | -         |   -14.90 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           33 |     2495 | 2024-03-10 | MIBR         | L   | 0.588      | -            | -                | -                | -         |    -0.34 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           32 |     2553 | 2024-03-08 | ODDIK        | W   | 0.572      | 0.435        | -                | 0.602 (0.150)    | -         |    12.58 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           31 |     2833 | 2024-02-24 | Sharks       | L   | 0.488      | -            | -                | -                | -         |    -4.51 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           30 |     2844 | 2024-02-24 | Sharks       | L   | 0.488      | -            | -                | -                | -         |    -4.68 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           29 |     2865 | 2024-02-23 | Corinthians  | L   | 0.481      | -            | -                | -                | -         |   -11.26 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           28 |     2866 | 2024-02-23 | Corinthians  | W   | 0.481      | -            | -                | -                | -         |     3.91 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           27 |     2883 | 2024-02-22 | MIBR Academy | W   | 0.474      | -            | -                | -                | -         |     3.20 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           26 |     2898 | 2024-02-21 | adalYamigos  | L   | 0.468      | -            | -                | -                | -         |   -10.22 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           25 |     2902 | 2024-02-21 | adalYamigos  | L   | 0.468      | -            | -                | -                | -         |   -10.57 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           24 |     2905 | 2024-02-21 | Sharks       | L   | 0.467      | -            | -                | -                | -         |    -5.12 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           23 |     2977 | 2024-02-18 | Sharks       | L   | 0.448      | -            | -                | -                | -         |    -5.06 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           22 |     2979 | 2024-02-18 | Case         | W   | 0.448      | -            | -                | -                | -         |     7.91 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           21 |     3003 | 2024-02-17 | Sharks       | W   | 0.441      | -            | -                | -                | -         |     9.44 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           20 |     3006 | 2024-02-17 | Corinthians  | W   | 0.440      | -            | -                | -                | -         |     3.56 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           19 |     3028 | 2024-02-16 | Flamengo     | W   | 0.434      | -            | -                | -                | -         |     1.80 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           18 |     3034 | 2024-02-16 | Imperial     | L   | 0.433      | -            | -                | -                | -         |    -0.29 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           17 |     3037 | 2024-02-16 | Imperial     | L   | 0.433      | -            | -                | -                | -         |    -0.29 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           16 |     3062 | 2024-02-15 | 9z Academy   | W   | 0.427      | -            | -                | -                | -         |     1.01 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           15 |     3089 | 2024-02-14 | Solid        | L   | 0.421      | -            | -                | -                | -         |    -5.90 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           14 |     3102 | 2024-02-14 | Sharks       | L   | 0.420      | -            | -                | -                | -         |    -3.98 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           13 |     3138 | 2024-02-13 | Case         | L   | 0.413      | -            | -                | -                | -         |    -6.17 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           12 |     3148 | 2024-02-12 | inSanitY     | W   | 0.408      | -            | -                | -                | -         |     0.92 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           11 |     3492 | 2024-01-22 | 9z           | L   | 0.268      | -            | -                | -                | -         |    -0.55 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           10 |     3554 | 2024-01-20 | Flamengo     | L   | 0.255      | -            | -                | -                | -         |    -6.96 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|            9 |     3603 | 2024-01-19 | Sharks       | L   | 0.248      | -            | -                | -                | -         |    -2.72 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|            8 |     3616 | 2024-01-19 | Imperial     | L   | 0.247      | -            | -                | -                | -         |    -0.19 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|            7 |     3813 | 2024-01-15 | Legacy       | L   | 0.222      | -            | -                | -                | -         |    -2.17 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|            6 |     3869 | 2024-01-13 | Sharks       | L   | 0.208      | -            | -                | -                | -         |    -2.41 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|            5 |     3947 | 2024-01-11 | adalYamigos  | L   | 0.195      | -            | -                | -                | -         |    -4.86 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|            4 |     3948 | 2024-01-11 | Case         | W   | 0.195      | -            | -                | -                | -         |     1.36 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|            3 |     3950 | 2024-01-11 | inSanitY     | W   | 0.194      | -            | -                | -                | -         |     0.40 | antonini, iDk, Maluk3, pesadelo, prt     |
|            2 |     3964 | 2024-01-11 | Vex Dragons  | W   | 0.193      | -            | -                | -                | -         |     0.40 | duzzy, mrcn, pac, spider, Tineu          |
|            1 |     4022 | 2024-01-09 | blockkstar   | L   | 0.180      | -            | -                | -                | -         |    -5.08 | Demonos, drummond, fREQ, proSHOW, suNday |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,484.88)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $1,500.00      | $1,500.00       |
| 2024-04-15 |      0.828 | $5,000.00      | $4,138.02       |
| 2024-04-11 |      0.802 | $592.00        | $474.56         |
| 2024-02-22 |      0.474 | $1,417.00      | $671.90         |
| 2024-02-21 |      0.467 | $1,500.00      | $700.41         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
