### Roster Details<br />
Team Name: LAG<br />
Roster: based, Experative, nicx, Nyyx, ogwizard<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [94](../standings_global.md)<br />
Regional Rank: [66]( ../standings_europe.md)<br />
Final Rank Value:  871.1<br />
<br />
Final Rank Value (871.1) = Starting Rank Value (924.2) + Head To Head Adjustments (-53.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.375[<sup>1</sup>](#table2)
- Bounty Collected: 0.321[<sup>2</sup>](#table1)
- Opponent Network: 0.153[<sup>2</sup>](#table1)
- LAN Wins: 0.203[<sup>2</sup>](#table1)

The average of these factors is 0.263<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 924.2
- 400 + ( ( 0.263 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 924.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           46 |       89 | 2024-06-08 | Strife           | W   | 1.000      | 0.384        | 0.014 (0.005)    | -                | 0 (0.000) |     9.49 | based, Experative, nicx, Nyyx, ogwizard |
|           45 |      145 | 2024-06-07 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |    -9.45 | based, Experative, nicx, Nyyx, ogwizard |
|           44 |      229 | 2024-06-06 | Vibe             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.34 | based, Experative, nicx, Nyyx, ogwizard |
|           43 |      270 | 2024-06-05 | NRG              | L   | 1.000      | -            | -                | -                | -         |   -12.03 | based, Experative, nicx, Nyyx, ogwizard |
|           42 |      279 | 2024-06-05 | Carpe Diem       | W   | 1.000      | 0.384        | 0.007 (0.003)    | 0.321 (0.123)    | 0 (0.000) |    12.07 | based, Experative, nicx, Nyyx, ogwizard |
|           41 |      322 | 2024-06-04 | Carpe Diem       | W   | 1.000      | 0.477        | 0.007 (0.003)    | 0.321 (0.153)    | 0 (0.000) |    13.14 | based, Experative, nicx, Nyyx, ogwizard |
|           40 |      331 | 2024-06-04 | Retirement Home  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.28 | based, Experative, nicx, Nyyx, ogwizard |
|           39 |      638 | 2024-05-22 | Limitless        | W   | 1.000      | 0.477        | -                | 0.219 (0.104)    | 0 (0.000) |     6.99 | based, Experative, nicx, Nyyx, ogwizard |
|           38 |      641 | 2024-05-22 | Limitless        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.44 | based, Experative, nicx, Nyyx, ogwizard |
|           37 |      644 | 2024-05-22 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |    -9.07 | based, Experative, nicx, Nyyx, ogwizard |
|           36 |      888 | 2024-05-15 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -9.56 | based, Experative, nicx, Nyyx, ogwizard |
|           35 |      896 | 2024-05-15 | NRG              | L   | 1.000      | -            | -                | -                | -         |   -10.32 | based, Experative, nicx, Nyyx, ogwizard |
|           34 |      942 | 2024-05-14 | Carpe Diem       | W   | 1.000      | 0.477        | 0.007 (0.003)    | 0.321 (0.153)    | -         |    11.07 | based, Experative, nicx, Nyyx, ogwizard |
|           33 |      949 | 2024-05-14 | Carpe Diem       | L   | 1.000      | -            | -                | -                | -         |   -20.83 | based, Experative, nicx, Nyyx, ogwizard |
|           32 |     1084 | 2024-05-09 | M80              | L   | 0.989      | -            | -                | -                | -         |    -3.28 | based, Experative, nicx, Nyyx, ogwizard |
|           31 |     1089 | 2024-05-09 | M80              | L   | 0.988      | -            | -                | -                | -         |    -3.39 | based, Experative, nicx, Nyyx, ogwizard |
|           30 |     1103 | 2024-05-08 | Party Astronauts | L   | 0.982      | -            | -                | -                | -         |   -10.85 | based, Experative, nicx, Nyyx, ogwizard |
|           29 |     1108 | 2024-05-08 | Party Astronauts | L   | 0.982      | -            | -                | -                | -         |   -11.75 | based, Experative, nicx, Nyyx, ogwizard |
|           28 |     1770 | 2024-04-10 | Mythic           | W   | 0.795      | 0.477        | 0.010 (0.004)    | 0.391 (0.148)    | -         |    10.68 | based, Experative, nicx, Nyyx, ogwizard |
|           27 |     1775 | 2024-04-10 | Mythic           | W   | 0.795      | 0.477        | 0.010 (0.004)    | 0.391 (0.148)    | -         |    11.44 | based, Experative, nicx, Nyyx, ogwizard |
|           26 |     1825 | 2024-04-09 | BOSS             | L   | 0.789      | -            | -                | -                | -         |   -13.68 | based, Experative, nicx, Nyyx, ogwizard |
|           25 |     1828 | 2024-04-09 | BOSS             | L   | 0.788      | -            | -                | -                | -         |   -14.65 | based, Experative, nicx, Nyyx, ogwizard |
|           24 |     1956 | 2024-04-04 | Nouns            | W   | 0.755      | 0.477        | 0.064 (0.023)    | 0.567 (0.204)    | -         |    15.08 | based, Experative, nicx, Nyyx, ogwizard |
|           23 |     1961 | 2024-04-04 | Nouns            | L   | 0.755      | -            | -                | -                | -         |    -8.70 | based, Experative, nicx, Nyyx, ogwizard |
|           22 |     2002 | 2024-04-03 | Elevate          | L   | 0.749      | -            | -                | -                | -         |   -11.83 | based, Experative, nicx, Nyyx, ogwizard |
|           21 |     2005 | 2024-04-03 | Elevate          | W   | 0.748      | 0.477        | 0.024 (0.008)    | 0.531 (0.189)    | -         |    11.95 | based, Experative, nicx, Nyyx, ogwizard |
|           20 |     2180 | 2024-03-26 | Wildcard         | L   | 0.696      | -            | -                | -                | -         |    -8.82 | based, Experative, nicx, Nyyx, ogwizard |
|           19 |     2184 | 2024-03-26 | Wildcard         | W   | 0.695      | 0.477        | 0.060 (0.020)    | 0.591 (0.196)    | -         |    13.42 | based, Experative, nicx, Nyyx, ogwizard |
|           18 |     2266 | 2024-03-20 | Take Flyte       | L   | 0.655      | -            | -                | -                | -         |   -14.29 | based, Experative, nicx, Nyyx, ogwizard |
|           17 |     2268 | 2024-03-20 | Take Flyte       | W   | 0.655      | 0.477        | -                | 0.348 (0.109)    | -         |     6.33 | based, Experative, nicx, Nyyx, ogwizard |
|           16 |     2309 | 2024-03-17 | OMiT             | W   | 0.636      | -            | -                | -                | 1 (0.636) |     6.12 | based, Experative, nicx, Nyyx, ogwizard |
|           15 |     2311 | 2024-03-17 | Akimbo           | W   | 0.635      | -            | -                | -                | 1 (0.635) |     5.01 | based, Experative, nicx, Nyyx, ogwizard |
|           14 |     2321 | 2024-03-17 | WICKED           | W   | 0.634      | -            | -                | -                | 1 (0.634) |     1.12 | based, Experative, nicx, Nyyx, ogwizard |
|           13 |     2558 | 2024-03-07 | FLUFFY AIMERS    | W   | 0.569      | 0.477        | 0.016 (0.004)    | -                | -         |     7.87 | based, Experative, nicx, Nyyx, ogwizard |
|           12 |     2559 | 2024-03-07 | FLUFFY AIMERS    | L   | 0.569      | -            | -                | -                | -         |   -10.31 | based, Experative, nicx, Nyyx, ogwizard |
|           11 |     2587 | 2024-03-06 | MIGHT            | W   | 0.562      | -            | -                | -                | -         |     3.04 | based, Experative, nicx, Nyyx, ogwizard |
|           10 |     2588 | 2024-03-06 | MIGHT            | L   | 0.562      | -            | -                | -                | -         |   -14.94 | based, Experative, nicx, Nyyx, ogwizard |
|            9 |     2624 | 2024-03-05 | One More         | W   | 0.556      | -            | -                | -                | -         |     4.44 | based, Experative, nicx, Nyyx, ogwizard |
|            8 |     2626 | 2024-03-05 | One More         | W   | 0.555      | -            | -                | -                | -         |     4.61 | based, Experative, nicx, Nyyx, ogwizard |
|            7 |     2838 | 2024-02-24 | Limitless        | L   | 0.488      | -            | -                | -                | -         |   -12.08 | based, Experative, nicx, Nyyx, ogwizard |
|            6 |     3027 | 2024-02-16 | FLUFFY AIMERS    | L   | 0.435      | -            | -                | -                | -         |    -8.38 | based, Experative, nicx, Nyyx, ogwizard |
|            5 |     3842 | 2024-01-14 | Bad News Bears   | W   | 0.216      | -            | -                | -                | -         |     0.34 | based, Experative, Nyyx, ogwizard, X-23 |
|            4 |     4114 | 2023-12-17 | MIGHT            | L   | 0.029      | -            | -                | -                | -         |    -0.80 | based, Experative, Nyyx, ogwizard, X-23 |
|            3 |     4148 | 2023-12-16 | NRG              | L   | 0.022      | -            | -                | -                | -         |    -0.39 | based, Experative, Nyyx, ogwizard, X-23 |
|            2 |     4173 | 2023-12-15 | Rocket           | W   | 0.015      | -            | -                | -                | -         |     0.04 | based, Experative, Nyyx, ogwizard, X-23 |
|            1 |     4201 | 2023-12-13 | Villainous       | W   | 0.002      | -            | -                | -                | -         |     0.01 | based, Experative, Nyyx, ogwizard, X-23 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,502.49)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-03-17 |      0.636 | $5,500.00      | $3,499.44       |
| 2023-12-13 |      0.002 | $1,250.00      | $3.05           |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
