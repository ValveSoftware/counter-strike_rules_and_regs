### Roster Details<br />
Team Name: B8<br />
Roster: amster, cptkurtka023, npl, OWNER, r1nkle<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [164](../standings_global.md)<br />
Regional Rank: [108]( ../standings_europe.md)<br />
Final Rank Value:  659.8<br />
<br />
Final Rank Value (659.8) = Starting Rank Value (646.1) + Head To Head Adjustments (13.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.251[<sup>1</sup>](#table2)
- Bounty Collected: 0.247[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.127<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 646.1
- 400 + ( ( 0.127 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 646.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |     2445 | 2024-01-13 | Insilio         | L   | 0.532      | -            | -                | -                | -         |    -6.59 | amster, cptkurtka023, npl, OWNER, r1nkle |
|           16 |     2485 | 2024-01-12 | BEZFORMbI       | W   | 0.527      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     3.07 | amster, cptkurtka023, npl, OWNER, r1nkle |
|           15 |     2710 | 2023-12-16 | 9 Pandas        | W   | 0.347      | 0.143        | 0.083 (0.004)    | 0.656 (0.033)    | 0 (0.000) |    10.10 | amster, cptkurtka023, npl, OWNER, r1nkle |
|           14 |     2738 | 2023-12-15 | lajtbitexe      | W   | 0.340      | 0.143        | 0.003 (0.000)    | 0.027 (0.001)    | 0 (0.000) |     5.66 | amster, cptkurtka023, npl, OWNER, r1nkle |
|           13 |     3121 | 2023-11-22 | PERA            | L   | 0.187      | -            | -                | -                | -         |    -2.86 | amster, cptkurtka023, npl, OWNER, r1nkle |
|           12 |     3135 | 2023-11-21 | Sangal          | L   | 0.180      | -            | -                | -                | -         |    -3.96 | amster, cptkurtka023, npl, OWNER, r1nkle |
|           11 |     3171 | 2023-11-19 | Into the Breach | L   | 0.166      | -            | -                | -                | -         |    -1.45 | amster, cptkurtka023, npl, OWNER, r1nkle |
|           10 |     3371 | 2023-11-12 | Pompa           | W   | 0.119      | 0.500        | 0.000 (0.000)    | 0.014 (0.001)    | 0 (0.000) |     1.19 | amster, cptkurtka023, npl, OWNER, r1nkle |
|            9 |     3404 | 2023-11-11 | Sashi           | W   | 0.113      | 0.358        | 0.064 (0.003)    | 1.000 (0.041)    | 0 (0.000) |     2.90 | amster, cptkurtka023, npl, OWNER, r1nkle |
|            8 |     3462 | 2023-11-08 | BetBoom         | L   | 0.093      | -            | -                | -                | -         |    -0.10 | amster, cptkurtka023, npl, OWNER, r1nkle |
|            7 |     3477 | 2023-11-07 | Into the Breach | W   | 0.087      | 0.435        | 0.037 (0.001)    | 0.225 (0.009)    | 0 (0.000) |     1.97 | amster, cptkurtka023, npl, OWNER, r1nkle |
|            6 |     3541 | 2023-11-04 | 500             | W   | 0.066      | 0.358        | -                | 0.622 (0.015)    | 0 (0.000) |     1.01 | amster, cptkurtka023, npl, OWNER, r1nkle |
|            5 |     3581 | 2023-11-02 | Sprout          | W   | 0.053      | 0.435        | 0.010 (0.000)    | 0.221 (0.005)    | 0 (0.000) |     1.02 | amster, cptkurtka023, npl, OWNER, r1nkle |
|            4 |     3638 | 2023-10-31 | ARCRED          | W   | 0.039      | 0.435        | 0.008 (0.000)    | 0.164 (0.003)    | 0 (0.000) |     0.70 | amster, cptkurtka023, npl, OWNER, r1nkle |
|            3 |     3728 | 2023-10-29 | Entropiq        | W   | 0.025      | 0.358        | 0.002 (0.000)    | 0.403 (0.004)    | 0 (0.000) |     0.49 | amster, cptkurtka023, npl, OWNER, r1nkle |
|            2 |     3745 | 2023-10-28 | Nexus           | W   | 0.020      | 0.435        | 0.023 (0.000)    | 0.544 (0.005)    | -         |     0.47 | amster, cptkurtka023, npl, OWNER, r1nkle |
|            1 |     3829 | 2023-10-26 | Monte           | L   | 0.004      | -            | -                | -                | -         |    -0.01 | amster, cptkurtka023, npl, OWNER, r1nkle |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($200.17)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
