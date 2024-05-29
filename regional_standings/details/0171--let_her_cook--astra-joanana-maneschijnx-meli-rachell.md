### Roster Details<br />
Team Name: Let Her Cook<br />
Roster: ASTRA, Joanana, ManeschijnX, meli, RacheLL<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [171](../standings_global.md)<br />
Regional Rank: [111]( ../standings_europe.md)<br />
Final Rank Value:  585.6<br />
<br />
Final Rank Value (585.6) = Starting Rank Value (534.9) + Head To Head Adjustments (50.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.257[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.070<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 534.9
- 400 + ( ( 0.070 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 534.9


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
|           11 |      996 | 2024-04-20 | ex-GUILD fe       | W   | 0.939      | 0.331        | 0.005 (0.002)    | 0.159 (0.049)    | 0 (0.000) |    18.40 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           10 |     1035 | 2024-04-19 | Spirit fe         | W   | 0.933      | 0.331        | 0.005 (0.002)    | 0.079 (0.024)    | 0 (0.000) |    15.91 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|            9 |     1254 | 2024-04-11 | NIP Impact        | L   | 0.879      | -            | -                | -                | -         |    -7.80 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            8 |     1297 | 2024-04-10 | 1WIN Gang         | L   | 0.872      | -            | -                | -                | -         |   -15.47 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            7 |     1354 | 2024-04-09 | Spirit fe         | W   | 0.865      | 0.303        | 0.005 (0.001)    | 0.079 (0.021)    | 0 (0.000) |    15.91 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            6 |     1438 | 2024-04-06 | Fearless Cheetahs | L   | 0.844      | -            | -                | -                | -         |    -8.25 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            5 |     1519 | 2024-04-03 | NAVI Javelins     | W   | 0.826      | 0.331        | 0.024 (0.007)    | 0.341 (0.093)    | 0 (0.000) |    20.25 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            4 |     1741 | 2024-03-21 | Fearless Cheetahs | L   | 0.740      | -            | -                | -                | -         |    -7.43 | Joanana, kezziwow, meli, RacheLL, suns1de  |
|            3 |     1924 | 2024-03-13 | Crescent fe       | W   | 0.686      | 0.331        | 0.007 (0.002)    | 0.096 (0.022)    | 0 (0.000) |    14.16 | Joanana, kezziwow, meli, RacheLL, suns1de  |
|            2 |     2325 | 2024-02-25 | BIG EQUIPA        | L   | 0.571      | -            | -                | -                | -         |    -5.72 | Joanana, kezziwow, meli, RacheLL, suns1de  |
|            1 |     2355 | 2024-02-24 | Nemesis fe        | W   | 0.565      | 0.238        | 0.001 (0.000)    | 0.014 (0.002)    | 0 (0.000) |    10.76 | amyb, Emmy, Gaba, Ju, Lowlita              |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
