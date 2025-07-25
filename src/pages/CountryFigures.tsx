import { useParams } from "react-router-dom";
import { Crown, Sword, BookOpen, Palette, Users, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { countries } from "@/data/countries";
import CountrySubtabLayout from "@/components/CountrySubtabLayout";

const CountryFigures = () => {
  const { countryName } = useParams();
  
  const country = countries.find(
    c => c.name.toLowerCase().replace(/\s+/g, '-') === countryName
  );

  const title = `Notable Figures of ${country?.name || 'Country'}`;
  const subtitle = `Meet the remarkable individuals who shaped ${country?.name || 'this nation'}'s history and culture. From legendary rulers and military heroes to brilliant artists and innovators, discover the people who left an indelible mark on their country and the world.`;

  const figureCategories = [
    {
      title: "Royal & Political Leaders",
      icon: <Crown className="w-5 h-5 text-vintage-gold" />,
      description: "Kings, queens, presidents, and statesmen who shaped the nation's political landscape"
    },
    {
      title: "Military Heroes & Commanders",
      icon: <Sword className="w-5 h-5 text-vintage-gold" />,
      description: "Brave warriors and strategic generals who defended and expanded the nation"
    },
    {
      title: "Scholars & Scientists",
      icon: <BookOpen className="w-5 h-5 text-vintage-gold" />,
      description: "Brilliant minds who advanced knowledge, science, and education"
    },
    {
      title: "Artists & Cultural Icons",
      icon: <Palette className="w-5 h-5 text-vintage-gold" />,
      description: "Creative visionaries who enriched the nation's cultural heritage"
    },
    {
      title: "Religious & Spiritual Leaders",
      icon: <Users className="w-5 h-5 text-vintage-gold" />,
      description: "Influential figures who guided spiritual and moral development"
    },
    {
      title: "Innovators & Pioneers",
      icon: <Award className="w-5 h-5 text-vintage-gold" />,
      description: "Groundbreaking individuals who opened new frontiers and possibilities"
    }
  ];

  return (
    <CountrySubtabLayout
      activeTab="figures"
      title={title}
      subtitle={subtitle}
    >
      {/* Figure Categories */}
      <section className="py-8">
        <Card className="border-2 shadow-card-hover transition-all duration-300">
          <CardHeader>
            <CardTitle className="font-heading text-heading-sm text-foreground">
              Categories of Historical Figures
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {figureCategories.map((category, index) => (
                <div key={index} className="group hover-scale transition-all duration-300">
                  <div className="p-4 rounded-lg border border-border hover:bg-muted/50 h-full">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="flex-shrink-0 p-2 bg-background rounded-full border">
                        {category.icon}
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        {category.title}
                      </h3>
                    </div>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Featured Figures Section */}
      <section className="py-8">
        <Card className="border-2 shadow-card-hover transition-all duration-300">
          <CardHeader>
            <CardTitle className="font-heading text-heading-sm text-foreground">
              Hall of Fame
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="font-body text-body text-muted-foreground leading-relaxed">
                This section will showcase the most influential and celebrated figures from {country?.name || 'this nation'}'s history. 
                Each profile will include biographical information, major achievements, and their lasting impact on society.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-heading text-lg font-semibold text-foreground">Leadership & Governance</h3>
                  <ul className="space-y-2 text-muted-foreground font-body">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">•</span>
                      <span>Founding fathers and nation builders</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">•</span>
                      <span>Reformist leaders and social pioneers</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">•</span>
                      <span>Modern political figures and diplomats</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-heading text-lg font-semibold text-foreground">Culture & Innovation</h3>
                  <ul className="space-y-2 text-muted-foreground font-body">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">•</span>
                      <span>Literary giants and philosophical thinkers</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">•</span>
                      <span>Scientific pioneers and inventors</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">•</span>
                      <span>Artistic masters and cultural ambassadors</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </CountrySubtabLayout>
  );
};

export default CountryFigures;