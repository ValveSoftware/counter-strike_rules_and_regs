### Roster Details<br />
Team Name: Astralis W<br />
Roster: anja, aurora, Ismo, josefine, marie<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [179](../standings_global.md)<br />
Regional Rank: [111]( ../standings_europe.md)<br />
Final Rank Value:  598.0<br />
<br />
Final Rank Value (598.0) = Starting Rank Value (628.5) + Head To Head Adjustments (-30.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.277[<sup>1</sup>](#table2)
- Bounty Collected: 0.180[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.115<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 628.5
- 400 + ( ( 0.115 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 628.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     1532 | 2024-04-19 | ENCE Athena     | L   | 0.854      | -            | -                | -                | -         |   -11.90 | anja, aurora, Ismo, josefine, marie |
|           11 |     1703 | 2024-04-14 | NAVI Javelins   | L   | 0.819      | -            | -                | -                | -         |    -4.92 | anja, aurora, Ismo, josefine, marie |
|           10 |     1712 | 2024-04-13 | NIP Impact      | L   | 0.813      | -            | -                | -                | -         |    -7.65 | anja, aurora, Ismo, josefine, marie |
|            9 |     1731 | 2024-04-12 | Permitta W      | W   | 0.806      | 0.303        | 0.000 (0.000)    | 0.031 (0.008)    | 0 (0.000) |     9.05 | anja, aurora, Ismo, josefine, marie |
|            8 |     1752 | 2024-04-11 | Imperial fe     | L   | 0.800      | -            | -                | -                | -         |    -1.55 | anja, aurora, Ismo, josefine, marie |
|            7 |     1799 | 2024-04-10 | Imperial fe     | L   | 0.793      | -            | -                | -                | -         |    -1.56 | anja, aurora, Ismo, josefine, marie |
|            6 |     1879 | 2024-04-08 | Permitta W      | W   | 0.780      | 0.303        | 0.000 (0.000)    | 0.031 (0.007)    | 0 (0.000) |     8.66 | anja, aurora, Ismo, josefine, marie |
|            5 |     2025 | 2024-04-03 | NIP Impact      | L   | 0.747      | -            | -                | -                | -         |    -8.22 | anja, aurora, Ismo, josefine, marie |
|            4 |     2245 | 2024-03-21 | ex-GUILD fe     | L   | 0.660      | -            | -                | -                | -         |    -8.94 | anja, aurora, Ismo, josefine, marie |
|            3 |     2602 | 2024-03-06 | BIG EQUIPA      | L   | 0.560      | -            | -                | -                | -         |    -4.50 | anja, aurora, Ismo, josefine, marie |
|            2 |     2981 | 2024-02-18 | ex-FORZE Ladies | W   | 0.447      | 0.143        | 0.004 (0.000)    | 0.062 (0.004)    | 0 (0.000) |     7.50 | anja, aurora, Ismo, josefine, marie |
|            1 |     2985 | 2024-02-18 | Spirit fe       | L   | 0.446      | -            | -                | -                | -         |    -6.49 | anja, aurora, Ismo, josefine, marie |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($736.79)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
