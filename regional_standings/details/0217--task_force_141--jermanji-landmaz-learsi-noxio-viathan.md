### Roster Details<br />
Team Name: Task Force 141<br />
Roster: jermanji, landmaz, LEARSI, Noxio, Viathan<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [217](../standings_global.md)<br />
Regional Rank: [71]( ../standings_americas.md)<br />
Final Rank Value:  513.3<br />
<br />
Final Rank Value (513.3) = Starting Rank Value (524.4) + Head To Head Adjustments (-11.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.191[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.050[<sup>2</sup>](#table1)

The average of these factors is 0.061<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 524.4
- 400 + ( ( 0.061 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 524.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |     2537 | 2022-09-28 | 7AM NA       | L   | 0.289      | -            | -                | -                | -         |    -4.01 | jermanji, landmaz, LEARSI, Noxio, Viathan   |
|           18 |     2572 | 2022-09-27 | timbermen    | L   | 0.282      | -            | -                | -                | -         |    -1.50 | jermanji, landmaz, LEARSI, Noxio, Wolffe    |
|           17 |     2605 | 2022-09-25 | Disconnected | L   | 0.269      | -            | -                | -                | -         |    -2.02 | jermanji, landmaz, LEARSI, Noxio, Wolffe    |
|           16 |     2610 | 2022-09-25 | timbermen    | L   | 0.268      | -            | -                | -                | -         |    -1.48 | jermanji, landmaz, LEARSI, Noxio, Wolffe    |
|           15 |     2682 | 2022-09-23 | Vendetta     | L   | 0.255      | -            | -                | -                | -         |    -2.06 | consti, Momo, Pluto, Tender, WOOHOO         |
|           14 |     2731 | 2022-09-22 | ATK          | L   | 0.249      | -            | -                | -                | -         |    -0.67 | b0denmaster, Fadey, MisteM, motm, Swisher   |
|           13 |     2799 | 2022-09-20 | Foggy        | W   | 0.235      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.44 | jermanji, landmaz, Noxio, Viathan, Wolffe   |
|           12 |     2841 | 2022-09-18 | X13          | L   | 0.222      | -            | -                | -                | -         |    -2.25 | JDubs, jermanji, landmaz, Noxio, Wolffe     |
|           11 |     2847 | 2022-09-18 | ChocoCheck   | L   | 0.221      | -            | -                | -                | -         |    -2.26 | cJ, CLASIA, J0LZ, nosraC, XotiC             |
|           10 |     2935 | 2022-09-15 | Nouns        | L   | 0.201      | -            | -                | -                | -         |    -1.48 | Bwills, cxzi, cynic, JazzPimp, jeorgesnorts |
|            9 |     3018 | 2022-09-13 | Strife       | L   | 0.188      | -            | -                | -                | -         |    -2.18 | D4rtyMontana, J0LZ, jitter, reck, SLIGHT    |
|            8 |     3107 | 2022-09-10 | 1 JIN        | L   | 0.168      | -            | -                | -                | -         |    -1.56 | ayy, farg, Jason, LEARSI, Umar              |
|            7 |     3132 | 2022-09-10 | EG White     | L   | 0.167      | -            | -                | -                | -         |    -0.65 | ben1337, djay, Jonji, PwnAlone, viz         |
|            6 |     3135 | 2022-09-10 | 1 JIN        | W   | 0.166      | 0.500        | 0.006 (0.000)    | 0.192 (0.016)    | 1 (0.166) |     3.71 | JDubs, jermanji, landmaz, Noxio, Wolffe     |
|            5 |     3158 | 2022-09-09 | X13          | W   | 0.161      | 0.143        | 0.001 (0.000)    | 0.090 (0.002)    | 1 (0.161) |     3.45 | Andrew, Austin, Feral, Gonzo, seziwana      |
|            4 |     3170 | 2022-09-09 | EG Black     | L   | 0.160      | -            | -                | -                | -         |    -0.65 | JDubs, jermanji, landmaz, Noxio, Wolffe     |
|            3 |     3196 | 2022-09-08 | Red Wolves   | W   | 0.155      | 0.143        | 0.002 (0.000)    | 0.291 (0.006)    | 1 (0.155) |     3.35 | Fatality, K4mr0, Locke, sam, Shawta         |
|            2 |     3405 | 2022-08-31 | timbermen    | L   | 0.102      | -            | -                | -                | -         |    -0.56 | dare, droid, intra, shane, snav             |
|            1 |     3424 | 2022-08-30 | Disconnected | L   | 0.095      | -            | -                | -                | -         |    -0.72 | aris, BeaKie, brett, silas, Swahn           |

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
