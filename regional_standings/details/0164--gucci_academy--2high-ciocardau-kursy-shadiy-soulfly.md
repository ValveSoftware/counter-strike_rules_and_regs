### Roster Details<br />
Team Name: Gucci Academy<br />
Roster: 2high, Ciocardau, Kursy, shadiy, soulfly<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [164](../standings_global.md)<br />
Regional Rank: [109]( ../standings_europe.md)<br />
Final Rank Value:  609.9<br />
<br />
Final Rank Value (609.9) = Starting Rank Value (613.2) + Head To Head Adjustments (-3.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.197[<sup>1</sup>](#table2)
- Bounty Collected: 0.235[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.003[<sup>2</sup>](#table1)

The average of these factors is 0.110<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 613.2
- 400 + ( ( 0.110 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 613.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     3226 | 2024-01-17 | Into the Breach  | L   | 0.313      | -            | -                | -                | -         |    -3.81 | 2high, Ciocardau, Kursy, shadiy, soulfly |
|            9 |     3288 | 2024-01-16 | Rebels           | L   | 0.306      | -            | -                | -                | -         |    -0.64 | 2high, Ciocardau, Kursy, shadiy, soulfly |
|            8 |     3423 | 2024-01-12 | Nexus            | L   | 0.280      | -            | -                | -                | -         |    -1.73 | 2high, Ciocardau, Kursy, shadiy, soulfly |
|            7 |     3474 | 2024-01-11 | Space            | L   | 0.272      | -            | -                | -                | -         |    -2.10 | 2high, Ciocardau, Kursy, shadiy, soulfly |
|            6 |     3481 | 2024-01-10 | Zero Tenacity    | W   | 0.267      | 0.143        | 0.147 (0.006)    | 1.000 (0.038)    | 0 (0.000) |     7.76 | 2high, Ciocardau, Kursy, shadiy, soulfly |
|            5 |     3595 | 2023-12-19 | PERA             | L   | 0.118      | -            | -                | -                | -         |    -0.67 | 2high, adeX, Ciocardau, Goody, shadiy    |
|            4 |     3599 | 2023-12-19 | GUN5             | L   | 0.117      | -            | -                | -                | -         |    -2.57 | 2high, adeX, Ciocardau, Goody, shadiy    |
|            3 |     3898 | 2023-12-03 | VERYGOLD         | W   | 0.011      | 0.292        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.011) |     0.15 | 2high, adeX, Ciocardau, Goody, shadiy    |
|            2 |     3902 | 2023-12-03 | 11 minutos tarde | W   | 0.010      | 0.292        | 0.007 (0.000)    | 0.083 (0.000)    | 1 (0.010) |     0.23 | 2high, adeX, Ciocardau, Goody, shadiy    |
|            1 |     3904 | 2023-12-03 | RGW              | W   | 0.010      | 0.292        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.010) |     0.07 | 2high, adeX, Ciocardau, Goody, shadiy    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($24.98)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
