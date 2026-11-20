var I18N = {
  ru: {
    btnLang: "🌐 EN",
    heroTitle: "Глубокая очистка ПК от троянов и стиллеров",
    heroSub: "Легковесная антивирусная утилита с поведенческим анализом PE-файлов, проверкой цифровых подписей Windows, зашифрованным карантином и живым монитором сетевых соединений.",
    dlBtn: "⬇ Скачать бесплатно (RAR / Windows)",
    meta: "Версия: 3.2 Hardened • Разработчик: silence • Бесплатно и без рекламы",
    views: "👁 Посетителей сайта:",
    downloads: "📦 Скачано раз:",
    tab1: "🔍 Проверка компьютера",
    tab2: "🛡️ Монитор 24/7",
    tab3: "🌐 Сетевые соединения",
    secFeatures: "Возможности движка Engine v3.2",
    f1t: "🔍 Эвристика и PE-анализ",
    f1d: "Проверка RWX-секций, энтропии упаковщиков, скрытых NTFS-потоков, перебор 255 XOR-ключей и защита от раздувания файлов (File Pumping).",
    f2t: "🌐 Сетевые соединения",
    f2d: "Мониторинг активных TCP-сессий и попыток подключения (SYN_SENT) в реальном времени с определением процессов и PID.",
    f3t: "⚙️ Глубокий контроль системы",
    f3d: "Аудит реестра Run/RunOnce, Winlogon, перехватчиков IFEO, папок Startup, планировщика задач и защита файла hosts от подмены.",
    f4t: "📦 Зашифрованный карантин",
    f4d: "Мгновенная заморозка вредоносных процессов (NtSuspendProcess) и безопасная изоляция угроз с возможностью восстановления.",
    howTitle: "Как запустить утилиту",
    step1: "Убедитесь, что на ПК установлен Python 3 (с официального сайта python.org).",
    step2: "Скачайте и полностью распакуйте архив MyAntivirus.rar в любую удобную папку.",
    step3: "Запустите файл Start_Admin.bat (он сам установит pefile и откроет антивирус от имени Администратора) или откройте gui_antivirus.py через любой редактор кода / терминал с правами Администратора.",
    step4: "Выберите области сканирования и нажмите «▶ Начать проверку».",
    footer: "Virus Removal Tool • Разработка и поддержка: silence • 2026"
  },
  en: {
    btnLang: "🌐 RU",
    heroTitle: "Deep PC Cleanup from Trojans & Stealers",
    heroSub: "Lightweight security & malware removal utility featuring PE heuristic analysis, Windows Authenticode/CatRoot signature verification, encrypted quarantine, and a live TCP network monitor.",
    dlBtn: "⬇ Download Free (RAR / Windows)",
    meta: "Version: 3.2 Hardened • Developer: silence • Free & Ad-Free",
    views: "👁 Site Visitors:",
    downloads: "📦 Total Downloads:",
    tab1: "🔍 System Scan",
    tab2: "🛡️ 24/7 Guard",
    tab3: "🌐 Network Connections",
    secFeatures: "Engine v3.2 Key Features",
    f1t: "🔍 PE Heuristics & Analysis",
    f1d: "Detects RWX sections, high-entropy packers, hidden NTFS Alternate Data Streams, 255-key XOR strings, and File Pumping evasion.",
    f2t: "🌐 Live Network Monitor",
    f2d: "Tracks active TCP sessions and outbound connection attempts (SYN_SENT) in real time mapped to exact Process Names & PIDs.",
    f3t: "⚙️ Deep Persistence Audit",
    f3d: "Scans Run/RunOnce registry keys, Winlogon, IFEO debuggers, Startup folders, Scheduled Tasks, and hosts file hijacks.",
    f4t: "📦 Encrypted Quarantine",
    f4d: "Instantly suspends malicious processes via NtSuspendProcess and isolates threats safely with one-click restore.",
    howTitle: "How to Run",
    step1: "Make sure Python 3 is installed on your PC (from python.org).",
    step2: "Download and extract MyAntivirus.rar into any folder.",
    step3: "Run Start_Admin.bat (it auto-installs pefile and launches with Administrator rights) or open gui_antivirus.py in any IDE / terminal as Administrator.",
    step4: "Select scan targets and click «▶ Start Scan».",
    footer: "Virus Removal Tool • Developed & Maintained by silence • 2026"
  }
};

var currentLang = "ru";

function applyLang(lang) {
  currentLang = lang;
  var t = I18N[lang];
  document.documentElement.lang = lang;
  document.getElementById("lang-toggle").textContent = t.btnLang;
  document.getElementById("hero-title").textContent = t.heroTitle;
  document.getElementById("hero-sub").textContent = t.heroSub;
  document.getElementById("download-btn").textContent = t.dlBtn;
  document.getElementById("meta-info").textContent = t.meta;
  document.getElementById("lbl-views").textContent = t.views;
  document.getElementById("lbl-downloads").textContent = t.downloads;
  document.getElementById("tab-1").textContent = t.tab1;
  document.getElementById("tab-2").textContent = t.tab2;
  document.getElementById("tab-3").textContent = t.tab3;
  document.getElementById("sec-features").textContent = t.secFeatures;
  document.getElementById("f1-t").textContent = t.f1t;
  document.getElementById("f1-d").textContent = t.f1d;
  document.getElementById("f2-t").textContent = t.f2t;
  document.getElementById("f2-d").textContent = t.f2d;
  document.getElementById("f3-t").textContent = t.f3t;
  document.getElementById("f3-d").textContent = t.f3d;
  document.getElementById("f4-t").textContent = t.f4t;
  document.getElementById("f4-d").textContent = t.f4d;
  document.getElementById("how-title").textContent = t.howTitle;

  var list = document.getElementById("how-list");
  list.innerHTML = "";
  [t.step1, t.step2, t.step3, t.step4].forEach(function(stepText) {
    var li = document.createElement("li");
    li.textContent = stepText;
    list.appendChild(li);
  });

  document.getElementById("footer-txt").textContent = t.footer;
}

function showPreview(src, btn) {
  document.getElementById("main-preview").src = src;
  var btns = document.querySelectorAll(".tab-btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].classList.remove("active");
  }
  btn.classList.add("active");
}

var API_HOST = ["https:/", "api.counterapi.dev", "v1", "silence-vrt-antivirus-2026"].join("/");

function updateCounter(key, elementId, increment) {
  var url = API_HOST + "/" + key + (increment ? "/up" : "");
  fetch(url)
    .then(function(res) { return res.json(); })
    .then(function(data) {
      if (typeof data.count === "number") {
        document.getElementById(elementId).textContent = data.count;
      }
    })
    .catch(function() {
      var localKey = "vrt_stat_" + key;
      var val = parseInt(localStorage.getItem(localKey) || "0", 10);
      if (increment) {
        val += 1;
        localStorage.setItem(localKey, String(val));
      }
      document.getElementById(elementId).textContent = val || (key === "visits" ? 1 : 0);
    });
}

document.getElementById("lang-toggle").addEventListener("click", function() {
  applyLang(currentLang === "ru" ? "en" : "ru");
});

var visited = sessionStorage.getItem("vrt_visited");
updateCounter("visits", "stat-views", !visited);
if (!visited) sessionStorage.setItem("vrt_visited", "1");
updateCounter("downloads", "stat-downloads", false);

document.getElementById("download-btn").addEventListener("click", function() {
  updateCounter("downloads", "stat-downloads", true);
});

var dlBtn = document.getElementById("download-btn");
dlBtn.href = "MyAntivirus.rar";
dlBtn.setAttribute("download", "MyAntivirus.rar");
