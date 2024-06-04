### Roster Details<br />
Team Name: NOM<br />
Roster: dan1, hotd0g , m4tthi, meztal, MOREE<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [179](../standings_global.md)<br />
Regional Rank: [114]( ../standings_europe.md)<br />
Final Rank Value:  571.0<br />
<br />
Final Rank Value (571.0) = Starting Rank Value (528.2) + Head To Head Adjustments (42.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.247[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.066<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 528.2
- 400 + ( ( 0.066 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 528.2


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
|           10 |      290 | 2024-05-18 | GUN5            | L   | 1.000      | -            | -                | -                | -         |    -8.70 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            9 |      326 | 2024-05-17 | Rare Atom       | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.194 (0.028)    | 0 (0.000) |    16.75 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            8 |      487 | 2024-05-14 | Heimo           | W   | 1.000      | 0.143        | 0.011 (0.002)    | 0.083 (0.012)    | 0 (0.000) |    22.00 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            7 |      507 | 2024-05-13 | Rare Atom       | L   | 1.000      | -            | -                | -                | -         |   -13.06 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            6 |     1044 | 2024-04-19 | JANO            | L   | 0.932      | -            | -                | -                | -         |    -9.76 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            5 |     1097 | 2024-04-18 | RUBY            | L   | 0.925      | -            | -                | -                | -         |    -4.79 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            4 |     1133 | 2024-04-17 | Sampi           | W   | 0.918      | 0.143        | 0.038 (0.005)    | 0.794 (0.104)    | 0 (0.000) |    26.22 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            3 |     1489 | 2024-04-04 | KOI             | L   | 0.832      | -            | -                | -                | -         |    -1.90 | dan1, meztal, MOREE, shushan, tN1R    |
|            2 |     1992 | 2024-03-11 | MOUZ NXT        | L   | 0.670      | -            | -                | -                | -         |    -1.26 | dan1, Libido, meztal, MOREE, ultimate |
|            1 |     2033 | 2024-03-09 | Astralis Talent | W   | 0.658      | 0.303        | 0.012 (0.002)    | 0.144 (0.029)    | 0 (0.000) |    17.34 | dan1, Libido, meztal, MOREE, ultimate |

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
