### Roster Details<br />
Team Name: 777<br />
Roster: Affava, Hagmeister, MadeInRed, Viktha, Wenba<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [118](../standings_global.md)<br />
Regional Rank: [79]( ../standings_europe.md)<br />
Final Rank Value:  736.6<br />
<br />
Final Rank Value (736.6) = Starting Rank Value (713.0) + Head To Head Adjustments (23.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.386[<sup>1</sup>](#table2)
- Bounty Collected: 0.246[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.161<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 713.0
- 400 + ( ( 0.161 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 713.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |       69 | 2024-05-26 | Metizport X    | W   | 1.000      | 0.322        | 0.008 (0.002)    | 0.041 (0.013)    | 0 (0.000) |    12.31 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            9 |      296 | 2024-05-18 | DMS            | L   | 1.000      | -            | -                | -                | -         |   -14.50 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            8 |      344 | 2024-05-17 | Space          | W   | 1.000      | 0.143        | 0.007 (0.001)    | 0.437 (0.062)    | 0 (0.000) |    19.81 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            7 |      372 | 2024-05-16 | Rounds         | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.42 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            6 |      411 | 2024-05-15 | GUN5           | L   | 1.000      | -            | -                | -                | -         |   -16.12 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            5 |      554 | 2024-05-11 | Metizport X    | W   | 1.000      | 0.322        | 0.008 (0.002)    | 0.041 (0.013)    | 0 (0.000) |    12.45 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            4 |      834 | 2024-04-27 | Sashi          | L   | 0.986      | -            | -                | -                | -         |    -2.38 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            3 |      845 | 2024-04-27 | Preasy         | W   | 0.985      | 0.336        | 0.008 (0.003)    | 0.122 (0.040)    | 0 (0.000) |    17.30 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            2 |     1211 | 2024-04-13 | En av de lette | L   | 0.892      | -            | -                | -                | -         |   -12.92 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            1 |     1820 | 2024-03-17 | INFURITY       | W   | 0.713      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.28 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,763.27)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      1.000 | $3,864.00      | $3,864.00       |
| 2024-04-27 |      0.986 | $2,655.00      | $2,617.84       |
| 2024-04-13 |      0.892 | $1,436.00      | $1,281.43       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
