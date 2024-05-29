### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: alex, es3tag, headtr1ck, k0nfig, REZ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [111](../standings_global.md)<br />
Regional Rank: [75]( ../standings_europe.md)<br />
Final Rank Value:  756.2<br />
<br />
Final Rank Value (756.2) = Starting Rank Value (750.2) + Head To Head Adjustments (6.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.339[<sup>1</sup>](#table2)
- Bounty Collected: 0.305[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.070[<sup>2</sup>](#table1)

The average of these factors is 0.180<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 750.2
- 400 + ( ( 0.180 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 750.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     2568 | 2024-02-15 | SAW          | L   | 0.505      | -            | -                | -                | -         |    -0.61 | alex, es3tag, headtr1ck, k0nfig, REZ  |
|           10 |     2604 | 2024-02-14 | AMKAL        | L   | 0.499      | -            | -                | -                | -         |    -1.30 | alex, es3tag, headtr1ck, k0nfig, REZ  |
|            9 |     2610 | 2024-02-14 | Eternal Fire | L   | 0.498      | -            | -                | -                | -         |    -0.04 | alex, es3tag, headtr1ck, k0nfig, REZ  |
|            8 |     2921 | 2024-01-26 | G2           | L   | 0.372      | -            | -                | -                | -         |    -0.04 | alex, es3tag, headtr1ck, k0nfig, REZ  |
|            7 |     2980 | 2024-01-23 | Complexity   | W   | 0.352      | 0.581        | 0.260 (0.053)    | 0.329 (0.067)    | 1 (0.352) |    10.96 | alex, es3tag, headtr1ck, k0nfig, REZ  |
|            6 |     3014 | 2024-01-22 | G2           | L   | 0.344      | -            | -                | -                | -         |    -0.03 | alex, es3tag, headtr1ck, k0nfig, REZ  |
|            5 |     3225 | 2024-01-17 | 500          | L   | 0.314      | -            | -                | -                | -         |    -4.94 | alex, es3tag, headtr1ck, k0nfig, REZ  |
|            4 |     3357 | 2024-01-14 | Astralis     | L   | 0.292      | -            | -                | -                | -         |    -0.03 | alex, es3tag, headtr1ck, k0nfig, REZ  |
|            3 |     3395 | 2024-01-13 | Lilmix       | W   | 0.284      | 0.143        | 0.000 (0.000)    | 0.016 (0.001)    | 1 (0.284) |     1.97 | alex, es3tag, headtr1ck, k0nfig, REZ  |
|            2 |     3896 | 2023-12-03 | Alliance     | W   | 0.012      | 0.427        | 0.004 (0.000)    | 0.617 (0.003)    | 1 (0.012) |     0.23 | es3tag, k0nfig, maxster, REZ, Silence |
|            1 |     3914 | 2023-12-02 | GODSENT      | L   | 0.006      | -            | -                | -                | -         |    -0.12 | es3tag, k0nfig, maxster, REZ, Silence |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,361.20)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-01-28 |      0.386 | $8,500.00      | $3,279.46       |
| 2023-12-03 |      0.013 | $6,402.00      | $81.74          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
