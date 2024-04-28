### Roster Details<br />
Team Name: Nemiga<br />
Roster: 1eeR, BELCHONOKK, fostar, iDISBALANCE, Jyo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [107](../standings_global.md)<br />
Regional Rank: [76]( ../standings_europe.md)<br />
Final Rank Value:  781.6<br />
<br />
Final Rank Value (781.6) = Starting Rank Value (747.6) + Head To Head Adjustments (34.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.322[<sup>1</sup>](#table2)
- Bounty Collected: 0.294[<sup>2</sup>](#table1)
- Opponent Network: 0.063[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.170<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 747.6
- 400 + ( ( 0.170 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 747.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     1808 | 2022-10-29 | 500               | L   | 0.493      | -            | -                | -                | -         |    -2.97 | 1eeR, BELCHONOKK, fostar, iDISBALANCE, Jyo |
|           13 |     1814 | 2022-10-28 | Enterprise        | L   | 0.488      | -            | -                | -                | -         |    -5.48 | 1eeR, BELCHONOKK, fostar, iDISBALANCE, Jyo |
|           12 |     1836 | 2022-10-27 | ECSTATIC          | W   | 0.481      | 0.435        | 0.030 (0.006)    | 0.556 (0.116)    | 0 (0.000) |     9.41 | 1eeR, BELCHONOKK, fostar, iDISBALANCE, Jyo |
|           11 |     1871 | 2022-10-26 | Tricked           | W   | 0.472      | 0.435        | 0.034 (0.007)    | 0.954 (0.196)    | 0 (0.000) |    11.83 | 1eeR, BELCHONOKK, fostar, iDISBALANCE, Jyo |
|           10 |     1993 | 2022-10-21 | SAW               | L   | 0.439      | -            | -                | -                | -         |    -1.75 | 1eeR, BELCHONOKK, fostar, iDISBALANCE, Jyo |
|            9 |     2106 | 2022-10-16 | sYnck             | W   | 0.407      | 0.435        | 0.002 (0.000)    | 0.397 (0.070)    | 0 (0.000) |     6.59 | 1eeR, BELCHONOKK, fostar, iDISBALANCE, Jyo |
|            8 |     2187 | 2022-10-14 | Copenhagen Flames | W   | 0.392      | 0.435        | 0.133 (0.023)    | 0.722 (0.123)    | 0 (0.000) |     9.71 | 1eeR, BELCHONOKK, fostar, iDISBALANCE, Jyo |
|            7 |     2243 | 2022-10-12 | Sangal            | W   | 0.380      | 0.435        | 0.017 (0.003)    | 0.684 (0.113)    | 0 (0.000) |     9.21 | 1eeR, BELCHONOKK, fostar, iDISBALANCE, Jyo |
|            6 |     2467 | 2022-10-01 | 777               | W   | 0.307      | 0.143        | 0.002 (0.000)    | 0.202 (0.009)    | 0 (0.000) |     4.37 | 1eeR, BELCHONOKK, fostar, iDISBALANCE, Jyo |
|            5 |     2475 | 2022-10-01 | SMIX              | W   | 0.305      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.24 | 1eeR, BELCHONOKK, fostar, iDISBALANCE, Jyo |
|            4 |     2499 | 2022-09-30 | 777               | L   | 0.299      | -            | -                | -                | -         |    -5.19 | 1eeR, BELCHONOKK, fostar, iDISBALANCE, Jyo |
|            3 |     2632 | 2022-09-25 | EC Brugge         | L   | 0.266      | -            | -                | -                | -         |    -3.40 | 1eeR, BELCHONOKK, fostar, iDISBALANCE, Jyo |
|            2 |     3607 | 2022-08-23 | Entropiq          | L   | 0.046      | -            | -                | -                | -         |    -0.79 | 1eeR, BELCHONOKK, fostar, iDISBALANCE, Jyo |
|            1 |     3617 | 2022-08-23 | SINNERS           | W   | 0.046      | 0.143        | 0.068 (0.000)    | 0.549 (0.004)    | 0 (0.000) |     1.19 | 1eeR, BELCHONOKK, fostar, iDISBALANCE, Jyo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,749.31)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
