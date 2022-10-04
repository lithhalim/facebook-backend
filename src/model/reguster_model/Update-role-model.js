const {STRING,TEXT}=require("sequelize")

const database=require("../../database/database")

const reguster = database.define('updateroles', {
    // Model attributes are defined here
    regusterid:{
      type:STRING,
    },
    fullName: {
      type:STRING,
    },
    updateRole:{//ENUM MEAN YOU NEED TO SELECT ON OF THISE JUST YOU CANT INSERT ANOTHER TYPE
        type:STRING
    },
    image: {
      type: TEXT,//String Varchar(3360)
      defaultValue:"https://thumbs.dreamstime.com/z/user-icon-vector-male-person-symbol-profile-circle-avatar-sign-user-icon-vector-male-person-symbol-profile-circle-avatar-sign-115922533.jpg",
      // allowNull defaults to true
    },
  }, {
    timestamps: false
  });



module.exports=reguster