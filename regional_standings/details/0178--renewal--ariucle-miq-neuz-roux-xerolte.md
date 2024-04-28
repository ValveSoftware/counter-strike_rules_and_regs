### Roster Details<br />
Team Name: Renewal<br />
Roster: ariucle, MiQ, NEUZ, ROUX, xerolte<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [178](../standings_global.md)<br />
Regional Rank: [13]( ../standings_asia.md)<br />
Final Rank Value:  644.6<br />
<br />
Final Rank Value (644.6) = Starting Rank Value (674.7) + Head To Head Adjustments (-30.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.274[<sup>1</sup>](#table2)
- Bounty Collected: 0.256[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.134<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 674.7
- 400 + ( ( 0.134 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 674.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      356 | 2023-01-28 | Eruption    | L   | 1.000      | -            | -                | -                | -         |    -7.90 | ariucle, MiQ, NEUZ, ROUX, xerolte    |
|           12 |      413 | 2023-01-26 | IHC         | L   | 1.000      | -            | -                | -                | -         |    -1.66 | ariucle, MiQ, NEUZ, ROUX, xerolte    |
|           11 |      420 | 2023-01-26 | Lynn Vision | L   | 1.000      | -            | -                | -                | -         |    -6.17 | ariucle, MiQ, NEUZ, ROUX, xerolte    |
|           10 |      456 | 2023-01-25 | NKT         | L   | 1.000      | -            | -                | -                | -         |    -7.56 | ariucle, MiQ, NEUZ, ROUX, xerolte    |
|            9 |      475 | 2023-01-24 | NKT         | W   | 1.000      | 0.143        | 0.024 (0.003)    | 0.236 (0.034)    | 0 (0.000) |    24.50 | ariucle, MiQ, NEUZ, ROUX, xerolte    |
|            8 |      481 | 2023-01-24 | Rare Atom   | W   | 1.000      | 0.143        | 0.062 (0.009)    | 0.228 (0.033)    | 0 (0.000) |    25.94 | ariucle, MiQ, NEUZ, ROUX, xerolte    |
|            7 |      533 | 2023-01-22 | Kintsugi    | L   | 1.000      | -            | -                | -                | -         |   -21.01 | ariucle, MiQ, NEUZ, Tugu, xerolte    |
|            6 |      748 | 2022-12-24 | TYLOO       | L   | 0.864      | -            | -                | -                | -         |   -11.21 | ariucle, MiQ, NEUZ, ROUX, xerolte    |
|            5 |      895 | 2022-12-14 | Wings Up    | L   | 0.799      | -            | -                | -                | -         |   -10.70 | ariucle, Kuroxy, NEUZ, Tugu, xerolte |
|            4 |      920 | 2022-12-13 | Lynn Vision | L   | 0.792      | -            | -                | -                | -         |    -5.87 | ariucle, Kuroxy, NEUZ, Tugu, xerolte |
|            3 |     2047 | 2022-10-19 | Lord Rabbit | L   | 0.425      | -            | -                | -                | -         |    -7.73 | Attacker, NEUZ, ROUX, Tugu, xerolte  |
|            2 |     2074 | 2022-10-18 | IHC         | L   | 0.418      | -            | -                | -                | -         |    -0.34 | Attacker, NEUZ, ROUX, Tugu, xerolte  |
|            1 |     3728 | 2022-08-20 | ARAVT       | L   | 0.025      | -            | -                | -                | -         |    -0.38 | MiQ, NEUZ, ROUX, Tugu, xerolte       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,075.05)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-01-29 |      1.000 | $500.00        | $500.00         |
| 2022-12-18 |      0.826 | $450.00        | $371.57         |
| 2022-10-23 |      0.452 | $450.00        | $203.48         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
