### Roster Details<br />
Team Name: NAVI Junior<br />
Roster: dem0n, dezt, Krabeni, Magic, makazze<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [129](../standings_global.md)<br />
Regional Rank: [86]( ../standings_europe.md)<br />
Final Rank Value:  714.9<br />
<br />
Final Rank Value (714.9) = Starting Rank Value (702.2) + Head To Head Adjustments (12.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.327[<sup>1</sup>](#table2)
- Bounty Collected: 0.273[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.156<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 702.2
- 400 + ( ( 0.156 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 702.2


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
|           15 |     1601 | 2024-03-30 | GL Academy     | L   | 0.798      | -            | -                | -                | -         |   -11.11 | dem0n, dezt, Krabeni, Magic, makazze     |
|           14 |     1610 | 2024-03-29 | Passion UA     | W   | 0.791      | 0.333        | 0.056 (0.015)    | 0.759 (0.200)    | 0 (0.000) |    19.29 | dem0n, dezt, Krabeni, Magic, makazze     |
|           13 |     1613 | 2024-03-29 | Sashi          | W   | 0.790      | 0.333        | 0.025 (0.006)    | 0.063 (0.017)    | 0 (0.000) |    13.02 | dem0n, dezt, Krabeni, Magic, makazze     |
|           12 |     1660 | 2024-03-27 | Metizport      | L   | 0.779      | -            | -                | -                | -         |    -3.43 | dem0n, dezt, Krabeni, Magic, makazze     |
|           11 |     2442 | 2024-02-20 | ECLOT          | L   | 0.538      | -            | -                | -                | -         |    -2.52 | alkarenn, dem0n, Krabeni, Magic, makazze |
|           10 |     2475 | 2024-02-19 | Viperio        | W   | 0.530      | 0.303        | 0.000 (0.000)    | 0.029 (0.005)    | 0 (0.000) |     4.62 | alkarenn, dem0n, Krabeni, Magic, makazze |
|            9 |     2800 | 2024-02-02 | The Chosen Few | L   | 0.419      | -            | -                | -                | -         |    -6.93 | dem0n, fnl, Krabeni, Magic, makazze      |
|            8 |     2805 | 2024-02-02 | Zero Tenacity  | L   | 0.418      | -            | -                | -                | -         |    -1.74 | dem0n, fnl, Krabeni, Magic, makazze      |
|            7 |     2807 | 2024-02-02 | The Chosen Few | W   | 0.418      | 0.143        | 0.002 (0.000)    | 0.207 (0.012)    | 0 (0.000) |     6.31 | dem0n, fnl, Krabeni, Magic, makazze      |
|            6 |     3234 | 2024-01-17 | esmagaB        | L   | 0.313      | -            | -                | -                | -         |    -4.58 | dem0n, fnl, Krabeni, Magic, makazze      |
|            5 |     3579 | 2023-12-22 | ex-Anonymo     | L   | 0.137      | -            | -                | -                | -         |    -2.42 | dem0n, fnl, Krabeni, Magic, makazze      |
|            4 |     3583 | 2023-12-21 | NOM            | W   | 0.130      | 0.333        | 0.000 (0.000)    | 0.010 (0.000)    | 0 (0.000) |     1.62 | dem0n, fnl, Krabeni, Magic, makazze      |
|            3 |     3587 | 2023-12-20 | Sashi          | W   | 0.125      | 0.333        | 0.000 (0.000)    | 0.006 (0.000)    | 0 (0.000) |     1.35 | dem0n, fnl, Krabeni, Magic, makazze      |
|            2 |     3601 | 2023-12-19 | Spirit Academy | L   | 0.117      | -            | -                | -                | -         |    -1.92 | dem0n, fnl, Krabeni, Magic, makazze      |
|            1 |     3670 | 2023-12-16 | NOM            | W   | 0.097      | 0.333        | 0.000 (0.000)    | 0.010 (0.000)    | 0 (0.000) |     1.20 | dem0n, fnl, Krabeni, Magic, makazze      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,607.91)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-30 |      0.798 | $3,000.00      | $2,392.75       |
| 2023-12-23 |      0.143 | $1,500.00      | $215.16         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
