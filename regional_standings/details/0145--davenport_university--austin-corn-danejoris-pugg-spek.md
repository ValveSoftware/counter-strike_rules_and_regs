### Roster Details<br />
Team Name: Davenport University<br />
Roster: Austin, corn, Danejoris, Pugg, spek<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [145](../standings_global.md)<br />
Regional Rank: [41]( ../standings_americas.md)<br />
Final Rank Value:  724.0<br />
<br />
Final Rank Value (724.0) = Starting Rank Value (739.0) + Head To Head Adjustments (-15.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.349[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.046[<sup>2</sup>](#table1)
- LAN Wins: 0.017[<sup>2</sup>](#table1)

The average of these factors is 0.166<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 739.0
- 400 + ( ( 0.166 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 739.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |      203 | 2023-02-02 | Villainous     | W   | 1.000      | 0.384        | -                | 0.226 (0.087)    | 0 (0.000) |     9.86 | Austin, corn, Danejoris, Pugg, spek |
|           28 |      252 | 2023-01-31 | Mystic         | L   | 1.000      | -            | -                | -                | -         |   -22.88 | Austin, corn, Danejoris, Pugg, spek |
|           27 |      362 | 2023-01-27 | Take Flyte     | L   | 1.000      | -            | -                | -                | -         |   -18.68 | Austin, corn, Danejoris, Pugg, spek |
|           26 |      429 | 2023-01-25 | Take Charge    | W   | 1.000      | 0.384        | -                | 0.105 (0.041)    | 0 (0.000) |     5.83 | Austin, corn, Danejoris, Pugg, spek |
|           25 |      708 | 2023-01-13 | Nouns          | L   | 1.000      | -            | -                | -                | -         |    -9.49 | Austin, corn, Danejoris, Pugg, spek |
|           24 |      852 | 2022-12-15 | Limitless      | W   | 0.810      | 0.371        | 0.007 (0.002)    | 0.287 (0.086)    | 0 (0.000) |    12.92 | CoJoMo, corn, Pugg, spek, swicher   |
|           23 |      925 | 2022-12-12 | Limitless      | W   | 0.789      | 0.371        | 0.007 (0.002)    | 0.287 (0.084)    | 0 (0.000) |    13.12 | CoJoMo, corn, Pugg, spek, swicher   |
|           22 |      967 | 2022-12-10 | 1 JIN          | W   | 0.776      | 0.371        | 0.006 (0.002)    | 0.192 (0.055)    | 0 (0.000) |    10.85 | CoJoMo, corn, Pugg, spek, swicher   |
|           21 |     1024 | 2022-12-08 | Zero MarksMen  | W   | 0.763      | -            | -                | -                | 0 (0.000) |     3.40 | CoJoMo, corn, Pugg, spek, swicher   |
|           20 |     1030 | 2022-12-08 | TeamOne        | L   | 0.762      | -            | -                | -                | -         |    -5.82 | CoJoMo, corn, Pugg, spek, swicher   |
|           19 |     2460 | 2022-10-01 | Disconnected   | L   | 0.309      | -            | -                | -                | -         |    -4.81 | CoJoMo, corn, Pugg, spek, swicher   |
|           18 |     2482 | 2022-09-30 | Phantom Troupe | W   | 0.302      | 0.384        | 0.001 (0.000)    | -                | 0 (0.000) |     3.57 | CoJoMo, corn, Pugg, spek, swicher   |
|           17 |     2510 | 2022-09-29 | EG Black       | W   | 0.295      | 0.384        | 0.024 (0.003)    | 0.362 (0.041)    | 0 (0.000) |     6.46 | CoJoMo, corn, Pugg, spek, swicher   |
|           16 |     2569 | 2022-09-27 | Phantom Troupe | L   | 0.282      | -            | -                | -                | -         |    -5.60 | CoJoMo, corn, Pugg, spek, swicher   |
|           15 |     2606 | 2022-09-25 | EG Black       | L   | 0.269      | -            | -                | -                | -         |    -2.72 | CoJoMo, corn, Pugg, spek, swicher   |
|           14 |     2773 | 2022-09-21 | Limitless      | W   | 0.241      | 0.384        | 0.007 (0.001)    | 0.287 (0.027)    | 0 (0.000) |     4.05 | CoJoMo, corn, Pugg, spek, swicher   |
|           13 |     2800 | 2022-09-20 | TeamOne        | L   | 0.235      | -            | -                | -                | -         |    -2.02 | CoJoMo, corn, Pugg, spek, swicher   |
|           12 |     2824 | 2022-09-19 | MIBR           | L   | 0.229      | -            | -                | -                | -         |    -1.31 | CoJoMo, corn, Pugg, spek, swicher   |
|           11 |     2828 | 2022-09-19 | X13            | L   | 0.228      | -            | -                | -                | -         |    -4.29 | CoJoMo, corn, Pugg, spek, swicher   |
|           10 |     2843 | 2022-09-18 | Unjustified    | L   | 0.222      | -            | -                | -                | -         |    -5.49 | CoJoMo, corn, Pugg, spek, swicher   |
|            9 |     2937 | 2022-09-15 | TropiCaos      | L   | 0.201      | -            | -                | -                | -         |    -3.21 | CoJoMo, corn, Pugg, spek, swicher   |
|            8 |     2986 | 2022-09-14 | Villainous     | W   | 0.194      | 0.384        | 0.003 (0.000)    | 0.097 (0.007)    | -         |     2.34 | CoJoMo, corn, Pugg, spek, swicher   |
|            7 |     3017 | 2022-09-13 | Mythic         | W   | 0.188      | 0.435        | 0.001 (0.000)    | 0.203 (0.017)    | -         |     2.65 | CoJoMo, corn, Pugg, spek, swicher   |
|            6 |     3099 | 2022-09-10 | EG Black       | L   | 0.168      | -            | -                | -                | -         |    -1.71 | CoJoMo, corn, Pugg, spek, swicher   |
|            5 |     3123 | 2022-09-10 | Dripmen        | W   | 0.167      | 0.500        | 0.003 (0.000)    | 0.163 (0.014)    | 1 (0.167) |     2.31 | CoJoMo, corn, Pugg, spek, swicher   |
|            4 |     3136 | 2022-09-10 | EG Black       | L   | 0.166      | -            | -                | -                | -         |    -1.68 | CoJoMo, corn, Pugg, spek, swicher   |
|            3 |     3276 | 2022-09-04 | Disconnected   | L   | 0.128      | -            | -                | -                | -         |    -2.04 | CoJoMo, corn, Pugg, spek, swicher   |
|            2 |     3300 | 2022-09-03 | Phantom Troupe | W   | 0.122      | 0.143        | 0.001 (0.000)    | -                | -         |     1.37 | CoJoMo, corn, Pugg, spek, swicher   |
|            1 |     3423 | 2022-08-30 | Brazen         | L   | 0.095      | -            | -                | -                | -         |    -1.93 | CoJoMo, corn, Pugg, spek, swicher   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,455.88)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-15 |      0.810 | $7,000.00      | $5,668.56       |
| 2022-10-02 |      0.315 | $2,500.00      | $787.32         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
