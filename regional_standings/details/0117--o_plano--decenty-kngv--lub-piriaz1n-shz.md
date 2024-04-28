### Roster Details<br />
Team Name: O PLANO<br />
Roster: decenty, kNgV-, lub, piriaz1n, shz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [117](../standings_global.md)<br />
Regional Rank: [31]( ../standings_americas.md)<br />
Final Rank Value:  757.9<br />
<br />
Final Rank Value (757.9) = Starting Rank Value (702.8) + Head To Head Adjustments (55.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.305[<sup>1</sup>](#table2)
- Bounty Collected: 0.249[<sup>2</sup>](#table1)
- Opponent Network: 0.038[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.148<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 702.8
- 400 + ( ( 0.148 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 702.8


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
|           12 |       29 | 2023-02-11 | Boca Juniors  | W   | 1.000      | 0.333        | 0.005 (0.002)    | 0.200 (0.067)    | 0 (0.000) |    12.23 | decenty, kNgV-, lub, piriaz1n, shz    |
|           11 |       48 | 2023-02-10 | FURIA Academy | L   | 1.000      | -            | -                | -                | -         |   -16.06 | decenty, kNgV-, lub, piriaz1n, shz    |
|           10 |      160 | 2023-02-04 | Fluxo         | L   | 1.000      | -            | -                | -                | -         |    -8.50 | decenty, kNgV-, lub, piriaz1n, shz    |
|            9 |      189 | 2023-02-03 | FURIA Academy | W   | 1.000      | 0.384        | 0.004 (0.002)    | 0.278 (0.107)    | 0 (0.000) |    15.03 | decenty, kNgV-, lub, piriaz1n, shz    |
|            8 |      217 | 2023-02-02 | RED Canids    | W   | 1.000      | 0.384        | 0.001 (0.000)    | 0.178 (0.068)    | 0 (0.000) |    14.61 | decenty, kNgV-, lub, piriaz1n, shz    |
|            7 |      361 | 2023-01-27 | Flamengo      | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.288 (0.041)    | 0 (0.000) |    16.26 | decenty, kNgV-, lub, piriaz1n, shz    |
|            6 |      369 | 2023-01-27 | Sharks        | W   | 1.000      | 0.143        | 0.017 (0.002)    | 0.439 (0.063)    | 0 (0.000) |    20.96 | decenty, kNgV-, lub, piriaz1n, shz    |
|            5 |      375 | 2023-01-27 | Imperial      | W   | 1.000      | 0.143        | 0.022 (0.003)    | 0.254 (0.036)    | 0 (0.000) |    24.27 | decenty, kNgV-, lub, piriaz1n, shz    |
|            4 |      393 | 2023-01-26 | NOISEOTREM    | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.45 | decenty, kNgV-, lub, piriaz1n, shz    |
|            3 |      636 | 2023-01-17 | Flamengo      | L   | 1.000      | -            | -                | -                | -         |   -15.81 | decenty, kNgV-, lub, piriaz1n, shz    |
|            2 |      999 | 2022-12-09 | 00NATION      | L   | 0.768      | -            | -                | -                | -         |    -6.63 | caike, decenty, kNgV-, lukz, piriaz1n |
|            1 |     1006 | 2022-12-09 | 00NATION      | L   | 0.768      | -            | -                | -                | -         |    -6.66 | caike, decenty, kNgV-, lukz, piriaz1n |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,500.00)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
