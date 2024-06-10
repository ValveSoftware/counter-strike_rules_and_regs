### Roster Details<br />
Team Name: Crescent fe<br />
Roster: akiyanora, amore, ayaka, Margo, meo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [168](../standings_global.md)<br />
Regional Rank: [107]( ../standings_europe.md)<br />
Final Rank Value:  656.5<br />
<br />
Final Rank Value (656.5) = Starting Rank Value (675.1) + Head To Head Adjustments (-18.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.318[<sup>1</sup>](#table2)
- Bounty Collected: 0.225[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.138<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 675.1
- 400 + ( ( 0.138 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 675.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      102 | 2024-06-08 | NOFEAR5           | L   | 1.000      | -            | -                | -                | -         |   -14.83 | akiyanora, amore, ayaka, Margo, meo       |
|           13 |      126 | 2024-06-08 | ENCE Athena       | W   | 1.000      | 0.270        | 0.004 (0.001)    | 0.092 (0.025)    | 0 (0.000) |    14.49 | akiyanora, amore, ayaka, Margo, meo       |
|           12 |      566 | 2024-05-26 | NIP Impact        | W   | 1.000      | 0.250        | 0.006 (0.001)    | 0.197 (0.049)    | 0 (0.000) |    20.49 | akiyanora, amore, ayaka, Margo, meo       |
|           11 |      793 | 2024-05-18 | Imperial fe       | L   | 1.000      | -            | -                | -                | -         |    -2.17 | akiyanora, amore, ayaka, Margo, meo       |
|           10 |     1176 | 2024-05-05 | Imperial fe       | L   | 0.959      | -            | -                | -                | -         |    -2.13 | akiyanora, amore, ayaka, Margo, meo       |
|            9 |     1537 | 2024-04-19 | NAVI Javelins     | L   | 0.853      | -            | -                | -                | -         |    -5.04 | akiyanora, amore, ayaka, Margo, meo       |
|            8 |     1749 | 2024-04-11 | Fearless Cheetahs | L   | 0.800      | -            | -                | -                | -         |    -9.34 | kr4sy, Ksu, t4tty, Victoria, vilga        |
|            7 |     1803 | 2024-04-10 | Permitta W        | L   | 0.792      | -            | -                | -                | -         |   -17.77 | amyb, Gaba, Mrs_Fire, pavlla, Tynka       |
|            6 |     1886 | 2024-04-08 | Imperial fe       | L   | 0.779      | -            | -                | -                | -         |    -2.10 | akiyanora, amore, ayaka, Margo, meo       |
|            5 |     2120 | 2024-03-28 | 1WIN Gang         | W   | 0.707      | 0.331        | 0.003 (0.001)    | 0.031 (0.007)    | 0 (0.000) |    10.73 | akiyanora, amore, ayaka, Margo, meo       |
|            4 |     2273 | 2024-03-20 | Spirit fe         | L   | 0.654      | -            | -                | -                | -         |   -10.48 | akiyanora, amore, ayaka, Margo, meo       |
|            3 |     2424 | 2024-03-13 | Let Her Cook      | L   | 0.607      | -            | -                | -                | -         |    -2.98 | Joanana, kezziwow, meli, RacheLL, suns1de |
|            2 |     2858 | 2024-02-24 | NAVI Javelins     | L   | 0.485      | -            | -                | -                | -         |    -3.99 | akiyanora, amore, ayaka, Margo, meo       |
|            1 |     2986 | 2024-02-18 | ex-FORZE Ladies   | W   | 0.446      | 0.143        | 0.004 (0.000)    | 0.062 (0.004)    | 0 (0.000) |     6.58 | k175un4, mikeri, sosya, Stormy, wieenN    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,199.88)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-08 |      1.000 | $300.00        | $300.00         |
| 2024-05-26 |      1.000 | $750.00        | $750.00         |
| 2024-05-05 |      0.959 | $250.00        | $239.73         |
| 2024-04-21 |      0.867 | $1,050.00      | $910.15         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
