### Roster Details<br />
Team Name: MIBR Academy<br />
Roster: beg0d, card, insani, lub, spinnie<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [215](../standings_global.md)<br />
Regional Rank: [70]( ../standings_americas.md)<br />
Final Rank Value:  538.3<br />
<br />
Final Rank Value (538.3) = Starting Rank Value (542.9) + Head To Head Adjustments (-4.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.264[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.070<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 542.9
- 400 + ( ( 0.070 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 542.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |     1817 | 2022-10-28 | Spirit Academy  | L   | 0.487      | -            | -                | -                | -         |    -1.99 | beg0d, card, insani, lub, spinnie |
|           20 |     1861 | 2022-10-26 | ENCE Academy    | L   | 0.473      | -            | -                | -                | -         |    -3.67 | beg0d, card, insani, lub, spinnie |
|           19 |     1881 | 2022-10-25 | PROSPECTS       | L   | 0.467      | -            | -                | -                | -         |    -1.41 | beg0d, card, insani, lub, spinnie |
|           18 |     1901 | 2022-10-24 | PROSPECTS       | L   | 0.460      | -            | -                | -                | -         |    -1.41 | beg0d, card, insani, lub, spinnie |
|           17 |     1911 | 2022-10-24 | Astralis Talent | L   | 0.459      | -            | -                | -                | -         |    -1.62 | beg0d, card, insani, lub, spinnie |
|           16 |     2065 | 2022-10-18 | Young Ninjas    | W   | 0.419      | 0.500        | 0.076 (0.016)    | 0.694 (0.146)    | 0 (0.000) |    11.99 | beg0d, card, insani, lub, spinnie |
|           15 |     2088 | 2022-10-17 | Spirit Academy  | L   | 0.412      | -            | -                | -                | -         |    -1.91 | beg0d, card, insani, lub, spinnie |
|           14 |     2117 | 2022-10-16 | BIG Academy     | L   | 0.405      | -            | -                | -                | -         |    -0.81 | beg0d, card, insani, lub, spinnie |
|           13 |     2142 | 2022-10-15 | Young Ninjas    | L   | 0.399      | -            | -                | -                | -         |    -1.17 | beg0d, card, insani, lub, spinnie |
|           12 |     2185 | 2022-10-14 | ENCE Academy    | L   | 0.393      | -            | -                | -                | -         |    -3.16 | beg0d, card, insani, lub, spinnie |
|           11 |     2218 | 2022-10-13 | Astralis Talent | L   | 0.386      | -            | -                | -                | -         |    -1.50 | beg0d, card, insani, lub, spinnie |
|           10 |     2259 | 2022-10-12 | BIG Academy     | L   | 0.379      | -            | -                | -                | -         |    -0.75 | beg0d, card, insani, lub, spinnie |
|            9 |     2728 | 2022-09-22 | ex-Isurus       | L   | 0.249      | -            | -                | -                | -         |    -1.19 | beg0d, card, insani, lub, spinnie |
|            8 |     2886 | 2022-09-17 | Boca Juniors    | W   | 0.213      | 0.384        | 0.000 (0.000)    | 0.034 (0.003)    | 0 (0.000) |     3.71 | beg0d, card, insani, lub, spinnie |
|            7 |     2989 | 2022-09-14 | B4 Academy      | W   | 0.194      | 0.384        | 0.000 (0.000)    | 0.007 (0.001)    | 0 (0.000) |     1.90 | beg0d, card, insani, lub, spinnie |
|            6 |     3042 | 2022-09-12 | SWS             | W   | 0.181      | 0.384        | 0.001 (0.000)    | 0.125 (0.009)    | 0 (0.000) |     3.73 | beg0d, card, insani, lub, spinnie |
|            5 |     3060 | 2022-09-11 | WINDINGO        | L   | 0.175      | -            | -                | -                | -         |    -1.81 | beg0d, card, insani, lub, spinnie |
|            4 |     3113 | 2022-09-10 | O PLANO         | L   | 0.168      | -            | -                | -                | -         |    -2.67 | beg0d, card, insani, lub, spinnie |
|            3 |     3600 | 2022-08-23 | ex-Isurus       | L   | 0.047      | -            | -                | -                | -         |    -0.21 | beg0d, card, insani, lub, spinnie |
|            2 |     3736 | 2022-08-19 | Redragon        | L   | 0.021      | -            | -                | -                | -         |    -0.45 | beg0d, card, insani, lub, spinnie |
|            1 |     3747 | 2022-08-18 | Ape Gang        | L   | 0.014      | -            | -                | -                | -         |    -0.21 | beg0d, card, insani, lub, spinnie |

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
