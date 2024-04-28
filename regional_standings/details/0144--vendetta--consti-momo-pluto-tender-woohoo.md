### Roster Details<br />
Team Name: Vendetta<br />
Roster: consti, Momo, Pluto, Tender, WOOHOO<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [144](../standings_global.md)<br />
Regional Rank: [40]( ../standings_americas.md)<br />
Final Rank Value:  724.3<br />
<br />
Final Rank Value (724.3) = Starting Rank Value (706.4) + Head To Head Adjustments (17.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.316[<sup>1</sup>](#table2)
- Bounty Collected: 0.258[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.150<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 706.4
- 400 + ( ( 0.150 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 706.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |     1506 | 2022-11-22 | Red Wolves     | W   | 0.655      | 0.435        | 0.002 (0.001)    | 0.291 (0.083)    | 0 (0.000) |     8.55 | consti, Momo, Pluto, Tender, WOOHOO  |
|           19 |     2026 | 2022-10-19 | timbermen      | L   | 0.429      | -            | -                | -                | -         |    -5.33 | consti, Momo, Pluto, Tender, WOOHOO  |
|           18 |     2054 | 2022-10-18 | EG Black       | L   | 0.422      | -            | -                | -                | -         |    -4.17 | consti, Momo, Pluto, Tender, WOOHOO  |
|           17 |     2097 | 2022-10-16 | ATK            | L   | 0.409      | -            | -                | -                | -         |    -2.96 | CLASIA, consti, Momo, Pluto, Tender  |
|           16 |     2099 | 2022-10-16 | Nouns          | W   | 0.408      | 0.354        | 0.059 (0.009)    | 0.589 (0.085)    | 0 (0.000) |     8.97 | CLASIA, consti, Momo, Pluto, Tender  |
|           15 |     2565 | 2022-09-27 | Strife         | W   | 0.283      | 0.435        | 0.001 (0.000)    | 0.052 (0.006)    | 0 (0.000) |     3.45 | consti, Momo, Pluto, Tender, WOOHOO  |
|           14 |     2682 | 2022-09-23 | Task Force 141 | W   | 0.255      | 0.435        | 0.000 (0.000)    | 0.030 (0.003)    | 0 (0.000) |     2.06 | consti, Momo, Pluto, Tender, WOOHOO  |
|           13 |     2764 | 2022-09-21 | timbermen      | W   | 0.242      | 0.435        | 0.016 (0.002)    | 0.306 (0.032)    | 0 (0.000) |     4.76 | consti, Momo, Pluto, Tender, WOOHOO  |
|           12 |     2827 | 2022-09-19 | Nouns          | W   | 0.228      | 0.435        | 0.011 (0.001)    | 0.074 (0.007)    | 0 (0.000) |     3.95 | Momo, Pluto, Spongey, Tender, WOOHOO |
|           11 |     2901 | 2022-09-16 | ATK            | L   | 0.209      | -            | -                | -                | -         |    -1.33 | consti, Momo, Pluto, Spongey, Tender |
|           10 |     3013 | 2022-09-13 | Disconnected   | W   | 0.189      | 0.435        | 0.008 (0.001)    | 0.225 (0.018)    | 0 (0.000) |     3.19 | consti, Momo, Pluto, Tender, WOOHOO  |
|            9 |     3129 | 2022-09-10 | 1 JIN          | L   | 0.167      | -            | -                | -                | -         |    -2.78 | Elk, Momo, nbgee12, Pluto, Tender    |
|            8 |     3139 | 2022-09-10 | EG White       | L   | 0.166      | -            | -                | -                | -         |    -1.44 | Elk, Momo, nbgee12, Pluto, Tender    |
|            7 |     3232 | 2022-09-07 | timbermen      | L   | 0.147      | -            | -                | -                | -         |    -1.74 | consti, Momo, Pluto, Tender, WOOHOO  |
|            6 |     3249 | 2022-09-06 | EG Black       | W   | 0.141      | 0.143        | 0.024 (0.000)    | 0.362 (0.007)    | 0 (0.000) |     3.19 | consti, Momo, Pluto, Tender, WOOHOO  |
|            5 |     3307 | 2022-09-03 | TeamOne        | L   | 0.122      | -            | -                | -                | -         |    -1.03 | consti, Momo, Pluto, Tender, WOOHOO  |
|            4 |     3378 | 2022-09-01 | Disconnected   | L   | 0.108      | -            | -                | -                | -         |    -1.59 | consti, Momo, Pluto, Tender, WOOHOO  |
|            3 |     3399 | 2022-08-31 | Brazen         | W   | 0.102      | 0.143        | 0.001 (0.000)    | 0.022 (0.000)    | 0 (0.000) |     1.28 | consti, Momo, Pluto, Tender, WOOHOO  |
|            2 |     3422 | 2022-08-30 | 7AM NA         | W   | 0.095      | 0.435        | 0.000 (0.000)    | 0.107 (0.004)    | 0 (0.000) |     0.90 | consti, Momo, Pluto, Spongey, Tender |
|            1 |     3790 | 2022-08-16 | Nouns          | L   | 0.001      | -            | -                | -                | -         |    -0.01 | consti, Momo, Pluto, Tender, WOOHOO  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,242.20)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-18 |      0.829 | $1,250.00      | $1,036.08       |
| 2022-10-23 |      0.455 | $1,250.00      | $569.17         |
| 2022-10-16 |      0.409 | $4,000.00      | $1,636.95       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
