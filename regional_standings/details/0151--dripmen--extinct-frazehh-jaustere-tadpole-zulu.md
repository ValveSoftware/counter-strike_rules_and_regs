### Roster Details<br />
Team Name: Dripmen<br />
Roster: Extinct, Frazehh, JAUSTERE, Tadpole, Zulu<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [151](../standings_global.md)<br />
Regional Rank: [100]( ../standings_europe.md)<br />
Final Rank Value:  707.6<br />
<br />
Final Rank Value (707.6) = Starting Rank Value (692.5) + Head To Head Adjustments (15.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.279[<sup>1</sup>](#table2)
- Bounty Collected: 0.231[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.050[<sup>2</sup>](#table1)

The average of these factors is 0.143<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 692.5
- 400 + ( ( 0.143 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 692.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      404 | 2023-01-26 | Viperio              | L   | 1.000      | -            | -                | -                | -         |   -15.59 | Extinct, Frazehh, JAUSTERE, Tadpole, Zulu |
|           14 |      418 | 2023-01-26 | ENCE Academy         | W   | 1.000      | 0.143        | 0.010 (0.001)    | 0.239 (0.034)    | 0 (0.000) |    14.67 | Extinct, Frazehh, JAUSTERE, Tadpole, Zulu |
|           13 |      445 | 2023-01-25 | Viperio              | L   | 1.000      | -            | -                | -                | -         |   -15.55 | Extinct, Frazehh, JAUSTERE, Tadpole, Zulu |
|           12 |      764 | 2022-12-18 | Coalesce             | W   | 0.828      | 0.277        | 0.008 (0.002)    | 0.315 (0.072)    | 0 (0.000) |    13.31 | Extinct, Frazehh, JAUSTERE, Tadpole, Zulu |
|           11 |      784 | 2022-12-18 | MILF                 | W   | 0.826      | 0.277        | 0.000 (0.000)    | 0.034 (0.008)    | 0 (0.000) |    10.56 | Extinct, Frazehh, JAUSTERE, Tadpole, Zulu |
|           10 |      821 | 2022-12-17 | ROYALS               | W   | 0.819      | 0.277        | 0.006 (0.001)    | 0.034 (0.008)    | 0 (0.000) |    11.60 | Extinct, Frazehh, JAUSTERE, Tadpole, Zulu |
|            9 |     3123 | 2022-09-10 | Davenport University | L   | 0.167      | -            | -                | -                | -         |    -2.31 | CoJoMo, corn, Pugg, spek, swicher         |
|            8 |     3140 | 2022-09-10 | ATK                  | L   | 0.166      | -            | -                | -                | -         |    -1.00 | DeXter, Frazehh, husky, JAUSTERE, Zulu    |
|            7 |     3156 | 2022-09-09 | 7AM                  | W   | 0.161      | 0.143        | 0.000 (0.000)    | 0.048 (0.001)    | 1 (0.161) |     1.44 | 1Knas, LVN, Vacancy, yz0, zyyx            |
|            6 |     3171 | 2022-09-09 | Zenigma              | W   | 0.160      | 0.143        | 0.000 (0.000)    | 0.007 (0.000)    | 1 (0.160) |     1.26 | DeXter, Frazehh, husky, JAUSTERE, Zulu    |
|            5 |     3185 | 2022-09-09 | Revel                | W   | 0.159      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.159) |     0.83 | A1pha, Jachro, Lysander, Shag, vtR        |
|            4 |     3215 | 2022-09-08 | TeamOne              | L   | 0.154      | -            | -                | -                | -         |    -1.17 | DeXter, Frazehh, husky, JAUSTERE, Zulu    |
|            3 |     3294 | 2022-09-04 | Into the Bin         | L   | 0.125      | -            | -                | -                | -         |    -2.20 | DeXter, Frazehh, husky, JAUSTERE, Zulu    |
|            2 |     3331 | 2022-09-03 | 7AM                  | W   | 0.118      | 0.275        | 0.000 (0.000)    | 0.048 (0.002)    | 0 (0.000) |     1.05 | 1Knas, LVN, Vacancy, yz0, zyyx            |
|            1 |     3434 | 2022-08-30 | EKO                  | L   | 0.093      | -            | -                | -                | -         |    -1.78 | DeXter, Frazehh, husky, JAUSTERE, Zulu    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,218.39)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
