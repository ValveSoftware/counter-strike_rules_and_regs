### Roster Details<br />
Team Name: Limitless<br />
Roster: Danejoris, DooM, grape, Mellow, PoseidoNN<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [169](../standings_global.md)<br />
Regional Rank: [40]( ../standings_americas.md)<br />
Final Rank Value:  629.9<br />
<br />
Final Rank Value (629.9) = Starting Rank Value (666.4) + Head To Head Adjustments (-36.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.253[<sup>1</sup>](#table2)
- Bounty Collected: 0.255[<sup>2</sup>](#table1)
- Opponent Network: 0.051[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 666.4
- 400 + ( ( 0.140 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 666.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |      527 | 2024-04-15 | Nouns      | L   | 1.000      | -            | -                | -                | -         |    -5.46 | Danejoris, DooM, grape, Mellow, PoseidoNN |
|           23 |      528 | 2024-04-15 | Nouns      | L   | 1.000      | -            | -                | -                | -         |    -5.75 | Danejoris, DooM, grape, Mellow, PoseidoNN |
|           22 |      586 | 2024-04-11 | BOSS       | L   | 1.000      | -            | -                | -                | -         |    -6.70 | Danejoris, DooM, grape, Mellow, PoseidoNN |
|           21 |      590 | 2024-04-11 | BOSS       | L   | 1.000      | -            | -                | -                | -         |    -7.11 | Danejoris, DooM, grape, Mellow, PoseidoNN |
|           20 |      804 | 2024-04-04 | One More   | L   | 0.989      | -            | -                | -                | -         |   -14.01 | Danejoris, DooM, grape, Mellow, PoseidoNN |
|           19 |      809 | 2024-04-04 | One More   | W   | 0.988      | 0.477        | 0.010 (0.005)    | 0.231 (0.109)    | 0 (0.000) |    17.29 | Danejoris, DooM, grape, Mellow, PoseidoNN |
|           18 |      850 | 2024-04-03 | Take Flyte | L   | 0.982      | -            | -                | -                | -         |   -13.50 | Danejoris, DooM, grape, Mellow, PoseidoNN |
|           17 |      853 | 2024-04-03 | Take Flyte | L   | 0.982      | -            | -                | -                | -         |   -14.71 | Danejoris, DooM, grape, Mellow, PoseidoNN |
|           16 |      980 | 2024-03-27 | MIGHT      | W   | 0.936      | 0.477        | 0.003 (0.001)    | 0.190 (0.085)    | 0 (0.000) |    15.86 | Danejoris, DooM, grape, Mellow, PoseidoNN |
|           15 |      987 | 2024-03-27 | MIGHT      | W   | 0.935      | 0.477        | 0.003 (0.001)    | 0.190 (0.085)    | 0 (0.000) |    17.20 | Danejoris, DooM, grape, Mellow, PoseidoNN |
|           14 |     1030 | 2024-03-26 | Mythic     | L   | 0.929      | -            | -                | -                | -         |    -8.95 | Danejoris, DooM, grape, Mellow, PoseidoNN |
|           13 |     1035 | 2024-03-26 | Mythic     | W   | 0.929      | 0.477        | 0.003 (0.001)    | 0.402 (0.178)    | 0 (0.000) |    20.80 | Danejoris, DooM, grape, Mellow, PoseidoNN |
|           12 |     1222 | 2024-03-14 | NRG        | L   | 0.849      | -            | -                | -                | -         |    -7.17 | Danejoris, grape, Mellow, PoseidoNN, RiFT |
|           11 |     1227 | 2024-03-14 | NRG        | L   | 0.849      | -            | -                | -                | -         |    -7.61 | Danejoris, grape, Mellow, PoseidoNN, RiFT |
|           10 |     1435 | 2024-03-06 | Carpe Diem | L   | 0.796      | -            | -                | -                | -         |   -11.01 | Danejoris, DooM, grape, Mellow, PoseidoNN |
|            9 |     1438 | 2024-03-06 | Carpe Diem | L   | 0.795      | -            | -                | -                | -         |   -11.80 | Danejoris, DooM, grape, Mellow, PoseidoNN |
|            8 |     1683 | 2024-02-24 | NRG        | L   | 0.721      | -            | -                | -                | -         |    -6.79 | Danejoris, DooM, grape, Mellow, RiFT      |
|            7 |     1687 | 2024-02-24 | LAG        | W   | 0.721      | 0.143        | 0.033 (0.003)    | 0.484 (0.050)    | 0 (0.000) |    18.07 | Danejoris, DooM, grape, Mellow, RiFT      |
|            6 |     1902 | 2024-02-15 | G3         | L   | 0.662      | -            | -                | -                | -         |    -7.50 | Danejoris, DooM, grape, Mellow, RiFT      |
|            5 |     3021 | 2023-12-15 | Pantsu     | W   | 0.249      | 0.143        | 0.004 (0.000)    | 0.009 (0.000)    | 0 (0.000) |     3.71 | N20AmZ, obi, Termina, tmk, Zamgaa         |
|            4 |     3427 | 2023-11-21 | Rocket     | L   | 0.089      | -            | -                | -                | -         |    -1.45 | aleph, EMIYA, nero, nooz, R2D2J           |
|            3 |     3479 | 2023-11-18 | Eros       | W   | 0.069      | 0.500        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.88 | Andrew, DJF, nooz, PNDLM, shutout         |
|            2 |     3614 | 2023-11-14 | NRG        | L   | 0.042      | -            | -                | -                | -         |    -0.47 | autimatic, HexT, Jeorge, junior, Walco    |
|            1 |     3616 | 2023-11-14 | Wildcard   | L   | 0.042      | -            | -                | -                | -         |    -0.31 | Infinite, JBa, SLIGHT, Sonic, stanislaw   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($183.16)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
