+++
author = "Fatos Halimi"
categories = []
date = 2022-09-28T00:00:00Z
description = ""
tags = ["openai", " whisper", "interview transkribieren"]
thumbnail = "/images/hitesh-choudhary-t1paibmtjim-unsplash.jpg"
title = "Kostenloses Speech-To-Text AI Tool für Transkribieren mit Google Colab"

+++
[Whisper](https://github.com/openai/whisper "https://github.com/openai/whisper") ist ein System zur automatischen Spracherkennung ASR) von [OpenAI](https://openai.com/blog/whisper/ "https://openai.com/blog/whisper/"), dass in 680000 Stunden an überwachten Daten aus dem Internet trainiert und kostenlos in [Github](https://github.com/openai/whisper "https://github.com/openai/whisper") zur Verfügung gestellt.

Warum ist das so interessant? Nun hat man eine kostenlose Möglichkeit, Sprachaufnahmen direkt transkribieren und in andere Sprachen übersetzen zu lassen.

In dem Post schauen wir uns mal an, wie man beispielsweise die Aufnahme eines Interviews einfach und kostenlos transkribieren kann. Dazu verwende ich Google Colab und Whisper.

# Was ist Google Colab?

Google Colab ist ein cloud-basierter Service um code zu entwickeln und auszuführen. Wie Google Docs nur fürs coding in Python.

Vor allem wenn man keinen leistungsstarken Laptop zu Hause hat, ist das eine super alternative.

# Whisper mit Google Colab nutzen

Als ersten Schritt brauchen wir ein Google Colab Notebook. Hierzu öffnest du diesen Link ([https://colab.research.google.com/#create=true](https://colab.research.google.com/#create=true "https://colab.research.google.com/#create=true")) und Google wird direkt ein neues Notebook erstellen.

Du kannst auch in deiner Google Drive mit einem Rechtsklick > More > Google Colaboratory ein neues Notebook anlegen.

![Google Drive Colab Screenshot](/images/Google_Drive_Collab.png)

Das neue Notebook heißt dann Untitled.ipynb.

## GPU aktivieren

Als Nächstes sagen wir Google, dass die GPU verwendet werden soll. Um das zu tun, gehen wir unter den Menüreiter Laufzeit > Laufzeittyp ändern und wählen in dem Dropdown Hardwarebeschleuniger des Dialogs den Punkt GPU aus und speichern das Ganze.

![Laufzeit Einstellungen Screenshot](/images/Google_Collab_Runtime.png)![GPU Option wählen](/images/Google_Collab_GPU.png)

## Whisper installieren

In dem neuen Notebook fügen wir als Code folgendes ein und führen dann mit dem Play-Button (oder mit CTRL + Enter) das ganze aus.

    !pip install git+https://github.com/openai/whisper.git 
    !sudo apt update && sudo apt install ffmpeg

![Whisper Installation Screenshot](/images/Google_Collab_whisper_install.png)

Somit installieren wir Whisper im Notebook. (Für weitere Installationshinweise gibt es unter [https://github.com/openai/whisper#setup](https://github.com/openai/whisper#setup) "https://github.com/openai/whisper#setup"))

Das Rufzeichen (!) an Anfang der Zeile fügen wir ein, weil wir ein shell script in Google Colabs ausführen und keinen Python-Code. Wenn du Whisper auf deinem Laptop nutzen willst, dann lass das Rufzeichen weg.

## Audiodatei hochladen

Damit wir die Audiodatei transkribieren können, müssen wir sie zuerst in Google Colab hochladen. Dazu könnt ihr sie mit Drag & Drop in die Dateien-Ansicht von Google Collab oder mit dem Upload-Button hochladen.

![Datei-Upload Screenshot](/images/Google_Collab_File_Upload.png)

## Transkribieren mit Whisper

Nun fügen wir einen zweiten Code-Block in das Notebook mit dem +Code-Button ein und fügen folgende Zeilen in den Code-Block ein:

    !whisper "test_interview.m4a" --model medium --language German

Damit Magic passiert wieder auf den Play-Button (oder mit CTRL + Enter) ausführen.

![Whisper Ausgabe Screenshot](/images/Google_Collab_whisper.png)

In diesem Beispiel habe ich das Model Medium und die Sprache Deutsch als Parameter mitgegeben.

Wenn die Transkription fertig ist, seht ihr in dem Datei-Explorer die fertig transkribierten Dateien.

### Whisper Models

Whisper hat [verschiedene Modelle](https://github.com/openai/whisper#available-models-and-languages "https://github.com/openai/whisper#available-models-and-languages"), die ihr nützen könnt. 

> Ein Model ist eine statistische Repräsentation der Speech-To-Text-Engine. Das Modell ist darauf trainiert, Sprache zu erkennen und sie für den Benutzer in Text umzuwandeln. Es gibt viele verschiedene Arten von Modellen, die jeweils für einen bestimmten Zweck entwickelt wurden.

Als Standard wird das Small-Modell genommen. Es ist schneller, aber nicht so genau wie die Modelle darunter. Für eine genauere Verarbeitung nehmt ein größeres Modell.

## Whisper CMD-Line Optionen

Du kannst direkt in Google Colab auch alle Optionen von Whisper anschauen:

    !whisper -h

## Zusammenfassung

In dem Post haben wir uns die Basis-Steps für eine Transkription mit Google Colab und Whisper, dass wir in einem Google Colab über die Kommandozeile ausführen, angesehen.

**Happy Transcribing!**

### Ressourcen

* OpenAI Blogpost "Introducing Whisper" [https://openai.com/blog/whisper/](https://openai.com/blog/whisper/)
* Whisper Github-Repo: [https://github.com/openai/whisper](https://github.com/openai/whisper "https://github.com/openai/whisper")
* Google Colab: [https://research.google.com/colaboratory/faq.html](https://research.google.com/colaboratory/faq.html "https://research.google.com/colaboratory/faq.html")