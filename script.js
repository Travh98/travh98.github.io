// import data from './projects.json' assert { type: 'JSON' };
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
                const name = document.createElement("h2");
                name.appendChild(document.createTextNode(element.name));

                const date = document.createElement("h2");
                date.appendChild(document.createTextNode(element.date));

                document.getElementById("card1").appendChild(name);
                document.getElementById("card1").appendChild(date);

                for(const item of element.tags)
                {
                    const tag = document.createElement("li");
                    tag.appendChild(document.createTextNode(item));
                    tag.className = "tagitem";
                    document.getElementById("card1").appendChild(tag);
                }
            }
        });
    
    // var jsonObj = response.json.getElementById("projects");

    // console.log(jsonObj);

    // var jsonObj = json.getElementById("projects");
    // var jsonArray = Object.keys(jsonObj);
    
    // for(var i = 0; i < jsonArray.length; ++i)
    // {
    //     console.log(jsonArray[i]);
    // }

    // createProjectCard();
    // function createProjectCard()
    // {
    
    // }
}
