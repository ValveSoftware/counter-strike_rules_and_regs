### Roster Details<br />
Team Name: FAVBET<br />
Roster: bondik, guthriee, j3kie, Smash, t3ns1on<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [102](../standings_global.md)<br />
Regional Rank: [69]( ../standings_europe.md)<br />
Final Rank Value:  785.3<br />
<br />
Final Rank Value (785.3) = Starting Rank Value (719.6) + Head To Head Adjustments (65.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.290[<sup>1</sup>](#table2)
- Bounty Collected: 0.328[<sup>2</sup>](#table1)
- Opponent Network: 0.041[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 719.6
- 400 + ( ( 0.165 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 719.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |       11 | 2024-05-29 | Aurora Young Blud | W   | 1.000      | 0.371        | 0.001 (0.000)    | 0.058 (0.022)    | 0 (0.000) |    10.34 | bondik, guthriee, j3kie, Smash, t3ns1on   |
|           15 |      580 | 2024-05-10 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |    -8.54 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           14 |     1530 | 2024-04-03 | Metizport         | L   | 0.825      | -            | -                | -                | -         |    -5.51 | bondik, guthriee, j3kie, Smash, t3ns1on   |
|           13 |     1563 | 2024-04-02 | Ninjas in Pyjamas | L   | 0.819      | -            | -                | -                | -         |    -4.18 | bondik, guthriee, j3kie, Smash, t3ns1on   |
|           12 |     1567 | 2024-04-02 | GamerLegion       | W   | 0.818      | 0.143        | 0.224 (0.026)    | 0.278 (0.033)    | 0 (0.000) |    23.86 | aNdu, isak, sl3nd, Snax, volt             |
|           11 |     1595 | 2024-03-31 | Passion UA        | W   | 0.805      | 0.276        | 0.056 (0.013)    | 0.759 (0.169)    | 0 (0.000) |    17.96 | bondik, guthriee, j3kie, Smash, t3ns1on   |
|           10 |     1600 | 2024-03-30 | L&G               | W   | 0.798      | 0.276        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.35 | bondik, guthriee, j3kie, Smash, t3ns1on   |
|            9 |     1656 | 2024-03-27 | ALTERNATE aTTaX   | W   | 0.780      | 0.143        | 0.048 (0.005)    | 0.650 (0.072)    | 0 (0.000) |    17.61 | ArroW, awzek, FreeZe, hyped, skyye        |
|            8 |     1666 | 2024-03-27 | BetBoom           | W   | 0.779      | 0.143        | 0.392 (0.044)    | 0.951 (0.106)    | 0 (0.000) |    23.78 | bondik, guthriee, j3kie, Smash, t3ns1on   |
|            7 |     2001 | 2024-03-10 | GODSENT           | L   | 0.666      | -            | -                | -                | -         |   -13.04 | bondik, guthriee, j3kie, Smash, t3ns1on   |
|            6 |     2047 | 2024-03-08 | Nexus             | L   | 0.652      | -            | -                | -                | -         |    -6.62 | bondik, guthriee, j3kie, Smash, t3ns1on   |
|            5 |     2103 | 2024-03-06 | CYBERSHOKE        | W   | 0.639      | 0.372        | 0.002 (0.000)    | 0.055 (0.013)    | 0 (0.000) |     9.08 | fen2k, FenomeN, flamie, Re1GN, sh1nejezzz |
|            4 |     3281 | 2024-01-16 | Nexus             | L   | 0.306      | -            | -                | -                | -         |    -2.85 | BTN, ERSIN, ragga, s0und, XELLOW          |
|            3 |     3299 | 2024-01-16 | OWL               | W   | 0.306      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.40 | bondik, guthriee, j3kie, Smash, t3ns1on   |
|            2 |     3386 | 2024-01-13 | ex-Anonymo        | L   | 0.285      | -            | -                | -                | -         |    -5.15 | bondik, guthriee, j3kie, Smash, t3ns1on   |
|            1 |     3422 | 2024-01-12 | Wolves            | W   | 0.280      | 0.143        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.25 | bondik, guthriee, j3kie, Smash, t3ns1on   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,058.50)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
