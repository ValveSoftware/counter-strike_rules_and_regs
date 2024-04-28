### Roster Details<br />
Team Name: Cartel terraza<br />
Roster: k1Nky, KOT3, LegenD, Marro, pacmanN<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [199](../standings_global.md)<br />
Regional Rank: [62]( ../standings_americas.md)<br />
Final Rank Value:  605.6<br />
<br />
Final Rank Value (605.6) = Starting Rank Value (655.1) + Head To Head Adjustments (-49.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.275[<sup>1</sup>](#table2)
- Bounty Collected: 0.211[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.125<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 655.1
- 400 + ( ( 0.125 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 655.1


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
|           27 |      135 | 2023-02-05 | Limitless            | L   | 1.000      | -            | -                | -                | -         |   -11.27 | k1Nky, KOT3, LegenD, Marro, pacmanN       |
|           26 |      181 | 2023-02-03 | Take Charge          | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.105 (0.041)    | 0 (0.000) |    10.38 | Guepard, k1Nky, KOT3, LegenD, Marro       |
|           25 |      256 | 2023-01-31 | Noxious              | L   | 1.000      | -            | -                | -                | -         |   -14.62 | k1Nky, KOT3, LegenD, Marro, pacmanN       |
|           24 |      463 | 2023-01-24 | Eros                 | L   | 1.000      | -            | -                | -                | -         |   -12.25 | k1Nky, LegenD, Marro, pacmanN, spamzzy    |
|           23 |      965 | 2022-12-10 | REIGN                | L   | 0.776      | -            | -                | -                | -         |   -12.24 | k1Nky, Marro, pacmanN, spamzzy, tor1towOw |
|           22 |      996 | 2022-12-09 | Detonate             | L   | 0.769      | -            | -                | -                | -         |    -9.28 | brett, Cryptic, Florence, freshie, micro  |
|           21 |     2360 | 2022-10-06 | TeamOne              | L   | 0.340      | -            | -                | -                | -         |    -2.06 | k1Nky, Marro, pacmanN, spamzzy, tor1towOw |
|           20 |     2385 | 2022-10-05 | Nouns                | L   | 0.333      | -            | -                | -                | -         |    -4.08 | k1Nky, Marro, pacmanN, spamzzy, tor1towOw |
|           19 |     2412 | 2022-10-05 | FURIA                | L   | 0.331      | -            | -                | -                | -         |    -0.34 | k1Nky, Marro, pacmanN, spamzzy, tor1towOw |
|           18 |     2462 | 2022-10-01 | TropiCaos            | L   | 0.308      | -            | -                | -                | -         |    -3.77 | k1Nky, Marro, pacmanN, spamzzy, tor1towOw |
|           17 |     2483 | 2022-09-30 | REIGN                | W   | 0.302      | 0.384        | 0.003 (0.000)    | 0.153 (0.018)    | 0 (0.000) |     4.58 | Fugi, Gabe, jchancE, mds, xaler           |
|           16 |     2535 | 2022-09-28 | Villainous           | W   | 0.289      | 0.384        | 0.003 (0.000)    | 0.097 (0.011)    | 0 (0.000) |     4.41 | Alvin, omniscient, shutout, tatm, zebra   |
|           15 |     2566 | 2022-09-27 | Villainous           | L   | 0.283      | -            | -                | -                | -         |    -4.67 | k1Nky, Marro, pacmanN, spamzzy, tor1towOw |
|           14 |     2601 | 2022-09-25 | Take Flyte           | W   | 0.269      | 0.371        | 0.000 (0.000)    | 0.027 (0.003)    | 0 (0.000) |     2.46 | farg, Grizz, Penguin, Umar, zander        |
|           13 |     2725 | 2022-09-22 | Noxious              | L   | 0.249      | -            | -                | -                | -         |    -3.55 | cypress, FAME, Slash, Swqft, VulcaN       |
|           12 |     2823 | 2022-09-19 | Limitless            | W   | 0.229      | 0.384        | 0.007 (0.001)    | 0.287 (0.025)    | 0 (0.000) |     4.54 | k1Nky, Marro, pacmanN, spamzzy, tor1towOw |
|           11 |     2871 | 2022-09-17 | TropiCaos            | L   | 0.215      | -            | -                | -                | -         |    -2.65 | dzt, land1n, mawth, prt, tatazin          |
|           10 |     2938 | 2022-09-15 | DNA                  | W   | 0.201      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.20 | 0K1N, ch1py, k1, KenZ, Project90          |
|            9 |     2984 | 2022-09-14 | Strife               | L   | 0.195      | -            | -                | -                | -         |    -3.34 | D4rtyMontana, J0LZ, jitter, reck, SLIGHT  |
|            8 |     3021 | 2022-09-13 | REIGN                | W   | 0.188      | 0.384        | 0.003 (0.000)    | 0.153 (0.011)    | 0 (0.000) |     2.94 | Fugi, Gabe, jchancE, mds, xaler           |
|            7 |     3260 | 2022-09-05 | TeamOne              | L   | 0.134      | -            | -                | -                | -         |    -0.92 | k1Nky, Marro, pacmanN, spamzzy, tor1towOw |
|            6 |     3272 | 2022-09-04 | Pete's Hookah Lounge | W   | 0.128      | 0.143        | 0.000 (0.000)    | 0.010 (0.000)    | 0 (0.000) |     1.10 | k1Nky, Marro, pacmanN, spamzzy, tor1towOw |
|            5 |     3278 | 2022-09-04 | timbermen            | W   | 0.128      | 0.143        | 0.016 (0.000)    | 0.306 (0.006)    | 0 (0.000) |     2.78 | dare, droid, intra, shane, snav           |
|            4 |     3305 | 2022-09-03 | Mythic               | W   | 0.122      | 0.143        | 0.001 (0.000)    | 0.203 (0.004)    | 0 (0.000) |     2.16 | Cooper, fl0m, freakazoid, hate, YuZ       |
|            3 |     3404 | 2022-08-31 | Disconnected         | L   | 0.102      | -            | -                | -                | -         |    -1.27 | aris, BeaKie, brett, silas, Swahn         |
|            2 |     3547 | 2022-08-26 | Electrify Steel      | W   | 0.069      | -            | -                | -                | -         |     0.42 | k1Nky, Marro, pacmanN, spamzzy, tor1towOw |
|            1 |     3744 | 2022-08-18 | timbermen            | L   | 0.015      | -            | -                | -                | -         |    -0.15 | k1Nky, Marro, pacmanN, spamzzy, tor1towOw |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,109.99)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-10-11 |      0.376 | $750.00        | $281.82         |
| 2022-10-02 |      0.315 | $2,500.00      | $787.32         |
| 2022-08-28 |      0.082 | $500.00        | $40.85          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
