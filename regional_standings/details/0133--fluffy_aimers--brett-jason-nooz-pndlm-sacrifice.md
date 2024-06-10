### Roster Details<br />
Team Name: FLUFFY AIMERS<br />
Roster: brett, jason, nooz, PNDLM, sacrifice<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [133](../standings_global.md)<br />
Regional Rank: [33]( ../standings_americas.md)<br />
Final Rank Value:  745.9<br />
<br />
Final Rank Value (745.9) = Starting Rank Value (854.1) + Head To Head Adjustments (-108.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.359[<sup>1</sup>](#table2)
- Bounty Collected: 0.277[<sup>2</sup>](#table1)
- Opponent Network: 0.090[<sup>2</sup>](#table1)
- LAN Wins: 0.185[<sup>2</sup>](#table1)

The average of these factors is 0.228<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 854.1
- 400 + ( ( 0.228 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 854.1


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
|           37 |      107 | 2024-06-08 | Perseverance     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.26 | brett, jason, nooz, PNDLM, sacrifice   |
|           36 |      198 | 2024-06-06 | OMiT             | L   | 1.000      | -            | -                | -                | -         |   -14.18 | brett, jason, nooz, PNDLM, sacrifice   |
|           35 |      216 | 2024-06-06 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -7.70 | brett, jason, nooz, PNDLM, sacrifice   |
|           34 |      231 | 2024-06-06 | M80              | L   | 1.000      | -            | -                | -                | -         |    -1.72 | brett, jason, nooz, PNDLM, sacrifice   |
|           33 |      282 | 2024-06-05 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -8.27 | brett, jason, nooz, PNDLM, sacrifice   |
|           32 |      369 | 2024-06-03 | Akimbo           | W   | 1.000      | 0.384        | 0.007 (0.003)    | 0.117 (0.045)    | 0 (0.000) |    12.32 | brett, jason, nooz, PNDLM, sacrifice   |
|           31 |      680 | 2024-05-21 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -6.01 | brett, jason, nooz, PNDLM, sacrifice   |
|           30 |      683 | 2024-05-21 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -6.35 | brett, jason, nooz, PNDLM, sacrifice   |
|           29 |      720 | 2024-05-20 | Take Flyte       | W   | 1.000      | 0.477        | 0.005 (0.003)    | 0.348 (0.166)    | 0 (0.000) |    17.36 | brett, jason, nooz, PNDLM, sacrifice   |
|           28 |      725 | 2024-05-20 | Take Flyte       | L   | 1.000      | -            | -                | -                | -         |   -14.00 | brett, jason, nooz, PNDLM, sacrifice   |
|           27 |      760 | 2024-05-19 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -6.63 | brett, jason, nooz, PNDLM, sacrifice   |
|           26 |      814 | 2024-05-17 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -7.74 | brett, jason, nooz, PNDLM, sacrifice   |
|           25 |      815 | 2024-05-17 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -8.28 | brett, jason, nooz, PNDLM, sacrifice   |
|           24 |      847 | 2024-05-16 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -8.71 | brett, jason, nooz, PNDLM, sacrifice   |
|           23 |      850 | 2024-05-16 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -9.36 | brett, jason, nooz, PNDLM, sacrifice   |
|           22 |      884 | 2024-05-15 | MIGHT            | W   | 1.000      | 0.477        | -                | 0.133 (0.063)    | 0 (0.000) |     6.37 | brett, jason, nooz, PNDLM, sacrifice   |
|           21 |      890 | 2024-05-15 | MIGHT            | W   | 1.000      | 0.477        | -                | 0.133 (0.063)    | 0 (0.000) |     6.75 | brett, jason, nooz, PNDLM, sacrifice   |
|           20 |      939 | 2024-05-14 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |    -8.63 | ayy, jason, nooz, PNDLM, sacrifice     |
|           19 |      943 | 2024-05-14 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |    -9.27 | ayy, jason, nooz, PNDLM, sacrifice     |
|           18 |     1081 | 2024-05-09 | Limitless        | W   | 0.989      | 0.477        | 0.001 (0.001)    | 0.219 (0.103)    | 0 (0.000) |     9.68 | ayy, jason, nooz, PNDLM, sacrifice     |
|           17 |     1083 | 2024-05-09 | Limitless        | L   | 0.989      | -            | -                | -                | -         |   -21.95 | ayy, jason, nooz, PNDLM, sacrifice     |
|           16 |     1462 | 2024-04-21 | For Fun          | W   | 0.870      | 0.319        | 0.006 (0.002)    | -                | 1 (0.870) |     8.79 | ayy, brett, Fr3nk1e, jason, PNDLM      |
|           15 |     1464 | 2024-04-21 | Will to Win      | W   | 0.868      | 0.319        | 0.001 (0.000)    | -                | 1 (0.868) |     4.49 | ayy, brett, Fr3nk1e, jason, PNDLM      |
|           14 |     1766 | 2024-04-10 | One More         | L   | 0.796      | -            | -                | -                | -         |   -16.76 | ayy, intra, jason, PNDLM, sacrifice    |
|           13 |     1771 | 2024-04-10 | One More         | W   | 0.795      | 0.477        | 0.003 (0.001)    | 0.177 (0.067)    | 0 (0.000) |     8.19 | ayy, jason, nooz, PNDLM, sacrifice     |
|           12 |     1958 | 2024-04-04 | BOSS             | L   | 0.755      | -            | -                | -                | -         |   -11.84 | ayy, intra, jason, nooz, sacrifice     |
|           11 |     1964 | 2024-04-04 | BOSS             | L   | 0.755      | -            | -                | -                | -         |   -12.66 | ayy, intra, jason, PNDLM, sacrifice    |
|           10 |     2353 | 2024-03-15 | NRG              | L   | 0.622      | -            | -                | -                | -         |    -8.83 | ayy, intra, jason, PNDLM, sacrifice    |
|            9 |     2355 | 2024-03-15 | NRG              | W   | 0.622      | 0.477        | 0.024 (0.007)    | 0.578 (0.172)    | 0 (0.000) |    11.03 | ayy, intra, jason, PNDLM, sacrifice    |
|            8 |     2558 | 2024-03-07 | LAG              | L   | 0.569      | -            | -                | -                | -         |    -7.87 | ayy, jason, LEARSI, PNDLM, sacrifice   |
|            7 |     2559 | 2024-03-07 | LAG              | W   | 0.569      | 0.477        | 0.021 (0.006)    | 0.484 (0.131)    | -         |    10.31 | ayy, jason, LEARSI, PNDLM, sacrifice   |
|            6 |     3022 | 2024-02-16 | Mythic           | L   | 0.435      | -            | -                | -                | -         |    -6.37 | intra, jason, LEARSI, PNDLM, sacrifice |
|            5 |     3027 | 2024-02-16 | LAG              | W   | 0.435      | 0.143        | 0.021 (0.001)    | 0.484 (0.030)    | -         |     8.38 | intra, jason, LEARSI, PNDLM, sacrifice |
|            4 |     3080 | 2024-02-14 | Mythic           | L   | 0.422      | -            | -                | -                | -         |    -6.34 | intra, jason, LEARSI, PNDLM, sacrifice |
|            3 |     3082 | 2024-02-14 | Mythic           | L   | 0.422      | -            | -                | -                | -         |    -6.58 | intra, jason, LEARSI, PNDLM, sacrifice |
|            2 |     3120 | 2024-02-13 | Carpe Diem       | L   | 0.416      | -            | -                | -                | -         |    -8.13 | intra, jason, LEARSI, PNDLM, sacrifice |
|            1 |     3124 | 2024-02-13 | Carpe Diem       | W   | 0.415      | 0.477        | 0.007 (0.001)    | 0.321 (0.064)    | -         |     5.04 | intra, jason, LEARSI, PNDLM, sacrifice |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,988.95)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $1,200.00      | $1,200.00       |
| 2024-04-21 |      0.870 | $4,357.00      | $3,788.95       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
