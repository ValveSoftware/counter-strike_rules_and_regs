### Roster Details<br />
Team Name: Sangal<br />
Roster: Ganginho, kyuubii, LNZ, sausol, yxngstxr<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [205](../standings_global.md)<br />
Regional Rank: [125]( ../standings_europe.md)<br />
Final Rank Value:  509.4<br />
<br />
Final Rank Value (509.4) = Starting Rank Value (497.7) + Head To Head Adjustments (11.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.197[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 497.7
- 400 + ( ( 0.051 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 497.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     3135 | 2023-11-21 | B8            | W   | 0.180      | 0.500        | 0.001 (0.000)    | 0.081 (0.007)    | 0 (0.000) |     3.96 | Ganginho, kyuubii, LNZ, sausol, yxngstxr |
|           11 |     3206 | 2023-11-18 | BetBoom       | L   | 0.159      | -            | -                | -                | -         |    -0.08 | Ganginho, kyuubii, LNZ, sausol, yxngstxr |
|           10 |     3366 | 2023-11-12 | IKLA          | W   | 0.120      | 0.500        | 0.000 (0.000)    | 0.205 (0.012)    | 0 (0.000) |     2.29 | kyuubii, LNZ, PANIX, sausol, yxngstxr    |
|            9 |     3372 | 2023-11-12 | Zero Tenacity | W   | 0.119      | 0.358        | 0.008 (0.000)    | 0.805 (0.034)    | 0 (0.000) |     3.15 | kyuubii, LNZ, PANIX, sausol, yxngstxr    |
|            8 |     3547 | 2023-11-04 | ARCRED        | W   | 0.065      | 0.358        | 0.008 (0.000)    | 0.164 (0.004)    | 0 (0.000) |     1.53 | kyuubii, LNZ, PANIX, sausol, yxngstxr    |
|            7 |     3585 | 2023-11-02 | Zero Tenacity | L   | 0.052      | -            | -                | -                | -         |    -0.26 | kyuubii, LNZ, PANIX, sausol, yxngstxr    |
|            6 |     3628 | 2023-10-31 | Sprout        | L   | 0.040      | -            | -                | -                | -         |    -0.27 | kyuubii, LNZ, sausol, stikle-, yxngstxr  |
|            5 |     3702 | 2023-10-29 | UNiTY         | W   | 0.027      | 0.143        | 0.047 (0.000)    | 0.261 (0.001)    | 0 (0.000) |     0.74 | kyuubii, LNZ, PANIX, sausol, yxngstxr    |
|            4 |     3713 | 2023-10-29 | PARIVISION    | W   | 0.026      | 0.143        | 0.002 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     0.58 | kyuubii, LNZ, PANIX, sausol, yxngstxr    |
|            3 |     3759 | 2023-10-28 | Zero Tenacity | L   | 0.018      | -            | -                | -                | -         |    -0.09 | kyuubii, LNZ, PANIX, sausol, yxngstxr    |
|            2 |     3800 | 2023-10-27 | Preasy        | L   | 0.011      | -            | -                | -                | -         |    -0.02 | kyuubii, LNZ, PANIX, sausol, yxngstxr    |
|            1 |     3824 | 2023-10-26 | UNiTY         | W   | 0.005      | 0.143        | 0.047 (0.000)    | 0.261 (0.000)    | 0 (0.000) |     0.14 | kyuubii, LNZ, PANIX, sausol, yxngstxr    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
