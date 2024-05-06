### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: alex, es3tag, headtr1ck, k0nfig, REZ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [92](../standings_global.md)<br />
Regional Rank: [61]( ../standings_europe.md)<br />
Final Rank Value:  830.1<br />
<br />
Final Rank Value (830.1) = Starting Rank Value (823.5) + Head To Head Adjustments (6.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.426[<sup>1</sup>](#table2)
- Bounty Collected: 0.322[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.125[<sup>2</sup>](#table1)

The average of these factors is 0.222<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 823.5
- 400 + ( ( 0.222 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 823.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     1917 | 2024-02-15 | SAW           | L   | 0.659      | -            | -                | -                | -         |    -0.86 | alex, es3tag, headtr1ck, k0nfig, REZ    |
|           15 |     1953 | 2024-02-14 | AMKAL         | L   | 0.653      | -            | -                | -                | -         |    -2.46 | alex, es3tag, headtr1ck, k0nfig, REZ    |
|           14 |     1959 | 2024-02-14 | Eternal Fire  | L   | 0.652      | -            | -                | -                | -         |    -0.16 | alex, es3tag, headtr1ck, k0nfig, REZ    |
|           13 |     2270 | 2024-01-26 | G2            | L   | 0.526      | -            | -                | -                | -         |    -0.05 | alex, es3tag, headtr1ck, k0nfig, REZ    |
|           12 |     2329 | 2024-01-23 | Complexity    | W   | 0.506      | 0.581        | 0.262 (0.077)    | 0.374 (0.110)    | 1 (0.506) |    15.69 | alex, es3tag, headtr1ck, k0nfig, REZ    |
|           11 |     2363 | 2024-01-22 | G2            | L   | 0.498      | -            | -                | -                | -         |    -0.05 | alex, es3tag, headtr1ck, k0nfig, REZ    |
|           10 |     2574 | 2024-01-17 | 500           | L   | 0.468      | -            | -                | -                | -         |    -8.06 | alex, es3tag, headtr1ck, k0nfig, REZ    |
|            9 |     2706 | 2024-01-14 | Astralis      | L   | 0.446      | -            | -                | -                | -         |    -0.22 | alex, es3tag, headtr1ck, k0nfig, REZ    |
|            8 |     2744 | 2024-01-13 | Lilmix        | W   | 0.438      | 0.143        | 0.000 (0.000)    | 0.031 (0.002)    | 1 (0.438) |     2.49 | alex, es3tag, headtr1ck, k0nfig, REZ    |
|            7 |     3245 | 2023-12-03 | Alliance      | W   | 0.166      | 0.427        | 0.016 (0.001)    | 0.815 (0.058)    | 1 (0.166) |     3.15 | es3tag, k0nfig, maxster, REZ, Silence   |
|            6 |     3263 | 2023-12-02 | GODSENT       | L   | 0.160      | -            | -                | -                | -         |    -2.94 | es3tag, k0nfig, maxster, REZ, Silence   |
|            5 |     3411 | 2023-11-23 | Natus Vincere | L   | 0.098      | -            | -                | -                | -         |    -0.01 | alex, es3tag, headtr1ck, k0nfig, REZ    |
|            4 |     3426 | 2023-11-22 | FaZe          | L   | 0.091      | -            | -                | -                | -         |    -0.00 | alex, es3tag, headtr1ck, k0nfig, REZ    |
|            3 |     3709 | 2023-11-11 | Falcons       | L   | 0.017      | -            | -                | -                | -         |    -0.03 | es3tag, headtr1ck, k0nfig, maxster, REZ |
|            2 |     3735 | 2023-11-09 | Wings Up      | W   | 0.005      | 0.769        | 0.001 (0.000)    | 0.090 (0.000)    | 1 (0.005) |     0.04 | es3tag, headtr1ck, k0nfig, maxster, REZ |
|            1 |     3740 | 2023-11-09 | FaZe          | L   | 0.003      | -            | -                | -                | -         |     0.00 | es3tag, headtr1ck, k0nfig, maxster, REZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,274.19)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-01-28 |      0.540 | $8,500.00      | $4,589.25       |
| 2023-12-03 |      0.167 | $6,402.00      | $1,068.24       |
| 2023-11-26 |      0.119 | $10,000.00     | $1,194.64       |
| 2023-11-12 |      0.026 | $16,500.00     | $422.06         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
