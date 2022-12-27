parseJson();

function parseJson() {
    fetch('./projects.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            for (const element of data.projects) {
                const sec = document.createElement("section");
                sec.className = 'hidden';
                document.getElementById("cardlist1").appendChild(sec);

                // Create card and put into card list
                const card = document.createElement("div");
                card.className = "card";
                sec.appendChild(card);

                // Parse and populate name, date, info
                const header = document.createElement("div");
                header.className = "split";
                card.appendChild(header);

                const name = document.createElement('a');
                name.className = "left";
                name.href = element.link;
                name.appendChild(document.createTextNode(element.name));
                header.appendChild(name);

                const date = document.createElement("div");
                date.className = "right";
                date.appendChild(document.createTextNode(element.date));
                header.appendChild(date);

                // List of tags
                const taglist = document.createElement("div");
                taglist.className = "taglist"
                card.appendChild(taglist);
                for (const item of element.tags) {
                    const tag = document.createElement("div");
                    tag.className = "tag taghidden";
                    tag.appendChild(document.createTextNode(item));
                    taglist.appendChild(tag);
                }

                // Description
                const desc = document.createElement("p");
                desc.className = "description";
                desc.appendChild(document.createTextNode(element.description));
                card.appendChild(desc);
            }

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    console.log(entry)
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    }
                    else {
                        entry.target.classList.remove('show');
                    }
                })
            })

            const hiddenElements = document.querySelectorAll('.hidden');
            hiddenElements.forEach((el) => observer.observe(el));
            console.log("Fade scroll script loaded, hidden elements: "
                + hiddenElements.length);

            slidetotheright();
        });
}
