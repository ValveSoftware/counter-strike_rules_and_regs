### Roster Details<br />
Team Name: Falcons<br />
Roster: dupreeh, Maden, Magisk, Snappi, SunPayus<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [27](../standings_global.md)<br />
Regional Rank: [19]( ../standings_europe.md)<br />
Final Rank Value:  1309.5<br />
<br />
Final Rank Value (1309.5) = Starting Rank Value (1319.4) + Head To Head Adjustments (-9.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.725[<sup>1</sup>](#table2)
- Bounty Collected: 0.530[<sup>2</sup>](#table1)
- Opponent Network: 0.163[<sup>2</sup>](#table1)
- LAN Wins: 0.512[<sup>2</sup>](#table1)

The average of these factors is 0.483<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1319.4
- 400 + ( ( 0.483 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1319.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |      198 | 2024-04-27 | G2                | L   | 1.000      | -            | -                | -                | -         |    -2.33 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           19 |      223 | 2024-04-26 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |   -14.29 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           18 |      249 | 2024-04-25 | TYLOO             | W   | 1.000      | 0.889        | 0.093 (0.083)    | 0.436 (0.387)    | 1 (1.000) |     3.18 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           17 |      269 | 2024-04-24 | TheMongolz        | L   | 1.000      | -            | -                | -                | -         |   -12.26 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           16 |     1445 | 2024-03-06 | Metizport         | L   | 0.794      | -            | -                | -                | -         |   -21.09 | Maden, Magisk, s1mple, Snappi, SunPayus  |
|           15 |     1896 | 2024-02-16 | AMKAL             | L   | 0.665      | -            | -                | -                | -         |   -15.37 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|           14 |     1926 | 2024-02-15 | Eternal Fire      | L   | 0.658      | -            | -                | -                | -         |    -2.90 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|           13 |     1952 | 2024-02-14 | FaZe              | L   | 0.653      | -            | -                | -                | -         |    -0.69 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|           12 |     1956 | 2024-02-14 | 3DMAX             | W   | 0.652      | 0.143        | 0.055 (0.005)    | 0.810 (0.075)    | 1 (0.652) |     4.80 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|           11 |     2012 | 2024-02-10 | Spirit            | L   | 0.627      | -            | -                | -                | -         |    -1.50 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|           10 |     2025 | 2024-02-09 | ENCE              | W   | 0.620      | 1.000        | 0.360 (0.223)    | 0.450 (0.279)    | 1 (0.620) |    13.25 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            9 |     2060 | 2024-02-06 | Natus Vincere     | W   | 0.599      | 1.000        | 1.000 (0.599)    | 0.509 (0.305)    | 1 (0.599) |    18.31 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            8 |     2069 | 2024-02-05 | Complexity        | W   | 0.594      | 1.000        | 0.262 (0.156)    | 0.374 (0.222)    | 1 (0.594) |    14.58 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            7 |     2083 | 2024-02-04 | Rebels            | W   | 0.587      | 1.000        | 0.111 (0.065)    | 0.375 (0.220)    | 1 (0.587) |     4.22 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            6 |     2125 | 2024-02-03 | Eternal Fire      | L   | 0.579      | -            | -                | -                | -         |    -1.89 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            5 |     2275 | 2024-01-26 | Vitality          | L   | 0.525      | -            | -                | -                | -         |    -0.71 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            4 |     2321 | 2024-01-23 | OG                | W   | 0.507      | 0.581        | 0.580 (0.171)    | 0.490 (0.144)    | 1 (0.507) |     8.04 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            3 |     2349 | 2024-01-22 | Astralis          | L   | 0.500      | -            | -                | -                | -         |    -3.26 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            2 |     3680 | 2023-11-12 | FaZe              | L   | 0.025      | -            | -                | -                | -         |    -0.02 | Maden, NertZ, Snappi, SunPayus, VLDN     |
|            1 |     3709 | 2023-11-11 | Ninjas in Pyjamas | W   | 0.017      | 0.769        | 0.045 (0.001)    | 0.049 (0.001)    | 1 (0.017) |     0.03 | es3tag, headtr1ck, k0nfig, maxster, REZ  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($67,622.36)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.42) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-05 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-03-10 |      0.821 | $5,000.00      | $4,102.93       |
| 2024-02-11 |      0.633 | $80,000.00     | $50,651.20      |
| 2024-01-28 |      0.540 | $8,500.00      | $4,589.25       |
| 2023-11-12 |      0.026 | $50,000.00     | $1,278.98       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
