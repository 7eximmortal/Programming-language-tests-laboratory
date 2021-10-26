let user = {
    name: `Vlad`,
    printer: function() {
        console.log(this);
    },
};

user.printer();