import { Top100Table } from "@/components/Top100Table";
import Top100Grid from "@/components/Top100Grid";
import { SteamGame } from "@/types";
import ThemeToggle from "@/components/ThemeToggle";

export default async function Home() {
    async function getSteamMostPlayedGames() {
        // Fetch the most played games from Steam API or your own data source
        const res = await fetch('https://api.steampowered.com/ISteamChartsService/GetMostPlayedGames/v1/', {
            next: {
                tags: ['steam-charts-game-list'] // Tag this fetch so we can purge it later
            }
        });

        const data = await res.json();
        const updated_time = data.response.rollup_date;
        const ranks = data.response.ranks;

        // 2. Enrich the list with human-readable names safely
        const enrichedGames = await Promise.all<SteamGame>(
            ranks.map(async (game: SteamGame) => {
                try {
                    const storeRes = await fetch(`https://store.steampowered.com/api/appdetails?appids=${game.appid}`);
                    const storeData = await storeRes.json();

                    // Scan the response object values dynamically instead of using storeData[game.appid]
                    let gameName = `App ID: ${game.appid}`;

                    for (const key of Object.keys(storeData)) {
                        const entry = storeData[key];
                        if (entry?.success && entry?.data?.name) {
                            gameName = entry.data.name;
                            //break; // Stop scanning once we found a valid game block
                        }
                        if(entry?.success && entry?.data?.header_image) {
                            game.store_header_url = entry.data.header_image;
                        }
                    }

                    // Compute Rank Status
                    let rank_status = "Stable"
                    if(game.rank > game.last_week_rank) rank_status = "Increasing"
                    if(game.rank < game.last_week_rank) rank_status = "Decreasing"

                    return {
                        ...game,
                        name: gameName,
                        rank_position_status: rank_status,
                        store_url: `https://store.steampowered.com/app/${game.appid}`
                    };
                } catch (error) {
                    return {
                        ...game,
                        name: `App ID: ${game.appid}`,
                    };
                }
            })
        );
        return {
            updatedTime: updated_time,
            games: enrichedGames,
        };
    }

    const {updatedTime, games} = await getSteamMostPlayedGames();


    return (
        <div>
            <div className="flex justify-between">
                <h1 className="text-3xl italic">SteamPulse</h1>
                <div>
                    <ThemeToggle />
                </div>
            </div>
            
            <h1>Top Games by Most Played - Updated {new Date(updatedTime * 1000).toLocaleDateString()}</h1>
            
            <Top100Grid steamGames={games} />
        </div>
    );
}