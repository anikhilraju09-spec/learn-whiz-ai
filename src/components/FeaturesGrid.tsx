import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  BarChart3, 
  FileText, 
  Target, 
  Sparkles, 
  TrendingUp,
  Users,
  Clock,
  Award
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Assessments",
    description: "Automatically generate quizzes, tests, and interactive assessments from your study materials",
    color: "gradient-primary",
    iconColor: "text-primary"
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description: "Track your learning journey with detailed analytics and performance insights",
    color: "gradient-secondary",
    iconColor: "text-secondary"
  },
  {
    icon: FileText,
    title: "Document Processing",
    description: "Upload PDFs, documents, presentations - our AI extracts key concepts and creates study guides",
    color: "gradient-accent",
    iconColor: "text-accent"
  },
  {
    icon: Target,
    title: "Smart Recommendations",
    description: "Get personalized study plans and recommendations based on your learning patterns",
    color: "gradient-learning",
    iconColor: "text-learning"
  },
  {
    icon: Sparkles,
    title: "Interactive Learning",
    description: "Engage with dynamic content, flashcards, and AI-generated practice sessions",
    color: "gradient-primary",
    iconColor: "text-primary"
  },
  {
    icon: TrendingUp,
    title: "Performance Tracking",
    description: "Monitor your improvement over time with comprehensive performance metrics",
    color: "gradient-secondary",
    iconColor: "text-secondary"
  },
  {
    icon: Users,
    title: "Collaborative Study",
    description: "Share study materials and compete with friends in learning challenges",
    color: "gradient-accent",
    iconColor: "text-accent"
  },
  {
    icon: Clock,
    title: "Adaptive Scheduling",
    description: "AI suggests optimal study times and creates schedules that fit your lifestyle",
    color: "gradient-learning",
    iconColor: "text-learning"
  },
  {
    icon: Award,
    title: "Achievement System",
    description: "Earn badges and achievements as you reach learning milestones and goals",
    color: "gradient-primary",
    iconColor: "text-primary"
  }
];

export const FeaturesGrid = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}Smarter Learning
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered platform transforms the way you study, making learning more efficient, 
            engaging, and personalized to your unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 gradient-card shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 group"
            >
              <div className="space-y-6">
                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center shadow-soft group-hover:shadow-medium transition-all duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <Button 
                  variant="ghost" 
                  className="w-full justify-start p-0 h-auto font-semibold group-hover:text-primary transition-colors"
                >
                  Learn More →
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg">
            <Sparkles className="w-5 h-5" />
            Start Your AI Learning Journey
          </Button>
        </div>
      </div>
    </section>
  );
};