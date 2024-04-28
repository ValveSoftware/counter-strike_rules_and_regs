### Roster Details<br />
Team Name: 7AM NA<br />
Roster: AtomiK, Drew, Izik, SolGoat, TiCx<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [211](../standings_global.md)<br />
Regional Rank: [68]( ../standings_americas.md)<br />
Final Rank Value:  557.3<br />
<br />
Final Rank Value (557.3) = Starting Rank Value (555.2) + Head To Head Adjustments (2.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.238[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.050[<sup>2</sup>](#table1)

The average of these factors is 0.076<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 555.2
- 400 + ( ( 0.076 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 555.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |     1057 | 2022-12-07 | Strife         | W   | 0.756      | 0.435        | 0.015 (0.005)    | 0.314 (0.103)    | 0 (0.000) |    19.32 | AtomiK, Drew, Izik, SolGoat, TiCx             |
|           30 |     1097 | 2022-12-06 | Snakes Den     | L   | 0.749      | -            | -                | -                | -         |    -9.27 | AtomiK, Drew, Izik, SolGoat, TiCx             |
|           29 |     1137 | 2022-12-05 | MIBR           | L   | 0.742      | -            | -                | -                | -         |    -2.27 | AtomiK, Drew, Izik, SolGoat, TiCx             |
|           28 |     1265 | 2022-12-01 | Detonate       | L   | 0.716      | -            | -                | -                | -         |    -5.79 | AtomiK, Drew, Izik, SolGoat, TiCx             |
|           27 |     1293 | 2022-11-30 | timbermen      | L   | 0.709      | -            | -                | -                | -         |    -4.25 | AtomiK, Drew, Izik, SolGoat, TiCx             |
|           26 |     1323 | 2022-11-29 | EG Black       | L   | 0.702      | -            | -                | -                | -         |    -3.35 | AtomiK, Drew, Izik, SolGoat, TiCx             |
|           25 |     1633 | 2022-11-15 | TeamOne        | L   | 0.609      | -            | -                | -                | -         |    -2.60 | AtomiK, Drew, Izik, Slugy, SolGoat            |
|           24 |     2080 | 2022-10-17 | Villainous     | W   | 0.416      | 0.143        | 0.003 (0.000)    | 0.097 (0.006)    | 0 (0.000) |     8.07 | Alvin, omniscient, shutout, tatm, zebra       |
|           23 |     2163 | 2022-10-14 | Red Wolves     | L   | 0.396      | -            | -                | -                | -         |    -4.62 | AtomiK, Drew, Izik, Slugy, SolGoat            |
|           22 |     2202 | 2022-10-13 | X13            | W   | 0.389      | 0.143        | 0.001 (0.000)    | 0.090 (0.005)    | 0 (0.000) |     7.76 | AtomiK, Drew, Izik, Slugy, SolGoat            |
|           21 |     2237 | 2022-10-12 | Villainous     | L   | 0.382      | -            | -                | -                | -         |    -4.44 | AtomiK, Drew, Izik, Slugy, SolGoat            |
|           20 |     2506 | 2022-09-29 | Phantom Troupe | L   | 0.296      | -            | -                | -                | -         |    -3.75 | AtomiK, Drew, Izik, Slugy, SolGoat            |
|           19 |     2537 | 2022-09-28 | Task Force 141 | W   | 0.289      | 0.435        | 0.000 (0.000)    | 0.030 (0.004)    | 0 (0.000) |     4.01 | jermanji, landmaz, LEARSI, Noxio, Viathan     |
|           18 |     2586 | 2022-09-26 | Disconnected   | L   | 0.275      | -            | -                | -                | -         |    -2.42 | aris, BeaKie, brett, silas, Swahn             |
|           17 |     2766 | 2022-09-21 | Strife         | L   | 0.242      | -            | -                | -                | -         |    -3.09 | AtomiK, Drew, Izik, Slugy, SolGoat            |
|           16 |     2796 | 2022-09-20 | timbermen      | L   | 0.235      | -            | -                | -                | -         |    -1.58 | AtomiK, Drew, Izik, Slugy, SolGoat            |
|           15 |     2822 | 2022-09-19 | Nouns          | L   | 0.229      | -            | -                | -                | -         |    -2.00 | AtomiK, Drew, Izik, Slugy, SolGoat            |
|           14 |     2874 | 2022-09-17 | Limitless      | W   | 0.214      | 0.384        | 0.007 (0.001)    | 0.287 (0.024)    | 0 (0.000) |     5.06 | AtomiK, Drew, Izik, Slugy, SolGoat            |
|           13 |     2931 | 2022-09-15 | Take Flyte     | W   | 0.202      | 0.384        | 0.000 (0.000)    | 0.027 (0.002)    | 0 (0.000) |     2.62 | AtomiK, Drew, Izik, Slugy, SolGoat            |
|           12 |     2939 | 2022-09-15 | ATK            | L   | 0.201      | -            | -                | -                | -         |    -0.64 | b0denmaster, Fadey, MisteM, motm, Swisher     |
|           11 |     2981 | 2022-09-14 | EG Black       | L   | 0.195      | -            | -                | -                | -         |    -0.93 | AtomiK, Drew, Izik, Slugy, SolGoat            |
|           10 |     3014 | 2022-09-13 | X13            | W   | 0.189      | 0.384        | 0.001 (0.000)    | 0.090 (0.007)    | 0 (0.000) |     3.78 | AtomiK, Drew, Izik, Slugy, SolGoat            |
|            9 |     3102 | 2022-09-10 | timbermen      | L   | 0.168      | -            | -                | -                | -         |    -1.09 | Drew, Izik, Mellow, Slugy, SolGoat            |
|            8 |     3124 | 2022-09-10 | Argon          | W   | 0.167      | 0.500        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.167) |     1.54 | Drew, Izik, Mellow, Slugy, SolGoat            |
|            7 |     3134 | 2022-09-10 | timbermen      | L   | 0.166      | -            | -                | -                | -         |    -1.07 | Drew, Izik, Mellow, Slugy, SolGoat            |
|            6 |     3157 | 2022-09-09 | Limitless      | W   | 0.161      | 0.143        | 0.007 (0.000)    | 0.287 (0.007)    | 1 (0.161) |     3.85 | JBa, kmrn, Makzwell, scar, stamina            |
|            5 |     3183 | 2022-09-09 | TeamOne        | L   | 0.159      | -            | -                | -                | -         |    -0.65 | Drew, Izik, Mellow, Slugy, SolGoat            |
|            4 |     3203 | 2022-09-08 | EX CINERE      | W   | 0.154      | 0.143        | 0.002 (0.000)    | 0.064 (0.001)    | 1 (0.154) |     3.06 | Beastman, Drewtheshrew, gir, Livid, PoseidoNN |
|            3 |     3303 | 2022-09-03 | Disconnected   | L   | 0.122      | -            | -                | -                | -         |    -1.03 | AtomiK, Drew, Izik, Slugy, SolGoat            |
|            2 |     3403 | 2022-08-31 | Strife         | L   | 0.102      | -            | -                | -                | -         |    -1.27 | AtomiK, Drew, Izik, Slugy, SolGoat            |
|            1 |     3422 | 2022-08-30 | Vendetta       | L   | 0.095      | -            | -                | -                | -         |    -0.90 | consti, Momo, Pluto, Spongey, Tender          |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
