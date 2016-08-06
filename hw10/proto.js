var now = new Date();

Date.prototype.format = function(value){
    
    if(typeof value === 'string' && (value.length == 5 || value.length == 11) && !( /[qwertuoplkjgfzxcvbn]/i.test(value) ) ){
        var now = new Date(),
            month = +now.getMonth() + 1;
            dd = now.getDate() > 9  ? now.getDate() : '0' + now.getDate(),
            mm = month > 9 ? month : '0' + month,
            yy = now.getFullYear() % 100,
            yyyy = now.getFullYear(),
            th = now.getHours() > 9 ? now.getHours() : '0' + now.getHours(),
            tm = now.getMinutes() > 9 ? now.getMinutes() : '0' + now.getMinutes(),
            ts = now.getSeconds() > 9 ? now.getSeconds() : '0' + now.getSeconds();

        var result = value;
        result = result.replace(/d/,dd);
        result = result.replace(/Y/,yyyy);
        result = result.replace(/y/,yy);
        result = result.replace(/m/,mm);
        result = result.replace(/H/,th);
        result = result.replace(/i/,tm);
        result = result.replace(/s/,ts);

        return result; 
    }else{
        return "ErroR!!! It's not format! Use 'd.m.y' or 'd.m.Y' or 'd.m.y H:i:s' or 'd.m.Y H:i:s'"
    }
}



// console.log( today.format('H:i:s') );
// console.log( today.format('d.m.Y') );
// console.log( today.format('d.m.y') );







function Site(name, content, url, closed, content){
  this.name = name || '';
  this.content = {};
  this.url = url || '';
  this.closed = closed || false;
}

Site.prototype.getContent = function (type){
		if(this.closed){
			alert("Сайт на реконструкции")
		}
		else{
        return this.content.type || this.content;
    	}
	}

Site.prototype.setContent = function (data){
	this.content = data;
	}

function Content(){
	this.articles = [];
	this.news = [];
}

Content.prototype = Object.create(Site.prototype);
Content.prototype.constructor = Content;

Content.prototype.addArticle = function(art){
    this.articles.push(art);
}
Content.prototype.deleteArticle = function(art){
    this.articles.splice(art,1);
}
Content.prototype.addNews = function(news){
    this.news.push(news);
}
Content.prototype.deleteNews = function(news){
    this.news.splice(news,1);
}

function Page(data){
	this.title = data.title || '';
	this.description = data.description || '';
	this.date = data.date || Date.prototype.format('H:i:s');
}

Page.prototype = Object.create(Content.prototype);
Page.prototype.constructor = Page;

Page.prototype.update = function (){
	for(var key in obj){
        key === 'title' ? this.tile = object.title : key === 'description' ? this.description = object.description : this.date = object.date;
    }
};


function Article(object){
	Page.apply(this, arguments);
	this.author = object.autor || 'admin';
}

Article.prototype = Object.create(Page.prototype);
Article.prototype.constructor = Article;

function News(object){
	Page.apply(this,arguments);
}

News.prototype = Object.create(Page.prototype);
News.prototype.constructor = News;



var content = new Content();

content.addArticle(new Article({
 title: 'Hello, Lorem',
 description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste veniam hic qui. Cumque odit quasi mollitia nostrum eveniet, laborum illum!',
 author: 'user100500'
}));

content.addNews(new News({
 title: 'Something somewhere',
 description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, fugiat.'
}));

var site = new Site({
 name: 'My first site',
 url: 'http://my-first-site.com'
});
site.setContent(content);
site.getContent('articles'); // выводит массив статей
