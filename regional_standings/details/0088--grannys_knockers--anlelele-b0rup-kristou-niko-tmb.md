### Roster Details<br />
Team Name: Grannys Knockers<br />
Roster: Anlelele, b0RUP, Kristou, niko, TMB<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [88](../standings_global.md)<br />
Regional Rank: [60]( ../standings_europe.md)<br />
Final Rank Value:  842.4<br />
<br />
Final Rank Value (842.4) = Starting Rank Value (795.5) + Head To Head Adjustments (47.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.348[<sup>1</sup>](#table2)
- Bounty Collected: 0.371[<sup>2</sup>](#table1)
- Opponent Network: 0.097[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.204<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 795.5
- 400 + ( ( 0.204 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 795.5


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
|           10 |      622 | 2024-05-08 | Sashi             | L   | 1.000      | -            | -                | -                | -         |    -3.48 | Anlelele, b0RUP, Kristou, niko, TMB      |
|            9 |      646 | 2024-05-07 | Gaimin Gladiators | W   | 1.000      | 0.396        | 0.090 (0.036)    | 0.809 (0.321)    | 0 (0.000) |    26.83 | Anlelele, b0RUP, Kristou, niko, TMB      |
|            8 |      661 | 2024-05-06 | brazylijski luz   | W   | 1.000      | 0.396        | 0.006 (0.003)    | 0.374 (0.148)    | 0 (0.000) |    17.67 | Anlelele, b0RUP, Kristou, niko, TMB      |
|            7 |      738 | 2024-05-02 | Endpoint          | L   | 1.000      | -            | -                | -                | -         |   -10.69 | Anlelele, b0RUP, Kristou, niko, TMB      |
|            6 |      805 | 2024-04-29 | MOUZ NXT          | L   | 0.997      | -            | -                | -                | -         |    -7.61 | b0RUP, Kristou, niko, refrezh, TMB       |
|            5 |      826 | 2024-04-28 | Nemiga            | W   | 0.991      | 0.435        | 0.363 (0.156)    | 0.647 (0.279)    | 0 (0.000) |    28.18 | b0RUP, Kristou, niko, refrezh, TMB       |
|            4 |      899 | 2024-04-25 | Nexus             | W   | 0.971      | 0.435        | 0.014 (0.006)    | 0.518 (0.219)    | 0 (0.000) |    18.02 | BTN, ERSIN, ragga, s0und, XELLOW         |
|            3 |      945 | 2024-04-23 | Sangal            | L   | 0.957      | -            | -                | -                | -         |    -5.85 | Anlelele, b0RUP, Kristou, niko, TMB      |
|            2 |      948 | 2024-04-22 | Zero Tenacity     | L   | 0.953      | -            | -                | -                | -         |    -7.02 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            1 |      959 | 2024-04-22 | Permitta          | L   | 0.950      | -            | -                | -                | -         |    -9.07 | bnox, maaryy, mASKED, morelz, Vegi       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,000.00)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
