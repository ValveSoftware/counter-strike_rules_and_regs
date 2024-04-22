### Roster Details<br />
Team Name: Wings Up<br />
Roster: ChildKing, flying, gas, Marek, Risk<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [159](../standings_global.md)<br />
Regional Rank: [17]( ../standings_asia.md)<br />
Final Rank Value:  665.4<br />
<br />
Final Rank Value (665.4) = Starting Rank Value (662.0) + Head To Head Adjustments (3.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.305[<sup>1</sup>](#table2)
- Bounty Collected: 0.231[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.136<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 662.0
- 400 + ( ( 0.136 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 662.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     1978 | 2024-01-26 | The Huns          | L   | 0.619      | -            | -                | -                | -         |   -11.68 | ChildKing, flying, gas, Marek, Risk |
|           10 |     1981 | 2024-01-26 | TYLOO             | L   | 0.618      | -            | -                | -                | -         |    -4.19 | ChildKing, flying, gas, Marek, Risk |
|            9 |     1995 | 2024-01-25 | Rare Atom         | W   | 0.612      | 0.143        | 0.024 (0.002)    | 0.233 (0.020)    | 0 (0.000) |    11.11 | ChildKing, flying, gas, Marek, Risk |
|            8 |     2000 | 2024-01-25 | GR                | W   | 0.611      | 0.143        | 0.005 (0.000)    | 0.267 (0.023)    | 0 (0.000) |     9.26 | ChildKing, flying, gas, Marek, Risk |
|            7 |     2014 | 2024-01-24 | LYG               | W   | 0.605      | 0.143        | 0.004 (0.000)    | 0.146 (0.013)    | 0 (0.000) |    10.50 | ChildKing, flying, gas, Marek, Risk |
|            6 |     2062 | 2024-01-22 | The Huns          | L   | 0.592      | -            | -                | -                | -         |   -11.75 | ChildKing, flying, gas, Marek, Risk |
|            5 |     2140 | 2024-01-20 | Rare Atom         | L   | 0.578      | -            | -                | -                | -         |    -7.92 | ChildKing, flying, gas, Marek, Risk |
|            4 |     2205 | 2024-01-19 | Lynn Vision       | L   | 0.570      | -            | -                | -                | -         |    -0.96 | ChildKing, flying, gas, Marek, Risk |
|            3 |     2209 | 2024-01-18 | Steel Helmet      | W   | 0.570      | 0.143        | 0.021 (0.002)    | 0.131 (0.011)    | 0 (0.000) |     9.82 | ChildKing, flying, gas, Marek, Risk |
|            2 |     3439 | 2023-11-09 | Ninjas in Pyjamas | L   | 0.099      | -            | -                | -                | -         |    -0.76 | ChildKing, flying, gas, lan, Marek  |
|            1 |     3445 | 2023-11-08 | MOUZ              | L   | 0.096      | -            | -                | -                | -         |    -0.00 | ChildKing, flying, gas, lan, Marek  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,010.53)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
