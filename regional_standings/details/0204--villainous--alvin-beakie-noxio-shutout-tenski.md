### Roster Details<br />
Team Name: Villainous<br />
Roster: Alvin, BeaKie, Noxio, shutout, tENSKI<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [204](../standings_global.md)<br />
Regional Rank: [64]( ../standings_americas.md)<br />
Final Rank Value:  573.9<br />
<br />
Final Rank Value (573.9) = Starting Rank Value (533.5) + Head To Head Adjustments (40.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.235[<sup>2</sup>](#table1)
- Opponent Network: 0.026[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.065<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 533.5
- 400 + ( ( 0.065 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 533.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |      203 | 2023-02-02 | Davenport University | L   | 1.000      | -            | -                | -                | -         |    -9.86 | Alvin, BeaKie, Noxio, shutout, tENSKI |
|           19 |      283 | 2023-01-30 | Limitless            | L   | 1.000      | -            | -                | -                | -         |    -9.64 | Alvin, BeaKie, Noxio, shutout, tENSKI |
|           18 |      327 | 2023-01-28 | Mad Kings            | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.081 (0.031)    | 0 (0.000) |    13.27 | Alvin, BeaKie, Noxio, shutout, tENSKI |
|           17 |      461 | 2023-01-24 | Take Flyte           | L   | 1.000      | -            | -                | -                | -         |   -12.39 | Alvin, BeaKie, Noxio, shutout, tENSKI |
|           16 |      540 | 2023-01-21 | ATK                  | L   | 1.000      | -            | -                | -                | -         |    -2.79 | Alvin, BeaKie, Noxio, shutout, tENSKI |
|           15 |      757 | 2022-12-18 | Noxious              | W   | 0.829      | 0.143        | 0.006 (0.001)    | 0.180 (0.021)    | 0 (0.000) |    14.36 | Alvin, BeaKie, shutout, tatm, zebra   |
|           14 |      799 | 2022-12-17 | paiN                 | L   | 0.822      | -            | -                | -                | -         |    -1.39 | Alvin, BeaKie, shutout, tatm, zebra   |
|           13 |      831 | 2022-12-16 | REIGN                | W   | 0.815      | 0.143        | 0.003 (0.000)    | 0.153 (0.018)    | 0 (0.000) |    15.69 | Alvin, BeaKie, shutout, tatm, zebra   |
|           12 |     1001 | 2022-12-09 | Nouns                | L   | 0.768      | -            | -                | -                | -         |    -3.20 | Alvin, BeaKie, shutout, tatm, zebra   |
|           11 |     1055 | 2022-12-07 | Mythic               | L   | 0.756      | -            | -                | -                | -         |    -7.99 | Alvin, BeaKie, shutout, tatm, zebra   |
|           10 |     1134 | 2022-12-05 | Vendetta             | L   | 0.742      | -            | -                | -                | -         |    -5.77 | Alvin, BeaKie, shutout, tatm, zebra   |
|            9 |     1201 | 2022-12-03 | Orion                | W   | 0.729      | 0.384        | 0.001 (0.000)    | 0.090 (0.025)    | 0 (0.000) |    13.38 | Alvin, BeaKie, shutout, tatm, zebra   |
|            8 |     1267 | 2022-12-01 | X13                  | W   | 0.715      | 0.384        | 0.001 (0.000)    | 0.090 (0.025)    | 0 (0.000) |    13.51 | Alvin, BeaKie, shutout, tatm, zebra   |
|            7 |     1320 | 2022-11-29 | Disconnected         | W   | 0.702      | 0.435        | 0.008 (0.003)    | 0.225 (0.069)    | 0 (0.000) |    16.74 | Alvin, BeaKie, shutout, tatm, zebra   |
|            6 |     1342 | 2022-11-28 | Detonate             | L   | 0.696      | -            | -                | -                | -         |    -5.23 | Alvin, BeaKie, shutout, tatm, zebra   |
|            5 |     1404 | 2022-11-26 | Take Charge          | W   | 0.682      | 0.384        | 0.000 (0.000)    | 0.105 (0.028)    | 0 (0.000) |     9.87 | Alvin, BeaKie, shutout, tatm, zebra   |
|            4 |     1507 | 2022-11-22 | ATK                  | L   | 0.655      | -            | -                | -                | -         |    -1.80 | Alvin, BeaKie, shutout, tatm, zebra   |
|            3 |     1528 | 2022-11-20 | Nouns                | L   | 0.642      | -            | -                | -                | -         |    -2.32 | Alvin, BeaKie, shutout, tatm, zebra   |
|            2 |     1606 | 2022-11-16 | Red Wolves           | L   | 0.616      | -            | -                | -                | -         |    -6.79 | Alvin, BeaKie, shutout, tatm, zebra   |
|            1 |     1670 | 2022-11-08 | Noxious              | W   | 0.562      | 0.435        | 0.006 (0.001)    | 0.180 (0.044)    | 0 (0.000) |    12.81 | Alvin, BeaKie, shutout, tatm, zebra   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
