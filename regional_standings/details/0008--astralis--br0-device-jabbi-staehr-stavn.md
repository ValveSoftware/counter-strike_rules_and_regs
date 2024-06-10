### Roster Details<br />
Team Name: Astralis<br />
Roster: br0, device, jabbi, Staehr, stavn<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [8](../standings_global.md)<br />
Regional Rank: [7]( ../standings_europe.md)<br />
Final Rank Value:  1826.8<br />
<br />
Final Rank Value (1826.8) = Starting Rank Value (1921.0) + Head To Head Adjustments (-94.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.755[<sup>1</sup>](#table2)
- Bounty Collected: 0.751[<sup>2</sup>](#table1)
- Opponent Network: 0.561[<sup>2</sup>](#table1)
- LAN Wins: 0.985[<sup>2</sup>](#table1)

The average of these factors is 0.763<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1921.0
- 400 + ( ( 0.763 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1921.0


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
|           38 |      124 | 2024-06-08 | The MongolZ       | L   | 1.000      | -            | -                | -                | -         |   -16.25 | br0, device, jabbi, Staehr, stavn    |
|           37 |      175 | 2024-06-07 | BetBoom           | W   | 1.000      | 0.715        | 0.427 (0.305)    | 0.917 (0.656)    | 1 (1.000) |     4.06 | br0, device, jabbi, Staehr, stavn    |
|           36 |      236 | 2024-06-06 | The MongolZ       | W   | 1.000      | 0.715        | 0.978 (0.700)    | 0.738 (0.528)    | 1 (1.000) |    15.39 | br0, device, jabbi, Staehr, stavn    |
|           35 |      256 | 2024-06-06 | ENCE              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.57 | br0, device, jabbi, Staehr, stavn    |
|           34 |      262 | 2024-06-06 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |   -27.59 | br0, device, jabbi, Staehr, stavn    |
|           33 |      307 | 2024-06-05 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -30.40 | br0, device, jabbi, Staehr, stavn    |
|           32 |      319 | 2024-06-05 | HEROIC            | W   | 1.000      | 0.715        | 0.362 (0.259)    | 0.635 (0.454)    | 1 (1.000) |     8.22 | br0, device, jabbi, Staehr, stavn    |
|           31 |      668 | 2024-05-22 | Liquid            | L   | 1.000      | -            | -                | -                | -         |   -24.21 | br0, device, jabbi, Staehr, stavn    |
|           30 |      710 | 2024-05-21 | Aurora            | W   | 1.000      | 0.769        | 0.513 (0.395)    | 0.918 (0.706)    | -         |     2.23 | br0, device, jabbi, Staehr, stavn    |
|           29 |      740 | 2024-05-20 | BetBoom           | W   | 1.000      | 0.769        | 0.427 (0.328)    | 0.917 (0.705)    | -         |     2.51 | br0, device, jabbi, Staehr, stavn    |
|           28 |      763 | 2024-05-19 | BIG               | W   | 1.000      | 0.769        | 0.228 (0.175)    | 0.459 (0.353)    | -         |     2.12 | br0, device, jabbi, Staehr, stavn    |
|           27 |     1055 | 2024-05-11 | Vitality          | L   | 0.999      | -            | -                | -                | -         |   -13.44 | br0, device, jabbi, Staehr, stavn    |
|           26 |     1076 | 2024-05-10 | Liquid            | W   | 0.992      | 0.889        | 0.501 (0.442)    | 0.732 (0.646)    | 1 (0.992) |     6.19 | br0, device, jabbi, Staehr, stavn    |
|           25 |     1342 | 2024-04-27 | 3DMAX             | W   | 0.906      | 0.889        | -                | 0.821 (0.661)    | 1 (0.906) |     0.71 | br0, device, jabbi, Staehr, stavn    |
|           24 |     1412 | 2024-04-24 | FaZe              | W   | 0.887      | 0.889        | 1.000 (0.788)    | 0.588 (0.463)    | 1 (0.887) |    17.16 | br0, device, jabbi, Staehr, stavn    |
|           23 |     1433 | 2024-04-23 | Eternal Fire      | W   | 0.879      | 0.889        | 1.000 (0.782)    | 0.560 (0.438)    | 1 (0.879) |    11.90 | br0, device, jabbi, Staehr, stavn    |
|           22 |     1719 | 2024-04-13 | FaZe              | L   | 0.812      | -            | -                | -                | -         |    -9.87 | br0, device, jabbi, Staehr, stavn    |
|           21 |     1816 | 2024-04-10 | Virtus.pro        | W   | 0.791      | -            | -                | -                | 1 (0.791) |     7.16 | br0, device, jabbi, Staehr, stavn    |
|           20 |     1868 | 2024-04-09 | FaZe              | W   | 0.784      | 0.624        | 1.000 (0.490)    | -                | 1 (0.784) |    15.54 | br0, device, jabbi, Staehr, stavn    |
|           19 |     1900 | 2024-04-08 | Steel Helmet      | W   | 0.777      | -            | -                | -                | -         |     0.03 | br0, device, jabbi, Staehr, stavn    |
|           18 |     2870 | 2024-02-23 | 9 Pandas          | L   | 0.478      | -            | -                | -                | -         |   -14.77 | blameF, device, jabbi, Staehr, stavn |
|           17 |     2889 | 2024-02-22 | ENCE              | L   | 0.471      | -            | -                | -                | -         |   -13.52 | blameF, device, jabbi, Staehr, stavn |
|           16 |     2916 | 2024-02-21 | Monte             | W   | 0.465      | -            | -                | -                | -         |     0.57 | blameF, device, jabbi, Staehr, stavn |
|           15 |     2944 | 2024-02-20 | HEROIC            | L   | 0.458      | -            | -                | -                | -         |    -9.51 | blameF, device, jabbi, Staehr, stavn |
|           14 |     2957 | 2024-02-19 | Spirit            | L   | 0.454      | -            | -                | -                | -         |    -6.96 | blameF, device, jabbi, Staehr, stavn |
|           13 |     2967 | 2024-02-19 | Nexus             | W   | 0.452      | -            | -                | -                | -         |     0.04 | blameF, device, jabbi, Staehr, stavn |
|           12 |     3325 | 2024-02-01 | ENCE              | L   | 0.334      | -            | -                | -                | -         |    -9.84 | blameF, device, jabbi, Staehr, stavn |
|           11 |     3354 | 2024-01-31 | HEROIC            | L   | 0.326      | -            | -                | -                | -         |    -7.15 | blameF, device, jabbi, Staehr, stavn |
|           10 |     3391 | 2024-01-28 | BIG               | W   | 0.306      | -            | -                | -                | -         |     0.68 | blameF, device, jabbi, Staehr, stavn |
|            9 |     3407 | 2024-01-27 | Vitality          | L   | 0.299      | -            | -                | -                | -         |    -4.42 | blameF, device, jabbi, Staehr, stavn |
|            8 |     3473 | 2024-01-23 | Vitality          | W   | 0.273      | -            | -                | -                | -         |     4.64 | blameF, device, jabbi, Staehr, stavn |
|            7 |     3500 | 2024-01-22 | Falcons           | W   | 0.267      | -            | -                | -                | -         |     0.54 | blameF, device, jabbi, Staehr, stavn |
|            6 |     3570 | 2024-01-20 | PERA              | W   | 0.253      | -            | -                | -                | -         |     0.03 | blameF, device, jabbi, Staehr, stavn |
|            5 |     3620 | 2024-01-19 | AMKAL             | L   | 0.247      | -            | -                | -                | -         |    -7.63 | blameF, device, jabbi, Staehr, stavn |
|            4 |     3685 | 2024-01-18 | ex-Preasy         | W   | 0.240      | -            | -                | -                | -         |     0.03 | blameF, device, jabbi, Staehr, stavn |
|            3 |     3688 | 2024-01-18 | Enterprise        | W   | 0.239      | -            | -                | -                | -         |     0.04 | blameF, device, jabbi, Staehr, stavn |
|            2 |     3857 | 2024-01-14 | Ninjas in Pyjamas | W   | 0.213      | -            | -                | -                | -         |     0.01 | blameF, device, jabbi, Staehr, stavn |
|            1 |     3893 | 2024-01-13 | ALTERNATE aTTaX   | W   | 0.206      | -            | -                | -                | -         |     0.04 | blameF, device, jabbi, Staehr, stavn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($144,046.36)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.47) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $28,000.00     | $28,000.00      |
| 2024-05-23 |      1.000 | $50,000.00     | $50,000.00      |
| 2024-05-12 |      1.000 | $45,000.00     | $45,000.00      |
| 2024-04-14 |      0.818 | $20,000.00     | $16,361.24      |
| 2024-02-02 |      0.341 | $2,500.00      | $852.04         |
| 2024-01-28 |      0.307 | $12,500.00     | $3,833.08       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
