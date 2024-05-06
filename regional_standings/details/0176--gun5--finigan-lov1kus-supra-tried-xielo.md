### Roster Details<br />
Team Name: GUN5<br />
Roster: FinigaN, lov1kus, supra, tried, xiELO<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [176](../standings_global.md)<br />
Regional Rank: [112]( ../standings_europe.md)<br />
Final Rank Value:  596.6<br />
<br />
Final Rank Value (596.6) = Starting Rank Value (609.2) + Head To Head Adjustments (-12.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.242[<sup>1</sup>](#table2)
- Bounty Collected: 0.196[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.110<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 609.2
- 400 + ( ( 0.110 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 609.2


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
|           15 |      732 | 2024-04-08 | KOI           | L   | 1.000      | -            | -                | -                | -         |    -2.18 | FinigaN, lov1kus, supra, tried, xiELO     |
|           14 |      741 | 2024-04-08 | Apeks         | L   | 1.000      | -            | -                | -                | -         |    -0.85 | FinigaN, lov1kus, supra, tried, xiELO     |
|           13 |      936 | 2024-04-01 | GamerLegion   | L   | 0.965      | -            | -                | -                | -         |    -0.29 | FinigaN, lov1kus, supra, tried, xiELO     |
|           12 |     1142 | 2024-03-19 | 3DMAX         | L   | 0.879      | -            | -                | -                | -         |    -1.32 | FinigaN, lov1kus, supra, tried, xiELO     |
|           11 |     1495 | 2024-03-05 | Nemiga        | L   | 0.786      | -            | -                | -                | -         |    -0.50 | FinigaN, lov1kus, supra, tried, xiELO     |
|           10 |     2215 | 2024-01-30 | FORZE         | L   | 0.553      | -            | -                | -                | -         |    -4.43 | FinigaN, lov1kus, supra, tried, xiELO     |
|            9 |     2580 | 2024-01-17 | Sprout        | L   | 0.467      | -            | -                | -                | -         |    -5.12 | FinigaN, lov1kus, supra, xiELO, znxxX     |
|            8 |     2638 | 2024-01-16 | Endpoint      | L   | 0.460      | -            | -                | -                | -         |    -2.62 | FinigaN, lov1kus, supra, xiELO, znxxX     |
|            7 |     2844 | 2024-01-10 | HEROIC        | L   | 0.420      | -            | -                | -                | -         |    -0.04 | FinigaN, lov1kus, supra, xiELO, znxxX     |
|            6 |     2943 | 2023-12-19 | PERA          | L   | 0.272      | -            | -                | -                | -         |    -1.44 | FinigaN, lov1kus, ResoLuxe, supra, xiELO  |
|            5 |     2946 | 2023-12-19 | Metizport     | L   | 0.272      | -            | -                | -                | -         |    -0.86 | FinigaN, lov1kus, ResoLuxe, supra, xiELO  |
|            4 |     2948 | 2023-12-19 | Gucci Academy | W   | 0.271      | 0.333        | 0.009 (0.001)    | 0.055 (0.005)    | 0 (0.000) |     5.75 | FinigaN, lov1kus, ResoLuxe, supra, xiELO  |
|            3 |     3655 | 2023-11-12 | VP.Prodigy    | W   | 0.027      | 0.320        | 0.000 (0.000)    | 0.233 (0.002)    | 0 (0.000) |     0.50 | FinigaN, L1GH7n1nG, lov1kus, supra, xiELO |
|            2 |     3676 | 2023-11-12 | Entropiq      | W   | 0.025      | 0.320        | 0.001 (0.000)    | 0.315 (0.003)    | 0 (0.000) |     0.54 | FinigaN, L1GH7n1nG, lov1kus, supra, xiELO |
|            1 |     3707 | 2023-11-11 | GenOne        | W   | 0.018      | 0.320        | 0.000 (0.000)    | 0.003 (0.000)    | 0 (0.000) |     0.27 | FinigaN, L1GH7n1nG, lov1kus, supra, xiELO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($119.42)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
