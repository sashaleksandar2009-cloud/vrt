Virus Removal Tool by silence (Engine v3.2)

Сайт проекта: [sashaleksandar2009-cloud.github.io/vrt](https://github.io)

 Описание

Консольная утилита на Python для поиска троянов, стиллеров и базовой проверки безопасности в Windows 10/11. Не требует установки, анализирует исполняемые файлы, системные разделы и сетевую активность.

Основной функционал (Engine v3.2)

Анализ файлов: проверка PE-структур, энтропии, скрытых NTFS-потоков и перебор XOR-ключей.
Сеть: мониторинг активных TCP-соединений и процессов в режиме реального времени.
Система: аудит автозагрузки, планировщика задач, параметров реестра и файла hosts.
Карантин: приостановка процессов через `NtSuspendProcess` и изоляция угроз с функцией восстановления.

 Установка и запуск

1. Установите Python 3.
2. Скачайте и распакуйте архив `MyAntivirus_v3.2_by_silence.zip` из раздела Releases.
3. Запустите `Start_Admin.bat` или откройте `gui_antivirus.py` с правами администратора.

---

About (English)

Lightweight Python utility for Windows 10/11 designed to detect trojans, stealers, and system persistence. Features PE heuristic analysis, real-time network monitoring, system audit, and quarantine capabilities.

---

Безопасность

Результат проверки на VirusTotal: 0/65. Исходный код открыт.
