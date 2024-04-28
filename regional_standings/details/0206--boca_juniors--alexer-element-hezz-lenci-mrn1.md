### Roster Details<br />
Team Name: Boca Juniors<br />
Roster: alexer, elemeNt, Hezz, lenci, MRN1<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [206](../standings_global.md)<br />
Regional Rank: [65]( ../standings_americas.md)<br />
Final Rank Value:  568.6<br />
<br />
Final Rank Value (568.6) = Starting Rank Value (587.9) + Head To Head Adjustments (-19.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.214[<sup>1</sup>](#table2)
- Bounty Collected: 0.153[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.092<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 587.9
- 400 + ( ( 0.092 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 587.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     1951 | 2022-10-22 | Meta         | L   | 0.447      | -            | -                | -                | -         |    -3.74 | alexer, elemeNt, Hezz, lenci, MRN1 |
|           15 |     1973 | 2022-10-21 | DNG          | L   | 0.442      | -            | -                | -                | -         |    -3.79 | alexer, elemeNt, Hezz, lenci, MRN1 |
|           14 |     1978 | 2022-10-21 | AJF          | W   | 0.441      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.53 | alexer, elemeNt, Hezz, lenci, MRN1 |
|           13 |     2009 | 2022-10-20 | ARCTIC       | L   | 0.434      | -            | -                | -                | -         |    -2.26 | alexer, elemeNt, Hezz, lenci, MRN1 |
|           12 |     2033 | 2022-10-19 | RED Canids   | L   | 0.427      | -            | -                | -                | -         |    -4.74 | alexer, elemeNt, Hezz, lenci, MRN1 |
|           11 |     2685 | 2022-09-23 | ODDIK        | L   | 0.255      | -            | -                | -                | -         |    -2.03 | alexer, elemeNt, Hezz, lenci, MRN1 |
|           10 |     2842 | 2022-09-18 | Redragon     | W   | 0.222      | 0.384        | 0.000 (0.000)    | 0.020 (0.002)    | 0 (0.000) |     1.91 | alexer, Bruj, elemeNt, Hezz, MRN1  |
|            9 |     2886 | 2022-09-17 | MIBR Academy | L   | 0.213      | -            | -                | -                | -         |    -3.71 | alexer, Bruj, elemeNt, Hezz, MRN1  |
|            8 |     2944 | 2022-09-15 | WINDINGO     | L   | 0.200      | -            | -                | -                | -         |    -2.41 | alexer, Bruj, elemeNt, Hezz, MRN1  |
|            7 |     3106 | 2022-09-10 | Rehl         | L   | 0.168      | -            | -                | -                | -         |    -2.25 | alexer, Bruj, elemeNt, Hezz, MRN1  |
|            6 |     3141 | 2022-09-10 | Yawara       | W   | 0.166      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.37 | alexer, Bruj, elemeNt, Hezz, MRN1  |
|            5 |     3205 | 2022-09-08 | O PLANO      | L   | 0.154      | -            | -                | -                | -         |    -2.80 | alexer, Bruj, elemeNt, Hezz, MRN1  |
|            4 |     3660 | 2022-08-21 | Fluxo        | L   | 0.035      | -            | -                | -                | -         |    -0.18 | alexer, Bruj, elemeNt, Hezz, MRN1  |
|            3 |     3738 | 2022-08-19 | ex-Isurus    | L   | 0.020      | -            | -                | -                | -         |    -0.11 | alexer, Bruj, elemeNt, Hezz, MRN1  |
|            2 |     3764 | 2022-08-17 | River Plate  | L   | 0.006      | -            | -                | -                | -         |    -0.12 | alexer, Bruj, elemeNt, Hezz, MRN1  |
|            1 |     3771 | 2022-08-16 | Ape Gang     | L   | 0.002      | -            | -                | -                | -         |    -0.03 | alexer, Bruj, elemeNt, Hezz, MRN1  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($100.24)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
