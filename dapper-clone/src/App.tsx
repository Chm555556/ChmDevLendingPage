import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Menu, X, ArrowRight, Check, Minus, Plus, Instagram, Linkedin, Phone, Star } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-foreground">Dapper</div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <button className="flex items-center text-foreground hover:text-primary transition-colors">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center text-foreground hover:text-primary transition-colors">
                  Expertise <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Cases</a>
              <div className="relative group">
                <button className="flex items-center text-foreground hover:text-primary transition-colors">
                  Resources <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <a href="#" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Careers</a>
            </div>
            
            <div className="hidden lg:block">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Talk to us
              </Button>
            </div>
            
            <div className="lg:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 geometric-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="hero-text text-5xl sm:text-6xl lg:text-8xl font-bold text-foreground mb-12 leading-none">
              We{" "}
              <span className="relative inline-block">
                build
                <div className="absolute -bottom-3 left-0 w-full h-4 bg-primary/30 -skew-x-12 transform"></div>
              </span>
              {" "}
              <em className="italic font-light text-muted-foreground">high-</em>
              <br />
              <span className="bg-primary text-primary-foreground px-8 py-3 rounded-2xl inline-block transform -rotate-1 shadow-lg hover-lift">
                performing
              </span>
              {" "}
              <em className="italic font-light text-muted-foreground">marketing</em>
              <br />
              <span className="gradient-text font-extrabold">
                engines
              </span>
              {" "}
              for
              {" "}
              <span className="font-extrabold">
                B2B
              </span>
              {" "}
              <span className="gradient-text font-extrabold">
                Brands
              </span>
            </h1>
            
            <div className="mb-12">
              <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
            </div>
            
            <p className="text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              We build, optimize, and scale marketing<br />
              engines that generate pipeline and<br />
              improve marketing ROI.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg rounded-full hover-lift shadow-lg">
              Discover more
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Card className="p-12 bg-gradient-to-r from-primary/10 to-primary/20 border-primary/30 shadow-2xl hover-lift rounded-3xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="mb-6">
                  <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Success Story</Badge>
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  <span className="text-6xl font-extrabold gradient-text">54%</span><br />
                  increase in pipeline with<br />
                  <span className="italic">Demand Generation</span> strategy
                </h3>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-white/90 rounded-2xl flex items-center justify-center p-2 shadow-lg">
                    <img 
                      src="/storyteq-logo.png" 
                      alt="Storyteq Logo"
                      className="max-h-16 max-w-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'block';
                      }}
                    />
                    <div className="text-primary font-bold text-lg" style={{display: 'none'}}>ST</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">Storyteq</div>
                    <div className="text-muted-foreground">Video Creative Platform</div>
                  </div>
                </div>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
                  Read Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="w-full lg:w-80 h-64 relative">
                <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/60 rounded-3xl flex items-center justify-center shadow-2xl floating-animation">
                  <div className="text-center text-primary-foreground">
                    <div className="text-4xl font-bold mb-2">📈</div>
                    <div className="font-bold text-lg">Pipeline Growth</div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <Star className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6">Results</Badge>
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 hero-text">
              <span className="gradient-text">100+</span> B2B Companies trusted us to improve their <em className="italic text-muted-foreground">marketing</em>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              More than 100 B2B companies worldwide trusted us to improve their marketing engine and marketing ROI.
            </p>
            <div className="mt-8">
              <Button variant="outline" className="rounded-full px-6">
                Explore all results
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { 
                company: "Online Payment Platform", 
                logo: "/storyteq-logo.png", 
                logoAlt: "Storyteq Logo",
                metric1: "200%", 
                desc1: "More inbound sales calls", 
                metric2: "53%", 
                desc2: "More qualified pipeline", 
                color: "from-blue-500/10 to-blue-600/20" 
              },
              { 
                company: "Bluebird", 
                logo: "/bluebird-alt-logo.png", 
                logoAlt: "Bluebird Logo",
                metric1: "60+", 
                desc1: "Inbound Leads", 
                metric2: "66%", 
                desc2: "Win rate", 
                color: "from-purple-500/10 to-purple-600/20" 
              },
              { 
                company: "Focus-on", 
                logo: "/focus-on-logo.svg", 
                logoAlt: "Focus Solutions Logo",
                metric1: "12%", 
                desc1: "More Leads", 
                metric2: "400%", 
                desc2: "High-intent Downloads", 
                color: "from-orange-500/10 to-orange-600/20" 
              },
              { 
                company: "ReviewStudio", 
                logo: "/reviewstudio-logo.jpg", 
                logoAlt: "ReviewStudio Logo",
                metric1: "350+", 
                desc1: "Signups in 4 months", 
                metric2: "$70", 
                desc2: "Cost of a sign up", 
                color: "from-green-500/10 to-green-600/20" 
              },
              { 
                company: "Storyteq", 
                logo: "/storyteq-logo.png", 
                logoAlt: "Storyteq Logo",
                metric1: "+54%", 
                desc1: "Increase Inbound Pipeline", 
                metric2: "+243%", 
                desc2: "Increase of engagement", 
                color: "from-primary/10 to-primary/20" 
              }
            ].slice(0, 5).map((client, index) => (
              <Card key={index} className={`p-8 hover-lift transition-all duration-300 hover:shadow-2xl bg-gradient-to-br ${client.color} border-0`}>
                <CardContent className="p-0">
                  <div className="mb-6">
                    <div className="h-16 w-full bg-white/80 rounded-2xl flex items-center justify-center backdrop-blur-sm p-4">
                      <img 
                        src={client.logo} 
                        alt={client.logoAlt}
                        className="max-h-12 max-w-full object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'block';
                        }}
                      />
                      <span className="font-bold text-lg text-foreground" style={{display: 'none'}}>{client.company}</span>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl lg:text-5xl font-extrabold gradient-text mb-2">{client.metric1}</div>
                      <div className="text-sm font-medium text-foreground">{client.desc1}</div>
                    </div>
                    <div className="border-t border-white/20 pt-6 text-center">
                      <div className="text-4xl lg:text-5xl font-extrabold gradient-text mb-2">{client.metric2}</div>
                      <div className="text-sm font-medium text-foreground">{client.desc2}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Level up your marketing, improve <em className="italic">marketing ROI</em>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Better marketing leads to better marketing ROI. At Dapper, we help you level up your complete marketing engine. From strategy to content, advertising, and measurement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="mb-6">
                  <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                    <img 
                      src="/dapper-office.jpg" 
                      alt="Dapper Creative Team"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center" style={{display: 'none'}}>
                      <div className="text-primary font-bold">Creative Team</div>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Content & Creative</h3>
                <p className="text-muted-foreground">
                  We'll make your prospects stop scrolling.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4">Paid Media & Performance</h3>
                <p className="text-muted-foreground mb-6">
                  Build, optimize and scale your performance marketing.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4">Data & Measurement</h3>
                <p className="text-muted-foreground mb-6">
                  We make the invisible visible.
                </p>
                <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center">
                  <div className="text-primary font-bold">Mobile Mockup</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demand Gen Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <div className="w-full h-64 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center">
                  <div className="text-primary font-bold">Mobile Video Preview</div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-6">
                <Badge variant="secondary" className="mb-4">Demand Gen</Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  <em className="italic">Become famous in your niche and build demand</em>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  <strong className="text-foreground">B2B buyers buy differently. You cannot 'force' a need. But as soon as a need arises, you want to be the first one your prospect thinks of.</strong>
                </p>
                <p>
                  That is why you want your brand to be top-of-mind in your niche category. So when a need arises, the ideal client thinks of you. We call this Niche Famous™ at Dapper.
                </p>
                <p>
                  How do you become Niche Famous™? By being visible in your niche of ideal customers constantly with captivating content that shows you're the absolute authority in solving their problems.
                </p>
                <p>
                  You need content and creative so good that your prospect can't ignore it, and distribution strategies that ensure you're visible everywhere and always for your ideal clients.
                </p>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-foreground mb-4">The result?</h4>
                <div className="space-y-3">
                  {[
                    "Growing pipeline",
                    "Shorter Sales cycles", 
                    "Better ICP-fit inbound leads",
                    "Compounding brand building"
                  ].map((result, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <span className="text-foreground font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
                Discover more
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Demand Capture Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <Badge variant="secondary" className="mb-4">Demand Capture</Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  <em className="italic">Turn active demand into pipeline</em>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  <strong className="text-foreground">B2B buyers will research solutions themselves when they are ready to buy. And when that moment comes, you want to capture that active need.</strong>
                </p>
                <p>
                  That is why you need to understand how your prospect searches and what touchpoints and information will persuade them to buy from you.
                </p>
                <p>
                  We help you identify how your prospects search, understand the information they need, and set up the most effective demand capture initiatives
                </p>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-foreground mb-4">The result?</h4>
                <div className="space-y-3">
                  {[
                    "More inbound pipeline",
                    "Lower acquisition costs", 
                    "Higher conversion rates",
                    "Better ICP-fit inbound leads"
                  ].map((result, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <span className="text-foreground font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
                Discover more
              </Button>
            </div>
            <div>
              <div className="mb-8">
                <div className="w-full h-64 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center">
                  <div className="text-primary font-bold">LinkedIn Interface Mockup</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your own team of <em className="italic">world-class</em> B2B marketing experts
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              We build custom teams of world-class B2B marketing experts to complement your in-house capabilities. We work closely with your inhouse marketing team to level up your marketing. All members bring deep expertise, and years of B2B marketing experience. Together we have one goal: To build a high performance marketing engine.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              "LinkedIn", "Content", "Google", "Video", "Design", "Motion", "Email", "AI"
            ].map((skill, index) => (
              <Badge key={index} className="bg-primary text-primary-foreground px-4 py-2 text-sm">
                {skill}
              </Badge>
            ))}
          </div>
          
          <div className="text-center mb-8">
            <div className="flex justify-center items-center text-6xl font-bold text-foreground mb-8 flex-wrap">
              <span>Demand</span>
              <div className="mx-8 my-4 relative">
                <div className="flex gap-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 hover-lift">
                    <img 
                      src="/tycho-luijten.jpg" 
                      alt="Tycho Luijten"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center" style={{display: 'none'}}>
                      <div className="text-primary font-bold text-sm">TL</div>
                    </div>
                  </div>
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 hover-lift">
                    <img 
                      src="/judith-carrasco.jpg" 
                      alt="Judith Carrasco"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center" style={{display: 'none'}}>
                      <div className="text-primary font-bold text-sm">JC</div>
                    </div>
                  </div>
                </div>
              </div>
              <span>Team</span>
            </div>
            
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Meet the team
            </Button>
          </div>
        </div>
      </section>

      {/* Results & Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Driven by a <em className="italic">performance</em> mindset
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              You don't just hire experts - you hire people with a drive to deliver results. The Dapper team thrives on impact. When you work with us, you'll work with a team as ambitious about growth as you are.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "We saw a 200% increase in Sales Qualified Leads.",
                name: "Reza Schott",
                title: "Head of Marketing - OPP",
                company: "OPP",
                avatar: "/pavel-banhegyi.jpg"
              },
              {
                quote: "This is the first marketing agency I've worked with where I see results.",
                name: "Machiel Kunst",
                title: "Bluebird",
                company: "Bluebird",
                avatar: "/bluebird-alt-logo.png"
              },
              {
                quote: "I know exactly what I can expect from the Dapper team. They move fast, deliver good quality, and make clear decisions.",
                name: "Angela Hordijk",
                title: "Marketing Manager Video Collaboration - Logitech",
                company: "Logitech",
                avatar: "/logitech-logo.png"
              },
              {
                quote: "Since we started with Dapper we finally have prospects reaching out to us, instead of relying on outbound.",
                name: "George Borst",
                title: "Business Development Lead - FOCUS-ON",
                company: "FOCUS-ON",
                avatar: "/focus-on-logo.svg"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <blockquote className="text-lg text-foreground mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-gray-200">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center" style={{display: 'none'}}>
                        <div className="text-primary font-bold text-xs">{testimonial.name.split(' ').map(n => n[0]).join('')}</div>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional vs Modern Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Compare</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              <em className="italic">Traditional B2B marketing</em> vs modern B2B marketing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              B2B marketing is changing, fast. Attention spans are getting shorter, AI is getting smarter, and competition is increasing. That's why you need a partner who is a frontrunner in the industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">Traditional B2B Marketing</h3>
              <div className="space-y-4">
                {[
                  "Marketing and sales work in silos",
                  "Prioritizes MQLs",
                  "Reporting stops at vanity metrics",
                  "Relies on gated content for leads",
                  "Sees marketing as a cost center",
                  "Thinks in campaigns"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg">
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                      <Minus className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">Modern B2B Marketing</h3>
              <div className="space-y-4">
                {[
                  "Marketing and sales collaborate to generate revenue",
                  "Prioritizes pipeline growth and lead quality",
                  "Metrics align with real business outcomes",
                  "Provides ungated value that builds demand",
                  "Proves marketing as a revenue driver",
                  "Thinks in always-on demand gen"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Plus className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Talk to <em className="italic">an expert</em>
            </h2>
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-48 h-64 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
                  <img 
                    src="/tycho-luijten.jpg" 
                    alt="Tycho Luijten - Dapper Expert"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center" style={{display: 'none'}}>
                    <div className="text-primary font-bold text-2xl">Expert</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg hover-lift">
                    <Phone className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            <div className="lg:col-span-1">
              <h4 className="font-semibold mb-4">Contact Tycho</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>hello@dapper.agency</p>
                <p>+31 10 307 6707</p>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <h4 className="font-semibold mb-4">Dapper Rotterdam</h4>
              <div className="text-sm text-gray-300">
                <p>Weena 70, 13th floor</p>
                <p>3012 CM Rotterdam</p>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <h4 className="font-semibold mb-4">Dapper Lisbon</h4>
              <div className="text-sm text-gray-300">
                <p>Av. Duque de Loulé 12,</p>
                <p>1050-093 Lisbon</p>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Content & Creative</p>
                <p>Paid Media & Performance</p>
                <p>Data & Measurement</p>
                <p>Demand Team</p>
                <p>Demand Gen Training</p>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <h4 className="font-semibold mb-4">Expertise</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>B2B SaaS</p>
                <p>B2B Service</p>
                <p>B2B Hardware</p>
              </div>
              <h4 className="font-semibold mb-4 mt-6">Resources</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Cases</p>
                <p>Blog</p>
                <p>Newsletter</p>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>About</p>
                <p>Careers</p>
                <p>Contact</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-8">
                <div className="text-2xl font-bold">Dapper</div>
                <div className="text-sm text-gray-300">
                  © 2025 Dapper
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-gray-300">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
                <a href="#" className="hover:text-white transition-colors">Design by Dylan</a>
                <a href="#" className="hover:text-white transition-colors">Code by Dennis</a>
              </div>
              
              <div className="flex items-center gap-4">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
