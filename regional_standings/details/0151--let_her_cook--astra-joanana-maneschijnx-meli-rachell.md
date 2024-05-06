### Roster Details<br />
Team Name: Let Her Cook<br />
Roster: ASTRA, Joanana, ManeschijnX, meli, RacheLL<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [151](../standings_global.md)<br />
Regional Rank: [100]( ../standings_europe.md)<br />
Final Rank Value:  685.9<br />
<br />
Final Rank Value (685.9) = Starting Rank Value (656.9) + Head To Head Adjustments (29.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.224[<sup>1</sup>](#table2)
- Bounty Collected: 0.287[<sup>2</sup>](#table1)
- Opponent Network: 0.029[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.135<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 656.9
- 400 + ( ( 0.135 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 656.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      345 | 2024-04-20 | GUILD fe          | W   | 1.000      | 0.331        | 0.011 (0.004)    | 0.199 (0.066)    | 0 (0.000) |    16.45 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           11 |      384 | 2024-04-19 | Spirit fe         | W   | 1.000      | 0.331        | 0.010 (0.003)    | 0.105 (0.035)    | 0 (0.000) |    13.37 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           10 |      603 | 2024-04-11 | NIP Impact        | L   | 1.000      | -            | -                | -                | -         |   -11.50 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            9 |      646 | 2024-04-10 | 1WIN Gang         | L   | 1.000      | -            | -                | -                | -         |   -18.92 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            8 |      703 | 2024-04-09 | Spirit fe         | W   | 1.000      | 0.303        | 0.010 (0.003)    | 0.105 (0.032)    | 0 (0.000) |    14.19 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            7 |      787 | 2024-04-06 | Fearless Cheetahs | L   | 0.998      | -            | -                | -                | -         |   -11.40 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            6 |      868 | 2024-04-03 | NAVI Javelins     | W   | 0.980      | 0.331        | 0.060 (0.019)    | 0.412 (0.134)    | 0 (0.000) |    22.44 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            5 |     1090 | 2024-03-21 | Fearless Cheetahs | L   | 0.894      | -            | -                | -                | -         |   -10.64 | Joanana, kezziwow, meli, RacheLL, suns1de  |
|            4 |     1273 | 2024-03-13 | Crescent fe       | W   | 0.840      | 0.331        | 0.008 (0.002)    | 0.072 (0.020)    | 0 (0.000) |    13.03 | Joanana, kezziwow, meli, RacheLL, suns1de  |
|            3 |     1674 | 2024-02-25 | BIG EQUIPA        | L   | 0.725      | -            | -                | -                | -         |    -9.83 | Joanana, kezziwow, meli, RacheLL, suns1de  |
|            2 |     1704 | 2024-02-24 | Nemesis fe        | W   | 0.719      | 0.238        | 0.002 (0.000)    | 0.022 (0.004)    | 0 (0.000) |    10.46 | amyb, Emmy, Gaba, Ju, Lowlita              |
|            1 |     3468 | 2023-11-19 | Fearless Cheetahs | W   | 0.073      | 0.250        | 0.030 (0.001)    | 0.192 (0.003)    | 0 (0.000) |     1.44 | Joanana, kezziwow, meli, Moraltis, RacheLL |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($54.45)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
