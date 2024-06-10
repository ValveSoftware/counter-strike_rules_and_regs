### Roster Details<br />
Team Name: 777<br />
Roster: Affava, Hagmeister, qzr, Viktha, Wenba<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [131](../standings_global.md)<br />
Regional Rank: [88]( ../standings_europe.md)<br />
Final Rank Value:  749.9<br />
<br />
Final Rank Value (749.9) = Starting Rank Value (720.6) + Head To Head Adjustments (29.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.383[<sup>1</sup>](#table2)
- Bounty Collected: 0.249[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.161<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 720.6
- 400 + ( ( 0.161 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 720.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      436 | 2024-06-01 | VP.Prodigy     | L   | 1.000      | -            | -                | -                | -         |    -9.18 | Affava, Hagmeister, qzr, Viktha, Wenba       |
|           10 |      569 | 2024-05-26 | Metizport X    | W   | 1.000      | 0.322        | 0.008 (0.002)    | 0.039 (0.012)    | 0 (0.000) |    11.65 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            9 |      796 | 2024-05-18 | DMS            | L   | 1.000      | -            | -                | -                | -         |    -8.81 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            8 |      844 | 2024-05-17 | Space          | W   | 1.000      | 0.143        | 0.007 (0.001)    | 0.410 (0.059)    | 0 (0.000) |    21.26 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            7 |      872 | 2024-05-16 | Rounds         | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.11 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            6 |      911 | 2024-05-15 | GUN5           | L   | 1.000      | -            | -                | -                | -         |    -7.75 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            5 |     1054 | 2024-05-11 | Metizport X    | W   | 1.000      | 0.322        | 0.008 (0.002)    | 0.039 (0.012)    | 0 (0.000) |    12.39 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            4 |     1334 | 2024-04-27 | Sashi          | L   | 0.907      | -            | -                | -                | -         |    -1.63 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            3 |     1345 | 2024-04-27 | Preasy         | W   | 0.906      | 0.336        | 0.012 (0.004)    | 0.111 (0.034)    | 0 (0.000) |    16.59 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            2 |     1711 | 2024-04-13 | En av de lette | L   | 0.813      | -            | -                | -                | -         |   -12.14 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            1 |     2320 | 2024-03-17 | INFURITY       | W   | 0.634      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.82 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,439.38)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      1.000 | $3,864.00      | $3,864.00       |
| 2024-04-27 |      0.907 | $2,655.00      | $2,407.63       |
| 2024-04-13 |      0.813 | $1,436.00      | $1,167.74       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
