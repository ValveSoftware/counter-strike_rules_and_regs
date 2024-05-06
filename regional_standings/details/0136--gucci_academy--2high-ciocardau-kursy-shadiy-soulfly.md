### Roster Details<br />
Team Name: Gucci Academy<br />
Roster: 2high, Ciocardau, Kursy, shadiy, soulfly<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [136](../standings_global.md)<br />
Regional Rank: [92]( ../standings_europe.md)<br />
Final Rank Value:  724.8<br />
<br />
Final Rank Value (724.8) = Starting Rank Value (729.1) + Head To Head Adjustments (-4.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.327[<sup>1</sup>](#table2)
- Bounty Collected: 0.292[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.055[<sup>2</sup>](#table1)

The average of these factors is 0.173<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 729.1
- 400 + ( ( 0.173 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 729.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     2575 | 2024-01-17 | Into the Breach | L   | 0.468      | -            | -                | -                | -         |    -6.18 | 2high, Ciocardau, Kursy, shadiy, soulfly |
|           13 |     2637 | 2024-01-16 | Rebels          | L   | 0.460      | -            | -                | -                | -         |    -1.37 | 2high, Ciocardau, Kursy, shadiy, soulfly |
|           12 |     2772 | 2024-01-12 | Nexus           | L   | 0.434      | -            | -                | -                | -         |    -4.02 | 2high, Ciocardau, Kursy, shadiy, soulfly |
|           11 |     2823 | 2024-01-11 | Space           | L   | 0.426      | -            | -                | -                | -         |    -6.69 | 2high, Ciocardau, Kursy, shadiy, soulfly |
|           10 |     2830 | 2024-01-10 | Zero Tenacity   | W   | 0.421      | 0.143        | 0.093 (0.006)    | 0.936 (0.056)    | 0 (0.000) |     9.97 | 2high, Ciocardau, Kursy, shadiy, soulfly |
|            9 |     2944 | 2023-12-19 | PERA            | L   | 0.272      | -            | -                | -                | -         |    -2.45 | 2high, adeX, Ciocardau, Goody, shadiy    |
|            8 |     2948 | 2023-12-19 | GUN5            | L   | 0.271      | -            | -                | -                | -         |    -5.75 | 2high, adeX, Ciocardau, Goody, shadiy    |
|            7 |     3247 | 2023-12-03 | VERYGOLD        | W   | 0.166      | 0.292        | 0.001 (0.000)    | 0.007 (0.000)    | 1 (0.166) |     1.66 | 2high, adeX, Ciocardau, Goody, shadiy    |
|            6 |     3251 | 2023-12-03 | Sympa la force  | W   | 0.165      | 0.292        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.165) |     1.13 | 2high, adeX, Ciocardau, Goody, shadiy    |
|            5 |     3253 | 2023-12-03 | RGW             | W   | 0.164      | 0.292        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.164) |     0.68 | 2high, adeX, Ciocardau, Goody, shadiy    |
|            4 |     3349 | 2023-11-26 | BetBoom         | W   | 0.119      | 0.358        | 0.563 (0.024)    | 1.000 (0.043)    | 0 (0.000) |     3.68 | 2high, adeX, Ciocardau, Goody, shadiy    |
|            3 |     3371 | 2023-11-25 | Metizport       | W   | 0.112      | 0.358        | 0.183 (0.007)    | 1.000 (0.040)    | 0 (0.000) |     2.95 | 2high, adeX, Ciocardau, Goody, shadiy    |
|            2 |     3497 | 2023-11-18 | Guild Eagles    | W   | 0.066      | 0.358        | 0.035 (0.001)    | 0.648 (0.015)    | 0 (0.000) |     1.72 | 2high, adeX, Ciocardau, Goody, shadiy    |
|            1 |     3704 | 2023-11-11 | Alliance        | W   | 0.019      | 0.358        | 0.016 (0.000)    | 0.815 (0.006)    | 0 (0.000) |     0.43 | 2high, adeX, Ciocardau, Goody, shadiy    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,430.33)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-03 |      0.166 | $2,180.00      | $360.90         |
| 2023-11-26 |      0.119 | $9,000.00      | $1,069.43       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
