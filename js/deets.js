'use strict'

var images = {
	one: {
		src: 'http://placehold.it/150x150',
		cssClass: 'right-brain-img'
	},
	two: {
		src: 'http://placehold.it/306x150',
		cssClass: 'right-brain-img'
	},
	display: function() {
		iterateImgs(this.one, 2);
		iterateImgs(this.one, 2);
		// iterateImgs(this.two, 1);
		iterateImgs(this.one, 2);
	}
}

var person = {
	"firstname": 'robb',
	"lastname": 'dempsey',
	"profilePic": './images/20150807_profile_sq.jpg',
	"dob": {
		date: '1973-03-17',
		text: 'St. Patrick\'s Day',
		link: 'http://en.wikipedia.org/wiki/Saint_Patrick%27s_Day'
	},
	"mbti": {
		text: 'INFJ',
		link: ''
	},
	"myai": {
		text: '5533',
		link: ''
	},
	"joy": {
		text: 'Brings me Joy',
		items: ['my dove', 'my kids', 'crossfit', 'beach', 'gardening', 'fly fishing']
	},
	"contacts": {
		"email": "robb.dempsey@gmail.com",
		"github": {
			"url": "https://github.com/robbdempsey",
			"user": "robbdempsey"
		},
		"twitter": {
			"url": "https://twitter.com/robbdempsey",
			"user": "robbdempsey"	
		},
		"linkedIn": {
			"url": "https://twitter.com/robbdempsey",
			"user": "robbdempsey"	
		},
		"location": "Huntsville, AL"
	},
	"intro": "I\'ve been sojourning along this trail looking for ways to make sense of it.  The images, quotes, and thoughts found here are view into some of the things that have inspired and sustained me along the way.",
	fullname: function() {
		return person.firstname + ' ' + person.lastname;
	},
	display: function() {
		var _img = HTMLimage.replace('%data%', this.profilePic);
		_img = _img.replace('%css%', 'profile-img');
		
		$('.avatar').append(_img);
		$('.header-title').append(HTMLfullName.replace("%data%", this.fullname()));

		$(".header-contacts").append(HTMLemail.replace("%data%", this.contacts.email));

		var item = HTMLgithub.replace("%url%", this.contacts.github.url);
		item = item.replace("%data%", this.contacts.github.user);
		$(".header-contacts").append(item);

		var item = HTMLtwitter.replace("%url%", this.contacts.twitter.url);
		item = item.replace("%data%", this.contacts.twitter.user);
		$(".header-contacts").append(item);
		
		$(".intro").append(this.intro);

		return;
	}
}

var nav = {
	"thoughts": "#",
	"quotes": "#",
	display: function() {
		var item = HTMLnav.replace("%data%", 'thoughts');
		item = item.replace("%css%", 'nav-text');
		$(".header-nav").append(item);

		var item = HTMLnav.replace("%data%", 'quotes');
		item = item.replace("%css%", 'nav-text');
		$(".header-nav").append(item);

	}
}


function ulItems(items) {
	var _items = '';

	for (var i=0; i < items.length; i++) {
		_items += HTMLleftbrainLI.replace('%data%', items[i]);
	}

	return _items;
}

function iterateImgs(img, count) {
	var i = 0;
	while (i < count) {
		var _img = HTMLimage.replace('%data%', img.src);
		_img = _img.replace('%css%', img.cssClass);

		$('.right-brain').append(_img);
		i++;
	}

	return;
}



person.display();
images.display();
nav.display();