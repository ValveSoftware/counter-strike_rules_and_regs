### Roster Details<br />
Team Name: X13<br />
Roster: Andrew, Austin, Drewtheshrew, Feral, STRiiDER<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [190](../standings_global.md)<br />
Regional Rank: [56]( ../standings_americas.md)<br />
Final Rank Value:  624.7<br />
<br />
Final Rank Value (624.7) = Starting Rank Value (662.0) + Head To Head Adjustments (-37.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.250[<sup>1</sup>](#table2)
- Bounty Collected: 0.220[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.033[<sup>2</sup>](#table1)

The average of these factors is 0.128<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 662.0
- 400 + ( ( 0.128 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 662.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |     1267 | 2022-12-01 | Villainous           | L   | 0.715      | -            | -                | -                | -         |   -13.51 | Andrew, Austin, Drewtheshrew, Feral, STRiiDER |
|           20 |     1325 | 2022-11-29 | DNA                  | W   | 0.702      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.31 | Andrew, Austin, Drewtheshrew, Feral, Gonzo    |
|           19 |     1373 | 2022-11-27 | Take Flyte           | L   | 0.688      | -            | -                | -                | -         |    -9.37 | Andrew, Austin, Drewtheshrew, Feral, Gonzo    |
|           18 |     1443 | 2022-11-25 | EG White             | L   | 0.675      | -            | -                | -                | -         |    -4.24 | Andrew, Austin, Drewtheshrew, Gonzo, STRiiDER |
|           17 |     2202 | 2022-10-13 | 7AM NA               | L   | 0.389      | -            | -                | -                | -         |    -7.76 | Andrew, Austin, Feral, Gonzo, seziwana        |
|           16 |     2238 | 2022-10-12 | Mythic               | L   | 0.382      | -            | -                | -                | -         |    -5.57 | Andrew, Austin, Feral, Gonzo, seziwana        |
|           15 |     2272 | 2022-10-11 | Eros                 | W   | 0.376      | 0.371        | 0.006 (0.001)    | 0.243 (0.034)    | 0 (0.000) |     6.58 | Andrew, Austin, Feral, Gonzo, seziwana        |
|           14 |     2509 | 2022-09-29 | Villainous           | L   | 0.296      | -            | -                | -                | -         |    -4.86 | Andrew, Austin, Feral, Gonzo, seziwana        |
|           13 |     2536 | 2022-09-28 | Strife               | L   | 0.289      | -            | -                | -                | -         |    -4.95 | Andrew, Austin, Feral, Gonzo, seziwana        |
|           12 |     2567 | 2022-09-27 | Red Wolves           | L   | 0.283      | -            | -                | -                | -         |    -4.52 | Andrew, Austin, Feral, Gonzo, seziwana        |
|           11 |     2729 | 2022-09-22 | Eros                 | W   | 0.249      | 0.371        | 0.006 (0.001)    | 0.243 (0.022)    | 0 (0.000) |     4.32 | Andrew, Austin, Feral, Gonzo, seziwana        |
|           10 |     2828 | 2022-09-19 | Davenport University | W   | 0.228      | 0.384        | 0.014 (0.001)    | 0.227 (0.020)    | 0 (0.000) |     4.29 | Andrew, Austin, Feral, Gonzo, seziwana        |
|            9 |     2841 | 2022-09-18 | Task Force 141       | W   | 0.222      | 0.384        | 0.000 (0.000)    | 0.030 (0.003)    | 0 (0.000) |     2.25 | Andrew, Austin, Feral, Gonzo, seziwana        |
|            8 |     2904 | 2022-09-16 | REIGN                | W   | 0.208      | 0.384        | 0.003 (0.000)    | 0.153 (0.012)    | 0 (0.000) |     3.27 | Andrew, Austin, Feral, Gonzo, seziwana        |
|            7 |     3014 | 2022-09-13 | 7AM NA               | L   | 0.189      | -            | -                | -                | -         |    -3.78 | Andrew, Austin, Feral, Gonzo, seziwana        |
|            6 |     3158 | 2022-09-09 | Task Force 141       | L   | 0.161      | -            | -                | -                | -         |    -3.45 | Andrew, Austin, Feral, Gonzo, seziwana        |
|            5 |     3168 | 2022-09-09 | Take Charge          | W   | 0.160      | 0.143        | 0.000 (0.000)    | 0.105 (0.002)    | 1 (0.160) |     1.54 | Andrew, Austin, Feral, Gonzo, seziwana        |
|            4 |     3186 | 2022-09-09 | All Gas No Brakes    | W   | 0.159      | 0.143        | 0.000 (0.000)    | 0.008 (0.000)    | 1 (0.159) |     0.95 | Andrew, Austin, Feral, Gonzo, seziwana        |
|            3 |     3212 | 2022-09-08 | BIG Academy          | L   | 0.154      | -            | -                | -                | -         |    -0.52 | Andrew, Austin, Feral, Gonzo, seziwana        |
|            2 |     3280 | 2022-09-04 | Pete's Hookah Lounge | L   | 0.127      | -            | -                | -                | -         |    -2.95 | Andrew, Austin, Feral, Gonzo, seziwana        |
|            1 |     3304 | 2022-09-03 | Detonate             | W   | 0.122      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.72 | Andrew, Austin, Feral, Gonzo, seziwana        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($469.70)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
