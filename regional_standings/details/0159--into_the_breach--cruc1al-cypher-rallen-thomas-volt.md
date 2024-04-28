### Roster Details<br />
Team Name: Into the Breach<br />
Roster: CRUC1AL, CYPHER, rallen, Thomas, volt<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [159](../standings_global.md)<br />
Regional Rank: [104]( ../standings_europe.md)<br />
Final Rank Value:  695.7<br />
<br />
Final Rank Value (695.7) = Starting Rank Value (575.4) + Head To Head Adjustments (120.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.275[<sup>2</sup>](#table1)
- Opponent Network: 0.068[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.086<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 575.4
- 400 + ( ( 0.086 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 575.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |       10 | 2023-02-12 | FTW             | L   | 1.000      | -            | -                | -                | -         |   -11.26 | CRUC1AL, CYPHER, rallen, Thomas, volt   |
|            9 |       46 | 2023-02-10 | Spirit Academy  | L   | 1.000      | -            | -                | -                | -         |    -8.11 | CRUC1AL, CYPHER, rallen, Thomas, volt   |
|            8 |       64 | 2023-02-09 | Young Ninjas    | L   | 1.000      | -            | -                | -                | -         |    -7.64 | CRUC1AL, CYPHER, rallen, Thomas, volt   |
|            7 |      115 | 2023-02-06 | Nexus           | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.542 (0.077)    | 0 (0.000) |    21.70 | CRUC1AL, CYPHER, rallen, Thomas, volt   |
|            6 |      120 | 2023-02-06 | Tricked         | W   | 1.000      | 0.435        | 0.034 (0.015)    | 0.954 (0.415)    | 0 (0.000) |    23.41 | CRUC1AL, CYPHER, rallen, Thomas, volt   |
|            5 |      195 | 2023-02-03 | JANO            | W   | 1.000      | 0.143        | 0.008 (0.001)    | 0.307 (0.044)    | 0 (0.000) |    17.77 | CRUC1AL, CYPHER, rallen, Thomas, volt   |
|            4 |      234 | 2023-02-01 | NAVI Junior     | W   | 1.000      | 0.143        | 0.022 (0.003)    | 0.108 (0.015)    | 0 (0.000) |    18.89 | Dem0N, froz1k, rendY, UNBR0KEN, yab0ku- |
|            3 |      308 | 2023-01-29 | Viperio         | W   | 1.000      | 0.143        | 0.007 (0.001)    | 0.192 (0.027)    | 0 (0.000) |    19.48 | arTisT, bevve, Girafffe, Gizmy, MMS     |
|            2 |      382 | 2023-01-27 | ALTERNATE aTTaX | W   | 1.000      | 0.143        | 0.008 (0.001)    | 0.486 (0.069)    | 0 (0.000) |    23.36 | CRUC1AL, CYPHER, rallen, Thomas, volt   |
|            1 |      387 | 2023-01-27 | Zero Tenacity   | W   | 1.000      | 0.143        | 0.011 (0.002)    | 0.210 (0.030)    | 0 (0.000) |    22.67 | CRUC1AL, CYPHER, rallen, Thomas, volt   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
