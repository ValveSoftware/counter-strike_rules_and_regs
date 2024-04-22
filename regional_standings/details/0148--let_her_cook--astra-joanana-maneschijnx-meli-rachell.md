### Roster Details<br />
Team Name: Let Her Cook<br />
Roster: ASTRA, Joanana, ManeschijnX, meli, RacheLL<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [148](../standings_global.md)<br />
Regional Rank: [100]( ../standings_europe.md)<br />
Final Rank Value:  699.7<br />
<br />
Final Rank Value (699.7) = Starting Rank Value (670.6) + Head To Head Adjustments (29.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.239[<sup>1</sup>](#table2)
- Bounty Collected: 0.287[<sup>2</sup>](#table1)
- Opponent Network: 0.034[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 670.6
- 400 + ( ( 0.140 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 670.6


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
|           12 |       49 | 2024-04-20 | GUILD fe          | W   | 1.000      | 0.331        | 0.009 (0.003)    | 0.220 (0.073)    | 0 (0.000) |    15.98 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           11 |       88 | 2024-04-19 | Spirit fe         | W   | 1.000      | 0.331        | 0.008 (0.003)    | 0.123 (0.041)    | 0 (0.000) |    12.85 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           10 |      307 | 2024-04-11 | NIP Impact        | L   | 1.000      | -            | -                | -                | -         |   -12.05 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            9 |      350 | 2024-04-10 | 1WIN Gang         | L   | 1.000      | -            | -                | -                | -         |   -19.47 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            8 |      407 | 2024-04-09 | Spirit fe         | W   | 1.000      | 0.303        | 0.008 (0.002)    | 0.123 (0.037)    | 0 (0.000) |    13.54 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            7 |      491 | 2024-04-06 | Fearless Cheetahs | L   | 1.000      | -            | -                | -                | -         |   -11.12 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            6 |      572 | 2024-04-03 | NAVI Javelins     | W   | 1.000      | 0.331        | 0.064 (0.021)    | 0.467 (0.154)    | 0 (0.000) |    23.34 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            5 |      794 | 2024-03-21 | Fearless Cheetahs | L   | 0.987      | -            | -                | -                | -         |   -11.39 | Joanana, kezziwow, meli, RacheLL, suns1de  |
|            4 |      977 | 2024-03-13 | VP.Angels         | W   | 0.934      | 0.331        | 0.006 (0.002)    | 0.082 (0.025)    | 0 (0.000) |    13.65 | Joanana, kezziwow, meli, RacheLL, suns1de  |
|            3 |     1378 | 2024-02-25 | BIG EQUIPA        | L   | 0.818      | -            | -                | -                | -         |   -11.00 | Joanana, kezziwow, meli, RacheLL, suns1de  |
|            2 |     1408 | 2024-02-24 | Nemesis fe        | W   | 0.812      | 0.238        | 0.002 (0.000)    | 0.027 (0.005)    | 0 (0.000) |    11.41 | amyb, Emmy, Gaba, Ju, Lowlita              |
|            1 |     3172 | 2023-11-19 | Fearless Cheetahs | W   | 0.166      | 0.250        | 0.033 (0.001)    | 0.214 (0.009)    | 0 (0.000) |     3.34 | Joanana, kezziwow, meli, Moraltis, RacheLL |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($124.43)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
