### Roster Details<br />
Team Name: Steel Helmet<br />
Roster: 18yM, AE, captainMo, DD, xiaosaGe<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [163](../standings_global.md)<br />
Regional Rank: [18]( ../standings_asia.md)<br />
Final Rank Value:  662.5<br />
<br />
Final Rank Value (662.5) = Starting Rank Value (686.7) + Head To Head Adjustments (-24.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.373[<sup>1</sup>](#table2)
- Bounty Collected: 0.215[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.148<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 686.7
- 400 + ( ( 0.148 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 686.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      423 | 2024-04-09 | Nemiga    | L   | 1.000      | -            | -                | -                | -         |    -4.55 | 18yM, AE, captainMo, DD, xiaosaGe       |
|           13 |      453 | 2024-04-08 | Astralis  | L   | 1.000      | -            | -                | -                | -         |    -0.63 | 18yM, AE, captainMo, DD, xiaosaGe       |
|           12 |     1892 | 2024-02-01 | GR        | L   | 0.658      | -            | -                | -                | -         |   -11.26 | 18yM, AE, captainMo, DD, xiaosaGe       |
|           11 |     1895 | 2024-02-01 | Newhappy  | L   | 0.657      | -            | -                | -                | -         |    -9.80 | 18yM, AE, captainMo, DD, xiaosaGe       |
|           10 |     2036 | 2024-01-23 | The Huns  | L   | 0.598      | -            | -                | -                | -         |   -12.18 | 18yM, Attacker, captainMo, DD, xiaosaGe |
|            9 |     2040 | 2024-01-23 | Eruption  | W   | 0.598      | 0.143        | 0.000 (0.000)    | 0.091 (0.008)    | 0 (0.000) |     6.99 | 18yM, Attacker, captainMo, DD, xiaosaGe |
|            8 |     2063 | 2024-01-22 | GR        | W   | 0.592      | 0.143        | 0.005 (0.000)    | 0.267 (0.023)    | 0 (0.000) |     8.32 | 18yM, Attacker, captainMo, DD, xiaosaGe |
|            7 |     2146 | 2024-01-20 | Newhappy  | L   | 0.577      | -            | -                | -                | -         |    -8.28 | 18yM, AE, captainMo, DD, xiaosaGe       |
|            6 |     2150 | 2024-01-19 | Nirvana   | W   | 0.576      | 0.143        | 0.000 (0.000)    | 0.024 (0.002)    | 0 (0.000) |     2.91 | 18yM, AE, captainMo, DD, xiaosaGe       |
|            5 |     2209 | 2024-01-18 | Wings Up  | L   | 0.570      | -            | -                | -                | -         |    -9.82 | 18yM, AE, captainMo, DD, xiaosaGe       |
|            4 |     2486 | 2024-01-12 | Rare Atom | W   | 0.525      | 0.143        | 0.024 (0.002)    | 0.233 (0.017)    | 0 (0.000) |     8.97 | 18yM, AE, captainMo, DD, xiaosaGe       |
|            3 |     2488 | 2024-01-12 | Nirvana   | W   | 0.524      | 0.143        | 0.000 (0.000)    | 0.024 (0.002)    | 0 (0.000) |     2.82 | 18yM, AE, captainMo, DD, xiaosaGe       |
|            2 |     2491 | 2024-01-12 | WDNMD     | W   | 0.524      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.75 | 18yM, AE, captainMo, DD, xiaosaGe       |
|            1 |     3568 | 2023-11-03 | TYLOO     | L   | 0.057      | -            | -                | -                | -         |    -0.43 | 18yM, AE, captainMo, DD, xiaosaGe       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,000.00)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
