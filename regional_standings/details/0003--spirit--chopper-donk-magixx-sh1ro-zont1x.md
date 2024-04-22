### Roster Details<br />
Team Name: Spirit<br />
Roster: chopper, donk, magixx, sh1ro, zont1x<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [3](../standings_global.md)<br />
Regional Rank: [3]( ../standings_europe.md)<br />
Final Rank Value:  1908.4<br />
<br />
Final Rank Value (1908.4) = Starting Rank Value (1899.3) + Head To Head Adjustments (9.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.764[<sup>2</sup>](#table1)
- Opponent Network: 0.467[<sup>2</sup>](#table1)
- LAN Wins: 0.874[<sup>2</sup>](#table1)

The average of these factors is 0.776<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1899.3
- 400 + ( ( 0.776 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1899.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |      670 | 2024-03-28 | FaZe          | L   | 1.000      | -            | -                | -                | -         |   -15.31 | chopper, donk, magixx, sh1ro, zont1x    |
|           38 |      778 | 2024-03-22 | Natus Vincere | W   | 0.993      | 1.000        | 1.000 (0.993)    | 0.499 (0.496)    | 1 (0.993) |    15.61 | chopper, donk, magixx, sh1ro, zont1x    |
|           37 |      793 | 2024-03-21 | Imperial      | W   | 0.987      | 1.000        | 0.569 (0.562)    | 1.000 (0.987)    | 1 (0.987) |     4.41 | chopper, donk, magixx, sh1ro, zont1x    |
|           36 |      805 | 2024-03-21 | Cloud9        | W   | 0.986      | 1.000        | 0.475 (0.468)    | 0.623 (0.614)    | 1 (0.986) |     5.53 | chopper, donk, magixx, sh1ro, zont1x    |
|           35 |     1050 | 2024-03-10 | Metizport     | W   | 0.914      | 0.535        | -                | 1.000 (0.489)    | -         |     0.23 | chopper, donk, magixx, sh1ro, zont1x    |
|           34 |     1070 | 2024-03-09 | BIG           | W   | 0.907      | 0.535        | 0.471 (0.228)    | 0.529 (0.257)    | -         |     0.63 | chopper, donk, magixx, sh1ro, zont1x    |
|           33 |     1105 | 2024-03-08 | Elevate       | W   | 0.899      | 0.535        | -                | 0.431 (0.207)    | -         |     0.10 | chopper, donk, magixx, sh1ro, zont1x    |
|           32 |     1460 | 2024-02-21 | HEROIC        | W   | 0.793      | -            | -                | -                | 1 (0.793) |     3.55 | chopper, donk, magixx, sh1ro, zont1x    |
|           31 |     1491 | 2024-02-20 | MOUZ          | L   | 0.786      | -            | -                | -                | -         |   -14.55 | chopper, donk, magixx, sh1ro, zont1x    |
|           30 |     1510 | 2024-02-19 | Astralis      | W   | 0.780      | -            | -                | -                | 1 (0.780) |     1.32 | chopper, donk, magixx, sh1ro, zont1x    |
|           29 |     1525 | 2024-02-19 | ENCE          | W   | 0.778      | -            | -                | -                | 1 (0.778) |     1.17 | chopper, donk, magixx, sh1ro, zont1x    |
|           28 |     1708 | 2024-02-11 | FaZe          | W   | 0.726      | 1.000        | 1.000 (0.726)    | 0.737 (0.535)    | 1 (0.726) |    14.21 | chopper, donk, magixx, sh1ro, zont1x    |
|           27 |     1716 | 2024-02-10 | Falcons       | W   | 0.720      | 1.000        | 0.389 (0.280)    | -                | 1 (0.720) |     0.99 | chopper, donk, magixx, sh1ro, zont1x    |
|           26 |     1765 | 2024-02-06 | FaZe          | W   | 0.693      | 1.000        | 1.000 (0.693)    | 0.737 (0.510)    | 1 (0.693) |    13.99 | chopper, donk, magixx, sh1ro, zont1x    |
|           25 |     1794 | 2024-02-04 | Complexity    | W   | 0.679      | 1.000        | 0.264 (0.179)    | 0.353 (0.239)    | 1 (0.679) |     1.22 | chopper, donk, magixx, sh1ro, zont1x    |
|           24 |     1815 | 2024-02-03 | Natus Vincere | W   | 0.673      | 1.000        | 1.000 (0.673)    | 0.499 (0.336)    | -         |    13.13 | chopper, donk, magixx, sh1ro, zont1x    |
|           23 |     1889 | 2024-02-01 | TheMongolz    | W   | 0.658      | -            | -                | -                | -         |     1.09 | chopper, donk, magixx, sh1ro, zont1x    |
|           22 |     1902 | 2024-01-31 | Apeks         | W   | 0.653      | -            | -                | -                | -         |     0.69 | chopper, donk, magixx, sh1ro, zont1x    |
|           21 |     1994 | 2024-01-25 | FaZe          | L   | 0.612      | -            | -                | -                | -         |    -6.59 | baz, chopper, hally, sh1ro, zont1x      |
|           20 |     2009 | 2024-01-24 | Liquid        | L   | 0.606      | -            | -                | -                | -         |   -18.62 | baz, chopper, hally, sh1ro, zont1x      |
|           19 |     2126 | 2024-01-20 | MOUZ          | W   | 0.579      | -            | -                | -                | -         |     8.01 | chopper, donk, magixx, sh1ro, zont1x    |
|           18 |     2180 | 2024-01-19 | Preasy        | W   | 0.572      | -            | -                | -                | -         |     0.17 | chopper, donk, magixx, sh1ro, zont1x    |
|           17 |     2223 | 2024-01-18 | Entropiq      | W   | 0.567      | -            | -                | -                | -         |     0.03 | chopper, donk, magixx, sh1ro, zont1x    |
|           16 |     2251 | 2024-01-18 | KOI           | L   | 0.566      | -            | -                | -                | -         |   -17.67 | chopper, donk, magixx, sh1ro, zont1x    |
|           15 |     2791 | 2023-12-10 | Virtus.pro    | W   | 0.306      | 0.657        | 0.530 (0.106)    | -                | -         |     1.89 | ArtFr0st, chopper, donk, magixx, zont1x |
|           14 |     2819 | 2023-12-09 | MIBR          | W   | 0.299      | -            | -                | -                | -         |     0.63 | ArtFr0st, chopper, donk, magixx, zont1x |
|           13 |     2836 | 2023-12-08 | FURIA         | W   | 0.292      | -            | -                | -                | -         |     0.71 | ArtFr0st, chopper, donk, magixx, zont1x |
|           12 |     2870 | 2023-12-07 | Virtus.pro    | L   | 0.284      | -            | -                | -                | -         |    -7.29 | ArtFr0st, chopper, donk, magixx, zont1x |
|           11 |     2893 | 2023-12-06 | FURIA         | W   | 0.279      | -            | -                | -                | -         |     0.64 | ArtFr0st, chopper, donk, magixx, zont1x |
|           10 |     3138 | 2023-11-21 | ENCE          | W   | 0.180      | -            | -                | -                | -         |     0.26 | ArtFr0st, chopper, donk, magixx, zont1x |
|            9 |     3231 | 2023-11-17 | MIBR          | W   | 0.153      | -            | -                | -                | -         |     0.28 | ArtFr0st, chopper, donk, magixx, zont1x |
|            8 |     3271 | 2023-11-16 | ENCE          | W   | 0.145      | -            | -                | -                | -         |     0.21 | ArtFr0st, chopper, donk, magixx, zont1x |
|            7 |     3459 | 2023-11-08 | Apeks         | W   | 0.093      | -            | -                | -                | -         |     0.08 | ArtFr0st, chopper, donk, magixx, zont1x |
|            6 |     3476 | 2023-11-07 | Space         | W   | 0.087      | -            | -                | -                | -         |     0.00 | ArtFr0st, chopper, donk, magixx, zont1x |
|            5 |     3567 | 2023-11-03 | Monte         | L   | 0.058      | -            | -                | -                | -         |    -1.78 | ArtFr0st, chopper, donk, magixx, zont1x |
|            4 |     3603 | 2023-11-01 | SAW           | W   | 0.047      | -            | -                | -                | -         |     0.04 | ArtFr0st, chopper, donk, magixx, zont1x |
|            3 |     3662 | 2023-10-30 | MOUZ          | W   | 0.034      | -            | -                | -                | -         |     0.49 | ArtFr0st, chopper, donk, magixx, zont1x |
|            2 |     3718 | 2023-10-29 | Complexity    | W   | 0.025      | -            | -                | -                | -         |     0.04 | ArtFr0st, chopper, donk, magixx, zont1x |
|            1 |     3787 | 2023-10-27 | 9z            | L   | 0.013      | -            | -                | -                | -         |    -0.41 | ArtFr0st, chopper, donk, magixx, zont1x |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($414,510.71)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-31 |      1.000 | $45,000.00     | $45,000.00      |
| 2024-03-10 |      0.914 | $20,000.00     | $18,277.85      |
| 2024-02-11 |      0.726 | $400,000.00    | $290,578.49     |
| 2024-01-28 |      0.633 | $5,000.00      | $3,166.09       |
| 2023-12-10 |      0.307 | $5,000.00      | $1,533.88       |
| 2023-12-10 |      0.306 | $180,000.00    | $55,033.06      |
| 2023-11-05 |      0.074 | $12,500.00     | $921.35         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
