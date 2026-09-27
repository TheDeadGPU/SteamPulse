"use client";

import { SteamGame } from "@/types";
import GameBox from "./GameBox";
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { useState } from "react";

const rankStatusOrder: Record<string, number> = {
    Increasing: 0,
    Stable: 1,
    Decreasing: 2,
};

interface Top100GridProps {
    steamGames: SteamGame[];
}

export default function Top100Grid(props: Top100GridProps) {
    const [games, setGames] = useState(props.steamGames);

    return (
        <div >
            <div className="flex justify-between mb-2">
                <div></div>
                <div className="flex items-center gap-2">
                    <p>Sort By: </p>
                    <ToggleGroup variant="outline" defaultValue={["most-played"]}>
                        <ToggleGroupItem value="most-played" aria-label="Toggle Most Played" onClick={() => setGames(current =>
                            [...current].sort((a, b) => a.rank - b.rank)
                        )}>
                            Most Played
                        </ToggleGroupItem>
                        <ToggleGroupItem value="peak-players" aria-label="Toggle Peak Players" onClick={() => setGames(current =>
                            [...current].sort((a, b) => b.peak_in_game - a.peak_in_game)
                        )}>
                            Peak Players
                        </ToggleGroupItem>
                        <ToggleGroupItem value="biggest-risers" aria-label="Toggle Biggest Risers" onClick={() => setGames(current =>
                            [...current].sort((a, b) =>
                                (rankStatusOrder[a.rank_position_status] ?? 1) -
                                (rankStatusOrder[b.rank_position_status] ?? 1)
                            )
                        )}>
                            Biggest Risers
                        </ToggleGroupItem>
                        <ToggleGroupItem value="biggest-fallers" aria-label="Toggle Biggest Fallers" onClick={() => setGames(current =>
                            [...current].sort((a, b) =>
                                (rankStatusOrder[b.rank_position_status] ?? 1) -
                                (rankStatusOrder[a.rank_position_status] ?? 1)
                            )
                        )}>
                            Biggest Fallers
                        </ToggleGroupItem>
                        <ToggleGroupItem value="alphabetical-az" aria-label="Toggle Alphabetical A-Z" onClick={() => setGames(current =>
                            [...current].sort((a, b) => a.name.localeCompare(b.name))
                        )}>
                            Alphabetical (A-Z)
                        </ToggleGroupItem>
                        <ToggleGroupItem value="alphabetical-za" aria-label="Toggle Alphabetical Z-A" onClick={() => setGames(current =>
                            [...current].sort((a, b) => b.name.localeCompare(a.name))
                        )}>
                            Alphabetical (Z-A)
                        </ToggleGroupItem>
                    </ToggleGroup>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {games && games.map((game, idx) => (
                    <GameBox
                        key={idx}
                        game={game}
                    />
                ))}
            </div>
        </div>
    )
}