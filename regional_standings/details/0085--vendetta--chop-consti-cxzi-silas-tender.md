### Roster Details<br />
Team Name: Vendetta<br />
Roster: chop, consti, cxzi, silas, Tender<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [85](../standings_global.md)<br />
Regional Rank: [18]( ../standings_americas.md)<br />
Final Rank Value:  847.0<br />
<br />
Final Rank Value (847.0) = Starting Rank Value (790.1) + Head To Head Adjustments (56.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.361[<sup>1</sup>](#table2)
- Bounty Collected: 0.307[<sup>2</sup>](#table1)
- Opponent Network: 0.095[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.191<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 790.1
- 400 + ( ( 0.191 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 790.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |       40 | 2023-02-10 | Nouns        | L   | 1.000      | -            | -                | -                | -         |   -13.18 | chop, consti, cxzi, silas, Tender   |
|           23 |       73 | 2023-02-08 | Noxious      | W   | 1.000      | 0.435        | 0.006 (0.002)    | 0.180 (0.078)    | 0 (0.000) |     6.56 | chop, consti, cxzi, silas, Tender   |
|           22 |       95 | 2023-02-07 | Disconnected | W   | 1.000      | 0.384        | 0.004 (0.001)    | -                | 0 (0.000) |     4.69 | chop, consti, cxzi, silas, Tender   |
|           21 |      114 | 2023-02-06 | MIBR         | L   | 1.000      | -            | -                | -                | -         |    -9.64 | chop, consti, cxzi, silas, Tender   |
|           20 |      144 | 2023-02-05 | Noxious      | W   | 1.000      | 0.384        | 0.006 (0.002)    | 0.180 (0.069)    | 0 (0.000) |     6.95 | chop, consti, cxzi, silas, Tender   |
|           19 |      295 | 2023-01-29 | Nouns        | L   | 1.000      | -            | -                | -                | -         |   -13.64 | chop, consti, cxzi, Pluto, Tender   |
|           18 |      297 | 2023-01-29 | Mythic       | W   | 1.000      | 0.354        | -                | 0.203 (0.072)    | 0 (0.000) |     9.19 | chop, consti, cxzi, Pluto, Tender   |
|           17 |      323 | 2023-01-28 | timbermen    | W   | 1.000      | 0.354        | 0.016 (0.006)    | 0.306 (0.108)    | 0 (0.000) |    11.73 | chop, cxzi, Pluto, Tender, WOOHOO   |
|           16 |      358 | 2023-01-27 | Nouns        | W   | 1.000      | 0.143        | 0.059 (0.008)    | 0.589 (0.084)    | 0 (0.000) |    18.36 | chop, consti, cxzi, Pluto, Tender   |
|           15 |      364 | 2023-01-27 | ATK          | W   | 1.000      | 0.143        | 0.070 (0.010)    | 0.646 (0.092)    | 0 (0.000) |    23.09 | chop, consti, cxzi, Pluto, Tender   |
|           14 |      368 | 2023-01-27 | timbermen    | W   | 1.000      | 0.143        | 0.016 (0.002)    | -                | 0 (0.000) |    14.64 | chop, consti, cxzi, Pluto, Tender   |
|           13 |      457 | 2023-01-24 | Mystic       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.19 | chop, consti, cxzi, Pluto, Tender   |
|           12 |      677 | 2023-01-15 | Strife       | L   | 1.000      | -            | -                | -                | -         |   -14.22 | consti, cxzi, Pluto, Tender, WOOHOO |
|           11 |      694 | 2023-01-14 | Nouns        | W   | 1.000      | 0.310        | 0.059 (0.018)    | 0.589 (0.183)    | 0 (0.000) |    20.59 | chop, consti, cxzi, Pluto, Tender   |
|           10 |      706 | 2023-01-13 | Detonate     | W   | 1.000      | 0.310        | 0.008 (0.002)    | 0.400 (0.124)    | -         |    15.29 | chop, consti, cxzi, Pluto, Tender   |
|            9 |      885 | 2022-12-14 | timbermen    | L   | 0.802      | -            | -                | -                | -         |   -11.46 | chop, CLASIA, consti, Pluto, Tender |
|            8 |      972 | 2022-12-10 | ATK          | L   | 0.775      | -            | -                | -                | -         |    -6.08 | chop, CLASIA, consti, Pluto, Tender |
|            7 |     1052 | 2022-12-07 | Disconnected | L   | 0.756      | -            | -                | -                | -         |   -13.19 | chop, CLASIA, consti, Pluto, Tender |
|            6 |     1095 | 2022-12-06 | Noxious      | W   | 0.749      | 0.435        | 0.006 (0.002)    | -                | -         |     6.90 | chop, CLASIA, consti, Pluto, Tender |
|            5 |     1134 | 2022-12-05 | Villainous   | W   | 0.742      | 0.435        | -                | 0.226 (0.073)    | -         |     5.77 | chop, CLASIA, consti, Pluto, Tender |
|            4 |     1238 | 2022-12-02 | ATK          | L   | 0.722      | -            | -                | -                | -         |    -5.55 | chop, CLASIA, consti, Pluto, Tender |
|            3 |     1266 | 2022-12-01 | Nouns        | L   | 0.715      | -            | -                | -                | -         |    -7.98 | chop, CLASIA, consti, Pluto, Tender |
|            2 |     1318 | 2022-11-29 | Mythic       | W   | 0.702      | 0.435        | -                | 0.203 (0.062)    | -         |     7.88 | chop, CLASIA, consti, Pluto, Tender |
|            1 |     1406 | 2022-11-26 | MIBR         | L   | 0.682      | -            | -                | -                | -         |    -6.00 | chop, CLASIA, consti, Pluto, Tender |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,036.08)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-10 |      1.000 | $1,000.00      | $1,000.00       |
| 2023-01-29 |      1.000 | $4,000.00      | $4,000.00       |
| 2023-01-15 |      1.000 | $2,000.00      | $2,000.00       |
| 2022-12-18 |      0.829 | $1,250.00      | $1,036.08       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
