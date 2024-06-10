### Roster Details<br />
Team Name: M80<br />
Roster: malbsMd, reck, s1n, slaxz-, Swisher<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [30](../standings_global.md)<br />
Regional Rank: [8]( ../standings_americas.md)<br />
Final Rank Value:  1270.6<br />
<br />
Final Rank Value (1270.6) = Starting Rank Value (1300.4) + Head To Head Adjustments (-29.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.593[<sup>1</sup>](#table2)
- Bounty Collected: 0.486[<sup>2</sup>](#table1)
- Opponent Network: 0.291[<sup>2</sup>](#table1)
- LAN Wins: 0.437[<sup>2</sup>](#table1)

The average of these factors is 0.452<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1300.4
- 400 + ( ( 0.452 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1300.4


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
|           65 |       27 | 2024-06-09 | Wildcard         | W   | 1.000      | 0.477        | 0.060 (0.029)    | 0.591 (0.282)    | 0 (0.000) |     6.34 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           64 |       41 | 2024-06-09 | NRG              | L   | 1.000      | -            | -                | -                | -         |   -26.38 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           63 |       94 | 2024-06-08 | Legacy           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.00 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           62 |      201 | 2024-06-06 | Wildcard         | W   | 1.000      | 0.477        | 0.060 (0.029)    | 0.591 (0.282)    | 0 (0.000) |     5.82 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           61 |      221 | 2024-06-06 | Wildcard         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.68 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           60 |      231 | 2024-06-06 | FLUFFY AIMERS    | W   | 1.000      | -            | -                | -                | -         |     1.72 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           59 |      271 | 2024-06-05 | Nouns            | W   | 1.000      | 0.477        | 0.064 (0.031)    | 0.567 (0.270)    | -         |     7.37 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           58 |      530 | 2024-05-28 | HEROIC           | L   | 1.000      | -            | -                | -                | -         |    -2.92 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           57 |      548 | 2024-05-27 | FaZe             | L   | 1.000      | -            | -                | -                | -         |    -0.61 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           56 |      603 | 2024-05-24 | Nouns            | W   | 1.000      | 0.384        | 0.064 (0.025)    | -                | -         |     7.22 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           55 |      618 | 2024-05-23 | Wildcard         | W   | 1.000      | 0.384        | 0.060 (0.023)    | -                | -         |     6.49 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           54 |      643 | 2024-05-22 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |   -25.73 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           53 |      648 | 2024-05-22 | Party Astronauts | W   | 1.000      | 0.477        | 0.048 (0.023)    | 0.677 (0.323)    | -         |     5.28 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           52 |      654 | 2024-05-22 | Mythic           | W   | 1.000      | -            | -                | -                | -         |     3.01 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           51 |      718 | 2024-05-20 | NRG              | W   | 1.000      | 0.477        | -                | 0.578 (0.276)    | -         |     5.84 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           50 |      723 | 2024-05-20 | NRG              | W   | 1.000      | 0.477        | -                | 0.578 (0.276)    | -         |     6.17 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           49 |      733 | 2024-05-20 | E-Xolos LAZER    | W   | 1.000      | -            | -                | -                | -         |     1.34 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           48 |      757 | 2024-05-19 | BOSS             | W   | 1.000      | -            | -                | -                | -         |     2.56 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           47 |      759 | 2024-05-19 | BOSS             | W   | 1.000      | -            | -                | -                | -         |     2.63 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           46 |      782 | 2024-05-18 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -26.36 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           45 |      816 | 2024-05-17 | regain           | W   | 1.000      | -            | -                | -                | -         |     0.23 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           44 |      889 | 2024-05-15 | One More         | W   | 1.000      | -            | -                | -                | -         |     1.28 | malbsMd, reck, slaxz-, stamina, Swisher |
|           43 |      895 | 2024-05-15 | One More         | W   | 1.000      | -            | -                | -                | -         |     1.30 | malbsMd, reck, slaxz-, stamina, Swisher |
|           42 |      938 | 2024-05-14 | Elevate          | W   | 1.000      | 0.477        | -                | 0.531 (0.253)    | -         |     4.64 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           41 |      944 | 2024-05-14 | Elevate          | W   | 1.000      | 0.477        | -                | 0.531 (0.253)    | -         |     4.85 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           40 |     1067 | 2024-05-10 | Limitless        | W   | 0.995      | -            | -                | -                | -         |     1.02 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           39 |     1069 | 2024-05-10 | Limitless        | W   | 0.995      | -            | -                | -                | -         |     1.03 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           38 |     1084 | 2024-05-09 | LAG              | W   | 0.989      | 0.477        | -                | 0.484 (0.228)    | -         |     3.28 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           37 |     1089 | 2024-05-09 | LAG              | W   | 0.988      | -            | -                | -                | -         |     3.39 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           36 |     1315 | 2024-04-28 | G2               | L   | 0.913      | -            | -                | -                | -         |    -1.03 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           35 |     1340 | 2024-04-27 | TYLOO            | W   | 0.906      | 0.889        | 0.050 (0.040)    | -                | 1 (0.906) |     2.45 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           34 |     1360 | 2024-04-26 | BetBoom          | L   | 0.901      | -            | -                | -                | -         |    -5.09 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           33 |     1370 | 2024-04-26 | G2               | W   | 0.899      | 0.889        | 0.746 (0.596)    | 0.580 (0.464)    | 1 (0.899) |    27.43 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           32 |     1395 | 2024-04-25 | Sharks           | W   | 0.893      | 0.889        | 0.028 (0.022)    | -                | 1 (0.893) |     1.98 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           31 |     1429 | 2024-04-23 | BetBoom          | L   | 0.880      | -            | -                | -                | -         |    -4.71 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           30 |     1515 | 2024-04-19 | Liquid           | W   | 0.856      | 0.143        | 0.501 (0.061)    | -                | -         |    24.72 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           29 |     1522 | 2024-04-19 | Legacy           | W   | 0.855      | -            | -                | -                | -         |     9.34 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           28 |     1565 | 2024-04-18 | Liquid           | L   | 0.849      | -            | -                | -                | -         |    -1.92 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           27 |     1570 | 2024-04-18 | Elevate          | W   | 0.848      | -            | -                | -                | -         |     4.88 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           26 |     2140 | 2024-03-27 | Take Flyte       | W   | 0.702      | -            | -                | -                | -         |     1.89 | malbsMd, reck, s1n, stamina, Swisher    |
|           25 |     2145 | 2024-03-27 | Take Flyte       | W   | 0.701      | -            | -                | -                | -         |     1.93 | malbsMd, reck, s1n, stamina, Swisher    |
|           24 |     2283 | 2024-03-19 | Mythic           | L   | 0.649      | -            | -                | -                | -         |   -17.74 | dephh, malbsMd, reck, stamina, Swisher  |
|           23 |     2286 | 2024-03-19 | Mythic           | L   | 0.649      | -            | -                | -                | -         |   -18.17 | dephh, malbsMd, reck, stamina, Swisher  |
|           22 |     2374 | 2024-03-14 | Nouns            | L   | 0.616      | -            | -                | -                | -         |   -15.68 | dephh, malbsMd, reck, stamina, Swisher  |
|           21 |     2377 | 2024-03-14 | Nouns            | L   | 0.615      | -            | -                | -                | -         |   -16.18 | dephh, malbsMd, reck, stamina, Swisher  |
|           20 |     2406 | 2024-03-13 | Wildcard         | L   | 0.609      | -            | -                | -                | -         |   -16.18 | dephh, malbsMd, reck, slaxz-, Swisher   |
|           19 |     2408 | 2024-03-13 | Wildcard         | W   | 0.609      | -            | -                | -                | -         |     2.92 | dephh, malbsMd, reck, slaxz-, Swisher   |
|           18 |     2661 | 2024-03-04 | Legacy           | L   | 0.547      | -            | -                | -                | -         |   -13.43 | dephh, malbsMd, reck, slaxz-, Swisher   |
|           17 |     2687 | 2024-03-03 | Wildcard         | W   | 0.540      | -            | -                | -                | 1 (0.540) |     2.65 | dephh, malbsMd, reck, slaxz-, Swisher   |
|           16 |     2712 | 2024-03-02 | Imperial         | L   | 0.533      | -            | -                | -                | -         |    -4.00 | dephh, malbsMd, reck, slaxz-, Swisher   |
|           15 |     2731 | 2024-03-01 | ODDIK            | W   | 0.527      | -            | -                | -                | 1 (0.527) |     2.32 | dephh, malbsMd, reck, slaxz-, Swisher   |
|           14 |     3293 | 2024-02-02 | Rebels           | L   | 0.340      | -            | -                | -                | -         |    -8.17 | dephh, malbsMd, reck, slaxz-, Swisher   |
|           13 |     3329 | 2024-02-01 | Rooster          | W   | 0.333      | -            | -                | -                | 1 (0.333) |     0.66 | dephh, malbsMd, reck, slaxz-, Swisher   |
|           12 |     3348 | 2024-01-31 | GamerLegion      | L   | 0.326      | -            | -                | -                | -         |    -7.78 | dephh, malbsMd, reck, slaxz-, Swisher   |
|           11 |     3550 | 2024-01-20 | Liquid           | W   | 0.256      | -            | -                | -                | -         |     7.22 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|           10 |     3555 | 2024-01-20 | Wildcard         | W   | 0.255      | -            | -                | -                | -         |     1.20 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|            9 |     3598 | 2024-01-19 | BOSS             | W   | 0.249      | -            | -                | -                | -         |     0.61 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|            8 |     3604 | 2024-01-19 | Wildcard         | L   | 0.248      | -            | -                | -                | -         |    -6.71 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|            7 |     3843 | 2024-01-14 | Nouns            | W   | 0.215      | -            | -                | -                | -         |     0.87 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|            6 |     3861 | 2024-01-13 | Wildcard         | L   | 0.209      | -            | -                | -                | -         |    -5.75 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|            5 |     3909 | 2024-01-12 | Liquid           | W   | 0.203      | -            | -                | -                | -         |     5.73 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|            4 |     3917 | 2024-01-12 | Rocket           | W   | 0.202      | -            | -                | -                | -         |     0.08 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|            3 |     4163 | 2023-12-16 | BESTIA           | L   | 0.019      | -            | -                | -                | -         |    -0.59 | dephh, malbsMd, reck, slaxz-, Swisher   |
|            2 |     4191 | 2023-12-15 | Virtus.pro       | L   | 0.013      | -            | -                | -                | -         |    -0.04 | dephh, malbsMd, reck, slaxz-, Swisher   |
|            1 |     4202 | 2023-12-13 | Nouns            | W   | 0.002      | -            | -                | -                | -         |     0.00 | malbsMd, maNkz, reck, slaxz-, Swisher   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($62,597.50)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.21) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $25,000.00     | $25,000.00      |
| 2024-06-02 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-05-24 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-05-12 |      1.000 | $12,000.00     | $12,000.00      |
| 2024-02-02 |      0.341 | $4,500.00      | $1,533.68       |
| 2023-12-17 |      0.028 | $2,000.00      | $55.47          |
| 2023-12-13 |      0.002 | $4,000.00      | $8.35           |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
