### Roster Details<br />
Team Name: 500<br />
Roster: dennyslaw, Grashog, oxygeN, Rainwaker, SHiPZ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [100](../standings_global.md)<br />
Regional Rank: [68]( ../standings_europe.md)<br />
Final Rank Value:  791.1<br />
<br />
Final Rank Value (791.1) = Starting Rank Value (745.0) + Head To Head Adjustments (46.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.265[<sup>1</sup>](#table2)
- Bounty Collected: 0.328[<sup>2</sup>](#table1)
- Opponent Network: 0.118[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.178<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 745.0
- 400 + ( ( 0.178 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 745.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |      656 | 2024-05-06 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |    -3.67 | dennyslaw, Grashog, oxygeN, Rainwaker, SHiPZ  |
|           36 |      712 | 2024-05-03 | Soda              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.09 | dennyslaw, Grashog, oxygeN, Rainwaker, SHiPZ  |
|           35 |      735 | 2024-05-02 | 1WIN              | L   | 1.000      | -            | -                | -                | -         |    -9.15 | dennyslaw, Grashog, KalubeR, Rainwaker, SHiPZ |
|           34 |      806 | 2024-04-29 | Sashi             | L   | 0.997      | -            | -                | -                | -         |    -3.61 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           33 |      832 | 2024-04-27 | Zero Tenacity     | L   | 0.986      | -            | -                | -                | -         |    -8.66 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           32 |     1103 | 2024-04-18 | Secret            | L   | 0.924      | -            | -                | -                | -         |   -22.55 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           31 |     1129 | 2024-04-17 | esmagaB           | L   | 0.918      | -            | -                | -                | -         |   -18.45 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           30 |     1165 | 2024-04-16 | Passion UA        | W   | 0.912      | 0.384        | 0.056 (0.020)    | 0.759 (0.266)    | 0 (0.000) |    17.70 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           29 |     1250 | 2024-04-11 | PARIVISION        | W   | 0.879      | 0.384        | -                | 0.475 (0.160)    | 0 (0.000) |    17.64 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           28 |     1577 | 2024-04-02 | ex-Guild Eagles   | W   | 0.817      | 0.384        | 0.014 (0.004)    | 0.552 (0.173)    | 0 (0.000) |    17.22 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           27 |     1583 | 2024-04-01 | ex-Guild Eagles   | L   | 0.813      | -            | -                | -                | -         |    -8.34 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           26 |     1658 | 2024-03-27 | Ninjas in Pyjamas | L   | 0.780      | -            | -                | -                | -         |    -4.86 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           25 |     1662 | 2024-03-27 | FORZE             | W   | 0.779      | 0.143        | 0.108 (0.012)    | 0.499 (0.055)    | 0 (0.000) |    19.69 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           24 |     2006 | 2024-03-10 | Young Ninjas      | L   | 0.665      | -            | -                | -                | -         |    -8.36 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           23 |     2079 | 2024-03-07 | Sangal            | W   | 0.645      | 0.143        | 0.166 (0.015)    | 0.911 (0.084)    | 0 (0.000) |    16.02 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           22 |     2155 | 2024-03-05 | Entropiq          | W   | 0.631      | -            | -                | -                | 0 (0.000) |     6.53 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           21 |     2209 | 2024-03-02 | ALTERNATE aTTaX   | W   | 0.612      | 0.358        | 0.048 (0.011)    | 0.650 (0.143)    | 0 (0.000) |    12.76 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           20 |     2303 | 2024-02-26 | Pigeons           | W   | 0.577      | 0.143        | 0.025 (0.002)    | -                | 0 (0.000) |     8.64 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           19 |     2351 | 2024-02-24 | esmagaB           | W   | 0.565      | 0.358        | 0.008 (0.002)    | 0.258 (0.052)    | 0 (0.000) |     8.15 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           18 |     2491 | 2024-02-18 | Sangal            | L   | 0.524      | -            | -                | -                | -         |    -2.77 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           17 |     2531 | 2024-02-16 | SINNERS           | L   | 0.512      | -            | -                | -                | -         |    -3.90 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           16 |     2541 | 2024-02-16 | B8                | L   | 0.512      | -            | -                | -                | -         |    -2.15 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           15 |     2543 | 2024-02-16 | SINNERS           | W   | 0.511      | 0.143        | -                | 0.728 (0.053)    | -         |    12.34 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           14 |     2671 | 2024-02-10 | Secret            | L   | 0.471      | -            | -                | -                | -         |   -10.74 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           13 |     2714 | 2024-02-06 | ALTERNATE aTTaX   | L   | 0.445      | -            | -                | -                | -         |    -4.08 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           12 |     2733 | 2024-02-04 | Metizport         | W   | 0.433      | 0.358        | 0.088 (0.014)    | 0.860 (0.133)    | -         |    10.76 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           11 |     2746 | 2024-02-04 | Zero Tenacity     | W   | 0.431      | 0.143        | 0.147 (0.009)    | 1.000 (0.062)    | -         |    11.42 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           10 |     2767 | 2024-02-03 | Nexus             | W   | 0.426      | 0.143        | 0.014 (0.001)    | -                | -         |     9.32 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            9 |     2773 | 2024-02-03 | AIRLYA            | L   | 0.425      | -            | -                | -                | -         |   -10.44 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            8 |     2775 | 2024-02-03 | Jake Bube         | W   | 0.424      | -            | -                | -                | -         |     1.73 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            7 |     2874 | 2024-01-30 | fnatic            | L   | 0.399      | -            | -                | -                | -         |    -1.33 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            6 |     2879 | 2024-01-30 | GODSENT           | L   | 0.397      | -            | -                | -                | -         |    -7.76 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            5 |     3221 | 2024-01-17 | Sprout            | L   | 0.314      | -            | -                | -                | -         |    -6.80 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            4 |     3225 | 2024-01-17 | Ninjas in Pyjamas | W   | 0.314      | -            | -                | -                | -         |     4.94 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            3 |     3380 | 2024-01-13 | Gaimin Gladiators | L   | 0.286      | -            | -                | -                | -         |    -0.63 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            2 |     3387 | 2024-01-13 | Space             | W   | 0.285      | -            | -                | -                | -         |     5.34 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            1 |     3424 | 2024-01-12 | NeedDOCTOR        | W   | 0.280      | -            | -                | -                | -         |     1.11 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($500.00)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
