const accessToken = "Bearer notoken";

document.getElementById("hentdatabtn").addEventListener("click", () => {
    fetchFilesAndFolders();
});

async function fetchFilesAndFolders() {

    try {
        const res = await fetch("https://api.dropboxapi.com/2/files/list_folder", {
            method: "POST",
            headers: {
                "Authorization": accessToken,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                path: "/Home",
                recursive: false,
                include_media_info: false,
                include_deleted: false,
                include_has_explicit_shared_members: false,
                include_mounted_folders: true
            })
        });

        if (res.ok) {
            const data = await res.json();
            displayFilesAndFolders(data.entries);
        } else {
            console.error("An error occurred while fetching data.");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

function displayFilesAndFolders(entries) {
    const filer = document.getElementById("filer");
    filer.innerHTML = "";

    if (entries.length === 0) {
        filer.innerHTML = "<p>Tomt directory</p>";
        return;
    }

    const list = document.createElement("ul");
    entries.forEach(entry => {
        const listItem = document.createElement("li");
        listItem.textContent = entry.name;
        list.appendChild(listItem);
    });

    filer.appendChild(list);
}