### Roster Details<br />
Team Name: WINDINGO<br />
Roster: bichop, fakzwall, FRANAR, PREDI, restikk<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [177](../standings_global.md)<br />
Regional Rank: [49]( ../standings_americas.md)<br />
Final Rank Value:  652.3<br />
<br />
Final Rank Value (652.3) = Starting Rank Value (667.3) + Head To Head Adjustments (-14.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.274[<sup>1</sup>](#table2)
- Bounty Collected: 0.236[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.131<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 667.3
- 400 + ( ( 0.131 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 667.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |      210 | 2023-02-02 | FURIA Academy       | L   | 1.000      | -            | -                | -                | -         |   -11.87 | bichop, fakzwall, FRANAR, PREDI, restikk |
|           25 |      299 | 2023-01-29 | TropiCaos           | W   | 1.000      | 0.384        | 0.014 (0.005)    | 0.222 (0.085)    | 0 (0.000) |    18.47 | bichop, fakzwall, FRANAR, PREDI, restikk |
|           24 |      399 | 2023-01-26 | MIBR Academy        | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.056 (0.022)    | 0 (0.000) |     9.70 | bichop, fakzwall, FRANAR, PREDI, restikk |
|           23 |      470 | 2023-01-24 | W7M fe              | W   | 1.000      | 0.384        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    10.45 | bichop, fakzwall, FRANAR, PREDI, restikk |
|           22 |      486 | 2023-01-23 | NO NAME             | L   | 1.000      | -            | -                | -                | -         |   -20.88 | bichop, fakzwall, FRANAR, PREDI, restikk |
|           21 |     1246 | 2022-12-02 | SWS                 | L   | 0.721      | -            | -                | -                | -         |   -12.20 | bichop, fakzwall, FRANAR, PREDI, restikk |
|           20 |     1308 | 2022-11-30 | Los Grandes Academy | W   | 0.706      | 0.384        | 0.001 (0.000)    | 0.010 (0.003)    | 0 (0.000) |     9.72 | bichop, fakzwall, FRANAR, PREDI, restikk |
|           19 |     1354 | 2022-11-28 | B4 Academy          | W   | 0.694      | 0.384        | 0.000 (0.000)    | -                | 0 (0.000) |     4.17 | bichop, fakzwall, FRANAR, PREDI, restikk |
|           18 |     1470 | 2022-11-24 | Boca Juniors        | L   | 0.668      | -            | -                | -                | -         |    -9.18 | bichop, fakzwall, FRANAR, PREDI, restikk |
|           17 |     1929 | 2022-10-23 | ex-Isurus           | L   | 0.454      | -            | -                | -                | -         |    -3.46 | bichop, DILLION1, FRANAR, PREDI, restikk |
|           16 |     2141 | 2022-10-15 | Spirit              | L   | 0.399      | -            | -                | -                | -         |    -0.23 | bichop, DILLION1, FRANAR, PREDI, restikk |
|           15 |     2715 | 2022-09-23 | Sharks              | L   | 0.252      | -            | -                | -                | -         |    -2.73 | bichop, DILLION1, FRANAR, PREDI, restikk |
|           14 |     2802 | 2022-09-20 | DNG                 | L   | 0.234      | -            | -                | -                | -         |    -2.81 | bichop, DILLION1, FRANAR, PREDI, restikk |
|           13 |     2831 | 2022-09-19 | Ape Gang            | L   | 0.227      | -            | -                | -                | -         |    -4.66 | bichop, DILLION1, FRANAR, PREDI, restikk |
|           12 |     2920 | 2022-09-16 | Mad Kings           | L   | 0.206      | -            | -                | -                | -         |    -4.37 | bichop, DILLION1, FRANAR, PREDI, restikk |
|           11 |     2944 | 2022-09-15 | Boca Juniors        | W   | 0.200      | 0.384        | 0.000 (0.000)    | 0.034 (0.003)    | 0 (0.000) |     2.41 | bichop, DILLION1, FRANAR, PREDI, restikk |
|           10 |     2950 | 2022-09-15 | Fluxo               | L   | 0.200      | -            | -                | -                | -         |    -1.42 | bichop, DILLION1, FRANAR, PREDI, restikk |
|            9 |     3016 | 2022-09-13 | Liberty             | W   | 0.189      | 0.384        | 0.000 (0.000)    | 0.053 (0.004)    | 0 (0.000) |     2.36 | bichop, DILLION1, FRANAR, PREDI, restikk |
|            8 |     3060 | 2022-09-11 | MIBR Academy        | W   | 0.175      | 0.384        | 0.000 (0.000)    | 0.042 (0.003)    | 0 (0.000) |     1.81 | bichop, DILLION1, FRANAR, PREDI, restikk |
|            7 |     3535 | 2022-08-27 | ODDIK               | L   | 0.072      | -            | -                | -                | -         |    -0.83 | bichop, DILLION1, FRANAR, PREDI, restikk |
|            6 |     3550 | 2022-08-26 | Flamengo            | L   | 0.068      | -            | -                | -                | -         |    -1.01 | bichop, DILLION1, FRANAR, PREDI, restikk |
|            5 |     3555 | 2022-08-26 | Fuscão 1500         | W   | 0.067      | 0.143        | 0.013 (0.000)    | 0.221 (0.002)    | 0 (0.000) |     1.41 | bichop, DILLION1, FRANAR, PREDI, restikk |
|            4 |     3640 | 2022-08-22 | Ape Gang            | W   | 0.041      | 0.384        | 0.000 (0.000)    | 0.045 (0.001)    | 0 (0.000) |     0.44 | bichop, DILLION1, FRANAR, PREDI, restikk |
|            3 |     3663 | 2022-08-21 | ARCTIC              | L   | 0.035      | -            | -                | -                | -         |    -0.26 | bichop, DILLION1, FRANAR, PREDI, restikk |
|            2 |     3735 | 2022-08-19 | River Plate         | W   | 0.021      | 0.384        | -                | 0.012 (0.000)    | -         |     0.20 | bichop, DILLION1, FRANAR, PREDI, restikk |
|            1 |     3746 | 2022-08-18 | Meta                | L   | 0.014      | -            | -                | -                | -         |    -0.15 | bichop, DILLION1, FRANAR, PREDI, restikk |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,065.71)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-10-23 |      0.455 | $1,000.00      | $454.59         |
| 2022-10-16 |      0.407 | $1,500.00      | $611.12         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
