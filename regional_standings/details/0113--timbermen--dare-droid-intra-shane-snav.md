### Roster Details<br />
Team Name: timbermen<br />
Roster: dare, droid, intra, shane, snav<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [113](../standings_global.md)<br />
Regional Rank: [28]( ../standings_americas.md)<br />
Final Rank Value:  765.9<br />
<br />
Final Rank Value (765.9) = Starting Rank Value (802.4) + Head To Head Adjustments (-36.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.358[<sup>1</sup>](#table2)
- Bounty Collected: 0.317[<sup>2</sup>](#table1)
- Opponent Network: 0.077[<sup>2</sup>](#table1)
- LAN Wins: 0.035[<sup>2</sup>](#table1)

The average of these factors is 0.197<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 802.4
- 400 + ( ( 0.197 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 802.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           52 |      255 | 2023-01-31 | Limitless      | W   | 1.000      | 0.435        | 0.007 (0.003)    | 0.287 (0.125)    | 0 (0.000) |    14.59 | dare, droid, intra, shane, snav          |
|           51 |      323 | 2023-01-28 | Vendetta       | L   | 1.000      | -            | -                | -                | -         |   -11.73 | dare, droid, intra, shane, snav          |
|           50 |      368 | 2023-01-27 | Vendetta       | L   | 1.000      | -            | -                | -                | -         |   -14.64 | dare, droid, intra, shane, snav          |
|           49 |      460 | 2023-01-24 | ATK            | L   | 1.000      | -            | -                | -                | -         |    -7.28 | dare, droid, intra, shane, snav          |
|           48 |      541 | 2023-01-21 | Strife         | L   | 1.000      | -            | -                | -                | -         |   -13.73 | dare, droid, intra, shane, snav          |
|           47 |      856 | 2022-12-15 | TeamOne        | L   | 0.809      | -            | -                | -                | -         |    -8.65 | dare, droid, intra, shane, snav          |
|           46 |      885 | 2022-12-14 | Vendetta       | W   | 0.802      | 0.435        | 0.017 (0.006)    | 0.361 (0.126)    | 0 (0.000) |    11.46 | chop, CLASIA, consti, Pluto, Tender      |
|           45 |      905 | 2022-12-13 | Nouns          | L   | 0.795      | -            | -                | -                | -         |    -8.34 | Bwills, cJ, cynic, nosraC, stamina       |
|           44 |      935 | 2022-12-11 | MIBR           | L   | 0.782      | -            | -                | -                | -         |    -7.82 | dare, droid, intra, shane, snav          |
|           43 |      938 | 2022-12-11 | ATK            | L   | 0.781      | -            | -                | -                | -         |    -7.05 | dare, droid, intra, shane, snav          |
|           42 |      970 | 2022-12-10 | paiN           | W   | 0.775      | 0.354        | 0.101 (0.028)    | 0.402 (0.110)    | 0 (0.000) |    20.12 | dare, droid, intra, shane, snav          |
|           41 |     1058 | 2022-12-07 | TeamOne        | L   | 0.755      | -            | -                | -                | -         |    -8.20 | iDk, malbsMd, Maluk3, pesadelo, trk      |
|           40 |     1268 | 2022-12-01 | Strife         | L   | 0.715      | -            | -                | -                | -         |   -12.09 | dare, droid, intra, shane, snav          |
|           39 |     1293 | 2022-11-30 | 7AM NA         | W   | 0.709      | 0.435        | -                | 0.107 (0.033)    | 0 (0.000) |     4.25 | dare, droid, intra, shane, snav          |
|           38 |     1344 | 2022-11-28 | EG Black       | L   | 0.696      | -            | -                | -                | -         |    -9.72 | RUSH, stanislaw, viz, Walco, wiz         |
|           37 |     1407 | 2022-11-26 | Complexity     | L   | 0.682      | -            | -                | -                | -         |    -1.24 | dare, droid, intra, shane, snav          |
|           36 |     1440 | 2022-11-25 | MIBR           | W   | 0.676      | 0.435        | 0.089 (0.026)    | 0.586 (0.172)    | 0 (0.000) |    14.84 | dare, droid, intra, shane, snav          |
|           35 |     1488 | 2022-11-23 | Snakes Den     | W   | 0.662      | 0.435        | 0.002 (0.000)    | -                | 0 (0.000) |     5.61 | dare, droid, intra, shane, snav          |
|           34 |     1505 | 2022-11-22 | Detonate       | W   | 0.656      | 0.435        | 0.008 (0.002)    | 0.400 (0.114)    | 0 (0.000) |     9.12 | brett, Cryptic, Florence, freshie, micro |
|           33 |     2000 | 2022-10-20 | ATK            | L   | 0.435      | -            | -                | -                | -         |    -4.28 | dare, droid, intra, shane, snav          |
|           32 |     2026 | 2022-10-19 | Vendetta       | W   | 0.429      | 0.435        | 0.007 (0.001)    | 0.107 (0.020)    | 0 (0.000) |     5.33 | dare, droid, intra, shane, snav          |
|           31 |     2052 | 2022-10-18 | MIBR           | L   | 0.422      | -            | -                | -                | -         |    -3.55 | dare, droid, intra, shane, snav          |
|           30 |     2098 | 2022-10-16 | Nouns          | L   | 0.409      | -            | -                | -                | -         |    -5.35 | cJ, J0LZ, MarKE, nosraC, XotiC           |
|           29 |     2100 | 2022-10-16 | ATK            | L   | 0.408      | -            | -                | -                | -         |    -4.15 | dare, droid, intra, shane, snav          |
|           28 |     2534 | 2022-09-28 | Disconnected   | W   | 0.289      | 0.435        | 0.008 (0.001)    | 0.225 (0.028)    | -         |     3.63 | dare, droid, intra, shane, snav          |
|           27 |     2572 | 2022-09-27 | Task Force 141 | W   | 0.282      | -            | -                | -                | -         |     1.50 | jermanji, landmaz, LEARSI, Noxio, Wolffe |
|           26 |     2602 | 2022-09-25 | TropiCaos      | W   | 0.269      | 0.354        | 0.014 (0.001)    | 0.222 (0.021)    | -         |     3.54 | dzt, land1n, mawth, prt, tatazin         |
|           25 |     2610 | 2022-09-25 | Task Force 141 | W   | 0.268      | -            | -                | -                | -         |     1.48 | dare, droid, intra, KEL, snav            |
|           24 |     2642 | 2022-09-24 | Mythic         | W   | 0.262      | 0.354        | -                | 0.203 (0.019)    | -         |     2.87 | Cooper, fl0m, hate, Keiti, tweiss        |
|           23 |     2764 | 2022-09-21 | Vendetta       | L   | 0.242      | -            | -                | -                | -         |    -4.76 | consti, Momo, Pluto, Tender, WOOHOO      |
|           22 |     2796 | 2022-09-20 | 7AM NA         | W   | 0.235      | -            | -                | -                | -         |     1.58 | AtomiK, Drew, Izik, Slugy, SolGoat       |
|           21 |     2840 | 2022-09-18 | ChocoCheck     | L   | 0.222      | -            | -                | -                | -         |    -4.83 | dare, droid, intra, shane, snav          |
|           20 |     2846 | 2022-09-18 | Mythic         | W   | 0.221      | -            | -                | -                | -         |     2.45 | dare, droid, intra, shane, snav          |
|           19 |     2936 | 2022-09-15 | Disconnected   | L   | 0.201      | -            | -                | -                | -         |    -3.80 | aris, BeaKie, brett, silas, Swahn        |
|           18 |     2977 | 2022-09-14 | EG Black       | W   | 0.195      | 0.143        | 0.024 (0.001)    | -                | -         |     3.65 | chop, RUSH, stanislaw, Walco, wiz        |
|           17 |     2983 | 2022-09-14 | Brazen         | W   | 0.195      | -            | -                | -                | -         |     1.72 | Danejoris, grape, Infinite, Pol0, RZU    |
|           16 |     3076 | 2022-09-11 | EG White       | L   | 0.173      | -            | -                | -                | -         |    -2.12 | ben1337, djay, Jonji, PwnAlone, viz      |
|           15 |     3102 | 2022-09-10 | 7AM NA         | W   | 0.168      | -            | -                | -                | 1 (0.168) |     1.09 | Drew, Izik, Mellow, Slugy, SolGoat       |
|           14 |     3125 | 2022-09-10 | BIG Academy    | L   | 0.167      | -            | -                | -                | -         |    -1.09 | dare, droid, intra, shane, snav          |
|           13 |     3134 | 2022-09-10 | 7AM NA         | W   | 0.166      | -            | -                | -                | 1 (0.166) |     1.07 | Drew, Izik, Mellow, Slugy, SolGoat       |
|           12 |     3230 | 2022-09-07 | TeamOne        | L   | 0.148      | -            | -                | -                | -         |    -1.76 | dare, droid, intra, shane, snav          |
|           11 |     3232 | 2022-09-07 | Vendetta       | W   | 0.147      | -            | -                | -                | -         |     1.74 | dare, droid, intra, shane, snav          |
|           10 |     3248 | 2022-09-06 | 1 JIN          | W   | 0.142      | -            | -                | -                | -         |     1.57 | dare, droid, intra, shane, snav          |
|            9 |     3278 | 2022-09-04 | Cartel terraza | L   | 0.128      | -            | -                | -                | -         |    -2.78 | dare, droid, intra, shane, snav          |
|            8 |     3306 | 2022-09-03 | Limitless      | W   | 0.122      | -            | -                | -                | -         |     1.72 | dare, droid, intra, shane, snav          |
|            7 |     3377 | 2022-09-01 | Strife         | L   | 0.108      | -            | -                | -                | -         |    -2.45 | dare, droid, intra, shane, snav          |
|            6 |     3405 | 2022-08-31 | Task Force 141 | W   | 0.102      | -            | -                | -                | -         |     0.56 | dare, droid, intra, shane, snav          |
|            5 |     3421 | 2022-08-30 | ATK            | L   | 0.095      | -            | -                | -                | -         |    -0.93 | dare, droid, intra, shane, snav          |
|            4 |     3455 | 2022-08-28 | Brazen         | W   | 0.082      | -            | -                | -                | -         |     0.72 | dare, droid, intra, shane, snav          |
|            3 |     3584 | 2022-08-24 | Nouns          | L   | 0.055      | -            | -                | -                | -         |    -1.02 | dare, droid, intra, shane, snav          |
|            2 |     3596 | 2022-08-23 | Strife         | W   | 0.049      | -            | -                | -                | -         |     0.42 | dare, droid, intra, shane, snav          |
|            1 |     3744 | 2022-08-18 | Cartel terraza | W   | 0.015      | -            | -                | -                | -         |     0.15 | dare, droid, intra, shane, snav          |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,644.41)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-18 |      0.829 | $2,500.00      | $2,072.15       |
| 2022-10-23 |      0.455 | $2,500.00      | $1,138.35       |
| 2022-09-25 |      0.269 | $9,000.00      | $2,420.77       |
| 2022-09-18 |      0.222 | $4,000.00      | $888.83         |
| 2022-09-11 |      0.176 | $5,000.00      | $879.22         |
| 2022-08-28 |      0.082 | $3,000.00      | $245.09         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
