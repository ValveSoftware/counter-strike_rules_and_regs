### Roster Details<br />
Team Name: ex-TAG<br />
Roster: faydett, Get_Jeka, NMV, SELLTER, Synyx<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [140](../standings_global.md)<br />
Regional Rank: [96]( ../standings_europe.md)<br />
Final Rank Value:  729.4<br />
<br />
Final Rank Value (729.4) = Starting Rank Value (716.9) + Head To Head Adjustments (12.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.332[<sup>1</sup>](#table2)
- Bounty Collected: 0.232[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.037[<sup>2</sup>](#table1)

The average of these factors is 0.155<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 716.9
- 400 + ( ( 0.155 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 716.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     1257 | 2022-12-02 | 9 Pandas       | L   | 0.719      | -            | -                | -                | -         |   -10.03 | faydett, Get_Jeka, NMV, SELLTER, Synyx            |
|           15 |     2445 | 2022-10-02 | HOTU           | W   | 0.313      | 0.303        | 0.004 (0.000)    | 0.112 (0.011)    | 0 (0.000) |     5.12 | faydett, FpSSS, Get_Jeka, SELLTER, Synyx          |
|           14 |     2450 | 2022-10-02 | Spirit Academy | W   | 0.312      | 0.303        | 0.032 (0.003)    | 0.447 (0.042)    | 0 (0.000) |     6.47 | faydett, FpSSS, Get_Jeka, SELLTER, Synyx          |
|           13 |     2454 | 2022-10-02 | AVANGAR        | W   | 0.311      | 0.303        | 0.003 (0.000)    | 0.314 (0.030)    | 0 (0.000) |     5.51 | faydett, FpSSS, Get_Jeka, SELLTER, Synyx          |
|           12 |     2625 | 2022-09-25 | LDLC           | L   | 0.266      | -            | -                | -                | -         |    -4.06 | AMANEK, Brooxsy, Diviiii, Graviti, Snobling       |
|           11 |     2747 | 2022-09-22 | Apeks          | L   | 0.246      | -            | -                | -                | -         |    -1.89 | jkaem, jL, nawwk, shox, STYKO                     |
|           10 |     2803 | 2022-09-20 | Nexus          | W   | 0.234      | 0.371        | 0.001 (0.000)    | 0.542 (0.047)    | 0 (0.000) |     4.55 | faydett, FpSSS, Get_Jeka, SELLTER, Synyx          |
|            9 |     2959 | 2022-09-15 | INVSN          | L   | 0.199      | -            | -                | -                | -         |    -1.55 | FL4MUS, riskyb0b, sh1nejezzz, sstiNiX, YumsaN     |
|            8 |     3043 | 2022-09-12 | BEBRA          | W   | 0.181      | 0.333        | 0.000 (0.000)    | 0.007 (0.000)    | 1 (0.181) |     0.85 | ANASTAZE, Boombl4, Buster, fANDER, poka           |
|            7 |     3055 | 2022-09-12 | Websterz       | W   | 0.178      | 0.333        | 0.007 (0.000)    | 0.403 (0.024)    | 1 (0.178) |     4.00 | boX, mds, speed4k, tN1R, znxxX                    |
|            6 |     3256 | 2022-09-06 | INVSN          | W   | 0.139      | 0.360        | 0.014 (0.001)    | 0.428 (0.021)    | 0 (0.000) |     3.35 | FL4MUS, OverDrive, riskyb0b, sstiNiX, YumsaN      |
|            5 |     3327 | 2022-09-03 | Websterz       | W   | 0.119      | 0.360        | 0.000 (0.000)    | 0.011 (0.000)    | 0 (0.000) |     0.84 | dukefissura, exebatya, killmatic, Magnojez, Re1GN |
|            4 |     3396 | 2022-09-01 | xDDDD          | W   | 0.105      | 0.360        | 0.000 (0.000)    | 0.003 (0.000)    | 0 (0.000) |     0.68 | PASHANOJ, Polt, shg, voidex, WorldEdit            |
|            3 |     3497 | 2022-08-27 | Benched Heroes | L   | 0.073      | -            | -                | -                | -         |    -1.76 | faydett, FpSSS, Get_Jeka, SELLTER, Synyx          |
|            2 |     3507 | 2022-08-27 | Entropiq       | W   | 0.073      | 0.143        | 0.005 (0.000)    | 0.046 (0.000)    | 0 (0.000) |     1.16 | El1an, Forester, Krad, mir, NickelBack            |
|            1 |     3628 | 2022-08-23 | Entropiq       | L   | 0.046      | -            | -                | -                | -         |    -0.72 | El1an, Forester, Krad, mir, NickelBack            |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,639.17)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-02 |      0.719 | $5,006.00      | $3,599.94       |
| 2022-10-02 |      0.313 | $3,000.00      | $939.01         |
| 2022-09-15 |      0.200 | $500.00        | $100.22         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
