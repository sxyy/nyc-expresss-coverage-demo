function cov_1ht9n51b0s(){var path="/Users/sai/projects/nyc-expresss-coverage-demo/server/index.js";var hash="8f5fec521b915e9c92d3dc53833f0d7ff185eb04";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"/Users/sai/projects/nyc-expresss-coverage-demo/server/index.js",statementMap:{"0":{start:{line:2,column:11},end:{line:2,column:26}},"1":{start:{line:3,column:14},end:{line:3,column:32}},"2":{start:{line:4,column:10},end:{line:4,column:24}},"3":{start:{line:5,column:11},end:{line:5,column:28}},"4":{start:{line:6,column:16},end:{line:6,column:55}},"5":{start:{line:7,column:17},end:{line:7,column:39}},"6":{start:{line:11,column:17},end:{line:11,column:41}},"7":{start:{line:12,column:18},end:{line:12,column:30}},"8":{start:{line:13,column:4},end:{line:15,column:5}},"9":{start:{line:14,column:8},end:{line:14,column:71}},"10":{start:{line:14,column:48},end:{line:14,column:67}},"11":{start:{line:16,column:4},end:{line:16,column:46}},"12":{start:{line:20,column:13},end:{line:20,column:26}},"13":{start:{line:21,column:18},end:{line:21,column:30}},"14":{start:{line:23,column:4},end:{line:23,column:67}},"15":{start:{line:23,column:44},end:{line:23,column:63}},"16":{start:{line:24,column:4},end:{line:28,column:5}},"17":{start:{line:25,column:8},end:{line:25,column:22}},"18":{start:{line:27,column:8},end:{line:27,column:53}},"19":{start:{line:32,column:4},end:{line:32,column:33}},"20":{start:{line:35,column:0},end:{line:50,column:2}},"21":{start:{line:37,column:18},end:{line:37,column:27}},"22":{start:{line:38,column:8},end:{line:38,column:59}},"23":{start:{line:39,column:8},end:{line:39,column:35}},"24":{start:{line:41,column:8},end:{line:41,column:38}},"25":{start:{line:42,column:8},end:{line:42,column:52}},"26":{start:{line:43,column:8},end:{line:43,column:46}},"27":{start:{line:45,column:8},end:{line:45,column:27}},"28":{start:{line:46,column:8},end:{line:46,column:40}},"29":{start:{line:47,column:8},end:{line:47,column:46}},"30":{start:{line:48,column:8},end:{line:48,column:25}}},fnMap:{"0":{name:"list",decl:{start:{line:10,column:9},end:{line:10,column:13}},loc:{start:{line:10,column:30},end:{line:17,column:1}},line:10},"1":{name:"(anonymous_1)",decl:{start:{line:14,column:33},end:{line:14,column:34}},loc:{start:{line:14,column:46},end:{line:14,column:69}},line:14},"2":{name:"detail",decl:{start:{line:19,column:9},end:{line:19,column:15}},loc:{start:{line:19,column:32},end:{line:29,column:1}},line:19},"3":{name:"(anonymous_3)",decl:{start:{line:23,column:29},end:{line:23,column:30}},loc:{start:{line:23,column:42},end:{line:23,column:65}},line:23},"4":{name:"coverageData",decl:{start:{line:31,column:9},end:{line:31,column:21}},loc:{start:{line:31,column:38},end:{line:33,column:1}},line:31},"5":{name:"(anonymous_5)",decl:{start:{line:36,column:11},end:{line:36,column:12}},loc:{start:{line:36,column:38},end:{line:49,column:5}},line:36}},branchMap:{"0":{loc:{start:{line:13,column:4},end:{line:15,column:5}},type:"if",locations:[{start:{line:13,column:4},end:{line:15,column:5}},{start:{line:13,column:4},end:{line:15,column:5}}],line:13},"1":{loc:{start:{line:24,column:4},end:{line:28,column:5}},type:"if",locations:[{start:{line:24,column:4},end:{line:28,column:5}},{start:{line:24,column:4},end:{line:28,column:5}}],line:24}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0},b:{"0":[0,0],"1":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"8f5fec521b915e9c92d3dc53833f0d7ff185eb04"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1ht9n51b0s=function(){return actualCoverage;};}return actualCoverage;}cov_1ht9n51b0s();/*jslint nomen: true */var path=(cov_1ht9n51b0s().s[0]++,require('path')),express=(cov_1ht9n51b0s().s[1]++,require('express')),url=(cov_1ht9n51b0s().s[2]++,require('url')),data=(cov_1ht9n51b0s().s[3]++,require('./data')),publicDir=(cov_1ht9n51b0s().s[4]++,path.resolve(__dirname,'..','public')),bodyParser=(cov_1ht9n51b0s().s[5]++,require('body-parser'));function list(req,res,next){cov_1ht9n51b0s().f[0]++;var parsed=(cov_1ht9n51b0s().s[6]++,url.parse(req.url,true)),authors=(cov_1ht9n51b0s().s[7]++,data.authors);cov_1ht9n51b0s().s[8]++;if(parsed.query.alive==='1'){cov_1ht9n51b0s().b[0][0]++;cov_1ht9n51b0s().s[9]++;authors=authors.filter(function(a){cov_1ht9n51b0s().f[1]++;cov_1ht9n51b0s().s[10]++;return!a.deceased;});}else{cov_1ht9n51b0s().b[0][1]++;}cov_1ht9n51b0s().s[11]++;res.render('index',{authors:authors});}function detail(req,res,next){cov_1ht9n51b0s().f[2]++;var id=(cov_1ht9n51b0s().s[12]++,req.params.id),authors=(cov_1ht9n51b0s().s[13]++,data.authors);cov_1ht9n51b0s().s[14]++;authors=authors.filter(function(a){cov_1ht9n51b0s().f[3]++;cov_1ht9n51b0s().s[15]++;return a.id===id;});cov_1ht9n51b0s().s[16]++;if(authors.length===0){cov_1ht9n51b0s().b[1][0]++;cov_1ht9n51b0s().s[17]++;res.send(404);}else{cov_1ht9n51b0s().b[1][1]++;cov_1ht9n51b0s().s[18]++;res.render('detail',{author:authors[0]});}}function coverageData(req,res,next){cov_1ht9n51b0s().f[4]++;cov_1ht9n51b0s().s[19]++;res.json(global.__coverage__);}cov_1ht9n51b0s().s[20]++;module.exports={start:function(port,needCover){cov_1ht9n51b0s().f[5]++;var app=(cov_1ht9n51b0s().s[21]++,express());cov_1ht9n51b0s().s[22]++;app.use(bodyParser.urlencoded({extended:true}));cov_1ht9n51b0s().s[23]++;app.use(bodyParser.json());cov_1ht9n51b0s().s[24]++;app.set('view engine','hbs');cov_1ht9n51b0s().s[25]++;app.engine('hbs',require('hbs').__express);cov_1ht9n51b0s().s[26]++;app.use(express['static'](publicDir));cov_1ht9n51b0s().s[27]++;app.get('/',list);cov_1ht9n51b0s().s[28]++;app.get('/authors/:id',detail);cov_1ht9n51b0s().s[29]++;app.get('/coverageData',coverageData);cov_1ht9n51b0s().s[30]++;app.listen(port);}};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInBhdGgiLCJyZXF1aXJlIiwiZXhwcmVzcyIsInVybCIsImRhdGEiLCJwdWJsaWNEaXIiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiYm9keVBhcnNlciIsImxpc3QiLCJyZXEiLCJyZXMiLCJuZXh0IiwicGFyc2VkIiwicGFyc2UiLCJhdXRob3JzIiwicXVlcnkiLCJhbGl2ZSIsImZpbHRlciIsImEiLCJkZWNlYXNlZCIsInJlbmRlciIsImRldGFpbCIsImlkIiwicGFyYW1zIiwibGVuZ3RoIiwic2VuZCIsImF1dGhvciIsImNvdmVyYWdlRGF0YSIsImpzb24iLCJnbG9iYWwiLCJfX2NvdmVyYWdlX18iLCJtb2R1bGUiLCJleHBvcnRzIiwic3RhcnQiLCJwb3J0IiwibmVlZENvdmVyIiwiYXBwIiwidXNlIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwic2V0IiwiZW5naW5lIiwiX19leHByZXNzIiwiZ2V0IiwibGlzdGVuIl0sIm1hcHBpbmdzIjoicXdIQWVZOzJGQWZaLHVCQUNBLEdBQUlBLENBQUFBLElBQUksMEJBQUdDLE9BQU8sQ0FBQyxNQUFELENBQVYsQ0FBUixDQUNJQyxPQUFPLDBCQUFHRCxPQUFPLENBQUMsU0FBRCxDQUFWLENBRFgsQ0FFSUUsR0FBRywwQkFBR0YsT0FBTyxDQUFDLEtBQUQsQ0FBVixDQUZQLENBR0lHLElBQUksMEJBQUdILE9BQU8sQ0FBQyxRQUFELENBQVYsQ0FIUixDQUlJSSxTQUFTLDBCQUFHTCxJQUFJLENBQUNNLE9BQUwsQ0FBYUMsU0FBYixDQUF3QixJQUF4QixDQUE4QixRQUE5QixDQUFILENBSmIsQ0FLSUMsVUFBVSwwQkFBR1AsT0FBTyxDQUFDLGFBQUQsQ0FBVixDQUxkLENBUUEsUUFBU1EsQ0FBQUEsSUFBVCxDQUFjQyxHQUFkLENBQW1CQyxHQUFuQixDQUF3QkMsSUFBeEIsQ0FBOEIseUJBQzFCLEdBQUlDLENBQUFBLE1BQU0sMEJBQUdWLEdBQUcsQ0FBQ1csS0FBSixDQUFVSixHQUFHLENBQUNQLEdBQWQsQ0FBbUIsSUFBbkIsQ0FBSCxDQUFWLENBQ0lZLE9BQU8sMEJBQUdYLElBQUksQ0FBQ1csT0FBUixDQURYLENBRDBCLHdCQUcxQixHQUFJRixNQUFNLENBQUNHLEtBQVAsQ0FBYUMsS0FBYixHQUF1QixHQUEzQixDQUFnQyxvREFDNUJGLE9BQU8sQ0FBR0EsT0FBTyxDQUFDRyxNQUFSLENBQWUsU0FBVUMsQ0FBVixDQUFhLGtEQUFFLE1BQU8sQ0FBQ0EsQ0FBQyxDQUFDQyxRQUFWLENBQXFCLENBQW5ELENBQVYsQ0FDSCxDQUZELGlDQUgwQix5QkFNMUJULEdBQUcsQ0FBQ1UsTUFBSixDQUFXLE9BQVgsQ0FBb0IsQ0FBRU4sT0FBTyxDQUFFQSxPQUFYLENBQXBCLEVBQ0gsQ0FFRCxRQUFTTyxDQUFBQSxNQUFULENBQWdCWixHQUFoQixDQUFxQkMsR0FBckIsQ0FBMEJDLElBQTFCLENBQWdDLHlCQUM1QixHQUFJVyxDQUFBQSxFQUFFLDJCQUFHYixHQUFHLENBQUNjLE1BQUosQ0FBV0QsRUFBZCxDQUFOLENBQ0lSLE9BQU8sMkJBQUdYLElBQUksQ0FBQ1csT0FBUixDQURYLENBRDRCLHlCQUk1QkEsT0FBTyxDQUFHQSxPQUFPLENBQUNHLE1BQVIsQ0FBZSxTQUFVQyxDQUFWLENBQWEsa0RBQUUsTUFBT0EsQ0FBQUEsQ0FBQyxDQUFDSSxFQUFGLEdBQVNBLEVBQWhCLENBQXFCLENBQW5ELENBQVYsQ0FKNEIseUJBSzVCLEdBQUlSLE9BQU8sQ0FBQ1UsTUFBUixHQUFtQixDQUF2QixDQUEwQixxREFDdEJkLEdBQUcsQ0FBQ2UsSUFBSixDQUFTLEdBQVQsRUFDSCxDQUZELElBRU8scURBQ0hmLEdBQUcsQ0FBQ1UsTUFBSixDQUFXLFFBQVgsQ0FBcUIsQ0FBRU0sTUFBTSxDQUFFWixPQUFPLENBQUMsQ0FBRCxDQUFqQixDQUFyQixFQUNILENBQ0osQ0FFRCxRQUFTYSxDQUFBQSxZQUFULENBQXNCbEIsR0FBdEIsQ0FBMkJDLEdBQTNCLENBQWdDQyxJQUFoQyxDQUFzQyxrREFDbENELEdBQUcsQ0FBQ2tCLElBQUosQ0FBU0MsTUFBTSxDQUFDQyxZQUFoQixFQUNILEMseUJBRURDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFpQixDQUNiQyxLQUFLLENBQUUsU0FBVUMsSUFBVixDQUFnQkMsU0FBaEIsQ0FBMkIseUJBQzlCLEdBQUlDLENBQUFBLEdBQUcsMkJBQUduQyxPQUFPLEVBQVYsQ0FBUCxDQUQ4Qix5QkFFOUJtQyxHQUFHLENBQUNDLEdBQUosQ0FBUTlCLFVBQVUsQ0FBQytCLFVBQVgsQ0FBc0IsQ0FBRUMsUUFBUSxDQUFFLElBQVosQ0FBdEIsQ0FBUixFQUY4Qix5QkFHOUJILEdBQUcsQ0FBQ0MsR0FBSixDQUFROUIsVUFBVSxDQUFDcUIsSUFBWCxFQUFSLEVBSDhCLHlCQUs5QlEsR0FBRyxDQUFDSSxHQUFKLENBQVEsYUFBUixDQUF1QixLQUF2QixFQUw4Qix5QkFNOUJKLEdBQUcsQ0FBQ0ssTUFBSixDQUFXLEtBQVgsQ0FBa0J6QyxPQUFPLENBQUMsS0FBRCxDQUFQLENBQWUwQyxTQUFqQyxFQU44Qix5QkFPOUJOLEdBQUcsQ0FBQ0MsR0FBSixDQUFRcEMsT0FBTyxDQUFDLFFBQUQsQ0FBUCxDQUFrQkcsU0FBbEIsQ0FBUixFQVA4Qix5QkFTOUJnQyxHQUFHLENBQUNPLEdBQUosQ0FBUSxHQUFSLENBQWFuQyxJQUFiLEVBVDhCLHlCQVU5QjRCLEdBQUcsQ0FBQ08sR0FBSixDQUFRLGNBQVIsQ0FBd0J0QixNQUF4QixFQVY4Qix5QkFXOUJlLEdBQUcsQ0FBQ08sR0FBSixDQUFRLGVBQVIsQ0FBeUJoQixZQUF6QixFQVg4Qix5QkFZOUJTLEdBQUcsQ0FBQ1EsTUFBSixDQUFXVixJQUFYLEVBQ0gsQ0FkWSxDQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIi8qanNsaW50IG5vbWVuOiB0cnVlICovXG52YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKSxcbiAgICBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpLFxuICAgIHVybCA9IHJlcXVpcmUoJ3VybCcpLFxuICAgIGRhdGEgPSByZXF1aXJlKCcuL2RhdGEnKSxcbiAgICBwdWJsaWNEaXIgPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4nLCAncHVibGljJyksXG4gICAgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJyk7XG5cblxuZnVuY3Rpb24gbGlzdChyZXEsIHJlcywgbmV4dCkge1xuICAgIHZhciBwYXJzZWQgPSB1cmwucGFyc2UocmVxLnVybCwgdHJ1ZSksXG4gICAgICAgIGF1dGhvcnMgPSBkYXRhLmF1dGhvcnM7XG4gICAgaWYgKHBhcnNlZC5xdWVyeS5hbGl2ZSA9PT0gJzEnKSB7XG4gICAgICAgIGF1dGhvcnMgPSBhdXRob3JzLmZpbHRlcihmdW5jdGlvbiAoYSkgeyByZXR1cm4gIWEuZGVjZWFzZWQ7IH0pO1xuICAgIH1cbiAgICByZXMucmVuZGVyKCdpbmRleCcsIHsgYXV0aG9yczogYXV0aG9ycyB9KTtcbn1cblxuZnVuY3Rpb24gZGV0YWlsKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgdmFyIGlkID0gcmVxLnBhcmFtcy5pZCxcbiAgICAgICAgYXV0aG9ycyA9IGRhdGEuYXV0aG9ycztcblxuICAgIGF1dGhvcnMgPSBhdXRob3JzLmZpbHRlcihmdW5jdGlvbiAoYSkgeyByZXR1cm4gYS5pZCA9PT0gaWQ7IH0pO1xuICAgIGlmIChhdXRob3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXMuc2VuZCg0MDQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5yZW5kZXIoJ2RldGFpbCcsIHsgYXV0aG9yOiBhdXRob3JzWzBdIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY292ZXJhZ2VEYXRhKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgcmVzLmpzb24oZ2xvYmFsLl9fY292ZXJhZ2VfXylcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgc3RhcnQ6IGZ1bmN0aW9uIChwb3J0LCBuZWVkQ292ZXIpIHtcbiAgICAgICAgdmFyIGFwcCA9IGV4cHJlc3MoKTtcbiAgICAgICAgYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG4gICAgICAgIGFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuXG4gICAgICAgIGFwcC5zZXQoJ3ZpZXcgZW5naW5lJywgJ2hicycpO1xuICAgICAgICBhcHAuZW5naW5lKCdoYnMnLCByZXF1aXJlKCdoYnMnKS5fX2V4cHJlc3MpO1xuICAgICAgICBhcHAudXNlKGV4cHJlc3NbJ3N0YXRpYyddKHB1YmxpY0RpcikpO1xuXG4gICAgICAgIGFwcC5nZXQoJy8nLCBsaXN0KTtcbiAgICAgICAgYXBwLmdldCgnL2F1dGhvcnMvOmlkJywgZGV0YWlsKTtcbiAgICAgICAgYXBwLmdldCgnL2NvdmVyYWdlRGF0YScsIGNvdmVyYWdlRGF0YSlcbiAgICAgICAgYXBwLmxpc3Rlbihwb3J0KTtcbiAgICB9XG59O1xuXG4iXX0=