Opgave 2 Opret en mappe:

Anvendt url: https://api.dropboxapi.com/2/files/create_folder_v2
Anvendt HTTP verb: POST

<img width="842" alt="image" src="https://github.com/Fredvigsoe/obligatoriskopgave1/assets/112333260/a9935a5c-47e9-419d-900e-b33232cecd0c">

DROPBOX API bruger en ensartet HTTP-verb til at udføre forskellige handlinger. I dette tilfælde bruger det POST til at oprette en mappe. Så den er i overenstemmelse med princippet om uniform interface.

Definition: 
Uniform Interface: Dette indebærer, at API'et skal have en ensartet og veldefineret grænseflade, så klienter kan interagere med serveren på en forudsigelig måde.

Opgave 3 Hent mappe detaljer

Anvendt url: https://api.dropboxapi.com/2/files/get_metadata
Anvendt HTTP verb: POST

{
    "include_deleted": false,
    "include_has_explicit_shared_members": false,
    "include_media_info": false,
    "path": "/TestMappe"
}

Opgave 4 Upload en fil

Anvendt url: https://content.dropboxapi.com/2/files/upload
Anvendt HTTP verb: POST

Jeg anvendte følgende headers:

Authorization
Content-Type application/octet-stream
Dropbox-API-Arg: {"path": "/TestMappe/test.rtf","mode": {".tag": "add"},"autorename": true}

Og så under body, valgte jeg binary og tilføjede min fil fra skrivebordet.
<img width="835" alt="image" src="https://github.com/Fredvigsoe/obligatoriskopgave1/assets/112333260/404ddc94-1e13-4af4-a27a-aaddcd092be3">

Opgave 5 Slet en fil

Anvendt url: https://api.dropboxapi.com/2/files/delete_v2
Anvendt HTTP verb: POST

Stien brugt til at slette
{
    "path": "/TestMappe/test.rtf"
}

Opgave 7 Søg efter filer

Anvendt url: https://api.dropboxapi.com/2/files/search_v2
Anvendt HTTP verb: POST

Request body: {
    "match_field_options": {
        "include_highlights": false
    },
    "options": {
        "file_status": "active",
        "filename_only": false,
        "max_results": 20,
        "path": "/TestMappe"
    },
    "query": "test"
}

Response body:
{
    "has_more": false,
    "matches": [
        {
            "match_type": {
                ".tag": "filename_and_content"
            },
            "metadata": {
                ".tag": "metadata",
                "metadata": {
                    ".tag": "file",
                    "client_modified": "2023-09-06T08:11:56Z",
                    "content_hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
                    "id": "id:9slif2he0boAAAAAAAAAOA",
                    "is_downloadable": true,
                    "name": "test.rtf",
                    "path_display": "/TestMappe/test.rtf",
                    "path_lower": "/testmappe/test.rtf",
                    "rev": "604ac4c009ef0701cfc81",
                    "server_modified": "2023-09-06T07:58:59Z",
                    "size": 391
                }
            }
        }
    ]
}

Opgave 8 Flyt en fil

Anvendt url: https://api.dropboxapi.com/2/files/move_v2
Anvendt HTTP verb: POST

<img width="842" alt="image" src="https://github.com/Fredvigsoe/obligatoriskopgave1/assets/112333260/ddf70d28-727d-4fb2-bfee-37173421da74">

Opgave 9 Kopier en fil

Anvendt url: https://api.dropboxapi.com/2/files/copy_v2
Anvendt HTTP verb: POST

<img width="862" alt="image" src="https://github.com/Fredvigsoe/obligatoriskopgave1/assets/112333260/129c5aad-e968-4c78-834c-73c531afc66e">

Opgave 10 Brug JavaScript's Fetch med Dropbox API

Se index.html og script.js, har fjernet token ID så det er ikke funktionelt.

Opgave 11

Dropbox API følger REST principperne.

API'et bruger standard HTTP-metoder og statuskoder, det er stateless hvor alle anmodninger har de nødvendige oplysninger. Der er en adskillelse imellem klient og server. Klienten styrer brugergrænsefladen og serveren håndterer datastyring. 















