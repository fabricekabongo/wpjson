# wpjson
a library that help to fetch wordpress blog that has [JSON API plugin](https://wordpress.org/plugins/json-api/) installed on it.

## installation

*will be soon added to bower, see [issue 13](https://github.com/fabricekabongo/wpjson/issues/13)*

1. download the zip file
2. uncompressed it 
3. move the libs folder on you project
4. enjoy!

## usage
```
<div id="content">Here will be the raw json output </div>
<script type="text/javascript" src="PATH_TO_FOLDER/libs/wpjson.js"></script>
<script type="text/javascript">
  wpj = new wpjson("http://YOUR_WORDPRESS_SITE");//create a wpjson object
  //request recent articles (just an example)
  wpj.fetchPosts(wpj.METHOD_RECENT_POST, 1, function(result) {
    content = document.querySelector("#content");
    content.innerHTML = "<strong>" + result.status + "</strong>";
  });
</script>
```

### available method

* **METHOD_RECENT_POST** : "get_recent_posts" method of JSON API
* **METHOD_POSTS_LIST** : "get_posts" method of JSON API
* **SEARCH_POSTS** : "get_search_results" method of JSON API

there are new method coming, for more information watch the evolution of [the milestone](https://github.com/fabricekabongo/wpjson/milestones/Add%20all%20the%20method%20available%20on%20the%20core%20controller%20of%20JSON%20API)
## license
This project is under the apache license.

Find the [license here](https://github.com/fabricekabongo/wpjson/blob/master/LICENSE.MD)


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/fabricekabongo/wpjson/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

