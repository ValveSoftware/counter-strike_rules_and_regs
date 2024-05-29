### Roster Details<br />
Team Name: The Chosen Few<br />
Roster: choiv7, KalubeR, shaiK, Skrimo, SPELLAN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [122](../standings_global.md)<br />
Regional Rank: [81]( ../standings_europe.md)<br />
Final Rank Value:  730.4<br />
<br />
Final Rank Value (730.4) = Starting Rank Value (685.2) + Head To Head Adjustments (45.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.269[<sup>1</sup>](#table2)
- Bounty Collected: 0.272[<sup>2</sup>](#table1)
- Opponent Network: 0.047[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.147<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 685.2
- 400 + ( ( 0.147 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 685.2


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
|           18 |     1866 | 2024-03-15 | Permitta        | L   | 0.699      | -            | -                | -                | -         |    -5.03 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           17 |     1896 | 2024-03-14 | Endpoint        | W   | 0.693      | 0.372        | 0.012 (0.003)    | 0.627 (0.162)    | 0 (0.000) |    15.06 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           16 |     1962 | 2024-03-12 | ARCRED          | W   | 0.679      | 0.372        | 0.000 (0.000)    | 0.144 (0.036)    | 0 (0.000) |     9.13 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           15 |     2022 | 2024-03-09 | Passion UA      | W   | 0.659      | 0.372        | 0.056 (0.014)    | 0.759 (0.186)    | 0 (0.000) |    17.07 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           14 |     2100 | 2024-03-06 | Insilio         | L   | 0.640      | -            | -                | -                | -         |    -5.12 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           13 |     2176 | 2024-03-03 | Metizport       | L   | 0.620      | -            | -                | -                | -         |    -3.23 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           12 |     2182 | 2024-03-03 | TSM             | W   | 0.619      | 0.143        | 0.008 (0.001)    | 0.191 (0.017)    | 0 (0.000) |    11.71 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           11 |     2188 | 2024-03-03 | KOI             | W   | 0.619      | 0.143        | 0.025 (0.002)    | 0.570 (0.050)    | 0 (0.000) |    16.55 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           10 |     2357 | 2024-02-24 | brazylijski luz | L   | 0.565      | -            | -                | -                | -         |    -6.40 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            9 |     2504 | 2024-02-17 | Entropiq        | L   | 0.520      | -            | -                | -                | -         |    -9.66 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            8 |     2509 | 2024-02-17 | ECF             | L   | 0.518      | -            | -                | -                | -         |    -6.33 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            7 |     2516 | 2024-02-17 | Monte           | L   | 0.518      | -            | -                | -                | -         |    -0.54 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            6 |     2662 | 2024-02-10 | ex-Anonymo      | W   | 0.473      | 0.358        | 0.002 (0.000)    | 0.077 (0.013)    | 0 (0.000) |     6.81 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            5 |     2738 | 2024-02-04 | AIRLYA          | W   | 0.432      | 0.143        | 0.000 (0.000)    | 0.035 (0.002)    | 0 (0.000) |     3.85 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            4 |     2759 | 2024-02-03 | Zero Tenacity   | L   | 0.426      | -            | -                | -                | -         |    -1.63 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            3 |     2800 | 2024-02-02 | NAVI Junior     | W   | 0.419      | 0.143        | 0.009 (0.001)    | 0.115 (0.007)    | 0 (0.000) |     6.93 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            2 |     2803 | 2024-02-02 | Juggernauts     | W   | 0.418      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.27 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            1 |     2807 | 2024-02-02 | NAVI Junior     | L   | 0.418      | -            | -                | -                | -         |    -6.31 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($574.20)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
