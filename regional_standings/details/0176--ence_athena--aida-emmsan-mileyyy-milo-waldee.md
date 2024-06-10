### Roster Details<br />
Team Name: ENCE Athena<br />
Roster: Aida, Emmsan, Mileyyy, miLo, Waldee<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [176](../standings_global.md)<br />
Regional Rank: [109]( ../standings_europe.md)<br />
Final Rank Value:  628.3<br />
<br />
Final Rank Value (628.3) = Starting Rank Value (657.4) + Head To Head Adjustments (-29.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.297[<sup>1</sup>](#table2)
- Bounty Collected: 0.215[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.129<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 657.4
- 400 + ( ( 0.129 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 657.4


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
|           12 |      126 | 2024-06-08 | Crescent fe     | L   | 1.000      | -            | -                | -                | -         |   -14.49 | Aida, Emmsan, Mileyyy, miLo, Waldee |
|           11 |     1347 | 2024-04-27 | NIP Impact      | L   | 0.905      | -            | -                | -                | -         |   -10.05 | Aida, Emmsan, miLo, Waldee, xia     |
|           10 |     1532 | 2024-04-19 | Astralis W      | W   | 0.854      | 0.331        | 0.002 (0.001)    | 0.049 (0.014)    | 0 (0.000) |    11.90 | Aida, Emmsan, miLo, Waldee, xia     |
|            9 |     1912 | 2024-04-07 | ex-FORZE Ladies | L   | 0.774      | -            | -                | -                | -         |   -12.44 | Aida, Emmsan, miLo, Waldee, xia     |
|            8 |     1936 | 2024-04-06 | Imperial fe     | L   | 0.765      | -            | -                | -                | -         |    -1.96 | Aida, Emmsan, miLo, Waldee, xia     |
|            7 |     1985 | 2024-04-04 | BIG EQUIPA      | L   | 0.753      | -            | -                | -                | -         |    -7.23 | Aida, Emmsan, miLo, Waldee, xia     |
|            6 |     2157 | 2024-03-27 | Imperial fe     | L   | 0.701      | -            | -                | -                | -         |    -1.90 | Aida, Emmsan, miLo, Waldee, xia     |
|            5 |     2274 | 2024-03-20 | NIP Impact      | L   | 0.654      | -            | -                | -                | -         |    -9.03 | Aida, Emmsan, miLo, Waldee, xia     |
|            4 |     2426 | 2024-03-13 | ex-GUILD fe     | W   | 0.607      | 0.331        | 0.005 (0.001)    | 0.134 (0.027)    | 0 (0.000) |     9.81 | Aida, Emmsan, miLo, Waldee, xia     |
|            3 |     2824 | 2024-02-25 | NAVI Javelins   | L   | 0.492      | -            | -                | -                | -         |    -3.75 | Aida, Emmsan, miLo, Waldee, xia     |
|            2 |     2854 | 2024-02-24 | Spirit fe       | W   | 0.486      | 0.238        | 0.005 (0.001)    | 0.065 (0.007)    | 0 (0.000) |     7.57 | Aida, Emmsan, miLo, Waldee, xia     |
|            1 |     3096 | 2024-02-14 | more whiskey    | W   | 0.421      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.52 | Aida, Emmsan, miLo, Waldee, xia     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,300.48)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-08 |      1.000 | $100.00        | $100.00         |
| 2024-04-27 |      0.906 | $107.00        | $96.91          |
| 2024-04-21 |      0.867 | $1,050.00      | $910.15         |
| 2024-04-07 |      0.774 | $250.00        | $193.41         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
