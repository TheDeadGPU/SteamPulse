import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { SteamGame } from "@/types";
import { IconActivityHeartbeat, IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";

interface Top100TableProps {
    steamGames: SteamGame[];
}

export function Top100Table(props: Top100TableProps) {
    return (
        <Table>
            <TableCaption>Steam Top 100</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Rank</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Rank Status Since Last Week</TableHead>
                    <TableHead>Peak In-Game</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {props.steamGames && props.steamGames.map((game, idx) => (
                    <TableRow key={idx}>
                        <TableCell>{game.rank}</TableCell>
                        <TableCell><a href={game.store_url} target="_blank" rel="noopener noreferrer">{game.name}</a></TableCell>
                        <TableCell>
                            {game.rank_position_status == "Increasing" && (
                                <IconTrendingUp className="text-lime-400"/>
                            )}
                            {game.rank_position_status == "Decreasing" && (
                                <IconTrendingDown className="text-red-400"/>
                            )}
                            {game.rank_position_status == "Stable" && (
                                <IconActivityHeartbeat/>
                            )}
                        </TableCell>
                        <TableCell>{game.peak_in_game}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
