s(function() {
    var data = [
        {
            id: 1,
            title: 'Best Friend',
            body: 'You are my best friend; you belong in my heart. We go through ups and downs, but still nothing can tear us apart.I know you as a sister, and I will always care.Love, respect, and trust are the things we share.I know you as a person; I especially know you as a friend. Our friendship is something that will never end. Right now, this second, this minute, this day, Our sisterhood is here, is here to stay. My friendship with you is special and true. When we are together, we stick like glue. When I am in the darkness that needs some light, When you are by my side, I know things are all right.Our friendship is so strong; it breaks down bars. Our friendship is also bright, like the sun and the stars. If we were in a competition for friendships, we would get a gold, Because responsibility and cleverness are the keys we hold.I met you as a stranger, took you as a friend.I hope our long friendship will never end.Our friendship is like a magnet; it pulls us together,Because no matter where we are, our friendship will last forever!',
            author: 'Mizscorpio'
        },
        {
            id: 2,
            title: 'Snowball',
            body:  'I made myself a snowball As perfect as could be. I thought Id keep it as a pet And let it sleep with me. I made it some pajamas And a pillow for its head. Then last night it ran away, But first it wet the bed.',
            author: 'Shel Silverstein'
        },
        {
            id: 3,
            title: 'Missing Summer',
            body: 'The grass so green, the sun so bright. Life seems a dream, no worries in sight.Tans and tank tops, laughter and bliss. Each moment passes without even a miss. Friends and cookouts, memories and laughs. Good times to remember, but how long will it last? The grass soon fades, leaves begin to fall. School replaces sleepovers. Oh, I will miss it all.',
            author: 'Destinee'
        },
        {
            id: 4,
            title: 'What I Love About You',
            body: 'The sparkle in your eye, The warmth of your skin, Your breath on my neck That shakes me within. The touch of your hand, The smell of your hair, The naughtiness in your smile, That strength in your stare. Your kiss on my lips, Your body near mine, The stroke of your touch, Makes everything feel fine. The compassion in your touch, The power in your face, The beating of your heart, That we may never end our embrace. The beauty of your kiss, And that magic in your touch. It is for all these reasons and more Why I love you so much...',
            author: 'Nidhi Kaul'
        },
        {
            id: 5,
            title: 'Let Go',
            body: 'What do I do, When I am still in love with you? You walked away, Cause you did not want to stay. You broke my heart, you tore me apart. Every day I wait for you, Telling myself our love was true. But when you do not show, more tears start to flow. That is when I know I have to let go.',
            author: 'Shelby T. Parsons'
        }



    ];
})

var $nav = $('#nav-container');
var $intro = $('#intro');
var $posts = $('#post-container');

function initPosts() {
    for (let i = 0; i < data.length; i++) {
        //Create elements
        var postId = 'post-' + data[i].id,
        $post = $('<section class="post"></section>'),
        $title = $('<h2 class="title"></h2>'),
        $body = $('<blockquote></blockqoute>'),
        $author = $('<span class="author"></span'),
        $navItem = $('<li></li>');

        // Add post data
        $title.text(data[i].title);
        $body.text(data[i].body);
        $author.text(data[i].author);

        // Add nav item data
        $navItem.attr('id', data[i].id);
        $navItem.text(data[i].title);

        // Combine post elements
        $post.attr('id', postId);
        $post.append($title);
        $post.append($body);
        $post.append($author);

        // Wire up nav item click event handler
        $navItem.on('click', function() {
            var id = $(this).attr('id');
            $posts.children().hide();
            $posts.find('#post-' + id).fadeIn();
        });

        // Hide all posts and show intro
        $posts.children('.post').hide();
        $intro.fadeIn(1000);
    }

    initPosts();
}