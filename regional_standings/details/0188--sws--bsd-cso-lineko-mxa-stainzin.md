### Roster Details<br />
Team Name: SWS<br />
Roster: bsd, CSO, lineko, mxa, stainzin<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [188](../standings_global.md)<br />
Regional Rank: [55]( ../standings_americas.md)<br />
Final Rank Value:  631.4<br />
<br />
Final Rank Value (631.4) = Starting Rank Value (656.3) + Head To Head Adjustments (-24.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.253[<sup>1</sup>](#table2)
- Bounty Collected: 0.238[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.125<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 656.3
- 400 + ( ( 0.125 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 656.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |     1160 | 2022-12-04 | 9z            | L   | 0.735      | -            | -                | -                | -         |    -3.77 | bsd, CSO, lineko, mxa, stainzin |
|           22 |     1246 | 2022-12-02 | WINDINGO      | W   | 0.721      | 0.384        | 0.002 (0.001)    | 0.210 (0.058)    | 0 (0.000) |    12.20 | bsd, CSO, lineko, mxa, stainzin |
|           21 |     1274 | 2022-12-01 | Sharks        | L   | 0.714      | -            | -                | -                | -         |    -6.11 | bsd, CSO, lineko, mxa, stainzin |
|           20 |     1331 | 2022-11-29 | Hype          | W   | 0.700      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.75 | bsd, CSO, lineko, mxa, stainzin |
|           19 |     1347 | 2022-11-28 | NO ORG        | L   | 0.695      | -            | -                | -                | -         |   -12.12 | bsd, CSO, lineko, mxa, stainzin |
|           18 |     1385 | 2022-11-27 | FURIA Academy | L   | 0.686      | -            | -                | -                | -         |    -8.02 | bsd, CSO, lineko, mxa, stainzin |
|           17 |     1469 | 2022-11-24 | B4 Academy    | W   | 0.668      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.29 | bsd, CSO, lineko, mxa, stainzin |
|           16 |     1561 | 2022-11-18 | ODDIK         | L   | 0.628      | -            | -                | -                | -         |    -6.36 | bsd, CSO, lineko, mxa, stainzin |
|           15 |     1927 | 2022-10-23 | Meta          | L   | 0.454      | -            | -                | -                | -         |    -5.07 | bsd, CSO, lineko, mxa, stainzin |
|           14 |     1947 | 2022-10-22 | Liberty       | W   | 0.448      | 0.371        | 0.000 (0.000)    | 0.053 (0.009)    | 0 (0.000) |     5.69 | bsd, CSO, lineko, mxa, stainzin |
|           13 |     1983 | 2022-10-21 | DNG           | L   | 0.440      | -            | -                | -                | -         |    -5.11 | bsd, CSO, lineko, mxa, stainzin |
|           12 |     2003 | 2022-10-20 | ODDIK         | L   | 0.434      | -            | -                | -                | -         |    -4.66 | bsd, CSO, lineko, mxa, stainzin |
|           11 |     2039 | 2022-10-19 | ARCTIC        | W   | 0.427      | 0.371        | 0.036 (0.006)    | 0.230 (0.036)    | 0 (0.000) |    10.43 | bsd, CSO, lineko, mxa, stainzin |
|           10 |     2994 | 2022-09-14 | DNG           | L   | 0.193      | -            | -                | -                | -         |    -2.19 | bsd, CSO, mxa, SaNt0S, stainzin |
|            9 |     3042 | 2022-09-12 | MIBR Academy  | L   | 0.181      | -            | -                | -                | -         |    -3.73 | bsd, CSO, mxa, SaNt0S, stainzin |
|            8 |     3064 | 2022-09-11 | Liberty       | L   | 0.174      | -            | -                | -                | -         |    -3.22 | bsd, CSO, mxa, SaNt0S, stainzin |
|            7 |     3195 | 2022-09-08 | Fluxo         | L   | 0.155      | -            | -                | -                | -         |    -1.06 | bsd, CSO, mxa, SaNt0S, stainzin |
|            6 |     3570 | 2022-08-25 | 00NATION      | L   | 0.061      | -            | -                | -                | -         |    -0.47 | bsd, CSO, mxa, SaNt0S, stainzin |
|            5 |     3597 | 2022-08-23 | River Plate   | W   | 0.048      | 0.384        | 0.000 (0.000)    | 0.012 (0.000)    | 0 (0.000) |     0.46 | bsd, CSO, mxa, SaNt0S, stainzin |
|            4 |     3647 | 2022-08-22 | Meta          | L   | 0.039      | -            | -                | -                | -         |    -0.40 | bsd, CSO, mxa, SaNt0S, stainzin |
|            3 |     3664 | 2022-08-21 | Case          | L   | 0.035      | -            | -                | -                | -         |    -0.51 | bsd, CSO, mxa, SaNt0S, stainzin |
|            2 |     3711 | 2022-08-20 | Rehl          | W   | 0.028      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.24 | bsd, CSO, mxa, SaNt0S, stainzin |
|            1 |     3749 | 2022-08-18 | Corinthians   | L   | 0.013      | -            | -                | -                | -         |    -0.14 | bsd, CSO, mxa, SaNt0S, stainzin |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($520.84)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-08 |      0.761 | $150.00        | $114.11         |
| 2022-11-19 |      0.635 | $325.00        | $206.26         |
| 2022-10-30 |      0.501 | $400.00        | $200.48         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
