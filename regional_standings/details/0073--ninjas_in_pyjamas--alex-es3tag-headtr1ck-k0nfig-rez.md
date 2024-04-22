### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: alex, es3tag, headtr1ck, k0nfig, REZ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [73](../standings_global.md)<br />
Regional Rank: [47]( ../standings_europe.md)<br />
Final Rank Value:  859.0<br />
<br />
Final Rank Value (859.0) = Starting Rank Value (864.1) + Head To Head Adjustments (-5.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.448[<sup>1</sup>](#table2)
- Bounty Collected: 0.331[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.160[<sup>2</sup>](#table1)

The average of these factors is 0.240<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 864.1
- 400 + ( ( 0.240 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 864.1


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
|           21 |     1621 | 2024-02-15 | SAW           | L   | 0.752      | -            | -                | -                | -         |    -2.78 | alex, es3tag, headtr1ck, k0nfig, REZ    |
|           20 |     1657 | 2024-02-14 | AMKAL         | L   | 0.746      | -            | -                | -                | -         |    -7.12 | alex, es3tag, headtr1ck, k0nfig, REZ    |
|           19 |     1663 | 2024-02-14 | Eternal Fire  | L   | 0.745      | -            | -                | -                | -         |    -0.34 | alex, es3tag, headtr1ck, k0nfig, REZ    |
|           18 |     1974 | 2024-01-26 | G2            | L   | 0.619      | -            | -                | -                | -         |    -0.07 | alex, es3tag, headtr1ck, k0nfig, REZ    |
|           17 |     2033 | 2024-01-23 | Complexity    | W   | 0.599      | 0.581        | 0.264 (0.092)    | 0.353 (0.123)    | 1 (0.599) |    17.91 | alex, es3tag, headtr1ck, k0nfig, REZ    |
|           16 |     2067 | 2024-01-22 | G2            | L   | 0.591      | -            | -                | -                | -         |    -0.06 | alex, es3tag, headtr1ck, k0nfig, REZ    |
|           15 |     2278 | 2024-01-17 | 500           | L   | 0.561      | -            | -                | -                | -         |   -13.47 | alex, es3tag, headtr1ck, k0nfig, REZ    |
|           14 |     2410 | 2024-01-14 | Astralis      | L   | 0.539      | -            | -                | -                | -         |    -0.83 | alex, es3tag, headtr1ck, k0nfig, REZ    |
|           13 |     2448 | 2024-01-13 | Lilmix        | W   | 0.531      | 0.143        | 0.000 (0.000)    | 0.041 (0.003)    | 1 (0.531) |     2.46 | alex, es3tag, headtr1ck, k0nfig, REZ    |
|           12 |     2949 | 2023-12-03 | Alliance      | W   | 0.259      | 0.427        | 0.020 (0.002)    | 0.855 (0.095)    | 1 (0.259) |     4.63 | es3tag, k0nfig, maxster, REZ, Silence   |
|           11 |     2967 | 2023-12-02 | GODSENT       | L   | 0.254      | -            | -                | -                | -         |    -4.65 | es3tag, k0nfig, maxster, REZ, Silence   |
|           10 |     3115 | 2023-11-23 | Natus Vincere | L   | 0.191      | -            | -                | -                | -         |    -0.01 | alex, es3tag, headtr1ck, k0nfig, REZ    |
|            9 |     3130 | 2023-11-22 | FaZe          | L   | 0.184      | -            | -                | -                | -         |    -0.01 | alex, es3tag, headtr1ck, k0nfig, REZ    |
|            8 |     3413 | 2023-11-11 | Falcons       | L   | 0.111      | -            | -                | -                | -         |    -0.29 | es3tag, headtr1ck, k0nfig, maxster, REZ |
|            7 |     3439 | 2023-11-09 | Wings Up      | W   | 0.099      | 0.769        | 0.005 (0.000)    | 0.111 (0.008)    | 1 (0.099) |     0.76 | es3tag, headtr1ck, k0nfig, maxster, REZ |
|            6 |     3444 | 2023-11-09 | FaZe          | L   | 0.097      | -            | -                | -                | -         |    -0.01 | es3tag, headtr1ck, k0nfig, maxster, REZ |
|            5 |     3701 | 2023-10-29 | OG            | L   | 0.027      | -            | -                | -                | -         |    -0.67 | es3tag, headtr1ck, k0nfig, maxster, REZ |
|            4 |     3757 | 2023-10-28 | Monte         | L   | 0.019      | -            | -                | -                | -         |    -0.08 | es3tag, headtr1ck, k0nfig, maxster, REZ |
|            3 |     3768 | 2023-10-28 | fnatic        | L   | 0.017      | -            | -                | -                | -         |    -0.48 | es3tag, headtr1ck, k0nfig, maxster, REZ |
|            2 |     3789 | 2023-10-27 | Virtus.pro    | L   | 0.013      | -            | -                | -                | -         |    -0.01 | es3tag, headtr1ck, k0nfig, maxster, REZ |
|            1 |     3812 | 2023-10-26 | fnatic        | W   | 0.006      | 0.624        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     0.02 | es3tag, headtr1ck, k0nfig, maxster, REZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,137.26)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-01-28 |      0.633 | $8,500.00      | $5,382.35       |
| 2023-12-03 |      0.260 | $6,402.00      | $1,665.59       |
| 2023-11-26 |      0.213 | $10,000.00     | $2,127.70       |
| 2023-11-12 |      0.119 | $16,500.00     | $1,961.61       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
