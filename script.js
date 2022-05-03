
const qiita_links = document.getElementById("qiita-links");

const url = 'https://qiita.com/api/v2/users/_SNQ/items';
fetch(url)
.then(function (data) {
    return data.json()
})
.then(function (json) {
    for (const item of json) {
        var createTag = ""
        var color = ""
        for (const tag of item["tags"]) {
            createTag += tag["name"] + ", "
        }
        if (item["likes_count"] > 30) {
            color = "#ff0000"
        } else if (item["likes_count"] > 25) {
            color = "#ff1900"
        } else if (item["likes_count"] > 20) {
            color = "#fe3300"
        } else if (item["likes_count"] > 15) {
            color = "#ff4b00"
        } else if (item["likes_count"] > 10) {
            color = "#ff6600"
        } else if (item["likes_count"] > 8) {
            color = "#ff7f02"
        } else if (item["likes_count"] > 6) {
            color = "#ff9903"
        } else if (item["likes_count"] > 4) {
            color = "#ffb202"
        } else if (item["likes_count"] > 2) {
            color = "#fecc00"
        } else if (item["likes_count"] >= 0) {
            color = "#ffe501"
        } else {
            color = "#ffe501"
        }
        console.log(json["likes_count"])
        var link = '<a href="' + item["url"] + '" target="_blank_" rel="noopener noreferrer"><li><div style="display: flex;"><canvas id="rectangle" width="50px" height="50px" style="background-color: ' + color + '; border-radius: 10px;"></canvas><div style="display: block;"><span class="qiita-title">' + item["title"] + '</span><br><span class="qiita-create">' + createTag.slice(0,-2); + '</span></div></div></li></a>'
        // 追加
        qiita_links.insertAdjacentHTML('beforeend',link);
    }
});