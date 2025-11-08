import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy, TrendingUp } from "lucide-react";

interface LeaderboardEntry {
  rank: number;
  user: {
    name: string;
    avatar?: string;
    department?: string;
  };
  points: number;
  badges: number;
}

interface LeaderboardProps {
  entries: LeaderboardEntry[];
}

export const Leaderboard = ({ entries }: LeaderboardProps) => {
  const getRankColor = (rank: number) => {
    if (rank === 1) return "text-yellow-500";
    if (rank === 2) return "text-gray-400";
    if (rank === 3) return "text-amber-600";
    return "text-muted-foreground";
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-primary" />
          Leaderboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {entries.map((entry) => (
            <div key={entry.rank} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className={`text-2xl font-bold ${getRankColor(entry.rank)} min-w-[2rem]`}>
                #{entry.rank}
              </div>
              <Avatar>
                <AvatarImage src={entry.user.avatar} />
                <AvatarFallback>{entry.user.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-medium">{entry.user.name}</p>
                <p className="text-sm text-muted-foreground">{entry.user.department}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-primary font-semibold">
                  <TrendingUp className="h-4 w-4" />
                  {entry.points} XP
                </div>
                <p className="text-sm text-muted-foreground">{entry.badges} badges</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
