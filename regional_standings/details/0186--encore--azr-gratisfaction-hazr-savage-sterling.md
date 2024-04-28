### Roster Details<br />
Team Name: Encore<br />
Roster: AZR, Gratisfaction, hazr, SaVage, sterling<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [186](../standings_global.md)<br />
Regional Rank: [14]( ../standings_asia.md)<br />
Final Rank Value:  632.1<br />
<br />
Final Rank Value (632.1) = Starting Rank Value (627.2) + Head To Head Adjustments (4.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.286[<sup>1</sup>](#table2)
- Bounty Collected: 0.157[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.111<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 627.2
- 400 + ( ( 0.111 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 627.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     2096 | 2022-10-17 | KRAKEN        | W   | 0.410      | 0.350        | 0.000 (0.000)    | 0.011 (0.002)    | 0 (0.000) |     2.83 | AZR, Gratisfaction, hazr, SaVage, sterling |
|           10 |     2819 | 2022-09-20 | Grayhound     | L   | 0.231      | -            | -                | -                | -         |    -1.80 | AZR, Gratisfaction, hazr, SaVage, sterling |
|            9 |     2900 | 2022-09-17 | Grayhound     | L   | 0.210      | -            | -                | -                | -         |    -1.64 | AZR, Gratisfaction, hazr, SaVage, sterling |
|            8 |     3041 | 2022-09-13 | God's Work    | W   | 0.184      | 0.350        | 0.000 (0.000)    | 0.097 (0.006)    | 0 (0.000) |     1.77 | AZR, Gratisfaction, hazr, SaVage, sterling |
|            7 |     3092 | 2022-09-11 | Antic         | W   | 0.171      | 0.143        | 0.001 (0.000)    | 0.088 (0.002)    | 0 (0.000) |     2.56 | AZR, Gratisfaction, hazr, SaVage, sterling |
|            6 |     3093 | 2022-09-11 | VERTEX        | L   | 0.171      | -            | -                | -                | -         |    -2.02 | AZR, Gratisfaction, hazr, SaVage, sterling |
|            5 |     3096 | 2022-09-10 | Antic         | W   | 0.170      | 0.143        | 0.001 (0.000)    | 0.088 (0.002)    | 0 (0.000) |     2.55 | AZR, Gratisfaction, hazr, SaVage, sterling |
|            4 |     3480 | 2022-08-28 | Grayhound     | L   | 0.079      | -            | -                | -                | -         |    -0.60 | AZR, Gratisfaction, hazr, SaVage, sterling |
|            3 |     3486 | 2022-08-28 | e-LEMON-ators | W   | 0.077      | 0.143        | 0.001 (0.000)    | 0.121 (0.001)    | 0 (0.000) |     1.21 | AZR, Gratisfaction, hazr, SaVage, sterling |
|            2 |     3540 | 2022-08-27 | Rooster       | W   | 0.071      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.49 | AZR, Gratisfaction, hazr, SaVage, sterling |
|            1 |     3545 | 2022-08-27 | Grayhound     | L   | 0.071      | -            | -                | -                | -         |    -0.54 | AZR, Gratisfaction, hazr, SaVage, sterling |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,508.24)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
