### Roster Details<br />
Team Name: Nixuh<br />
Roster: adM, blackpoisoN, kanii, Sonic, Triton<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [161](../standings_global.md)<br />
Regional Rank: [11]( ../standings_asia.md)<br />
Final Rank Value:  695.3<br />
<br />
Final Rank Value (695.3) = Starting Rank Value (686.3) + Head To Head Adjustments (9.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.319[<sup>1</sup>](#table2)
- Bounty Collected: 0.186[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.054[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 686.3
- 400 + ( ( 0.140 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 686.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1791 | 2022-10-30 | blacklaminate | W   | 0.501      | 0.250        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.28 | adM, blackpoisoN, kanii, Sonic, Triton |
|            9 |     2160 | 2022-10-15 | Eternal Fire  | L   | 0.397      | -            | -                | -                | -         |    -2.37 | adM, blackpoisoN, kanii, Sonic, Triton |
|            8 |     2195 | 2022-10-14 | MOUZ          | L   | 0.391      | -            | -                | -                | -         |    -0.46 | adM, blackpoisoN, kanii, Sonic, Triton |
|            7 |     2637 | 2022-09-25 | Bravado       | W   | 0.265      | 0.354        | 0.002 (0.000)    | 0.020 (0.002)    | 1 (0.265) |     3.76 | adM, blackpoisoN, kanii, Sonic, Triton |
|            6 |     2666 | 2022-09-24 | Goliath       | W   | 0.258      | 0.354        | 0.001 (0.000)    | 0.010 (0.001)    | 1 (0.258) |     3.34 | adM, blackpoisoN, kanii, Sonic, Triton |
|            5 |     2758 | 2022-09-22 | Bravado       | L   | 0.245      | -            | -                | -                | -         |    -4.27 | adM, blackpoisoN, kanii, Sonic, Triton |
|            4 |     3314 | 2022-09-03 | Bravado       | W   | 0.120      | 0.143        | 0.002 (0.000)    | 0.020 (0.000)    | 0 (0.000) |     1.71 | adM, blackpoisoN, kanii, Sonic, Triton |
|            3 |     3348 | 2022-09-02 | DNMK          | W   | 0.113      | 0.143        | 0.000 (0.000)    | 0.009 (0.000)    | 0 (0.000) |     0.86 | adM, blackpoisoN, kanii, Sonic, Triton |
|            2 |     3359 | 2022-09-02 | Goliath       | W   | 0.112      | 0.143        | 0.001 (0.000)    | 0.010 (0.000)    | 0 (0.000) |     1.45 | adM, blackpoisoN, kanii, Sonic, Triton |
|            1 |     3435 | 2022-08-30 | DNMK          | W   | 0.093      | 0.143        | 0.000 (0.000)    | 0.009 (0.000)    | 0 (0.000) |     0.70 | adM, blackpoisoN, kanii, Sonic, Triton |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,462.60)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-10-30 |      0.501 | $750.00        | $375.46         |
| 2022-10-16 |      0.406 | $2,000.00      | $812.27         |
| 2022-09-25 |      0.265 | $8,600.00      | $2,274.87       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
