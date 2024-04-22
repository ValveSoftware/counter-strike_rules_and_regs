### Roster Details<br />
Team Name: Falcons<br />
Roster: Maden, Magisk, s1mple, Snappi, SunPayus<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [20](../standings_global.md)<br />
Regional Rank: [14]( ../standings_europe.md)<br />
Final Rank Value:  1293.5<br />
<br />
Final Rank Value (1293.5) = Starting Rank Value (1293.8) + Head To Head Adjustments (-0.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.709[<sup>1</sup>](#table2)
- Bounty Collected: 0.531[<sup>2</sup>](#table1)
- Opponent Network: 0.147[<sup>2</sup>](#table1)
- LAN Wins: 0.464[<sup>2</sup>](#table1)

The average of these factors is 0.463<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1293.8
- 400 + ( ( 0.463 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1293.8


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
|           18 |     1149 | 2024-03-06 | Metizport         | L   | 0.887      | -            | -                | -                | -         |   -23.36 | Maden, Magisk, s1mple, Snappi, SunPayus  |
|           17 |     1600 | 2024-02-16 | AMKAL             | L   | 0.758      | -            | -                | -                | -         |   -20.35 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|           16 |     1630 | 2024-02-15 | Eternal Fire      | L   | 0.751      | -            | -                | -                | -         |    -4.08 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|           15 |     1656 | 2024-02-14 | FaZe              | L   | 0.746      | -            | -                | -                | -         |    -0.65 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|           14 |     1660 | 2024-02-14 | 3DMAX             | W   | 0.745      | 0.143        | 0.048 (0.005)    | 0.801 (0.085)    | 1 (0.745) |     3.09 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|           13 |     1716 | 2024-02-10 | Spirit            | L   | 0.720      | -            | -                | -                | -         |    -0.99 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|           12 |     1729 | 2024-02-09 | ENCE              | W   | 0.714      | 1.000        | 0.299 (0.214)    | 0.446 (0.318)    | 1 (0.714) |    12.75 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|           11 |     1764 | 2024-02-06 | Natus Vincere     | W   | 0.693      | 1.000        | 1.000 (0.693)    | 0.499 (0.346)    | 1 (0.693) |    21.19 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|           10 |     1773 | 2024-02-05 | Complexity        | W   | 0.687      | 1.000        | 0.264 (0.181)    | 0.353 (0.242)    | 1 (0.687) |    12.96 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            9 |     1787 | 2024-02-04 | Rebels            | W   | 0.680      | 1.000        | 0.050 (0.034)    | 0.360 (0.245)    | 1 (0.680) |     2.32 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            8 |     1829 | 2024-02-03 | Eternal Fire      | L   | 0.672      | -            | -                | -                | -         |    -2.82 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            7 |     1979 | 2024-01-26 | Vitality          | L   | 0.618      | -            | -                | -                | -         |    -0.97 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            6 |     2025 | 2024-01-23 | OG                | W   | 0.600      | 0.581        | 0.497 (0.173)    | 0.553 (0.193)    | 1 (0.600) |     9.75 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            5 |     2053 | 2024-01-22 | Astralis          | L   | 0.593      | -            | -                | -                | -         |    -6.85 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            4 |     3384 | 2023-11-12 | FaZe              | L   | 0.118      | -            | -                | -                | -         |    -0.07 | Maden, NertZ, Snappi, SunPayus, VLDN     |
|            3 |     3413 | 2023-11-11 | Ninjas in Pyjamas | W   | 0.111      | 0.769        | 0.058 (0.005)    | 0.069 (0.006)    | 1 (0.111) |     0.29 | es3tag, headtr1ck, k0nfig, maxster, REZ  |
|            2 |     3469 | 2023-11-08 | Astralis          | L   | 0.091      | -            | -                | -                | -         |    -2.73 | b0RUP, blameF, Buzz, device, Staehr      |
|            1 |     3472 | 2023-11-07 | TYLOO             | W   | 0.089      | 0.769        | 0.055 (0.004)    | 0.490 (0.034)    | 1 (0.089) |     0.27 | advent, JamYoung, kaze, Mercury, Moseyuh |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($74,011.80)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.39) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-10 |      0.914 | $5,000.00      | $4,569.46       |
| 2024-02-11 |      0.726 | $80,000.00     | $58,115.70      |
| 2024-01-28 |      0.633 | $8,500.00      | $5,382.35       |
| 2023-11-12 |      0.119 | $50,000.00     | $5,944.29       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
