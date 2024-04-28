### Roster Details<br />
Team Name: SKADE X<br />
Roster: Grus, Jimbo, LaX, Marcelious, truth<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [175](../standings_global.md)<br />
Regional Rank: [115]( ../standings_europe.md)<br />
Final Rank Value:  661.7<br />
<br />
Final Rank Value (661.7) = Starting Rank Value (654.2) + Head To Head Adjustments (7.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.270[<sup>1</sup>](#table2)
- Bounty Collected: 0.215[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.124<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 654.2
- 400 + ( ( 0.124 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 654.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     1524 | 2022-11-21 | Anonymo           | L   | 0.645      | -            | -                | -                | -         |   -11.85 | Grus, Jimbo, LaX, Marcelious, truth |
|           15 |     1583 | 2022-11-17 | AGO               | W   | 0.620      | 0.143        | 0.005 (0.000)    | 0.328 (0.029)    | 0 (0.000) |    13.35 | Grus, Jimbo, LaX, Marcelious, truth |
|           14 |     1587 | 2022-11-17 | EC Brugge         | W   | 0.619      | 0.143        | 0.007 (0.001)    | 0.507 (0.045)    | 0 (0.000) |    13.05 | Grus, Jimbo, LaX, Marcelious, truth |
|           13 |     1657 | 2022-11-11 | Wizard            | L   | 0.579      | -            | -                | -                | -         |    -8.24 | Grus, Jimbo, LaX, Marcelious, truth |
|           12 |     2453 | 2022-10-02 | Copenhagen Flames | L   | 0.311      | -            | -                | -                | -         |    -1.44 | Grus, Jimbo, LaX, Marcelious, truth |
|           11 |     2465 | 2022-10-01 | IMMA PROBLEM      | W   | 0.307      | 0.143        | 0.000 (0.000)    | 0.012 (0.001)    | 0 (0.000) |     2.84 | Grus, Jimbo, LaX, Marcelious, truth |
|           10 |     2476 | 2022-10-01 | JANO              | W   | 0.305      | 0.143        | 0.008 (0.000)    | 0.307 (0.013)    | 0 (0.000) |     5.79 | Grus, Jimbo, LaX, Marcelious, truth |
|            9 |     2497 | 2022-09-30 | ex-TITANS         | L   | 0.299      | -            | -                | -                | -         |    -4.93 | Grus, Jimbo, LaX, Marcelious, truth |
|            8 |     2597 | 2022-09-26 | Sashi             | L   | 0.272      | -            | -                | -                | -         |    -4.34 | Grus, Jimbo, LaX, Marcelious, truth |
|            7 |     2835 | 2022-09-19 | ECLOT             | L   | 0.225      | -            | -                | -                | -         |    -0.85 | Grus, Jimbo, LaX, Marcelious, truth |
|            6 |     2957 | 2022-09-15 | Endpoint          | L   | 0.199      | -            | -                | -                | -         |    -1.32 | Grus, Jimbo, LaX, Marcelious, truth |
|            5 |     3225 | 2022-09-08 | Tricked           | W   | 0.152      | 0.143        | 0.034 (0.001)    | 0.954 (0.021)    | 0 (0.000) |     4.17 | Grus, Jimbo, LaX, Marcelious, truth |
|            4 |     3245 | 2022-09-07 | MASONIC           | L   | 0.144      | -            | -                | -                | -         |    -0.86 | Grus, Jimbo, LaX, Marcelious, truth |
|            3 |     3418 | 2022-08-31 | JANO              | W   | 0.099      | 0.143        | 0.008 (0.000)    | 0.307 (0.004)    | 0 (0.000) |     1.90 | Grus, Jimbo, LaX, Marcelious, truth |
|            2 |     3653 | 2022-08-22 | yodagus           | W   | 0.038      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.23 | Grus, Jimbo, LaX, Marcelious, truth |
|            1 |     3769 | 2022-08-17 | ECLOT             | L   | 0.005      | -            | -                | -                | -         |    -0.02 | Grus, grux, LaX, Marcelious, truth  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($948.55)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
