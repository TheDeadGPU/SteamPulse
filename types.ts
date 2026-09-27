export type SteamGame = {
    // Fields from Steam API
    rank: number;
    appid: number;
    last_week_rank: number;
    peak_in_game: number;

    // Programmically Added Fields
    name: string;
    rank_position_status: string;
    store_url: string;
};