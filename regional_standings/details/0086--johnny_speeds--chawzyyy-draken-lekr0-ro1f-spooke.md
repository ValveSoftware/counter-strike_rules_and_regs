### Roster Details<br />
Team Name: Johnny Speeds<br />
Roster: chawzyyy, draken, Lekr0, Ro1f, spooke<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [86](../standings_global.md)<br />
Regional Rank: [60]( ../standings_europe.md)<br />
Final Rank Value:  844.7<br />
<br />
Final Rank Value (844.7) = Starting Rank Value (776.4) + Head To Head Adjustments (68.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.422[<sup>1</sup>](#table2)
- Bounty Collected: 0.304[<sup>2</sup>](#table1)
- Opponent Network: 0.064[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.198<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 776.4
- 400 + ( ( 0.198 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 776.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      453 | 2024-04-18 | UNiTY      | W   | 1.000      | 0.333        | 0.050 (0.017)    | 0.234 (0.078)    | 0 (0.000) |    15.80 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           10 |      518 | 2024-04-16 | Viperio    | W   | 1.000      | 0.333        | 0.006 (0.002)    | 0.089 (0.030)    | 0 (0.000) |     8.84 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            9 |      764 | 2024-04-07 | Alliance   | W   | 1.000      | 0.330        | 0.016 (0.005)    | 0.815 (0.269)    | 0 (0.000) |    17.30 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|            8 |      772 | 2024-04-07 | Metizport  | L   | 1.000      | -            | -                | -                | -         |    -5.63 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|            7 |      782 | 2024-04-06 | JANO       | W   | 0.999      | 0.330        | 0.005 (0.002)    | 0.189 (0.062)    | 0 (0.000) |    10.59 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|            6 |     1383 | 2024-03-09 | Alliance   | L   | 0.812      | -            | -                | -                | -         |   -10.59 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            5 |     1484 | 2024-03-05 | B8         | L   | 0.787      | -            | -                | -                | -         |    -6.83 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            4 |     1490 | 2024-03-05 | Insilio    | W   | 0.786      | 0.143        | 0.019 (0.002)    | 0.660 (0.074)    | 0 (0.000) |    16.71 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            3 |     1497 | 2024-03-05 | Sashi      | W   | 0.786      | 0.143        | 0.188 (0.021)    | 1.000 (0.112)    | 0 (0.000) |    18.38 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            2 |     2879 | 2024-01-09 | Enterprise | L   | 0.413      | -            | -                | -                | -         |    -3.82 | chawzyyy, draken, HugoXD, RuStY, spooke   |
|            1 |     2901 | 2024-01-09 | UNiTY      | W   | 0.413      | 0.143        | 0.050 (0.003)    | 0.234 (0.014)    | 0 (0.000) |     7.54 | chawzyyy, draken, HugoXD, RuStY, spooke   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,940.00)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-18 |      1.000 | $6,000.00      | $6,000.00       |
| 2024-04-07 |      1.000 | $940.00        | $940.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
