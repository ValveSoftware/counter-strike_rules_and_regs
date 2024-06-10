### Roster Details<br />
Team Name: ex-iNation<br />
Roster: aidKiT, c0llins, Dragon, emi, xicoz<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [102](../standings_global.md)<br />
Regional Rank: [72]( ../standings_europe.md)<br />
Final Rank Value:  843.7<br />
<br />
Final Rank Value (843.7) = Starting Rank Value (768.3) + Head To Head Adjustments (75.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.359[<sup>1</sup>](#table2)
- Bounty Collected: 0.284[<sup>2</sup>](#table1)
- Opponent Network: 0.096[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.185<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 768.3
- 400 + ( ( 0.185 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 768.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      253 | 2024-06-06 | Passion UA      | L   | 1.000      | -            | -                | -                | -         |    -7.80 | aidKiT, c0llins, Dragon, emi, xicoz     |
|            9 |      297 | 2024-06-05 | Enterprise      | W   | 1.000      | 0.371        | 0.011 (0.004)    | 0.647 (0.240)    | 0 (0.000) |    20.63 | aidKiT, c0llins, Dragon, emi, VLDN      |
|            8 |      350 | 2024-06-04 | Passion UA      | L   | 1.000      | -            | -                | -                | -         |    -6.97 | aidKiT, c0llins, Dragon, emi, xicoz     |
|            7 |      402 | 2024-06-02 | brazylijski luz | W   | 1.000      | 0.371        | 0.005 (0.002)    | 0.355 (0.132)    | 0 (0.000) |    18.11 | aidKiT, c0llins, Dragon, emi, xicoz     |
|            6 |      491 | 2024-05-30 | Permitta        | W   | 1.000      | 0.371        | 0.022 (0.008)    | 0.972 (0.360)    | 0 (0.000) |    20.61 | bnox, maaryy, mASKED, morelz, tomiko    |
|            5 |      591 | 2024-05-25 | Zero Tenacity   | L   | 1.000      | -            | -                | -                | -         |    -4.78 | aidKiT, c0llins, Dragon, emi, xicoz     |
|            4 |      597 | 2024-05-25 | UNiTY           | W   | 1.000      | 0.371        | 0.029 (0.011)    | 0.247 (0.091)    | 0 (0.000) |    22.55 | aidKiT, c0llins, Dragon, emi, xicoz     |
|            3 |      610 | 2024-05-24 | M1X KS          | L   | 1.000      | -            | -                | -                | -         |    -6.91 | aidKiT, c0llins, Dragon, emi, xicoz     |
|            2 |      712 | 2024-05-21 | ECF             | W   | 1.000      | 0.371        | 0.013 (0.005)    | 0.378 (0.140)    | 0 (0.000) |    20.32 | aidKiT, c0llins, Dragon, emi, xicoz     |
|            1 |     1585 | 2024-04-18 | BetBoom         | L   | 0.846      | -            | -                | -                | -         |    -0.36 | KaiR0N-, Magnojez, nafany, s1ren, zorte |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,000.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
