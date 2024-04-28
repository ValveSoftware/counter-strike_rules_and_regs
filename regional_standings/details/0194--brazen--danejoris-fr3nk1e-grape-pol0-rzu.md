### Roster Details<br />
Team Name: Brazen<br />
Roster: Danejoris, Fr3nk1e, grape, Pol0, RZU<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [194](../standings_global.md)<br />
Regional Rank: [58]( ../standings_americas.md)<br />
Final Rank Value:  616.3<br />
<br />
Final Rank Value (616.3) = Starting Rank Value (632.6) + Head To Head Adjustments (-16.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.261[<sup>1</sup>](#table2)
- Bounty Collected: 0.192[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.114<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 632.6
- 400 + ( ( 0.114 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 632.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |     2028 | 2022-10-19 | TeamOne              | L   | 0.429      | -            | -                | -                | -         |    -2.37 | Danejoris, Fr3nk1e, grape, Pol0, RZU  |
|           17 |     2053 | 2022-10-18 | ATK                  | L   | 0.422      | -            | -                | -                | -         |    -1.84 | Danejoris, Fr3nk1e, grape, Pol0, RZU  |
|           16 |     2508 | 2022-09-29 | REIGN                | L   | 0.296      | -            | -                | -                | -         |    -4.39 | Danejoris, Fr3nk1e, grape, Pol0, RZU  |
|           15 |     2539 | 2022-09-28 | Mythic               | L   | 0.288      | -            | -                | -                | -         |    -3.86 | Danejoris, Fr3nk1e, grape, JAM, RZU   |
|           14 |     2573 | 2022-09-27 | EG Black             | L   | 0.282      | -            | -                | -                | -         |    -1.87 | Danejoris, Fr3nk1e, grape, Pol0, RZU  |
|           13 |     2680 | 2022-09-23 | TeamOne              | L   | 0.256      | -            | -                | -                | -         |    -1.38 | Danejoris, Fr3nk1e, grape, Pol0, RZU  |
|           12 |     2683 | 2022-09-23 | ATK                  | L   | 0.255      | -            | -                | -                | -         |    -1.18 | Danejoris, Fr3nk1e, grape, Pol0, RZU  |
|           11 |     2730 | 2022-09-22 | Phantom Troupe       | W   | 0.249      | 0.435        | 0.001 (0.000)    | 0.047 (0.005)    | 0 (0.000) |     3.98 | Danejoris, grape, Infinite, Pol0, RZU |
|           10 |     2770 | 2022-09-21 | MIBR                 | L   | 0.242      | -            | -                | -                | -         |    -0.86 | Danejoris, grape, Infinite, Pol0, RZU |
|            9 |     2983 | 2022-09-14 | timbermen            | L   | 0.195      | -            | -                | -                | -         |    -1.72 | Danejoris, grape, Infinite, Pol0, RZU |
|            8 |     3229 | 2022-09-07 | Unjustified          | W   | 0.148      | 0.435        | 0.000 (0.000)    | 0.014 (0.001)    | 0 (0.000) |     1.57 | Danejoris, grape, Infinite, Pol0, RZU |
|            7 |     3302 | 2022-09-03 | Unjustified          | L   | 0.122      | -            | -                | -                | -         |    -2.57 | Danejoris, grape, Infinite, Pol0, RZU |
|            6 |     3399 | 2022-08-31 | Vendetta             | L   | 0.102      | -            | -                | -                | -         |    -1.28 | Danejoris, grape, Infinite, Pol0, RZU |
|            5 |     3423 | 2022-08-30 | Davenport University | W   | 0.095      | 0.435        | 0.014 (0.001)    | 0.227 (0.009)    | 0 (0.000) |     1.93 | Danejoris, grape, Infinite, Pol0, RZU |
|            4 |     3455 | 2022-08-28 | timbermen            | L   | 0.082      | -            | -                | -                | -         |    -0.72 | Danejoris, grape, Infinite, Pol0, RZU |
|            3 |     3667 | 2022-08-21 | Electrify Steel      | W   | 0.035      | 0.303        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.23 | Danejoris, grape, Infinite, Pol0, RZU |
|            2 |     3773 | 2022-08-16 | Nouns                | L   | 0.002      | -            | -                | -                | -         |    -0.02 | Danejoris, grape, Pol0, RZU, xCeeD    |
|            1 |     3787 | 2022-08-16 | Kari                 | W   | 0.001      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.01 | Danejoris, grape, Pol0, RZU, xCeeD    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($691.72)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-10-23 |      0.455 | $1,250.00      | $569.17         |
| 2022-08-28 |      0.082 | $1,500.00      | $122.55         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
