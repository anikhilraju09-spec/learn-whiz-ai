import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Upload, 
  FileText, 
  Brain, 
  BarChart3, 
  Clock, 
  Target, 
  Trophy,
  BookOpen,
  TrendingUp
} from "lucide-react";

export const Dashboard = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Your Learning Dashboard</h2>
          <p className="text-muted-foreground">Track your progress and continue your educational journey</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 gradient-card shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Documents</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
            </div>
          </Card>

          <Card className="p-6 gradient-card shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Assessments</p>
                <p className="text-2xl font-bold">8</p>
              </div>
              <div className="w-12 h-12 rounded-xl gradient-secondary flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
            </div>
          </Card>

          <Card className="p-6 gradient-card shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Study Hours</p>
                <p className="text-2xl font-bold">24</p>
              </div>
              <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
            </div>
          </Card>

          <Card className="p-6 gradient-card shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Score Average</p>
                <p className="text-2xl font-bold">89%</p>
              </div>
              <div className="w-12 h-12 rounded-xl gradient-learning flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <Card className="p-8 gradient-card shadow-soft">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <Target className="w-6 h-6 text-primary" />
              Quick Actions
            </h3>
            <div className="space-y-4">
              <Button className="w-full justify-start" variant="outline">
                <Upload className="w-4 h-4" />
                Upload New Document
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Brain className="w-4 h-4" />
                Generate Assessment
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <BarChart3 className="w-4 h-4" />
                View Analytics
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <BookOpen className="w-4 h-4" />
                Study Recommendations
              </Button>
            </div>
          </Card>

          {/* Progress Overview */}
          <Card className="p-8 gradient-card shadow-soft">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-secondary" />
              Learning Progress
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Mathematics</span>
                  <span className="text-sm text-muted-foreground">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Science</span>
                  <span className="text-sm text-muted-foreground">72%</span>
                </div>
                <Progress value={72} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">History</span>
                  <span className="text-sm text-muted-foreground">91%</span>
                </div>
                <Progress value={91} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Literature</span>
                  <span className="text-sm text-muted-foreground">67%</span>
                </div>
                <Progress value={67} className="h-2" />
              </div>
            </div>
          </Card>

          {/* Recent Activity */}
          <Card className="p-8 gradient-card shadow-soft">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <Clock className="w-6 h-6 text-accent" />
              Recent Activity
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-success-light">
                <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center">
                  <Trophy className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Completed Math Quiz</p>
                  <p className="text-xs text-muted-foreground">Score: 94% • 2 hours ago</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Uploaded Biology Notes</p>
                  <p className="text-xs text-muted-foreground">3 hours ago</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/10">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                  <Brain className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">AI Study Plan Generated</p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};