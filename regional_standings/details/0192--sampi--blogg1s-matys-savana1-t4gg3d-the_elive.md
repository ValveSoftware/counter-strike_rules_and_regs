### Roster Details<br />
Team Name: Sampi<br />
Roster: Blogg1s, MATYS, sAvana1, T4gg3D, The eLiVe<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [192](../standings_global.md)<br />
Regional Rank: [121]( ../standings_europe.md)<br />
Final Rank Value:  620.3<br />
<br />
Final Rank Value (620.3) = Starting Rank Value (644.6) + Head To Head Adjustments (-24.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.245[<sup>1</sup>](#table2)
- Bounty Collected: 0.193[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.039[<sup>2</sup>](#table1)

The average of these factors is 0.120<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 644.6
- 400 + ( ( 0.120 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 644.6


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
|           11 |       12 | 2023-02-12 | The Prodigies   | L   | 1.000      | -            | -                | -                | -         |   -16.31 | Blogg1s, MATYS, sAvana1, T4gg3D, The eLiVe |
|           10 |     1518 | 2022-11-22 | SINNERS         | L   | 0.653      | -            | -                | -                | -         |    -2.41 | ADEJIS, HONES, MATYS, sAvana1, T4gg3D      |
|            9 |     2200 | 2022-10-14 | Entropiq Prague | L   | 0.391      | -            | -                | -                | -         |    -4.58 | Habyzz, HONES, MATYS, sAvana1, T4gg3D      |
|            8 |     2216 | 2022-10-13 | eSuba           | L   | 0.386      | -            | -                | -                | -         |    -2.09 | Habyzz, HONES, MATYS, sAvana1, T4gg3D      |
|            7 |     2242 | 2022-10-12 | Cryptova        | W   | 0.381      | 0.360        | 0.005 (0.001)    | 0.047 (0.006)    | 1 (0.381) |     7.33 | Habyzz, HONES, MATYS, sAvana1, T4gg3D      |
|            6 |     3322 | 2022-09-03 | Entropiq Prague | L   | 0.119      | -            | -                | -                | -         |    -1.38 | GuardiaN, HONES, MATYS, sAvana1, T4gg3D    |
|            5 |     3333 | 2022-09-03 | Bad News Eagles | L   | 0.118      | -            | -                | -                | -         |    -0.21 | GuardiaN, HONES, MATYS, sAvana1, T4gg3D    |
|            4 |     3510 | 2022-08-27 | xDDDD           | L   | 0.073      | -            | -                | -                | -         |    -1.65 | GuardiaN, HONES, MATYS, sAvana1, T4gg3D    |
|            3 |     3569 | 2022-08-26 | X               | L   | 0.064      | -            | -                | -                | -         |    -1.39 | GuardiaN, HONES, MATYS, sAvana1, T4gg3D    |
|            2 |     3592 | 2022-08-24 | Beyond Possible | L   | 0.052      | -            | -                | -                | -         |    -1.09 | GuardiaN, HONES, MATYS, sAvana1, T4gg3D    |
|            1 |     3646 | 2022-08-22 | Aurora          | L   | 0.039      | -            | -                | -                | -         |    -0.56 | GuardiaN, HONES, MATYS, sAvana1, T4gg3D    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($385.73)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-11-24 |      0.667 | $435.00        | $290.13         |
| 2022-09-05 |      0.133 | $720.00        | $95.60          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
