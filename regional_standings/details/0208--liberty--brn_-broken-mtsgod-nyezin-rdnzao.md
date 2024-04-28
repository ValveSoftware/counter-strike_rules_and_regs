### Roster Details<br />
Team Name: Liberty<br />
Roster: brn$, brokeN, mtsGOD, nyezin, rdnzao<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [208](../standings_global.md)<br />
Regional Rank: [66]( ../standings_americas.md)<br />
Final Rank Value:  567.8<br />
<br />
Final Rank Value (567.8) = Starting Rank Value (593.3) + Head To Head Adjustments (-25.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.214[<sup>1</sup>](#table2)
- Bounty Collected: 0.163[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.094<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 593.3
- 400 + ( ( 0.094 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 593.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     1345 | 2022-11-28 | Sharks        | L   | 0.695      | -            | -                | -                | -         |    -4.80 | brn$, brokeN, mtsGOD, nyezin, rdnzao  |
|           11 |     1412 | 2022-11-26 | B4 Academy    | W   | 0.681      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.85 | brn$, brokeN, mtsGOD, nyezin, rdnzao  |
|           10 |     1460 | 2022-11-25 | FURIA Academy | L   | 0.672      | -            | -                | -                | -         |    -6.18 | brn$, brokeN, mtsGOD, nyezin, rdnzao  |
|            9 |     1947 | 2022-10-22 | SWS           | L   | 0.448      | -            | -                | -                | -         |    -5.69 | brokeN, mello, mtsGOD, nyezin, rdnzao |
|            8 |     1976 | 2022-10-21 | Stars Horizon | W   | 0.441      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.72 | brokeN, mello, mtsGOD, nyezin, rdnzao |
|            7 |     2005 | 2022-10-20 | Flamengo      | L   | 0.434      | -            | -                | -                | -         |    -4.95 | brokeN, mello, mtsGOD, nyezin, rdnzao |
|            6 |     2031 | 2022-10-19 | Rehl          | L   | 0.428      | -            | -                | -                | -         |    -5.67 | brokeN, mello, mtsGOD, nyezin, rdnzao |
|            5 |     2855 | 2022-09-18 | Furious       | L   | 0.220      | -            | -                | -                | -         |    -3.05 | brokeN, Lich, mtsGOD, nyezin, rdnzao  |
|            4 |     2960 | 2022-09-15 | FUSION        | L   | 0.199      | -            | -                | -                | -         |    -3.82 | brokeN, Lich, mtsGOD, nyezin, rdnzao  |
|            3 |     3016 | 2022-09-13 | WINDINGO      | L   | 0.189      | -            | -                | -                | -         |    -2.36 | brokeN, Lich, mtsGOD, nyezin, rdnzao  |
|            2 |     3064 | 2022-09-11 | SWS           | W   | 0.174      | 0.384        | 0.001 (0.000)    | 0.125 (0.008)    | 0 (0.000) |     3.22 | brokeN, Lich, mtsGOD, nyezin, rdnzao  |
|            1 |     3198 | 2022-09-08 | Flamengo      | L   | 0.155      | -            | -                | -                | -         |    -1.81 | brokeN, Lich, mtsGOD, nyezin, rdnzao  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($100.24)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
