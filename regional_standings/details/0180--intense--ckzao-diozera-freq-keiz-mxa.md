### Roster Details<br />
Team Name: Intense<br />
Roster: ckzao, diozera, fREQ, keiz, mxa<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [180](../standings_global.md)<br />
Regional Rank: [48]( ../standings_americas.md)<br />
Final Rank Value:  596.1<br />
<br />
Final Rank Value (596.1) = Starting Rank Value (542.2) + Head To Head Adjustments (53.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.248[<sup>2</sup>](#table1)
- Opponent Network: 0.037[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.071<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 542.2
- 400 + ( ( 0.071 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 542.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      167 | 2024-06-07 | RED Canids     | L   | 1.000      | -            | -                | -                | -         |    -1.05 | ckzao, diozera, fREQ, keiz, mxa |
|           11 |      366 | 2024-06-03 | Galorys        | W   | 1.000      | 0.384        | 0.025 (0.009)    | 0.596 (0.229)    | 0 (0.000) |    24.96 | ckzao, diozera, fREQ, keiz, mxa |
|           10 |      444 | 2024-05-31 | Bounty Hunters | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.233 (0.089)    | 0 (0.000) |    18.50 | ckzao, diozera, fREQ, keiz, mxa |
|            9 |      487 | 2024-05-30 | inSanitY       | L   | 1.000      | -            | -                | -                | -         |    -5.53 | ckzao, diozera, fREQ, keiz, mxa |
|            8 |      521 | 2024-05-28 | FURIA Academy  | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.102 (0.039)    | 0 (0.000) |    16.46 | ckzao, diozera, fREQ, keiz, mxa |
|            7 |      995 | 2024-05-13 | Case           | L   | 1.000      | -            | -                | -                | -         |    -5.57 | bsd, ckzao, diozera, fREQ, mxa  |
|            6 |     1017 | 2024-05-12 | ODDIK          | L   | 1.000      | -            | -                | -                | -         |    -3.21 | bsd, ckzao, diozera, fREQ, mxa  |
|            5 |     1092 | 2024-05-09 | RED Canids     | L   | 0.988      | -            | -                | -                | -         |    -1.29 | bsd, ckzao, diozera, fREQ, mxa  |
|            4 |     1121 | 2024-05-08 | Yawara         | W   | 0.979      | 0.435        | 0.000 (0.000)    | 0.024 (0.010)    | 0 (0.000) |    14.03 | bsd, ckzao, diozera, fREQ, mxa  |
|            3 |     1157 | 2024-05-06 | RED Canids     | L   | 0.966      | -            | -                | -                | -         |    -1.20 | bsd, ckzao, diozera, fREQ, mxa  |
|            2 |     2423 | 2024-03-13 | Fluxo          | L   | 0.607      | -            | -                | -                | -         |    -1.16 | bsd, ckzao, diozera, mxa, roz   |
|            1 |     3087 | 2024-02-14 | Fluxo          | L   | 0.421      | -            | -                | -                | -         |    -1.03 | bsd, ckzao, diozera, mxa, roz   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
