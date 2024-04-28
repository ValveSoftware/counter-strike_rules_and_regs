### Roster Details<br />
Team Name: Ape Gang<br />
Roster: andizin, christo, pavv, tomaszin, Yokowow<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [210](../standings_global.md)<br />
Regional Rank: [67]( ../standings_americas.md)<br />
Final Rank Value:  565.9<br />
<br />
Final Rank Value (565.9) = Starting Rank Value (551.1) + Head To Head Adjustments (14.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.214[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.075[<sup>2</sup>](#table1)

The average of these factors is 0.074<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 551.1
- 400 + ( ( 0.074 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 551.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     2588 | 2022-09-26 | DNG          | L   | 0.274      | -            | -                | -                | -         |    -2.28 | andizin, christo, pavv, tomaszin, Yokowow |
|           12 |     2656 | 2022-09-24 | ex-Isurus    | L   | 0.260      | -            | -                | -                | -         |    -1.35 | andizin, christo, pavv, tomaszin, Yokowow |
|           11 |     2704 | 2022-09-23 | Meta         | W   | 0.253      | 0.333        | 0.010 (0.001)    | 0.302 (0.025)    | 1 (0.253) |     6.04 | andizin, christo, pavv, tomaszin, Yokowow |
|           10 |     2751 | 2022-09-22 | Meta         | L   | 0.246      | -            | -                | -                | -         |    -1.89 | andizin, christo, pavv, tomaszin, Yokowow |
|            9 |     2780 | 2022-09-21 | Fuscão 1500  | W   | 0.240      | 0.333        | 0.013 (0.001)    | 0.221 (0.018)    | 1 (0.240) |     5.83 | andizin, christo, pavv, tomaszin, Yokowow |
|            8 |     2831 | 2022-09-19 | WINDINGO     | W   | 0.227      | 0.333        | 0.002 (0.000)    | 0.210 (0.016)    | 1 (0.227) |     4.66 | andizin, christo, pavv, tomaszin, Yokowow |
|            7 |     3029 | 2022-09-13 | Furious      | W   | 0.186      | 0.384        | 0.001 (0.000)    | 0.116 (0.008)    | 0 (0.000) |     3.55 | andizin, christo, pavv, tomaszin, Yokowow |
|            6 |     3074 | 2022-09-11 | Redragon     | W   | 0.173      | 0.384        | 0.000 (0.000)    | 0.020 (0.001)    | 0 (0.000) |     1.65 | andizin, christo, pavv, tomaszin, Yokowow |
|            5 |     3603 | 2022-08-23 | Redragon     | L   | 0.047      | -            | -                | -                | -         |    -1.02 | andizin, christo, pavv, refused, Yokowow  |
|            4 |     3640 | 2022-08-22 | WINDINGO     | L   | 0.041      | -            | -                | -                | -         |    -0.44 | andizin, christo, pavv, refused, Yokowow  |
|            3 |     3713 | 2022-08-20 | Corinthians  | L   | 0.026      | -            | -                | -                | -         |    -0.19 | andizin, christo, pavv, refused, Yokowow  |
|            2 |     3747 | 2022-08-18 | MIBR Academy | W   | 0.014      | 0.384        | 0.000 (0.000)    | 0.042 (0.000)    | 0 (0.000) |     0.21 | beg0d, card, insani, lub, spinnie         |
|            1 |     3771 | 2022-08-16 | Boca Juniors | W   | 0.002      | 0.384        | 0.000 (0.000)    | 0.034 (0.000)    | 0 (0.000) |     0.03 | alexer, Bruj, elemeNt, Hezz, MRN1         |

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
