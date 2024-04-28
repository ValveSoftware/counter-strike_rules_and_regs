### Roster Details<br />
Team Name: Rooster<br />
Roster: ADK, asap, chelleos, nettik, TjP<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [147](../standings_global.md)<br />
Regional Rank: [9]( ../standings_asia.md)<br />
Final Rank Value:  717.7<br />
<br />
Final Rank Value (717.7) = Starting Rank Value (683.7) + Head To Head Adjustments (34.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.305[<sup>1</sup>](#table2)
- Bounty Collected: 0.231[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.139<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 683.7
- 400 + ( ( 0.139 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 683.7


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
|           17 |      577 | 2023-01-20 | Hello Kitten  | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.124 (0.018)    | 0 (0.000) |     8.84 | ADK, asap, chelleos, nettik, TjP      |
|           16 |      604 | 2023-01-19 | Grayhound     | L   | 1.000      | -            | -                | -                | -         |    -8.80 | ADK, asap, chelleos, nettik, TjP      |
|           15 |      629 | 2023-01-18 | Hello Kitten  | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.124 (0.018)    | 0 (0.000) |     9.17 | ADK, asap, chelleos, nettik, TjP      |
|           14 |     1194 | 2022-12-04 | Grayhound     | L   | 0.730      | -            | -                | -                | -         |    -6.63 | ADK, asap, chelleos, nettik, TjP      |
|           13 |     1234 | 2022-12-03 | VERTEX        | W   | 0.724      | 0.350        | 0.014 (0.003)    | 0.208 (0.053)    | 0 (0.000) |    12.62 | ADK, asap, chelleos, nettik, TjP      |
|           12 |     1237 | 2022-12-03 | Encore        | W   | 0.723      | 0.350        | 0.003 (0.001)    | 0.062 (0.016)    | 0 (0.000) |    10.50 | ADK, asap, chelleos, nettik, TjP      |
|           11 |     1262 | 2022-12-02 | e-LEMON-ators | W   | 0.717      | 0.350        | 0.001 (0.000)    | 0.121 (0.030)    | 0 (0.000) |     9.53 | ADK, asap, chelleos, nettik, TjP      |
|           10 |     1288 | 2022-12-01 | VERTEX        | L   | 0.711      | -            | -                | -                | -         |    -9.23 | ADK, asap, chelleos, nettik, TjP      |
|            9 |     1316 | 2022-11-30 | Antic         | W   | 0.703      | 0.350        | 0.001 (0.000)    | 0.088 (0.022)    | 0 (0.000) |     8.37 | ADK, asap, chelleos, nettik, TjP      |
|            8 |     1632 | 2022-11-16 | God's Work    | W   | 0.610      | 0.350        | 0.000 (0.000)    | 0.097 (0.021)    | 0 (0.000) |     4.97 | ADK, asap, chelleos, nettik, TjP      |
|            7 |     2271 | 2022-10-12 | VERTEX        | L   | 0.377      | -            | -                | -                | -         |    -5.01 | asap, chelleos, dangeR, TjP, viridian |
|            6 |     2531 | 2022-09-29 | Dynasty       | W   | 0.291      | 0.350        | 0.000 (0.000)    | 0.025 (0.003)    | 0 (0.000) |     1.59 | asap, chelleos, dangeR, TjP, viridian |
|            5 |     2898 | 2022-09-17 | VERTEX        | L   | 0.211      | -            | -                | -                | -         |    -2.96 | asap, chelleos, dangeR, TjP, viridian |
|            4 |     3058 | 2022-09-12 | Stirlz Fans   | W   | 0.177      | 0.350        | 0.000 (0.000)    | 0.014 (0.001)    | 0 (0.000) |     0.94 | asap, chelleos, dangeR, TjP, viridian |
|            3 |     3151 | 2022-09-10 | e-LEMON-ators | W   | 0.164      | 0.143        | 0.001 (0.000)    | 0.121 (0.003)    | 0 (0.000) |     2.18 | asap, chelleos, dangeR, TjP, viridian |
|            2 |     3153 | 2022-09-10 | yellow        | W   | 0.164      | -            | -                | -                | -         |     0.88 | asap, chelleos, dangeR, TjP, viridian |
|            1 |     3154 | 2022-09-10 | e-LEMON-ators | L   | 0.163      | -            | -                | -                | -         |    -3.00 | asap, chelleos, dangeR, TjP, viridian |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,514.21)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
