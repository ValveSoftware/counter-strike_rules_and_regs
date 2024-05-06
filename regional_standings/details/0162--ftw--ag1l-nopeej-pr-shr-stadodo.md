### Roster Details<br />
Team Name: FTW<br />
Roster: Ag1l, NOPEEJ, pr, Shr, stadodo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [162](../standings_global.md)<br />
Regional Rank: [105]( ../standings_europe.md)<br />
Final Rank Value:  639.4<br />
<br />
Final Rank Value (639.4) = Starting Rank Value (638.4) + Head To Head Adjustments (1.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.271[<sup>1</sup>](#table2)
- Bounty Collected: 0.214[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.015[<sup>2</sup>](#table1)

The average of these factors is 0.125<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 638.4
- 400 + ( ( 0.125 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 638.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     3394 | 2023-11-24 | Rhyno       | L   | 0.105      | -            | -                | -                | -         |    -1.19 | Ag1l, NOPEEJ, pr, Shr, stadodo |
|            9 |     3465 | 2023-11-19 | Rhyno       | L   | 0.073      | -            | -                | -                | -         |    -0.83 | Ag1l, NOPEEJ, pr, Shr, stadodo |
|            8 |     3486 | 2023-11-18 | Rhyno       | W   | 0.067      | 0.337        | 0.015 (0.000)    | 0.130 (0.003)    | 1 (0.067) |     1.35 | Ag1l, NOPEEJ, pr, Shr, stadodo |
|            7 |     3504 | 2023-11-18 | Los Alpacas | W   | 0.065      | 0.337        | 0.002 (0.000)    | 0.003 (0.000)    | 1 (0.065) |     0.91 | Ag1l, NOPEEJ, pr, Shr, stadodo |
|            6 |     3518 | 2023-11-17 | FORZE       | L   | 0.060      | -            | -                | -                | -         |    -0.65 | Ag1l, NOPEEJ, pr, Shr, stadodo |
|            5 |     3562 | 2023-11-16 | Apeks       | W   | 0.052      | 0.143        | 0.237 (0.002)    | 0.667 (0.005)    | 0 (0.000) |     1.62 | Ag1l, NOPEEJ, pr, Shr, stadodo |
|            4 |     3592 | 2023-11-15 | INGLORIOUS  | W   | 0.047      | 0.143        | 0.000 (0.000)    | 0.073 (0.000)    | 0 (0.000) |     0.61 | Ag1l, NOPEEJ, pr, Shr, stadodo |
|            3 |     3598 | 2023-11-15 | PARTIZAN    | W   | 0.046      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.31 | Ag1l, NOPEEJ, pr, Shr, stadodo |
|            2 |     3637 | 2023-11-13 | Pompa       | L   | 0.034      | -            | -                | -                | -         |    -0.73 | Ag1l, NOPEEJ, pr, Shr, stadodo |
|            1 |     3675 | 2023-11-12 | PERA        | L   | 0.025      | -            | -                | -                | -         |    -0.41 | Ag1l, NOPEEJ, pr, Shr, stadodo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($328.37)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-11-25 |      0.113 | $1,358.00      | $152.84         |
| 2023-11-19 |      0.073 | $2,409.00      | $175.53         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
