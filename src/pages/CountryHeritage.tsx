import { useParams } from "react-router-dom";
import { MapPin, Building, Music, Palette, Calendar, Library } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { countries } from "@/data/countries";
import CountrySubtabLayout from "@/components/CountrySubtabLayout";

const CountryHeritage = () => {
  const { countryName } = useParams();
  
  const country = countries.find(
    c => c.name.toLowerCase().replace(/\s+/g, '-') === countryName
  );

  const title = `Cultural Heritage of ${country?.name || 'Country'}`;
  const subtitle = `Discover the rich cultural tapestry of ${country?.name || 'this nation'}, from ancient traditions and architectural marvels to vibrant festivals and artistic expressions. Explore the UNESCO World Heritage Sites and intangible cultural treasures that define this nation's identity.`;

  const heritageTypes = [
    {
      title: "UNESCO World Heritage Sites",
      icon: <MapPin className="w-5 h-5 text-vintage-gold" />,
      description: "Internationally recognized sites of outstanding cultural or natural importance"
    },
    {
      title: "Historical Architecture",
      icon: <Building className="w-5 h-5 text-vintage-gold" />,
      description: "Ancient monuments, palaces, temples, and architectural masterpieces"
    },
    {
      title: "Traditional Arts & Crafts",
      icon: <Palette className="w-5 h-5 text-vintage-gold" />,
      description: "Indigenous artistic traditions, handicrafts, and artisanal techniques"
    },
    {
      title: "Music & Performing Arts",
      icon: <Music className="w-5 h-5 text-vintage-gold" />,
      description: "Traditional music, dance, theater, and performance traditions"
    },
    {
      title: "Festivals & Celebrations",
      icon: <Calendar className="w-5 h-5 text-vintage-gold" />,
      description: "Cultural festivals, religious ceremonies, and traditional celebrations"
    },
    {
      title: "Museums & Institutions",
      icon: <Library className="w-5 h-5 text-vintage-gold" />,
      description: "Cultural institutions preserving and showcasing national heritage"
    }
  ];

  return (
    <CountrySubtabLayout
      activeTab="heritage"
      title={title}
      subtitle={subtitle}
    >
      {/* Heritage Categories */}
      <section className="py-8">
        <Card className="border-2 shadow-card-hover transition-all duration-300">
          <CardHeader>
            <CardTitle className="font-heading text-heading-sm text-foreground">
              Types of Cultural Heritage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {heritageTypes.map((type, index) => (
                <div key={index} className="group hover-scale transition-all duration-300">
                  <div className="p-4 rounded-lg border border-border hover:bg-muted/50 h-full">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="flex-shrink-0 p-2 bg-background rounded-full border">
                        {type.icon}
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        {type.title}
                      </h3>
                    </div>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {type.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Heritage Highlights */}
      <section className="py-8">
        <Card className="border-2 shadow-card-hover transition-all duration-300">
          <CardHeader>
            <CardTitle className="font-heading text-heading-sm text-foreground">
              Heritage Highlights & Cultural Treasures
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="font-body text-body text-muted-foreground leading-relaxed">
                {country?.name || 'This nation'} boasts a remarkable collection of cultural heritage sites and traditions that reflect 
                centuries of history, creativity, and cultural exchange. From magnificent architectural monuments to living traditions 
                passed down through generations.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-heading text-lg font-semibold text-foreground">Tangible Heritage</h3>
                  <ul className="space-y-2 text-muted-foreground font-body">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">•</span>
                      <span>Historic buildings and archaeological sites</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">•</span>
                      <span>Cultural landscapes and natural sites</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">•</span>
                      <span>Artifacts and museum collections</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">•</span>
                      <span>Traditional architecture and urban planning</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-heading text-lg font-semibold text-foreground">Intangible Heritage</h3>
                  <ul className="space-y-2 text-muted-foreground font-body">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">•</span>
                      <span>Oral traditions and storytelling</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">•</span>
                      <span>Traditional knowledge and practices</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">•</span>
                      <span>Ceremonial rituals and social practices</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">•</span>
                      <span>Traditional craftsmanship and skills</span>
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

export default CountryHeritage;