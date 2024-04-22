### Roster Details<br />
Team Name: Astralis<br />
Roster: br0, device, jabbi, Staehr, stavn<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [14](../standings_global.md)<br />
Regional Rank: [11]( ../standings_europe.md)<br />
Final Rank Value:  1414.5<br />
<br />
Final Rank Value (1414.5) = Starting Rank Value (1401.1) + Head To Head Adjustments (13.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.553[<sup>1</sup>](#table2)
- Bounty Collected: 0.563[<sup>2</sup>](#table1)
- Opponent Network: 0.155[<sup>2</sup>](#table1)
- LAN Wins: 0.802[<sup>2</sup>](#table1)

The average of these factors is 0.518<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1401.1
- 400 + ( ( 0.518 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1401.1


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
|           24 |      272 | 2024-04-13 | FaZe              | L   | 1.000      | -            | -                | -                | -         |    -1.91 | br0, device, jabbi, Staehr, stavn    |
|           23 |      369 | 2024-04-10 | Virtus.pro        | W   | 1.000      | 0.624        | 0.530 (0.331)    | 0.605 (0.378)    | 1 (1.000) |    24.89 | br0, device, jabbi, Staehr, stavn    |
|           22 |      421 | 2024-04-09 | FaZe              | W   | 1.000      | 0.624        | 1.000 (0.624)    | 0.737 (0.460)    | 1 (1.000) |    30.02 | br0, device, jabbi, Staehr, stavn    |
|           21 |      453 | 2024-04-08 | Steel Helmet      | W   | 1.000      | 0.624        | 0.021 (0.013)    | 0.131 (0.082)    | 1 (1.000) |     0.63 | br0, device, jabbi, Staehr, stavn    |
|           20 |     1423 | 2024-02-23 | 9 Pandas          | L   | 0.805      | -            | -                | -                | -         |   -20.91 | blameF, device, jabbi, Staehr, stavn |
|           19 |     1442 | 2024-02-22 | ENCE              | L   | 0.798      | -            | -                | -                | -         |   -12.65 | blameF, device, jabbi, Staehr, stavn |
|           18 |     1469 | 2024-02-21 | Monte             | W   | 0.792      | 0.143        | 0.236 (0.027)    | 0.598 (0.068)    | 1 (0.792) |     7.25 | blameF, device, jabbi, Staehr, stavn |
|           17 |     1497 | 2024-02-20 | HEROIC            | L   | 0.785      | -            | -                | -                | -         |    -6.60 | blameF, device, jabbi, Staehr, stavn |
|           16 |     1510 | 2024-02-19 | Spirit            | L   | 0.780      | -            | -                | -                | -         |    -1.32 | blameF, device, jabbi, Staehr, stavn |
|           15 |     1520 | 2024-02-19 | Nexus             | W   | 0.778      | 0.143        | 0.023 (0.003)    | 0.544 (0.060)    | 1 (0.778) |     1.10 | blameF, device, jabbi, Staehr, stavn |
|           14 |     1878 | 2024-02-01 | ENCE              | L   | 0.660      | -            | -                | -                | -         |   -12.57 | blameF, device, jabbi, Staehr, stavn |
|           13 |     1907 | 2024-01-31 | HEROIC            | L   | 0.652      | -            | -                | -                | -         |    -6.45 | blameF, device, jabbi, Staehr, stavn |
|           12 |     1944 | 2024-01-28 | BIG               | W   | 0.633      | 0.581        | 0.471 (0.173)    | 0.529 (0.194)    | 1 (0.633) |     5.57 | blameF, device, jabbi, Staehr, stavn |
|           11 |     1960 | 2024-01-27 | Vitality          | L   | 0.625      | -            | -                | -                | -         |    -1.77 | blameF, device, jabbi, Staehr, stavn |
|           10 |     2026 | 2024-01-23 | Vitality          | W   | 0.600      | 0.581        | 1.000 (0.349)    | 0.420 (0.147)    | 1 (0.600) |    17.38 | blameF, device, jabbi, Staehr, stavn |
|            9 |     2053 | 2024-01-22 | Falcons           | W   | 0.593      | 0.581        | 0.389 (0.134)    | 0.201 (0.069)    | 1 (0.593) |     6.85 | blameF, device, jabbi, Staehr, stavn |
|            8 |     2123 | 2024-01-20 | PERA              | W   | 0.579      | -            | -                | -                | -         |     0.76 | blameF, device, jabbi, Staehr, stavn |
|            7 |     2173 | 2024-01-19 | AMKAL             | L   | 0.573      | -            | -                | -                | -         |   -15.96 | blameF, device, jabbi, Staehr, stavn |
|            6 |     2238 | 2024-01-18 | Preasy            | W   | 0.566      | 0.143        | 0.205 (0.017)    | 0.723 (0.058)    | -         |     2.16 | blameF, device, jabbi, Staehr, stavn |
|            5 |     2241 | 2024-01-18 | Enterprise        | W   | 0.566      | 0.143        | -                | 0.452 (0.037)    | -         |     1.26 | blameF, device, jabbi, Staehr, stavn |
|            4 |     2410 | 2024-01-14 | Ninjas in Pyjamas | W   | 0.539      | 0.143        | 0.058 (0.005)    | -                | 1 (0.539) |     0.83 | blameF, device, jabbi, Staehr, stavn |
|            3 |     2446 | 2024-01-13 | ALTERNATE aTTaX   | W   | 0.532      | -            | -                | -                | 1 (0.532) |     0.60 | blameF, device, jabbi, Staehr, stavn |
|            2 |     2861 | 2023-12-07 | FURIA             | L   | 0.287      | -            | -                | -                | -         |    -3.93 | blameF, device, jabbi, Staehr, stavn |
|            1 |     2902 | 2023-12-06 | Virtus.pro        | L   | 0.278      | -            | -                | -                | -         |    -1.89 | blameF, device, jabbi, Staehr, stavn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($29,583.69)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-02-02 |      0.667 | $2,500.00      | $1,668.47       |
| 2024-01-28 |      0.633 | $12,500.00     | $7,915.22       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
