### Roster Details<br />
Team Name: HEROIC<br />
Roster: dupreeh, salazar, sjuush, TeSeS, Zyphon<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [119](../standings_global.md)<br />
Regional Rank: [80]( ../standings_europe.md)<br />
Final Rank Value:  759.9<br />
<br />
Final Rank Value (759.9) = Starting Rank Value (755.4) + Head To Head Adjustments (4.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.442[<sup>1</sup>](#table2)
- Bounty Collected: 0.271[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.021[<sup>2</sup>](#table1)

The average of these factors is 0.184<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 755.4
- 400 + ( ( 0.184 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 755.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     2750 | 2023-12-14 | MOUZ       | L   | 0.331      | -            | -                | -                | -         |    -0.02 | dupreeh, salazar, sjuush, TeSeS, Zyphon |
|            9 |     2761 | 2023-12-13 | FaZe       | L   | 0.325      | -            | -                | -                | -         |    -0.01 | dupreeh, salazar, sjuush, TeSeS, Zyphon |
|            8 |     3094 | 2023-11-24 | Cloud9     | L   | 0.199      | -            | -                | -                | -         |    -0.03 | cadiaN, dupreeh, sjuush, TeSeS, Zyphon  |
|            7 |     3109 | 2023-11-23 | Astralis   | W   | 0.193      | 0.729        | 0.042 (0.006)    | 0.008 (0.001)    | 1 (0.193) |     3.06 | cadiaN, dupreeh, sjuush, TeSeS, Zyphon  |
|            6 |     3125 | 2023-11-22 | Vitality   | L   | 0.186      | -            | -                | -                | -         |    -0.02 | cadiaN, dupreeh, sjuush, TeSeS, Zyphon  |
|            5 |     3549 | 2023-11-04 | Virtus.pro | L   | 0.065      | -            | -                | -                | -         |    -0.01 | Chr1zN, dupreeh, sirah, sjuush, TeSeS   |
|            4 |     3644 | 2023-10-31 | BIG        | W   | 0.039      | 0.769        | 0.471 (0.014)    | 0.529 (0.016)    | 0 (0.000) |     1.13 | Chr1zN, dupreeh, sirah, sjuush, TeSeS   |
|            3 |     3682 | 2023-10-30 | Nouns      | W   | 0.031      | 0.769        | 0.019 (0.000)    | 0.084 (0.002)    | 0 (0.000) |     0.47 | Chr1zN, dupreeh, sirah, sjuush, TeSeS   |
|            2 |     3710 | 2023-10-29 | Aurora     | L   | 0.026      | -            | -                | -                | -         |    -0.02 | Chr1zN, dupreeh, sirah, sjuush, TeSeS   |
|            1 |     3793 | 2023-10-27 | FURIA      | L   | 0.012      | -            | -                | -                | -         |    -0.01 | Chr1zN, dupreeh, sirah, sjuush, TeSeS   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,459.95)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-17 |      0.352 | $15,000.00     | $5,283.20       |
| 2023-11-26 |      0.213 | $20,000.00     | $4,255.40       |
| 2023-11-05 |      0.074 | $12,500.00     | $921.35         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
