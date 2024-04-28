### Roster Details<br />
Team Name: Rapid Ninjas<br />
Roster: Aaron, bodito, Kamion, kolor, msN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [187](../standings_global.md)<br />
Regional Rank: [119]( ../standings_europe.md)<br />
Final Rank Value:  632.0<br />
<br />
Final Rank Value (632.0) = Starting Rank Value (564.9) + Head To Head Adjustments (67.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.272[<sup>2</sup>](#table1)
- Opponent Network: 0.051[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.081<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 564.9
- 400 + ( ( 0.081 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 564.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |       49 | 2023-02-10 | EC Brugge       | L   | 1.000      | -            | -                | -                | -         |   -13.56 | Aaron, bodito, Kamion, kolor, msN   |
|           15 |      403 | 2023-01-26 | 9INE            | L   | 1.000      | -            | -                | -                | -         |    -4.72 | Aaron, bodito, Kamion, kolor, msN   |
|           14 |      417 | 2023-01-26 | Falcons         | L   | 1.000      | -            | -                | -                | -         |    -4.07 | bodito, fleav, Kamion, kolor, msN   |
|           13 |      421 | 2023-01-26 | 9INE            | W   | 1.000      | 0.358        | 0.045 (0.016)    | 1.000 (0.358)    | 0 (0.000) |    26.86 | Aaron, bodito, Kamion, kolor, msN   |
|           12 |      698 | 2023-01-14 | Fourteen        | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.082 (0.012)    | 0 (0.000) |    12.58 | bodito, fleav, Kamion, kolor, msN   |
|           11 |      711 | 2023-01-13 | Fourteen        | W   | 0.998      | 0.143        | 0.000 (0.000)    | 0.082 (0.012)    | 0 (0.000) |    12.48 | bodito, fleav, Kamion, kolor, msN   |
|           10 |      712 | 2023-01-13 | INVSN           | W   | 0.998      | 0.143        | 0.014 (0.002)    | 0.428 (0.061)    | 0 (0.000) |    25.94 | bodito, fleav, Kamion, kolor, msN   |
|            9 |     1917 | 2022-10-24 | Wolsung         | L   | 0.458      | -            | -                | -                | -         |    -7.88 | Aaron, bodito, coolio, Kamion, msN  |
|            8 |     1971 | 2022-10-22 | UNGENTIUM       | L   | 0.444      | -            | -                | -                | -         |    -3.28 | bodito, coolio, Kamion, msN, sl3nd  |
|            7 |     2222 | 2022-10-13 | Illuminar       | W   | 0.385      | 0.143        | 0.048 (0.003)    | 0.700 (0.039)    | 0 (0.000) |    11.09 | EXUS, mASKED, morelz, reatz, TOAO   |
|            6 |     2279 | 2022-10-11 | allStars        | L   | 0.373      | -            | -                | -                | -         |    -5.26 | bodito, coolio, Kamion, msN, sl3nd  |
|            5 |     2307 | 2022-10-09 | AVEZ            | W   | 0.360      | 0.143        | 0.001 (0.000)    | 0.015 (0.001)    | 0 (0.000) |     6.52 | bodito, coolio, Kamion, msN, sl3nd  |
|            4 |     2310 | 2022-10-09 | Beyond Possible | W   | 0.359      | 0.143        | 0.000 (0.000)    | 0.088 (0.005)    | 0 (0.000) |     4.91 | bodito, coolio, Kamion, msN, sl3nd  |
|            3 |     2691 | 2022-09-23 | SINNERS         | L   | 0.254      | -            | -                | -                | -         |    -0.64 | beastik, forsyy, SHOCK, ZEDKO, Zero |
|            2 |     2703 | 2022-09-23 | Nexus           | W   | 0.253      | 0.143        | 0.001 (0.000)    | 0.542 (0.020)    | 0 (0.000) |     6.23 | adamS, BTN, ragga, SEMINTE, XELLOW  |
|            1 |     2716 | 2022-09-23 | MOUZ            | L   | 0.252      | -            | -                | -                | -         |    -0.15 | bodito, coolio, Kamion, msN, sl3nd  |

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
