### Roster Details<br />
Team Name: Astralis W<br />
Roster: anja, aurora, Ismo, josefine, marie<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [178](../standings_global.md)<br />
Regional Rank: [113]( ../standings_europe.md)<br />
Final Rank Value:  591.9<br />
<br />
Final Rank Value (591.9) = Starting Rank Value (642.2) + Head To Head Adjustments (-50.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.305[<sup>1</sup>](#table2)
- Bounty Collected: 0.200[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.127<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 642.2
- 400 + ( ( 0.127 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 642.2


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
|           12 |      381 | 2024-04-19 | ENCE Athena     | L   | 1.000      | -            | -                | -                | -         |   -13.79 | anja, aurora, Ismo, josefine, marie |
|           11 |      552 | 2024-04-14 | NAVI Javelins   | L   | 1.000      | -            | -                | -                | -         |    -7.28 | anja, aurora, Ismo, josefine, marie |
|           10 |      561 | 2024-04-13 | NIP Impact      | L   | 1.000      | -            | -                | -                | -         |    -9.37 | anja, aurora, Ismo, josefine, marie |
|            9 |      580 | 2024-04-12 | Permitta W      | W   | 1.000      | 0.303        | 0.000 (0.000)    | 0.044 (0.013)    | 0 (0.000) |    11.14 | anja, aurora, Ismo, josefine, marie |
|            8 |      601 | 2024-04-11 | Pigeons         | L   | 1.000      | -            | -                | -                | -         |    -5.33 | anja, aurora, Ismo, josefine, marie |
|            7 |      648 | 2024-04-10 | Pigeons         | L   | 1.000      | -            | -                | -                | -         |    -5.61 | anja, aurora, Ismo, josefine, marie |
|            6 |      728 | 2024-04-08 | Permitta W      | W   | 1.000      | 0.303        | 0.000 (0.000)    | 0.044 (0.013)    | 0 (0.000) |    10.73 | anja, aurora, Ismo, josefine, marie |
|            5 |      874 | 2024-04-03 | NIP Impact      | L   | 0.980      | -            | -                | -                | -         |   -10.72 | anja, aurora, Ismo, josefine, marie |
|            4 |     1094 | 2024-03-21 | GUILD fe        | L   | 0.893      | -            | -                | -                | -         |   -11.97 | anja, aurora, Ismo, josefine, marie |
|            3 |     1451 | 2024-03-06 | BIG EQUIPA      | L   | 0.793      | -            | -                | -                | -         |    -9.50 | anja, aurora, Ismo, josefine, marie |
|            2 |     1830 | 2024-02-18 | ex-FORZE Ladies | W   | 0.681      | 0.143        | 0.010 (0.001)    | 0.089 (0.009)    | 0 (0.000) |    11.37 | anja, aurora, Ismo, josefine, marie |
|            1 |     1834 | 2024-02-18 | Spirit fe       | L   | 0.680      | -            | -                | -                | -         |    -9.95 | anja, aurora, Ismo, josefine, marie |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($850.00)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
