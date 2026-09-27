interface GameBoxProps {
    game: SteamGame;
}

import { SteamGame } from "@/types";
import { IconActivityHeartbeat, IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";
import Image from "next/image";

export default function GameBox(props: GameBoxProps) {
    return (
        <div className="p-4 border rounded-lg hover:scale-105 transition-transform duration-200">
            <Image
                src={props.game.store_header_url}
                alt={props.game.name}
                width={200}
                height={100}
            />
            <h3 className="text-lg font-bold">{props.game.name}</h3>
            <div className="flex items-center justify-between">
                <span className="text-sm">Rank Position: {props.game.rank_position_status}</span> 
                {props.game.rank_position_status == "Increasing" && (
                    <IconTrendingUp className="text-lime-400"/>
                )}
                {props.game.rank_position_status == "Decreasing" && (
                    <IconTrendingDown className="text-red-400"/>
                )}
                {props.game.rank_position_status == "Stable" && (
                    <IconActivityHeartbeat/>
                )}
            </div>
            <p className="text-sm">Rank: {props.game.rank}</p>
            <p className="text-sm">Peak In-Game: {props.game.peak_in_game.toLocaleString()}</p>
            <a href={props.game.store_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">Store Page</a>
        </div>
    )
}