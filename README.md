# SchulLia.github.io

Deutschsprachige SchulLia-Homepage mit Kursen, Templates, kurzen Beispielen und Neuigkeiten.

## Inhalte pflegen

- Kurse: **_data/courses.yml**
- Templates: **_data/templates.yml**
- Neuigkeiten: Markdown-Dateien unter **_posts/**
- Startseite: **index.html**
- Gestaltung: **assets/css/main.css**

Die Seite verwendet Jekyll ohne eigene Plug-ins und wird über GitHub Actions auf GitHub Pages veröffentlicht.

## Lokal prüfen

    bundle install
    bundle exec jekyll serve

Anschließend ist die Vorschau unter **http://localhost:4000** erreichbar.

## Veröffentlichung

Das Repository muss öffentlich unter **SchulLia/SchulLia.github.io** liegen. Unter **Settings → Pages** wird **GitHub Actions** als Quelle ausgewählt. Jeder Push auf **main** baut und veröffentlicht die Seite.

Die öffentliche Adresse lautet anschließend **https://schullia.github.io/**.
