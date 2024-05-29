### Roster Details<br />
Team Name: Johnny Speeds<br />
Roster: chawzyyy, draken, Lekr0, Ro1f, spooke<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [59](../standings_global.md)<br />
Regional Rank: [43]( ../standings_europe.md)<br />
Final Rank Value:  976.9<br />
<br />
Final Rank Value (976.9) = Starting Rank Value (934.7) + Head To Head Adjustments (42.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.445[<sup>1</sup>](#table2)
- Bounty Collected: 0.321[<sup>2</sup>](#table1)
- Opponent Network: 0.119[<sup>2</sup>](#table1)
- LAN Wins: 0.217[<sup>2</sup>](#table1)

The average of these factors is 0.275<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 934.7
- 400 + ( ( 0.275 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 934.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |       75 | 2024-05-26 | Preasy        | W   | 1.000      | 0.371        | 0.008 (0.003)    | 0.122 (0.045)    | 0 (0.000) |     7.50 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           20 |      173 | 2024-05-22 | Permitta      | W   | 1.000      | 0.371        | 0.025 (0.009)    | 1.000 (0.371)    | 0 (0.000) |     9.80 | bobeksde, draken, Lekr0, Ro1f, spooke     |
|           19 |      486 | 2024-05-14 | ECF           | L   | 1.000      | -            | -                | -                | -         |   -20.80 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           18 |      502 | 2024-05-13 | UNiTY         | W   | 1.000      | 0.333        | 0.021 (0.007)    | 0.226 (0.075)    | 0 (0.000) |     8.79 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           17 |      508 | 2024-05-13 | ECLOT         | W   | 1.000      | 0.333        | 0.084 (0.028)    | 0.530 (0.177)    | 0 (0.000) |    18.58 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           16 |      519 | 2024-05-12 | Verdant       | W   | 1.000      | 0.333        | 0.013 (0.004)    | 0.162 (0.054)    | 0 (0.000) |     8.84 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           15 |      532 | 2024-05-12 | Preasy        | L   | 1.000      | -            | -                | -                | -         |   -24.02 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           14 |      548 | 2024-05-11 | Lilmix        | W   | 1.000      | 0.319        | 0.006 (0.002)    | -                | 1 (1.000) |     5.69 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           13 |      562 | 2024-05-11 | Flying Angels | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.53 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           12 |      580 | 2024-05-10 | FAVBET        | W   | 1.000      | 0.333        | 0.004 (0.001)    | 0.257 (0.086)    | 0 (0.000) |     8.54 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           11 |     1104 | 2024-04-18 | UNiTY         | W   | 0.924      | 0.333        | 0.021 (0.006)    | 0.226 (0.070)    | 0 (0.000) |     9.47 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           10 |     1169 | 2024-04-16 | Viperio       | W   | 0.911      | -            | -                | -                | 0 (0.000) |     4.54 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            9 |     1415 | 2024-04-07 | Alliance      | W   | 0.852      | 0.330        | 0.004 (0.001)    | 0.617 (0.174)    | -         |     9.60 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|            8 |     1423 | 2024-04-07 | Metizport     | L   | 0.850      | -            | -                | -                | -         |    -9.63 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|            7 |     1433 | 2024-04-06 | JANO          | W   | 0.844      | -            | -                | -                | -         |     5.08 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|            6 |     2034 | 2024-03-09 | Alliance      | L   | 0.658      | -            | -                | -                | -         |   -13.48 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            5 |     2135 | 2024-03-05 | B8            | L   | 0.633      | -            | -                | -                | -         |    -6.32 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            4 |     2141 | 2024-03-05 | Insilio       | W   | 0.632      | 0.143        | -                | 0.542 (0.049)    | -         |     8.52 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            3 |     2148 | 2024-03-05 | Sashi         | W   | 0.632      | 0.143        | 0.157 (0.014)    | 1.000 (0.090)    | -         |    11.08 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            2 |     3530 | 2024-01-09 | Enterprise    | L   | 0.259      | -            | -                | -                | -         |    -4.78 | chawzyyy, draken, HugoXD, RuStY, spooke   |
|            1 |     3552 | 2024-01-09 | UNiTY         | W   | 0.259      | -            | -                | -                | -         |     2.66 | chawzyyy, draken, HugoXD, RuStY, spooke   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($17,015.23)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-16 |      1.000 | $500.00        | $500.00         |
| 2024-05-13 |      1.000 | $6,000.00      | $6,000.00       |
| 2024-05-11 |      1.000 | $4,170.00      | $4,170.00       |
| 2024-04-18 |      0.924 | $6,000.00      | $5,544.08       |
| 2024-04-07 |      0.852 | $940.00        | $801.14         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
