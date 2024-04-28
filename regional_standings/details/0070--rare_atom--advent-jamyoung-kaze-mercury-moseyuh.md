### Roster Details<br />
Team Name: Rare Atom<br />
Roster: advent, JamYoung, Kaze, Mercury, Moseyuh<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [70](../standings_global.md)<br />
Regional Rank: [4]( ../standings_asia.md)<br />
Final Rank Value:  891.4<br />
<br />
Final Rank Value (891.4) = Starting Rank Value (819.1) + Head To Head Adjustments (72.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.453[<sup>1</sup>](#table2)
- Bounty Collected: 0.319[<sup>2</sup>](#table1)
- Opponent Network: 0.046[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.205<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 819.1
- 400 + ( ( 0.205 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 819.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |      481 | 2023-01-24 | Renewal                | L   | 1.000      | -            | -                | -                | -         |   -25.94 | advent, JamYoung, Kaze, Mercury, Moseyuh |
|           16 |      597 | 2023-01-19 | Lynn Vision            | W   | 1.000      | 0.143        | 0.052 (0.007)    | 0.258 (0.037)    | 0 (0.000) |    16.20 | advent, JamYoung, Kaze, Mercury, Moseyuh |
|           15 |      624 | 2023-01-18 | IHC                    | W   | 1.000      | 0.143        | 0.108 (0.015)    | 0.622 (0.089)    | 0 (0.000) |    26.96 | advent, JamYoung, Kaze, Mercury, Moseyuh |
|           14 |      688 | 2023-01-15 | Lynn Vision            | W   | 1.000      | 0.396        | 0.052 (0.021)    | 0.258 (0.102)    | 0 (0.000) |    18.91 | advent, JamYoung, Kaze, Mercury, Moseyuh |
|           13 |      701 | 2023-01-14 | NKT                    | W   | 1.000      | 0.396        | 0.024 (0.010)    | 0.236 (0.093)    | 0 (0.000) |    18.86 | advent, JamYoung, Kaze, Mercury, Moseyuh |
|           12 |      740 | 2022-12-25 | Lynn Vision            | W   | 0.872      | 0.375        | 0.052 (0.017)    | 0.258 (0.084)    | 0 (0.000) |    18.19 | advent, aumaN, JamYoung, Kaze, Mercury   |
|           11 |      744 | 2022-12-25 | TYLOO                  | W   | 0.871      | 0.375        | 0.006 (0.002)    | 0.057 (0.019)    | 0 (0.000) |     9.89 | advent, aumaN, JamYoung, Kaze, Mercury   |
|           10 |      749 | 2022-12-23 | TrEa                   | W   | 0.863      | -            | -                | -                | 0 (0.000) |     2.51 | advent, aumaN, JamYoung, Kaze, Mercury   |
|            9 |      877 | 2022-12-15 | IHC                    | L   | 0.805      | -            | -                | -                | -         |    -1.88 | advent, JamYoung, Kaze, Mercury, Moseyuh |
|            8 |      898 | 2022-12-14 | Lynn Vision            | L   | 0.798      | -            | -                | -                | -         |   -10.21 | advent, JamYoung, Kaze, Mercury, Moseyuh |
|            7 |      919 | 2022-12-13 | Wings Up               | W   | 0.792      | 0.371        | 0.005 (0.002)    | 0.117 (0.034)    | 0 (0.000) |     9.01 | advent, JamYoung, Kaze, Mercury, Moseyuh |
|            6 |     2335 | 2022-10-07 | Invictus International | L   | 0.349      | -            | -                | -                | -         |    -6.87 | advent, JamYoung, Kaze, Mercury, Moseyuh |
|            5 |     2355 | 2022-10-07 | Grayhound              | L   | 0.343      | -            | -                | -                | -         |    -5.23 | advent, JamYoung, Kaze, Mercury, Moseyuh |
|            4 |     3478 | 2022-08-28 | Lynn Vision            | W   | 0.079      | 0.143        | 0.052 (0.001)    | 0.258 (0.003)    | 0 (0.000) |     1.33 | advent, JamYoung, Kaze, Mercury, Moseyuh |
|            3 |     3485 | 2022-08-28 | Wings Up               | W   | 0.078      | 0.143        | 0.005 (0.000)    | 0.117 (0.001)    | 0 (0.000) |     0.86 | advent, JamYoung, Kaze, Mercury, Moseyuh |
|            2 |     3527 | 2022-08-27 | Lynn Vision            | L   | 0.072      | -            | -                | -                | -         |    -1.06 | advent, JamYoung, Kaze, Mercury, Moseyuh |
|            1 |     3534 | 2022-08-27 | Wings Up               | W   | 0.072      | 0.143        | 0.005 (0.000)    | 0.117 (0.001)    | -         |     0.79 | advent, JamYoung, Kaze, Mercury, Moseyuh |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($29,485.09)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-01-15 |      1.000 | $16,244.00     | $16,244.00      |
| 2022-12-25 |      0.872 | $14,330.00     | $12,497.96      |
| 2022-12-18 |      0.826 | $900.00        | $743.14         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
