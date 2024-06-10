### Roster Details<br />
Team Name: Grannys Knockers<br />
Roster: Anlelele, b0RUP, Kristou, niko, TMB<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [101](../standings_global.md)<br />
Regional Rank: [71]( ../standings_europe.md)<br />
Final Rank Value:  850.3<br />
<br />
Final Rank Value (850.3) = Starting Rank Value (795.5) + Head To Head Adjustments (54.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.346[<sup>1</sup>](#table2)
- Bounty Collected: 0.361[<sup>2</sup>](#table1)
- Opponent Network: 0.086[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.198<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 795.5
- 400 + ( ( 0.198 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 795.5


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
|           10 |     1122 | 2024-05-08 | Sashi             | L   | 0.979      | -            | -                | -                | -         |    -2.62 | Anlelele, b0RUP, Kristou, niko, TMB      |
|            9 |     1146 | 2024-05-07 | Gaimin Gladiators | W   | 0.971      | 0.396        | 0.081 (0.031)    | 0.749 (0.288)    | 0 (0.000) |    26.83 | Anlelele, b0RUP, Kristou, niko, TMB      |
|            8 |     1161 | 2024-05-06 | brazylijski luz   | W   | 0.964      | 0.396        | 0.005 (0.002)    | 0.355 (0.136)    | 0 (0.000) |    17.98 | Anlelele, b0RUP, Kristou, niko, TMB      |
|            7 |     1238 | 2024-05-02 | Endpoint          | L   | 0.938      | -            | -                | -                | -         |    -9.23 | Anlelele, b0RUP, Kristou, niko, TMB      |
|            6 |     1305 | 2024-04-29 | MOUZ NXT          | L   | 0.918      | -            | -                | -                | -         |    -5.58 | b0RUP, Kristou, niko, refrezh, TMB       |
|            5 |     1326 | 2024-04-28 | Nemiga            | W   | 0.911      | 0.435        | 0.335 (0.133)    | 0.638 (0.253)    | 0 (0.000) |    26.46 | b0RUP, Kristou, niko, refrezh, TMB       |
|            4 |     1399 | 2024-04-25 | Nexus             | W   | 0.892      | 0.435        | 0.013 (0.005)    | 0.469 (0.182)    | 0 (0.000) |    17.16 | BTN, ERSIN, ragga, s0und, XELLOW         |
|            3 |     1445 | 2024-04-23 | Sangal            | L   | 0.878      | -            | -                | -                | -         |    -4.01 | Anlelele, b0RUP, Kristou, niko, TMB      |
|            2 |     1448 | 2024-04-22 | Zero Tenacity     | L   | 0.873      | -            | -                | -                | -         |    -5.18 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            1 |     1459 | 2024-04-22 | Permitta          | L   | 0.871      | -            | -                | -                | -         |    -7.01 | bnox, maaryy, mASKED, morelz, Vegi       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,940.17)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
