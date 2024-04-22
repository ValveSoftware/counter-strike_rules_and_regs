### Roster Details<br />
Team Name: FaZe<br />
Roster: broky, frozen, karrigan, rain, ropz<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [2](../standings_global.md)<br />
Regional Rank: [2]( ../standings_europe.md)<br />
Final Rank Value:  1918.9<br />
<br />
Final Rank Value (1918.9) = Starting Rank Value (2000.0) + Head To Head Adjustments (-81.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.807[<sup>2</sup>](#table1)
- Opponent Network: 0.506[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.828<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 2000.0
- 400 + ( ( 0.828 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 2000.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           46 |      258 | 2024-04-14 | MOUZ              | W   | 1.000      | 0.624        | 1.000 (0.624)    | -                | 1 (1.000) |    13.22 | broky, frozen, karrigan, rain, ropz  |
|           45 |      272 | 2024-04-13 | Astralis          | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.91 | broky, frozen, karrigan, rain, ropz  |
|           44 |      285 | 2024-04-12 | Liquid            | W   | 1.000      | 0.624        | -                | 0.728 (0.455)    | 1 (1.000) |     0.86 | broky, frozen, karrigan, rain, ropz  |
|           43 |      360 | 2024-04-10 | FlyQuest          | W   | 1.000      | 0.624        | -                | 0.647 (0.404)    | 1 (1.000) |     0.58 | broky, frozen, karrigan, rain, ropz  |
|           42 |      375 | 2024-04-10 | Cloud9            | W   | 1.000      | 0.624        | 0.475 (0.297)    | 0.623 (0.389)    | 1 (1.000) |     5.82 | broky, frozen, karrigan, rain, ropz  |
|           41 |      421 | 2024-04-09 | Astralis          | L   | 1.000      | -            | -                | -                | -         |   -30.02 | broky, frozen, karrigan, rain, ropz  |
|           40 |      452 | 2024-04-08 | Nemiga            | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.16 | broky, frozen, karrigan, rain, ropz  |
|           39 |      645 | 2024-03-31 | Natus Vincere     | L   | 1.000      | -            | -                | -                | -         |   -16.53 | broky, frozen, karrigan, rain, ropz  |
|           38 |      652 | 2024-03-30 | Vitality          | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.420 (0.420)    | 1 (1.000) |     9.14 | broky, frozen, karrigan, rain, ropz  |
|           37 |      670 | 2024-03-28 | Spirit            | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.661 (0.661)    | 1 (1.000) |    15.31 | broky, frozen, karrigan, rain, ropz  |
|           36 |      757 | 2024-03-24 | Complexity        | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.53 | broky, frozen, karrigan, rain, ropz  |
|           35 |      770 | 2024-03-23 | Imperial          | W   | 0.999      | 1.000        | 0.569 (0.569)    | 1.000 (0.999)    | 1 (0.999) |     4.02 | broky, frozen, karrigan, rain, ropz  |
|           34 |      784 | 2024-03-22 | Eternal Fire      | L   | 0.992      | -            | -                | -                | -         |   -25.65 | broky, frozen, karrigan, rain, ropz  |
|           33 |      795 | 2024-03-21 | FURIA             | W   | 0.987      | 1.000        | 0.316 (0.312)    | 0.522 (0.515)    | -         |     1.32 | broky, frozen, karrigan, rain, ropz  |
|           32 |      807 | 2024-03-21 | HEROIC            | L   | 0.985      | -            | -                | -                | -         |   -27.14 | broky, frozen, karrigan, rain, ropz  |
|           31 |     1595 | 2024-02-16 | Eternal Fire      | W   | 0.759      | -            | -                | -                | -         |     3.08 | broky, frozen, karrigan, rain, ropz  |
|           30 |     1622 | 2024-02-15 | G2                | L   | 0.752      | -            | -                | -                | -         |   -15.48 | broky, frozen, karrigan, rain, ropz  |
|           29 |     1656 | 2024-02-14 | Falcons           | W   | 0.746      | -            | -                | -                | -         |     0.65 | broky, frozen, karrigan, rain, ropz  |
|           28 |     1671 | 2024-02-14 | 9 Pandas          | W   | 0.744      | -            | -                | -                | -         |     0.16 | broky, frozen, karrigan, rain, ropz  |
|           27 |     1708 | 2024-02-11 | Spirit            | L   | 0.726      | -            | -                | -                | -         |   -14.21 | broky, frozen, karrigan, rain, ropz  |
|           26 |     1720 | 2024-02-10 | MOUZ              | W   | 0.719      | 1.000        | 1.000 (0.719)    | 0.603 (0.434)    | -         |     6.86 | broky, frozen, karrigan, rain, ropz  |
|           25 |     1734 | 2024-02-09 | G2                | W   | 0.713      | 1.000        | 0.773 (0.551)    | 0.542 (0.386)    | -         |     7.39 | broky, frozen, karrigan, rain, ropz  |
|           24 |     1765 | 2024-02-06 | Spirit            | L   | 0.693      | -            | -                | -                | -         |   -13.99 | broky, frozen, karrigan, rain, ropz  |
|           23 |     1784 | 2024-02-04 | Eternal Fire      | W   | 0.681      | 1.000        | -                | 0.587 (0.400)    | -         |     2.52 | broky, frozen, karrigan, rain, ropz  |
|           22 |     1824 | 2024-02-03 | Rebels            | W   | 0.673      | -            | -                | -                | -         |     0.05 | broky, frozen, karrigan, rain, ropz  |
|           21 |     1955 | 2024-01-27 | Liquid            | W   | 0.626      | -            | -                | -                | -         |     0.30 | broky, frozen, karrigan, rain, ropz  |
|           20 |     1969 | 2024-01-26 | GamerLegion       | W   | 0.620      | -            | -                | -                | -         |     0.50 | broky, frozen, karrigan, rain, ropz  |
|           19 |     1994 | 2024-01-25 | Spirit            | W   | 0.612      | 0.581        | 1.000 (0.355)    | -                | -         |     6.59 | broky, frozen, karrigan, rain, ropz  |
|           18 |     2015 | 2024-01-24 | GamerLegion       | L   | 0.605      | -            | -                | -                | -         |   -18.59 | broky, frozen, karrigan, rain, ropz  |
|           17 |     2684 | 2023-12-17 | Vitality          | L   | 0.352      | -            | -                | -                | -         |    -8.07 | broky, frozen, karrigan, rain, ropz  |
|           16 |     2722 | 2023-12-16 | MOUZ              | W   | 0.345      | 1.000        | 1.000 (0.345)    | -                | -         |     3.25 | broky, frozen, karrigan, rain, ropz  |
|           15 |     2749 | 2023-12-14 | G2                | W   | 0.332      | -            | -                | -                | -         |     3.66 | broky, frozen, karrigan, rain, ropz  |
|           14 |     2761 | 2023-12-13 | HEROIC            | W   | 0.325      | -            | -                | -                | -         |     0.01 | broky, frozen, karrigan, rain, ropz  |
|           13 |     3050 | 2023-11-26 | Vitality          | L   | 0.213      | -            | -                | -                | -         |    -5.04 | broky, karrigan, rain, ropz, Twistzz |
|           12 |     3065 | 2023-11-25 | Complexity        | W   | 0.207      | -            | -                | -                | -         |     0.21 | broky, karrigan, rain, ropz, Twistzz |
|           11 |     3112 | 2023-11-23 | Cloud9            | W   | 0.192      | -            | -                | -                | -         |     0.94 | broky, karrigan, rain, ropz, Twistzz |
|           10 |     3130 | 2023-11-22 | Ninjas in Pyjamas | W   | 0.184      | -            | -                | -                | -         |     0.01 | broky, karrigan, rain, ropz, Twistzz |
|            9 |     3376 | 2023-11-12 | MOUZ              | W   | 0.119      | -            | -                | -                | -         |     1.21 | broky, karrigan, rain, ropz, Twistzz |
|            8 |     3384 | 2023-11-12 | Falcons           | W   | 0.118      | -            | -                | -                | -         |     0.07 | broky, karrigan, rain, ropz, Twistzz |
|            7 |     3442 | 2023-11-09 | MOUZ              | W   | 0.098      | -            | -                | -                | -         |     1.00 | broky, karrigan, rain, ropz, Twistzz |
|            6 |     3444 | 2023-11-09 | Ninjas in Pyjamas | W   | 0.097      | -            | -                | -                | -         |     0.01 | broky, karrigan, rain, ropz, Twistzz |
|            5 |     3509 | 2023-11-05 | Virtus.pro        | W   | 0.074      | -            | -                | -                | -         |     0.27 | broky, karrigan, rain, ropz, Twistzz |
|            4 |     3540 | 2023-11-04 | Cloud9            | W   | 0.066      | -            | -                | -                | -         |     0.32 | broky, karrigan, rain, ropz, Twistzz |
|            3 |     3555 | 2023-11-03 | MOUZ              | W   | 0.060      | -            | -                | -                | -         |     0.62 | broky, karrigan, rain, ropz, Twistzz |
|            2 |     3750 | 2023-10-28 | Monte             | W   | 0.020      | -            | -                | -                | -         |     0.01 | broky, karrigan, rain, ropz, Twistzz |
|            1 |     3782 | 2023-10-27 | SAW               | W   | 0.013      | -            | -                | -                | -         |     0.01 | broky, karrigan, rain, ropz, Twistzz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($569,294.88)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $100,000.00    | $100,000.00     |
| 2024-03-31 |      1.000 | $170,000.00    | $170,000.00     |
| 2024-02-11 |      0.726 | $180,000.00    | $130,760.32     |
| 2024-01-28 |      0.633 | $22,500.00     | $14,247.40      |
| 2023-12-17 |      0.352 | $250,000.00    | $88,053.28      |
| 2023-11-26 |      0.213 | $85,000.00     | $18,085.47      |
| 2023-11-12 |      0.119 | $250,000.00    | $29,721.43      |
| 2023-11-05 |      0.074 | $250,000.00    | $18,426.99      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
