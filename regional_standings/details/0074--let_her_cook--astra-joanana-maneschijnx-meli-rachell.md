### Roster Details<br />
Team Name: Let Her Cook<br />
Roster: ASTRA, Joanana, ManeschijnX, meli, RacheLL<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [74](../standings_global.md)<br />
Regional Rank: [52]( ../standings_europe.md)<br />
Final Rank Value:  961.9<br />
<br />
Final Rank Value (961.9) = Starting Rank Value (987.5) + Head To Head Adjustments (-25.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.480[<sup>1</sup>](#table2)
- Bounty Collected: 0.324[<sup>2</sup>](#table1)
- Opponent Network: 0.055[<sup>2</sup>](#table1)
- LAN Wins: 0.320[<sup>2</sup>](#table1)

The average of these factors is 0.295<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 987.5
- 400 + ( ( 0.295 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 987.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      382 | 2024-06-02 | Imperial fe       | L   | 1.000      | -            | -                | -                | -         |    -9.69 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           14 |      386 | 2024-06-02 | HSG fe            | W   | 1.000      | 0.524        | 0.043 (0.022)    | 0.100 (0.052)    | 1 (1.000) |    12.29 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           13 |      445 | 2024-05-31 | Fluxo Demons      | W   | 1.000      | 0.524        | 0.044 (0.023)    | 0.282 (0.148)    | 1 (1.000) |    14.36 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           12 |      456 | 2024-05-31 | NAVI Javelins     | W   | 1.000      | 0.524        | 0.041 (0.022)    | 0.330 (0.173)    | 1 (1.000) |    15.87 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           11 |     1496 | 2024-04-20 | ex-GUILD fe       | W   | 0.859      | 0.331        | 0.005 (0.001)    | 0.134 (0.038)    | 0 (0.000) |     5.77 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           10 |     1535 | 2024-04-19 | Spirit fe         | W   | 0.853      | 0.331        | 0.005 (0.001)    | 0.065 (0.018)    | 0 (0.000) |     4.35 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|            9 |     1754 | 2024-04-11 | NIP Impact        | L   | 0.800      | -            | -                | -                | -         |   -18.25 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            8 |     1797 | 2024-04-10 | 1WIN Gang         | L   | 0.793      | -            | -                | -                | -         |   -20.95 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            7 |     1854 | 2024-04-09 | Spirit fe         | W   | 0.786      | 0.303        | 0.005 (0.001)    | 0.065 (0.015)    | 0 (0.000) |     3.77 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            6 |     1938 | 2024-04-06 | Fearless Cheetahs | L   | 0.765      | -            | -                | -                | -         |   -18.73 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            5 |     2019 | 2024-04-03 | NAVI Javelins     | W   | 0.747      | 0.331        | 0.041 (0.010)    | 0.330 (0.082)    | 0 (0.000) |     9.11 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            4 |     2241 | 2024-03-21 | Fearless Cheetahs | L   | 0.660      | -            | -                | -                | -         |   -16.88 | Joanana, kezziwow, meli, RacheLL, suns1de  |
|            3 |     2424 | 2024-03-13 | Crescent fe       | W   | 0.607      | 0.331        | 0.007 (0.001)    | 0.122 (0.025)    | 0 (0.000) |     2.98 | Joanana, kezziwow, meli, RacheLL, suns1de  |
|            2 |     2825 | 2024-02-25 | BIG EQUIPA        | L   | 0.491      | -            | -                | -                | -         |   -11.25 | Joanana, kezziwow, meli, RacheLL, suns1de  |
|            1 |     2855 | 2024-02-24 | Nemesis fe        | W   | 0.486      | 0.238        | 0.001 (0.000)    | 0.010 (0.001)    | 0 (0.000) |     1.68 | amyb, Emmy, Gaba, Ju, Lowlita              |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($25,000.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
