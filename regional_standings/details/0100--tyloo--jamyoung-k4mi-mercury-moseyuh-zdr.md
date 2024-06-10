### Roster Details<br />
Team Name: TYLOO<br />
Roster: JamYoung, k4Mi, Mercury, Moseyuh, zdr<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [100](../standings_global.md)<br />
Regional Rank: [8]( ../standings_asia.md)<br />
Final Rank Value:  851.4<br />
<br />
Final Rank Value (851.4) = Starting Rank Value (825.6) + Head To Head Adjustments (25.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.435[<sup>1</sup>](#table2)
- Bounty Collected: 0.301[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.096[<sup>2</sup>](#table1)

The average of these factors is 0.213<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 825.6
- 400 + ( ( 0.213 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 825.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |      129 | 2024-06-08 | Lynn Vision     | L   | 1.000      | -            | -                | -                | -         |    -4.99 | JamYoung, k4Mi, Mercury, Moseyuh, zdr   |
|           17 |      183 | 2024-06-07 | GR              | W   | 1.000      | 0.416        | 0.011 (0.004)    | 0.148 (0.061)    | 0 (0.000) |     8.38 | JamYoung, k4Mi, Mercury, Moseyuh, zdr   |
|           16 |      252 | 2024-06-06 | The QUBE        | W   | 1.000      | 0.416        | 0.007 (0.003)    | 0.078 (0.032)    | 0 (0.000) |     9.07 | JamYoung, k4Mi, Mercury, Moseyuh, zdr   |
|           15 |      305 | 2024-06-05 | Lynn Vision     | L   | 1.000      | -            | -                | -                | -         |    -4.29 | JamYoung, k4Mi, Mercury, Moseyuh, zdr   |
|           14 |      351 | 2024-06-04 | LYG             | W   | 1.000      | 0.416        | 0.005 (0.002)    | 0.076 (0.031)    | 0 (0.000) |    10.83 | JamYoung, k4Mi, Mercury, Moseyuh, zdr   |
|           13 |     1340 | 2024-04-27 | M80             | L   | 0.906      | -            | -                | -                | -         |    -2.45 | advent, JamYoung, kaze, Mercury, zdr    |
|           12 |     1363 | 2024-04-26 | Sharks          | W   | 0.900      | 0.889        | 0.028 (0.022)    | 0.061 (0.049)    | 1 (0.900) |    11.63 | advent, JamYoung, kaze, Mercury, zdr    |
|           11 |     1400 | 2024-04-25 | Falcons         | L   | 0.892      | -            | -                | -                | -         |    -0.90 | advent, JamYoung, kaze, Mercury, zdr    |
|           10 |     1422 | 2024-04-24 | G2              | L   | 0.885      | -            | -                | -                | -         |    -0.07 | advent, JamYoung, kaze, Mercury, zdr    |
|            9 |     1555 | 2024-04-19 | Rare Atom       | L   | 0.851      | -            | -                | -                | -         |   -20.08 | advent, JamYoung, kaze, Mercury, zdr    |
|            8 |     1595 | 2024-04-18 | The MongolZ     | L   | 0.846      | -            | -                | -                | -         |    -0.11 | advent, JamYoung, kaze, Mercury, zdr    |
|            7 |     1608 | 2024-04-18 | Lynn Vision     | W   | 0.845      | 0.143        | 0.129 (0.016)    | 0.303 (0.037)    | 0 (0.000) |    23.57 | advent, JamYoung, kaze, Mercury, zdr    |
|            6 |     1639 | 2024-04-17 | Sheer Conquer   | W   | 0.838      | 0.143        | 0.000 (0.000)    | 0.032 (0.004)    | 0 (0.000) |     3.86 | advent, JamYoung, kaze, Mercury, zdr    |
|            5 |     1645 | 2024-04-17 | The Huns        | W   | 0.838      | 0.143        | 0.000 (0.000)    | 0.087 (0.010)    | 0 (0.000) |     4.54 | advent, JamYoung, kaze, Mercury, zdr    |
|            4 |     1893 | 2024-04-08 | Lynn Vision     | L   | 0.779      | -            | -                | -                | -         |    -2.47 | advent, JamYoung, kaze, Mercury, zdr    |
|            3 |     1903 | 2024-04-08 | MOUZ            | L   | 0.777      | -            | -                | -                | -         |    -0.04 | advent, JamYoung, kaze, Mercury, zdr    |
|            2 |     2438 | 2024-03-13 | LYG             | L   | 0.605      | -            | -                | -                | -         |   -12.25 | advent, JamYoung, lyrics3, Mercury, zdr |
|            1 |     2444 | 2024-03-13 | padaem Holodnie | W   | 0.604      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.57 | advent, JamYoung, lyrics3, Mercury, zdr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,272.25)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-12 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-04-14 |      0.818 | $4,000.00      | $3,272.25       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
