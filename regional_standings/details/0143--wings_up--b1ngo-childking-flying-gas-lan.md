### Roster Details<br />
Team Name: Wings Up<br />
Roster: B1NGO, ChildKing, flying, gas, lan<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [143](../standings_global.md)<br />
Regional Rank: [7]( ../standings_asia.md)<br />
Final Rank Value:  725.9<br />
<br />
Final Rank Value (725.9) = Starting Rank Value (709.0) + Head To Head Adjustments (16.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.305[<sup>1</sup>](#table2)
- Bounty Collected: 0.268[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.024[<sup>2</sup>](#table1)

The average of these factors is 0.151<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 709.0
- 400 + ( ( 0.151 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 709.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      745 | 2022-12-25 | Lynn Vision | L   | 0.870      | -            | -                | -                | -         |    -6.16 | B1NGO, ChildKing, flying, gas, lan |
|           14 |      747 | 2022-12-24 | Newhappy    | W   | 0.864      | 0.375        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.68 | B1NGO, ChildKing, flying, gas, lan |
|           13 |      845 | 2022-12-16 | IHC         | L   | 0.812      | -            | -                | -                | -         |    -1.25 | B1NGO, ChildKing, flying, gas, lan |
|           12 |      872 | 2022-12-15 | Clutch      | W   | 0.806      | 0.371        | 0.005 (0.001)    | 0.041 (0.012)    | 0 (0.000) |    13.50 | B1NGO, ChildKing, flying, gas, lan |
|           11 |      895 | 2022-12-14 | Renewal     | W   | 0.799      | 0.371        | 0.002 (0.001)    | 0.083 (0.024)    | 0 (0.000) |    10.70 | B1NGO, ChildKing, flying, gas, lan |
|           10 |      919 | 2022-12-13 | Rare Atom   | L   | 0.792      | -            | -                | -                | -         |    -9.01 | B1NGO, ChildKing, flying, gas, lan |
|            9 |     3299 | 2022-09-03 | paiN        | L   | 0.122      | -            | -                | -                | -         |    -0.44 | B1NGO, ChildKing, gas, lan, Martin |
|            8 |     3338 | 2022-09-02 | OG          | W   | 0.116      | 0.500        | 0.237 (0.014)    | 0.365 (0.021)    | 1 (0.116) |     3.62 | B1NGO, ChildKing, gas, lan, Martin |
|            7 |     3363 | 2022-09-02 | EG White    | W   | 0.111      | 0.500        | 0.048 (0.003)    | 0.340 (0.019)    | 1 (0.111) |     2.54 | B1NGO, ChildKing, gas, lan, Martin |
|            6 |     3372 | 2022-09-01 | OG          | L   | 0.108      | -            | -                | -                | -         |    -0.03 | B1NGO, ChildKing, gas, lan, Martin |
|            5 |     3485 | 2022-08-28 | Rare Atom   | L   | 0.078      | -            | -                | -                | -         |    -0.86 | B1NGO, ChildKing, gas, lan, Martin |
|            4 |     3509 | 2022-08-27 | TYLOO       | W   | 0.073      | 0.143        | 0.006 (0.000)    | 0.057 (0.001)    | 0 (0.000) |     1.10 | B1NGO, ChildKing, gas, lan, Martin |
|            3 |     3534 | 2022-08-27 | Rare Atom   | L   | 0.072      | -            | -                | -                | -         |    -0.79 | B1NGO, ChildKing, gas, lan, Martin |
|            2 |     3706 | 2022-08-21 | CR          | W   | 0.032      | 0.143        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     0.15 | B1NGO, ChildKing, gas, lan, Martin |
|            1 |     3730 | 2022-08-20 | Atlantiss   | W   | 0.025      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.12 | B1NGO, ChildKing, gas, lan, Martin |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,475.45)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-18 |      0.826 | $1,500.00      | $1,238.56       |
| 2022-09-04 |      0.124 | $10,000.00     | $1,236.89       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
