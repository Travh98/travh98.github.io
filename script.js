function addItem() {
    const type = document.createElement("p");
    type.appendChild(document.createTextNode("test"));
    document.getElementById("card1").appendChild(type);
    console.log("button pressed");

    // console.log(data);

    fetch('./projects.json')
        .then((response) => response.json())
        .then((json) => console.log(json));


    console.log(json.getElementById("name"));

}

parseJson();

function parseJson()
{
    fetch('./projects.json')
        .then(function(resp) {
            return resp.json();
        })
        .then(function(data) {
            for(const element of data.projects)
            {
                // Create card and put into card list
                const card = document.createElement("div");
                card.className = "card";
                document.getElementById("cardlist1").appendChild(card);

                // Parse and populate name, date, info
                const header = document.createElement("div");
                header.className = "split";
                card.appendChild(header);

                const name = document.createElement('a');
                name.className = "left";
                name.href = "http://" + element.link;
                name.appendChild(document.createTextNode(element.name));                
                header.appendChild(name);

                const date = document.createElement("div");
                date.className = "right";
                date.appendChild(document.createTextNode(element.date));
                header.appendChild(date);

                // List of tags
                const taglist = document.createElement("ul");
                taglist.className = "taglist"
                card.appendChild(taglist);
                for(const item of element.tags)
                {
                    const tag = document.createElement("li");
                    tag.className = "tag";
                    tag.appendChild(document.createTextNode(item));
                    taglist.appendChild(tag);
                }

                // Description
                const desc = document.createElement("p");
                desc.className = "description";
                desc.appendChild(document.createTextNode(element.description));
                card.appendChild(desc);
            }
        });
}
