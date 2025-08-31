# אתר אינה פרץ - מנחת הורים מוסמכת

## אודות הפרויקט

אתר מקצועי לליווי הורים שנבנה בטכנולוגיות מתקדמות עם דגש על נגישות וחוויית משתמש איכותית.

## הפעלה מקומית

לפיתוח מקומי יש צורך ב-Node.js:

```sh
# שלב 1: שכפול הפרויקט
git clone <YOUR_GIT_URL>

# שלב 2: מעבר לתיקיית הפרויקט
cd eina-parent-compass

# שלב 3: התקנת תלויות
npm install

# שלב 4: הפעלת שרת פיתוח
npm run dev
```

## סקריפטים זמינים

- `npm run dev` - הפעלת שרת פיתוח
- `npm run build` - בניית גרסת פרודקשן
- `npm run preview` - תצוגה מקדימה של גרסת פרודקשן
- `npm run lint` - בדיקת איכות קוד

## טכנולוגיות שבשימוש

פרויקט זה נבנה עם:

- **Vite** - כלי בנייה מהיר ומתקדם
- **TypeScript** - פיתוח מאובטח עם types
- **React 18** - ספריית UI מתקדמת
- **shadcn/ui** - רכיבי UI איכותיים ונגישים
- **Tailwind CSS** - עיצוב responsive ומותאם אישית
- **React Router** - ניווט מתקדם בין עמודים

## פיצ'רים מיוחדים

### נגישות ברמה גבוהה
- תמיכה בקוראי מסך
- ניווט מקלדת מלא
- רמות ניגודיות גבוהות
- תמיכה ב-RTL (עברית)

### אופטימיזציה
- טעינה מהירה עם code splitting
- תמונות מאופטמות
- SEO friendly
- Mobile-first design

## פריסה (Deployment)

### Netlify (מומלץ)
```sh
npm run build
npx netlify-cli deploy --prod --dir=dist
```

### Vercel
```sh
npm run build
npx vercel --prod
```

### הגדרות נוספות
- הוסף HTTPS תמיד
- הגדר redirects מ-HTTP ל-HTTPS
- הגדר custom domain בהגדרות הפלטפורמה

## תחזוקה ופיתוח

- בדוק עדכונים ביטחוניים באופן קבוע
- הרץ `npm audit` לבדיקת בעיות ביטחון
- עדכן dependencies בזהירות
- בצע בדיקות לפני כל עדכון גדול
