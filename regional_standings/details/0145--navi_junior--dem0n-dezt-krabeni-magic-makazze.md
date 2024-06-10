### Roster Details<br />
Team Name: NAVI Junior<br />
Roster: dem0n, dezt, Krabeni, Magic, makazze<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [145](../standings_global.md)<br />
Regional Rank: [95]( ../standings_europe.md)<br />
Final Rank Value:  724.0<br />
<br />
Final Rank Value (724.0) = Starting Rank Value (710.2) + Head To Head Adjustments (13.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.319[<sup>1</sup>](#table2)
- Bounty Collected: 0.279[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.156<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 710.2
- 400 + ( ( 0.156 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 710.2


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
|           15 |     2101 | 2024-03-30 | GL Academy     | L   | 0.718      | -            | -                | -                | -         |    -9.97 | dem0n, dezt, Krabeni, Magic, makazze     |
|           14 |     2110 | 2024-03-29 | Passion UA     | W   | 0.712      | 0.333        | 0.088 (0.021)    | 0.905 (0.215)    | 0 (0.000) |    18.11 | dem0n, dezt, Krabeni, Magic, makazze     |
|           13 |     2113 | 2024-03-29 | Sashi          | W   | 0.711      | 0.333        | 0.022 (0.005)    | 0.053 (0.013)    | 0 (0.000) |    11.49 | dem0n, dezt, Krabeni, Magic, makazze     |
|           12 |     2160 | 2024-03-27 | Metizport      | L   | 0.700      | -            | -                | -                | -         |    -3.01 | dem0n, dezt, Krabeni, Magic, makazze     |
|           11 |     2942 | 2024-02-20 | ECLOT          | L   | 0.459      | -            | -                | -                | -         |    -0.81 | alkarenn, dem0n, Krabeni, Magic, makazze |
|           10 |     2975 | 2024-02-19 | Viperio        | W   | 0.451      | 0.303        | 0.000 (0.000)    | 0.021 (0.003)    | 0 (0.000) |     3.78 | alkarenn, dem0n, Krabeni, Magic, makazze |
|            9 |     3300 | 2024-02-02 | The Chosen Few | L   | 0.340      | -            | -                | -                | -         |    -5.61 | dem0n, fnl, Krabeni, Magic, makazze      |
|            8 |     3305 | 2024-02-02 | Zero Tenacity  | L   | 0.339      | -            | -                | -                | -         |    -1.13 | dem0n, fnl, Krabeni, Magic, makazze      |
|            7 |     3307 | 2024-02-02 | The Chosen Few | W   | 0.339      | 0.143        | 0.002 (0.000)    | 0.167 (0.008)    | 0 (0.000) |     5.12 | dem0n, fnl, Krabeni, Magic, makazze      |
|            6 |     3734 | 2024-01-17 | esmagaB        | L   | 0.234      | -            | -                | -                | -         |    -3.50 | dem0n, fnl, Krabeni, Magic, makazze      |
|            5 |     4079 | 2023-12-22 | ex-Anonymo     | L   | 0.058      | -            | -                | -                | -         |    -1.11 | dem0n, fnl, Krabeni, Magic, makazze      |
|            4 |     4083 | 2023-12-21 | NOM            | W   | 0.051      | 0.333        | 0.000 (0.000)    | 0.003 (0.000)    | 0 (0.000) |     0.58 | dem0n, fnl, Krabeni, Magic, makazze      |
|            3 |     4087 | 2023-12-20 | Sashi          | W   | 0.046      | 0.333        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     0.31 | dem0n, fnl, Krabeni, Magic, makazze      |
|            2 |     4101 | 2023-12-19 | Spirit Academy | L   | 0.038      | -            | -                | -                | -         |    -0.65 | dem0n, fnl, Krabeni, Magic, makazze      |
|            1 |     4170 | 2023-12-16 | NOM            | W   | 0.018      | 0.333        | 0.000 (0.000)    | 0.003 (0.000)    | 0 (0.000) |     0.20 | dem0n, fnl, Krabeni, Magic, makazze      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,251.63)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-30 |      0.718 | $3,000.00      | $2,155.23       |
| 2023-12-23 |      0.064 | $1,500.00      | $96.40          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
