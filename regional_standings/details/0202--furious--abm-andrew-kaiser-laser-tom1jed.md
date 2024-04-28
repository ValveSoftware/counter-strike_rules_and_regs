### Roster Details<br />
Team Name: Furious<br />
Roster: ABM, Andrew, KAISER, laser, tom1jed<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [202](../standings_global.md)<br />
Regional Rank: [63]( ../standings_americas.md)<br />
Final Rank Value:  592.6<br />
<br />
Final Rank Value (592.6) = Starting Rank Value (629.4) + Head To Head Adjustments (-36.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.249[<sup>1</sup>](#table2)
- Bounty Collected: 0.194[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.112<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 629.4
- 400 + ( ( 0.112 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 629.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |       21 | 2023-02-11 | Fluxo               | L   | 1.000      | -            | -                | -                | -         |    -3.59 | ABM, Andrew, KAISER, laser, tom1jed  |
|           21 |      284 | 2023-01-30 | Boca Juniors        | L   | 1.000      | -            | -                | -                | -         |   -11.93 | ABM, Andrew, KAISER, laser, tom1jed  |
|           20 |      296 | 2023-01-29 | Corinthians         | L   | 1.000      | -            | -                | -                | -         |    -8.66 | ABM, Andrew, KAISER, laser, tom1jed  |
|           19 |      359 | 2023-01-27 | Paquetá             | L   | 1.000      | -            | -                | -                | -         |   -10.25 | ABM, Andrew, laser, tom1jed, vlad    |
|           18 |      395 | 2023-01-26 | TropiCaos           | L   | 1.000      | -            | -                | -                | -         |   -11.27 | ABM, Andrew, KAISER, laser, tom1jed  |
|           17 |      437 | 2023-01-25 | NOORG               | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.041 (0.016)    | 0 (0.000) |    10.30 | ABM, Andrew, KAISER, laser, tom1jed  |
|           16 |      511 | 2023-01-22 | MIBR Academy        | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.056 (0.022)    | 0 (0.000) |    10.80 | ABM, Andrew, KAISER, laser, tom1jed  |
|           15 |      638 | 2023-01-17 | Fluxo               | L   | 1.000      | -            | -                | -                | -         |    -4.09 | ABM, Andrew, KAISER, laser, tom1jed  |
|           14 |     1943 | 2022-10-22 | DNG                 | L   | 0.448      | -            | -                | -                | -         |    -4.75 | ABM, Andrew, KAISER, laser, peqexino |
|           13 |     2648 | 2022-09-24 | DNG                 | L   | 0.261      | -            | -                | -                | -         |    -2.79 | ABM, KAISER, laser, nch, peqexino    |
|           12 |     2689 | 2022-09-23 | Fuscão 1500         | L   | 0.254      | -            | -                | -                | -         |    -2.48 | ABM, KAISER, laser, nch, peqexino    |
|           11 |     2740 | 2022-09-22 | Flamengo            | L   | 0.247      | -            | -                | -                | -         |    -3.36 | ABM, Andrew, KAISER, laser, peqexino |
|           10 |     2855 | 2022-09-18 | Liberty             | W   | 0.220      | 0.384        | 0.000 (0.000)    | 0.053 (0.005)    | 0 (0.000) |     3.05 | ABM, Andrew, KAISER, laser, peqexino |
|            9 |     2879 | 2022-09-17 | 9z                  | L   | 0.214      | -            | -                | -                | -         |    -1.24 | ABM, Andrew, KAISER, laser, peqexino |
|            8 |     2907 | 2022-09-16 | ex-Isurus           | W   | 0.208      | 0.143        | 0.013 (0.000)    | 0.171 (0.005)    | 0 (0.000) |     5.12 | ABM, Andrew, KAISER, laser, peqexino |
|            7 |     2910 | 2022-09-16 | Meta                | W   | 0.207      | 0.143        | 0.010 (0.000)    | 0.302 (0.009)    | 0 (0.000) |     4.59 | ABM, Andrew, KAISER, laser, peqexino |
|            6 |     2946 | 2022-09-15 | ODDIK               | L   | 0.200      | -            | -                | -                | -         |    -2.00 | ABM, Andrew, KAISER, laser, peqexino |
|            5 |     3029 | 2022-09-13 | Ape Gang            | L   | 0.186      | -            | -                | -                | -         |    -3.55 | ABM, Andrew, KAISER, laser, peqexino |
|            4 |     3110 | 2022-09-10 | Los Grandes Academy | W   | 0.168      | 0.384        | 0.000 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     1.15 | ABM, Andrew, KAISER, laser, peqexino |
|            3 |     3199 | 2022-09-08 | Sharks              | L   | 0.154      | -            | -                | -                | -         |    -1.50 | ABM, Andrew, KAISER, laser, peqexino |
|            2 |     3557 | 2022-08-26 | ARCTIC              | L   | 0.067      | -            | -                | -                | -         |    -0.43 | ABM, Andrew, KAISER, laser, peqexino |
|            1 |     3785 | 2022-08-16 | Fluxo               | L   | 0.001      | -            | -                | -                | -         |    -0.01 | ABM, Andrew, KAISER, laser, peqexino |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($454.59)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
