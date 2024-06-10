### Roster Details<br />
Team Name: Liquid<br />
Roster: cadiaN, NAF, skullz, Twistzz, YEKINDAR<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [11](../standings_global.md)<br />
Regional Rank: [1]( ../standings_americas.md)<br />
Final Rank Value:  1659.0<br />
<br />
Final Rank Value (1659.0) = Starting Rank Value (1685.4) + Head To Head Adjustments (-26.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.769[<sup>1</sup>](#table2)
- Bounty Collected: 0.599[<sup>2</sup>](#table1)
- Opponent Network: 0.386[<sup>2</sup>](#table1)
- LAN Wins: 0.826[<sup>2</sup>](#table1)

The average of these factors is 0.645<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1685.4
- 400 + ( ( 0.645 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1685.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           53 |      496 | 2024-05-29 | G2               | L   | 1.000      | -            | -                | -                | -         |    -7.92 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           52 |      522 | 2024-05-28 | Falcons          | W   | 1.000      | 0.624        | 0.327 (0.204)    | -                | 1 (1.000) |     7.46 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           51 |      540 | 2024-05-27 | 9z               | L   | 1.000      | -            | -                | -                | -         |   -27.98 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           50 |      553 | 2024-05-27 | Complexity       | W   | 1.000      | 0.624        | 0.271 (0.169)    | 0.351 (0.219)    | 1 (1.000) |    15.48 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           49 |      622 | 2024-05-23 | Eternal Fire     | L   | 1.000      | -            | -                | -                | -         |   -10.55 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           48 |      668 | 2024-05-22 | Astralis         | W   | 1.000      | 0.769        | 0.474 (0.364)    | 0.537 (0.413)    | -         |    24.21 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           47 |      715 | 2024-05-21 | ENCE             | W   | 1.000      | 0.769        | 0.205 (0.158)    | 0.407 (0.313)    | -         |     4.71 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           46 |      771 | 2024-05-19 | AMKAL            | W   | 1.000      | 0.769        | -                | 0.711 (0.546)    | -         |     3.85 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           45 |      785 | 2024-05-18 | OG               | W   | 1.000      | 0.769        | 0.249 (0.192)    | 0.306 (0.235)    | -         |     3.08 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           44 |     1076 | 2024-05-10 | Astralis         | L   | 0.992      | -            | -                | -                | -         |    -6.19 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           43 |     1119 | 2024-05-08 | FlyQuest         | W   | 0.979      | 0.889        | -                | 0.556 (0.485)    | 1 (0.979) |     7.48 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           42 |     1187 | 2024-05-04 | MOUZ             | L   | 0.953      | -            | -                | -                | -         |    -3.85 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           41 |     1247 | 2024-05-01 | Monte            | W   | 0.934      | 0.889        | 0.179 (0.148)    | 0.686 (0.569)    | 1 (0.934) |     2.78 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           40 |     1272 | 2024-04-30 | FURIA            | W   | 0.927      | 0.889        | 0.249 (0.205)    | 0.590 (0.487)    | 1 (0.927) |    10.80 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           39 |     1515 | 2024-04-19 | M80              | L   | 0.856      | -            | -                | -                | -         |   -24.72 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           38 |     1565 | 2024-04-18 | M80              | W   | 0.849      | -            | -                | -                | -         |     1.92 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           37 |     1569 | 2024-04-18 | Legacy           | W   | 0.848      | -            | -                | -                | -         |     1.06 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           36 |     1617 | 2024-04-17 | OMiT             | W   | 0.841      | -            | -                | -                | -         |     0.19 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           35 |     1620 | 2024-04-17 | straykids        | W   | 0.841      | -            | -                | -                | -         |     0.10 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           34 |     1732 | 2024-04-12 | FaZe             | L   | 0.805      | -            | -                | -                | -         |    -4.19 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           33 |     1815 | 2024-04-10 | MOUZ             | L   | 0.791      | -            | -                | -                | -         |    -3.44 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           32 |     1895 | 2024-04-08 | G2               | W   | 0.778      | 0.624        | 0.746 (0.362)    | 0.580 (0.282)    | 1 (0.778) |    19.40 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           31 |     1906 | 2024-04-07 | HEROIC           | W   | 0.776      | 0.624        | 0.362 (0.175)    | 0.635 (0.308)    | 1 (0.776) |    15.54 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           30 |     2578 | 2024-03-07 | SAW              | L   | 0.566      | -            | -                | -                | -         |   -14.99 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           29 |     2660 | 2024-03-04 | Complexity       | L   | 0.548      | -            | -                | -                | -         |    -9.34 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           28 |     2697 | 2024-03-03 | BOSS             | W   | 0.539      | -            | -                | -                | 1 (0.539) |     0.20 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           27 |     2710 | 2024-03-02 | FURIA            | L   | 0.533      | -            | -                | -                | -         |    -9.22 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           26 |     2724 | 2024-03-01 | BESTIA           | W   | 0.528      | -            | -                | -                | 1 (0.528) |     0.41 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           25 |     2795 | 2024-02-26 | Nouns            | W   | 0.502      | -            | -                | -                | -         |     0.32 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           24 |     2797 | 2024-02-26 | BOSS             | W   | 0.501      | -            | -                | -                | -         |     0.17 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           23 |     2808 | 2024-02-25 | Wildcard         | W   | 0.496      | -            | -                | -                | -         |     0.34 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           22 |     2814 | 2024-02-25 | Nouns            | L   | 0.495      | -            | -                | -                | -         |   -15.32 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           21 |     2874 | 2024-02-22 | Party Astronauts | W   | 0.476      | -            | -                | -                | -         |     0.29 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           20 |     2878 | 2024-02-22 | MIGHT            | W   | 0.475      | -            | -                | -                | -         |     0.03 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           19 |     2882 | 2024-02-22 | ex-CatEvil       | W   | 0.475      | -            | -                | -                | -         |     0.01 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           18 |     3388 | 2024-01-28 | G2               | L   | 0.307      | -            | -                | -                | -         |    -2.07 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           17 |     3402 | 2024-01-27 | FaZe             | L   | 0.300      | -            | -                | -                | -         |    -1.50 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           16 |     3444 | 2024-01-25 | GamerLegion      | W   | 0.285      | -            | -                | -                | 1 (0.285) |     0.33 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           15 |     3456 | 2024-01-24 | Spirit           | W   | 0.279      | 0.581        | 1.000 (0.162)    | -                | -         |     6.71 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           14 |     3550 | 2024-01-20 | M80              | L   | 0.256      | -            | -                | -                | -         |    -7.22 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           13 |     3599 | 2024-01-19 | Wildcard         | W   | 0.249      | -            | -                | -                | -         |     0.16 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           12 |     3609 | 2024-01-19 | BOSS             | W   | 0.248      | -            | -                | -                | -         |     0.07 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           11 |     3760 | 2024-01-16 | Elevate          | W   | 0.229      | -            | -                | -                | -         |     0.08 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           10 |     3764 | 2024-01-16 | huge sweaty      | W   | 0.228      | -            | -                | -                | -         |     0.01 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            9 |     3767 | 2024-01-16 | Wildcard         | W   | 0.228      | -            | -                | -                | -         |     0.13 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            8 |     3809 | 2024-01-15 | LOS              | W   | 0.222      | -            | -                | -                | -         |     0.01 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            7 |     3846 | 2024-01-14 | Party Astronauts | W   | 0.215      | -            | -                | -                | -         |     0.14 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            6 |     3867 | 2024-01-13 | Elevate          | W   | 0.208      | -            | -                | -                | -         |     0.07 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            5 |     3909 | 2024-01-12 | M80              | L   | 0.203      | -            | -                | -                | -         |    -5.73 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            4 |     3915 | 2024-01-12 | Nouns            | W   | 0.202      | -            | -                | -                | -         |     0.10 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            3 |     3996 | 2024-01-09 | NRG              | W   | 0.183      | -            | -                | -                | -         |     0.06 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            2 |     3998 | 2024-01-09 | vagrants         | W   | 0.183      | -            | -                | -                | -         |     0.00 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            1 |     4001 | 2024-01-09 | LOS              | W   | 0.183      | -            | -                | -                | -         |     0.00 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($152,337.01)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.50) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      1.000 | $6,000.00      | $6,000.00       |
| 2024-05-23 |      1.000 | $100,000.00    | $100,000.00     |
| 2024-05-12 |      1.000 | $32,000.00     | $32,000.00      |
| 2024-04-14 |      0.818 | $10,000.00     | $8,180.62       |
| 2024-03-10 |      0.587 | $5,000.00      | $2,936.61       |
| 2024-01-28 |      0.307 | $10,500.00     | $3,219.79       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
