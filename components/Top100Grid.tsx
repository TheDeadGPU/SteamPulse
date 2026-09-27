interface Top100GridProps {
    steamGames: SteamGame[];
}

import { SteamGame } from "@/types";
import GameBox from "./GameBox";

export default function Top100Grid(props: Top100GridProps) {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {props.steamGames && props.steamGames.map((game, idx) => (
                <GameBox
                    key={idx}
                    game={game}
                />
            ))}
        </div>
    )
}