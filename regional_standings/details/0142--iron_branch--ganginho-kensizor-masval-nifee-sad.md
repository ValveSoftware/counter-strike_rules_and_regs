### Roster Details<br />
Team Name: Iron Branch<br />
Roster: Ganginho, kensizor, MaSvAl, nifee, sad<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [142](../standings_global.md)<br />
Regional Rank: [97]( ../standings_europe.md)<br />
Final Rank Value:  727.1<br />
<br />
Final Rank Value (727.1) = Starting Rank Value (681.5) + Head To Head Adjustments (45.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.268[<sup>1</sup>](#table2)
- Bounty Collected: 0.254[<sup>2</sup>](#table1)
- Opponent Network: 0.029[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.138<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 681.5
- 400 + ( ( 0.138 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 681.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      767 | 2022-12-18 | Permitta     | L   | 0.827      | -            | -                | -                | -         |    -6.05 | Ganginho, kensizor, MaSvAl, nifee, sad |
|           11 |      814 | 2022-12-17 | PACT         | W   | 0.819      | 0.300        | 0.016 (0.004)    | 0.188 (0.046)    | 0 (0.000) |    15.06 | Ganginho, kensizor, MaSvAl, nifee, sad |
|           10 |     1011 | 2022-12-09 | HONORIS      | W   | 0.767      | 0.300        | 0.011 (0.002)    | 0.748 (0.172)    | 0 (0.000) |    18.47 | Ganginho, kensizor, MaSvAl, nifee, sad |
|            9 |     2864 | 2022-09-18 | Eternal Fire | L   | 0.219      | -            | -                | -                | -         |    -1.44 | Ganginho, HeavyGod, j3kie, MaSvAl, sad |
|            8 |     2878 | 2022-09-17 | Entropiq     | L   | 0.214      | -            | -                | -                | -         |    -3.09 | Ganginho, HeavyGod, j3kie, MaSvAl, sad |
|            7 |     2917 | 2022-09-16 | 1WIN         | W   | 0.207      | 0.143        | 0.023 (0.001)    | 0.313 (0.009)    | 0 (0.000) |     4.72 | Ganginho, HeavyGod, j3kie, MaSvAl, sad |
|            6 |     2924 | 2022-09-16 | forZe        | W   | 0.206      | 0.143        | 0.047 (0.001)    | 0.708 (0.021)    | 0 (0.000) |     5.41 | Ganginho, HeavyGod, j3kie, MaSvAl, sad |
|            5 |     3068 | 2022-09-11 | NASR         | W   | 0.174      | 0.143        | 0.000 (0.000)    | 0.023 (0.001)    | 0 (0.000) |     1.47 | Ganginho, HeavyGod, j3kie, MaSvAl, sad |
|            4 |     3080 | 2022-09-11 | Young Ninjas | W   | 0.173      | 0.143        | 0.076 (0.002)    | 0.694 (0.017)    | 0 (0.000) |     4.40 | Ganginho, HeavyGod, j3kie, MaSvAl, sad |
|            3 |     3115 | 2022-09-10 | HAVU         | W   | 0.168      | 0.143        | 0.041 (0.001)    | 0.600 (0.014)    | 0 (0.000) |     4.36 | Ganginho, HeavyGod, j3kie, MaSvAl, sad |
|            2 |     3177 | 2022-09-09 | 500          | L   | 0.159      | -            | -                | -                | -         |    -0.50 | Ganginho, HeavyGod, j3kie, MaSvAl, sad |
|            1 |     3204 | 2022-09-08 | Coalesce     | W   | 0.154      | 0.143        | 0.008 (0.000)    | 0.315 (0.007)    | 0 (0.000) |     2.73 | Ganginho, HeavyGod, j3kie, MaSvAl, sad |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($875.91)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
