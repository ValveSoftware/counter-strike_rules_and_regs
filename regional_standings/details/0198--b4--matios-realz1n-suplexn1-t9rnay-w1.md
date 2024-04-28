### Roster Details<br />
Team Name: B4<br />
Roster: matios, realz1n, supLexN1, t9rnay, w1<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [198](../standings_global.md)<br />
Regional Rank: [61]( ../standings_americas.md)<br />
Final Rank Value:  608.5<br />
<br />
Final Rank Value (608.5) = Starting Rank Value (604.1) + Head To Head Adjustments (4.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.212[<sup>1</sup>](#table2)
- Bounty Collected: 0.186[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.100<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 604.1
- 400 + ( ( 0.100 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 604.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     3275 | 2022-09-04 | ODDIK     | L   | 0.128      | -            | -                | -                | -         |    -1.19 | matios, realz1n, supLexN1, t9rnay, w1 |
|            9 |     3340 | 2022-09-02 | Meta      | L   | 0.115      | -            | -                | -                | -         |    -1.00 | matios, realz1n, supLexN1, t9rnay, w1 |
|            8 |     3346 | 2022-09-02 | ODDIK     | W   | 0.114      | 0.143        | 0.016 (0.000)    | 0.236 (0.004)    | 0 (0.000) |     2.53 | matios, realz1n, supLexN1, t9rnay, w1 |
|            7 |     3488 | 2022-08-27 | Flamengo  | W   | 0.075      | 0.143        | 0.001 (0.000)    | 0.288 (0.003)    | 0 (0.000) |     1.44 | matios, realz1n, supLexN1, t9rnay, w1 |
|            6 |     3548 | 2022-08-26 | ex-Isurus | L   | 0.069      | -            | -                | -                | -         |    -0.41 | matios, realz1n, supLexN1, t9rnay, w1 |
|            5 |     3551 | 2022-08-26 | Sharks    | W   | 0.068      | 0.143        | 0.000 (0.000)    | 0.003 (0.000)    | 0 (0.000) |     0.72 | matios, realz1n, supLexN1, t9rnay, w1 |
|            4 |     3554 | 2022-08-26 | Meta      | W   | 0.068      | 0.143        | 0.010 (0.000)    | 0.302 (0.003)    | 0 (0.000) |     1.55 | matios, realz1n, supLexN1, t9rnay, w1 |
|            3 |     3657 | 2022-08-21 | 9z        | L   | 0.036      | -            | -                | -                | -         |    -0.19 | matios, realz1n, supLexN1, t9rnay, w1 |
|            2 |     3661 | 2022-08-21 | ex-Isurus | W   | 0.035      | 0.143        | 0.013 (0.000)    | 0.171 (0.001)    | 0 (0.000) |     0.91 | matios, realz1n, supLexN1, t9rnay, w1 |
|            1 |     3783 | 2022-08-16 | MIBR      | L   | 0.001      | -            | -                | -                | -         |    -0.00 | matios, realz1n, supLexN1, t9rnay, w1 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($89.39)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
