### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: Brollan, es3tag, hampus, Plopski, REZ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [105](../standings_global.md)<br />
Regional Rank: [75]( ../standings_europe.md)<br />
Final Rank Value:  784.5<br />
<br />
Final Rank Value (784.5) = Starting Rank Value (773.8) + Head To Head Adjustments (10.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.353[<sup>1</sup>](#table2)
- Bounty Collected: 0.321[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.042[<sup>2</sup>](#table1)

The average of these factors is 0.183<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 773.8
- 400 + ( ( 0.183 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 773.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     3282 | 2022-09-04 | Natus Vincere | W   | 0.127      | 0.922        | 0.358 (0.042)    | 0.372 (0.044)    | 1 (0.127) |     3.98 | Brollan, es3tag, hampus, Plopski, REZ |
|           10 |     3335 | 2022-09-03 | Endpoint      | W   | 0.118      | 0.922        | 0.033 (0.004)    | 0.641 (0.070)    | 1 (0.118) |     2.46 | Brollan, es3tag, hampus, Plopski, REZ |
|            9 |     3360 | 2022-09-02 | Spirit        | L   | 0.112      | -            | -                | -                | -         |    -0.13 | Brollan, es3tag, hampus, Plopski, REZ |
|            8 |     3381 | 2022-09-01 | Vitality      | L   | 0.107      | -            | -                | -                | -         |    -0.04 | Brollan, es3tag, hampus, Plopski, REZ |
|            7 |     3414 | 2022-08-31 | fnatic        | L   | 0.100      | -            | -                | -                | -         |    -0.06 | Brollan, es3tag, hampus, Plopski, REZ |
|            6 |     3469 | 2022-08-28 | Heroic        | W   | 0.080      | 0.571        | 0.608 (0.028)    | 0.560 (0.025)    | 1 (0.080) |     2.50 | Brollan, es3tag, hampus, Plopski, REZ |
|            5 |     3564 | 2022-08-26 | Liquid        | L   | 0.066      | -            | -                | -                | -         |    -0.01 | Brollan, es3tag, hampus, Plopski, REZ |
|            4 |     3576 | 2022-08-25 | Evil Geniuses | W   | 0.059      | 0.571        | 0.062 (0.002)    | 0.234 (0.008)    | 1 (0.059) |     1.54 | Brollan, es3tag, hampus, Plopski, REZ |
|            3 |     3739 | 2022-08-19 | Astralis      | L   | 0.019      | -            | -                | -                | -         |    -0.03 | Brollan, es3tag, hampus, Plopski, REZ |
|            2 |     3741 | 2022-08-19 | Vitality      | L   | 0.019      | -            | -                | -                | -         |    -0.01 | Brollan, es3tag, hampus, Plopski, REZ |
|            1 |     3742 | 2022-08-19 | Astralis      | W   | 0.018      | 0.571        | 0.149 (0.002)    | 0.538 (0.006)    | 1 (0.018) |     0.55 | Brollan, es3tag, hampus, Plopski, REZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,910.56)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-10-02 |      0.314 | $17,500.00     | $5,495.69       |
| 2022-08-28 |      0.081 | $17,500.00     | $1,414.87       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
