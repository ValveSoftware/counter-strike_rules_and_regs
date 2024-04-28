### Roster Details<br />
Team Name: Nexus<br />
Roster: BTN, ERSIN, ragga, SEMINTE, XELLOW<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [108](../standings_global.md)<br />
Regional Rank: [77]( ../standings_europe.md)<br />
Final Rank Value:  771.9<br />
<br />
Final Rank Value (771.9) = Starting Rank Value (724.0) + Head To Head Adjustments (47.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.240[<sup>1</sup>](#table2)
- Bounty Collected: 0.287[<sup>2</sup>](#table1)
- Opponent Network: 0.107[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.158<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 724.0
- 400 + ( ( 0.158 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 724.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      958 | 2022-12-11 | EYEBALLERS             | W   | 0.779      | 0.477        | 0.017 (0.006)    | 0.776 (0.288)    | 0 (0.000) |    16.80 | BTN, ERSIN, ragga, SEMINTE, XELLOW |
|           12 |     1041 | 2022-12-08 | Invictus International | L   | 0.760      | -            | -                | -                | -         |   -12.34 | BTN, ERSIN, ragga, SEMINTE, XELLOW |
|           11 |     1123 | 2022-12-06 | Monte                  | W   | 0.746      | 0.477        | 0.029 (0.010)    | 0.945 (0.336)    | 0 (0.000) |    17.58 | BTN, ERSIN, ragga, SEMINTE, XELLOW |
|           10 |     1151 | 2022-12-05 | Endpoint               | W   | 0.738      | 0.477        | 0.033 (0.012)    | 0.641 (0.226)    | 0 (0.000) |    17.23 | BTN, ERSIN, ragga, SEMINTE, XELLOW |
|            9 |     1221 | 2022-12-03 | MASONIC                | L   | 0.726      | -            | -                | -                | -         |    -6.90 | BTN, ERSIN, ragga, SEMINTE, XELLOW |
|            8 |     1307 | 2022-11-30 | Apeks                  | L   | 0.706      | -            | -                | -                | -         |    -5.40 | BTN, ERSIN, ragga, SEMINTE, XELLOW |
|            7 |     1395 | 2022-11-27 | los kogutos            | W   | 0.685      | 0.143        | 0.007 (0.001)    | 0.364 (0.036)    | 0 (0.000) |    12.31 | BTN, ERSIN, ragga, SEMINTE, XELLOW |
|            6 |     1398 | 2022-11-27 | sYnck                  | L   | 0.685      | -            | -                | -                | -         |   -10.53 | BTN, Ed1m, ERSIN, ragga, XELLOW    |
|            5 |     1420 | 2022-11-26 | los kogutos            | W   | 0.680      | 0.143        | 0.007 (0.001)    | 0.364 (0.035)    | 0 (0.000) |    12.49 | BTN, ERSIN, ragga, SEMINTE, XELLOW |
|            4 |     1799 | 2022-10-30 | EC Brugge              | W   | 0.499      | 0.300        | 0.007 (0.001)    | 0.507 (0.076)    | 0 (0.000) |     9.47 | BTN, Ed1m, ERSIN, ragga, XELLOW    |
|            3 |     1813 | 2022-10-29 | los kogutos            | L   | 0.491      | -            | -                | -                | -         |    -6.18 | Blytz, BTN, ERSIN, ragga, XELLOW   |
|            2 |     1834 | 2022-10-28 | UNGENTIUM              | W   | 0.484      | 0.300        | 0.015 (0.002)    | 0.474 (0.069)    | 0 (0.000) |     9.31 | BTN, ERSIN, ragga, SEMINTE, XELLOW |
|            1 |     2182 | 2022-10-14 | OneTap                 | L   | 0.393      | -            | -                | -                | -         |    -5.95 | 7kick, BTN, ragga, SEMINTE, XELLOW |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($316.89)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
