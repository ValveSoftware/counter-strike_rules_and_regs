### Roster Details<br />
Team Name: Villainous<br />
Roster: Alvin, omniscient, shutout, tatm, zebra<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [181](../standings_global.md)<br />
Regional Rank: [50]( ../standings_americas.md)<br />
Final Rank Value:  637.4<br />
<br />
Final Rank Value (637.4) = Starting Rank Value (652.2) + Head To Head Adjustments (-14.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.288[<sup>1</sup>](#table2)
- Bounty Collected: 0.197[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.123<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 652.2
- 400 + ( ( 0.123 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 652.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |     2080 | 2022-10-17 | 7AM NA               | L   | 0.416      | -            | -                | -                | -         |    -8.07 | Alvin, omniscient, shutout, tatm, zebra |
|           16 |     2164 | 2022-10-14 | Snakes Den           | L   | 0.395      | -            | -                | -                | -         |    -6.42 | Alvin, omniscient, shutout, tatm, zebra |
|           15 |     2204 | 2022-10-13 | Mythic               | L   | 0.388      | -            | -                | -                | -         |    -5.51 | Alvin, omniscient, shutout, tatm, zebra |
|           14 |     2237 | 2022-10-12 | 7AM NA               | W   | 0.382      | 0.143        | 0.000 (0.000)    | 0.107 (0.006)    | 0 (0.000) |     4.44 | Alvin, omniscient, shutout, tatm, zebra |
|           13 |     2302 | 2022-10-09 | Noxious              | L   | 0.362      | -            | -                | -                | -         |    -4.89 | Alvin, omniscient, shutout, tatm, zebra |
|           12 |     2336 | 2022-10-07 | Red Wolves           | W   | 0.349      | 0.371        | 0.002 (0.000)    | 0.291 (0.038)    | 0 (0.000) |     5.60 | Alvin, omniscient, shutout, tatm, zebra |
|           11 |     2416 | 2022-10-04 | Snakes Den           | W   | 0.329      | 0.371        | 0.002 (0.000)    | 0.059 (0.007)    | 0 (0.000) |     5.16 | Alvin, omniscient, shutout, tatm, zebra |
|           10 |     2509 | 2022-09-29 | X13                  | W   | 0.296      | 0.371        | 0.001 (0.000)    | 0.090 (0.010)    | 0 (0.000) |     4.86 | Alvin, omniscient, shutout, tatm, zebra |
|            9 |     2535 | 2022-09-28 | Cartel terraza       | L   | 0.289      | -            | -                | -                | -         |    -4.41 | Alvin, omniscient, shutout, tatm, zebra |
|            8 |     2566 | 2022-09-27 | Cartel terraza       | W   | 0.283      | 0.371        | 0.002 (0.000)    | 0.113 (0.012)    | 0 (0.000) |     4.67 | Alvin, omniscient, shutout, tatm, zebra |
|            7 |     2583 | 2022-09-26 | LAG                  | W   | 0.276      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.79 | Alvin, omniscient, shutout, tatm, zebra |
|            6 |     2727 | 2022-09-22 | Snakes Den           | L   | 0.249      | -            | -                | -                | -         |    -3.93 | Alvin, omniscient, shutout, tatm, zebra |
|            5 |     2771 | 2022-09-21 | Take Flyte           | L   | 0.241      | -            | -                | -                | -         |    -5.35 | Alvin, omniscient, shutout, tatm, zebra |
|            4 |     2801 | 2022-09-20 | DNA                  | W   | 0.234      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.45 | Alvin, flixxy, shutout, tatm, zebra     |
|            3 |     2844 | 2022-09-18 | 1 JIN                | L   | 0.221      | -            | -                | -                | -         |    -3.13 | Alvin, flixxy, shutout, tatm, zebra     |
|            2 |     2906 | 2022-09-16 | Valence              | W   | 0.208      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.29 | Alvin, omniscient, shutout, tatm, zebra |
|            1 |     2986 | 2022-09-14 | Davenport University | L   | 0.194      | -            | -                | -                | -         |    -2.34 | Alvin, omniscient, shutout, tatm, zebra |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,615.77)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
