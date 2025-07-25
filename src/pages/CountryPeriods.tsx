import { useParams } from "react-router-dom";
import { Clock, Crown, Sword, Globe, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { countries } from "@/data/countries";
import CountrySubtabLayout from "@/components/CountrySubtabLayout";

const CountryPeriods = () => {
  const { countryName } = useParams();
  
  const country = countries.find(
    c => c.name.toLowerCase().replace(/\s+/g, '-') === countryName
  );

  const title = `Historical Periods of ${country?.name || 'Country'}`;
  const subtitle = `Journey through the defining eras and transformative periods that shaped ${country?.name || 'this nation'}. From ancient civilizations to the modern age, explore the timeline of political, cultural, and social evolution.`;

  const periods = [
    {
      title: "Ancient Period",
      icon: <Clock className="w-5 h-5 text-vintage-gold" />,
      description: "Early civilizations, tribal societies, and the foundations of culture",
      timeframe: "Pre-1000 CE"
    },
    {
      title: "Medieval Era", 
      icon: <Crown className="w-5 h-5 text-vintage-gold" />,
      description: "Formation of kingdoms, feudalism, and religious developments",
      timeframe: "1000-1500 CE"
    },
    {
      title: "Colonial Period",
      icon: <Globe className="w-5 h-5 text-vintage-gold" />,
      description: "European influence, trade expansion, and imperial control",
      timeframe: "1500-1800 CE"
    },
    {
      title: "Independence Era",
      icon: <Sword className="w-5 h-5 text-vintage-gold" />,
      description: "Revolutionary movements, nation-building, and sovereignty",
      timeframe: "1800-1950 CE"
    },
    {
      title: "Modern Period",
      icon: <Calendar className="w-5 h-5 text-vintage-gold" />,
      description: "Contemporary developments, globalization, and current affairs",
      timeframe: "1950-Present"
    }
  ];

  return (
    <CountrySubtabLayout
      activeTab="periods"
      title={title}
      subtitle={subtitle}
    >
      {/* Timeline Overview */}
      <section className="py-8">
        <Card className="border-2 shadow-card-hover transition-all duration-300">
          <CardHeader>
            <CardTitle className="font-heading text-heading-sm text-foreground">
              Major Historical Periods
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {periods.map((period, index) => (
                <div key={index} className="group hover-scale transition-all duration-300">
                  <div className="flex items-start space-x-4 p-4 rounded-lg border border-border hover:bg-muted/50">
                    <div className="flex-shrink-0 p-2 bg-background rounded-full border">
                      {period.icon}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="font-heading text-lg font-semibold text-foreground">
                          {period.title}
                        </h3>
                        <span className="font-body text-sm text-vintage-gold font-medium">
                          {period.timeframe}
                        </span>
                      </div>
                      <p className="font-body text-body text-muted-foreground leading-relaxed">
                        {period.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Detailed Period Information */}
      <section className="py-8">
        <Card className="border-2 shadow-card-hover transition-all duration-300">
          <CardHeader>
            <CardTitle className="font-heading text-heading-sm text-foreground">
              Period Highlights & Key Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-heading text-lg font-semibold text-foreground">Political Evolution</h3>
                <ul className="space-y-2 text-muted-foreground font-body">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Formation and transformation of governmental systems</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Constitutional developments and legal frameworks</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Major political reforms and revolutionary changes</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-heading text-lg font-semibold text-foreground">Cultural & Social Changes</h3>
                <ul className="space-y-2 text-muted-foreground font-body">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Religious movements and spiritual transformations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Artistic renaissance and cultural flowering</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Social movements and demographic shifts</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </CountrySubtabLayout>
  );
};

export default CountryPeriods;