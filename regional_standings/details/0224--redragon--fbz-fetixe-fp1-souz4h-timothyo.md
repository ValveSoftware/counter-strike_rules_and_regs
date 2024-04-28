### Roster Details<br />
Team Name: Redragon<br />
Roster: fbz, fetixe, fp1, souz4h, Timothyo<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [224](../standings_global.md)<br />
Regional Rank: [75]( ../standings_americas.md)<br />
Final Rank Value:  401.0<br />
<br />
Final Rank Value (401.0) = Starting Rank Value (400.1) + Head To Head Adjustments (0.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.1
- 400 + ( ( 0.000 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 400.1


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
|           11 |     2842 | 2022-09-18 | Boca Juniors        | L   | 0.222      | -            | -                | -                | -         |    -1.91 | fbz, fetixe, fp1, souz4h, Timothyo   |
|           10 |     2915 | 2022-09-16 | B4 Academy          | W   | 0.207      | 0.384        | 0.000 (0.000)    | 0.007 (0.001)    | 0 (0.000) |     3.24 | fbz, fetixe, fp1, souz4h, Timothyo   |
|            9 |     3000 | 2022-09-14 | Yawara              | W   | 0.192      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.02 | fbz, fetixe, fp1, souz4h, Timothyo   |
|            8 |     3048 | 2022-09-12 | Los Grandes Academy | L   | 0.180      | -            | -                | -                | -         |    -2.83 | fbz, fetixe, fp1, souz4h, Timothyo   |
|            7 |     3074 | 2022-09-11 | Ape Gang            | L   | 0.173      | -            | -                | -                | -         |    -1.65 | fbz, fetixe, fp1, souz4h, Timothyo   |
|            6 |     3577 | 2022-08-25 | ARCTIC              | L   | 0.059      | -            | -                | -                | -         |    -0.12 | BRNZ1K, fetixe, fp1, proSHOW, souz4h |
|            5 |     3603 | 2022-08-23 | Ape Gang            | W   | 0.047      | 0.384        | 0.000 (0.000)    | 0.045 (0.001)    | 0 (0.000) |     1.02 | BRNZ1K, fetixe, fp1, proSHOW, souz4h |
|            4 |     3641 | 2022-08-22 | Stars Horizon       | L   | 0.040      | -            | -                | -                | -         |    -0.29 | BRNZ1K, fetixe, fp1, proSHOW, souz4h |
|            3 |     3665 | 2022-08-21 | ODDIK               | L   | 0.035      | -            | -                | -                | -         |    -0.13 | BRNZ1K, fetixe, fp1, proSHOW, souz4h |
|            2 |     3736 | 2022-08-19 | MIBR Academy        | W   | 0.021      | 0.384        | 0.000 (0.000)    | 0.042 (0.000)    | 0 (0.000) |     0.45 | BRNZ1K, fetixe, fp1, proSHOW, souz4h |
|            1 |     3758 | 2022-08-17 | homeless            | W   | 0.007      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.12 | BRNZ1K, fetixe, fp1, proSHOW, souz4h |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
