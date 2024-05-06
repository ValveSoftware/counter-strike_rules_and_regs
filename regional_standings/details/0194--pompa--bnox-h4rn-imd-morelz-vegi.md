### Roster Details<br />
Team Name: Pompa<br />
Roster: bnox, h4rn, imd, morelz, Vegi<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [194](../standings_global.md)<br />
Regional Rank: [120]( ../standings_europe.md)<br />
Final Rank Value:  496.2<br />
<br />
Final Rank Value (496.2) = Starting Rank Value (499.2) + Head To Head Adjustments (-3.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.207[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.052<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 499.2
- 400 + ( ( 0.052 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 499.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     3009 | 2023-12-16 | IKLA             | L   | 0.253      | -            | -                | -                | -         |    -3.23 | bnox, h4rn, imd, morelz, Vegi  |
|           14 |     3036 | 2023-12-15 | TSM              | L   | 0.247      | -            | -                | -                | -         |    -1.88 | bnox, emi, h4rn, morelz, Vegi  |
|           13 |     3438 | 2023-11-21 | Zero Tenacity    | L   | 0.085      | -            | -                | -                | -         |    -0.20 | bnox, emi, h4rn, morelz, Vegi  |
|           12 |     3551 | 2023-11-16 | Apeks            | L   | 0.054      | -            | -                | -                | -         |    -0.01 | bnox, emi, h4rn, morelz, Vegi  |
|           11 |     3560 | 2023-11-16 | Aurora           | L   | 0.052      | -            | -                | -                | -         |    -0.00 | bnox, emi, h4rn, morelz, Vegi  |
|           10 |     3588 | 2023-11-15 | ARCRED           | W   | 0.047      | 0.143        | 0.004 (0.000)    | 0.198 (0.001)    | 0 (0.000) |     1.15 | bnox, emi, h4rn, morelz, Vegi  |
|            9 |     3597 | 2023-11-15 | FLuffy Gangsters | W   | 0.046      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.53 | bnox, emi, h4rn, morelz, Vegi  |
|            8 |     3606 | 2023-11-15 | SAW              | L   | 0.046      | -            | -                | -                | -         |    -0.01 | bnox, emi, h4rn, jedqr, morelz |
|            7 |     3628 | 2023-11-14 | Entropiq         | L   | 0.039      | -            | -                | -                | -         |    -0.25 | bnox, emi, h4rn, morelz, Vegi  |
|            6 |     3637 | 2023-11-13 | FTW              | W   | 0.034      | 0.384        | 0.002 (0.000)    | 0.012 (0.000)    | 0 (0.000) |     0.73 | bnox, emi, h4rn, morelz, Vegi  |
|            5 |     3644 | 2023-11-13 | Sampi            | W   | 0.033      | 0.435        | 0.101 (0.001)    | 0.731 (0.010)    | 0 (0.000) |     0.97 | bnox, emi, h4rn, jedqr, morelz |
|            4 |     3660 | 2023-11-12 | 9 Pandas         | L   | 0.027      | -            | -                | -                | -         |    -0.03 | bnox, emi, h4rn, morelz, SLY   |
|            3 |     3667 | 2023-11-12 | B8               | L   | 0.026      | -            | -                | -                | -         |    -0.39 | bnox, emi, h4rn, morelz, SLY   |
|            2 |     3677 | 2023-11-12 | ECLOT            | L   | 0.025      | -            | -                | -                | -         |    -0.21 | bnox, emi, h4rn, morelz, SLY   |
|            1 |     3718 | 2023-11-10 | Project G        | L   | 0.013      | -            | -                | -                | -         |    -0.23 | bnox, emi, h4rn, morelz, SLY   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
