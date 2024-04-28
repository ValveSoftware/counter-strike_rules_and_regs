### Roster Details<br />
Team Name: TropiCaos<br />
Roster: caike, dzt, land1n, mawth, tatazin<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [157](../standings_global.md)<br />
Regional Rank: [44]( ../standings_americas.md)<br />
Final Rank Value:  703.5<br />
<br />
Final Rank Value (703.5) = Starting Rank Value (734.3) + Head To Head Adjustments (-30.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.350[<sup>1</sup>](#table2)
- Bounty Collected: 0.270[<sup>2</sup>](#table1)
- Opponent Network: 0.034[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.163<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 734.3
- 400 + ( ( 0.163 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 734.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |       22 | 2023-02-11 | feA                  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.87 | caike, dzt, land1n, mawth, tatazin        |
|           22 |      223 | 2023-02-01 | ARCTIC               | L   | 1.000      | -            | -                | -                | -         |    -9.14 | dzt, land1n, mawth, prt, tatazin          |
|           21 |      299 | 2023-01-29 | WINDINGO             | L   | 1.000      | -            | -                | -                | -         |   -18.47 | dzt, land1n, mawth, prt, tatazin          |
|           20 |      373 | 2023-01-27 | Flamengo             | L   | 1.000      | -            | -                | -                | -         |   -16.37 | dzt, land1n, mawth, prt, tatazin          |
|           19 |      395 | 2023-01-26 | Furious              | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.116 (0.017)    | 0 (0.000) |    11.27 | dzt, land1n, mawth, prt, tatazin          |
|           18 |      465 | 2023-01-24 | Boca Juniors         | W   | 1.000      | 0.384        | 0.005 (0.002)    | 0.200 (0.077)    | 0 (0.000) |    14.55 | dzt, land1n, mawth, prt, tatazin          |
|           17 |      507 | 2023-01-22 | INTZ                 | L   | 1.000      | -            | -                | -                | -         |   -14.49 | dzt, land1n, mawth, prt, tatazin          |
|           16 |      637 | 2023-01-17 | Paquetá              | L   | 1.000      | -            | -                | -                | -         |   -15.38 | dzt, land1n, mawth, prt, tatazin          |
|           15 |     1171 | 2022-12-04 | Boca Juniors         | L   | 0.733      | -            | -                | -                | -         |   -13.18 | dzt, land1n, mawth, prt, tatazin          |
|           14 |     1786 | 2022-10-30 | EG White             | L   | 0.503      | -            | -                | -                | -         |    -5.25 | dzt, land1n, mawth, prt, tatazin          |
|           13 |     1788 | 2022-10-30 | ATK                  | W   | 0.501      | 0.354        | 0.070 (0.012)    | 0.646 (0.115)    | 0 (0.000) |    11.98 | b0denmaster, Fadey, MisteM, motm, Swisher |
|           12 |     2438 | 2022-10-02 | Disconnected         | W   | 0.315      | 0.384        | 0.008 (0.001)    | 0.225 (0.027)    | 0 (0.000) |     4.79 | dzt, land1n, mawth, prt, tatazin          |
|           11 |     2462 | 2022-10-01 | Cartel terraza       | W   | 0.308      | 0.384        | 0.002 (0.000)    | 0.113 (0.013)    | 0 (0.000) |     3.77 | k1Nky, Marro, pacmanN, spamzzy, tor1towOw |
|           10 |     2486 | 2022-09-30 | Strife               | W   | 0.301      | 0.384        | 0.015 (0.002)    | 0.314 (0.036)    | 0 (0.000) |     5.50 | dzt, land1n, mawth, prt, tatazin          |
|            9 |     2541 | 2022-09-28 | DNA                  | W   | 0.288      | -            | -                | -                | 0 (0.000) |     1.16 | 0K1N, ch1py, k1, KenZ, Project90          |
|            8 |     2602 | 2022-09-25 | timbermen            | L   | 0.269      | -            | -                | -                | -         |    -3.54 | dzt, land1n, mawth, prt, tatazin          |
|            7 |     2607 | 2022-09-25 | Disconnected         | W   | 0.268      | 0.354        | 0.008 (0.001)    | 0.225 (0.021)    | 0 (0.000) |     4.14 | dzt, land1n, mawth, prt, tatazin          |
|            6 |     2643 | 2022-09-24 | Phantom Troupe       | W   | 0.262      | 0.354        | 0.001 (0.000)    | 0.047 (0.004)    | 0 (0.000) |     2.96 | dzt, land1n, mawth, prt, tatazin          |
|            5 |     2688 | 2022-09-23 | Disconnected         | L   | 0.254      | -            | -                | -                | -         |    -4.08 | aris, BeaKie, brett, silas, Swahn         |
|            4 |     2706 | 2022-09-23 | Nouns                | L   | 0.253      | -            | -                | -                | -         |    -2.59 | dzt, land1n, mawth, prt, tatazin          |
|            3 |     2871 | 2022-09-17 | Cartel terraza       | W   | 0.215      | 0.384        | 0.002 (0.000)    | 0.113 (0.009)    | -         |     2.65 | dzt, land1n, mawth, prt, tatazin          |
|            2 |     2937 | 2022-09-15 | Davenport University | W   | 0.201      | 0.384        | 0.014 (0.001)    | 0.227 (0.018)    | -         |     3.21 | dzt, land1n, mawth, prt, tatazin          |
|            1 |     2979 | 2022-09-14 | Valence              | W   | 0.195      | -            | -                | -                | -         |     0.82 | based, casey, Magic, Ruv, Static          |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,550.15)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-10-30 |      0.503 | $4,000.00      | $2,010.05       |
| 2022-10-02 |      0.315 | $11,000.00     | $3,464.20       |
| 2022-09-25 |      0.269 | $4,000.00      | $1,075.90       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
