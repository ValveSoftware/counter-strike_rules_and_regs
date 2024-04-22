### Roster Details<br />
Team Name: ex-Preasy<br />
Roster: b0RUP, Kristou, niko, refrezh, TMB<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [93](../standings_global.md)<br />
Regional Rank: [61]( ../standings_europe.md)<br />
Final Rank Value:  823.8<br />
<br />
Final Rank Value (823.8) = Starting Rank Value (813.2) + Head To Head Adjustments (10.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.456[<sup>1</sup>](#table2)
- Bounty Collected: 0.298[<sup>2</sup>](#table1)
- Opponent Network: 0.102[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.214<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 813.2
- 400 + ( ( 0.214 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 813.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |        1 | 2024-04-22 | Zero Tenacity | L   | 1.000      | -            | -                | -                | -         |   -15.68 | b0RUP, Kristou, niko, refrezh, TMB        |
|            9 |       12 | 2024-04-22 | Permitta      | L   | 1.000      | -            | -                | -                | -         |   -12.92 | b0RUP, Kristou, niko, refrezh, TMB        |
|            8 |      242 | 2024-04-15 | Sashi         | L   | 1.000      | -            | -                | -                | -         |   -11.70 | Altekz, Kristou, refrezh, roeJ, TMB       |
|            7 |      270 | 2024-04-13 | 3DMAX         | L   | 1.000      | -            | -                | -                | -         |    -8.70 | Altekz, Kristou, refrezh, roeJ, TMB       |
|            6 |      422 | 2024-04-09 | ECF           | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.304 (0.117)    | 0 (0.000) |     6.99 | Altekz, Kristou, refrezh, roeJ, TMB       |
|            5 |      475 | 2024-04-07 | Zero Tenacity | W   | 1.000      | 0.358        | 0.008 (0.003)    | 0.805 (0.288)    | 0 (0.000) |    13.20 | Altekz, Kristou, refrezh, roeJ, TMB       |
|            4 |      782 | 2024-03-22 | FORZE         | L   | 0.992      | -            | -                | -                | -         |    -9.30 | gokushima, r3salt, SELLTER, shalfey, tN1R |
|            3 |      861 | 2024-03-18 | Sampi         | W   | 0.965      | 0.371        | 0.084 (0.030)    | 0.698 (0.249)    | 0 (0.000) |    18.73 | fino, manguss, sAvana1, The eLiVe, ZEDKO  |
|            2 |      901 | 2024-03-16 | Passion UA    | W   | 0.952      | 0.371        | 0.031 (0.011)    | 0.625 (0.220)    | 0 (0.000) |    17.38 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|            1 |      957 | 2024-03-14 | Entropiq      | W   | 0.938      | 0.371        | 0.002 (0.001)    | 0.403 (0.140)    | 0 (0.000) |    12.54 | Altekz, Kristou, refrezh, roeJ, TMB       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,209.51)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $1,600.00      | $1,600.00       |
| 2024-03-18 |      0.965 | $11,000.00     | $10,609.51      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
