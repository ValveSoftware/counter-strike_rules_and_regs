### Roster Details<br />
Team Name: Vitality<br />
Roster: apEX, flameZ, mezii, Spinx, ZywOo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [4](../standings_global.md)<br />
Regional Rank: [4]( ../standings_europe.md)<br />
Final Rank Value:  1928.3<br />
<br />
Final Rank Value (1928.3) = Starting Rank Value (1942.1) + Head To Head Adjustments (-13.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.852[<sup>1</sup>](#table2)
- Bounty Collected: 0.761[<sup>2</sup>](#table1)
- Opponent Network: 0.481[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.774<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1942.1
- 400 + ( ( 0.774 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1942.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |      384 | 2024-06-02 | G2            | L   | 1.000      | -            | -                | -                | -         |   -17.77 | apEX, flameZ, mezii, Spinx, ZywOo |
|           30 |      418 | 2024-06-01 | Spirit        | W   | 1.000      | 0.624        | 1.000 (0.624)    | 0.454 (0.284)    | 1 (1.000) |    15.74 | apEX, flameZ, mezii, Spinx, ZywOo |
|           29 |      453 | 2024-05-31 | HEROIC        | W   | 1.000      | 0.624        | 0.362 (0.226)    | 0.635 (0.396)    | 1 (1.000) |     6.83 | apEX, flameZ, mezii, Spinx, ZywOo |
|           28 |      500 | 2024-05-29 | 9z            | L   | 1.000      | -            | -                | -                | -         |   -30.48 | apEX, flameZ, mezii, Spinx, ZywOo |
|           27 |      544 | 2024-05-27 | G2            | W   | 1.000      | 0.624        | 0.746 (0.466)    | 0.580 (0.362)    | 1 (1.000) |    10.98 | apEX, flameZ, mezii, Spinx, ZywOo |
|           26 |      554 | 2024-05-27 | Monte         | W   | 1.000      | 0.624        | -                | 0.686 (0.428)    | 1 (1.000) |     0.69 | apEX, flameZ, mezii, Spinx, ZywOo |
|           25 |     1024 | 2024-05-12 | MOUZ          | L   | 1.000      | -            | -                | -                | -         |   -12.99 | apEX, flameZ, mezii, Spinx, ZywOo |
|           24 |     1055 | 2024-05-11 | Astralis      | W   | 0.999      | 0.889        | 0.474 (0.421)    | 0.537 (0.477)    | 1 (0.999) |    13.44 | apEX, flameZ, mezii, Spinx, ZywOo |
|           23 |     1073 | 2024-05-10 | FaZe          | W   | 0.993      | 0.889        | 1.000 (0.883)    | 0.588 (0.519)    | 1 (0.993) |    17.50 | apEX, flameZ, mezii, Spinx, ZywOo |
|           22 |     1325 | 2024-04-28 | The MongolZ   | W   | 0.912      | 0.889        | 0.978 (0.793)    | 0.738 (0.598)    | 1 (0.912) |    11.03 | apEX, flameZ, mezii, Spinx, ZywOo |
|           21 |     1398 | 2024-04-25 | BetBoom       | W   | 0.892      | 0.889        | 0.427 (0.339)    | 0.917 (0.728)    | 1 (0.892) |     2.79 | apEX, flameZ, mezii, Spinx, ZywOo |
|           20 |     1435 | 2024-04-23 | Sharks        | W   | 0.879      | -            | -                | -                | 1 (0.879) |     0.05 | apEX, flameZ, mezii, Spinx, ZywOo |
|           19 |     2099 | 2024-03-30 | FaZe          | L   | 0.720      | -            | -                | -                | -         |    -9.73 | apEX, flameZ, mezii, Spinx, ZywOo |
|           18 |     2126 | 2024-03-28 | Cloud9        | W   | 0.706      | -            | -                | -                | 1 (0.706) |     1.48 | apEX, flameZ, mezii, Spinx, ZywOo |
|           17 |     2213 | 2024-03-23 | Complexity    | W   | 0.673      | 1.000        | 0.271 (0.183)    | -                | -         |     3.59 | apEX, flameZ, mezii, Spinx, ZywOo |
|           16 |     2230 | 2024-03-22 | Imperial      | W   | 0.665      | 1.000        | 0.415 (0.276)    | 0.799 (0.532)    | -         |     1.91 | apEX, flameZ, mezii, Spinx, ZywOo |
|           15 |     2249 | 2024-03-21 | The MongolZ   | W   | 0.660      | 1.000        | 0.978 (0.645)    | 0.738 (0.487)    | -         |     9.20 | apEX, flameZ, mezii, Spinx, ZywOo |
|           14 |     2256 | 2024-03-21 | Eternal Fire  | L   | 0.659      | -            | -                | -                | -         |   -12.53 | apEX, flameZ, mezii, Spinx, ZywOo |
|           13 |     2911 | 2024-02-21 | ENCE          | W   | 0.466      | -            | -                | -                | -         |     1.08 | apEX, flameZ, mezii, Spinx, ZywOo |
|           12 |     2941 | 2024-02-20 | Cloud9        | L   | 0.459      | -            | -                | -                | -         |   -13.80 | apEX, flameZ, mezii, Spinx, ZywOo |
|           11 |     2958 | 2024-02-19 | HEROIC        | W   | 0.454      | -            | -                | -                | -         |     4.25 | apEX, flameZ, mezii, Spinx, ZywOo |
|           10 |     2974 | 2024-02-19 | GamerLegion   | W   | 0.451      | -            | -                | -                | -         |     0.16 | apEX, flameZ, mezii, Spinx, ZywOo |
|            9 |     3223 | 2024-02-05 | HEROIC        | L   | 0.359      | -            | -                | -                | -         |    -8.05 | apEX, flameZ, mezii, Spinx, ZywOo |
|            8 |     3257 | 2024-02-03 | ENCE          | L   | 0.348      | -            | -                | -                | -         |   -10.29 | apEX, flameZ, mezii, Spinx, ZywOo |
|            7 |     3407 | 2024-01-27 | Astralis      | W   | 0.299      | -            | -                | -                | -         |     4.42 | apEX, flameZ, mezii, Spinx, ZywOo |
|            6 |     3426 | 2024-01-26 | Falcons       | W   | 0.292      | -            | -                | -                | -         |     0.52 | apEX, flameZ, mezii, Spinx, ZywOo |
|            5 |     3473 | 2024-01-23 | Astralis      | L   | 0.273      | -            | -                | -                | -         |    -4.64 | apEX, flameZ, mezii, Spinx, ZywOo |
|            4 |     3504 | 2024-01-22 | OG            | W   | 0.266      | -            | -                | -                | -         |     0.13 | apEX, flameZ, mezii, Spinx, ZywOo |
|            3 |     4131 | 2023-12-17 | FaZe          | W   | 0.026      | -            | -                | -                | -         |     0.45 | apEX, flameZ, mezii, Spinx, ZywOo |
|            2 |     4166 | 2023-12-16 | Natus Vincere | W   | 0.019      | -            | -                | -                | -         |     0.23 | apEX, flameZ, mezii, Spinx, ZywOo |
|            1 |     4198 | 2023-12-14 | Cloud9        | W   | 0.004      | -            | -                | -                | -         |     0.01 | apEX, flameZ, mezii, Spinx, ZywOo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($203,876.67)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.67) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      1.000 | $42,000.00     | $42,000.00      |
| 2024-05-12 |      1.000 | $80,000.00     | $80,000.00      |
| 2024-03-31 |      0.727 | $80,000.00     | $58,157.43      |
| 2024-02-11 |      0.400 | $10,000.00     | $3,998.75       |
| 2024-01-28 |      0.307 | $22,500.00     | $6,899.54       |
| 2023-12-17 |      0.026 | $500,000.00    | $12,820.95      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
