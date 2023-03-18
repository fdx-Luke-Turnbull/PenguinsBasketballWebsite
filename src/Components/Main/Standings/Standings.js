import React from "react";

export default function Standings() {
    return (
        <section id="standings" class="standings primary">
            <h2 class="section_header">Standings</h2>
            <table class = "standings_table" border="1px">
                <thead>
                    <tr>
                        <th></th>
                        <th class="team">Team</th>
                        <th>Wins</th>
                        <th>Loses</th>
                        <th>Win%</th>
                        <th>GB</th>
                        <th>Streak</th>
                    </tr>
                </thead>
                <tbody>    
                    <tr>
                        <td class="standingsplace">1</td>
                        <td class="team"><i class="fa-solid fa-dragon team_icon"></i>Dragons</td>
                        <td>22</td>
                        <td>8</td>
                        <td>.733</td>
                        <td>-</td>
                        <td>W7</td>
                    </tr>
                    <tr>
                        <td class="standingsplace">2</td>
                        <td class="team"><i class="fa-solid fa-feather team_icon"></i>Flyers</td>
                        <td>21</td>
                        <td>9</td>
                        <td>.700</td>
                        <td>1</td>
                        <td>L1</td>
                    </tr>
                    <tr>
                        <td class="standingsplace">3</td>
                        <td class="team"><i class="fa-solid fa-kiwi-bird team_icon"></i>Kiwis</td>
                        <td>19</td>
                        <td>11</td>
                        <td>.633</td>
                        <td>3</td>
                        <td>W2</td>
                    </tr>
                    <tr>
                        <td class="standingsplace">4</td>
                        <td class="team"><i class="fa-regular fa-snowflake team_icon"></i>Penguins</td>
                        <td>19</td>
                        <td>11</td>
                        <td>.633</td>
                        <td>3</td>
                        <td>L1</td>
                    </tr>
                    <tr>
                        <td class="standingsplace">5</td>
                        <td class="team"><i class="fa-solid fa-spider team_icon"></i>Red Backs</td>
                        <td>18</td>
                        <td>12</td>
                        <td>.600</td>
                        <td>4</td>
                        <td>W1</td>
                    </tr>
                    <tr>
                        <td class="standingsplace">6</td>
                        <td class="team"><i class="fa-solid fa-shrimp team_icon"></i>Pistols</td>
                        <td>17</td>
                        <td>13</td>
                        <td>.566</td>
                        <td>5</td>
                        <td>W3</td>
                    </tr>
                    <tr>
                        <td class="standingsplace">7</td>
                        <td class="team"><i class="fa-solid fa-horse-head team_icon"></i>Stallions</td>
                        <td>15</td>
                        <td>15</td>
                        <td>.500</td>
                        <td>7</td>
                        <td>W1</td>
                    </tr>
                    <tr>
                        <td class="standingsplace">8</td>
                        <td class="team"><i class="fa-solid fa-fire-flame-curved team_icon"></i>Fire</td>
                        <td>15</td>
                        <td>15</td>
                        <td>.500</td>
                        <td>7</td>
                        <td>L2</td>
                    </tr>
                    <tr>
                        <td class="standingsplace">9</td>
                        <td class="team"><i class="fa-solid fa-crow team_icon"></i>Crows</td>
                        <td>14</td>
                        <td>16</td>
                        <td>.466</td>
                        <td>8</td>
                        <td>L1</td>
                    </tr>
                    <tr>
                        <td class="standingsplace">10</td>
                        <td class="team"><i class="fa-solid fa-anchor team_icon"></i>Mariners</td>
                        <td>13</td>
                        <td>17</td>
                        <td>.433</td>
                        <td>9</td>
                        <td>W2</td>
                    </tr>
                    <tr>
                        <td class="standingsplace">11</td>
                        <td class="team"><i class="fa-solid fa-bolt team_icon"></i>Thunder</td>
                        <td>9</td>
                        <td>21</td>
                        <td>.300</td>
                        <td>13</td>
                        <td>L4</td>
                    </tr>
                    <tr>
                        <td class="standingsplace">12</td>
                        <td class="team"><i class="fa-solid fa-meteor team_icon"></i>Comets</td>
                        <td>6</td>
                        <td>24</td>
                        <td>.200</td>
                        <td>16</td>
                        <td>L7</td>
                    </tr>
                </tbody>
            </table>
        </section>
      );
}