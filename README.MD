这里使用的例子其实是[istanbul-middleware](https://github.com/gotwarlost/istanbul-middleware) test目录的例子，只是我将其中关于instalbul-middleware库的引用都去掉了，增加了nyc的引用

1. ```npm install``` 安装依赖库
2. ```npm run instrument``` 对服务的代码进行插桩，生成一个插桩后的目录 server-instrument
3. ```node index``` 启动服务， 这个时候服务引用的文件其实是server-instrunment的文件了，因为我在index.js里面将内容做了指定了。
4. 直接访问 http://localhost:8888 即可看到服务网页的内容，其实就是开始我们的测试了。
5. 再访问  http://localhost:8888/coverageData 就可以得到覆盖率数据
6. 我们先麻烦点，将对应的数据放置到根目录的 .nyc_output的a.json 文件中，这里的文件名称可以随意。
7. ```nyc run report``` 就会看到在coverage目录下生成了一个覆盖率的报告了。