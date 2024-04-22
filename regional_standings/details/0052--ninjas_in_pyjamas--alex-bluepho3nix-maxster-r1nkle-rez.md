### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: alex, BluePho3nix, maxster, r1nkle, REZ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [52](../standings_global.md)<br />
Regional Rank: [38]( ../standings_europe.md)<br />
Final Rank Value:  942.4<br />
<br />
Final Rank Value (942.4) = Starting Rank Value (900.2) + Head To Head Adjustments (42.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.586[<sup>1</sup>](#table2)
- Bounty Collected: 0.365[<sup>2</sup>](#table1)
- Opponent Network: 0.085[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.259<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 900.2
- 400 + ( ( 0.259 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 900.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      139 | 2024-04-18 | brazylijski luz | L   | 1.000      | -            | -                | -                | -         |   -20.95 | alex, BluePho3nix, maxster, r1nkle, REZ    |
|           12 |      283 | 2024-04-12 | OG              | L   | 1.000      | -            | -                | -                | -         |    -4.37 | alex, BluePho3nix, maxster, r1nkle, REZ    |
|           11 |      309 | 2024-04-11 | BetBoom         | L   | 1.000      | -            | -                | -                | -         |    -6.92 | alex, BluePho3nix, maxster, r1nkle, REZ    |
|           10 |      406 | 2024-04-09 | Gods Reign      | W   | 1.000      | 0.684        | 0.151 (0.104)    | 0.268 (0.184)    | 0 (0.000) |    15.12 | alex, BluePho3nix, maxster, r1nkle, REZ    |
|            9 |      536 | 2024-04-04 | Aurora          | L   | 1.000      | -            | -                | -                | -         |    -4.25 | alex, BluePho3nix, maxster, r1nkle, REZ    |
|            8 |      544 | 2024-04-04 | Metizport       | W   | 1.000      | 0.143        | 0.136 (0.019)    | 1.000 (0.143)    | 0 (0.000) |    18.70 | alex, BluePho3nix, maxster, r1nkle, REZ    |
|            7 |      577 | 2024-04-03 | Aurora          | L   | 1.000      | -            | -                | -                | -         |    -4.04 | alex, BluePho3nix, maxster, r1nkle, REZ    |
|            6 |      592 | 2024-04-03 | Sampi           | L   | 1.000      | -            | -                | -                | -         |   -17.48 | alex, BluePho3nix, maxster, r1nkle, REZ    |
|            5 |      616 | 2024-04-02 | Blessed         | W   | 1.000      | 0.143        | 0.007 (0.001)    | 0.324 (0.046)    | 0 (0.000) |     8.27 | alex, BluePho3nix, maxster, r1nkle, REZ    |
|            4 |      621 | 2024-04-02 | Monte           | W   | 1.000      | 0.143        | 0.236 (0.034)    | 0.598 (0.085)    | 0 (0.000) |    23.03 | alex, BluePho3nix, maxster, r1nkle, REZ    |
|            3 |      711 | 2024-03-27 | 500             | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.622 (0.089)    | 0 (0.000) |     8.79 | alex, BluePho3nix, maxster, REZ, Silence   |
|            2 |      717 | 2024-03-27 | Verdant         | W   | 1.000      | 0.143        | 0.021 (0.003)    | 0.074 (0.011)    | 0 (0.000) |     8.57 | alex, BluePho3nix, maxster, REZ, Silence   |
|            1 |     1309 | 2024-02-28 | AMKAL           | W   | 0.839      | 0.500        | 0.051 (0.022)    | 0.703 (0.295)    | 0 (0.000) |    17.81 | BluePho3nix, maxster, MisteM, REZ, Silence |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($37,329.40)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.20) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $26,250.00     | $26,250.00      |
| 2024-03-06 |      0.886 | $12,500.00     | $11,079.40      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
