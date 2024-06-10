### Roster Details<br />
Team Name: Space<br />
Roster: danistzz, fozil, H4SAN4TOR, Vert, X5G7V<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [84](../standings_global.md)<br />
Regional Rank: [60]( ../standings_europe.md)<br />
Final Rank Value:  919.3<br />
<br />
Final Rank Value (919.3) = Starting Rank Value (851.0) + Head To Head Adjustments (68.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.314[<sup>1</sup>](#table2)
- Bounty Collected: 0.349[<sup>2</sup>](#table1)
- Opponent Network: 0.241[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.226<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 851.0
- 400 + ( ( 0.226 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 851.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |        3 | 2024-06-10 | Passion UA      | L   | 1.000      | -            | -                | -                | -         |   -10.45 | danistzz, fozil, H4SAN4TOR, Vert, X5G7V   |
|           20 |      104 | 2024-06-08 | Permitta        | L   | 1.000      | -            | -                | -                | -         |   -15.16 | danistzz, fozil, H4SAN4TOR, TruNiQ, X5G7V |
|           19 |      232 | 2024-06-06 | VP.Prodigy      | W   | 1.000      | 0.435        | 0.016 (0.007)    | 0.539 (0.234)    | 0 (0.000) |    15.94 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           18 |      371 | 2024-06-03 | EYEBALLERS      | W   | 1.000      | 0.435        | 0.006 (0.003)    | 0.722 (0.314)    | 0 (0.000) |    13.88 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           17 |      586 | 2024-05-25 | 9 Pandas        | L   | 1.000      | -            | -                | -                | -         |    -7.00 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           16 |      629 | 2024-05-23 | Metizport       | W   | 1.000      | 0.435        | 0.078 (0.034)    | 0.706 (0.307)    | 0 (0.000) |    22.60 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           15 |      701 | 2024-05-21 | System5         | W   | 1.000      | 0.500        | -                | 0.092 (0.046)    | 0 (0.000) |     3.83 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           14 |      764 | 2024-05-19 | DMS             | W   | 1.000      | 0.435        | 0.004 (0.002)    | 0.524 (0.228)    | 0 (0.000) |    17.04 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           13 |      812 | 2024-05-18 | Verdant         | W   | 1.000      | 0.435        | 0.014 (0.006)    | 0.261 (0.113)    | 0 (0.000) |    13.73 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           12 |      844 | 2024-05-17 | 777             | L   | 1.000      | -            | -                | -                | -         |   -21.26 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           11 |      862 | 2024-05-16 | GUN5            | L   | 1.000      | -            | -                | -                | -         |   -13.46 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           10 |      918 | 2024-05-15 | Rounds          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.79 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            9 |      930 | 2024-05-15 | Nexus           | W   | 1.000      | 0.435        | 0.013 (0.006)    | 0.469 (0.204)    | 0 (0.000) |    12.31 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            8 |      967 | 2024-05-14 | EYEBALLERS      | W   | 1.000      | 0.500        | 0.006 (0.003)    | 0.722 (0.361)    | 0 (0.000) |    17.94 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            7 |     1009 | 2024-05-13 | MOUZ NXT        | L   | 1.000      | -            | -                | -                | -         |    -6.85 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            6 |     1061 | 2024-05-11 | Viperio         | W   | 0.998      | 0.143        | 0.003 (0.000)    | -                | 0 (0.000) |     6.34 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            5 |     1486 | 2024-04-20 | ALTERNATE aTTaX | W   | 0.860      | 0.500        | 0.046 (0.020)    | 0.583 (0.251)    | -         |    17.09 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            4 |     1992 | 2024-04-04 | 3DMAX           | L   | 0.752      | -            | -                | -                | -         |    -3.17 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|            3 |     2031 | 2024-04-03 | PARIVISION      | L   | 0.746      | -            | -                | -                | -         |    -6.91 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|            2 |     2109 | 2024-03-29 | B8              | W   | 0.713      | 0.500        | 0.160 (0.057)    | 1.000 (0.356)    | -         |    18.64 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|            1 |     2125 | 2024-03-28 | GUN5            | L   | 0.706      | -            | -                | -                | -         |    -8.62 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,000.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
