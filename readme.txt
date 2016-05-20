<!--\
    这是一个简单博客的demo，在WebMatrix环境下开发，内含数据库、采用ASP.Net技术，用C#编写
    1. 登录注销机制，逻辑如下：
        1）创建一个名为“Blog”的数据库；并创建表“Users”，内含 ID，username，password字段，其中ID是标识；初始化一个用户名及密码（admin，123）
        2）创建一个表单以输入用户名、密码；
        3）提交后，request用户输入的用户名和密码，检验是否为空，二者皆不为空则打开数据库“Blog”；
        4）从表"Users"中寻找是否存在该用户名和密码：
            a. 存在：Session["username"] = username, 继续编写注销机制
            b. 不存在：<p>Incorrect username or password</p>
        5)注销：先确定Session["username"]不为空，创建一个链接(点击)<a href="?logout=true">Log out</a>
        6)if(Request["logout"] == "true"){ 把username从Session中删除，页面再次初始化}
    2. 
-->
<!--2016.5.17
    登录和注册页面需要分开， 不可以同时post-->