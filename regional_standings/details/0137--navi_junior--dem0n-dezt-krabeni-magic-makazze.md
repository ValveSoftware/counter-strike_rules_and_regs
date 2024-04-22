### Roster Details<br />
Team Name: NAVI Junior<br />
Roster: dem0n, dezt, Krabeni, Magic, makazze<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [137](../standings_global.md)<br />
Regional Rank: [93]( ../standings_europe.md)<br />
Final Rank Value:  732.0<br />
<br />
Final Rank Value (732.0) = Starting Rank Value (729.2) + Head To Head Adjustments (2.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.367[<sup>1</sup>](#table2)
- Bounty Collected: 0.284[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.170<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 729.2
- 400 + ( ( 0.170 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 729.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |      654 | 2024-03-30 | GL Academy     | L   | 1.000      | -            | -                | -                | -         |   -14.75 | dem0n, dezt, Krabeni, Magic, makazze     |
|           15 |      663 | 2024-03-29 | Passion UA     | W   | 1.000      | 0.333        | 0.031 (0.010)    | 0.625 (0.208)    | 0 (0.000) |    20.16 | dem0n, dezt, Krabeni, Magic, makazze     |
|           14 |      666 | 2024-03-29 | Sashi          | W   | 1.000      | 0.333        | 0.051 (0.017)    | 0.093 (0.031)    | 0 (0.000) |    17.46 | dem0n, dezt, Krabeni, Magic, makazze     |
|           13 |      713 | 2024-03-27 | Metizport      | L   | 1.000      | -            | -                | -                | -         |    -4.60 | dem0n, dezt, Krabeni, Magic, makazze     |
|           12 |      829 | 2024-03-20 | FORZE          | L   | 0.979      | -            | -                | -                | -         |    -4.57 | dem0n, froz1k, Krabeni, Magic, makazze   |
|           11 |     1495 | 2024-02-20 | ECLOT          | L   | 0.785      | -            | -                | -                | -         |    -3.99 | alkarenn, dem0n, Krabeni, Magic, makazze |
|           10 |     1528 | 2024-02-19 | Viperio        | W   | 0.777      | 0.303        | 0.000 (0.000)    | 0.056 (0.013)    | 0 (0.000) |     6.46 | alkarenn, dem0n, Krabeni, Magic, makazze |
|            9 |     1853 | 2024-02-02 | The Chosen Few | L   | 0.666      | -            | -                | -                | -         |   -10.80 | dem0n, fnl, Krabeni, Magic, makazze      |
|            8 |     1858 | 2024-02-02 | Zero Tenacity  | L   | 0.666      | -            | -                | -                | -         |    -8.66 | dem0n, fnl, Krabeni, Magic, makazze      |
|            7 |     1860 | 2024-02-02 | The Chosen Few | W   | 0.665      | 0.143        | 0.004 (0.000)    | 0.340 (0.032)    | 0 (0.000) |    10.01 | dem0n, fnl, Krabeni, Magic, makazze      |
|            6 |     2287 | 2024-01-17 | esmagaB        | L   | 0.560      | -            | -                | -                | -         |    -8.12 | dem0n, fnl, Krabeni, Magic, makazze      |
|            5 |     2632 | 2023-12-22 | ex-Anonymo     | L   | 0.384      | -            | -                | -                | -         |    -5.34 | dem0n, fnl, Krabeni, Magic, makazze      |
|            4 |     2636 | 2023-12-21 | NOM            | W   | 0.377      | 0.333        | 0.003 (0.000)    | 0.044 (0.006)    | 0 (0.000) |     5.03 | dem0n, fnl, Krabeni, Magic, makazze      |
|            3 |     2640 | 2023-12-20 | Sashi          | W   | 0.373      | 0.333        | 0.017 (0.002)    | 0.062 (0.008)    | 0 (0.000) |     5.61 | dem0n, fnl, Krabeni, Magic, makazze      |
|            2 |     2654 | 2023-12-19 | Spirit Academy | L   | 0.364      | -            | -                | -                | -         |    -5.58 | dem0n, fnl, Krabeni, Magic, makazze      |
|            1 |     2723 | 2023-12-16 | NOM            | W   | 0.344      | 0.333        | 0.003 (0.000)    | 0.044 (0.005)    | 0 (0.000) |     4.50 | dem0n, fnl, Krabeni, Magic, makazze      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,586.26)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-30 |      1.000 | $3,000.00      | $3,000.00       |
| 2023-12-23 |      0.391 | $1,500.00      | $586.26         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
