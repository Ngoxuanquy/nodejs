module.exports = {
    mutilOj: function(mogos){
        return mogos.map(mo => mo.toObject());
    },
    muti: function(mogo) {
        return mogo ? mogo.toObject() : mogo;

    }
}