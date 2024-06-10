### Roster Details<br />
Team Name: OMiT<br />
Roster: calamity, kralz , Laxiee, N20AmZ, obi<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [112](../standings_global.md)<br />
Regional Rank: [10]( ../standings_asia.md)<br />
Final Rank Value:  806.8<br />
<br />
Final Rank Value (806.8) = Starting Rank Value (768.9) + Head To Head Adjustments (37.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.305[<sup>1</sup>](#table2)
- Bounty Collected: 0.266[<sup>2</sup>](#table1)
- Opponent Network: 0.034[<sup>2</sup>](#table1)
- LAN Wins: 0.135[<sup>2</sup>](#table1)

The average of these factors is 0.185<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 768.9
- 400 + ( ( 0.185 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 768.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |       26 | 2024-06-09 | E-Xolos LAZER    | W   | 1.000      | 0.367        | 0.010 (0.004)    | 0.155 (0.057)    | 0 (0.000) |    12.11 | calamity, kralz , Laxiee, N20AmZ, obi        |
|           16 |       87 | 2024-06-08 | Snakes Den       | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.078 (0.030)    | 0 (0.000) |     6.20 | calamity, kralz , Laxiee, obi, tmk           |
|           15 |      198 | 2024-06-06 | FLUFFY AIMERS    | W   | 1.000      | 0.384        | 0.016 (0.006)    | 0.354 (0.136)    | 0 (0.000) |    14.18 | calamity, kralz , Laxiee, N20AmZ, obi        |
|           14 |      209 | 2024-06-06 | Legacy           | L   | 1.000      | -            | -                | -                | -         |    -5.33 | calamity, kralz , Laxiee, N20AmZ, obi        |
|           13 |      325 | 2024-06-04 | Final Form       | W   | 1.000      | 0.384        | 0.007 (0.003)    | 0.039 (0.015)    | 0 (0.000) |     6.70 | calamity, kralz , Laxiee, N20AmZ, obi        |
|           12 |      361 | 2024-06-03 | Villainous       | W   | 1.000      | 0.367        | 0.004 (0.002)    | 0.000 (0.000)    | 0 (0.000) |     6.76 | calamity, kralz , Laxiee, N20AmZ, obi        |
|           11 |      717 | 2024-05-20 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -7.42 | calamity, kralz , Laxiee, N20AmZ, obi        |
|           10 |     1617 | 2024-04-17 | Liquid           | L   | 0.841      | -            | -                | -                | -         |    -0.19 | calamity, kralz , Laxiee, N20AmZ, obi        |
|            9 |     1621 | 2024-04-17 | NRG              | W   | 0.841      | 0.143        | 0.024 (0.003)    | 0.578 (0.069)    | 0 (0.000) |    18.99 | calamity, kralz , Laxiee, N20AmZ, obi        |
|            8 |     2309 | 2024-03-17 | LAG              | L   | 0.636      | -            | -                | -                | -         |    -6.12 | arviast, C4LLM3SU3, calamity, N20AmZ, obi    |
|            7 |     2310 | 2024-03-17 | Xiaoma           | W   | 0.635      | 0.333        | 0.002 (0.000)    | 0.025 (0.005)    | 1 (0.635) |     5.25 | arviast, C4LLM3SU3, calamity, N20AmZ, obi    |
|            6 |     2317 | 2024-03-17 | Snakes Den       | W   | 0.634      | 0.333        | 0.000 (0.000)    | 0.078 (0.016)    | 1 (0.634) |     4.15 | Fruitcupx, FxRE, JoSoo, LUKE4k, NoVa         |
|            5 |     2843 | 2024-02-24 | Wildcard         | L   | 0.488      | -            | -                | -                | -         |    -3.40 | Infinite, JBa, SLIGHT, Sonic, stanislaw      |
|            4 |     2954 | 2024-02-19 | Mythic           | L   | 0.456      | -            | -                | -                | -         |    -5.03 | Cooper, fl0m, freakazoid, hate, Trucklover86 |
|            3 |     2956 | 2024-02-19 | Party Astronauts | L   | 0.455      | -            | -                | -                | -         |    -3.58 | C4LLM3SU3, calamity, Laxiee, N20AmZ, obi     |
|            2 |     3023 | 2024-02-16 | Rocket           | L   | 0.435      | -            | -                | -                | -         |   -10.46 | aleph, ayy, EMIYA, nero, nooz                |
|            1 |     3053 | 2024-02-15 | Limitless        | W   | 0.429      | 0.143        | 0.001 (0.000)    | 0.219 (0.013)    | 0 (0.000) |     5.10 | C4LLM3SU3, calamity, N20AmZ, obi, tmk        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,590.65)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
