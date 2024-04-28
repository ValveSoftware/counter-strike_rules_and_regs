### Roster Details<br />
Team Name: EPG Family<br />
Roster: anarkez, Forester, KaiR0N-, NickelBack, SELLTER<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [98](../standings_global.md)<br />
Regional Rank: [70]( ../standings_europe.md)<br />
Final Rank Value:  812.7<br />
<br />
Final Rank Value (812.7) = Starting Rank Value (799.5) + Head To Head Adjustments (13.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.384[<sup>1</sup>](#table2)
- Bounty Collected: 0.318[<sup>2</sup>](#table1)
- Opponent Network: 0.078[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.195<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 799.5
- 400 + ( ( 0.195 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 799.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |      803 | 2022-12-17 | LDLC               | L   | 0.821      | -            | -                | -                | -         |   -15.24 | anarkez, Forester, KaiR0N-, NickelBack, SELLTER |
|           15 |      816 | 2022-12-17 | IKLA               | L   | 0.819      | -            | -                | -                | -         |    -8.01 | anarkez, Forester, KaiR0N-, NickelBack, SELLTER |
|           14 |     1491 | 2022-11-23 | ex-Finest          | L   | 0.661      | -            | -                | -                | -         |    -8.69 | anarkez, Krad, NickelBack, propleh, SELLTER     |
|           13 |     1636 | 2022-11-15 | Endpoint           | L   | 0.607      | -            | -                | -                | -         |    -8.08 | anarkez, Krad, NickelBack, propleh, SELLTER     |
|           12 |     1741 | 2022-11-02 | ECSTATIC           | W   | 0.520      | 0.435        | 0.030 (0.007)    | 0.556 (0.126)    | 0 (0.000) |     8.46 | brzer, Cabbi, kraghen, maNkz, Queenix           |
|           11 |     1904 | 2022-10-24 | 1WIN               | W   | 0.460      | 0.435        | 0.023 (0.005)    | 0.313 (0.062)    | 0 (0.000) |     8.76 | anarkez, Forester, Krad, mir, NickelBack        |
|           10 |     1913 | 2022-10-24 | IKLA               | W   | 0.458      | 0.435        | 0.017 (0.003)    | 0.743 (0.148)    | 0 (0.000) |     9.43 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi          |
|            9 |     1939 | 2022-10-23 | Copenhagen Flames  | W   | 0.451      | 0.435        | 0.133 (0.026)    | 0.722 (0.142)    | 0 (0.000) |    10.31 | b0RUP, birdfromsky, raalz, regali, TMB          |
|            8 |     1997 | 2022-10-21 | BLUEJAYS           | W   | 0.438      | 0.435        | 0.102 (0.019)    | 0.490 (0.093)    | 0 (0.000) |    11.12 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ        |
|            7 |     2015 | 2022-10-20 | Bad News Eagles    | L   | 0.433      | -            | -                | -                | -         |    -1.68 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy     |
|            6 |     2017 | 2022-10-20 | Copenhagen Flames  | L   | 0.433      | -            | -                | -                | -         |    -3.71 | b0RUP, birdfromsky, raalz, regali, TMB          |
|            5 |     2041 | 2022-10-19 | 1WIN               | L   | 0.427      | -            | -                | -                | -         |    -5.22 | anarkez, Forester, Krad, mir, NickelBack        |
|            4 |     2057 | 2022-10-18 | Falcons            | W   | 0.420      | 0.435        | 0.045 (0.008)    | 0.767 (0.140)    | 0 (0.000) |     9.65 | hAdji, Maka, misutaaa, NBK-, Python             |
|            3 |     2505 | 2022-09-30 | ex-Into the Breach | L   | 0.298      | -            | -                | -                | -         |    -4.18 | Adam9130, CYPHER, dobbo, draken, RuStY          |
|            2 |     2547 | 2022-09-28 | AGO                | W   | 0.286      | 0.435        | 0.005 (0.001)    | 0.328 (0.041)    | 0 (0.000) |     4.20 | AxEcHo, Furlan, leman, phr, snatchie            |
|            1 |     2561 | 2022-09-28 | eSuba              | W   | 0.285      | 0.435        | 0.028 (0.004)    | 0.234 (0.029)    | 0 (0.000) |     6.10 | Blogg1s, Levi, luko, M1key, Pechyn              |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,861.19)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-10-24 |      0.460 | $22,000.00     | $10,111.99      |
| 2022-10-23 |      0.454 | $2,500.00      | $1,134.68       |
| 2022-10-01 |      0.307 | $2,000.00      | $614.52         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
