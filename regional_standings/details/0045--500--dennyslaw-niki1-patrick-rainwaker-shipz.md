### Roster Details<br />
Team Name: 500<br />
Roster: dennyslaw, niki1, Patrick, Rainwaker, SHiPZ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [45](../standings_global.md)<br />
Regional Rank: [36]( ../standings_europe.md)<br />
Final Rank Value:  962.5<br />
<br />
Final Rank Value (962.5) = Starting Rank Value (1080.6) + Head To Head Adjustments (-118.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.483[<sup>1</sup>](#table2)
- Bounty Collected: 0.383[<sup>2</sup>](#table1)
- Opponent Network: 0.207[<sup>2</sup>](#table1)
- LAN Wins: 0.257[<sup>2</sup>](#table1)

The average of these factors is 0.333<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1080.6
- 400 + ( ( 0.333 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1080.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           72 |      133 | 2023-02-06 | EYEBALLERS             | L   | 1.000      | -            | -                | -                | -         |   -18.57 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           71 |      200 | 2023-02-03 | SINNERS                | L   | 1.000      | -            | -                | -                | -         |   -16.50 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           70 |      244 | 2023-02-01 | Sangal                 | L   | 1.000      | -            | -                | -                | -         |   -17.86 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           69 |      267 | 2023-01-31 | SINNERS                | L   | 1.000      | -            | -                | -                | -         |   -19.81 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           68 |      435 | 2023-01-25 | 9INE                   | L   | 1.000      | -            | -                | -                | -         |   -19.59 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           67 |      449 | 2023-01-25 | GamerLegion            | L   | 1.000      | -            | -                | -                | -         |   -11.64 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           66 |      479 | 2023-01-24 | GODSENT                | W   | 1.000      | 0.435        | -                | 0.330 (0.143)    | 0 (0.000) |     6.51 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           65 |      499 | 2023-01-23 | Spirit Academy         | W   | 1.000      | 0.477        | 0.032 (0.015)    | 0.447 (0.213)    | 0 (0.000) |     8.89 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           64 |      578 | 2023-01-20 | HONORIS                | L   | 1.000      | -            | -                | -                | -         |   -22.51 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           63 |      595 | 2023-01-19 | Invictus International | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.86 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           62 |      753 | 2022-12-19 | LDLC                   | L   | 0.834      | -            | -                | -                | -         |   -22.01 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           61 |      771 | 2022-12-18 | los kogutos            | W   | 0.827      | -            | -                | -                | 0 (0.000) |     4.00 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           60 |      806 | 2022-12-17 | AGO                    | L   | 0.820      | -            | -                | -                | -         |   -20.88 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           59 |      837 | 2022-12-16 | HEET                   | W   | 0.813      | -            | -                | -                | 0 (0.000) |     8.03 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           58 |      954 | 2022-12-11 | Apeks                  | L   | 0.779      | -            | -                | -                | -         |   -16.80 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           57 |      985 | 2022-12-10 | JANO                   | W   | 0.773      | -            | -                | -                | 0 (0.000) |     2.65 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           56 |     1009 | 2022-12-09 | IKLA                   | L   | 0.767      | -            | -                | -                | -         |   -16.56 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           55 |     1064 | 2022-12-07 | 9 Pandas               | W   | 0.754      | -            | -                | -                | -         |     3.12 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           54 |     1091 | 2022-12-07 | PROSPECTS              | W   | 0.751      | 0.371        | -                | 0.689 (0.192)    | -         |     5.92 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           53 |     1180 | 2022-12-04 | Tricked                | W   | 0.732      | 0.435        | 0.034 (0.011)    | 0.954 (0.304)    | -         |     7.52 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           52 |     1245 | 2022-12-02 | ECLOT                  | W   | 0.721      | 0.435        | 0.046 (0.014)    | 0.584 (0.183)    | -         |     7.57 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           51 |     1279 | 2022-12-01 | Websterz               | W   | 0.713      | -            | -                | -                | -         |     4.68 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           50 |     1357 | 2022-11-28 | HONORIS                | W   | 0.693      | 0.435        | -                | 0.748 (0.225)    | -         |     5.56 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           49 |     1568 | 2022-11-18 | BIG                    | L   | 0.626      | -            | -                | -                | -         |    -4.04 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           48 |     1577 | 2022-11-17 | SAW                    | W   | 0.621      | 0.589        | 0.093 (0.034)    | 0.642 (0.235)    | 1 (0.621) |    10.49 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           47 |     1586 | 2022-11-17 | Astralis               | W   | 0.619      | 0.589        | 0.149 (0.054)    | 0.538 (0.196)    | 1 (0.619) |    15.27 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           46 |     1593 | 2022-11-17 | Bad News Eagles        | W   | 0.619      | 0.589        | 0.066 (0.024)    | -                | 1 (0.619) |    12.11 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           45 |     1601 | 2022-11-17 | fnatic                 | L   | 0.618      | -            | -                | -                | -         |    -1.84 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           44 |     1603 | 2022-11-17 | Complexity             | W   | 0.617      | 0.589        | 0.129 (0.047)    | 0.487 (0.177)    | 1 (0.617) |    16.24 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           43 |     1793 | 2022-10-30 | Enterprise             | W   | 0.500      | 0.435        | 0.042 (0.009)    | -                | -         |     4.78 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           42 |     1808 | 2022-10-29 | Nemiga                 | W   | 0.493      | -            | -                | -                | -         |     2.97 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           41 |     1809 | 2022-10-29 | Tricked                | W   | 0.493      | 0.435        | -                | 0.954 (0.204)    | -         |     7.24 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           40 |     1830 | 2022-10-28 | ECSTATIC               | W   | 0.485      | -            | -                | -                | -         |     4.31 | brzer, Cabbi, kraghen, maNkz, Queenix        |
|           39 |     1866 | 2022-10-26 | SINNERS                | W   | 0.473      | 0.435        | 0.068 (0.014)    | -                | -         |     6.60 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           38 |     1889 | 2022-10-25 | Copenhagen Flames      | L   | 0.466      | -            | -                | -                | -         |    -8.05 | b0RUP, birdfromsky, raalz, regali, TMB       |
|           37 |     1984 | 2022-10-21 | Spirit                 | L   | 0.440      | -            | -                | -                | -         |    -1.79 | dennyslaw, mar, numb, Rainwaker, SHiPZ       |
|           36 |     2084 | 2022-10-17 | Sangal                 | L   | 0.413      | -            | -                | -                | -         |    -8.02 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           35 |     2111 | 2022-10-16 | Tricked                | L   | 0.406      | -            | -                | -                | -         |    -7.45 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           34 |     2143 | 2022-10-15 | Copenhagen Flames      | W   | 0.399      | 0.435        | 0.133 (0.023)    | -                | -         |     5.16 | dennyslaw, mar, numb, Rainwaker, SHiPZ       |
|           33 |     2194 | 2022-10-14 | Believe                | L   | 0.392      | -            | -                | -                | -         |    -9.84 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           32 |     2210 | 2022-10-13 | Monte                  | W   | 0.387      | -            | -                | -                | -         |     1.60 | DemQQ, Fessor, joel, REDSTAR, Woro2k         |
|           31 |     2286 | 2022-10-11 | UNGENTIUM              | W   | 0.371      | -            | -                | -                | -         |     2.45 | GruBy, m4tthi, ponczek, Prism, Sidney        |
|           30 |     2301 | 2022-10-10 | Zero Tenacity          | W   | 0.364      | -            | -                | -                | -         |     2.07 | aVN, brutmonster, Cjoffo, nEMANHA, simke     |
|           29 |     2520 | 2022-09-29 | PACT                   | L   | 0.293      | -            | -                | -                | -         |    -7.59 | bubble, dennyslaw, pNshr, Rainwaker, SHiPZ   |
|           28 |     2577 | 2022-09-27 | LDLC                   | W   | 0.280      | -            | -                | -                | -         |     1.31 | bubble, dennyslaw, pNshr, Rainwaker, SHiPZ   |
|           27 |     2635 | 2022-09-25 | los kogutos            | L   | 0.265      | -            | -                | -                | -         |    -6.76 | darchevile, Enzo, kRaSnaL, maaryy, tomiko    |
|           26 |     2639 | 2022-09-25 | SINNERS                | L   | 0.264      | -            | -                | -                | -         |    -4.79 | beastik, forsyy, SHOCK, ZEDKO, Zero          |
|           25 |     2655 | 2022-09-24 | LF0                    | W   | 0.260      | -            | -                | -                | -         |     0.35 | eightz999, HUckLer, JACKPOT, lesswill, SP1NT |
|           24 |     2671 | 2022-09-24 | Eternal Fire           | W   | 0.258      | -            | -                | -                | -         |     2.71 | imoRR, MAJ3R, paz, woxic, XANTARES           |
|           23 |     2676 | 2022-09-24 | iNation                | W   | 0.257      | -            | -                | -                | -         |     3.97 | DEPRESHN, DiMKE, Dragon, NENO, VLDN          |
|           22 |     2720 | 2022-09-23 | Nexus                  | W   | 0.251      | -            | -                | -                | -         |     1.50 | adamS, BTN, ragga, SEMINTE, XELLOW           |
|           21 |     2754 | 2022-09-22 | Permitta               | L   | 0.246      | -            | -                | -                | -         |    -5.83 | casey, Layner, mchk, olimp, sNx              |
|           20 |     2782 | 2022-09-21 | Illuminar              | L   | 0.240      | -            | -                | -                | -         |    -4.34 | EXUS, mASKED, morelz, reatz, TOAO            |
|           19 |     2791 | 2022-09-21 | LeeK                   | W   | 0.239      | -            | -                | -                | -         |     0.33 | AiyvaN, kenzor, MERL, regi57ar, yaph         |
|           18 |     2836 | 2022-09-19 | MOUZ NXT               | W   | 0.225      | -            | -                | -                | -         |     1.43 | Chr1zN, Jimpphat, Nexius, Q-Q, zyyx          |
|           17 |     2890 | 2022-09-17 | HONORIS                | L   | 0.212      | -            | -                | -                | -         |    -4.98 | Grashog, reiko, SaMey, Sobol, TaZ            |
|           16 |     3077 | 2022-09-11 | BLINK                  | W   | 0.173      | -            | -                | -                | -         |     0.43 | BledarD, Caleyy, gulito, krabeni, vAloN      |
|           15 |     3091 | 2022-09-11 | BLINK                  | W   | 0.171      | -            | -                | -                | -         |     0.42 | bubble, dennyslaw, dream3r, Rainwaker, SHiPZ |
|           14 |     3120 | 2022-09-10 | Believe                | L   | 0.167      | -            | -                | -                | -         |    -4.48 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ  |
|           13 |     3146 | 2022-09-10 | Austria                | W   | 0.165      | -            | -                | -                | -         |     0.33 | bubble, dennyslaw, dream3r, Rainwaker, SHiPZ |
|           12 |     3169 | 2022-09-09 | 1WIN                   | L   | 0.160      | -            | -                | -                | -         |    -3.85 | bubble, dennyslaw, dream3r, Rainwaker, SHiPZ |
|           11 |     3177 | 2022-09-09 | Iron Branch            | W   | 0.159      | -            | -                | -                | -         |     0.50 | Ganginho, HeavyGod, j3kie, MaSvAl, sad       |
|           10 |     3213 | 2022-09-08 | UNGENTIUM              | W   | 0.154      | -            | -                | -                | -         |     0.97 | bubble, dennyslaw, dream3r, Rainwaker, SHiPZ |
|            9 |     3311 | 2022-09-03 | Hatred                 | W   | 0.120      | -            | -                | -                | -         |     0.09 | bubble, dennyslaw, dream3r, Rainwaker, SHiPZ |
|            8 |     3320 | 2022-09-03 | NeedDOCTOR             | W   | 0.120      | -            | -                | -                | -         |     0.34 | bubble, dennyslaw, dream3r, Rainwaker, SHiPZ |
|            7 |     3386 | 2022-09-01 | Falcons                | L   | 0.106      | -            | -                | -                | -         |    -2.12 | bubble, dennyslaw, dream3r, Rainwaker, SHiPZ |
|            6 |     3441 | 2022-08-30 | sYnck                  | W   | 0.091      | -            | -                | -                | -         |     0.42 | consss, eku, fejtZ, MakiG, Wahtzz            |
|            5 |     3446 | 2022-08-29 | Tricked                | L   | 0.086      | -            | -                | -                | -         |    -1.66 | IceBerg, kiR, kwezz, Lucky, PR1mE            |
|            4 |     3515 | 2022-08-27 | Illuminar              | L   | 0.073      | -            | -                | -                | -         |    -1.30 | bubble, dennyslaw, dream3r, Rainwaker, SHiPZ |
|            3 |     3531 | 2022-08-27 | Aurora                 | L   | 0.072      | -            | -                | -                | -         |    -2.06 | delus1onn, KaiR0N-, Lack1, RAiLWAY, sugaR    |
|            2 |     3580 | 2022-08-25 | Permitta               | W   | 0.058      | -            | -                | -                | -         |     0.40 | casey, iso, Layner, olimp, sNx               |
|            1 |     3655 | 2022-08-22 | MASONIC                | W   | 0.037      | -            | -                | -                | -         |     0.33 | Anlelele, Buzz, J3nsyy, notaN, Tauson        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($40,322.36)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-01-26 |      1.000 | $2,000.00      | $2,000.00       |
| 2022-12-15 |      0.807 | $750.00        | $605.51         |
| 2022-12-04 |      0.732 | $25,000.00     | $18,302.10      |
| 2022-11-20 |      0.640 | $10,000.00     | $6,396.20       |
| 2022-10-30 |      0.500 | $25,000.00     | $12,497.71      |
| 2022-09-11 |      0.173 | $3,014.00      | $520.83         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
