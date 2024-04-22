### Roster Details<br />
Team Name: MIBR Academy<br />
Roster: bobz, card, max, mlhzin, nicks<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [176](../standings_global.md)<br />
Regional Rank: [42]( ../standings_americas.md)<br />
Final Rank Value:  622.9<br />
<br />
Final Rank Value (622.9) = Starting Rank Value (626.7) + Head To Head Adjustments (-3.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.278[<sup>1</sup>](#table2)
- Bounty Collected: 0.183[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.117<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 626.7
- 400 + ( ( 0.117 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 626.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      896 | 2024-03-16 | Case         | L   | 0.954      | -            | -                | -                | -         |    -7.34 | bobz, card, max, mlhzin, nicks     |
|           10 |      914 | 2024-03-15 | ODDIK        | L   | 0.947      | -            | -                | -                | -         |    -5.40 | bobz, card, max, mlhzin, nicks     |
|            9 |      946 | 2024-03-14 | Flamengo     | W   | 0.941      | 0.303        | 0.000 (0.000)    | 0.114 (0.032)    | 0 (0.000) |    10.46 | bobz, card, max, mlhzin, nicks     |
|            8 |      974 | 2024-03-13 | Corinthians  | W   | 0.934      | 0.303        | 0.001 (0.000)    | 0.150 (0.042)    | 0 (0.000) |    14.00 | bobz, card, max, mlhzin, nicks     |
|            7 |     1025 | 2024-03-11 | Flamengo     | L   | 0.921      | -            | -                | -                | -         |   -18.58 | bobz, card, max, mlhzin, nicks     |
|            6 |     1436 | 2024-02-22 | Galorys      | L   | 0.801      | -            | -                | -                | -         |    -6.93 | bobz, card, max, mlhzin, nicks     |
|            5 |     1608 | 2024-02-15 | inSanitY     | W   | 0.754      | 0.271        | 0.000 (0.000)    | 0.024 (0.005)    | 0 (0.000) |     5.08 | bobz, card, max, mlhzin, nicks     |
|            4 |     1648 | 2024-02-14 | paiN Academy | W   | 0.748      | 0.271        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.08 | bobz, card, max, mlhzin, nicks     |
|            3 |     3663 | 2023-10-30 | Legacy       | L   | 0.034      | -            | -                | -                | -         |    -0.08 | bobz, brn$, card, diozera, nicks   |
|            2 |     3810 | 2023-10-26 | ODDIK        | L   | 0.007      | -            | -                | -                | -         |    -0.04 | bobz, card, diozera, mlhzin, nicks |
|            1 |     3844 | 2023-10-25 | RED Canids   | L   | 0.000      | -            | -                | -                | -         |    -0.00 | bobz, card, diozera, mlhzin, nicks |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($486.05)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
