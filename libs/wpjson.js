function wpjson(url) {
    this.url = url;
    this.METHOD_RECENT_POST = "get_recent_posts";
    this.METHOD_POSTS_LIST = "get_posts";
    this.SEARCH_POSTS = "get_search_results";
    this.configs = {
        count: 7
    };
    this.search = function(query, page, callback) {
        var resultat = null;
        var xhr = this.getXMLHttpRequest();
        xhr = new XMLHttpRequest();
        var urlToUse = this.url + "/api/" + this.SEARCH_POSTS + "?search=" + query + "&page=" + page + "&count=" + this.configs.count;
        xhr.open("GET", urlToUse, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 0)) {
                resultat = xhr.response;
                callback(JSON.parse(resultat));
            }
        };
        xhr.send(null);
    };

    this.fetchPosts = function(method, page, callback) {
        var resultat = null;
        var xhr = this.getXMLHttpRequest();
        xhr = new XMLHttpRequest();
        var urlToUse = this.url + "/api/" + method + "?page=" + page + "&count=" + this.configs.count;
        xhr.open("GET", urlToUse, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 0)) {
                resultat = xhr.response;
                callback(JSON.parse(resultat));
            }
        };
        xhr.send(null);
    };
    this.getXMLHttpRequest = function() {
        var xhr = null;
        if (window.XMLHttpRequest || window.ActiveXObject) {
            if (window.ActiveXObject) {
                try {
                    xhr = new ActiveXObject("Msxml2.XMLHTTP");
                } catch (e) {
                    xhr = new ActiveXObject("Microsoft.XMLHTTP");
                }
            } else {
                xhr = new XMLHttpRequest();
            }
        } else {
            throw "your client doesn't support xmlHttpRequest";
        }
        return xhr;
    };
}