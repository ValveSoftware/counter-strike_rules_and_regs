### Roster Details<br />
Team Name: NOM<br />
Roster: dan1, hotd0g , m4tthi, meztal, MOREE<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [182](../standings_global.md)<br />
Regional Rank: [113]( ../standings_europe.md)<br />
Final Rank Value:  583.0<br />
<br />
Final Rank Value (583.0) = Starting Rank Value (530.9) + Head To Head Adjustments (52.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.245[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.066<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 530.9
- 400 + ( ( 0.066 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 530.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      790 | 2024-05-18 | GUN5            | L   | 1.000      | -            | -                | -                | -         |    -3.54 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            9 |      826 | 2024-05-17 | Rare Atom       | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.247 (0.035)    | 0 (0.000) |    18.74 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            8 |      987 | 2024-05-14 | Heimo           | W   | 1.000      | 0.143        | 0.010 (0.001)    | 0.074 (0.011)    | 0 (0.000) |    22.19 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            7 |     1007 | 2024-05-13 | Rare Atom       | L   | 1.000      | -            | -                | -                | -         |   -11.16 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            6 |     1544 | 2024-04-19 | JANO            | L   | 0.853      | -            | -                | -                | -         |    -8.60 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            5 |     1597 | 2024-04-18 | RUBY            | L   | 0.846      | -            | -                | -                | -         |    -3.45 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            4 |     1633 | 2024-04-17 | Sampi           | W   | 0.839      | 0.143        | 0.036 (0.004)    | 0.883 (0.106)    | 0 (0.000) |    24.39 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            3 |     1989 | 2024-04-04 | KOI             | L   | 0.753      | -            | -                | -                | -         |    -1.34 | dan1, meztal, MOREE, shushan, tN1R    |
|            2 |     2492 | 2024-03-11 | MOUZ NXT        | L   | 0.591      | -            | -                | -                | -         |    -0.86 | dan1, Libido, meztal, MOREE, ultimate |
|            1 |     2533 | 2024-03-09 | Astralis Talent | W   | 0.579      | 0.303        | 0.014 (0.002)    | 0.152 (0.027)    | 0 (0.000) |    15.81 | dan1, Libido, meztal, MOREE, ultimate |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
