# LIU Mauritania — Website (Local Prototype)

مستودع موقع Lebanese International University - Mauritania (نسخة تجريبية محليّة).

الهدف: واجهة عرض ومحاكاة نظام الحضور لطلاب وأساتذة وعميد الكلية. يتم حفظ البيانات مؤقتًا في `localStorage` (نموذج تجريبي؛ ليس قاعدة بيانات حقيقية).

## المحتويات
- صفحات HTML رئيسية: `index.html`, `about.html`, `students.html`, `professor-dashboard.html`, `student-dashboard.html`, `dean-dashboard.html`, `schedule.html`, وغيرها.
- ملفات جافاسكربت: `js/main.js`, `js/i18n.js`
- أنماط: `styles/main.css`
- صور: مجلد `images/`

## قبل الرفع إلى GitHub
- لقد أضفت ملف `./.gitignore` يحتوي على قواعد عامة. راجعها إذا كنت تريد استبعاد أو تضمين مجلد `images/`.
- تأكد إن أردت رفع الصور الكبيرة — إن لم ترد، أضف `images/` إلى `.gitignore`.

## تعليمات سريعة لرفع المشروع إلى GitHub (PowerShell - Windows)

1) تهيئة المستودع محلياً وإنشاء الالتزام الأول:

```powershell
cd C:\wamp64\www\un
git init
git add .
git commit -m "Initial commit - website prototype"
```

2) إنشاء المستودع على GitHub (خياران):

- باستخدام GitHub CLI (`gh`):

```powershell
gh repo create YOUR_USERNAME/YOUR_REPO_NAME --public --source=. --remote=origin --push
```

- أو يدويًا عبر الموقع ثم ربطه محليًا:

```powershell
# بعد إنشاء المستودع على github.com
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

3) إزالة ملفات ارتُكبت عن طريق الخطأ (إن لزم):

```powershell
# مثال لإزالة ملف كبير سبق وارتُكب
git rm --cached path/to/large-file.ext
# ثم أضف المسار إلى .gitignore
git add .gitignore
git commit -m "Remove large file and update .gitignore"
git push
```

## نصائح
- إذا أردت أن أعمل التهيئة والالتزام المحلي (`git init` + `git commit`) هنا، أستطيع تنفيذها الآن — أخبرني "نفّذ الآن".
- إذا تريد إنشاء المستودع على GitHub عبر الـ CLI وأعطيك أمر واحد للتشغيل، تأكد أن `gh` مُثبت وأنك مسجّل دخول `gh auth login`.
- ضع بيانات حساسة (مفاتيح، كلمات مرور، ملفات الإعداد) في `.env` وضمّها إلى `.gitignore`.

## ملفات هامة
- `js/main.js` — بيانات وهمية للطلاب والأساتذة ومنطق الحضور
- `professor-dashboard.html` — واجهة الأستاذ لتحديد الحضور
- `student-dashboard.html` — واجهة الطالب لعرض الغيابات
- `dean-dashboard.html` — واجهة العميد للإحصاءات
- `test-connection.html` — صفحة اختبارات الربط
- `.gitignore` — أنشأت نسخة أولية

---

إذا تريد، أنفذ الآن أحد الخيارات التالية:
- (A) أنفّذ `git init` + أول `git commit` محليًا (لا أدفع إلى GitHub).
- (B) أنشئ `README.md` (تم الآن) و`LICENSE` (أضيفه إذا تريد نوع ترخيص).
- (C) أنشئ المستودع على GitHub عبر `gh` ودفعه (أحتاج اسم المستخدم واسم المستودع أو تصريح منك لاستخدام حسابك عبر `gh`).

أخبرني أي خيار تريدني أن أنفذه الآن.