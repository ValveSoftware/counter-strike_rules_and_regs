### Roster Details<br />
Team Name: The Chosen Few<br />
Roster: choiv7, KalubeR, shaiK, Skrimo, SPELLAN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [138](../standings_global.md)<br />
Regional Rank: [93]( ../standings_europe.md)<br />
Final Rank Value:  734.2<br />
<br />
Final Rank Value (734.2) = Starting Rank Value (693.8) + Head To Head Adjustments (40.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.265[<sup>1</sup>](#table2)
- Bounty Collected: 0.279[<sup>2</sup>](#table1)
- Opponent Network: 0.045[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.147<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 693.8
- 400 + ( ( 0.147 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 693.8


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
|           18 |     2366 | 2024-03-15 | Permitta        | L   | 0.619      | -            | -                | -                | -         |    -3.76 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           17 |     2396 | 2024-03-14 | Endpoint        | W   | 0.613      | 0.372        | 0.009 (0.002)    | 0.570 (0.130)    | 0 (0.000) |    13.96 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           16 |     2462 | 2024-03-12 | ARCRED          | W   | 0.600      | 0.372        | 0.000 (0.000)    | 0.271 (0.061)    | 0 (0.000) |     6.82 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           15 |     2522 | 2024-03-09 | Passion UA      | W   | 0.580      | 0.372        | 0.088 (0.019)    | 0.905 (0.195)    | 0 (0.000) |    15.52 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           14 |     2600 | 2024-03-06 | Insilio         | L   | 0.560      | -            | -                | -                | -         |    -3.98 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           13 |     2676 | 2024-03-03 | Metizport       | L   | 0.541      | -            | -                | -                | -         |    -2.65 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           12 |     2682 | 2024-03-03 | TSM             | W   | 0.540      | 0.143        | 0.007 (0.001)    | 0.154 (0.012)    | 0 (0.000) |     9.84 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           11 |     2688 | 2024-03-03 | KOI             | W   | 0.540      | 0.143        | 0.054 (0.004)    | 0.522 (0.040)    | 0 (0.000) |    14.96 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           10 |     2857 | 2024-02-24 | brazylijski luz | L   | 0.485      | -            | -                | -                | -         |    -5.31 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            9 |     3004 | 2024-02-17 | Entropiq        | L   | 0.441      | -            | -                | -                | -         |    -8.42 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            8 |     3009 | 2024-02-17 | ECF             | L   | 0.439      | -            | -                | -                | -         |    -5.29 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            7 |     3016 | 2024-02-17 | Monte           | L   | 0.438      | -            | -                | -                | -         |    -0.47 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            6 |     3162 | 2024-02-10 | ex-Anonymo      | W   | 0.394      | 0.358        | 0.001 (0.000)    | 0.044 (0.006)    | 0 (0.000) |     5.07 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            5 |     3238 | 2024-02-04 | AIRLYA          | W   | 0.353      | 0.143        | 0.000 (0.000)    | 0.027 (0.001)    | 0 (0.000) |     2.99 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            4 |     3259 | 2024-02-03 | Zero Tenacity   | L   | 0.347      | -            | -                | -                | -         |    -1.06 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            3 |     3300 | 2024-02-02 | NAVI Junior     | W   | 0.340      | 0.143        | 0.007 (0.000)    | 0.090 (0.004)    | 0 (0.000) |     5.61 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            2 |     3303 | 2024-02-02 | Juggernauts     | W   | 0.339      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.76 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            1 |     3307 | 2024-02-02 | NAVI Junior     | L   | 0.339      | -            | -                | -                | -         |    -5.12 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($514.82)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
