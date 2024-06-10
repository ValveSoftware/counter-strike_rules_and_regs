### Roster Details<br />
Team Name: Steel Helmet<br />
Roster: 18yM, AE, captainMo, DD, xiaosaGe<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [172](../standings_global.md)<br />
Regional Rank: [19]( ../standings_asia.md)<br />
Final Rank Value:  648.2<br />
<br />
Final Rank Value (648.2) = Starting Rank Value (664.8) + Head To Head Adjustments (-16.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.337[<sup>1</sup>](#table2)
- Bounty Collected: 0.193[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.133<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 664.8
- 400 + ( ( 0.133 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 664.8


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
|           13 |     1870 | 2024-04-09 | Nemiga    | L   | 0.784      | -            | -                | -                | -         |    -0.86 | 18yM, AE, captainMo, DD, xiaosaGe       |
|           12 |     1900 | 2024-04-08 | Astralis  | L   | 0.777      | -            | -                | -                | -         |    -0.03 | 18yM, AE, captainMo, DD, xiaosaGe       |
|           11 |     3339 | 2024-02-01 | GR        | L   | 0.331      | -            | -                | -                | -         |    -5.05 | 18yM, AE, captainMo, DD, xiaosaGe       |
|           10 |     3342 | 2024-02-01 | Newhappy  | L   | 0.331      | -            | -                | -                | -         |    -7.04 | 18yM, AE, captainMo, DD, xiaosaGe       |
|            9 |     3483 | 2024-01-23 | The Huns  | L   | 0.272      | -            | -                | -                | -         |    -5.79 | 18yM, Attacker, captainMo, DD, xiaosaGe |
|            8 |     3487 | 2024-01-23 | Eruption  | W   | 0.271      | 0.143        | 0.000 (0.000)    | 0.030 (0.001)    | 0 (0.000) |     1.65 | 18yM, Attacker, captainMo, DD, xiaosaGe |
|            7 |     3510 | 2024-01-22 | GR        | W   | 0.265      | 0.143        | 0.011 (0.000)    | 0.148 (0.006)    | 0 (0.000) |     4.35 | 18yM, Attacker, captainMo, DD, xiaosaGe |
|            6 |     3593 | 2024-01-20 | Newhappy  | L   | 0.251      | -            | -                | -                | -         |    -5.37 | 18yM, AE, captainMo, DD, xiaosaGe       |
|            5 |     3597 | 2024-01-19 | Nirvana   | W   | 0.250      | 0.143        | 0.000 (0.000)    | 0.008 (0.000)    | 0 (0.000) |     1.44 | 18yM, AE, captainMo, DD, xiaosaGe       |
|            4 |     3656 | 2024-01-18 | Wings Up  | L   | 0.243      | -            | -                | -                | -         |    -5.49 | 18yM, AE, captainMo, DD, xiaosaGe       |
|            3 |     3933 | 2024-01-12 | Rare Atom | W   | 0.198      | 0.143        | 0.010 (0.000)    | 0.093 (0.003)    | 0 (0.000) |     3.30 | 18yM, AE, captainMo, DD, xiaosaGe       |
|            2 |     3935 | 2024-01-12 | Nirvana   | W   | 0.198      | 0.143        | 0.000 (0.000)    | 0.008 (0.000)    | 0 (0.000) |     1.16 | 18yM, AE, captainMo, DD, xiaosaGe       |
|            1 |     3938 | 2024-01-12 | WDNMD     | W   | 0.197      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.15 | 18yM, AE, captainMo, DD, xiaosaGe       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,272.25)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
