import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Quote, Users, Heart } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "שרה מ.",
      location: "תל אביב",
      age: "אמא לשלושה ילדים (3, 7, 10)",
      content: "אינה שינתה לנו את החיים. הילדים שלי היו באמת מאתגרים - התקפי זעם יומיומיים, סירוב לשיתוף פעולה, ואני הרגשתי שאני עושה הכל לא נכון. אחרי כמה פגישות עם אינה למדתי איך לקבוע גבולות בצורה אוהבת וברורה. היום, 6 חודשים אחרי, הבית שלנו הוא מקום הרבה יותר רגוע ושמח.",
      rating: 5,
      category: "קביעת גבולות",
      beforeAfter: "מהיום הראשון הרגשתי שאינה באמת מבינה אותי ואת המצב שלי. היא לא שפטה, רק נתנה כלים מעשיים."
    },
    {
      name: "דני ומירב ל.",
      location: "חיפה", 
      age: "הורים לבן בן 5",
      content: "הבן שלנו נאבק עם מעבר לגן החדש. הוא היה מתלונן כל בוקר שכואב לו הבטן, בכה ולא רצה להיפרד מאיתנו. אינה עזרה לנו להבין איך להכין אותו רגשית למעבר, איך לתת לו כלים להתמודדות ואיך להיות שם בשבילו בלי ליצור תלות מוגזמת. תוך חודש הוא כבר נכנס לגן בשמחה!",
      rating: 5,
      category: "הכנה לגן",
      beforeAfter: "אינה הסבירה לנו שהקושי של הילד שלנו הוא טבעי ונתנה לנו תוכנית ברורה איך לעזור לו."
    },
    {
      name: "רחל ד.",
      location: "ירושלים",
      age: "אמא לתאומות בנות 4",
      content: "כשיש לך תאומות, הכל כפול - גם הבעיות. הבנות שלי נכנסו לתקופה של 'לא' לכל דבר ואני פשוט לא ידעתי איך להתמודד. אינה לימדה אותי איך לתת להן אוטונומיה תוך שמירה על הסמכות שלי. היא גם עזרה לי להבין שכל בת היא אישיות אחרת וצריכה גישה קצת שונה. הרבה פחות מתחים בבית עכשיו.",
      rating: 5,
      category: "ניהול קונפליקטים",
      beforeAfter: "אינה הראתה לי שאני לא צריכה להיות 'הורה מושלמת', אלא הורה שמתאמצת ולומדת."
    },
    {
      name: "אבי כ.",
      location: "באר שבע",
      age: "אבא לילד בן 8",
      content: "הילד שלי התמודד עם קשיי קשב וזה השפיע על הביטחון העצמי שלו. אינה עזרה לי להבין איך לחזק אותו, איך לעזור לו למצוא את החוזקות שלו ואיך ליצור איתו שגרות שיעזרו לו להצליח. היא גם עבדה איתי על הסבלנות שלי ועזרה לי להיות האבא שאני רוצה להיות.",
      rating: 5,
      category: "בניית ביטחון עצמי",
      beforeAfter: "אינה עזרה לי להפסיק להתמקד במה שהילד שלי לא יודע לעשות ולהתחיל לראות את כל מה שהוא כן יודע."
    },
    {
      name: "נועה ש.",
      location: "נתניה",
      age: "אמא לשני ילדים (2, 6)",
      content: "הבת הקטנה שלי פשוט לא ישנה. כל לילה היה מאבק של שעות, והיא התעוררה מספר פעמים בלילה. הייתי מותשת ולא ידעתי איך להמשיך. אינה בנתה איתי תוכנית שינה שהתחשבה בגיל שלה ובטמפרמנט שלה. תוך שבועיים היא כבר ישנה לילות שלמים! זה שינה את כל המשפחה שלנו.",
      rating: 5,
      category: "פתרון בעיות שינה",
      beforeAfter: "לא האמנתי שזה יכול להיות כל כך פשוט. אינה הוכיחה לי שכן!"
    },
    {
      name: "יוסי ולאה ר.",
      location: "פתח תקווה",
      age: "הורים לשלושה ילדים",
      content: "הילד הבכור שלנו (בן 12) התחיל להתבודד, לא רצה לדבר איתנו ונראה עצוב. לא ידענו איך להגיע אליו. אינה לימדה אותנו איך ליצור מרחב בטוח שבו הוא ירגיש שהוא יכול לדבר, איך להקשיב בלי לשפוט ואיך לתמוך בו בתקופה הקשה הזו. היום הוא חזר להיות הילד השמח שאנחנו מכירים.",
      rating: 5,
      category: "תקשורת עם בני נוער",
      beforeAfter: "אינה הסבירה לנו שבגיל הזה הילד צריך לחוש שאנחנו שותפים לדרך שלו, לא שופטים."
    }
  ];

  const stats = [
    { number: "95%", label: "שיפור ממוצע בתקשורת", icon: <Heart className="h-6 w-6" /> },
    { number: "כ-30", label: "שנות ניסיון", icon: <Star className="h-6 w-6" /> },
    { number: "100%", label: "שביעות רצון מהליווי", icon: <Quote className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Skip to content link for screen readers */}
      <a href="#main-content" className="skip-link">דלג לתוכן הראשי</a>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-warm" aria-labelledby="hero-heading">
        <div className="container mx-auto px-4 text-center" id="main-content">
          <h1 id="hero-heading" className="text-5xl font-bold text-primary mb-6">המלצות מהורים</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            קראו על הניסיון של הורים שקיבלו ליווי מקצועי ושינו את האווירה במשפחה שלהם
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto text-primary mb-2 flex justify-center" aria-hidden="true">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials as WhatsApp-style bubbles */}
      <section className="py-20" aria-labelledby="testimonials-heading">
        <div className="container mx-auto px-4">
          <h2 id="testimonials-heading" className="sr-only">המלצות מפורטות מהורים</h2>
          
          <div className="wa-wrap" dir="rtl">
            {/* Testimonial 1 */}
            <article className="wa-msg">
              <div className="wa-bubble wa-in">
                <p>
                  ובהזדמנות זו, אנחנו רוצים להודות לך, אינה יקרה, באופן מיוחד. את היית עבורנו הרבה יותר ממנחה - היית מקור לתמיכה, עצה והכוונה. היחס החם והמסור שלך בכל זמן שנזקקנו לו היה מעל ומעבר. תמיד היית קשובה לצרכים שלנו ושל הילדה שלנו, ועזרת לנו להתמודד עם האתגרים באמונה גדולה ,סבלנות ובחכמה 😉.
                  <br /><br />
                  הידע המקצועי שלך והאכפתיות האינסופית שלך עשו את ההבדל עבורנו. את באמת מיוחדת במינך.
                </p>
                <span className="wa-meta">
                  אבישג כהן · 21:07
                  <span className="wa-checks" aria-label="sent ✓✓">✓✓</span>
                </span>
              </div>
            </article>

            {/* Testimonial 2 */}
            <article className="wa-msg">
              <div className="wa-bubble wa-in">
                <p>
                  אינה את כל כך ראויה למקומך. תמיד נמצאת תמיד בשטח תמיד אומרת את מה שצריך להגיד להורים. ממלאת את תפקידך במלוא הרצינות ובו זמנית עם לב פתוח ורחב. זמינה תמיד לכל שאלה בעיה או סתם ייעוץ.
                  <br /><br />
                  נכנסתי בחשש גדול ולאט לאט ידעת לתת לי ביטחון שאני בידיים טובות וראויות. זכינו🙏 תודה ענקית ❤❤❤
                </p>
                <span className="wa-meta">
                  ספיר גבאי · 18:42
                  <span className="wa-checks" aria-label="sent ✓✓">✓✓</span>
                </span>
              </div>
            </article>

            {/* Testimonial 3 */}
            <article className="wa-msg">
              <div className="wa-bubble wa-in">
                <p>
                  אינה היקרה ❤ לפעמים כמה מילים לא מספיקות כדי להביע תודה כה עמוקה ורבה אבל אנסה.
                  אני יחידנית לשני קטנטנים בני 3 ו- שנה, האתגרים עצומים והקריירה התובענית הכריעו והקשו עד מאוד, הגעתי אלייך ומהשנייה הראשונה הבנתי שהתמזל מזלי וזכיתי ללמוד מהטובה ביותר!!
                  <br /><br />
                  עם ניסיון עתיר בחינוך הגיל הרך, ניסיון חיים, בגרות, יכולת הכלה כנה ואמיתית, העדר שיפוטיות והמון חום ואהבה זכיתי לחלוק איתך את האתגרים והרשתי לעצמי לשאול את השאלות החשופות והעמוקות ביותר. יחד התרנו כל קשר, פשטת עבורי תהליכים, נתת לי כלים פרקטיים ומצוינים, לא אחד.. כמה לכל סיטואציה, לימדת אותי המון על הדרך שבה ילדים רואים את העולם, חדדת עבורי את החזון ההורי שלי וגרמת לי לדייק את הערכים והכלים אני רוצה להטמיע בילדיי.
                  <br /><br />
                  עברה חצי שנה ואני יכולה לומר בבטחה שהכלים והמשאבים שנתת לי נשאו פרי, החיים פשוטים ונינוחים בהרבה עבור ילדיי עבורי ועבור המשפחה התומכת. בשם כולנו תודה ענקית לך ומאחלת שתמשיכי להפיץ ידע ואור כמו שאת יודעת 🙏🏻
                </p>
                <span className="wa-meta">
                  גלית בן חיון · 09:15
                  <span className="wa-checks" aria-label="sent ✓✓">✓✓</span>
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-secondary/30" aria-labelledby="more-testimonials-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="more-testimonials-heading" className="text-4xl font-bold text-primary mb-4">מעוניינים לשמוע עוד?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              המלצות אלו מייצגות רק חלק מהמשפחות שקיבלו ליווי. כל משפחה היא ייחודית, 
              והתוצאות תלויות במידת המחויבות ליישום הכלים שנלמדו יחד.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="py-12">
                <div className="flex items-center gap-3 mb-6">
                  <Quote className="h-12 w-12 text-primary" aria-hidden="true" />
                  <h3 className="text-2xl font-bold text-primary">
                    "הדבר שהכי שינה אותנו זה ההבנה שאנחנו לא לבד במסע הזה"
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  רוב ההורים שמגיעים אלי מרגישים לבד ואשמים. אני כאן כדי להראות להם 
                  שהם עושים עבודה מדהימה ושרק צריך קצת תמיכה וכלים נכונים.
                </p>
                <p className="text-primary font-semibold">- אינה פרץ</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Submit Testimonial */}
      <section className="py-20" aria-labelledby="submit-testimonial-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 id="submit-testimonial-heading" className="text-4xl font-bold text-primary mb-6">קיבלתם ליווי?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              אשמח אם תשתפו את הסיפור שלכם ותעזרו למשפחות אחרות להבין 
              איך ליווי מקצועי יכול לעזור גם להן
            </p>
            
            <div className="bg-gradient-gentle/20 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-primary mb-4">איך לשתף את הסיפור שלכם?</h3>
              <div className="text-muted-foreground space-y-2 mb-6">
                <p>📧 שלחו לי מייל עם הסיפור שלכם</p>
                <p>📞 התקשרו ונקליט שיחה קצרה</p>
                <p>💬 שלחו הודעה בווטסאפ</p>
              </div>
              <p className="text-sm text-muted-foreground">
                כמובן, ניתן לשתף באופן אנונימי או עם שמות מוסווים
              </p>
            </div>
            
            <div className="mt-8">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={() => window.open('https://wa.me/972522880109?text=' + encodeURIComponent('שלום אינה, אני מעוניין/ת לשתף את הסיפור שלי'), '_blank')}
                aria-label="שתף את הסיפור שלך עם אינה פרץ בווטסאפ"
              >
                שיתוף הסיפור שלכם
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 id="cta-heading" className="text-4xl font-bold mb-6">רוצים להצטרף לרשימה של המשפחות השמחות?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            השיחה הראשונה ללא עלות. בואו נכיר ונראה איך אני יכולה לעזור גם לכם
          </p>
          <Button 
            variant="secondary" 
            size="lg" 
            className="text-lg px-8 py-6" 
            onClick={() => window.location.href = 'tel:052-288-0109'}
            aria-label="התקשר לייעוץ חינם למספר 052-288-0109"
          >
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

export default Testimonials;