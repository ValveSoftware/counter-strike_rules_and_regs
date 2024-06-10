### Roster Details<br />
Team Name: BIG EQUIPA<br />
Roster: JennyR, juliano, kyossa, pauliiee, Zana<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [108](../standings_global.md)<br />
Regional Rank: [76]( ../standings_europe.md)<br />
Final Rank Value:  823.4<br />
<br />
Final Rank Value (823.4) = Starting Rank Value (802.5) + Head To Head Adjustments (20.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.385[<sup>1</sup>](#table2)
- Bounty Collected: 0.285[<sup>2</sup>](#table1)
- Opponent Network: 0.031[<sup>2</sup>](#table1)
- LAN Wins: 0.107[<sup>2</sup>](#table1)

The average of these factors is 0.202<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 802.5
- 400 + ( ( 0.202 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 802.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |      409 | 2024-06-01 | HSG fe            | L   | 1.000      | -            | -                | -                | -         |   -13.33 | JennyR, juliano, kyossa, pauliiee, Zana |
|           17 |      447 | 2024-05-31 | Imperial fe       | L   | 1.000      | -            | -                | -                | -         |    -6.08 | JennyR, juliano, kyossa, pauliiee, Zana |
|           16 |      458 | 2024-05-31 | FlyQuest RED      | W   | 1.000      | 0.524        | 0.028 (0.014)    | 0.247 (0.130)    | 1 (1.000) |    16.04 | JennyR, juliano, kyossa, pauliiee, Zana |
|           15 |      772 | 2024-05-19 | NAVI Javelins     | L   | 1.000      | -            | -                | -                | -         |   -12.01 | JennyR, juliano, kyossa, pauliiee, Zana |
|           14 |      799 | 2024-05-18 | Nemesis fe        | W   | 1.000      | 0.281        | -                | 0.000 (0.000)    | 0 (0.000) |     2.49 | JennyR, juliano, kyossa, pauliiee, Zana |
|           13 |     1485 | 2024-04-20 | Fearless Cheetahs | W   | 0.860      | 0.331        | 0.006 (0.002)    | 0.121 (0.034)    | 0 (0.000) |    10.81 | JennyR, juliano, kyossa, pauliiee, Zana |
|           12 |     1531 | 2024-04-19 | NIP Impact        | W   | 0.854      | 0.331        | 0.006 (0.002)    | 0.197 (0.056)    | 0 (0.000) |    11.20 | JennyR, juliano, kyossa, pauliiee, Zana |
|           11 |     1920 | 2024-04-07 | Imperial fe       | L   | 0.772      | -            | -                | -                | -         |    -4.31 | JennyR, juliano, kyossa, pauliiee, Zana |
|           10 |     1935 | 2024-04-06 | Spirit fe         | W   | 0.765      | 0.262        | 0.005 (0.001)    | 0.065 (0.013)    | 0 (0.000) |     7.00 | JennyR, juliano, kyossa, pauliiee, Zana |
|            9 |     1985 | 2024-04-04 | ENCE Athena       | W   | 0.753      | 0.331        | 0.004 (0.001)    | 0.092 (0.023)    | 0 (0.000) |     7.23 | JennyR, juliano, kyossa, pauliiee, Zana |
|            8 |     2119 | 2024-03-28 | ex-GUILD fe       | L   | 0.707      | -            | -                | -                | -         |   -15.03 | JennyR, juliano, kyossa, pauliiee, Zana |
|            7 |     2394 | 2024-03-14 | Imperial fe       | L   | 0.614      | -            | -                | -                | -         |    -3.64 | JennyR, juliano, kyossa, pauliiee, Zana |
|            6 |     2602 | 2024-03-06 | Astralis W        | W   | 0.560      | 0.331        | 0.002 (0.000)    | 0.049 (0.009)    | 0 (0.000) |     4.50 | JennyR, juliano, kyossa, pauliiee, Zana |
|            5 |     2678 | 2024-03-03 | ex-FORZE Ladies   | W   | 0.541      | 0.250        | 0.004 (0.001)    | 0.062 (0.008)    | 0 (0.000) |     4.64 | JennyR, juliano, kyossa, pauliiee, Zana |
|            4 |     2820 | 2024-02-25 | NAVI Javelins     | L   | 0.493      | -            | -                | -                | -         |    -6.55 | JennyR, juliano, kyossa, pauliiee, Zana |
|            3 |     2825 | 2024-02-25 | Let Her Cook      | W   | 0.491      | 0.238        | 0.082 (0.010)    | 0.225 (0.026)    | 0 (0.000) |    11.25 | JennyR, juliano, kyossa, pauliiee, Zana |
|            2 |     2856 | 2024-02-24 | ex-GUILD fe       | W   | 0.486      | 0.238        | 0.005 (0.001)    | 0.134 (0.015)    | 0 (0.000) |     5.13 | JennyR, juliano, kyossa, pauliiee, Zana |
|            1 |     3389 | 2024-01-28 | QM fe             | W   | 0.306      | 0.250        | 0.000 (0.000)    | -                | -         |     1.55 | JennyR, juliano, kyossa, pauliiee, Zana |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,635.26)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-03-03 |      0.541 | $750.00        | $405.43         |
| 2024-01-28 |      0.306 | $750.00        | $229.82         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
