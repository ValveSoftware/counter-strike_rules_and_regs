### Roster Details<br />
Team Name: Phantom Troupe<br />
Roster: Cryptic, Florence, freshie, JTMythic, niise<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [185](../standings_global.md)<br />
Regional Rank: [54]( ../standings_americas.md)<br />
Final Rank Value:  632.4<br />
<br />
Final Rank Value (632.4) = Starting Rank Value (633.5) + Head To Head Adjustments (-1.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.239[<sup>1</sup>](#table2)
- Bounty Collected: 0.211[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.114<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 633.5
- 400 + ( ( 0.114 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 633.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     2482 | 2022-09-30 | Davenport University | L   | 0.302      | -            | -                | -                | -         |    -3.57 | Cryptic, Florence, freshie, JTMythic, niise |
|           15 |     2506 | 2022-09-29 | 7AM NA               | W   | 0.296      | 0.384        | 0.000 (0.000)    | 0.107 (0.012)    | 0 (0.000) |     3.75 | Cryptic, Florence, freshie, JTMythic, niise |
|           14 |     2538 | 2022-09-28 | EG Black             | L   | 0.289      | -            | -                | -                | -         |    -1.93 | CLASIA, Cryptic, Florence, freshie, niise   |
|           13 |     2569 | 2022-09-27 | Davenport University | W   | 0.282      | 0.435        | 0.014 (0.002)    | 0.227 (0.028)    | 0 (0.000) |     5.60 | CLASIA, Cryptic, Florence, freshie, niise   |
|           12 |     2643 | 2022-09-24 | TropiCaos            | L   | 0.262      | -            | -                | -                | -         |    -2.96 | dzt, land1n, mawth, prt, tatazin            |
|           11 |     2730 | 2022-09-22 | Brazen               | L   | 0.249      | -            | -                | -                | -         |    -3.98 | Cryptic, Florence, freshie, JTMythic, niise |
|           10 |     2765 | 2022-09-21 | Mythic               | W   | 0.242      | 0.435        | 0.001 (0.000)    | 0.203 (0.021)    | 0 (0.000) |     4.41 | Cryptic, Florence, freshie, JTMythic, niise |
|            9 |     2933 | 2022-09-15 | TeamOne              | L   | 0.202      | -            | -                | -                | -         |    -1.17 | Cryptic, Florence, freshie, JTMythic, niise |
|            8 |     2980 | 2022-09-14 | MIBR                 | L   | 0.195      | -            | -                | -                | -         |    -0.74 | Cryptic, Florence, freshie, JTMythic, niise |
|            7 |     3015 | 2022-09-13 | Unjustified          | W   | 0.189      | 0.435        | 0.000 (0.000)    | 0.014 (0.001)    | 0 (0.000) |     1.97 | Cryptic, Florence, freshie, JTMythic, niise |
|            6 |     3131 | 2022-09-10 | Apeks                | L   | 0.167      | -            | -                | -                | -         |    -0.83 | CLASIA, Cryptic, Florence, JTMythic, niise  |
|            5 |     3142 | 2022-09-10 | TeamOne              | L   | 0.166      | -            | -                | -                | -         |    -0.98 | CLASIA, Cryptic, Florence, JTMythic, niise  |
|            4 |     3231 | 2022-09-07 | TeamOne              | L   | 0.148      | -            | -                | -                | -         |    -0.89 | Cryptic, Florence, freshie, JTMythic, niise |
|            3 |     3246 | 2022-09-06 | Strife               | W   | 0.142      | 0.143        | 0.001 (0.000)    | 0.052 (0.001)    | 0 (0.000) |     2.22 | Cryptic, Florence, freshie, JTMythic, niise |
|            2 |     3300 | 2022-09-03 | Davenport University | L   | 0.122      | -            | -                | -                | -         |    -1.37 | Cryptic, Florence, freshie, JTMythic, niise |
|            1 |     3406 | 2022-08-31 | TeamOne              | L   | 0.102      | -            | -                | -                | -         |    -0.63 | Cryptic, Florence, freshie, JTMythic, niise |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($314.93)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
