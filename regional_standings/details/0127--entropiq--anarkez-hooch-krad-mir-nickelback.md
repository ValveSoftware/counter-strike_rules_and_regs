### Roster Details<br />
Team Name: Entropiq<br />
Roster: anarkez, hooch, Krad, mir, NickelBack<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [127](../standings_global.md)<br />
Regional Rank: [88]( ../standings_europe.md)<br />
Final Rank Value:  745.8<br />
<br />
Final Rank Value (745.8) = Starting Rank Value (718.9) + Head To Head Adjustments (26.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.303[<sup>1</sup>](#table2)
- Bounty Collected: 0.283[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.023[<sup>2</sup>](#table1)

The average of these factors is 0.156<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 718.9
- 400 + ( ( 0.156 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 718.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     2172 | 2022-10-14 | Sprout       | W   | 0.394      | 0.435        | 0.067 (0.012)    | 0.446 (0.076)    | 0 (0.000) |    11.36 | anarkez, hooch, Krad, mir, NickelBack   |
|           12 |     2854 | 2022-09-18 | Eternal Fire | L   | 0.220      | -            | -                | -                | -         |    -1.67 | Forester, Krad, mir, NickelBack, SENSEi |
|           11 |     2878 | 2022-09-17 | Iron Branch  | W   | 0.214      | 0.143        | 0.002 (0.000)    | 0.110 (0.003)    | 0 (0.000) |     3.09 | Forester, Krad, mir, NickelBack, SENSEi |
|           10 |     2908 | 2022-09-16 | Sprout       | W   | 0.207      | 0.143        | 0.067 (0.002)    | 0.446 (0.013)    | 0 (0.000) |     6.04 | Forester, Krad, mir, NickelBack, SENSEi |
|            9 |     2929 | 2022-09-16 | Believe      | W   | 0.205      | 0.143        | 0.006 (0.000)    | 0.344 (0.010)    | 0 (0.000) |     3.67 | Forester, Krad, mir, NickelBack, SENSEi |
|            8 |     3308 | 2022-09-03 | Imperial     | L   | 0.121      | -            | -                | -                | -         |    -1.13 | El1an, Forester, Krad, mir, NickelBack  |
|            7 |     3367 | 2022-09-02 | OG           | W   | 0.110      | 0.500        | 0.237 (0.013)    | 0.365 (0.020)    | 1 (0.110) |     3.44 | El1an, Forester, Krad, mir, NickelBack  |
|            6 |     3371 | 2022-09-01 | EG White     | W   | 0.109      | 0.500        | 0.048 (0.003)    | 0.340 (0.018)    | 1 (0.109) |     2.45 | El1an, Forester, Krad, mir, NickelBack  |
|            5 |     3507 | 2022-08-27 | ex-TAG       | L   | 0.073      | -            | -                | -                | -         |    -1.16 | El1an, Forester, Krad, mir, NickelBack  |
|            4 |     3589 | 2022-08-24 | HEET         | L   | 0.053      | -            | -                | -                | -         |    -0.37 | El1an, Forester, Krad, mir, NickelBack  |
|            3 |     3601 | 2022-08-23 | Sangal       | L   | 0.047      | -            | -                | -                | -         |    -0.34 | El1an, Forester, Krad, mir, NickelBack  |
|            2 |     3607 | 2022-08-23 | Nemiga       | W   | 0.046      | 0.143        | 0.008 (0.000)    | 0.115 (0.001)    | 0 (0.000) |     0.79 | El1an, Forester, Krad, mir, NickelBack  |
|            1 |     3628 | 2022-08-23 | ex-TAG       | W   | 0.046      | 0.143        | 0.010 (0.000)    | 0.081 (0.001)    | 0 (0.000) |     0.72 | El1an, Forester, Krad, mir, NickelBack  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,371.57)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-10-23 |      0.454 | $2,500.00      | $1,134.68       |
| 2022-09-04 |      0.124 | $10,000.00     | $1,236.89       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
