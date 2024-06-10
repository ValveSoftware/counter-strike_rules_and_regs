### Roster Details<br />
Team Name: NAVI Javelins<br />
Roster: Angelka, Hanka, LETi, Liina, vicu<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [82](../standings_global.md)<br />
Regional Rank: [59]( ../standings_europe.md)<br />
Final Rank Value:  923.4<br />
<br />
Final Rank Value (923.4) = Starting Rank Value (864.1) + Head To Head Adjustments (59.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.419[<sup>1</sup>](#table2)
- Bounty Collected: 0.345[<sup>2</sup>](#table1)
- Opponent Network: 0.061[<sup>2</sup>](#table1)
- LAN Wins: 0.107[<sup>2</sup>](#table1)

The average of these factors is 0.233<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 864.1
- 400 + ( ( 0.233 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 864.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |      411 | 2024-06-01 | Fluxo Demons      | L   | 1.000      | -            | -                | -                | -         |   -16.19 | Angelka, Hanka, LETi, Liina, vicu |
|           20 |      443 | 2024-05-31 | TSM Shimmer       | W   | 1.000      | 0.524        | 0.025 (0.013)    | 0.269 (0.141)    | 1 (1.000) |     7.88 | Angelka, Hanka, LETi, Liina, vicu |
|           19 |      456 | 2024-05-31 | Let Her Cook      | L   | 1.000      | -            | -                | -                | -         |   -15.87 | Angelka, Hanka, LETi, Liina, vicu |
|           18 |      766 | 2024-05-19 | Imperial fe       | W   | 1.000      | 0.281        | 0.178 (0.050)    | 0.393 (0.111)    | 0 (0.000) |    22.38 | Angelka, Hanka, LETi, Liina, vicu |
|           17 |      772 | 2024-05-19 | BIG EQUIPA        | W   | 1.000      | 0.281        | 0.025 (0.007)    | 0.295 (0.083)    | 0 (0.000) |    12.01 | Angelka, Hanka, LETi, Liina, vicu |
|           16 |      802 | 2024-05-18 | Spirit fe         | W   | 1.000      | 0.281        | 0.005 (0.001)    | 0.065 (0.018)    | 0 (0.000) |     5.17 | Angelka, Hanka, LETi, Liina, vicu |
|           15 |     1537 | 2024-04-19 | Crescent fe       | W   | 0.853      | 0.331        | 0.007 (0.002)    | 0.122 (0.035)    | 0 (0.000) |     5.04 | Angelka, Hanka, LETi, Liina, vicu |
|           14 |     1664 | 2024-04-16 | Imperial fe       | W   | 0.833      | 0.303        | 0.178 (0.045)    | 0.393 (0.099)    | 0 (0.000) |    20.10 | Angelka, Hanka, LETi, Liina, vicu |
|           13 |     1685 | 2024-04-15 | NIP Impact        | W   | 0.826      | 0.303        | 0.006 (0.001)    | 0.197 (0.049)    | 0 (0.000) |     9.18 | Angelka, Hanka, LETi, Liina, vicu |
|           12 |     1703 | 2024-04-14 | Astralis W        | W   | 0.819      | -            | -                | -                | 0 (0.000) |     4.92 | Angelka, Hanka, LETi, Liina, vicu |
|           11 |     1716 | 2024-04-13 | Imperial fe       | L   | 0.812      | -            | -                | -                | -         |    -5.48 | Angelka, Hanka, LETi, Liina, vicu |
|           10 |     1757 | 2024-04-11 | Spirit fe         | W   | 0.799      | 0.303        | 0.005 (0.001)    | -                | 0 (0.000) |     5.53 | Angelka, Hanka, LETi, Liina, vicu |
|            9 |     1858 | 2024-04-09 | NIP Impact        | L   | 0.786      | -            | -                | -                | -         |   -16.50 | Angelka, Hanka, LETi, Liina, vicu |
|            8 |     1980 | 2024-04-04 | Spirit fe         | W   | 0.754      | 0.331        | 0.005 (0.001)    | 0.065 (0.016)    | 0 (0.000) |     5.33 | Angelka, Hanka, LETi, Liina, vicu |
|            7 |     2019 | 2024-04-03 | Let Her Cook      | L   | 0.747      | -            | -                | -                | -         |    -9.11 | Angelka, Hanka, LETi, Liina, vicu |
|            6 |     2397 | 2024-03-14 | 1WIN Gang         | W   | 0.613      | -            | -                | -                | -         |     4.28 | Angelka, Hanka, LETi, Liina, vicu |
|            5 |     2599 | 2024-03-06 | Fearless Cheetahs | W   | 0.561      | 0.331        | -                | 0.121 (0.022)    | -         |     4.96 | Angelka, Hanka, LETi, Liina, vicu |
|            4 |     2820 | 2024-02-25 | BIG EQUIPA        | W   | 0.493      | 0.238        | 0.025 (0.003)    | 0.295 (0.035)    | -         |     6.55 | Angelka, Hanka, LETi, Liina, vicu |
|            3 |     2824 | 2024-02-25 | ENCE Athena       | W   | 0.492      | -            | -                | -                | -         |     3.75 | Angelka, Hanka, LETi, Liina, vicu |
|            2 |     2858 | 2024-02-24 | Crescent fe       | W   | 0.485      | -            | -                | -                | -         |     3.99 | Angelka, Hanka, LETi, Liina, vicu |
|            1 |     3237 | 2024-02-04 | VIOLET            | W   | 0.353      | -            | -                | -                | -         |     1.34 | Angelka, Hanka, LETi, Liina, vicu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,492.36)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-05-19 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-04-16 |      0.833 | $3,500.00      | $2,917.02       |
| 2024-02-25 |      0.493 | $630.00        | $310.43         |
| 2024-02-04 |      0.353 | $750.00        | $264.91         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
