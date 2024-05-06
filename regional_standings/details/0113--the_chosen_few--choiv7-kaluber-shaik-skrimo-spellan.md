### Roster Details<br />
Team Name: The Chosen Few<br />
Roster: choiv7, KalubeR, shaiK, Skrimo, SPELLAN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [113](../standings_global.md)<br />
Regional Rank: [76]( ../standings_europe.md)<br />
Final Rank Value:  770.0<br />
<br />
Final Rank Value (770.0) = Starting Rank Value (718.0) + Head To Head Adjustments (51.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.297[<sup>1</sup>](#table2)
- Bounty Collected: 0.307[<sup>2</sup>](#table1)
- Opponent Network: 0.065[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.167<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 718.0
- 400 + ( ( 0.167 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 718.0


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
|           18 |     1215 | 2024-03-15 | Permitta        | L   | 0.853      | -            | -                | -                | -         |    -5.93 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           17 |     1245 | 2024-03-14 | Endpoint        | W   | 0.847      | 0.372        | 0.020 (0.006)    | 0.694 (0.219)    | 0 (0.000) |    17.28 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           16 |     1311 | 2024-03-12 | ARCRED          | W   | 0.833      | 0.372        | 0.004 (0.001)    | 0.198 (0.062)    | 0 (0.000) |    10.96 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           15 |     1371 | 2024-03-09 | Passion UA      | W   | 0.813      | 0.372        | 0.111 (0.033)    | 0.644 (0.195)    | 0 (0.000) |    19.97 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           14 |     1449 | 2024-03-06 | Insilio         | L   | 0.794      | -            | -                | -                | -         |    -6.25 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           13 |     1525 | 2024-03-03 | Metizport       | L   | 0.774      | -            | -                | -                | -         |    -3.81 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           12 |     1531 | 2024-03-03 | TSM             | W   | 0.773      | 0.143        | 0.018 (0.002)    | 0.258 (0.029)    | 0 (0.000) |    15.45 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           11 |     1537 | 2024-03-03 | KOI             | W   | 0.773      | 0.143        | 0.059 (0.006)    | 0.772 (0.085)    | 0 (0.000) |    21.55 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           10 |     1706 | 2024-02-24 | brazylijski luz | L   | 0.719      | -            | -                | -                | -         |    -7.65 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            9 |     1853 | 2024-02-17 | Entropiq        | L   | 0.674      | -            | -                | -                | -         |    -9.74 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            8 |     1858 | 2024-02-17 | ECF             | L   | 0.673      | -            | -                | -                | -         |   -13.99 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            7 |     1865 | 2024-02-17 | Monte           | L   | 0.672      | -            | -                | -                | -         |    -0.54 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            6 |     2011 | 2024-02-10 | ex-Anonymo      | W   | 0.627      | 0.358        | 0.016 (0.004)    | 0.175 (0.039)    | 0 (0.000) |    10.32 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            5 |     2087 | 2024-02-04 | AIRLYA          | W   | 0.586      | 0.143        | 0.000 (0.000)    | 0.051 (0.004)    | 0 (0.000) |     4.94 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            4 |     2108 | 2024-02-03 | Zero Tenacity   | L   | 0.580      | -            | -                | -                | -         |    -4.20 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            3 |     2149 | 2024-02-02 | NAVI Junior     | W   | 0.573      | 0.143        | 0.020 (0.002)    | 0.164 (0.013)    | 0 (0.000) |     9.45 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            2 |     2152 | 2024-02-02 | Juggernauts     | W   | 0.573      | 0.143        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     2.68 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            1 |     2156 | 2024-02-02 | NAVI Junior     | L   | 0.572      | -            | -                | -                | -         |    -8.57 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($689.77)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
