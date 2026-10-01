# 🎮 Misi 04 — Allah SWT Penguasa Mutlak

Aplikasi pembelajaran bergamifikasi untuk **Pendidikan Islam Tingkatan 1, Pelajaran 4 (bidang al-Quran)** — Surah al-Baqarah **ayat 284–286**.

## Ciri
- 8 flashcards: terbalik, rawak, penandaan telah dipelajari
- 5 permainan: Padankan Konsep, Detektif Niat, Memori Ilmu, Susun Pengajaran, Kuiz Kilat
- XP, lencana, progress murid tersimpan pada peranti
- Paparan teks ayat 284–286 dan pautan bacaan audio/tajwid Quran.com
- Aktiviti PAK21: Think–Pair–Share, Stesen A/B/C (pembelajaran terbeza), Studio Showcase poster (eksport PNG), Exit Ticket 3–2–1 (eksport TXT)
- Tiada AI, tiada login, tiada pangkalan data murid. Mesra telefon + PWA.

## Pautan selepas Pages aktif
https://farshoffs.github.io/pendislam/

## Jadual kelas (60 min)
| Aktiviti | Minit |
| --- | ---: |
| Set induksi | 5 |
| Ayat dan hafazan | 10 |
| Flashcards | 8 |
| Mini games | 15 |
| Stesen terbeza | 8 |
| Showcase | 9 |
| Exit Ticket | 5 |

## Sumber kandungan
- [Surah al-Baqarah 284–286, Quran.com](https://quran.com/ms/al-baqarah/284-286)
- KSSM Pendidikan Islam Tingkatan 1, Pelajaran 4: Allah SWT Penguasa Mutlak (bidang al-Quran). Objektif tajuk: membaca dengan betul dan bertajwid, memahami intisari, hafazan, amalan dalam kehidupan.

**Nota**: Makna ayat pada kad ialah parafrasa intisari ringkas, bukan terjemahan lengkap. Hafazan dan tajwid disahkan oleh guru atau rakan, bukan dinilai secara automatik.

## Cara guna
Buka `index.html` melalui pelayan web tempatan (`python -m http.server 8000`) atau Github Pages; pasang sebagai aplikasi melalui ciri 'Add to Home Screen' pada pelayar yang menyokongnya.

Kemajuan disimpan hanya pada peranti itu melalui localStorage. Jika data pelayar dipadam atau bertukar peranti, kemajuan tidak diselaraskan.

## Deploy
Workflow: `.github/workflows/pages.yml`. Jika Github Actions tidak dibenarkan mengaktifkan Pages secara automatik, buka **Settings → Pages → Build and deployment → Source: GitHub Actions**, kemudian jalankan semula workflow melalui tab Actions.
