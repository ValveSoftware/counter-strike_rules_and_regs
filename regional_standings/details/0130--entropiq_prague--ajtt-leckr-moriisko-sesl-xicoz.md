### Roster Details<br />
Team Name: Entropiq Prague<br />
Roster: AJTT, leckr, MoriiSko, sesL, xicoz<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [130](../standings_global.md)<br />
Regional Rank: [89]( ../standings_europe.md)<br />
Final Rank Value:  740.5<br />
<br />
Final Rank Value (740.5) = Starting Rank Value (738.4) + Head To Head Adjustments (2.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.318[<sup>1</sup>](#table2)
- Bounty Collected: 0.216[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.122[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 738.4
- 400 + ( ( 0.165 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 738.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |     1498 | 2022-11-23 | Enterprise      | L   | 0.659      | -            | -                | -                | -         |    -6.55 | AJTT, leckr, MoriiSko, sesL, xicoz |
|           18 |     1510 | 2022-11-22 | Cryptova        | W   | 0.654      | 0.333        | 0.005 (0.001)    | 0.047 (0.010)    | 0 (0.000) |     9.43 | AJTT, leckr, MoriiSko, sesL, xicoz |
|           17 |     1729 | 2022-11-04 | eSuba           | L   | 0.533      | -            | -                | -                | -         |    -4.47 | AJTT, leckr, MoriiSko, sesL, xicoz |
|           16 |     2147 | 2022-10-15 | eSuba           | L   | 0.399      | -            | -                | -                | -         |    -3.38 | AJTT, leckr, MoriiSko, sesL, xicoz |
|           15 |     2157 | 2022-10-15 | Cryptova        | W   | 0.398      | 0.360        | 0.005 (0.001)    | 0.047 (0.007)    | 1 (0.398) |     5.93 | AJTT, leckr, MoriiSko, sesL, xicoz |
|           14 |     2200 | 2022-10-14 | Sampi           | W   | 0.391      | 0.360        | 0.001 (0.000)    | 0.016 (0.002)    | 1 (0.391) |     4.58 | AJTT, leckr, MoriiSko, sesL, xicoz |
|           13 |     2211 | 2022-10-13 | Wolsung         | L   | 0.387      | -            | -                | -                | -         |    -9.17 | AJTT, leckr, MoriiSko, sesL, xicoz |
|           12 |     2231 | 2022-10-13 | GLORE           | W   | 0.384      | 0.360        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.384) |     1.54 | AJTT, leckr, MoriiSko, sesL, xicoz |
|           11 |     2254 | 2022-10-12 | Enterprise      | L   | 0.379      | -            | -                | -                | -         |    -3.58 | AJTT, leckr, MoriiSko, sesL, xicoz |
|           10 |     2299 | 2022-10-10 | Cryptova        | W   | 0.365      | 0.143        | 0.005 (0.000)    | 0.047 (0.002)    | 0 (0.000) |     5.40 | AJTT, leckr, MoriiSko, sesL, xicoz |
|            9 |     2306 | 2022-10-09 | Anonymo         | W   | 0.360      | 0.143        | 0.000 (0.000)    | 0.388 (0.020)    | 0 (0.000) |     3.41 | AJTT, leckr, MoriiSko, sesL, xicoz |
|            8 |     2332 | 2022-10-08 | SINNERS         | L   | 0.351      | -            | -                | -                | -         |    -2.04 | AJTT, leckr, MoriiSko, sesL, xicoz |
|            7 |     2345 | 2022-10-07 | Enterprise      | L   | 0.346      | -            | -                | -                | -         |    -3.35 | AJTT, leckr, MoriiSko, sesL, xicoz |
|            6 |     2480 | 2022-10-01 | Cryptova        | W   | 0.304      | 0.143        | 0.005 (0.000)    | 0.047 (0.002)    | 0 (0.000) |     4.53 | AJTT, leckr, MoriiSko, sesL, xicoz |
|            5 |     2952 | 2022-09-15 | eSuba           | L   | 0.200      | -            | -                | -                | -         |    -1.60 | AJTT, leckr, MoriiSko, sesL, xicoz |
|            4 |     3086 | 2022-09-11 | Anonymo         | W   | 0.172      | 0.143        | 0.000 (0.000)    | 0.388 (0.010)    | 0 (0.000) |     1.59 | AJTT, leckr, MoriiSko, sesL, xicoz |
|            3 |     3264 | 2022-09-05 | Bad News Eagles | L   | 0.133      | -            | -                | -                | -         |    -0.40 | AJTT, leckr, MoriiSko, sesL, xicoz |
|            2 |     3322 | 2022-09-03 | Sampi           | W   | 0.119      | 0.143        | 0.001 (0.000)    | 0.016 (0.000)    | 0 (0.000) |     1.38 | AJTT, leckr, MoriiSko, sesL, xicoz |
|            1 |     3330 | 2022-09-03 | Enterprise      | L   | 0.119      | -            | -                | -                | -         |    -1.16 | AJTT, leckr, MoriiSko, sesL, xicoz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,399.70)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-11-24 |      0.667 | $870.00        | $580.25         |
| 2022-11-06 |      0.547 | $2,600.00      | $1,422.02       |
| 2022-10-16 |      0.405 | $1,975.00      | $800.03         |
| 2022-10-08 |      0.352 | $1,190.00      | $419.46         |
| 2022-09-05 |      0.133 | $1,340.00      | $177.93         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
