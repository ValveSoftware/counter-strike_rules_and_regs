### Roster Details<br />
Team Name: FORZE<br />
Roster: gokushima, r3salt, shalfey, sstiNiX, tN1R<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [140](../standings_global.md)<br />
Regional Rank: [92]( ../standings_europe.md)<br />
Final Rank Value:  685.6<br />
<br />
Final Rank Value (685.6) = Starting Rank Value (675.2) + Head To Head Adjustments (10.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.274[<sup>1</sup>](#table2)
- Bounty Collected: 0.282[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.142<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 675.2
- 400 + ( ( 0.142 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 675.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     2865 | 2024-01-30 | Sashi          | L   | 0.400      | -            | -                | -                | -         |    -1.60 | gokushima, r3salt, shalfey, sstiNiX, tN1R |
|           15 |     2866 | 2024-01-30 | GUN5           | W   | 0.399      | 0.143        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     2.81 | gokushima, r3salt, shalfey, sstiNiX, tN1R |
|           14 |     3074 | 2024-01-20 | ex-Preasy      | L   | 0.332      | -            | -                | -                | -         |    -2.30 | gokushima, kelieN, r3salt, shalfey, tN1R  |
|           13 |     3113 | 2024-01-19 | Aurora         | W   | 0.326      | 0.143        | 0.493 (0.023)    | 0.840 (0.039)    | 0 (0.000) |    10.15 | gokushima, kelieN, r3salt, shalfey, tN1R  |
|           12 |     3172 | 2024-01-18 | ex-sYnck       | L   | 0.319      | -            | -                | -                | -         |    -6.06 | gokushima, kelieN, r3salt, shalfey, tN1R  |
|           11 |     3189 | 2024-01-18 | HEROIC         | L   | 0.319      | -            | -                | -                | -         |    -0.03 | gokushima, kelieN, r3salt, shalfey, tN1R  |
|           10 |     3717 | 2023-12-12 | ENCE           | L   | 0.070      | -            | -                | -                | -         |    -0.04 | gokushima, kelieN, r3salt, shalfey, tN1R  |
|            9 |     3726 | 2023-12-11 | SAW            | W   | 0.065      | 0.384        | 0.109 (0.003)    | 0.611 (0.015)    | 0 (0.000) |     1.99 | gokushima, kelieN, r3salt, shalfey, tN1R  |
|            8 |     3734 | 2023-12-10 | 3DMAX          | L   | 0.059      | -            | -                | -                | -         |    -0.11 | gokushima, Krad, r3salt, shalfey, tN1R    |
|            7 |     3757 | 2023-12-09 | SINNERS        | W   | 0.053      | 0.500        | 0.009 (0.000)    | 0.728 (0.019)    | 0 (0.000) |     1.41 | gokushima, Krad, r3salt, shalfey, tN1R    |
|            6 |     3776 | 2023-12-08 | Apeks          | W   | 0.046      | 0.500        | 0.083 (0.002)    | 0.495 (0.011)    | 0 (0.000) |     1.37 | gokushima, Krad, r3salt, shalfey, tN1R    |
|            5 |     3806 | 2023-12-07 | Spirit Academy | W   | 0.039      | 0.500        | 0.003 (0.000)    | 0.131 (0.003)    | 0 (0.000) |     0.63 | gokushima, Krad, r3salt, shalfey, tN1R    |
|            4 |     3813 | 2023-12-07 | EYEBALLERS     | W   | 0.038      | 0.384        | 0.009 (0.000)    | 0.611 (0.009)    | 0 (0.000) |     0.89 | gokushima, kelieN, r3salt, shalfey, tN1R  |
|            3 |     3834 | 2023-12-06 | Space          | W   | 0.033      | 0.500        | 0.007 (0.000)    | 0.437 (0.007)    | 0 (0.000) |     0.71 | gokushima, Krad, r3salt, shalfey, tN1R    |
|            2 |     3856 | 2023-12-05 | KOI            | W   | 0.027      | 0.500        | 0.025 (0.000)    | 0.570 (0.008)    | 0 (0.000) |     0.68 | gokushima, Krad, r3salt, shalfey, tN1R    |
|            1 |     3868 | 2023-12-05 | ex-Preasy      | L   | 0.025      | -            | -                | -                | -         |    -0.17 | gokushima, Krad, r3salt, shalfey, tN1R    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($673.13)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-13 |      0.079 | $1,000.00      | $79.36          |
| 2023-12-10 |      0.059 | $10,000.00     | $593.77         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
