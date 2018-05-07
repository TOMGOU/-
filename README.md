# -
ajax use experience in work 

6pages include 8 ajax request

Steps Summary: 

    NO.1 fetch data

        $.ajax({
                type: "get",
                url: "//3.qq.com/zlkdatasys/data_zlk_bzlby.json?"+Math.random(),
                async:true,
                dataType: "jsonp",
                jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
                jsonpCallback:"callback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
                success: function(data){
                        ......
                }

        })

    NO.2 categorization

        for(var i = 0,len = bz_data.length;i < len;i++){
                        category = bz_data[i]["bzlx_ac"];
                        type = bz_data[i]["bzmc_66"];
                        num = bz_data[i]["bzid_7f"];
                        if(category == "步兵"){
                            data_arr[0][0].push(num)
                            data_arr[0][1].push(type)
                        }else if(category == "骑兵"){
                            data_arr[1][0].push(num)
                            data_arr[1][1].push(type)
                        }else if(category == "弓兵"){
                            data_arr[2][0].push(num)
                            data_arr[2][1].push(type)
                        }else{
                            data_arr[3][0].push(num)
                            data_arr[3][1].push(type)
                        }
                    }

    NO.3 generate DOM

        for( var j =0; j < 4; j++ ) {
                        var $li = $("<li class='intr_child on infantry'>\
                                            <ul class='infantry_box widt_box'>\
                                            </ul>\
                                            <ul class='aux_list'>\
                                                <li onclick='bzRender("+data_arr[j][0][0]+")' class='spr on'>"+ data_arr[j][1][0] +"</li>\
                                                <li onclick='bzRender("+data_arr[j][0][1]+")' class='spr'>"+ data_arr[j][1][1] +"</li>\
                                                <li onclick='bzRender("+data_arr[j][0][2]+")' class='spr'>"+ data_arr[j][1][2] +"</li>\
                                                <li onclick='bzRender("+data_arr[j][0][3]+")' class='spr'>"+ data_arr[j][1][3] +"</li>\
                                                <li onclick='bzRender("+data_arr[j][0][4]+")' class='spr'>"+ data_arr[j][1][4] +"</li>\
                                            </ul>\
                                        </li>");
                        ele_arr[j].push($li);
                    }

    NO.4 append into page to rend html

    var bzRender = function(num){
            $.ajax({
                type: "get",
                url: "//3.qq.com/zlkdatasys/bzdata/"+num+".json?"+Math.random(),
                async:true,
                dataType: "jsonp",
                jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
                jsonpCallback:"herodetailcallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
                success: function(data){
                    // console.log(data)
                    var title = data["bzmc_66"],
                        des = data["bzjs_af"],
                        skill = data["bzjn_df"],
                        pic_src = data["bzpf_c8"][0]["bztp_02"],
                        str = '';
                    for(var i = 0,len = skill.length;i < len;i++){
                        str += "<li><img src='"+skill[i]["bzjnicon_01"]+"' /><span>"+skill[i]["bzjnbt_e8"]+" <i>"+skill[i]["bzjnms_05"]+"</i></span></li>"
                    }
                    var $li = $('<li class=\'pos_obx on infantry_one\'>\n' +
                        '           <h4>'+title+'</h4>\n' +
                        '           <p>'+des+'</p>\n' +
                        '           <img src=\''+pic_src+'\' alt=\'士兵图\'/>\n' +
                        '           <ul>\n' + str+
                        '           </ul>\n' +
                        '          </li>')
                    $('.infantry_box ').html($li);
                }

            });
        };



