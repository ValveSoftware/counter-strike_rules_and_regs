### Roster Details<br />
Team Name: JANO<br />
Roster: allu, Cliqq, Jerppa, Sm1llee, Villeboe<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [157](../standings_global.md)<br />
Regional Rank: [102]( ../standings_europe.md)<br />
Final Rank Value:  683.6<br />
<br />
Final Rank Value (683.6) = Starting Rank Value (702.7) + Head To Head Adjustments (-19.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.276[<sup>1</sup>](#table2)
- Bounty Collected: 0.300[<sup>2</sup>](#table1)
- Opponent Network: 0.032[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 702.7
- 400 + ( ( 0.152 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 702.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      400 | 2024-06-02 | FAVBET            | L   | 1.000      | -            | -                | -                | -         |   -10.93 | allu, Cliqq, Jerppa, Sm1llee, Villeboe |
|           14 |      503 | 2024-05-29 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |    -2.50 | allu, Cliqq, Jerppa, Sm1llee, Villeboe |
|           13 |     1338 | 2024-04-27 | Sashi             | L   | 0.906      | -            | -                | -                | -         |    -1.41 | allu, doto, Jerppa, juho, Sm1llee      |
|           12 |     1511 | 2024-04-20 | Sangal            | L   | 0.857      | -            | -                | -                | -         |    -2.56 | allu, doto, Jerppa, juho, Sm1llee      |
|           11 |     1544 | 2024-04-19 | NOM               | W   | 0.853      | 0.143        | 0.000 (0.000)    | 0.133 (0.016)    | 0 (0.000) |     8.60 | allu, doto, Jerppa, juho, Sm1llee      |
|           10 |     1644 | 2024-04-17 | RUBY              | L   | 0.838      | -            | -                | -                | -         |    -6.31 | allu, doto, Jerppa, juho, Sm1llee      |
|            9 |     1653 | 2024-04-17 | MOUZ NXT          | L   | 0.837      | -            | -                | -                | -         |    -2.76 | allu, doto, Jerppa, juho, Sm1llee      |
|            8 |     1734 | 2024-04-12 | Zero Tenacity     | W   | 0.804      | 0.371        | 0.154 (0.046)    | 1.000 (0.298)    | 0 (0.000) |    21.82 | allu, doto, Jerppa, juho, Sm1llee      |
|            7 |     1898 | 2024-04-08 | Permitta          | L   | 0.777      | -            | -                | -                | -         |    -4.41 | allu, doto, Jerppa, juho, Sm1llee      |
|            6 |     1933 | 2024-04-06 | Johnny Speeds     | L   | 0.765      | -            | -                | -                | -         |    -2.15 | allu, doto, Jerppa, juho, Sm1llee      |
|            5 |     1998 | 2024-04-04 | Gaimin Gladiators | L   | 0.751      | -            | -                | -                | -         |    -0.94 | allu, doto, Jerppa, juho, Sm1llee      |
|            4 |     2466 | 2024-03-12 | ECF               | L   | 0.599      | -            | -                | -                | -         |    -6.95 | allu, doto, Jelo, Jerppa, Sm1llee      |
|            3 |     2556 | 2024-03-08 | INGLORIOUS        | W   | 0.571      | 0.143        | 0.000 (0.000)    | 0.044 (0.004)    | 0 (0.000) |     6.10 | allu, doto, Jelo, Jerppa, Sm1llee      |
|            2 |     2666 | 2024-03-04 | Endpoint          | L   | 0.546      | -            | -                | -                | -         |   -13.08 | allu, doto, Jelo, Jerppa, Sm1llee      |
|            1 |     2751 | 2024-02-29 | Sashi             | L   | 0.518      | -            | -                | -                | -         |    -1.63 | allu, doto, Jelo, Jerppa, Sm1llee      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($720.93)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
