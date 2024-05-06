### Roster Details<br />
Team Name: Wings Up<br />
Roster: ChildKing, flying, gas, Marek, Risk<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [161](../standings_global.md)<br />
Regional Rank: [19]( ../standings_asia.md)<br />
Final Rank Value:  645.4<br />
<br />
Final Rank Value (645.4) = Starting Rank Value (633.9) + Head To Head Adjustments (11.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.258[<sup>1</sup>](#table2)
- Bounty Collected: 0.228[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.123<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 633.9
- 400 + ( ( 0.123 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 633.9


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
|           11 |     2274 | 2024-01-26 | The Huns          | L   | 0.525      | -            | -                | -                | -         |    -7.71 | ChildKing, flying, gas, Marek, Risk |
|           10 |     2277 | 2024-01-26 | TYLOO             | L   | 0.525      | -            | -                | -                | -         |    -2.29 | ChildKing, flying, gas, Marek, Risk |
|            9 |     2291 | 2024-01-25 | Rare Atom         | W   | 0.518      | 0.143        | 0.025 (0.002)    | 0.189 (0.014)    | 0 (0.000) |     9.80 | ChildKing, flying, gas, Marek, Risk |
|            8 |     2296 | 2024-01-25 | GR                | W   | 0.518      | 0.143        | 0.005 (0.000)    | 0.217 (0.016)    | 0 (0.000) |     8.21 | ChildKing, flying, gas, Marek, Risk |
|            7 |     2310 | 2024-01-24 | LYG               | W   | 0.512      | 0.143        | 0.004 (0.000)    | 0.125 (0.009)    | 0 (0.000) |     9.34 | ChildKing, flying, gas, Marek, Risk |
|            6 |     2358 | 2024-01-22 | The Huns          | L   | 0.499      | -            | -                | -                | -         |    -7.52 | ChildKing, flying, gas, Marek, Risk |
|            5 |     2436 | 2024-01-20 | Rare Atom         | L   | 0.484      | -            | -                | -                | -         |    -6.16 | ChildKing, flying, gas, Marek, Risk |
|            4 |     2501 | 2024-01-19 | Lynn Vision       | L   | 0.477      | -            | -                | -                | -         |    -0.82 | ChildKing, flying, gas, Marek, Risk |
|            3 |     2505 | 2024-01-18 | Steel Helmet      | W   | 0.476      | 0.143        | 0.025 (0.002)    | 0.104 (0.007)    | 0 (0.000) |     8.73 | ChildKing, flying, gas, Marek, Risk |
|            2 |     3735 | 2023-11-09 | Ninjas in Pyjamas | L   | 0.005      | -            | -                | -                | -         |    -0.04 | ChildKing, flying, gas, lan, Marek  |
|            1 |     3741 | 2023-11-08 | MOUZ              | L   | 0.002      | -            | -                | -                | -         |     0.00 | ChildKing, flying, gas, lan, Marek  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($217.43)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
