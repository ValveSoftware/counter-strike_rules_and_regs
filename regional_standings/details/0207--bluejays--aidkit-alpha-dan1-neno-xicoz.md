### Roster Details<br />
Team Name: BLUEJAYS<br />
Roster: aidKiT, alpha, dan1, NENO, xicoz<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [207](../standings_global.md)<br />
Regional Rank: [126]( ../standings_europe.md)<br />
Final Rank Value:  568.4<br />
<br />
Final Rank Value (568.4) = Starting Rank Value (541.5) + Head To Head Adjustments (26.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.235[<sup>2</sup>](#table1)
- Opponent Network: 0.041[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.069<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 541.5
- 400 + ( ( 0.069 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 541.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |       36 | 2023-02-11 | Tricked     | L   | 1.000      | -            | -                | -                | -         |    -4.90 | aidKiT, alpha, dan1, NENO, xicoz        |
|           10 |       61 | 2023-02-09 | Coalesce    | L   | 1.000      | -            | -                | -                | -         |    -8.60 | aidKiT, CacaNito, dan1, NENO, xicoz     |
|            9 |      125 | 2023-02-06 | Mixfits     | W   | 1.000      | 0.435        | 0.002 (0.001)    | 0.165 (0.072)    | 0 (0.000) |    21.13 | aidKiT, CacaNito, dan1, NENO, xicoz     |
|            8 |      222 | 2023-02-02 | EYEBALLERS  | L   | 1.000      | -            | -                | -                | -         |    -4.36 | aidKiT, CacaNito, dan1, NENO, xicoz     |
|            7 |      228 | 2023-02-01 | 9INE        | L   | 1.000      | -            | -                | -                | -         |    -2.36 | aidKiT, CacaNito, dan1, NENO, xicoz     |
|            6 |      290 | 2023-01-30 | Let us cook | W   | 1.000      | 0.435        | 0.000 (0.000)    | 0.041 (0.018)    | 0 (0.000) |    17.74 | aidKiT, CacaNito, dan1, NENO, xicoz     |
|            5 |      391 | 2023-01-27 | HONORIS     | W   | 1.000      | 0.435        | 0.011 (0.005)    | 0.748 (0.325)    | 0 (0.000) |    26.89 | aidKiT, CacaNito, dan1, NENO, xicoz     |
|            4 |      455 | 2023-01-25 | Illuminar   | L   | 1.000      | -            | -                | -                | -         |    -2.32 | aidKiT, CacaNito, dan1, NENO, xicoz     |
|            3 |      626 | 2023-01-18 | MASONIC     | L   | 1.000      | -            | -                | -                | -         |    -4.44 | aidKiT, CacaNito, dan1, stYleEeZ, xicoz |
|            2 |      658 | 2023-01-16 | Sangal      | L   | 1.000      | -            | -                | -                | -         |    -3.54 | aidKiT, CacaNito, dan1, stYleEeZ, xicoz |
|            1 |      699 | 2023-01-14 | Juggernauts | L   | 1.000      | -            | -                | -                | -         |    -8.35 | aidKiT, CacaNito, dan1, stYleEeZ, xicoz |

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
