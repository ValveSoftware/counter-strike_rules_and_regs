### Roster Details<br />
Team Name: Crescent fe<br />
Roster: akiyanora, amore, ayaka, Margo, meo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [174](../standings_global.md)<br />
Regional Rank: [110]( ../standings_europe.md)<br />
Final Rank Value:  603.7<br />
<br />
Final Rank Value (603.7) = Starting Rank Value (660.1) + Head To Head Adjustments (-56.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.323[<sup>1</sup>](#table2)
- Bounty Collected: 0.221[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.137<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 660.1
- 400 + ( ( 0.137 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 660.1


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
|           10 |       25 | 2024-05-05 | Pigeons           | L   | 1.000      | -            | -                | -                | -         |    -4.47 | akiyanora, amore, ayaka, Margo, meo       |
|            9 |      386 | 2024-04-19 | NAVI Javelins     | L   | 1.000      | -            | -                | -                | -         |    -6.21 | akiyanora, amore, ayaka, Margo, meo       |
|            8 |      598 | 2024-04-11 | Fearless Cheetahs | L   | 1.000      | -            | -                | -                | -         |    -9.37 | kr4sy, Ksu, t4tty, Victoria, vilga        |
|            7 |      652 | 2024-04-10 | Permitta W        | L   | 1.000      | -            | -                | -                | -         |   -21.27 | amyb, Gaba, Mrs_Fire, pavlla, Tynka       |
|            6 |      735 | 2024-04-08 | Pigeons           | L   | 1.000      | -            | -                | -                | -         |    -6.57 | akiyanora, amore, ayaka, Margo, meo       |
|            5 |      969 | 2024-03-28 | 1WIN Gang         | W   | 0.940      | 0.331        | 0.006 (0.002)    | 0.044 (0.014)    | 0 (0.000) |    13.05 | akiyanora, amore, ayaka, Margo, meo       |
|            4 |     1122 | 2024-03-20 | Spirit fe         | L   | 0.887      | -            | -                | -                | -         |   -12.77 | akiyanora, amore, ayaka, Margo, meo       |
|            3 |     1273 | 2024-03-13 | Let Her Cook      | L   | 0.840      | -            | -                | -                | -         |   -13.03 | Joanana, kezziwow, meli, RacheLL, suns1de |
|            2 |     1707 | 2024-02-24 | NAVI Javelins     | L   | 0.719      | -            | -                | -                | -         |    -6.70 | akiyanora, amore, ayaka, Margo, meo       |
|            1 |     1835 | 2024-02-18 | ex-FORZE Ladies   | W   | 0.680      | 0.143        | 0.010 (0.001)    | 0.089 (0.009)    | 0 (0.000) |    10.86 | k175un4, mikeri, sosya, Stormy, wieenN    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,300.00)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-05 |      1.000 | $250.00        | $250.00         |
| 2024-04-21 |      1.000 | $1,050.00      | $1,050.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
