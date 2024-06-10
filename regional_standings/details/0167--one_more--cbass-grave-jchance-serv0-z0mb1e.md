### Roster Details<br />
Team Name: One More<br />
Roster: cbass, Grave, jchancE, serv0, z0mb1e<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [167](../standings_global.md)<br />
Regional Rank: [46]( ../standings_americas.md)<br />
Final Rank Value:  661.4<br />
<br />
Final Rank Value (661.4) = Starting Rank Value (722.5) + Head To Head Adjustments (-61.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.280[<sup>1</sup>](#table2)
- Bounty Collected: 0.295[<sup>2</sup>](#table1)
- Opponent Network: 0.072[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.162<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 722.5
- 400 + ( ( 0.162 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 722.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |      632 | 2024-05-22 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |    -3.85 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           29 |      636 | 2024-05-22 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |    -4.00 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           28 |      682 | 2024-05-21 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -5.01 | cbass, Champ, jchancE, serv0, z0mb1e        |
|           27 |      686 | 2024-05-21 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -5.26 | cbass, Champ, jchancE, serv0, z0mb1e        |
|           26 |      719 | 2024-05-20 | MIGHT            | W   | 1.000      | 0.477        | 0.000 (0.000)    | 0.133 (0.063)    | 0 (0.000) |    11.35 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           25 |      724 | 2024-05-20 | MIGHT            | L   | 1.000      | -            | -                | -                | -         |   -20.54 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           24 |      848 | 2024-05-16 | Carpe Diem       | L   | 1.000      | -            | -                | -                | -         |   -10.74 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           23 |      849 | 2024-05-16 | Carpe Diem       | L   | 1.000      | -            | -                | -                | -         |   -11.65 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           22 |      889 | 2024-05-15 | M80              | L   | 1.000      | -            | -                | -                | -         |    -1.28 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           21 |      895 | 2024-05-15 | M80              | L   | 1.000      | -            | -                | -                | -         |    -1.30 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           20 |      941 | 2024-05-14 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -5.79 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           19 |      947 | 2024-05-14 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -6.11 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           18 |     1426 | 2024-04-23 | Nouns            | W   | 0.882      | 0.477        | 0.064 (0.027)    | 0.567 (0.238)    | 0 (0.000) |    23.26 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           17 |     1428 | 2024-04-23 | Nouns            | L   | 0.882      | -            | -                | -                | -         |    -4.21 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           16 |     1766 | 2024-04-10 | FLUFFY AIMERS    | W   | 0.796      | 0.477        | 0.016 (0.006)    | 0.354 (0.134)    | 0 (0.000) |    16.76 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           15 |     1771 | 2024-04-10 | FLUFFY AIMERS    | L   | 0.795      | -            | -                | -                | -         |    -8.19 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           14 |     1823 | 2024-04-09 | Party Astronauts | L   | 0.789      | -            | -                | -                | -         |    -3.99 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           13 |     1830 | 2024-04-09 | Party Astronauts | L   | 0.788      | -            | -                | -                | -         |    -4.14 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           12 |     1955 | 2024-04-04 | Limitless        | W   | 0.755      | 0.477        | 0.001 (0.000)    | 0.219 (0.079)    | 0 (0.000) |    11.33 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           11 |     1960 | 2024-04-04 | Limitless        | L   | 0.755      | -            | -                | -                | -         |   -12.70 | cbass, Grave, jchancE, serv0, z0mb1e        |
|           10 |     2132 | 2024-03-27 | BOSS             | L   | 0.702      | -            | -                | -                | -         |    -7.73 | cbass, Grave, jchancE, serv0, z0mb1e        |
|            9 |     2136 | 2024-03-27 | BOSS             | W   | 0.702      | 0.477        | 0.018 (0.006)    | 0.407 (0.136)    | 0 (0.000) |    14.77 | cbass, Grave, jchancE, serv0, z0mb1e        |
|            8 |     2375 | 2024-03-14 | Mythic           | L   | 0.616      | -            | -                | -                | -         |    -6.13 | cbass, Grave, jchancE, serv0, z0mb1e        |
|            7 |     2379 | 2024-03-14 | Mythic           | L   | 0.615      | -            | -                | -                | -         |    -6.43 | cbass, Grave, jchancE, serv0, z0mb1e        |
|            6 |     2624 | 2024-03-05 | LAG              | L   | 0.556      | -            | -                | -                | -         |    -4.44 | cbass, Grave, jchancE, serv0, z0mb1e        |
|            5 |     2626 | 2024-03-05 | LAG              | L   | 0.555      | -            | -                | -                | -         |    -4.61 | cbass, Grave, jchancE, serv0, z0mb1e        |
|            4 |     2881 | 2024-02-22 | Party Astronauts | L   | 0.475      | -            | -                | -                | -         |    -3.07 | cbass, Grave, jchancE, serv0, z0mb1e        |
|            3 |     3122 | 2024-02-13 | Take Flyte       | W   | 0.416      | 0.477        | 0.005 (0.001)    | 0.348 (0.069)    | 0 (0.000) |     7.87 | cbass, Grave, jchancE, serv0, z0mb1e        |
|            2 |     3125 | 2024-02-13 | Take Flyte       | L   | 0.415      | -            | -                | -                | -         |    -5.31 | cbass, Grave, jchancE, serv0, z0mb1e        |
|            1 |     4200 | 2023-12-13 | Revenge Nation   | W   | 0.002      | 0.367        | 0.016 (0.000)    | 0.050 (0.000)    | 0 (0.000) |     0.04 | HorizoN, NIGHT666LADE, Rulik, S0ph3R, TABEN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($817.10)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $800.00        | $800.00         |
| 2023-12-13 |      0.002 | $7,000.00      | $17.10          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
