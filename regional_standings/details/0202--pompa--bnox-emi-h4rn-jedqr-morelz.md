### Roster Details<br />
Team Name: Pompa<br />
Roster: bnox, emi, h4rn, jedqr, morelz<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [202](../standings_global.md)<br />
Regional Rank: [124]( ../standings_europe.md)<br />
Final Rank Value:  520.9<br />
<br />
Final Rank Value (520.9) = Starting Rank Value (517.1) + Head To Head Adjustments (3.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.235[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.061<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 517.1
- 400 + ( ( 0.061 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 517.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     3310 | 2023-11-15 | SAW           | L   | 0.139      | -            | -                | -                | -         |    -0.07 | bnox, emi, h4rn, jedqr, morelz |
|            9 |     3348 | 2023-11-13 | Sampi         | W   | 0.126      | 0.435        | 0.084 (0.005)    | 0.698 (0.038)    | 0 (0.000) |     3.70 | bnox, emi, h4rn, jedqr, morelz |
|            8 |     3364 | 2023-11-12 | 9 Pandas      | L   | 0.120      | -            | -                | -                | -         |    -0.16 | bnox, emi, h4rn, morelz, SLY   |
|            7 |     3371 | 2023-11-12 | B8            | L   | 0.119      | -            | -                | -                | -         |    -1.19 | bnox, emi, h4rn, morelz, SLY   |
|            6 |     3381 | 2023-11-12 | ECLOT         | L   | 0.118      | -            | -                | -                | -         |    -0.95 | bnox, emi, h4rn, morelz, SLY   |
|            5 |     3422 | 2023-11-10 | Project G     | L   | 0.107      | -            | -                | -                | -         |    -1.65 | bnox, emi, h4rn, morelz, SLY   |
|            4 |     3464 | 2023-11-08 | FORZE         | W   | 0.092      | 0.435        | 0.019 (0.001)    | 0.135 (0.005)    | 0 (0.000) |     2.31 | bnox, emi, h4rn, morelz, SLY   |
|            3 |     3501 | 2023-11-06 | Zero Tenacity | W   | 0.079      | 0.435        | 0.008 (0.000)    | 0.805 (0.028)    | 0 (0.000) |     2.05 | bnox, emi, h4rn, jedqr, morelz |
|            2 |     3764 | 2023-10-28 | The Witchers  | L   | 0.018      | -            | -                | -                | -         |    -0.11 | bnox, emi, h4rn, morelz, SLY   |
|            1 |     3794 | 2023-10-27 | GODSENT       | L   | 0.012      | -            | -                | -                | -         |    -0.07 | bnox, emi, h4rn, morelz, SLY   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
