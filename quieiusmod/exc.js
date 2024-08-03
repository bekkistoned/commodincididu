     > rs.info()
     {
         "set" : "myReplicaSet",
         "date" : ISODate("2024-06-22T02:45:59.556Z"),
         "myState" : 1,
         "term" : NumberLong(1),
         "syncingTo" : "",
         "syncSourceHost" : "",
         "syncSourceId" : -1,
         "heartbeatIntervalMillis" : NumberLong(2000),
         "majorityVoteCount" : 2,
         "writeMajorityCount" : 2,
         "members" : [
             {
                 "_id" : 0,
                 "name" : "mongo1:27017",
                 "health" : 1,
                 "state" : 1,
                 "stateStr" : "PRIMARY",
                 "uptime" : 138232,
                 "optime" : Timestamp(1657391151, 1),
                 "optimeDate" : ISODate("2024-06-22T02:45:51Z"),
                 "electionTime" : Timestamp(1657386220, 2),
                 "electionDate" : ISODate("2024-06-22T01:30:20Z"),
                 "configVersion" : 3,
                 "self" : true,
                 "lastHeartbeat" : ISODate("2024-06-22T02:45:58.762Z"),
                 "lastHeartbeatRecv" : ISODate("2024-06-22T02:45:58.727Z"),
                 "pingMs" : NumberLong(0),
                 "syncingTo" : "",
                 "infoMessage" : "",
                 "configVersion" : 3
             },
             {
                 "_id" : 1,
                 "name" : "mongo2:27017",
                 "health" : 1,
                 "state" : 2,
                 "stateStr" : "SECONDARY",
                 "uptime" : 134998,
                 "optime" : Timestamp(1657391151, 1),
                 "optimeDate" : ISODate("2024-06-22T02:45:51Z"),
                 "syncingTo" : "mongo1:27017",
                 ...
             }
         ],
         "ok" : 1,
         ...
     }
     