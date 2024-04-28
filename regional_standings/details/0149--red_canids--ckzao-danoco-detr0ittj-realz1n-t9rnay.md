### Roster Details<br />
Team Name: RED Canids<br />
Roster: ckzao, danoco, detr0ittJ, realz1n, t9rnay<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [149](../standings_global.md)<br />
Regional Rank: [42]( ../standings_americas.md)<br />
Final Rank Value:  714.8<br />
<br />
Final Rank Value (714.8) = Starting Rank Value (687.4) + Head To Head Adjustments (27.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.246[<sup>1</sup>](#table2)
- Bounty Collected: 0.267[<sup>2</sup>](#table1)
- Opponent Network: 0.049[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 687.4
- 400 + ( ( 0.140 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 687.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      217 | 2023-02-02 | O PLANO      | L   | 1.000      | -            | -                | -                | -         |   -14.61 | ckzao, danoco, detr0ittJ, realz1n, t9rnay |
|           11 |      366 | 2023-01-27 | INTZ         | W   | 1.000      | 0.384        | 0.010 (0.004)    | 0.304 (0.117)    | 0 (0.000) |    17.21 | ckzao, danoco, detr0ittJ, realz1n, t9rnay |
|           10 |      394 | 2023-01-26 | Imperial     | L   | 1.000      | -            | -                | -                | -         |    -7.79 | ckzao, danoco, detr0ittJ, realz1n, t9rnay |
|            9 |      430 | 2023-01-25 | Flamengo     | W   | 1.000      | 0.384        | 0.001 (0.000)    | 0.288 (0.111)    | 0 (0.000) |    15.66 | ckzao, danoco, detr0ittJ, realz1n, t9rnay |
|            8 |      491 | 2023-01-23 | Sharks       | W   | 1.000      | 0.384        | 0.017 (0.007)    | 0.439 (0.169)    | 0 (0.000) |    21.30 | ckzao, danoco, detr0ittJ, realz1n, t9rnay |
|            7 |      635 | 2023-01-17 | Meta         | L   | 1.000      | -            | -                | -                | -         |   -13.11 | ckzao, danoco, detr0ittJ, realz1n, t9rnay |
|            6 |     1835 | 2022-10-27 | Fuscão 1500  | L   | 0.481      | -            | -                | -                | -         |    -5.96 | DANVIET, gbb, Lcm, nolkz, roz             |
|            5 |     1959 | 2022-10-22 | ARCTIC       | W   | 0.447      | 0.371        | 0.036 (0.006)    | 0.230 (0.038)    | 0 (0.000) |    10.17 | history, MaLLby, ninjaZ, ponter, short    |
|            4 |     1986 | 2022-10-21 | ODDIK        | L   | 0.440      | -            | -                | -                | -         |    -5.37 | ckzao, n9xtz, realz1n, Snowzin, t9rnay    |
|            3 |     2014 | 2022-10-20 | Meta         | W   | 0.433      | 0.371        | 0.010 (0.002)    | 0.302 (0.048)    | 0 (0.000) |     8.20 | ckzao, n9xtz, realz1n, Snowzin, t9rnay    |
|            2 |     2033 | 2022-10-19 | Boca Juniors | W   | 0.427      | 0.371        | 0.000 (0.000)    | 0.034 (0.005)    | 0 (0.000) |     4.74 | ckzao, n9xtz, realz1n, Snowzin, t9rnay    |
|            1 |     2768 | 2022-09-21 | Corinthians  | L   | 0.242      | -            | -                | -                | -         |    -3.00 | Demonos, detr0ittJ, fREQ, r4ul, voltera   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($400.95)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
