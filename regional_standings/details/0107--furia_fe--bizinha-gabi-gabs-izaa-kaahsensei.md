### Roster Details<br />
Team Name: FURIA fe<br />
Roster: bizinha, GaBi, gabs, izaa, kaahSENSEI<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [107](../standings_global.md)<br />
Regional Rank: [26]( ../standings_americas.md)<br />
Final Rank Value:  787.6<br />
<br />
Final Rank Value (787.6) = Starting Rank Value (737.5) + Head To Head Adjustments (50.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.390[<sup>1</sup>](#table2)
- Bounty Collected: 0.272[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.022[<sup>2</sup>](#table1)

The average of these factors is 0.177<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 737.5
- 400 + ( ( 0.177 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 737.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      372 | 2024-04-19 | Fluxo Demons      | L   | 1.000      | -            | -                | -                | -         |   -14.70 | bizinha, GaBi, gabs, izaa, kaahSENSEI |
|           12 |      636 | 2024-04-10 | KG fe             | W   | 1.000      | 0.332        | 0.006 (0.002)    | 0.030 (0.010)    | 0 (0.000) |     5.08 | bizinha, GaBi, gabs, izaa, kaahSENSEI |
|           11 |      864 | 2024-04-03 | Divina fe         | W   | 0.981      | 0.332        | 0.008 (0.003)    | 0.077 (0.025)    | 0 (0.000) |    10.02 | bizinha, GaBi, gabs, izaa, kaahSENSEI |
|           10 |      967 | 2024-03-28 | GENKID4M4         | W   | 0.941      | 0.332        | 0.008 (0.003)    | 0.065 (0.020)    | 0 (0.000) |     8.85 | bizinha, GaBi, gabs, izaa, kaahSENSEI |
|            9 |     1088 | 2024-03-21 | Atrix             | W   | 0.894      | 0.332        | 0.009 (0.003)    | 0.168 (0.050)    | 0 (0.000) |    10.46 | bizinha, GaBi, gabs, izaa, kaahSENSEI |
|            8 |     1189 | 2024-03-16 | GENKID4M4         | W   | 0.861      | 0.250        | 0.008 (0.002)    | 0.065 (0.014)    | 0 (0.000) |     9.51 | bizinha, GaBi, gabs, izaa, kaahSENSEI |
|            7 |     1262 | 2024-03-13 | MIBR fe           | W   | 0.841      | 0.332        | 0.014 (0.004)    | 0.168 (0.047)    | 0 (0.000) |    11.70 | bizinha, GaBi, gabs, izaa, kaahSENSEI |
|            6 |     1443 | 2024-03-06 | W7M fe            | W   | 0.794      | 0.332        | 0.008 (0.002)    | 0.113 (0.030)    | 0 (0.000) |     9.90 | bizinha, GaBi, gabs, izaa, kaahSENSEI |
|            5 |     3114 | 2023-12-09 | NAVI Javelins     | L   | 0.205      | -            | -                | -                | -         |    -2.55 | annaEX, GaBi, gabs, izaa, kaahSENSEI  |
|            4 |     3128 | 2023-12-08 | Shimmer           | W   | 0.200      | 0.524        | 0.024 (0.002)    | 0.325 (0.034)    | 1 (0.200) |     3.00 | annaEX, GaBi, gabs, izaa, kaahSENSEI  |
|            3 |     3135 | 2023-12-08 | Fearless Cheetahs | L   | 0.198      | -            | -                | -                | -         |    -3.04 | annaEX, GaBi, gabs, izaa, kaahSENSEI  |
|            2 |     3480 | 2023-11-18 | MIBR fe           | W   | 0.068      | 0.338        | 0.014 (0.000)    | 0.168 (0.004)    | 0 (0.000) |     0.95 | annaEX, GaBi, gabs, izaa, kaahSENSEI  |
|            1 |     3544 | 2023-11-16 | Fluxo Demons      | W   | 0.055      | 0.338        | 0.020 (0.000)    | 0.329 (0.006)    | 0 (0.000) |     0.91 | annaEX, GaBi, gabs, izaa, kaahSENSEI  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,445.16)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-19 |      1.000 | $1,900.00      | $1,900.00       |
| 2024-03-16 |      0.861 | $750.00        | $646.04         |
| 2023-12-10 |      0.213 | $7,000.00      | $1,488.34       |
| 2023-11-18 |      0.068 | $6,000.00      | $410.78         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
