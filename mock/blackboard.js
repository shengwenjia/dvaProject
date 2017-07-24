export default {
    /**
     * 查询通告类型类别
     */
    "GET /api/mnProclamation/findTypes": function(req, res) {
        setTimeout(function() {
            res.json({
                "code": "success",
                "msg": "",
                "data": [
                    {
                        "name": "网络故障",
                        "number": "022401"
                    },
                    {
                        "name": "机房割接",
                        "number": "022402"
                    }
                ]
            });
        }, 500);
    },
    /**
    * 查询通告列表
    */
    "POST /api/mnProclamation/list": function(req, res) {
        setTimeout(function() {
            res.json({
                "code": "success",
                "msg": "",
                "data": [
                    {
                        "content": "23123",
                        "id": "3fede10a0bb547bf8da7b585e40672cd",
                        "modifydate": "2017-06-28 10:19:16",
                        "title": "123",
                        "createuser": null,
                        "source": "123",
                        "zhaiyao": "231",
                        "createdate": "2017-06-28 10:19:11",
                        "ispublication": 1,
                        "type": "网络故障",
                        "version": 1
                    },
                    {
                        "content": "呼和浩特有线割接 割接时间：2017.6.13（本周二）凌晨0：00-0：30",
                        "id": "793262709af743b2a8e6929b3ad82752",
                        "modifydate": "2017-06-27 12:34:39",
                        "title": "呼和浩特有线割接",
                        "createuser": null,
                        "source": "北斗系统",
                        "zhaiyao": "呼和浩特有线割接 割接时间：2017.6.13（本周二）",
                        "createdate": "2017-06-27 12:29:06",
                        "ispublication": 1,
                        "type": "机房割接",
                        "version": 4
                    },
                    {
                        "content": "beijing6_dxt 割接静态切换源站",
                        "id": "8428c7aed61f4b29aa7bb8ceb37e5d33",
                        "modifydate": "2017-06-27 12:34:59",
                        "title": "beijing6_dxt 割接静态切换源站",
                        "createuser": null,
                        "source": "奇目系统",
                        "zhaiyao": "beijing6_dxt 割接静态切换源站",
                        "createdate": "2017-06-27 12:17:24",
                        "ispublication": 1,
                        "type": "网络故障",
                        "version": 3
                    },
                    {
                        "content": "昭通3电信外网核心交换机版本审计",
                        "id": "dbcd50dc650542cbbc753e96a1ac8c9e",
                        "modifydate": "2017-06-27 12:34:50",
                        "title": "昭通3电信外网核心交换机版本审计",
                        "createuser": null,
                        "source": "北斗系统",
                        "zhaiyao": "昭通3电信外网核心交换机版本审计",
                        "createdate": "2017-06-27 12:28:37",
                        "ispublication": 1,
                        "type": "网络故障",
                        "version": 1
                    },
                    {
                        "content": "北京联通7割接今晚0点割接 ，上海",
                        "id": "fa30e8eb2b874e37a2f6c62d4d568fb9",
                        "modifydate": "2017-06-27 12:35:12",
                        "title": "中途岛—北京4电信200G传输专线调试并启用",
                        "createuser": null,
                        "source": "北斗系统",
                        "zhaiyao": "中途岛—北京4电信200G传输专线调试并启用",
                        "createdate": "2017-06-27 12:11:17",
                        "ispublication": 1,
                        "type": "机房割接",
                        "version": 4
                    }
                ]
            });
        }, 500);
    },

    /**
     * 查询通告详情
     */
    "POST /api/mnProclamation/view": function(req, res) {
        setTimeout(function() {
            res.json({
                "code": "success",
                "msg": "",
                "data": {
                    "content": "呼和浩特有线割接 割接时间：2017.6.13（本周二）凌晨0：00-0：30",
                    "id": "793262709af743b2a8e6929b3ad82752",
                    "modifydate": "2017-06-27 12:34:39",
                    "title": "呼和浩特有线割接",
                    "createuser": null,
                    "source": "北斗系统",
                    "zhaiyao": "呼和浩特有线割接 割接时间：2017.6.13（本周二）",
                    "createdate": "2017-06-27 12:29:06",
                    "ispublication": 1,
                    "type": "机房割接",
                    "version": 4
                }
            });
        }, 500);
    },
}