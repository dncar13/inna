import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Users, Heart, Clock, BookOpen, Star, Award, Phone, Calendar, User, ArrowLeft } from "lucide-react";
const ServicesAndArticles = () => {
  const services = [
    {
      title: "קביעת גבולות בריאים",
      description: "נלמד כיצד להציב לילדים גבולות ברורים מתוך כבוד, הבנה וביטחון, תוך שמירה על תקשורת מקרבת ואווירה חיובית בבית. גבולות בריאים מעניקים לילדים תחושת ביטחון, שייכות ובהירות",
      features: ["יצירת כללי בית ברורים", "טכניקות תקשורת יעילה", "התמודדות עם התנגדויות", "בניית שגרות ויומיומיות"],
      icon: <Users className="h-8 w-8" />,
      image: "/lovable-uploads/b96f8633-1f20-4edd-8894-7b0e4432c3c5.png"
    },
    {
      title: "ליווי רגשי לילדים והורים",
      description: "נלמד יחד כיצד להבין ולהכיר את עולמם הרגשי של הילדים, לזהות רגשות ולעזור להם להביע ולהתמודד איתם בצורה בריאה. נעניק להורים כלים פרקטיים לפיתוח תקשורת רגשית פתוחה, להתמודדות עם אתגרים יומיומיים ולחיזוק הביטחון והחוסן הרגשי בבית",
      features: ["זיהוי רגשות והתמודדות איתם", "כלים לעידוד ביטוי רגשי", "פיתוח אמפתיה ושיח רגשי מקרב", "בניית חוסן וביטחון רגשי לילדים ולהורים"],
      icon: <Heart className="h-8 w-8" />,
      image: "/lovable-uploads/b82e5d42-3e15-45f5-bff4-1bad277d7e9b.png"
    },
    {
      title: "פתרון בעיות שינה",
      description: "יצירת שגרות שינה בריאות לכל המשפחה. נכין תוכנית מותאמת אישית לגיל הילד ולצרכי המשפחה",
      features: ["שגרת שינה קבועה", "יצירת סביבת שינה נעימה", "התמודדות עם פחדי לילה", "שינה עצמאית"],
      icon: <Clock className="h-8 w-8" />,
      image: "/lovable-uploads/a47cbbc2-c498-4e4f-a96d-c3873fde6c4d.png"
    },
    {
      title: "הכנה לגן ולבית הספר",
      description: "ליווי רגשי וחברתי במעברים משמעותיים – לילדים ולהורים. נלמד לזהות ולהבין יחד את הקשיים והחששות שמתעוררים אצל הילד ואצל ההורה, נחזק תחושת ביטחון, וניתן כלים לפיתוח עצמאות ולבניית קשרים חברתיים לקראת התחלה חדשה",
      features: ["פיתוח עצמאות", "כישורים חברתיים", "התמודדות עם פרידה", "בניית ביטחון עצמי"],
      icon: <BookOpen className="h-8 w-8" />,
      image: "/lovable-uploads/3359da1b-e500-4d6b-9f55-c4374e9a1b8b.png"
    },
    {
      title: "בניית ביטחון עצמי",
      description: "חיזוק הביטחון העצמי אצל ילדים והורים כאחד. נלמד כיצד לעודד ולחזק את תחושת המסוגלות העצמית",
      features: ["זיהוי חוזקות אישיות", "עידוד ושבח יעילים", "פיתוח עמידות נפשית", "בניית תדמית עצמית חיובית"],
      icon: <Star className="h-8 w-8" />,
      image: "/lovable-uploads/17c16346-496b-4440-b79f-e1ea512a32b9.png"
    },
    {
      title: "התמודדות עם התנהגויות מאתגרות",
      description: "פתרונות יעילים להתמודדות עם התנהגויות קשות כמו התקפי זעם, אלימות או סירוב לשיתוף פעולה",
      features: ["הבנת הסיבות להתנהגות", "אסטרטגיות התמודדות", "טכניקות הרגעה", "יצירת חלופות חיוביות"],
      icon: <Award className="h-8 w-8" />,
      image: "/lovable-uploads/8c785bbd-c604-4313-a1b6-b5916f2f3010.png"
    }
  ];

  const articles = [
    {
      title: "קביעת גבולות - האיזון הנכון בין חברות לסמכות",
      excerpt: "איך ליצור סביבה בה הילדים מרגישים בטוחים ויודעים מה מצפים מהם, תוך שמירה על קשר חם ואוהב.",
      date: "2024-01-15",
      readTime: "5 דקות קריאה",
      category: "גבולות"
    },
    {
      title: "הצרכים הרגשיים של הילד - איך להבין מה באמת קורה",
      excerpt: "מדריך להורים לזיהוי והבנה של הרגשות של הילדים, וכיצד להגיב בצורה תומכת ומחזקת.",
      date: "2024-01-10",
      readTime: "7 דקות קריאה",
      category: "רגשות"
    },
    {
      title: "חינוך חיובי - איך לעודד ולחזק בלי להפסיד את הסמכות",
      excerpt: "עקרונות של חינוך חיובי שמחזקים את הילד ובונים את הביטחון העצמי שלו, תוך שמירה על מסגרת ברורה.",
      date: "2024-01-05",
      readTime: "6 דקות קריאה",
      category: "חינוך חיובי"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Skip to content link for screen readers */}
      <a href="#main-content" className="skip-link">דלג לתוכן הראשי</a>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-warm" aria-labelledby="hero-heading">
        <div className="container mx-auto px-4 text-center" id="main-content">
          <h1 id="hero-heading" className="text-5xl font-bold text-primary mb-6">שירותים ומאמרים</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            כאן תמצאו את כל השירותים שאני מציעה לצד מאמרים מעשיים ועצות מקצועיות 
            שיעזרו לכם בחינוך הילדים
          </p>
        </div>
      </section>

      {/* Tabs for Services and Articles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="services" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2" role="tablist" aria-label="בחר תוכן">
              <TabsTrigger value="services" aria-label="הצג את השירותים שלי">השירותים שלי</TabsTrigger>
              <TabsTrigger value="articles" aria-label="הצג מאמרים והדרכה">מאמרים והדרכה</TabsTrigger>
            </TabsList>
            
            <TabsContent value="services" className="mt-12">
              {/* Services Grid */}
              <div className="space-y-16">
                {services.map((service, index) => (
                  <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <Card className="h-full border-none shadow-warm">
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <div className="text-primary" aria-hidden="true">
                              {service.icon}
                            </div>
                            <CardTitle className="text-2xl">{service.title}</CardTitle>
                          </div>
                          <CardDescription className="text-lg">
                            {service.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <h4 className="font-semibold text-primary mb-4">מה נלמד יחד:</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-muted-foreground gap-2">
                                <Star className="h-4 w-4 text-primary flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <div className="relative overflow-hidden rounded-2xl shadow-gentle">
                        <AspectRatio ratio={3/2}>
                          <img 
                            src={service.image} 
                            alt={`תמונה ממחישה עבור השירות ${service.title} - איור חמים המתאר את תחום ההתמחות בליווי הורים`}
                            className="w-full h-full object-contain bg-gradient-subtle"
                          />
                        </AspectRatio>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Process Section */}
              <div className="mt-20 py-20 bg-secondary/30 rounded-2xl">
                <div className="container mx-auto px-4">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-4">איך זה עובד?</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                      התהליך שלי בנוי על הקשבה, הבנה ויצירת תוכנית מותאמת אישית
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      {
                        step: "1",
                        title: "שיחת היכרות ואבחון",
                        description: "נפגשים ומכירים. אני מקשיבה לאתגרים שלכם ומבינה את הצרכים הייחודיים של המשפחה."
                      },
                      {
                        step: "2", 
                        title: "בניית תוכנית אישית",
                        description: "יחד נכין תוכנית עבודה מותאמת לגילאי הילדים ולמטרות שלכם, עם כלים מעשיים ליישום יומיומי."
                      },
                      {
                        step: "3",
                        title: "ליווי ותמיכה מתמשכת",
                        description: "במהלך התהליך אני כאן לשאלות, לעדכונים ולהתאמות. הליווי ממשיך עד שתרגישו בטוחים."
                      }
                    ].map((item, index) => (
                      <Card key={index} className="hover:shadow-warm transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                              {item.step}
                            </div>
                            <CardTitle className="text-xl">{item.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base">
                            {item.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pricing Section */}
              <div className="mt-20">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-primary mb-4">מחירים ואפשרויות ליווי</h2>
                  <p className="text-xl text-muted-foreground">
                    המחירים מותאמים לסוג הליווי ולמשך הזמן. השיחה לתיאום ציפיות והיכרות תמיד ללא עלות
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {[
                    {
                      title: "ייעוץ ראשוני",
                      price: "ללא עלות",
                      duration: "עד 20 דקות",
                      features: ["פגישת ייעוץ ללא התחייבות", "זיהוי עיקרי האתגרים", "הצעת תוכנית עבודה", "ללא עלות"]
                    },
                    {
                      title: "ליווי קצר טווח",
                      price: "300 ₪ למפגש",
                      duration: "עד 4 מפגשים",
                      features: ["משך כל מפגש: 60 דקות", "סיכום לכל מפגש", "מטלות להמשך", "מעקב טלפוני וזמינות טלפונית במידת הצורך"]
                    },
                    {
                      title: "מפגשי המשך",
                      price: "250 ₪ למפגש",
                      duration: "לאחר סיום 4 מפגשי הליווי הקצרים",
                      features: ["ללא מגבלת מספר מפגשים", "משך כל מפגש: 60 דקות", "סיכום לכל מפגש", "מטלות להמשך", "מעקב טלפוני וזמינות טלפונית"]
                    }
                  ].map((plan, index) => (
                    <Card key={index} className={`hover:shadow-warm transition-all duration-300 ${index === 1 ? 'border-primary shadow-soft' : ''}`}>
                      <CardHeader>
                        <CardTitle className="text-2xl">{plan.title}</CardTitle>
                        <div className="text-3xl font-bold text-primary">{plan.price}</div>
                        <CardDescription>{plan.duration}</CardDescription>
                      </CardHeader>
                      <CardContent>
                         <ul className="space-y-2">
                           {plan.features.map((feature, featureIndex) => (
                             <li key={featureIndex} className="flex items-center text-sm text-muted-foreground gap-2">
                               <Star className="h-4 w-4 text-primary flex-shrink-0" />
                               {feature}
                             </li>
                           ))}
                         </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="articles" className="mt-12">
              {/* Articles List */}
              <div className="space-y-12">
                {articles.map((article, index) => (
                  <Card key={index} className="hover:shadow-warm transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(article.date).toLocaleDateString('he-IL')}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {article.readTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          אינה פרץ
                        </div>
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                          {article.category}
                        </span>
                      </div>
                      <CardTitle className="text-2xl hover:text-primary transition-colors">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="text-lg">
                        {article.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center mt-6">
                        <Button 
                          variant="gentle" 
                          onClick={() => window.open('https://wa.me/972522880109?text=' + encodeURIComponent('שלום אינה, אני מעוניין/ת לקבל את המאמר המלא על נושא: ' + article.title), '_blank')}
                          aria-label={`בקש את המאמר המלא על ${article.title} בווטסאפ`}
                        >
                          בקשו את המאמר המלא
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => window.location.href = 'tel:052-288-0109'}
                          aria-label="התקשר לאינה פרץ לשאלות על הנושא"
                        >
                          שאלות על הנושא? התקשרו אלי
                          <ArrowLeft className="h-4 w-4 ml-2" aria-hidden="true" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="mt-20">
                <Card className="bg-gradient-gentle border-none">
                  <CardContent className="text-center py-12">
                    <h3 className="text-3xl font-bold text-primary mb-4">
                      רוצים לקבל עוד טיפים ועצות?
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                      אשמח לשתף איתכם מאמרים חדשים, טיפים מעשיים ועצות הורות שיגיעו ישירות למייל שלכם
                    </p>
                    <Button variant="hero" size="lg" onClick={() => window.open('https://wa.me/972522880109?text=' + encodeURIComponent('שלום אינה, אני מעוניין/ת לקבל עדכונים ומאמרים'), '_blank')}>
                      צרו קשר לקבלת עדכונים
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">מוכנים להתחיל?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            השיחה הראשונה ללא עלות. בואו נכיר ונבין יחד איך אני יכולה לעזור לכם
          </p>
          <Button variant="secondary" size="lg" className="text-lg px-8 py-6" onClick={() => window.location.href = 'tel:052-288-0109'}>
            יעוץ חינם - 052-288-0109
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <AccessibilityWidget />
    </div>
  );
};

export default ServicesAndArticles;