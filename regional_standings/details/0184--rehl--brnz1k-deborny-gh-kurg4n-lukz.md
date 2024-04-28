### Roster Details<br />
Team Name: Rehl<br />
Roster: BRNZ1K, DebornY, gh, kurg4n, lukz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [184](../standings_global.md)<br />
Regional Rank: [53]( ../standings_americas.md)<br />
Final Rank Value:  636.2<br />
<br />
Final Rank Value (636.2) = Starting Rank Value (641.4) + Head To Head Adjustments (-5.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.246[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.118<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 641.4
- 400 + ( ( 0.118 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 641.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     1252 | 2022-12-02 | Corinthians  | L   | 0.719      | -            | -                | -                | -         |    -7.22 | BRNZ1K, DebornY, gh, kurg4n, lukz    |
|           12 |     1299 | 2022-11-30 | Hype         | W   | 0.707      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.41 | BRNZ1K, DebornY, Domingues, gh, lukz |
|           11 |     1335 | 2022-11-29 | MIBR Academy | L   | 0.699      | -            | -                | -                | -         |   -15.00 | BRNZ1K, DebornY, gh, kurg4n, lukz    |
|           10 |     1422 | 2022-11-26 | NO ORG       | W   | 0.679      | 0.384        | 0.001 (0.000)    | 0.040 (0.011)    | 0 (0.000) |     9.32 | BRNZ1K, DebornY, gh, kurg4n, lukz    |
|            9 |     1453 | 2022-11-25 | INTZ         | L   | 0.673      | -            | -                | -                | -         |    -7.72 | BRNZ1K, DebornY, gh, kurg4n, lukz    |
|            8 |     1815 | 2022-10-28 | INTZ         | L   | 0.487      | -            | -                | -                | -         |    -5.77 | BRNZ1K, DebornY, gh, kurg4n, lukz    |
|            7 |     1960 | 2022-10-22 | DNG          | W   | 0.446      | 0.371        | 0.004 (0.001)    | 0.113 (0.019)    | 0 (0.000) |     8.97 | BRNZ1K, DebornY, gh, kurg4n, lukz    |
|            6 |     1987 | 2022-10-21 | Paquetá      | L   | 0.440      | -            | -                | -                | -         |    -5.09 | BRNZ1K, DebornY, gh, kurg4n, lukz    |
|            5 |     2013 | 2022-10-20 | INTZ         | W   | 0.433      | 0.371        | 0.010 (0.002)    | 0.304 (0.049)    | 0 (0.000) |     8.54 | BRNZ1K, DebornY, gh, kurg4n, lukz    |
|            4 |     2031 | 2022-10-19 | Liberty      | W   | 0.428      | 0.371        | 0.000 (0.000)    | 0.053 (0.008)    | 0 (0.000) |     5.67 | BRNZ1K, DebornY, gh, kurg4n, lukz    |
|            3 |     3100 | 2022-09-10 | Paquetá      | L   | 0.168      | -            | -                | -                | -         |    -2.09 | BRNZ1K, DebornY, gh, kurg4n, phx     |
|            2 |     3106 | 2022-09-10 | Boca Juniors | W   | 0.168      | 0.143        | 0.000 (0.000)    | 0.034 (0.001)    | 0 (0.000) |     2.25 | BRNZ1K, DebornY, gh, kurg4n, phx     |
|            1 |     3201 | 2022-09-08 | Fuscão 1500  | L   | 0.154      | -            | -                | -                | -         |    -1.53 | BRNZ1K, DebornY, gh, kurg4n, phx     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($400.95)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
