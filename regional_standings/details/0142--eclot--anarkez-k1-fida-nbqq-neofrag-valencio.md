### Roster Details<br />
Team Name: ECLOT<br />
Roster: anarkez, K1-FiDa, nbqq, NEOFRAG, Valencio<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [142](../standings_global.md)<br />
Regional Rank: [95]( ../standings_europe.md)<br />
Final Rank Value:  710.8<br />
<br />
Final Rank Value (710.8) = Starting Rank Value (710.9) + Head To Head Adjustments (-0.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.367[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.044[<sup>2</sup>](#table1)

The average of these factors is 0.161<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 710.9
- 400 + ( ( 0.161 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 710.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     3064 | 2023-11-25 | Sampi             | L   | 0.207      | -            | -                | -                | -         |    -1.16 | anarkez, K1-FiDa, nbqq, NEOFRAG, Valencio |
|           13 |     3088 | 2023-11-24 | UNiTY             | W   | 0.200      | 0.470        | 0.047 (0.004)    | 0.261 (0.025)    | 1 (0.200) |     4.39 | anarkez, K1-FiDa, nbqq, NEOFRAG, Valencio |
|           12 |     3316 | 2023-11-15 | 9 Pandas          | L   | 0.138      | -            | -                | -                | -         |    -0.48 | anarkez, K1-FiDa, nbqq, NEOFRAG, Valencio |
|           11 |     3345 | 2023-11-13 | PERA              | L   | 0.126      | -            | -                | -                | -         |    -2.27 | anarkez, K1-FiDa, nbqq, NEOFRAG, Valencio |
|           10 |     3381 | 2023-11-12 | Pompa             | W   | 0.118      | 0.384        | 0.000 (0.000)    | 0.014 (0.001)    | 0 (0.000) |     0.95 | anarkez, K1-FiDa, nbqq, NEOFRAG, Valencio |
|            9 |     3424 | 2023-11-10 | SINNERS Academy   | W   | 0.106      | 0.143        | 0.000 (0.000)    | 0.005 (0.000)    | 1 (0.106) |     0.77 | anarkez, K1-FiDa, nbqq, NEOFRAG, Valencio |
|            8 |     3426 | 2023-11-10 | Enterprise        | W   | 0.105      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.105) |     0.50 | anarkez, K1-FiDa, nbqq, NEOFRAG, Valencio |
|            7 |     3434 | 2023-11-09 | SINNERS Academy   | L   | 0.100      | -            | -                | -                | -         |    -2.43 | anarkez, K1-FiDa, nbqq, NEOFRAG, Valencio |
|            6 |     3440 | 2023-11-09 | Gaimin Gladiators | L   | 0.098      | -            | -                | -                | -         |    -0.09 | anarkez, K1-FiDa, nbqq, NEOFRAG, Valencio |
|            5 |     3499 | 2023-11-06 | Metizport         | W   | 0.079      | 0.143        | 0.008 (0.000)    | 0.041 (0.000)    | 0 (0.000) |     1.20 | anarkez, K1-FiDa, nbqq, NEOFRAG, Valencio |
|            4 |     3615 | 2023-11-01 | TSM               | L   | 0.045      | -            | -                | -                | -         |    -0.71 | anarkez, K1-FiDa, nbqq, NEOFRAG, Valencio |
|            3 |     3727 | 2023-10-29 | Sprout            | L   | 0.025      | -            | -                | -                | -         |    -0.60 | anarkez, K1-FiDa, nbqq, NEOFRAG, Valencio |
|            2 |     3817 | 2023-10-26 | Sashi             | L   | 0.006      | -            | -                | -                | -         |    -0.04 | anarkez, K1-FiDa, nbqq, NEOFRAG, Valencio |
|            1 |     3825 | 2023-10-26 | 00NATION          | L   | 0.005      | -            | -                | -                | -         |    -0.09 | anarkez, K1-FiDa, nbqq, NEOFRAG, Valencio |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,577.19)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
