### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: Aleksib, Brollan, headtr1ck, k0nfig, REZ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [16](../standings_global.md)<br />
Regional Rank: [14]( ../standings_europe.md)<br />
Final Rank Value:  1301.3<br />
<br />
Final Rank Value (1301.3) = Starting Rank Value (1268.0) + Head To Head Adjustments (33.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.536[<sup>1</sup>](#table2)
- Bounty Collected: 0.422[<sup>2</sup>](#table1)
- Opponent Network: 0.102[<sup>2</sup>](#table1)
- LAN Wins: 0.637[<sup>2</sup>](#table1)

The average of these factors is 0.424<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1268.0
- 400 + ( ( 0.424 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1268.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |      129 | 2023-02-06 | Outsiders       | L   | 1.000      | -            | -                | -                | -         |    -4.74 | Aleksib, Brollan, headtr1ck, k0nfig, REZ  |
|           19 |      170 | 2023-02-04 | Vitality        | L   | 1.000      | -            | -                | -                | -         |    -5.47 | Aleksib, Brollan, headtr1ck, k0nfig, REZ  |
|           18 |      238 | 2023-02-01 | Spirit          | W   | 1.000      | 0.143        | 0.211 (0.030)    | 0.350 (0.050)    | 1 (1.000) |    17.10 | Aleksib, Brollan, headtr1ck, k0nfig, REZ  |
|           17 |      247 | 2023-02-01 | MIBR            | W   | 1.000      | 0.143        | 0.089 (0.013)    | 0.586 (0.084)    | 1 (1.000) |     4.87 | Aleksib, Brollan, headtr1ck, k0nfig, REZ  |
|           16 |      350 | 2023-01-28 | Astralis        | L   | 1.000      | -            | -                | -                | -         |   -16.31 | Aleksib, Brollan, headtr1ck, maxster, REZ |
|           15 |      444 | 2023-01-25 | Natus Vincere   | L   | 1.000      | -            | -                | -                | -         |    -4.33 | Aleksib, Brollan, headtr1ck, maxster, REZ |
|           14 |      490 | 2023-01-23 | BIG             | W   | 1.000      | 0.571        | 0.124 (0.071)    | 0.520 (0.297)    | 1 (1.000) |    16.31 | Aleksib, Brollan, hampus, headtr1ck, REZ  |
|           13 |      554 | 2023-01-21 | Natus Vincere   | L   | 1.000      | -            | -                | -                | -         |    -4.07 | Aleksib, Brollan, hampus, headtr1ck, REZ  |
|           12 |     1413 | 2022-11-26 | FaZe            | L   | 0.681      | -            | -                | -                | -         |    -2.32 | Aleksib, Brollan, es3tag, hampus, REZ     |
|           11 |     1444 | 2022-11-25 | Natus Vincere   | W   | 0.674      | 0.729        | 0.358 (0.176)    | 0.372 (0.183)    | 1 (0.674) |    18.80 | Aleksib, Brollan, es3tag, hampus, REZ     |
|           10 |     1485 | 2022-11-24 | OG              | W   | 0.664      | 0.729        | 0.237 (0.115)    | 0.365 (0.177)    | 1 (0.664) |    16.05 | Aleksib, Brollan, es3tag, hampus, REZ     |
|            9 |     1500 | 2022-11-23 | Heroic          | L   | 0.659      | -            | -                | -                | -         |    -1.10 | Aleksib, Brollan, es3tag, hampus, REZ     |
|            8 |     1690 | 2022-11-06 | Sprout          | L   | 0.548      | -            | -                | -                | -         |   -11.97 | Aleksib, Brollan, es3tag, hampus, REZ     |
|            7 |     1708 | 2022-11-05 | Outsiders       | L   | 0.542      | -            | -                | -                | -         |    -2.27 | Aleksib, Brollan, es3tag, hampus, REZ     |
|            6 |     1719 | 2022-11-05 | fnatic          | L   | 0.540      | -            | -                | -                | -         |    -4.61 | Aleksib, Brollan, es3tag, hampus, REZ     |
|            5 |     2113 | 2022-10-16 | EYEBALLERS      | W   | 0.406      | 0.429        | 0.017 (0.003)    | 0.776 (0.135)    | 1 (0.406) |     1.52 | Aleksib, Brollan, es3tag, hampus, REZ     |
|            4 |     2139 | 2022-10-15 | Lilmix          | W   | 0.399      | 0.429        | 0.022 (0.004)    | 0.208 (0.036)    | 1 (0.399) |     0.58 | Aleksib, Brollan, es3tag, hampus, REZ     |
|            3 |     2364 | 2022-10-06 | Cloud9          | W   | 0.339      | 0.143        | 0.114 (0.006)    | 0.287 (0.014)    | 1 (0.339) |     5.90 | Aleksib, Brollan, es3tag, hampus, REZ     |
|            2 |     2395 | 2022-10-05 | Bad News Eagles | W   | 0.332      | 0.143        | 0.066 (0.003)    | 0.375 (0.018)    | 1 (0.332) |     3.56 | Aleksib, Brollan, es3tag, hampus, REZ     |
|            1 |     2425 | 2022-10-04 | Astralis        | W   | 0.325      | 0.143        | 0.149 (0.007)    | 0.538 (0.025)    | 1 (0.325) |     5.80 | Aleksib, Brollan, es3tag, hampus, REZ     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($64,594.23)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-12 |      1.000 | $10,000.00     | $10,000.00      |
| 2023-01-29 |      1.000 | $5,666.00      | $5,666.00       |
| 2022-11-27 |      0.687 | $40,000.00     | $27,477.49      |
| 2022-11-13 |      0.594 | $20,000.00     | $11,871.47      |
| 2022-10-16 |      0.406 | $23,600.00     | $9,579.26       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
