const getTheTitles = function(obj) {
    let titles = [];
    obj.forEach(ele => {
        titles.push(ele.title);
    });
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
