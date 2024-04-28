### Roster Details<br />
Team Name: Genk<br />
Roster: Askan, CrePoW, ReFuZR, Rezst, ryu<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [170](../standings_global.md)<br />
Regional Rank: [113]( ../standings_europe.md)<br />
Final Rank Value:  670.0<br />
<br />
Final Rank Value (670.0) = Starting Rank Value (719.7) + Head To Head Adjustments (-49.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.314[<sup>1</sup>](#table2)
- Bounty Collected: 0.209[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.092[<sup>2</sup>](#table1)

The average of these factors is 0.156<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 719.7
- 400 + ( ( 0.156 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 719.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      611 | 2023-01-18 | Endpoint          | L   | 1.000      | -            | -                | -                | -         |    -5.79 | Askan, CrePoW, ReFuZR, Rezst, ryu |
|           14 |      664 | 2023-01-16 | Eternal Fire      | L   | 1.000      | -            | -                | -                | -         |    -6.21 | Askan, CrePoW, ReFuZR, Rezst, ryu |
|           13 |      813 | 2022-12-17 | TENSTAR           | L   | 0.819      | -            | -                | -                | -         |   -18.53 | CrePoW, MAGILA, Rezst, ryu, yoom  |
|           12 |      841 | 2022-12-16 | Partizan          | L   | 0.813      | -            | -                | -                | -         |    -8.29 | brzer, CrePoW, Rezst, ryu, yoom   |
|           11 |      850 | 2022-12-16 | LIBURNA           | W   | 0.811      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.86 | brzer, CrePoW, ReFuZR, Rezst, ryu |
|           10 |     1540 | 2022-11-20 | Apeks Rebels      | L   | 0.639      | -            | -                | -                | -         |    -8.42 | CrePoW, ReFuZR, Rezst, ryu, yoom  |
|            9 |     1555 | 2022-11-19 | 777               | L   | 0.632      | -            | -                | -                | -         |   -10.57 | CrePoW, ReFuZR, Rezst, ryu, yoom  |
|            8 |     1667 | 2022-11-09 | Coalesce          | L   | 0.567      | -            | -                | -                | -         |    -9.04 | CrePoW, ReFuZR, Rezst, ryu, Xaka  |
|            7 |     1742 | 2022-11-02 | High Space Tigers | W   | 0.520      | 0.294        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.97 | CrePoW, ReFuZR, Rezst, ryu, Xaka  |
|            6 |     1962 | 2022-10-22 | EC Brugge         | W   | 0.446      | 0.333        | 0.007 (0.001)    | 0.507 (0.075)    | 1 (0.446) |     8.57 | CrePoW, ReFuZR, Rezst, ryu, Xaka  |
|            5 |     1968 | 2022-10-22 | Stinkdiertjes     | W   | 0.445      | 0.333        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.445) |     3.62 | CrePoW, ReFuZR, Rezst, ryu, Xaka  |
|            4 |     2449 | 2022-10-02 | EC Brugge         | L   | 0.312      | -            | -                | -                | -         |    -3.86 | CrePoW, ReFuZR, Rezst, ryu, Xaka  |
|            3 |     2918 | 2022-09-16 | PACT              | L   | 0.207      | -            | -                | -                | -         |    -2.83 | CrePoW, ReFuZR, Rezst, ryu, Xaka  |
|            2 |     2927 | 2022-09-16 | fnatic            | L   | 0.206      | -            | -                | -                | -         |    -0.09 | CrePoW, ReFuZR, Rezst, ryu, Xaka  |
|            1 |     2953 | 2022-09-15 | EC Brugge         | W   | 0.200      | 0.143        | 0.007 (0.000)    | 0.507 (0.014)    | 0 (0.000) |     3.94 | CrePoW, ReFuZR, Rezst, ryu, Xaka  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,093.46)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-11-20 |      0.639 | $373.00        | $238.30         |
| 2022-10-22 |      0.446 | $5,000.00      | $2,230.51       |
| 2022-10-02 |      0.312 | $2,001.00      | $624.64         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
