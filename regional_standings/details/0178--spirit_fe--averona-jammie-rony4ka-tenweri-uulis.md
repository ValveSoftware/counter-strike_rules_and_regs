### Roster Details<br />
Team Name: Spirit fe<br />
Roster: AverOna, Jammie, Rony4ka, tenweri, uulis<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [178](../standings_global.md)<br />
Regional Rank: [110]( ../standings_europe.md)<br />
Final Rank Value:  604.4<br />
<br />
Final Rank Value (604.4) = Starting Rank Value (659.5) + Head To Head Adjustments (-55.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.302[<sup>1</sup>](#table2)
- Bounty Collected: 0.215[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.130<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 659.5
- 400 + ( ( 0.130 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 659.5


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
|           15 |      128 | 2024-06-08 | NOFEAR5           | L   | 1.000      | -            | -                | -                | -         |   -13.13 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|           14 |      802 | 2024-05-18 | NAVI Javelins     | L   | 1.000      | -            | -                | -                | -         |    -5.17 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|           13 |     1346 | 2024-04-27 | Imperial fe       | L   | 0.905      | -            | -                | -                | -         |    -1.91 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|           12 |     1535 | 2024-04-19 | Let Her Cook      | L   | 0.853      | -            | -                | -                | -         |    -4.35 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|           11 |     1701 | 2024-04-14 | ex-FORZE Ladies   | L   | 0.819      | -            | -                | -                | -         |   -12.26 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|           10 |     1757 | 2024-04-11 | NAVI Javelins     | L   | 0.799      | -            | -                | -                | -         |    -5.53 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            9 |     1854 | 2024-04-09 | Let Her Cook      | L   | 0.786      | -            | -                | -                | -         |    -3.77 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            8 |     1935 | 2024-04-06 | BIG EQUIPA        | L   | 0.765      | -            | -                | -                | -         |    -7.00 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            7 |     1980 | 2024-04-04 | NAVI Javelins     | L   | 0.754      | -            | -                | -                | -         |    -5.33 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            6 |     2159 | 2024-03-27 | Fearless Cheetahs | L   | 0.700      | -            | -                | -                | -         |    -9.16 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            5 |     2273 | 2024-03-20 | Crescent fe       | W   | 0.654      | 0.331        | 0.007 (0.002)    | 0.122 (0.026)    | 0 (0.000) |    10.48 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            4 |     2571 | 2024-03-07 | 1WIN Gang         | W   | 0.567      | 0.331        | 0.003 (0.001)    | 0.031 (0.006)    | 0 (0.000) |     9.30 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            3 |     2854 | 2024-02-24 | ENCE Athena       | L   | 0.486      | -            | -                | -                | -         |    -7.57 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            2 |     2985 | 2024-02-18 | Astralis W        | W   | 0.446      | 0.143        | 0.002 (0.000)    | 0.049 (0.003)    | 0 (0.000) |     6.49 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            1 |     3094 | 2024-02-14 | ex-GUILD fe       | L   | 0.421      | -            | -                | -                | -         |    -6.24 | AverOna, Jammie, Rony4ka, tenweri, uulis |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,485.23)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-08 |      1.000 | $100.00        | $100.00         |
| 2024-04-27 |      0.906 | $107.00        | $96.91          |
| 2024-04-21 |      0.867 | $1,250.00      | $1,083.52       |
| 2024-04-14 |      0.819 | $250.00        | $204.80         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
