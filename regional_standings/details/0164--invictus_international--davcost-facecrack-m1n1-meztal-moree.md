### Roster Details<br />
Team Name: Invictus International<br />
Roster: DavCost, facecrack, m1N1, meztal, MOREE<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [164](../standings_global.md)<br />
Regional Rank: [12]( ../standings_asia.md)<br />
Final Rank Value:  692.6<br />
<br />
Final Rank Value (692.6) = Starting Rank Value (720.9) + Head To Head Adjustments (-28.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.251[<sup>1</sup>](#table2)
- Bounty Collected: 0.281[<sup>2</sup>](#table1)
- Opponent Network: 0.059[<sup>2</sup>](#table1)
- LAN Wins: 0.036[<sup>2</sup>](#table1)

The average of these factors is 0.157<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 720.9
- 400 + ( ( 0.157 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 720.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |       15 | 2023-02-12 | Zero Tenacity | L   | 1.000      | -            | -                | -                | -         |   -14.13 | DavCost, facecrack, m1N1, meztal, MOREE        |
|           22 |      538 | 2023-01-22 | MASONIC       | L   | 1.000      | -            | -                | -                | -         |   -11.74 | DavCost, facecrack, m1N1, meztal, MOREE        |
|           21 |      595 | 2023-01-19 | 500           | L   | 1.000      | -            | -                | -                | -         |    -3.86 | DavCost, facecrack, m1N1, meztal, MOREE        |
|           20 |      691 | 2023-01-15 | iNation       | L   | 1.000      | -            | -                | -                | -         |    -5.03 | DavCost, facecrack, meztal, MOREE, Svedjehed   |
|           19 |      726 | 2023-01-09 | Viperio       | L   | 0.972      | -            | -                | -                | -         |   -16.20 | DavCost, facecrack, FinigaN, MOREE, Svedjehed  |
|           18 |      772 | 2022-12-18 | Partizan      | L   | 0.827      | -            | -                | -                | -         |    -9.59 | DavCost, facecrack, meztal, MOREE, shushan     |
|           17 |      870 | 2022-12-15 | WLG           | W   | 0.806      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.97 | DavCost, facecrack, meztal, MOREE, shushan     |
|           16 |      878 | 2022-12-15 | Zero Tenacity | L   | 0.805      | -            | -                | -                | -         |   -11.90 | DavCost, facecrack, meztal, MOREE, shushan     |
|           15 |      893 | 2022-12-14 | WLG           | W   | 0.799      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.86 | DavCost, facecrack, meztal, MOREE, shushan     |
|           14 |     1041 | 2022-12-08 | Nexus         | W   | 0.760      | 0.477        | 0.001 (0.000)    | 0.162 (0.059)    | 0 (0.000) |    12.34 | Bibu, DavCost, facecrack, meztal, MOREE        |
|           13 |     1068 | 2022-12-07 | PROSPECTS     | W   | 0.754      | 0.477        | 0.032 (0.012)    | 0.689 (0.248)    | 0 (0.000) |    17.79 | Bibu, DavCost, facecrack, meztal, MOREE        |
|           12 |     1146 | 2022-12-05 | MASONIC       | L   | 0.739      | -            | -                | -                | -         |    -6.75 | Bibu, DavCost, facecrack, meztal, MOREE        |
|           11 |     1224 | 2022-12-03 | Endpoint      | W   | 0.726      | 0.477        | 0.033 (0.011)    | 0.641 (0.222)    | 0 (0.000) |    17.34 | Bibu, DavCost, facecrack, meztal, MOREE        |
|           10 |     1283 | 2022-12-01 | Tricked       | L   | 0.712      | -            | -                | -                | -         |    -5.42 | Bibu, DavCost, facecrack, meztal, MOREE        |
|            9 |     1305 | 2022-11-30 | PROSPECTS     | L   | 0.706      | -            | -                | -                | -         |    -4.60 | Bibu, DavCost, facecrack, meztal, MOREE        |
|            8 |     1792 | 2022-10-30 | HONORIS       | L   | 0.500      | -            | -                | -                | -         |    -4.29 | BluePho3nix, DavCost, facecrack, meztal, MOREE |
|            7 |     1796 | 2022-10-30 | Coalesce      | W   | 0.499      | 0.294        | 0.008 (0.001)    | 0.315 (0.046)    | 0 (0.000) |     7.91 | AZUWU, dox, Krs7N, leaf, shyyne                |
|            6 |     2318 | 2022-10-08 | Grayhound     | L   | 0.356      | -            | -                | -                | -         |    -3.96 | aliStair, INS, Liazz, Sico, Vexite             |
|            5 |     2335 | 2022-10-07 | Rare Atom     | W   | 0.349      | 0.143        | 0.062 (0.003)    | 0.228 (0.011)    | 1 (0.349) |     6.87 | advent, JamYoung, Kaze, Mercury, Moseyuh       |
|            4 |     2356 | 2022-10-06 | IHC           | L   | 0.342      | -            | -                | -                | -         |    -0.36 | BluePho3nix, DavCost, facecrack, meztal, MOREE |
|            3 |     3460 | 2022-08-28 | NASR          | W   | 0.080      | 0.143        | 0.000 (0.000)    | 0.023 (0.000)    | 0 (0.000) |     0.58 | almazer, Bibu, propleh, REAL1ZE, Remind        |
|            2 |     3492 | 2022-08-27 | NASR          | W   | 0.074      | 0.143        | 0.000 (0.000)    | 0.023 (0.000)    | 0 (0.000) |     0.54 | BluePho3nix, DavCost, facecrack, meztal, MOREE |
|            1 |     3520 | 2022-08-27 | JPB           | W   | 0.072      | 0.143        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     0.33 | bo5lly, Ejram, Nami, PokemoN, Ttyke            |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($499.93)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
