import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Globe, Clock, Users, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { countries } from "@/data/countries";
import Navigation from "@/components/Navigation";
import CountryStats from "@/components/CountryStats";
import CountryTimeline from "@/components/CountryTimeline";
import CountryCharts from "@/components/CountryCharts";
import CountryMap from "@/components/CountryMap";
import { motion } from "framer-motion";

const CountryDetail = () => {
  const { countryName } = useParams();
  
  const country = countries.find(
    c => c.name.toLowerCase().replace(/\s+/g, '-') === countryName
  );

  if (!country) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Country Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The country you're looking for doesn't exist in our database.
            </p>
            <Link to="/">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const getHistoricalIntro = (countryName: string) => {
    const intros: { [key: string]: string } = {
      "France": "France's rich history spans from ancient Gaul through the Roman Empire, medieval kingdoms, revolutionary periods, and modern republic. Known for its cultural influence, architectural marvels, and pivotal role in European politics.",
      "Germany": "Germany's complex history includes the Holy Roman Empire, fragmented states, unification under Prussian leadership, two world wars, division during the Cold War, and peaceful reunification in 1990.",
      "Japan": "Japan's unique history features centuries of isolation, samurai culture, rapid modernization during the Meiji period, imperial expansion, post-war reconstruction, and emergence as a global economic power.",
      "United Kingdom": "The United Kingdom's history encompasses Celtic tribes, Roman occupation, Anglo-Saxon kingdoms, Norman conquest, maritime empire, industrial revolution, and evolution into a modern constitutional monarchy."
    };
    
    return intros[countryName] || `Discover the fascinating history of ${countryName}, from ancient times to the modern era, exploring the key events, cultural developments, and influential figures that shaped this nation.`;
  };

  return (
    <div className="min-h-screen bg-gradient-country-hero">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <Link to="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Countries
            </Button>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Card className="bg-stats-bg shadow-xl border-0 overflow-hidden">
            <CardContent className="p-0">
              {/* Split Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
                {/* Left Side - Flag */}
                <div className="flex items-center justify-center p-8 bg-gradient-to-br from-muted/10 to-muted/20">
                  <motion.img
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    src={country.flag}
                    alt={`${country.name} flag`}
                    className="w-full max-w-sm h-64 object-cover rounded-lg shadow-xl"
                  />
                </div>
                
                {/* Right Side - Map */}
                <div className="flex items-center justify-center p-8">
                  <CountryMap country={country} />
                </div>
              </div>
              
              {/* Country Title and Description */}
              <div className="p-8 border-t">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-2">
                    {country.name}
                  </h1>
                  <p className="text-lg text-muted-foreground mb-4">
                    Country Code: {country.code}
                  </p>
                  <p className="text-text-primary font-body text-lg leading-relaxed max-w-4xl">
                    {getHistoricalIntro(country.name)}
                  </p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Key Stats Panel */}
        <div className="mb-8">
          <CountryStats country={country} />
        </div>

        {/* Timeline Section */}
        <div className="mb-8">
          <CountryTimeline country={country} />
        </div>

        {/* Charts Section */}
        <div className="mb-8">
          <CountryCharts country={country} />
        </div>

        {/* Navigation Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12"
        >
          <h2 className="text-3xl font-heading font-bold text-text-primary mb-6 text-center">
            Explore More About {country.name}
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Link to={`/country/${countryName}/overview`}>
              <Card className="bg-stats-bg border-2 hover:border-chart-blue transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-text-primary">
                    <Globe className="h-5 w-5 text-chart-blue" />
                    <span className="font-heading">A Complete History of {country.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    Trace the development of {country.name} through time, wars, revolutions, alliances, and reforms—through 
                    visual timelines, detailed narratives, dynamic graphs, and interactive maps
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to={`/country/${countryName}/periods`}>
              <Card className="bg-stats-bg border-2 hover:border-chart-green transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-text-primary">
                    <Clock className="h-5 w-5 text-chart-green" />
                    <span className="font-heading">Key Historical Periods</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    Discover the timeline of important historical periods and eras that 
                    defined {country.name}'s journey through time.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to={`/country/${countryName}/figures`}>
              <Card className="bg-stats-bg border-2 hover:border-chart-gray transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-text-primary">
                    <Users className="h-5 w-5 text-chart-gray" />
                    <span className="font-heading">Notable Historical Figures</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    Learn about the remarkable people who influenced {country.name}'s history, 
                    from rulers and leaders to scholars and cultural icons.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to={`/country/${countryName}/heritage`}>
              <Card className="bg-stats-bg border-2 hover:border-destructive transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-text-primary">
                    <Building className="h-5 w-5 text-destructive" />
                    <span className="font-heading">Cultural Heritage</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    Explore {country.name}'s rich cultural heritage, UNESCO sites, 
                    traditions, and historical monuments.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CountryDetail;