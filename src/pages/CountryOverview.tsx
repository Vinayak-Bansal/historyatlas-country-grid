import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { countries } from "@/data/countries";
import CountrySubtabLayout from "@/components/CountrySubtabLayout";

const CountryOverview = () => {
  const { countryName } = useParams();
  
  const country = countries.find(
    c => c.name.toLowerCase().replace(/\s+/g, '-') === countryName
  );

  const title = `A Complete History of ${country?.name || 'Country'}`;
  const subtitle = `Explore the rich historical journey of ${country?.name || 'this nation'}, from ancient civilizations to modern developments. Discover the key events, milestones, and transformations that shaped this country's unique identity.`;

  return (
    <CountrySubtabLayout
      activeTab="overview"
      title={title}
      subtitle={subtitle}
    >
      {/* Historical Overview Content */}
      <section className="py-8">
        <Card className="border-2 shadow-card-hover transition-all duration-300">
          <CardHeader>
            <CardTitle className="font-heading text-heading-sm text-foreground">
              Historical Timeline & Key Events
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {country?.historicalOverview && country.historicalOverview.length > 0 ? (
              <div className="space-y-4">
                {country.historicalOverview.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3 hover-scale">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="font-body text-body text-foreground leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                <p className="font-body text-body text-muted-foreground leading-relaxed">
                  This comprehensive overview covers the major historical developments and cultural evolution of {country?.name}. 
                  Explore the timeline of significant events that have shaped this nation's identity.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-heading text-lg font-semibold text-foreground">Ancient & Medieval Periods</h3>
                    <ul className="space-y-2 text-muted-foreground font-body">
                      <li className="flex items-start space-x-2">
                        <span className="text-primary">•</span>
                        <span>Early civilizations and settlements</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary">•</span>
                        <span>Formation of kingdoms and empires</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary">•</span>
                        <span>Cultural and religious developments</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-heading text-lg font-semibold text-foreground">Modern Era</h3>
                    <ul className="space-y-2 text-muted-foreground font-body">
                      <li className="flex items-start space-x-2">
                        <span className="text-primary">•</span>
                        <span>Colonial period and independence movements</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary">•</span>
                        <span>Political and social transformations</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary">•</span>
                        <span>Contemporary developments and achievements</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </section>
    </CountrySubtabLayout>
  );
};

export default CountryOverview;